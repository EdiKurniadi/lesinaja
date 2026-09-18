import type { Question } from "./types";

export const MINI_TIU_2_QUESTIONS: Question[] = [
  {
    "id": "mini-tiu2-01",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "STETOSKOP : AUSKULTASI = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Termometer : Kalibrasi",
        "score": 0
      },
      {
        "id": "b",
        "label": "Sfignomanometer : Hipertensi",
        "score": 0
      },
      {
        "id": "c",
        "label": "Barometer : Tekanan Udara",
        "score": 0
      },
      {
        "id": "d",
        "label": "Seismograf : Deteksi Gempa",
        "score": 5
      },
      {
        "id": "e",
        "label": "Mikroskop : Lensa",
        "score": 0
      }
    ],
    "explanation": "Hubungan alat dengan fungsi tindakan pengamatan atau diagnostiknya: Stetoskop digunakan oleh dokter untuk melakukan tindakan auskultasi (mendengarkan bunyi organ dalam tubuh), sebagaimana seismograf digunakan untuk melakukan tindakan deteksi gempa bumi."
  },
  {
    "id": "mini-tiu2-02",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "KEDELAI : TEMPE = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Gandum : Tepung",
        "score": 0
      },
      {
        "id": "b",
        "label": "Getah Karet : Ban",
        "score": 5
      },
      {
        "id": "c",
        "label": "Beras : Padi",
        "score": 0
      },
      {
        "id": "d",
        "label": "Susu : Sapi",
        "score": 0
      },
      {
        "id": "e",
        "label": "Kayu : Hutan",
        "score": 0
      }
    ],
    "explanation": "Hubungan bahan baku mentah dengan produk olahan manufaktur jadi: Kedelai merupakan bahan mentah yang difermentasi dan diolah menjadi tempe, sebagaimana getah karet (lateks) merupakan bahan mentah yang diolah menjadi ban."
  },
  {
    "id": "mini-tiu2-03",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "GERIMIS : HUJAN : BADAI = ... : ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Angin : Topan : Puting Beliung",
        "score": 0
      },
      {
        "id": "b",
        "label": "Dingin : Sejuk : Beku",
        "score": 0
      },
      {
        "id": "c",
        "label": "Hangat : Panas : Mendidih",
        "score": 5
      },
      {
        "id": "d",
        "label": "Senja : Malam : Fajar",
        "score": 0
      },
      {
        "id": "e",
        "label": "Lapar : Dahaga : Kenyang",
        "score": 0
      }
    ],
    "explanation": "Hubungan gradasi intensitas bertingkat dari skala rendah, sedang, hingga sangat tinggi/ekstrem: Gerimis meningkat intensitasnya menjadi hujan, lalu memuncak menjadi badai. Pola yang setara: Hangat meningkat menjadi panas, lalu memuncak pada kondisi mendidih."
  },
  {
    "id": "mini-tiu2-04",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "PESAWAT : HANGGAR = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Kereta Api : Depo",
        "score": 5
      },
      {
        "id": "b",
        "label": "Kapal : Dermaga",
        "score": 0
      },
      {
        "id": "c",
        "label": "Mobil : Jalan Tol",
        "score": 0
      },
      {
        "id": "d",
        "label": "Helikopter : Helipad",
        "score": 0
      },
      {
        "id": "e",
        "label": "Bus : Terminal",
        "score": 0
      }
    ],
    "explanation": "Hubungan moda transportasi dengan fasilitas khusus penyimpanan dan perawatan teknisnya: Pesawat diparkir dan dirawat di hanggar, sebagaimana rangkaian kereta api disimpan dan dirawat di depo."
  },
  {
    "id": "mini-tiu2-05",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Semua prajurit korps zeni memiliki sertifikasi penjinak bahan peledak.\nSebagian penyelam taktis adalah prajurit korps zeni.\n\nSimpulan yang paling sah adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Semua penyelam taktis memiliki sertifikasi penjinak bahan peledak.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Sebagian penyelam taktis memiliki sertifikasi penjinak bahan peledak.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Sebagian prajurit yang memiliki sertifikasi bukan penyelam taktis.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Tidak ada penyelam taktis yang bertugas di korps zeni.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Semua orang yang memiliki sertifikasi penjinak bahan peledak adalah penyelam taktis.",
        "score": 0
      }
    ],
    "explanation": "Berdasarkan kaidah silogisme kategorik, premis universal (Semua A adalah B) digabungkan dengan premis partikular (Sebagian C adalah A) menghasilkan kesimpulan partikular: Sebagian C adalah B (Sebagian penyelam taktis memiliki sertifikasi penjinak bahan peledak)."
  },
  {
    "id": "mini-tiu2-06",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Jika debit air bendungan melampaui batas siaga satu, maka sirine peringatan dini berbunyi.\nJika sirine peringatan dini berbunyi, maka warga bantaran sungai dievakuasi ke dataran tinggi.\nKenyataan di lapangan membuktikan bahwa warga bantaran sungai tidak dievakuasi ke dataran tinggi.\n\nSimpulan yang sah adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Debit air bendungan melampaui batas siaga satu, tetapi sirine mengalami kerusakan teknis.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Sirine peringatan dini berbunyi pelan sehingga warga tidak mendengar panggilan evakuasi.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Debit air bendungan tidak melampaui batas siaga satu.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Warga bantaran sungai memilih bertahan di rumah masing-masing.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Petugas bendungan membuka pintu air darurat secara bertahap.",
        "score": 0
      }
    ],
    "explanation": "Kaidah silogisme hipotetik berantai dan Modus Tollens:\nPremis 1: P → Q\nPremis 2: Q → R\nEkuivalen: P → R\nFakta: ~R (warga bantaran sungai tidak dievakuasi)\nMaka kesimpulan yang sah adalah ~P (Debit air bendungan tidak melampaui batas siaga satu)."
  },
  {
    "id": "mini-tiu2-07",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Tidak ada pejabat publik yang berintegritas menerima gratifikasi dalam bentuk apa pun.\nSebagian panitia pengadaan logistik kedinasan adalah pejabat publik yang berintegritas.\n\nSimpulan yang tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Semua panitia pengadaan logistik kedinasan tidak menerima gratifikasi.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Sebagian panitia pengadaan logistik kedinasan tidak menerima gratifikasi dalam bentuk apa pun.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Semua orang yang menerima gratifikasi adalah panitia pengadaan logistik.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Tidak ada panitia pengadaan logistik yang merupakan pejabat publik.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Semua pejabat publik bertugas sebagai panitia pengadaan logistik.",
        "score": 0
      }
    ],
    "explanation": "Kombinasi premis universal negatif (Semua A bukan B) dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan partikular negatif: Sebagian C bukan B (Sebagian panitia pengadaan logistik kedinasan tidak menerima gratifikasi dalam bentuk apa pun)."
  },
  {
    "id": "mini-tiu2-08",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Delapan perwira delegasi (Agus, Bagas, Candra, Danu, Edwin, Fajar, Gilang, dan Haris) mengadakan rapat koordinasi mengelilingi meja bundar dengan 8 kursi bernomor 1 sampai 8 berurutan searah jarum jam. Semua perwira duduk menghadap ke pusat meja dengan ketentuan:\n- Agus duduk di kursi nomor 1.\n- Fajar duduk berhadapan langsung dengan Agus.\n- Danu duduk tepat di antara Agus dan Edwin.\n- Candra duduk berhadapan langsung dengan Edwin.\n- Haris duduk di kursi nomor 6.\n- Gilang duduk berhadapan langsung dengan Bagas.\n- Bagas tidak duduk bersebelahan dengan Agus.\n\nSiapakah perwira yang duduk di kursi nomor 4?",
    "choices": [
      {
        "id": "a",
        "label": "Bagas",
        "score": 5
      },
      {
        "id": "b",
        "label": "Candra",
        "score": 0
      },
      {
        "id": "c",
        "label": "Danu",
        "score": 0
      },
      {
        "id": "d",
        "label": "Edwin",
        "score": 0
      },
      {
        "id": "e",
        "label": "Gilang",
        "score": 0
      }
    ],
    "explanation": "Analisis posisi meja bundar 8 kursi (berhadapan = selisih 4 kursi):\n1. Agus di kursi 1. Fajar berhadapan dengan Agus => Fajar di kursi 1 + 4 = 5.\n2. Haris di kursi 6.\n3. Danu duduk tepat di antara Agus (1) dan Edwin. Dua kursi bersebelahan dengan kursi 1 adalah kursi 2 dan 8. Jika Danu di kursi 8 dan Edwin di kursi 7, maka Candra (yang berhadapan dengan Edwin) harus di kursi 3, menyisakan kursi 2 dan 4 untuk Bagas dan Gilang. Namun kursi 2 dan 4 tidak saling berhadapan (kursi 2 berhadapan dengan kursi 6 yang sudah diisi Haris). Jadi Danu tidak mungkin di kursi 8.\n4. Maka Danu pasti di kursi 2, dan Edwin di kursi 3.\n5. Candra berhadapan dengan Edwin (kursi 3) => Candra di kursi 3 + 4 = 7.\n6. Kursi yang tersisa adalah nomor 4 dan 8 untuk Bagas dan Gilang.\n7. Karena Bagas tidak boleh bersebelahan dengan Agus (kursi 1), maka Bagas tidak boleh di kursi 8. Jadi Bagas duduk di kursi nomor 4, dan Gilang di kursi nomor 8.\nKesimpulan: Perwira di kursi nomor 4 adalah Bagas."
  },
  {
    "id": "mini-tiu2-09",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Berdasarkan susunan tempat duduk pada rapat koordinasi tersebut, siapakah perwira yang duduk berhadapan langsung dengan Danu?",
    "choices": [
      {
        "id": "a",
        "label": "Bagas",
        "score": 0
      },
      {
        "id": "b",
        "label": "Edwin",
        "score": 0
      },
      {
        "id": "c",
        "label": "Fajar",
        "score": 0
      },
      {
        "id": "d",
        "label": "Gilang",
        "score": 0
      },
      {
        "id": "e",
        "label": "Haris",
        "score": 5
      }
    ],
    "explanation": "Susunan posisi duduk melingkar searah jarum jam:\nKursi 1: Agus\nKursi 2: Danu\nKursi 3: Edwin\nKursi 4: Bagas\nKursi 5: Fajar\nKursi 6: Haris\nKursi 7: Candra\nKursi 8: Gilang\nPada meja bundar 8 kursi, posisi yang saling berhadapan memiliki selisih nomor 4. Kursi nomor 2 (Danu) berhadapan langsung dengan kursi nomor 2 + 4 = 6, yaitu Haris."
  },
  {
    "id": "mini-tiu2-10",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Jika Candra bertukar tempat duduk dengan Fajar, siapakah dua orang perwira yang sekarang duduk tepat mengapit Fajar?",
    "choices": [
      {
        "id": "a",
        "label": "Agus dan Danu",
        "score": 0
      },
      {
        "id": "b",
        "label": "Danu dan Bagas",
        "score": 0
      },
      {
        "id": "c",
        "label": "Haris dan Gilang",
        "score": 5
      },
      {
        "id": "d",
        "label": "Bagas dan Haris",
        "score": 0
      },
      {
        "id": "e",
        "label": "Edwin dan Bagas",
        "score": 0
      }
    ],
    "explanation": "Pada susunan awal, kursi nomor 7 ditempati oleh Candra, yang diapit oleh Haris di kursi 6 dan Gilang di kursi 8.\nKetika Fajar (kursi 5) bertukar tempat duduk dengan Candra (kursi 7), posisi kursi nomor 7 sekarang ditempati oleh Fajar.\nDengan demikian, dua perwira yang duduk tepat di sebelah kiri dan kanan mengapit Fajar adalah Haris (kursi 6) dan Gilang (kursi 8)."
  },
  {
    "id": "mini-tiu2-11",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Hasil dari $\\frac{3\\frac{1}{3} - 1\\frac{1}{2}}{2\\frac{1}{4} + \\frac{5}{6}} \\times \\frac{37}{22}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$\\frac{1}{2}$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$\\frac{3}{4}$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$1$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$\\frac{4}{3}$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$\\frac{37}{22}$",
        "score": 0
      }
    ],
    "explanation": "Hitung pembilang: $3\\frac{1}{3} - 1\\frac{1}{2} = \\frac{10}{3} - \\frac{3}{2} = \\frac{20 - 9}{6} = \\frac{11}{6}$.\nHitung penyebut: $2\\frac{1}{4} + \\frac{5}{6} = \\frac{9}{4} + \\frac{5}{6} = \\frac{27 + 10}{12} = \\frac{37}{12}$.\nNilai pecahan utama: $\\frac{11/6}{37/12} = \\frac{11}{6} \\times \\frac{12}{37} = \\frac{22}{37}$.\nHasil perkalian akhir: $\\frac{22}{37} \\times \\frac{37}{22} = 1$."
  },
  {
    "id": "mini-tiu2-12",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $62{,}5\\% \\times 0{,}72 + 37{,}5\\% \\times 0{,}48$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$0{,}54$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$0{,}58$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$0{,}63$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$0{,}68$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$0{,}75$",
        "score": 0
      }
    ],
    "explanation": "Gunakan bentuk pecahan istimewa:\n$62{,}5\\% = \\frac{5}{8}$ dan $37{,}5\\% = \\frac{3}{8}$.\nBagian pertama: $\\frac{5}{8} \\times 0{,}72 = 5 \\times 0{,}09 = 0{,}45$.\nBagian kedua: $\\frac{3}{8} \\times 0{,}48 = 3 \\times 0{,}06 = 0{,}18$.\nJumlahkan keduanya: $0{,}45 + 0{,}18 = 0{,}63$."
  },
  {
    "id": "mini-tiu2-13",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $\\frac{(64{,}5)^2 - (35{,}5)^2}{29}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$29$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$58$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$100$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$129$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$200$",
        "score": 0
      }
    ],
    "explanation": "Gunakan sifat faktorisasi selisih dua kuadrat: $a^2 - b^2 = (a + b)(a - b)$.\n$a + b = 64{,}5 + 35{,}5 = 100$.\n$a - b = 64{,}5 - 35{,}5 = 29$.\nPembilang $= 100 \\times 29$.\nHasil akhir: $\\frac{100 \\times 29}{29} = 100$."
  },
  {
    "id": "mini-tiu2-14",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $(73 \\times 0{,}625) + (27 \\times 0{,}625) - \\sqrt{1\\frac{9}{16}}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$58{,}75$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$60{,}00$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$61{,}25$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$62{,}50$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$63{,}75$",
        "score": 0
      }
    ],
    "explanation": "Gunakan sifat distributif perkalian:\n$(73 \\times 0{,}625) + (27 \\times 0{,}625) = 0{,}625 \\times (73 + 27) = 0{,}625 \\times 100 = 62{,}5$.\nSederhanakan bentuk pecahan di dalam akar:\n$\\sqrt{1\\frac{9}{16}} = \\sqrt{\\frac{25}{16}} = \\frac{5}{4} = 1{,}25$.\nHasil pengurangan: $62{,}5 - 1{,}25 = 61{,}25$."
  },
  {
    "id": "mini-tiu2-15",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $\\frac{3^{2026} - 3^{2024}}{3^{2024} + 3^{2023}}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$2$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$3$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$6$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$8$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$9$",
        "score": 0
      }
    ],
    "explanation": "Faktorkan eksponen terkecil pada masing-masing pembilang dan penyebut:\nPembilang: $3^{2024}(3^2 - 1) = 3^{2024}(9 - 1) = 8 \\times 3^{2024}$.\nPenyebut: $3^{2023}(3^1 + 1) = 3^{2023}(4) = 4 \\times 3^{2023}$.\nBagi kedua bentuk:\n$\\frac{8 \\times 3^{2024}}{4 \\times 3^{2023}} = \\frac{8}{4} \\times 3^{2024 - 2023} = 2 \\times 3^1 = 6$."
  },
  {
    "id": "mini-tiu2-16",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Jika diketahui $\\frac{2x + 4}{7} + \\frac{3x - 3}{4} = 5$, maka nilai dari $2x - 3$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$5$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$7$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$9$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$11$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$13$",
        "score": 0
      }
    ],
    "explanation": "Kalikan kedua ruas persamaan dengan KPK dari 7 dan 4, yaitu 28:\n$4(2x + 4) + 7(3x - 3) = 28 \\times 5$\n$8x + 16 + 21x - 21 = 140$\n$29x - 5 = 140$\n$29x = 145 \\implies x = \\frac{145}{29} = 5$.\nNilai dari $2x - 3 = 2(5) - 3 = 10 - 3 = 7$."
  },
  {
    "id": "mini-tiu2-17",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "3, 8, 6, 16, 12, 32, 24, ..., ...",
    "choices": [
      {
        "id": "a",
        "label": "48, 64",
        "score": 0
      },
      {
        "id": "b",
        "label": "64, 48",
        "score": 5
      },
      {
        "id": "c",
        "label": "64, 36",
        "score": 0
      },
      {
        "id": "d",
        "label": "48, 48",
        "score": 0
      },
      {
        "id": "e",
        "label": "36, 64",
        "score": 0
      }
    ],
    "explanation": "Barisan ini merupakan deret dua larik berseling:\n- Larik ganjil (posisi 1, 3, 5, 7, 9): $3, 6, 12, 24, \\dots$ (tiap suku dikali 2). Maka suku ke-9 adalah $24 \\times 2 = 48$.\n- Larik genap (posisi 2, 4, 6, 8): $8, 16, 32, \\dots$ (tiap suku dikali 2). Maka suku ke-8 adalah $32 \\times 2 = 64$.\nUrutan dua suku berikutnya berturut-turut adalah 64 dan 48."
  },
  {
    "id": "mini-tiu2-18",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "4, 7, 13, 22, 34, ...",
    "choices": [
      {
        "id": "a",
        "label": "46",
        "score": 0
      },
      {
        "id": "b",
        "label": "48",
        "score": 0
      },
      {
        "id": "c",
        "label": "49",
        "score": 5
      },
      {
        "id": "d",
        "label": "51",
        "score": 0
      },
      {
        "id": "e",
        "label": "54",
        "score": 0
      }
    ],
    "explanation": "Pola selisih antarsuku yang berurutan:\n$7 - 4 = +3$\n$13 - 7 = +6$\n$22 - 13 = +9$\n$34 - 22 = +12$\nSelisihnya membentuk barisan kelipatan 3 (+3, +6, +9, +12, ...). Selisih berikutnya adalah $+15$.\nMaka suku selanjutnya adalah $34 + 15 = 49$."
  },
  {
    "id": "mini-tiu2-19",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "2, 5, 7, 12, 19, 31, ...",
    "choices": [
      {
        "id": "a",
        "label": "42",
        "score": 0
      },
      {
        "id": "b",
        "label": "48",
        "score": 0
      },
      {
        "id": "c",
        "label": "50",
        "score": 5
      },
      {
        "id": "d",
        "label": "52",
        "score": 0
      },
      {
        "id": "e",
        "label": "62",
        "score": 0
      }
    ],
    "explanation": "Barisan bertipe Fibonacci di mana setiap suku setelah suku kedua merupakan penjumlahan dari dua suku sebelumnya:\n$2 + 5 = 7$\n$5 + 7 = 12$\n$7 + 12 = 19$\n$12 + 19 = 31$\nSuku berikutnya adalah $19 + 31 = 50$."
  },
  {
    "id": "mini-tiu2-20",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "B, D, G, K, P, ...",
    "choices": [
      {
        "id": "a",
        "label": "T",
        "score": 0
      },
      {
        "id": "b",
        "label": "U",
        "score": 0
      },
      {
        "id": "c",
        "label": "V",
        "score": 5
      },
      {
        "id": "d",
        "label": "W",
        "score": 0
      },
      {
        "id": "e",
        "label": "X",
        "score": 0
      }
    ],
    "explanation": "Konversi posisi huruf ke dalam bilangan alfabet:\nB (2) → (+2) → D (4)\nD (4) → (+3) → G (7)\nG (7) → (+4) → K (11)\nK (11) → (+5) → P (16)\nPerubahan selisih bertambah satu setiap langkah (+2, +3, +4, +5, +6).\nSuku berikutnya: $16 + 6 = 22$. Huruf ke-22 dalam alfabet adalah V."
  },
  {
    "id": "mini-tiu2-21",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui $P = \\frac{18}{25}$ dan $Q = 72{,}5\\%$.\nPernyataan yang paling tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$P > Q$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$P < Q$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$P = Q$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$P + Q = 1$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $P$ dan $Q$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Ubah nilai $P$ ke bentuk desimal atau persen:\n$P = \\frac{18}{25} = \\frac{72}{100} = 72\\% = 0{,}72$.\nNilai $Q = 72{,}5\\% = 0{,}725$.\nKarena $0{,}72 < 0{,}725$, maka dapat dipastikan bahwa $P < Q$."
  },
  {
    "id": "mini-tiu2-22",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui $a > 0$ dan $b < 0$. Jika $P = a - b$ dan $Q = b - a$, hubungan yang paling tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$P > Q$",
        "score": 5
      },
      {
        "id": "b",
        "label": "$P < Q$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$P = Q$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$P \\le Q$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $P$ dan $Q$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Karena $a > 0$ (positif) dan $b < 0$ (negatif), maka $-b > 0$ (positif).\n$P = a - b = a + (-b) > 0$ (penjumlahan dua bilangan positif selalu menghasilkan bilangan positif).\n$Q = b - a = -(a - b) < 0$ (negatif dari bilangan positif selalu menghasilkan bilangan negatif).\nKarena setiap bilangan positif selalu lebih besar daripada bilangan negatif, maka $P > Q$."
  },
  {
    "id": "mini-tiu2-23",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Suatu kawat sepanjang $88\\text{ cm}$ dibentuk menjadi lingkaran dengan jari-jari $r$ dan luas sebesar $x$. Kawat lain yang sama panjangnya dibentuk menjadi persegi dengan sisi $s$ dan luas sebesar $y$. Jika $\\pi = \\frac{22}{7}$, pernyataan yang tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$x > y$",
        "score": 5
      },
      {
        "id": "b",
        "label": "$x < y$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$x = y$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$x + y = 1000$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $x$ dan $y$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Keliling lingkaran $= 2 \\times \\frac{22}{7} \\times r = 88 \\implies \\frac{44}{7}r = 88 \\implies r = 14\\text{ cm}$.\nLuas lingkaran ($x$) $= \\frac{22}{7} \\times 14^2 = \\frac{22}{7} \\times 196 = 22 \\times 28 = 616\\text{ cm}^2$.\nKeliling persegi $= 4s = 88 \\implies s = 22\\text{ cm}$.\nLuas persegi ($y$) $= 22^2 = 484\\text{ cm}^2$.\nKarena $616 > 484$, maka terbukti $x > y$."
  },
  {
    "id": "mini-tiu2-24",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui $x^2 = 64$ dan $y = \\sqrt[3]{-512}$.\nPernyataan yang paling tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$x > y$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$x < y$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$x = y$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$x \\ge y$",
        "score": 5
      },
      {
        "id": "e",
        "label": "Hubungan $x$ dan $y$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Dari persamaan kuadrat $x^2 = 64$, diperoleh dua kemungkinan nilai: $x = 8$ atau $x = -8$.\nDari bentuk akar pangkat tiga: $y = \\sqrt[3]{-512} = -8$ (karena $(-8)^3 = -512$).\n- Jika $x = 8$, maka $x > y$ ($8 > -8$).\n- Jika $x = -8$, maka $x = y$ ($-8 = -8$).\nKarena pada semua kemungkinan nilai $x$ bernilai lebih besar atau sama dengan $y$, simpulan yang pasti benar adalah $x \\ge y$."
  },
  {
    "id": "mini-tiu2-25",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Suatu proyek pembangunan gedung pelatihan taruna dijadwalkan selesai dalam 45 hari oleh 20 pekerja. Setelah dikerjakan selama 15 hari, pekerjaan terpaksa dihentikan selama 6 hari akibat cuaca buruk. Jika proyek harus selesai tepat waktu sesuai batas rencana semula, berapa orang tambahan pekerja yang diperlukan?",
    "choices": [
      {
        "id": "a",
        "label": "4 orang",
        "score": 0
      },
      {
        "id": "b",
        "label": "5 orang",
        "score": 5
      },
      {
        "id": "c",
        "label": "6 orang",
        "score": 0
      },
      {
        "id": "d",
        "label": "8 orang",
        "score": 0
      },
      {
        "id": "e",
        "label": "10 orang",
        "score": 0
      }
    ],
    "explanation": "Sisa hari normal awal $= 45 - 15 = 30$ hari dengan 20 pekerja.\nTotal beban sisa pekerjaan $= 30 \\times 20 = 600$ hari-pekerja.\nWaktu yang tersisa setelah pekerjaan terhenti 6 hari $= 30 - 6 = 24$ hari.\nJumlah pekerja yang dibutuhkan agar selesai dalam 24 hari: $\\frac{600}{24} = 25$ pekerja.\nTambahan pekerja yang harus didatangkan $= 25 - 20 = 5$ orang pekerja."
  },
  {
    "id": "mini-tiu2-26",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Mobil patroli A berangkat dari markas menuju pos perbatasan pada pukul 07.15 dengan kecepatan rata-rata $60\\text{ km/jam}$. Pada pukul 07.45, mobil patroli B menyusul dari pos yang sama melalui rute yang sama dengan kecepatan rata-rata $80\\text{ km/jam}$. Pada pukul berapakah mobil patroli B berhasil menyusul mobil patroli A?",
    "choices": [
      {
        "id": "a",
        "label": "Pukul 08.45",
        "score": 0
      },
      {
        "id": "b",
        "label": "Pukul 09.00",
        "score": 0
      },
      {
        "id": "c",
        "label": "Pukul 09.15",
        "score": 5
      },
      {
        "id": "d",
        "label": "Pukul 09.30",
        "score": 0
      },
      {
        "id": "e",
        "label": "Pukul 09.45",
        "score": 0
      }
    ],
    "explanation": "Selisih waktu keberangkatan $= 07.45 - 07.15 = 30\\text{ menit} = 0{,}5\\text{ jam}$.\nJarak yang sudah ditempuh mobil A saat mobil B mulai berangkat $= 60\\text{ km/jam} \\times 0{,}5\\text{ jam} = 30\\text{ km}$.\nWaktu yang diperlukan mobil B untuk menyusul:\n$t = \\frac{\\Delta s}{v_B - v_A} = \\frac{30}{80 - 60} = \\frac{30}{20} = 1{,}5\\text{ jam} = 1\\text{ jam } 30\\text{ menit}$.\nWaktu saat mobil B menyusul $= 07.45 + 01.30 = 09.15$."
  },
  {
    "id": "mini-tiu2-27",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Koperasi kedinasan membeli pakaian seragam seharga $\\text{Rp}200.000$ per stel. Pengurus koperasi ingin menetapkan harga banderol awal sedemikian rupa sehingga setelah memberikan diskon bertingkat sebesar $20\\% + 10\\%$, koperasi tetap memperoleh keuntungan bersih sebesar $8\\%$ dari harga beli. Berapakah harga banderol awal yang harus dipasang?",
    "choices": [
      {
        "id": "a",
        "label": "$\\text{Rp}270.000$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$\\text{Rp}280.000$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$\\text{Rp}300.000$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$\\text{Rp}320.000$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$\\text{Rp}350.000$",
        "score": 0
      }
    ],
    "explanation": "Harga beli $= \\text{Rp}200.000$.\nLaba bersih yang diinginkan $= 8\\% \\times 200.000 = \\text{Rp}16.000$.\nMaka harga jual bersih setelah diskon $= 200.000 + 16.000 = \\text{Rp}216.000$.\nFaktor pembayaran untuk diskon bertingkat $20\\% + 10\\%$:\n$(1 - 0{,}20) \\times (1 - 0{,}10) = 0{,}80 \\times 0{,}90 = 0{,}72$.\nArtinya, harga jual $= 72\\%$ dari harga banderol.\nHarga banderol $= \\frac{216.000}{0{,}72} = \\text{Rp}300.000$."
  },
  {
    "id": "mini-tiu2-28",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Nilai rata-rata tes skolastik dari sebuah kelas taruna yang berjumlah 36 orang adalah 78. Jika nilai rata-rata dari 20 taruna putra adalah 75, berapakah nilai rata-rata dari taruna putri di kelas tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "$80{,}50$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$81{,}25$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$81{,}75$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$82{,}00$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$82{,}50$",
        "score": 0
      }
    ],
    "explanation": "Banyaknya taruna putri di kelas $= 36 - 20 = 16$ orang.\nTotal nilai seluruh kelas $= 36 \\times 78 = 2.808$.\nTotal nilai taruna putra $= 20 \\times 75 = 1.500$.\nTotal nilai taruna putri $= 2.808 - 1.500 = 1.308$.\nNilai rata-rata taruna putri $= \\frac{1.308}{16} = 81{,}75$."
  },
  {
    "id": "mini-tiu2-29",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Dari 100 orang calon taruna yang mengikuti seleksi pantukhir, tercatat 65 orang dinyatakan lulus tes kesamaptaan fisik, 55 orang dinyatakan lulus tes psikologi, dan 12 orang tidak lulus pada kedua tes tersebut. Berapakah jumlah calon taruna yang berhasil lulus kedua tes tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "28 orang",
        "score": 0
      },
      {
        "id": "b",
        "label": "30 orang",
        "score": 0
      },
      {
        "id": "c",
        "label": "32 orang",
        "score": 5
      },
      {
        "id": "d",
        "label": "35 orang",
        "score": 0
      },
      {
        "id": "e",
        "label": "38 orang",
        "score": 0
      }
    ],
    "explanation": "Jumlah peserta yang lulus sedikitnya satu tes: $n(A \\cup B) = 100 - 12 = 88$ orang.\nGunakan prinsip inklusi-eksklusi himpunan:\n$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$\n$88 = 65 + 55 - n(A \\cap B)$\n$88 = 120 - n(A \\cap B)$\n$n(A \\cap B) = 120 - 88 = 32$ orang."
  },
  {
    "id": "mini-tiu2-30",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Empat tahun yang lalu, usia seorang inspektur adalah 5 kali usia ajudannya. Enam tahun yang akan datang, usia inspektur tersebut menjadi 3 kali usia ajudannya. Berapakah usia ajudan tersebut saat ini?",
    "choices": [
      {
        "id": "a",
        "label": "12 tahun",
        "score": 0
      },
      {
        "id": "b",
        "label": "14 tahun",
        "score": 5
      },
      {
        "id": "c",
        "label": "16 tahun",
        "score": 0
      },
      {
        "id": "d",
        "label": "18 tahun",
        "score": 0
      },
      {
        "id": "e",
        "label": "20 tahun",
        "score": 0
      }
    ],
    "explanation": "Misalkan usia inspektur sekarang $= I$ dan usia ajudan sekarang $= A$.\nKondisi 4 tahun lalu: $I - 4 = 5(A - 4) \\implies I - 4 = 5A - 20 \\implies I = 5A - 16$.\nKondisi 6 tahun mendatang: $I + 6 = 3(A + 6) \\implies I + 6 = 3A + 18 \\implies I = 3A + 12$.\nSamakan kedua persamaan nilai $I$:\n$5A - 16 = 3A + 12$\n$5A - 3A = 12 + 16$\n$2A = 28 \\implies A = 14$ tahun.\nJadi usia ajudan saat ini adalah 14 tahun."
  },
  {
    "id": "mini-tiu2-31",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"41,12 14,72 68,72\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"52\" r=\"8\" fill=\"black\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"43\" r=\"28\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"137,30 126,56 148,56\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><text x=\"186\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"208\" y=\"18\" width=\"50\" height=\"50\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"233,31 245,43 233,55 221,43\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"60\" height=\"60\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"12\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 74,44 44,74 14,44\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"10\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"60\" height=\"60\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,24 64,44 44,64 24,44\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 74,44 44,74 14,44\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"32\" y=\"32\" width=\"24\" height=\"24\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 74,44 44,74 14,44\" fill=\"black\"/><rect x=\"32\" y=\"32\" width=\"24\" height=\"24\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola analogi perubahan bentuk geometris:\nPada panel (1) → (2), bangun di luar (segitiga besar outline putih) bertukar posisi dengan bangun di dalam (lingkaran kecil hitam) sehingga lingkaran menjadi bangun luar yang berukuran besar dengan outline putih dan segitiga menjadi bangun kecil hitam di bagian dalam.\nPada panel (3), bangun luar adalah persegi outline putih dan bangun dalam adalah belah ketupat hitam. Dengan pola yang sama, pada panel (4) belah ketupat harus menjadi bangun luar yang besar dengan outline putih, dan persegi menjadi bangun kecil hitam di dalamnya. Jawaban yang tepat adalah D."
  },
  {
    "id": "mini-tiu2-32",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M26,68 L26,38 L16,38 L41,12 L66,38 L56,38 L56,68 Z\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M26,68 L26,38 L16,38 L41,12 L41,68 Z\" fill=\"black\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M112,58 L142,58 L142,68 L168,43 L142,18 L142,28 L112,28 Z\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M112,58 L142,58 L142,68 L168,43 L112,43 Z\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><text x=\"186\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"210,16 230,16 230,50 258,50 258,70 210,70\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"210,16 230,16 230,70 210,70\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,22 72,22 72,42 38,42 38,70 18,70\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,22 72,22 72,42 18,42\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,22 72,22 72,70 52,70 52,42 18,42\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,22 72,22 72,42 18,42\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,22 72,22 72,70 52,70 52,42 18,42\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"52,42 72,42 72,70 52,70\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,18 38,18 38,46 66,46 66,66 18,66\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,46 46,46 46,18 66,18 66,66 18,66\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"46,18 66,18 66,66 46,66\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola analogi transformasi bangun:\n1. Rotasi: Pada panel (1) tanda panah vertikal diputar 90° searah jarum jam sehingga menjadi horizontal menunjuk ke kanan pada panel (2).\n2. Pembalikan arsiran warna: Bagian yang awalnya terisi hitam (sebelah kiri) berpindah menjadi separuh bagian bawah pada orientasi horizontal baru.\nPada panel (3), bangun huruf L dirotasikan 90° searah jarum jam sehingga batangnya yang semula vertikal menjadi membentang horizontal di atas, dan lengannya menjulur ke bawah di sisi kanan. Bagian arsiran hitam berpindah dari batang atas ke kaki/lengan vertikal di sisi kanan bawah. Bentuk yang memenuhi kedua aturan ini secara konsisten adalah opsi C."
  },
  {
    "id": "mini-tiu2-33",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"43\" r=\"32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"41\" y1=\"43\" x2=\"41\" y2=\"16\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"41\" cy=\"16\" r=\"4\" fill=\"black\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"43\" r=\"32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"137\" y1=\"43\" x2=\"158\" y2=\"22\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"147\" cy=\"33\" r=\"3.5\" fill=\"black\"/><circle cx=\"158\" cy=\"22\" r=\"4\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"233\" cy=\"43\" r=\"32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"233\" y1=\"43\" x2=\"262\" y2=\"43\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"243\" cy=\"43\" r=\"3.5\" fill=\"black\"/><circle cx=\"253\" cy=\"43\" r=\"3.5\" fill=\"black\"/><circle cx=\"262\" cy=\"43\" r=\"4\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"44\" y1=\"44\" x2=\"44\" y2=\"74\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"44\" cy=\"54\" r=\"3.5\" fill=\"black\"/><circle cx=\"44\" cy=\"64\" r=\"3.5\" fill=\"black\"/><circle cx=\"44\" cy=\"74\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"44\" y1=\"44\" x2=\"67\" y2=\"67\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"black\"/><circle cx=\"56\" cy=\"56\" r=\"3\" fill=\"black\"/><circle cx=\"62\" cy=\"62\" r=\"3\" fill=\"black\"/><circle cx=\"67\" cy=\"67\" r=\"4\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"44\" y1=\"44\" x2=\"21\" y2=\"67\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"38\" cy=\"50\" r=\"3\" fill=\"black\"/><circle cx=\"32\" cy=\"56\" r=\"3\" fill=\"black\"/><circle cx=\"26\" cy=\"62\" r=\"3\" fill=\"black\"/><circle cx=\"21\" cy=\"67\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"44\" y1=\"44\" x2=\"14\" y2=\"44\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"34\" cy=\"44\" r=\"3.5\" fill=\"black\"/><circle cx=\"24\" cy=\"44\" r=\"3.5\" fill=\"black\"/><circle cx=\"14\" cy=\"44\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.2\"/><line x1=\"44\" y1=\"44\" x2=\"67\" y2=\"21\" stroke=\"black\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"52\" cy=\"36\" r=\"3\" fill=\"black\"/><circle cx=\"60\" cy=\"28\" r=\"3\" fill=\"black\"/><circle cx=\"67\" cy=\"21\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola serial gambar berurutan:\n1. Arah jarum: Panel (1) menunjuk ke arah atas (jam 12:00). Panel (2) berputar 45° searah jarum jam menuju arah jam 01:30. Panel (3) berputar 45° lagi menuju arah jam 03:00. Maka pada panel (4), jarum harus berputar 45° searah jarum jam menuju arah serong kanan-bawah (jam 04:30).\n2. Jumlah titik: Panel (1) memuat 1 titik hitam. Panel (2) memuat 2 titik hitam. Panel (3) memuat 3 titik hitam. Maka panel (4) harus memuat 4 titik hitam.\nOpsi B adalah satu-satunya gambar yang memenuhi kedua pola tersebut."
  },
  {
    "id": "mini-tiu2-34",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"41\" y1=\"4\" x2=\"41\" y2=\"82\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"2\" y1=\"43\" x2=\"80\" y2=\"43\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"13\" y=\"15\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"61\" cy=\"63\" r=\"8\" fill=\"black\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"137\" y1=\"4\" x2=\"137\" y2=\"82\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"98\" y1=\"43\" x2=\"176\" y2=\"43\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"147\" y=\"15\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"117\" cy=\"63\" r=\"8\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"233\" y1=\"4\" x2=\"233\" y2=\"82\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"194\" y1=\"43\" x2=\"272\" y2=\"43\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"243\" y=\"53\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"213\" cy=\"23\" r=\"8\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"14\" y=\"56\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"66\" cy=\"22\" r=\"8\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"14\" y=\"14\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"66\" cy=\"66\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"56\" y=\"14\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"22\" cy=\"66\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"56\" y=\"56\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"22\" cy=\"22\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><rect x=\"14\" y=\"56\" width=\"16\" height=\"16\" fill=\"black\"/><circle cx=\"22\" cy=\"22\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola pergerakan posisi pada kisi kuadran 2x2:\n1. Kotak hitam: Bergeser satu langkah searah jarum jam (kiri-atas → kanan-atas → kanan-bawah → kiri-bawah). Maka pada panel (4), kotak hitam harus berada di kuadran kiri-bawah.\n2. Lingkaran hitam: Bergeser satu langkah berlawanan arah jarum jam (kanan-bawah → kiri-bawah → kiri-atas → kanan-atas). Maka pada panel (4), lingkaran hitam harus berada di kuadran kanan-atas.\nKombinasi ini tepat diwakili oleh gambar pada opsi A."
  },
  {
    "id": "mini-tiu2-35",
    "category": "TIU",
    "topic": "Figural Ketaksamaan",
    "prompt": "Pilihlah satu gambar di bawah ini yang TIDAK mengikuti pola atau berbeda dari kelompok gambar lainnya!",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 16,74 72,74\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"38\" r=\"4\" fill=\"black\"/><circle cx=\"34\" cy=\"62\" r=\"4\" fill=\"black\"/><circle cx=\"54\" cy=\"62\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"18\" y=\"18\" width=\"52\" height=\"52\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"32\" cy=\"32\" r=\"4\" fill=\"black\"/><circle cx=\"56\" cy=\"32\" r=\"4\" fill=\"black\"/><circle cx=\"32\" cy=\"56\" r=\"4\" fill=\"black\"/><circle cx=\"56\" cy=\"56\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 74,36 62,72 26,72 14,36\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"28\" r=\"3.5\" fill=\"black\"/><circle cx=\"30\" cy=\"44\" r=\"3.5\" fill=\"black\"/><circle cx=\"58\" cy=\"44\" r=\"3.5\" fill=\"black\"/><circle cx=\"34\" cy=\"62\" r=\"3.5\" fill=\"black\"/><circle cx=\"54\" cy=\"62\" r=\"3.5\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 72,30 72,58 44,74 16,58 16,30\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"28\" r=\"3.5\" fill=\"black\"/><circle cx=\"30\" cy=\"44\" r=\"3.5\" fill=\"black\"/><circle cx=\"58\" cy=\"44\" r=\"3.5\" fill=\"black\"/><circle cx=\"34\" cy=\"62\" r=\"3.5\" fill=\"black\"/><circle cx=\"54\" cy=\"62\" r=\"3.5\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"32,14 56,14 74,32 74,56 56,74 32,74 14,56 14,32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"34\" cy=\"26\" r=\"3\" fill=\"black\"/><circle cx=\"54\" cy=\"26\" r=\"3\" fill=\"black\"/><circle cx=\"24\" cy=\"44\" r=\"3\" fill=\"black\"/><circle cx=\"64\" cy=\"44\" r=\"3\" fill=\"black\"/><circle cx=\"34\" cy=\"62\" r=\"3\" fill=\"black\"/><circle cx=\"54\" cy=\"62\" r=\"3\" fill=\"black\"/><circle cx=\"38\" cy=\"44\" r=\"3\" fill=\"black\"/><circle cx=\"50\" cy=\"44\" r=\"3\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Aturan konsistensi kelompok gambar adalah relasi antara jumlah sisi bangun geometri dengan jumlah titik hitam di dalamnya:\n- Opsi A: Bangun segitiga (3 sisi) memuat 3 titik hitam.\n- Opsi B: Bangun segiempat (4 sisi) memuat 4 titik hitam.\n- Opsi C: Bangun segilima (5 sisi) memuat 5 titik hitam.\n- Opsi D: Bangun segienam (6 sisi), namun HANYA memuat 5 titik hitam (tidak sesuai aturan jumlah sisi = jumlah titik).\n- Opsi E: Bangun segidelapan (8 sisi) memuat 8 titik hitam.\nOleh karena itu, gambar pada opsi D adalah yang berbeda dan tidak sesuai dengan aturan kelompok."
  }
];
