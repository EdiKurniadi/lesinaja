import type { Question } from "./types";

// Mini Try Out New TIU CASN Paket 2, finalized from the reviewed draft.
export const MINI_TIU_11_QUESTIONS: Question[] = [
  {
    "id": "mini-tiu11-01",
    "category": "TIU",
    "topic": "Kemampuan Verbal",
    "prompt": "DIAGNOSIS : GEJALA = KESIMPULAN : ...",
    "choices": [
      {
        "id": "a",
        "label": "pendapat",
        "score": 0
      },
      {
        "id": "b",
        "label": "pertanyaan",
        "score": 0
      },
      {
        "id": "c",
        "label": "premis",
        "score": 5
      },
      {
        "id": "d",
        "label": "dugaan",
        "score": 0
      },
      {
        "id": "e",
        "label": "tujuan",
        "score": 0
      }
    ],
    "explanation": "Diagnosis ditetapkan berdasarkan gejala. Kesimpulan ditarik berdasarkan premis. Hubungan yang dicari adalah hasil penalaran terhadap informasi yang menjadi dasarnya, bukan hasil terhadap tujuan atau pertanyaannya.\nJawaban C."
  },
  {
    "id": "mini-tiu11-02",
    "category": "TIU",
    "topic": "Kemampuan Verbal",
    "prompt": "API : ASAP = GESEKAN : ...",
    "choices": [
      {
        "id": "a",
        "label": "gerak",
        "score": 0
      },
      {
        "id": "b",
        "label": "pelumas",
        "score": 0
      },
      {
        "id": "c",
        "label": "gaya",
        "score": 0
      },
      {
        "id": "d",
        "label": "permukaan",
        "score": 0
      },
      {
        "id": "e",
        "label": "panas",
        "score": 5
      }
    ],
    "explanation": "Api dapat menghasilkan asap, sedangkan gesekan menghasilkan panas. Gerak, gaya, dan permukaan berkaitan dengan terjadinya gesekan, tetapi tidak mewakili akibat yang setara dengan asap pada hubungan pertama.\nJawaban E."
  },
  {
    "id": "mini-tiu11-03",
    "category": "TIU",
    "topic": "Kemampuan Verbal",
    "prompt": "BENANG : KAIN : PAKAIAN = ... : ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "bibit : bunga : buah",
        "score": 0
      },
      {
        "id": "b",
        "label": "gandum : tepung : roti",
        "score": 5
      },
      {
        "id": "c",
        "label": "kayu : meja : kursi",
        "score": 0
      },
      {
        "id": "d",
        "label": "kertas : buku : perpustakaan",
        "score": 0
      },
      {
        "id": "e",
        "label": "air : es : uap",
        "score": 0
      }
    ],
    "explanation": "Benang diolah menjadi kain, lalu kain digunakan untuk membuat pakaian. Gandum diolah menjadi tepung, lalu tepung digunakan untuk membuat roti. Keduanya menunjukkan rantai bahan baku, bahan olahan, dan produk akhir. Pilihan lain mencampurkan pertumbuhan, produk yang sejajar, pengelompokan, atau perubahan wujud.\nJawaban B."
  },
  {
    "id": "mini-tiu11-04",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Berlaku aturan: jika peserta membawa kartu ujian atau surat pengganti, peserta diizinkan masuk. Diketahui seorang peserta tidak diizinkan masuk. Berdasarkan aturan tersebut, kesimpulan yang pasti benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "peserta tersebut tidak membawa kartu ujian maupun surat pengganti",
        "score": 5
      },
      {
        "id": "b",
        "label": "peserta tersebut membawa kartu ujian",
        "score": 0
      },
      {
        "id": "c",
        "label": "peserta tersebut membawa surat pengganti",
        "score": 0
      },
      {
        "id": "d",
        "label": "peserta tersebut membawa tepat satu dari kedua dokumen",
        "score": 0
      },
      {
        "id": "e",
        "label": "tidak dapat dipastikan apakah peserta membawa salah satu dokumen",
        "score": 0
      }
    ],
    "explanation": "Misalkan K = membawa kartu, S = membawa surat pengganti, dan M = diizinkan masuk. Dari (K atau S) → M dan tidak M, diperoleh tidak (K atau S). Dengan hukum De Morgan, ini berarti tidak K dan tidak S. Jadi kedua dokumen tersebut sama-sama tidak dibawa.\nJawaban A."
  },
  {
    "id": "mini-tiu11-05",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Semua arsip digital dapat dicari melalui indeks. Sebagian arsip yang dapat dicari melalui indeks dapat diakses publik. Kesimpulan yang pasti benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "semua arsip digital dapat diakses publik",
        "score": 0
      },
      {
        "id": "b",
        "label": "sebagian arsip digital pasti dapat diakses publik",
        "score": 0
      },
      {
        "id": "c",
        "label": "tidak ada arsip digital yang dapat diakses publik",
        "score": 0
      },
      {
        "id": "d",
        "label": "sebagian arsip yang dapat diakses publik dapat dicari melalui indeks",
        "score": 5
      },
      {
        "id": "e",
        "label": "semua arsip yang dapat dicari melalui indeks merupakan arsip digital",
        "score": 0
      }
    ],
    "explanation": "Pernyataan kedua memastikan adanya arsip yang sekaligus dapat dicari melalui indeks dan diakses publik. Karena irisan kedua kelompok bersifat timbal balik, sebagian arsip yang diakses publik dapat dicari melalui indeks. Belum ada kepastian bahwa irisan tersebut memuat arsip digital, sehingga tidak boleh menyimpulkan hubungan tambahan antara arsip digital dan akses publik.\nJawaban D."
  },
  {
    "id": "mini-tiu11-06",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Jika A diterima, B tidak diterima. Jika C diterima, B diterima. Diketahui C diterima. Pernyataan yang pasti benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "A dan B sama-sama diterima",
        "score": 0
      },
      {
        "id": "b",
        "label": "B diterima dan A tidak diterima",
        "score": 5
      },
      {
        "id": "c",
        "label": "A diterima dan B tidak diterima",
        "score": 0
      },
      {
        "id": "d",
        "label": "B tidak diterima dan C diterima",
        "score": 0
      },
      {
        "id": "e",
        "label": "status penerimaan A dan B belum dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "C diterima menyebabkan B diterima melalui modus ponens. Aturan A diterima → B tidak diterima memiliki kontraposisi B diterima → A tidak diterima. Maka B diterima dan A tidak diterima. Menentukan A memerlukan penerapan kembali aturan pertama, bukan sekadar membaca fakta tentang C.\nJawaban B."
  },
  {
    "id": "mini-tiu11-07",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Enam peserta A, B, C, D, E, dan F tampil satu kali secara bergiliran. F tampil pertama dan D terakhir. C tepat setelah B, sedangkan E setelah C. Jika A mendapat giliran keempat, siapa yang tampil tepat sebelum A?",
    "choices": [
      {
        "id": "a",
        "label": "B",
        "score": 0
      },
      {
        "id": "b",
        "label": "D",
        "score": 0
      },
      {
        "id": "c",
        "label": "E",
        "score": 0
      },
      {
        "id": "d",
        "label": "C",
        "score": 5
      },
      {
        "id": "e",
        "label": "F",
        "score": 0
      }
    ],
    "explanation": "Posisi 1 diisi F, posisi 4 diisi A, dan posisi 6 diisi D. B, C, dan E mengisi posisi 2, 3, dan 5. Karena C tepat setelah B, blok B–C hanya dapat menempati posisi 2–3; E menempati posisi 5. Urutannya F–B–C–A–E–D. Peserta tepat sebelum A adalah C.\nJawaban D."
  },
  {
    "id": "mini-tiu11-08",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Lima orang A, B, C, D, dan E duduk mengelilingi meja bundar. A dan B harus berdampingan, sedangkan C dan D tidak boleh berdampingan. Susunan yang hanya berbeda karena perputaran meja dianggap sama. Berapa banyak susunan yang memenuhi ketentuan?",
    "choices": [
      {
        "id": "a",
        "label": "4",
        "score": 5
      },
      {
        "id": "b",
        "label": "6",
        "score": 0
      },
      {
        "id": "c",
        "label": "8",
        "score": 0
      },
      {
        "id": "d",
        "label": "10",
        "score": 0
      },
      {
        "id": "e",
        "label": "12",
        "score": 0
      }
    ],
    "explanation": "Anggap A–B sebagai satu blok. Susunan melingkar dari blok tersebut, C, D, dan E berjumlah (4 − 1)! × 2 = 12. Kasus terlarang ketika C–D juga berdampingan berjumlah (3 − 1)! × 2 × 2 = 8. Jadi susunan yang memenuhi adalah 12 − 8 = 4. Pencerminan tidak disamakan dengan perputaran.\nJawaban A."
  },
  {
    "id": "mini-tiu11-09",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Nilai dari (2/3 − 0,25) : 5/6 + 10% adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "0,40",
        "score": 0
      },
      {
        "id": "b",
        "label": "0,50",
        "score": 0
      },
      {
        "id": "c",
        "label": "0,65",
        "score": 0
      },
      {
        "id": "d",
        "label": "0,75",
        "score": 0
      },
      {
        "id": "e",
        "label": "0,60",
        "score": 5
      }
    ],
    "explanation": "Ubah 0,25 menjadi 1/4. Selisih 2/3 − 1/4 = 5/12. Kemudian (5/12) : (5/6) = (5/12) × (6/5) = 1/2. Tambahkan 10% = 0,10, sehingga hasilnya 0,50 + 0,10 = 0,60.\nJawaban E."
  },
  {
    "id": "mini-tiu11-10",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Nilai dari 12,5% × 64 + 3/4 × 16 − 0,2 × 15 adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "15",
        "score": 0
      },
      {
        "id": "b",
        "label": "16",
        "score": 0
      },
      {
        "id": "c",
        "label": "17",
        "score": 5
      },
      {
        "id": "d",
        "label": "18",
        "score": 0
      },
      {
        "id": "e",
        "label": "20",
        "score": 0
      }
    ],
    "explanation": "12,5% = 1/8, sehingga 12,5% × 64 = 8. Selanjutnya 3/4 × 16 = 12 dan 0,2 × 15 = 3. Hasil akhir 8 + 12 − 3 = 17. Perubahan bentuk bilangan membuat perhitungan dapat dilakukan tanpa perkalian desimal panjang.\nJawaban C."
  },
  {
    "id": "mini-tiu11-11",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui P = 24 × 26 dan Q = 25 × 25. Hubungan P dan Q yang benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "P > Q",
        "score": 0
      },
      {
        "id": "b",
        "label": "P = Q",
        "score": 0
      },
      {
        "id": "c",
        "label": "P = Q + 1",
        "score": 0
      },
      {
        "id": "d",
        "label": "hubungan tidak dapat ditentukan",
        "score": 0
      },
      {
        "id": "e",
        "label": "P < Q",
        "score": 5
      }
    ],
    "explanation": "P = 24 × 26 = 624, sedangkan Q = 25 × 25 = 625. Karena 624 lebih kecil daripada 625, hubungan yang benar adalah P < Q.\nJawaban E."
  },
  {
    "id": "mini-tiu11-12",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Pasangan perkalian yang memiliki nilai sama adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "25 × 32 dan 24 × 35",
        "score": 0
      },
      {
        "id": "b",
        "label": "36 × 25 dan 45 × 18",
        "score": 0
      },
      {
        "id": "c",
        "label": "64 × 15 dan 48 × 20",
        "score": 5
      },
      {
        "id": "d",
        "label": "42 × 20 dan 35 × 25",
        "score": 0
      },
      {
        "id": "e",
        "label": "75 × 12 dan 60 × 16",
        "score": 0
      }
    ],
    "explanation": "64 × 15 = 960 dan 48 × 20 = 960. Dari 64 menjadi 48, faktor pertama dikali 3/4; dari 15 menjadi 20, faktor kedua dikali 4/3. Karena (3/4) × (4/3) = 1, hasil perkaliannya tetap sama. Pasangan lain menghasilkan nilai yang berbeda.\nJawaban C."
  },
  {
    "id": "mini-tiu11-13",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Angka berikutnya pada deret 2, 5, 11, 23, 47, ... adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "71",
        "score": 0
      },
      {
        "id": "b",
        "label": "89",
        "score": 0
      },
      {
        "id": "c",
        "label": "94",
        "score": 0
      },
      {
        "id": "d",
        "label": "95",
        "score": 5
      },
      {
        "id": "e",
        "label": "96",
        "score": 0
      }
    ],
    "explanation": "Setiap suku diperoleh dengan mengalikan suku sebelumnya dengan 2 lalu menambahkan 1: 2×2+1=5; 5×2+1=11; 11×2+1=23; 23×2+1=47. Suku berikutnya adalah 47×2+1=95.\nJawaban D."
  },
  {
    "id": "mini-tiu11-14",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Angka berikutnya pada deret 81, 4, 27, 9, 9, 16, 3, ... adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "1",
        "score": 0
      },
      {
        "id": "b",
        "label": "25",
        "score": 5
      },
      {
        "id": "c",
        "label": "18",
        "score": 0
      },
      {
        "id": "d",
        "label": "21",
        "score": 0
      },
      {
        "id": "e",
        "label": "27",
        "score": 0
      }
    ],
    "explanation": "Pisahkan posisi ganjil dan genap. Posisi ganjil: 81, 27, 9, 3, ... selalu dibagi 3. Posisi genap: 4, 9, 16, ... merupakan 2^2, 3^2, 4^2. Suku yang ditanyakan berada di posisi genap berikutnya, yaitu 5^2 = 25.\nJawaban B."
  },
  {
    "id": "mini-tiu11-15",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Nilai suku ke-11 pada tabel berikut adalah ...\n\n| Suku ke-n | Nilai |\n| :---: | :---: |\n| 2 | 1 |\n| 4 | 6 |\n| 6 | 15 |\n| 9 | 36 |\n| 11 | ? |",
    "choices": [
      {
        "id": "a",
        "label": "55",
        "score": 5
      },
      {
        "id": "b",
        "label": "45",
        "score": 0
      },
      {
        "id": "c",
        "label": "50",
        "score": 0
      },
      {
        "id": "d",
        "label": "60",
        "score": 0
      },
      {
        "id": "e",
        "label": "66",
        "score": 0
      }
    ],
    "explanation": "Pasangan pada tabel memenuhi U_n = n(n − 1)/2. Untuk n=2 diperoleh 1; n=4 diperoleh 6; n=6 diperoleh 15; n=9 diperoleh 36. Jadi U_11 = 11×10/2 = 55. Indeks yang tidak berurutan mengarahkan pencarian pada hubungan indeks dengan nilai.\nJawaban A."
  },
  {
    "id": "mini-tiu11-16",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Nilai pengganti tanda tanya pada matriks berikut adalah ...\n\n| 3 | 5 | 2 | 19 |\n| 4 | 2 | 3 | 22 |\n| 6 | 3 | 4 | ? |",
    "choices": [
      {
        "id": "a",
        "label": "48",
        "score": 5
      },
      {
        "id": "b",
        "label": "44",
        "score": 0
      },
      {
        "id": "c",
        "label": "46",
        "score": 0
      },
      {
        "id": "d",
        "label": "50",
        "score": 0
      },
      {
        "id": "e",
        "label": "54",
        "score": 0
      }
    ],
    "explanation": "Pada setiap baris berlaku: bilangan pertama dikuadratkan lalu ditambah hasil kali bilangan kedua dan ketiga. Baris pertama: 3^2 + 5×2 = 19. Baris kedua: 4^2 + 2×3 = 22. Baris ketiga: 6^2 + 3×4 = 36 + 12 = 48.\nJawaban A."
  },
  {
    "id": "mini-tiu11-17",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Nilai pengganti tanda tanya pada matriks berikut adalah ...\n\n| 4 | 9 | 2 |\n| 3 | 5 | 7 |\n| 8 | 1 | ? |",
    "choices": [
      {
        "id": "a",
        "label": "4",
        "score": 0
      },
      {
        "id": "b",
        "label": "6",
        "score": 5
      },
      {
        "id": "c",
        "label": "5",
        "score": 0
      },
      {
        "id": "d",
        "label": "7",
        "score": 0
      },
      {
        "id": "e",
        "label": "9",
        "score": 0
      }
    ],
    "explanation": "Jumlah setiap baris dan kolom adalah 15. Baris ketiga memberi 8 + 1 + ? = 15, sehingga ? = 6. Nilai ini juga memenuhi kolom ketiga: 2 + 7 + 6 = 15. Pemeriksaan dua arah memperkuat pola.\nJawaban B."
  },
  {
    "id": "mini-tiu11-18",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Suatu barisan aritmetika memiliki suku ke-5 sebesar 21 dan suku ke-12 sebesar 49. Jumlah sepuluh suku pertamanya adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "210",
        "score": 0
      },
      {
        "id": "b",
        "label": "220",
        "score": 0
      },
      {
        "id": "c",
        "label": "240",
        "score": 0
      },
      {
        "id": "d",
        "label": "250",
        "score": 0
      },
      {
        "id": "e",
        "label": "230",
        "score": 5
      }
    ],
    "explanation": "Beda d = (49 − 21)/(12 − 5) = 4. Suku pertama a = 21 − 4×4 = 5. Suku ke-10 adalah 5 + 9×4 = 41. Jumlah sepuluh suku pertama = 10×(5 + 41)/2 = 230. Pertanyaan meminta jumlah suku, bukan hanya suku ke-10.\nJawaban E."
  },
  {
    "id": "mini-tiu11-19",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Sebuah barang berharga Rp500.000 mendapat diskon 20%, kemudian diskon tambahan yang dihitung dari harga setelah diskon pertama. Jika harga akhirnya Rp340.000, besar diskon tambahan adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "10%",
        "score": 0
      },
      {
        "id": "b",
        "label": "12%",
        "score": 0
      },
      {
        "id": "c",
        "label": "15%",
        "score": 5
      },
      {
        "id": "d",
        "label": "18%",
        "score": 0
      },
      {
        "id": "e",
        "label": "20%",
        "score": 0
      }
    ],
    "explanation": "Setelah diskon pertama, harga menjadi 80% × Rp500.000 = Rp400.000. Potongan tahap kedua adalah Rp400.000 − Rp340.000 = Rp60.000. Karena dasar diskon kedua Rp400.000, besarnya 60.000/400.000 × 100% = 15%.\nJawaban C."
  },
  {
    "id": "mini-tiu11-20",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Enam pekerja dapat menyelesaikan sebuah pekerjaan dalam 15 hari. Setelah bekerja selama 5 hari, mereka mendapat bantuan 4 pekerja dengan kemampuan yang sama. Jika seluruh pekerja bekerja setiap hari, berapa hari total pekerjaan tersebut selesai sejak dimulai?",
    "choices": [
      {
        "id": "a",
        "label": "6 hari",
        "score": 0
      },
      {
        "id": "b",
        "label": "9 hari",
        "score": 0
      },
      {
        "id": "c",
        "label": "10 hari",
        "score": 0
      },
      {
        "id": "d",
        "label": "11 hari",
        "score": 5
      },
      {
        "id": "e",
        "label": "12 hari",
        "score": 0
      }
    ],
    "explanation": "Beban total = 6×15 = 90 hari-orang. Lima hari pertama menyelesaikan 6×5 = 30 hari-orang, sehingga tersisa 60. Setelah ditambah 4 orang, jumlah pekerja menjadi 10 dan sisa waktu 60/10 = 6 hari. Waktu total sejak awal = 5 + 6 = 11 hari.\nJawaban D."
  },
  {
    "id": "mini-tiu11-21",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Bus A berangkat dari terminal pukul 07.00 dengan kecepatan tetap 50 km/jam. Bus B berangkat pukul 07.40 dari terminal dan rute yang sama dengan kecepatan tetap 75 km/jam. Pada jarak berapa dari terminal Bus B menyusul Bus A?",
    "choices": [
      {
        "id": "a",
        "label": "75 km",
        "score": 0
      },
      {
        "id": "b",
        "label": "90 km",
        "score": 0
      },
      {
        "id": "c",
        "label": "125 km",
        "score": 0
      },
      {
        "id": "d",
        "label": "100 km",
        "score": 5
      },
      {
        "id": "e",
        "label": "150 km",
        "score": 0
      }
    ],
    "explanation": "Keunggulan jarak Bus A ketika B berangkat = 50×(40/60) = 100/3 km. Kecepatan relatif = 75 − 50 = 25 km/jam. Waktu mengejar sejak B berangkat = (100/3)/25 = 4/3 jam. Jarak Bus B saat menyusul = 75×4/3 = 100 km. Keduanya berada pada posisi yang sama pada pukul 09.00.\nJawaban D."
  },
  {
    "id": "mini-tiu11-22",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Untuk suatu bilangan bulat positif n, apakah n merupakan bilangan genap?\n\n(1) n merupakan kelipatan 6.\n(2) n merupakan kelipatan 3.",
    "choices": [
      {
        "id": "a",
        "label": "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Masing-masing pernyataan secara terpisah sudah cukup.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Bahkan kedua pernyataan bersama-sama masih tidak cukup.",
        "score": 0
      }
    ],
    "explanation": "Setiap kelipatan 6 pasti genap, sehingga pernyataan (1) cukup untuk menjawab ya tanpa menentukan nilai n. Kelipatan 3 dapat ganjil, seperti 3 dan 9, atau genap, seperti 6 dan 12. Jadi pernyataan (2) tidak cukup. Kedua informasi tetap konsisten jika digabungkan.\nJawaban A."
  },
  {
    "id": "mini-tiu11-23",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui x dan y adalah bilangan real. Berapakah nilai x?\n\n(1) x + y = 18.\n(2) x − y = 4.",
    "choices": [
      {
        "id": "a",
        "label": "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Masing-masing pernyataan secara terpisah sudah cukup.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Bahkan kedua pernyataan bersama-sama masih tidak cukup.",
        "score": 0
      }
    ],
    "explanation": "Masing-masing persamaan sendiri memungkinkan banyak nilai x karena y belum diketahui. Jika digabungkan, penjumlahan kedua persamaan menghasilkan 2x=22, sehingga x=11 dan y=7. Jadi informasi bersama cukup, sedangkan masing-masing secara terpisah tidak cukup.\nJawaban C."
  },
  {
    "id": "mini-tiu11-24",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Berapakah luas sebuah persegi panjang?\n\n(1) Perbandingan panjang dan lebarnya adalah 4 : 3.\n(2) Kelilingnya 28 cm dan panjang diagonalnya 10 cm.",
    "choices": [
      {
        "id": "a",
        "label": "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Masing-masing pernyataan secara terpisah sudah cukup.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Bahkan kedua pernyataan bersama-sama masih tidak cukup.",
        "score": 0
      }
    ],
    "explanation": "Pernyataan (1) hanya memberi rasio sehingga skala panjang dan luas belum diketahui. Dari pernyataan (2), p+l=14 dan p^2+l^2=100. Gunakan (p+l)^2 = p^2+l^2+2pl: 196=100+2pl, sehingga luas pl=48 cm². Ukuran 8 cm dan 6 cm juga konsisten dengan rasio pada pernyataan (1). Jadi pernyataan (2) saja cukup.\nJawaban B."
  },
  {
    "id": "mini-tiu11-25",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Harga satu buku adalah b rupiah dan harga satu pensil adalah p rupiah. Berapakah harga satu buku?\n\n(1) 2b + 3p = 29.000.\n(2) 4b + 6p = 58.000.",
    "choices": [
      {
        "id": "a",
        "label": "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan saja tidak cukup.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Masing-masing pernyataan secara terpisah sudah cukup.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Bahkan kedua pernyataan bersama-sama masih tidak cukup.",
        "score": 5
      }
    ],
    "explanation": "Persamaan (2) tepat dua kali persamaan (1), sehingga tidak memberi informasi baru. Misalnya b=10.000 dan p=3.000 memenuhi keduanya; b=7.000 dan p=5.000 juga memenuhi keduanya. Karena harga buku tidak tunggal, kedua pernyataan bersama-sama tetap tidak cukup.\nJawaban E."
  },
  {
    "id": "mini-tiu11-26",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "A dapat menyelesaikan pekerjaan dalam 9 jam, sedangkan B dalam 18 jam. Mereka bekerja bersama selama 3 jam, lalu B berhenti. Berapa waktu tambahan yang dibutuhkan A untuk menyelesaikan sisanya?",
    "choices": [
      {
        "id": "a",
        "label": "3 jam",
        "score": 0
      },
      {
        "id": "b",
        "label": "3 jam 30 menit",
        "score": 0
      },
      {
        "id": "c",
        "label": "4 jam 30 menit",
        "score": 5
      },
      {
        "id": "d",
        "label": "4 jam",
        "score": 0
      },
      {
        "id": "e",
        "label": "6 jam",
        "score": 0
      }
    ],
    "explanation": "Laju gabungan = 1/9 + 1/18 = 1/6 pekerjaan per jam. Dalam 3 jam mereka menyelesaikan 3/6 = 1/2 pekerjaan. Sisa 1/2 dikerjakan A dengan laju 1/9, sehingga membutuhkan (1/2)/(1/9) = 9/2 jam = 4 jam 30 menit tambahan.\nJawaban C."
  },
  {
    "id": "mini-tiu11-27",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Dana A dan B berbanding 2 : 3, sedangkan dana B dan C berbanding 4 : 5. Jika dana C lebih besar Rp42 juta daripada dana A, berapakah dana B?",
    "choices": [
      {
        "id": "a",
        "label": "Rp48 juta",
        "score": 0
      },
      {
        "id": "b",
        "label": "Rp60 juta",
        "score": 0
      },
      {
        "id": "c",
        "label": "Rp84 juta",
        "score": 0
      },
      {
        "id": "d",
        "label": "Rp90 juta",
        "score": 0
      },
      {
        "id": "e",
        "label": "Rp72 juta",
        "score": 5
      }
    ],
    "explanation": "Samakan bagian B: A:B=8:12 dan B:C=12:15, sehingga A:B:C=8:12:15. Selisih C dan A = 7 bagian = Rp42 juta, jadi 1 bagian Rp6 juta. Dana B = 12×Rp6 juta = Rp72 juta.\nJawaban E."
  },
  {
    "id": "mini-tiu11-28",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Sebuah tabungan berbunga tunggal tanpa biaya administrasi memiliki saldo Rp3.120.000 setelah 8 bulan dan Rp3.180.000 setelah 12 bulan. Jika tidak ada setoran atau penarikan, berapakah modal awalnya?",
    "choices": [
      {
        "id": "a",
        "label": "Rp2.940.000",
        "score": 0
      },
      {
        "id": "b",
        "label": "Rp3.000.000",
        "score": 5
      },
      {
        "id": "c",
        "label": "Rp3.060.000",
        "score": 0
      },
      {
        "id": "d",
        "label": "Rp3.120.000",
        "score": 0
      },
      {
        "id": "e",
        "label": "Rp3.180.000",
        "score": 0
      }
    ],
    "explanation": "Selisih saldo 12 bulan dan 8 bulan adalah Rp60.000, yaitu bunga selama 4 bulan. Karena bunga tunggal, bunga per bulan tetap Rp15.000. Bunga selama 8 bulan = Rp120.000, sehingga modal awal = Rp3.120.000 − Rp120.000 = Rp3.000.000. Hasil ini juga memberi bunga 12 bulan Rp180.000.\nJawaban B."
  },
  {
    "id": "mini-tiu11-29",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Empat tahun lalu, usia ayah lima kali usia anaknya. Empat tahun lagi, usia ayah tiga kali usia anaknya. Berapakah usia anak saat ini?",
    "choices": [
      {
        "id": "a",
        "label": "8 tahun",
        "score": 0
      },
      {
        "id": "b",
        "label": "10 tahun",
        "score": 0
      },
      {
        "id": "c",
        "label": "14 tahun",
        "score": 0
      },
      {
        "id": "d",
        "label": "12 tahun",
        "score": 5
      },
      {
        "id": "e",
        "label": "16 tahun",
        "score": 0
      }
    ],
    "explanation": "Misalkan usia sekarang ayah F dan anak A. Empat tahun lalu: F−4=5(A−4), sehingga F=5A−16. Empat tahun lagi: F+4=3(A+4), sehingga F=3A+8. Samakan: 5A−16=3A+8 → 2A=24 → A=12. Usia ayah sekarang 44 tahun; pasangan 40 dan 8 serta 48 dan 16 memenuhi kedua rasio.\nJawaban D."
  },
  {
    "id": "mini-tiu11-30",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Sebuah toko menjual 25% persediaan botolnya pada pagi hari, lalu menerima tambahan 20 botol. Pada sore hari, 40% dari persediaan yang tersedia saat itu terjual. Jika tersisa 84 botol, berapakah persediaan awal toko?",
    "choices": [
      {
        "id": "a",
        "label": "160 botol",
        "score": 5
      },
      {
        "id": "b",
        "label": "120 botol",
        "score": 0
      },
      {
        "id": "c",
        "label": "140 botol",
        "score": 0
      },
      {
        "id": "d",
        "label": "180 botol",
        "score": 0
      },
      {
        "id": "e",
        "label": "200 botol",
        "score": 0
      }
    ],
    "explanation": "Kerjakan mundur. Sisa 84 botol adalah 60% persediaan sebelum penjualan sore, sehingga persediaan saat itu 84/0,60=140 botol. Sebelum menerima tambahan, stok tersisa 140−20=120 botol. Jumlah ini adalah 75% stok awal, sehingga stok awal 120/0,75=160 botol. Tambahan 20 botol harus dikurangkan sebelum membalik persentase pagi.\nJawaban A."
  },
  {
    "id": "mini-tiu11-31",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "Pilih gambar yang tepat untuk melengkapi analogi berikut.\n\n![Analogi perisai dan dua penanda](/tryout/mini-tiu-new-casn-2/soal-31.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-31-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-31-b.svg",
        "score": 5
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-31-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-31-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-31-e.svg",
        "score": 0
      }
    ],
    "explanation": "Dari gambar pertama ke gambar kedua, perisai diputar 90° searah jarum jam dan warnanya dibalik. Dua penanda berpindah dari dalam ke luar, berputar 90° berlawanan arah jarum jam, dan warnanya juga berbalik. Pada pasangan berikutnya, perisai putih harus diputar 90° searah jarum jam dan menjadi hitam; kedua penanda berpindah ke dalam serta menjadi putih. Posisi penanda harus mengikuti arah putarnya sendiri, bukan arah putaran perisai.\nJawaban B."
  },
  {
    "id": "mini-tiu11-32",
    "category": "TIU",
    "topic": "Figural Ketaksamaan",
    "prompt": "Pilih gambar yang berbeda dari keempat gambar lainnya.",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-32-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-32-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-32-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-32-d.svg",
        "score": 5
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-32-e.svg",
        "score": 0
      }
    ],
    "explanation": "Empat gambar dapat saling diperoleh dengan memutar satu objek utuh. Hubungan relatif antara kepala panah, titik hitam di luar cincin, lingkaran kecil kosong, dan bidang arsir tetap sama. Satu gambar merupakan pencerminan: urutan sisi relatif penanda terbalik sehingga tidak dapat disamakan hanya dengan rotasi. Arah panah saja tidak cukup untuk menemukan perbedaannya; penanda lain harus dibandingkan bersama-sama.\nJawaban D."
  },
  {
    "id": "mini-tiu11-33",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "Pilih gambar yang tepat untuk menggantikan tanda tanya.\n\n![Deret panah, titik orbit, dan belah ketupat](/tryout/mini-tiu-new-casn-2/soal-33.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-33-a.svg",
        "score": 5
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-33-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-33-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-33-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-33-e.svg",
        "score": 0
      }
    ],
    "explanation": "Panah beserta bidang arsirnya berputar 90° searah jarum jam tiap langkah: atas, kanan, bawah, kiri, lalu atas. Titik luar berputar 45° berlawanan arah jarum jam: kanan-atas, atas, kiri-atas, kiri, lalu kiri-bawah. Belah ketupat pusat berganti putih, hitam, putih, hitam, lalu putih. Jadi gambar terakhir harus memadukan panah ke atas, titik kiri-bawah, dan pusat putih; semua aturan berlaku bersamaan.\nJawaban A."
  },
  {
    "id": "mini-tiu11-34",
    "category": "TIU",
    "topic": "Figural Matriks 9 Kotak",
    "prompt": "Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks cincin dan simpul hitam](/tryout/mini-tiu-new-casn-2/soal-34.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-34-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-34-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-34-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-34-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-34-e.svg",
        "score": 5
      }
    ],
    "explanation": "Pada setiap baris, ambil posisi simpul hitam yang sama-sama muncul pada dua kotak pertama, kemudian putar kumpulan posisi itu 90° searah jarum jam untuk membentuk kotak ketiga. Baris pertama memiliki irisan posisi atas dan kiri, sehingga hasilnya atas dan kanan. Baris kedua memiliki irisan kanan dan bawah, sehingga hasilnya bawah dan kiri. Pada baris ketiga, irisannya atas dan bawah; setelah diputar, hasilnya kanan dan kiri. Bagian lingkaran kosong dan arsir pusat merupakan kerangka yang tetap.\nJawaban E."
  },
  {
    "id": "mini-tiu11-35",
    "category": "TIU",
    "topic": "Figural Matriks 9 Kotak",
    "prompt": "Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks motif kawat bersudut](/tryout/mini-tiu-new-casn-2/soal-35.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-35-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-35-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-35-c.svg",
        "score": 5
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-35-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-new-casn-2/soal-35-e.svg",
        "score": 0
      }
    ],
    "explanation": "Hitung ruas garis lurus pada motif kawat di dalam bingkai; titik penanda tidak menambah ruas. Baris pertama memiliki 4, 5, dan 6 ruas; baris kedua 5, 6, dan 7 ruas; baris ketiga 6, 7, dan 8 ruas. Jumlahnya bertambah satu baik ke kanan maupun ke bawah, sedangkan orientasi gambar dapat berbeda. Maka kotak terakhir memerlukan motif dengan 8 ruas. Satu-satunya pilihan dengan 8 ruas adalah jawaban yang benar.\nJawaban C."
  }
];
