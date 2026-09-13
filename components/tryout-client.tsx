"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Check, Clock3, Play } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EXAM_PACKAGES, MINI_TRYOUT_PACKAGES, getPackage, getQuestion } from "@/lib/content";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { bestScore, scoreAttempt } from "@/lib/scoring";
import { clearSessionOpen, markSessionOpen, shouldOpenSession } from "@/lib/session-navigation";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, AttemptResult, Question } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { ExamShell, useExamKeyboard } from "./exam-shell";
import { QuestionCard } from "./question-card";
import { ResultView } from "./result-view";

function timeLabel(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return [hours, minutes, seconds].map((item) => String(item).padStart(2, "0")).join(":");
}

function currentTime() {
  return Date.now();
}

function packageMaximum(item: { questions: Question[] }) {
  return item.questions.reduce((sum, question) => sum + bestScore(question), 0);
}

export function TryoutClient() {
  const state = useLearningState();
  const [now, setNow] = useState(currentTime);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [sessionOpen, setSessionOpen] = useState(false);
  const [pendingPackageId, setPendingPackageId] = useState<string | null>(null);
  const session = state.activeTryout;
  const examPackage = session?.packageId ? getPackage(session.packageId) : undefined;
  const pendingPackage = pendingPackageId ? getPackage(pendingPackageId) : undefined;
  const pendingIsMini = pendingPackage?.kind === "mini";
  const pendingMaximum = pendingPackage ? packageMaximum(pendingPackage) : 0;
  const questions = useMemo(() => session?.questionIds.map(getQuestion).filter((question): question is Question => Boolean(question)) ?? [], [session]);
  const current = session ? questions[session.currentIndex] : undefined;

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      setSessionOpen(shouldOpenSession("tryout"));
      const requestedPackage = new URLSearchParams(window.location.search).get("package");
      if (requestedPackage && getPackage(requestedPackage)) setPendingPackageId(requestedPackage);
    }, 0);
    return () => window.clearTimeout(initialize);
  }, []);

  const finish = useCallback(() => {
    if (!session || !examPackage) return;
    const completedAt = Date.now();
    const nextResult = scoreAttempt(questions, session.answers, { id: `attempt-${completedAt}`, packageId: examPackage.id, startedAt: session.startedAt, completedAt });
    setResult(nextResult);
    clearSessionOpen();
    setSessionOpen(false);
    updateLearningState((learning) => ({ ...learning, activeTryout: null, attempts: [nextResult, ...learning.attempts].slice(0, 30) }));
  }, [examPackage, questions, session]);

  useEffect(() => {
    if (!session?.deadlineAt) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [session?.deadlineAt]);

  useEffect(() => {
    if (!sessionOpen || !session?.deadlineAt || now < session.deadlineAt) return;
    const automaticSubmit = window.setTimeout(finish, 0);
    return () => window.clearTimeout(automaticSubmit);
  }, [finish, now, session?.deadlineAt, sessionOpen]);

  function start(packageId: string) {
    const selected = getPackage(packageId);
    if (!selected) return;
    const startedAt = currentTime();
    const next: ActiveSession = {
      id: `tryout-${startedAt}`,
      kind: "tryout",
      packageId,
      questionIds: selected.questions.map((question) => question.id),
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt,
      deadlineAt: startedAt + selected.durationMinutes * 60_000,
    };
    setResult(null);
    setNow(startedAt);
    setPendingPackageId(null);
    markSessionOpen("tryout");
    setSessionOpen(true);
    updateLearningState((learning) => ({ ...learning, activeTryout: next, activeDrill: null }));
  }

  function resume() {
    markSessionOpen("tryout");
    setResult(null);
    setSessionOpen(true);
  }

  function select(choiceId: string) {
    if (!session || !current) return;
    updateLearningState((learning) => learning.activeTryout ? { ...learning, activeTryout: { ...learning.activeTryout, answers: { ...learning.activeTryout.answers, [current.id]: choiceId } } } : learning);
  }

  function move(index: number) {
    updateLearningState((learning) => learning.activeTryout ? { ...learning, activeTryout: { ...learning.activeTryout, currentIndex: Math.min(Math.max(index, 0), questions.length - 1) } } : learning);
  }

  function toggleFlag() {
    if (!session || !current) return;
    updateLearningState((learning) => {
      if (!learning.activeTryout) return learning;
      const hasFlag = learning.activeTryout.flagged.includes(current.id);
      return { ...learning, activeTryout: { ...learning.activeTryout, flagged: hasFlag ? learning.activeTryout.flagged.filter((id) => id !== current.id) : [...learning.activeTryout.flagged, current.id] } };
    });
  }

  const answered = session ? Object.keys(session.answers).length : 0;
  const remaining = Math.max(0, (session?.deadlineAt ?? now) - now);
  const isFlagged = Boolean(session && current && session.flagged.includes(current.id));

  useExamKeyboard({
    currentIndex: session?.currentIndex ?? 0,
    questions: sessionOpen ? questions : [],
    onMove: move,
    onSelect: select,
    onToggleFlag: sessionOpen ? toggleFlag : undefined,
  });

  if (result) {
    const source = getPackage(result.packageId)?.questions ?? [];
    return <ResultView result={result} questions={source} onClose={() => setResult(null)} />;
  }

  if (!sessionOpen || !session || !examPackage || !current) {
    return (
      <>
        <section className="border-b border-black">
          <div className="grid border-b border-black md:grid-cols-3">
            {CATEGORIES.map((category) => (
              <div key={category} className="border-b border-black p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-[.14em]">{EXAM_RULES.composition[category]} soal</p>
                <h2 className="mt-4 text-4xl font-black">{category}</h2>
                <p className="mt-2">Ambang {EXAM_RULES.passingScores[category]} · Maks {EXAM_RULES.maximumScores[category]}</p>
              </div>
            ))}
          </div>
          {session && examPackage && current && (
            <div className="grid gap-4 border-b border-black bg-secondary p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-brand-blue">Sesi try out tertunda</p>
                <h2 className="mt-1 text-2xl font-black">{examPackage.title}</h2>
                <p className="mt-1 text-sm">{answered}/{questions.length} soal dijawab · sisa waktu {timeLabel(remaining)}. Memulai paket baru akan menghapus sesi ini.</p>
              </div>
              <Button type="button" onClick={resume} className="h-11 rounded-none">Lanjutkan sesi</Button>
            </div>
          )}
          <div className="grid lg:grid-cols-2">
            {EXAM_PACKAGES.map((item, index) => {
              const attempts = state.attempts.filter((attempt) => attempt.packageId === item.id);
              return (
                <article key={item.id} className="border-b border-black p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs">/{String(index + 1).padStart(2, "0")}</span><span className="border border-black px-2 py-1 font-mono text-xs">100 MENIT</span></div>
                  <h2 className="mt-12 text-4xl font-black tracking-[-.05em]">{item.title}</h2>
                  <p className="mt-3 max-w-lg leading-relaxed">{item.description}</p>
                  <ul className="mt-7 space-y-2 text-sm"><li>✓ 110 soal sesuai komposisi SKD</li><li>✓ Timer tetap berjalan setelah halaman ditutup</li><li>✓ Pembahasan muncul setelah selesai</li></ul>
                  {attempts[0] && <p className="mt-6 border-l-4 border-signal pl-3 text-sm">Skor terakhir: <strong>{attempts[0].totalScore}/550</strong></p>}
                  <Button onClick={() => setPendingPackageId(item.id)} className="mt-8 h-12 w-full rounded-none text-base"><Play /> Mulai {item.title.split(" — ")[0]}</Button>
                </article>
              );
            })}
          </div>
          <div className="border-t border-black bg-secondary p-5 sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div><p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">Paket singkat</p><h2 className="mt-2 text-3xl font-black">MINI TRY OUT</h2></div>
              <p className="font-mono text-xs uppercase">Fokus satu kemampuan</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {MINI_TRYOUT_PACKAGES.map((item) => {
                const attempts = state.attempts.filter((attempt) => attempt.packageId === item.id);
                const maximum = packageMaximum(item);
                return (
                  <article key={item.id} className="border border-black bg-warm-white p-5 sm:p-7">
                    <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs">/MINI</span><span className="border border-black px-2 py-1 font-mono text-xs">{item.durationMinutes} MENIT</span></div>
                    <h3 className="mt-8 text-3xl font-black tracking-[-.05em]">{item.title}</h3>
                    <p className="mt-3 max-w-lg leading-relaxed">{item.description}</p>
                    <ul className="mt-6 space-y-2 text-sm"><li>✓ 30 soal TIU: verbal dan numerik</li><li>✓ Nilai maksimum {maximum} · target latihan TIU 80</li><li>✓ Pembahasan muncul setelah selesai</li></ul>
                    {attempts[0] && <p className="mt-6 border-l-4 border-signal pl-3 text-sm">Skor terakhir: <strong>{attempts[0].totalScore}/{maximum}</strong></p>}
                    <Button onClick={() => setPendingPackageId(item.id)} className="mt-8 h-12 w-full rounded-none text-base"><Play /> Mulai Mini TO</Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <AlertDialog open={Boolean(pendingPackage)} onOpenChange={(open) => { if (!open) setPendingPackageId(null); }}>
          <AlertDialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-none border-black sm:!max-w-2xl">
            <AlertDialogHeader>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-brand-red">{pendingIsMini ? "Simulasi TIU Kedinasan" : "Simulasi CAT SKD CPNS"}</p>
              <AlertDialogTitle className="text-2xl font-black sm:text-3xl">KONFIRMASI MULAI UJIAN</AlertDialogTitle>
              <AlertDialogDescription>{pendingPackage?.title}. Pastikan kamu sudah siap sebelum waktu ujian dimulai.</AlertDialogDescription>
            </AlertDialogHeader>

            <div className="grid border border-black sm:grid-cols-3">
              <div className="border-b border-black p-3 sm:border-b-0 sm:border-r"><span className="block font-mono text-[10px] uppercase">Jumlah soal</span><strong className="mt-1 block text-xl">{pendingPackage?.questions.length ?? 0}</strong></div>
              <div className="border-b border-black p-3 sm:border-b-0 sm:border-r"><span className="block font-mono text-[10px] uppercase">Waktu</span><strong className="mt-1 block text-xl">{pendingPackage?.durationMinutes ?? 0} menit</strong></div>
              <div className="p-3"><span className="block font-mono text-[10px] uppercase">Nilai maksimum</span><strong className="mt-1 block text-xl">{pendingMaximum}</strong></div>
            </div>

            <div className="grid gap-4 text-sm leading-relaxed sm:grid-cols-2">
              <section>
                <h3 className="font-bold uppercase">Komposisi dan skor</h3>
                {pendingIsMini ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>TIU: 30 soal verbal dan numerik.</li>
                    <li>Jawaban benar bernilai 5; salah atau kosong bernilai 0.</li>
                    <li>Nilai maksimum 150; target latihan TIU adalah 80.</li>
                  </ul>
                ) : (
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>TWK: 30 soal, benar 5 dan salah/kosong 0.</li>
                    <li>TIU: 35 soal, benar 5 dan salah/kosong 0.</li>
                    <li>TKP: 45 soal, setiap pilihan bernilai 1–5 dan kosong 0.</li>
                    <li>Ambang umum: TWK 65, TIU 80, dan TKP 166.</li>
                  </ul>
                )}
              </section>
              <section>
                <h3 className="font-bold uppercase">Petunjuk pengerjaan</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Pilih jawaban, pindah melalui palet nomor, dan tandai soal yang masih ragu.</li>
                  <li>Waktu mulai saat tombol <strong>Mulai ujian</strong> ditekan dan tetap berjalan jika halaman ditutup.</li>
                  <li>Ujian dikumpulkan otomatis ketika waktu habis.</li>
                  <li>Setelah dikumpulkan, jawaban tidak dapat diubah.</li>
                </ul>
              </section>
            </div>

            {(session || state.activeDrill) && (
              <p className="border border-brand-red bg-brand-red-soft p-3 text-sm"><strong>Perhatian:</strong> Memulai paket ini akan menghapus sesi {session ? examPackage?.title ?? "try out" : "drill"} yang tertunda.</p>
            )}

            <p className="border-l-4 border-brand-blue bg-secondary p-3 text-xs leading-relaxed">
              {pendingIsMini ? "Mini TO ini adalah latihan mandiri TIU. Target 80 digunakan untuk evaluasi latihan, bukan ambang kelulusan resmi." : "Acuan pelamar umum CPNS TA 2024."} LesinAja tidak berafiliasi dengan BKN dan tidak memuat soal resmi.
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Acuan: <a className="font-bold underline" href="https://jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-321-tahun-2024-tentang-1851" target="_blank" rel="noopener noreferrer">Kepmen PANRB 321/2024</a> dan <a className="font-bold underline" href="https://www.bkn.go.id/storage/2024/08/Peraturan-BKN-Nomor-5-Tahun-2024-tentang-Pedoman-CAT.pdf" target="_blank" rel="noopener noreferrer">Peraturan BKN 5/2024</a>.
            </p>

            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-none border-black" onClick={() => setPendingPackageId(null)}>Kembali</AlertDialogCancel>
              <AlertDialogAction className="rounded-none" onClick={() => pendingPackage && start(pendingPackage.id)}>Mulai ujian</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }

  return (
    <ExamShell
      eyebrow="Mode try out"
      title={examPackage.title}
      session={session}
      questions={questions}
      answered={answered}
      flagged={session.flagged.length}
      onMove={move}
      groupedPalette
      headerMetric={<div className="flex h-10 items-center gap-1.5 bg-brand-blue px-2 font-mono text-xs font-bold text-white sm:px-3 sm:text-sm"><Clock3 className="size-4 text-signal" /><span aria-label={`Sisa waktu ${timeLabel(remaining)}`}>{timeLabel(remaining)}</span></div>}
      headerAction={
        <AlertDialog>
          <AlertDialogTrigger asChild><Button className="h-10 rounded-none bg-signal px-2 text-black hover:bg-signal/80 sm:px-3"><Check /><span className="hidden sm:inline">Kumpulkan</span></Button></AlertDialogTrigger>
          <AlertDialogContent className="rounded-none border-black">
            <AlertDialogHeader><AlertDialogTitle>Kumpulkan try out sekarang?</AlertDialogTitle><AlertDialogDescription>{questions.length - answered} soal masih belum dijawab dan {session.flagged.length} soal ditandai ragu-ragu. Setelah dikumpulkan, jawaban tidak dapat diubah.</AlertDialogDescription></AlertDialogHeader>
            <AlertDialogFooter><AlertDialogCancel className="rounded-none border-black">Kembali mengerjakan</AlertDialogCancel><AlertDialogAction className="rounded-none" onClick={finish}>Ya, lihat hasil</AlertDialogAction></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
      footer={
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
          <Button variant="outline" className="h-11 rounded-none border-black px-3 sm:px-5" aria-keyshortcuts="ArrowLeft" disabled={session.currentIndex === 0} onClick={() => move(session.currentIndex - 1)}><ArrowLeft /><span className="hidden min-[420px]:inline">Sebelumnya</span></Button>
          <Button variant="outline" aria-pressed={isFlagged} aria-keyshortcuts="R" onClick={toggleFlag} className={`h-11 rounded-none border-black px-3 sm:px-5 ${isFlagged ? "bg-signal" : ""}`}><Bookmark className={isFlagged ? "fill-current" : ""} /><span className="hidden min-[420px]:inline">Ragu-ragu</span></Button>
          <span className="hidden font-mono text-xs font-bold sm:block">{session.currentIndex + 1} / {questions.length}</span>
          <Button className="h-11 rounded-none px-3 sm:px-5" aria-keyshortcuts="ArrowRight" disabled={session.currentIndex === questions.length - 1} onClick={() => move(session.currentIndex + 1)}><span className="hidden min-[420px]:inline">Berikutnya</span><ArrowRight /></Button>
        </div>
      }
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Soal {session.currentIndex + 1} / {questions.length}</p>
        <p className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">A–E pilih · R ragu · ← → navigasi</p>
      </div>
      <QuestionCard question={current} selectedId={session.answers[current.id]} onSelect={select} />
    </ExamShell>
  );
}
