import type { Question } from "./types";

// Finalized from drafts/mini-tiu-new-casn-paket-3/draft.json.
export const MINI_TIU_10_QUESTIONS: Question[] = [
  {
    "id": "mini-tiu10-01",
    "category": "TIU",
    "topic": "Kemampuan Verbal",
    "prompt": "GERIMIS : HUJAN DERAS = BISIKAN : ...",
    "choices": [
      {
        "id": "a",
        "label": "percakapan",
        "score": 0
      },
      {
        "id": "b",
        "label": "pendengar",
        "score": 0
      },
      {
        "id": "c",
        "label": "kesunyian",
        "score": 0
      },
      {
        "id": "d",
        "label": "teriakan",
        "score": 5
      },
      {
        "id": "e",
        "label": "suara",
        "score": 0
      }
    ],
    "explanation": "Gerimis dan hujan deras menunjukkan gejala sejenis dengan intensitas yang meningkat. Hubungan setara terdapat pada bisikan dan teriakan: keduanya suara manusia, tetapi teriakan memiliki intensitas lebih tinggi. Yang dicari adalah peningkatan intensitas, bukan lawan kata, penerima suara, atau kategori umumnya.\nJawaban D."
  },
  {
    "id": "mini-tiu10-02",
    "category": "TIU",
    "topic": "Kemampuan Verbal",
    "prompt": "PETA : WILAYAH = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "kompas : arah",
        "score": 0
      },
      {
        "id": "b",
        "label": "denah : ruangan",
        "score": 5
      },
      {
        "id": "c",
        "label": "kunci : pintu",
        "score": 0
      },
      {
        "id": "d",
        "label": "termometer : suhu",
        "score": 0
      },
      {
        "id": "e",
        "label": "kamera : lensa",
        "score": 0
      }
    ],
    "explanation": "Peta merupakan representasi tata letak suatu wilayah. Denah merupakan representasi tata letak suatu ruangan. Kompas menunjukkan arah dan termometer mengukur suhu, tetapi keduanya bukan gambaran tata letak objeknya. Kunci berfungsi membuka pintu, sedangkan lensa merupakan bagian kamera.\nJawaban B."
  },
  {
    "id": "mini-tiu10-03",
    "category": "TIU",
    "topic": "Kemampuan Verbal",
    "prompt": "KALIMAT : PARAGRAF : KARANGAN = ... : ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "akar : batang : daun",
        "score": 0
      },
      {
        "id": "b",
        "label": "benih : tunas : pohon",
        "score": 0
      },
      {
        "id": "c",
        "label": "bahan : mesin : produk",
        "score": 0
      },
      {
        "id": "d",
        "label": "penulis : naskah : penerbit",
        "score": 0
      },
      {
        "id": "e",
        "label": "sel : jaringan : organ",
        "score": 5
      }
    ],
    "explanation": "Kalimat-kalimat menyusun paragraf, dan paragraf-paragraf menyusun karangan. Hubungan bagian yang menyusun kesatuan lebih besar ini setara dengan sel-sel yang menyusun jaringan dan jaringan-jaringan yang menyusun organ. Benih–tunas–pohon adalah tahapan pertumbuhan, bukan susunan bagian bertingkat.\nJawaban E."
  },
  {
    "id": "mini-tiu10-04",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Berlaku aturan: jika berkas suatu permohonan lengkap, permohonan tersebut diproses. Diketahui permohonan R diproses. Hanya berdasarkan informasi tersebut, kesimpulan yang tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "belum dapat dipastikan apakah berkas permohonan R lengkap",
        "score": 5
      },
      {
        "id": "b",
        "label": "berkas permohonan R pasti lengkap",
        "score": 0
      },
      {
        "id": "c",
        "label": "berkas permohonan R pasti tidak lengkap",
        "score": 0
      },
      {
        "id": "d",
        "label": "semua permohonan yang diproses pasti memiliki berkas lengkap",
        "score": 0
      },
      {
        "id": "e",
        "label": "permohonan R tidak diproses",
        "score": 0
      }
    ],
    "explanation": "Misalkan P = berkas lengkap dan Q = permohonan diproses. Aturan hanya menyatakan P → Q. Diketahui Q benar, tetapi hal itu tidak membuktikan P benar maupun salah. Aturan tidak menyatakan bahwa kelengkapan berkas merupakan satu-satunya keadaan yang memungkinkan pemrosesan. Menyimpulkan Q → P merupakan pembalikan implikasi yang tidak sah.\nJawaban A."
  },
  {
    "id": "mini-tiu10-05",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Semua anggota tim audit memiliki sertifikat kompetensi. Tidak ada pemilik sertifikat kompetensi yang mengikuti pelatihan dasar. Pernyataan yang pasti salah adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "sebagian peserta pelatihan dasar bukan anggota tim audit",
        "score": 0
      },
      {
        "id": "b",
        "label": "sebagian pemilik sertifikat kompetensi bukan anggota tim audit",
        "score": 0
      },
      {
        "id": "c",
        "label": "sebagian anggota tim audit mengikuti pelatihan dasar",
        "score": 5
      },
      {
        "id": "d",
        "label": "semua anggota tim audit tidak mengikuti pelatihan dasar",
        "score": 0
      },
      {
        "id": "e",
        "label": "tidak seorang pun peserta pelatihan dasar merupakan anggota tim audit",
        "score": 0
      }
    ],
    "explanation": "Anggota tim audit termasuk kelompok pemilik sertifikat, sedangkan kelompok pemilik sertifikat tidak beririsan dengan peserta pelatihan dasar. Akibatnya tidak mungkin ada anggota tim audit yang mengikuti pelatihan dasar. Pernyataan C pasti salah karena menyatakan adanya irisan tersebut. D dan E mengikuti premis. A dan B masih mungkin benar, tetapi keberadaan orang-orang yang disebut di dalamnya tidak dipastikan oleh premis.\nJawaban C."
  },
  {
    "id": "mini-tiu10-06",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Dari calon A dan calon B, tepat satu orang diterima. Jika A diterima, C mengikuti orientasi. Diketahui C tidak mengikuti orientasi. Pernyataan yang pasti benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "A diterima dan B tidak diterima",
        "score": 0
      },
      {
        "id": "b",
        "label": "B diterima",
        "score": 5
      },
      {
        "id": "c",
        "label": "A dan B sama-sama diterima",
        "score": 0
      },
      {
        "id": "d",
        "label": "A dan B sama-sama tidak diterima",
        "score": 0
      },
      {
        "id": "e",
        "label": "status penerimaan B belum dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Dari A diterima → C mengikuti orientasi dan fakta bahwa C tidak mengikuti orientasi, diperoleh A tidak diterima melalui modus tollens. Karena tepat satu dari A atau B diterima, penolakan A membuat B pasti diterima. Jadi diperlukan dua langkah: menyingkirkan A, lalu menggunakan ketentuan tepat satu.\nJawaban B."
  },
  {
    "id": "mini-tiu10-07",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Enam peserta, yaitu Arif, Bela, Citra, Danu, Eka, dan Fajar, mendapat giliran presentasi masing-masing satu kali. Fajar tampil sebelum Arif, dan Arif tampil sebelum Citra. Bela tampil sebelum Danu. Eka mendapat giliran terakhir. Siapakah yang tidak mungkin mendapat giliran kedua?",
    "choices": [
      {
        "id": "a",
        "label": "Arif",
        "score": 0
      },
      {
        "id": "b",
        "label": "Bela",
        "score": 0
      },
      {
        "id": "c",
        "label": "Danu",
        "score": 0
      },
      {
        "id": "d",
        "label": "Fajar",
        "score": 0
      },
      {
        "id": "e",
        "label": "Citra",
        "score": 5
      }
    ],
    "explanation": "Urutan relatif Fajar → Arif → Citra berarti selalu ada sedikitnya dua peserta sebelum Citra. Karena itu posisi paling awal Citra adalah ketiga, sehingga Citra tidak mungkin kedua. Peserta lain dalam opsi masih dapat menempati posisi kedua. Contohnya: Fajar–Arif–Bela–Danu–Citra–Eka; Fajar–Bela–Arif–Citra–Danu–Eka; Bela–Danu–Fajar–Arif–Citra–Eka; dan Bela–Fajar–Arif–Citra–Danu–Eka. Tidak diperlukan satu urutan lengkap yang unik untuk menjawab pertanyaan ini.\nJawaban E."
  },
  {
    "id": "mini-tiu10-08",
    "category": "TIU",
    "topic": "Logika Analitis",
    "prompt": "Enam delegasi A, B, C, D, E, dan F duduk berjajar pada enam kursi. A harus duduk paling kiri, sedangkan B dan C tidak boleh berdampingan. Berapa banyak susunan yang memenuhi ketentuan tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "24",
        "score": 0
      },
      {
        "id": "b",
        "label": "48",
        "score": 0
      },
      {
        "id": "c",
        "label": "72",
        "score": 5
      },
      {
        "id": "d",
        "label": "96",
        "score": 0
      },
      {
        "id": "e",
        "label": "120",
        "score": 0
      }
    ],
    "explanation": "Setelah A ditetapkan di kursi pertama, lima orang lainnya dapat disusun dalam 5! = 120 cara. Hitung lalu kurangi susunan yang dilarang: jika B dan C berdampingan, keduanya menjadi satu blok bersama D, E, dan F, sehingga terdapat 4! × 2 = 48 susunan. Banyak susunan yang diperbolehkan = 120 − 48 = 72. Blok berdampingan digunakan untuk menghitung yang dilarang, bukan langsung sebagai jawaban.\nJawaban C."
  },
  {
    "id": "mini-tiu10-09",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui (3/4 − x) : 25% = 1,2. Nilai x adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "0,15",
        "score": 0
      },
      {
        "id": "b",
        "label": "0,25",
        "score": 0
      },
      {
        "id": "c",
        "label": "0,35",
        "score": 0
      },
      {
        "id": "d",
        "label": "0,45",
        "score": 5
      },
      {
        "id": "e",
        "label": "0,55",
        "score": 0
      }
    ],
    "explanation": "Karena 25% = 0,25, kalikan kedua ruas dengan 0,25: 3/4 − x = 1,2 × 0,25 = 0,30. Maka 0,75 − x = 0,30 dan x = 0,45. Pengecekan: (0,75 − 0,45)/0,25 = 0,30/0,25 = 1,2. Langkahnya membalik pembagian terlebih dahulu, lalu menentukan bilangan yang dikurangkan.\nJawaban D."
  },
  {
    "id": "mini-tiu10-10",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Nilai dari 12,5% × 48 + 7/8 × 48 − 0,25 × 16 adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "44",
        "score": 5
      },
      {
        "id": "b",
        "label": "40",
        "score": 0
      },
      {
        "id": "c",
        "label": "46",
        "score": 0
      },
      {
        "id": "d",
        "label": "48",
        "score": 0
      },
      {
        "id": "e",
        "label": "52",
        "score": 0
      }
    ],
    "explanation": "Ubah 12,5% menjadi 1/8. Dua suku pertama mempunyai faktor 48 yang sama, sehingga (1/8 × 48) + (7/8 × 48) = (1/8 + 7/8) × 48 = 48. Suku terakhir 0,25 × 16 = 4. Hasil akhirnya 48 − 4 = 44. Sifat distributif memungkinkan penggabungan sebelum menghitung setiap perkalian.\nJawaban A."
  },
  {
    "id": "mini-tiu10-11",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui 0 < x < 1, P = x², dan Q = x. Hubungan yang selalu benar adalah ...",
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
        "label": "hubungan P dan Q tidak dapat ditentukan",
        "score": 0
      },
      {
        "id": "e",
        "label": "P < Q",
        "score": 5
      }
    ],
    "explanation": "Dari x < 1, kalikan kedua ruas dengan x yang positif. Arah ketaksamaan tetap, sehingga x² < x. Jadi P < Q untuk seluruh nilai x dalam rentang tersebut. Mengalikan bilangan positif dengan faktor di antara 0 dan 1 memperkecil nilainya; tidak perlu mengetahui nilai x secara tepat.\nJawaban E."
  },
  {
    "id": "mini-tiu10-12",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Hasil kali dua bilangan positif adalah 360. Jika bilangan pertama dinaikkan 25%, bilangan kedua harus diubah bagaimana agar hasil kalinya tetap 360?",
    "choices": [
      {
        "id": "a",
        "label": "diturunkan 20%",
        "score": 5
      },
      {
        "id": "b",
        "label": "diturunkan 25%",
        "score": 0
      },
      {
        "id": "c",
        "label": "dinaikkan 20%",
        "score": 0
      },
      {
        "id": "d",
        "label": "diturunkan 12,5%",
        "score": 0
      },
      {
        "id": "e",
        "label": "diturunkan 5%",
        "score": 0
      }
    ],
    "explanation": "Kenaikan 25% membuat faktor pertama menjadi 1,25 kali semula. Agar hasil kali tetap, faktor kedua harus menjadi 1/1,25 = 0,8 kali semula, yaitu turun 20%. Kenaikan 25% tidak diimbangi dengan penurunan 25%, karena 1,25 × 0,75 = 0,9375, bukan 1.\nJawaban A."
  },
  {
    "id": "mini-tiu10-13",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Angka berikutnya pada deret 5, 9, 16, 26, 39, ... adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "49",
        "score": 0
      },
      {
        "id": "b",
        "label": "52",
        "score": 0
      },
      {
        "id": "c",
        "label": "54",
        "score": 0
      },
      {
        "id": "d",
        "label": "55",
        "score": 5
      },
      {
        "id": "e",
        "label": "58",
        "score": 0
      }
    ],
    "explanation": "Selisih antarsuku adalah 4, 7, 10, dan 13. Selisih-selisih itu bertambah 3 secara tetap. Maka selisih berikutnya 16 dan suku berikutnya 39 + 16 = 55. Yang teratur adalah perubahan selisih, bukan beda antarsuku yang langsung konstan.\nJawaban D."
  },
  {
    "id": "mini-tiu10-14",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Angka berikutnya pada deret 3, 6, 10, 20, 24, 48, ... adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "50",
        "score": 0
      },
      {
        "id": "b",
        "label": "52",
        "score": 5
      },
      {
        "id": "c",
        "label": "54",
        "score": 0
      },
      {
        "id": "d",
        "label": "56",
        "score": 0
      },
      {
        "id": "e",
        "label": "96",
        "score": 0
      }
    ],
    "explanation": "Operasi antarangka bergantian: ×2, +4, ×2, +4, ×2, lalu +4. Karena 24 menjadi 48 melalui perkalian 2, langkah berikutnya adalah 48 + 4 = 52. Pola ini dapat dibaca sebagai satu rangkaian operasi, tanpa memisahkan posisi ganjil dan genap menjadi dua deret mandiri.\nJawaban B."
  },
  {
    "id": "mini-tiu10-15",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Tabel berikut mengikuti satu pola hubungan antara indeks dan nilai suku. Nilai n yang melengkapi tabel adalah ...\n\n| Suku ke- | Nilai |\n| :---: | :---: |\n| 1 | 2 |\n| 3 | 12 |\n| 5 | 30 |\n| 8 | 72 |\n| n | 156 |",
    "choices": [
      {
        "id": "a",
        "label": "10",
        "score": 0
      },
      {
        "id": "b",
        "label": "11",
        "score": 0
      },
      {
        "id": "c",
        "label": "12",
        "score": 5
      },
      {
        "id": "d",
        "label": "13",
        "score": 0
      },
      {
        "id": "e",
        "label": "14",
        "score": 0
      }
    ],
    "explanation": "Pasangan pada tabel memenuhi U_n = n(n + 1): 1 × 2 = 2; 3 × 4 = 12; 5 × 6 = 30; dan 8 × 9 = 72. Untuk nilai 156, cari dua bilangan bulat positif berurutan yang hasil kalinya 156. Karena 12 × 13 = 156, indeksnya n = 12. Yang dicari adalah indeks dari nilai suku, sehingga pola digunakan secara terbalik.\nJawaban C."
  },
  {
    "id": "mini-tiu10-16",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Perhatikan pola hubungan vertikal antartiga angka pada setiap kolom. Nilai pengganti tanda tanya adalah ...\n\n| 2 | 5 | 4 |\n| 3 | 2 | 6 |\n| 7 | ? | 22 |",
    "choices": [
      {
        "id": "a",
        "label": "17",
        "score": 0
      },
      {
        "id": "b",
        "label": "25",
        "score": 0
      },
      {
        "id": "c",
        "label": "27",
        "score": 5
      },
      {
        "id": "d",
        "label": "29",
        "score": 0
      },
      {
        "id": "e",
        "label": "35",
        "score": 0
      }
    ],
    "explanation": "Angka terbawah diperoleh dengan menguadratkan angka teratas, kemudian menambahkan angka tengah. Kolom pertama: 2² + 3 = 7. Kolom ketiga: 4² + 6 = 22. Dengan aturan yang sama, kolom kedua memberi 5² + 2 = 27. Periksa hubungan antarbaris pada kolom yang sama, bukan operasi sepanjang satu baris.\nJawaban C."
  },
  {
    "id": "mini-tiu10-17",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Jumlah angka pada setiap baris dan setiap kolom dalam matriks berikut sama. Nilai x − y adalah ...\n\n| 8 | 1 | x |\n| 3 | 5 | 7 |\n| y | 9 | 2 |",
    "choices": [
      {
        "id": "a",
        "label": "−2",
        "score": 0
      },
      {
        "id": "b",
        "label": "0",
        "score": 0
      },
      {
        "id": "c",
        "label": "1",
        "score": 0
      },
      {
        "id": "d",
        "label": "2",
        "score": 5
      },
      {
        "id": "e",
        "label": "4",
        "score": 0
      }
    ],
    "explanation": "Baris kedua berjumlah 3 + 5 + 7 = 15, sehingga semua baris dan kolom harus berjumlah 15. Dari baris pertama, x = 15 − 8 − 1 = 6. Dari baris ketiga, y = 15 − 9 − 2 = 4. Maka x − y = 6 − 4 = 2. Cek kolom pertama 8 + 3 + 4 = 15 dan kolom ketiga 6 + 7 + 2 = 15.\nJawaban D."
  },
  {
    "id": "mini-tiu10-18",
    "category": "TIU",
    "topic": "Deret & Pola",
    "prompt": "Tabel berikut memuat sebagian nilai suatu barisan aritmetika. Jumlah suku ke-7 dan suku ke-13 adalah ...\n\n| Suku ke- | Nilai |\n| :---: | :---: |\n| 4 | 17 |\n| 16 | 65 |",
    "choices": [
      {
        "id": "a",
        "label": "78",
        "score": 0
      },
      {
        "id": "b",
        "label": "82",
        "score": 5
      },
      {
        "id": "c",
        "label": "86",
        "score": 0
      },
      {
        "id": "d",
        "label": "88",
        "score": 0
      },
      {
        "id": "e",
        "label": "90",
        "score": 0
      }
    ],
    "explanation": "Dalam barisan aritmetika, pasangan suku dengan jumlah indeks yang sama mempunyai jumlah nilai yang sama. Karena 7 + 13 = 4 + 16 = 20, berlaku U_7 + U_13 = U_4 + U_16 = 17 + 65 = 82. Cara lain: beda = (65 − 17)/(16 − 4) = 4, sehingga U_7 = 29 dan U_13 = 53; jumlahnya tetap 82.\nJawaban B."
  },
  {
    "id": "mini-tiu10-19",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Dua toko menjual tas yang sama dengan harga awal Rp500.000. Toko A memberi diskon 20%, kemudian diskon tambahan 10% dari harga setelah diskon pertama. Toko B memberi diskon tunggal 30%. Tanpa biaya tambahan, pernyataan yang benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "harga di Toko B lebih murah Rp10.000",
        "score": 5
      },
      {
        "id": "b",
        "label": "harga di Toko A lebih murah Rp10.000",
        "score": 0
      },
      {
        "id": "c",
        "label": "harga akhir di kedua toko sama",
        "score": 0
      },
      {
        "id": "d",
        "label": "harga di Toko B lebih murah Rp25.000",
        "score": 0
      },
      {
        "id": "e",
        "label": "harga di Toko A lebih murah Rp25.000",
        "score": 0
      }
    ],
    "explanation": "Harga akhir Toko A = Rp500.000 × 0,80 × 0,90 = Rp360.000. Harga akhir Toko B = Rp500.000 × 0,70 = Rp350.000. Jadi Toko B lebih murah Rp10.000. Diskon 20% lalu 10% setara dengan diskon total 28%, bukan 30%, karena diskon kedua memakai harga yang sudah berkurang.\nJawaban A."
  },
  {
    "id": "mini-tiu10-20",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Suatu proyek direncanakan selesai oleh 12 pekerja dalam 18 hari kerja. Setelah bekerja selama 6 hari penuh, 4 pekerja dipindahkan ke proyek lain. Kemampuan setiap pekerja sama dan tetap. Jika pekerja yang tersisa melanjutkan pekerjaan tanpa tambahan tenaga, total waktu sejak proyek dimulai sampai selesai adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "18 hari kerja",
        "score": 0
      },
      {
        "id": "b",
        "label": "20 hari kerja",
        "score": 0
      },
      {
        "id": "c",
        "label": "21 hari kerja",
        "score": 0
      },
      {
        "id": "d",
        "label": "22 hari kerja",
        "score": 0
      },
      {
        "id": "e",
        "label": "24 hari kerja",
        "score": 5
      }
    ],
    "explanation": "Beban seluruh proyek = 12 × 18 = 216 hari-orang. Selama 6 hari pertama telah diselesaikan 12 × 6 = 72 hari-orang, sehingga sisa pekerjaan 144 hari-orang. Jumlah pekerja berikutnya 12 − 4 = 8 orang; mereka memerlukan 144/8 = 18 hari lagi. Total sejak awal = 6 + 18 = 24 hari kerja. Perbandingan berbalik nilai diterapkan pada sisa pekerjaan, bukan pada keseluruhan pekerjaan yang sudah sebagian selesai.\nJawaban E."
  },
  {
    "id": "mini-tiu10-21",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Mobil A berangkat dari terminal pukul 07.00 dengan kecepatan tetap 50 km/jam. Mobil B berangkat dari terminal yang sama pukul 07.30 dengan kecepatan tetap 75 km/jam. Keduanya menempuh jalan yang sama dan searah tanpa berhenti. Pukul berapa B menyusul A?",
    "choices": [
      {
        "id": "a",
        "label": "08.00",
        "score": 0
      },
      {
        "id": "b",
        "label": "08.30",
        "score": 5
      },
      {
        "id": "c",
        "label": "08.45",
        "score": 0
      },
      {
        "id": "d",
        "label": "09.00",
        "score": 0
      },
      {
        "id": "e",
        "label": "09.30",
        "score": 0
      }
    ],
    "explanation": "Pada pukul 07.30, A sudah berada 50 × 0,5 = 25 km di depan B. Karena keduanya searah, B menutup jarak dengan selisih kecepatan 75 − 50 = 25 km/jam. Waktu untuk menyusul = 25/25 = 1 jam sejak B berangkat, sehingga terjadi pukul 08.30. Pada saat itu A dan B masing-masing sudah menempuh 75 km.\nJawaban B."
  },
  {
    "id": "mini-tiu10-22",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui n merupakan bilangan bulat positif. Apakah n habis dibagi 6?\n\n(1) n habis dibagi 2.\n(2) n habis dibagi 3.",
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
    "explanation": "Pernyataan (1) belum cukup: n = 2 memberi jawaban tidak, sedangkan n = 6 memberi jawaban ya. Pernyataan (2) juga belum cukup: n = 3 memberi jawaban tidak, sedangkan n = 6 memberi jawaban ya. Jika keduanya digabungkan, n habis dibagi 2 dan 3, sehingga pasti habis dibagi KPK(2,3) = 6. Tidak perlu mengetahui nilai n secara tepat; kepastian jawaban ya sudah mencukupi.\nJawaban C."
  },
  {
    "id": "mini-tiu10-23",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui x dan y merupakan bilangan real. Berapakah nilai x + y?\n\n(1) 3x + 3y = 42.\n(2) x − y = 4.",
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
    "explanation": "Pernyataan (1) langsung memberi 3(x + y) = 42, sehingga x + y = 14. Jadi cukup meskipun nilai x dan y masing-masing belum diketahui. Pernyataan (2) tidak cukup: pasangan (5,1) dan (9,5) sama-sama mempunyai selisih 4, tetapi jumlahnya berbeda, yaitu 6 dan 14. Kecukupan dinilai terhadap jumlah yang ditanyakan, bukan terhadap keharusan menentukan setiap variabel.\nJawaban A."
  },
  {
    "id": "mini-tiu10-24",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Semua roti dijual dengan harga satuan yang sama, demikian pula semua susu kemasan. Tidak ada diskon maupun biaya tambahan. Berapakah harga satu roti?\n\n(1) Dua roti dan tiga susu kemasan berharga Rp24.000.\n(2) Empat roti dan enam susu kemasan berharga Rp48.000.",
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
    "explanation": "Misalkan harga roti r dan susu s. Pernyataan (1) memberi 2r + 3s = 24.000. Pernyataan (2) memberi 4r + 6s = 48.000, yang persis dua kali persamaan pertama. Jadi (2) tidak menambah informasi baru. Bahkan jika digabungkan, r = Rp3.000 dan s = Rp6.000 maupun r = Rp6.000 dan s = Rp4.000 sama-sama memenuhi kedua pernyataan. Harga roti belum unik. Dua persamaan tidak otomatis cukup jika keduanya saling bergantung.\nJawaban E."
  },
  {
    "id": "mini-tiu10-25",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Diketahui n merupakan bilangan bulat positif. Apakah n merupakan bilangan ganjil?\n\n(1) n² merupakan bilangan ganjil.\n(2) n + 1 habis dibagi 4.",
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
        "score": 5
      },
      {
        "id": "e",
        "label": "Bahkan kedua pernyataan bersama-sama masih tidak cukup.",
        "score": 0
      }
    ],
    "explanation": "Dari (1), kuadrat bilangan genap selalu genap, sedangkan kuadrat bilangan ganjil selalu ganjil. Karena n² ganjil, n pasti ganjil; pernyataan ini cukup. Dari (2), n + 1 = 4k untuk suatu bilangan bulat k, sehingga n = 4k − 1 yang selalu ganjil; pernyataan ini juga cukup. Kedua pernyataan masing-masing memastikan jawaban ya, walaupun tidak menentukan satu nilai n. Contoh n = 3 atau 7 juga menunjukkan kedua data konsisten.\nJawaban D."
  },
  {
    "id": "mini-tiu10-26",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Mesin A dan B bersama-sama dapat menyelesaikan satu pesanan dalam 4 jam. Mesin A sendiri dapat menyelesaikan pesanan yang sama dalam 6 jam. Jika laju kedua mesin tetap dan dapat dijumlahkan, mesin B sendiri memerlukan waktu ...",
    "choices": [
      {
        "id": "a",
        "label": "12 jam",
        "score": 5
      },
      {
        "id": "b",
        "label": "10 jam",
        "score": 0
      },
      {
        "id": "c",
        "label": "8 jam",
        "score": 0
      },
      {
        "id": "d",
        "label": "6 jam",
        "score": 0
      },
      {
        "id": "e",
        "label": "2 jam",
        "score": 0
      }
    ],
    "explanation": "Laju gabungan A dan B adalah 1/4 pesanan per jam, sedangkan laju A adalah 1/6 pesanan per jam. Laju B = 1/4 − 1/6 = 1/12 pesanan per jam. Maka waktu B sendiri adalah 12 jam. Yang dikurangkan adalah laju kerja, bukan selisih waktu 6 − 4.\nJawaban A."
  },
  {
    "id": "mini-tiu10-27",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Perbandingan jumlah kelereng Ardi dan Beni semula adalah 3 : 5. Setelah Beni memberikan 12 kelereng kepada Ardi, jumlah kelereng mereka menjadi sama. Jumlah kelereng Ardi semula adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "18 butir",
        "score": 0
      },
      {
        "id": "b",
        "label": "24 butir",
        "score": 0
      },
      {
        "id": "c",
        "label": "30 butir",
        "score": 0
      },
      {
        "id": "d",
        "label": "48 butir",
        "score": 0
      },
      {
        "id": "e",
        "label": "36 butir",
        "score": 5
      }
    ],
    "explanation": "Misalkan jumlah awal Ardi 3k dan Beni 5k. Setelah pemindahan, Ardi memiliki 3k + 12 dan Beni memiliki 5k − 12. Karena sama, 3k + 12 = 5k − 12, sehingga 2k = 24 dan k = 12. Jumlah awal Ardi = 3 × 12 = 36 butir. Pemindahan 12 kelereng menutup selisih sebanyak 24, karena satu pihak bertambah 12 dan pihak lain berkurang 12.\nJawaban E."
  },
  {
    "id": "mini-tiu10-28",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Rani menabung Rp4.000.000. Setelah 6 bulan, ia menambahkan tabungan Rp2.000.000. Semua dana dicairkan tepat 12 bulan sejak setoran pertama. Bank memberikan bunga tunggal 9% per tahun yang dihitung untuk setiap setoran sejak setoran itu masuk, tanpa biaya administrasi. Total bunga yang diperoleh Rani adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Rp360.000",
        "score": 0
      },
      {
        "id": "b",
        "label": "Rp450.000",
        "score": 5
      },
      {
        "id": "c",
        "label": "Rp540.000",
        "score": 0
      },
      {
        "id": "d",
        "label": "Rp600.000",
        "score": 0
      },
      {
        "id": "e",
        "label": "Rp720.000",
        "score": 0
      }
    ],
    "explanation": "Setoran pertama disimpan 12 bulan, sehingga bunganya Rp4.000.000 × 9% × 1 = Rp360.000. Setoran tambahan hanya disimpan 6 bulan, sehingga bunganya Rp2.000.000 × 9% × 6/12 = Rp90.000. Total bunga = Rp360.000 + Rp90.000 = Rp450.000. Seluruh saldo Rp6.000.000 tidak boleh dianggap mengendap selama satu tahun penuh.\nJawaban B."
  },
  {
    "id": "mini-tiu10-29",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Usia kakak saat ini 24 tahun dan usia adik 12 tahun. Berapa tahun lagi usia kakak menjadi 1,5 kali usia adik?",
    "choices": [
      {
        "id": "a",
        "label": "6 tahun",
        "score": 0
      },
      {
        "id": "b",
        "label": "8 tahun",
        "score": 0
      },
      {
        "id": "c",
        "label": "12 tahun",
        "score": 5
      },
      {
        "id": "d",
        "label": "16 tahun",
        "score": 0
      },
      {
        "id": "e",
        "label": "18 tahun",
        "score": 0
      }
    ],
    "explanation": "Misalkan waktu yang berlalu t tahun. Kedua usia bertambah dengan jumlah tahun yang sama, sehingga 24 + t = 1,5(12 + t). Jadi 24 + t = 18 + 1,5t, maka 6 = 0,5t dan t = 12. Saat itu kakak berusia 36 tahun dan adik 24 tahun, serta 36 = 1,5 × 24. Selisih usia tetap, sedangkan perbandingannya berubah.\nJawaban C."
  },
  {
    "id": "mini-tiu10-30",
    "category": "TIU",
    "topic": "Kemampuan Numerik",
    "prompt": "Pada pagi hari sebuah toko menjual 40% persediaan minuman. Siang harinya toko menerima tambahan 30 botol. Pada sore hari terjual 1/3 dari persediaan yang ada saat itu, sehingga tersisa 100 botol. Persediaan awal toko adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "150 botol",
        "score": 0
      },
      {
        "id": "b",
        "label": "180 botol",
        "score": 0
      },
      {
        "id": "c",
        "label": "190 botol",
        "score": 0
      },
      {
        "id": "d",
        "label": "200 botol",
        "score": 5
      },
      {
        "id": "e",
        "label": "250 botol",
        "score": 0
      }
    ],
    "explanation": "Telusuri dari akhir. Setelah 1/3 persediaan terjual, sisanya 2/3. Jadi persediaan sebelum penjualan sore = 100 ÷ (2/3) = 150 botol. Sebelum tambahan siang, jumlahnya 150 − 30 = 120 botol. Jumlah 120 ini adalah 60% persediaan awal, sehingga persediaan awal = 120/0,60 = 200 botol. Tambahan tetap 30 botol harus dipisahkan dari operasi persentase.\nJawaban D."
  },
  {
    "id": "mini-tiu10-31",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "Pilih gambar yang tepat untuk melengkapi analogi berikut.\n\n![Analogi bangun berlapis](/tryout/mini-tiu-3/soal-31.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-3/soal-31-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-3/soal-31-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-3/soal-31-c.svg",
        "score": 5
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-3/soal-31-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-3/soal-31-e.svg",
        "score": 0
      }
    ],
    "explanation": "Perhatikan badan utama dan pasangan satelit secara terpisah.\n1. Badan utama beserta anak panah, bidang arsir, dan titik kecil di dalamnya diputar 90° searah jarum jam.\n2. Pasangan satelit di luar badan (lingkaran dan belah ketupat) diputar 90° berlawanan arah jarum jam, terhadap pusat kotak.\n3. Isian hitam dan putih ditukar: badan, panah, titik kecil, dan kedua satelit berinversi. Bidang arsir tetap berarsir dan ikut putaran badan.\nPada Gambar 3, anak panah dalam badan mengarah ke kiri; setelah diputar 90° searah jarum jam, arahnya menjadi ke atas. Badan berubah hitam dan anak panah serta titik kecil menjadi putih. Pasangan satelit yang berada di kanan-atas berpindah ke kiri-atas dan menjadi putih. Semua ciri ini terdapat pada C. A salah arah badan; B salah arah perpindahan satelit; D salah warna badan; E salah warna satelit.\nJawaban C."
  },
  {
    "id": "mini-tiu10-32",
    "category": "TIU",
    "topic": "Figural Ketaksamaan",
    "prompt": "Pilih gambar yang berbeda dari keempat gambar lainnya.",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-3/soal-32-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-3/soal-32-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-3/soal-32-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-3/soal-32-d.svg",
        "score": 5
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-3/soal-32-e.svg",
        "score": 0
      }
    ],
    "explanation": "Gunakan A sebagai acuan. B, C, dan E adalah putaran A sebesar 90°, 180°, dan 270° searah jarum jam. Semua unsur ikut berputar: sirip berarsir, sirip hitam, panah, ujung bercabang, pasangan lingkaran kecil, dan belah ketupat.\nD dibuat dengan pencerminan benda A, kemudian diputar 90°. Setelah panah utama pada setiap gambar diarahkan ke atas, sirip berarsir dan ujung bercabang pada A/B/C/E berada di sisi kanan, sedangkan pada D keduanya berada di sisi kiri. Urutan melingkar unsur pada D terbalik; rotasi tidak dapat membalik urutan ini. Maka hanya D yang berbeda.\nJawaban D."
  },
  {
    "id": "mini-tiu10-33",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "Pilih gambar yang tepat untuk menggantikan tanda tanya.\n\n![Serial rotor dan penanda orbit](/tryout/mini-tiu-3/soal-33.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-3/soal-33-a.svg",
        "score": 5
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-3/soal-33-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-3/soal-33-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-3/soal-33-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-3/soal-33-e.svg",
        "score": 0
      }
    ],
    "explanation": "Ada tiga pola yang berjalan bersamaan.\n1. Rangka jari-jari dengan kepala panah dan bidang arsir kecil berputar 45° searah jarum jam pada setiap langkah. Kepala panah berturut-turut mengarah ke atas, kanan-atas, kanan, kanan-bawah, dan bawah. Jadi pada kotak keempat kepala panah harus ke kanan-bawah.\n2. Titik hitam pada lingkaran luar bergerak 90° berlawanan arah jarum jam: atas → kiri → bawah → kanan → atas. Jadi pada kotak keempat titik harus di kanan.\n3. Belah ketupat di pusat berganti putih → hitam → putih → hitam → putih. Jadi pada kotak keempat pusat berwarna hitam.\nHanya A memenuhi ketiganya. B salah posisi titik; C dan E salah orientasi rangka; D salah warna pusat.\nJawaban A."
  },
  {
    "id": "mini-tiu10-34",
    "category": "TIU",
    "topic": "Figural Matriks 9 Kotak",
    "prompt": "Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks ruas dan penanda](/tryout/mini-tiu-3/soal-34.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-3/soal-34-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-3/soal-34-b.svg",
        "score": 5
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-3/soal-34-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-3/soal-34-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-3/soal-34-e.svg",
        "score": 0
      }
    ],
    "explanation": "Dua aturan berlaku pada setiap baris.\n1. Ruas garis pada kolom ketiga merupakan hasil tumpang tindih kolom pertama dan kedua: ruas yang ada pada keduanya dihapus, sedangkan ruas yang hanya ada pada salah satunya dipertahankan (XOR). Enam titik patokan tetap ditampilkan.\nPada baris terakhir, tiga ruas yang sama adalah sisi kanan tegak, sisi kiri tegak, dan diagonal dari kanan-bawah ke kiri-atas. Ketiganya dihapus. Yang tersisa adalah sisi atas-kanan, sisi bawah-kiri, garis tegak tengah, serta diagonal kanan-atas ke kiri-bawah.\n2. Titik besar di sudut bergerak satu sudut searah jarum jam dari kolom pertama ke kolom berikutnya. Pada baris terakhir urutannya kanan-bawah → kiri-bawah → kiri-atas.\nB memuat empat ruas yang benar dan penanda di kiri-atas. A memiliki ruas yang benar tetapi penanda salah; C mempertahankan semua ruas gabungan; D hanya mempertahankan ruas yang sama; E keliru memilih salah satu diagonal.\nJawaban B."
  },
  {
    "id": "mini-tiu10-35",
    "category": "TIU",
    "topic": "Figural Matriks 9 Kotak",
    "prompt": "Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks bangun bersarang dan arsir](/tryout/mini-tiu-3/soal-35.svg)",
    "choices": [
      {
        "id": "a",
        "label": "[img]/tryout/mini-tiu-3/soal-35-a.svg",
        "score": 0
      },
      {
        "id": "b",
        "label": "[img]/tryout/mini-tiu-3/soal-35-b.svg",
        "score": 0
      },
      {
        "id": "c",
        "label": "[img]/tryout/mini-tiu-3/soal-35-c.svg",
        "score": 0
      },
      {
        "id": "d",
        "label": "[img]/tryout/mini-tiu-3/soal-35-d.svg",
        "score": 0
      },
      {
        "id": "e",
        "label": "[img]/tryout/mini-tiu-3/soal-35-e.svg",
        "score": 5
      }
    ],
    "explanation": "Setiap baris dan kolom memuat tiga variasi lengkap untuk masing-masing atribut.\n1. Bangun terluar memiliki 4, 5, atau 6 sisi. Pada baris terakhir sudah ada segienam dan segiempat, sehingga kotak kosong harus memuat segilima. Kolom terakhir juga sudah memuat segienam dan segiempat.\n2. Bangun kecil di pusat memiliki 3, 4, atau 5 sisi. Pada baris terakhir sudah ada segilima dan segiempat, sehingga yang belum ada adalah segitiga. Kolom terakhir juga belum memiliki segitiga.\n3. Isian bidang luar bergiliran putih, arsir, dan hitam, masing-masing sekali dalam setiap baris dan kolom. Baris terakhir telah memuat arsir dan hitam, sehingga isian yang hilang adalah putih.\nJawaban harus memuat segilima luar, segitiga di pusat, dan bidang luar putih. Hanya E memenuhi seluruh atribut. A salah jumlah sisi luar; B salah bangun pusat; C dan D salah isian bidang.\nJawaban E."
  }
];
