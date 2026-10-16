// Revisi soal 1–30: kompetensi tetap dekat dengan acuan, tetapi langkah
// penalaran berubah. Posisi kunci mengikuti registri di generate.mjs.
export function createTextQuestions({ add }) {
  const verbal = "Kemampuan Verbal", logic = "Logika Analitis";
  const numeric = "Kemampuan Numerik", pattern = "Deret & Pola";

  add(1, verbal, "Analogi peningkatan intensitas",
    "GERIMIS : HUJAN DERAS = BISIKAN : ...",
    ["percakapan", "pendengar", "kesunyian", "teriakan", "suara"],
    "Gerimis dan hujan deras menunjukkan gejala sejenis dengan intensitas yang meningkat. Hubungan setara terdapat pada bisikan dan teriakan: keduanya suara manusia, tetapi teriakan memiliki intensitas lebih tinggi. Yang dicari adalah peningkatan intensitas, bukan lawan kata, penerima suara, atau kategori umumnya.");

  add(2, verbal, "Analogi representasi dan objek yang diwakili",
    "PETA : WILAYAH = ... : ...",
    ["kompas : arah", "denah : ruangan", "kunci : pintu", "termometer : suhu", "kamera : lensa"],
    "Peta merupakan representasi tata letak suatu wilayah. Denah merupakan representasi tata letak suatu ruangan. Kompas menunjukkan arah dan termometer mengukur suhu, tetapi keduanya bukan gambaran tata letak objeknya. Kunci berfungsi membuka pintu, sedangkan lensa merupakan bagian kamera.");

  add(3, verbal, "Analogi susunan bagian bertingkat",
    "KALIMAT : PARAGRAF : KARANGAN = ... : ... : ...",
    ["akar : batang : daun", "benih : tunas : pohon", "bahan : mesin : produk", "penulis : naskah : penerbit", "sel : jaringan : organ"],
    "Kalimat-kalimat menyusun paragraf, dan paragraf-paragraf menyusun karangan. Hubungan bagian yang menyusun kesatuan lebih besar ini setara dengan sel-sel yang menyusun jaringan dan jaringan-jaringan yang menyusun organ. Benih–tunas–pohon adalah tahapan pertumbuhan, bukan susunan bagian bertingkat.");

  add(4, logic, "Menguji pembalikan implikasi",
    "Berlaku aturan: jika berkas suatu permohonan lengkap, permohonan tersebut diproses. Diketahui permohonan R diproses. Hanya berdasarkan informasi tersebut, kesimpulan yang tepat adalah ...",
    ["belum dapat dipastikan apakah berkas permohonan R lengkap", "berkas permohonan R pasti lengkap", "berkas permohonan R pasti tidak lengkap", "semua permohonan yang diproses pasti memiliki berkas lengkap", "permohonan R tidak diproses"],
    "Misalkan P = berkas lengkap dan Q = permohonan diproses. Aturan hanya menyatakan P → Q. Diketahui Q benar, tetapi hal itu tidak membuktikan P benar maupun salah. Aturan tidak menyatakan bahwa kelengkapan berkas merupakan satu-satunya keadaan yang memungkinkan pemrosesan. Menyimpulkan Q → P merupakan pembalikan implikasi yang tidak sah.");

  add(5, logic, "Menemukan pernyataan yang bertentangan dengan dua kelompok terpisah",
    "Semua anggota tim audit memiliki sertifikat kompetensi. Tidak ada pemilik sertifikat kompetensi yang mengikuti pelatihan dasar. Pernyataan yang pasti salah adalah ...",
    ["sebagian peserta pelatihan dasar bukan anggota tim audit", "sebagian pemilik sertifikat kompetensi bukan anggota tim audit", "sebagian anggota tim audit mengikuti pelatihan dasar", "semua anggota tim audit tidak mengikuti pelatihan dasar", "tidak seorang pun peserta pelatihan dasar merupakan anggota tim audit"],
    "Anggota tim audit termasuk kelompok pemilik sertifikat, sedangkan kelompok pemilik sertifikat tidak beririsan dengan peserta pelatihan dasar. Akibatnya tidak mungkin ada anggota tim audit yang mengikuti pelatihan dasar. Pernyataan C pasti salah karena menyatakan adanya irisan tersebut. D dan E mengikuti premis. A dan B masih mungkin benar, tetapi keberadaan orang-orang yang disebut di dalamnya tidak dipastikan oleh premis.");

  add(6, logic, "Pilihan tepat satu dan eliminasi melalui implikasi",
    "Dari calon A dan calon B, tepat satu orang diterima. Jika A diterima, C mengikuti orientasi. Diketahui C tidak mengikuti orientasi. Pernyataan yang pasti benar adalah ...",
    ["A diterima dan B tidak diterima", "B diterima", "A dan B sama-sama diterima", "A dan B sama-sama tidak diterima", "status penerimaan B belum dapat ditentukan"],
    "Dari A diterima → C mengikuti orientasi dan fakta bahwa C tidak mengikuti orientasi, diperoleh A tidak diterima melalui modus tollens. Karena tepat satu dari A atau B diterima, penolakan A membuat B pasti diterima. Jadi diperlukan dua langkah: menyingkirkan A, lalu menggunakan ketentuan tepat satu.");

  add(7, logic, "Menentukan posisi yang mustahil dari urutan parsial",
    "Enam peserta, yaitu Arif, Bela, Citra, Danu, Eka, dan Fajar, mendapat giliran presentasi masing-masing satu kali. Fajar tampil sebelum Arif, dan Arif tampil sebelum Citra. Bela tampil sebelum Danu. Eka mendapat giliran terakhir. Siapakah yang tidak mungkin mendapat giliran kedua?",
    ["Arif", "Bela", "Danu", "Fajar", "Citra"],
    "Urutan relatif Fajar → Arif → Citra berarti selalu ada sedikitnya dua peserta sebelum Citra. Karena itu posisi paling awal Citra adalah ketiga, sehingga Citra tidak mungkin kedua. Peserta lain dalam opsi masih dapat menempati posisi kedua. Contohnya: Fajar–Arif–Bela–Danu–Citra–Eka; Fajar–Bela–Arif–Citra–Danu–Eka; Bela–Danu–Fajar–Arif–Citra–Eka; dan Bela–Fajar–Arif–Citra–Danu–Eka. Tidak diperlukan satu urutan lengkap yang unik untuk menjawab pertanyaan ini.");

  add(8, logic, "Permutasi dengan menghitung komplemen",
    "Enam delegasi A, B, C, D, E, dan F duduk berjajar pada enam kursi. A harus duduk paling kiri, sedangkan B dan C tidak boleh berdampingan. Berapa banyak susunan yang memenuhi ketentuan tersebut?",
    ["24", "48", "72", "96", "120"],
    "Setelah A ditetapkan di kursi pertama, lima orang lainnya dapat disusun dalam 5! = 120 cara. Hitung lalu kurangi susunan yang dilarang: jika B dan C berdampingan, keduanya menjadi satu blok bersama D, E, dan F, sehingga terdapat 4! × 2 = 48 susunan. Banyak susunan yang diperbolehkan = 120 − 48 = 72. Blok berdampingan digunakan untuk menghitung yang dilarang, bukan langsung sebagai jawaban.");

  add(9, numeric, "Membalik urutan operasi untuk menentukan nilai yang hilang",
    "Diketahui (3/4 − x) : 25% = 1,2. Nilai x adalah ...",
    ["0,15", "0,25", "0,35", "0,45", "0,55"],
    "Karena 25% = 0,25, kalikan kedua ruas dengan 0,25: 3/4 − x = 1,2 × 0,25 = 0,30. Maka 0,75 − x = 0,30 dan x = 0,45. Pengecekan: (0,75 − 0,45)/0,25 = 0,30/0,25 = 1,2. Langkahnya membalik pembagian terlebih dahulu, lalu menentukan bilangan yang dikurangkan.");

  add(10, numeric, "Hitung cepat dengan menggabungkan faktor yang sama",
    "Nilai dari 12,5% × 48 + 7/8 × 48 − 0,25 × 16 adalah ...",
    ["44", "40", "46", "48", "52"],
    "Ubah 12,5% menjadi 1/8. Dua suku pertama mempunyai faktor 48 yang sama, sehingga (1/8 × 48) + (7/8 × 48) = (1/8 + 7/8) × 48 = 48. Suku terakhir 0,25 × 16 = 4. Hasil akhirnya 48 − 4 = 44. Sifat distributif memungkinkan penggabungan sebelum menghitung setiap perkalian.");

  add(11, numeric, "Perbandingan berdasarkan rentang variabel",
    "Diketahui 0 < x < 1, P = x², dan Q = x. Hubungan yang selalu benar adalah ...",
    ["P > Q", "P = Q", "P = Q + 1", "hubungan P dan Q tidak dapat ditentukan", "P < Q"],
    "Dari x < 1, kalikan kedua ruas dengan x yang positif. Arah ketaksamaan tetap, sehingga x² < x. Jadi P < Q untuk seluruh nilai x dalam rentang tersebut. Mengalikan bilangan positif dengan faktor di antara 0 dan 1 memperkecil nilainya; tidak perlu mengetahui nilai x secara tepat.");

  add(12, numeric, "Perubahan faktor yang mempertahankan hasil kali",
    "Hasil kali dua bilangan positif adalah 360. Jika bilangan pertama dinaikkan 25%, bilangan kedua harus diubah bagaimana agar hasil kalinya tetap 360?",
    ["diturunkan 20%", "diturunkan 25%", "dinaikkan 20%", "diturunkan 12,5%", "diturunkan 5%"],
    "Kenaikan 25% membuat faktor pertama menjadi 1,25 kali semula. Agar hasil kali tetap, faktor kedua harus menjadi 1/1,25 = 0,8 kali semula, yaitu turun 20%. Kenaikan 25% tidak diimbangi dengan penurunan 25%, karena 1,25 × 0,75 = 0,9375, bukan 1.");

  add(13, pattern, "Deret dengan selisih bertingkat",
    "Angka berikutnya pada deret 5, 9, 16, 26, 39, ... adalah ...",
    ["49", "52", "54", "55", "58"],
    "Selisih antarsuku adalah 4, 7, 10, dan 13. Selisih-selisih itu bertambah 3 secara tetap. Maka selisih berikutnya 16 dan suku berikutnya 39 + 16 = 55. Yang teratur adalah perubahan selisih, bukan beda antarsuku yang langsung konstan.");

  add(14, pattern, "Dua operasi bergantian pada satu rangkaian",
    "Angka berikutnya pada deret 3, 6, 10, 20, 24, 48, ... adalah ...",
    ["50", "52", "54", "56", "96"],
    "Operasi antarangka bergantian: ×2, +4, ×2, +4, ×2, lalu +4. Karena 24 menjadi 48 melalui perkalian 2, langkah berikutnya adalah 48 + 4 = 52. Pola ini dapat dibaca sebagai satu rangkaian operasi, tanpa memisahkan posisi ganjil dan genap menjadi dua deret mandiri.");

  add(15, pattern, "Menentukan indeks dari pola tabel kuadratik",
    "Tabel berikut mengikuti satu pola hubungan antara indeks dan nilai suku. Nilai n yang melengkapi tabel adalah ...\n\n| Suku ke- | Nilai |\n| :---: | :---: |\n| 1 | 2 |\n| 3 | 12 |\n| 5 | 30 |\n| 8 | 72 |\n| n | 156 |",
    ["10", "11", "12", "13", "14"],
    "Pasangan pada tabel memenuhi U_n = n(n + 1): 1 × 2 = 2; 3 × 4 = 12; 5 × 6 = 30; dan 8 × 9 = 72. Untuk nilai 156, cari dua bilangan bulat positif berurutan yang hasil kalinya 156. Karena 12 × 13 = 156, indeksnya n = 12. Yang dicari adalah indeks dari nilai suku, sehingga pola digunakan secara terbalik.");

  add(16, pattern, "Hubungan vertikal berupa kuadrat dan penjumlahan",
    "Perhatikan pola hubungan vertikal antartiga angka pada setiap kolom. Nilai pengganti tanda tanya adalah ...\n\n| 2 | 5 | 4 |\n| 3 | 2 | 6 |\n| 7 | ? | 22 |",
    ["17", "25", "27", "29", "35"],
    "Angka terbawah diperoleh dengan menguadratkan angka teratas, kemudian menambahkan angka tengah. Kolom pertama: 2² + 3 = 7. Kolom ketiga: 4² + 6 = 22. Dengan aturan yang sama, kolom kedua memberi 5² + 2 = 27. Periksa hubungan antarbaris pada kolom yang sama, bukan operasi sepanjang satu baris.");

  add(17, pattern, "Jumlah tetap pada matriks dengan dua nilai hilang",
    "Jumlah angka pada setiap baris dan setiap kolom dalam matriks berikut sama. Nilai x − y adalah ...\n\n| 8 | 1 | x |\n| 3 | 5 | 7 |\n| y | 9 | 2 |",
    ["−2", "0", "1", "2", "4"],
    "Baris kedua berjumlah 3 + 5 + 7 = 15, sehingga semua baris dan kolom harus berjumlah 15. Dari baris pertama, x = 15 − 8 − 1 = 6. Dari baris ketiga, y = 15 − 9 − 2 = 4. Maka x − y = 6 − 4 = 2. Cek kolom pertama 8 + 3 + 4 = 15 dan kolom ketiga 6 + 7 + 2 = 15.");

  add(18, pattern, "Pasangan indeks dalam barisan aritmetika",
    "Tabel berikut memuat sebagian nilai suatu barisan aritmetika. Jumlah suku ke-7 dan suku ke-13 adalah ...\n\n| Suku ke- | Nilai |\n| :---: | :---: |\n| 4 | 17 |\n| 16 | 65 |",
    ["78", "82", "86", "88", "90"],
    "Dalam barisan aritmetika, pasangan suku dengan jumlah indeks yang sama mempunyai jumlah nilai yang sama. Karena 7 + 13 = 4 + 16 = 20, berlaku U_7 + U_13 = U_4 + U_16 = 17 + 65 = 82. Cara lain: beda = (65 − 17)/(16 − 4) = 4, sehingga U_7 = 29 dan U_13 = 53; jumlahnya tetap 82.");

  add(19, numeric, "Membandingkan diskon tunggal dan bertingkat",
    "Dua toko menjual tas yang sama dengan harga awal Rp500.000. Toko A memberi diskon 20%, kemudian diskon tambahan 10% dari harga setelah diskon pertama. Toko B memberi diskon tunggal 30%. Tanpa biaya tambahan, pernyataan yang benar adalah ...",
    ["harga di Toko B lebih murah Rp10.000", "harga di Toko A lebih murah Rp10.000", "harga akhir di kedua toko sama", "harga di Toko B lebih murah Rp25.000", "harga di Toko A lebih murah Rp25.000"],
    "Harga akhir Toko A = Rp500.000 × 0,80 × 0,90 = Rp360.000. Harga akhir Toko B = Rp500.000 × 0,70 = Rp350.000. Jadi Toko B lebih murah Rp10.000. Diskon 20% lalu 10% setara dengan diskon total 28%, bukan 30%, karena diskon kedua memakai harga yang sudah berkurang.");

  add(20, numeric, "Beban pekerjaan tersisa setelah jumlah pekerja berubah",
    "Suatu proyek direncanakan selesai oleh 12 pekerja dalam 18 hari kerja. Setelah bekerja selama 6 hari penuh, 4 pekerja dipindahkan ke proyek lain. Kemampuan setiap pekerja sama dan tetap. Jika pekerja yang tersisa melanjutkan pekerjaan tanpa tambahan tenaga, total waktu sejak proyek dimulai sampai selesai adalah ...",
    ["18 hari kerja", "20 hari kerja", "21 hari kerja", "22 hari kerja", "24 hari kerja"],
    "Beban seluruh proyek = 12 × 18 = 216 hari-orang. Selama 6 hari pertama telah diselesaikan 12 × 6 = 72 hari-orang, sehingga sisa pekerjaan 144 hari-orang. Jumlah pekerja berikutnya 12 − 4 = 8 orang; mereka memerlukan 144/8 = 18 hari lagi. Total sejak awal = 6 + 18 = 24 hari kerja. Perbandingan berbalik nilai diterapkan pada sisa pekerjaan, bukan pada keseluruhan pekerjaan yang sudah sebagian selesai.");

  add(21, numeric, "Gerak menyusul dan selisih kecepatan",
    "Mobil A berangkat dari terminal pukul 07.00 dengan kecepatan tetap 50 km/jam. Mobil B berangkat dari terminal yang sama pukul 07.30 dengan kecepatan tetap 75 km/jam. Keduanya menempuh jalan yang sama dan searah tanpa berhenti. Pukul berapa B menyusul A?",
    ["08.00", "08.30", "08.45", "09.00", "09.30"],
    "Pada pukul 07.30, A sudah berada 50 × 0,5 = 25 km di depan B. Karena keduanya searah, B menutup jarak dengan selisih kecepatan 75 − 50 = 25 km/jam. Waktu untuk menyusul = 25/25 = 1 jam sejak B berangkat, sehingga terjadi pukul 08.30. Pada saat itu A dan B masing-masing sudah menempuh 75 km.");

  const ds = [
    "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.",
    "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.",
    "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.",
    "Masing-masing pernyataan secara terpisah sudah cukup.",
    "Bahkan kedua pernyataan bersama-sama masih tidak cukup.",
  ];
  add(22, numeric, "Kecukupan data untuk menentukan jawaban ya atau tidak",
    "Diketahui n merupakan bilangan bulat positif. Apakah n habis dibagi 6?\n\n(1) n habis dibagi 2.\n(2) n habis dibagi 3.", ds,
    "Pernyataan (1) belum cukup: n = 2 memberi jawaban tidak, sedangkan n = 6 memberi jawaban ya. Pernyataan (2) juga belum cukup: n = 3 memberi jawaban tidak, sedangkan n = 6 memberi jawaban ya. Jika keduanya digabungkan, n habis dibagi 2 dan 3, sehingga pasti habis dibagi KPK(2,3) = 6. Tidak perlu mengetahui nilai n secara tepat; kepastian jawaban ya sudah mencukupi.");

  add(23, numeric, "Kecukupan data untuk kombinasi variabel",
    "Diketahui x dan y merupakan bilangan real. Berapakah nilai x + y?\n\n(1) 3x + 3y = 42.\n(2) x − y = 4.", ds,
    "Pernyataan (1) langsung memberi 3(x + y) = 42, sehingga x + y = 14. Jadi cukup meskipun nilai x dan y masing-masing belum diketahui. Pernyataan (2) tidak cukup: pasangan (5,1) dan (9,5) sama-sama mempunyai selisih 4, tetapi jumlahnya berbeda, yaitu 6 dan 14. Kecukupan dinilai terhadap jumlah yang ditanyakan, bukan terhadap keharusan menentukan setiap variabel.");

  add(24, numeric, "Mengenali dua pernyataan yang bergantung satu sama lain",
    "Semua roti dijual dengan harga satuan yang sama, demikian pula semua susu kemasan. Tidak ada diskon maupun biaya tambahan. Berapakah harga satu roti?\n\n(1) Dua roti dan tiga susu kemasan berharga Rp24.000.\n(2) Empat roti dan enam susu kemasan berharga Rp48.000.", ds,
    "Misalkan harga roti r dan susu s. Pernyataan (1) memberi 2r + 3s = 24.000. Pernyataan (2) memberi 4r + 6s = 48.000, yang persis dua kali persamaan pertama. Jadi (2) tidak menambah informasi baru. Bahkan jika digabungkan, r = Rp3.000 dan s = Rp6.000 maupun r = Rp6.000 dan s = Rp4.000 sama-sama memenuhi kedua pernyataan. Harga roti belum unik. Dua persamaan tidak otomatis cukup jika keduanya saling bergantung.");

  add(25, numeric, "Menentukan sifat bilangan tanpa mengetahui nilainya",
    "Diketahui n merupakan bilangan bulat positif. Apakah n merupakan bilangan ganjil?\n\n(1) n² merupakan bilangan ganjil.\n(2) n + 1 habis dibagi 4.", ds,
    "Dari (1), kuadrat bilangan genap selalu genap, sedangkan kuadrat bilangan ganjil selalu ganjil. Karena n² ganjil, n pasti ganjil; pernyataan ini cukup. Dari (2), n + 1 = 4k untuk suatu bilangan bulat k, sehingga n = 4k − 1 yang selalu ganjil; pernyataan ini juga cukup. Kedua pernyataan masing-masing memastikan jawaban ya, walaupun tidak menentukan satu nilai n. Contoh n = 3 atau 7 juga menunjukkan kedua data konsisten.");

  add(26, numeric, "Menentukan laju individu dari laju gabungan",
    "Mesin A dan B bersama-sama dapat menyelesaikan satu pesanan dalam 4 jam. Mesin A sendiri dapat menyelesaikan pesanan yang sama dalam 6 jam. Jika laju kedua mesin tetap dan dapat dijumlahkan, mesin B sendiri memerlukan waktu ...",
    ["12 jam", "10 jam", "8 jam", "6 jam", "2 jam"],
    "Laju gabungan A dan B adalah 1/4 pesanan per jam, sedangkan laju A adalah 1/6 pesanan per jam. Laju B = 1/4 − 1/6 = 1/12 pesanan per jam. Maka waktu B sendiri adalah 12 jam. Yang dikurangkan adalah laju kerja, bukan selisih waktu 6 − 4.");

  add(27, numeric, "Perubahan rasio akibat pemindahan barang",
    "Perbandingan jumlah kelereng Ardi dan Beni semula adalah 3 : 5. Setelah Beni memberikan 12 kelereng kepada Ardi, jumlah kelereng mereka menjadi sama. Jumlah kelereng Ardi semula adalah ...",
    ["18 butir", "24 butir", "30 butir", "48 butir", "36 butir"],
    "Misalkan jumlah awal Ardi 3k dan Beni 5k. Setelah pemindahan, Ardi memiliki 3k + 12 dan Beni memiliki 5k − 12. Karena sama, 3k + 12 = 5k − 12, sehingga 2k = 24 dan k = 12. Jumlah awal Ardi = 3 × 12 = 36 butir. Pemindahan 12 kelereng menutup selisih sebanyak 24, karena satu pihak bertambah 12 dan pihak lain berkurang 12.");

  add(28, numeric, "Bunga tunggal dengan dua lama penyimpanan",
    "Rani menabung Rp4.000.000. Setelah 6 bulan, ia menambahkan tabungan Rp2.000.000. Semua dana dicairkan tepat 12 bulan sejak setoran pertama. Bank memberikan bunga tunggal 9% per tahun yang dihitung untuk setiap setoran sejak setoran itu masuk, tanpa biaya administrasi. Total bunga yang diperoleh Rani adalah ...",
    ["Rp360.000", "Rp450.000", "Rp540.000", "Rp600.000", "Rp720.000"],
    "Setoran pertama disimpan 12 bulan, sehingga bunganya Rp4.000.000 × 9% × 1 = Rp360.000. Setoran tambahan hanya disimpan 6 bulan, sehingga bunganya Rp2.000.000 × 9% × 6/12 = Rp90.000. Total bunga = Rp360.000 + Rp90.000 = Rp450.000. Seluruh saldo Rp6.000.000 tidak boleh dianggap mengendap selama satu tahun penuh.");

  add(29, numeric, "Menentukan waktu saat rasio usia berubah",
    "Usia kakak saat ini 24 tahun dan usia adik 12 tahun. Berapa tahun lagi usia kakak menjadi 1,5 kali usia adik?",
    ["6 tahun", "8 tahun", "12 tahun", "16 tahun", "18 tahun"],
    "Misalkan waktu yang berlalu t tahun. Kedua usia bertambah dengan jumlah tahun yang sama, sehingga 24 + t = 1,5(12 + t). Jadi 24 + t = 18 + 1,5t, maka 6 = 0,5t dan t = 12. Saat itu kakak berusia 36 tahun dan adik 24 tahun, serta 36 = 1,5 × 24. Selisih usia tetap, sedangkan perbandingannya berubah.");

  add(30, numeric, "Menelusuri stok awal melalui persentase dan penambahan tetap",
    "Pada pagi hari sebuah toko menjual 40% persediaan minuman. Siang harinya toko menerima tambahan 30 botol. Pada sore hari terjual 1/3 dari persediaan yang ada saat itu, sehingga tersisa 100 botol. Persediaan awal toko adalah ...",
    ["150 botol", "180 botol", "190 botol", "200 botol", "250 botol"],
    "Telusuri dari akhir. Setelah 1/3 persediaan terjual, sisanya 2/3. Jadi persediaan sebelum penjualan sore = 100 ÷ (2/3) = 150 botol. Sebelum tambahan siang, jumlahnya 150 − 30 = 120 botol. Jumlah 120 ini adalah 60% persediaan awal, sehingga persediaan awal = 120/0,60 = 200 botol. Tambahan tetap 30 botol harus dipisahkan dari operasi persentase.");
}

export const revisionNotes = [
  [1,"Antonim dan arah sifat","Menilai peningkatan intensitas, bukan pertentangan makna."],
  [2,"Alat dan besaran yang diukur","Membedakan representasi objek dari alat ukur atau alat fungsi."],
  [3,"Input, proses, keluaran","Mengenali hubungan bagian–kesatuan dalam dua tingkat."],
  [4,"Menarik kesimpulan dengan modus tollens","Menguji apakah implikasi boleh dibalik ketika akibat diketahui."],
  [5,"Kesimpulan sebagian dari kelompok semua","Mencari pernyataan yang mustahil pada kelompok tanpa irisan."],
  [6,"Negasi dari disjungsi","Menggabungkan modus tollens dengan ketentuan tepat satu pilihan."],
  [7,"Menentukan urutan lengkap yang unik","Menentukan posisi yang mustahil meskipun beberapa urutan masih valid."],
  [8,"Menghitung susunan yang wajib berdampingan","Menghitung semua susunan, lalu mengurangi susunan yang dilarang."],
  [9,"Menghitung hasil operasi campuran","Membalik operasi untuk menemukan nilai yang hilang."],
  [10,"Menghitung pecahan istimewa satu per satu","Menggabungkan faktor sama melalui sifat distributif."],
  [11,"Membandingkan hasil kali memakai selisih kuadrat","Menilai kuantitas dari batas variabel tanpa mencari nilainya."],
  [12,"Mencocokkan dua hasil perkalian","Menentukan perubahan persentase yang menjaga hasil kali tetap."],
  [13,"Mengenali selisih berupa kuadrat","Mengamati beda kedua yang konstan."],
  [14,"Memisahkan dua deret berselang-seling","Mengikuti dua operasi bergantian pada satu rangkaian."],
  [15,"Menghitung nilai suku dari indeks","Mencari indeks dari nilai suku menggunakan produk bilangan berurutan."],
  [16,"Operasi sepanjang setiap baris","Mencari hubungan vertikal dengan kuadrat dan penjumlahan."],
  [17,"Membaca barisan kuadrat di dalam matriks","Menentukan dua nilai hilang dari jumlah baris/kolom yang tetap."],
  [18,"Mengekstrapolasi satu suku jauh","Menggunakan kesamaan jumlah indeks untuk menjumlahkan pasangan suku."],
  [19,"Mencari harga awal dari diskon dan biaya","Membandingkan hasil dua skema diskon."],
  [20,"Mengubah jumlah pekerja sejak awal dan menghitung hari","Menghitung pekerjaan yang sudah selesai sebelum jumlah pekerja berubah."],
  [21,"Berpapasan dengan menjumlahkan kecepatan","Menyusul searah dengan memakai selisih kecepatan."],
  [22,"Dua data untuk mencari ukuran pasti","Dua syarat divisibilitas untuk memastikan jawaban ya/tidak."],
  [23,"Menentukan satu nilai dari persamaan kuadrat","Menilai kecukupan untuk jumlah variabel tanpa menentukan setiap variabel."],
  [24,"Banyak kemungkinan nilai siswa","Mengenali bahwa dua persamaan memberikan informasi yang sama."],
  [25,"Dua pernyataan yang masing-masing memberi harga pasti","Dua pernyataan yang masing-masing memastikan sifat bilangan."],
  [26,"Menjumlahkan laju dua pekerja/mesin","Mengurangi laju individu dari laju gabungan."],
  [27,"Menggabungkan rasio statis tiga komponen","Menghitung perubahan pada kedua pihak akibat transfer barang."],
  [28,"Satu modal selama satu durasi","Menghitung bunga dua setoran dengan lama penyimpanan berbeda."],
  [29,"Mencari usia sekarang dari kondisi masa lalu","Mencari waktu saat rasio usia berubah dengan selisih tetap."],
  [30,"Persentase penjualan bertingkat","Menelusuri balik persentase yang diselingi penambahan stok tetap."],
];
