"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, GripVertical, RotateCcw, RotateCw, Undo2, X } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { StaticLink } from "@/components/static-link";
import { SILOGISME_QUESTIONS as QUESTIONS } from "@/lib/silogisme-content";
import { achieves, category, conversionCandidates, equivalent, equivalentForms, format, operate, type Expression, type Operation } from "@/lib/silogisme-engine";
import "./silogisme-game.css";

type Card = { id: string; label: string; origin: Expression; expression: Expression };
type Snapshot = { cards: Card[]; log: string[]; solved: boolean };
type Animation = { sources: string[]; result: Extract<Operation, { ok: true }>; phase: number };
const STORAGE = "lesinaja.silogisme.v1";
const initialChoices = (index: number) => QUESTIONS[index].premises.map((p, i) => (index + i + 1) % conversionCandidates(p.expression).length);

export function SilogismeGameClient({ onBack }: { onBack?: () => void }) {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<"conversion" | "board" | "summary">("conversion");
  const [choices, setChoices] = useState<number[]>(() => initialChoices(0));
  const [confirmed, setConfirmed] = useState<boolean[]>([]);
  const [rowErrors, setRowErrors] = useState<Record<number, string>>({});
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [notice, setNotice] = useState({ type: "info", text: "Putar pilihan simbol, lalu tekan ✓ untuk memeriksa setiap premis." });
  const [log, setLog] = useState<string[]>([]);
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [animation, setAnimation] = useState<Animation | null>(null);
  const [solved, setSolved] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [dragged, setDragged] = useState<string | null>(null);
  const timers = useRef<number[]>([]);
  const sequence = useRef(0);
  const board = useRef<HTMLDivElement>(null);
  const touch = useRef<{ id: string; x: number; y: number; active: boolean } | null>(null);
  const question = QUESTIONS[index];
  const busy = animation !== null;

  function resetQuestion(next: number) {
    timers.current.forEach(window.clearTimeout); timers.current = [];
    sequence.current = 0;
    setIndex(next); setChoices(initialChoices(next)); setConfirmed([]); setRowErrors({});
    setStage("conversion"); setCards([]); setSelected([]); setLog([]); setSnapshots([]); setSolved(false); setAnimation(null); setDragged(null);
    setNotice({ type: "info", text: "Putar pilihan simbol, lalu tekan ✓ untuk memeriksa setiap premis." });
  }
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE) || "null");
      if (Array.isArray(saved?.completed)) setCompleted(QUESTIONS.filter(q => saved.completed.includes(q.id)).map(q => q.id));
      if (Number.isInteger(saved?.index) && saved.index >= 0 && saved.index < QUESTIONS.length) resetQuestion(saved.index);
    } catch { /* Learning remains usable when storage is unavailable. */ }
    setHydrated(true);
    return () => { timers.current.forEach(window.clearTimeout); };
  }, []);
  useEffect(() => {
    if (hydrated) try { localStorage.setItem(STORAGE, JSON.stringify({ completed, index })); } catch { /* Optional persistence. */ }
  }, [completed, index, hydrated]);

  function confirm(row: number) {
    const premise = question.premises[row];
    const candidate = conversionCandidates(premise.expression)[choices[row]];
    if (equivalent(candidate, premise.expression)) {
      setConfirmed(old => { const next = [...old]; next[row] = true; return next; });
      setRowErrors(old => { const next = { ...old }; delete next[row]; return next; });
      setNotice({ type: "success", text: `Premis ${row + 1} cocok. ${premise.hint}` });
    } else {
      setRowErrors(old => ({ ...old, [row]: premise.hint }));
      setNotice({ type: "error", text: `Konversi premis ${row + 1} belum sesuai. Perhatikan arti simbol dan arah hubungannya.` });
    }
  }
  function launchBoard() {
    if (!question.premises.every((_, i) => confirmed[i])) return;
    setCards(question.premises.map((p, i) => {
      const expression = conversionCandidates(p.expression)[choices[i]];
      return { id: `premise-${i}`, label: `P${i + 1}`, origin: expression, expression };
    }));
    setStage("board"); setSelected([]);
    setNotice({ type: "info", text: "Susun kartu, pilih dua sumber, lalu tekan *. Gunakan ≡ bila sambungannya perlu diubah." });
  }
  function remember() { setSnapshots(old => [...old.slice(-39), { cards, log, solved }]); }
  function cycleEquivalent(card: Card) {
    const forms = equivalentForms(card.origin);
    if (busy || forms.length < 2) return;
    const current = forms.findIndex(e => format(e) === format(card.expression));
    const expression = forms[(current + 1) % forms.length];
    remember();
    setCards(old => old.map(c => c.id === card.id ? { ...c, expression } : c));
    const message = `${card.label}: ${format(card.expression)} ≡ ${format(expression)}`;
    setLog(old => [...old, message]); setNotice({ type: "info", text: `Bentuk berubah, makna tetap sama. ${message}` });
  }
  function choose(id: string) {
    if (busy) return;
    if (selected.includes(id)) setSelected(old => old.filter(i => i !== id));
    else if (selected.length >= 2) setNotice({ type: "info", text: "Dua kartu sudah dipilih. Lepaskan salah satunya untuk mengganti sumber operasi." });
    else setSelected(old => [...old, id]);
  }
  function reorder(source: string, target: string) {
    if (busy || source === target) return;
    setCards(old => {
      const from = old.findIndex(c => c.id === source), to = old.findIndex(c => c.id === target);
      if (from < 0 || to < 0) return old;
      const next = [...old]; const [card] = next.splice(from, 1); next.splice(to, 0, card); return next;
    });
  }
  function move(card: Card, delta: number) {
    const target = cards[cards.findIndex(c => c.id === card.id) + delta];
    if (target) { reorder(card.id, target.id); setNotice({ type: "info", text: `${card.label} digeser ${delta < 0 ? "ke kiri" : "ke kanan"}.` }); }
  }
  function operation() {
    if (busy || selected.length !== 2) return;
    const sources = selected.map(id => cards.find(c => c.id === id)!);
    const result = operate(sources[0].expression, sources[1].expression);
    if (!result.ok) { setNotice({ type: "error", text: result.detail }); return; }
    if (cards.some(c => equivalent(c.expression, result.expression))) {
      setNotice({ type: "info", text: `Hasil ${format(result.expression)} sudah tersedia di papan. Pilih sambungan berikutnya.` }); return;
    }
    if (cards.length >= 40) { setNotice({ type: "info", text: "Papan penuh. Urungkan langkah atau ulangi soal untuk menyusun jalur yang lebih singkat." }); return; }
    remember();
    const sourcesText = sources.map(c => format(c.expression));
    setAnimation({ sources: sourcesText, result, phase: 0 });
    setNotice({ type: "info", text: result.detail });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timers.current = [
      window.setTimeout(() => setAnimation(a => a ? { ...a, phase: 1 } : null), reduced ? 0 : 450),
      window.setTimeout(() => setAnimation(a => a ? { ...a, phase: 2 } : null), reduced ? 0 : 900),
      window.setTimeout(() => {
        const id = `result-${++sequence.current}`;
        setCards(old => [...old, { id, label: `H${sequence.current}`, origin: result.expression, expression: result.expression }]);
        setLog(old => [...old, `${sourcesText.join(" * ")} ⇒ ${format(result.expression)}`]);
        setAnimation(null); setSelected([]);
        if (achieves(result.expression, question.goal)) {
          setSolved(true); setCompleted(old => old.includes(question.id) ? old : [...old, question.id]);
          setNotice({ type: "success", text: `Terbukti: ${question.conclusion}` });
        } else setNotice({ type: "success", text: `Kartu baru ${format(result.expression)} ditambahkan. Semua sumber tetap tersedia.` });
        window.requestAnimationFrame(() => board.current?.scrollTo({ left: board.current.scrollWidth, behavior: reduced ? "instant" : "smooth" }));
      }, reduced ? 0 : 1400),
    ];
  }
  function undo() {
    const last = snapshots.at(-1); if (!last || busy) return;
    setCards(last.cards); setLog(last.log); setSolved(last.solved); setSelected([]); setSnapshots(old => old.slice(0, -1));
    setNotice({ type: "info", text: "Langkah terakhir diurungkan. Kamu dapat mencoba jalur lain." });
  }

  const back = onBack ? <button className="silo-back" onClick={onBack}><ArrowLeft size={16} /> Daftar game</button>
    : <StaticLink className="silo-back" href="/game"><ArrowLeft size={16} /> Daftar game</StaticLink>;

  return <PageFrame eyebrow="TIU / Silogisme" title="Arena Silogisme" description="Ubah kalimat, susun simbol, buktikan kesimpulan." showHeader={false}>
    <div className="silo">
      <header className="silo-hero">
        {back}<p className="silo-kicker">TIU / PENALARAN LOGIS</p><h1>ARENA<br />SILOGISME.</h1>
        <p>Mulai dari fakta. Ikuti panah. Temukan kesimpulan.</p>
        <div className="silo-progress"><span>{completed.length} / {QUESTIONS.length} tantangan terbukti</span><progress value={completed.length} max={QUESTIONS.length} aria-label="Soal yang telah diselesaikan" /></div>
      </header>
      <div className="silo-main">
        <div className="silo-toolbar">
          <label>Soal <select value={index} disabled={busy} onChange={e => resetQuestion(Number(e.target.value))} aria-label="Pilih soal silogisme">{QUESTIONS.map((q, i) => <option key={q.id} value={i}>{completed.includes(q.id) ? "✓ " : ""}{i + 1}. {q.title}</option>)}</select></label>
          <button className="silo-btn" disabled={busy} onClick={() => resetQuestion(index)}><RotateCcw size={16} /> Ulangi soal</button>
        </div>
        <details className="silo-help"><summary>Cara bermain & arti simbol</summary><p>1. Putar kandidat konversi dan konfirmasi dengan ✓. 2. Susun kartu menggunakan pegangan seret atau tombol panah. 3. Pilih dua kartu dan tekan *. Tombol ≡ hanya mengubah bentuk yang setara; p → q tidak boleh dibalik begitu saja menjadi q → p.</p><p>~ = tidak; → = aturan; ∧ = dan; ∨ = atau (boleh keduanya); garis — = sebagian. Fakta * fakta dapat digabung dengan ∧. Dua fakta sebagian belum tentu membahas anggota yang sama. Hasil selalu ditambahkan; sumbernya tetap tersedia.</p><p>Pada kartu sebagian dengan banyak sifat, p — (q ∧ r) berarti ada anggota yang sekaligus p, q, dan r. Kesimpulan tidak boleh berubah menjadi semua.</p></details>
        {stage === "summary" ? <section className="silo-summary"><CheckCircle2 size={48} /><h2>{completed.length === QUESTIONS.length ? "Semua tantangan terbukti!" : "Progres belajarmu tersimpan."}</h2><p>{completed.length} dari {QUESTIONS.length} soal selesai. Pilih soal lain untuk melanjutkan atau ulangi untuk mencoba jalur pembuktian yang berbeda.</p><button className="silo-btn silo-primary" onClick={() => resetQuestion(QUESTIONS.findIndex(q => !completed.includes(q.id)) < 0 ? 0 : QUESTIONS.findIndex(q => !completed.includes(q.id)))}>Kembali berlatih <ArrowRight size={17} /></button></section> : <>
          <div className="silo-question-heading"><div><p className="silo-kicker">TANTANGAN {String(index + 1).padStart(2, "0")} / {question.level}</p><h2>{question.title}</h2></div><span className="silo-stage">{stage === "conversion" ? "01 / KONVERSI" : "02 / OPERASI"}</span></div>
          <section className="silo-symbols" aria-label="Arti simbol">{Object.entries(question.symbols).map(([symbol, meaning]) => <div key={symbol}><code>{symbol}</code><span>{meaning}</span></div>)}</section>
          <div className="silo-goal"><span>TUJUAN</span><p>{question.conclusion}</p>{stage === "board" && <code>{format(question.goal)}</code>}</div>
          <section className="silo-premises" aria-label="Premis dan konversi">
            {question.premises.map((p, row) => {
              const candidates = conversionCandidates(p.expression); const candidate = candidates[choices[row]];
              const locked = stage === "board" || confirmed[row];
              return <div key={`${question.id}-${row}`} className={`silo-premise ${confirmed[row] ? "is-confirmed" : ""}`}>
                <div className="silo-premise-text"><span>P{row + 1}</span><p>{p.text}</p></div>
                <div className="silo-conversion"><code aria-label={`Konversi premis ${row + 1}`}>{format(candidate)}</code>
                  {stage === "conversion" && <><button className="silo-icon" disabled={!!locked} aria-label={`Putar konversi premis ${row + 1}`} onClick={() => { setChoices(old => old.map((v, i) => i === row ? (v + 1) % candidates.length : v)); setRowErrors(old => { const next = { ...old }; delete next[row]; return next; }); }}><RotateCw size={18} /></button>
                    <button className={`silo-icon ${confirmed[row] ? "is-checked" : ""}`} aria-label={confirmed[row] ? `Ubah pilihan premis ${row + 1}` : `Periksa premis ${row + 1}`} onClick={() => confirmed[row] ? setConfirmed(old => old.map((v, i) => i === row ? false : v)) : confirm(row)}><Check size={19} /></button></>}
                  {stage === "board" && <CheckCircle2 size={18} aria-label="Konversi benar" />}
                </div>{rowErrors[row] && <p className="silo-row-error"><X size={14} />{rowErrors[row]}</p>}
              </div>;
            })}
          </section>
          <div className={`silo-notice ${notice.type}`} role="status" aria-live="polite">{notice.type === "success" && <CheckCircle2 size={18} />}{notice.type === "error" && <X size={18} />}<span>{notice.text}</span></div>
          {stage === "conversion" ? <div className="silo-conversion-footer"><span>{question.premises.filter((_, i) => confirmed[i]).length} / {question.premises.length} premis cocok</span><button className="silo-btn silo-primary" disabled={!question.premises.every((_, i) => confirmed[i])} onClick={launchBoard}>Masuk papan simbol <ArrowRight size={18} /></button></div> : <>
            <section className="silo-board-section" aria-label="Papan pembuktian">
              <div className="silo-board-heading"><div><h3>Susun jalurmu.</h3><p>Seret untuk mengurutkan. Pilih dua kartu sebagai sumber operasi.</p></div><button className="silo-btn" disabled={busy || !snapshots.length} onClick={undo}><Undo2 size={16} /> Urungkan</button></div>
              <div className="silo-board" ref={board}
                onPointerMove={e => { const state = touch.current; if (!state) return; if (Math.hypot(e.clientX - state.x, e.clientY - state.y) > 8) state.active = true; if (!state.active) return; setDragged(state.id); const target = document.elementFromPoint(e.clientX, e.clientY)?.closest<HTMLElement>("[data-card]"); if (target?.dataset.card) reorder(state.id, target.dataset.card); const bounds = board.current?.getBoundingClientRect(); if (bounds && (e.clientX > bounds.right - 40 || e.clientX < bounds.left + 40)) board.current?.scrollBy({ left: e.clientX > bounds.right - 40 ? 14 : -14 }); }}
                onPointerUp={() => { if (touch.current) { touch.current = null; setDragged(null); } }}
                onPointerCancel={() => { if (touch.current) { touch.current = null; setDragged(null); } }}
                onLostPointerCapture={() => { if (touch.current) { touch.current = null; setDragged(null); } }}>
                {cards.map((card, position) => <article key={card.id} data-card={card.id} className={`silo-card ${selected.includes(card.id) ? "is-selected" : ""} ${dragged === card.id ? "is-dragged" : ""} ${card.id.startsWith("result") ? "is-result" : ""}`} draggable={!busy}
                  onDragStart={e => { if (busy) { e.preventDefault(); return; } e.dataTransfer.setData("text/plain", card.id); e.dataTransfer.effectAllowed = "move"; setDragged(card.id); }}
                  onDragEnd={() => setDragged(null)} onDragOver={e => e.preventDefault()} onDrop={e => { e.preventDefault(); reorder(e.dataTransfer.getData("text/plain"), card.id); setDragged(null); }}>
                  <div className="silo-card-top"><span>{card.label} · {category(card.expression)}</span><button className="silo-grip silo-icon" aria-label={`Seret ${card.label}, atau gunakan tombol panah`} disabled={busy}
                    onKeyDown={e => { if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); move(card, e.key === "ArrowLeft" ? -1 : 1); } }}
                    onPointerDown={e => { if (e.pointerType === "mouse") return; e.preventDefault(); touch.current = { id: card.id, x: e.clientX, y: e.clientY, active: false }; board.current?.setPointerCapture(e.pointerId); }}><GripVertical size={17} /></button></div>
                  <button className="silo-card-select" disabled={busy} aria-pressed={selected.includes(card.id)} aria-label={`Pilih kartu ${card.label}: ${format(card.expression)}`} onClick={() => choose(card.id)}><code>{format(card.expression)}</code><span>{selected.includes(card.id) ? "Dipilih" : "Pilih kartu"}</span></button>
                  <div className="silo-card-controls"><button className="silo-icon" aria-label={`Geser ${card.label} ke kiri`} disabled={busy || position === 0} onClick={() => move(card, -1)}><ArrowLeft size={15} /></button><button className="silo-equals" aria-label={`Ubah bentuk ekuivalen ${card.label}`} disabled={busy || equivalentForms(card.origin).length < 2} onClick={() => cycleEquivalent(card)}>≡ <span>Ubah bentuk</span></button><button className="silo-icon" aria-label={`Geser ${card.label} ke kanan`} disabled={busy || position === cards.length - 1} onClick={() => move(card, 1)}><ArrowRight size={15} /></button></div>
                </article>)}
              </div>
              <div className="silo-operation-bar"><p>{selected.length} / 2 kartu dipilih</p><button className="silo-btn" disabled={busy || !selected.length} onClick={() => setSelected([])}>Lepas pilihan</button><button className="silo-btn silo-operate" disabled={busy || selected.length !== 2} onClick={operation}><span aria-hidden="true">*</span> {busy ? "Mengoperasikan…" : "Operasikan"}</button></div>
              {animation && <div className={`silo-animation phase-${animation.phase}`} aria-label="Animasi penarikan kesimpulan"><div className="silo-animation-title">{animation.result.title} · Cocokkan {animation.result.match}</div><div className="silo-equation"><code className="silo-source">{animation.sources[0]}</code><b>*</b><code className="silo-source">{animation.sources[1]}</code><span className="silo-arrow">⇒</span><code className="silo-new-fact">{format(animation.result.expression)}</code></div><p>{["Temukan simbol penghubung yang cocok.", "Jalankan aturan pada informasi yang tersedia.", "Tambahkan hasil baru, pertahankan semua sumber."][animation.phase]}</p></div>}
            </section>
            {solved && <section className="silo-victory"><CheckCircle2 size={30} /><div><h3>Kesimpulan terbukti!</h3><p>{question.conclusion}</p></div><button className="silo-btn silo-primary" onClick={() => index < QUESTIONS.length - 1 ? resetQuestion(index + 1) : setStage("summary")}>{index < QUESTIONS.length - 1 ? "Soal berikutnya" : "Lihat hasil"}<ArrowRight size={18} /></button></section>}
            {log.length > 0 && <section className="silo-log" aria-label="Jejak pembuktian"><h3>Jejak pembuktian</h3><ol>{log.map((step, i) => <li key={`${i}-${step}`}><span>{String(i + 1).padStart(2, "0")}</span><code>{step}</code></li>)}</ol></section>}
          </>}
        </>}
      </div>
    </div>
  </PageFrame>;
}
