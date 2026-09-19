import type { Question } from "./types";

export const MINI_TIU_3_QUESTIONS: Question[] = [
  {
    "id": "mini-tiu3-01",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "ORNITOLOG : BURUNG = ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Geolog : Laut",
        "score": 0
      },
      {
        "id": "b",
        "label": "Arkeolog : Fosil",
        "score": 5
      },
      {
        "id": "c",
        "label": "Patolog : Tanaman",
        "score": 0
      },
      {
        "id": "d",
        "label": "Astronom : Mikroba",
        "score": 0
      },
      {
        "id": "e",
        "label": "Antropolog : Mineral",
        "score": 0
      }
    ],
    "explanation": "Hubungan profesi ilmuwan spesialis dengan objek penelitian ilmiah utamanya: Ornitolog adalah pakar yang secara khusus meneliti burung, sebagaimana arkeolog adalah pakar yang secara khusus meneliti fosil dan artefak purbakala."
  },
  {
    "id": "mini-tiu3-02",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "... berhubungan dengan KEMUDI, sebagaimana NAHKODA berhubungan dengan ...",
    "choices": [
      {
        "id": "a",
        "label": "Setir – Pesawat",
        "score": 0
      },
      {
        "id": "b",
        "label": "Kapal – Kompas",
        "score": 0
      },
      {
        "id": "c",
        "label": "Sopir – Kapal",
        "score": 5
      },
      {
        "id": "d",
        "label": "Mobil – Pelabuhan",
        "score": 0
      },
      {
        "id": "e",
        "label": "Masinis – Rel",
        "score": 0
      }
    ],
    "explanation": "Hubungan profesi pengendali wahana dan sarana/alat kendali yang digunakannya: Sopir mengendalikan laju kendaraan bermotor menggunakan kemudi (setir), sebagaimana nahkoda mengendalikan laju kapal laut."
  },
  {
    "id": "mini-tiu3-03",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "PADI : BERAS : NASI = ... : ... : ...",
    "choices": [
      {
        "id": "a",
        "label": "Gandum : Roti : Tepung",
        "score": 0
      },
      {
        "id": "b",
        "label": "Kedelai : Tempe : Ragi",
        "score": 0
      },
      {
        "id": "c",
        "label": "Kapas : Benang : Kain",
        "score": 5
      },
      {
        "id": "d",
        "label": "Kayu : Kertas : Pohon",
        "score": 0
      },
      {
        "id": "e",
        "label": "Tepung : Adonan : Gandum",
        "score": 0
      }
    ],
    "explanation": "Hubungan tahapan pemrosesan berurutan dari bahan mentah, bahan setengah jadi, hingga produk akhir siap pakai: Padi digiling menjadi beras, lalu beras dimasak menjadi nasi. Hubungan yang setara: Kapas dipintal menjadi benang, lalu benang ditenun menjadi kain."
  },
  {
    "id": "mini-tiu3-04",
    "category": "TIU",
    "topic": "Analogi Kata",
    "prompt": "AMANDEMEN : UNDANG-UNDANG = REVISI : ...",
    "choices": [
      {
        "id": "a",
        "label": "Vonis",
        "score": 0
      },
      {
        "id": "b",
        "label": "Anggaran",
        "score": 5
      },
      {
        "id": "c",
        "label": "Pengadilan",
        "score": 0
      },
      {
        "id": "d",
        "label": "Sidang",
        "score": 0
      },
      {
        "id": "e",
        "label": "Gugatan",
        "score": 0
      }
    ],
    "explanation": "Hubungan tindakan perbaikan atau pengubahan resmi terhadap dokumen institusional: Amandemen dilakukan untuk mengubah atau memperbaiki undang-undang, sedangkan revisi dilakukan untuk memperbaiki rencana anggaran atau naskah rancangan kerja."
  },
  {
    "id": "mini-tiu3-05",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Diberikan pernyataan resmi kedinasan:\n\"Jika calon taruna melanggar tata tertib asrama, maka ia mendapatkan sanksi pemotongan poin disiplin.\"\n\nPernyataan berikut yang secara logis EKUIVALEN (senilai) dengan pernyataan di atas adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Jika calon taruna mendapatkan sanksi pemotongan poin disiplin, maka ia melanggar tata tertib asrama.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Jika calon taruna tidak melanggar tata tertib asrama, maka ia tidak mendapatkan sanksi pemotongan poin disiplin.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Jika calon taruna tidak mendapatkan sanksi pemotongan poin disiplin, maka ia tidak melanggar tata tertib asrama.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Calon taruna melanggar tata tertib asrama dan mendapatkan sanksi pemotongan poin disiplin.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Calon taruna tidak melanggar tata tertib asrama atau ia mendapatkan sanksi tambahan.",
        "score": 0
      }
    ],
    "explanation": "Berdasarkan hukum ekuivalensi logika implikasi, bentuk implikasi $P \\to Q$ senilai dengan kontraposisinya yaitu $\\sim Q \\to \\sim P$.\n- $P$: Calon taruna melanggar tata tertib asrama.\n- $Q$: Calon taruna mendapatkan sanksi pemotongan poin disiplin.\n- $\\sim Q$: Calon taruna tidak mendapatkan sanksi pemotongan poin disiplin.\n- $\\sim P$: Calon taruna tidak melanggar tata tertib asrama.\nMaka pernyataan yang ekuivalen adalah: \"Jika calon taruna tidak mendapatkan sanksi pemotongan poin disiplin, maka ia tidak melanggar tata tertib asrama.\""
  },
  {
    "id": "mini-tiu3-06",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Dalam operasi siaga keamanan wilayah, setiap regu patroli wajib bersiaga di Pos Pemantauan Terpadu atau melakukan penyisiran aktif di Jalur Perbukitan.\nJika kondisi cuaca hujan lebat disertai petir, maka regu patroli dilarang melakukan penyisiran aktif di Jalur Perbukitan.\nMalam ini wilayah operasi dilanda hujan lebat disertai petir.\n\nSimpulan yang sah adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Sebagian regu patroli tetap melakukan penyisiran aktif di Jalur Perbukitan dengan perlengkapan khusus.",
        "score": 0
      },
      {
        "id": "b",
        "label": "Regu patroli bersiaga di Pos Pemantauan Terpadu.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Seluruh operasi siaga keamanan wilayah dibatalkan hingga cuaca membaik.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Regu patroli kembali ke markas komando induk.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Cuaca hujan lebat mereda setelah regu patroli tiba di Pos Pemantauan Terpadu.",
        "score": 0
      }
    ],
    "explanation": "Penerapan silogisme disjungtif dan kondisional:\n- Premis 1 (Disjungsi): $P \\lor Q$ (Bersiaga di Pos Pemantauan Terpadu ATAU melakukan penyisiran aktif di Jalur Perbukitan).\n- Premis 2 (Kondisional): $R \\to \\sim Q$ (Jika hujan lebat disertai petir, maka tidak melakukan penyisiran aktif di Jalur Perbukitan).\n- Fakta: $R$ (terjadi hujan lebat disertai petir).\nMelalui Modus Ponens dari premis 2 diperoleh $\\sim Q$ (regu patroli tidak melakukan penyisiran aktif di Jalur Perbukitan).\nDengan aturan silogisme disjungtif ($P \\lor Q$ dan $\\sim Q$), simpulan yang pasti sah adalah $P$: Regu patroli bersiaga di Pos Pemantauan Terpadu."
  },
  {
    "id": "mini-tiu3-07",
    "category": "TIU",
    "topic": "Silogisme dan Logika Penarikan Kesimpulan",
    "prompt": "Peraturan internal diklat kedinasan menetapkan bahwa peserta diklat berhak mengikuti ujian sertifikasi keahlian khusus jika dan hanya jika memenuhi dua syarat: memiliki tingkat kehadiran minimal $90\\%$ dan menyelesaikan seluruh tugas laboratorium tepat waktu.\nBerdasarkan evaluasi akhir, Rangga dinyatakan tidak berhak mengikuti ujian sertifikasi keahlian khusus, padahal catatan presensinya menunjukkan tingkat kehadiran mencapai $95\\%$.\n\nSimpulan yang pasti benar berdasarkan informasi tersebut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Rangga tidak menyelesaikan sedikitnya satu tugas laboratorium tepat waktu.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Rangga menyelesaikan seluruh tugas laboratorium dengan nilai di bawah batas kelulusan.",
        "score": 0
      },
      {
        "id": "c",
        "label": "Tingkat kehadiran Rangga tidak dihitung secara sah oleh panitia diklat.",
        "score": 0
      },
      {
        "id": "d",
        "label": "Rangga mendapatkan dispensasi khusus untuk mengikuti ujian sertifikasi susulan.",
        "score": 0
      },
      {
        "id": "e",
        "label": "Panitia diklat mengubah batas minimum kehadiran menjadi 100%.",
        "score": 0
      }
    ],
    "explanation": "Penalaran deduktif berbasis syarat kelayakan ganda:\nSyarat berhak ujian adalah: (Kehadiran $\\ge 90\\%$) DAN (Menyelesaikan seluruh tugas laboratorium tepat waktu).\nFakta: Rangga TIDAK berhak ujian. Negasi dari konjungsi tersebut (Hukum De Morgan) adalah: (Kehadiran $< 90\\%$) ATAU (Tidak menyelesaikan seluruh tugas laboratorium tepat waktu).\nKarena kehadiran Rangga tercatat $95\\%$ (memenuhi syarat pertama), maka syarat yang dilanggar pasti adalah syarat kedua: Rangga tidak menyelesaikan sedikitnya satu tugas laboratorium tepat waktu."
  },
  {
    "id": "mini-tiu3-08",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Tujuh perwira (Aris, Bima, Coki, Dedi, Erik, Fandi, dan Gani) bertugas piket jaga pos komando selama satu minggu penuh dari hari Senin sampai Minggu. Setiap perwira bertugas tepat satu hari dengan ketentuan:\n- Bima bertugas pada hari Rabu.\n- Coki bertugas tepat dua hari setelah Bima.\n- Erik bertugas pada hari Minggu.\n- Gani bertugas di antara hari tugas Bima dan Coki.\n- Aris bertugas tepat satu hari sebelum hari tugas Dedi.\n\nSiapakah perwira yang bertugas pada hari Kamis?",
    "choices": [
      {
        "id": "a",
        "label": "Aris",
        "score": 0
      },
      {
        "id": "b",
        "label": "Coki",
        "score": 0
      },
      {
        "id": "c",
        "label": "Dedi",
        "score": 0
      },
      {
        "id": "d",
        "label": "Fandi",
        "score": 0
      },
      {
        "id": "e",
        "label": "Gani",
        "score": 5
      }
    ],
    "explanation": "Analisis jadwal piket 7 hari (Senin s.d. Minggu):\n1. Bima bertugas hari Rabu.\n2. Coki bertugas 2 hari setelah Bima => Jumat: Coki.\n3. Gani bertugas di antara hari tugas Bima (Rabu) dan Coki (Jumat) => Kamis: Gani.\n4. Erik bertugas hari Minggu.\n5. Hari tersisa: Senin, Selasa, dan Sabtu.\n6. Aris bertugas tepat sebelum Dedi => pasangan hari berurutan yang tersisa hanya Senin dan Selasa. Maka Senin: Aris, Selasa: Dedi.\n7. Hari tersisa (Sabtu) diisi oleh Fandi.\nJadi perwira yang bertugas pada hari Kamis adalah Gani."
  },
  {
    "id": "mini-tiu3-09",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Berdasarkan jadwal piket jaga pos komando tersebut, siapakah perwira yang bertugas pada hari Sabtu?",
    "choices": [
      {
        "id": "a",
        "label": "Aris",
        "score": 0
      },
      {
        "id": "b",
        "label": "Dedi",
        "score": 0
      },
      {
        "id": "c",
        "label": "Erik",
        "score": 0
      },
      {
        "id": "d",
        "label": "Fandi",
        "score": 5
      },
      {
        "id": "e",
        "label": "Gani",
        "score": 0
      }
    ],
    "explanation": "Susunan jadwal piket jaga pos komando secara lengkap:\n- Senin: Aris\n- Selasa: Dedi\n- Rabu: Bima\n- Kamis: Gani\n- Jumat: Coki\n- Sabtu: Fandi\n- Minggu: Erik\nDengan demikian, perwira yang bertugas pada hari Sabtu adalah Fandi."
  },
  {
    "id": "mini-tiu3-10",
    "category": "TIU",
    "topic": "Penalaran Analitis",
    "prompt": "Jika Dedi dan Fandi saling bertukar hari tugas piket jaga, siapakah dua orang perwira yang bertugas tepat satu hari sebelum dan satu hari sesudah Fandi?",
    "choices": [
      {
        "id": "a",
        "label": "Aris dan Bima",
        "score": 5
      },
      {
        "id": "b",
        "label": "Bima dan Gani",
        "score": 0
      },
      {
        "id": "c",
        "label": "Coki dan Erik",
        "score": 0
      },
      {
        "id": "d",
        "label": "Gani dan Coki",
        "score": 0
      },
      {
        "id": "e",
        "label": "Aris dan Gani",
        "score": 0
      }
    ],
    "explanation": "Pada jadwal awal, Dedi bertugas hari Selasa dan Fandi bertugas hari Sabtu.\nSetelah saling bertukar jadwal, Fandi kini bertugas pada hari Selasa.\nPerwira yang bertugas tepat sehari sebelum Selasa adalah Aris (Senin), dan tepat sehari sesudah Selasa adalah Bima (Rabu).\nMaka dua perwira yang mengapit jadwal piket Fandi adalah Aris dan Bima."
  },
  {
    "id": "mini-tiu3-11",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Hasil dari $\\frac{2\\frac{2}{3} + 1\\frac{1}{4}}{3\\frac{1}{6} - 1\\frac{1}{2}} : \\frac{47}{20}$ adalah ...",
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
        "label": "$\\frac{47}{20}$",
        "score": 0
      }
    ],
    "explanation": "Hitung pembilang: $2\\frac{2}{3} + 1\\frac{1}{4} = \\frac{8}{3} + \\frac{5}{4} = \\frac{32 + 15}{12} = \\frac{47}{12}$.\nHitung penyebut: $3\\frac{1}{6} - 1\\frac{1}{2} = \\frac{19}{6} - \\frac{9}{6} = \\frac{10}{6} = \\frac{5}{3}$.\nNilai pecahan utama: $\\frac{47/12}{5/3} = \\frac{47}{12} \\times \\frac{3}{5} = \\frac{47}{20}$.\nHasil pembagian akhir: $\\frac{47}{20} : \\frac{47}{20} = 1$."
  },
  {
    "id": "mini-tiu3-12",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $83{,}33\\% \\times 0{,}72 - 14{,}29\\% \\times 1{,}40$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$0{,}30$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$0{,}35$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$0{,}40$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$0{,}45$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$0{,}50$",
        "score": 0
      }
    ],
    "explanation": "Gunakan konversi pecahan istimewa:\n$83{,}33\\% = \\frac{5}{6}$ dan $14{,}29\\% = \\frac{1}{7}$.\nSuku pertama: $\\frac{5}{6} \\times 0{,}72 = 5 \\times 0{,}12 = 0{,}60$.\nSuku kedua: $\\frac{1}{7} \\times 1{,}40 = 0{,}20$.\nHasil pengurangan: $0{,}60 - 0{,}20 = 0{,}40$."
  },
  {
    "id": "mini-tiu3-13",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $\\frac{(87{,}5)^2 - (12{,}5)^2}{75}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$50$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$75$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$100$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$125$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$150$",
        "score": 0
      }
    ],
    "explanation": "Gunakan faktorisasi selisih dua kuadrat $a^2 - b^2 = (a + b)(a - b)$:\n$a + b = 87{,}5 + 12{,}5 = 100$.\n$a - b = 87{,}5 - 12{,}5 = 75$.\nPembilang $= 100 \\times 75$.\nHasil akhir: $\\frac{100 \\times 75}{75} = 100$."
  },
  {
    "id": "mini-tiu3-14",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $\\sqrt{20 + \\sqrt{20 + \\sqrt{20 + \\dots}}}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$4$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$5$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$6$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$8$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$10$",
        "score": 0
      }
    ],
    "explanation": "Misalkan $x = \\sqrt{20 + \\sqrt{20 + \\sqrt{20 + \\dots}}}$.\nKuadratkan kedua ruas persamaan:\n$x^2 = 20 + x$\n$x^2 - x - 20 = 0$\n$(x - 5)(x + 4) = 0 \\implies x = 5$ atau $x = -4$.\nKarena nilai akar kuadrat pokok selalu bernilai positif, maka nilai $x = 5$."
  },
  {
    "id": "mini-tiu3-15",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Nilai dari $\\frac{4^{1012} + 4^{1012} + 4^{1012} + 4^{1012}}{2^{2024}}$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$1$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$2$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$4$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$8$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$16$",
        "score": 0
      }
    ],
    "explanation": "Penyederhanaan eksponen aljabar:\nPembilang memuat 4 suku identik: $4 \\times 4^{1012} = 4^1 \\times 4^{1012} = 4^{1013}$.\nUbah basis 4 ke basis 2: $4^{1013} = (2^2)^{1013} = 2^{2026}$.\nBagi dengan penyebut: $\\frac{2^{2026}}{2^{2024}} = 2^{2026 - 2024} = 2^2 = 4$."
  },
  {
    "id": "mini-tiu3-16",
    "category": "TIU",
    "topic": "Berhitung Cepat dan Aljabar Sederhana",
    "prompt": "Jika diketahui $\\frac{4x - 2}{5} + \\frac{2x + 3}{3} = 5$, maka nilai dari $5x - 4$ adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "$9$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$11$",
        "score": 5
      },
      {
        "id": "c",
        "label": "$13$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$15$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$17$",
        "score": 0
      }
    ],
    "explanation": "Kalikan kedua ruas persamaan dengan KPK(5, 3) = 15:\n$3(4x - 2) + 5(2x + 3) = 15 \\times 5$\n$12x - 6 + 10x + 15 = 75$\n$22x + 9 = 75$\n$22x = 66 \\implies x = 3$.\nNilai dari $5x - 4 = 5(3) - 4 = 15 - 4 = 11$."
  },
  {
    "id": "mini-tiu3-17",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "A, 3, D, 6, G, 12, J, 24, ..., ...",
    "choices": [
      {
        "id": "a",
        "label": "M, 48",
        "score": 5
      },
      {
        "id": "b",
        "label": "L, 36",
        "score": 0
      },
      {
        "id": "c",
        "label": "M, 36",
        "score": 0
      },
      {
        "id": "d",
        "label": "N, 48",
        "score": 0
      },
      {
        "id": "e",
        "label": "K, 48",
        "score": 0
      }
    ],
    "explanation": "Pola barisan alfa-numerik berseling:\n- Larik huruf (posisi ganjil): A (1) → (+3) → D (4) → (+3) → G (7) → (+3) → J (10) → (+3) → M (13).\n- Larik angka (posisi genap): $3, 6, 12, 24, \\dots$ (tiap suku dikali 2). Suku berikutnya adalah $24 \\times 2 = 48$.\nUrutan dua suku berikutnya berturut-turut adalah M dan 48."
  },
  {
    "id": "mini-tiu3-18",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "2, 5, 10, 17, 26, 37, ...",
    "choices": [
      {
        "id": "a",
        "label": "48",
        "score": 0
      },
      {
        "id": "b",
        "label": "49",
        "score": 0
      },
      {
        "id": "c",
        "label": "50",
        "score": 5
      },
      {
        "id": "d",
        "label": "51",
        "score": 0
      },
      {
        "id": "e",
        "label": "52",
        "score": 0
      }
    ],
    "explanation": "Pola selisih bilangan ganjil berurutan:\n$5 - 2 = +3$\n$10 - 5 = +5$\n$17 - 10 = +7$\n$26 - 17 = +9$\n$37 - 26 = +11$\nSelisih berikutnya adalah $+13 \\implies 37 + 13 = 50$.\n(Atau menggunakan rumus pola kuadrat $n^2 + 1$: suku ke-7 adalah $7^2 + 1 = 50$)."
  },
  {
    "id": "mini-tiu3-19",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "$\\frac{1}{3}, \\frac{2}{5}, \\frac{4}{9}, \\frac{8}{17}, ...$",
    "choices": [
      {
        "id": "a",
        "label": "$\\frac{12}{25}$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$\\frac{16}{29}$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$\\frac{16}{33}$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$\\frac{14}{31}$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$\\frac{16}{35}$",
        "score": 0
      }
    ],
    "explanation": "Analisis pola pembilang dan penyebut secara terpisah:\n- Pembilang: $1, 2, 4, 8, \\dots$ (pola: $\\times 2$). Suku berikutnya: $8 \\times 2 = 16$.\n- Penyebut: $3, 5, 9, 17, \\dots$ dengan selisih $+2, +4, +8$ (kelipatan 2). Selisih berikutnya $+16 \\implies 17 + 16 = 33$.\nMaka suku pecahan berikutnya adalah $\\frac{16}{33}$."
  },
  {
    "id": "mini-tiu3-20",
    "category": "TIU",
    "topic": "Deret Angka dan Pola Barisan",
    "prompt": "A, Z, C, X, E, V, G, ...",
    "choices": [
      {
        "id": "a",
        "label": "S",
        "score": 0
      },
      {
        "id": "b",
        "label": "T",
        "score": 5
      },
      {
        "id": "c",
        "label": "U",
        "score": 0
      },
      {
        "id": "d",
        "label": "R",
        "score": 0
      },
      {
        "id": "e",
        "label": "W",
        "score": 0
      }
    ],
    "explanation": "Pola deret abjad dua larik berseling:\n- Larik ganjil: A(1) → C(3) → E(5) → G(7) (bergerak maju $+2$).\n- Larik genap: Z(26) → X(24) → V(22) → ... (bergerak mundur $-2$).\nSuku ke-8 adalah huruf ke-20 dalam alfabet yaitu T."
  },
  {
    "id": "mini-tiu3-21",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui $P = \\frac{7}{8}$ dan $Q = 0{,}87$.\nPernyataan yang paling tepat adalah ...",
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
        "label": "$P + Q = 1$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $P$ dan $Q$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Konversi nilai pecahan $P$ ke desimal:\n$P = \\frac{7}{8} = 0{,}875$.\nNilai $Q = 0{,}87 = 0{,}870$.\nKarena $0{,}875 > 0{,}870$, maka disimpulkan bahwa $P > Q$."
  },
  {
    "id": "mini-tiu3-22",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui $0 < x < 1$. Jika $P = x^2$ dan $Q = \\sqrt{x}$, pernyataan yang paling tepat adalah ...",
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
        "label": "$P \\ge Q$",
        "score": 0
      },
      {
        "id": "e",
        "label": "Hubungan $P$ dan $Q$ tidak dapat ditentukan",
        "score": 0
      }
    ],
    "explanation": "Untuk sembarang bilangan riil pecahan positif antara 0 dan 1 ($0 < x < 1$):\nOperasi pengkuadratan selalu memperkecil nilai ($x^2 < x$), sedangkan operasi penarikan akar kuadrat selalu memperbesar nilai ($\\sqrt{x} > x$).\nContoh uji: jika $x = \\frac{1}{4}$, maka $P = (\\frac{1}{4})^2 = \\frac{1}{16} = 0{,}0625$ dan $Q = \\sqrt{\\frac{1}{4}} = \\frac{1}{2} = 0{,}5$.\nKarena $0{,}0625 < 0{,}5$, terbukti bahwa $P < Q$."
  },
  {
    "id": "mini-tiu3-23",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Suatu kubus pejal memiliki panjang rusuk $6\\text{ cm}$ dengan volume sebesar $x$. Suatu balok pejal memiliki ukuran panjang $9\\text{ cm}$, lebar $4\\text{ cm}$, dan tinggi $6\\text{ cm}$ dengan volume sebesar $y$. Pernyataan yang tepat adalah ...",
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
    "explanation": "Hitung volume masing-masing bangun ruang:\nVolume kubus: $x = s^3 = 6^3 = 216\\text{ cm}^3$.\nVolume balok: $y = p \\times l \\times t = 9 \\times 4 \\times 6 = 216\\text{ cm}^3$.\nKarena $x = 216$ dan $y = 216$, maka berlaku hubungan $x = y$."
  },
  {
    "id": "mini-tiu3-24",
    "category": "TIU",
    "topic": "Perbandingan Kuantitatif",
    "prompt": "Diketahui $x^2 - 5x + 6 = 0$ dan $y = 2$.\nPernyataan yang paling tepat adalah ...",
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
    "explanation": "Selesaikan persamaan kuadrat:\n$x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2$ atau $x = 3$.\nNilai $y = 2$.\n- Jika $x = 2$, maka $x = y$.\n- Jika $x = 3$, maka $x > y$.\nKarena pada seluruh kemungkinan nilai nilai $x$ bernilai lebih besar atau sama dengan $y$, kesimpulan yang pasti benar adalah $x \\ge y$."
  },
  {
    "id": "mini-tiu3-25",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Pipa A dapat mengisi penuh kolam penampungan air markas dalam waktu 6 jam. Pipa B dapat mengisi penuh kolam yang sama dalam waktu 4 jam. Jika kedua pipa dibuka bersama-sama sejak kolam kosong, berapa lama waktu yang diperlukan hingga kolam terisi penuh?",
    "choices": [
      {
        "id": "a",
        "label": "2 jam 12 menit",
        "score": 0
      },
      {
        "id": "b",
        "label": "2 jam 24 menit",
        "score": 5
      },
      {
        "id": "c",
        "label": "2 jam 30 menit",
        "score": 0
      },
      {
        "id": "d",
        "label": "2 jam 40 menit",
        "score": 0
      },
      {
        "id": "e",
        "label": "2 jam 48 menit",
        "score": 0
      }
    ],
    "explanation": "Kombinasi laju debit pengisian bersama:\n$\\frac{1}{t} = \\frac{1}{6} + \\frac{1}{4} = \\frac{2 + 3}{12} = \\frac{5}{12}$.\nWaktu yang diperlukan: $t = \\frac{12}{5} = 2{,}4\\text{ jam}$.\nUbah bagian desimal ke menit: $0{,}4 \\times 60\\text{ menit} = 24\\text{ menit}$.\nJadi waktu total yang dibutuhkan adalah 2 jam 24 menit."
  },
  {
    "id": "mini-tiu3-26",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Dua pos komando X dan Y berjarak $180\\text{ km}$. Pada pukul 08.00, mobil patroli berangkat dari pos X menuju pos Y dengan kecepatan rata-rata $50\\text{ km/jam}$. Pada saat yang bersamaan, mobil logistik berangkat dari pos Y menuju pos X melalui jalan yang sama dengan kecepatan rata-rata $70\\text{ km/jam}$. Pada pukul berapakah kedua kendaraan tersebut akan berpapasan di jalan?",
    "choices": [
      {
        "id": "a",
        "label": "Pukul 09.15",
        "score": 0
      },
      {
        "id": "b",
        "label": "Pukul 09.30",
        "score": 5
      },
      {
        "id": "c",
        "label": "Pukul 09.45",
        "score": 0
      },
      {
        "id": "d",
        "label": "Pukul 10.00",
        "score": 0
      },
      {
        "id": "e",
        "label": "Pukul 10.15",
        "score": 0
      }
    ],
    "explanation": "Waktu berpapasan dua kendaraan dari arah berlawanan:\n$t = \\frac{s}{v_1 + v_2} = \\frac{180}{50 + 70} = \\frac{180}{120} = 1{,}5\\text{ jam} = 1\\text{ jam } 30\\text{ menit}$.\nWaktu berpapasan $= 08.00 + 01.30 = 09.30$."
  },
  {
    "id": "mini-tiu3-27",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Seorang pegawai dinas menerima penghasilan bruto sebesar $\\text{Rp}8.000.000$ per bulan. Penghasilan tidak kena pajak (PTKP) ditetapkan sebesar $\\text{Rp}3.000.000$ per bulan. Jika tarif pajak penghasilan atas sisa penghasilan kena pajak adalah $10\\%$, dan terdapat potongan tetap iuran jaminan kesehatan sebesar $\\text{Rp}200.000$, berapakah penghasilan neto (bersih) yang diterima pegawai tersebut setiap bulan?",
    "choices": [
      {
        "id": "a",
        "label": "$\\text{Rp}7.000.000$",
        "score": 0
      },
      {
        "id": "b",
        "label": "$\\text{Rp}7.200.000$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$\\text{Rp}7.300.000$",
        "score": 5
      },
      {
        "id": "d",
        "label": "$\\text{Rp}7.400.000$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$\\text{Rp}7.500.000$",
        "score": 0
      }
    ],
    "explanation": "Penghasilan Kena Pajak (PKP) $= 8.000.000 - 3.000.000 = \\text{Rp}5.000.000$.\nPotongan pajak $= 10\\% \\times 5.000.000 = \\text{Rp}500.000$.\nPotongan kesehatan $= \\text{Rp}200.000$.\nTotal potongan $= 500.000 + 200.000 = \\text{Rp}700.000$.\nPenghasilan bersih $= 8.000.000 - 700.000 = \\text{Rp}7.300.000$."
  },
  {
    "id": "mini-tiu3-28",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Seorang kurir dinas mengendarai sepeda motor dari kantor pusat ke kantor cabang dengan kecepatan rata-rata $40\\text{ km/jam}$. Saat kembali dari kantor cabang ke kantor pusat melalui rute jalan yang sama persis, ia memacu kendaraannya dengan kecepatan rata-rata $60\\text{ km/jam}$. Berapakah kecepatan rata-rata kurir dinas tersebut untuk seluruh perjalanan bolak-balik?",
    "choices": [
      {
        "id": "a",
        "label": "$48\\text{ km/jam}$",
        "score": 5
      },
      {
        "id": "b",
        "label": "$50\\text{ km/jam}$",
        "score": 0
      },
      {
        "id": "c",
        "label": "$52\\text{ km/jam}$",
        "score": 0
      },
      {
        "id": "d",
        "label": "$54\\text{ km/jam}$",
        "score": 0
      },
      {
        "id": "e",
        "label": "$56\\text{ km/jam}$",
        "score": 0
      }
    ],
    "explanation": "Untuk perjalanan bolak-balik dengan jarak yang sama ($s$), kecepatan rata-rata merupakan rata-rata harmonik:\n$v_{\\text{rata-rata}} = \\frac{2 \\times v_1 \\times v_2}{v_1 + v_2} = \\frac{2 \\times 40 \\times 60}{40 + 60} = \\frac{4800}{100} = 48\\text{ km/jam}$.\n(Catatan: $\\frac{40+60}{2} = 50\\text{ km/jam}$ adalah jebakan umum rata-rata aritmetika biasa yang keliru karena waktu tempuh pergi dan pulang tidak sama)."
  },
  {
    "id": "mini-tiu3-29",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Dari 60 orang taruna yang mengikuti tes kemampuan bahasa asing, 38 orang menguasai Bahasa Inggris, 28 orang menguasai Bahasa Mandarin, dan 6 orang tidak menguasai kedua bahasa tersebut. Berapakah jumlah taruna yang HANYA menguasai Bahasa Inggris?",
    "choices": [
      {
        "id": "a",
        "label": "22 orang",
        "score": 0
      },
      {
        "id": "b",
        "label": "24 orang",
        "score": 0
      },
      {
        "id": "c",
        "label": "26 orang",
        "score": 5
      },
      {
        "id": "d",
        "label": "28 orang",
        "score": 0
      },
      {
        "id": "e",
        "label": "32 orang",
        "score": 0
      }
    ],
    "explanation": "Jumlah taruna yang menguasai sedikitnya satu bahasa: $n(I \\cup M) = 60 - 6 = 54$ orang.\nJumlah taruna yang menguasai kedua bahasa:\n$n(I \\cap M) = 38 + 28 - 54 = 66 - 54 = 12$ orang.\nJumlah taruna yang HANYA menguasai Bahasa Inggris:\n$n(I \\text{ saja}) = n(I) - n(I \\cap M) = 38 - 12 = 26$ orang."
  },
  {
    "id": "mini-tiu3-30",
    "category": "TIU",
    "topic": "Soal Cerita Aritmetika Sosial dan Aljabar Terapan",
    "prompt": "Jumlah umur seorang kolonel dan putranya saat ini adalah 56 tahun. Delapan tahun yang lalu, umur sang kolonel adalah 4 kali umur putranya. Berapakah umur sang kolonel saat ini?",
    "choices": [
      {
        "id": "a",
        "label": "36 tahun",
        "score": 0
      },
      {
        "id": "b",
        "label": "38 tahun",
        "score": 0
      },
      {
        "id": "c",
        "label": "40 tahun",
        "score": 5
      },
      {
        "id": "d",
        "label": "42 tahun",
        "score": 0
      },
      {
        "id": "e",
        "label": "44 tahun",
        "score": 0
      }
    ],
    "explanation": "Misalkan umur kolonel saat ini $= K$ dan umur putra $= P$.\n$K + P = 56 \\implies P = 56 - K$.\nKondisi 8 tahun lalu: $K - 8 = 4(P - 8)$.\nSubstitusikan nilai $P$:\n$K - 8 = 4(56 - K - 8)$\n$K - 8 = 4(48 - K)$\n$K - 8 = 192 - 4K$\n$5K = 200 \\implies K = 40$ tahun.\nJadi umur kolonel saat ini adalah 40 tahun."
  },
  {
    "id": "mini-tiu3-31",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"41,16 16,68 66,68\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"41\" y1=\"36\" x2=\"41\" y2=\"56\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"31\" y1=\"46\" x2=\"51\" y2=\"46\" stroke=\"black\" stroke-width=\"2.5\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><rect x=\"114\" y=\"20\" width=\"46\" height=\"46\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"127\" y1=\"33\" x2=\"147\" y2=\"53\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"147\" y1=\"33\" x2=\"127\" y2=\"53\" stroke=\"black\" stroke-width=\"2.5\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><text x=\"186\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"233,18 258,36 248,66 218,66 208,36\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"233\" y1=\"32\" x2=\"233\" y2=\"52\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"223\" y1=\"42\" x2=\"243\" y2=\"42\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"226\" y1=\"35\" x2=\"240\" y2=\"49\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"240\" y1=\"35\" x2=\"226\" y2=\"49\" stroke=\"black\" stroke-width=\"2\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 74,44 44,74 14,44\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"34\" x2=\"44\" y2=\"54\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"34\" y1=\"44\" x2=\"54\" y2=\"44\" stroke=\"black\" stroke-width=\"2.5\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 70,28 70,60 44,74 18,60 18,28\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"30\" x2=\"58\" y2=\"58\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"58\" y1=\"30\" x2=\"30\" y2=\"58\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"44\" y1=\"24\" x2=\"44\" y2=\"64\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"24\" y1=\"44\" x2=\"64\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/></svg>",
        "score": 5
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"30\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"34\" y1=\"34\" x2=\"54\" y2=\"54\" stroke=\"black\" stroke-width=\"2.5\"/><line x1=\"54\" y1=\"34\" x2=\"34\" y2=\"54\" stroke=\"black\" stroke-width=\"2.5\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,14 70,28 70,60 44,74 18,60 18,28\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"10\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,18 69,36 59,66 29,66 19,36\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola analogi transformasi gambar:\n1. Bangun luar: Pada panel (1) berupa segitiga (3 sisi), berubah menjadi segiempat (4 sisi) pada panel (2) (+1 sisi). Dengan demikian, pada panel (3) berupa segilima (5 sisi), maka panel (4) harus berupa segienam (6 sisi).\n2. Simbol dalam: Pada panel (1) simbol tambah (+) berotasi 45° menjadi silang (×) pada panel (2). Mengikuti pola yang sama, simbol bintang pada panel (3) mengalami rotasi 45° pada panel (4).\nBentuk yang memenuhi kedua aturan pola ini adalah opsi B."
  },
  {
    "id": "mini-tiu3-32",
    "category": "TIU",
    "topic": "Figural Analogi",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"20,16 60,16 60,68 35,68\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"42\" r=\"5\" fill=\"black\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><text x=\"90\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"116,16 156,16 141,68 116,68\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"129\" cy=\"32\" r=\"4.5\" fill=\"black\"/><circle cx=\"129\" cy=\"52\" r=\"4.5\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><text x=\"186\" y=\"48\" text-anchor=\"middle\" font-size=\"18\" font-family=\"serif\">=</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"210,16 260,68 210,68\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"222\" cy=\"56\" r=\"4.5\" fill=\"black\"/><circle cx=\"236\" cy=\"56\" r=\"4.5\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"18,18 68,70 18,70\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"58\" r=\"4.5\" fill=\"black\"/><circle cx=\"44\" cy=\"58\" r=\"4.5\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"70,18 20,70 70,70\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"58\" r=\"4.5\" fill=\"black\"/><circle cx=\"44\" cy=\"58\" r=\"4.5\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"70,18 20,70 70,70\" fill=\"black\"/><circle cx=\"58\" cy=\"44\" r=\"4.5\" fill=\"white\"/><circle cx=\"58\" cy=\"58\" r=\"4.5\" fill=\"white\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"70,18 20,70 70,70\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"52\" cy=\"46\" r=\"4\" fill=\"black\"/><circle cx=\"64\" cy=\"46\" r=\"4\" fill=\"black\"/><circle cx=\"52\" cy=\"58\" r=\"4\" fill=\"black\"/><circle cx=\"64\" cy=\"58\" r=\"4\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"30\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"5\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola analogi pencerminan dan pelipatan elemen:\n1. Pencerminan: Bangun pada panel (1) dicerminkan secara horizontal (sumbu vertikal) sehingga menghadap ke arah sebaliknya pada panel (2). Mengikuti pola yang sama, segitiga siku-siku pada panel (3) harus dicerminkan menghadap ke kiri pada panel (4).\n2. Penggandaan titik: Jumlah titik hitam di dalam bangun digandakan (dari 1 titik pada panel 1 menjadi 2 titik pada panel 2). Maka dari 2 titik pada panel (3), jumlahnya berlipat ganda menjadi 4 titik pada panel (4).\nOpsi D memenuhi kedua kriteria tersebut."
  },
  {
    "id": "mini-tiu3-33",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"41\" cy=\"43\" r=\"32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"41\" y1=\"11\" x2=\"41\" y2=\"75\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"9\" y1=\"43\" x2=\"73\" y2=\"43\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"18\" y1=\"20\" x2=\"64\" y2=\"66\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"64\" y1=\"20\" x2=\"18\" y2=\"66\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M41,43 L41,11 A32,32 0 0,1 64,20 Z\" fill=\"black\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"43\" r=\"32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"137\" y1=\"11\" x2=\"137\" y2=\"75\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"105\" y1=\"43\" x2=\"169\" y2=\"43\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"114\" y1=\"20\" x2=\"160\" y2=\"66\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"160\" y1=\"20\" x2=\"114\" y2=\"66\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M137,43 L169,43 A32,32 0 0,1 160,66 Z\" fill=\"black\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"233\" cy=\"43\" r=\"32\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"233\" y1=\"11\" x2=\"233\" y2=\"75\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"201\" y1=\"43\" x2=\"265\" y2=\"43\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"210\" y1=\"20\" x2=\"256\" y2=\"66\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"256\" y1=\"20\" x2=\"210\" y2=\"66\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M233,43 L233,75 A32,32 0 0,1 210,66 Z\" fill=\"black\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"20\" y1=\"20\" x2=\"68\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"68\" y1=\"20\" x2=\"20\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M44,44 L44,10 A34,34 0 0,1 68,20 Z\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"20\" y1=\"20\" x2=\"68\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"68\" y1=\"20\" x2=\"20\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M44,44 L68,68 A34,34 0 0,1 44,78 Z\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"20\" y1=\"20\" x2=\"68\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"68\" y1=\"20\" x2=\"20\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M44,44 L10,44 A34,34 0 0,1 20,20 Z\" fill=\"black\"/></svg>",
        "score": 5
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"10\" x2=\"44\" y2=\"78\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"10\" y1=\"44\" x2=\"78\" y2=\"44\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"20\" y1=\"20\" x2=\"68\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"68\" y1=\"20\" x2=\"20\" y2=\"68\" stroke=\"black\" stroke-width=\"1\"/><path d=\"M44,44 L78,44 A34,34 0 0,1 68,68 Z\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"34\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola perputaran sektor lingkaran yang diarsir:\nLingkaran dibagi menjadi 8 juring (masing-masing 45°).\nPada panel (1), juring yang terisi adalah arah jam 12:00 - 01:30.\nPada panel (2), juring bergeser 2 posisi (90°) searah jarum jam menuju arah jam 03:00 - 04:30.\nPada panel (3), juring bergeser 2 posisi (90°) lagi searah jarum jam menuju arah jam 06:00 - 07:30.\nMaka pada panel (4), juring harus bergeser 2 posisi (90°) lagi menuju arah jam 09:00 - 10:30 (sisi kiri atas). Opsi yang tepat adalah C."
  },
  {
    "id": "mini-tiu3-34",
    "category": "TIU",
    "topic": "Serial Gambar",
    "prompt": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 100\" style=\"width:100%;max-width:480px;display:block\"><rect x=\"2\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"43\" x2=\"62\" y2=\"43\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"43\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"62\" cy=\"43\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"41\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(1)</text><rect x=\"98\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polyline points=\"116,63 158,63 158,23\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"116\" cy=\"63\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"158\" cy=\"63\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"158\" cy=\"23\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"137\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(2)</text><rect x=\"194\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polyline points=\"212,23 212,63 254,63 254,23\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"212\" cy=\"23\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"212\" cy=\"63\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"254\" cy=\"63\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"254\" cy=\"23\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"233\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(3)</text><rect x=\"290\" y=\"4\" width=\"78\" height=\"78\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"329\" y=\"52\" text-anchor=\"middle\" font-size=\"40\" font-family=\"sans-serif\" font-weight=\"bold\">?</text><text x=\"329\" y=\"96\" text-anchor=\"middle\" font-size=\"10\" font-family=\"sans-serif\">(4)</text></svg>",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polyline points=\"24,24 64,24 64,64 24,64 24,24\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"24\" r=\"4.5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"64\" cy=\"24\" r=\"4.5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"64\" cy=\"64\" r=\"4.5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"24\" cy=\"64\" r=\"4.5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"4.5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 5
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"44\" x2=\"74\" y2=\"44\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"14\" cy=\"44\" r=\"5\" fill=\"black\"/><circle cx=\"74\" cy=\"44\" r=\"5\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><polygon points=\"44,20 68,68 20,68\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"20\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"68\" cy=\"68\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"68\" r=\"5\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"44\" r=\"28\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"24\" y1=\"24\" x2=\"64\" y2=\"64\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"24\" r=\"4.5\" fill=\"black\"/><circle cx=\"64\" cy=\"64\" r=\"4.5\" fill=\"black\"/></svg>",
        "score": 0
      }
    ],
    "explanation": "Pola serial pembentukan ruas dan simpul lingkaran:\n- Panel (1): 1 ruas garis lurus dengan 2 simpul lingkaran putih di ujung-ujungnya.\n- Panel (2): 2 ruas garis bersambung (sudut siku) dengan 3 simpul lingkaran putih.\n- Panel (3): 3 ruas garis bersambung (bentuk U terbuka) dengan 4 simpul lingkaran putih.\nMengikuti pola berurutan (+1 ruas dan +1 simpul), panel (4) harus membentuk segiempat utuh tertutup dengan penambahan simpul menjadi 5 lingkaran putih. Jawaban yang tepat adalah A."
  },
  {
    "id": "mini-tiu3-35",
    "category": "TIU",
    "topic": "Figural Ketaksamaan",
    "prompt": "Pilihlah salah satu gambar di bawah ini yang TIDAK sekelompok atau berbeda karakteristik geometrisnya dari empat gambar lainnya!",
    "choices": [
      {
        "id": "a",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M24,20 L54,20 L54,42 L24,42 L24,68\" fill=\"none\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"54\" cy=\"31\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "b",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M68,24 L68,54 L46,54 L46,24 L20,24\" fill=\"none\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"57\" cy=\"54\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "c",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M64,68 L34,68 L34,46 L64,46 L64,20\" fill=\"none\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"34\" cy=\"57\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "d",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M20,64 L20,34 L42,34 L42,64 L68,64\" fill=\"none\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"31\" cy=\"34\" r=\"4\" fill=\"black\"/></svg>",
        "score": 0
      },
      {
        "id": "e",
        "label": "[svg]<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" style=\"width:56px;height:56px;display:block\"><rect x=\"2\" y=\"2\" width=\"84\" height=\"84\" fill=\"white\" stroke=\"black\" stroke-width=\"1.5\"/><path d=\"M64,20 L34,20 L34,42 L64,42 L64,68\" fill=\"none\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"34\" cy=\"31\" r=\"4\" fill=\"black\"/></svg>",
        "score": 5
      }
    ],
    "explanation": "Aturan konsistensi geometris (Rotasi vs Refleksi Cermin):\nGambar pada opsi A, B, C, dan D merupakan bentuk bangun asimetris yang identik, hanya diputar (rotasi pada bidang 2D) masing-masing sebesar 0°, 90°, 180°, dan 270°.\nSebaliknya, gambar pada opsi E merupakan hasil pencerminan (refleksi horizontal) dari bangun tersebut, sehingga tidak akan pernah bisa berimpit dengan keempat gambar lainnya hanya melalui perputaran pada bidang datar. Oleh karena itu, opsi E adalah yang berbeda dari kelompoknya."
  }
];
