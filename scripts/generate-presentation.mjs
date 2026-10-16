import pptxgen from "pptxgenjs";
import path from "node:path";
import fs from "node:fs";

async function createPresentation() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9"; // 13.33 x 7.5 inches
  pres.title = "Dekode TIU CPNS 2027 - Pertemuan 1";
  pres.subject = "Bimbingan Belajar TIU Berbasis FR Kedinasan 2026 & Standar BKN";
  pres.author = "Lesinaja";

  // COLOR PALETTE
  const COLORS = {
    darkBg: "0F172A",       // Slate 900
    darkCard: "1E293B",     // Slate 800
    darkBorder: "334155",   // Slate 700
    lightBg: "F8FAFC",      // Slate 50
    white: "FFFFFF",
    primary: "2563EB",      // Blue 600
    primaryDark: "1D4ED8",  // Blue 700
    primaryLight: "EFF6FF", // Blue 50
    secondary: "0284C7",    // Sky 600
    accentAmber: "D97706",  // Amber 600
    accentAmberLight: "FEF3C7",
    accentEmerald: "059669", // Emerald 600
    accentEmeraldLight: "D1FAE5",
    accentRose: "E11D48",   // Rose 600
    accentRoseLight: "FFE4E6",
    textDark: "0F172A",     // Slate 900
    textMuted: "475569",    // Slate 600
    textLight: "F8FAFC",    // Slate 50
    borderLight: "E2E8F0",  // Slate 200
  };

  // Helper for slide header
  function addSlideHeader(slide, category, title, subtitle) {
    // Badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: 0.45,
      w: 2.8,
      h: 0.32,
      rectRadius: 0.08,
      fill: { color: COLORS.primaryLight },
      line: { color: COLORS.primary, width: 1 },
    });
    slide.addText(category.toUpperCase(), {
      x: 0.8,
      y: 0.45,
      w: 2.8,
      h: 0.32,
      fontFace: "Segoe UI",
      fontSize: 10,
      bold: true,
      color: COLORS.primary,
      align: "center",
      valign: "middle",
    });

    // Title
    slide.addText(title, {
      x: 0.8,
      y: 0.82,
      w: 11.7,
      h: 0.55,
      fontFace: "Segoe UI",
      fontSize: 22,
      bold: true,
      color: COLORS.textDark,
      valign: "top",
    });

    // Subtitle
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.8,
        y: 1.35,
        w: 11.7,
        h: 0.35,
        fontFace: "Segoe UI",
        fontSize: 12,
        color: COLORS.textMuted,
        valign: "top",
      });
    }
  }

  // Helper for bottom footer
  function addSlideFooter(slide, currentSlide, totalSlides = 15) {
    slide.addShape(pres.shapes.LINE, {
      x: 0.8,
      y: 6.9,
      w: 11.73,
      h: 0,
      line: { color: COLORS.borderLight, width: 1 },
    });
    slide.addText("LESINAJA • Program Persiapan Intensif TIU CPNS 2027", {
      x: 0.8,
      y: 6.95,
      w: 8.0,
      h: 0.3,
      fontFace: "Segoe UI",
      fontSize: 9,
      color: COLORS.textMuted,
    });
    slide.addText(`Slide ${currentSlide} dari ${totalSlides}`, {
      x: 10.5,
      y: 6.95,
      w: 2.0,
      h: 0.3,
      fontFace: "Segoe UI",
      fontSize: 9,
      align: "right",
      color: COLORS.textMuted,
    });
  }

  // ==========================================
  // SLIDE 1: COVER
  // ==========================================
  {
    const s1 = pres.addSlide();
    s1.background = { color: COLORS.darkBg };

    // Decorative shape
    s1.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 0.35,
      h: 7.5,
      fill: { color: COLORS.primary },
    });

    // Badge
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.2,
      y: 1.2,
      w: 3.5,
      h: 0.4,
      rectRadius: 0.1,
      fill: { color: "1E3A8A" },
      line: { color: "60A5FA", width: 1 },
    });
    s1.addText("PERTEMUAN PERDANA & ORIENTASI", {
      x: 1.2,
      y: 1.2,
      w: 3.5,
      h: 0.4,
      fontFace: "Segoe UI",
      fontSize: 11,
      bold: true,
      color: "93C5FD",
      align: "center",
      valign: "middle",
    });

    // Main Title
    s1.addText("DEKODE TIU CPNS 2027", {
      x: 1.2,
      y: 1.8,
      w: 11.0,
      h: 1.0,
      fontFace: "Segoe UI",
      fontSize: 40,
      bold: true,
      color: COLORS.white,
    });

    // Subtitle
    s1.addText(
      "Menembus Skor 130+ Melalui Nalar Logis Berbasis Cetak Biru Kedinasan 2026",
      {
        x: 1.2,
        y: 2.85,
        w: 10.5,
        h: 0.7,
        fontFace: "Segoe UI",
        fontSize: 20,
        color: "94A3B8",
      }
    );

    // Divider Line
    s1.addShape(pres.shapes.LINE, {
      x: 1.2,
      y: 3.75,
      w: 10.5,
      h: 0,
      line: { color: "334155", width: 1.5 },
    });

    // 3 Key Highlights Cards
    const highlights = [
      {
        title: "Kematian Tes Hafalan",
        desc: "Sinonim/antonim resmi hilang, digantikan logika analogi & analitis.",
      },
      {
        title: "Laboratorium Kedinasan",
        desc: "Apa yang keluar di Kedinasan 2026 adalah bocoran resmi CPNS 2027.",
      },
      {
        title: "Piramida Nalar BKN",
        desc: "Bukan sekadar rumus instan, melainkan intuisi nalar tahan jebakan.",
      },
    ];

    highlights.forEach((h, idx) => {
      const xPos = 1.2 + idx * 3.65;
      s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: xPos,
        y: 4.1,
        w: 3.4,
        h: 1.6,
        rectRadius: 0.1,
        fill: { color: COLORS.darkCard },
        line: { color: COLORS.darkBorder, width: 1 },
      });
      s1.addText(h.title, {
        x: xPos + 0.25,
        y: 4.25,
        w: 2.9,
        h: 0.35,
        fontFace: "Segoe UI",
        fontSize: 13,
        bold: true,
        color: "60A5FA",
      });
      s1.addText(h.desc, {
        x: xPos + 0.25,
        y: 4.65,
        w: 2.9,
        h: 0.9,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: "CBD5E1",
      });
    });

    // Presenter Label
    s1.addText("LESINAJA ACADEMY • MODUL PERSIAPAN KOMPETENSI DASAR 2026/2027", {
      x: 1.2,
      y: 6.4,
      w: 10.5,
      h: 0.4,
      fontFace: "Segoe UI",
      fontSize: 11,
      color: "64748B",
    });

    s1.addNotes(
      "Selamat datang rekan-rekan calon abdi negara di kelas persiapan TIU CPNS 2027. Di pertemuan perdana ini, kita tidak hanya akan berkenalan, tetapi kita akan membongkar rahasia dapur CAT BKN: mengapa cara belajar Anda selama ini mungkin sudah usang, dan bagaimana strategi baru yang tepat untuk menembus skor TIU 130 ke atas."
    );
  }

  // ==========================================
  // SLIDE 2: PROFIL PENGAJAR & KOMITMEN
  // ==========================================
  {
    const s2 = pres.addSlide();
    s2.background = { color: COLORS.lightBg };
    addSlideHeader(
      s2,
      "Perkenalan Pengajar",
      "Mengenal Mentor & Komitmen Belajar Anda",
      "Membangun fondasi logika dan ketahanan mental di depan layar CAT BKN"
    );

    // Left Card: Instructor Persona
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: 1.85,
      w: 4.5,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });

    s2.addShape(pres.shapes.OVAL, {
      x: 2.45,
      y: 2.15,
      w: 1.2,
      h: 1.2,
      fill: { color: COLORS.primaryLight },
      line: { color: COLORS.primary, width: 2 },
    });
    s2.addText("MENTOR", {
      x: 2.45,
      y: 2.55,
      w: 1.2,
      h: 0.4,
      fontFace: "Segoe UI",
      fontSize: 11,
      bold: true,
      color: COLORS.primary,
      align: "center",
    });

    s2.addText("Pengajar Spesialis TIU & Logika Skolastik", {
      x: 1.0,
      y: 3.5,
      w: 4.1,
      h: 0.4,
      fontFace: "Segoe UI",
      fontSize: 14,
      bold: true,
      color: COLORS.textDark,
      align: "center",
    });

    s2.addText(
      "Berpengalaman mendampingi ratusan peserta seleksi Kedinasan (STAN, STIS, IPDN, STIN) dan CPNS kementerian tembus passing grade dengan skor TIU memuaskan.",
      {
        x: 1.1,
        y: 4.0,
        w: 3.9,
        h: 1.2,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textMuted,
        align: "center",
      }
    );

    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.1,
      y: 5.3,
      w: 3.9,
      h: 1.1,
      rectRadius: 0.08,
      fill: { color: COLORS.primaryLight },
      line: { color: COLORS.primary, width: 1 },
    });
    s2.addText(
      '"Bukan sekadar memberi rumus instan, tetapi melatih intuisi logika agar Anda kebal terhadap jebakan variasi soal apa pun di layar CAT."',
      {
        x: 1.2,
        y: 5.38,
        w: 3.7,
        h: 0.95,
        fontFace: "Segoe UI",
        fontSize: 10,
        italic: true,
        color: COLORS.primaryDark,
        align: "center",
      }
    );

    // Right Cards: 3 Commitments
    const commitments = [
      {
        num: "01",
        title: "Kurikulum Berbasis Field Report (FR) Aktual",
        desc: "Setiap materi yang dipelajari disarikan langsung dari pola soal CAT BKN Kedinasan 2024–2026 dan CPNS terbaru. Tidak ada materi usang yang membuang waktu.",
        color: COLORS.primary,
        light: COLORS.primaryLight,
      },
      {
        num: "02",
        title: "Metode Nalar Bertingkat (Bukan Hitung Buta)",
        desc: "Mengajarkan cara membaca pola, eliminasi opsi cepat, dan penggunaan identitas aljabar untuk memotong waktu hitung dari 2 menit menjadi 20 detik.",
        color: COLORS.accentEmerald,
        light: COLORS.accentEmeraldLight,
      },
      {
        num: "03",
        title: "Diagnosis Berkala & Pendampingan Tuntas",
        desc: "Evaluasi individual berbasis aplikasi Lesinaja untuk mendeteksi titik lemah kognitif (Verbal, Numerik, atau Figural) sebelum ujian sesungguhnya.",
        color: COLORS.accentAmber,
        light: COLORS.accentAmberLight,
      },
    ];

    commitments.forEach((c, idx) => {
      const yPos = 1.85 + idx * 1.65;
      s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 5.6,
        y: yPos,
        w: 6.9,
        h: 1.45,
        rectRadius: 0.1,
        fill: { color: COLORS.white },
        line: { color: COLORS.borderLight, width: 1.5 },
      });

      // Number badge
      s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 5.85,
        y: yPos + 0.25,
        w: 0.7,
        h: 0.5,
        rectRadius: 0.08,
        fill: { color: c.light },
        line: { color: c.color, width: 1 },
      });
      s2.addText(c.num, {
        x: 5.85,
        y: yPos + 0.32,
        w: 0.7,
        h: 0.4,
        fontFace: "Segoe UI",
        fontSize: 12,
        bold: true,
        color: c.color,
        align: "center",
      });

      // Title & Desc
      s2.addText(c.title, {
        x: 6.75,
        y: yPos + 0.2,
        w: 5.5,
        h: 0.35,
        fontFace: "Segoe UI",
        fontSize: 13,
        bold: true,
        color: COLORS.textDark,
      });
      s2.addText(c.desc, {
        x: 6.75,
        y: yPos + 0.55,
        w: 5.5,
        h: 0.8,
        fontFace: "Segoe UI",
        fontSize: 10.5,
        color: COLORS.textMuted,
      });
    });

    addSlideFooter(s2, 2);
    s2.addNotes(
      "Selama 15 pertemuan ke depan, tugas saya bukan membuat Anda menjadi seorang matematikawan, melainkan melatih Anda menjadi pemikir taktis di depan layar komputer CAT. Kita akan membongkar logika di balik setiap soal sehingga Anda bisa menyelesaikannya dengan cepat, tenang, dan akurat."
    );
  }

  // ==========================================
  // SLIDE 3: ICEBREAKER / REALITY CHECK
  // ==========================================
  {
    const s3 = pres.addSlide();
    s3.background = { color: COLORS.lightBg };
    addSlideHeader(
      s3,
      "Reality Check",
      "Uji Nalar Cepat 30 Detik: Seberapa Kuat Pemahaman Dasar Anda?",
      "Soal baru BKN tidak menguji angka rumit, melainkan ketajaman konsep dasar di bawah tekanan waktu"
    );

    // Box A
    s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0,
      y: 1.9,
      w: 5.4,
      h: 2.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.primary, width: 2 },
    });
    s3.addText("KASUS A", {
      x: 1.3,
      y: 2.1,
      w: 2.0,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.primary,
    });
    s3.addText("(3 / 2) / 5", {
      x: 1.3,
      y: 2.5,
      w: 4.8,
      h: 0.8,
      fontFace: "Segoe UI",
      fontSize: 32,
      bold: true,
      color: COLORS.textDark,
      align: "center",
    });
    s3.addText("Tiga per dua, lalu dibagi lima\nHasil = 3 / 10 = 0,30", {
      x: 1.3,
      y: 3.4,
      w: 4.8,
      h: 0.9,
      fontFace: "Segoe UI",
      fontSize: 12,
      color: COLORS.textMuted,
      align: "center",
    });

    // Box B
    s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.9,
      y: 1.9,
      w: 5.4,
      h: 2.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.accentRose, width: 2 },
    });
    s3.addText("KASUS B", {
      x: 7.2,
      y: 2.1,
      w: 2.0,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.accentRose,
    });
    s3.addText("3 / (2 / 5)", {
      x: 7.2,
      y: 2.5,
      w: 4.8,
      h: 0.8,
      fontFace: "Segoe UI",
      fontSize: 32,
      bold: true,
      color: COLORS.textDark,
      align: "center",
    });
    s3.addText("Tiga dibagi oleh dua per lima\nHasil = 15 / 2 = 7,50", {
      x: 7.2,
      y: 3.4,
      w: 4.8,
      h: 0.9,
      fontFace: "Segoe UI",
      fontSize: 12,
      color: COLORS.textMuted,
      align: "center",
    });

    // Bottom Lesson Box
    s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0,
      y: 4.95,
      w: 11.3,
      h: 1.7,
      rectRadius: 0.1,
      fill: { color: COLORS.accentAmberLight },
      line: { color: COLORS.accentAmber, width: 1.5 },
    });
    s3.addText("PELAJARAN PENTING DI LAYAR CAT BKN:", {
      x: 1.3,
      y: 5.1,
      w: 10.7,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 13,
      bold: true,
      color: COLORS.accentAmber,
    });
    s3.addText(
      "1. Angka-angka yang digunakan sangat kecil dan sederhana (hanya 3, 2, dan 5), namun selisih hasilnya mencapai 25 kali lipat (0,30 vs 7,50)!\n" +
      "2. Peserta yang menghafal 'trik membalik pecahan' tanpa paham tanda kurung/garis pecahan utama sering salah pilih opsi distraktor.\n" +
      "3. Di bawah stres waktu ujian, BKN sengaja mengeksploitasi celah kebiasaan menghitung terburu-buru peserta.",
      {
        x: 1.3,
        y: 5.5,
        w: 10.7,
        h: 1.0,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textDark,
      }
    );

    addSlideFooter(s3, 3);
    s3.addNotes(
      "Sebelum kita masuk ke teori, coba perhatikan soal di depan. Banyak peserta menganggap ini soal sepele. Tapi di layar CAT, saat waktu berdetik mundur, otak sering mengalami 'blank' antara 3/10 dan 15/2. Soal baru BKN tidak menguji angka rumit, melainkan menguji ketajaman nalar Anda dalam mengeksekusi konsep dasar di bawah tekanan waktu."
    );
  }

  // ==========================================
  // SLIDE 4: FLASHBACK 1: ERA KLASIK MENUJU TRANSISI (2021-2023)
  // ==========================================
  {
    const s4 = pres.addSlide();
    s4.background = { color: COLORS.lightBg };
    addSlideHeader(
      s4,
      "Flashback TIU (Bagian 1)",
      "Kilas Balik 2021–2023: Titik Awal Kematian Tes Hafalan",
      "Pembersihan materi hafalan kosakata kamus menuju instrumen nalar terstruktur"
    );

    // Left Column: 2021
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: 1.85,
      w: 5.7,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.1,
      y: 2.1,
      w: 2.2,
      h: 0.35,
      rectRadius: 0.08,
      fill: { color: COLORS.primaryLight },
      line: { color: COLORS.primary, width: 1 },
    });
    s4.addText("TAHUN 2021", {
      x: 1.1,
      y: 2.15,
      w: 2.2,
      h: 0.3,
      fontFace: "Segoe UI",
      fontSize: 11,
      bold: true,
      color: COLORS.primary,
      align: "center",
    });

    s4.addText("PermenPAN-RB No. 27/2021 & KepmenPAN-RB No. 1023/2021", {
      x: 1.1,
      y: 2.55,
      w: 5.1,
      h: 0.55,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.textDark,
    });

    s4.addText(
      "• HILANGNYA SINONIM & ANTONIM MURNI:\n" +
      "  Secara resmi menghapus uji hafalan kamus KBBI (seperti 'evokasi = ...', 'impresif >< ...').\n\n" +
      "• FOKUS RESMI KEMAMPUAN VERBAL:\n" +
      "  Hanya ada 3 pilar resmi: Analogi (hubungan kata), Silogisme (penarikan kesimpulan), dan Analitis (informasi bersyarat).\n\n" +
      "• AMBANG BATAS TIU 80 POIN:\n" +
      "  Menetapkan standar minimal 16 soal benar dari total 35 soal (skor 80 dari maksimal 175).",
      {
        x: 1.1,
        y: 3.15,
        w: 5.1,
        h: 3.2,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textMuted,
      }
    );

    // Right Column: 2022-2023
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.8,
      y: 1.85,
      w: 5.7,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 7.1,
      y: 2.1,
      w: 2.6,
      h: 0.35,
      rectRadius: 0.08,
      fill: { color: COLORS.accentEmeraldLight },
      line: { color: COLORS.accentEmerald, width: 1 },
    });
    s4.addText("TAHUN 2022 – 2023", {
      x: 7.1,
      y: 2.15,
      w: 2.6,
      h: 0.3,
      fontFace: "Segoe UI",
      fontSize: 11,
      bold: true,
      color: COLORS.accentEmerald,
      align: "center",
    });

    s4.addText("Masa Transisi: Pergeseran Logika Kuantitatif", {
      x: 7.1,
      y: 2.55,
      w: 5.1,
      h: 0.55,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.textDark,
    });

    s4.addText(
      "• PENINGKATAN SOAL PERBANDINGAN KUANTITATIF:\n" +
      "  Soal numerik mulai bergeser dari hitungan aritmetika biasa menjadi penentuan hubungan nilai X dan Y (X > Y, X < Y, atau tak dapat ditentukan).\n\n" +
      "• PERGESERAN ANALITIS DUDUK & JADWAL:\n" +
      "  Soal analitis mulai menguji urutan tempat duduk meja bundar dan pembagian jadwal piket dengan 4–5 batasan syarat.\n\n" +
      "• FENOMENA WAKTU TERKURAS:\n" +
      "  Banyak peserta mulai gagal memenuhi passing grade bukan karena salah hitung, melainkan kehabisan waktu membaca narasi panjang.",
      {
        x: 7.1,
        y: 3.15,
        w: 5.1,
        h: 3.2,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textMuted,
      }
    );

    addSlideFooter(s4, 4);
    s4.addNotes(
      "Mari kita lihat ke belakang. Sebelum tahun 2021, orang bisa lolos TIU hanya dengan menghafal kamus tebal untuk menjawab soal sinonim-antonim. Namun melalui PermenPANRB 27 Tahun 2021, pemerintah secara sadar mencabut materi tersebut. Mengapa? Karena birokrasi tidak butuh kamus berjalan; birokrasi butuh aparatur yang mampu bernalar kritis."
    );
  }

  // ==========================================
  // SLIDE 5: FLASHBACK 2: ERA LOMPATAN HOTS (2024-2025)
  // ==========================================
  {
    const s5 = pres.addSlide();
    s5.background = { color: COLORS.lightBg };
    addSlideHeader(
      s5,
      "Flashback TIU (Bagian 2)",
      "Kilas Balik 2024–2025: Ledakan HOTS & Mandat UU ASN Baru",
      "Standardisasi bank soal BKN berbasis Item Response Theory (IRT)"
    );

    const cards24 = [
      {
        title: "UU ASN No. 20 Tahun 2023",
        badge: "PAYUNG HUKUM UTAMA",
        badgeColor: COLORS.primary,
        badgeLight: COLORS.primaryLight,
        desc: "Mengamanatkan transformasi ASN menuju birokrasi kelas dunia (Smart ASN). Menuntut kemampuan literasi data, pemikiran kritis (critical thinking), dan kecepatan adaptasi nalar.",
      },
      {
        title: "KepmenPANRB 144 & 321 Tahun 2024",
        badge: "REGULASI PENGADAAN",
        badgeColor: COLORS.accentAmber,
        badgeLight: COLORS.accentAmberLight,
        desc: "Menetapkan standar baku 110 soal SKD (35 TIU, PG: 80). Menegaskan aturan kelulusan maksimal 3x formasi yang menuntut butir soal memiliki daya pembeda tinggi.",
      },
      {
        title: "Debut Soal Matriks & Pecahan Bersusun",
        badge: "TEROBOSAN SOAL BARU",
        badgeColor: COLORS.accentRose,
        badgeLight: COLORS.accentRoseLight,
        desc: "Field Report (FR) 2024 dikejutkan oleh munculnya pecahan bersusun ganda, aljabar selisih kuadrat (a²-b²), dan figural matriks 9 kotak (3x3) di layar CAT.",
      },
    ];

    cards24.forEach((c, idx) => {
      const xPos = 0.8 + idx * 4.0;
      s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: xPos,
        y: 1.85,
        w: 3.75,
        h: 4.8,
        rectRadius: 0.12,
        fill: { color: COLORS.white },
        line: { color: COLORS.borderLight, width: 1.5 },
      });

      s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: xPos + 0.3,
        y: 2.15,
        w: 3.15,
        h: 0.32,
        rectRadius: 0.08,
        fill: { color: c.badgeLight },
        line: { color: c.badgeColor, width: 1 },
      });
      s5.addText(c.badge, {
        x: xPos + 0.3,
        y: 2.2,
        w: 3.15,
        h: 0.25,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        bold: true,
        color: c.badgeColor,
        align: "center",
      });

      s5.addText(c.title, {
        x: xPos + 0.3,
        y: 2.65,
        w: 3.15,
        h: 0.7,
        fontFace: "Segoe UI",
        fontSize: 13,
        bold: true,
        color: COLORS.textDark,
      });

      s5.addText(c.desc, {
        x: xPos + 0.3,
        y: 3.45,
        w: 3.15,
        h: 2.9,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textMuted,
      });
    });

    addSlideFooter(s5, 5);
    s5.addNotes(
      "Di tahun 2024 dan 2025, standar ini ditingkatkan lagi pasca disahkannya UU ASN Nomor 20 Tahun 2023. BKN mulai memasukkan matriks 9 kotak dan aljabar terapan. Peserta yang hanya belajar dari buku-buku terbitan lama mengalami kegagalan massal karena jenis soal yang keluar di layar sama sekali berbeda dari apa yang mereka hafalkan."
    );
  }

  // ==========================================
  // SLIDE 6: ANATOMI TIU TERKINI: FR KEDINASAN 2026
  // ==========================================
  {
    const s6 = pres.addSlide();
    s6.background = { color: COLORS.lightBg };
    addSlideHeader(
      s6,
      "Bedah FR Kedinasan 2026",
      "Anatomi TIU Terkini: Tiga Pilar Soal yang Menguras Nalar",
      "Rangkuman komprehensif tipe soal yang paling banyak menggugurkan peserta di CAT 2026"
    );

    const pillars = [
      {
        title: "1. VERBAL NALAR",
        sub: "10 Butir Soal",
        items: [
          "Analogi 3 Konsep: Hubungan sebab-akibat bertingkat (Input → Proses → Output).",
          "Silogisme Negasi: Menuntut hukum kontraposisi (~Q → ~P) dan disjungsi.",
          "Analitis Posisi Multidimensi: Susunan meja makan bundar dan penugasan bersyarat 5-6 orang.",
        ],
        badgeColor: COLORS.primary,
        badgeLight: COLORS.primaryLight,
      },
      {
        title: "2. NUMERIK & DERET",
        sub: "15 Butir Soal",
        items: [
          "Pecahan Bersusun Majemuk: Hirarki pembagian bertingkat tanpa bantuan kalkulator.",
          "Faktorisasi Aljabar Cepat: Penyelesaian angka ribuan menggunakan (a-b)(a+b).",
          "Deret Alfanumerik & Matriks Angka: Pola kuadratik bertingkat dan tabel operasi khusus.",
        ],
        badgeColor: COLORS.accentEmerald,
        badgeLight: COLORS.accentEmeraldLight,
      },
      {
        title: "3. FIGURAL SPASIAL",
        sub: "10 Butir Soal",
        items: [
          "Matriks 9 Kotak (3x3): Dua elemen bergerak independen dalam satu frame.",
          "Ketidaksamaan Refleksi vs Rotasi: Membedakan putaran sudut dengan bayangan cermin.",
          "Analogi Serial Bertingkat: Penambahan sudut geometri berselingan warna.",
        ],
        badgeColor: COLORS.accentAmber,
        badgeLight: COLORS.accentAmberLight,
      },
    ];

    pillars.forEach((p, idx) => {
      const xPos = 0.8 + idx * 4.0;
      s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: xPos,
        y: 1.85,
        w: 3.75,
        h: 4.8,
        rectRadius: 0.12,
        fill: { color: COLORS.white },
        line: { color: COLORS.borderLight, width: 1.5 },
      });

      // Header Banner
      s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: xPos + 0.25,
        y: 2.1,
        w: 3.25,
        h: 0.65,
        rectRadius: 0.08,
        fill: { color: p.badgeLight },
        line: { color: p.badgeColor, width: 1 },
      });
      s6.addText(p.title, {
        x: xPos + 0.25,
        y: 2.18,
        w: 3.25,
        h: 0.3,
        fontFace: "Segoe UI",
        fontSize: 12,
        bold: true,
        color: p.badgeColor,
        align: "center",
      });
      s6.addText(p.sub, {
        x: xPos + 0.25,
        y: 2.45,
        w: 3.25,
        h: 0.25,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
        align: "center",
      });

      // Items
      p.items.forEach((item, itemIdx) => {
        const itemY = 2.95 + itemIdx * 1.2;
        s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
          x: xPos + 0.25,
          y: itemY,
          w: 3.25,
          h: 1.05,
          rectRadius: 0.06,
          fill: { color: COLORS.lightBg },
          line: { color: COLORS.borderLight, width: 1 },
        });
        s6.addText(item, {
          x: xPos + 0.35,
          y: itemY + 0.08,
          w: 3.05,
          h: 0.9,
          fontFace: "Segoe UI",
          fontSize: 10,
          color: COLORS.textDark,
        });
      });
    });

    addSlideFooter(s6, 6);
    s6.addNotes(
      "Inilah potret soal yang dihadapi para peserta Kedinasan tahun 2026 kemarin. Soal-soal ini tidak bisa diselesaikan dengan 'jembatan keledai' atau rumus cepat instan. Setiap soal membutuhkan 2 sampai 3 langkah penalaran sebelum Anda sampai pada jawaban akhir."
    );
  }

  // ==========================================
  // SLIDE 7: LANDASAN YURIDIS & FILOSOFI BKN
  // ==========================================
  {
    const s7 = pres.addSlide();
    s7.background = { color: COLORS.lightBg };
    addSlideHeader(
      s7,
      "Filosofi Dapur BKN",
      "Mengapa Rumus Cepat Saja Tidak Cukup? Filosofi Resmi BKN",
      "Membongkar rahasia pembuatan soal CAT oleh Tim Konsorsium Perguruan Tinggi Negeri"
    );

    // Left Column: 2 Core Concepts
    s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: 1.85,
      w: 5.7,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });
    s7.addText("DOKTRIN PSIKOMETRI CAT BKN", {
      x: 1.1,
      y: 2.1,
      w: 5.1,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.primary,
    });

    s7.addText(
      "1. MENGUKUR 'GENERAL MENTAL ABILITY' (GMA)\n" +
      "   Peraturan BKN No. 5 Tahun 2024 menegaskan bahwa CAT mengukur daya adaptasi kognitif umum dalam menyelesaikan masalah baru, bukan mengukur daya tampung hafalan rumus.\n\n" +
      "2. ELIMINASI CELAH TRIK DANGKAL (Anti-Gimmick Design)\n" +
      "   Panselnas secara sadar merancang soal dengan 'variabel pengecoh'. Peserta yang hanya hafal trik bimbel tanpa paham nalar akan langsung diarahkan ke opsi jawaban yang salah (distractor).\n\n" +
      "3. TINGKAT KOGNITIF C3 – C4 (BLOOM'S TAXONOMY)\n" +
      "   Standar PermenPANRB 27/2021 Pasal 35 menuntut 'Kemampuan Mengimplementasikan dan Menganalisis', bukan 'Menghafal Formula'.",
      {
        x: 1.1,
        y: 2.55,
        w: 5.1,
        h: 3.8,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textDark,
      }
    );

    // Right Column: Why Candidates Fail
    s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.8,
      y: 1.85,
      w: 5.7,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });
    s7.addText("ANATOMI KEGAGALAN PESERTA UMUM", {
      x: 7.1,
      y: 2.1,
      w: 5.1,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.accentRose,
    });

    s7.addText(
      "• Terjebak 'Canduan' Rumus Cepat:\n" +
      "  Menghafal puluhan rumus cepat dari media sosial. Saat di ujian BKN membalik sedikit struktur soalnya, rumus tersebut menjadi bumerang.\n\n" +
      "• Panik Saat Menghadapi Bentuk Baru:\n" +
      "  Karena tidak terbiasa bernalar, peserta mengalami 'mental block' ketika melihat tabel atau matriks 9 kotak yang belum pernah dilihat sebelumnya.\n\n" +
      "• Menghitung Kasar Angka Besar:\n" +
      "  Mencakar kertas penuh mengalikan angka ribuan, menghabiskan 3 menit per soal, padahal ada trik aljabar 10 detik.",
      {
        x: 7.1,
        y: 2.55,
        w: 5.1,
        h: 3.8,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textMuted,
      }
    );

    addSlideFooter(s7, 7);
    s7.addNotes(
      "BKN dan para profesor di Konsorsium PTN sangat menyadari adanya ribuan video trik cepat di media sosial. Oleh karena itu, secara psikometris, mereka sengaja mengubah struktur soal agar peserta yang hanya hafal trik tanpa paham konsep akan langsung terjebak pada opsi distraktor (pengecoh). Yang dicari oleh negara adalah calon pegawai yang mampu berpikir sistematis."
    );
  }

  // ==========================================
  // SLIDE 8: PIRAMIDA 3 TINGKAT TIU
  // ==========================================
  {
    const s8 = pres.addSlide();
    s8.background = { color: COLORS.lightBg };
    addSlideHeader(
      s8,
      "Metodologi Belajar",
      "Solusi Tepat: Piramida 3 Tingkat Penguasaan TIU",
      "Mendudukkan porsi nalar, kepekaan pola, dan trik efisiensi secara proporsional"
    );

    // Tier 1: Foundation
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.2,
      y: 4.8,
      w: 10.9,
      h: 1.7,
      rectRadius: 0.1,
      fill: { color: COLORS.primaryLight },
      line: { color: COLORS.primary, width: 2 },
    });
    s8.addText("TINGKAT 1 (FONDASI - 50% ENERGI BELAJAR): KONSEP & LOGIKA DASAR", {
      x: 1.5,
      y: 4.95,
      w: 10.3,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 13,
      bold: true,
      color: COLORS.primaryDark,
    });
    s8.addText(
      "Memahami 'MENGAPA' suatu aturan matematika atau logika berlaku. Menguasai hierarki operasi pecahan, sifat dasar aljabar, dan hukum penarikan kesimpulan. Tanpa fondasi ini, Anda tidak akan pernah tahan terhadap variasi soal baru BKN.",
      {
        x: 1.5,
        y: 5.35,
        w: 10.3,
        h: 0.9,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textDark,
      }
    );

    // Tier 2: Pattern
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 2.2,
      y: 3.3,
      w: 8.9,
      h: 1.35,
      rectRadius: 0.1,
      fill: { color: COLORS.accentEmeraldLight },
      line: { color: COLORS.accentEmerald, width: 2 },
    });
    s8.addText("TINGKAT 2 (DINDING - 30% ENERGI): KEPEKAAN POLA (PATTERN RECOGNITION)", {
      x: 2.5,
      y: 3.42,
      w: 8.3,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.accentEmerald,
    });
    s8.addText(
      "Mampu mengidentifikasi dalam 5 detik: apakah ini soal selisih kuadrat, deret bertingkat dua, atau silogisme negasi. Melatih mata dan otak untuk langsung mengenali arsitektur soal.",
      {
        x: 2.5,
        y: 3.75,
        w: 8.3,
        h: 0.75,
        fontFace: "Segoe UI",
        fontSize: 10.5,
        color: COLORS.textDark,
      }
    );

    // Tier 3: Shortcut
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 3.4,
      y: 1.95,
      w: 6.5,
      h: 1.2,
      rectRadius: 0.1,
      fill: { color: COLORS.accentAmberLight },
      line: { color: COLORS.accentAmber, width: 2 },
    });
    s8.addText("TINGKAT 3 (PUNCAK - 20%): TRIK EFISIENSI & SPEED HACKS", {
      x: 3.6,
      y: 2.05,
      w: 6.1,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 11.5,
      bold: true,
      color: COLORS.accentAmber,
      align: "center",
    });
    s8.addText(
      "Penyelesaian super cepat (5-15 detik) menggunakan eliminasi opsi dan angka satuan. Hanya aman dipakai jika Tingkat 1 & 2 sudah dikuasai!",
      {
        x: 3.6,
        y: 2.4,
        w: 6.1,
        h: 0.65,
        fontFace: "Segoe UI",
        fontSize: 10,
        color: COLORS.textDark,
        align: "center",
      }
    );

    addSlideFooter(s8, 8);
    s8.addNotes(
      "Apakah kita anti rumus cepat? Tidak. Rumus cepat itu seperti senjata penembak jitu. Namun, jika Anda tidak punya kompas nalar, senjata itu justru akan meleset dan menjebak Anda. Di kelas ini, kita akan membangun fondasinya dulu sampai kokoh, baru kita pasang jalan pintasnya."
    );
  }

  // ==========================================
  // SLIDE 9: BUKTI SEJARAH: KEDINASAN ADALAH PILOT CPNS
  // ==========================================
  {
    const s9 = pres.addSlide();
    s9.background = { color: COLORS.lightBg };
    addSlideHeader(
      s9,
      "Fakta Sejarah BKN",
      "Bukti Sejarah: Kedinasan Selalu Menjadi 'Laboratorium Uji' CPNS",
      "Pola siklus 6-12 bulan yang membuktikan bahwa soal Kedinasan adalah bocoran resmi CPNS"
    );

    const timelineData = [
      [
        { text: "Tahun", options: { bold: true, fill: { color: "1E293B" }, color: "FFFFFF" } },
        { text: "Yang Terjadi di Kedinasan (Mei - Juli)", options: { bold: true, fill: { color: "1E293B" }, color: "FFFFFF" } },
        { text: "Yang Kemudian Terjadi di CPNS (Okt - Des)", options: { bold: true, fill: { color: "1E293B" }, color: "FFFFFF" } },
        { text: "Dampak Nasional", options: { bold: true, fill: { color: "1E293B" }, color: "FFFFFF" } },
      ],
      [
        { text: "2018", options: { bold: true, color: COLORS.primary } },
        { text: "Pertama kali muncul narasi panjang TKP & soal analisis logika bertingkat." },
        { text: "Pola soal TKP narasi panjang langsung diterapkan penuh di CPNS." },
        { text: "Gugur massal nasional! MenPANRB terbitkan Permen 61/2018 sistem ranking." },
      ],
      [
        { text: "2021", options: { bold: true, color: COLORS.primary } },
        { text: "Sinonim dan Antonim kamus mendadak hilang dari layar CAT para taruna." },
        { text: "PermenPANRB 27/2021 resmi menghapus materi sinonim/antonim di CPNS." },
        { text: "Peserta yang hanya menghafal kamus kehilangan 20-30 poin berharga." },
      ],
      [
        { text: "2024", options: { bold: true, color: COLORS.primary } },
        { text: "FR Kedinasan memuat pecahan bersusun, aljabar khusus, & matriks 9 kotak." },
        { text: "FR CPNS 2024 100% didominasi oleh tipe soal yang persis sama dari Kedinasan." },
        { text: "Standar HOTS BKN disahkan secara permanen di seluruh kementerian." },
      ],
      [
        { text: "2026 → 2027", options: { bold: true, color: COLORS.accentRose } },
        { text: "Kedinasan 2026: Penguatan penalaran analitis, data tabel, & spasial kompleks." },
        { text: "CPNS 2027: Dipastikan mengadopsi konstruksi soal dari bank soal yang sama!" },
        { text: "Mereka yang belajar dari soal Kedinasan 2026 akan memimpin skor tertinggi." },
      ],
    ];

    s9.addTable(timelineData, {
      x: 0.8,
      y: 1.85,
      w: 11.7,
      h: 4.8,
      fontSize: 10,
      fontFace: "Segoe UI",
      border: { color: COLORS.borderLight, width: 1 },
      rowH: [0.45, 0.95, 0.95, 0.95, 1.1],
      colW: [1.2, 3.8, 3.8, 2.9],
      valign: "middle",
    });

    addSlideFooter(s9, 9);
    s9.addNotes(
      "Bapak/Ibu/Rekan-rekan, jangan pernah merasa materi Kedinasan ini terlalu sulit atau tidak relevan untuk CPNS. Sejarah membuktikan sejak 2018: Kedinasan adalah tempat uji coba resmi BKN. Siapa yang menguasai soal Kedinasan hari ini, dialah yang akan tertawa bahagia saat melihat layar CAT CPNS besok."
    );
  }

  // ==========================================
  // SLIDE 10: MANAJEMEN WAKTU DI CAT BKN
  // ==========================================
  {
    const s10 = pres.addSlide();
    s10.background = { color: COLORS.lightBg };
    addSlideHeader(
      s10,
      "Taktik Eksekusi CAT",
      "Manajemen Waktu CAT: Aturan Emas 50 Detik per Soal",
      "Menyelesaikan 35 butir soal TIU dalam alokasi waktu ideal 30 menit"
    );

    // Left Box: 3 Triage Waves
    s10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: 1.85,
      w: 6.8,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });
    s10.addText("STRATEGI 3 PUTARAN (TRIAGE METHOD)", {
      x: 1.1,
      y: 2.1,
      w: 6.2,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.primary,
    });

    const waves = [
      {
        wave: "PUTARAN 1 (0 – 12 MENIT): TARGET 15 SOAL CEPAT",
        desc: "Selesaikan semua soal Analogi Verbal, Silogisme sederhana, dan Figural pola tunggal. Amankan poin mudah tanpa berpikir panjang.",
        color: COLORS.accentEmerald,
      },
      {
        wave: "PUTARAN 2 (12 – 24 MENIT): TARGET 12 SOAL HITUNGAN",
        desc: "Kerjakan Pecahan Bersusun, Aljabar Khusus, Deret Pola Bertingkat, dan Figural Matriks 9 Kotak. Butuh 40-50 detik per soal.",
        color: COLORS.primary,
      },
      {
        wave: "PUTARAN 3 (24 – 30 MENIT): TARGET 8 SOAL ANALITIS",
        desc: "Selesaikan Soal Analitis Posisi (urutan duduk/tugas) dan Soal Cerita Panjang. Jika mentok, gunakan eliminasi opsi cerdas.",
        color: COLORS.accentAmber,
      },
    ];

    waves.forEach((w, idx) => {
      const yPos = 2.55 + idx * 1.3;
      s10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.1,
        y: yPos,
        w: 6.2,
        h: 1.15,
        rectRadius: 0.08,
        fill: { color: COLORS.lightBg },
        line: { color: COLORS.borderLight, width: 1 },
      });
      s10.addText(w.wave, {
        x: 1.25,
        y: yPos + 0.1,
        w: 5.9,
        h: 0.3,
        fontFace: "Segoe UI",
        fontSize: 10.5,
        bold: true,
        color: w.color,
      });
      s10.addText(w.desc, {
        x: 1.25,
        y: yPos + 0.4,
        w: 5.9,
        h: 0.65,
        fontFace: "Segoe UI",
        fontSize: 10,
        color: COLORS.textMuted,
      });
    });

    // Right Box: Mental Rules
    s10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 7.9,
      y: 1.85,
      w: 4.6,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });
    s10.addText("ATURAN EMAS 'KILL YOUR EGO'", {
      x: 8.2,
      y: 2.1,
      w: 4.0,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: COLORS.accentRose,
    });

    s10.addText(
      "1. BATAS 45 DETIK:\n" +
      "   Jika dalam 45 detik Anda belum menemukan benang merah cara pengerjaan suatu soal, SEGERA TANDAI RAGU-RAGU DAN LEWATI!\n\n" +
      "2. SEMUA SOAL BOBOTNYA SAMA (5 POIN):\n" +
      "   Menghitung soal rumit selama 3 menit tetap bernilai 5 poin, sama dengan menjawab soal analogi 10 detik. Jangan korbankan 3 soal mudah demi 1 soal ego!\n\n" +
      "3. TIDAK ADA NILAI MINUS:\n" +
      "   Di akhir ujian, pastikan tidak ada satu pun dari 35 soal TIU yang kosong.",
      {
        x: 8.2,
        y: 2.55,
        w: 4.0,
        h: 3.8,
        fontFace: "Segoe UI",
        fontSize: 10.5,
        color: COLORS.textDark,
      }
    );

    addSlideFooter(s10, 10);
    s10.addNotes(
      "Banyak peserta pintar yang gagal bukan karena tidak bisa mengerjakan soal, tetapi karena memiliki 'ego tinggi'—mereka memaksakan menghitung satu soal sulit hingga menghabiskan 3 menit. Ingat: bobot semua soal TIU sama, yaitu 5 poin. Kecepatan memilih dan memilah adalah penentu utama kelulusan Anda."
    );
  }

  // ==========================================
  // SLIDE 11: ROADMAP 15 SESI: FASE 1
  // ==========================================
  {
    const s11 = pres.addSlide();
    s11.background = { color: COLORS.lightBg };
    addSlideHeader(
      s11,
      "Kurikulum 15 Pertemuan",
      "Fase 1: Rekonstruksi Fondasi & Nalar Inti (Sesi 1 – 5)",
      "Membangun kembali fondasi aljabar, hierarki pecahan, dan logika formal"
    );

    const sessionsF1 = [
      {
        sesi: "Sesi 1",
        title: "Orientasi & Diagnosis Kognitif Awal",
        desc: "Bedah Mindset CAT BKN, rilis FR Kedinasan 2026, bedah silabus 15 sesi, dan pelaksanaan Pre-Test Mini TIU New CASN di platform Lesinaja.",
        tag: "Orientasi",
      },
      {
        sesi: "Sesi 2",
        title: "Verbal Nalar 1: Analogi 3 Konsep & Asosiasi",
        desc: "Membongkar pola analogi bertingkat (Input → Proses → Output), hubungan sebab-akibat multi-arah, dan teknik eliminasi distraktor kata.",
        tag: "Verbal",
      },
      {
        sesi: "Sesi 3",
        title: "Verbal Nalar 2: Silogisme Negasi & Kontraposisi",
        desc: "Kaidah Modus Ponens, Tollens, Silogisme Disjungtif, hukum negasi (~Q → ~P), dan membedakan kata 'semua/beberapa' secara presisi.",
        tag: "Logika",
      },
      {
        sesi: "Sesi 4",
        title: "Numerik Inti 1: Hierarki Pecahan Bersusun",
        desc: "Membedah operasi (A/B)/C vs A/(B/C), desimal berulang, persentase cepat, dan manipulasi eksponen tanpa hitung kasar.",
        tag: "Numerik",
      },
      {
        sesi: "Sesi 5",
        title: "Numerik Inti 2: Faktorisasi Aljabar Khusus",
        desc: "Penerapan identitas aljabar penting: a² - b² = (a-b)(a+b), kuadrat suku dua, dan perhitungan angka ribuan dalam waktu 10 detik.",
        tag: "Aljabar",
      },
    ];

    sessionsF1.forEach((s, idx) => {
      const yPos = 1.85 + idx * 0.95;
      s11.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.8,
        y: yPos,
        w: 11.7,
        h: 0.82,
        rectRadius: 0.08,
        fill: { color: COLORS.white },
        line: { color: COLORS.borderLight, width: 1 },
      });

      // Sesi Badge
      s11.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.0,
        y: yPos + 0.16,
        w: 1.1,
        h: 0.5,
        rectRadius: 0.06,
        fill: { color: COLORS.primaryLight },
        line: { color: COLORS.primary, width: 1 },
      });
      s11.addText(s.sesi, {
        x: 1.0,
        y: yPos + 0.22,
        w: 1.1,
        h: 0.4,
        fontFace: "Segoe UI",
        fontSize: 11,
        bold: true,
        color: COLORS.primary,
        align: "center",
      });

      // Title & Tag
      s11.addText(s.title, {
        x: 2.3,
        y: yPos + 0.12,
        w: 4.8,
        h: 0.32,
        fontFace: "Segoe UI",
        fontSize: 12,
        bold: true,
        color: COLORS.textDark,
      });

      // Desc
      s11.addText(s.desc, {
        x: 2.3,
        y: yPos + 0.42,
        w: 8.8,
        h: 0.35,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
      });

      // Right Tag
      s11.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 11.2,
        y: yPos + 0.22,
        w: 1.1,
        h: 0.38,
        rectRadius: 0.06,
        fill: { color: COLORS.lightBg },
        line: { color: COLORS.borderLight, width: 1 },
      });
      s11.addText(s.tag, {
        x: 11.2,
        y: yPos + 0.28,
        w: 1.1,
        h: 0.3,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
        align: "center",
      });
    });

    addSlideFooter(s11, 11);
    s11.addNotes(
      "Di lima pertemuan pertama, kita akan merombak total cara Anda memandang logika dan hitungan dasar. Target kita: Anda tidak lagi ragu pada pecahan bertingkat dan silogisme kondisional."
    );
  }

  // ==========================================
  // SLIDE 12: ROADMAP 15 SESI: FASE 2
  // ==========================================
  {
    const s12 = pres.addSlide();
    s12.background = { color: COLORS.lightBg };
    addSlideHeader(
      s12,
      "Kurikulum 15 Pertemuan",
      "Fase 2: Penguasaan Materi HOTS Kedinasan (Sesi 6 – 10)",
      "Menguasai tipe-tipe soal paling modern yang menjadi penentu kelulusan ranking teratas"
    );

    const sessionsF2 = [
      {
        sesi: "Sesi 6",
        title: "Logika Analitis: Posisi, Meja Bundar, & Grid",
        desc: "Metode Grid Elimination (Tabel Silang) dan pemetaan diagram garis untuk menyelesaikan 5 variabel tempat duduk dan jadwal bersyarat.",
        tag: "Analitis",
      },
      {
        sesi: "Sesi 7",
        title: "Deret Pola Bertingkat & Alfanumerik",
        desc: "Membongkar deret selisih kuadrat bertingkat dua, variasi deret Fibonacci, deret matriks tabel, dan lompatan huruf abjad ganda.",
        tag: "Deret",
      },
      {
        sesi: "Sesi 8",
        title: "Operasi Simbol Acak & Fungsi Khusus",
        desc: "Menyelesaikan model soal baru f(x) dan operator buatan (misal x ⋆ y = 2x + 3y - xy) secara adaptif dan tanpa kebingungan.",
        tag: "Simbol",
      },
      {
        sesi: "Sesi 9",
        title: "Perbandingan Kuantitatif & Data Tabel",
        desc: "Teknik menentukan hubungan nilai X dan Y berbasis analisis tabel persentase/pertumbuhan tanpa menghitung seluruh angka desimal.",
        tag: "Kuantitatif",
      },
      {
        sesi: "Sesi 10",
        title: "Figural HOTS: Matriks 9 Kotak & Refleksi",
        desc: "Bedah tuntas matriks 3x3: aturan pergerakan elemen luar vs dalam, pembedaan rotasi sudut vs bayangan cermin (refleksi).",
        tag: "Spasial",
      },
    ];

    sessionsF2.forEach((s, idx) => {
      const yPos = 1.85 + idx * 0.95;
      s12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.8,
        y: yPos,
        w: 11.7,
        h: 0.82,
        rectRadius: 0.08,
        fill: { color: COLORS.white },
        line: { color: COLORS.borderLight, width: 1 },
      });

      // Sesi Badge
      s12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.0,
        y: yPos + 0.16,
        w: 1.1,
        h: 0.5,
        rectRadius: 0.06,
        fill: { color: COLORS.accentEmeraldLight },
        line: { color: COLORS.accentEmerald, width: 1 },
      });
      s12.addText(s.sesi, {
        x: 1.0,
        y: yPos + 0.22,
        w: 1.1,
        h: 0.4,
        fontFace: "Segoe UI",
        fontSize: 11,
        bold: true,
        color: COLORS.accentEmerald,
        align: "center",
      });

      // Title & Tag
      s12.addText(s.title, {
        x: 2.3,
        y: yPos + 0.12,
        w: 4.8,
        h: 0.32,
        fontFace: "Segoe UI",
        fontSize: 12,
        bold: true,
        color: COLORS.textDark,
      });

      // Desc
      s12.addText(s.desc, {
        x: 2.3,
        y: yPos + 0.42,
        w: 8.8,
        h: 0.35,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
      });

      // Right Tag
      s12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 11.2,
        y: yPos + 0.22,
        w: 1.1,
        h: 0.38,
        rectRadius: 0.06,
        fill: { color: COLORS.lightBg },
        line: { color: COLORS.borderLight, width: 1 },
      });
      s12.addText(s.tag, {
        x: 11.2,
        y: yPos + 0.28,
        w: 1.1,
        h: 0.3,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
        align: "center",
      });
    });

    addSlideFooter(s12, 12);
    s12.addNotes(
      "Di Fase 2, kita masuk ke 'jantung' materi baru. Inilah kumpulan soal yang membuat banyak peserta lain berguguran. Kita akan membedah matriks 9 kotak dan interpretasi tabel sampai Anda terbiasa membaca polanya dalam hitungan detik."
    );
  }

  // ==========================================
  // SLIDE 13: ROADMAP 15 SESI: FASE 3
  // ==========================================
  {
    const s13 = pres.addSlide();
    s13.background = { color: COLORS.lightBg };
    addSlideHeader(
      s13,
      "Kurikulum 15 Pertemuan",
      "Fase 3: Kecepatan, Simulasi, & Ketahanan Mental (Sesi 11 – 15)",
      "Mengintegrasikan seluruh materi dalam simulasi berstandar CAT 30 menit"
    );

    const sessionsF3 = [
      {
        sesi: "Sesi 11",
        title: "Soal Cerita Aritmetika Sosial & Proyek",
        desc: "Kecepatan kerja bersama (pipa/pekerja tambahan), rumus berpapasan & menyusul, untung-rugi persentase, dan perbandingan senilai/berbalik nilai.",
        tag: "Aritmetika",
      },
      {
        sesi: "Sesi 12",
        title: "Kombinatorika & Peluang Terapan",
        desc: "Kaidah pencacahan cepat, permutasi susunan pengurus/posisi, kombinasi pemilihan tim delegasi, dan peluang kejadian bersyarat.",
        tag: "Peluang",
      },
      {
        sesi: "Sesi 13",
        title: "Speed Drill: 35 Soal Campuran (Timer 30 Menit)",
        desc: "Latihan intensif 35 soal acak berstandar waktu riil. Melatih kedisiplinan mengalokasikan 50 detik/soal dan mempraktikkan teknik triage.",
        tag: "Speed Drill",
      },
      {
        sesi: "Sesi 14",
        title: "Simulasi Try Out Full & Bedah Titik Lemah",
        desc: "Simulasi ujian di platform Lesinaja, pemetaan ranking kelas, evaluasi butir soal jebakan, dan eliminasi kesalahan berulang.",
        tag: "Simulasi",
      },
      {
        sesi: "Sesi 15",
        title: "Strategi Final, Mental Conditioning, & Pelepasan",
        desc: "Manajemen stres dan detak jantung saat layar CAT bermasalah, taktik memilih saat ragu-ragu, checklist H-7 ujian, dan doa bersama.",
        tag: "Final Kick",
      },
    ];

    sessionsF3.forEach((s, idx) => {
      const yPos = 1.85 + idx * 0.95;
      s13.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.8,
        y: yPos,
        w: 11.7,
        h: 0.82,
        rectRadius: 0.08,
        fill: { color: COLORS.white },
        line: { color: COLORS.borderLight, width: 1 },
      });

      // Sesi Badge
      s13.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.0,
        y: yPos + 0.16,
        w: 1.1,
        h: 0.5,
        rectRadius: 0.06,
        fill: { color: COLORS.accentAmberLight },
        line: { color: COLORS.accentAmber, width: 1 },
      });
      s13.addText(s.sesi, {
        x: 1.0,
        y: yPos + 0.22,
        w: 1.1,
        h: 0.4,
        fontFace: "Segoe UI",
        fontSize: 11,
        bold: true,
        color: COLORS.accentAmber,
        align: "center",
      });

      // Title & Tag
      s13.addText(s.title, {
        x: 2.3,
        y: yPos + 0.12,
        w: 4.8,
        h: 0.32,
        fontFace: "Segoe UI",
        fontSize: 12,
        bold: true,
        color: COLORS.textDark,
      });

      // Desc
      s13.addText(s.desc, {
        x: 2.3,
        y: yPos + 0.42,
        w: 8.8,
        h: 0.35,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
      });

      // Right Tag
      s13.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 11.2,
        y: yPos + 0.22,
        w: 1.1,
        h: 0.38,
        rectRadius: 0.06,
        fill: { color: COLORS.lightBg },
        line: { color: COLORS.borderLight, width: 1 },
      });
      s13.addText(s.tag, {
        x: 11.2,
        y: yPos + 0.28,
        w: 1.1,
        h: 0.3,
        fontFace: "Segoe UI",
        fontSize: 9.5,
        color: COLORS.textMuted,
        align: "center",
      });
    });

    addSlideFooter(s13, 13);
    s13.addNotes(
      "Di fase terakhir, kita mengasah ketahanan fisik dan mental Anda di depan layar ujian. Kita akan lakukan simulasi riil waktu mundur 30 menit agar saat hari-H tiba, Anda sudah merasa seperti sedang latihan harian biasa."
    );
  }

  // ==========================================
  // SLIDE 14: DIAGNOSIS MANDIRI DI LESINAJA
  // ==========================================
  {
    const s14 = pres.addSlide();
    s14.background = { color: COLORS.lightBg };
    addSlideHeader(
      s14,
      "Tugas Hari Ini",
      "Langkah Pertama: Diagnosis Kemampuan Awal di Lesinaja",
      "Kenali posisi awal dan titik lemah kognitif Anda sebelum pertemuan ke-2 dimulai"
    );

    // Left Box: Access Instructions
    s14.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: 1.85,
      w: 6.2,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.primary, width: 2 },
    });

    s14.addText("PANDUAN AKSES DIAGNOSIS MANDIRI", {
      x: 1.1,
      y: 2.1,
      w: 5.6,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 13,
      bold: true,
      color: COLORS.primary,
    });

    const steps = [
      "1. Kunjungi platform web Lesinaja di browser Anda.",
      "2. Masuk ke menu 'Try Out' pada bilah navigasi atas.",
      "3. Pilih paket ujian: 'Mini TIU New CASN' (35 Butir Soal).",
      "4. Masukkan Kode Akses Khusus Kelas: MTTIUNIPSQUAD",
      "5. Kerjakan secara mandiri dalam waktu maksimal 30 menit tanpa catatan atau kalkulator.",
    ];

    steps.forEach((step, idx) => {
      const yStep = 2.65 + idx * 0.55;
      s14.addText(step, {
        x: 1.1,
        y: yStep,
        w: 5.6,
        h: 0.45,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textDark,
      });
    });

    // Access Code Banner
    s14.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.1,
      y: 5.4,
      w: 5.6,
      h: 0.95,
      rectRadius: 0.08,
      fill: { color: COLORS.primaryLight },
      line: { color: COLORS.primary, width: 1.5 },
    });
    s14.addText("KODE AKSES KHUSUS PESERTA:", {
      x: 1.3,
      y: 5.48,
      w: 5.2,
      h: 0.25,
      fontFace: "Segoe UI",
      fontSize: 9.5,
      bold: true,
      color: COLORS.primary,
      align: "center",
    });
    s14.addText("MTTIUNIPSQUAD", {
      x: 1.3,
      y: 5.75,
      w: 5.2,
      h: 0.45,
      fontFace: "Segoe UI",
      fontSize: 20,
      bold: true,
      color: COLORS.primaryDark,
      align: "center",
    });

    // Right Box: Target & Value
    s14.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 7.3,
      y: 1.85,
      w: 5.2,
      h: 4.8,
      rectRadius: 0.12,
      fill: { color: COLORS.white },
      line: { color: COLORS.borderLight, width: 1.5 },
    });

    s14.addText("APA YANG AKAN ANDA DAPATKAN?", {
      x: 7.6,
      y: 2.1,
      w: 4.6,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 13,
      bold: true,
      color: COLORS.accentEmerald,
    });

    s14.addText(
      "• Peta Kekuatan Individual:\n" +
      "  Mengetahui secara persis apakah titik lemah Anda ada di Verbal Analogi, Hitungan Aljabar, atau Matriks Spasial.\n\n" +
      "• Rekomendasi Latihan Khusus:\n" +
      "  Mentor akan menggunakan data hasil diagnosis ini untuk memberikan penekanan materi yang tepat di sesi 2 sampai 15.\n\n" +
      "• Benchmark Nilai Awal:\n" +
      "  Menjadi titik tolak (baseline) untuk melihat lonjakan skor Anda setelah menyelesaikan 15 pertemuan.",
      {
        x: 7.6,
        y: 2.65,
        w: 4.6,
        h: 3.7,
        fontFace: "Segoe UI",
        fontSize: 11,
        color: COLORS.textMuted,
      }
    );

    addSlideFooter(s14, 14);
    s14.addNotes(
      "Sebelum pertemuan kedua dimulai, tugas Anda hanya satu: ikuti diagnosis mandiri di platform Lesinaja. Nilai yang Anda peroleh bukan vonis pintar atau bodoh, melainkan kompas bagi saya untuk mengetahui di materi mana Anda paling butuh dorongan ekstra."
    );
  }

  // ==========================================
  // SLIDE 15: PENUTUP: SIAP SEGALANYA
  // ==========================================
  {
    const s15 = pres.addSlide();
    s15.background = { color: COLORS.darkBg };

    // Decorative shape
    s15.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 0.35,
      h: 7.5,
      fill: { color: COLORS.accentEmerald },
    });

    // Badge
    s15.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.2,
      y: 1.0,
      w: 3.2,
      h: 0.38,
      rectRadius: 0.08,
      fill: { color: "064E3B" },
      line: { color: "34D399", width: 1 },
    });
    s15.addText("PRINSIP KELULUSAN CASN", {
      x: 1.2,
      y: 1.0,
      w: 3.2,
      h: 0.38,
      fontFace: "Segoe UI",
      fontSize: 10.5,
      bold: true,
      color: "6EE7B7",
      align: "center",
      valign: "middle",
    });

    // Big Punchline
    s15.addText("Persiapan yang Paling Tepat?\nAdalah SIAP SEGALANYA!", {
      x: 1.2,
      y: 1.55,
      w: 11.0,
      h: 1.4,
      fontFace: "Segoe UI",
      fontSize: 36,
      bold: true,
      color: COLORS.white,
    });

    // 2 Comparison Quotes
    s15.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.2,
      y: 3.1,
      w: 5.2,
      h: 2.1,
      rectRadius: 0.1,
      fill: { color: COLORS.darkCard },
      line: { color: COLORS.darkBorder, width: 1 },
    });
    s15.addText("MODEL SOAL KLASIK", {
      x: 1.5,
      y: 3.3,
      w: 4.6,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: "93C5FD",
    });
    s15.addText(
      '"Kita selesaikan dengan mata terpejam dalam 10 hingga 15 detik menggunakan pemahaman konsep yang kokoh."',
      {
        x: 1.5,
        y: 3.75,
        w: 4.6,
        h: 1.2,
        fontFace: "Segoe UI",
        fontSize: 13,
        italic: true,
        color: "E2E8F0",
      }
    );

    s15.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.8,
      y: 3.1,
      w: 5.2,
      h: 2.1,
      rectRadius: 0.1,
      fill: { color: COLORS.darkCard },
      line: { color: COLORS.darkBorder, width: 1 },
    });
    s15.addText("MODEL SOAL MODERN HOTS", {
      x: 7.1,
      y: 3.3,
      w: 4.6,
      h: 0.35,
      fontFace: "Segoe UI",
      fontSize: 12,
      bold: true,
      color: "6EE7B7",
    });
    s15.addText(
      '"Kita taklukkan dengan ketajaman nalar, kepekaan pola, dan ketahanan mental tanpa rasa panik."',
      {
        x: 7.1,
        y: 3.75,
        w: 4.6,
        h: 1.2,
        fontFace: "Segoe UI",
        fontSize: 13,
        italic: true,
        color: "E2E8F0",
      }
    );

    // Call to Action
    s15.addText(
      "Komitmen Kita: Hadir di 15 sesi, selesaikan setiap drill latihan, dan pantang menyerah sebelum NIP berada di tangan Anda!",
      {
        x: 1.2,
        y: 5.5,
        w: 10.8,
        h: 0.6,
        fontFace: "Segoe UI",
        fontSize: 13,
        bold: true,
        color: "FCD34D",
        align: "center",
      }
    );

    s15.addText("SAMPAI JUMPA DI PERTEMUAN 2 • LESINAJA ACADEMY", {
      x: 1.2,
      y: 6.3,
      w: 10.8,
      h: 0.4,
      fontFace: "Segoe UI",
      fontSize: 11,
      color: "64748B",
      align: "center",
    });

    s15.addNotes(
      "Sebagai penutup: jangan pernah berspekulasi apakah soalnya nanti akan mudah atau sulit. Persiapan yang paling tepat adalah siap segalanya—siap menghadapi soal klasik tanpa buang waktu, dan siap melumat soal HOTS baru tanpa rasa takut. Mari kita berjuang bersama selama 15 pertemuan ke depan demi meraih impian menjadi ASN 2027. Terima kasih, mari kita mulai perjalanan ini!"
    );
  }

  // Save presentation
  const outputPath = path.resolve("./Dekode_TIU_CPNS_2027_Pertemuan_1.pptx");
  const publicPath = path.resolve("./public/Dekode_TIU_CPNS_2027_Pertemuan_1.pptx");

  await pres.writeFile({ fileName: outputPath });
  console.log(`Presentation generated successfully at: ${outputPath}`);

  try {
    if (!fs.existsSync(path.resolve("./public"))) {
      fs.mkdirSync(path.resolve("./public"), { recursive: true });
    }
    await pres.writeFile({ fileName: publicPath });
    console.log(`Copy saved to public folder at: ${publicPath}`);
  } catch (err) {
    console.warn("Could not save to public folder:", err.message);
  }
}

createPresentation().catch((err) => {
  console.error("Error generating presentation:", err);
  process.exit(1);
});
