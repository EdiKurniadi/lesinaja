import type { Question } from "./types";

type AritmatikaDrillSeed = {
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

const aritmatikaSosialSeeds: AritmatikaDrillSeed[] = [
  // =========================================================================
  // PAKET 1 — MUDAH / 1 LANGKAH (Soal 01–10)
  // Kunci: 01:B(1), 02:A(0), 03:D(3), 04:E(4), 05:C(2), 06:B(1), 07:A(0), 08:C(2), 09:D(3), 10:E(4)
  // =========================================================================
  {
    prompt:
      "Sebuah kemeja batik berlabel harga Rp250.000 sedang mendapat diskon sebesar 20%. Harga yang harus dibayar pembeli setelah dipotong diskon adalah ...",
    choices: ["Rp180.000", "Rp200.000", "Rp210.000", "Rp225.000", "Rp230.000"],
    answer: 1,
    explanation:
      "Diskon sebesar 20% berarti pembeli membayar 80% dari harga label.\n$$\\text{Harga bayar} = 80\\% \\times \\text{Rp250.000} = \\text{Rp200.000}$$\nJadi, jawaban yang tepat adalah opsi B.",
  },
  {
    prompt:
      "Sinta menabung uang di bank sebesar Rp4.000.000 dengan sistem bunga tunggal sebesar 6% per tahun.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Nominal bunga yang diterima Sinta setelah 1 tahun | Rp200.000 |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = 2Q$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 0,
    explanation:
      "Hitung nilai kuantitas $P$ (bunga tunggal selama 1 tahun):\n$$P = 6\\% \\times \\text{Rp4.000.000} = \\text{Rp240.000}$$\nDiketahui $Q = \\text{Rp200.000}$. Karena $\\text{Rp240.000} > \\text{Rp200.000}$ (dan $P \\neq 2Q$), maka $P > Q$. Jadi, opsi A benar.",
  },
  {
    prompt:
      "Satu karung beras memiliki berat kotor (bruto) sebesar 50 kg. Berapakah berat bersih (neto) beras tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Berat karung kosong (tara) adalah 1,5 kg.\n(2) Persentase tara terhadap bruto adalah 3%.",
    choices: KD_CHOICES,
    answer: 3,
    explanation:
      "- Pernyataan (1) SAJA cukup: $\\text{Neto} = \\text{Bruto} - \\text{Tara} = 50 - 1{,}5 = 48{,}5\\text{ kg}$.\n- Pernyataan (2) SAJA cukup: $\\text{Neto} = (100\\% - 3\\%) \\times 50 = 97\\% \\times 50 = 48{,}5\\text{ kg}$.\nKarena masing-masing pernyataan saja cukup, jawaban yang tepat adalah opsi D.",
  },
  {
    prompt:
      "Bu Rina membeli sebuah kipas angin seharga Rp400.000 (belum termasuk pajak). Jika pembelian tersebut dikenai PPN sebesar 10%, total harga yang harus dibayar Bu Rina adalah ...",
    choices: ["Rp410.000", "Rp420.000", "Rp425.000", "Rp430.000", "Rp440.000"],
    answer: 4,
    explanation:
      "Harga setelah PPN 10% adalah 110% dari harga awal:\n$$\\text{Total bayar} = 110\\% \\times \\text{Rp400.000} = \\text{Rp440.000}$$\nJadi, jawaban yang tepat adalah opsi E.",
  },
  {
    prompt:
      "Seorang pedagang membeli sepasang sepatu seharga Rp200.000 dan berhasil memperoleh keuntungan sebesar Rp50.000 saat menjualnya. Persentase keuntungan pedagang tersebut terhadap harga beli adalah ...",
    choices: ["15%", "20%", "25%", "30%", "40%"],
    answer: 2,
    explanation:
      "Persentase keuntungan dihitung terhadap harga beli:\n$$\\text{Persentase untung} = \\frac{50.000}{200.000} \\times 100\\% = 25\\%$$\nJadi, jawaban yang tepat adalah opsi C.",
  },
  {
    prompt:
      "Sebuah toko olahraga memberikan diskon 20% untuk sepasang sepatu lari berlabel harga Rp300.000.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Harga sepatu setelah dipotong diskon | Rp250.000 |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P + Q = \\text{Rp500.000}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "Hitung harga setelah diskon 20%:\n$$P = 80\\% \\times \\text{Rp300.000} = \\text{Rp240.000}$$\nKarena $P = \\text{Rp240.000} < Q = \\text{Rp250.000}$ (dan $P + Q = \\text{Rp490.000}$), maka $P < Q$. Jadi, opsi B benar.",
  },
  {
    prompt:
      "Satu kaleng cat penuh memiliki berat kotor (bruto) 20 kg. Setelah cat habis digunakan, berat kaleng kosong (tara) adalah 1 kg. Persentase tara terhadap bruto kaleng cat tersebut adalah ...",
    choices: ["5%", "6%", "8%", "10%", "15%"],
    answer: 0,
    explanation:
      "Persentase tara terhadap bruto:\n$$\\text{Persentase tara} = \\frac{1}{20} \\times 100\\% = 5\\%$$\nJadi, jawaban yang tepat adalah opsi A.",
  },
  {
    prompt:
      "Pak Rudi menjual kembali ponsel lamanya karena ingin berganti unit baru. Berapakah besar kerugian (dalam rupiah) yang dialami Pak Rudi dari penjualan ponsel tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga beli ponsel saat masih baru adalah Rp3.500.000.\n(2) Ponsel tersebut laku terjual dengan harga Rp2.700.000.",
    choices: KD_CHOICES,
    answer: 2,
    explanation:
      "Kerugian dihitung dari selisih harga beli dan harga jual ($\\text{Rugi} = \\text{Harga Beli} - \\text{Harga Jual}$). Satu pernyataan saja belum memberi nilai lengkap, sedangkan keduanya bersama-sama menghasilkan $\\text{Rp3.500.000} - \\text{Rp2.700.000} = \\text{Rp800.000}$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Seorang pedagang membeli sebuah jam tangan seharga Rp150.000. Jika pedagang tersebut ingin memperoleh keuntungan sebesar 20% dari harga beli, harga jual jam tangan tersebut harus ditetapkan sebesar ...",
    choices: ["Rp165.000", "Rp170.000", "Rp175.000", "Rp180.000", "Rp185.000"],
    answer: 3,
    explanation:
      "Keuntungan 20% berarti harga jual ditetapkan sebesar 120% dari harga beli:\n$$\\text{Harga jual} = 120\\% \\times \\text{Rp150.000} = \\text{Rp180.000}$$\nJadi, jawaban yang tepat adalah opsi D.",
  },
  {
    prompt:
      "Pak Hasan meminjam uang di koperasi sebesar Rp5.000.000 dengan bunga tunggal sebesar 1% per bulan. Besar bunga yang harus dibayar Pak Hasan selama 6 bulan adalah ...",
    choices: ["Rp50.000", "Rp150.000", "Rp200.000", "Rp250.000", "Rp300.000"],
    answer: 4,
    explanation:
      "Bunga 1% per bulan selama 6 bulan sama dengan 6% dari pokok pinjaman:\n$$\\text{Bunga} = 6\\% \\times \\text{Rp5.000.000} = \\text{Rp300.000}$$\nJadi, jawaban yang tepat adalah opsi E.",
  },

  // =========================================================================
  // PAKET 2 — SEDANG (Soal 11–20)
  // Kunci: 11:C(2), 12:B(1), 13:D(3), 14:A(0), 15:E(4), 16:A(0), 17:D(3), 18:C(2), 19:B(1), 20:E(4)
  // =========================================================================
  {
    prompt:
      "Pak Budi membeli sebuah sepeda lipat bekas seharga Rp1.600.000. Sebelum dijual kembali, ia mengeluarkan biaya perbaikan ban dan rem sebesar Rp200.000. Sepeda tersebut kemudian laku terjual dengan harga Rp2.160.000. Persentase keuntungan yang diperoleh Pak Budi terhadap total modal yang dikeluarkan adalah ...",
    choices: ["15%", "18%", "20%", "25%", "35%"],
    answer: 2,
    explanation:
      "Total modal = Rp1.600.000 + Rp200.000 = Rp1.800.000.\nKeuntungan = Rp2.160.000 - Rp1.800.000 = Rp360.000.\n$$\\text{Persentase untung} = \\frac{360.000}{1.800.000} \\times 100\\% = 20\\%$$\nJadi, jawaban yang tepat adalah opsi C.",
  },
  {
    prompt:
      "Bu Sari menabung uang di bank sebesar Rp5.000.000 dengan sistem bunga tunggal sebesar 6% per tahun. Setelah $t$ bulan, jumlah saldo tabungan Bu Sari menjadi Rp5.200.000.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Nilai $t$ (dalam bulan) | 10 |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$3P = 2Q$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "Nominal bunga = Rp5.200.000 - Rp5.000.000 = Rp200.000.\nBunga per tahun = $6\\% \\times \\text{Rp5.000.000} = \\text{Rp300.000}$ (atau Rp25.000 per bulan).\n$$t = \\frac{200.000}{25.000} = 8\\text{ bulan}$$\nKarena $P = 8 < Q = 10$ (dan $3P = 24 \\neq 2Q = 20$), maka $P < Q$. Jadi, opsi B benar.",
  },
  {
    prompt:
      "Pak Andi meminjam uang di koperasi sebesar Rp6.000.000 dengan sistem bunga tunggal dan akan melunasinya dengan angsuran sama besar setiap bulan selama 1 tahun (12 bulan). Berapakah besar angsuran per bulan yang harus dibayar Pak Andi?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Suku bunga pinjaman koperasi adalah 10% per tahun.\n(2) Total bunga yang harus dibayar selama 1 tahun adalah Rp600.000.",
    choices: KD_CHOICES,
    answer: 3,
    explanation:
      "- Pernyataan (1) SAJA cukup: total bunga = $10\\% \\times \\text{Rp6.000.000} = \\text{Rp600.000}$, sehingga angsuran per bulan = $\\frac{6.600.000}{12} = \\text{Rp550.000}$.\n- Pernyataan (2) SAJA cukup: total bunga langsung diketahui Rp600.000 sehingga angsuran per bulan = Rp550.000.\nJadi, jawaban yang tepat adalah opsi D.",
  },
  {
    prompt:
      "Seorang pemilik warung membeli satu karung tepung terigu dengan berat kotor (bruto) 50 kg dan tara 4%. Seluruh tepung bersih (neto) dalam karung tersebut dijual secara eceran dengan harga Rp12.000 per kg. Total penerimaan dari penjualan seluruh tepung terigu tersebut adalah ...",
    choices: ["Rp576.000", "Rp580.000", "Rp588.000", "Rp600.000", "Rp624.000"],
    answer: 0,
    explanation:
      "Tara = $4\\% \\times 50\\text{ kg} = 2\\text{ kg}$, sehingga neto = $50 - 2 = 48\\text{ kg}$.\n$$\\text{Total penjualan} = 48 \\times \\text{Rp12.000} = \\text{Rp576.000}$$\nJadi, jawaban yang tepat adalah opsi A.",
  },
  {
    prompt:
      "Sebuah toko tas memberikan diskon sebesar 25% untuk sebuah tas ransel dengan harga label Rp320.000. Karena bertepatan dengan hari ulang tahun toko, pembeli masih mendapat tambahan diskon 10% yang dihitung dari harga setelah diskon pertama. Harga akhir yang harus dibayar pembeli adalah ...",
    choices: ["Rp200.000", "Rp204.000", "Rp208.000", "Rp212.000", "Rp216.000"],
    answer: 4,
    explanation:
      "Harga setelah diskon 25% = $75\\% \\times \\text{Rp320.000} = \\text{Rp240.000}$.\nHarga setelah diskon tambahan 10% = $90\\% \\times \\text{Rp240.000} = \\text{Rp216.000}$.\nJadi, jawaban yang tepat adalah opsi E.",
  },
  {
    prompt:
      "Sebuah kafe memberikan promo diskon sebesar 20% untuk total pesanan makanan seharga Rp300.000, kemudian mengenakan pajak restoran sebesar 10% dari harga setelah diskon.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Total tagihan akhir yang harus dibayar di kasir | Rp260.000 |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P - Q = \\text{Rp10.000}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 0,
    explanation:
      "Setelah diskon 20%: $80\\% \\times \\text{Rp300.000} = \\text{Rp240.000}$.\nSetelah pajak restoran 10%: $P = 110\\% \\times \\text{Rp240.000} = \\text{Rp264.000}$.\nKarena $P = \\text{Rp264.000} > Q = \\text{Rp260.000}$ (selisihnya Rp4.000, bukan Rp10.000), maka opsi A benar.",
  },
  {
    prompt:
      "Pak Hendro memperoleh gaji kotor sebesar Rp7.000.000 setiap bulan. Penghasilan Tidak Kena Pajak (PTKP) yang ditetapkan sebesar Rp4.500.000 per bulan. Jika sisa penghasilan di atas PTKP dikenakan Pajak Penghasilan (PPh) sebesar 5%, besar gaji bersih (take-home pay) Pak Hendro per bulan adalah ...",
    choices: ["Rp6.650.000", "Rp6.750.000", "Rp6.825.000", "Rp6.875.000", "Rp6.925.000"],
    answer: 3,
    explanation:
      "Penghasilan Kena Pajak = Rp7.000.000 - Rp4.500.000 = Rp2.500.000.\nPotongan PPh = $5\\% \\times \\text{Rp2.500.000} = \\text{Rp125.000}$.\nGaji bersih = Rp7.000.000 - Rp125.000 = Rp6.875.000. Jadi, opsi D benar.",
  },
  {
    prompt:
      "Seorang pedagang mencampur 15 kg gula aren kualitas A dan 10 kg gula aren kualitas B, lalu mengemasnya ulang secara merata ke dalam bungkus berukuran 1 kg. Pedagang menargetkan keuntungan 20% dari total modal pembelian. Berapakah harga jual setiap bungkus gula aren 1 kg?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga beli gula aren kualitas A adalah Rp22.000 per kg.\n(2) Harga beli gula aren kualitas B adalah Rp18.000 per kg.",
    choices: KD_CHOICES,
    answer: 2,
    explanation:
      "Untuk menghitung harga jual per bungkus, diperlukan total modal pembelian ($15H_A + 10H_B$). Masing-masing pernyataan saja hanya memberi harga satu jenis gula, sedangkan keduanya bersama-sama sudah cukup. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Sebuah kaleng berisi penuh biskuit dibeli seharga Rp180.000 dengan berat kotor (bruto) 5 kg. Setelah seluruh biskuit dikeluarkan, kaleng kosong ditimbang dan memiliki berat 500 gram. Harga beli biskuit per kg berat bersih (neto) adalah ...",
    choices: ["Rp36.000", "Rp40.000", "Rp42.000", "Rp45.000", "Rp48.000"],
    answer: 1,
    explanation:
      "Tara = $500\\text{ gram} = 0{,}5\\text{ kg}$, sehingga neto = $5 - 0{,}5 = 4{,}5\\text{ kg}$.\n$$\\text{Harga per kg neto} = \\frac{180.000}{4{,}5} = \\text{Rp40.000}$$\nJadi, jawaban yang tepat adalah opsi B.",
  },
  {
    prompt:
      "Sebuah toko alat tulis mengadakan promo \"Beli 3 Buku Gratis 1 Buku\" untuk buku tulis seharga Rp12.000 per eksemplar. Jika Rina ingin membawa pulang tepat 12 buku tulis, total uang yang harus dibayar Rina adalah ...",
    choices: ["Rp72.000", "Rp84.000", "Rp96.000", "Rp102.000", "Rp108.000"],
    answer: 4,
    explanation:
      "Setiap 4 buku (3 bayar + 1 gratis) hanya membayar 3 buku. Untuk 12 buku (3 paket promo), buku yang dibayar adalah $3 \\times 3 = 9$ buku.\n$$\\text{Total bayar} = 9 \\times \\text{Rp12.000} = \\text{Rp108.000}$$\nJadi, jawaban yang tepat adalah opsi E.",
  },

  // =========================================================================
  // PAKET 3 — SULIT (Soal 21–30)
  // Kunci: 21:D(3), 22:C(2), 23:B(1), 24:A(0), 25:E(4), 26:A(0), 27:C(2), 28:D(3), 29:B(1), 30:E(4)
  // =========================================================================
  {
    prompt:
      "Seorang agen sembako membeli 4 karung kacang tanah dengan bruto masing-masing 50 kg dan tara 2,5%. Total harga beli keempat karung tersebut adalah Rp3.510.000. Jika seluruh kacang tanah bersih dijual secara eceran seharga Rp20.000 per kg, besar keuntungan yang diperoleh agen adalah ...",
    choices: ["Rp350.000", "Rp365.000", "Rp375.000", "Rp390.000", "Rp490.000"],
    answer: 3,
    explanation:
      "Tara per karung = $2{,}5\\% \\times 50 = 1{,}25\\text{ kg}$, sehingga neto per karung = $48{,}75\\text{ kg}$.\nTotal neto 4 karung = $4 \\times 48{,}75 = 195\\text{ kg}$.\nTotal penjualan = $195 \\times \\text{Rp20.000} = \\text{Rp3.900.000}$.\nKeuntungan = Rp3.900.000 - Rp3.510.000 = Rp390.000. Jadi, opsi D benar.",
  },
  {
    prompt:
      "Sekelompok mahasiswa makan di sebuah kedai dengan total pesanan makanan sebesar Rp400.000. Kedai mengenakan biaya layanan (service charge) sebesar 5% dari total pesanan, kemudian pajak restoran 10% dihitung dari total setelah penambahan biaya layanan.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Total pembayaran akhir di kasir | Rp462.000 |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = 2Q - \\text{Rp400.000}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 2,
    explanation:
      "Setelah service charge 5%: $105\\% \\times \\text{Rp400.000} = \\text{Rp420.000}$.\nSetelah pajak 10%: $P = 110\\% \\times \\text{Rp420.000} = \\text{Rp462.000}$.\nKarena $P = Q = \\text{Rp462.000}$, maka opsi C benar.",
  },
  {
    prompt:
      "Seorang pedagang membeli satu peti buah mangga dengan bruto 40 kg seharga Rp420.000. Tara peti adalah 5%. Berapakah persentase keuntungan yang diperoleh pedagang tersebut jika seluruh mangga yang layak jual terjual habis?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga jual mangga adalah Rp14.000 per kg.\n(2) Total penerimaan dari penjualan mangga yang layak jual adalah Rp483.000.",
    choices: KD_CHOICES,
    answer: 1,
    explanation:
      "- Pernyataan (1) SAJA tidak cukup karena tidak diketahui apakah ada mangga busuk/susut, sehingga berat mangga yang layak jual tidak dapat dipastikan.\n- Pernyataan (2) SAJA cukup karena total penerimaan penjualan Rp483.000 langsung diketahui terhadap modal Rp420.000 (untung Rp63.000 atau 15%).\nJadi, opsi B benar.",
  },
  {
    prompt:
      "Bu Tari menjual perhiasan miliknya seharga Rp5.100.000 dan mengalami kerugian sebesar 15% terhadap harga pembelian mula-mula. Apabila semula Bu Tari menginginkan keuntungan sebesar 12,5% dari harga beli, harga jual perhiasan tersebut seharusnya ditetapkan sebesar ...",
    choices: ["Rp6.750.000", "Rp6.800.000", "Rp6.850.000", "Rp6.900.000", "Rp7.050.000"],
    answer: 0,
    explanation:
      "Rugi 15% berarti harga jual adalah 85% dari harga beli:\n$$\\text{Harga beli} = \\frac{5.100.000}{0{,}85} = \\text{Rp6.000.000}$$\nTarget untung 12,5% berarti harga jual seharusnya = $112{,}5\\% \\times \\text{Rp6.000.000} = \\text{Rp6.750.000}$. Jadi, opsi A benar.",
  },
  {
    prompt:
      "Ibu Nita memperoleh penghasilan kotor sebesar Rp10.200.000 setiap bulan. Batas Penghasilan Tidak Kena Pajak (PTKP) yang ditetapkan sebesar Rp5.400.000 per bulan. Jika sisa penghasilan di atas PTKP dikenakan tarif Pajak Penghasilan (PPh) sebesar 7,5%, besar penghasilan bersih (take-home pay) yang diterima Ibu Nita setiap bulan adalah ...",
    choices: ["Rp9.435.000", "Rp9.540.000", "Rp9.660.000", "Rp9.720.000", "Rp9.840.000"],
    answer: 4,
    explanation:
      "Penghasilan Kena Pajak (PKP) = Rp10.200.000 - Rp5.400.000 = Rp4.800.000.\n$$\\text{PPh} = 7{,}5\\% \\times \\text{Rp4.800.000} = \\text{Rp360.000}$$\nPenghasilan bersih = Rp10.200.000 - Rp360.000 = Rp9.840.000. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Dua nasabah membuka rekening tabungan bunga tunggal di bank pada hari yang sama. Nasabah A menabung Rp8.000.000 dengan bunga 6% per tahun selama 10 bulan. Nasabah B menabung Rp6.000.000 dengan bunga 9% per tahun selama 8 bulan.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Nominal bunga yang diterima Nasabah A | Nominal bunga yang diterima Nasabah B |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P + Q = \\text{Rp800.000}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 0,
    explanation:
      "Hitung bunga masing-masing nasabah:\n- $P = \\text{Rp8.000.000} \\times 6\\% \\times \\frac{10}{12} = \\text{Rp400.000}$\n- $Q = \\text{Rp6.000.000} \\times 9\\% \\times \\frac{8}{12} = \\text{Rp360.000}$\nKarena $P > Q$ (dan $P + Q = \\text{Rp760.000}$), maka opsi A benar.",
  },
  {
    prompt:
      "Seorang pedagang membeli satu peti tomat dengan bruto 50 kg seharga Rp600.000. Peti kayu tersebut memiliki tara sebesar 4%. Saat disortir, terdapat 2 kg tomat busuk yang tidak layak dijual. Jika seluruh sisa tomat yang masih baik dijual dengan harga Rp15.000 per kg, persentase keuntungan pedagang terhadap modal awal adalah ...",
    choices: ["10%", "12,5%", "15%", "18%", "20%"],
    answer: 2,
    explanation:
      "Tara = $4\\% \\times 50 = 2\\text{ kg}$, sehingga neto awal = $48\\text{ kg}$. Dikurangi 2 kg busuk, tomat layak jual = $46\\text{ kg}$.\nTotal penjualan = $46 \\times \\text{Rp15.000} = \\text{Rp690.000}$.\nUntung = Rp90.000 $\\implies \\frac{90.000}{600.000} \\times 100\\% = 15\\%$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Sebuah kedai kopi mencampur 12 kg biji kopi Arabika seharga Rp100.000 per kg dengan 8 kg biji kopi Robusta seharga Rp75.000 per kg. Seluruh kopi campuran dikemas merata ke dalam kantong berukuran 500 gram dan seluruhnya terjual habis. Berapakah harga jual setiap kantong kopi 500 gram?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Pedagang mengambil keuntungan sebesar 25% dari total modal pembelian.\n(2) Total keuntungan bersih yang diperoleh dari penjualan seluruh kemasan adalah Rp450.000.",
    choices: KD_CHOICES,
    answer: 3,
    explanation:
      "Total modal = $(12 \\times 100.000) + (8 \\times 75.000) = \\text{Rp1.800.000}$ untuk total berat 20 kg (40 kantong @500 gram).\n- Pernyataan (1) SAJA cukup: target jual = $125\\% \\times \\text{Rp1.800.000} = \\text{Rp2.250.000} \\implies \\text{Rp56.250}$ per kantong.\n- Pernyataan (2) SAJA cukup: target jual = $\\text{Rp1.800.000} + \\text{Rp450.000} = \\text{Rp2.250.000} \\implies \\text{Rp56.250}$ per kantong.\nJadi, opsi D benar.",
  },
  {
    prompt:
      "Sebuah butik mengadakan promo \"Beli 3 Kemeja Bayar 2 Kemeja\" untuk harga satuan kemeja Rp180.000. Jika pembeli bertransaksi dengan kartu bank mitra, ia masih memperoleh diskon tambahan 15% dari total tagihan promo tersebut. Total uang yang harus dibayar pembeli untuk membawa pulang 3 kemeja adalah ...",
    choices: ["Rp288.000", "Rp306.000", "Rp324.000", "Rp360.000", "Rp459.000"],
    answer: 1,
    explanation:
      "Tagihan promo 3 kemeja = $2 \\times \\text{Rp180.000} = \\text{Rp360.000}$.\nSetelah diskon tambahan 15%, pembeli membayar $85\\% \\times \\text{Rp360.000} = \\text{Rp306.000}$. Jadi, opsi B benar.",
  },
  {
    prompt:
      "Sebuah toko elektronik menawarkan dua opsi promosi untuk sebuah monitor berlabel harga Rp2.000.000:\n- Opsi Promo I: Diskon langsung sebesar 25%.\n- Opsi Promo II: Diskon bertingkat 20% + 10%.\n\nSelisih harga akhir yang harus dibayar pembeli antara kedua opsi promosi tersebut adalah ...",
    choices: ["Rp20.000", "Rp30.000", "Rp40.000", "Rp50.000", "Rp60.000"],
    answer: 4,
    explanation:
      "Opsi Promo I membayar 75% dari harga label.\nOpsi Promo II membayar $80\\% \\times 90\\% = 72\\%$ dari harga label.\nSelisih = $(75\\% - 72\\%) \\times \\text{Rp2.000.000} = 3\\% \\times \\text{Rp2.000.000} = \\text{Rp60.000}$. Jadi, opsi E benar.",
  },

  // =========================================================================
  // PAKET 4 — CAMPURAN SET A (3 Mudah [31,35,39], 4 Sedang [32,33,36,38], 3 Sulit [34,37,40])
  // Kunci: 31:B(1), 32:C(2), 33:A(0), 34:E(4), 35:A(0), 36:E(4), 37:D(3), 38:D(3), 39:C(2), 40:B(1)
  // =========================================================================
  {
    prompt:
      "Harga sebuah tas ransel adalah Rp180.000. Karena hari ini ada promo khusus, pembeli mendapat potongan harga sebesar 15%. Besar nominal potongan harga (diskon) yang diperoleh pembeli adalah ...",
    choices: ["Rp24.000", "Rp27.000", "Rp30.000", "Rp32.000", "Rp36.000"],
    answer: 1,
    explanation:
      "Nominal potongan harga = $15\\% \\times \\text{Rp180.000} = \\text{Rp27.000}$. Jadi, jawaban yang tepat adalah opsi B.",
  },
  {
    prompt:
      "Pada awal tahun, harga sebuah jaket dinaikkan sebesar 25%. Menjelang akhir tahun, toko memberikan diskon sebesar 20% yang dihitung dari harga setelah kenaikan tersebut.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Harga akhir jaket setelah didiskon | Harga awal jaket sebelum dinaikkan |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = 1{,}05Q$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 2,
    explanation:
      "Misalkan harga awal adalah $H_0$. Setelah naik 25%, harga menjadi $1{,}25H_0$. Setelah didiskon 20%, harga akhir $P = 80\\% \\times 1{,}25H_0 = 1{,}00H_0 = Q$. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Dimas membeli sebuah tas ransel di toko online dengan potongan diskon 20% dari harga label. Berapakah harga label awal tas ransel tersebut sebelum diskon?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga tas setelah dipotong diskon 20% (belum termasuk ongkos kirim) adalah Rp280.000.\n(2) Total uang yang ditransfer Dimas termasuk ongkos kirim dan biaya layanan adalah Rp305.000.",
    choices: KD_CHOICES,
    answer: 0,
    explanation:
      "- Pernyataan (1) SAJA cukup: $80\\% \\times \\text{Harga Label} = \\text{Rp280.000} \\implies \\text{Harga Label} = \\text{Rp350.000}$.\n- Pernyataan (2) SAJA tidak cukup karena rincian ongkos kirim dan biaya layanan tidak diketahui.\nJadi, opsi A benar.",
  },
  {
    prompt:
      "Seorang penjual di marketplace membeli barang dengan modal Rp160.000 per unit. Platform marketplace memotong biaya administrasi 6% dan biaya layanan gratis ongkir 4% dari harga jual yang dicantumkan (total potongan 10%). Jika penjual ingin tetap mengantongi keuntungan bersih Rp20.000 per unit setelah semua potongan platform, harga jual yang harus dicantumkan pada etalase adalah ...",
    choices: ["Rp180.000", "Rp190.000", "Rp196.000", "Rp198.000", "Rp200.000"],
    answer: 4,
    explanation:
      "Setelah dipotong total 10%, dana bersih yang diterima penjual adalah 90% dari harga jual etalase.\nTarget dana bersih = Rp160.000 + Rp20.000 = Rp180.000.\n$$\\text{Harga jual etalase} = \\frac{180.000}{0{,}9} = \\text{Rp200.000}$$\nJadi, opsi E benar.",
  },
  {
    prompt:
      "Satu peti buah apel memiliki berat kotor (bruto) sebesar 40 kg dan persentase tara sebesar 5%. Berat bersih (neto) apel di dalam peti tersebut adalah ...",
    choices: ["38 kg", "38,5 kg", "39 kg", "40 kg", "42 kg"],
    answer: 0,
    explanation:
      "Persentase neto adalah $100\\% - 5\\% = 95\\%$ dari bruto:\n$$\\text{Neto} = 95\\% \\times 40\\text{ kg} = 38\\text{ kg}$$\nJadi, jawaban yang tepat adalah opsi A.",
  },
  {
    prompt:
      "Dalam sebuah promo akhir bulan:\n- Toko Maju memberikan potongan harga langsung sebesar Rp50.000 untuk pembelian satu pasang sepatu olahraga.\n- Toko Jaya memberikan diskon sebesar 20% untuk pembelian satu pasang sepatu olahraga.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Harga akhir sepatu di Toko Maju | Harga akhir sepatu di Toko Jaya |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P - Q = \\text{Rp50.000}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 4,
    explanation:
      "Harga awal sepatu di Toko Maju dan Toko Jaya tidak diketahui. Sebagai contoh, jika kedua toko mematok harga awal Rp200.000 maka $P = \\text{Rp150.000} < Q = \\text{Rp160.000}$; namun jika harga awal Rp300.000 maka $P = \\text{Rp250.000} > Q = \\text{Rp240.000}$. Oleh karena itu, informasi tidak cukup (opsi E).",
  },
  {
    prompt:
      "Sebuah kedai minuman membeli 40 kg daun teh dengan modal total Rp3.200.000. Selama penyimpanan, 20% daun teh mengalami penurunan kualitas karena lembap dan tidak layak seduh. Jika kedai ingin tetap memperoleh keuntungan bersih 20% dari modal awal dengan menjual sisa daun teh yang layak pakai secara merata dalam kemasan 250 gram, harga jual tiap kemasan 250 gram harus ditetapkan sebesar ...",
    choices: ["Rp24.000", "Rp25.000", "Rp28.000", "Rp30.000", "Rp32.000"],
    answer: 3,
    explanation:
      "Teh layak pakai = $80\\% \\times 40\\text{ kg} = 32\\text{ kg} = 32.000\\text{ gram}$, yang menghasilkan $\\frac{32.000}{250} = 128$ kemasan.\nTarget penjualan = $120\\% \\times \\text{Rp3.200.000} = \\text{Rp3.840.000}$.\nHarga per kemasan = $\\frac{3.840.000}{128} = \\text{Rp30.000}$. Jadi, opsi D benar.",
  },
  {
    prompt:
      "Sebuah kulkas dijual dengan harga promo Rp4.250.000 setelah dikenai diskon 15% dari harga normalnya. Berapakah besar keuntungan toko dalam rupiah dari penjualan satu unit kulkas pada harga promo tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Keuntungan toko saat menjual pada harga promo sama dengan 25% dari harga modal kulkas.\n(2) Selisih antara harga normal (sebelum diskon) dan harga modal kulkas adalah Rp1.600.000.",
    choices: KD_CHOICES,
    answer: 3,
    explanation:
      "Dari soal diketahui harga normal = $\\frac{4.250.000}{0{,}85} = \\text{Rp5.000.000}$.\n- Pernyataan (1) SAJA cukup: $125\\% \\times \\text{Modal} = 4.250.000 \\implies \\text{Modal} = \\text{Rp3.400.000}$, untung promo = Rp850.000.\n- Pernyataan (2) SAJA cukup: $\\text{Modal} = 5.000.000 - 1.600.000 = \\text{Rp3.400.000}$, untung promo = Rp850.000.\nJadi, opsi D benar.",
  },
  {
    prompt:
      "Pak Dodi membeli sebuah printer bekas seharga Rp1.000.000, lalu menjualnya kembali dengan kerugian sebesar 15% dari harga beli. Harga jual printer tersebut adalah ...",
    choices: ["Rp750.000", "Rp800.000", "Rp850.000", "Rp875.000", "Rp900.000"],
    answer: 2,
    explanation:
      "Rugi 15% berarti harga jual adalah 85% dari harga beli:\n$$\\text{Harga jual} = 85\\% \\times \\text{Rp1.000.000} = \\text{Rp850.000}$$\nJadi, jawaban yang tepat adalah opsi C.",
  },
  {
    prompt:
      "Tahun lalu, gaji bulanan Bima adalah Rp8.000.000 dengan biaya hidup sebesar Rp6.000.000 dan sisanya ditabung. Tahun ini gaji Bima naik 10%, sementara biaya hidupnya ikut naik 20% akibat inflasi. Persentase penurunan nominal tabungan bulanan Bima tahun ini dibandingkan tahun lalu adalah ...",
    choices: ["10%", "20%", "25%", "30%", "40%"],
    answer: 1,
    explanation:
      "Tabungan tahun lalu = Rp8.000.000 - Rp6.000.000 = Rp2.000.000.\nTahun ini: gaji baru = $110\\% \\times 8\\text{ jt} = \\text{Rp8.800.000}$ dan biaya hidup = $120\\% \\times 6\\text{ jt} = \\text{Rp7.200.000}$, sehingga tabungan baru = Rp1.600.000.\nPersentase penurunan = $\\frac{400.000}{2.000.000} \\times 100\\% = 20\\%$. Jadi, opsi B benar.",
  },

  // =========================================================================
  // PAKET 5 — CAMPURAN SET B (3 Mudah [41,43,47], 4 Sedang [42,45,48,49], 3 Sulit [44,46,50])
  // Kunci: 41:D(3), 42:B(1), 43:B(1), 44:A(0), 45:E(4), 46:E(4), 47:C(2), 48:C(2), 49:A(0), 50:D(3)
  // =========================================================================
  {
    prompt:
      "Seorang penjual membeli satu karung bawang putih seharga Rp500.000 dan menargetkan keuntungan sebesar 16% dari harga beli. Besar keuntungan (dalam rupiah) yang ditargetkan penjual tersebut adalah ...",
    choices: ["Rp50.000", "Rp60.000", "Rp75.000", "Rp80.000", "Rp90.000"],
    answer: 3,
    explanation:
      "Target keuntungan = $16\\% \\times \\text{Rp500.000} = \\text{Rp80.000}$. Jadi, jawaban yang tepat adalah opsi D.",
  },
  {
    prompt:
      "Sebuah toko furnitur memberikan diskon sebesar 20% untuk meja belajar berlabel harga Rp600.000, lalu mengenakan ongkos kirim tetap sebesar Rp35.000.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Total uang yang harus dibayar pembeli | Rp525.000 |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$Q - P = \\text{Rp15.000}$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 1,
    explanation:
      "Harga setelah diskon 20% = $80\\% \\times \\text{Rp600.000} = \\text{Rp480.000}$.\nDitambah ongkos kirim: $P = \\text{Rp480.000} + \\text{Rp35.000} = \\text{Rp515.000}$.\nKarena $P = \\text{Rp515.000} < Q = \\text{Rp525.000}$ (selisihnya Rp10.000, bukan Rp15.000), maka opsi B benar.",
  },
  {
    prompt:
      "Sebuah drum berisi penuh minyak ditimbang berat kotornya (bruto) adalah 100 kg. Berapakah persentase tara terhadap bruto drum minyak tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga jual seluruh minyak adalah Rp1.400.000.\n(2) Berat drum kosong (tara) adalah 4 kg.",
    choices: KD_CHOICES,
    answer: 1,
    explanation:
      "- Pernyataan (1) SAJA tidak cukup karena hanya memberi total harga jual tanpa informasi berat wadah ataupun isi.\n- Pernyataan (2) SAJA cukup karena persentase tara langsung diperoleh: $\\frac{4}{100} \\times 100\\% = 4\\%$.\nJadi, opsi B benar.",
  },
  {
    prompt:
      "Seorang pemilik distro memasang harga banderol pada sebuah sweater sedemikian rupa sehingga jika terjual tanpa diskon, ia memperoleh keuntungan 50% dari harga modal. Saat masa obral, pemilik distro memberi diskon sebesar 20% dari harga banderol tersebut. Berapakah persentase keuntungan riil pemilik distro terhadap modal jika sweater terjual pada masa obral?",
    choices: ["20%", "25%", "30%", "35%", "40%"],
    answer: 0,
    explanation:
      "Misalkan Modal = 100%, maka harga banderol = 150%. Saat diskon 20% dari banderol, harga jual obral = $80\\% \\times 150\\% = 120\\%$ dari modal.\nKeuntungan riil = $120\\% - 100\\% = 20\\%$. Jadi, opsi A benar.",
  },
  {
    prompt:
      "Rani menabung uang sebesar Rp4.000.000 di koperasi dengan sistem bunga tunggal sebesar 9% per tahun. Jumlah total saldo tabungan Rani setelah menabung selama 8 bulan adalah ...",
    choices: ["Rp4.180.000", "Rp4.200.000", "Rp4.210.000", "Rp4.220.000", "Rp4.240.000"],
    answer: 4,
    explanation:
      "Bunga 8 bulan = $\\text{Rp4.000.000} \\times 9\\% \\times \\frac{8}{12} = \\text{Rp240.000}$.\nTotal saldo tabungan = Rp4.000.000 + Rp240.000 = Rp4.240.000. Jadi, opsi E benar.",
  },
  {
    prompt:
      "Seorang pedagang menjual dua karung beras sejenis (Kualitas I dan Kualitas II):\n- Beras Kualitas I dijual Rp14.000 per kg sehingga memperoleh keuntungan 12%.\n- Beras Kualitas II dijual Rp12.000 per kg sehingga mengalami kerugian 4%.\n\n| Kuantitas $P$ | Kuantitas $Q$ |\n| :---: | :---: |\n| Total keuntungan bersih (dalam rupiah) penjualan Kualitas I | Total kerugian bersih (dalam rupiah) penjualan Kualitas II |\n\nManakah hubungan yang benar antara kuantitas $P$ dan $Q$?",
    choices: [
      "Kuantitas $P$ lebih besar daripada kuantitas $Q$.",
      "Kuantitas $P$ lebih kecil daripada kuantitas $Q$.",
      "Kuantitas $P$ sama dengan kuantitas $Q$.",
      "$P = 3Q$",
      "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas $P$ dan $Q$.",
    ],
    answer: 4,
    explanation:
      "Meskipun keuntungan Kualitas I adalah Rp1.500 per kg (modal Rp12.500) dan kerugian Kualitas II adalah Rp500 per kg (modal Rp12.500), berat (kg) isi masing-masing karung tidak diketahui. Jika beratnya sama maka $P > Q$, tetapi jika Kualitas I hanya 10 kg (untung Rp15.000) dan Kualitas II 50 kg (rugi Rp25.000) maka $P < Q$. Jadi, informasi tidak cukup (opsi E).",
  },
  {
    prompt:
      "Pak Amir menabung uang sebesar Rp6.000.000 di bank dengan sistem bunga tunggal sebesar 8% per tahun. Besar bunga yang diterima Pak Amir setelah menabung tepat 6 bulan adalah ...",
    choices: ["Rp180.000", "Rp200.000", "Rp240.000", "Rp320.000", "Rp480.000"],
    answer: 2,
    explanation:
      "Selama 6 bulan (setengah tahun), bunga efektif = $\\frac{1}{2} \\times 8\\% = 4\\%$.\n$$\\text{Bunga} = 4\\% \\times \\text{Rp6.000.000} = \\text{Rp240.000}$$\nJadi, jawaban yang tepat adalah opsi C.",
  },
  {
    prompt:
      "Sebuah usaha katering membeli 10 kg daging sapi lokal dan 15 kg daging sapi impor untuk diolah menjadi bakso, lalu seluruh hasilnya terjual habis. Berapakah keuntungan bersih yang diperoleh katering dari penjualan bakso tersebut?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga beli daging lokal Rp120.000 per kg, harga beli daging impor Rp140.000 per kg, dan biaya bumbu operasional sebesar Rp300.000.\n(2) Seluruh bakso terjual dengan total pendapatan Rp4.200.000.",
    choices: KD_CHOICES,
    answer: 2,
    explanation:
      "Pernyataan (1) hanya memberikan total biaya produksi sebesar Rp3.600.000 tanpa total pendapatan, sedangkan pernyataan (2) hanya memberikan total pendapatan Rp4.200.000 tanpa total biaya. Keduanya bersama-sama cukup untuk menghitung untung bersih Rp600.000. Jadi, opsi C benar.",
  },
  {
    prompt:
      "Di sebuah kafe modern, harga yang tertera pada struk pembayaran sudah termasuk PPN 10% (tax included). Jika total tagihan akhir yang dibayar pelanggan pada struk adalah Rp264.000, nominal PPN yang dibayarkan pelanggan dalam transaksi tersebut adalah ...",
    choices: ["Rp24.000", "Rp24.600", "Rp25.000", "Rp26.000", "Rp26.400"],
    answer: 0,
    explanation:
      "Tagihan Rp264.000 merepresentasikan 110% dari harga dasar (100%).\n$$\\text{Harga dasar} = \\frac{264.000}{1{,}1} = \\text{Rp240.000}$$\nNominal PPN = Rp264.000 - Rp240.000 = Rp24.000. Jadi, opsi A benar.",
  },
  {
    prompt:
      "Sebuah lembaga kursus menetapkan biaya program penuh sebesar Rp12.000.000. Jika membayar tunai lunas di awal, peserta memperoleh diskon 15%. Jika membayar mencicil, peserta wajib membayar uang muka (DP) sebesar Rp3.000.000 di awal, lalu mencicil sisanya selama 10 bulan dengan bunga tunggal 10% per tahun dari sisa pokok cicilan. Selisih total biaya antara memilih opsi mencicil dibandingkan memilih opsi membayar tunai lunas adalah ...",
    choices: ["Rp750.000", "Rp1.800.000", "Rp2.250.000", "Rp2.550.000", "Rp2.700.000"],
    answer: 3,
    explanation:
      "Opsi tunai lunas = $85\\% \\times \\text{Rp12.000.000} = \\text{Rp10.200.000}$.\nOpsi mencicil: sisa pokok = Rp12.000.000 - Rp3.000.000 = Rp9.000.000. Bunga 10 bulan = $\\text{Rp9.000.000} \\times 10\\% \\times \\frac{10}{12} = \\text{Rp750.000}$, sehingga total bayar = Rp12.750.000.\nSelisih = Rp12.750.000 - Rp10.200.000 = Rp2.550.000. Jadi, opsi D benar.",
  },
];

export const ARITMATIKA_SOSIAL_DRILL_QUESTIONS: Question[] = aritmatikaSosialSeeds.map((seed, index) => ({
  id: `tiu-aritmatika-sosial-${String(index + 1).padStart(3, "0")}`,
  category: "TIU",
  topic: "Aritmatika Sosial",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: choiceIndex === seed.answer ? 5 : 0,
  })),
  explanation: seed.explanation,
}));

