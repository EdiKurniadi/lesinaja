import type { Question } from "./types";

export const MINI_TIU_QUESTIONS: Question[] = [
  {
    "id": "mini-tiu-01",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "KOMPOSER : SIMFONI = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Sutradara : Naskah",
        "score": 0
      },
      {
        "id": "b",
        "label": "Dramawan : Panggung",
        "score": 0
      },
      {
        "id": "c",
        "label": "Koreografer : Tarian",
        "score": 5
      },
      {
        "id": "d",
        "label": "Novelis : Percetakan",
        "score": 0
      },
      {
        "id": "e",
        "label": "Konduktor : Orkes",
        "score": 0
      }
    ],
    "explanation": "Hubungan pencipta dan karya seni yang diciptakan: Komposer merancang/menciptakan simfoni (karya musik), sebagaimana koreografer merancang/menciptakan tarian (karya gerak)."
  },
  {
    "id": "mini-tiu-02",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "NOTARIS : AKTA = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Apoteker : Resep",
        "score": 0
      },
      {
        "id": "b",
        "label": "Editor : Percetakan",
        "score": 0
      },
      {
        "id": "c",
        "label": "Kartografer : Peta",
        "score": 5
      },
      {
        "id": "d",
        "label": "Montir : Kunci pas",
        "score": 0
      },
      {
        "id": "e",
        "label": "Jaksa : Vonis",
        "score": 0
      }
    ],
    "explanation": "Hubungan profesi dan produk resmi yang dihasilkannya: Notaris menghasilkan dokumen akta resmi, sedangkan kartografer menghasilkan produk berupa peta."
  },
  {
    "id": "mini-tiu-03",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "STAGNASI : PROGRESIVITAS = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Monoton : Variatif",
        "score": 5
      },
      {
        "id": "b",
        "label": "Fluktuasi : Ketidakstabilan",
        "score": 0
      },
      {
        "id": "c",
        "label": "Resistensi : Penolakan",
        "score": 0
      },
      {
        "id": "d",
        "label": "Degradasi : Penurunan",
        "score": 0
      },
      {
        "id": "e",
        "label": "Regresi : Kemunduran",
        "score": 0
      }
    ],
    "explanation": "Hubungan pasangan antonim (lawan kata): Stagnasi (keadaan diam/terhenti) berlawanan dengan progresivitas (kemajuan), sebagaimana monoton (keadaan seragam/ajek) berlawanan dengan variatif (beragam/berubah-ubah)."
  },
  {
    "id": "mini-tiu-04",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "INSOMNIA : TIDUR = ANOSMIA : ...",
    "choices": [
      {
        "id": "a",
        "label": "Rasa",
        "score": 0
      },
      {
        "id": "b",
        "label": "Penglihatan",
        "score": 0
      },
      {
        "id": "c",
        "label": "Penciuman",
        "score": 5
      },
      {
        "id": "d",
        "label": "Pendengaran",
        "score": 0
      },
      {
        "id": "e",
        "label": "Ingatan",
        "score": 0
      }
    ],
    "explanation": "Hubungan gangguan/disfungsi indra atau kemampuan fisiologis: Insomnia adalah gangguan kehilangan kemampuan untuk tidur, sedangkan anosmia adalah gangguan kehilangan kemampuan indra penciuman."
  },
  {
    "id": "mini-tiu-05",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Semua dokumen rahasia negara wajib disimpan dalam lemari khusus berklasifikasi keamanan tinggi.\nSebagian berkas di ruangan arsip utama adalah dokumen rahasia negara.\n\nSimpulan yang paling valid adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Semua berkas di ruangan arsip utama wajib disimpan dalam lemari khusus berklasifikasi keamanan tinggi.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Sebagian berkas di ruangan arsip utama wajib disimpan dalam lemari khusus berklasifikasi keamanan tinggi.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Sebagian dokumen rahasia negara tidak berada di ruangan arsip utama.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Semua dokumen yang disimpan dalam lemari khusus berada di ruangan arsip utama.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Tidak ada berkas di ruangan arsip utama yang disimpan dalam lemari khusus berklasifikasi keamanan tinggi.",
        "score": 0
      }
    ],
    "explanation": "Berdasarkan silogisme kategorik, premis universal (Semua A adalah B) digabungkan dengan premis partikular (Sebagian C adalah A) menghasilkan kesimpulan partikular: Sebagian C adalah B (Sebagian berkas di ruangan arsip utama wajib disimpan dalam lemari khusus berklasifikasi keamanan tinggi)."
  },
  {
    "id": "mini-tiu-06",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Jika cuaca ekstrem melanda wilayah perairan, maka penyeberangan armada kapal ditunda.\nJika penyeberangan armada kapal ditunda, maka terjadi penumpukan truk logistik di dermaga.\nFakta di lapangan menunjukkan tidak terjadi penumpukan truk logistik di dermaga.\n\nSimpulan yang sah adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Penyeberangan armada kapal tetap ditunda karena kendala teknis.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Cuaca ekstrem melanda wilayah perairan, namun kapal tetap beroperasi.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Tidak terjadi cuaca ekstrem di wilayah perairan.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Penumpukan truk logistik dialihkan menuju terminal penampungan lain.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Armada kapal menambah jam pelayaran secara bertahap.",
        "score": 0
      }
    ],
    "explanation": "Hukum silogisme hipotetik dan Modus Tollens berantai:\nPremis 1: P -> Q\nPremis 2: Q -> R\nEkuivalen: P -> R\nFakta: ~R (tidak terjadi penumpukan truk logistik)\nMaka kesimpulan yang sah adalah ~P (Tidak terjadi cuaca ekstrem di wilayah perairan)."
  },
  {
    "id": "mini-tiu-07",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Tidak ada instruktur kedinasan yang bersikap diskriminatif terhadap calon taruna.\nSebagian perwira penegak tata tertib adalah instruktur kedinasan.\n\nSimpulan yang tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Semua perwira penegak tata tertib tidak bersikap diskriminatif terhadap calon taruna.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Sebagian perwira penegak tata tertib tidak bersikap diskriminatif terhadap calon taruna.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Tidak ada perwira penegak tata tertib yang menjadi instruktur kedinasan.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Sebagian instruktur kedinasan bersikap diskriminatif terhadap calon taruna.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Semua orang yang tidak bersikap diskriminatif adalah perwira penegak tata tertib.",
        "score": 0
      }
    ],
    "explanation": "Premis 1: Semua instruktur kedinasan bukan orang yang diskriminatif (Universal Negatif).\nPremis 2: Sebagian perwira penegak tata tertib adalah instruktur kedinasan (Partikular Afirmatif).\nKesimpulan: Sebagian perwira penegak tata tertib bukan orang yang bersikap diskriminatif terhadap calon taruna."
  },
  {
    "id": "mini-tiu-08",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Enam orang calon taruna (Rian, Soni, Taufik, Umam, Vino, dan Wahyu) dijadwalkan mengikuti tes wawancara pada ruangan yang sama secara bergiliran dari nomor urutan 1 hingga 6 dengan kondisi:\n- Wahyu diwawancarai tepat setelah Taufik.\n- Rian diwawancarai sebelum Umam, tetapi setelah Soni.\n- Umam diwawancarai pada urutan keempat.\n- Vino diwawancarai tepat sebelum Umam.\n\nSiapakah calon taruna yang berada pada urutan kedua?",
    "choices": [
      {
        "id": "a",
        "label": "Soni",
        "score": 0
      },
      {
        "id": "b",
        "label": "Rian",
        "score": 5
      },
      {
        "id": "c",
        "label": "Vino",
        "score": 0
      },
      {
        "id": "d",
        "label": "Taufik",
        "score": 0
      },
      {
        "id": "e",
        "label": "Wahyu",
        "score": 0
      }
    ],
    "explanation": "Analisis slot 1 s.d. 6:\n1. Umam berada di urutan ke-4 (Posisi 4 = Umam).\n2. Vino tepat sebelum Umam, sehingga Posisi 3 = Vino.\n3. Rian diwawancarai sebelum Umam namun setelah Soni (Soni ... Rian ... Umam). Karena posisi 1 dan 2 tersisa di sebelah kiri Vino dan Umam, maka otomatis Posisi 1 = Soni dan Posisi 2 = Rian.\n4. Wahyu tepat setelah Taufik, sehingga sisa posisi 5 dan 6 ditempati oleh Taufik di posisi 5 dan Wahyu di posisi 6.\nDengan demikian, urutan kedua adalah Rian."
  },
  {
    "id": "mini-tiu-09",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Berdasarkan informasi pada jadwal wawancara di atas, susunan urutan peserta dari giliran pertama hingga keenam yang benar adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Soni, Vino, Rian, Umam, Taufik, Wahyu",
        "score": 0
      },
      {
        "id": "b",
        "label": "Soni, Rian, Vino, Umam, Wahyu, Taufik",
        "score": 0
      },
      {
        "id": "c",
        "label": "Soni, Rian, Vino, Umam, Taufik, Wahyu",
        "score": 5
      },
      {
        "id": "d",
        "label": "Vino, Soni, Rian, Umam, Taufik, Wahyu",
        "score": 0
      },
      {
        "id": "e",
        "label": "Rian, Soni, Vino, Umam, Taufik, Wahyu",
        "score": 0
      }
    ],
    "explanation": "Berdasarkan pemetaan pada nomor 8, urutan lengkap giliran wawancara adalah: 1: Soni, 2: Rian, 3: Vino, 4: Umam, 5: Taufik, 6: Wahyu."
  },
  {
    "id": "mini-tiu-10",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Jika karena suatu keperluan mendesak Taufik bertukar urutan giliran wawancara dengan Rian, maka pernyataan berikut yang BENAR adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Rian diwawancarai tepat sebelum Wahyu.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Taufik diwawancarai pada giliran pertama.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Soni berdampingan langsung dengan Umam.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Wahyu diwawancarai sebelum Rian.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Vino berada pada giliran terakhir.",
        "score": 0
      }
    ],
    "explanation": "Urutan awal: (1: Soni, 2: Rian, 3: Vino, 4: Umam, 5: Taufik, 6: Wahyu).\nSetelah Rian (posisi 2) dan Taufik (posisi 5) saling bertukar tempat, urutan menjadi:\n1: Soni, 2: Taufik, 3: Vino, 4: Umam, 5: Rian, 6: Wahyu.\nPernyataan yang benar adalah Rian (urutan 5) diwawancarai tepat sebelum Wahyu (urutan 6)."
  },
  {
    "id": "mini-tiu-11",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Hasil perhitungan dari $\\frac{2\\frac{1}{3} - 1\\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}} : \\frac{13}{16}$ adalah ...",
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
        "label": "$\\frac{13}{16}$",
        "score": 0
      }
    ],
    "explanation": "Hitung pembilang: $2\\frac{1}{3} - 1\\frac{1}{4} = \\frac{7}{3} - \\frac{5}{4} = \\frac{28 - 15}{12} = \\frac{13}{12}$.\nHitung penyebut: $\\frac{5}{6} + \\frac{1}{2} = \\frac{5}{6} + \\frac{3}{6} = \\frac{8}{6} = \\frac{4}{3}$.\nNilai pecahan utama: $\\frac{13/12}{4/3} = \\frac{13}{12} \\times \\frac{3}{4} = \\frac{13}{16}$.\nHasil akhir: $\\frac{13}{16} : \\frac{13}{16} = 1$."
  },
  {
    "id": "mini-tiu-12",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $0{,}375 \\times \\frac{4}{9} + 0{,}625 : 1\\frac{1}{8}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$\\frac{11}{18}$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$\\frac{13}{18}$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$\\frac{7}{9}$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$\\frac{5}{6}$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$\\frac{8}{9}$",
        "score": 0
      }
    ],
    "explanation": "Konversi desimal ke pecahan biasa istimewa:\n$0{,}375 = \\frac{3}{8}$ dan $0{,}625 = \\frac{5}{8}$.\n$1\\frac{1}{8} = \\frac{9}{8}$.\nHitung bagian pertama: $\\frac{3}{8} \\times \\frac{4}{9} = \\frac{12}{72} = \\frac{1}{6}$.\nHitung bagian kedua: $\\frac{5}{8} : \\frac{9}{8} = \\frac{5}{8} \\times \\frac{8}{9} = \\frac{5}{9}$.\nJumlahkan: $\\frac{1}{6} + \\frac{5}{9} = \\frac{3}{18} + \\frac{10}{18} = \\frac{13}{18}$."
  },
  {
    "id": "mini-tiu-13",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $87{,}5\\% \\times 0{,}48 + 16{,}67\\% \\times 1{,}44$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$0{,}58$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$0{,}62$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$0{,}66$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$0{,}72$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$0{,}84$",
        "score": 0
      }
    ],
    "explanation": "Gunakan persen ekuivalen:\n$87{,}5\\% = \\frac{7}{8}$ dan $16{,}67\\% = \\frac{1}{6}$.\n$\\frac{7}{8} \\times 0{,}48 = 7 \\times 0{,}06 = 0{,}42$.\n$\\frac{1}{6} \\times 1{,}44 = 0{,}24$.\nTotal = $0{,}42 + 0{,}24 = 0{,}66$."
  },
  {
    "id": "mini-tiu-14",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $(45\\% \\times 2{,}75) + (55\\% \\times 2{,}75) - \\frac{3}{4}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$1{,}50$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$1{,}75$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$2{,}00$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$2{,}25$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$2{,}50$",
        "score": 0
      }
    ],
    "explanation": "Gunakan sifat distributif perkalian aljabar:\n$(45\\% + 55\\%) \\times 2{,}75 - 0{,}75$\n$= 100\\% \\times 2{,}75 - 0{,}75$\n$= 1 \\times 2{,}75 - 0{,}75 = 2{,}00$."
  },
  {
    "id": "mini-tiu-15",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $\\frac{654^2 - 346^2}{308 \\times 500}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$1$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$2$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$3$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$4$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$5$",
        "score": 0
      }
    ],
    "explanation": "Gunakan rumus faktorisasi selisih kuadrat $a^2 - b^2 = (a - b)(a + b)$:\n$a - b = 654 - 346 = 308$.\n$a + b = 654 + 346 = 1.000$.\nPembilang $= 308 \\times 1.000$.\nPenyebut $= 308 \\times 500$.\nMaka hasilnya $= \\frac{308 \\times 1.000}{308 \\times 500} = \\frac{1.000}{500} = 2$."
  },
  {
    "id": "mini-tiu-16",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Jika $x = \\sqrt{72 - \\sqrt{72 - \\sqrt{72 - \\dots}}}$ dan $y = \\left(\\frac{1}{64}\\right)^{-\\frac{1}{3}}$, maka nilai dari $x + y$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$10$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$11$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$12$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$13$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$15$",
        "score": 0
      }
    ],
    "explanation": "Mencari nilai $x$:\n$x^2 = 72 - x \\iff x^2 + x - 72 = 0 \\iff (x + 9)(x - 8) = 0$. Karena akar bernilai positif, maka $x = 8$.\nMencari nilai $y$:\n$y = (64^{-1})^{-\\frac{1}{3}} = 64^{\\frac{1}{3}} = \\sqrt[3]{64} = 4$.\nMaka $x + y = 8 + 4 = 12$."
  },
  {
    "id": "mini-tiu-17",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "Perhatikan barisan bilangan berikut: 5, 8, 14, 23, 35, 50, ...\nAngka berikutnya adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "63",
        "score": 0
      },
      {
        "id": "b",
        "label": "65",
        "score": 0
      },
      {
        "id": "c",
        "label": "68",
        "score": 5
      },
      {
        "id": "d",
        "label": "70",
        "score": 0
      },
      {
        "id": "e",
        "label": "72",
        "score": 0
      }
    ],
    "explanation": "Pola selisih bertingkat:\n5 (+3) -> 8\n8 (+6) -> 14\n14 (+9) -> 23\n23 (+12) -> 35\n35 (+15) -> 50\nBeda berikutnya bertambah kelipatan 3, yaitu (+18).\nAngka selanjutnya = 50 + 18 = 68."
  },
  {
    "id": "mini-tiu-18",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "Perhatikan barisan bilangan berikut: 3, 50, 6, 45, 12, 40, 24, 35, ..., ...\nDua bilangan berikutnya berturut-turut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "48 dan 30",
        "score": 5
      },
      {
        "id": "b",
        "label": "36 dan 30",
        "score": 0
      },
      {
        "id": "c",
        "label": "48 dan 25",
        "score": 0
      },
      {
        "id": "d",
        "label": "32 dan 30",
        "score": 0
      },
      {
        "id": "e",
        "label": "48 dan 35",
        "score": 0
      }
    ],
    "explanation": "Pola dua barisan berseling:\nLarik ganjil: 3, 6, 12, 24, ... (dikalikan 2 secara konstan) -> berikutnya = 24 * 2 = 48.\nLarik genap: 50, 45, 40, 35, ... (dikurangi 5 secara konstan) -> berikutnya = 35 - 5 = 30.\nJadi, dua angka berikutnya adalah 48 dan 30."
  },
  {
    "id": "mini-tiu-19",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "Diberikan barisan angka: 4, 5, 10, 12, 24, 27, 54, ...\nAngka berikutnya adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "56",
        "score": 0
      },
      {
        "id": "b",
        "label": "58",
        "score": 5
      },
      {
        "id": "c",
        "label": "60",
        "score": 0
      },
      {
        "id": "d",
        "label": "108",
        "score": 0
      },
      {
        "id": "e",
        "label": "112",
        "score": 0
      }
    ],
    "explanation": "Pola kombinasi operasi penambahan berurut dan perkalian dua:\n4 (+1) -> 5\n5 (*2) -> 10\n10 (+2) -> 12\n12 (*2) -> 24\n24 (+3) -> 27\n27 (*2) -> 54\nOperasi berikutnya adalah penambahan (+4), sehingga: 54 + 4 = 58."
  },
  {
    "id": "mini-tiu-20",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "Perhatikan barisan huruf berikut: B, E, G, J, L, O, Q, ...\nHuruf berikutnya adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "R",
        "score": 0
      },
      {
        "id": "b",
        "label": "S",
        "score": 0
      },
      {
        "id": "c",
        "label": "T",
        "score": 5
      },
      {
        "id": "d",
        "label": "U",
        "score": 0
      },
      {
        "id": "e",
        "label": "V",
        "score": 0
      }
    ],
    "explanation": "Konversi posisi huruf ke angka alfabet:\nB (2), E (5), G (7), J (10), L (12), O (15), Q (17).\nPola beda: +3, +2, +3, +2, +3, +2.\nLangkah selanjutnya adalah +3 dari posisi Q (17): 17 + 3 = 20.\nHuruf pada urutan ke-20 adalah T."
  },
  {
    "id": "mini-tiu-21",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui:\n$x = \\frac{1}{42} - \\frac{1}{48}$\n$y = \\frac{1}{44} - \\frac{1}{46}$\n\nHubungan yang benar antara nilai $x$ dan $y$ adalah ...",
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
        "label": "$2x = y$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $x$ dan $y$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Samakan selisih pecahan:\n$x = \\frac{48 - 42}{42 \\times 48} = \\frac{6}{42 \\times 48} = \\frac{1}{7 \\times 48} = \\frac{1}{336}$.\n$y = \\frac{46 - 44}{44 \\times 46} = \\frac{2}{44 \\times 46} = \\frac{1}{22 \\times 46} = \\frac{1}{1.012}$.\nKarena kedua pecahan bernilai positif dan penyebut $x$ (336) lebih kecil daripada penyebut $y$ (1.012), maka $x > y$."
  },
  {
    "id": "mini-tiu-22",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui:\n$x = 62{,}5\\% \\text{ dari } 72$\n$y = \\frac{5}{7} \\text{ dari } 63$\n\nPernyataan yang benar mengenai nilai $x$ dan $y$ adalah ...",
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
        "score": 5
      },
      {
        "id": "d",
        "label": "$x = 2y$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $x$ dan $y$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Hitung $x$: $62{,}5\\% = \\frac{5}{8}$, maka $x = \\frac{5}{8} \\times 72 = 5 \\times 9 = 45$.\nHitung $y$: $y = \\frac{5}{7} \\times 63 = 5 \\times 9 = 45$.\nKarena $x = 45$ dan $y = 45$, maka kesimpulannya $x = y$."
  },
  {
    "id": "mini-tiu-23",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Sebuah lingkaran memiliki keliling $88\\text{ cm}$ (gunakan $\\pi = \\frac{22}{7}$).\n$x = \\text{Luas lingkaran tersebut (dalam }\\text{cm}^2)$\n$y = \\text{Luas persegi dengan panjang sisi } 25\\text{ cm (dalam }\\text{cm}^2)$\n\nHubungan kuantitatif yang tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$x > y$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$x < y$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$x = y$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$x + y = 1.200$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $x$ dan $y$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Keliling lingkaran $= 2 \\times \\frac{22}{7} \\times r = 88 \\implies \\frac{44}{7} \\times r = 88 \\implies r = 14\\text{ cm}$.\nLuas lingkaran ($x$) $= \\frac{22}{7} \\times 14^2 = \\frac{22}{7} \\times 196 = 22 \\times 28 = 616\\text{ cm}^2$.\nLuas persegi ($y$) $= 25^2 = 625\\text{ cm}^2$.\nKarena $616 < 625$, maka $x < y$."
  },
  {
    "id": "mini-tiu-24",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui persamaan $x^2 = 49$ dan $y = \\sqrt{49}$.\nPernyataan yang paling tepat adalah ...",
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
        "label": "$x \\le y$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $x$ dan $y$ tidak dapat ditentukan",
        "score": 5
      }
    ],
    "explanation": "Dari $x^2 = 49$, diperoleh nilai $x = 7$ atau $x = -7$.\nDari bentuk akar kuadrat utama, $y = \\sqrt{49} = 7$ (selalu bernilai non-negatif).\nJika $x = 7$, maka $x = y$.\nJika $x = -7$, maka $x < y$.\nKarena $x$ memiliki dua kemungkinan nilai sehingga menghasilkan hubungan yang berlainan, hubungan $x$ dan $y$ tidak dapat dipastikan/ditentukan."
  },
  {
    "id": "mini-tiu-25",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Sebuah proyek renovasi asrama kedinasan ditargetkan selesai dalam waktu 40 hari oleh 24 orang pekerja. Setelah berjalan 15 hari, pekerjaan terhenti selama 5 hari akibat kendala pasokan material. Agar proyek dapat selesai tepat waktu sesuai rencana semula, berapa tambahan pekerja yang harus dipekerjakan?",
    "choices": [
      {
        "id": "a",
        "label": "4 orang",
        "score": 0
      },
      {
        "id": "b",
        "label": "6 orang",
        "score": 5
      },
      {
        "id": "c",
        "label": "8 orang",
        "score": 0
      },
      {
        "id": "d",
        "label": "10 orang",
        "score": 0
      },
      {
        "id": "e",
        "label": "12 orang",
        "score": 0
      }
    ],
    "explanation": "Total beban awal = 40 hari * 24 orang = 960 orang-hari.\nBeban yang sudah selesai = 15 hari * 24 orang = 360 orang-hari.\nSisa beban pekerjaan = 960 - 360 = 600 orang-hari.\nSisa waktu yang tersedia = 40 - 15 - 5 = 20 hari kerja.\nJumlah pekerja yang dibutuhkan = 600 / 20 = 30 orang.\nTambahan pekerja = 30 - 24 = 6 orang."
  },
  {
    "id": "mini-tiu-26",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Mobil patroli A berangkat dari markas komando menuju pos perbatasan pada pukul 07.15 dengan kecepatan rata-rata 60 km/jam. Pada pukul 07.45, mobil patroli B berangkat menyusul dari titik dan jalur yang sama dengan kecepatan rata-rata 80 km/jam. Pada pukul berapa mobil patroli B berhasil menyusul mobil patroli A?",
    "choices": [
      {
        "id": "a",
        "label": "08.45",
        "score": 0
      },
      {
        "id": "b",
        "label": "09.00",
        "score": 0
      },
      {
        "id": "c",
        "label": "09.15",
        "score": 5
      },
      {
        "id": "d",
        "label": "09.30",
        "score": 0
      },
      {
        "id": "e",
        "label": "09.45",
        "score": 0
      }
    ],
    "explanation": "Selisih waktu keberangkatan = 07.45 - 07.15 = 30 menit = 0,5 jam.\nSelisih jarak awal mobil A = 60 km/jam * 0,5 jam = 30 km.\nSelisih kecepatan kedua mobil = 80 - 60 = 20 km/jam.\nWaktu untuk menyusul = 30 km / 20 km/jam = 1,5 jam (1 jam 30 menit).\nMobil B berangkat pukul 07.45, menyusul pada: 07.45 + 01.30 = 09.15."
  },
  {
    "id": "mini-tiu-27",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Koperasi dinas membeli 50 rim kertas dengan harga dasar Rp40.000,00 per rim. Koperasi tersebut memperoleh potongan harga (diskon) sebesar 10% dari total pembelian, tetapi dibebani biaya pengiriman tetap sebesar Rp50.000,00. Jika seluruh kertas tersebut dijual eceran dan koperasi menargetkan laba bersih keseluruhan sebesar Rp350.000,00, berapakah harga jual per rim kertas tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "Rp42.000,00",
        "score": 0
      },
      {
        "id": "b",
        "label": "Rp43.000,00",
        "score": 0
      },
      {
        "id": "c",
        "label": "Rp44.000,00",
        "score": 5
      },
      {
        "id": "d",
        "label": "Rp45.000,00",
        "score": 0
      },
      {
        "id": "e",
        "label": "Rp46.000,00",
        "score": 0
      }
    ],
    "explanation": "Harga beli bruto = 50 * Rp40.000,00 = Rp2.000.000,00.\nDiskon 10% = 10% * Rp2.000.000,00 = Rp200.000,00.\nHarga setelah diskon = Rp1.800.000,00.\nTotal modal operasional = Rp1.800.000,00 + Rp50.000,00 (ongkir) = Rp1.850.000,00.\nTarget penerimaan total = Modal + Laba = Rp1.850.000,00 + Rp350.000,00 = Rp2.200.000,00.\nHarga jual per rim = Rp2.200.000,00 / 50 = Rp44.000,00."
  },
  {
    "id": "mini-tiu-28",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Nilai rata-rata tes akademik kelas A yang beranggotakan 30 taruna adalah 78. Nilai rata-rata kelas B yang beranggotakan 20 taruna adalah 83. Jika nilai dari 5 orang taruna mutasi digabungkan ke dalam kelompok tersebut, rata-rata gabungan seluruh 55 taruna menjadi 80. Berapakah nilai rata-rata dari 5 taruna mutasi tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "78",
        "score": 0
      },
      {
        "id": "b",
        "label": "80",
        "score": 5
      },
      {
        "id": "c",
        "label": "82",
        "score": 0
      },
      {
        "id": "d",
        "label": "84",
        "score": 0
      },
      {
        "id": "e",
        "label": "85",
        "score": 0
      }
    ],
    "explanation": "Jumlah nilai kelas A = 30 * 78 = 2.340.\nJumlah nilai kelas B = 20 * 83 = 1.660.\nTotal nilai kelas A dan B (50 taruna) = 2.340 + 1.660 = 4.000.\nTotal nilai keseluruhan 55 taruna = 55 * 80 = 4.400.\nTotal nilai 5 taruna mutasi = 4.400 - 4.000 = 400.\nRata-rata 5 taruna mutasi = 400 / 5 = 80."
  },
  {
    "id": "mini-tiu-29",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Dari 60 orang calon praja di sebuah peleton pelatihan, tercatat 35 orang memiliki kualifikasi berenang, 28 orang memiliki kualifikasi menembak, dan 8 orang belum memiliki kedua kualifikasi tersebut. Berapa orang calon praja yang memiliki kedua kualifikasi (berenang dan menembak)?",
    "choices": [
      {
        "id": "a",
        "label": "9 orang",
        "score": 0
      },
      {
        "id": "b",
        "label": "10 orang",
        "score": 0
      },
      {
        "id": "c",
        "label": "11 orang",
        "score": 5
      },
      {
        "id": "d",
        "label": "12 orang",
        "score": 0
      },
      {
        "id": "e",
        "label": "15 orang",
        "score": 0
      }
    ],
    "explanation": "Total calon praja = 60 orang.\nPraja yang memiliki minimal salah satu kualifikasi = $60 - 8 = 52$ orang.\nGunakan prinsip inklusi-eksklusi himpunan:\n$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$\n$52 = 35 + 28 - n(A \\cap B)$\n$52 = 63 - n(A \\cap B)$\n$n(A \\cap B) = 63 - 52 = 11$ orang."
  },
  {
    "id": "mini-tiu-30",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Tiga tahun yang lalu, usia seorang perwira adalah 4 kali usia ajudannya. Enam tahun yang akan datang, usia perwira tersebut menjadi 2,5 kali usia ajudannya. Berapakah usia ajudan tersebut saat ini?",
    "choices": [
      {
        "id": "a",
        "label": "10 tahun",
        "score": 0
      },
      {
        "id": "b",
        "label": "12 tahun",
        "score": 5
      },
      {
        "id": "c",
        "label": "14 tahun",
        "score": 0
      },
      {
        "id": "d",
        "label": "15 tahun",
        "score": 0
      },
      {
        "id": "e",
        "label": "16 tahun",
        "score": 0
      }
    ],
    "explanation": "Misalkan usia perwira sekarang = P dan usia ajudan sekarang = A.\nKondisi 3 tahun lalu: P - 3 = 4(A - 3) => P - 3 = 4A - 12 => P = 4A - 9.\nKondisi 6 tahun ke depan: P + 6 = 2,5(A + 6) => P + 6 = 2,5A + 15 => P = 2,5A + 9.\nSamakan kedua persamaan nilai P:\n4A - 9 = 2,5A + 9\n4A - 2,5A = 9 + 9\n1,5A = 18\nA = 18 / 1,5 = 12 tahun.\nJadi, usia ajudan saat ini adalah 12 tahun."
  },
  {
    "id": "mini-tiu-31",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"22,8 34,24 22,40 10,24\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"58,8 70,24 58,40 46,24\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"10,72 34,72 22,48\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"46,72 70,72 58,48\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M122,36C118,36 110,27 110,22C110,15 116,9 122,16C128,9 134,15 134,22C134,27 126,36 122,36Z\" fill=\"black\"/><path d=\"M158,36C154,36 146,27 146,22C146,15 152,9 158,16C164,9 170,15 170,22C170,27 162,36 158,36Z\" fill=\"black\"/><polygon points=\"110,48 134,48 122,74\" fill=\"black\"/><polygon points=\"146,48 170,48 158,74\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><text x=\"186\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"222\" cy=\"18\" r=\"8\" fill=\"black\"/><circle cx=\"214\" cy=\"28\" r=\"8\" fill=\"black\"/><circle cx=\"230\" cy=\"28\" r=\"8\" fill=\"black\"/><rect x=\"219\" y=\"28\" width=\"6\" height=\"10\" fill=\"black\"/><circle cx=\"258\" cy=\"18\" r=\"8\" fill=\"black\"/><circle cx=\"250\" cy=\"28\" r=\"8\" fill=\"black\"/><circle cx=\"266\" cy=\"28\" r=\"8\" fill=\"black\"/><rect x=\"255\" y=\"28\" width=\"6\" height=\"10\" fill=\"black\"/><path d=\"M222,72C218,72 210,63 210,58C210,51 216,45 222,52C228,45 234,51 234,58C234,63 226,72 222,72Z\" fill=\"black\"/><path d=\"M258,72C254,72 246,63 246,58C246,51 252,45 258,52C264,45 270,51 270,58C270,63 262,72 258,72Z\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M22,37C18,37 10,28 10,22C10,15 16,9 22,16C28,9 34,15 34,22C34,28 26,37 22,37Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"54,12 70,12 62,30\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M22,79C18,79 10,70 10,64C10,57 16,51 22,58C28,51 34,57 34,64C34,70 26,79 22,79Z\" fill=\"black\"/><polygon points=\"54,54 70,54 62,78\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M22,37C18,37 10,28 10,22C10,15 16,9 22,16C28,9 34,15 34,22C34,28 26,37 22,37Z\" fill=\"black\"/><polygon points=\"54,30 70,30 62,10\" fill=\"black\"/><path d=\"M22,79C18,79 10,70 10,64C10,57 16,51 22,58C28,51 34,57 34,64C34,70 26,79 22,79Z\" fill=\"black\"/><path d=\"M62,79C58,79 50,70 50,64C50,57 56,51 62,58C68,51 74,57 74,64C74,70 66,79 62,79Z\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M22,37C18,37 10,28 10,22C10,15 16,9 22,16C28,9 34,15 34,22C34,28 26,37 22,37Z\" fill=\"black\"/><path d=\"M62,37C58,37 50,28 50,22C50,15 56,9 62,16C68,9 74,15 74,22C74,28 66,37 62,37Z\" fill=\"black\"/><polygon points=\"10,54 34,54 22,78\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"50,54 74,54 62,78\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M22,37C18,37 10,28 10,22C10,15 16,9 22,16C28,9 34,15 34,22C34,28 26,37 22,37Z\" fill=\"black\"/><path d=\"M62,37C58,37 50,28 50,22C50,15 56,9 62,16C68,9 74,15 74,22C74,28 66,37 62,37Z\" fill=\"black\"/><polygon points=\"10,54 34,54 22,78\" fill=\"black\"/><polygon points=\"50,54 74,54 62,78\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"22\" cy=\"16\" r=\"7\" fill=\"black\"/><circle cx=\"15\" cy=\"26\" r=\"7\" fill=\"black\"/><circle cx=\"29\" cy=\"26\" r=\"7\" fill=\"black\"/><rect x=\"19\" y=\"26\" width=\"6\" height=\"8\" fill=\"black\"/><polygon points=\"50,12 74,12 62,34\" fill=\"black\"/><path d=\"M22,79C18,79 10,70 10,64C10,57 16,51 22,58C28,51 34,57 34,64C34,70 26,79 22,79Z\" fill=\"black\"/><polygon points=\"50,54 74,54 62,78\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola analogi: pada panel (1)→(2), setiap bentuk outline berubah menjadi bentuk filled (terisi hitam). Pada panel (3) terdapat dua buah simbol trefoil/club (♣) di atas dan dua hati (♥) di bawah. Mengikuti pola yang sama, panel (4) harus menampilkan dua hati (♥) di atas dan dua segitiga terbalik (▼) di bawah — semuanya terisi penuh (filled). Jawaban D memenuhi pola ini."
  },
  {
    "id": "mini-tiu-32",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"22\" width=\"26\" height=\"38\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,22 78,43 44,64\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"98,22 132,43 98,64\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><ellipse cx=\"158\" cy=\"43\" rx=\"14\" ry=\"18\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><text x=\"186\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><ellipse cx=\"233\" cy=\"43\" rx=\"28\" ry=\"20\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"8,18 44,44 8,70\" fill=\"black\"/><ellipse cx=\"66\" cy=\"44\" rx=\"14\" ry=\"18\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><ellipse cx=\"26\" cy=\"44\" rx=\"14\" ry=\"18\" fill=\"black\"/><polygon points=\"80,18 44,44 80,70\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><ellipse cx=\"44\" cy=\"44\" rx=\"28\" ry=\"20\" fill=\"black\"/><polygon points=\"12,20 44,44 12,68\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"80,18 44,44 80,70\" fill=\"black\"/><ellipse cx=\"26\" cy=\"44\" rx=\"14\" ry=\"18\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 5
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"8,18 44,44 8,70\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><ellipse cx=\"66\" cy=\"44\" rx=\"14\" ry=\"18\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola analogi: (1)=(2) menunjukkan bahwa bentuk kanan pada panel (1) bergeser ke kiri pada panel (2) namun dicerminkan (mirrored), dan bentuk baru muncul di kanan. Panel (1): [kotak outline] + [segitiga-kanan outline]. Panel (2): [segitiga-kiri outline] + [elips outline]. Panel (3) berisi elips filled besar. Mengikuti pola yang sama, panel (4) harus menampilkan segitiga-kiri (cermin dari segitiga-kanan) sebagai filled, dan elips kecil outline. Jawaban D memenuhi pola ini."
  },
  {
    "id": "mini-tiu-33",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"41\" y1=\"14\" x2=\"41\" y2=\"74\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"11\" y1=\"44\" x2=\"71\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"41\" cy=\"14\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"71\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"74\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"11\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(41,14) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(71,44) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(41,74) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(11,44) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">1.</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"137\" y1=\"14\" x2=\"137\" y2=\"74\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"107\" y1=\"44\" x2=\"167\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"137\" cy=\"14\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"167\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"74\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"107\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(137,14) rotate(0)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(167,44) rotate(90)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(137,74) rotate(180)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(107,44) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">2.</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"233\" y1=\"14\" x2=\"233\" y2=\"74\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"203\" y1=\"44\" x2=\"263\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"233\" cy=\"14\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"263\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"233\" cy=\"74\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"203\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(233,14) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(263,44) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(233,74) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><g transform=\"translate(203,44) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-6\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-6 -3,0 3,0\" fill=\"black\"/></g><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">3.</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">4.</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"10\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"78\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"10\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(44,10) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(78,44) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(44,78) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(10,44) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"10\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"78\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"10\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(44,10) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(78,44) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(44,78) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(10,44) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"10\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"78\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"10\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(44,10) rotate(180)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(78,44) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(44,78) rotate(0)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(10,44) rotate(90)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"10\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"78\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"10\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(44,10) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(78,44) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(44,78) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(10,44) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"10\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"78\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"10\" cy=\"44\" r=\"6\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(44,10) rotate(90)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(78,44) rotate(180)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(44,78) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g><g transform=\"translate(10,44) rotate(0)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-7\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-7 -3.5,0 3.5,0\" fill=\"black\"/></g></svg>",
        "score": 5
      }
    ],
    "explanation": "Pola serial: Setiap gambar, panah pada tiap ujung lengan bintang berputar 45° searah jarum jam. Frame 1: panah mengarah ke sudut diagonal (↖↗↘↙). Frame 2: panah berputar 45° → (↑→↓←). Frame 3: berputar 45° lagi → (↗↘↙↖). Frame 4 (jawaban): berputar 45° lagi → (→↓←↑). Jawaban E menunjukkan posisi panah yang tepat."
  },
  {
    "id": "mini-tiu-34",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 470 100\" style=\"width:100%;max-width:560px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"44\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"24\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"54\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"64\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"24\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"24\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">1.</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"137\" cy=\"24\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"154\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"154\" cy=\"54\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"120\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"120\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">2.</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"233\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"233\" cy=\"24\" r=\"8\" fill=\"black\"/><circle cx=\"250\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"54\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"233\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"216\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"216\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">3.</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"329\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"329\" cy=\"24\" r=\"8\" fill=\"black\"/><circle cx=\"346\" cy=\"34\" r=\"8\" fill=\"black\"/><circle cx=\"346\" cy=\"54\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"329\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"312\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"312\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">4.</text><rect x=\"386\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"425\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"425\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">5.</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"34\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"34\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"34\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"54\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"27\" cy=\"34\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"34\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"34\" r=\"8\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"34\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"34\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"24\" r=\"8\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"61\" cy=\"34\" r=\"8\" fill=\"black\"/><circle cx=\"61\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"44\" cy=\"64\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"54\" r=\"8\" fill=\"black\"/><circle cx=\"27\" cy=\"34\" r=\"8\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola serial: Susunan 7 lingkaran (1 pusat + 6 keliling). Setiap frame, lingkaran yang terisi hitam bertambah satu secara berurutan searah jarum jam. Frame 1: 1 hitam (kiri-bawah). Frame 2: 3 hitam (pusat, bawah, kiri-bawah). Frame 3: 5 hitam (pusat, atas, bawah, kiri-bawah + satu lagi). Frame 4: 5 hitam. Frame 5: semua 7 lingkaran terisi hitam. Jawaban C menampilkan seluruh lingkaran terisi penuh."
  },
  {
    "id": "mini-tiu-35",
    "category": "TIU",
    "topic": "Figural Ketaksamaan",
    "prompt": "Perhatikan kelima gambar berikut. Manakah gambar yang TIDAK sesuai dengan kelompoknya?",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(22,22) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,22) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(22,66) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,66) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(22,22) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,22) rotate(315)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(22,66) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,66) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(22,22) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,22) rotate(0)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(22,66) rotate(90)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,66) rotate(180)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(22,22) rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,22) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(22,66) rotate(90)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,66) rotate(225)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:100%;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"2\" y1=\"44\" x2=\"86\" y2=\"44\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"2\" x2=\"44\" y2=\"86\" stroke=\"black\" stroke-width=\"1.5\"/><g transform=\"translate(22,22) rotate(135)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,22) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(22,66) rotate(180)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g><g transform=\"translate(66,66) rotate(270)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-10\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"0,-10 -4,-3 4,-3\" fill=\"black\"/></g></svg>",
        "score": 5
      }
    ],
    "explanation": "Aturan yang diikuti gambar A, B, C, D: panah pada dua kuadran yang berseberangan selalu mengarah berlawanan 180° satu sama lain (kuadran kiri-atas ↔ kanan-bawah, dan kanan-atas ↔ kiri-bawah saling berlawanan). Pada pilihan E, panah di kanan-atas (↓/270°) dan kiri-bawah (↓/180°) tidak berlawanan 180°, melainkan hampir searah. Begitu pula kuadran kiri-atas (↙/135°) dan kanan-bawah (↓/270°) juga tidak berlawanan. Dengan demikian, E adalah gambar yang tidak sesuai dengan kelompoknya."
  }
];
