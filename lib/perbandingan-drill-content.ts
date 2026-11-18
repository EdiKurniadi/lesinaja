import type { Question } from "./types";

type PerbandinganDrillSeed = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const KD_CHOICES = [
  "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
  "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
  "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
  "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
  "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.",
];

const perbandinganSeeds: PerbandinganDrillSeed[] = [
  // =========================================================================
  // PAKET 1 — MUDAH / 1 LANGKAH (Soal 01–10)
  // Kunci: 01:C(2), 02:A(0), 03:D(3), 04:B(1), 05:E(4), 06:B(1), 07:A(0), 08:C(2), 09:D(3), 10:E(4)
  // =========================================================================
  {
    prompt:
      "Perbandingan banyak bibit pohon mangga dan bibit pohon kelengkeng di sebuah kebun pembibitan adalah 4 : 7. Jika terdapat 28 bibit pohon mangga, berapakah banyak bibit pohon kelengkeng?",
    choices: ["35 bibit", "42 bibit", "49 bibit", "56 bibit", "63 bibit"],
    answer: 2,
    explanation:
      "Perbandingan bibit kelengkeng terhadap mangga adalah 7 : 4:\n$$\\text{Bibit kelengkeng} = \\frac{7}{4} \\times 28 = 49\\text{ bibit}$$\nJadi, jawaban yang tepat adalah opsi C.",
  },
  {
    prompt:
      "Sebuah keran air mengalirkan air ke dalam tandon dengan debit tetap 18 liter per menit.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Volume air yang mengalir selama 5 menit | 85 liter |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P + Q = 180\\text{ liter}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 0,
    explanation:
      "Hitung volume air yang mengalir selama 5 menit:\n$$P = 18 \\times 5 = 90\\text{ liter}$$\nKarena $P = 90 > Q = 85$ (dan $P + Q = 175 \\neq 180$), maka opsi A benar.",
  },
  {
    prompt:
      "Suatu tim ekspedisi mendaki gunung membawa persediaan air minum yang cukup untuk 12 pendaki selama beberapa hari. Berapa hari persediaan air tersebut akan cukup jika jumlah pendaki menjadi 24 orang (asumsi konsumsi tiap orang per hari sama)?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Awalnya persediaan air cukup untuk 12 pendaki selama 8 hari.\n(2) Setiap hari, 12 pendaki tersebut mengonsumsi 36 liter air dari total stok 288 liter.",
    choices: KD_CHOICES,
    answer: 3,
    explanation:
      "- Pernyataan (1) SAJA cukup: dengan perbandingan berbalik nilai, lama persediaan untuk 24 pendaki adalah $\\frac{12 \\times 8}{24} = 4\\text{ hari}$.\n- Pernyataan (2) SAJA cukup: 24 pendaki mengonsumsi 72 liter per hari, sehingga stok 288 liter cukup untuk $\\frac{288}{72} = 4\\text{ hari}$.\nJadi, opsi D benar.",
  },
  {
    prompt:
      "Sebuah pabrik roti membutuhkan 3 kg tepung terigu untuk membuat 45 potong roti manis. Berapa kg tepung terigu yang dibutuhkan untuk membuat 120 potong roti manis yang sama?",
    choices: ["6 kg", "8 kg", "9 kg", "10 kg", "12 kg"],
    answer: 1,
    explanation:
      "Setiap 1 kg tepung terigu menghasilkan $\\frac{45}{3} = 15$ potong roti.\n$$\\text{Tepung dibutuhkan} = \\frac{120}{15} = 8\\text{ kg}$$\nJadi, jawaban yang tepat adalah opsi B.",
  },
  {
    prompt:
      "Pembuatan seragam batik sekolah dapat diselesaikan oleh 9 orang penjahit dalam waktu 8 hari. Jika pesanan tersebut harus selesai dalam waktu 6 hari, berapakah banyak penjahit yang diperlukan?",
    choices: ["8 orang", "9 orang", "10 orang", "11 orang", "12 orang"],
    answer: 4,
    explanation:
      "Menggunakan perbandingan berbalik nilai (beban kerja = $9 \\times 8 = 72$ orang-hari):\n$$\\text{Penjahit diperlukan} = \\frac{72}{6} = 12\\text{ orang}$$\nJadi, jawaban yang tepat adalah opsi E.",
  },
  {
    prompt:
      "Kereta ekspres menempuh perjalanan dari Stasiun Melati ke Stasiun Mawar dengan kecepatan konstan 80 km per jam selama 3 jam.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Waktu tempuh jika kecepatan ditingkatkan menjadi 120 km per jam | 2,4 jam |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P + Q = 5\\text{ jam}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "Jarak Stasiun Melati ke Stasiun Mawar adalah $80 \\times 3 = 240\\text{ km}$. Dengan kecepatan 120 km per jam:\n$$P = \\frac{240}{120} = 2\\text{ jam}$$\nKarena $P = 2 < Q = 2{,}4$ (dan $P + Q = 4{,}4 \\neq 5$), maka opsi B benar.",
  },
  {
    prompt:
      "Pada sebuah peta wisata berskala 1 : 250.000, jarak antara Pantai Indah dan Bukit Hijau tergambar sepanjang 6 cm. Berapakah jarak sebenarnya kedua tempat wisata tersebut (dalam km)?",
    choices: ["15 km", "18 km", "20 km", "25 km", "30 km"],
    answer: 0,
    explanation:
      "Jarak sebenarnya = $6\\text{ cm} \\times 250.000 = 1.500.000\\text{ cm} = 15\\text{ km}$.\nJadi, jawaban yang tepat adalah opsi A.",
  },
  {
    prompt:
      "Di dalam sebuah wadah penyimpanan terdapat baut dan mur. Berapakah jumlah seluruh baut dan mur di dalam wadah tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Perbandingan banyak baut dan mur adalah 5 : 3.\n(2) Selisih banyak baut dan mur adalah 24 buah.",
    choices: KD_CHOICES,
    answer: 2,
    explanation:
      "Pernyataan (1) saja hanya memberi rasio tanpa jumlah mutlak, sedangkan pernyataan (2) saja tidak memberi proporsi masing-masing. Dengan menggabungkan keduanya, selisih $5 - 3 = 2$ bagian sama dengan 24 buah (1 bagian = 12 buah), sehingga total $5 + 3 = 8$ bagian = 96 buah. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Hadiah uang tunai sebesar Rp1.200.000 dibagi kepada Juara 1 dan Juara 2 dengan perbandingan 7 : 5. Berapakah besar uang hadiah yang diterima Juara 1?",
    choices: ["Rp500.000", "Rp550.000", "Rp600.000", "Rp700.000", "Rp750.000"],
    answer: 3,
    explanation:
      "Total bagian = $7 + 5 = 12$ bagian.\n$$\\text{Hadiah Juara 1} = \\frac{7}{12} \\times \\text{Rp1.200.000} = \\text{Rp700.000}$$\nJadi, jawaban yang tepat adalah opsi D.",
  },
  {
    prompt:
      "Sebuah posko pengungsian memiliki stok makanan kaleng yang cukup untuk 40 orang selama 15 hari. Jika jumlah pengungsi bertambah 10 orang sehingga menjadi 50 orang, dalam berapa hari stok makanan kaleng tersebut akan habis?",
    choices: ["8 hari", "9 hari", "10 hari", "11 hari", "12 hari"],
    answer: 4,
    explanation:
      "Menggunakan perbandingan berbalik nilai:\n$$\\text{Lama habis} = \\frac{40 \\times 15}{50} = 12\\text{ hari}$$\nJadi, jawaban yang tepat adalah opsi E.",
  },

  // =========================================================================
  // PAKET 2 — SEDANG / 2 LANGKAH (Soal 11–20)
  // Kunci: 11:D(3), 12:C(2), 13:B(1), 14:A(0), 15:E(4), 16:A(0), 17:C(2), 18:E(4), 19:B(1), 20:D(3)
  // =========================================================================
  {
    prompt:
      "Perbandingan banyak pengunjung dewasa dan pengunjung anak-anak di sebuah museum sains pada hari Minggu adalah 7 : 4. Jika jumlah pengunjung dewasa lebih banyak 54 orang daripada pengunjung anak-anak, berapakah total seluruh pengunjung museum pada hari itu?",
    choices: [
      "162 orang",
      "176 orang",
      "180 orang",
      "198 orang",
      "216 orang",
    ],
    answer: 3,
    explanation:
      "Selisih rasio = $7 - 4 = 3$ bagian = 54 orang, sehingga 1 bagian = 18 orang.\nTotal seluruh pengunjung = $(7 + 4) \\times 18 = 11 \\times 18 = 198\\text{ orang}$. Jadi, opsi D benar.",
  },
  {
    prompt:
      "Sebuah generator listrik menghabiskan 12 liter solar untuk beroperasi penuh selama 15 jam.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Banyak solar yang diperlukan untuk mengoperasikan generator selama 35 jam | 28 liter |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = 2Q$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 2,
    explanation:
      "Konsumsi solar generator per jam adalah $\\frac{12}{15} = \\frac{4}{5}\\text{ liter}$ per jam.\n$$P = \\frac{4}{5} \\times 35 = 28\\text{ liter}$$\nKarena $P = Q = 28\\text{ liter}$, maka opsi C benar.",
  },
  {
    prompt:
      "Pembangunan sebuah dermaga kayu kecil semula dijadwalkan rampung dalam 28 hari oleh 12 orang tukang. Mandor proyek berencana menambah sejumlah tukang sejak hari pertama agar dermaga selesai lebih cepat. Berapa hari lebih cepat dermaga tersebut selesai dibandingkan jadwal semula?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Anggaran konsumsi harian seluruh tukang adalah Rp600.000 per hari.\n(2) Mandor menambah 4 orang tukang baru sehingga seluruhnya berjumlah 16 orang sejak hari pertama.",
    choices: KD_CHOICES,
    answer: 1,
    explanation:
      "- Pernyataan (1) SAJA tidak cukup karena anggaran konsumsi tidak menentukan kecepatan kerja maupun jumlah tukang.\n- Pernyataan (2) SAJA cukup karena dengan 16 tukang, waktu kerja menjadi $\\frac{28 \\times 12}{16} = 21\\text{ hari}$ (lebih cepat $28 - 21 = 7\\text{ hari}$).\nJadi, opsi B benar.",
  },
  {
    prompt:
      "Perbandingan berat hasil panen kopi milik Pak Surya dan Pak Hendra adalah 4 : 3, sedangkan perbandingan berat hasil panen kopi milik Pak Hendra dan Pak Jamal adalah 2 : 5. Jika jumlah total panen kopi mereka bertiga adalah 290 kg, berapakah berat panen kopi milik Pak Hendra?",
    choices: ["60 kg", "70 kg", "80 kg", "90 kg", "150 kg"],
    answer: 0,
    explanation:
      "Samakan bagian Pak Hendra menggunakan KPK dari 3 dan 2 yaitu 6:\nSurya : Hendra : Jamal = $8 : 6 : 15$ (jumlah bagian = $8 + 6 + 15 = 29$).\n1 bagian = $\\frac{290}{29} = 10\\text{ kg}$, sehingga hasil panen Pak Hendra = $6 \\times 10 = 60\\text{ kg}$. Jadi, opsi A benar.",
  },
  {
    prompt:
      "Tiga tahun yang akan datang, perbandingan usia Bayu dan Candra adalah 4 : 5. Jika jumlah usia mereka berdua pada saat ini adalah 39 tahun, berapakah usia Candra saat ini?",
    choices: ["15 tahun", "17 tahun", "18 tahun", "20 tahun", "22 tahun"],
    answer: 4,
    explanation:
      "Jumlah usia mereka 3 tahun lagi adalah $39 + 2(3) = 45\\text{ tahun}$.\nUsia Candra 3 tahun lagi = $\\frac{5}{4 + 5} \\times 45 = 25\\text{ tahun}$.\nMaka usia Candra saat ini = $25 - 3 = 22\\text{ tahun}$. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Untuk mencetak 2 rim kertas brosur promosi, sebuah mesin fotokopi menghabiskan 400 ml tinta cair dengan ketebalan cetak yang seragam (1 rim = 500 lembar).\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Volume tinta cair yang dibutuhkan untuk mencetak 1.750 lembar brosur | 650 ml |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P - Q = 100\\text{ ml}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 0,
    explanation:
      "2 rim = 1.000 lembar membutuhkan 400 ml, atau $0{,}4\\text{ ml}$ per lembar.\nUntuk 1.750 lembar: $P = 0{,}4 \\times 1.750 = 700\\text{ ml}$.\nKarena $P = 700 > Q = 650$ (selisihnya 50 ml, bukan 100 ml), maka opsi A benar.",
  },
  {
    prompt:
      "Sebuah sanggar batik menugaskan 4 pengrajin yang mampu menyelesaikan pewarnaan 72 helai kain batik dalam waktu 6 hari. Berapa helai kain batik yang dapat diselesaikan oleh 7 pengrajin dalam waktu 5 hari dengan kecepatan kerja yang sama?",
    choices: [
      "84 helai",
      "96 helai",
      "105 helai",
      "112 helai",
      "120 helai",
    ],
    answer: 2,
    explanation:
      "Laju kerja per pengrajin per hari = $\\frac{72}{4 \\times 6} = 3\\text{ helai}$.\nUntuk 7 pengrajin selama 5 hari = $7 \\times 5 \\times 3 = 105\\text{ helai}$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Di sebuah toko alat musik, perbandingan jumlah gitar akustik dan gitar elektrik pada awal bulan adalah 3 : 4. Berapakah banyak gitar akustik yang tersisa pada akhir bulan?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Total seluruh gitar di toko pada awal bulan adalah 35 unit.\n(2) Sepanjang bulan tersebut terjual sebanyak 10 unit gitar.",
    choices: KD_CHOICES,
    answer: 4,
    explanation:
      "Dari (1), diketahui pada awal bulan terdapat 15 gitar akustik dan 20 gitar elektrik. Namun pada pernyataan (2), tidak disebutkan berapa unit dari 10 gitar terjual tersebut yang merupakan gitar akustik dan berapa yang gitar elektrik. Kedua pernyataan tetap tidak cukup. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Pengecatan pagar pembatas kawasan taman kota semula direncanakan selesai dalam 24 hari oleh 15 orang petugas. Karena akan segera diadakan festival daerah, pekerjaan harus rampung 4 hari lebih cepat dari rencana awal. Berapa orang petugas tambahan yang harus diturunkan?",
    choices: ["2 orang", "3 orang", "4 orang", "5 orang", "6 orang"],
    answer: 1,
    explanation:
      "Target waktu baru adalah $24 - 4 = 20\\text{ hari}$.\nTotal petugas yang diperlukan = $\\frac{24 \\times 15}{20} = 18\\text{ orang}$.\nBanyak petugas tambahan = $18 - 15 = 3\\text{ orang}$. Jadi, opsi B benar.",
  },
  {
    prompt:
      "Sebuah mesin pengolah kopi sangrai mampu menggiling 52 kg biji kopi dalam waktu 8 menit. Jika mesin tersebut dioperasikan tanpa henti selama 22 menit dengan kecepatan konstan, berapa kg biji kopi yang berhasil digiling?",
    choices: ["117 kg", "126 kg", "130 kg", "143 kg", "156 kg"],
    answer: 3,
    explanation:
      "Kecepatan mesin penggiling = $\\frac{52}{8} = 6{,}5\\text{ kg}$ per menit.\nSelama 22 menit = $6{,}5 \\times 22 = 143\\text{ kg}$. Jadi, opsi D benar.",
  },

  // =========================================================================
  // PAKET 3 — SULIT / HOTS (Soal 21–30)
  // Kunci: 21:C(2), 22:B(1), 23:A(0), 24:E(4), 25:D(3), 26:B(1), 27:A(0), 28:C(2), 29:E(4), 30:D(3)
  // =========================================================================
  {
    prompt:
      "Di sebuah perkebunan hidroponik, perbandingan jumlah tanaman selada dan tanaman pakcoy mula-mula adalah 4 : 7. Setelah dipanen sebanyak 14 batang pakcoy dan ditanam tambahan 10 batang selada baru, perbandingan jumlah tanaman selada dan pakcoy berubah menjadi 6 : 7. Berapakah jumlah seluruh tanaman selada dan pakcoy di kebun tersebut mula-mula?",
    choices: [
      "99 batang",
      "110 batang",
      "121 batang",
      "132 batang",
      "143 batang",
    ],
    answer: 2,
    explanation:
      "Misalkan jumlah awal selada = $4k$ dan pakcoy = $7k$.\n$$\\frac{4k + 10}{7k - 14} = \\frac{6}{7} \\implies 28k + 70 = 42k - 84 \\implies 14k = 154 \\implies k = 11$$\nJumlah seluruh tanaman mula-mula = $(4 + 7) \\times 11 = 121\\text{ batang}$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Sebanyak 5 orang operator yang bekerja 6 jam sehari mampu merakit 180 unit komponen elektronik dalam waktu 4 hari. Saat ini pabrik menargetkan perakitan 420 unit komponen yang harus selesai dalam waktu 5 hari oleh 7 orang operator.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Jam kerja per hari yang dibutuhkan para operator | 9 jam/hari |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$2P = Q + 8$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "Laju kerja = $\\frac{180}{5 \\times 6 \\times 4} = 1{,}5\\text{ unit}$ per orang-jam.\nUntuk target 420 unit dalam 5 hari oleh 7 operator:\n$$7 \\times P \\times 5 \\times 1{,}5 = 420 \\implies 52{,}5P = 420 \\implies P = 8\\text{ jam/hari}$$\nKarena $P = 8 < Q = 9$ (dan $2P = 16 \\neq Q + 8 = 17$), maka opsi B benar.",
  },
  {
    prompt:
      "Perbaikan jalur rel kereta wisata ditargetkan tuntas dalam waktu 36 hari oleh 16 orang teknisi. Setelah proyek berjalan beberapa hari, pengerjaan terpaksa dihentikan sementara akibat tanah longsor sehingga pelaksana harus menambah teknisi agar jadwal akhir tidak molor. Berapa orang teknisi tambahan yang harus direkrut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Pekerjaan sudah berlangsung 9 hari sebelum terhenti selama 3 hari akibat tanah longsor.\n(2) Biaya logistik harian di lokasi proyek meningkat sebesar 20% selama masa perbaikan.",
    choices: KD_CHOICES,
    answer: 0,
    explanation:
      "- Pernyataan (1) SAJA cukup: sisa waktu normal adalah $36 - 9 = 27\\text{ hari}$ (beban $27 \\times 16$ orang-hari). Setelah terhenti 3 hari, sisa hari efektif menjadi $27 - 3 = 24\\text{ hari}$, sehingga butuh $\\frac{27 \\times 16}{24} = 18$ teknisi (tambahan 2 orang).\n- Pernyataan (2) SAJA tidak cukup karena biaya logistik tidak memengaruhi durasi maupun tenaga kerja.\nJadi, opsi A benar.",
  },
  {
    prompt:
      "Banyak penumpang di Gerbong Eksekutif sama dengan tiga kali banyak penumpang di Gerbong Ekonomi. Sementara itu, banyak penumpang di Gerbong Bisnis tercatat 14 orang lebih banyak daripada penumpang di Gerbong Ekonomi. Jika total penumpang di ketiga gerbong tersebut adalah 104 orang, berapakah banyak penumpang di Gerbong Eksekutif?",
    choices: ["18 orang", "32 orang", "36 orang", "48 orang", "54 orang"],
    answer: 4,
    explanation:
      "Misalkan penumpang Gerbong Ekonomi = $E$. Maka Eksekutif = $3E$ dan Bisnis = $E + 14$.\n$$3E + E + (E + 14) = 104 \\implies 5E = 90 \\implies E = 18\\text{ orang}$$\nMaka banyak penumpang di Gerbong Eksekutif = $3 \\times 18 = 54\\text{ orang}$. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Pembangunan embung air desa ditargetkan selesai dalam waktu 45 hari oleh 24 orang pekerja. Setelah bekerja selama 15 hari, proyek terhenti selama 6 hari akibat gangguan pasokan semen. Ketika pekerjaan dilanjutkan kembali, 4 orang pekerja mengundurkan diri dan tidak digantikan. Berapa hari keterlambatan penyelesaian proyek embung air tersebut dari target semula?",
    choices: ["6 hari", "8 hari", "10 hari", "12 hari", "15 hari"],
    answer: 3,
    explanation:
      "Sisa beban kerja setelah 15 hari = $(45 - 15) \\times 24 = 720$ orang-hari.\nSisa pekerja = $24 - 4 = 20$ orang, sehingga sisa pekerjaan selesai dalam $\\frac{720}{20} = 36\\text{ hari}$.\nTotal durasi proyek = $15 + 6 + 36 = 57\\text{ hari}$.\nKeterlambatan = $57 - 45 = 12\\text{ hari}$. Jadi, opsi D benar.",
  },
  {
    prompt:
      "Pada sebuah perusahaan ekspedisi logistik:\n- Regu Pagi beranggotakan 6 karyawan yang bekerja 5 jam sehari mampu menyortir 360 paket dalam waktu 4 hari.\n- Regu Siang memiliki kecepatan penyortiran per orang-jam yang sama dengan Regu Pagi, dengan target menyortir 630 paket dalam waktu 5 hari oleh 7 orang karyawan.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Lama jam kerja per hari yang dibutuhkan Regu Siang | 7 jam/hari |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P + Q = 15$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "Laju kerja Regu Pagi = $\\frac{360}{6 \\times 5 \\times 4} = 3\\text{ paket}$ per orang-jam.\nUntuk Regu Siang: $7 \\times P \\times 5 \\times 3 = 630 \\implies 105P = 630 \\implies P = 6\\text{ jam/hari}$.\nKarena $P = 6 < Q = 7$ (dan $P + Q = 13$), maka opsi B benar.",
  },
  {
    prompt:
      "Sebuah kapal riset laut membawa cadangan air bersih yang cukup untuk 32 awak kapal selama 21 hari pelayaran. Setelah berlayar selama 6 hari, kapal singgah di sebuah pulau dan menaikkan 8 orang peneliti tambahan. Berapa hari lagi sisa cadangan air bersih tersebut akan cukup untuk seluruh orang di kapal?",
    choices: ["12 hari", "14 hari", "15 hari", "16 hari", "18 hari"],
    answer: 0,
    explanation:
      "Sisa cadangan air setelah 6 hari = $32 \\times (21 - 6) = 32 \\times 15 = 480$ orang-hari.\nDengan total $32 + 8 = 40$ orang di kapal, sisa air bersih cukup untuk $\\frac{480}{40} = 12\\text{ hari}$ lagi. Jadi, opsi A benar.",
  },
  {
    prompt:
      "Total peserta lomba lari maraton dari kategori Pelajar, Mahasiswa, dan Umum adalah 150 orang. Berapakah jumlah peserta kategori Umum?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Perbandingan banyak peserta kategori Pelajar dan Mahasiswa adalah 2 : 3.\n(2) Banyak peserta kategori Mahasiswa sama dengan 3/7 dari jumlah gabungan peserta kategori Pelajar dan Umum.",
    choices: KD_CHOICES,
    answer: 2,
    explanation:
      "- Pernyataan (1) saja tidak cukup karena nilai mutlak peserta belum diketahui.\n- Pernyataan (2) saja memberi $M = \\frac{3}{7}(P_l + U)$ dengan $P_l + M + U = 150$, sehingga $M = 45$ dan $P_l + U = 105$, namun belum memisahkan $P_l$ dan $U$.\n- Keduanya bersama-sama cukup: dari (1), $P_l = \\frac{2}{3} \\times 45 = 30$, sehingga $U = 105 - 30 = 75$ orang.\nJadi, opsi C benar.",
  },
  {
    prompt:
      "Pemasangan jaringan listrik bawah tanah ditargetkan selesai dalam waktu 32 hari oleh 18 orang teknisi. Setelah bekerja selama 8 hari, pekerjaan terpaksa dihentikan selama 6 hari karena menunggu izin penutupan jalan. Agar pemasangan tetap rampung tepat waktu, berapa orang teknisi tambahan yang harus direkrut?",
    choices: ["2 orang", "3 orang", "4 orang", "5 orang", "6 orang"],
    answer: 4,
    explanation:
      "Sisa pekerjaan normal = $(32 - 8) \\times 18 = 24 \\times 18$ orang-hari.\nSisa waktu efektif setelah jeda 6 hari = $24 - 6 = 18\\text{ hari}$.\nTotal teknisi dibutuhkan = $\\frac{24 \\times 18}{18} = 24$ orang $\\implies$ tambahan = $24 - 18 = 6\\text{ orang}$. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Dalam sebuah turnamen gim daring, skor tim Elang sama dengan dua kali skor tim Rajawali. Sementara itu, skor tim Rajawali terpaut 35 poin lebih tinggi daripada skor tim Merpati. Jika jumlah total skor ketiga tim tersebut adalah 205 poin, berapakah skor tim Rajawali?",
    choices: ["45 poin", "50 poin", "55 poin", "60 poin", "65 poin"],
    answer: 3,
    explanation:
      "Misalkan skor tim Rajawali = $R$. Maka Elang = $2R$ dan Merpati = $R - 35$.\n$$2R + R + (R - 35) = 205 \\implies 4R = 240 \\implies R = 60\\text{ poin}$$\nJadi, jawaban yang tepat adalah opsi D.",
  },

  // =========================================================================
  // PAKET 4 — CAMPURAN SET A (3 Mudah [31,35,39], 4 Sedang [32,33,36,38], 3 Sulit [34,37,40])
  // Kunci: 31:A(0), 32:C(2), 33:D(3), 34:E(4), 35:B(1), 36:E(4), 37:D(3), 38:B(1), 39:C(2), 40:A(0)
  // =========================================================================
  {
    prompt:
      "Di sebuah kedai jus buah, perbandingan volume sirup mangga dan air mineral dalam satu resep campuran adalah 2 : 7. Jika barista menuangkan 420 ml air mineral, berapa ml sirup mangga yang dibutuhkan?",
    choices: ["120 ml", "140 ml", "150 ml", "160 ml", "180 ml"],
    answer: 0,
    explanation:
      "Volume sirup mangga = $\\frac{2}{7} \\times 420 = 120\\text{ ml}$. Jadi, jawaban yang tepat adalah opsi A.",
  },
  {
    prompt:
      "Sebuah mesin pembuat keripik kentang mampu memproduksi 45 bungkus keripik dalam waktu 3 menit pada kecepatan konstan.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Banyak bungkus keripik yang diproduksi selama 14 menit | 210 bungkus |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = Q + 15$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 2,
    explanation:
      "Kecepatan produksi = $\\frac{45}{3} = 15\\text{ bungkus}$ per menit.\nSelama 14 menit, $P = 15 \\times 14 = 210\\text{ bungkus}$. Maka $P = Q$ (opsi C).",
  },
  {
    prompt:
      "Enam tahun yang lalu, perbandingan usia Ibu dan Putri adalah 5 : 2. Berapakah usia Ibu saat ini?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Jumlah usia Ibu dan Putri pada saat ini adalah 68 tahun.\n(2) Selisih usia Ibu dan Putri pada saat ini adalah 24 tahun.",
    choices: KD_CHOICES,
    answer: 3,
    explanation:
      "Enam tahun lalu, misalkan usia Ibu = $5k$ dan usia Putri = $2k$ (sekarang $5k + 6$ dan $2k + 6$).\n- Pernyataan (1) SAJA cukup: $(5k + 6) + (2k + 6) = 68 \\implies 7k = 56 \\implies k = 8$ (Ibu sekarang 46 tahun).\n- Pernyataan (2) SAJA cukup: selisih usia selalu tetap $5k - 2k = 3k = 24 \\implies k = 8$ (Ibu sekarang 46 tahun).\nJadi, opsi D benar.",
  },
  {
    prompt:
      "Pekerjaan pengaspalan jalan lingkungan ditargetkan selesai dalam waktu 42 hari oleh 20 orang pekerja. Setelah pekerjaan berjalan 12 hari, pengaspalan terhenti selama 6 hari akibat kerusakan alat berat. Ketika pekerjaan dilanjutkan kembali, 5 orang pekerja dipindahkan ke proyek lain tanpa ada pekerja pengganti. Proyek pengaspalan jalan tersebut akan selesai terlambat berapa hari dari jadwal semula?",
    choices: ["8 hari", "10 hari", "12 hari", "14 hari", "16 hari"],
    answer: 4,
    explanation:
      "Sisa beban kerja = $(42 - 12) \\times 20 = 600$ orang-hari.\nSisa pekerja = $20 - 5 = 15$ orang, sehingga sisa pekerjaan rampung dalam $\\frac{600}{15} = 40\\text{ hari}$.\nTotal durasi = $12 + 6 + 40 = 58\\text{ hari}$, sehingga terlambat $58 - 42 = 16\\text{ hari}$. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Pemasangan lantai keramik aula dapat diselesaikan oleh 10 orang tukang dalam waktu 12 hari. Jika pekerjaan yang sama ingin diselesaikan dalam waktu 8 hari, berapa orang tukang yang dibutuhkan?",
    choices: ["14 orang", "15 orang", "16 orang", "18 orang", "20 orang"],
    answer: 1,
    explanation:
      "Menggunakan perbandingan berbalik nilai:\n$$\\text{Tukang dibutuhkan} = \\frac{10 \\times 12}{8} = 15\\text{ orang}$$\nJadi, jawaban yang tepat adalah opsi B.",
  },
  {
    prompt:
      "Dua sekolah menyelenggarakan try out tingkat kabupaten:\n- Di SMA Merdeka, perbandingan banyak siswa peserta jurusan IPA dan IPS adalah 4 : 3.\n- Di SMA Harapan, perbandingan banyak siswa peserta jurusan IPA dan IPS adalah 5 : 4.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Banyak peserta jurusan IPA di SMA Merdeka | Banyak peserta jurusan IPA di SMA Harapan |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$4Q = 5P$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 4,
    explanation:
      "Rasio jurusan pada masing-masing sekolah tidak disertai jumlah total siswa peserta di tiap sekolah. Nilai $P$ bisa lebih besar, sama, atau lebih kecil daripada $Q$. Oleh karena itu, informasi tidak cukup (opsi E).",
  },
  {
    prompt:
      "Sebuah bengkel perakitan sepeda menugaskan 4 mekanik yang bekerja 5 jam sehari dan mampu merakit 60 unit sepeda dalam waktu 3 hari. Jika bengkel menerima pesanan 210 unit sepeda yang harus selesai dalam waktu 5 hari dengan jam kerja 6 jam sehari, berapakah minimal mekanik yang harus bertugas?",
    choices: [
      "4 mekanik",
      "5 mekanik",
      "6 mekanik",
      "7 mekanik",
      "8 mekanik",
    ],
    answer: 3,
    explanation:
      "Laju kerja = $\\frac{60}{4 \\times 5 \\times 3} = 1\\text{ unit}$ per orang-jam.\nUntuk target 210 unit dalam 5 hari dengan 6 jam sehari:\n$$m \\times 6 \\times 5 \\times 1 = 210 \\implies 30m = 210 \\implies m = 7\\text{ mekanik}$$\nJadi, opsi D benar.",
  },
  {
    prompt:
      "Sebuah kapal tangker memuat 10 buah pompa penyedot identik untuk mengosongkan tangki minyak. Jika 2 buah pompa rusak sejak awal sehingga hanya 8 pompa yang beroperasi, berapa jam total waktu yang dibutuhkan untuk mengosongkan tangki minyak tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Kapasitas maksimal tangki minyak kapal adalah 480.000 liter.\n(2) Jika kesepuluh pompa beroperasi normal bersama-sama, tangki penuh akan kosong dalam waktu 12 jam.",
    choices: KD_CHOICES,
    answer: 1,
    explanation:
      "- Pernyataan (1) SAJA tidak cukup karena kapasitas tangki tanpa debit pompa per jam tidak menentukan waktu pengosongan.\n- Pernyataan (2) SAJA cukup: dengan 8 pompa yang beroperasi, waktu kerja menjadi $\\frac{10 \\times 12}{8} = 15\\text{ jam}$.\nJadi, opsi B benar.",
  },
  {
    prompt:
      "Sebuah truk logistik menempuh jarak 135 km dalam waktu 3 jam dengan kecepatan tetap. Berapa lama waktu tempuh truk tersebut untuk perjalanan sejauh 225 km pada kecepatan yang sama?",
    choices: ["4 jam", "4,5 jam", "5 jam", "5,5 jam", "6 jam"],
    answer: 2,
    explanation:
      "Kecepatan rata-rata truk = $\\frac{135}{3} = 45\\text{ km}$ per jam.\nWaktu tempuh untuk 225 km = $\\frac{225}{45} = 5\\text{ jam}$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Di sebuah kolam budi daya ikan terdapat ikan nila dan ikan patin dengan perbandingan 3 : 4. Setelah dipanen 10 ekor ikan patin dan ditebar kembali 15 ekor benih ikan nila, perbandingan jumlah ikan nila dan ikan patin berubah menjadi 3 : 2. Berapakah jumlah total seluruh ikan di kolam tersebut mula-mula?",
    choices: ["70 ekor", "75 ekor", "84 ekor", "91 ekor", "98 ekor"],
    answer: 0,
    explanation:
      "Misalkan ikan nila awal = $3k$ dan ikan patin awal = $4k$.\n$$\\frac{3k + 15}{4k - 10} = \\frac{3}{2} \\implies 6k + 30 = 12k - 30 \\implies 6k = 60 \\implies k = 10$$\nTotal ikan mula-mula = $(3 + 4) \\times 10 = 70\\text{ ekor}$. Jadi, opsi A benar.",
  },

  // =========================================================================
  // PAKET 5 — CAMPURAN SET B (3 Mudah [41,45,49], 4 Sedang [42,43,46,48], 3 Sulit [44,47,50])
  // Kunci: 41:E(4), 42:B(1), 43:C(2), 44:A(0), 45:A(0), 46:C(2), 47:D(3), 48:E(4), 49:B(1), 50:D(3)
  // =========================================================================
  {
    prompt:
      "Perbandingan berat kemasan kopi robusta dan arabika di sebuah rak toko adalah 5 : 3. Jika berat kemasan kopi robusta adalah 250 gram, berapakah berat kemasan kopi arabika?",
    choices: [
      "100 gram",
      "120 gram",
      "125 gram",
      "135 gram",
      "150 gram",
    ],
    answer: 4,
    explanation:
      "Berat kopi arabika = $\\frac{3}{5} \\times 250 = 150\\text{ gram}$. Jadi, jawaban yang tepat adalah opsi E.",
  },
  {
    prompt:
      "Untuk mengemas 1 gros cangkir keramik dibutuhkan kotak pelindung sebanyak 12 dus ukuran sedang dengan kapasitas sama setiap dus (1 gros = 144 buah).\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Banyak dus yang dibutuhkan untuk mengemas 8 lusin cangkir keramik | 10 dus |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P + Q = 20\\text{ dus}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "1 gros = 144 cangkir dikemas dalam 12 dus, berarti 1 dus memuat 12 cangkir (1 lusin).\nUntuk 8 lusin cangkir: $P = 8\\text{ dus}$.\nKarena $P = 8 < Q = 10$ (dan $P + Q = 18$), maka opsi B benar.",
  },
  {
    prompt:
      "Jumlah poin prestasi dari tiga cabang olahraga (Renang, Lari, dan Bulu Tangkis) keseluruhannya adalah 248 poin. Berapakah selisih poin cabang Lari dan Renang?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Perbandingan poin cabang Renang dan Lari adalah 3 : 5.\n(2) Perbandingan poin cabang Lari dan Bulu Tangkis adalah 2 : 3.",
    choices: KD_CHOICES,
    answer: 2,
    explanation:
      "Pernyataan (1) saja tidak menghubungkan dengan Bulu Tangkis, dan pernyataan (2) saja tidak menghubungkan dengan Renang. Dengan menggabungkan keduanya (KPK 5 dan 2 adalah 10), rasio Renang : Lari : Bulu Tangkis = $6 : 10 : 15$ (total 31 bagian = 248 poin, 1 bagian = 8 poin). Selisih Lari dan Renang = $(10 - 6) \\times 8 = 32\\text{ poin}$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Sebuah peternakan itik memiliki cadangan pakan konsentrat yang cukup untuk 45 ekor itik selama 20 hari. Setelah 8 hari berjalan, sebanyak 15 ekor itik terjual ke pasar. Berapa hari lagi sisa pakan tersebut cukup untuk memberi makan itik yang tersisa?",
    choices: ["18 hari", "19 hari", "20 hari", "22 hari", "24 hari"],
    answer: 0,
    explanation:
      "Sisa persediaan pakan = $45 \\times (20 - 8) = 45 \\times 12 = 540$ porsi-hari.\nSisa itik = $45 - 15 = 30$ ekor, sehingga pakan habis dalam $\\frac{540}{30} = 18\\text{ hari}$.\nJadi, opsi A benar.",
  },
  {
    prompt:
      "Pekerjaan penggalian sumur bor dapat diselesaikan oleh 8 orang tukang dalam waktu 18 hari. Jika hanya tersedia 6 orang tukang, dalam berapa hari penggalian sumur bor tersebut akan selesai?",
    choices: ["24 hari", "25 hari", "26 hari", "27 hari", "30 hari"],
    answer: 0,
    explanation:
      "Menggunakan perbandingan berbalik nilai:\n$$\\text{Waktu selesai} = \\frac{8 \\times 18}{6} = 24\\text{ hari}$$\nJadi, jawaban yang tepat adalah opsi A.",
  },
  {
    prompt:
      "Perbandingan banyak koleksi koin kuno dan perangko langka milik Pak Darmawan adalah 3 : 8. Diketahui selisih banyak perangko langka dan koin kuno tersebut adalah 45 buah.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Jumlah total seluruh koin kuno dan perangko langka milik Pak Darmawan | 99 buah |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = Q + 9$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 2,
    explanation:
      "Selisih rasio = $8 - 3 = 5$ bagian = 45 buah, sehingga 1 bagian = 9 buah.\nTotal koleksi $P = (3 + 8) \\times 9 = 11 \\times 9 = 99\\text{ buah}$.\nKarena $P = Q = 99$, maka opsi C benar.",
  },
  {
    prompt:
      "Sebuah tim pendata sensus beranggotakan 5 petugas yang bekerja 4 jam sehari mampu mendata 100 kepala keluarga (KK) dalam waktu 2 hari. Jika ditargetkan mendata 450 KK dalam waktu 3 hari dengan jam kerja dinaikkan menjadi 5 jam sehari, berapa banyak tambahan petugas yang harus direkrut?",
    choices: ["4 orang", "5 orang", "6 orang", "7 orang", "12 orang"],
    answer: 3,
    explanation:
      "Laju kerja = $\\frac{100}{5 \\times 4 \\times 2} = 2{,}5\\text{ KK}$ per orang-jam.\nUntuk target 450 KK dalam 3 hari pada 5 jam per hari:\n$$p \\times 5 \\times 3 \\times 2{,}5 = 450 \\implies 37{,}5p = 450 \\implies p = 12\\text{ orang}$$\nTambahan petugas = $12 - 5 = 7\\text{ orang}$. Jadi, opsi D benar.",
  },
  {
    prompt:
      "Sebuah dapur umum memiliki cadangan gas elpiji untuk memasak makanan bagi para relawan. Jika jumlah relawan bertambah 15 orang, berapa hari lagi cadangan gas tersebut bertahan?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Rata-rata pemakaian gas untuk memasak porsi setiap 1 orang relawan adalah 0,2 kg per hari.\n(2) Total cadangan gas yang masih tersimpan di dapur umum saat ini adalah 60 kg.",
    choices: KD_CHOICES,
    answer: 4,
    explanation:
      "Gabungan (1) dan (2) memberi total stok 60 kg serta pemakaian 0,2 kg per orang per hari (setara 300 porsi-hari), namun jumlah relawan awal sebelum bertambah 15 orang tidak diketahui sehingga lama bertahan tidak dapat ditentukan. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Dalam resep adonan donat, perbandingan berat mentega dan gula halus adalah 4 : 3. Jika pembuat roti menggunakan 200 gram mentega, berapa gram gula halus yang dibutuhkan?",
    choices: [
      "120 gram",
      "150 gram",
      "160 gram",
      "180 gram",
      "200 gram",
    ],
    answer: 1,
    explanation:
      "Berat gula halus = $\\frac{3}{4} \\times 200 = 150\\text{ gram}$. Jadi, jawaban yang tepat adalah opsi B.",
  },
  {
    prompt:
      "Proyek rehabilitasi saluran drainase kota ditargetkan selesai dalam waktu 40 hari oleh 24 orang pekerja. Setelah berjalan selama 10 hari, proyek terpaksa terhenti selama 6 hari akibat gangguan jaringan pipa bawah tanah. Jika dinas terkait meminta proyek tersebut selesai 4 hari lebih cepat dari jadwal semula, berapa orang pekerja tambahan yang harus didatangkan?",
    choices: ["6 orang", "8 orang", "10 orang", "12 orang", "36 orang"],
    answer: 3,
    explanation:
      "Sisa beban kerja = $(40 - 10) \\times 24 = 720$ orang-hari.\nTarget selesai baru = $40 - 4 = 36\\text{ hari}$.\nWaktu yang telah berlalu (kerja + jeda) = $10 + 6 = 16\\text{ hari}$, sehingga sisa hari efektif = $36 - 16 = 20\\text{ hari}$.\nTotal pekerja dibutuhkan = $\\frac{720}{20} = 36$ orang $\\implies$ pekerja tambahan = $36 - 24 = 12\\text{ orang}$. Jadi, opsi D benar.",
  },
];

export const PERBANDINGAN_DRILL_QUESTIONS: Question[] = perbandinganSeeds.map((seed, index) => ({
  id: `tiu-perbandingan-${String(index + 1).padStart(3, "0")}`,
  category: "TIU",
  topic: "Perbandingan",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: choiceIndex === seed.answer ? 5 : 0,
  })),
  explanation: seed.explanation,
}));
