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
  {
    id: "tkp-anti-radikalisme", category: "TKP", title: "Anti Radikalisme",
    summary: "Kenali respons ASN yang tenang, inklusif, berbasis fakta, dan mengikuti prosedur ketika menghadapi intoleransi atau provokasi.",
    points: ["Bedakan kritik konstruktif dari ajakan kebencian, intimidasi, atau kekerasan.", "Dahulukan verifikasi informasi, dialog yang aman, dan jalur pelaporan resmi.", "Jawaban TKP terbaik bersifat proporsional: tegas pada ancaman, tanpa melabeli atau menghakimi kelompok."],
    example: "Saat menerima pesan provokatif tanpa sumber jelas, jangan meneruskan pesan. Periksa sumber resmi, luruskan secara santun bila perlu, dan laporkan melalui jalur yang tepat jika ada ancaman serius.",
    chapters: [
      {
        title: "Memahami spektrum sikap",
        intro: "Soal anti radikalisme meminta kamu membaca situasi secara jernih. Tidak semua kritik atau perbedaan pandangan merupakan ancaman.",
        sections: [
          { heading: "Kritik, perubahan sah, dan ekstremisme", body: "Kritik yang berbasis data dan disampaikan untuk memperbaiki layanan adalah bagian dari ruang demokrasi. Perubahan sosial yang dilakukan melalui hukum, edukasi, dan partisipasi juga sah. Yang perlu diwaspadai adalah ajakan memaksakan kehendak, menolak toleransi, atau memakai intimidasi dan kekerasan.", bullets: ["Jangan samakan kritik dengan radikalisme.", "Jangan memberi label kepada orang atau kelompok hanya karena identitas atau perbedaan pendapat.", "Fokus pada perilaku, bukti, risiko, dan langkah yang proporsional."] },
          { heading: "Rantai yang perlu dicegah", body: "Intoleransi dapat berkembang menjadi polarisasi dan tindakan yang membahayakan bila dibiarkan. Dalam soal, cari pilihan yang mencegah eskalasi sejak awal tanpa menciptakan konflik baru." },
        ],
        callout: "Pegang prinsip ini: perbedaan pendapat tidak otomatis salah; ancaman, diskriminasi, dan kekerasan harus ditangani secara aman dan prosedural.",
      },
      {
        title: "Nilai kebangsaan dalam tindakan",
        intro: "Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika hadir dalam TKP sebagai arah tindakan, bukan sekadar hafalan.",
        sections: [
          { heading: "Kompas respons ASN", body: "Pilih tindakan yang menjaga persatuan, melayani warga secara setara, menghormati hukum, dan melindungi ruang kerja yang aman.", bullets: ["Inklusif: tidak membeda-bedakan layanan berdasarkan latar belakang.", "Tenang: tidak membalas provokasi dengan provokasi.", "Konstitusional: gunakan SOP, atasan, dan pihak berwenang sesuai tingkat risiko."] },
          { heading: "Tujuan yang dicari soal", body: "Respons terbaik membantu menjaga ketertiban, mencegah disinformasi, dan membuka jalan dialog atau penanganan resmi. Respons itu tidak mengorbankan hak warga atau profesionalisme ASN." },
        ],
      },
      {
        title: "Membaca pola jawaban skor tinggi",
        intro: "Pilihan bernilai tinggi biasanya memadukan ketenangan, verifikasi fakta, kepedulian, dan tindakan yang jelas.",
        sections: [
          { heading: "Ciri respons yang kuat", body: "Saat opsi terlihat sama-sama baik, pilih yang paling lengkap dan proporsional: memeriksa fakta, meredam risiko, memberi respons yang pantas, lalu memakai prosedur bila diperlukan.", bullets: ["Tegas terhadap kekerasan dan diskriminasi.", "Santun saat mengingatkan atau berdialog.", "Tidak pasif ketika risiko dapat meluas.", "Tidak mengambil tindakan berlebihan atau main hakim sendiri."] },
          { heading: "Waspadai jebakan", body: "Opsi yang emosional, mempermalukan orang di ruang publik, menyebarkan ulang konten provokatif, atau langsung memberi sanksi tanpa dasar yang cukup biasanya kurang tepat. Pilihan diam total juga dapat kurang kuat ketika masalah membutuhkan tindak lanjut." },
        ],
        callout: "Urutkan pilihan dari yang paling menjaga keselamatan, persatuan, dan prosedur; bukan dari yang terdengar paling keras.",
      },
      {
        title: "Verifikasi dan literasi digital",
        intro: "Banyak skenario TKP memakai pesan berantai, unggahan media sosial, atau informasi yang belum jelas sumbernya.",
        sections: [
          { heading: "Sebelum merespons", body: "Periksa asal informasi, tanggal, konteks, dan sumber resmi. Jangan memperkuat jangkauan konten bermasalah dengan meneruskannya atau membalas secara emosional.", bullets: ["Tahan diri sebelum membagikan.", "Gunakan rujukan resmi atau kanal pemeriksa fakta.", "Luruskan secara santun bila situasinya aman dan perlu.", "Simpan informasi seperlunya untuk pelaporan, bukan untuk disebarluaskan."] },
          { heading: "Kelola ruang komunikasi", body: "Dalam ruang kerja, arahkan percakapan kembali ke tujuan grup dan SOP. Moderasi konten yang melanggar aturan melalui mekanisme yang berlaku, lalu hadirkan informasi yang akurat dan menenangkan." },
        ],
      },
      {
        title: "Dialog, keamanan, dan pelaporan",
        intro: "Tingkat respons harus mengikuti risiko. Dialog cocok untuk ketegangan awal; ancaman nyata memerlukan koordinasi resmi.",
        sections: [
          { heading: "Gunakan tangga respons", body: "Mulailah dari langkah yang paling aman dan efektif: klarifikasi fakta, dialog personal atau mediasi bila tepat, lalu eskalasi ke atasan atau pihak berwenang ketika terdapat ancaman serius.", bullets: ["Konflik pendapat: tenangkan suasana dan kembalikan pada tujuan bersama.", "Konten intoleran: ingatkan dengan pantas, catat sesuai kebutuhan, dan ikuti SOP.", "Ajakan kekerasan atau bahaya langsung: utamakan keselamatan, amankan informasi, dan laporkan melalui jalur resmi."] },
          { heading: "Hindari dua ekstrem", body: "Jangan membiarkan risiko nyata tanpa tindakan, tetapi jangan pula mengonfrontasi sendirian, memviralkan temuan, atau melakukan tindakan di luar kewenangan." },
        ],
      },
      {
        title: "Ringkasan strategi ujian",
        intro: "Gunakan daftar cek ini saat menghadapi soal situasional anti radikalisme.",
        sections: [
          { heading: "Lima pertanyaan cepat", body: "Baca situasi, lalu uji setiap opsi dengan lima pertanyaan:", bullets: ["Apakah tindakan ini menjaga kemanusiaan dan persatuan?", "Apakah informasi sudah diverifikasi?", "Apakah responsnya tenang dan tidak diskriminatif?", "Apakah tindakan ini cukup proaktif tanpa berlebihan?", "Apakah jalur dan kewenangannya tepat?"] },
          { heading: "Kalimat kunci", body: "Pilih respons yang tenang, verifikatif, inklusif, dialogis, dan prosedural. Kelima unsur ini membantu membedakan opsi yang sekadar reaktif dari opsi yang matang secara profesional." },
        ],
        callout: "Setelah memahami pola ini, lanjutkan dengan latihan situasional TKP untuk membiasakan diri membandingkan kualitas setiap opsi.",
      },
    ],
  },
];
