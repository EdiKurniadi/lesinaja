import type { MaterialTopic } from "./types";

export const MATERIALS: MaterialTopic[] = [
  {
    id: "twk-pancasila", category: "TWK", title: "Pancasila",
    summary: "Pahami Pancasila sebagai dasar negara, ideologi terbuka, dan panduan perilaku warga negara.",
    points: ["Lima sila merupakan satu kesatuan yang saling menjiwai.", "Nilai dasar bersifat tetap; penerapannya menyesuaikan perkembangan masyarakat.", "Soal situasional biasanya menguji toleransi, musyawarah, keadilan, dan gotong royong."],
    example: "Mengutamakan musyawarah tanpa menekan pendapat minoritas mencerminkan sila keempat sekaligus menghormati kemanusiaan.",
  },
  {
    id: "twk-uud", category: "TWK", title: "UUD 1945",
    summary: "Kenali struktur konstitusi, lembaga negara, hak warga, serta pembagian kekuasaan.",
    points: ["UUD 1945 merupakan hukum dasar tertulis.", "MPR berwenang mengubah dan menetapkan UUD.", "Mahkamah Konstitusi menguji undang-undang terhadap UUD 1945."],
    example: "Jika sebuah undang-undang diduga bertentangan dengan UUD 1945, pengujiannya diajukan ke Mahkamah Konstitusi.",
  },
  {
    id: "twk-nkri", category: "TWK", title: "NKRI & Bhinneka",
    summary: "Pelajari persatuan dalam keberagaman, wawasan nusantara, dan bentuk negara kesatuan.",
    points: ["Indonesia berbentuk negara kesatuan dan republik.", "Bhinneka Tunggal Ika mengakui perbedaan dalam persatuan.", "Otonomi daerah berjalan di dalam kerangka NKRI."],
    example: "Kerja sama lintas suku untuk menyelesaikan masalah lingkungan adalah praktik persatuan yang menghargai keragaman.",
  },
  {
    id: "twk-integritas", category: "TWK", title: "Integritas & Bela Negara",
    summary: "Terapkan kepentingan umum, antikorupsi, disiplin, dan tanggung jawab kebangsaan.",
    points: ["Integritas berarti selaras antara nilai, ucapan, dan tindakan.", "Bela negara dapat diwujudkan melalui profesi dan kepatuhan hukum.", "Kepentingan publik harus didahulukan dari keuntungan pribadi."],
    example: "Menolak gratifikasi dan melaporkannya melalui kanal resmi adalah bentuk integritas dalam pelayanan publik.",
  },
  {
    id: "tiu-verbal", category: "TIU", title: "Kemampuan Verbal",
    summary: "Latih analogi, silogisme, dan analisis hubungan makna secara teliti.",
    points: ["Pada analogi, cari hubungan antarkata sebelum melihat pilihan.", "Silogisme harus mengikuti premis, bukan pengetahuan umum.", "Waspadai simpulan yang memakai kata 'semua' tanpa dukungan premis."],
    example: "Dokter : pasien setara dengan guru : murid karena keduanya menunjukkan profesi dan pihak yang dilayani.",
  },
  {
    id: "tiu-numerik", category: "TIU", title: "Kemampuan Numerik",
    summary: "Kuasai hitung dasar, rasio, persentase, rata-rata, dan soal cerita.",
    points: ["Ubah persen menjadi pecahan sederhana bila memungkinkan.", "Pada rasio, jumlahkan bagian sebelum mencari nilai tiap bagian.", "Perkirakan hasil untuk memeriksa kewajaran jawaban."],
    example: "Rasio 2:3 dengan total 50 berarti satu bagian bernilai 10, sehingga nilainya 20 dan 30.",
  },
  {
    id: "tiu-deret", category: "TIU", title: "Deret & Pola",
    summary: "Temukan pola selisih, rasio, selang-seling, atau gabungan operasi.",
    points: ["Periksa selisih antarsuku terlebih dahulu.", "Jika selisih tidak tetap, cek selisih tingkat kedua.", "Pisahkan suku ganjil dan genap untuk pola selang-seling."],
    example: "3, 7, 11, 15 memiliki selisih tetap 4, sehingga suku berikutnya 19.",
  },
  {
    id: "tiu-figural", category: "TIU", title: "Logika Analitis",
    summary: "Susun informasi, batasan, dan urutan secara sistematis sebelum memilih jawaban.",
    points: ["Tuliskan fakta pasti terlebih dahulu.", "Bedakan syarat perlu dan syarat cukup.", "Eliminasi pilihan yang melanggar satu saja batasan."],
    example: "Jika A sebelum B dan B sebelum C, maka A pasti sebelum C.",
  },
  {
    id: "tkp-pelayanan", category: "TKP", title: "Pelayanan Publik",
    summary: "Utamakan kebutuhan masyarakat dengan sikap ramah, jelas, adil, dan sesuai prosedur.",
    points: ["Dengarkan kebutuhan sebelum memberi solusi.", "Jelaskan prosedur dan pilihan tindak lanjut.", "Jangan menjanjikan sesuatu di luar kewenangan."],
    example: "Saat berkas warga kurang lengkap, jelaskan kekurangannya dan cara melengkapinya tanpa menyalahkan warga.",
  },
  {
    id: "tkp-jejaring", category: "TKP", title: "Kerja Sama",
    summary: "Bangun komunikasi, pembagian peran, dan tanggung jawab bersama dalam tim.",
    points: ["Bahas masalah langsung dengan pihak terkait.", "Tawarkan bantuan yang tetap menjaga tanggung jawab utama.", "Dokumentasikan kesepakatan penting."],
    example: "Jika rekan tertinggal, cari hambatannya dan atur ulang pembagian tugas bersama tim.",
  },
  {
    id: "tkp-digital", category: "TKP", title: "Teknologi Informasi",
    summary: "Gunakan teknologi secara aman, adaptif, dan berorientasi pada perbaikan layanan.",
    points: ["Pelajari alat baru melalui sumber resmi.", "Lindungi data pribadi dan kredensial.", "Uji perubahan sebelum diterapkan luas."],
    example: "Saat sistem baru digunakan, pelajari panduan, uji alur, lalu bantu rekan yang mengalami kesulitan.",
  },
  {
    id: "tkp-sosbud", category: "TKP", title: "Sosial Budaya",
    summary: "Tunjukkan empati, inklusivitas, dan kemampuan bekerja dengan latar belakang berbeda.",
    points: ["Hindari asumsi berdasarkan identitas seseorang.", "Cari kebutuhan aksesibilitas secara langsung dan sopan.", "Gunakan perbedaan perspektif untuk memperbaiki keputusan."],
    example: "Dalam rapat lintas daerah, beri ruang yang setara dan pastikan istilah lokal dijelaskan kepada semua peserta.",
  },
];
