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
    "prompt": "Hasil perhitungan dari ((2 1/3 - 1 1/4) / (5/6 + 1/2)) : (13/16) adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "1/2",
        "score": 0
      },
      {
        "id": "b",
        "label": "3/4",
        "score": 0
      },
      {
        "id": "c",
        "label": "1",
        "score": 5
      },
      {
        "id": "d",
        "label": "4/3",
        "score": 0
      },
      {
        "id": "e",
        "label": "13/16",
        "score": 0
      }
    ],
    "explanation": "Hitung pembilang: 2 1/3 - 1 1/4 = 7/3 - 5/4 = (28 - 15)/12 = 13/12.\nHitung penyebut: 5/6 + 1/2 = 5/6 + 3/6 = 8/6 = 4/3.\nNilai pecahan utama: (13/12) / (4/3) = (13/12) * (3/4) = 13/16.\nHasil akhir: (13/16) : (13/16) = 1."
  },
  {
    "id": "mini-tiu-12",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari 0,375 * (4/9) + 0,625 : 1 1/8 adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "11/18",
        "score": 0
      },
      {
        "id": "b",
        "label": "13/18",
        "score": 5
      },
      {
        "id": "c",
        "label": "7/9",
        "score": 0
      },
      {
        "id": "d",
        "label": "5/6",
        "score": 0
      },
      {
        "id": "e",
        "label": "8/9",
        "score": 0
      }
    ],
    "explanation": "Konversi desimal ke pecahan biasa istimewa:\n0,375 = 3/8 dan 0,625 = 5/8.\n1 1/8 = 9/8.\nHitung bagian pertama: (3/8) * (4/9) = 12/72 = 1/6.\nHitung bagian kedua: (5/8) : (9/8) = (5/8) * (8/9) = 5/9.\nJumlahkan: 1/6 + 5/9 = 3/18 + 10/18 = 13/18."
  },
  {
    "id": "mini-tiu-13",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari 87,5% * 0,48 + 16,67% * 1,44 adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "0,58",
        "score": 0
      },
      {
        "id": "b",
        "label": "0,62",
        "score": 0
      },
      {
        "id": "c",
        "label": "0,66",
        "score": 5
      },
      {
        "id": "d",
        "label": "0,72",
        "score": 0
      },
      {
        "id": "e",
        "label": "0,84",
        "score": 0
      }
    ],
    "explanation": "Gunakan persen ekuivalen:\n87,5% = 7/8 dan 16,67% = 1/6.\n(7/8) * 0,48 = 7 * 0,06 = 0,42.\n(1/6) * 1,44 = 0,24.\nTotal = 0,42 + 0,24 = 0,66."
  },
  {
    "id": "mini-tiu-14",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari (45% * 2,75) + (55% * 2,75) - 3/4 adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "1,50",
        "score": 0
      },
      {
        "id": "b",
        "label": "1,75",
        "score": 0
      },
      {
        "id": "c",
        "label": "2,00",
        "score": 5
      },
      {
        "id": "d",
        "label": "2,25",
        "score": 0
      },
      {
        "id": "e",
        "label": "2,50",
        "score": 0
      }
    ],
    "explanation": "Gunakan sifat distributif perkalian aljabar:\n(45% + 55%) * 2,75 - 0,75\n= 100% * 2,75 - 0,75\n= 1 * 2,75 - 0,75 = 2,00."
  },
  {
    "id": "mini-tiu-15",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari ((654)^2 - (346)^2) / (308 * 500) adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "1",
        "score": 0
      },
      {
        "id": "b",
        "label": "2",
        "score": 5
      },
      {
        "id": "c",
        "label": "3",
        "score": 0
      },
      {
        "id": "d",
        "label": "4",
        "score": 0
      },
      {
        "id": "e",
        "label": "5",
        "score": 0
      }
    ],
    "explanation": "Gunakan rumus faktorisasi selisih kuadrat a^2 - b^2 = (a - b)(a + b):\na - b = 654 - 346 = 308.\na + b = 654 + 346 = 1.000.\nPembilang = 308 * 1.000.\nPenyebut = 308 * 500.\nMaka hasilnya = (308 * 1.000) / (308 * 500) = 1.000 / 500 = 2."
  },
  {
    "id": "mini-tiu-16",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Jika x = sqrt(72 - sqrt(72 - sqrt(72 - ...))) dan y = (1/64)^(-1/3), maka nilai dari x + y adalah ...",
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
        "label": "15",
        "score": 0
      }
    ],
    "explanation": "Mencari nilai x:\nx^2 = 72 - x <=> x^2 + x - 72 = 0 <=> (x + 9)(x - 8) = 0. Karena akar bernilai positif, maka x = 8.\nMencari nilai y:\ny = (64^(-1))^(-1/3) = 64^(1/3) = akar pangkat 3 dari 64 = 4.\nMaka x + y = 8 + 4 = 12."
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
    "prompt": "Diketahui:\nx = 1/42 - 1/48\ny = 1/44 - 1/46\n\nHubungan yang benar antara nilai x dan y adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "x > y",
        "score": 5
      },
      {
        "id": "b",
        "label": "x < y",
        "score": 0
      },
      {
        "id": "c",
        "label": "x = y",
        "score": 0
      },
      {
        "id": "d",
        "label": "2x = y",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan x dan y tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Samakan selisih pecahan:\nx = (48 - 42) / (42 * 48) = 6 / (42 * 48) = 1 / (7 * 48) = 1 / 336.\ny = (46 - 44) / (44 * 46) = 2 / (44 * 46) = 1 / (22 * 46) = 1 / 1.012.\nKarena kedua pecahan bernilai positif dan penyebut x (336) jauh lebih kecil daripada penyebut y (1.012), maka nilai x > y."
  },
  {
    "id": "mini-tiu-22",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui:\nx = 62,5% dari 72\ny = 5/7 dari 63\n\nPernyataan yang benar mengenai nilai x dan y adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "x > y",
        "score": 0
      },
      {
        "id": "b",
        "label": "x < y",
        "score": 0
      },
      {
        "id": "c",
        "label": "x = y",
        "score": 5
      },
      {
        "id": "d",
        "label": "x = 2y",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan x dan y tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Hitung x: 62,5% = 5/8. Maka x = (5/8) * 72 = 5 * 9 = 45.\nHitung y: y = (5/7) * 63 = 5 * 9 = 45.\nKarena x = 45 dan y = 45, maka kesimpulannya x = y."
  },
  {
    "id": "mini-tiu-23",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Sebuah lingkaran memiliki keliling 88 cm (gunakan pi = 22/7).\nx = Luas lingkaran tersebut (dalam cm^2)\ny = Luas persegi dengan panjang sisi 25 cm (dalam cm^2)\n\nHubungan kuantitatif yang tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "x > y",
        "score": 0
      },
      {
        "id": "b",
        "label": "x < y",
        "score": 5
      },
      {
        "id": "c",
        "label": "x = y",
        "score": 0
      },
      {
        "id": "d",
        "label": "x + y = 1.200",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan x dan y tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Keliling lingkaran = 2 * (22/7) * r = 88 => (44/7) * r = 88 => r = 14 cm.\nLuas lingkaran (x) = (22/7) * 14^2 = (22/7) * 196 = 22 * 28 = 616 cm^2.\nLuas persegi (y) = 25^2 = 625 cm^2.\nKarena 616 < 625, maka x < y."
  },
  {
    "id": "mini-tiu-24",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui persamaan x^2 = 49 dan y = sqrt(49).\nPernyataan yang paling tepat adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "x > y",
        "score": 0
      },
      {
        "id": "b",
        "label": "x < y",
        "score": 0
      },
      {
        "id": "c",
        "label": "x = y",
        "score": 0
      },
      {
        "id": "d",
        "label": "x <= y",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan x dan y tidak dapat ditentukan",
        "score": 5
      }
    ],
    "explanation": "Dari x^2 = 49, diperoleh nilai x = 7 atau x = -7.\nDari bentuk akar kuadrat tunggal, y = sqrt(49) = 7 (selalu positif non-negatif).\nJika x = 7, maka x = y.\nJika x = -7, maka x < y.\nKarena x memiliki dua kemungkinan nilai sehingga menghasilkan hubungan yang berlainan, hubungan x dan y tidak dapat dipastikan/ditentukan."
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
    "explanation": "Total calon praja = 60 orang.\nPraja yang memiliki minimal salah satu kualifikasi = 60 - 8 = 52 orang.\nGunakan rumus himpunan: n(A gabungan B) = n(A) + n(B) - n(A irisan B)\n52 = 35 + 28 - n(A irisan B)\n52 = 63 - n(A irisan B)\nn(A irisan B) = 63 - 52 = 11 orang."
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
  }
];

