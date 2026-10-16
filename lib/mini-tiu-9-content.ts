import type { Question } from "./types";

export const MINI_TIU_9_QUESTIONS: Question[] = [
  {
    id: "mini-tiu9-01",
    category: "TIU",
    topic: "Kemampuan Verbal",
    prompt: "Teliti : ceroboh = ... : ...",
    choices: [
      { id: "a", label: "rajin : malas", score: 5 },
      { id: "b", label: "kikir : dermawan", score: 0 },
      { id: "c", label: "pengecut : pemberani", score: 0 },
      { id: "d", label: "pemarah : penyabar", score: 0 },
      { id: "e", label: "lamban : tangkas", score: 0 },
    ],
    explanation:
      "Pembahasan: Teliti dan ceroboh merupakan pasangan antonim dengan arah makna positif menuju negatif. Pasangan rajin dan malas memiliki hubungan dan arah yang sama (positif menuju negatif). Pilihan lainnya juga berupa antonim, namun bergerak dari makna negatif menuju positif. Jawaban A.",
  },
  {
    id: "mini-tiu9-02",
    category: "TIU",
    topic: "Kemampuan Verbal",
    prompt: "Timbangan : barang = rubrik : ...",
    choices: [
      { id: "a", label: "nilai", score: 0 },
      { id: "b", label: "penguji", score: 0 },
      { id: "c", label: "karya", score: 5 },
      { id: "d", label: "skor", score: 0 },
      { id: "e", label: "kurikulum", score: 0 },
    ],
    explanation:
      "Pembahasan: Timbangan digunakan sebagai instrumen untuk mengukur atau menilai besaran pada barang (objek yang diukur). Dengan pola yang setara, rubrik penilaian digunakan sebagai instrumen untuk mengukur kualitas pada karya (objek yang dinilai). Jawaban C.",
  },
  {
    id: "mini-tiu9-03",
    category: "TIU",
    topic: "Kemampuan Verbal",
    prompt: "Benih : tunas : pohon = embrio : janin : ...",
    choices: [
      { id: "a", label: "rahim", score: 0 },
      { id: "b", label: "bayi", score: 5 },
      { id: "c", label: "plasenta", score: 0 },
      { id: "d", label: "sel", score: 0 },
      { id: "e", label: "kelahiran", score: 0 },
    ],
    explanation:
      "Pembahasan: Hubungan tiga kata menunjukkan tahapan perkembangan bertahap: benih tumbuh menjadi tunas, lalu berkembang menjadi pohon dewasa. Secara analog, embrio berkembang menjadi janin, lalu dilahirkan menjadi individu bayi. Jawaban B.",
  },
  {
    id: "mini-tiu9-04",
    category: "TIU",
    topic: "Logika Analitis",
    prompt:
      "Jika seorang pegawai disiplin, kinerjanya akan dinilai baik. Jika kinerjanya dinilai baik, ia memperoleh tunjangan kinerja penuh. Hasil evaluasi menunjukkan bahwa Rudi tidak memperoleh tunjangan kinerja penuh. Kesimpulan yang tepat adalah ...",
    choices: [
      { id: "a", label: "Rudi disiplin dalam bekerja", score: 0 },
      { id: "b", label: "kinerja Rudi dinilai baik", score: 0 },
      { id: "c", label: "Rudi disiplin, tetapi kinerjanya kurang baik", score: 0 },
      { id: "d", label: "Rudi tidak disiplin dalam bekerja", score: 5 },
      { id: "e", label: "tidak dapat ditarik kesimpulan", score: 0 },
    ],
    explanation:
      "Pembahasan: Misalkan P = pegawai disiplin, Q = kinerja dinilai baik, dan R = memperoleh tunjangan kinerja penuh. Silogisme hipotesis memberi: P -> Q dan Q -> R, sehingga P -> R. Diketahui faktanya ~R (Rudi tidak memperoleh tunjangan kinerja penuh). Melalui prinsip Modus Tollens, kesimpulan yang sah adalah ~P (Rudi tidak disiplin dalam bekerja). Jawaban D.",
  },
  {
    id: "mini-tiu9-05",
    category: "TIU",
    topic: "Logika Analitis",
    prompt:
      "Semua atlet binaan rutin berolahraga setiap pagi. Sebagian mahasiswa kampus X adalah atlet binaan. Berdasarkan informasi tersebut, kesimpulan yang pasti benar adalah ...",
    choices: [
      { id: "a", label: "semua mahasiswa kampus X adalah atlet binaan", score: 0 },
      { id: "b", label: "semua orang yang rutin berolahraga adalah atlet binaan", score: 0 },
      { id: "c", label: "sebagian mahasiswa kampus X tidak berolahraga", score: 0 },
      { id: "d", label: "semua mahasiswa kampus X rutin berolahraga setiap pagi", score: 0 },
      { id: "e", label: "sebagian mahasiswa kampus X rutin berolahraga setiap pagi", score: 5 },
    ],
    explanation:
      "Pembahasan: Karena sebagian mahasiswa kampus X tergolong atlet binaan, dan seluruh atlet binaan tanpa kecuali rutin berolahraga setiap pagi, maka mahasiswa yang merangkap sebagai atlet binaan tersebut pasti rutin berolahraga setiap pagi. Jadi, sebagian mahasiswa kampus X rutin berolahraga setiap pagi. Jawaban E.",
  },
  {
    id: "mini-tiu9-06",
    category: "TIU",
    topic: "Logika Analitis",
    prompt:
      "Pada sebuah prosedur verifikasi data berlaku ketentuan: jika kondisi A atau kondisi B benar, maka kondisi C bernilai benar. Jika kondisi D benar, maka kondisi C bernilai salah. Hasil pemeriksaan sistem menunjukkan bahwa kondisi D bernilai benar. Pernyataan berikut yang pasti bernilai benar adalah ...",
    choices: [
      { id: "a", label: "kondisi A salah dan kondisi B salah", score: 5 },
      { id: "b", label: "kondisi A benar", score: 0 },
      { id: "c", label: "kondisi B benar", score: 0 },
      { id: "d", label: "kondisi C bernilai benar", score: 0 },
      { id: "e", label: "kondisi A salah, sedangkan kondisi B belum dapat dipastikan", score: 0 },
    ],
    explanation:
      "Pembahasan: Dari premis D -> ~C dan diketahui D bernilai benar, diperoleh fakta pasti bahwa C bernilai salah (~C). Pada implikasi (A atau B) -> C, apabila konsekuen C bernilai salah, maka anteseden (A atau B) wajib bernilai salah melalui Modus Tollens. Negasi dari disjungsi ~(A atau B) menurut hukum De Morgan adalah ~A dan ~B (kondisi A bernilai salah DAN kondisi B bernilai salah). Jawaban A.",
  },
  {
    id: "mini-tiu9-07",
    category: "TIU",
    topic: "Logika Analitis",
    prompt:
      "Enam pelamar kerja, yaitu Ani, Budi, Cici, Dodi, Eka, dan Fani, menjalani verifikasi berkas secara bergiliran di satu loket. Cici mendapat giliran ketiga. Ani mendapat giliran sebelum Cici, tetapi bukan giliran pertama. Eka mendapat giliran tepat setelah Dodi. Fani bukan giliran terakhir dan Budi mendapat giliran sebelum Fani. Siapakah yang mendapat giliran kelima?",
    choices: [
      { id: "a", label: "Budi", score: 0 },
      { id: "b", label: "Fani", score: 0 },
      { id: "c", label: "Eka", score: 0 },
      { id: "d", label: "Dodi", score: 5 },
      { id: "e", label: "Cici", score: 0 },
    ],
    explanation:
      "Pembahasan: Posisi 3 diisi Cici. Ani sebelum Cici tetapi bukan pertama, sehingga Ani di posisi 2. Sisa posisi adalah 1, 4, 5, dan 6. Dodi dan Eka harus berdampingan berurutan (blok D-E). Jika blok D-E di posisi 4-5, sisa posisi 1 dan 6 untuk Budi dan Fani. Namun Fani bukan giliran terakhir, sehingga Fani harus di posisi 1 dan Budi di posisi 6; ini bertentangan dengan ketentuan Budi sebelum Fani. Maka blok D-E wajib berada pada posisi 5 dan 6 (Dodi ke-5, Eka ke-6). Posisi 1 ditempati Budi dan posisi 4 ditempati Fani. Urutan lengkap: 1-Budi, 2-Ani, 3-Cici, 4-Fani, 5-Dodi, 6-Eka. Giliran kelima ditempati oleh Dodi. Jawaban D.",
  },
  {
    id: "mini-tiu9-08",
    category: "TIU",
    topic: "Logika Analitis",
    prompt:
      "Enam delegasi instansi A, B, C, D, E, dan F berfoto bersama dengan duduk berjajar pada enam kursi yang bernomor 1 sampai 6 dari kiri ke kanan. Delegasi A harus duduk di kursi paling kiri (nomor 1), sedangkan delegasi B dan delegasi C harus duduk berdampingan. Berapa banyak susunan posisi duduk yang memenuhi ketentuan tersebut?",
    choices: [
      { id: "a", label: "24", score: 0 },
      { id: "b", label: "36", score: 0 },
      { id: "c", label: "48", score: 5 },
      { id: "d", label: "72", score: 0 },
      { id: "e", label: "120", score: 0 },
    ],
    explanation:
      "Pembahasan: Kursi nomor 1 sudah pasti ditempati A (1 kemungkinan). Pada lima kursi tersisa (nomor 2 sampai 6), B dan C harus berdampingan sehingga dianggap satu kesatuan blok (BC). Bersama D, E, dan F, terdapat 4 unsur yang akan disusun pada 5 kursi: banyaknya permutasi 4 unsur = 4! = 24 cara. Di dalam blok (BC), urutan internal B dan C dapat bertukar dalam 2! = 2 cara. Maka total susunan = 1 x 4! x 2! = 24 x 2 = 48 cara. Jawaban C.",
  },
  {
    id: "mini-tiu9-09",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt: "Nilai dari 2/5 + 0,35 - 15% x 3 adalah ...",
    choices: [
      { id: "a", label: "0,25", score: 0 },
      { id: "b", label: "0,30", score: 5 },
      { id: "c", label: "0,35", score: 0 },
      { id: "d", label: "0,40", score: 0 },
      { id: "e", label: "0,45", score: 0 },
    ],
    explanation:
      "Pembahasan: Ubah seluruh bentuk pecahan ke bilangan desimal: 2/5 = 0,40. Nilai 15% x 3 = 0,15 x 3 = 0,45. Perhitungan menjadi: 0,40 + 0,35 - 0,45 = 0,75 - 0,45 = 0,30. Jawaban B.",
  },
  {
    id: "mini-tiu9-10",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt: "Nilai dari 62,5% x 1 3/5 + 0,375 : 3/4 + (7 : 4)/7 adalah ...",
    choices: [
      { id: "a", label: "1,35", score: 0 },
      { id: "b", label: "1,45", score: 0 },
      { id: "c", label: "1,55", score: 0 },
      { id: "d", label: "1,65", score: 0 },
      { id: "e", label: "1,75", score: 5 },
    ],
    explanation:
      "Pembahasan: Gunakan pecahan istimewa:\n1. 62,5% = 5/8 dan 1 3/5 = 8/5, maka: 5/8 x 8/5 = 1.\n2. 0,375 = 3/8, maka: (3/8) : (3/4) = 3/8 x 4/3 = 4/8 = 1/2 = 0,5.\n3. (7 : 4)/7 = (7/4) x (1/7) = 1/4 = 0,25.\nJumlah total = 1 + 0,5 + 0,25 = 1,75. Jawaban E.",
  },
  {
    id: "mini-tiu9-11",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt: "Diketahui P = 1.002 x 998 dan Q = 1.000^2 - 5. Hubungan P dan Q yang benar adalah ...",
    choices: [
      { id: "a", label: "P > Q", score: 5 },
      { id: "b", label: "P < Q", score: 0 },
      { id: "c", label: "P = Q", score: 0 },
      { id: "d", label: "P = Q - 1", score: 0 },
      { id: "e", label: "hubungan tidak dapat ditentukan", score: 0 },
    ],
    explanation:
      "Pembahasan: Gunakan identitas aljabar selisih dua kuadrat (a + b)(a - b) = a^2 - b^2:\nP = (1.000 + 2)(1.000 - 2) = 1.000^2 - 2^2 = 1.000^2 - 4 = 1.000.000 - 4 = 999.996.\nQ = 1.000^2 - 5 = 1.000.000 - 5 = 999.995.\nKarena 999.996 > 999.995, maka berlaku P > Q (dengan P = Q + 1). Jawaban A.",
  },
  {
    id: "mini-tiu9-12",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt: "Pasangan perkalian yang memiliki nilai sama adalah ...",
    choices: [
      { id: "a", label: "125 x 32 dan 100 x 36", score: 0 },
      { id: "b", label: "64 x 45 dan 72 x 42", score: 0 },
      { id: "c", label: "84 x 25 dan 70 x 32", score: 0 },
      { id: "d", label: "75 x 48 dan 90 x 40", score: 5 },
      { id: "e", label: "135 x 16 dan 120 x 19", score: 0 },
    ],
    explanation:
      "Pembahasan: 75 x 48 = 3.600 dan 90 x 40 = 3.600. Dari 75 menjadi 90 faktor dikali 6/5, sedangkan dari 48 menjadi 40 faktor dikali 5/6. Karena (6/5) x (5/6) = 1, nilai hasil kali kedua pasangan persis sama yaitu 3.600. Jawaban D.",
  },
  {
    id: "mini-tiu9-13",
    category: "TIU",
    topic: "Deret & Pola",
    prompt: "Angka berikutnya pada deret 1, 2, 10, 37, 101, ... adalah ...",
    choices: [
      { id: "a", label: "196", score: 0 },
      { id: "b", label: "210", score: 0 },
      { id: "c", label: "226", score: 5 },
      { id: "d", label: "232", score: 0 },
      { id: "e", label: "245", score: 0 },
    ],
    explanation:
      "Pembahasan: Perhatikan selisih antarsuku berturut-turut:\n2 - 1 = 1 = 1^3\n10 - 2 = 8 = 2^3\n37 - 10 = 27 = 3^3\n101 - 37 = 64 = 4^3\nPola selisih adalah deret bilangan kubik n^3. Selisih suku berikutnya adalah 5^3 = 125. Maka angka berikutnya adalah 101 + 125 = 226. Jawaban C.",
  },
  {
    id: "mini-tiu9-14",
    category: "TIU",
    topic: "Deret & Pola",
    prompt: "Angka berikutnya pada deret 4, 30, 7, 27, 13, 24, 25, 21, ... adalah ...",
    choices: [
      { id: "a", label: "18", score: 0 },
      { id: "b", label: "37", score: 0 },
      { id: "c", label: "45", score: 0 },
      { id: "d", label: "49", score: 5 },
      { id: "e", label: "50", score: 0 },
    ],
    explanation:
      "Pembahasan: Deret terbagi menjadi dua larik berselang-seling:\n- Larik posisi ganjil: 4, 7, 13, 25, ... memiliki pola selisih yang berlipat ganda: +3, +6, +12. Selisih berikutnya adalah +24, sehingga suku berikutnya = 25 + 24 = 49.\n- Larik posisi genap: 30, 27, 24, 21, ... memiliki pola berkurang 3 secara konstan (-3).\nSuku kesembilan berada pada larik ganjil, yaitu 49. Jawaban D.",
  },
  {
    id: "mini-tiu9-15",
    category: "TIU",
    topic: "Deret & Pola",
    prompt: "Nilai suku ke-12 pada tabel berikut adalah ...\n\n| Suku ke-n | Nilai |\n| :---: | :---: |\n| 2 | 10 |\n| 4 | 28 |\n| 6 | 54 |\n| 9 | 108 |\n| 12 | ? |",
    choices: [
      { id: "a", label: "180", score: 5 },
      { id: "b", label: "186", score: 0 },
      { id: "c", label: "192", score: 0 },
      { id: "d", label: "198", score: 0 },
      { id: "e", label: "204", score: 0 },
    ],
    explanation:
      "Pembahasan: Pasangan indeks dan nilai pada tabel memenuhi formula U_n = n x (n + 3):\nU2 = 2 x 5 = 10\nU4 = 4 x 7 = 28\nU6 = 6 x 9 = 54\nU9 = 9 x 12 = 108\nMaka untuk n = 12: U12 = 12 x (12 + 3) = 12 x 15 = 180. Jawaban A.",
  },
  {
    id: "mini-tiu9-16",
    category: "TIU",
    topic: "Deret & Pola",
    prompt: "Perhatikan matriks angka berikut:\n\n| 3 | 5 | 4 | 32 |\n| 6 | 2 | 5 | 40 |\n| 7 | 4 | 3 | ? |\n\nNilai pengganti tanda tanya adalah ...",
    choices: [
      { id: "a", label: "30", score: 0 },
      { id: "b", label: "33", score: 5 },
      { id: "c", label: "36", score: 0 },
      { id: "d", label: "39", score: 0 },
      { id: "e", label: "42", score: 0 },
    ],
    explanation:
      "Pembahasan: Pola operasi aritmetika pada tiap baris adalah: (Kolom 1 + Kolom 2) x Kolom 3 = Kolom 4.\nBaris 1: (3 + 5) x 4 = 8 x 4 = 32\nBaris 2: (6 + 2) x 5 = 8 x 5 = 40\nBaris 3: (7 + 4) x 3 = 11 x 3 = 33. Jawaban B.",
  },
  {
    id: "mini-tiu9-17",
    category: "TIU",
    topic: "Deret & Pola",
    prompt: "Perhatikan matriks angka berikut:\n\n| 1 | 1 | 2 |\n| 3 | 5 | 8 |\n| 13 | ? | 34 |\n\nNilai pengganti tanda tanya adalah ...",
    choices: [
      { id: "a", label: "17", score: 0 },
      { id: "b", label: "18", score: 0 },
      { id: "c", label: "19", score: 0 },
      { id: "d", label: "20", score: 0 },
      { id: "e", label: "21", score: 5 },
    ],
    explanation:
      "Pembahasan: Matriks memuat barisan bilangan Fibonacci berurutan jika dibaca dari kiri ke kanan baris per baris: 1, 1, 2, 3, 5, 8, 13, 21, 34 (di mana setiap suku merupakan penjumlahan dua suku sebelumnya, 8 + 13 = 21, dan 13 + 21 = 34). Jadi nilai pengganti tanda tanya adalah 21. Jawaban E.",
  },
  {
    id: "mini-tiu9-18",
    category: "TIU",
    topic: "Deret & Pola",
    prompt: "Nilai suku ke-50 pada tabel berikut adalah ...\n\n| Suku ke-n | Nilai |\n| :---: | :---: |\n| 5 | 23 |\n| 11 | 41 |\n| 17 | 59 |\n| 50 | ? |",
    choices: [
      { id: "a", label: "155", score: 0 },
      { id: "b", label: "158", score: 5 },
      { id: "c", label: "161", score: 0 },
      { id: "d", label: "164", score: 0 },
      { id: "e", label: "167", score: 0 },
    ],
    explanation:
      "Pembahasan: Tabel merupakan barisan aritmetika dengan beda per satuan indeks = (41 - 23) / (11 - 5) = 18 / 6 = 3. Menghitung langsung suku ke-50 dari acuan suku ke-5: U50 = U5 + (50 - 5) x 3 = 23 + (45 x 3) = 23 + 135 = 158. Jawaban B.",
  },
  {
    id: "mini-tiu9-19",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Sepasang sepatu memperoleh diskon 25% dari harga awal, lalu dikenai pajak pertambahan nilai sebesar 12% yang dihitung dari harga setelah diskon. Jika pembeli membayar Rp504.000 di kasir, harga awal sepatu tersebut adalah ...",
    choices: [
      { id: "a", label: "Rp540.000", score: 0 },
      { id: "b", label: "Rp560.000", score: 0 },
      { id: "c", label: "Rp576.000", score: 0 },
      { id: "d", label: "Rp588.000", score: 0 },
      { id: "e", label: "Rp600.000", score: 5 },
    ],
    explanation:
      "Pembahasan: Harga bayar = (1 - 0,25) x (1 + 0,12) x Harga Awal = 0,75 x 1,12 x Harga Awal = 0,84 x Harga Awal. Maka Harga Awal = Rp504.000 / 0,84 = Rp600.000. Jawaban E.",
  },
  {
    id: "mini-tiu9-20",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Sebanyak 12 pekerja dapat menyelesaikan suatu proyek renovasi gedung dalam 30 hari kerja. Proyek tersebut dialihkan untuk dikerjakan oleh 18 pekerja dengan kapasitas kerja yang sama. Mereka mulai bekerja pada hari Rabu dan hanya bekerja pada hari kerja (Senin sampai Jumat, libur Sabtu dan Minggu). Pada hari apa proyek tersebut selesai?",
    choices: [
      { id: "a", label: "Jumat", score: 0 },
      { id: "b", label: "Senin", score: 0 },
      { id: "c", label: "Selasa", score: 5 },
      { id: "d", label: "Rabu", score: 0 },
      { id: "e", label: "Kamis", score: 0 },
    ],
    explanation:
      "Pembahasan: Beban kerja total = 12 x 30 = 360 hari-orang. Dengan 18 pekerja, durasi kerja = 360 / 18 = 20 hari kerja. Hari kerja adalah Senin–Jumat (5 hari kerja per minggu):\n- Minggu 1: Rabu, Kamis, Jumat = 3 hari kerja.\n- Minggu 2, 3, dan 4: masing-masing 5 hari kerja = 3 x 5 = 15 hari kerja (akumulasi 18 hari kerja, berakhir Jumat minggu ke-4).\n- Minggu 5: membutuhkan 2 hari kerja lagi (hari ke-19 jatuh pada hari Senin, hari ke-20 jatuh pada hari Selasa). Proyek selesai pada hari Selasa. Jawaban C.",
  },
  {
    id: "mini-tiu9-21",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Mobil A berangkat dari Kota X pukul 08.00 menuju Kota Y dengan kecepatan tetap 50 km/jam. Mobil B berangkat dari Kota Y pukul 08.30 menuju Kota X melalui jalan yang sama dengan kecepatan tetap 70 km/jam. Jika jarak Kota X dan Kota Y adalah 265 km, pukul berapa kedua mobil tersebut berpapasan?",
    choices: [
      { id: "a", label: "10.30", score: 5 },
      { id: "b", label: "10.45", score: 0 },
      { id: "c", label: "11.00", score: 0 },
      { id: "d", label: "11.15", score: 0 },
      { id: "e", label: "11.30", score: 0 },
    ],
    explanation:
      "Pembahasan: Pada pukul 08.30 (selang 30 menit = 0,5 jam), Mobil A telah menempuh jarak 50 x 0,5 = 25 km. Sisa jarak kedua mobil pada pukul 08.30 = 265 - 25 = 240 km. Kecepatan saling mendekat = 50 + 70 = 120 km/jam. Waktu tempuh hingga berpapasan = 240 / 120 = 2 jam setelah pukul 08.30, yaitu tepat pukul 10.30. Jawaban A.",
  },
  {
    id: "mini-tiu9-22",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Rata-rata nilai ujian empat siswa adalah 80. Berapakah nilai ujian Dina di antara keempat siswa tersebut?\n\n(1) Nilai Dina adalah yang tertinggi di antara keempat siswa.\n(2) Rata-rata nilai tiga siswa lainnya selain Dina adalah 78.",
    choices: [
      { id: "a", label: "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", score: 0 },
      { id: "b", label: "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", score: 5 },
      { id: "c", label: "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", score: 0 },
      { id: "d", label: "Masing-masing pernyataan secara terpisah sudah cukup.", score: 0 },
      { id: "e", label: "Bahkan kedua pernyataan bersama-sama masih tidak cukup.", score: 0 },
    ],
    explanation:
      "Pembahasan: Total nilai keempat siswa = 4 x 80 = 320. Pernyataan (1) hanya menyatakan Dina bernilai tertinggi tanpa angka pasti (tidak cukup). Pernyataan (2) memberi total nilai tiga siswa lain = 3 x 78 = 234, sehingga nilai Dina = 320 - 234 = 86 (unik dan pasti, cukup). Jadi pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup. Jawaban B.",
  },
  {
    id: "mini-tiu9-23",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Diketahui x adalah bilangan bulat positif. Berapakah nilai x?\n\n(1) 3x - 7 = 11.\n(2) x^2 = 36.",
    choices: [
      { id: "a", label: "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", score: 0 },
      { id: "b", label: "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", score: 0 },
      { id: "c", label: "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", score: 0 },
      { id: "d", label: "Masing-masing pernyataan secara terpisah sudah cukup.", score: 5 },
      { id: "e", label: "Bahkan kedua pernyataan bersama-sama masih tidak cukup.", score: 0 },
    ],
    explanation:
      "Pembahasan: Pernyataan (1) memberi 3x = 18 -> x = 6 (cukup). Pernyataan (2) memberi x^2 = 36 -> x = 6 atau x = -6, namun karena dari awal soal dinyatakan x bilangan bulat positif, maka nilai x satu-satunya adalah 6 (cukup). Jadi masing-masing pernyataan secara terpisah sudah cukup. Jawaban D.",
  },
  {
    id: "mini-tiu9-24",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Berapakah luas sebuah kebun yang berbentuk persegi panjang?\n\n(1) Keliling kebun tersebut adalah 30 meter.\n(2) Panjang kebun lebih besar daripada lebarnya.",
    choices: [
      { id: "a", label: "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", score: 0 },
      { id: "b", label: "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", score: 0 },
      { id: "c", label: "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", score: 0 },
      { id: "d", label: "Masing-masing pernyataan secara terpisah sudah cukup.", score: 0 },
      { id: "e", label: "Bahkan kedua pernyataan bersama-sama masih tidak cukup.", score: 5 },
    ],
    explanation:
      "Pembahasan: Pernyataan (1) memberi 2(p + l) = 30 -> p + l = 15 (belum cukup menentukan luas p x l). Pernyataan (2) hanya memberi p > l (tidak cukup). Jika kedua pernyataan digabungkan, p + l = 15 dengan p > l masih memiliki banyak pasangan penyelesaian (misal p = 10, l = 5 menghasilkan luas 50; p = 9, l = 6 menghasilkan luas 54). Luas tidak bernilai tunggal. Jadi bahkan kedua pernyataan bersama-sama masih tidak cukup. Jawaban E.",
  },
  {
    id: "mini-tiu9-25",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Berapakah jumlah uang tabungan Sita saat ini?\n\n(1) Perbandingan uang tabungan Rani dan Sita adalah 3 : 5.\n(2) Selisih uang tabungan Rani dan Sita adalah Rp40.000.",
    choices: [
      { id: "a", label: "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.", score: 0 },
      { id: "b", label: "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.", score: 0 },
      { id: "c", label: "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.", score: 5 },
      { id: "d", label: "Masing-masing pernyataan secara terpisah sudah cukup.", score: 0 },
      { id: "e", label: "Bahkan kedua pernyataan bersama-sama masih tidak cukup.", score: 0 },
    ],
    explanation:
      "Pembahasan: Pernyataan (1) hanya rasio R : S = 3 : 5 (tidak cukup). Pernyataan (2) hanya selisih nilai nominal (tidak cukup). Jika digabungkan, selisih rasio = 5 - 3 = 2 bagian = Rp40.000 -> 1 bagian = Rp20.000. Maka tabungan Sita = 5 x Rp20.000 = Rp100.000 (cukup). Jadi kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup. Jawaban C.",
  },
  {
    id: "mini-tiu9-26",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Pipa saluran A dapat mengisi penuh sebuah bak penampungan dalam 4 jam, pipa B dalam 6 jam, sedangkan pipa C dapat menguras habis bak yang penuh dalam 12 jam. Jika ketiga pipa dibuka secara bersamaan pada kondisi bak kosong, waktu yang diperlukan hingga bak terisi penuh adalah ...",
    choices: [
      { id: "a", label: "2 jam 40 menit", score: 0 },
      { id: "b", label: "3 jam", score: 5 },
      { id: "c", label: "3 jam 20 menit", score: 0 },
      { id: "d", label: "3 jam 30 menit", score: 0 },
      { id: "e", label: "4 jam", score: 0 },
    ],
    explanation:
      "Pembahasan: Laju pengisian neto gabungan ketiga pipa = 1/4 + 1/6 - 1/12 = 3/12 + 2/12 - 1/12 = 4/12 = 1/3 bagian per jam. Waktu yang diperlukan = 1 / (1/3) = 3 jam. Jawaban B.",
  },
  {
    id: "mini-tiu9-27",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Perbandingan kelereng A dan B adalah 2 : 3, sedangkan perbandingan kelereng B dan C adalah 4 : 5. Jika selisih kelereng C dan kelereng A adalah 21 butir, jumlah kelereng B adalah ...",
    choices: [
      { id: "a", label: "24 butir", score: 0 },
      { id: "b", label: "27 butir", score: 0 },
      { id: "c", label: "30 butir", score: 0 },
      { id: "d", label: "36 butir", score: 5 },
      { id: "e", label: "45 butir", score: 0 },
    ],
    explanation:
      "Pembahasan: Samakan pembanding B pada kedua rasio:\nA : B = 2 : 3 = 8 : 12\nB : C = 4 : 5 = 12 : 15\nMaka rasio bersama A : B : C = 8 : 12 : 15. Selisih bagian C dan A = 15 - 8 = 7 bagian = 21 butir, sehingga 1 bagian bernilai 21 / 7 = 3 butir. Jumlah kelereng B = 12 x 3 = 36 butir. Jawaban D.",
  },
  {
    id: "mini-tiu9-28",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Seorang nasabah menaruh modal tabungan sebesar Rp4.800.000 dengan sistem bunga tunggal 7,5% per tahun. Jika saldo tabungan nasabah tersebut bertambah menjadi Rp5.280.000 tanpa potongan biaya administrasi, lama waktu menabung adalah ...",
    choices: [
      { id: "a", label: "12 bulan", score: 0 },
      { id: "b", label: "14 bulan", score: 0 },
      { id: "c", label: "16 bulan", score: 5 },
      { id: "d", label: "18 bulan", score: 0 },
      { id: "e", label: "20 bulan", score: 0 },
    ],
    explanation:
      "Pembahasan: Total perolehan bunga = Rp5.280.000 - Rp4.800.000 = Rp480.000. Bunga tunggal per tahun = 7,5% x Rp4.800.000 = Rp360.000. Durasi menabung = Rp480.000 / Rp360.000 = 4/3 tahun = (4/3) x 12 bulan = 16 bulan. Jawaban C.",
  },
  {
    id: "mini-tiu9-29",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Jumlah usia ayah dan anak saat ini adalah 50 tahun. Lima tahun yang lalu, usia ayah adalah empat kali usia anak. Usia ayah saat ini adalah ...",
    choices: [
      { id: "a", label: "37 tahun", score: 5 },
      { id: "b", label: "38 tahun", score: 0 },
      { id: "c", label: "39 tahun", score: 0 },
      { id: "d", label: "40 tahun", score: 0 },
      { id: "e", label: "42 tahun", score: 0 },
    ],
    explanation:
      "Pembahasan: Misalkan usia ayah saat ini = F dan usia anak saat ini = A. Diketahui F + A = 50 -> F = 50 - A. Lima tahun lalu: F - 5 = 4(A - 5) -> F - 5 = 4A - 20 -> F = 4A - 15. Substitusikan: 50 - A = 4A - 15 -> 5A = 65 -> A = 13 tahun. Maka usia ayah saat ini = 50 - 13 = 37 tahun. (Cek 5 tahun lalu: ayah 32 tahun, anak 8 tahun; 32 = 4 x 8, terbukti). Jawaban A.",
  },
  {
    id: "mini-tiu9-30",
    category: "TIU",
    topic: "Kemampuan Numerik",
    prompt:
      "Sebuah gudang beras menjual 30% dari persediaan beras pada hari pertama. Pada hari kedua, gudang tersebut menjual 40% dari sisa persediaan beras yang ada. Jika setelah itu masih tersisa 126 kg beras di gudang, persediaan awal beras adalah ...",
    choices: [
      { id: "a", label: "240 kg", score: 0 },
      { id: "b", label: "260 kg", score: 0 },
      { id: "c", label: "270 kg", score: 0 },
      { id: "d", label: "280 kg", score: 0 },
      { id: "e", label: "300 kg", score: 5 },
    ],
    explanation:
      "Pembahasan: Setelah hari pertama, sisa persediaan = 100% - 30% = 70%. Pada hari kedua terjual 40% dari sisa, menyisakan 60% dari sisa tersebut. Persentase sisa akhir = 70% x 60% = 42% dari persediaan awal. Karena 42% bernilai 126 kg, maka persediaan awal = 126 / 0,42 = 300 kg. Jawaban E.",
  },
  {
    id: "mini-tiu9-31",
    category: "TIU",
    topic: "Figural Analogi",
    prompt:
      "Pilihlah bentuk yang paling tepat untuk melengkapi analogi gambar berikut:\n\n![Analogi Gambar](/tryout/mini-tiu-2/soal-31.png)",
    choices: [
      { id: "a", label: "[img]/tryout/mini-tiu-2/soal-31-a.png", score: 0 },
      { id: "b", label: "[img]/tryout/mini-tiu-2/soal-31-b.png", score: 5 },
      { id: "c", label: "[img]/tryout/mini-tiu-2/soal-31-c.png", score: 0 },
      { id: "d", label: "[img]/tryout/mini-tiu-2/soal-31-d.png", score: 0 },
      { id: "e", label: "[img]/tryout/mini-tiu-2/soal-31-e.png", score: 0 },
    ],
    explanation:
      "Pembahasan: Analogi gambar mengikuti dua transformasi terpadu:\n1. Rotasi 90° searah jarum jam: Bangun utama segi lima berbentuk rumah hitam diputar 90° searah jarum jam sehingga atap segitiganya menghadap ke kanan.\n2. Inversi warna (pembalikan warna luar dan dalam): Bidang luar yang semula hitam pekat berubah menjadi putih (garis tepi/outline), sedangkan lingkaran putih di dalam berubah warna menjadi hitam pekat dan posisinya berpindah ke kiri-atas.\n\nMenerapkan pola yang sama pada gambar ketiga (segitiga siku-siku putih dengan kotak hitam di dalamnya):\n- Segitiga diputar 90° searah jarum jam sehingga sisi sikunya berada di kiri-atas dan warnanya berinversi menjadi hitam pekat.\n- Elemen kotak di dalam berinversi warna menjadi putih.\n\nBentuk yang tepat adalah segitiga siku-siku hitam menghadap kiri-atas dengan kotak putih di dalamnya, yaitu Opsi B. Jawaban B.",
  },
  {
    id: "mini-tiu9-32",
    category: "TIU",
    topic: "Figural Ketaksamaan",
    prompt: "Pilihlah salah satu gambar di bawah ini yang berbeda (tidak mengikuti pola) dari keempat gambar lainnya:",
    choices: [
      { id: "a", label: "[img]/tryout/mini-tiu-2/soal-32-a.png", score: 0 },
      { id: "b", label: "[img]/tryout/mini-tiu-2/soal-32-b.png", score: 0 },
      { id: "c", label: "[img]/tryout/mini-tiu-2/soal-32-c.png", score: 0 },
      { id: "d", label: "[img]/tryout/mini-tiu-2/soal-32-d.png", score: 5 },
      { id: "e", label: "[img]/tryout/mini-tiu-2/soal-32-e.png", score: 0 },
    ],
    explanation:
      "Pembahasan: Tipe soal figural ketaksamaan mencari gambar yang bukan merupakan hasil rotasi bangun yang sama:\n1. Jadikan Gambar A sebagai acuan: Tiang garis lurus vertikal, bendera segitiga hitam di bagian atas menghadap ke kanan, dan titik hitam terletak di sisi kiri-bawah tiang.\n2. Gambar B merupakan hasil rotasi Gambar A sebesar 270° searah jarum jam.\n3. Gambar C merupakan hasil rotasi Gambar A sebesar 90° searah jarum jam.\n4. Gambar E merupakan hasil rotasi Gambar A sebesar 180°.\nKeempat gambar (A, B, C, dan E) identik dan dapat saling dibentuk hanya melalui operasi rotasi bidang datar.\n\nSementara itu, Gambar D memiliki orientasi tiang mendatar seperti Gambar C, namun bendera dan titik hitam bertukar sisi relatif terhadap tiang. Gambar D merupakan hasil pencerminan (refleksi), bukan hasil rotasi. Maka Gambar D berbeda dari kelompok gambar lainnya. Jawaban D.",
  },
  {
    id: "mini-tiu9-33",
    category: "TIU",
    topic: "Serial Gambar",
    prompt:
      "Pilihlah gambar yang tepat untuk menggantikan tanda tanya (?) pada barisan gambar berikut:\n\n![Serial Gambar](/tryout/mini-tiu-2/soal-33.png)",
    choices: [
      { id: "a", label: "[img]/tryout/mini-tiu-2/soal-33-a.png", score: 5 },
      { id: "b", label: "[img]/tryout/mini-tiu-2/soal-33-b.png", score: 0 },
      { id: "c", label: "[img]/tryout/mini-tiu-2/soal-33-c.png", score: 0 },
      { id: "d", label: "[img]/tryout/mini-tiu-2/soal-33-d.png", score: 0 },
      { id: "e", label: "[img]/tryout/mini-tiu-2/soal-33-e.png", score: 0 },
    ],
    explanation:
      "Pembahasan: Barisan serial gambar memiliki dua pola perubahan yang berjalan bersamaan:\n1. Posisi titik hitam: Berpindah satu sudut searah jarum jam (kiri-atas -> kanan-atas -> kanan-bawah -> kiri-bawah -> kiri-atas). Pada kotak ke-4 (tanda tanya), titik hitam wajib berada di sudut kiri-bawah.\n2. Jumlah garis mendatar di dalam persegi bertambah satu secara konsisten: Kotak 1 memiliki 1 garis, Kotak 2 memiliki 2 garis, Kotak 3 memiliki 3 garis, Kotak 4 harus memiliki 4 garis, dan Kotak 5 memiliki 5 garis.\n\nGambar yang menampilkan persegi dengan titik di sudut kiri-bawah dan 4 garis mendatar adalah Opsi A. Jawaban A.",
  },
  {
    id: "mini-tiu9-34",
    category: "TIU",
    topic: "Figural Matriks 9 Kotak",
    prompt:
      "Pilihlah gambar yang tepat untuk menggantikan tanda tanya (?) pada matriks 3×3 berikut:\n\n![Matriks Figural 3x3](/tryout/mini-tiu-2/soal-34.png)",
    choices: [
      { id: "a", label: "[img]/tryout/mini-tiu-2/soal-34-a.png", score: 0 },
      { id: "b", label: "[img]/tryout/mini-tiu-2/soal-34-b.png", score: 0 },
      { id: "c", label: "[img]/tryout/mini-tiu-2/soal-34-c.png", score: 5 },
      { id: "d", label: "[img]/tryout/mini-tiu-2/soal-34-d.png", score: 0 },
      { id: "e", label: "[img]/tryout/mini-tiu-2/soal-34-e.png", score: 0 },
    ],
    explanation:
      "Pembahasan: Pola operasi antarkolom per baris pada matriks 3×3 ini adalah operasi XOR (Exclusive OR / tumpuk dan hapus garis kembar):\n- Kolom 3 diperoleh dengan menumpuk garis dari Kolom 1 dan Kolom 2. Garis yang sama di kedua kolom akan saling menghilangkan (hilang), sedangkan garis yang hanya ada di salah satu kolom akan dipertahankan.\n\nPembuktian pada Baris 1:\n- Kolom 1 memuat {garis atas, garis kiri, garis diagonal utama \\}.\n- Kolom 2 memuat {garis atas, garis kanan, garis mendatar tengah}.\n- Garis atas sama-sama ada sehingga hilang. Hasil Kolom 3 memuat {garis kiri, garis kanan, garis diagonal utama \\, garis mendatar tengah} (sesuai).\n\nPenerapan pada Baris 3:\n- Kolom 1 memuat {garis atas, garis bawah, garis diagonal utama \\, garis mendatar tengah}.\n- Kolom 2 memuat {garis bawah, garis diagonal sekunder /, garis mendatar tengah, garis kiri}.\n- Garis yang sama di kedua kolom adalah garis bawah dan garis mendatar tengah, sehingga kedua garis ini saling menghilangkan.\n- Garis yang tersisa adalah {garis atas, garis kiri, garis diagonal utama \\, garis diagonal sekunder /}.\n\nGambar yang menampilkan keempat ruas garis tersebut secara tepat adalah Opsi C. Jawaban C.",
  },
  {
    id: "mini-tiu9-35",
    category: "TIU",
    topic: "Figural Matriks 9 Kotak",
    prompt:
      "Pilihlah huruf yang paling tepat untuk menggantikan tanda tanya (?) pada pola matriks berikut:\n\n![Pola Matriks Huruf](/tryout/mini-tiu-2/soal-35.png)",
    choices: [
      { id: "a", label: "[img]/tryout/mini-tiu-2/soal-35-a.png", score: 5 },
      { id: "b", label: "[img]/tryout/mini-tiu-2/soal-35-b.png", score: 0 },
      { id: "c", label: "[img]/tryout/mini-tiu-2/soal-35-c.png", score: 0 },
      { id: "d", label: "[img]/tryout/mini-tiu-2/soal-35-d.png", score: 0 },
      { id: "e", label: "[img]/tryout/mini-tiu-2/soal-35-e.png", score: 0 },
    ],
    explanation:
      "Pembahasan: Pola pembentukan huruf pada matriks 3×3 ditentukan oleh jumlah ruas garis lurus penyusun huruf pada setiap baris (dan juga konsisten pada setiap kolom):\n\n1. Baris 1: E (4 ruas garis: 1 tegak + 3 mendatar), F (3 ruas garis: 1 tegak + 2 mendatar), T (2 ruas garis: 1 mendatar + 1 tegak). Pola jumlah garis: 4, 3, 2.\n2. Baris 2: M (4 ruas garis: 2 tegak + 2 miring), K (3 ruas garis: 1 tegak + 2 miring), V (2 ruas garis: 2 miring). Pola jumlah garis: 4, 3, 2.\n3. Baris 3: W (4 ruas garis: 4 garis miring), N (3 ruas garis: 2 tegak + 1 miring), tanda tanya (?) harus diisi huruf yang tersusun dari 2 ruas garis lurus.\n\nAnalisis pilihan jawaban berdasarkan jumlah ruas garis penyusunnya:\n- A. X : tersusun dari 2 ruas garis lurus bersilangan -> BENAR (2 ruas garis).\n- B. Z : tersusun dari 3 ruas garis lurus -> Salah.\n- C. A : tersusun dari 3 ruas garis lurus -> Salah.\n- D. H : tersusun dari 3 ruas garis lurus -> Salah.\n- E. Y : tersusun dari 3 ruas garis lurus -> Salah.\n\nHuruf yang tepat memenuhi pola 2 ruas garis lurus adalah X (Pilihan A).\n\nJawaban A.",
  },
];
