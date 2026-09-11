"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const whatsappMessage = encodeURIComponent("Halo Lesinaja, saya sedang persiapan SKD CPNS dan ingin tanya soal kelasnya. Bisa kirim info jadwal dan format belajar yang tersedia?");
const whatsappUrl = `https://wa.me/6281263699885?text=${whatsappMessage}`;

const issues = [
  ["Bingung mulai dari mana.", "Semua terasa penting. Akhirnya belajarnya loncat-loncat."],
  ["Salah, lalu lanjut lagi.", "Tahu jawaban benar, tapi nggak tahu letak salahnya."],
  ["Paham saat dibahas. Macet saat sendiri.", "Kamu butuh penjelasan yang cocok dengan cara berpikirmu."],
];

const subjects = [
  ["TWK", "Wawasan Kebangsaan", "Pahami konteks supaya lebih mudah membaca arah soal.", ["Nasionalisme", "Integritas", "Pilar negara"]],
  ["TIU", "Intelegensia Umum", "Pahami konsep, lalu kerjakan dengan langkah lebih ringkas.", ["Numerik", "Verbal", "Logika"]],
  ["TKP", "Karakteristik Pribadi", "Pahami kenapa satu pilihan nilainya lebih tinggi.", ["Pelayanan", "Profesionalisme", "Sosial budaya"]],
] as const;

const methods = [
  ["Paham", "Dengar penjelasan", "Konsep dibahas dari dasar dengan cara yang mudah diikuti."],
  ["Coba", "Coba kerjakan", "Latihan dipilih sesuai bagian yang ingin diperkuat."],
  ["Bedah", "Bahas kesalahan", "Cari letak salahnya, bukan cuma lihat kunci."],
  ["Ulang", "Latih lagi", "Ulangi sampai lebih cepat dan yakin."],
];

const faqs = [
  ["Cocok buat yang baru mulai?", "Cocok. Kita mulai dari kemampuanmu sekarang."],
  ["Offline atau online?", "Utamanya offline di Pontianak. Di luar kota bisa ikut online."],
  ["Berapa lama satu sesi?", "Sekitar 90 menit. Bisa lebih jika pembahasannya belum selesai."],
  ["Berapa kali pertemuan?", "Fleksibel, sesuai target dan bagian yang ingin diperkuat."],
  ["Ada tryout SKD?", "Ada. Hasilnya dibahas untuk menentukan fokus berikutnya."],
];

export function PrivateLessonsClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const [ready, setReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setReady(true);
    const revealItems = document.querySelectorAll<HTMLElement>(".private-landing [data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));

    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className={ready ? "private-content private-ready" : "private-content"}>
      <nav className="private-subnav" aria-label="Bagian Les Privat">
        <div className="private-scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
        <div className="private-shell private-subnav-inner">
          <span>Les Privat SKD</span>
          <div><a href="#pengajar">Pengajar</a><a href="#program">Program</a><a href="#metode">Cara belajar</a><a href="#kelas">Kelas</a><a href="#faq">FAQ</a></div>
          <a className="private-subnav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Tanya kelas ↗</a>
        </div>
      </nav>

      <section className="private-hero" id="top">
        <div className="private-shell private-hero-grid">
          <div>
            <p className="private-kicker">Bimbel SKD CPNS · Pontianak</p>
            <h1>Sudah latihan.<br /><em>Skor</em> belum naik?</h1>
            <p className="private-hero-lead">Kamu mungkin bukan kurang rajin. Kamu cuma butuh pengajar yang tahu apa yang perlu diperbaiki.</p>
            <div className="private-actions">
              <a className="private-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Tanya jadwal kelas</a>
              <a className="private-button private-button-outline" href="#program">Lihat cara belajarnya</a>
            </div>
          </div>
          <aside className="private-hero-aside" aria-label="Informasi kelas">
            <div className="private-aside-index"><span>Informasi / 2026</span><b>01</b></div>
            <h2>Persiapan CPNS nggak harus sendirian.</h2>
            <p>Belajar bareng pengajar dengan 5+ tahun pengalaman di SKD.</p>
            <div className="private-meta"><span><b>Format</b> Offline + online</span><span><b>Lokasi</b> Pontianak</span><span><b>Durasi</b> ±90 menit</span></div>
          </aside>
          <div className="private-hero-foot"><strong>5+ tahun mendampingi peserta SKD</strong><span>TWK / TIU / TKP</span></div>
        </div>
      </section>

      <div className="private-marquee" aria-hidden="true"><div><span>Bank soal gampang dicari. Pengajar yang ngerti cara belajarmu, belum tentu.</span><span>Bank soal gampang dicari. Pengajar yang ngerti cara belajarmu, belum tentu.</span></div></div>

      <section className="private-section">
        <div className="private-shell private-problem-layout">
          <aside className="private-problem-side" data-reveal><span>?</span><p>Video dan bank soal membantu. Saat mentok, kamu tetap butuh pengajar yang tahu letak masalahnya.</p></aside>
          <div>
            <p className="private-kicker" data-reveal>Kalau belajarnya masih sendiri</p>
            <h2 className="private-section-title" data-reveal>Capeknya bukan cuma soal. Tapi nggak tahu harus tanya ke siapa.</h2>
            <div className="private-issue-list">
              {issues.map(([title, description], index) => <article className="private-issue" key={title} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="private-section private-teachers" id="pengajar">
        <div className="private-shell">
          <div className="private-section-head"><div><p className="private-kicker" data-reveal>Pengajar</p><h2 className="private-section-title" data-reveal>Belajar bareng pengajar yang paham SKD.</h2></div><p className="private-section-intro" data-reveal>Saat mentok, ada yang menjelaskan sampai nyambung.</p></div>
          <article className="private-teacher-row" data-reveal>
            <figure className="private-teacher-photo"><Image src="/les-privat/wisnu-arsa.jpg" alt="Wisnu Arsa" width={852} height={1280} sizes="(max-width: 720px) calc(100vw - 28px), 38vw" /></figure>
            <div className="private-teacher-copy"><div><p className="private-teacher-role">ASN · Pengajar TWK & TKP</p><h3>Wisnu Arsa</h3><p>Wisnu adalah ASN dan pengajar TWK–TKP dengan pengalaman lebih dari 5 tahun. Ia juga lama mengajar di bimbel besar seperti Ruangguru dan terbiasa menghadapi banyak tipe siswa. Di kelas, TWK dibahas lewat konteks supaya nggak terasa seperti hafalan, sedangkan TKP dikupas dari alasan di balik tiap pilihan.</p></div><div className="private-tags"><span>ASN</span><span>5+ tahun mengajar</span><span>Ruangguru</span><span>TWK / TKP</span></div></div>
          </article>
          <article className="private-teacher-row" data-reveal>
            <div className="private-teacher-monogram" aria-hidden="true">EK</div>
            <div className="private-teacher-copy"><div><p className="private-teacher-role">ASN · Pengajar TIU</p><h3>Edi Kurniadi</h3><p>Edi adalah ASN dan pengajar TIU dengan pengalaman lebih dari 5 tahun. Ia lama mengajar di bimbel besar seperti Ruangguru, termasuk 3 tahun dipercaya sebagai Master Teacher Coach. Skor TIU-nya hampir sempurna. Di kelas, ia fokus bikin konsep terasa masuk akal dan langkah pengerjaan lebih ringkas.</p></div><div className="private-tags"><span>ASN</span><span>5+ tahun mengajar</span><span>3 tahun Master Teacher Coach</span><span>TIU</span></div></div>
          </article>
        </div>
      </section>

      <section className="private-section private-subjects" id="program">
        <div className="private-shell">
          <p className="private-kicker" data-reveal>Program belajar</p>
          <h2 className="private-section-title" data-reveal>Bukan cuma bahas soal. Kamu diajari caranya.</h2>
          <p className="private-section-intro" data-reveal>TWK, TIU, dan TKP punya pola berbeda. Cara belajarnya juga.</p>
          <div className="private-subject-list">
            {subjects.map(([code, title, description, focus]) => <article className="private-subject-row" key={code} data-reveal><div className="private-subject-code">{code}</div><div><h3>{title}</h3><p>{description}</p></div><div className="private-tags" aria-label={`Fokus ${code}`}>{focus.map((item) => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="private-section" id="metode">
        <div className="private-shell">
          <div className="private-method-head"><div><p className="private-kicker" data-reveal>Cara belajar</p><h2 className="private-section-title" data-reveal>Ada yang ngajarin. Ada yang mengoreksi.</h2></div><p data-reveal>Supaya kamu nggak terus bertanya: “Aku salah di mana?”</p></div>
          <div className="private-method-flow" data-reveal>
            {methods.map(([label, title, description], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")} / {label}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="private-section private-section-rule">
        <div className="private-shell private-map-layout">
          <figure className="private-learning-map" data-reveal>
            <div className="private-map-label"><span>Contoh catatan latihan</span><span>07 / 12</span></div>
            <div className="private-map-score"><strong>TIU</strong><span>Fokus berikutnya<br />Rasio & perbandingan</span></div>
            <div className="private-skill-bars" role="img" aria-label="Contoh peta latihan: numerik perlu diperkuat, verbal sudah stabil, dan logika perlu latihan kecepatan">
              <div><span>Numerik</span><i><b style={{ width: "46%" }} /></i><small>Ulangi konsep</small></div>
              <div><span>Verbal</span><i><b style={{ width: "82%" }} /></i><small>Sudah stabil</small></div>
              <div><span>Logika</span><i><b style={{ width: "64%" }} /></i><small>Latih kecepatan</small></div>
            </div>
            <figcaption>Contoh tampilan evaluasi. Bukan data peserta.</figcaption>
          </figure>
          <div>
            <p className="private-kicker" data-reveal>Belajar lebih terarah</p><h2 className="private-section-title" data-reveal>Jelas mana yang perlu dikejar.</h2><p className="private-section-intro" data-reveal>Hasil latihan nggak berhenti jadi angka. Pengajar bantu menentukan fokus berikutnya.</p>
            <div className="private-map-points" data-reveal><div><b>01</b><span>Lihat bagian yang masih lemah.</span></div><div><b>02</b><span>Pilih latihan yang dibutuhkan.</span></div><div><b>03</b><span>Cek lagi kemajuannya.</span></div></div>
            <a className="private-text-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Lihat kelas yang tersedia →</a>
          </div>
        </div>
      </section>

      <section className="private-section" id="kelas">
        <div className="private-shell">
          <p className="private-kicker" data-reveal>Format kelas</p><h2 className="private-section-title" data-reveal>Mau belajar langsung atau dari rumah?</h2><p className="private-section-intro" data-reveal>Pilih yang paling cocok dengan lokasi dan jadwalmu.</p>
          <div className="private-format-layout" data-reveal>
            <article className="private-format-main"><span>01 / Program utama</span><h3>Kelas offline</h3><p>Belajar langsung di Pontianak. Bisa tanya dan dikoreksi saat itu juga.</p><ul><li>TWK, TIU, dan TKP</li><li>Latihan + pembahasan</li><li>Tryout SKD</li><li>±90 menit per sesi</li></ul><a className="private-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Tanya jadwal offline</a></article>
            <article className="private-format-side"><span>02 / Lebih fleksibel</span><h3>Kelas online</h3><p>Belajar bareng pengajar dari luar Pontianak.</p><ul><li>Belajar live</li><li>Materi terarah</li><li>Diskusi langsung</li><li>Jadwal dibicarakan</li></ul><a className="private-button private-button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Tanya kelas online</a></article>
          </div>
        </div>
      </section>

      <section className="private-section private-section-rule" id="faq">
        <div className="private-shell private-faq-layout">
          <div><p className="private-kicker" data-reveal>FAQ</p><h2 className="private-section-title" data-reveal>Yang sering ditanyakan.</h2><p className="private-section-intro" data-reveal>Belum terjawab? Langsung chat kami.</p></div>
          <div className="private-faq-list" data-reveal>
            {faqs.map(([question, answer], index) => {
              const expanded = openFaq === index;
              const answerId = `private-faq-${index + 1}`;
              return <article key={question}><button type="button" aria-expanded={expanded} aria-controls={answerId} onClick={() => setOpenFaq(expanded ? -1 : index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i aria-hidden="true">+</i></button><div id={answerId} role="region" aria-label={question} hidden={!expanded}><p>{answer}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="private-final">
        <div className="private-shell"><h2 data-reveal>Nggak perlu nebak lagi harus belajar apa.</h2><div data-reveal><p>Ceritakan target dan bagian tersulit. Kami bantu pilih fokus dan kelasnya.</p><a className="private-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Konsultasi via WhatsApp</a></div></div>
      </section>

      <footer className="private-footer">
        <div className="private-shell private-footer-grid"><div className="private-footer-brand"><Image src="/les-privat/lesinaja-logo.png" width={1555} height={401} alt="Lesinaja" /><span>Bimbel SKD CPNS · Pontianak</span></div><div>WhatsApp<br /><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">0812 6369 9885</a></div><div>Instagram<br /><a href="https://instagram.com/lesinaja" target="_blank" rel="noopener noreferrer">@lesinaja</a></div><div>© {new Date().getFullYear()}</div></div>
      </footer>

      <a className="private-mobile-action" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Tanya kelas <span aria-hidden="true">↗</span></a>
    </div>
  );
}
