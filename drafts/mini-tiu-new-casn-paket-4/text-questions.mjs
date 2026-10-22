export function createTextQuestions({ add }) {
  const verbal = "Kemampuan Verbal", logic = "Logika Analitis", numeric = "Kemampuan Numerik", patterns = "Deret & Pola";

  add(1, verbal, "Analogi hasil penalaran dan dasar penentuannya",
    "DIAGNOSIS : GEJALA = KESIMPULAN : ...",
    "premis", ["pendapat", "pertanyaan", "dugaan", "tujuan"],
    "Diagnosis ditetapkan berdasarkan gejala. Kesimpulan ditarik berdasarkan premis. Hubungan yang dicari adalah hasil penalaran terhadap informasi yang menjadi dasarnya, bukan hasil terhadap tujuan atau pertanyaannya.");

  add(2, verbal, "Analogi sebab dan akibat",
    "API : ASAP = GESEKAN : ...",
    "panas", ["gerak", "pelumas", "gaya", "permukaan"],
    "Api dapat menghasilkan asap, sedangkan gesekan menghasilkan panas. Gerak, gaya, dan permukaan berkaitan dengan terjadinya gesekan, tetapi tidak mewakili akibat yang setara dengan asap pada hubungan pertama.");

  add(3, verbal, "Analogi bahan baku, bahan olahan, dan produk akhir",
    "BENANG : KAIN : PAKAIAN = ... : ... : ...",
    "gandum : tepung : roti", ["bibit : bunga : buah", "kayu : meja : kursi", "kertas : buku : perpustakaan", "air : es : uap"],
    "Benang diolah menjadi kain, lalu kain digunakan untuk membuat pakaian. Gandum diolah menjadi tepung, lalu tepung digunakan untuk membuat roti. Keduanya menunjukkan rantai bahan baku, bahan olahan, dan produk akhir. Pilihan lain mencampurkan pertumbuhan, produk yang sejajar, pengelompokan, atau perubahan wujud.");

  add(4, logic, "Modus tollens pada syarat berbentuk atau",
    "Berlaku aturan: jika peserta membawa kartu ujian atau surat pengganti, peserta diizinkan masuk. Diketahui seorang peserta tidak diizinkan masuk. Berdasarkan aturan tersebut, kesimpulan yang pasti benar adalah ...",
    "peserta tersebut tidak membawa kartu ujian maupun surat pengganti", ["peserta tersebut membawa kartu ujian", "peserta tersebut membawa surat pengganti", "peserta tersebut membawa tepat satu dari kedua dokumen", "tidak dapat dipastikan apakah peserta membawa salah satu dokumen"],
    "Misalkan K = membawa kartu, S = membawa surat pengganti, dan M = diizinkan masuk. Dari (K atau S) → M dan tidak M, diperoleh tidak (K atau S). Dengan hukum De Morgan, ini berarti tidak K dan tidak S. Jadi kedua dokumen tersebut sama-sama tidak dibawa.");

  add(5, logic, "Irisan kelompok dan pembalikan pernyataan sebagian",
    "Semua arsip digital dapat dicari melalui indeks. Sebagian arsip yang dapat dicari melalui indeks dapat diakses publik. Kesimpulan yang pasti benar adalah ...",
    "sebagian arsip yang dapat diakses publik dapat dicari melalui indeks", ["semua arsip digital dapat diakses publik", "sebagian arsip digital pasti dapat diakses publik", "tidak ada arsip digital yang dapat diakses publik", "semua arsip yang dapat dicari melalui indeks merupakan arsip digital"],
    "Pernyataan kedua memastikan adanya arsip yang sekaligus dapat dicari melalui indeks dan diakses publik. Karena irisan kedua kelompok bersifat timbal balik, sebagian arsip yang diakses publik dapat dicari melalui indeks. Belum ada kepastian bahwa irisan tersebut memuat arsip digital, sehingga tidak boleh menyimpulkan hubungan tambahan antara arsip digital dan akses publik.");

  add(6, logic, "Implikasi berantai dan penolakan anteseden melalui kontraposisi",
    "Jika A diterima, B tidak diterima. Jika C diterima, B diterima. Diketahui C diterima. Pernyataan yang pasti benar adalah ...",
    "B diterima dan A tidak diterima", ["A dan B sama-sama diterima", "A diterima dan B tidak diterima", "B tidak diterima dan C diterima", "status penerimaan A dan B belum dapat ditentukan"],
    "C diterima menyebabkan B diterima melalui modus ponens. Aturan A diterima → B tidak diterima memiliki kontraposisi B diterima → A tidak diterima. Maka B diterima dan A tidak diterima. Menentukan A memerlukan penerapan kembali aturan pertama, bukan sekadar membaca fakta tentang C.");

  add(7, logic, "Urutan dengan blok berdekatan dan posisi tambahan",
    "Enam peserta A, B, C, D, E, dan F tampil satu kali secara bergiliran. F tampil pertama dan D terakhir. C tepat setelah B, sedangkan E setelah C. Jika A mendapat giliran keempat, siapa yang tampil tepat sebelum A?",
    "C", ["B", "D", "E", "F"],
    "Posisi 1 diisi F, posisi 4 diisi A, dan posisi 6 diisi D. B, C, dan E mengisi posisi 2, 3, dan 5. Karena C tepat setelah B, blok B–C hanya dapat menempati posisi 2–3; E menempati posisi 5. Urutannya F–B–C–A–E–D. Peserta tepat sebelum A adalah C.");

  add(8, logic, "Permutasi melingkar dengan pengurangan kasus terlarang",
    "Lima orang A, B, C, D, dan E duduk mengelilingi meja bundar. A dan B harus berdampingan, sedangkan C dan D tidak boleh berdampingan. Susunan yang hanya berbeda karena perputaran meja dianggap sama. Berapa banyak susunan yang memenuhi ketentuan?",
    "4", ["6", "8", "10", "12"],
    "Anggap A–B sebagai satu blok. Susunan melingkar dari blok tersebut, C, D, dan E berjumlah (4 − 1)! × 2 = 12. Kasus terlarang ketika C–D juga berdampingan berjumlah (3 − 1)! × 2 × 2 = 8. Jadi susunan yang memenuhi adalah 12 − 8 = 4. Pencerminan tidak disamakan dengan perputaran.");

  add(9, numeric, "Operasi pecahan campuran bentuk desimal dan persen",
    "Nilai dari (2/3 − 0,25) : 5/6 + 10% adalah ...",
    "0,60", ["0,40", "0,50", "0,65", "0,75"],
    "Ubah 0,25 menjadi 1/4. Selisih 2/3 − 1/4 = 5/12. Kemudian (5/12) : (5/6) = (5/12) × (6/5) = 1/2. Tambahkan 10% = 0,10, sehingga hasilnya 0,50 + 0,10 = 0,60.");

  add(10, numeric, "Hitung cepat melalui pecahan ekuivalen",
    "Nilai dari 12,5% × 64 + 3/4 × 16 − 0,2 × 15 adalah ...",
    "17", ["15", "16", "18", "20"],
    "12,5% = 1/8, sehingga 12,5% × 64 = 8. Selanjutnya 3/4 × 16 = 12 dan 0,2 × 15 = 3. Hasil akhir 8 + 12 − 3 = 17. Perubahan bentuk bilangan membuat perhitungan dapat dilakukan tanpa perkalian desimal panjang.");

  add(11, numeric, "Perbandingan dua hasil perkalian dengan angka tertentu",
    "Diketahui P = 24 × 26 dan Q = 25 × 25. Hubungan P dan Q yang benar adalah ...",
    "P < Q", ["P > Q", "P = Q", "P = Q + 1", "hubungan tidak dapat ditentukan"],
    "P = 24 × 26 = 624, sedangkan Q = 25 × 25 = 625. Karena 624 lebih kecil daripada 625, hubungan yang benar adalah P < Q.");

  add(12, numeric, "Menentukan pasangan perkalian yang bernilai sama",
    "Pasangan perkalian yang memiliki nilai sama adalah ...",
    "64 × 15 dan 48 × 20", ["25 × 32 dan 24 × 35", "36 × 25 dan 45 × 18", "42 × 20 dan 35 × 25", "75 × 12 dan 60 × 16"],
    "64 × 15 = 960 dan 48 × 20 = 960. Dari 64 menjadi 48, faktor pertama dikali 3/4; dari 15 menjadi 20, faktor kedua dikali 4/3. Karena (3/4) × (4/3) = 1, hasil perkaliannya tetap sama. Pasangan lain menghasilkan nilai yang berbeda.");

  add(13, patterns, "Deret rekursif perkalian dan penambahan tetap",
    "Angka berikutnya pada deret 2, 5, 11, 23, 47, ... adalah ...",
    "95", ["71", "89", "94", "96"],
    "Setiap suku diperoleh dengan mengalikan suku sebelumnya dengan 2 lalu menambahkan 1: 2×2+1=5; 5×2+1=11; 11×2+1=23; 23×2+1=47. Suku berikutnya adalah 47×2+1=95.");

  add(14, patterns, "Dua larik: pembagian tetap dan kuadrat berurutan",
    "Angka berikutnya pada deret 81, 4, 27, 9, 9, 16, 3, ... adalah ...",
    "25", ["1", "18", "21", "27"],
    "Pisahkan posisi ganjil dan genap. Posisi ganjil: 81, 27, 9, 3, ... selalu dibagi 3. Posisi genap: 4, 9, 16, ... merupakan 2^2, 3^2, 4^2. Suku yang ditanyakan berada di posisi genap berikutnya, yaitu 5^2 = 25.");

  add(15, patterns, "Menemukan rumus bilangan segitiga dari tabel",
    "Nilai suku ke-11 pada tabel berikut adalah ...\n\n| Suku ke-n | Nilai |\n| :---: | :---: |\n| 2 | 1 |\n| 4 | 6 |\n| 6 | 15 |\n| 9 | 36 |\n| 11 | ? |",
    "55", ["45", "50", "60", "66"],
    "Pasangan pada tabel memenuhi U_n = n(n − 1)/2. Untuk n=2 diperoleh 1; n=4 diperoleh 6; n=6 diperoleh 15; n=9 diperoleh 36. Jadi U_11 = 11×10/2 = 55. Indeks yang tidak berurutan mengarahkan pencarian pada hubungan indeks dengan nilai.");

  add(16, patterns, "Matriks angka dengan kuadrat dan perkalian",
    "Nilai pengganti tanda tanya pada matriks berikut adalah ...\n\n| 3 | 5 | 2 | 19 |\n| 4 | 2 | 3 | 22 |\n| 6 | 3 | 4 | ? |",
    "48", ["44", "46", "50", "54"],
    "Pada setiap baris berlaku: bilangan pertama dikuadratkan lalu ditambah hasil kali bilangan kedua dan ketiga. Baris pertama: 3^2 + 5×2 = 19. Baris kedua: 4^2 + 2×3 = 22. Baris ketiga: 6^2 + 3×4 = 36 + 12 = 48.");

  add(17, patterns, "Matriks dengan jumlah baris dan kolom tetap",
    "Nilai pengganti tanda tanya pada matriks berikut adalah ...\n\n| 4 | 9 | 2 |\n| 3 | 5 | 7 |\n| 8 | 1 | ? |",
    "6", ["4", "5", "7", "9"],
    "Jumlah setiap baris dan kolom adalah 15. Baris ketiga memberi 8 + 1 + ? = 15, sehingga ? = 6. Nilai ini juga memenuhi kolom ketiga: 2 + 7 + 6 = 15. Pemeriksaan dua arah memperkuat pola.");

  add(18, patterns, "Menentukan beda sebelum menjumlahkan deret aritmetika",
    "Suatu barisan aritmetika memiliki suku ke-5 sebesar 21 dan suku ke-12 sebesar 49. Jumlah sepuluh suku pertamanya adalah ...",
    "230", ["210", "220", "240", "250"],
    "Beda d = (49 − 21)/(12 − 5) = 4. Suku pertama a = 21 − 4×4 = 5. Suku ke-10 adalah 5 + 9×4 = 41. Jumlah sepuluh suku pertama = 10×(5 + 41)/2 = 230. Pertanyaan meminta jumlah suku, bukan hanya suku ke-10.");

  add(19, numeric, "Mencari diskon kedua dari harga akhir",
    "Sebuah barang berharga Rp500.000 mendapat diskon 20%, kemudian diskon tambahan yang dihitung dari harga setelah diskon pertama. Jika harga akhirnya Rp340.000, besar diskon tambahan adalah ...",
    "15%", ["10%", "12%", "18%", "20%"],
    "Setelah diskon pertama, harga menjadi 80% × Rp500.000 = Rp400.000. Potongan tahap kedua adalah Rp400.000 − Rp340.000 = Rp60.000. Karena dasar diskon kedua Rp400.000, besarnya 60.000/400.000 × 100% = 15%.");

  add(20, numeric, "Beban pekerjaan dengan penambahan pekerja di tengah proses",
    "Enam pekerja dapat menyelesaikan sebuah pekerjaan dalam 15 hari. Setelah bekerja selama 5 hari, mereka mendapat bantuan 4 pekerja dengan kemampuan yang sama. Jika seluruh pekerja bekerja setiap hari, berapa hari total pekerjaan tersebut selesai sejak dimulai?",
    "11 hari", ["6 hari", "9 hari", "10 hari", "12 hari"],
    "Beban total = 6×15 = 90 hari-orang. Lima hari pertama menyelesaikan 6×5 = 30 hari-orang, sehingga tersisa 60. Setelah ditambah 4 orang, jumlah pekerja menjadi 10 dan sisa waktu 60/10 = 6 hari. Waktu total sejak awal = 5 + 6 = 11 hari.");

  add(21, numeric, "Kejar-mengejar dengan waktu mulai berbeda dan target jarak",
    "Bus A berangkat dari terminal pukul 07.00 dengan kecepatan tetap 50 km/jam. Bus B berangkat pukul 07.40 dari terminal dan rute yang sama dengan kecepatan tetap 75 km/jam. Pada jarak berapa dari terminal Bus B menyusul Bus A?",
    "100 km", ["75 km", "90 km", "125 km", "150 km"],
    "Keunggulan jarak Bus A ketika B berangkat = 50×(40/60) = 100/3 km. Kecepatan relatif = 75 − 50 = 25 km/jam. Waktu mengejar sejak B berangkat = (100/3)/25 = 4/3 jam. Jarak Bus B saat menyusul = 75×4/3 = 100 km. Keduanya berada pada posisi yang sama pada pukul 09.00.");

  add(22, numeric, "Kecukupan data untuk menentukan sifat bilangan",
    "Untuk suatu bilangan bulat positif n, apakah n merupakan bilangan genap?\n\n(1) n merupakan kelipatan 6.\n(2) n merupakan kelipatan 3.",
    "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", ["Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", "Masing-masing pernyataan secara terpisah sudah cukup.", "Bahkan kedua pernyataan bersama-sama masih tidak cukup."],
    "Setiap kelipatan 6 pasti genap, sehingga pernyataan (1) cukup untuk menjawab ya tanpa menentukan nilai n. Kelipatan 3 dapat ganjil, seperti 3 dan 9, atau genap, seperti 6 dan 12. Jadi pernyataan (2) tidak cukup. Kedua informasi tetap konsisten jika digabungkan.");

  add(23, numeric, "Kecukupan dua persamaan yang saling bebas",
    "Diketahui x dan y adalah bilangan real. Berapakah nilai x?\n\n(1) x + y = 18.\n(2) x − y = 4.",
    "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", ["Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", "Masing-masing pernyataan secara terpisah sudah cukup.", "Bahkan kedua pernyataan bersama-sama masih tidak cukup."],
    "Masing-masing persamaan sendiri memungkinkan banyak nilai x karena y belum diketahui. Jika digabungkan, penjumlahan kedua persamaan menghasilkan 2x=22, sehingga x=11 dan y=7. Jadi informasi bersama cukup, sedangkan masing-masing secara terpisah tidak cukup.");

  add(24, numeric, "Kecukupan data luas dari keliling dan diagonal",
    "Berapakah luas sebuah persegi panjang?\n\n(1) Perbandingan panjang dan lebarnya adalah 4 : 3.\n(2) Kelilingnya 28 cm dan panjang diagonalnya 10 cm.",
    "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", ["Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", "Masing-masing pernyataan secara terpisah sudah cukup.", "Bahkan kedua pernyataan bersama-sama masih tidak cukup."],
    "Pernyataan (1) hanya memberi rasio sehingga skala panjang dan luas belum diketahui. Dari pernyataan (2), p+l=14 dan p^2+l^2=100. Gunakan (p+l)^2 = p^2+l^2+2pl: 196=100+2pl, sehingga luas pl=48 cm². Ukuran 8 cm dan 6 cm juga konsisten dengan rasio pada pernyataan (1). Jadi pernyataan (2) saja cukup.");

  add(25, numeric, "Kecukupan data dengan dua persamaan yang bergantung",
    "Harga satu buku adalah b rupiah dan harga satu pensil adalah p rupiah. Berapakah harga satu buku?\n\n(1) 2b + 3p = 29.000.\n(2) 4b + 6p = 58.000.",
    "Bahkan kedua pernyataan bersama-sama masih tidak cukup.", ["Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", "Masing-masing pernyataan secara terpisah sudah cukup."],
    "Persamaan (2) tepat dua kali persamaan (1), sehingga tidak memberi informasi baru. Misalnya b=10.000 dan p=3.000 memenuhi keduanya; b=7.000 dan p=5.000 juga memenuhi keduanya. Karena harga buku tidak tunggal, kedua pernyataan bersama-sama tetap tidak cukup.");

  add(26, numeric, "Laju kerja bersama yang dilanjutkan satu pekerja",
    "A dapat menyelesaikan pekerjaan dalam 9 jam, sedangkan B dalam 18 jam. Mereka bekerja bersama selama 3 jam, lalu B berhenti. Berapa waktu tambahan yang dibutuhkan A untuk menyelesaikan sisanya?",
    "4 jam 30 menit", ["3 jam", "3 jam 30 menit", "4 jam", "6 jam"],
    "Laju gabungan = 1/9 + 1/18 = 1/6 pekerjaan per jam. Dalam 3 jam mereka menyelesaikan 3/6 = 1/2 pekerjaan. Sisa 1/2 dikerjakan A dengan laju 1/9, sehingga membutuhkan (1/2)/(1/9) = 9/2 jam = 4 jam 30 menit tambahan.");

  add(27, numeric, "Menggabungkan dua perbandingan dengan informasi selisih",
    "Dana A dan B berbanding 2 : 3, sedangkan dana B dan C berbanding 4 : 5. Jika dana C lebih besar Rp42 juta daripada dana A, berapakah dana B?",
    "Rp72 juta", ["Rp48 juta", "Rp60 juta", "Rp84 juta", "Rp90 juta"],
    "Samakan bagian B: A:B=8:12 dan B:C=12:15, sehingga A:B:C=8:12:15. Selisih C dan A = 7 bagian = Rp42 juta, jadi 1 bagian Rp6 juta. Dana B = 12×Rp6 juta = Rp72 juta.");

  add(28, numeric, "Menentukan modal dari selisih saldo bunga tunggal",
    "Sebuah tabungan berbunga tunggal tanpa biaya administrasi memiliki saldo Rp3.120.000 setelah 8 bulan dan Rp3.180.000 setelah 12 bulan. Jika tidak ada setoran atau penarikan, berapakah modal awalnya?",
    "Rp3.000.000", ["Rp2.940.000", "Rp3.060.000", "Rp3.120.000", "Rp3.180.000"],
    "Selisih saldo 12 bulan dan 8 bulan adalah Rp60.000, yaitu bunga selama 4 bulan. Karena bunga tunggal, bunga per bulan tetap Rp15.000. Bunga selama 8 bulan = Rp120.000, sehingga modal awal = Rp3.120.000 − Rp120.000 = Rp3.000.000. Hasil ini juga memberi bunga 12 bulan Rp180.000.");

  add(29, numeric, "Dua hubungan usia pada waktu berbeda",
    "Empat tahun lalu, usia ayah lima kali usia anaknya. Empat tahun lagi, usia ayah tiga kali usia anaknya. Berapakah usia anak saat ini?",
    "12 tahun", ["8 tahun", "10 tahun", "14 tahun", "16 tahun"],
    "Misalkan usia sekarang ayah F dan anak A. Empat tahun lalu: F−4=5(A−4), sehingga F=5A−16. Empat tahun lagi: F+4=3(A+4), sehingga F=3A+8. Samakan: 5A−16=3A+8 → 2A=24 → A=12. Usia ayah sekarang 44 tahun; pasangan 40 dan 8 serta 48 dan 16 memenuhi kedua rasio.");

  add(30, numeric, "Persediaan dengan dua persentase dan tambahan stok",
    "Sebuah toko menjual 25% persediaan botolnya pada pagi hari, lalu menerima tambahan 20 botol. Pada sore hari, 40% dari persediaan yang tersedia saat itu terjual. Jika tersisa 84 botol, berapakah persediaan awal toko?",
    "160 botol", ["120 botol", "140 botol", "180 botol", "200 botol"],
    "Kerjakan mundur. Sisa 84 botol adalah 60% persediaan sebelum penjualan sore, sehingga persediaan saat itu 84/0,60=140 botol. Sebelum menerima tambahan, stok tersisa 140−20=120 botol. Jumlah ini adalah 75% stok awal, sehingga stok awal 120/0,75=160 botol. Tambahan 20 botol harus dikurangkan sebelum membalik persentase pagi.");
}
