import type { MaterialTopic } from "./types";

export const MATERIALS: MaterialTopic[] = [
  {
    id: "twk-pancasila", category: "TWK", title: "Pancasila",
    summary: "Pahami Pancasila sebagai dasar negara, ideologi terbuka, dan panduan perilaku warga negara.",
    points: ["Lima sila merupakan satu kesatuan yang saling menjiwai.", "Nilai dasar bersifat tetap; penerapannya menyesuaikan perkembangan masyarakat.", "Soal situasional biasanya menguji toleransi, musyawarah, keadilan, dan gotong royong."],
    example: "Mengutamakan musyawarah tanpa menekan pendapat minoritas mencerminkan sila keempat sekaligus menghormati kemanusiaan.",
  },
  {
    id: "twk-uud", category: "TWK", title: "UUD 1945",
    summary: "Kenali struktur konstitusi, lembaga negara, hak warga, serta pembagian kekuasaan.",
    points: ["UUD 1945 merupakan hukum dasar tertulis.", "MPR berwenang mengubah dan menetapkan UUD.", "Mahkamah Konstitusi menguji undang-undang terhadap UUD 1945."],
    example: "Jika sebuah undang-undang diduga bertentangan dengan UUD 1945, pengujiannya diajukan ke Mahkamah Konstitusi.",
    chapters: [
      { title: "Latar Belakang & Sejarah", intro: "Sejarah pembentukan konstitusi.", sections: [{ heading: "Sejarah", body: "Latar belakang perumusan UUD 1945." }] },
      { title: "Struktur & Sistematika", intro: "Pembukaan dan pasal-pasal.", sections: [{ heading: "Sistematika", body: "Struktur naskah resmi UUD 1945." }] },
      { title: "Lembaga Negara", intro: "MPR, DPR, DPD, Presiden, BPK, MA, MK, KY.", sections: [{ heading: "Wewenang", body: "Tugas dan fungsi lembaga." }] },
      { title: "Hak & Kewajiban Warga", intro: "Pasal 27 hingga Pasal 34.", sections: [{ heading: "Pasal Kunci", body: "Hak asasi dan kewajiban bela negara." }] },
      { title: "Sistem Pemerintahan", intro: "Presidensial dan pembagian kekuasaan.", sections: [{ heading: "Sistem", body: "Karakteristik sistem presidensial." }] },
      { title: "Amandemen & Pengujian", intro: "Perubahan I sampai IV dan peran MK.", sections: [{ heading: "Pengujian UU", body: "Mekanisme judicial review di MK." }] },
    ],
  },
  {
    id: "twk-nkri", category: "TWK", title: "NKRI & Bhinneka",
    summary: "Pelajari persatuan dalam keberagaman, wawasan nusantara, dan bentuk negara kesatuan.",
    points: ["Indonesia berbentuk negara kesatuan dan republik.", "Bhinneka Tunggal Ika mengakui perbedaan dalam persatuan.", "Otonomi daerah berjalan di dalam kerangka NKRI."],
    example: "Kerja sama lintas suku untuk menyelesaikan masalah lingkungan adalah praktik persatuan yang menghargai keragaman.",
  },
  {
    id: "twk-pilar-negara", category: "TWK", title: "Pilar Negara",
    summary: "Pelajari kedudukan Pancasila, UUD NRI Tahun 1945, NKRI, dan Bhinneka Tunggal Ika serta hubungan keempatnya dalam soal TWK.",
    points: ["Pancasila merupakan dasar negara dan landasan nilai, sedangkan UUD NRI Tahun 1945 adalah konstitusi tertulis.", "NKRI menjelaskan bentuk negara kesatuan, sementara Bhinneka Tunggal Ika menegaskan persatuan dalam keberagaman.", "Jawaban TWK terbaik harus konstitusional, adil, proporsional, menjaga persatuan, dan sesuai konteks."],
    example: "Ketika kebijakan daerah bertentangan dengan aturan yang lebih tinggi, koreksi melalui mekanisme hukum karena otonomi tetap berjalan dalam kerangka NKRI.",
    chapters: [
      {
        title: "Tujuan Pembelajaran",
        intro: "Materi ini membangun pemahaman konseptual dan kemampuan menerapkan empat pilar dalam kasus kebangsaan serta soal TWK berbasis HOTS.",
        sections: [
          {
            heading: "Kompetensi yang dituju",
            body: "Setelah mempelajari topik ini, peserta diharapkan mampu memahami kedudukan setiap pilar dan menggunakannya untuk menganalisis situasi secara logis serta konstitusional.",
            bullets: [
              "Menjelaskan konsep Pancasila dan kedudukannya dalam kehidupan bernegara.",
              "Memahami UUD NRI Tahun 1945 dan dasar sistem ketatanegaraan Indonesia.",
              "Memahami NKRI, keutuhan wilayah, persatuan, integrasi nasional, dan Wawasan Nusantara.",
              "Memahami makna Bhinneka Tunggal Ika serta penerapannya dalam keberagaman.",
              "Menjelaskan hubungan Pancasila, UUD NRI Tahun 1945, NKRI, dan Bhinneka Tunggal Ika.",
              "Membedakan konsep yang sering tertukar dalam soal TWK.",
              "Menganalisis studi kasus kebangsaan dan memilih tindakan yang paling tepat.",
              "Menjawab soal TWK berbasis konsep dan HOTS dengan pendekatan logis serta konstitusional.",
            ],
          },
        ],
        callout: "Jangan berhenti pada hafalan. Gunakan pola: konsep → nilai → konstitusi → konteks → jawaban.",
      },
      {
        title: "Pengantar Memahami Pilar Negara",
        intro: "Dalam materi TWK, istilah empat pilar digunakan sebagai kerangka belajar untuk memahami Pancasila, UUD NRI Tahun 1945, NKRI, dan Bhinneka Tunggal Ika.",
        sections: [
          {
            heading: "Peran setiap pilar",
            body: "Keempat pilar memiliki fungsi dan kedudukan berbeda sehingga tidak boleh disamakan.",
            table: {
              columns: ["Fokus", "Peran dalam Kerangka Belajar"],
              rows: [
                ["Pancasila", "Landasan nilai dan dasar negara."],
                ["UUD NRI Tahun 1945", "Landasan konstitusional atau hukum dasar tertulis."],
                ["NKRI", "Bentuk negara Indonesia, yaitu negara kesatuan."],
                ["Bhinneka Tunggal Ika", "Semboyan yang menegaskan persatuan dalam keberagaman."],
              ],
            },
          },
          {
            heading: "Alur konseptual",
            body: "Pancasila memberi landasan nilai; UUD NRI Tahun 1945 memberi landasan konstitusional; NKRI menentukan bentuk negara; dan Bhinneka Tunggal Ika menjadi semboyan persatuan dalam keberagaman.",
          },
          {
            heading: "Relevansi bagi calon ASN",
            body: "Tugas pemerintahan menuntut kepatuhan pada hukum, pelayanan yang adil, penghormatan terhadap keberagaman, integritas, dan orientasi pada kepentingan umum.",
          },
        ],
      },
      {
        title: "Pilar I — Pancasila",
        intro: "Pancasila merupakan dasar negara Republik Indonesia dan landasan nilai dalam penyelenggaraan kehidupan bermasyarakat, berbangsa, dan bernegara.",
        sections: [
          {
            heading: "Pengertian dan kedudukan Pancasila",
            body: "Dalam soal TWK, fungsi Pancasila harus dibedakan berdasarkan konteks pertanyaan.",
            bullets: [
              "Sebagai dasar negara: landasan penyelenggaraan negara dan pembentukan kebijakan atau hukum.",
              "Sebagai pandangan hidup bangsa: pedoman nilai dalam kehidupan bersama.",
              "Sebagai ideologi negara: sistem nilai dan gagasan yang menjadi orientasi kehidupan bernegara.",
              "Sebagai sumber nilai: arah etis dan kebangsaan bagi warga serta penyelenggara negara.",
              "Sebagai kepribadian bangsa: karakter nilai yang hendak diwujudkan dalam kehidupan nasional.",
            ],
          },
          {
            heading: "Sejarah perumusan Pancasila",
            body: "Perumusan Pancasila merupakan satu rangkaian proses: BPUPKI membahas dasar negara, Panitia Sembilan menyusun Piagam Jakarta, dan PPKI mengesahkan rumusan final dalam Pembukaan UUD 1945.",
            table: {
              columns: ["Tanggal", "Peristiwa", "Kata Kunci"],
              rows: [
                ["29 Mei–1 Juni 1945", "Sidang pertama BPUPKI membahas dasar negara.", "Gagasan dasar negara"],
                ["1 Juni 1945", "Soekarno menyampaikan pidato tentang dasar negara.", "Pancasila"],
                ["22 Juni 1945", "Panitia Sembilan menghasilkan Piagam Jakarta.", "Rumusan dalam proses"],
                ["7 Agustus 1945", "BPUPKI dibubarkan dan PPKI dibentuk.", "Persiapan kemerdekaan"],
                ["17 Agustus 1945", "Proklamasi Kemerdekaan Indonesia.", "Kemerdekaan"],
                ["18 Agustus 1945", "PPKI mengesahkan UUD 1945 dan rumusan final Pancasila dalam Pembukaan.", "Rumusan final"],
              ],
            },
          },
          {
            heading: "Rumusan dan makna setiap sila",
            body: "Rumusan Pancasila tercantum dalam alinea keempat Pembukaan UUD NRI Tahun 1945. Keputusan Presiden Nomor 24 Tahun 2016 menetapkan 1 Juni sebagai Hari Lahir Pancasila.",
            table: {
              columns: ["Sila", "Rumusan", "Makna Inti", "Contoh Penerapan"],
              rows: [
                ["1", "Ketuhanan Yang Maha Esa", "Keimanan, kebebasan beragama, dan toleransi.", "Menghormati ibadah dan keyakinan orang lain."],
                ["2", "Kemanusiaan yang adil dan beradab", "Martabat manusia, keadilan, dan perilaku beradab.", "Menolak perundungan dan diskriminasi."],
                ["3", "Persatuan Indonesia", "Persatuan dan kepentingan nasional.", "Menjaga persatuan di tengah perbedaan."],
                ["4", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan", "Kedaulatan rakyat, musyawarah, kebijaksanaan, dan perwakilan.", "Mencari keputusan melalui proses yang adil dan rasional."],
                ["5", "Keadilan sosial bagi seluruh rakyat Indonesia", "Keadilan sosial dan keseimbangan hak serta kewajiban.", "Memberikan pelayanan publik yang tidak diskriminatif."],
              ],
            },
          },
          {
            heading: "Nilai setiap sila dalam kehidupan ASN",
            body: "Pola berulang berikut membantu membandingkan penerapan, pelanggaran, dan fokus soal untuk setiap sila.",
            table: {
              columns: ["Sila", "Makna", "Dalam Lingkungan Kerja", "Contoh Pelanggaran", "Pola Soal"],
              rows: [
                ["1", "Menghormati keyakinan dan ruang hidup damai bagi pemeluk agama atau kepercayaan.", "Tidak memaksakan keyakinan dan menghormati hari atau ruang ibadah sesuai aturan.", "Memaksakan keyakinan atau mendiskriminasi karena agama.", "Toleransi dan penghormatan hak."],
                ["2", "Mengakui martabat setiap manusia dan bertindak adil.", "Memberi layanan berdasarkan kebutuhan dan aturan, bukan status sosial.", "Merendahkan, menyiksa, mendiskriminasi, atau memperlakukan orang secara tidak manusiawi.", "Menjaga martabat dan keadilan."],
                ["3", "Mengutamakan keutuhan dan kepentingan nasional tanpa menghapus keberagaman.", "Bekerja lintas daerah atau suku dan menolak provokasi.", "Memecah belah atau mengutamakan kelompok secara sempit.", "Persatuan bukan keseragaman."],
                ["4", "Mengutamakan musyawarah, kebijaksanaan, perwakilan, dan tanggung jawab keputusan.", "Mendengar pihak terdampak sebelum mengambil keputusan.", "Memaksakan kehendak karena jabatan atau dukungan mayoritas.", "Bedakan musyawarah dari sekadar voting cepat."],
                ["5", "Mewujudkan keadilan, kesempatan yang wajar, dan manfaat pembangunan.", "Memberi layanan objektif dan akses setara sesuai aturan.", "Nepotisme, diskriminasi, atau kebijakan yang hanya menguntungkan kelompok tertentu.", "Pilih tindakan paling adil dan dapat dipertanggungjawabkan."],
              ],
            },
          },
          {
            heading: "Pancasila dalam kehidupan ASN",
            body: "Nilai Pancasila menjadi dasar perilaku ASN dalam pelayanan, keputusan, kolaborasi, dan penggunaan kewenangan.",
            bullets: [
              "Pelayanan publik harus objektif, transparan, tidak diskriminatif, dan berorientasi pada kepentingan masyarakat.",
              "Pengambilan keputusan harus berbasis aturan, bukti, kepentingan umum, dan keadilan.",
              "Kerja sama menghargai kompetensi dan latar belakang anggota tim.",
              "Konflik kepentingan ditangani dengan mendahulukan integritas dan kepentingan publik.",
              "Profesionalisme menuntut kompetensi, tanggung jawab, dan larangan menyalahgunakan kewenangan.",
              "Hubungan dengan masyarakat harus komunikatif, menghormati martabat, dan tidak menganggap kritik sebagai musuh.",
            ],
          },
        ],
        callout: "Landasan penyelenggaraan negara menunjuk Pancasila sebagai dasar negara; pedoman perilaku sehari-hari lebih dekat dengan kedudukannya sebagai pandangan hidup.",
      },
      {
        title: "Pilar II — UUD NRI Tahun 1945",
        intro: "UUD NRI Tahun 1945 merupakan konstitusi tertulis Indonesia yang mengatur organisasi negara, kewenangan kekuasaan, serta hubungan negara dengan warga.",
        sections: [
          {
            heading: "Konstitusi dan UUD",
            body: "Konstitusi secara konseptual lebih luas daripada UUD sebagai hukum dasar tertulis.",
            table: {
              columns: ["Konsep", "Penjelasan", "Jebakan"],
              rows: [
                ["Konstitusi", "Keseluruhan aturan dasar negara yang dapat mencakup aspek tertulis dan tidak tertulis.", "Menganggap konstitusi selalu identik dengan satu dokumen."],
                ["UUD", "Hukum dasar tertulis negara.", "Menganggap semua aturan ketatanegaraan hanya terdapat dalam UUD."],
              ],
            },
          },
          {
            heading: "Sejarah UUD NRI Tahun 1945",
            body: "Indonesia mengalami beberapa periode konstitusi sebelum kembali menggunakan UUD 1945 dan melakukan empat perubahan.",
            table: {
              columns: ["Periode", "Konstitusi / Peristiwa", "Keterangan"],
              rows: [
                ["18 Agustus 1945–27 Desember 1949", "UUD 1945", "Ditetapkan PPKI sehari setelah proklamasi."],
                ["27 Desember 1949–17 Agustus 1950", "Konstitusi RIS", "Indonesia berbentuk federal pada masa RIS."],
                ["17 Agustus 1950–5 Juli 1959", "UUDS 1950", "Kembali menjadi negara kesatuan dengan sistem parlementer."],
                ["5 Juli 1959–1999", "UUD 1945 berlaku kembali", "Dekrit Presiden 5 Juli 1959 memberlakukan kembali UUD 1945."],
                ["1999–sekarang", "UUD NRI Tahun 1945 setelah perubahan", "MPR melakukan empat perubahan pada 1999, 2000, 2001, dan 2002."],
              ],
            },
          },
          {
            heading: "Dekrit Presiden 5 Juli 1959",
            body: "Pokok Dekrit meliputi pembubaran Konstituante, pemberlakuan kembali UUD 1945 dan tidak berlakunya UUDS 1950, serta pembentukan MPRS dan DPAS.",
          },
          {
            heading: "Struktur UUD NRI Tahun 1945",
            body: "Dalam naskah setelah perubahan, gunakan istilah pasal-pasal secara akurat; istilah batang tubuh masih kerap muncul dalam bahan belajar lama.",
            bullets: ["Pembukaan.", "Pasal-pasal, termasuk bab dan pasal setelah perubahan.", "Aturan Peralihan.", "Aturan Tambahan."],
          },
          {
            heading: "Pembukaan UUD NRI Tahun 1945",
            body: "Setiap alinea Pembukaan memiliki pokok isi dan kata kunci yang berbeda.",
            table: {
              columns: ["Alinea", "Pokok Isi", "Kata Kunci"],
              rows: [
                ["I", "Kemerdekaan adalah hak segala bangsa dan penjajahan harus dihapuskan.", "Hak kemerdekaan, anti-penjajahan"],
                ["II", "Perjuangan menuju Indonesia yang merdeka, bersatu, berdaulat, adil, dan makmur.", "Perjuangan, cita-cita nasional"],
                ["III", "Kemerdekaan atas berkat rahmat Tuhan dan dorongan keinginan luhur.", "Religius, kemerdekaan"],
                ["IV", "Tujuan negara, susunan negara, kedaulatan rakyat, dan dasar negara Pancasila.", "Tujuan negara, Pancasila, kedaulatan rakyat"],
              ],
            },
          },
          {
            heading: "Pasal-pasal penting untuk TWK",
            body: "Pasal berikut sering menjadi dasar pertanyaan tentang bentuk negara, hak dan kewajiban, pemerintahan, serta kesejahteraan.",
            table: {
              columns: ["Pasal", "Isi Pokok", "Potensi Soal / Jebakan"],
              rows: [
                ["Pasal 1", "Negara kesatuan; kedaulatan rakyat dilaksanakan menurut UUD; Indonesia negara hukum.", "Bentuk negara, kedaulatan, negara hukum."],
                ["Pasal 18–18B", "Pemerintahan daerah, otonomi, hubungan pusat-daerah, serta pengakuan kekhususan dan keragaman daerah.", "Otonomi bukan federalisme."],
                ["Pasal 22E", "Pemilu langsung, umum, bebas, rahasia, jujur, dan adil setiap lima tahun.", "Luber jurdil."],
                ["Pasal 23", "Keuangan negara.", "APBN dan tata kelola keuangan."],
                ["Pasal 24", "Kekuasaan kehakiman merupakan kekuasaan yang merdeka.", "Independensi peradilan."],
                ["Pasal 27", "Persamaan dalam hukum dan pemerintahan; pekerjaan dan penghidupan layak; bela negara.", "Hak dan kewajiban."],
                ["Pasal 28A–28J", "Jaminan HAM, kewajiban menghormati hak orang lain, dan pembatasan tertentu berdasarkan undang-undang.", "HAM dan batasannya."],
                ["Pasal 29", "Negara berdasar atas Ketuhanan Yang Maha Esa dan menjamin kemerdekaan beragama serta beribadah.", "Kebebasan beragama."],
                ["Pasal 30", "Pertahanan dan keamanan negara, peran warga, serta sistem pertahanan dan keamanan.", "Hankam."],
                ["Pasal 31", "Hak mendapat pendidikan, kewajiban mengikuti pendidikan dasar, dan sistem pendidikan nasional.", "Pendidikan."],
                ["Pasal 32", "Kebudayaan nasional dan penghormatan bahasa daerah.", "Kebudayaan."],
                ["Pasal 33", "Perekonomian nasional, prinsip kebersamaan, cabang produksi penting, dan sumber daya alam.", "Ekonomi dan SDA."],
                ["Pasal 34", "Fakir miskin dan anak terlantar, jaminan sosial, fasilitas kesehatan, dan pelayanan umum.", "Kesejahteraan sosial."],
              ],
            },
          },
          {
            heading: "Empat perubahan UUD NRI Tahun 1945",
            body: "Perubahan UUD berdampak besar pada kelembagaan negara, hubungan antarkekuasaan, pemerintahan daerah, dan jaminan HAM.",
            table: {
              columns: ["Perubahan", "Tanggal", "Pokok Perubahan Ringkas"],
              rows: [
                ["Pertama", "19 Oktober 1999", "Pembatasan kekuasaan Presiden dan penguatan DPR dalam pembentukan undang-undang."],
                ["Kedua", "18 Agustus 2000", "Otonomi daerah, HAM, pertahanan-keamanan, wilayah negara, dan materi lain."],
                ["Ketiga", "9 November 2001", "Kedaulatan rakyat, lembaga negara, pemilu, DPD, MK, dan mekanisme kepresidenan."],
                ["Keempat", "10 Agustus 2002", "Penyempurnaan kelembagaan, pendidikan, perekonomian, kesejahteraan sosial, dan materi lain."],
              ],
            },
          },
        ],
        callout: "Alinea IV memuat rumusan Pancasila sekaligus tujuan negara dan prinsip kedaulatan rakyat.",
      },
      {
        title: "Pilar III — Negara Kesatuan Republik Indonesia",
        intro: "Pasal 1 ayat (1) UUD NRI Tahun 1945 menyatakan Indonesia ialah Negara Kesatuan yang berbentuk Republik.",
        sections: [
          {
            heading: "Pengertian NKRI dan istilah ketatanegaraan",
            body: "Bentuk negara, bentuk pemerintahan, sistem pemerintahan, dasar negara, dan konstitusi menjawab pertanyaan yang berbeda.",
            table: {
              columns: ["Istilah", "Jawaban Indonesia", "Jebakan"],
              rows: [
                ["Bentuk negara", "Kesatuan", "Bukan federal."],
                ["Bentuk pemerintahan", "Republik", "Bukan monarki."],
                ["Sistem pemerintahan", "Presidensial", "Jangan disamakan dengan bentuk negara."],
                ["Dasar negara", "Pancasila", "Bukan UUD."],
                ["Konstitusi", "UUD NRI Tahun 1945", "Bukan NKRI."],
              ],
            },
          },
          {
            heading: "Karakteristik NKRI",
            body: "NKRI menyatukan keragaman wilayah dan daerah dalam satu negara berdaulat yang berdasarkan hukum serta kedaulatan rakyat.",
            bullets: ["Negara kesatuan dengan pembagian kewenangan pusat dan daerah.", "Negara kepulauan dengan wilayah serta karakter geografis beragam.", "Negara hukum.", "Negara demokratis dengan kedaulatan rakyat menurut UUD.", "Pemerintahan daerah menjalankan otonomi dalam kerangka NKRI."],
          },
          {
            heading: "Keutuhan NKRI",
            body: "Keutuhan NKRI berarti mempertahankan persatuan, kedaulatan, integritas wilayah, dan kehidupan nasional dari ancaman militer maupun nonmiliter.",
            table: {
              columns: ["Ancaman / Tantangan", "Respons Kebangsaan"],
              rows: [
                ["Hoaks", "Verifikasi informasi, jangan menyebarkan, dan gunakan sumber tepercaya."],
                ["Provokasi", "Menahan diri, memeriksa fakta, dan mendorong dialog."],
                ["Konflik sosial", "Mediasi, perlindungan hak, dan penegakan hukum yang adil."],
                ["Polarisasi", "Mencari titik temu serta kepentingan bersama."],
                ["Separatisme", "Menguatkan persatuan, hukum, kesejahteraan, dan keadilan."],
                ["Diskriminasi", "Menjaga kesetaraan dan pelayanan nondiskriminatif."],
              ],
            },
          },
          {
            heading: "Wawasan Nusantara",
            body: "Wawasan Nusantara adalah cara pandang bangsa terhadap diri dan lingkungannya yang mengutamakan persatuan wilayah serta kehidupan nasional.",
            bullets: ["Fungsi: kerangka berpikir dalam kehidupan nasional.", "Tujuan: kehidupan nasional yang utuh, selaras, dan berorientasi pada kepentingan nasional.", "Implementasi: memperlakukan perbedaan daerah sebagai bagian dari satu kesatuan bangsa.", "Dalam ASN: kebijakan dan pelayanan tidak boleh terjebak pada kepentingan kedaerahan yang sempit."],
          },
          {
            heading: "Integrasi nasional",
            body: "Kenali konsep yang memperkuat atau justru mengancam kesatuan nasional.",
            table: {
              columns: ["Konsep", "Makna", "Contoh"],
              rows: [
                ["Integrasi", "Proses atau keadaan menyatunya unsur masyarakat dalam kehidupan nasional.", "Kerja sama lintas kelompok."],
                ["Disintegrasi", "Proses yang mengarah pada perpecahan atau keretakan kesatuan.", "Konflik berkepanjangan dan fragmentasi."],
                ["Toleransi", "Sikap menghormati perbedaan.", "Menghormati praktik budaya atau agama orang lain."],
                ["Intoleransi", "Menolak atau membatasi pihak lain karena perbedaan.", "Diskriminasi atas identitas."],
                ["Kepentingan nasional", "Kepentingan terkait keselamatan, kesejahteraan, dan keutuhan bangsa.", "Kebijakan yang manfaatnya luas."],
                ["Kelompok sempit", "Kepentingan yang hanya mengutamakan golongan sendiri.", "Nepotisme atau eksklusivisme."],
              ],
            },
          },
        ],
        callout: "Bentuk negara = kesatuan; bentuk pemerintahan = republik; sistem pemerintahan = presidensial.",
      },
      {
        title: "Pilar IV — Bhinneka Tunggal Ika",
        intro: "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu dan menegaskan bahwa persatuan dibangun di tengah keberagaman.",
        sections: [
          {
            heading: "Pengertian dan asal-usul",
            body: "Ungkapan Bhinneka Tunggal Ika berasal dari Kakawin Sutasoma karya Mpu Tantular pada masa Majapahit dan kemudian digunakan sebagai semboyan bangsa Indonesia. Persatuan tidak dibangun dengan menghapus perbedaan.",
          },
          {
            heading: "Makna Bhinneka Tunggal Ika",
            body: "Keberagaman dan identitas lokal dapat hidup berdampingan dengan identitas nasional.",
            bullets: ["Keberagaman diakui sebagai kenyataan sosial.", "Persatuan menjadi tujuan bersama.", "Toleransi dan saling menghormati menjadi prasyarat kehidupan bersama.", "Kesetaraan menolak perlakuan diskriminatif.", "Identitas nasional dapat hidup berdampingan dengan identitas lokal."],
          },
          {
            heading: "Bentuk dan pengelolaan keberagaman",
            body: "Keberagaman Indonesia meliputi suku, agama dan kepercayaan, ras, bahasa, budaya, adat, tradisi, daerah, kondisi geografis, serta kondisi sosial-ekonomi.",
            table: {
              columns: ["Keberagaman Dapat Menjadi", "Jika Dikelola dengan Baik", "Jika Dikelola Buruk"],
              rows: [
                ["Kekuatan", "Kolaborasi, kreativitas, dan solidaritas.", "Stereotip dan konflik."],
                ["Potensi", "Pertukaran budaya, inovasi, dan ekonomi kreatif.", "Eksklusivisme."],
                ["Tantangan", "Dialog, aturan adil, dan literasi kebangsaan.", "Polarisasi dan diskriminasi."],
              ],
            },
          },
          {
            heading: "Implementasi",
            body: "Bhinneka Tunggal Ika diwujudkan di berbagai ruang kehidupan melalui penghormatan, kolaborasi, dan kebijakan yang adil.",
            bullets: ["Keluarga: membiasakan penghormatan terhadap perbedaan.", "Sekolah atau kampus: kerja kelompok lintas latar belakang.", "Masyarakat: gotong royong dan penyelesaian konflik melalui dialog.", "Tempat kerja: promosi dan layanan berdasarkan kompetensi serta aturan.", "Pelayanan publik: tidak membedakan warga berdasarkan identitas.", "Media sosial: tidak menyebarkan konten pemecah belah dan memverifikasi informasi sebelum berbagi.", "Pemerintahan atau ASN: kebijakan menjangkau warga secara adil dan menghormati keragaman."],
          },
        ],
        callout: "Persatuan bukan keseragaman; Bhinneka Tunggal Ika menuntut hidup bersatu sambil menghormati perbedaan.",
      },
      {
        title: "Hubungan Keempat Pilar",
        intro: "Keempat pilar bekerja dalam dimensi berbeda tetapi saling menguatkan dalam kehidupan bernegara.",
        sections: [
          {
            heading: "Pertanyaan kunci setiap pilar",
            body: "Tentukan dahulu apakah soal menanyakan nilai, hukum, bentuk negara, atau pengelolaan keberagaman.",
            table: {
              columns: ["Pilar", "Pertanyaan Kunci", "Hubungan"],
              rows: [
                ["Pancasila", "Nilai apa yang menjadi dasar?", "Memberi arah nilai."],
                ["UUD NRI Tahun 1945", "Bagaimana nilai dan kekuasaan negara diatur?", "Memberi kerangka hukum dasar."],
                ["NKRI", "Dalam bentuk negara apa kehidupan diselenggarakan?", "Menegaskan negara kesatuan."],
                ["Bhinneka Tunggal Ika", "Bagaimana persatuan dijaga dalam keberagaman?", "Menjadi semboyan persatuan."],
              ],
            },
          },
          {
            heading: "Alur hubungan",
            body: "Nilai Pancasila diterjemahkan dalam aturan dasar UUD, diselenggarakan dalam bentuk Negara Kesatuan Republik Indonesia, dan menjaga persatuan di tengah keberagaman melalui Bhinneka Tunggal Ika.",
          },
          {
            heading: "Cara membaca soal integratif",
            body: "Jangan memaksa satu istilah menjawab semua persoalan. Identifikasi dahulu dimensi utama soal sebelum menentukan pilar yang paling tepat.",
          },
        ],
      },
      {
        title: "Konsep yang Sering Tertukar",
        intro: "Perbedaan inti berikut membantu menghindari opsi yang menggunakan istilah kebangsaan secara tidak tepat.",
        sections: [
          {
            heading: "Perbandingan konsep",
            body: "Gunakan batasan konseptual, bukan sekadar kemiripan kata.",
            table: {
              columns: ["Konsep", "Perbedaan Inti"],
              rows: [
                ["Dasar negara vs ideologi", "Dasar negara menekankan landasan penyelenggaraan negara; ideologi menekankan sistem nilai dan gagasan yang menjadi orientasi."],
                ["Pancasila vs UUD", "Pancasila adalah dasar negara dan nilai dasar; UUD adalah konstitusi tertulis atau hukum dasar."],
                ["Konstitusi vs UUD", "Konstitusi dapat dipahami lebih luas; UUD adalah hukum dasar tertulis."],
                ["Kesatuan vs federal", "Kesatuan berarti satu negara berdaulat; dalam federasi, negara bagian memiliki kedudukan konstitusional."],
                ["Bentuk negara vs bentuk pemerintahan", "Kesatuan menjawab susunan negara; republik menjawab bentuk pemerintahan."],
                ["Bentuk pemerintahan vs sistem pemerintahan", "Republik adalah bentuk pemerintahan; presidensial adalah sistem pemerintahan."],
                ["Demokrasi vs kedaulatan rakyat", "Demokrasi adalah prinsip pemerintahan yang melibatkan rakyat; kedaulatan rakyat menegaskan sumber kekuasaan berada pada rakyat menurut UUD."],
                ["Persatuan vs keseragaman", "Persatuan menyatukan tujuan tanpa menghapus perbedaan; keseragaman memaksakan kesamaan."],
                ["Integrasi vs disintegrasi", "Integrasi menguatkan kesatuan; disintegrasi mengarah pada perpecahan."],
                ["Nasionalisme vs chauvinisme", "Nasionalisme mencintai bangsa secara konstruktif; chauvinisme mengagungkan bangsa sendiri dan merendahkan pihak lain."],
                ["Otonomi daerah vs federalisme", "Otonomi adalah pembagian kewenangan dalam negara kesatuan; federalisme merupakan bentuk negara federasi."],
                ["Hak vs kewajiban", "Hak layak diterima atau diperoleh; kewajiban harus dilakukan."],
                ["Pusat vs daerah", "Pusat dan daerah memiliki kewenangan menurut UUD dan undang-undang; daerah tetap berada dalam NKRI."],
              ],
            },
          },
        ],
      },
      {
        title: "Kata Kunci TWK Pilar Negara",
        intro: "Kata kunci mempercepat identifikasi pilar, tetapi tidak menggantikan pemahaman konsep dan konteks soal.",
        sections: [
          {
            heading: "Kata kunci utama",
            body: "Gunakan kata kunci sebagai petunjuk awal sebelum menguji pilihan terhadap substansi soal.",
            table: {
              columns: ["Pilar", "Kata Kunci Utama"],
              rows: [
                ["Pancasila", "Dasar negara; ideologi; pandangan hidup; nilai; persatuan; musyawarah; keadilan."],
                ["UUD NRI Tahun 1945", "Konstitusi; negara hukum; kedaulatan rakyat; HAM; lembaga negara; pemerintahan."],
                ["NKRI", "Negara kesatuan; keutuhan; integrasi; persatuan; Wawasan Nusantara; kedaulatan."],
                ["Bhinneka Tunggal Ika", "Keberagaman; persatuan; toleransi; kesetaraan; kebudayaan; semboyan negara."],
              ],
            },
          },
        ],
        callout: "Kata kunci membantu mengingat, tetapi keputusan akhir tetap harus mengikuti konsep dan konteks.",
      },
      {
        title: "Jebakan Soal Pilar Negara",
        intro: "Opsi yang terdengar tegas atau nasionalis belum tentu benar apabila diskriminatif, inkonstitusional, atau mencampuradukkan konsep.",
        sections: [
          {
            heading: "Pola jebakan",
            body: "Waspadai pola berikut ketika mengeliminasi pilihan jawaban.",
            bullets: [
              "Pilihan terlihat nasionalis tetapi melanggar hak atau prinsip Pancasila.",
              "Pilihan mengatasnamakan persatuan tetapi menghapus keberagaman.",
              "Pilihan mengutamakan mayoritas dan mengabaikan hak kelompok lain.",
              "Pilihan menyamakan NKRI dengan sistem pemerintahan.",
              "Pilihan menyamakan negara kesatuan dengan negara federal.",
              "Pilihan keliru memahami kedudukan Pancasila atau UUD.",
              "Pilihan mencampuradukkan hak dan kewajiban.",
              "Pilihan mengutamakan kelompok daripada kepentingan nasional.",
              "Pilihan memakai kata ekstrem seperti selalu, semua, tidak boleh sama sekali, atau tanpa pengecualian tanpa dukungan konteks.",
            ],
          },
        ],
        callout: "Jangan memilih opsi hanya karena terdengar paling keras jika isinya diskriminatif, memaksakan keseragaman, melanggar konstitusi, atau mengutamakan kelompok sempit.",
      },
      {
        title: "Strategi Mengerjakan Soal TWK Pilar Negara",
        intro: "Tujuh langkah berikut membantu menghubungkan stimulus dengan konsep dan menilai pilihan secara sistematis.",
        sections: [
          {
            heading: "Tujuh langkah analisis",
            body: "Kerjakan secara berurutan agar istilah dan konteks tidak tertukar.",
            bullets: [
              "Identifikasi pilar yang diuji.",
              "Tentukan konsep utama.",
              "Cari kata kunci dalam kasus dan opsi.",
              "Hubungkan kasus dengan Pancasila dan UUD NRI Tahun 1945.",
              "Periksa kesesuaiannya dengan keutuhan NKRI dan Bhinneka Tunggal Ika.",
              "Eliminasi opsi yang ekstrem, diskriminatif, inkonstitusional, atau terlalu sempit.",
              "Pilih jawaban yang paling tepat, proporsional, komprehensif, dan sesuai konteks.",
            ],
          },
        ],
      },
      {
        title: "Rumus Cepat Pilar Negara",
        intro: "Mnemonic PUNB menjadi peta awal untuk mengingat fungsi pokok keempat pilar.",
        sections: [
          {
            heading: "PUNB",
            body: "Gunakan mnemonic ini untuk mengenali dimensi soal, lalu kembali pada konteks sebelum memilih jawaban.",
            bullets: ["P — Pancasila: nilai dasar.", "U — UUD NRI Tahun 1945: konstitusi atau hukum dasar.", "N — NKRI: bentuk negara.", "B — Bhinneka Tunggal Ika: persatuan dalam keberagaman."],
          },
        ],
        callout: "Mnemonic membantu orientasi awal, tetapi tidak boleh menggantikan analisis.",
      },
      {
        title: "20 Studi Kasus Pilar Negara",
        intro: "Dua puluh kasus berikut menghubungkan situasi, masalah, pilar, konsep, tindakan tepat, jebakan, dan alasan dalam satu matriks.",
        sections: [
          {
            heading: "Matriks studi kasus",
            body: "Bandingkan pola masalah dan alasan untuk memahami mengapa suatu tindakan lebih sesuai dengan pilar negara.",
            table: {
              columns: ["Situasi", "Permasalahan", "Pilar", "Konsep", "Tindakan Tepat", "Jebakan", "Alasan"],
              rows: [
                ["Konflik keberagaman di kantor", "Dua pegawai berbeda budaya berselisih karena cara komunikasi.", "Bhinneka + Pancasila", "Toleransi, kemanusiaan, persatuan", "Mediasi, klarifikasi, dan aturan kerja yang adil.", "Memihak teman sendiri.", "Persatuan dibangun dengan dialog, bukan memaksakan satu budaya."],
                ["Perbedaan pendapat kebijakan", "Tim ASN berbeda pendapat tentang prioritas program.", "Pancasila + UUD", "Musyawarah dan kepentingan publik", "Minta data, dengarkan pihak, dan putuskan secara akuntabel.", "Memakai jabatan untuk membungkam.", "Sila keempat menekankan hikmat dan permusyawaratan."],
                ["Hoaks di media sosial", "Pesan viral menuduh kelompok tertentu tanpa bukti.", "NKRI + Bhinneka", "Integrasi dan literasi", "Verifikasi dan jangan menyebarkan.", "Membagikan agar orang waspada.", "Peringatan tidak membenarkan penyebaran hoaks."],
                ["Pelayanan diskriminatif", "Petugas mendahulukan kenalan meski antrean sudah diatur.", "Pancasila + UUD", "Keadilan dan persamaan", "Ikuti prosedur dan berikan layanan objektif.", "Mendahulukan relasi demi efisiensi.", "Kepentingan publik mengalahkan kedekatan pribadi."],
                ["Kepentingan daerah", "Program daerah ingin mengabaikan kepentingan nasional.", "NKRI", "Kesatuan dan kepentingan nasional", "Cari solusi sesuai otonomi dan kepentingan nasional.", "Menganggap otonomi berarti bebas dari pusat.", "Otonomi berada dalam NKRI."],
                ["Budaya lokal", "Kegiatan kantor menghapus seluruh simbol budaya lokal demi keseragaman.", "Bhinneka", "Persatuan tanpa menghapus perbedaan", "Tetapkan identitas bersama sambil menghormati budaya.", "Menghapus semua perbedaan.", "Bhinneka bukan keseragaman."],
                ["Kritik kebijakan", "Pegawai menyampaikan kritik berbasis data terhadap program.", "Pancasila + UUD", "Demokrasi dan tanggung jawab", "Tanggapi substansi secara profesional.", "Menganggap semua kritik anti-pemerintah.", "Kritik konstruktif tidak otomatis anti-nasional."],
                ["Konflik mayoritas-minoritas", "Kelompok mayoritas ingin membatasi hak kelompok kecil.", "Bhinneka + UUD", "Kesetaraan dan hak konstitusional", "Pastikan kebijakan sesuai hukum dan nondiskriminatif.", "Membenarkan hanya karena mayoritas.", "Mayoritas bukan alasan menghapus hak."],
                ["Musyawarah", "Rapat tidak mencapai mufakat setelah diskusi panjang.", "Pancasila", "Musyawarah bijaksana", "Gunakan mekanisme keputusan sesuai aturan dan catat alasannya.", "Memaksa mufakat semu.", "Musyawarah bukan sekadar menunda keputusan."],
                ["Globalisasi", "Tren global memengaruhi gaya hidup generasi muda.", "Pancasila + Bhinneka", "Selektif dan berkepribadian", "Ambil yang positif tanpa kehilangan nilai kebangsaan.", "Menolak semua pengaruh asing.", "Keterbukaan memerlukan sikap kritis."],
                ["Otonomi daerah", "Daerah mengeluarkan kebijakan yang bertentangan dengan aturan lebih tinggi.", "UUD + NKRI", "Negara hukum dan hierarki kewenangan", "Koreksi melalui mekanisme hukum.", "Menganggap otonomi tidak dapat dikoreksi.", "Otonomi bukan kedaulatan terpisah."],
                ["Provokasi", "Akun anonim mengajak warga membenci kelompok tertentu.", "Bhinneka + NKRI", "Persatuan dan antidiskriminasi", "Laporkan, verifikasi, edukasi, dan jangan menyebarkan.", "Membalas provokasi dengan provokasi.", "Respons harus memperkecil konflik."],
                ["Konflik kepentingan", "Pejabat diminta memilih vendor milik kerabat.", "Pancasila", "Integritas dan keadilan", "Ungkap konflik kepentingan dan ikuti prosedur.", "Memilih karena lebih mudah.", "Kedekatan pribadi bukan dasar keputusan publik."],
                ["Bela negara", "Warga mengira bela negara hanya urusan militer.", "NKRI + UUD", "Tanggung jawab kewarganegaraan", "Berpartisipasi sesuai kapasitas dan hukum.", "Menganggap warga sipil tidak memiliki peran.", "Bela negara memiliki dimensi luas."],
                ["Pelayanan kelompok rentan", "Layanan digital sulit diakses warga lansia.", "Pancasila + UUD", "Keadilan sosial dan pelayanan", "Sediakan bantuan atau kanal alternatif sesuai kebijakan.", "Menyalahkan pengguna karena tidak melek teknologi.", "Keadilan mempertimbangkan akses nyata."],
                ["Diskusi identitas", "Forum menjadi ajang saling mengejek identitas.", "Bhinneka", "Saling menghormati", "Tetapkan aturan dialog dan fokus pada isu.", "Membiarkan karena dianggap bercanda.", "Kebebasan tidak berarti bebas merendahkan."],
                ["Persatuan tim", "Unit kerja terpecah berdasarkan asal daerah.", "NKRI + Bhinneka", "Identitas nasional dan kolaborasi", "Rotasi tim, bangun tujuan bersama, dan berikan penghargaan setara.", "Membentuk kelompok berdasarkan daerah.", "Kerja ASN harus mengatasi sekat sempit."],
                ["Keadilan sosial", "Anggaran hanya diarahkan ke wilayah yang paling vokal.", "Pancasila", "Keadilan dan prioritas objektif", "Gunakan indikator kebutuhan dan data.", "Memberi lebih kepada pihak yang paling menekan.", "Keadilan bukan hadiah bagi yang paling gaduh."],
                ["Kewajiban warga", "Warga menuntut hak tetapi menolak kewajiban terkait.", "UUD", "Keseimbangan hak dan kewajiban", "Jelaskan hak dan kewajiban secara proporsional.", "Menganggap hak selalu absolut.", "Konstitusi juga mengatur kewajiban dan pembatasan."],
                ["Integrasi nasional", "Bencana melanda daerah dengan identitas berbeda.", "NKRI + Bhinneka", "Gotong royong dan solidaritas", "Koordinasi lintas daerah dan berikan bantuan setara.", "Mendahulukan daerah sendiri tanpa dasar.", "Krisis dapat menjadi momentum integrasi."],
              ],
            },
          },
        ],
      },
      {
        title: "Tabel Hafalan Super Cepat",
        intro: "Empat tabel ringkas berikut merangkum konsep, kata kunci, contoh, dan jebakan utama dari setiap pilar.",
        sections: [
          {
            heading: "Pancasila",
            body: "Hubungkan nomor sila dengan konsep, kata kunci, dan contoh tindakan.",
            table: {
              columns: ["Pancasila", "Konsep", "Kata Kunci", "Contoh"],
              rows: [["Sila 1", "Ketuhanan", "Toleransi", "Menghormati ibadah."], ["Sila 2", "Kemanusiaan", "Martabat", "Antidiskriminasi."], ["Sila 3", "Persatuan", "Integrasi", "Gotong royong."], ["Sila 4", "Kerakyatan", "Musyawarah", "Mendengar pihak terdampak."], ["Sila 5", "Keadilan sosial", "Adil", "Layanan objektif."]],
            },
          },
          {
            heading: "UUD NRI Tahun 1945",
            body: "Gunakan pasal dan kata kunci untuk mengenali potensi pertanyaan.",
            table: {
              columns: ["UUD", "Materi", "Kata Kunci", "Potensi Soal"],
              rows: [["Pasal 1", "Kesatuan, kedaulatan, negara hukum", "Kesatuan / hukum", "Bentuk negara"], ["Pasal 18", "Pemerintahan daerah", "Otonomi", "Bukan federal"], ["Pasal 22E", "Pemilu", "Luber jurdil", "Asas pemilu"], ["Pasal 27", "Persamaan dan bela negara", "Hak / kewajiban", "Warga negara"], ["Pasal 28A–28J", "HAM", "Hak / batasan", "Konflik hak"], ["Pasal 29", "Agama", "Ketuhanan", "Kebebasan beragama"], ["Pasal 30", "Hankam", "Pertahanan", "Bela negara"], ["Pasal 31", "Pendidikan", "Pendidikan", "Hak / kewajiban"], ["Pasal 32", "Budaya", "Kebudayaan", "Bahasa daerah"], ["Pasal 33", "Ekonomi", "Kemakmuran", "SDA"], ["Pasal 34", "Kesejahteraan", "Jaminan sosial", "Fakir miskin"]],
            },
          },
          {
            heading: "NKRI",
            body: "Bedakan bentuk negara, cara pandang wilayah, proses integrasi, dan penjagaan keutuhan.",
            table: {
              columns: ["NKRI", "Pengertian", "Kata Kunci", "Contoh"],
              rows: [["Negara kesatuan", "Satu negara berdaulat", "Persatuan", "Pusat-daerah"], ["Wawasan Nusantara", "Cara pandang persatuan", "Wilayah / nasional", "Kebijakan lintas daerah"], ["Integrasi", "Menyatukan unsur bangsa", "Solidaritas", "Gotong royong"], ["Keutuhan", "Menjaga kesatuan", "Kedaulatan", "Antiprovokasi"]],
            },
          },
          {
            heading: "Bhinneka Tunggal Ika",
            body: "Ingat makna, contoh, dan jebakan dalam pengelolaan keberagaman.",
            table: {
              columns: ["Bhinneka", "Makna", "Contoh", "Jebakan"],
              rows: [["Keberagaman", "Perbedaan diakui", "Budaya lokal", "Menghapus perbedaan"], ["Persatuan", "Tetap satu", "Kerja lintas kelompok", "Keseragaman"], ["Toleransi", "Menghormati", "Ibadah atau budaya", "Diskriminasi"], ["Kesetaraan", "Perlakuan adil", "Layanan publik", "Mayoritas selalu benar"]],
            },
          },
        ],
      },
      {
        title: "Ringkasan 5–10 Menit Sebelum Ujian",
        intro: "Gunakan ringkasan ini sebagai pengingat terakhir untuk membedakan fungsi pilar, urutan sejarah, pasal penting, dan prinsip eliminasi.",
        sections: [
          {
            heading: "Empat pilar dalam satu pandangan",
            body: "Pancasila adalah nilai dan dasar negara; UUD NRI Tahun 1945 adalah konstitusi atau hukum dasar; NKRI adalah bentuk negara; Bhinneka Tunggal Ika adalah persatuan dalam keberagaman.",
          },
          {
            heading: "Ringkasan ujian",
            body: "Pastikan urutan dan perbedaan inti berikut sudah dikuasai.",
            bullets: [
              "Sejarah Pancasila: 1 Juni 1945 → Piagam Jakarta 22 Juni 1945 → rumusan final 18 Agustus 1945.",
              "Sejarah UUD: 1945 → Konstitusi RIS 1949 → UUDS 1950 → kembali ke UUD 1945 pada 1959 → empat perubahan 1999–2002.",
              "Pasal wajib: 1, 18, 22E, 27, 28A–28J, 29, 30, 31, 32, 33, dan 34.",
              "Persatuan bukan keseragaman dan otonomi bukan federalisme.",
              "Republik adalah bentuk pemerintahan; kesatuan adalah bentuk negara; presidensial adalah sistem pemerintahan.",
              "Jika dua opsi tampak benar, pilih yang paling konstitusional, adil, proporsional, menjaga persatuan, dan sesuai konteks.",
              "Jangan memilih opsi hanya karena terdengar paling keras atau paling nasionalis.",
            ],
          },
        ],
        callout: "Pahami fungsi setiap pilar, lalu uji setiap jawaban terhadap konstitusi, keadilan, proporsionalitas, persatuan, dan konteks.",
      },
    ],
  },
  {
    id: "twk-bahasa-indonesia", category: "TWK", title: "Bahasa Indonesia",
    summary: "Kuasai kedudukan Bahasa Indonesia, EYD Edisi V, kalimat efektif, tata makna, paragraf, serta penalaran wacana untuk soal TWK.",
    points: ["Bahasa Indonesia berkedudukan sebagai bahasa nasional sekaligus bahasa negara dengan fungsi yang berbeda.", "Ketelitian EYD, struktur kalimat, dan pilihan kata menentukan kebakuan serta keefektifan komunikasi.", "Analisis wacana menuntut pemahaman ide pokok, hubungan logis, fakta-opini, dan simpulan yang hanya bersumber dari teks."],
    example: "Pada kalimat ‘Karena hujan deras, rapat ditunda’, tanda koma digunakan karena anak kalimat mendahului induk kalimat.",
    chapters: [
      {
        title: "Kedudukan dan Fungsi Bahasa Indonesia sebagai Perekat Nation Branding",
        intro: "Dalam TWK CPNS, Bahasa Indonesia tidak hanya diuji melalui tata bahasa baku, tetapi juga sebagai simbol kedaulatan, identitas nasional, dan alat pemersatu bangsa.",
        sections: [
          {
            heading: "Kedudukan Bahasa Indonesia",
            body: "Berdasarkan Pasal 36 UUD 1945 dan Undang-Undang Nomor 24 Tahun 2009, Bahasa Indonesia memiliki dua kedudukan utama.",
            bullets: [
              "Bahasa nasional: berkedudukan di atas bahasa daerah. Kedudukan ini bertolak dari ikrar ketiga Sumpah Pemuda 28 Oktober 1928, yaitu menjunjung bahasa persatuan, Bahasa Indonesia.",
              "Bahasa negara atau bahasa resmi: menjadi bahasa resmi ketatanegaraan yang memperoleh kedudukan konstitusional melalui Pasal 36 UUD 1945 pada 18 Agustus 1945.",
            ],
          },
          {
            heading: "Perincian fungsi Bahasa Indonesia",
            body: "Kategori pada sel gabungan sumber diulang pada setiap baris agar fungsi dan implementasinya tetap jelas di desktop maupun ponsel.",
            table: {
              columns: ["Kedudukan", "Fungsi Utama", "Implementasi dan Konteks Tugas ASN"],
              rows: [
                ["Bahasa Nasional", "Lambang Kebanggaan Nasional", "Memancarkan nilai sosial-budaya luhur bangsa tanpa rasa rendah diri."],
                ["Bahasa Nasional", "Lambang Identitas Nasional", "Menjadi pembeda utama bangsa Indonesia dari bangsa lain di kancah internasional."],
                ["Bahasa Nasional", "Alat Pemersatu Antarsuku dan Antarbudaya", "Menjadi sarana integrasi nasional yang menyatukan ratusan suku bangsa dan bahasa daerah."],
                ["Bahasa Nasional", "Alat Perhubungan Antardaerah", "Menjadi media komunikasi antarwarga, antardaerah, dan antarbudaya tanpa menghilangkan akar daerah."],
                ["Bahasa Negara", "Bahasa Resmi Ketatanegaraan", "Wajib digunakan dalam naskah dinas, pidato kenegaraan, dokumen hukum, dan persidangan."],
                ["Bahasa Negara", "Bahasa Pengantar Pendidikan", "Digunakan dari jenjang pendidikan dasar hingga perguruan tinggi di seluruh NKRI."],
                ["Bahasa Negara", "Alat Perhubungan Penyelenggaraan Negara", "Menjadi sarana komunikasi dalam perencanaan, pelaksanaan, dan evaluasi pembangunan nasional."],
                ["Bahasa Negara", "Alat Pengembangan Kebudayaan dan Ilmu Pengetahuan", "Menjadi wadah penerjemahan, penulisan karya ilmiah, dan pengayaan istilah ilmu pengetahuan modern."],
              ],
            },
          },
        ],
        callout: "Keragaman suku atau budaya yang disatukan menunjuk fungsi alat pemersatu; ciri khas bangsa di mata dunia menunjuk fungsi lambang identitas nasional.",
      },
      {
        title: "Ejaan yang Disempurnakan Edisi V dan Pedoman Tata Tulis",
        intro: "EYD Edisi V menjadi pedoman penting untuk menilai penggunaan huruf kapital, bentuk terikat, kata depan, dan tanda baca dalam kalimat baku.",
        sections: [
          {
            heading: "Penggunaan huruf kapital",
            body: "Huruf kapital memiliki aturan khusus yang sering menjadi jebakan dalam soal rekonstruksi kalimat baku.",
            bullets: [
              "Jabatan dan gelar menggunakan huruf kapital jika diikuti nama orang, instansi, atau tempat. Baku: Presiden Joko Widodo, Gubernur Jawa Barat, Menteri Keuangan. Jika digunakan secara umum, tulis dengan huruf kecil: Kemarin saya bertemu seorang gubernur.",
              "Nama bangsa, suku, dan bahasa menggunakan huruf kapital pada nama khususnya, bukan pada kata bangsa, suku, atau bahasa. Baku: bangsa Indonesia, suku Dayak, bahasa Inggris. Tidak baku: Bangsa Indonesia, Suku dayak.",
              "Nama geografis menggunakan huruf kapital jika menunjuk nama tempat tertentu: Danau Toba, Gunung Merapi, Selat Sunda, dan Sungai Kapuas. Nama jenis ditulis dengan huruf kecil: gula jawa, batik solo, garam dapur, dan jeruk bali, kecuali jika secara khusus menunjuk asal geografis produk.",
              "Gelar keagamaan atau kehormatan tanpa nama menggunakan huruf kapital ketika dipakai sebagai sapaan. Contoh: ‘Terima kasih, Kiai.’ dan ‘Selamat pagi, Dokter.’",
            ],
          },
          {
            heading: "Penulisan kata bentuk terikat dan kata depan",
            body: "Bedakan bentuk terikat yang dirangkai dengan kata berikutnya dari kata depan penunjuk tempat atau arah yang ditulis terpisah.",
            table: {
              columns: ["Jenis Bentuk", "Aturan Penulisan", "Contoh Baku", "Contoh Tidak Baku"],
              rows: [
                ["Bentuk terikat, seperti manca-, pasca-, antar-, non-, dan multi-", "Ditulis serangkai dengan kata yang mengikutinya.", "pascasarjana, antarnegara, subbagian, nonaktif, multidimensi, beasiswa", "pasca sarjana, antar negara, non aktif, multi dimensi"],
                ["Bentuk terikat + kata berhuruf kapital", "Gunakan tanda hubung di antara bentuk terikat dan kata berikutnya.", "non-Indonesia, pro-IKN, anti-PBB, pasca-2024", "non Indonesia, pro IKN, anti PBB"],
                ["Bentuk terikat maha-", "Ditulis terpisah jika diikuti kata berimbuhan dan serangkai jika diikuti kata dasar, kecuali Maha Esa.", "Maha Pengasih, Mahakuasa, Maha Penyayang, Yang Maha Esa", "Maha kuasa, MahaPengasih, Yang Mahaesa"],
                ["Kata depan di, ke, dan dari", "Ditulis terpisah dari kata berikutnya jika menunjukkan tempat atau arah.", "di kantor, ke mana, di antara, dari daerah", "dikantor, kemana, diantara"],
              ],
            },
          },
          {
            heading: "Tanda baca pada kalimat majemuk",
            body: "Tanda koma digunakan berdasarkan hubungan antarklausa dan posisi anak kalimat.",
            bullets: [
              "Gunakan tanda koma sebelum kata hubung pertentangan tetapi, melainkan, dan sedangkan. Contoh: Budi rajin, sedangkan adiknya pemalas.",
              "Gunakan tanda koma jika anak kalimat mendahului induk kalimat. Contoh: Karena hujan deras, rapat ditunda.",
              "Jangan gunakan tanda koma jika induk kalimat mendahului anak kalimat. Contoh: Rapat ditunda karena hujan deras.",
              "Gunakan tanda koma setelah penghubung antarkalimat seperti oleh karena itu, dengan demikian, namun, dan meskipun demikian.",
            ],
          },
        ],
      },
      {
        title: "Kalimat Efektif dan Tata Makna Kata",
        intro: "Kalimat efektif menyampaikan gagasan secara akurat, lugas, logis, dan tidak menimbulkan kemubaziran atau ketaksaan.",
        sections: [
          {
            heading: "Ciri-ciri kalimat efektif",
            body: "Empat prinsip berikut dapat diuji melalui perbandingan kalimat salah dan perbaikannya.",
            table: {
              columns: ["Prinsip", "Penjelasan", "Contoh Salah", "Contoh Benar"],
              rows: [
                ["Kesepadanan", "Memiliki subjek dan predikat yang jelas serta tidak mengaburkan subjek dengan kata depan.", "Bagi semua peserta ujian diwajibkan membawa kartu ujian.", "Semua peserta ujian diwajibkan membawa kartu ujian."],
                ["Keparalelan", "Memiliki kesetaraan bentuk gramatikal atau imbuhan dalam perincian.", "Kegiatannya meliputi pembersihan lingkungan, mengecat tembok, dan penataan taman.", "Kegiatannya meliputi pembersihan lingkungan, pengecatan tembok, dan penataan taman."],
                ["Kehematan", "Menghindari kata redundan atau penanda jamak ganda.", "Para bapak-bapak sekalian agar supaya hadir tepat waktu.", "Bapak-bapak agar hadir tepat waktu atau Para bapak agar hadir tepat waktu."],
                ["Kelogisan", "Menyampaikan gagasan yang dapat diterima akal sehat.", "Waktu dan tempat kami persilakan.", "Bapak Menteri kami persilakan."],
              ],
            },
          },
          {
            heading: "Pergeseran dan tata makna kata",
            body: "Diksi harus sesuai konteks dan nilai rasa kata.",
            table: {
              columns: ["Jenis Perubahan", "Makna", "Contoh"],
              rows: [
                ["Generalisasi", "Makna sekarang lebih luas daripada makna asalnya.", "Bapak atau Ibu dahulu merujuk orang tua kandung, kini juga digunakan untuk orang yang lebih tua atau dihormati."],
                ["Spesialisasi", "Makna sekarang lebih sempit daripada makna asalnya.", "Sarjana dahulu berarti orang pandai atau cendekiawan, kini digunakan untuk lulusan jenjang S1."],
                ["Ameliorasi", "Kata pengganti memiliki nilai rasa lebih tinggi atau lebih sopan.", "Tunanetra menggantikan buta; lembaga pemasyarakatan menggantikan bui."],
                ["Peyorasi", "Kata memiliki nilai rasa lebih rendah atau lebih kasar.", "Bunting dirasakan lebih kasar dibandingkan hamil."],
                ["Sinestesia", "Makna berubah karena pertukaran tanggapan antara dua indra.", "Kata-katanya sangat pedas menggunakan tanggapan indra pengecap untuk pendengaran."],
              ],
            },
          },
        ],
      },
      {
        title: "Paragraf, Ide Pokok, dan Rekonstruksi Nalar Wacana",
        intro: "Posisi gagasan utama, kata acuan, simpulan, dan hubungan antarkalimat membantu menemukan ide pokok serta struktur paragraf.",
        sections: [
          {
            heading: "Jenis paragraf berdasarkan letak gagasan utama",
            body: "Letak ide pokok dan indikator kebahasaan membedakan empat pola paragraf.",
            table: {
              columns: ["Jenis Paragraf", "Letak Ide Pokok", "Ciri atau Kata Kunci Indikator"],
              rows: [
                ["Deduktif", "Awal paragraf", "Kalimat berikutnya memuat kata acuan seperti hal ini, tersebut, atau ini maupun pengulangan kata kunci."],
                ["Induktif", "Akhir paragraf", "Diakhiri simpulan dengan konjungsi oleh karena itu, dengan demikian, jadi, atau maka dari itu."],
                ["Campuran atau deduktif-induktif", "Awal dan akhir paragraf", "Gagasan ditegaskan kembali pada akhir paragraf dengan variasi kalimat."],
                ["Ineratif", "Tengah paragraf", "Diawali penjelas, diikuti inti pembahasan di tengah, lalu disusul penjelas kembali."],
              ],
            },
          },
          {
            heading: "Teknik cepat menemukan ide pokok",
            body: "Metode 1-L menggunakan kalimat pertama dan terakhir untuk menemukan posisi gagasan utama secara efisien.",
            bullets: [
              "Baca kalimat pertama dan kalimat terakhir paragraf.",
              "Periksa apakah kalimat terakhir mengandung konjungsi simpulan seperti oleh karena itu, dengan demikian, atau jadi. Jika ya, ide pokok cenderung berada di akhir.",
              "Jika kalimat terakhir hanya berupa penjelas lanjutan, ide pokok cenderung berada di awal.",
              "Rumuskan ide pokok sebagai ringkasan inti kalimat utama, bukan menyalin kata demi kata.",
            ],
          },
          {
            heading: "Hubungan antarkalimat dan konjungsi",
            body: "Konjungsi mengungkap hubungan logis dalam paragraf rumpang atau wacana.",
            bullets: [
              "Kausalitas atau sebab-akibat: karena, sebab, oleh karena itu, akibatnya, sehingga.",
              "Pertentangan: tetapi, melainkan, namun, akan tetapi, sebaliknya.",
              "Konsesif atau pengakuan: meskipun, walaupun, kendatipun, biarpun.",
              "Penambahan atau aditif: dan, serta, selain itu, di samping itu, tambahan pula.",
            ],
          },
        ],
      },
      {
        title: "Penalaran Naratif dan Analisis Wacana Kritis",
        intro: "Soal TWK dapat memadukan teks naratif dengan inferensi formal serta pembedaan fakta dan opini.",
        sections: [
          {
            heading: "Menarik simpulan logis",
            body: "Simpulan harus mengikuti hubungan premis tanpa menambahkan asumsi dari luar teks.",
            bullets: [
              "Modus ponens: premis 1 P → Q; premis 2 P; simpulan Q.",
              "Modus tollens: premis 1 P → Q; premis 2 ¬Q; simpulan ¬P.",
              "Silogisme hipotetis: premis 1 P → Q; premis 2 Q → R; simpulan P → R.",
            ],
          },
          {
            heading: "Fakta dan opini dalam wacana",
            body: "Nilai sebuah pernyataan berdasarkan keterbuktian dan sifat penilaiannya.",
            table: {
              columns: ["Kategori", "Ciri-ciri Utama", "Contoh Kata Kunci"],
              rows: [
                ["Fakta", "Dapat dibuktikan, memiliki data objektif seperti angka, statistik, tanggal, atau nama tempat.", "berdasarkan data, tercatat, pada tanggal 17 Agustus, sebesar 85%"],
                ["Opini", "Subjektif berupa tanggapan, gagasan, perkiraan, atau penilaian yang belum tentu terjadi.", "sebaiknya, mungkin, diperkirakan, dianggap, dinilai sangat baik, menurut saya"],
              ],
            },
          },
        ],
      },
      {
        title: "Simulasi Soal TWK dan Pembahasan",
        intro: "Tiga simulasi berikut mempertahankan seluruh pilihan sebagai materi bacaan. Sumber memberikan kunci dan pembahasan tanpa distribusi skor, sehingga skor tidak ditambahkan.",
        sections: [
          {
            heading: "Soal 1 — Penggunaan EYD V dan tata kata baku",
            body: "Pilihlah kalimat yang seluruh penulisan kata dan tanda bacanya sesuai dengan aturan EYD Edisi V.",
            choices: [
              { label: "A", text: "Pasca bencana gempa bumi, Pemerintah Daerah segera mendistribusikan bantuan sosial ke-masyarakat terdampak." },
              { label: "B", text: "Meskipun Indonesia merupakan negara kepulauan, namun semangat persatuan antar suku harus tetap dijaga." },
              { label: "C", text: "Prof. Dr. Ir. Ahmad Subagyo, M.Si. menghadiri seminar internasional tentang integrasi bahasa nasional di Jakarta." },
              { label: "D", text: "Semua mahasiswa pascasarjana diwajibkan menyusun disertasi sebagai syarat kelulusan." },
              { label: "E", text: "Bapak Gubernur meminta para pejabat-pejabat daerah untuk mengoptimalkan pelayanan publik." },
            ],
            analysis: {
              competency: "Penerapan bentuk terikat, konjungsi, gelar akademik, huruf kapital, tanda baca, dan ketepatan kata.",
              bestChoice: "C",
              explanation: "C benar karena penulisan gelar akademik, tanda titik, koma, dan kapitalisasi nama sesuai kaidah. A salah karena pascabencana harus serangkai dan ke masyarakat tidak memakai tanda hubung. B memakai pasangan meskipun–namun secara mubazir dan antarsuku seharusnya serangkai. D tidak tepat karena disertasi khusus untuk jenjang doktor, bukan seluruh pendidikan pascasarjana. E memakai penanda jamak ganda para pejabat-pejabat.",
            },
          },
          {
            heading: "Soal 2 — Kalimat efektif dan struktur gramatikal",
            body: "Manakah kalimat yang efektif serta memenuhi prinsip kelogisan dan kehematan kata?",
            choices: [
              { label: "A", text: "Dalam rapat kabinet terbatas itu membicarakan tentang penanganan krisis energi nasional." },
              { label: "B", text: "Pembersihan saluran air, perbaikan jalan berlubang, dan penataan taman kota dilakukan secara serentak." },
              { label: "C", text: "Bagi para peserta yang membawa ponsel pintar harap mengaturnya ke dalam mode getar." },
              { label: "D", text: "Untuk menghemat waktu dan efisiensi, waktu dan tempat kami persilakan kepada Bapak Pembicara." },
              { label: "E", text: "Berdasarkan hasil penelitian menunjukkan bahwa kesadaran berbahasa warga masih rendah." },
            ],
            analysis: {
              competency: "Kesepadanan struktur, keparalelan imbuhan, kehematan, dan kelogisan kalimat.",
              bestChoice: "B",
              explanation: "B benar karena bentuk pembersihan, perbaikan, dan penataan sejajar serta kalimat memiliki struktur dan makna yang logis. A dan E tidak memiliki subjek yang jelas akibat pembukaan dengan kata depan; A juga memakai bentuk membicarakan tentang yang tidak efektif. C tidak bersubjek dan bertele-tele. D tidak logis karena waktu dan tempat bukan pihak yang dapat dipersilakan.",
            },
          },
          {
            heading: "Soal 3 — Ide pokok dan penalaran wacana",
            body: "Bacalah paragraf berikut: Penguatan Bahasa Indonesia di lembaga publik bukan sekadar pemenuhan kaidah linguistik, melainkan bentuk nyata penegakan kedaulatan negara. Di era globalisasi, istilah asing dalam pelayanan publik dan ruang terbuka sering menggeser posisi bahasa nasional. Jika aparatur tidak konsisten mengarusutamakan Bahasa Indonesia dalam komunikasi kedinasan, identitas kolektif bangsa dapat memudar. Oleh karena itu, digitalisasi naskah dinas dan standardisasi istilah baku menjadi langkah strategis untuk memperkuat kedudukan Bahasa Indonesia sebagai pilar integrasi nasional. Gagasan utama paragraf tersebut adalah...",
            choices: [
              { label: "A", text: "Istilah asing di ruang publik mengancam kedaulatan bahasa nasional Indonesia." },
              { label: "B", text: "Penguatan dan pengarusutamaan Bahasa Indonesia merupakan langkah strategis penegakan kedaulatan negara." },
              { label: "C", text: "Digitalisasi naskah dinas merupakan satu-satunya cara melestarikan Bahasa Indonesia." },
              { label: "D", text: "Bahasa Indonesia berfungsi sebagai satu-satunya pilar integrasi nasional pada era globalisasi." },
              { label: "E", text: "Identitas kolektif bangsa memudar akibat kelalaian aparatur negara." },
            ],
            analysis: {
              competency: "Penentuan ide pokok, pola paragraf, keluasan simpulan, dan eliminasi pilihan ekstrem.",
              bestChoice: "B",
              explanation: "Paragraf berpola campuran atau deduktif-induktif: pentingnya penguatan Bahasa Indonesia sebagai instrumen kedaulatan dan integrasi dinyatakan pada awal lalu ditegaskan pada akhir. B merangkum keseluruhan gagasan. A dan E hanya mengambil penjelas, sedangkan C dan D terlalu ekstrem karena memakai frasa satu-satunya.",
            },
          },
        ],
        callout: "Jawaban terbaik merangkum konsep secara tepat, tidak menambah asumsi, dan tidak memakai kesimpulan yang lebih sempit atau lebih ekstrem daripada teks.",
      },
      {
        title: "Ringkasan Cepat TWK Bahasa Indonesia",
        intro: "Gunakan ringkasan ini untuk mengingat pola ejaan, kalimat efektif, dan penalaran yang paling sering menjadi jebakan.",
        sections: [
          {
            heading: "Cheat sheet ujian",
            body: "Enam pegangan berikut membantu pemeriksaan akhir sebelum memilih jawaban.",
            bullets: [
              "Bentuk terikat pasca-, antar-, non-, sub-, pro-, dan multi- ditulis serangkai, kecuali jika diikuti kata berhuruf kapital atau angka, yang menggunakan tanda hubung.",
              "Pisahkan di dan ke jika menunjukkan tempat atau arah, seperti di mana, ke mana, dan di kampus. Rangkaikan jika menjadi verba pasif, seperti ditulis, dikirim, dan diketik.",
              "Jangan menggunakan meskipun–namun atau karena–maka secara bersamaan dalam satu kalimat; pilih salah satu konjungsi.",
              "Gunakan tanda koma sebelum konjungsi tetapi, melainkan, dan sedangkan.",
              "Gelar atau jabatan memakai huruf kapital jika disertai nama atau digunakan sebagai sapaan; penggunaan umum ditulis dengan huruf kecil.",
              "Dalam silogisme dan penarikan kesimpulan, jangan memakai asumsi di luar teks. Simpulan harus bersumber dari premis yang diberikan.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "twk-nasionalisme", category: "TWK", title: "Nasionalisme",
    summary: "Pahami kesetiaan kepada bangsa, persatuan, identitas nasional, kedaulatan, serta tindakan nyata yang tetap terbuka dan solutif di tengah globalisasi.",
    points: ["Nasionalisme menempatkan kepentingan, keutuhan, dan kedaulatan bangsa di atas kepentingan pribadi atau kelompok.", "Nasionalisme yang sehat berbeda dari chauvinisme dan etnosentrisme karena tidak merendahkan bangsa atau budaya lain.", "Dalam soal TWK, pilih tindakan nyata yang berdampak luas, taat hukum, menjaga integrasi, dan tidak bersifat ekstrem."],
    example: "Memprioritaskan produk dalam negeri sambil aktif membantu peningkatan daya saing UMKM merupakan nasionalisme ekonomi yang konkret tanpa menutup diri dari perdagangan global.",
    chapters: [
      {
        title: "Pengertian, Hakikat, dan Tujuan Nasionalisme",
        intro: "Nasionalisme merupakan kesadaran dan komitmen untuk menempatkan kesetiaan kepada negara-bangsa sebagai orientasi utama dalam kehidupan bermasyarakat dan bernegara.",
        sections: [
          {
            heading: "Pengertian dan hakikat nasionalisme",
            body: "Secara etimologis, nasionalisme berasal dari kata nation yang berarti bangsa. Dalam konteks sosial-politik dan ketatanegaraan, nasionalisme adalah paham, kesadaran kolektif, serta komitmen ideologis yang menempatkan kesetiaan tertinggi individu kepada negara-bangsa (nation-state). Dalam SKD CPNS dan sekolah kedinasan, nasionalisme tidak hanya diuji sebagai hafalan definisi, tetapi melalui pengejawantahan kesetiaan dan penjagaan kedaulatan negara di tengah modernisasi serta globalisasi.",
          },
          {
            heading: "Tujuan utama nasionalisme",
            body: "Nasionalisme mengarahkan warga untuk menjaga keutuhan, memperkuat solidaritas, membangun kemandirian, dan memelihara martabat bangsa.",
            bullets: [
              "Menjamin keutuhan bangsa: memelihara keutuhan wilayah dan kedaulatan bangsa dari ancaman internal maupun eksternal.",
              "Menghilangkan sektarianisme: membangun solidaritas sosial tanpa membeda-bedakan suku, agama, ras, dan antargolongan (SARA).",
              "Mewujudkan kedaulatan ekonomi: mendorong kemandirian ekonomi masyarakat melalui kepemilikan dan konsumsi produk buatan dalam negeri.",
              "Mengangkat kehormatan bangsa: menumbuhkan rasa bangga dan menjaga martabat negara di mata internasional.",
            ],
          },
        ],
        callout: "Nasionalisme dalam TWK dinilai dari kesetiaan dan tindakan nyata untuk menjaga bangsa, bukan dari hafalan definisi semata.",
      },
      {
        title: "Indikator Utama Soal TWK Nasionalisme",
        intro: "Penguji menggunakan empat indikator operasional utama ketika menyusun stimulus soal TWK Nasionalisme.",
        sections: [
          {
            heading: "Identitas nasional",
            body: "Kesediaan psikologis dan tindakan nyata untuk bangga, menjaga, memelihara, serta menggunakan identitas resmi negara, seperti Bahasa Indonesia, produk dalam negeri, budaya lokal, bendera, lagu kebangsaan, dan lambang negara.",
          },
          {
            heading: "Persatuan dan kesatuan",
            body: "Komitmen mengikis primordialisme, etnosentrisme, dan sektarianisme demi mengukuhkan keutuhan NKRI dari Sabang sampai Merauke. Indikator ini menilai integrasi pada skala makro.",
          },
          {
            heading: "Kedaulatan dan kepentingan nasional",
            body: "Kemampuan menempatkan keselamatan, keutuhan, ketahanan ekonomi, serta nama baik bangsa di atas kepentingan pribadi, kelompok, atau intervensi asing.",
          },
          {
            heading: "Kehormatan negara atau nasionalisme prestasi",
            body: "Upaya aktif mengharumkan nama bangsa di ranah internasional melalui sains, teknologi, olahraga, seni budaya, maupun diplomasi.",
          },
        ],
      },
      {
        title: "Perkembangan Sejarah Nasionalisme di Indonesia",
        intro: "Narasi sejarah pergerakan nasional sering digunakan dalam soal TWK untuk menguji pemahaman tentang perubahan strategi perjuangan bangsa melalui lima fase.",
        sections: [
          {
            heading: "Fase Pra-Nasionalisme — sebelum abad ke-20",
            body: "Perjuangan bersifat parokial atau kedaerahan dan dipimpin raja, sultan, atau tokoh agama setempat. Perlawanan mengandalkan kekuatan fisik serta senjata tradisional tanpa organisasi modern. Ketergantungan pada pemimpin tunggal membuat gerakan mudah padam ketika pemimpinnya ditangkap atau gugur, serta mudah dipatahkan melalui politik adu domba divide et impera.",
          },
          {
            heading: "Fase Perintis — 1908 dan lahirnya Budi Utomo",
            body: "Pendirian Budi Utomo pada 20 Mei 1908 oleh Dr. Soetomo dan mahasiswa STOVIA menandai lahirnya kesadaran nasional yang terstruktur. Strategi bergeser dari pertempuran fisik kedaerahan menuju organisasi modern, emansipasi pendidikan, dan diplomasi intelektual. Nasionalisme mulai dirumuskan sebagai kesadaran nasib kolektif seluruh rakyat Hindia Belanda.",
          },
          {
            heading: "Fase Penegas dan Penggerak — Sumpah Pemuda 1928",
            body: "Kerapatan Pemoeda-Pemoedi Indonesia pada 28 Oktober 1928 merumuskan Sumpah Pemuda. Sekat organisasi primordial dan kesukuan, seperti Jong Java, Jong Sumatranen Bond, dan Jong Celebes, dilebur menjadi wadah persatuan. Deklarasinya mengukuhkan tiga pilar kebangsaan: satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan, Bahasa Indonesia.",
          },
          {
            heading: "Fase Pendobrak atau Proklamasi — 1945",
            body: "Proklamasi Kemerdekaan 17 Agustus 1945 serta penetapan Pancasila dan UUD 1945 menjadi puncak perjuangan. Status bangsa berubah dari bangsa terjajah menjadi negara-bangsa yang berdaulat secara hukum internasional.",
          },
          {
            heading: "Fase Pengisi Kemerdekaan — era pascakemerdekaan hingga modern",
            body: "Fokus perjuangan beralih pada penjagaan kedaulatan dari ancaman disintegrasi, globalisasi, kejahatan siber, dan hegemoni ekonomi asing. Tindakannya meliputi pembangunan kedaulatan pangan, energi, serta industri dalam negeri dan pencapaian prestasi bangsa di tingkat internasional.",
          },
        ],
      },
      {
        title: "Kamus Istilah Komparatif",
        intro: "Beberapa pilar kebangsaan saling beririsan. Perbandingan ini menegaskan esensi dan kedudukan masing-masing konsep dalam soal TWK.",
        sections: [
          {
            heading: "Batas tegas konsep kebangsaan",
            body: "Kenali kata kunci setiap konsep dan waspadai paham yang mengancam persatuan.",
            table: {
              columns: ["Paham / Istilah", "Esensi Konstruksi Teoretis", "Kedudukan / Implikasi Soal TWK"],
              rows: [
                ["Nasionalisme", "Kesetiaan pada kedaulatan, persatuan makro, cinta produk dalam negeri, serta penjagaan identitas nasional.", "Pilar utama — kata kunci: kesetiaan pada bangsa dan kedaulatan."],
                ["Patriotisme", "Turunan tindakan dari nasionalisme yang berfokus pada jiwa heroik, kepahlawanan, dan kerelaan berkorban demi negara.", "Subkompetensi — kata kunci: kerelaan berkorban jiwa atau harta saat darurat."],
                ["Cinta Tanah Air", "Perasaan kasih sayang, kebanggaan, dan kepedulian mendalam terhadap tanah kelahiran serta lingkungan kebangsaan.", "Landasan emosional — kata kunci: kepedulian dan kebanggaan terhadap budaya atau alam."],
                ["Chauvinisme", "Nasionalisme ekstrem atau sempit yang mengagungkan bangsa sendiri secara buta sambil merendahkan bangsa lain.", "Tanda bahaya — opsi jawaban yang salah dan eksklusif."],
                ["Etnosentrisme", "Pandangan sempit yang menilai budaya lain hanya dengan standar suku sendiri dan menganggap sukunya paling unggul.", "Tanda bahaya — ancaman disintegrasi yang harus dihilangkan."],
              ],
            },
          },
        ],
      },
      {
        title: "Nasionalisme, Patriotisme, dan Cinta Tanah Air",
        intro: "Indikator dan contoh tindakan membantu membedakan tiga konsep positif yang sering tampak serupa dalam soal situasional.",
        sections: [
          {
            heading: "Perbedaan indikator dan contoh sikap",
            body: "Perhatikan fokus utama setiap konsep sebelum memilih tindakan yang paling sesuai dengan stimulus soal.",
            table: {
              columns: ["Pilar / Konsep", "Indikator Utama dalam Soal", "Contoh Sikap Nyata dalam Kehidupan atau sebagai ASN"],
              rows: [
                ["Nasionalisme", "Kesetiaan sistemik, persatuan makro, penjagaan identitas nasional, dan kedaulatan negara.", "Menggunakan Bahasa Indonesia yang baik dan benar dalam tugas resmi; membeli dan mempromosikan produk UMKM lokal; menolak intervensi luar yang merugikan kedaulatan ekonomi."],
                ["Patriotisme", "Rela berkorban harta, waktu, tenaga, atau jiwa demi keselamatan negara saat krisis atau darurat.", "Petugas medis atau relawan bertugas di daerah bencana maupun wabah berbahaya; atlet tetap berjuang demi Merah Putih meski cedera; prajurit atau warga sipil mengorbankan kepentingan pribadi demi membela negara."],
                ["Cinta Tanah Air", "Rasa kasih sayang, kebanggaan, serta pemeliharaan lingkungan alam dan warisan budaya.", "Menjaga hutan dan lingkungan dari pencemaran; mempelajari, melestarikan, serta mengenakan batik atau menampilkan tarian tradisional; menjaga nama baik bangsa ketika berada di luar negeri."],
              ],
            },
          },
        ],
      },
      {
        title: "Implementasi Praktis dalam Kehidupan dan ASN",
        intro: "Nasionalisme diterapkan secara nyata melalui pilihan dan perilaku di bidang sosial-budaya, ekonomi, pendidikan, sains, serta tata kelola pemerintahan.",
        sections: [
          {
            heading: "Bidang sosial-budaya",
            body: "Menghormati perbedaan pandangan politik, suku, dan agama di lingkungan kerja serta masyarakat.",
          },
          {
            heading: "Bidang ekonomi",
            body: "Mengutamakan konsumsi produk dalam negeri dan tidak bersikap konsumtif terhadap barang impor mewah.",
          },
          {
            heading: "Bidang pendidikan dan sains",
            body: "Meningkatkan kompetensi diri dan berprestasi hingga tingkat internasional demi mengharumkan nama bangsa.",
          },
          {
            heading: "Bidang tata kelola dan birokrasi",
            body: "Menolak segala bentuk suap atau gratifikasi yang dapat merugikan keuangan dan martabat negara.",
          },
        ],
      },
      {
        title: "Bedah Analisis Studi Kasus",
        intro: "Dua kasus berikut mempertahankan seluruh pilihan A–E sebagai materi bacaan. Sumber memberikan jawaban tepat dan rasionalisasi tanpa distribusi skor, sehingga skor tidak ditambahkan.",
        sections: [
          {
            heading: "Kasus 1 — Globalisasi dan kedaulatan ekonomi domestik",
            body: "Arus globalisasi memicu masuknya produk kosmetik dan fesyen impor murah berdesain modern yang mendominasi pasar digital lokal. Kondisi ini membuat pelaku UMKM Indonesia terancam gulung tikar. Sebagai aparatur negara dengan komitmen nasionalisme yang kuat, tindakan yang paling mencerminkan implementasi pilar tersebut adalah...",
            choices: [
              { label: "A", text: "Meminta kementerian terkait menutup total akses perdagangan internasional dan melarang seluruh barang luar negeri." },
              { label: "B", text: "Menginisiasi boikot massal terhadap seluruh platform e-commerce yang memfasilitasi barang impor." },
              { label: "C", text: "Tetap membeli produk impor demi mengikuti tren global dan menjaga hubungan bilateral." },
              { label: "D", text: "Membeli produk kerajinan lokal hanya pada momen pameran atau hari besar nasional." },
              { label: "E", text: "Secara konsisten memprioritaskan produk buatan dalam negeri untuk kebutuhan harian serta aktif mempromosikannya melalui media sosial sebagai wujud kebanggaan ekonomi nasional." },
            ],
            analysis: {
              competency: "Nasionalisme ekonomi yang konkret, konsisten, berdampak luas, dan tidak isolasionis.",
              bestChoice: "E",
              explanation: "Opsi E memadukan tindakan nyata yang konsisten dengan dampak luas melalui promosi digital. Opsi A dan B ekstrem atau melanggar tatanan hukum, opsi C mengabaikan produk lokal, sedangkan opsi D hanya bersifat musiman. Nasionalisme modern membela kedaulatan ekonomi tanpa menutup diri secara radikal.",
            },
          },
          {
            heading: "Kasus 2 — Dilema talenta nasional dan kedaulatan riset",
            body: "Seorang peneliti muda Indonesia menemukan formula energi terbarukan ketika menjalani riset di Eropa. Korporasi multinasional menawarkan pendanaan riset bernilai triliunan rupiah beserta kewarganegaraan baru dengan syarat hak paten beralih kepada perusahaan asing. Sikap yang paling selaras dengan nasionalisme adalah...",
            choices: [
              { label: "A", text: "Menerima tawaran demi kelangsungan ilmu pengetahuan karena fasilitas di tanah air belum memadai." },
              { label: "B", text: "Menolak mentah-mentah lalu kembali ke tanah air meskipun harus berhenti meneliti karena ketiadaan modal." },
              { label: "C", text: "Menjual paten secara rahasia kepada perusahaan asing agar terhindar dari sorotan media dan politik." },
              { label: "D", text: "Menuntut pemerintah secara terbuka melalui media sosial agar membiayai kehidupannya setara dengan tawaran asing." },
              { label: "E", text: "Mempertahankan kewarganegaraan Indonesia, mengunci hak paten atas nama bangsa, serta menjajaki kerja sama pemanfaatan teknologi dengan institusi riset negara atau BUMN demi kemandirian energi nasional." },
            ],
            analysis: {
              competency: "Penjagaan identitas kebangsaan, hak strategis nasional, dan kedaulatan riset jangka panjang.",
              bestChoice: "E",
              explanation: "Opsi E mempertahankan identitas dan hak strategis bangsa sekaligus menawarkan solusi pemanfaatan riset melalui lembaga nasional. Opsi A bersifat pragmatis-individual, opsi B emosional tanpa solusi, opsi C mengkhianati kepentingan bangsa, dan opsi D berpusat pada kepentingan pribadi.",
            },
          },
        ],
        callout: "Jawaban nasionalisme terbaik melindungi kedaulatan secara konkret sekaligus menawarkan solusi yang realistis dan berkelanjutan.",
      },
      {
        title: "Strategi Menjawab Soal Nasionalisme",
        intro: "Gunakan eliminasi sistematis untuk menemukan jawaban yang berdampak luas, menjaga kepentingan negara, dan menghindari sikap ekstrem.",
        sections: [
          {
            heading: "Aturan Emas I — uji skala dampak",
            body: "Jika beberapa jawaban sama-sama bernilai baik, pilih tindakan dengan skala dampak paling luas atau makro bagi keutuhan dan kedaulatan bangsa, bukan tindakan yang berhenti pada kebaikan personal atau mikro.",
          },
          {
            heading: "Aturan Emas II — supremasi kepentingan negara",
            body: "Jika perintah atasan yang melanggar hukum, hubungan kekerabatan, atau ego pribadi bertentangan dengan keselamatan negara, kepentingan negara harus dimenangkan.",
          },
          {
            heading: "Aturan Emas III — hindari sikap ekstrem",
            body: "Hindari jawaban yang menutup diri secara radikal dari dunia luar, bersifat chauvinistik atau anarkis, maupun menyalahkan pihak lain tanpa memberi solusi nyata.",
          },
          {
            heading: "Alur eliminasi cepat",
            body: "Jalankan alur mental berikut ketika membaca narasi soal, idealnya dalam waktu kurang dari 40 detik.",
            bullets: [
              "Tentukan isu utama: SARA, globalisasi, kedaulatan, atau identitas nasional.",
              "Coret opsi yang menutup diri secara radikal atau membenci pihak asing karena mengarah pada chauvinisme dan ekstremisme.",
              "Coret opsi yang membiarkan perpecahan atau menunjukkan sikap apatis.",
              "Coret opsi yang mengutamakan keuntungan pribadi atau bersifat egois.",
              "Pilih opsi yang memberi solusi nyata sekaligus menjaga integrasi dan kedaulatan bangsa.",
            ],
          },
        ],
        callout: "Dampak makro + kepentingan negara + solusi nyata merupakan kombinasi terkuat dalam soal TWK Nasionalisme.",
      },
    ],
  },
  {
    id: "twk-integritas", category: "TWK", title: "Integritas",
    summary: "Pegang kejujuran, konsistensi, dan komitmen etis ketika menghadapi tekanan, pemberian, perintah yang salah, atau benturan kepentingan.",
    points: ["Selaraskan pikiran, perkataan, dan tindakan dengan hukum serta kode etik.", "Tolak gratifikasi sejak awal dan laporkan jika penerimaan tidak dapat ditolak.", "Ungkapkan benturan kepentingan dan mundur dari proses pengambilan keputusan terkait."],
    example: "Ketika perusahaan kerabat mengikuti lelang yang Anda nilai, ungkapkan hubungan tersebut kepada pimpinan dan mengundurkan diri dari tim penilai.",
    chapters: [
      {
        title: "Pengertian Integritas",
        intro: "Dalam SKD CPNS, integritas tidak hanya menguji hafalan definisi, tetapi mengukur internalisasi nilai moral, kejujuran, dan ketahanan etis saat menghadapi situasi dilematis dalam tugas.",
        sections: [
          {
            heading: "Definisi menurut lembaga resmi",
            body: "Menurut rujukan PermenPAN-RB dan KPK dalam sumber, integritas adalah tindakan yang konsisten dengan nilai, norma, dan etika organisasi serta keteguhan memegang prinsip moral secara jujur meskipun berada dalam situasi sulit atau penuh tekanan.",
          },
          {
            heading: "Integritas dalam konteks seleksi CPNS",
            body: "Integritas ASN merupakan keselarasan antara pikiran, perkataan, dan tindakan yang mencerminkan kejujuran, akuntabilitas, transparansi, kepatuhan terhadap peraturan perundang-undangan, dan kode etik profesi.",
          },
        ],
        callout: "Integritas terlihat paling jelas ketika seseorang tetap memegang nilai dan aturan saat menghadapi tekanan atau keuntungan pribadi.",
      },
      {
        title: "Tiga Dimensi Utama Integritas",
        intro: "Integritas individu terbentuk dari tiga dimensi yang saling menopang dan tidak dapat dipisahkan: kejujuran, konsistensi, dan komitmen.",
        sections: [
          {
            heading: "Kejujuran",
            body: "Keselarasan antara ucapan, perbuatan, dan kenyataan objektif tanpa kebohongan, penyembunyian fakta, atau manipulasi informasi. Kejujuran menjadi fondasi awal integritas.",
          },
          {
            heading: "Konsistensi",
            body: "Keteguhan mempertahankan norma, aturan, dan nilai moral dalam berbagai kondisi, termasuk ketika menghadapi tekanan atasan, iming-iming imbalan, atau ancaman eksternal.",
          },
          {
            heading: "Komitmen",
            body: "Tanggung jawab dan loyalitas penuh terhadap tugas negara, aturan hukum, dan amanah publik agar pejabat tidak memanfaatkan wewenang untuk kepentingan pribadi atau kelompok.",
          },
        ],
      },
      {
        title: "Sembilan Nilai Integritas KPK",
        intro: "Sembilan nilai integritas antikorupsi dikelompokkan menjadi nilai inti, etos kerja, dan nilai sikap sebagai indikator perilaku dalam soal HOTS TWK.",
        sections: [
          {
            heading: "Nilai dan indikator perilaku",
            body: "Kategori pada sel gabungan sumber diulang pada setiap baris agar konteks setiap nilai tetap jelas pada tampilan desktop maupun ponsel.",
            table: {
              columns: ["Kategori Aspek", "Nilai Integritas", "Penjelasan dan Indikator Perilaku Utama"],
              rows: [
                ["Nilai Inti", "Jujur", "Berkata dan bertindak sesuai kenyataan objektif serta tidak curang, memanipulasi data, atau memalsukan laporan keuangan maupun kegiatan."],
                ["Nilai Inti", "Disiplin", "Tepat waktu, taat Standar Operasional Prosedur, dan mematuhi aturan organisasi secara teratur serta konsisten."],
                ["Nilai Inti", "Tanggung jawab", "Berani menanggung risiko keputusan atau tindakan yang diambil dan menyelesaikan tugas hingga tuntas."],
                ["Etos Kerja", "Kerja keras", "Bersungguh-sungguh menyelesaikan target, tidak mudah menyerah, dan tidak mencari jalan pintas yang melanggar hukum."],
                ["Etos Kerja", "Sederhana", "Menjalani pola hidup yang berorientasi pada kebutuhan, tidak memamerkan kekayaan, dan bersikap bersahaja."],
                ["Etos Kerja", "Mandiri", "Tidak menggantungkan tugas pribadi kepada orang lain, memiliki inisiatif tinggi, dan mampu melakukan otokritik."],
                ["Nilai Sikap", "Adil", "Tidak memihak, tidak diskriminatif dalam pelayanan publik, dan memberikan hak atau layanan sesuai porsi serta ketentuan."],
                ["Nilai Sikap", "Berani", "Berani menolak penyimpangan, melaporkan kecurangan, dan menyampaikan kebenaran walaupun menghadapi ancaman."],
                ["Nilai Sikap", "Peduli", "Peka terhadap masalah sosial dan lingkungan kerja, membantu rekan, serta aktif menjaga aset dan keuangan negara dari kebocoran."],
              ],
            },
          },
        ],
      },
      {
        title: "Integritas Aparatur Sipil Negara",
        intro: "Integritas menjadi benteng utama ASN dari penyalahgunaan wewenang dalam menjalankan fungsi pemerintahan dan pelayanan masyarakat.",
        sections: [
          {
            heading: "Fungsi ASN dan benteng penyalahgunaan wewenang",
            body: "Berdasarkan Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara, pegawai ASN berfungsi sebagai pelaksana kebijakan publik, pelayan publik, serta perekat dan pemersatu bangsa. Integritas menjaga pelaksanaan ketiga fungsi tersebut dari penyalahgunaan wewenang.",
          },
        ],
      },
      {
        title: "Suap, Pemerasan, dan Gratifikasi",
        intro: "Soal TWK kerap menguji kemampuan membedakan suap, pemerasan, dan gratifikasi berdasarkan pihak yang berinisiatif, unsur transaksi, dan hubungannya dengan jabatan.",
        sections: [
          {
            heading: "Perbandingan tindakan koruptif",
            body: "Gunakan unsur inisiatif dan kesepakatan untuk mengenali bentuk tindakan dalam sebuah kasus.",
            table: {
              columns: ["Bentuk Tindakan", "Inisiatif Transaksi", "Unsur Kunci atau Kesepakatan", "Contoh Kasus"],
              rows: [
                ["Suap", "Pemberi atau kesepakatan dua arah", "Ada kesepakatan transaksional sejak awal untuk memengaruhi keputusan atau kebijakan pejabat publik.", "Pengusaha memberi uang Rp50 juta kepada ASN agar memenangkan tender proyek."],
                ["Pemerasan", "Penerima atau oknum pejabat", "Pejabat memaksa pihak lain memberikan uang atau sesuatu dengan ancaman penyalahgunaan kekuasaan.", "Petugas izin menahan berkas dan mengancam tidak memprosesnya jika tidak diberi uang rokok."],
                ["Gratifikasi", "Pemberi sebagai tanda terima kasih atau hadiah", "Pemberian dalam arti luas tanpa kesepakatan awal, tetapi berhubungan dengan jabatan penerima.", "Kontraktor memberikan laptop kepada Pejabat Pembuat Komitmen setelah proyek selesai."],
              ],
            },
          },
        ],
      },
      {
        title: "Mekanisme Pelaporan Gratifikasi",
        intro: "Penanganan gratifikasi mengutamakan pencegahan sejak awal dan pelaporan melalui saluran resmi ketika pemberian tidak dapat ditolak.",
        sections: [
          {
            heading: "Batas waktu dan kanal pelaporan",
            body: "ASN yang menerima gratifikasi terkait jabatan dan berlawanan dengan kewajiban atau tugas wajib melapor kepada Unit Pengendalian Gratifikasi instansi atau KPK paling lambat 30 hari kerja sejak tanggal penerimaan.",
          },
          {
            heading: "Prioritas tindakan dalam soal TWK",
            body: "Tindakan paling ideal adalah menolak gratifikasi secara langsung sejak awal. Pelaporan dalam 30 hari kerja dipilih ketika pemberian tidak dapat ditolak, misalnya dikirim ke rumah melalui kurir atau diterima dalam situasi acara formal.",
          },
        ],
        callout: "Jika masih dapat menolak dengan aman dan sopan, utamakan penolakan langsung; gunakan mekanisme pelaporan ketika penerimaan tidak dapat dicegah.",
      },
      {
        title: "Benturan Kepentingan",
        intro: "Benturan kepentingan terjadi ketika kepentingan pribadi, finansial, keluarga, atau pertemanan bertabrakan dengan kewajiban publik dan mengancam objektivitas keputusan.",
        sections: [
          {
            heading: "Sikap integritas yang tepat",
            body: "Ungkapkan potensi benturan kepentingan secara tertulis kepada atasan atau panitia dan mengundurkan diri dari proses pengambilan keputusan yang terkait. Transparansi dan penarikan diri menjaga objektivitas serta akuntabilitas proses.",
          },
        ],
      },
      {
        title: "Strategi Menjawab Soal Integritas",
        intro: "Soal Integritas disajikan sebagai narasi kasus HOTS. Lima kaidah berikut membantu mengenali tindakan yang paling konsisten dengan hukum dan etika publik.",
        sections: [
          {
            heading: "Utamakan penolakan langsung",
            body: "Jika pilihan membandingkan menolak dengan sopan sejak awal dan menerima lalu melapor, utamakan penolakan sejak awal. Pencegahan langsung menunjukkan keteguhan integritas yang lebih tinggi.",
          },
          {
            heading: "Tempatkan hukum dan SOP di atas perintah atasan",
            body: "Perintah atasan atau kebiasaan organisasi tidak dapat melegalkan tindakan yang melanggar SOP, kode etik, atau hukum. Pilih kepatuhan pada aturan, bukan ketakutan pada hierarki.",
          },
          {
            heading: "Waspadai pembenaran demi kepentingan bersama",
            body: "Alasan seperti kepentingan organisasi, kelancaran kantor, atau membantu masyarakat tidak membenarkan metode yang salah atau fiktif.",
          },
          {
            heading: "Transparan dalam benturan kepentingan",
            body: "Jika memiliki hubungan keluarga atau bisnis dengan peserta lelang maupun calon pegawai, nyatakan hubungan secara terbuka dan mundur dari tim penilai.",
          },
          {
            heading: "Jaga akuntabilitas dan kesederhanaan",
            body: "Pertanggungjawabkan sumber kekayaan melalui mekanisme yang berlaku dan hindari gaya hidup pamer atau hedonis karena pola konsumtif dapat menjadi pintu masuk tindakan koruptif.",
          },
        ],
      },
      {
        title: "Bedah Studi Kasus Integritas",
        intro: "Empat kasus berikut mempertahankan seluruh pilihan sebagai materi bacaan. Sumber hanya mencantumkan jawaban terbaik dan pembahasan, sehingga distribusi skor tidak ditambahkan.",
        sections: [
          {
            heading: "Kasus 1 - Hadiah laptop setelah proyek selesai",
            body: "Pak Surya adalah Pejabat Pembuat Komitmen. Setelah proyek gedung selesai tepat waktu dan berkualitas, kontraktor memberinya sebuah laptop sebagai ucapan terima kasih tanpa meminta imbalan pada masa mendatang. Sikap yang paling mencerminkan integritas adalah...",
            choices: [
              { label: "A", text: "Menerima laptop karena proyek telah selesai dan tidak ada maksud memengaruhi keputusan." },
              { label: "B", text: "Menolak pemberian secara sopan karena laptop tersebut berhubungan dengan jabatannya sebagai Pejabat Pembuat Komitmen." },
              { label: "C", text: "Menerima laptop lalu menyerahkannya sebagai aset kantor agar dapat digunakan bersama." },
              { label: "D", text: "Menerima laptop lalu melaporkannya kepada KPK dalam waktu 30 hari kerja." },
              { label: "E", text: "Menolak hadiah dan langsung melaporkan kontraktor kepada kepolisian." },
            ],
            analysis: {
              competency: "Budaya antigratifikasi dan tindakan preventif.",
              bestChoice: "B",
              explanation: "Penolakan langsung dan sopan menjadi tindakan pencegahan utama ketika pemberian berkaitan dengan jabatan. Pelaporan digunakan ketika situasi tidak memungkinkan penerima menolak sejak awal.",
            },
          },
          {
            heading: "Kasus 2 - Perintah mencairkan anggaran fiktif",
            body: "Sebagai bendahara pengeluaran, Anda diminta atasan mencairkan anggaran rapat luar kota yang tidak pernah dilaksanakan. Atasan beralasan dana akan digunakan untuk menutup kebutuhan operasional kantor yang mendesak. Sikap yang paling tepat adalah...",
            choices: [
              { label: "A", text: "Menolak dengan tegas karena membuat laporan fiktif melanggar hukum dan integritas." },
              { label: "B", text: "Mencairkan dana selama ada perintah tertulis dan tanda tangan atasan." },
              { label: "C", text: "Menolak secara halus dan menyarankan atasan menggunakan dana pribadi terlebih dahulu." },
              { label: "D", text: "Mencairkan dana karena tujuannya untuk kelancaran operasional kantor, bukan kepentingan pribadi." },
              { label: "E", text: "Langsung melaporkan atasan kepada KPK tanpa melakukan klarifikasi." },
            ],
            analysis: {
              competency: "Kejujuran dan kepatuhan hukum di bawah tekanan hierarki.",
              bestChoice: "A",
              explanation: "Integritas menempatkan hukum dan kejujuran di atas perintah atasan. Pertanggungjawaban fiktif tetap merupakan pelanggaran, sehingga perintah yang bertentangan dengan hukum dan SOP tidak wajib dipatuhi.",
            },
          },
          {
            heading: "Kasus 3 - Perusahaan kerabat mengikuti lelang",
            body: "Dian menjadi anggota tim penilai pengadaan. Ia mengetahui salah satu perusahaan peserta lelang yang menawarkan nilai kompetitif dimiliki saudara sepupunya. Langkah yang paling mencerminkan integritas publik adalah...",
            choices: [
              { label: "A", text: "Tetap menilai perusahaan secara profesional dan objektif tanpa memberi tahu siapa pun." },
              { label: "B", text: "Mengeliminasi perusahaan sepupunya secara sepihak agar tidak dituduh melakukan nepotisme." },
              { label: "C", text: "Meminta komisi kepada sepupunya jika perusahaan tersebut memenangkan lelang." },
              { label: "D", text: "Mengungkapkan potensi benturan kepentingan kepada pimpinan dan mengundurkan diri dari tim penilai." },
              { label: "E", text: "Melanjutkan penilaian tetapi memberi bobot sedikit lebih rendah agar terlihat netral." },
            ],
            analysis: {
              competency: "Transparansi dan pengelolaan benturan kepentingan.",
              bestChoice: "D",
              explanation: "Hubungan keluarga harus diungkapkan secara transparan. Mengundurkan diri dari proses penilaian menjaga objektivitas dan akuntabilitas keputusan.",
            },
          },
          {
            heading: "Kasus 4 - Makanan ringan dari warga",
            body: "Budi, staf pelayanan publik, sering menerima makanan atau minuman dari warga yang puas setelah pengurusan dokumen selesai. Tindakan yang sebaiknya diambil adalah...",
            choices: [
              { label: "A", text: "Menerima makanan dan mengonsumsinya bersama rekan kerja." },
              { label: "B", text: "Menolak dengan halus dan menjelaskan bahwa pelayanan prima merupakan kewajiban ASN tanpa imbalan." },
              { label: "C", text: "Menerima makanan tetapi menggantinya dengan memberikan uang kepada warga." },
              { label: "D", text: "Menerima dengan syarat warga tidak memberitahukannya kepada petugas lain." },
              { label: "E", text: "Melaporkan makanan ringan tersebut secara resmi kepada KPK." },
            ],
            analysis: {
              competency: "Budaya antigratifikasi dalam pelayanan publik.",
              bestChoice: "B",
              explanation: "Budaya integritas dibangun dengan menolak pemberian yang berkaitan dengan pelayanan, sekalipun nilainya kecil. ASN sudah menerima imbalan dari negara untuk memberikan pelayanan prima.",
            },
          },
        ],
        callout: "Dalam soal Integritas, pilihan terbaik mencegah penyimpangan sejak awal, tetap taat hukum, dan melindungi objektivitas keputusan publik.",
      },
    ],
  },
  {
    id: "twk-bela-negara", category: "TWK", title: "Bela Negara",
    summary: "Wujudkan bela negara melalui cinta tanah air, kepatuhan hukum, pengamalan Pancasila, pengorbanan, integritas, dan kontribusi profesional.",
    points: ["Bela negara adalah hak sekaligus kewajiban seluruh warga sesuai peran dan kapasitasnya.", "Lima nilai dasarnya mencakup cinta tanah air, kesadaran berbangsa, kesetiaan pada Pancasila, rela berkorban, dan kemampuan awal bela negara.", "Bagi ASN, bela negara diwujudkan secara nonfisik melalui pelayanan, akuntabilitas, literasi digital, dan penjagaan kerukunan."],
    example: "ASN yang menjaga kerahasiaan dokumen negara, menolak gratifikasi, dan melayani masyarakat secara adil sedang menerapkan bela negara melalui profesinya.",
    chapters: [
      {
        title: "Pengertian Bela Negara",
        intro: "Bela negara merupakan sikap, tekad, dan perilaku warga yang dilandasi kecintaan kepada NKRI berdasarkan Pancasila dan UUD 1945 untuk menjaga kelangsungan bangsa dan negara.",
        sections: [
          {
            heading: "Hak dan kewajiban seluruh warga",
            body: "Bela negara bukan hanya tugas TNI atau Polri melalui tindakan militer atau fisik. Dalam pengertian modern dan komprehensif, bela negara adalah hak sekaligus kewajiban seluruh warga negara Indonesia sesuai peran, profesi, dan kapasitas masing-masing.",
          },
          {
            heading: "Makna bagi ASN dan CPNS",
            body: "Bagi ASN maupun CPNS, bela negara diwujudkan secara nonfisik melalui profesionalisme, integritas tinggi, sikap bebas korupsi, kolusi, dan nepotisme, serta pelayanan publik yang menempatkan kepentingan bangsa di atas kepentingan pribadi atau kelompok.",
          },
        ],
        callout: "Bela negara tidak terbatas pada angkat senjata; setiap profesi dapat berkontribusi menjaga bangsa melalui tindakan yang bertanggung jawab.",
      },
      {
        title: "Landasan Hukum Bela Negara",
        intro: "Pelaksanaan bela negara memiliki dasar hukum dari tingkat konstitusi hingga peraturan perundang-undangan sektoral.",
        sections: [
          {
            heading: "Dasar hukum dan substansi utama",
            body: "Tabel berikut merangkum ketentuan utama yang menjadi landasan bela negara dan kaitannya dengan kewajiban warga serta ASN.",
            table: {
              columns: ["Dasar Hukum", "Substansi dan Muatan Kebijakan Utama"],
              rows: [
                ["UUD 1945 Pasal 27 Ayat (3)", "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara sebagai hak sekaligus kewajiban moral dan hukum."],
                ["UUD 1945 Pasal 30 Ayat (1)", "Setiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara."],
                ["UU Nomor 3 Tahun 2002 tentang Pertahanan Negara", "Mengatur Sistem Pertahanan dan Keamanan Rakyat Semesta yang melibatkan seluruh warga negara, wilayah, dan sumber daya nasional."],
                ["UU Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional", "Mengatur Pembinaan Kesadaran Bela Negara, Komponen Utama, Komponen Cadangan, dan Komponen Pendukung pertahanan negara."],
                ["UU Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara", "Menetapkan kewajiban ASN untuk setia dan taat pada Pancasila, UUD 1945, NKRI, dan pemerintah yang sah serta menjaga persatuan bangsa."],
              ],
            },
          },
        ],
      },
      {
        title: "Lima Nilai Dasar Bela Negara",
        intro: "Nilai dasar bela negara ditanamkan melalui lima pilar yang mencakup sikap kebangsaan, pengamalan ideologi, pengorbanan, dan kesiapan diri.",
        sections: [
          {
            heading: "Cinta tanah air",
            body: "Mengenal dan mencintai tanah air, bangga sebagai bangsa Indonesia, menggunakan produk dalam negeri, menjaga kebersihan serta kelestarian lingkungan, dan menjaga nama baik bangsa serta negara.",
          },
          {
            heading: "Sadar berbangsa dan bernegara",
            body: "Disiplin, taat pada hukum dan peraturan, menjalankan hak serta kewajiban sesuai undang-undang, aktif dalam organisasi kemasyarakatan, dan menghargai keberagaman suku, agama, ras, serta antargolongan.",
          },
          {
            heading: "Setia pada Pancasila sebagai ideologi negara",
            body: "Memahami dan mengamalkan nilai Pancasila dalam kehidupan sehari-hari, meyakininya sebagai ideologi serta dasar negara yang mempersatukan bangsa, dan menolak ideologi radikal yang bertentangan dengan Pancasila.",
          },
          {
            heading: "Rela berkorban untuk bangsa dan negara",
            body: "Bersedia mengorbankan waktu, tenaga, dan pikiran demi kemajuan bangsa, siap menghadapi berbagai ancaman, serta membantu sesama warga yang mengalami kesulitan.",
          },
          {
            heading: "Kemampuan awal bela negara",
            body: "Memiliki kecerdasan emosional, spiritual, dan intelektual; memelihara kesehatan jiwa serta raga; rutin berolahraga; dan memanfaatkan kearifan lokal untuk menjaga kedaulatan bangsa.",
          },
        ],
      },
      {
        title: "Ciri-Ciri Sikap dan Perilaku Bela Negara",
        intro: "Sikap bela negara memiliki enam karakteristik yang membedakannya dari tindakan biasa dan mengarahkan kontribusi warga pada keutuhan bangsa.",
        sections: [
          {
            heading: "Enam ciri utama",
            body: "Ciri bela negara mencakup landasan nilai, kepatuhan, prioritas kepentingan, integritas, keterlibatan seluruh profesi, dan kesiapan menghadapi ancaman.",
            bullets: [
              "Berlandaskan jiwa nasionalisme tinggi: setiap tindakan didasari patriotisme dan kepedulian terhadap keutuhan bangsa.",
              "Tunduk pada hukum dan konstitusi: mematuhi UUD 1945, Pancasila, serta regulasi hukum negara.",
              "Mengutamakan kepentingan umum: mendahulukan kepentingan nasional, masyarakat, dan persatuan daripada kepentingan pribadi, golongan, atau partai.",
              "Memiliki integritas moral dan profesionalisme: menjalankan tugas secara jujur, akuntabel, profesional, serta menolak korupsi, kolusi, dan nepotisme.",
              "Bersifat inklusif dan multidimensi: dapat dilakukan seluruh lapisan masyarakat sesuai profesinya tanpa harus memegang senjata.",
              "Responsif terhadap ancaman bangsa: memiliki kesiapan mental dan fisik untuk merespons ancaman, tantangan, hambatan, dan gangguan terhadap kedaulatan negara.",
            ],
          },
        ],
      },
      {
        title: "Tujuan Bela Negara",
        intro: "Upaya pembelaan negara menjaga keberlangsungan NKRI sekaligus memastikan nilai, wilayah, budaya, dan kedaulatannya tetap terlindungi.",
        sections: [
          {
            heading: "Lima tujuan strategis",
            body: "Tujuan bela negara bergerak dari perlindungan eksistensi bangsa hingga pencegahan ancaman terhadap berbagai bidang kehidupan nasional.",
            bullets: [
              "Mempertahankan kelangsungan hidup bangsa dan negara agar identitas serta keberadaan NKRI tetap kokoh di tengah globalisasi dan dinamika geopolitik.",
              "Menjaga keutuhan wilayah darat, laut, dan udara Indonesia dari ancaman separatisme maupun disintegrasi.",
              "Melestarikan budaya, norma hukum, nilai luhur bangsa, dan kearifan lokal sebagai bagian dari kebudayaan nasional.",
              "Menjalankan nilai Pancasila dan UUD 1945 untuk mewujudkan tujuan nasional dalam Pembukaan UUD 1945 Alinea Keempat.",
              "Mencegah ancaman, tantangan, hambatan, dan gangguan agar kedaulatan politik, ekonomi, sosial, serta pertahanan negara tidak diintervensi pihak asing.",
            ],
          },
        ],
      },
      {
        title: "Konsensus Dasar Berbangsa dan Bernegara",
        intro: "Pemahaman bela negara dalam TWK berkaitan erat dengan empat konsensus dasar bangsa yang menjadi fondasi kehidupan nasional.",
        sections: [
          {
            heading: "Empat konsensus dasar",
            body: "Keempat konsensus ini menghubungkan landasan ideologis, konstitusional, bentuk negara, dan semangat persatuan.",
            bullets: [
              "Pancasila: sumber dari segala sumber hukum, landasan ideologis, dan pandangan hidup bangsa.",
              "UUD 1945: hukum dasar tertulis tertinggi serta pedoman penyelenggaraan negara.",
              "NKRI: bentuk negara kesatuan yang berdaulat, bersifat final, dan tidak dapat diganggu gugat.",
              "Bhinneka Tunggal Ika: semboyan pemersatu yang menghargai keberagaman suku, agama, ras, dan budaya dalam wadah persatuan.",
            ],
          },
        ],
      },
      {
        title: "Implementasi Bela Negara bagi ASN",
        intro: "Bagi ASN, bela negara diwujudkan melalui nilai BerAKHLAK dan tindakan profesional yang menjaga pelayanan, aset, data, persatuan, serta kepercayaan publik.",
        sections: [
          {
            heading: "Pelayanan dan akuntabilitas",
            body: "Melayani masyarakat secara adil, jujur, cepat, dan non-diskriminatif tanpa membedakan latar belakang sosial.",
          },
          {
            heading: "Integritas dan akuntabilitas tinggi",
            body: "Menjaga kerahasiaan dokumen negara, mengelola aset negara secara efisien, dan menolak gratifikasi.",
          },
          {
            heading: "Adaptif dan literasi digital",
            body: "Menguasai teknologi digital, bijak bermedia sosial dengan menyaring informasi sebelum membagikannya, serta tanggap terhadap perkembangan zaman.",
          },
          {
            heading: "Menangkal radikalisme dan menjaga kerukunan",
            body: "Tidak terlibat aktif maupun pasif dalam gerakan radikalisme, bersikap toleran terhadap perbedaan, dan menjaga kondusivitas lingkungan kerja.",
          },
        ],
        callout: "Bela negara bagi ASN tampak pada kualitas pelayanan, kejujuran, keamanan informasi, dan kemampuan menjaga persatuan di tempat kerja.",
      },
      {
        title: "Strategi Mengerjakan Soal Bela Negara",
        intro: "Soal TWK bertipe HOTS sering memakai narasi kasus. Kenali indikator nilai, gunakan perspektif ASN, dan singkirkan pengecoh yang menyempitkan bela negara menjadi tindakan fisik semata.",
        sections: [
          {
            heading: "Trik 1 - Pahami kata kunci indikator nilai",
            body: "Produk lokal, kebudayaan, dan nama baik bangsa mengarah pada Cinta Tanah Air. Hukum, aturan, serta organisasi mengarah pada Sadar Berbangsa dan Bernegara. Kesediaan mendahulukan kepentingan umum atau mengorbankan waktu, tenaga, dan biaya mengarah pada Rela Berkorban.",
          },
          {
            heading: "Trik 2 - Gunakan kerangka perspektif ASN",
            body: "Pilih tindakan yang paling mencerminkan ASN profesional, netral, berintegritas, dan solutif. Hindari opsi yang terlalu emosional atau skeptis terhadap negara.",
          },
          {
            heading: "Trik 3 - Kenali bela negara modern dan nonfisik",
            body: "Dalam kasus hoaks, media sosial, atau keamanan siber, bentuk bela negara ASN ialah menggunakan literasi digital secara bijak dan menjaga integritas data, bukan ikut berdebat tanpa arah di media sosial.",
          },
          {
            heading: "Trik 4 - Eliminasi pengecoh yang terlalu militeristik",
            body: "Bela negara modern tidak selalu berbentuk angkat senjata atau latihan militer. Pilihan yang terlalu militeristik sering menjadi pengecoh ketika tokoh dalam soal adalah warga sipil atau ASN.",
          },
          {
            heading: "Trik 5 - Kuasai pasal dan undang-undang kunci",
            body: "Ingat UUD 1945 Pasal 27 Ayat (3) tentang hak dan kewajiban bela negara, Pasal 30 Ayat (1) tentang pertahanan dan keamanan, UU Nomor 3 Tahun 2002, UU Nomor 23 Tahun 2019, serta UU Nomor 20 Tahun 2023.",
          },
        ],
        callout: "Pilih jawaban yang menjaga kepentingan bangsa melalui tindakan legal, inklusif, profesional, dan sesuai peran tokoh dalam soal.",
      },
    ],
  },
  {
    id: "tiu-verbal", category: "TIU", title: "Kemampuan Verbal",
    summary: "Latih analogi, silogisme, dan analisis hubungan makna secara teliti.",
    points: ["Pada analogi, cari hubungan antarkata sebelum melihat pilihan.", "Silogisme harus mengikuti premis, bukan pengetahuan umum.", "Waspadai simpulan yang memakai kata 'semua' tanpa dukungan premis."],
    example: "Dokter : pasien setara dengan guru : murid karena keduanya menunjukkan profesi dan pihak yang dilayani.",
  },
  {
    id: "tiu-numerik", category: "TIU", title: "Kemampuan Numerik",
    summary: "Kuasai hitung dasar, rasio, persentase, rata-rata, dan soal cerita.",
    points: ["Ubah persen menjadi pecahan sederhana bila memungkinkan.", "Pada rasio, jumlahkan bagian sebelum mencari nilai tiap bagian.", "Perkirakan hasil untuk memeriksa kewajaran jawaban."],
    example: "Rasio 2:3 dengan total 50 berarti satu bagian bernilai 10, sehingga nilainya 20 dan 30.",
  },
  {
    id: "tiu-deret", category: "TIU", title: "Deret & Pola",
    summary: "Temukan pola selisih, rasio, selang-seling, atau gabungan operasi.",
    points: ["Periksa selisih antarsuku terlebih dahulu.", "Jika selisih tidak tetap, cek selisih tingkat kedua.", "Pisahkan suku ganjil dan genap untuk pola selang-seling."],
    example: "3, 7, 11, 15 memiliki selisih tetap 4, sehingga suku berikutnya 19.",
  },
  {
    id: "tiu-figural", category: "TIU", title: "Logika Analitis",
    summary: "Susun informasi, batasan, dan urutan secara sistematis sebelum memilih jawaban.",
    points: ["Tuliskan fakta pasti terlebih dahulu.", "Bedakan syarat perlu dan syarat cukup.", "Eliminasi pilihan yang melanggar satu saja batasan."],
    example: "Jika A sebelum B dan B sebelum C, maka A pasti sebelum C.",
  },
  {
    id: "tkp-pelayanan", category: "TKP", title: "Pelayanan Publik",
    summary: "Layani masyarakat secara solutif, empatik, transparan, cepat, adil, dan tetap taat SOP.",
    points: ["Utamakan kebutuhan dan hak masyarakat tanpa diskriminasi.", "Berikan solusi konkret dengan komunikasi yang tenang dan santun.", "Jaga integritas, akuntabilitas, serta keberlanjutan layanan dalam setiap kondisi."],
    example: "Saat berkas warga dari daerah terpencil belum lengkap, jelaskan kekurangannya dengan santun dan bantu verifikasi dokumen digital tanpa melanggar SOP.",
    chapters: [
      {
        title: "Tujuan Pembelajaran",
        intro: "Materi ini membentuk pola pikir ASN yang berorientasi pada kepuasan publik, solutif, tanggap, dan akuntabel agar peserta mampu memilih tindakan bernilai tinggi dalam TKP.",
        sections: [
          {
            heading: "Kompetensi yang dituju",
            body: "Setelah mempelajari materi, peserta diharapkan mampu memahami konsep pelayanan publik, menganalisis peran ASN, mengenali jebakan, dan memilih respons terbaik secara konsisten.",
            bullets: [
              "Menjelaskan definisi, tujuan, dan prinsip dasar Pelayanan Publik berdasarkan regulasi yang berlaku di Indonesia.",
              "Mengidentifikasi peran, fungsi, dan tanggung jawab ASN sebagai pelayan masyarakat.",
              "Menerapkan pola pikir yang berorientasi pada kepuasan publik, solutif, tanggap, dan akuntabel.",
              "Mengenali pilihan jawaban jebakan yang sering muncul pada soal TKP Pelayanan Publik.",
              "Menganalisis pilihan jawaban untuk konsisten memilih tindakan bernilai skor 5.",
            ],
          },
        ],
        callout: "Pelayanan terbaik memadukan kepedulian kepada masyarakat dengan kepatuhan pada aturan yang sah.",
      },
      {
        title: "Pengertian Pelayanan Publik",
        intro: "Pelayanan publik adalah rangkaian kegiatan penyelenggara layanan untuk memenuhi kebutuhan warga negara dan penduduk atas barang, jasa, serta pelayanan administratif.",
        sections: [
          {
            heading: "Definisi sederhana dan landasan hukum",
            body: "Menurut Undang-Undang Nomor 25 Tahun 2009 tentang Pelayanan Publik, pelayanan publik merupakan kegiatan atau rangkaian kegiatan untuk memenuhi kebutuhan pelayanan sesuai peraturan perundang-undangan bagi setiap warga negara dan penduduk atas barang, jasa, dan/atau pelayanan administratif yang disediakan penyelenggara pelayanan publik.",
          },
          {
            heading: "Makna dalam konteks ASN",
            body: "Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara menempatkan ASN sebagai pelayan publik. ASN bukan pejabat yang dilayani, melainkan pelayan masyarakat yang wajib memberikan pelayanan secara adil, merata, cepat, dan profesional.",
          },
          {
            heading: "Hubungan dengan tugas dan tanggung jawab",
            body: "Pelayanan publik merupakan fondasi seluruh tugas teknis ASN. Setiap tindakan ASN memengaruhi persepsi masyarakat terhadap pemerintah, sehingga kualitas pelayanan menjadi cerminan kualitas tata kelola pemerintahan atau good governance.",
          },
          {
            heading: "Contoh penerapan sehari-hari",
            body: "Orientasi pelayanan tampak dalam interaksi yang sederhana tetapi konsisten.",
            bullets: [
              "Memberikan informasi prosedur perizinan dengan ramah dan transparan.",
              "Melayani antrean warga di kantor kelurahan tanpa membedakan status sosial.",
              "Menindaklanjuti keluhan masyarakat terkait gangguan sarana publik secara cepat.",
            ],
          },
        ],
      },
      {
        title: "Tujuan Pelayanan Publik",
        intro: "Penyelenggaraan pelayanan publik bertujuan memenuhi hak masyarakat sekaligus membangun pemerintahan yang efektif, tepercaya, dan akuntabel.",
        sections: [
          {
            heading: "Lima tujuan strategis",
            body: "Kelima tujuan ini menjadi ukuran kualitas layanan dan arah tindakan ASN dalam soal TKP.",
            bullets: [
              "Memberikan pelayanan berkualitas sesuai standar mutu terbaik, misalnya menerbitkan KTP secara presisi dan tepat waktu.",
              "Memenuhi kebutuhan dan hak masyarakat untuk memperoleh pelayanan dasar secara layak.",
              "Meningkatkan kepuasan masyarakat melalui perlakuan yang santun dan profesional sehingga Indeks Kepuasan Masyarakat meningkat.",
              "Membangun kepercayaan publik melalui pengalaman layanan yang adil, jelas, dan dapat diandalkan.",
              "Mewujudkan pemerintahan yang efektif, transparan, dan akuntabel serta mencegah pungli, nepotisme, dan penundaan yang tidak perlu.",
            ],
          },
        ],
      },
      {
        title: "Konsep Dasar Pelayanan Publik",
        intro: "Enam konsep dasar berikut membantu mengenali fokus perilaku yang diuji dalam skenario Pelayanan Publik.",
        sections: [
          {
            heading: "Enam konsep dasar",
            body: "Gunakan tabel ini untuk membandingkan posisi masyarakat, peran ASN, dan standar tindakan yang diharapkan.",
            table: {
              columns: ["Konsep Dasar", "Penjelasan dalam Konteks Soal TKP"],
              rows: [
                ["Masyarakat", "Penerima layanan yang posisi hukumnya harus dihormati dan dilayani tanpa bias."],
                ["ASN pelayan masyarakat", "ASN hadir untuk menyelesaikan masalah masyarakat, bukan menambah beban atau masalah."],
                ["Orientasi kebutuhan", "Pelayanan didasarkan pada kebutuhan publik, bukan kemudahan ego sektoral atau petugas."],
                ["Responsivitas", "Cepat tanggap, peka terhadap keluhan, dan tidak menunda pekerjaan."],
                ["Profesionalisme dan integritas", "Bekerja sesuai kompetensi, jujur, menolak gratifikasi, serta taat Standar Operasional Prosedur (SOP)."],
                ["Kesetaraan (non-diskriminatif)", "Tidak membedakan pelayanan berdasarkan suku, agama, ras, status sosial, atau kedekatan personal."],
              ],
            },
          },
        ],
      },
      {
        title: "Prinsip-Prinsip Pelayanan Publik",
        intro: "Prinsip pelayanan publik menghubungkan standar layanan dengan perilaku nyata yang sesuai maupun bertentangan.",
        sections: [
          {
            heading: "Perbandingan prinsip dan perilaku",
            body: "Bandingkan pengertian setiap prinsip dengan contoh penerapan dan pelanggarannya.",
            table: {
              columns: ["Prinsip", "Pengertian", "Perilaku Sesuai", "Perilaku Bertentangan"],
              rows: [
                ["Kesederhanaan dan kemudahan", "Prosedur tidak berbelit-belit, mudah dipahami, dan mudah dilaksanakan.", "Membantu pemohon mengisi formulir yang rumit dengan petunjuk yang jelas.", "Menambah persyaratan secara sepihak yang tidak tercantum dalam SOP."],
                ["Kepastian waktu dan transparansi", "Pelayanan diselesaikan dalam waktu yang ditentukan dan persyaratannya terbuka untuk umum.", "Memberikan kepastian waktu penyelesaian serta memajang alur biaya dan persyaratan secara terbuka.", "Meminta warga menunggu tanpa batas waktu yang jelas atau menyembunyikan syarat operasional."],
                ["Akurasi dan keadilan", "Produk pelayanan diterima secara benar, sah, dan tanpa membedakan latar belakang masyarakat.", "Melayani warga kurang mampu dan pejabat dengan keramahan serta standar yang sama.", "Mendahulukan kerabat atau teman dekat yang baru datang dengan memotong antrean."],
                ["Tanggung jawab dan kelengkapan sarana", "Pimpinan dan petugas bertanggung jawab atas penyelesaian layanan serta tersedianya fasilitas pendukung dasar.", "Membantu warga disabilitas atau lansia yang kesulitan mengakses loket pelayanan.", "Membiarkan loket kosong saat jam pelayanan karena mengobrol."],
              ],
            },
          },
        ],
      },
      {
        title: "Karakteristik Jawaban Skor Tinggi",
        intro: "Jawaban skor tinggi memadukan tindakan konkret, solusi yang sesuai prosedur, empati, tanggung jawab, dan kepentingan publik.",
        sections: [
          {
            heading: "Karakter opsi skor 5",
            body: "Lima karakter ini membedakan tindakan pelayanan yang matang dari respons yang hanya normatif atau pasif.",
            bullets: [
              "Tindakan konkret langsung: tidak sekadar prihatin atau berniat, tetapi segera menjalankan solusi.",
              "Solutif dan sesuai prosedur: menyelesaikan masalah warga tanpa melanggar hukum atau SOP.",
              "Empati tinggi dan santun: mendengarkan keluhan warga yang marah tanpa menjadi emosional atau defensif.",
              "Tanggung jawab pribadi: tidak melempar kesalahan kepada atasan, sistem, atau rekan kerja.",
              "Mengutamakan kepentingan publik: bersedia menyesuaikan kenyamanan pribadi sesaat demi pemohon layanan.",
            ],
          },
          {
            heading: "Gradasi skor jawaban TKP",
            body: "Nilai pilihan bergerak dari respons yang tidak etis dan merugikan warga menuju tindakan proaktif yang humanis serta taat SOP.",
            table: {
              columns: ["Skor", "Karakter Jawaban"],
              rows: [
                ["5", "Solutif, proaktif, empatik, langsung bertindak secara konkret, dan taat SOP."],
                ["4", "Solutif dan ramah, tetapi sedikit terlambat atau menyerahkan sebagian tindakan tanpa pendampingan penuh."],
                ["3", "Berorientasi pada aturan secara kaku, normatif, kurang empatik, atau sekadar melapor kepada atasan."],
                ["2", "Pasif, birokratis kaku, terkesan acuh, atau menunda penyelesaian."],
                ["1", "Marah, defensif, menyalahkan masyarakat, melanggar hukum atau SOP, atau bertindak tidak etis."],
              ],
            },
          },
        ],
      },
      {
        title: "Studi Kasus yang Sering Muncul",
        intro: "Tiga situasi berikut mewakili benturan yang paling sering diuji: gangguan layanan, permintaan perlakuan khusus, dan antrean saat jam istirahat.",
        sections: [
          {
            heading: "Kasus 1 - Warga marah karena pelayanan lambat",
            body: "Inti masalahnya adalah keterlambatan atau gangguan sistem yang memicu emosi penerima layanan. Nilai yang diuji meliputi stabilitas emosi, empati, dan komunikasi krisis.",
            bullets: [
              "Tindakan terbaik: tetap tenang, mendengarkan dengan empati, meminta maaf atas ketidaknyamanan, menjelaskan situasi secara transparan, dan memberi estimasi solusi atau alternatif.",
              "Tindakan dihindari: marah balik, menyalahkan sistem atau atasan, dan menyuruh warga diam secara kasar.",
            ],
          },
          {
            heading: "Kasus 2 - Permintaan perlakuan khusus",
            body: "Inti masalahnya adalah benturan antara prinsip keadilan non-diskriminatif dan desakan pemohon untuk memotong antrean. Nilai yang diuji ialah integritas, ketegasan yang santun, dan kepatuhan SOP.",
            bullets: [
              "Tindakan terbaik: menolak perlakuan khusus secara tegas tetapi sopan, menjelaskan aturan antrean demi keadilan bersama, dan membantu proses melalui jalur yang wajar.",
              "Tindakan dihindari: mengabulkan karena kasihan atau tekanan, serta membentak pemohon di depan umum.",
            ],
          },
          {
            heading: "Kasus 3 - Antrean saat jam istirahat",
            body: "Inti masalahnya adalah benturan antara hak istirahat pegawai dan hak pelayanan warga. Nilai yang diuji meliputi dedikasi pada kepentingan publik dan manajemen waktu.",
            bullets: [
              "Tindakan terbaik: berbagi tugas secara bergantian agar loket tetap melayani atau menuntaskan pemohon yang sudah berada di area layanan sebelum beristirahat.",
              "Tindakan dihindari: menutup loket sepihak dan menyuruh seluruh antrean pulang atau menunggu tanpa kejelasan.",
            ],
          },
        ],
      },
      {
        title: "Strategi dan Rumus Cepat T-D-P-S-L-A",
        intro: "Gunakan urutan Tenang, Dengarkan, Pahami, Solusi, Layanan, dan Aturan Sesuai untuk menilai respons dalam soal Pelayanan Publik.",
        sections: [
          {
            heading: "Rumus T-D-P-S-L-A",
            body: "Tenang → Dengarkan → Pahami → Solusi → Layanan → Aturan Sesuai. Rumus ini menjaga respons tetap humanis sekaligus sah secara prosedural.",
          },
          {
            heading: "Empat langkah analisis",
            body: "Terapkan empat pemeriksaan berikut sebelum menentukan pilihan terbaik.",
            bullets: [
              "Identifikasi penerima layanan: pusatkan perhatian pada kenyamanan dan kejelasan yang dibutuhkan pemohon.",
              "Cari solusi paling konkret: pilih tindakan langsung, bukan sekadar janji untuk mempertimbangkan.",
              "Uji prinsip sopan dan taat prosedur: jangan mengabaikan SOP, tetapi jangan pula kaku hingga mengabaikan kemanusiaan.",
              "Hindari opsi reaktif atau pasif: jangan melempar tanggung jawab kepada atasan kecuali persoalan benar-benar berada di luar kewenangan legal.",
            ],
          },
        ],
        callout: "Pilihan terbaik biasanya menyelesaikan kebutuhan awal warga, menjaga komunikasi, lalu memastikan seluruh proses tetap sesuai aturan.",
      },
      {
        title: "Jebakan Soal Pelayanan Publik",
        intro: "Jebakan muncul ketika sebuah opsi tampak baik pada satu sisi, tetapi mengabaikan integritas, empati, atau tanggung jawab pelayanan.",
        sections: [
          {
            heading: "Tiga jebakan utama",
            body: "Waspadai tiga pola berikut saat membandingkan pilihan jawaban.",
            bullets: [
              "Terlalu ramah tetapi mangkir prosedur: menyetujui dokumen tidak lengkap karena kasihan tetap melanggar integritas.",
              "Sesuai aturan tetapi sangat kaku atau kasar: mengusir warga karena satu syarat kurang tanpa memberi petunjuk perbaikan menunjukkan kurang empati.",
              "Melempar tanggung jawab: langsung meminta warga menemui pimpinan tanpa memberikan pelayanan awal menunjukkan ketidakmampuan mengambil tanggung jawab.",
            ],
          },
        ],
      },
      {
        title: "Contoh Soal dan Pembahasan Mendalam",
        intro: "Lima belas soal berikut mempertahankan pilihan A–E sebagai materi bacaan. Skor lengkap tersedia untuk lima soal yang dibedah rinci dalam sumber; soal lainnya menampilkan jawaban skor 5 dan alasan tanpa membuat distribusi baru.",
        sections: [
          {
            heading: "Soal 1 - Berkas warga dari desa terpencil kurang lengkap",
            body: "Anda adalah petugas loket dokumen kependudukan. Seorang warga dari desa terpencil telah menempuh perjalanan tiga jam, tetapi satu berkas pendukungnya kurang. Aturan tidak memperbolehkan berkas tidak lengkap diproses, sedangkan warga menangis karena tidak memiliki biaya untuk datang lagi. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menolak berkas tersebut dengan tegas demi menegakkan aturan yang berlaku." },
              { label: "B", text: "Mengambil kebijakan pribadi untuk meluluskan berkas karena kasihan." },
              { label: "C", text: "Menjelaskan kekurangan secara santun, membantu mengecek apakah syarat dapat dikirim secara digital oleh keluarganya, dan memproses berkas setelah lengkap." },
              { label: "D", text: "Menyuruh warga pulang dan melengkapi berkas untuk datang kembali besok." },
              { label: "E", text: "Meminta atasan memberikan dispensasi agar berkas diproses tanpa syarat yang kurang." },
            ],
            analysis: {
              competency: "Empati, responsivitas, dan fleksibilitas solutif berbasis SOP.",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 1 }, { label: "C", score: 5 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "C",
              explanation: "Ada benturan antara kepatuhan SOP dan kondisi kemanusiaan. Opsi C mencari solusi digital yang membantu warga tanpa merusak keabsahan persyaratan.",
            },
          },
          {
            heading: "Soal 2 - Jaringan layanan lumpuh",
            body: "Jaringan komputer kantor pelayanan tiba-tiba lumpuh total. Puluhan warga sudah mengantre dan mulai menyampaikan keluhan secara emosional. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menutup loket sementara sampai jaringan kembali normal." },
              { label: "B", text: "Mendatangi warga, meminta maaf, menjelaskan situasi, dan mencatat permohonan secara manual agar antrean tetap terlayani." },
              { label: "C", text: "Tetap duduk di loket dan meminta warga sabar menunggu perbaikan tim IT." },
              { label: "D", text: "Mengarahkan warga untuk kembali besok karena sistem sedang rusak." },
              { label: "E", text: "Melaporkan kondisi kepada atasan dan menunggu petunjuk selanjutnya." },
            ],
            analysis: {
              competency: "Manajemen krisis, ketenangan, dan tanggung jawab pelayanan.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 3 }, { label: "D", score: 2 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Gangguan teknis tidak harus menghentikan layanan. Opsi B proaktif, transparan, dan menyediakan jalan keluar sementara melalui pencatatan manual.",
            },
          },
          {
            heading: "Soal 3 - Lansia kesulitan memakai layar sentuh",
            body: "Seorang warga lansia tampak bingung mengisi formulir digital melalui layar sentuh mandiri. Antrean di loket Anda saat itu cukup lengang. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membiarkannya karena layar sentuh merupakan bagian edukasi digitalisasi pelayanan." },
              { label: "B", text: "Mendatangi warga dengan ramah, memandu, dan membantunya mengisi formulir digital hingga selesai." },
              { label: "C", text: "Memanggil petugas keamanan untuk membantu warga tersebut." },
              { label: "D", text: "Memberitahu dari jarak jauh agar warga meminta bantuan pemohon lain." },
              { label: "E", text: "Menyuruh warga meminta bantuan keluarganya di rumah." },
            ],
            analysis: {
              competency: "Kepedulian dan pelayanan afirmatif kepada kelompok rentan atau lansia.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 4 }, { label: "D", score: 2 }, { label: "E", score: 3 }],
              bestChoice: "B",
              explanation: "Modernisasi tidak boleh menghambat akses lansia. Opsi B memberi pelayanan langsung, ramah, dan konkret tanpa melimpahkan pendampingan.",
            },
          },
          {
            heading: "Soal 4 - Oknum meminta memotong antrean",
            body: "Seorang oknum LSM mengaku dekat dengan Kepala Dinas dan meminta permohonannya diproses lebih dahulu tanpa mengikuti antrean. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengabulkan permohonannya karena takut dipindahkan atau dilaporkan kepada atasan." },
              { label: "B", text: "Membentak oknum tersebut karena mencoba melakukan nepotisme di area publik." },
              { label: "C", text: "Menjelaskan dengan sopan bahwa seluruh pemohon dilayani sesuai nomor antrean demi keadilan dan menawarkan bantuan sesuai prosedur." },
              { label: "D", text: "Langsung melaporkannya ke kepolisian atas tuduhan intimidasi." },
              { label: "E", text: "Mengabaikannya dan terus melayani pemohon lain." },
            ],
            analysis: {
              competency: "Integritas dan ketegasan santun yang non-diskriminatif.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 2 }, { label: "C", score: 5 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "C",
              explanation: "ASN tidak boleh terintimidasi oleh koneksi pribadi. Opsi C menolak secara tegas dan ramah berdasarkan prinsip kesetaraan hak.",
            },
          },
          {
            heading: "Soal 5 - Antrean tersisa saat jam istirahat",
            body: "Pukul 12.00 merupakan jam istirahat, tetapi masih ada lima warga yang mengantre sejak pagi. Rekan mengajak Anda segera pergi ke kantin. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menutup loket dan pergi ke kantin karena jam istirahat adalah hak pegawai." },
              { label: "B", text: "Menyelesaikan pelayanan kepada lima warga tersebut sebelum mengambil jam istirahat." },
              { label: "C", text: "Menyuruh warga kembali tepat pukul 13.00 setelah jam istirahat." },
              { label: "D", text: "Melayani satu orang lalu meminta empat warga lainnya menunggu." },
              { label: "E", text: "Meminta maaf dan meminta rekan kerja menggantikan Anda melayani tanpa jeda." },
            ],
            analysis: {
              competency: "Orientasi kepentingan publik dan pengorbanan diri.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 3 }, { label: "D", score: 2 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Menuntaskan sisa antrean menunjukkan dedikasi tinggi. Opsi B mengutamakan kepuasan pemohon di atas kenyamanan pribadi sesaat.",
            },
          },
          {
            heading: "Soal 6 - Tumpukan pengaduan lama",
            body: "Pada hari pertama bertugas di unit pengaduan, Anda menemukan tumpukan laporan warga yang belum ditindaklanjuti petugas sebelumnya. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membiarkannya dan hanya fokus melayani keluhan baru." },
              { label: "B", text: "Menganalisis, mengklasifikasikan prioritas, memproses pengaduan lama secara berurutan, dan menyusun sistem penanganan yang lebih efektif." },
              { label: "C", text: "Meminta pimpinan memindahkan Anda kembali karena beban kerja berat." },
              { label: "D", text: "Mengembalikan laporan kepada warga agar mereka memasukkan ulang pengaduan." },
              { label: "E", text: "Menyalahkan petugas terdahulu di depan rekan kerja." },
            ],
            analysis: {
              competency: "Kepemimpinan solutif, tanggung jawab, dan orientasi hasil.",
              bestChoice: "B",
              explanation: "Opsi B tidak menyalahkan masa lalu, mengurai pekerjaan berdasarkan prioritas, dan memperbaiki sistem agar hasil layanan berkelanjutan.",
            },
          },
          {
            heading: "Soal 7 - Warga enggan membaca informasi izin usaha",
            body: "Seorang warga meminta informasi persyaratan izin usaha yang sebenarnya sudah tersedia pada papan pengumuman dan brosur. Warga terlihat enggan membaca. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menunjuk papan pengumuman dan menyuruh warga membacanya sendiri." },
              { label: "B", text: "Menjelaskan poin penting secara lisan dengan ramah dan memberikan brosur panduan untuk dibawa pulang." },
              { label: "C", text: "Menyindir warga agar membiasakan diri membaca pengumuman." },
              { label: "D", text: "Melayani secara singkat dan tergesa-gesa agar warga cepat pergi." },
              { label: "E", text: "Mengarahkan warga untuk bertanya kepada warga lain di ruang tunggu." },
            ],
            analysis: {
              competency: "Kesabaran, komunikasi edukatif, dan keramahan.",
              bestChoice: "B",
              explanation: "Opsi B menyampaikan informasi secara sabar dan edukatif tanpa menggurui, sekaligus membekali warga dengan panduan tertulis.",
            },
          },
          {
            heading: "Soal 8 - Kritik pelayanan viral di media sosial",
            body: "Kritik pedas tentang kualitas pelayanan instansi menjadi viral di media sosial. Setelah diperiksa, kritik itu mengandung beberapa fakta yang keliru. Sebagai pengelola kehumasan atau layanan, tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Melaporkan akun tersebut atas dugaan pencemaran nama baik." },
              { label: "B", text: "Menanggapi dengan santun, meminta maaf, mengklarifikasi data secara transparan, dan mengundang pihak terkait untuk berdiskusi." },
              { label: "C", text: "Mengabaikan unggahan agar tidak semakin ramai." },
              { label: "D", text: "Menganjurkan rekan kerja membalas komentar kasar pada unggahan tersebut." },
              { label: "E", text: "Menghapus kolom komentar instansi agar tidak diserang warganet." },
            ],
            analysis: {
              competency: "Keterbukaan terhadap kritik, komunikasi publik, dan transparansi.",
              bestChoice: "B",
              explanation: "Opsi B menerima kritik secara dewasa, mengklarifikasi data dengan tenang, dan membuka ruang penyelesaian tanpa bersikap defensif.",
            },
          },
          {
            heading: "Soal 9 - Rekan melayani dengan kasar",
            body: "Seorang rekan petugas loket berbicara keras, ketus, dan tidak peduli sehingga warga merasa takut. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membiarkannya karena itu gaya pribadi dan tanggung jawab rekan tersebut." },
              { label: "B", text: "Mengingatkannya secara halus saat jeda pelayanan serta membantu menenangkan warga." },
              { label: "C", text: "Melaporkannya langsung kepada Kepala Dinas di depan warga." },
              { label: "D", text: "Mengambil alih seluruh pekerjaan rekan secara paksa." },
              { label: "E", text: "Menegur rekan dengan nada keras di depan warga." },
            ],
            analysis: {
              competency: "Etika sesama ASN dan perlindungan kenyamanan warga.",
              bestChoice: "B",
              explanation: "Opsi B menjaga etika dengan tidak mempermalukan rekan, tetapi tetap bertindak untuk melindungi kenyamanan warga yang sedang dilayani.",
            },
          },
          {
            heading: "Soal 10 - Warga sepuh tidak memiliki ponsel pintar",
            body: "Instansi menerapkan pendaftaran online, tetapi seorang warga sepuh tidak memiliki ponsel pintar dan tidak memahami teknologi. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menolak dan menyuruh warga membeli ponsel pintar terlebih dahulu." },
              { label: "B", text: "Melayani secara manual melalui loket pendampingan atau afirmasi tanpa mengurangi standar kualitas." },
              { label: "C", text: "Meminta warga pulang dan menyuruh anaknya mendaftarkan secara online." },
              { label: "D", text: "Mengomeli warga karena tidak mengikuti perkembangan teknologi." },
              { label: "E", text: "Membiarkan warga menunggu sampai ada petugas lain yang iba." },
            ],
            analysis: {
              competency: "Pelayanan afirmatif dan inklusivitas digital.",
              bestChoice: "B",
              explanation: "Opsi B menyediakan saluran layanan yang tetap bermutu bagi masyarakat yang belum terjangkau digitalisasi.",
            },
          },
          {
            heading: "Soal 11 - Kesalahan nama pada sertifikat",
            body: "Karena kelelahan, Anda keliru memasukkan nama pemohon pada sertifikat yang sudah dicetak. Pemohon mengajukan komplain saat menerima berkas. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menyalahkan pemohon karena tulisan pada formulir tidak jelas." },
              { label: "B", text: "Mengakui kesalahan, meminta maaf, dan segera mencetak ulang sertifikat secara akurat." },
              { label: "C", text: "Meminta biaya tambahan karena kertas sertifikat terbuang." },
              { label: "D", text: "Menyuruh pemohon menunggu beberapa hari untuk perbaikan." },
              { label: "E", text: "Mengarahkan pemohon membuat pengaduan resmi ke bagian hukum." },
            ],
            analysis: {
              competency: "Akuntabilitas atas kesalahan dan respons perbaikan.",
              bestChoice: "B",
              explanation: "Opsi B menunjukkan keberanian mengakui kesalahan, bertanggung jawab, dan langsung memperbaiki layanan tanpa membebani pemohon.",
            },
          },
          {
            heading: "Soal 12 - Amplop ucapan terima kasih",
            body: "Pemohon izin konstruksi memberikan amplop berisi uang sebagai ucapan terima kasih karena izinnya selesai tepat waktu sesuai SOP. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menerimanya karena diberikan secara sukarela." },
              { label: "B", text: "Menolaknya secara tegas tetapi sopan dan menjelaskan bahwa pelayanan profesional adalah kewajiban tanpa biaya tambahan." },
              { label: "C", text: "Menerimanya lalu membagikan kepada seluruh rekan kerja." },
              { label: "D", text: "Membentak pemohon dan mengancam membatalkan izin." },
              { label: "E", text: "Menyuruh pemohon memasukkan uang ke kotak sumbangan kantor." },
            ],
            analysis: {
              competency: "Integritas dan penolakan gratifikasi.",
              bestChoice: "B",
              explanation: "Opsi B menolak gratifikasi secara santun dan menegaskan bahwa layanan tepat waktu merupakan kewajiban ASN, bukan jasa berbayar tambahan.",
            },
          },
          {
            heading: "Soal 13 - Nilai kepuasan masyarakat rendah",
            body: "Survei Indeks Kepuasan Masyarakat menunjukkan unit Anda mendapat nilai terendah pada aspek kecepatan dan keramahan. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menolak hasil survei karena responden dianggap tidak objektif." },
              { label: "B", text: "Menjadikannya bahan evaluasi, berdiskusi dengan tim untuk membenahi alur, dan meningkatkan keramahan interaksi." },
              { label: "C", text: "Menyalahkan sarana kantor yang kurang canggih." },
              { label: "D", text: "Meminta pimpinan menghentikan survei tahun berikutnya." },
              { label: "E", text: "Bersikap acuh karena penilaian tidak memotong gaji." },
            ],
            analysis: {
              competency: "Evaluasi kinerja dan keterbukaan terhadap umpan balik.",
              bestChoice: "B",
              explanation: "Opsi B menerima hasil survei sebagai dasar perbaikan, melibatkan tim, dan menunjukkan keberanian untuk berubah sesuai kebutuhan publik.",
            },
          },
          {
            heading: "Soal 14 - Akses gedung bagi pengguna kursi roda",
            body: "Seorang pengguna kursi roda kesulitan mengakses tangga kantor karena belum tersedia ramp khusus disabilitas. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membiarkannya berusaha sendiri menaiki tangga." },
              { label: "B", text: "Segera membantu warga mengakses gedung dengan aman dan mengusulkan pembangunan ramp dalam rapat anggaran internal." },
              { label: "C", text: "Menyuruh warga menunggu di luar dan mengirim berkas melalui petugas keamanan." },
              { label: "D", text: "Mengkritik arsitek gedung di depan warga." },
              { label: "E", text: "Meminta warga membawa pendamping sendiri jika ingin datang ke kantor." },
            ],
            analysis: {
              competency: "Pelayanan inklusif dan perbaikan sistem jangka panjang.",
              bestChoice: "B",
              explanation: "Opsi B menggabungkan bantuan langsung yang aman dengan usulan perbaikan fasilitas agar masalah aksesibilitas tidak berulang.",
            },
          },
          {
            heading: "Soal 15 - Penugasan di daerah terpencil",
            body: "Anda dipindahkan ke unit pelayanan di daerah terpencil dengan fasilitas sangat minim dan jaringan internet yang sering terputus. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengajukan pengunduran diri karena kondisi tidak mendukung." },
              { label: "B", text: "Menerima penugasan, mengoptimalkan sarana yang ada, dan mencari cara inovatif agar warga tetap terlayani." },
              { label: "C", text: "Bekerja seadanya sesuai minimnya fasilitas." },
              { label: "D", text: "Sering tidak masuk kantor sebagai bentuk protes." },
              { label: "E", text: "Meminta warga tidak menuntut pelayanan berkualitas tinggi." },
            ],
            analysis: {
              competency: "Ketahanan, adaptasi, dan inovasi di tengah keterbatasan.",
              bestChoice: "B",
              explanation: "Opsi B menunjukkan daya tahan tinggi, kemauan beradaptasi, dan inovasi agar keterbatasan tidak menghentikan pelayanan masyarakat.",
            },
          },
        ],
      },
      {
        title: "Pola Perbandingan Jawaban",
        intro: "Semakin tinggi skor, semakin kuat perpaduan antara kemandirian, solusi nyata, keramahan, dan kepatuhan pada SOP.",
        sections: [
          {
            heading: "Perbandingan kualitas tindakan",
            body: "Tabel ini memperlihatkan perbedaan respons terhadap satu berkas yang belum lengkap.",
            table: {
              columns: ["Kategori Jawaban", "Bentuk Contoh Tindakan", "Evaluasi Skor"],
              rows: [
                ["Kurang tepat", "Menolak melayani karena formulir kurang satu lembar dan menyuruh warga pulang mengambilnya.", "Skor 1–2: kaku, tidak solutif, dan merugikan warga."],
                ["Cukup tepat", "Menanyakan kepada atasan apakah kekurangan berkas boleh dimaafkan.", "Skor 3–4: kurang mandiri dan melemparkan beban keputusan kepada atasan."],
                ["Sangat tepat", "Menjelaskan syarat yang kurang, membantu verifikasi kelayakan melalui dokumen digital, dan memproses berkas setelah lengkap.", "Skor 5: solutif, membantu, ramah, dan tetap menjaga keabsahan SOP."],
              ],
            },
          },
        ],
      },
      {
        title: "Ringkasan Materi",
        intro: "Pelayanan publik yang baik menempatkan hak masyarakat sebagai fokus, memberi solusi nyata, dan menjaga setiap proses tetap transparan serta dapat dipertanggungjawabkan.",
        sections: [
          {
            heading: "Tiga pegangan utama",
            body: "Gunakan tiga simpulan ini sebagai orientasi ketika menghadapi soal situasional.",
            bullets: [
              "Fungsi utama ASN adalah melayani masyarakat secara adil, transparan, dan akuntabel.",
              "Landasan hukum utama materi ini adalah Undang-Undang Nomor 25 Tahun 2009 tentang Pelayanan Publik dan Undang-Undang Nomor 20 Tahun 2023 tentang ASN.",
              "Kunci jawaban TKP adalah pilihan yang paling solutif, empatik, transparan, cepat, dan taat SOP.",
            ],
          },
        ],
      },
      {
        title: "10 Prinsip Emas TKP Pelayanan Publik",
        intro: "Sepuluh prinsip ini merangkum pola respons pelayanan publik yang paling kuat untuk menghadapi soal TKP.",
        sections: [
          {
            heading: "Sepuluh prinsip emas",
            body: "Jadikan daftar ini sebagai pemeriksaan akhir sebelum memilih jawaban.",
            bullets: [
              "Masyarakat adalah utama: tempatkan kenyamanan dan hak pemohon pada posisi teratas.",
              "Jangan emosional: hadapi warga yang marah dengan ketenangan penuh.",
              "Solutif konkret: lakukan tindakan nyata yang langsung terasa, bukan hanya menyatakan niat.",
              "Integritas tanpa kompromi: tolak gratifikasi dan permintaan memotong antrean secara santun.",
              "Afirmatif dan inklusif: beri perhatian lebih kepada lansia, ibu hamil, dan penyandang disabilitas.",
              "Akuntabel atas kesalahan: akui kekeliruan cetak atau input dan segera perbaiki.",
              "Inovatif dalam keterbatasan: jangan biarkan listrik padam atau internet terputus menghentikan seluruh layanan.",
              "Kerja sama tim: bantu rekan yang kesulitan tanpa mempermalukannya di depan umum.",
              "Terbuka atas kritik: jadikan umpan balik negatif atau komplain sebagai bahan perbaikan kinerja.",
              "SOP dan humanis: patuhi hukum sambil memberikan fleksibilitas kemanusiaan yang legal.",
            ],
          },
        ],
        callout: "Skor tinggi lahir dari tindakan yang membantu warga secara nyata, tetap adil, dan tidak mengorbankan integritas layanan.",
      },
    ],
  },
  {
    id: "tkp-jejaring", category: "TKP", title: "Kerja Sama",
    summary: "Bangun, pelihara, dan manfaatkan jejaring profesional yang kooperatif untuk mempercepat kerja serta meningkatkan kualitas pelayanan publik.",
    points: ["Komunikasikan masalah secara langsung, terbuka, dan profesional.", "Libatkan pihak yang relevan serta kompeten untuk menghasilkan solusi kolaboratif.", "Bantu rekan secara proporsional tanpa mengabaikan tanggung jawab utama."],
    example: "Saat unit lain terlambat menyediakan data, temui pihak terkait, pahami kendalanya, sepakati alur berbagi data, dan tawarkan bantuan teknis yang diperlukan.",
    chapters: [
      {
        title: "Pengertian Jejaring Kerja",
        intro: "Jejaring kerja adalah proses membangun, memelihara, dan memanfaatkan hubungan profesional yang saling menguntungkan untuk mempermudah pencapaian tujuan bersama.",
        sections: [
          {
            heading: "Tujuan pembelajaran",
            body: "Materi ini membekali peserta untuk memahami jejaring kerja dalam birokrasi dan mengenali respons TKP yang paling proaktif, kolaboratif, serta berorientasi organisasi.",
            bullets: [
              "Memahami konsep dan nilai dasar jejaring kerja dalam konteks birokrasi pemerintahan ASN.",
              "Membedakan perilaku proaktif-kolaboratif dengan respons pasif atau individualistis.",
              "Mengenali opsi yang terlihat baik secara personal tetapi lemah dalam aspek organisasi.",
              "Menerapkan metode eliminasi dan kerangka berpikir logis untuk meraih skor maksimal.",
            ],
          },
          {
            heading: "Jejaring kerja dalam konteks ASN",
            body: "Jejaring kerja merupakan kompetensi sosiokultural penting bagi ASN. Mengacu pada PermenPANRB Nomor 38 Tahun 2017 tentang Standar Kompetensi Jabatan ASN, kompetensi kerja sama mencakup kemampuan membangun dan memelihara hubungan kerja yang kooperatif, efektif, serta berkelanjutan dengan berbagai pihak.",
          },
          {
            heading: "Perbedaan dengan konsep terkait",
            body: "Jejaring kerja berkaitan erat dengan kerja sama, kolaborasi, dan komunikasi, tetapi masing-masing memiliki fokus yang berbeda.",
            bullets: [
              "Jejaring kerja: ekosistem hubungan jangka panjang, baik internal maupun eksternal, untuk mendukung efektivitas organisasi.",
              "Kerja sama: tindakan bersama dua pihak atau lebih untuk menyelesaikan tugas tertentu.",
              "Kolaborasi: kemitraan mendalam yang memadukan keahlian untuk menciptakan solusi atau inovasi baru.",
              "Komunikasi: sarana pertukaran pesan dan informasi antarpihak.",
            ],
          },
        ],
        callout: "Jejaring kerja bukan sekadar mencari banyak kenalan atau pencitraan, melainkan membangun kemitraan sinergis demi pelayanan publik yang transparan, cepat, dan berkualitas.",
      },
      {
        title: "Tujuan Jejaring Kerja bagi ASN",
        intro: "Kemampuan membangun jejaring membantu ASN mengatasi hambatan koordinasi dan menghubungkan sumber daya yang tersebar di berbagai unit maupun instansi.",
        sections: [
          {
            heading: "Empat tujuan utama",
            body: "Jejaring kerja yang kuat memberi dampak langsung terhadap efektivitas organisasi dan mutu pelayanan kepada masyarakat.",
            bullets: [
              "Mempermudah koordinasi dan penyelesaian masalah melalui jalur komunikasi profesional yang efektif.",
              "Mempercepat penyelesaian pekerjaan melalui pembagian peran dan bantuan pihak yang kompeten.",
              "Memperluas akses informasi dan sumber daya melalui pertukaran data serta inovasi antarinstansi.",
              "Meningkatkan kualitas pelayanan publik dengan mengurangi hambatan egosektoral.",
            ],
          },
        ],
        callout: "Jejaring kerja yang baik mengubah koordinasi menjadi solusi, bukan sekadar menambah jalur komunikasi.",
      },
      {
        title: "Konsep Dasar dan Prinsip Jejaring Kerja",
        intro: "Jejaring ASN mencakup hubungan internal dan eksternal yang dibangun melalui rasa saling menghargai, komunikasi terbuka, serta komitmen pada tujuan organisasi.",
        sections: [
          {
            heading: "Jejaring internal dan eksternal",
            body: "Kedua lingkup jejaring saling melengkapi dalam mendukung pelaksanaan tugas ASN.",
            bullets: [
              "Jejaring internal: hubungan harmonis dan profesional dengan atasan, rekan kerja, bawahan, serta unit lain dalam satu instansi.",
              "Jejaring eksternal: hubungan sinergis dengan instansi lain, pemerintah daerah atau pusat, LSM atau organisasi masyarakat, mitra kerja, akademisi, dan pemangku kepentingan publik.",
            ],
          },
          {
            heading: "Lima prinsip emas pembentuk jejaring",
            body: "Hubungan profesional yang efektif perlu dibangun di atas prinsip yang menjaga kepercayaan sekaligus kepentingan organisasi.",
            bullets: [
              "Saling menghargai dan menghormati perbedaan latar belakang, pendapat, serta karakter kerja.",
              "Berkomunikasi secara terbuka dan efektif dengan menyampaikan ide secara transparan serta menjadi pendengar aktif.",
              "Bersikap proaktif dan saling membantu secara proporsional ketika rekan atau unit lain mengalami kendala.",
              "Menjaga profesionalisme dan integritas serta tidak memanfaatkan hubungan kerja untuk kepentingan pribadi atau nepotisme.",
              "Berkomitmen pada tujuan bersama dengan mengutamakan visi instansi di atas ego pribadi atau divisi.",
            ],
          },
        ],
      },
      {
        title: "Karakteristik ASN dan Gradasi Skor TKP",
        intro: "Dalam TKP, lima pilihan jawaban memiliki bobot skor 1 sampai 5. Jawaban terbaik menunjukkan inisiatif, kolaborasi, solusi nyata, dan tanggung jawab terhadap tujuan organisasi.",
        sections: [
          {
            heading: "Gradasi kualitas jawaban",
            body: "Gunakan tabel ini untuk membedakan pola tindakan dari skor tertinggi hingga terendah.",
            table: {
              columns: ["Skor", "Karakter Jawaban", "Contoh Perilaku atau Tindakan"],
              rows: [
                ["5", "Sangat proaktif, kolaboratif, dan solutif", "Menginisiasi komunikasi, melibatkan pihak yang relevan atau kompeten, dan berorientasi penuh pada tujuan organisasi tanpa mengabaikan tugas pribadi."],
                ["4", "Kooperatif dan baik", "Bekerja sama dengan baik saat diminta atau diajak, tetapi kurang mengambil inisiatif proaktif sejak awal."],
                ["3", "Pasif atau komunikasinya terbatas", "Melakukan tugas secara mandiri dan berkoordinasi hanya seperlunya tanpa membangun sinergi yang mendalam."],
                ["2", "Individualistis atau kurang aktif", "Cenderung bekerja sendiri, enggan meminta atau memberikan bantuan, dan membatasi diri dari unit lain."],
                ["1", "Egois, melempar masalah, atau melawan", "Menolak bekerja sama, menyalahkan rekan lain, memicu konflik, atau mementingkan ego pribadi."],
              ],
            },
          },
        ],
        callout: "Skor tinggi selalu menyeimbangkan inisiatif, kerja sama, solusi, dan tanggung jawab pribadi.",
      },
      {
        title: "Studi Kasus Populer TKP Jejaring Kerja",
        intro: "Dua belas situasi berikut merangkum pola masalah jejaring kerja yang sering diuji beserta prinsip tindakan utamanya.",
        sections: [
          {
            heading: "Dua belas kasus dan prinsip tindakan",
            body: "Bandingkan situasi dengan tindakan yang paling menjaga efektivitas tim dan organisasi.",
            table: {
              columns: ["Situasi", "Prinsip Utama"],
              rows: [
                ["Rekan membutuhkan bantuan saat tugas sendiri menumpuk", "Bantu secara efisien dan proporsional setelah memprioritaskan tugas utama, atau koordinasikan pembagian tugas tim."],
                ["Konflik antaranggota tim", "Jadilah mediator netral dan arahkan kembali anggota tim pada target bersama organisasi."],
                ["Perbedaan karakter atau gaya komunikasi", "Sesuaikan diri secara fleksibel dan profesional tanpa membeda-bedakan rekan."],
                ["Koordinasi antarunit yang kaku", "Ambil inisiatif membangun komunikasi formal dan informal lintas unit secara santun."],
                ["Pihak luar atau mitra tidak responsif", "Lakukan tindak lanjut secara sopan, jemput bola, dan sediakan alternatif saluran komunikasi."],
                ["Memiliki informasi penting yang dibutuhkan pihak lain", "Bagikan informasi secara transparan dan proaktif demi efektivitas kerja instansi."],
                ["Keterbatasan keahlian diri", "Akui keterbatasan dan proaktif berkoordinasi atau meminta bantuan ahli secara profesional."],
                ["Mendapat apresiasi atas hasil kerja tim", "Akui dan publikasikan kontribusi seluruh anggota tim secara adil."],
                ["Perbedaan pendapat dengan atasan atau rekan", "Sampaikan usulan konstruktif berbasis data sambil tetap menghormati keputusan akhir bersama."],
                ["Kerja sama lintas instansi atau daerah", "Bangun jejaring formal dan informal serta jaga etika birokrasi dan integritas instansi."],
                ["Menyambut pegawai atau anggota baru", "Proaktif menyapa, membagikan informasi kerja, dan membantu proses adaptasi lingkungan."],
                ["Ketimpangan beban kerja tim", "Ajak tim bermusyawarah untuk mendistribusikan ulang tugas secara adil dan efisien."],
              ],
            },
          },
        ],
      },
      {
        title: "Strategi dan Rumus Cepat KOMPAK",
        intro: "Rumus KOMPAK membantu mengenali jawaban skor tinggi, sedangkan empat langkah eliminasi menyaring opsi pasif, individualistis, atau lepas tanggung jawab.",
        sections: [
          {
            heading: "Rumus cepat KOMPAK",
            body: "Gunakan enam pengingat berikut saat menilai tindakan dalam soal jejaring kerja.",
            bullets: [
              "K - Komunikasikan masalah secara langsung dan transparan.",
              "O - Orientasikan tindakan pada tujuan bersama organisasi.",
              "M - Melibatkan pihak yang relevan dan kompeten.",
              "P - Profesional dalam bersikap dan bertindak.",
              "A - Aktif berinisiatif atau jemput bola.",
              "K - Kolaborasikan solusi tanpa menyalahkan.",
            ],
          },
          {
            heading: "Panduan empat langkah eliminasi",
            body: "Eliminasi jawaban yang bertentangan dengan karakter ASN kolaboratif sebelum membandingkan opsi yang tersisa.",
            bullets: [
              "Cari opsi proaktif: eliminasi pilihan yang hanya menunggu atasan atau membiarkan masalah.",
              "Cari opsi kolaboratif: eliminasi pilihan yang menutup diri dan mengerjakan semuanya sendiri.",
              "Periksa tanggung jawab: pastikan pilihan tidak melempar seluruh tugas pribadi kepada orang lain.",
              "Pilih solusi berdampak sistemik atau organisasional dibandingkan kenyamanan pribadi.",
            ],
          },
        ],
        callout: "KOMPAK: komunikatif, berorientasi organisasi, melibatkan pihak kompeten, profesional, aktif, dan kolaboratif.",
      },
      {
        title: "Jebakan Populer dalam Soal Jejaring Kerja",
        intro: "Sumber memuat lima jebakan yang terlihat mudah atau nyaman, tetapi menghasilkan nilai rendah karena lemah dalam kerja sama dan tanggung jawab organisasi.",
        sections: [
          {
            heading: "Lima jebakan yang harus dihindari",
            body: "Waspadai pilihan yang tampak cepat atau aman, tetapi memutus komunikasi dan sinergi.",
            bullets: [
              "Jebakan 'Superman' atau pahlawan kesepian: merasa mampu menyelesaikan semuanya sendiri tanpa melibatkan tim atau ahli.",
              "Jebakan lepas tangan: menyerahkan seluruh masalah kepada atasan atau unit lain tanpa melakukan penanganan awal.",
              "Jebakan konflik pasif: menghindari komunikasi dengan rekan yang berseberangan demi menjaga kedamaian semu.",
              "Jebakan pencitraan atau cari muka: hanya bersedia membantu ketika dilihat oleh atasan.",
              "Jebakan membantu tanpa batas: membantu rekan hingga mengabaikan tugas utama yang mendesak.",
            ],
          },
        ],
      },
      {
        title: "Simulasi Soal HOTS dan Pembahasan Bedah Skor",
        intro: "Enam skenario unik berikut melatih kemampuan memilih respons yang proaktif, kolaboratif, dan tetap sesuai tanggung jawab. Nomor 7 sampai 15 pada sumber mengulang skenario nomor 6 sehingga tidak diduplikasi.",
        sections: [
          {
            heading: "Soal 1 - Integrasi data lintas unit",
            body: "Unit kerja Anda ditugaskan menyelesaikan proyek pelayanan publik berbasis digital yang melibatkan integrasi data dari tiga unit kerja lain. Namun, unit-unit tersebut terkesan lambat dan enggan memberikan data yang dibutuhkan. Sikap Anda adalah...",
            choices: [
              { label: "A", text: "Mengerjakan bagian unit sendiri terlebih dahulu dan melaporkan keterlambatan unit lain kepada atasan." },
              { label: "B", text: "Mengadakan pertemuan koordinasi informal dan formal dengan perwakilan unit terkait untuk mendiskusikan kendala serta menyepakati alur berbagi data." },
              { label: "C", text: "Menyampaikan keluhan dalam rapat evaluasi bahwa integrasi data terhambat oleh unit lain." },
              { label: "D", text: "Meminta bantuan atasan Anda untuk mendesak atasan unit lain agar segera menyerahkan data." },
              { label: "E", text: "Mendatangi langsung unit terkait secara personal, menjelaskan urgensi proyek, serta menawarkan bantuan teknis jika mereka mengalami kendala data." },
            ],
            analysis: {
              competency: "Proaktif, komunikasi persuasif, dan solusi pragmatis melalui jemput bola serta penawaran bantuan.",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 4 }, { label: "C", score: 1 }, { label: "D", score: 3 }, { label: "E", score: 5 }],
              bestChoice: "E",
              explanation: "Opsi E menunjukkan inisiatif personal yang sangat tinggi, komunikasi mendalam, dan penawaran solusi konkret. Opsi B juga sangat baik, tetapi E lebih proaktif dan solutif.",
            },
          },
          {
            heading: "Soal 2 - Beradaptasi di unit kerja baru",
            body: "Anda baru saja dipindahkan ke unit kerja baru yang memiliki budaya kerja sangat berbeda dari unit sebelumnya. Beberapa rekan senior terlihat kaku dan tertutup terhadap Anda. Langkah awal yang paling tepat adalah...",
            choices: [
              { label: "A", text: "Bekerja secara fokus pada tugas sendiri sambil menunggu rekan lain menyapa Anda." },
              { label: "B", text: "Proaktif menyapa, memperkenalkan diri, serta aktif bertanya tentang alur kerja dan budaya di unit baru tersebut." },
              { label: "C", text: "Melaporkan kondisi tersebut kepada atasan agar atasan mengimbau rekan-rekan senior untuk merangkul Anda." },
              { label: "D", text: "Meminta saran dari rekan unit lama tentang cara menghadapi senior di unit baru." },
              { label: "E", text: "Mencoba mendekati satu rekan yang paling ramah untuk dijadikan teman agar tidak merasa terasing." },
            ],
            analysis: {
              competency: "Adaptabilitas sosiokultural dan sikap proaktif dalam membangun jejaring internal.",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 5 }, { label: "C", score: 1 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Opsi B menunjukkan ASN yang terbuka, santun, dan proaktif melebur dalam lingkungan kerja baru tanpa bergantung pada orang lain.",
            },
          },
          {
            heading: "Soal 3 - Konflik dalam tim",
            body: "Tim Anda sedang mengalami masa krisis karena tenggat waktu proyek pelayanan sudah sangat dekat, sementara dua anggota tim berselisih paham mengenai metode kerja. Tindakan Anda sebagai anggota tim adalah...",
            choices: [
              { label: "A", text: "Membiarkan mereka menyelesaikan masalahnya sendiri karena itu urusan pribadi." },
              { label: "B", text: "Mengajak kedua rekan tersebut berdiskusi santai di luar jam kerja untuk mendengarkan pandangan masing-masing dan mencari titik tengah demi target tim." },
              { label: "C", text: "Melaporkan perselisihan mereka kepada ketua tim agar segera diberikan sanksi." },
              { label: "D", text: "Mengambil alih seluruh pekerjaan kedua rekan tersebut agar proyek selesai tepat waktu." },
              { label: "E", text: "Meminta ketua tim menengahi perselisihan agar pekerjaan tidak terbengkalai." },
            ],
            analysis: {
              competency: "Mediasi konstruktif dan orientasi pada tujuan bersama.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 2 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Opsi B secara proaktif meredakan ketegangan melalui pendekatan interpersonal yang baik tanpa merusak hubungan kerja.",
            },
          },
          {
            heading: "Soal 4 - Kendala teknis dalam acara",
            body: "Instansi Anda menyelenggarakan seminar nasional dan Anda ditunjuk sebagai penanggung jawab. Di pertengahan acara terjadi kendala teknis kelistrikan dari pihak penyedia gedung. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Marah kepada pengelola gedung karena tidak profesional." },
              { label: "B", text: "Berkoordinasi cepat dengan teknisi gedung dan tim teknis internal, serta menginstruksikan pembawa acara untuk memandu audiens dengan tenang." },
              { label: "C", text: "Meminta atasan Anda turun tangan berbicara dengan pemilik gedung." },
              { label: "D", text: "Menunggu teknisi gedung memperbaiki kelistrikan hingga selesai." },
              { label: "E", text: "Mengumumkan permintaan maaf kepada seluruh peserta dan menghentikan acara sementara." },
            ],
            analysis: {
              competency: "Manajemen krisis, koordinasi cepat, dan ketanggapan.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 2 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Opsi B menunjukkan kepemimpinan jejaring dengan melibatkan teknisi gedung, tim internal, dan pembawa acara untuk mengatasi krisis secara tenang.",
            },
          },
          {
            heading: "Soal 5 - Berbagi metode aplikasi baru",
            body: "Anda menemukan aplikasi terbaru yang sangat efektif untuk memangkas waktu pengolahan data instansi. Namun, rekan-rekan di unit Anda terbiasa menggunakan cara manual. Apa yang akan Anda lakukan?",
            choices: [
              { label: "A", text: "Menggunakan aplikasi tersebut sendiri agar pekerjaan pribadi cepat selesai." },
              { label: "B", text: "Mempresentasikan manfaat aplikasi tersebut kepada rekan dan atasan, serta menawarkan diri untuk melatih rekan-rekan." },
              { label: "C", text: "Mengusulkan kepada atasan untuk mewajibkan penggunaan aplikasi tersebut mulai bulan depan." },
              { label: "D", text: "Membiarkan rekan-rekan tetap menggunakan cara manual daripada memicu perbedaan pendapat." },
              { label: "E", text: "Mengunggah tutorial aplikasi tersebut di grup percakapan kantor tanpa penjelasan." },
            ],
            analysis: {
              competency: "Berbagi pengetahuan, edukasi, dan persuasi kolaboratif.",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 5 }, { label: "C", score: 4 }, { label: "D", score: 1 }, { label: "E", score: 3 }],
              bestChoice: "B",
              explanation: "Opsi B menggabungkan pertukaran pengetahuan dengan penawaran bantuan nyata melalui pelatihan sehingga kompetensi tim berkembang secara kolektif.",
            },
          },
          {
            heading: "Soal 6 - Perbedaan SOP lintas instansi",
            body: "Anda diminta berkoordinasi dengan instansi luar terkait verifikasi data publikasi. Namun, pihak instansi luar kurang kooperatif karena perbedaan prosedur operasional standar (SOP). Tindakan terbaik Anda adalah...",
            choices: [
              { label: "A", text: "Memaksa mereka mengikuti SOP instansi Anda." },
              { label: "B", text: "Mengajak perwakilan instansi tersebut berdiskusi untuk mempelajari perbedaan SOP dan merumuskan titik temu atau solusi saling menguntungkan yang tidak melanggar aturan." },
              { label: "C", text: "Melaporkan ketidakpatuhan instansi tersebut kepada kementerian pembina." },
              { label: "D", text: "Pasrah mengikuti SOP instansi luar meskipun melanggar SOP internal Anda." },
              { label: "E", text: "Mengirimkan surat formal berisi teguran keras." },
            ],
            analysis: {
              competency: "Kolaborasi lintas instansi dan pemecahan masalah sinergis.",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 5 }, { label: "C", score: 3 }, { label: "D", score: 1 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Opsi B mencerminkan prinsip jejaring eksternal: saling menghargai, mencari titik temu, dan menjaga hubungan profesional tanpa melanggar aturan.",
            },
          },
        ],
      },
      {
        title: "Latihan Fast-Track dan Pola Tingkatan Skor",
        intro: "Gunakan pola ringkas berikut untuk mengenali kualitas respons sebelum menilai rincian setiap opsi.",
        sections: [
          {
            heading: "Perbandingan pola sikap respons",
            body: "Semakin tinggi skor, semakin kuat unsur inisiatif, komunikasi, kolaborasi, dan orientasi pada keberhasilan organisasi.",
            table: {
              columns: ["Tingkat Skor", "Pola Respons"],
              rows: [
                ["Skor 1-2 (terendah)", "Egois, apatis, menyalahkan orang lain, menolak interaksi, atau melempar tanggung jawab."],
                ["Skor 3 (sedang)", "Pasif, menunggu perintah, dan bekerja sendiri secara terisolasi."],
                ["Skor 4-5 (tertinggi)", "Proaktif, inklusif, komunikatif, menghargai saran, dan berorientasi pada keberhasilan tim atau organisasi."],
              ],
            },
          },
        ],
      },
      {
        title: "Ringkasan dan 10 Prinsip Emas TKP",
        intro: "Sepuluh prinsip ini merangkum sikap yang paling konsisten menghasilkan keputusan jejaring kerja yang kuat dalam soal TKP.",
        sections: [
          {
            heading: "Sepuluh prinsip emas jejaring kerja",
            body: "Gunakan daftar berikut sebagai pemeriksaan cepat sebelum memilih jawaban.",
            bullets: [
              "Jangan menjadi pahlawan kesepian; utamakan kerja sama tim.",
              "Proaktif jemput bola dan jangan menunggu kendala menjadi parah.",
              "Komunikasikan masalah secara langsung dan terbuka dengan etika yang baik.",
              "Hargai keberagaman latar belakang dan perbedaan karakter rekan kerja.",
              "Gunakan keahlian pihak yang paling kompeten demi hasil maksimal.",
              "Orientasikan setiap keputusan pada pencapaian visi organisasi.",
              "Bantu rekan secara proporsional tanpa menelantarkan tugas utama.",
              "Jadilah pemersatu dan mediator netral ketika terjadi konflik tim.",
              "Apresiasi dan bagikan keberhasilan proyek kepada seluruh anggota tim.",
              "Jaga integritas dan batas profesionalitas dalam setiap hubungan jejaring.",
            ],
          },
        ],
        callout: "Jawaban terbaik tidak sekadar baik secara personal; jawabannya aktif membangun sinergi dan memberi dampak bagi tim serta organisasi.",
      },
    ],
  },
  {
    id: "tkp-digital", category: "TKP", title: "Teknologi Informasi",
    summary: "Gunakan teknologi secara aman, adaptif, dan berorientasi pada perbaikan layanan.",
    points: ["Pelajari alat baru melalui sumber resmi.", "Lindungi data pribadi dan kredensial.", "Uji perubahan sebelum diterapkan luas."],
    example: "Saat sistem baru digunakan, pelajari panduan, uji alur, lalu bantu rekan yang mengalami kesulitan.",
  },
  {
    id: "tkp-profesionalisme", category: "TKP", title: "Profesionalisme",
    summary: "Tuntaskan pekerjaan secara tepat waktu, akuntabel, objektif, adaptif, dan bebas dari benturan kepentingan pribadi.",
    points: ["Utamakan tugas kedinasan yang mendesak dan susun prioritas secara jelas.", "Akui kesalahan, perbaiki hasil kerja, dan jangan melempar tanggung jawab.", "Terus tingkatkan kompetensi serta tetap produktif di bawah tekanan."],
    example: "Ketika menemukan kesalahan pada laporan menjelang tenggat, segera akui kekeliruan, beri tahu pihak terkait, lalu perbaiki bagian yang terdampak hingga tuntas.",
    chapters: [
      {
        title: "Tujuan Pembelajaran",
        intro: "Materi ini membentuk pola pikir profesional agar peserta mampu mengenali tindakan ASN yang bertanggung jawab, berorientasi hasil, dan layak memperoleh skor maksimal dalam TKP.",
        sections: [
          {
            heading: "Kompetensi yang dituju",
            body: "Setelah mempelajari materi, peserta diharapkan mampu memahami konsep, menganalisis sikap kerja, mengenali jebakan, dan memilih tindakan profesional secara konsisten.",
            bullets: [
              "Menjelaskan konsep inti profesionalisme ASN berdasarkan regulasi dan standar kompetensi ASN.",
              "Mengidentifikasi komitmen menyelesaikan tugas secara tuntas, tepat waktu, mandiri, dan berorientasi target kinerja.",
              "Mengutamakan tugas di atas kepentingan pribadi, memisahkan urusan personal dari pekerjaan, serta adaptif terhadap perubahan dan teknologi.",
              "Menghindari pilihan yang mengorbankan kualitas tugas karena alasan emosional, kepentingan pribadi, atau ketaatan buta tanpa dedikasi.",
              "Menerapkan analisis sistematis untuk memilih jawaban bernilai skor 5 pada topik Profesionalisme.",
            ],
          },
        ],
        callout: "Profesionalisme terlihat dari hasil kerja yang tuntas, sikap yang dapat dipertanggungjawabkan, dan kemampuan menjaga kepentingan dinas.",
      },
      {
        title: "Pengertian Profesionalisme",
        intro: "Profesionalisme adalah sikap dan komitmen tinggi dalam menjalankan pekerjaan sesuai keahlian, standar, etika, dan tanggung jawab tanpa dipengaruhi kepentingan pribadi.",
        sections: [
          {
            heading: "Landasan dan konteks ASN",
            body: "Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara menempatkan profesionalitas sebagai salah satu asas penyelenggaraan kebijakan dan manajemen ASN. Nilai ini juga berkaitan dengan panduan perilaku Kompeten dan Akuntabel dalam BerAKHLAK.",
          },
          {
            heading: "Makna profesionalisme dalam birokrasi",
            body: "ASN profesional memiliki kualifikasi pendidikan dan kompetensi teknis, manajerial, serta sosiokultural yang memadai; disiplin; berorientasi hasil; dan mampu memisahkan kepentingan dinas dari kepentingan pribadi, keluarga, atau golongan.",
          },
          {
            heading: "Hubungan dengan tugas dan tanggung jawab",
            body: "Profesionalisme menjamin program pemerintah terlaksana secara efektif dan efisien. Setiap amanah diselesaikan sebagai hasil akhir yang tuntas, tepat waktu, dan memenuhi standar mutu tertinggi meskipun situasi tidak ideal.",
          },
          {
            heading: "Contoh penerapan sehari-hari",
            body: "Profesionalisme tampak dalam kebiasaan kerja yang konsisten, bukan hanya ketika diawasi.",
            bullets: [
              "Menyelesaikan laporan kinerja bulanan tepat waktu meskipun sedang menghadapi masalah keluarga.",
              "Mengikuti pelatihan atau lokakarya secara sukarela untuk meningkatkan mutu kerja.",
              "Tetap bekerja objektif bersama rekan yang tidak disukai secara personal.",
            ],
          },
        ],
      },
      {
        title: "Tujuan Profesionalisme ASN",
        intro: "Penerapan profesionalisme memperkuat kinerja individu sekaligus menjaga mutu dan kepercayaan terhadap institusi pemerintah.",
        sections: [
          {
            heading: "Lima tujuan utama",
            body: "Tujuan profesionalisme mencakup efisiensi kerja, mutu layanan, budaya kinerja, pencegahan konflik kepentingan, serta kredibilitas institusi.",
            bullets: [
              "Meningkatkan efektivitas dan efisiensi kerja dengan menggunakan waktu serta sumber daya secara optimal untuk mencapai target instansi.",
              "Menjaga kualitas produk dan layanan birokrasi agar hasil kerja akurat, bebas dari kesalahan fatal, dan sesuai standar.",
              "Membangun budaya kerja berkinerja tinggi yang kompetitif secara positif, disiplin, dan terukur.",
              "Meminimalkan konflik kepentingan agar keputusan kerja tidak dipengaruhi emosi, hubungan keluarga, atau keuntungan pribadi.",
              "Mewujudkan kredibilitas dan integritas institusi melalui SDM yang kompeten dan berdedikasi.",
            ],
          },
        ],
      },
      {
        title: "Konsep Dasar Profesionalisme",
        intro: "Soal TKP menerjemahkan profesionalisme ke dalam enam konsep perilaku yang dapat diamati dalam pelaksanaan tugas.",
        sections: [
          {
            heading: "Enam konsep dasar",
            body: "Gunakan tabel ini untuk mengenali fokus tindakan yang sedang diuji dalam sebuah skenario.",
            table: {
              columns: ["Konsep Dasar", "Penjelasan dalam Konteks TKP"],
              rows: [
                ["Kompetensi dan keahlian", "Kemauan dan tindakan nyata untuk terus belajar, menguasai bidang tugas, dan beradaptasi dengan pengetahuan baru."],
                ["Pemisahan urusan pribadi dan kedinasan", "Tidak membawa emosi atau masalah pribadi ke lingkungan kerja serta tidak menggunakan fasilitas kantor untuk kepentingan pribadi."],
                ["Orientasi target dan hasil", "Berfokus pada penyelesaian tugas hingga tuntas dan bermutu, bukan sekadar hadir di kantor."],
                ["Manajemen waktu dan skala prioritas", "Memilah pekerjaan berdasarkan urgensi serta kepentingannya dan menyelesaikannya tepat waktu."],
                ["Tanggung jawab dan kemandirian", "Siap menanggung konsekuensi pekerjaan dan mampu bekerja tanpa harus selalu diawasi."],
                ["Ketahanan kerja", "Tetap tenang, fokus, dan produktif ketika menghadapi beban kerja menumpuk atau tekanan tenggat."],
              ],
            },
          },
        ],
      },
      {
        title: "Prinsip-Prinsip Profesionalisme",
        intro: "Empat prinsip berikut menghubungkan nilai profesionalisme dengan perilaku yang sesuai dan perilaku yang harus dihindari.",
        sections: [
          {
            heading: "Perbandingan prinsip dan perilaku",
            body: "Bandingkan definisi setiap prinsip dengan contoh penerapan dan pelanggarannya.",
            table: {
              columns: ["Prinsip", "Pengertian", "Perilaku Sesuai", "Perilaku Bertentangan"],
              rows: [
                ["Dedikasi dan ketersediaan diri", "Mengutamakan tugas serta kewajiban kedinasan di atas kepentingan pribadi atau golongan.", "Bersedia lembur ketika tugas instansi yang mendesak harus selesai esok pagi.", "Meninggalkan jam kerja untuk berbelanja atau mengurus keperluan pribadi tanpa izin resmi."],
                ["Akuntabilitas hasil", "Bertanggung jawab penuh terhadap proses dan kualitas hasil kerja yang diamanahkan.", "Memeriksa ulang laporan sebelum diserahkan untuk memastikan tidak ada kesalahan data.", "Menyalahkan rekan atau bawahan ketika terjadi kekeliruan dalam laporan bersama."],
                ["Objektivitas dan netralitas", "Menjalankan tugas berdasarkan data, fakta, dan standar profesional tanpa bias preferensi personal.", "Memberikan penilaian kinerja yang jujur dan adil sesuai fakta objektif.", "Mengurangi nilai rekan karena pernah memiliki perselisihan pribadi di luar kantor."],
                ["Pengembangan diri berkelanjutan", "Terus meningkatkan kompetensi dan keterampilan seiring perkembangan teknologi serta ilmu pengetahuan.", "Mempelajari secara mandiri perangkat lunak baru untuk mempercepat analisis data.", "Menolak sistem kerja digital baru dan tetap memilih cara manual yang lambat."],
              ],
            },
          },
        ],
      },
      {
        title: "Karakteristik Jawaban Skor Tinggi",
        intro: "Jawaban skor tinggi menunjukkan tindakan langsung yang menuntaskan pekerjaan, menjaga prioritas, memisahkan sentimen pribadi, dan bertanggung jawab penuh atas hasil.",
        sections: [
          {
            heading: "Karakter opsi skor 5",
            body: "Lima ciri berikut menjadi penanda utama profesionalisme dalam pilihan jawaban TKP.",
            bullets: [
              "Tugas selesai tuntas dan tepat waktu dengan kualitas terbaik.",
              "Skala prioritas jelas dengan mendahulukan pekerjaan yang paling mendesak dan penting.",
              "Solutif dan mandiri dalam mengatasi hambatan tanpa membebani pihak lain.",
              "Memisahkan perasaan personal dan tetap profesional dalam situasi emosional.",
              "Bertanggung jawab penuh dengan mengakui kesalahan dan segera memperbaikinya.",
            ],
          },
          {
            heading: "Gradasi skor jawaban",
            body: "Kualitas jawaban bergerak dari tindakan tuntas dan proaktif menuju tindakan yang meninggalkan tugas atau mencampurkan kepentingan pribadi.",
            table: {
              columns: ["Skor", "Karakter Jawaban"],
              rows: [
                ["5", "Langsung menyelesaikan tugas, proaktif, mengutamakan kedinasan, solutif, dan menghasilkan pekerjaan yang tuntas."],
                ["4", "Menyelesaikan tugas dengan baik, tetapi membutuhkan sedikit dorongan atau menunda sebentar tanpa merusak tenggat."],
                ["3", "Mengerjakan tugas secara normatif atau kaku, hanya mengikuti perintah tanpa inisiatif, atau sekadar melaporkan masalah."],
                ["2", "Mengeluh, menunda pekerjaan, atau meminta bantuan untuk hal yang seharusnya dapat diselesaikan secara mandiri."],
                ["1", "Meninggalkan tugas, mencampuradukkan urusan pribadi, menyalahkan orang lain, atau bertindak destruktif."],
              ],
            },
          },
        ],
        callout: "Jawaban skor 5 berujung pada hasil kerja yang selesai dan bermutu, bukan sekadar niat, laporan, atau kesibukan.",
      },
      {
        title: "Studi Kasus yang Sering Muncul",
        intro: "Tiga pola masalah berikut menguji kemampuan menjaga prioritas, objektivitas, dan ketahanan kerja dalam situasi nyata.",
        sections: [
          {
            heading: "Kasus 1 - Urusan pribadi dan tugas mendesak",
            body: "Agenda pribadi bertepatan dengan perintah tugas kedinasan yang mendesak.",
            bullets: [
              "Nilai yang diuji: skala prioritas, komitmen tugas, dan dedikasi ASN.",
              "Tindakan skor 5: utamakan tugas kedinasan hingga selesai lalu komunikasikan atau jadwalkan ulang agenda pribadi secara santun.",
              "Hindari menolak tugas karena urusan pribadi yang tidak mendesak atau mengerjakan tugas secara asal-asalan.",
            ],
          },
          {
            heading: "Kasus 2 - Bekerja dengan rekan yang tidak disukai",
            body: "Sentimen atau konflik pribadi berpotensi menghambat kerja sama tim.",
            bullets: [
              "Nilai yang diuji: pemisahan emosi pribadi, sinergi tim, dan objektivitas kerja.",
              "Tindakan skor 5: kesampingkan sentimen, berkoordinasi secara profesional, dan fokus pada target tim.",
              "Hindari menolak bekerja sama, bersikap dingin atau pasif, maupun meminta dipindahkan kelompok.",
            ],
          },
          {
            heading: "Kasus 3 - Beban kerja dan tenggat ketat",
            body: "Tekanan waktu dan penumpukan tugas menguji kemampuan mengelola pekerjaan secara tenang.",
            bullets: [
              "Nilai yang diuji: manajemen waktu, ketahanan stres, dan penyusunan skala prioritas.",
              "Tindakan skor 5: urutkan tugas berdasarkan urgensi dan kepentingan, kerjakan secara disiplin hingga tuntas, serta lembur bila diperlukan.",
              "Hindari panik, mengeluh di media sosial, atau mengerjakan semuanya secara sporadis hingga hasilnya buruk.",
            ],
          },
        ],
      },
      {
        title: "Strategi dan Rumus Cepat F-P-T-S-H",
        intro: "Rumus F-P-T-S-H merangkum alur memilih jawaban profesional: Fokus Tugas, Prioritas Jelas, Tanpa Emosi Pribadi, Solutif Mandiri, dan Hasil Tuntas.",
        sections: [
          {
            heading: "Rumus cepat profesionalisme",
            body: "Pastikan opsi pilihan memenuhi kelima unsur, terutama penyelesaian tanggung jawab utama sampai menjadi hasil akhir.",
            bullets: [
              "F - Fokus pada tugas utama dalam skenario.",
              "P - Tetapkan prioritas secara jelas berdasarkan urgensi dan kepentingan.",
              "T - Tanggalkan emosi serta kepentingan pribadi yang tidak darurat.",
              "S - Cari solusi secara proaktif dan mandiri.",
              "H - Pastikan hasil kerja benar-benar tuntas dan bermutu.",
            ],
          },
          {
            heading: "Empat langkah memilih jawaban",
            body: "Gunakan urutan berikut untuk menyingkirkan opsi yang tampak baik tetapi tidak menyelesaikan tanggung jawab.",
            bullets: [
              "Identifikasi tugas utama dan pastikan opsi terbaik menyelesaikan tanggung jawab tersebut.",
              "Pisahkan urusan pribadi dari kedinasan; dahulukan urusan dinas ketika kepentingan pribadi tidak darurat.",
              "Cari opsi berorientasi hasil yang menggambarkan pekerjaan benar-benar rampung, bukan hanya niat atau rencana.",
              "Hindari melempar masalah kecil kepada atasan atau rekan sebelum berusaha menyelesaikannya sendiri.",
            ],
          },
        ],
        callout: "Fokus Tugas → Prioritas Jelas → Tanpa Emosi Pribadi → Solutif Mandiri → Hasil Tuntas.",
      },
      {
        title: "Jebakan Soal Profesionalisme",
        intro: "Beberapa opsi tampak empatik atau sibuk, tetapi tetap bernilai rendah jika mengabaikan prioritas, kemandirian, dan hasil kerja.",
        sections: [
          {
            heading: "Tiga jebakan yang harus dihindari",
            body: "Kenali motif yang membuat tindakan terlihat baik tetapi sebenarnya menurunkan profesionalisme.",
            bullets: [
              "Empati berlebihan atau alasan kemanusiaan pribadi: membantu urusan sepele teman ketika tugas kantor sendiri terbengkalai.",
              "Pekerja keras tetapi tidak tepat sasaran: sibuk mengerjakan banyak hal sambil mengabaikan target utama yang paling mendesak.",
              "Melempar masalah kepada atasan: mengembalikan tugas ketika baru menghadapi kesulitan kecil tanpa mencoba mencari solusi mandiri.",
            ],
          },
        ],
      },
      {
        title: "Contoh Soal dan Pembahasan Mendalam",
        intro: "Lima belas skenario berikut mempertajam kemampuan menerapkan prioritas, akuntabilitas, adaptasi, objektivitas, integritas, dan orientasi hasil.",
        sections: [
          {
            heading: "Soal 1 - Laporan mendesak dan acara rekan",
            body: "Laporan keuangan dinas harus diserahkan besok pukul 08.00. Pukul 16.30, ketika laporan baru selesai 60%, rekan-rekan mengajak Anda menghadiri syukuran ulang tahun di restoran. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengikuti syukuran sebentar lalu melanjutkan laporan besok pagi di kantor." },
              { label: "B", text: "Menolak ajakan secara halus dan tetap di kantor untuk menyelesaikan laporan hingga tuntas malam ini." },
              { label: "C", text: "Membawa sisa pekerjaan ke restoran dan mengerjakannya sambil menghadiri syukuran." },
              { label: "D", text: "Meminta rekan lain melanjutkan 40% sisa laporan agar Anda dapat mengikuti syukuran." },
              { label: "E", text: "Meminta izin menyerahkan laporan besok siang karena ada acara kebersamaan tim." },
            ],
            analysis: {
              competency: "Manajemen prioritas, dedikasi tugas kedinasan, dan komitmen mutu.",
              scores: [{ label: "A", score: 3 }, { label: "B", score: 5 }, { label: "C", score: 2 }, { label: "D", score: 1 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Opsi B mendahulukan tanggung jawab mendesak dan menunjukkan dedikasi sampai pekerjaan benar-benar tuntas.",
            },
          },
          {
            heading: "Soal 2 - Konflik pribadi dalam tim baru",
            body: "Anda ditunjuk menjadi anggota tim proyek strategis bersama rekan yang pernah berselisih paham secara pribadi dengan Anda. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengajukan keberatan dan meminta agar rekan tersebut dipindahkan ke tim lain." },
              { label: "B", text: "Menerima keputusan, tetapi memilih tidak banyak berinteraksi dengannya selama proyek." },
              { label: "C", text: "Menghubunginya secara pribadi, menyepakati untuk melupakan perselisihan lama, dan bekerja sama profesional demi proyek." },
              { label: "D", text: "Bekerja secara individual agar tidak perlu berhubungan langsung dengannya." },
              { label: "E", text: "Tetap bekerja dalam tim dan melaporkan kekurangannya kepada atasan jika proyek terkendala." },
            ],
            analysis: {
              competency: "Pemisahan emosi pribadi, kerja sama tim, dan objektivitas.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 2 }, { label: "C", score: 5 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "C",
              explanation: "Opsi C bersifat proaktif dan dewasa karena mengesampingkan masalah pribadi demi tujuan organisasi serta kelancaran komunikasi tim.",
            },
          },
          {
            heading: "Soal 3 - Sistem pelaporan digital baru",
            body: "Instansi mulai memakai aplikasi pelaporan kinerja baru. Pegawai senior mengeluh dan Anda sendiri belum terbiasa mengoperasikannya. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Tetap memakai cara manual sambil menunggu sistem baru dievaluasi pimpinan." },
              { label: "B", text: "Mempelajari tutorial secara mandiri, berdiskusi dengan tim IT, dan aktif mencoba hingga mahir." },
              { label: "C", text: "Menunggu pelatihan resmi sebelum mulai menggunakan aplikasi." },
              { label: "D", text: "Meminta pegawai muda yang lebih mahir menginput laporan milik Anda." },
              { label: "E", text: "Mengkritik kepada pimpinan bahwa aplikasi baru kurang ramah pengguna." },
            ],
            analysis: {
              competency: "Adaptabilitas teknologi, kemandirian, dan pembelajaran berkelanjutan.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 3 }, { label: "D", score: 2 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Opsi B menunjukkan semangat belajar yang proaktif, mandiri, dan berorientasi pada peningkatan kompetensi.",
            },
          },
          {
            heading: "Soal 4 - Bantuan rekan saat tenggat kritis",
            body: "Anda sedang menyelesaikan analisis data penting yang tenggatnya tinggal dua jam. Seorang rekan meminta diajari membuat presentasi yang tidak mendesak. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Meninggalkan analisis data dan langsung mengajari rekan hingga mengerti." },
              { label: "B", text: "Menolak membantu karena pekerjaan rekan bukan tanggung jawab Anda." },
              { label: "C", text: "Menjelaskan tenggat secara sopan dan berjanji mengajarinya setelah analisis selesai." },
              { label: "D", text: "Mengerjakan analisis sambil sesekali memberi petunjuk kepada rekan." },
              { label: "E", text: "Menyuruh rekan bertanya kepada pegawai lain yang tampak sedang santai." },
            ],
            analysis: {
              competency: "Skala prioritas, manajemen waktu, dan komunikasi yang tegas serta santun.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 2 }, { label: "C", score: 5 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "C",
              explanation: "Opsi C menjaga fokus pada tugas kritis tanpa bersikap kasar dan menawarkan solusi yang tetap membantu rekan setelah tenggat teratasi.",
            },
          },
          {
            heading: "Soal 5 - Kritik atas kesalahan draf",
            body: "Atasan mengkritik keras draf rancangan peraturan Anda karena kurang mendalam dan mengandung kesalahan data yang fatal. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membela diri dan menyatakan kesalahan terjadi karena data unit lain terlambat." },
              { label: "B", text: "Menerima kritik, meminta maaf atas ketidaktelitian, lalu segera merevisi dan memperbaiki data hingga sempurna." },
              { label: "C", text: "Berkecil hati dan menganggap atasan tidak menghargai kerja keras Anda." },
              { label: "D", text: "Meminta arahan rinci mengenai seluruh poin yang harus diubah agar tidak salah lagi." },
              { label: "E", text: "Meminta rekan senior memperbaiki draf tersebut." },
            ],
            analysis: {
              competency: "Akuntabilitas, sikap terhadap kritik, dan perbaikan kinerja.",
              scores: [{ label: "A", score: 1 }, { label: "B", score: 5 }, { label: "C", score: 2 }, { label: "D", score: 4 }, { label: "E", score: 3 }],
              bestChoice: "B",
              explanation: "Opsi B menunjukkan keberanian mengakui kesalahan, tanggung jawab penuh, dan tindakan langsung untuk memperbaiki hasil kerja.",
            },
          },
          {
            heading: "Soal 6 - Kendaraan mogok sebelum rapat",
            body: "Anda dijadwalkan memimpin rapat penting pukul 09.00. Pada pukul 08.15 kendaraan mogok dan jarak ke kantor masih cukup jauh. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membatalkan rapat dan menjadwalkannya ulang pada hari lain." },
              { label: "B", text: "Segera mencari transportasi lain, mengurus kendaraan setelah rapat, dan mengabarkan kemungkinan terlambat beberapa menit kepada sekretaris rapat." },
              { label: "C", text: "Menunggu derek dan mengabarkan bahwa Anda tidak dapat hadir karena keadaan memaksa." },
              { label: "D", text: "Meminta staf menggantikan Anda memimpin rapat tanpa memberi arahan materi." },
              { label: "E", text: "Tetap di lokasi kendaraan dan mengerjakan dokumen rapat melalui telepon pintar." },
            ],
            analysis: {
              competency: "Fleksibilitas, tanggung jawab kepemimpinan, dan penyelesaian masalah secara cepat.",
              bestChoice: "B",
              explanation: "Opsi B mengatasi hambatan dengan cepat sambil menjaga komunikasi dan tanggung jawab memimpin rapat.",
            },
          },
          {
            heading: "Soal 7 - Verifikasi di daerah terpencil",
            body: "Anda melakukan verifikasi lapangan selama tiga hari di lokasi dengan penginapan minim dan jaringan internet sulit, padahal laporan harus dikirim setiap malam. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengeluhkan kondisi dan meminta segera ditarik kembali ke kantor pusat." },
              { label: "B", text: "Menyusun laporan lengkap dan mencari lokasi yang memiliki sinyal agar laporan tetap terkirim tepat waktu." },
              { label: "C", text: "Mengumpulkan laporan dan mengirimkannya sekaligus setelah kembali ke kantor pusat." },
              { label: "D", text: "Bekerja seadanya sesuai fasilitas minim yang tersedia." },
              { label: "E", text: "Menyuruh masyarakat lokal mencari jaringan internet untuk Anda." },
            ],
            analysis: {
              competency: "Ketahanan kerja, adaptasi lapangan, dan orientasi hasil.",
              bestChoice: "B",
              explanation: "Opsi B menunjukkan kegigihan dan solusi praktis agar kewajiban pelaporan tetap dipenuhi tepat waktu.",
            },
          },
          {
            heading: "Soal 8 - Tugas tambahan di luar uraian utama",
            body: "Karena kinerja Anda baik, atasan memberikan tugas tambahan yang berat di luar uraian tugas utama tanpa kenaikan gaji atau tunjangan. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menolak karena tugas tidak sesuai dengan uraian pekerjaan." },
              { label: "B", text: "Menerimanya sebagai kesempatan belajar dan membuktikan kapasitas profesional sambil mengatur waktu secara efektif." },
              { label: "C", text: "Menerima tetapi mengerjakannya dengan lambat sebagai protes terselubung." },
              { label: "D", text: "Meminta insentif tambahan sebelum mulai mengerjakan tugas." },
              { label: "E", text: "Menerima tetapi melimpahkan sebagian tugas lama kepada staf lain." },
            ],
            analysis: {
              competency: "Pengembangan kapasitas, sikap positif terhadap tantangan, dan manajemen waktu.",
              bestChoice: "B",
              explanation: "Opsi B memandang tantangan sebagai kesempatan belajar dan tetap mengelola tanggung jawab secara profesional.",
            },
          },
          {
            heading: "Soal 9 - Kekeliruan perhitungan anggaran",
            body: "Anda menemukan kekeliruan perhitungan pada dokumen anggaran yang telah disetujui. Kesalahan mungkin tidak diketahui pihak luar, tetapi merugikan efisiensi instansi. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Membiarkannya karena dokumen sudah disahkan pimpinan." },
              { label: "B", text: "Melaporkan temuan kepada ketua tim atau atasan disertai usulan revisi anggaran yang akuntabel." },
              { label: "C", text: "Membicarakan kekeliruan sebagai bahan gosip dengan rekan kerja." },
              { label: "D", text: "Mengubah data secara diam-diam tanpa memberitahukan siapa pun." },
              { label: "E", text: "Menyalahkan anggota tim yang menyusun anggaran awal." },
            ],
            analysis: {
              competency: "Akuntabilitas, integritas, dan perbaikan sistematis.",
              bestChoice: "B",
              explanation: "Opsi B jujur, transparan, dan berorientasi pada perbaikan kesalahan demi efisiensi instansi.",
            },
          },
          {
            heading: "Soal 10 - Anak sakit saat pelayanan berlangsung",
            body: "Anak Anda mendadak sakit dan harus dijemput saat jam kerja, sementara Anda menangani berkas pelayanan yang sedang ditunggu warga. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Langsung pergi menjemput anak tanpa memberi tahu siapa pun di kantor." },
              { label: "B", text: "Mengoordinasikan penanganan sementara berkas kepada rekan, meminta izin resmi, lalu menjemput anak." },
              { label: "C", text: "Meminta anak bertahan di sekolah hingga jam kerja selesai." },
              { label: "D", text: "Meminta izin pulang dan membiarkan berkas warga menumpuk hingga besok." },
              { label: "E", text: "Meminta jasa transportasi menjemput dan membawa anak ke rumah sakit tanpa Anda hadir." },
            ],
            analysis: {
              competency: "Keseimbangan keadaan darurat keluarga, prosedur izin, dan keberlanjutan pelayanan.",
              bestChoice: "B",
              explanation: "Opsi B menangani krisis keluarga tanpa meninggalkan tanggung jawab kantor karena pelayanan dialihkan secara tertib dan izin tetap dipenuhi.",
            },
          },
          {
            heading: "Soal 11 - Pembicara seminar membatalkan kehadiran",
            body: "Dua hari sebelum seminar nasional, pembicara utama membatalkan kehadiran karena sakit keras sementara persiapan acara telah selesai. Tindakan Anda sebagai ketua panitia adalah...",
            choices: [
              { label: "A", text: "Membatalkan seminar dan mengembalikan biaya pendaftaran." },
              { label: "B", text: "Bersama tim segera mencari pembicara pengganti dengan kualifikasi sepadan dan mengonfirmasi kesiapannya." },
              { label: "C", text: "Mengubah seminar menjadi diskusi santai internal tanpa pembicara luar." },
              { label: "D", text: "Menyalahkan pembicara utama di depan publik." },
              { label: "E", text: "Melaporkan kegagalan kepada pimpinan dan mengundurkan diri sebagai ketua." },
            ],
            analysis: {
              competency: "Manajemen krisis, kerja tim, dan pencarian solusi pengganti.",
              bestChoice: "B",
              explanation: "Opsi B tanggap menghadapi perubahan dan berfokus mempertahankan kualitas acara melalui solusi kolaboratif.",
            },
          },
          {
            heading: "Soal 12 - Masukan terhadap dokumen perencanaan",
            body: "Rekan menyampaikan bahwa dokumen perencanaan Anda sulit dipahami unit teknis, meskipun menurut Anda formatnya telah sesuai teori baku. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengabaikan masukan karena unit teknis dianggap kurang memahami teori." },
              { label: "B", text: "Meminta masukan spesifik lalu menyesuaikan format agar lebih aplikatif dan komunikatif." },
              { label: "C", text: "Meminta unit teknis mempelajari kembali pedoman teori yang Anda gunakan." },
              { label: "D", text: "Mengubah seluruh cara kerja secara drastis tanpa berdiskusi." },
              { label: "E", text: "Tersinggung dan menolak berkoordinasi lagi dengan unit teknis." },
            ],
            analysis: {
              competency: "Keterbukaan terhadap evaluasi, komunikasi, dan perbaikan mutu kerja.",
              bestChoice: "B",
              explanation: "Opsi B mendengarkan pengguna dokumen dan menggunakan masukan konkret untuk meningkatkan kualitas serta kegunaan hasil kerja.",
            },
          },
          {
            heading: "Soal 13 - Teman mengikuti tender pengadaan",
            body: "Seorang vendor yang merupakan teman dekat Anda mengikuti tender dan meminta bocoran standar harga agar dapat menang. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Memberikan sedikit bocoran demi menjaga pertemanan." },
              { label: "B", text: "Menolak memberikan informasi secara tegas tetapi sopan dan memperlakukan semua peserta secara adil serta transparan." },
              { label: "C", text: "Mengundurkan diri dari panitia karena merasa canggung." },
              { label: "D", text: "Langsung melaporkan teman ke polisi atas percobaan penyuapan." },
              { label: "E", text: "Berpura-pura tidak mendengar dan tetap berhubungan seperti biasa." },
            ],
            analysis: {
              competency: "Integritas, netralitas, kerahasiaan, dan pemisahan pertemanan dari tugas formal.",
              bestChoice: "B",
              explanation: "Opsi B menjaga kerahasiaan dan keadilan proses secara tegas tanpa bertindak berlebihan atau menghindari tanggung jawab.",
            },
          },
          {
            heading: "Soal 14 - Budaya kerja divisi yang santai",
            body: "Anda dipindahkan ke divisi yang banyak pegawainya menunda pekerjaan hingga mendekati tenggat. Sebagai pegawai profesional, tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Mengikuti gaya kerja divisi agar mudah diterima dalam pergaulan." },
              { label: "B", text: "Tetap disiplin, menyelesaikan tugas tepat waktu, dan memberi contoh positif bagi rekan." },
              { label: "C", text: "Melaporkan seluruh rekan kepada atasan agar ditegur." },
              { label: "D", text: "Menjauhi rekan-rekan dan bekerja sendiri." },
              { label: "E", text: "Meminta dipindahkan kembali ke divisi lama." },
            ],
            analysis: {
              competency: "Disiplin, keteladanan, dan ketahanan terhadap pengaruh lingkungan kerja negatif.",
              bestChoice: "B",
              explanation: "Opsi B mempertahankan standar profesional sekaligus memberi teladan positif tanpa memusuhi lingkungan baru.",
            },
          },
          {
            heading: "Soal 15 - Pertanyaan mengenai informasi belum resmi",
            body: "Saat menjadi narasumber konferensi, peserta menanyakan isu sensitif kebijakan instansi yang belum dirilis resmi kepada publik. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Menjawab secara mendetail berdasarkan bocoran informasi internal." },
              { label: "B", text: "Mengelak dengan marah karena merasa peserta memojokkan instansi." },
              { label: "C", text: "Menjelaskan secara bijak batas informasi yang dapat disampaikan dan mengarahkan publik pada rilis resmi instansi." },
              { label: "D", text: "Beralih menjawab topik lain yang tidak berkaitan." },
              { label: "E", text: "Meminta pimpinan langsung naik ke panggung untuk menjawab." },
            ],
            analysis: {
              competency: "Etika komunikasi publik, kerahasiaan informasi, dan kepatuhan pada batas kewenangan.",
              bestChoice: "C",
              explanation: "Opsi C tetap komunikatif sekaligus menjaga kerahasiaan dan memastikan informasi hanya disampaikan melalui saluran resmi.",
            },
          },
        ],
      },
      {
        title: "Pola Perbandingan Jawaban",
        intro: "Perbandingan ini menunjukkan pergeseran dari sikap hitung-hitungan menuju tanggung jawab tinggi dan kemauan berkembang.",
        sections: [
          {
            heading: "Kategori tindakan dan evaluasi skor",
            body: "Gunakan contoh tugas tambahan untuk membandingkan kualitas respons secara langsung.",
            table: {
              columns: ["Kategori Jawaban", "Bentuk Contoh Tindakan", "Evaluasi Skor"],
              rows: [
                ["Kurang tepat", "Menolak tugas tambahan karena gaji tidak naik dan tugas itu bukan pekerjaan utama.", "Skor 1-2: hitung-hitungan, kurang berdedikasi, dan tidak berorientasi berkembang."],
                ["Cukup tepat", "Menerima tugas tambahan tetapi melimpahkan sebagian tugas lama kepada staf lain.", "Skor 3-4: menerima tugas, tetapi melempar sebagian beban kepada pihak lain."],
                ["Sangat tepat", "Menerima tugas tambahan sebagai sarana belajar dan mengatur skala prioritas waktu.", "Skor 5: bertanggung jawab tinggi, berorientasi berkembang, dan berkinerja unggul."],
              ],
            },
          },
        ],
      },
      {
        title: "Ringkasan Materi",
        intro: "Profesionalisme ASN menggabungkan kompetensi, disiplin, akuntabilitas, objektivitas, dan orientasi hasil dalam setiap tanggung jawab kedinasan.",
        sections: [
          {
            heading: "Tiga pegangan utama",
            body: "Gunakan ringkasan ini untuk mengingat inti materi sebelum mengerjakan soal.",
            bullets: [
              "Inti profesionalisme ASN: bekerja tuntas, tepat waktu, mandiri, adaptif, dan bebas dari benturan kepentingan pribadi.",
              "Dasar hukum utama: Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara, termasuk asas profesionalitas dan nilai BerAKHLAK.",
              "Kunci TKP: utamakan tugas dibanding kepentingan pribadi yang tidak darurat, tuntaskan hasil secara akurat, dan jangan menyalahkan pihak lain.",
            ],
          },
        ],
      },
      {
        title: "10 Prinsip Emas TKP Profesionalisme",
        intro: "Sepuluh prinsip emas berikut merangkum tindakan yang paling konsisten mencerminkan profesionalisme ASN.",
        sections: [
          {
            heading: "Prinsip yang wajib diingat",
            body: "Jadikan daftar ini sebagai pemeriksaan akhir sebelum memilih jawaban.",
            bullets: [
              "Tugas adalah utang kinerja: tuntaskan setiap pekerjaan hingga menjadi hasil akhir.",
              "Pisahkan urusan kantor dan pribadi: jangan membawa masalah rumah ke kantor atau sebaliknya.",
              "Dinas mendahului kepentingan pribadi: utamakan perintah kedinasan mendesak dibanding agenda sosial.",
              "Pantang menolak belajar: sambut teknologi dan sistem baru dengan semangat meningkatkan kompetensi.",
              "Kelola waktu secara akurat: susun skala prioritas berdasarkan tingkat urgensi.",
              "Bersikap ksatria atas kekeliruan: akui kesalahan, minta maaf, dan segera perbaiki.",
              "Bangun sinergi tanpa sentimen: bekerja sama secara maksimal tanpa memandang suka atau tidak suka.",
              "Jadilah solusi, bukan masalah: selesaikan hambatan secara mandiri sebelum melapor kepada atasan.",
              "Tahan tekanan: tetap tenang dan produktif di tengah tumpukan tenggat.",
              "Jaga integritas dan rahasia negara: patuhi batas kewenangan serta etika profesi ASN.",
            ],
          },
        ],
        callout: "Profesionalisme berarti fokus pada amanah, objektif dalam tindakan, siap belajar, dan bertanggung jawab sampai hasil kerja benar-benar tuntas.",
      },
    ],
  },
  {
    id: "tkp-sosbud", category: "TKP", title: "Sosial Budaya",
    summary: "Kuasai sikap inklusif, adaptif, dan non-diskriminatif agar mampu bekerja serta melayani masyarakat yang majemuk.",
    points: ["Hargai perbedaan sebagai kekayaan bangsa, bukan ancaman.", "Beradaptasi aktif tanpa mengabaikan hukum dan profesionalisme ASN.", "Pilih tindakan yang proaktif, empatik, adil, dan menjaga persatuan."],
    example: "Ketika ditempatkan di daerah dengan budaya yang berbeda, pelajari tata krama lokal, dengarkan warga dengan empati, dan tetap jalankan tugas sesuai aturan.",
    chapters: [
      {
        title: "Pengertian Sosial Budaya",
        intro: "Sosial budaya mencakup tata nilai, norma, kebiasaan, dan interaksi manusia yang tumbuh berkesinambungan dalam kehidupan bermasyarakat.",
        sections: [
          {
            heading: "Tujuan pembelajaran",
            body: "Setelah mempelajari materi ini, peserta diharapkan mampu memahami konsep sosial budaya dan menerapkannya saat menilai pilihan tindakan dalam soal TKP.",
            bullets: [
              "Memahami konsep dasar sosial budaya dan relevansinya dengan tugas pokok ASN.",
              "Menginternalisasi nilai kebhinekaan, toleransi, inklusivitas, dan non-diskriminasi dalam pelayanan publik.",
              "Menganalisis dinamika konflik sosial budaya dan menentukan tindakan yang paling optimal.",
              "Membedakan tingkatan kualitas jawaban TKP dari skor 1 sampai skor 5.",
              "Menerapkan rumus cepat dan pola berpikir ASN profesional untuk meraih skor maksimal pada topik Sosial Budaya.",
            ],
          },
          {
            heading: "Target kompetensi ASN",
            body: "Aspek Sosial Budaya mengukur kemampuan peserta untuk beradaptasi dan bekerja secara efektif dalam masyarakat atau lingkungan kerja yang majemuk, sekaligus menjalankan peran sebagai perekat bangsa.",
          },
          {
            heading: "Aspek sosial dan budaya",
            body: "Aspek sosial merujuk pada hubungan, interaksi, dan keterikatan antarindividu maupun kelompok dalam struktur masyarakat. Budaya adalah keseluruhan sistem gagasan, tindakan, karya, dan hasil cipta manusia yang diwariskan serta dijadikan pedoman bersama.",
          },
          {
            heading: "Hubungan sosial dan budaya",
            body: "Kehidupan sosial dan budaya saling berkaitan. Budaya memberikan norma dan arah bagi interaksi sosial, sedangkan dinamika sosial terus memperkaya dan memperbarui budaya.",
          },
          {
            heading: "Keberagaman dan relevansinya bagi ASN",
            body: "Keberagaman sosial budaya adalah keadaan ketika masyarakat dengan latar belakang suku, agama, ras, adat, bahasa, dan pola pikir yang berbeda hidup berdampingan. Bagi NKRI, keberagaman merupakan kekayaan bangsa sekaligus tantangan integrasi.",
            bullets: [
              "Perekat bangsa: ASN adalah pemersatu NKRI dan tidak boleh memihak kelompok tertentu.",
              "Pelayan publik: ASN melayani seluruh lapisan masyarakat tanpa diskriminasi latar belakang.",
              "Adaptabilitas: ASN harus mampu menyesuaikan diri ketika ditempatkan di daerah dengan kultur yang berbeda.",
            ],
          },
          {
            heading: "Contoh aplikatif",
            body: "Seorang ASN asal Jawa dipindahkan ke pedalaman Papua. Ia tidak memaksakan bahasa atau kebiasaan asalnya, tetapi mempelajari tata krama lokal, menyapa warga dengan ramah, dan mendengarkan aspirasi mereka dengan empati.",
          },
        ],
        callout: "Dalam soal TKP, pemahaman sosial budaya harus tampak dalam tindakan nyata: inklusif, adaptif, adil, dan tetap profesional.",
      },
      {
        title: "Tujuan dan Pentingnya Memahami Sosial Budaya",
        intro: "Kemampuan sosial budaya bukan sekadar teori akademis. Kompetensi ini digunakan untuk memprediksi perilaku nyata calon ASN di lingkungan kerja dan masyarakat.",
        sections: [
          {
            heading: "Mengapa kompetensi ini penting?",
            body: "ASN bekerja untuk masyarakat yang beragam. Pemahaman sosial budaya membantu menjaga kualitas hubungan kerja dan memastikan pelayanan diberikan secara setara.",
            bullets: [
              "Membangun keharmonisan: menciptakan iklim kerja yang kondusif dan masyarakat yang tenteram.",
              "Menghargai keberagaman: mengakui dan menghormati hak setiap individu untuk berbeda.",
              "Mencegah konflik sosial: mengurangi gesekan yang muncul akibat kesalahpahaman budaya.",
              "Meningkatkan pelayanan publik: memastikan pelayanan tepat sasaran tanpa membedakan suku atau agama.",
              "Menciptakan lingkungan inklusif: membuat seluruh staf merasa dihargai dan dapat berkontribusi.",
            ],
          },
        ],
        callout: "Jawaban yang kuat tidak berhenti pada sikap menerima perbedaan, tetapi ikut mengelolanya secara aktif dan konstruktif.",
      },
      {
        title: "Konsep Dasar Sosial Budaya dalam TKP",
        intro: "Sepuluh konsep berikut menjadi dasar untuk membaca konteks, mengenali nilai yang diuji, dan membandingkan kualitas pilihan jawaban TKP.",
        sections: [
          {
            heading: "Menerima dan melibatkan perbedaan",
            body: "Konsep-konsep ini menekankan penerimaan positif terhadap kemajemukan serta keterlibatan yang setara.",
            bullets: [
              "Keberagaman - menerima kenyataan bahwa masyarakat terdiri dari berbagai variasi; contohnya menerima staf baru dari berbagai daerah. Konsep ini sering muncul pada soal penempatan kerja multi-etnis.",
              "Toleransi - menghargai pelaksanaan ibadah atau kebiasaan orang lain; contohnya memberi kesempatan rekan beribadah tepat waktu. Konsep ini sering diuji saat jadwal rapat berbenturan dengan waktu ibadah.",
              "Pluralisme - memandang keberagaman secara positif; contohnya menganggap perbedaan tradisi sebagai kekayaan tim. Konsep ini relevan dalam dinamika tim multikultural.",
              "Inklusivitas - memastikan setiap orang memiliki akses dan keterlibatan yang seimbang; contohnya merancang fasilitas pelayanan yang ramah bagi penyandang disabilitas dan lansia.",
              "Kesetaraan - memperlakukan setiap warga dengan derajat dan hak yang sama; contohnya menerapkan nomor antrean tanpa jalur nepotisme. Konsep ini berkaitan erat dengan integritas pelayanan publik.",
            ],
          },
          {
            heading: "Bersikap adil, empatik, dan adaptif",
            body: "Konsep-konsep berikut membantu ASN merespons perbedaan secara profesional dalam pelayanan maupun kerja tim.",
            bullets: [
              "Non-diskriminasi - tidak menolak atau membedakan pelayanan berdasarkan SARA maupun kondisi ekonomi; contohnya tetap melayani warga kurang mampu dengan kualitas terbaik.",
              "Empati - memahami posisi dan kondisi mental orang lain; contohnya membantu warga lokal yang belum mahir berbahasa Indonesia.",
              "Saling menghargai - menghormati hak dan kebiasaan orang lain; contohnya tidak mengejek dialek atau cara bicara rekan kerja.",
              "Adaptasi - menyesuaikan diri secara proaktif dengan lingkungan atau kebudayaan baru; contohnya mempelajari frasa dasar bahasa lokal di tempat tugas.",
              "Integrasi sosial - menyatukan unsur masyarakat yang berbeda; contohnya mengadakan kegiatan kebersamaan tanpa sekat suku untuk memperkuat persatuan tim.",
            ],
          },
        ],
      },
      {
        title: "Keberagaman dalam Kehidupan Sosial",
        intro: "Stimulus soal TKP dapat menghadirkan keberagaman dalam bentuk identitas, perilaku, demografi, maupun kondisi sosial ekonomi.",
        sections: [
          {
            heading: "Bentuk keberagaman yang sering diuji",
            body: "Kenali objek perbedaan terlebih dahulu agar respons yang dipilih sesuai dengan kebutuhan situasi.",
            bullets: [
              "Keberagaman primordial: perbedaan suku, agama, adat istiadat, dan bahasa daerah.",
              "Keberagaman perilaku: perbedaan gaya komunikasi, karakter kepribadian, dan kebiasaan.",
              "Keberagaman demografi: perbedaan generasi, seperti senior atau Baby Boomers dengan Milenial atau Gen Z.",
              "Keberagaman sosial ekonomi: perbedaan latar belakang pendidikan dan status ekonomi.",
            ],
          },
        ],
        callout: "Perbedaan bukan masalah atau ancaman, melainkan realitas yang harus dikelola secara profesional, terbuka, dan adaptif.",
      },
      {
        title: "Prinsip-Prinsip Sosial Budaya ASN",
        intro: "ASN yang ideal menghargai perbedaan, melayani secara adil, menghindari stereotip, membuka dialog, dan menjaga persatuan.",
        sections: [
          {
            heading: "Perilaku positif dan perilaku yang harus dihindari",
            body: "Bandingkan perilaku yang mencerminkan kompetensi sosial budaya dengan tindakan yang bertentangan, lalu hubungkan dengan konteks soal TKP.",
            table: {
              columns: ["Prinsip", "Perilaku Positif", "Perilaku Bertentangan", "Relevansi TKP"],
              rows: [
                ["Menghargai Perbedaan", "Menghormati hak dan tradisi orang lain", "Mengejek tradisi daerah lain", "Soal adaptasi budaya"],
                ["Non-Diskriminatif", "Melayani siapa pun secara adil", "Mendahulukan kerabat atau suku yang sama", "Soal pelayanan publik"],
                ["Menghindari Stereotip", "Menilai berdasarkan kinerja individu", "Menganggap suku tertentu pasti malas", "Soal dinamika tim"],
                ["Mengedepankan Dialog", "Bermusyawarah saat terjadi ketegangan", "Mengambil keputusan sepihak", "Soal penyelesaian konflik"],
                ["Mengutamakan Persatuan", "Menjaga keutuhan tim dan institusi", "Memicu kubu-kubuan di kantor", "Soal perekat bangsa"],
              ],
            },
          },
        ],
      },
      {
        title: "Karakteristik Jawaban TKP Skor Tinggi",
        intro: "TKP tidak menggunakan benar-salah secara mutlak seperti TWK atau TIU. Setiap pilihan memiliki gradasi nilai 1 sampai 5, dan skor 5 menunjukkan tingkat kompetensi sosial budaya tertinggi.",
        sections: [
          {
            heading: "Gradasi kualitas jawaban",
            body: "Nilai pilihan ditentukan oleh seberapa inklusif, adaptif, proaktif, solutif, dan profesional tindakan yang ditawarkan.",
            table: {
              columns: ["Skor", "Karakter Jawaban", "Contoh Perilaku/Pilihan Tindakan"],
              rows: [
                ["5", "Sangat inklusif, adaptif, menghargai perbedaan, proaktif, solutif, dan menjaga profesionalisme", "Menyapa, mengajak berdialog, dan mencari solusi bersama yang menguntungkan semua pihak tanpa melanggar aturan"],
                ["4", "Menghargai perbedaan dan mau bekerja sama, tetapi masih pasif atau menunggu arahan atasan", "Menerima keputusan kelompok yang toleran tanpa memprakarsai dialog"],
                ["3", "Cukup toleran tetapi kurang peduli, atau membiarkan dinamika terjadi tanpa berkontribusi", "Membiarkan rekan berbeda agama beribadah tanpa membantu mengondisikan tugasnya"],
                ["2", "Cenderung kurang adaptif, pasif, atau menuntut orang lain menyesuaikan diri", "Menolak bekerja sama secara halus karena tidak cocok dengan budaya rekan kerja"],
                ["1", "Diskriminatif, intoleran, provokatif, memaksakan kehendak, atau memperburuk konflik", "Marah dan menolak ditempatkan di daerah dengan suku atau agama yang berbeda"],
              ],
            },
          },
        ],
        callout: "Cari pilihan yang tidak hanya toleran, tetapi juga mengambil inisiatif untuk merangkul pihak lain dan menyelesaikan masalah sesuai aturan.",
      },
      {
        title: "Studi Kasus dan Permasalahan Realistis TKP",
        intro: "Lima skenario berikut memperlihatkan cara menerapkan toleransi, inklusivitas, empati, dan adaptasi dalam situasi yang sering muncul pada soal TKP Sosial Budaya.",
        sections: [
          {
            heading: "Kasus 1: Rekan berbeda budaya",
            body: "Masalah utama: gaya komunikasi seorang rekan dianggap kasar menurut budaya Anda.",
            bullets: ["Nilai yang diuji: toleransi dan komunikasi lintas budaya.", "Tindakan terbaik: berkomunikasi secara terbuka, memahami latar belakangnya, dan tetap bekerja secara profesional."],
          },
          {
            heading: "Kasus 2: Perbedaan agama atau keyakinan",
            body: "Masalah utama: jadwal rapat bertepatan dengan waktu ibadah salah satu anggota tim.",
            bullets: ["Nilai yang diuji: penghargaan terhadap hak beribadah dan manajemen efisiensi.", "Tindakan terbaik: menyesuaikan waktu rapat atau memberikan ruang bagi anggota untuk beribadah terlebih dahulu."],
          },
          {
            heading: "Kasus 3: Penempatan di daerah baru",
            body: "Masalah utama: Anda dipindahtugaskan ke daerah yang sangat memegang adat lokal.",
            bullets: ["Nilai yang diuji: adaptabilitas dan sensitivitas terhadap adat.", "Tindakan terbaik: mempelajari dan mematuhi norma lokal selama tidak bertentangan dengan hukum dan aturan tugas ASN."],
          },
          {
            heading: "Kasus 4: Stereotip negatif",
            body: "Masalah utama: seorang rekan memberikan komentar negatif tentang etnis staf lain.",
            bullets: ["Nilai yang diuji: anti-prasangka dan non-diskriminasi.", "Tindakan terbaik: menegur dengan sopan dan mengingatkan pentingnya profesionalisme tanpa menghakimi suku tertentu."],
          },
          {
            heading: "Kasus 5: Perbedaan generasi",
            body: "Masalah utama: staf senior menolak menggunakan sistem digital yang diusulkan staf muda.",
            bullets: ["Nilai yang diuji: inklusivitas generasional dan edukasi.", "Tindakan terbaik: mendampingi staf senior dengan sabar untuk mempelajari sistem digital baru secara bertahap."],
          },
        ],
      },
      {
        title: "Strategi Mengerjakan dan Rumus Cepat HARGAI",
        intro: "Gunakan langkah yang sistematis untuk mengenali bentuk perbedaan, menilai tingkat konflik, dan memilih tindakan yang paling inklusif serta profesional.",
        sections: [
          {
            heading: "Delapan langkah menaklukkan soal",
            body: "Terapkan urutan berikut sebelum menentukan pilihan dengan skor tertinggi.",
            bullets: [
              "Identifikasi objek perbedaan: suku, agama, adat, bahasa, generasi, atau kondisi lainnya.",
              "Periksa tingkat konflik: apakah baru berupa perbedaan persepsi atau sudah mengganggu pekerjaan.",
              "Singkirkan prasangka pribadi dan stereotip.",
              "Cari pilihan yang paling inklusif dan merangkul.",
              "Pastikan tindakan tetap profesional serta sesuai hukum dan aturan ASN.",
              "Pilih tindakan yang berorientasi pada persatuan dan keharmonisan.",
              "Tunjukkan sikap adaptif ketika berada di lingkungan atau daerah baru.",
              "Pilih solusi konstruktif yang memberikan dampak jangka panjang.",
            ],
          },
          {
            heading: "Rumus cepat HARGAI",
            body: "HARGAI merangkum unsur yang sebaiknya muncul pada jawaban TKP Sosial Budaya dengan skor tinggi.",
            bullets: [
              "H - Hormati dan akui perbedaan tanpa membeda-bedakan.",
              "A - Adaptasi aktif dengan lingkungan atau kultur baru.",
              "R - Rangkul semua pihak secara inklusif.",
              "G - Gunakan komunikasi lintas budaya yang santun dan empatik.",
              "A - Adil, objektif, dan non-diskriminatif dalam pelayanan.",
              "I - Integrasikan perbedaan demi persatuan dan tugas negara.",
            ],
          },
        ],
        callout: "HARGAI: hormati, adaptasi, rangkul, gunakan komunikasi yang empatik, adil, lalu integrasikan perbedaan demi persatuan.",
      },
      {
        title: "Jebakan Soal TKP Sosial Budaya",
        intro: "Beberapa pilihan terlihat baik di permukaan, tetapi tidak cukup kuat untuk memperoleh skor 5 karena pasif, tidak profesional, atau masih mengandung prasangka.",
        sections: [
          {
            heading: "Empat jebakan umum",
            body: "Waspadai pilihan yang menggunakan kata-kata positif tetapi tidak menyelesaikan masalah atau justru bertentangan dengan tugas ASN.",
            bullets: [
              "Toleransi semu: terlihat menghargai budaya, tetapi mengabaikan aturan kerja ASN atau hukum positif. Pilihan seperti ini biasanya hanya bernilai 2 atau 3.",
              "Sikap pasif: membiarkan konflik terjadi dengan alasan menghargai pilihan orang lain, padahal ASN harus proaktif mengelola keharmonisan.",
              "Lempar tanggung jawab: menyerahkan keputusan sepenuhnya kepada atasan ketika situasi sebenarnya menuntut inisiatif pribadi yang masih berada dalam kewenangan.",
              "Stereotip tersembunyi: terlalu cepat menilai seseorang berdasarkan label etnis atau daerah asalnya.",
            ],
          },
        ],
        callout: "Pilihan skor tinggi tetap menghormati perbedaan, tetapi tidak mengorbankan hukum, tanggung jawab, dan inisiatif profesional.",
      },
      {
        title: "Soal dan Pembahasan Mendalam",
        intro: "Tiga contoh berikut menunjukkan cara mengurai kompetensi yang diuji, membandingkan gradasi pilihan, dan menemukan tindakan dengan skor 5.",
        sections: [
          {
            heading: "Soal 1: Adaptasi budaya di tempat tugas",
            body: "Anda dipindahtugaskan ke kantor cabang di daerah terpencil yang memiliki adat kuat dan bahasa daerah yang belum Anda kuasai. Rekan setempat sering memakai bahasa daerah saat berdiskusi santai. Sikap Anda adalah...",
            choices: [
              { label: "A", text: "Meminta rekan selalu menggunakan bahasa Indonesia setiap saat demi asas kesetaraan." },
              { label: "B", text: "Diam dan menarik diri dari pergaulan kantor karena merasa tidak dihargai." },
              { label: "C", text: "Menyampaikan dengan sopan bahwa Anda ingin berbaur serta meminta bimbingan untuk mempelajari bahasa dan adat setempat." },
              { label: "D", text: "Melaporkan kondisi kantor kepada atasan pusat agar rekan setempat diberi teguran." },
              { label: "E", text: "Fokus bekerja sendiri tanpa ikut dalam pergaulan rekan lokal." },
            ],
            analysis: {
              competency: "Adaptasi budaya dan komunikasi inklusif",
              scores: [{ label: "A", score: 3 }, { label: "B", score: 1 }, { label: "C", score: 5 }, { label: "D", score: 2 }, { label: "E", score: 4 }],
              bestChoice: "C",
              explanation: "Menunjukkan sikap adaptif, proaktif, inklusif, dan mau belajar budaya setempat tanpa menyalahkan lingkungan.",
            },
          },
          {
            heading: "Soal 2: Kepanitiaan hari besar keagamaan",
            body: "Saat perayaan hari besar keagamaan, kantor membentuk panitia. Sebagian besar anggota sibuk menyiapkan acara, sedangkan beberapa rekan yang berbeda keyakinan tidak terlibat. Sebagai ketua panitia, sikap Anda adalah...",
            choices: [
              { label: "A", text: "Mewajibkan seluruh pegawai berpartisipasi penuh dalam panitia inti keagamaan." },
              { label: "B", text: "Membagi tugas secara inklusif pada bagian pendukung yang bersifat umum atau logistik tanpa memaksakan partisipasi ritual." },
              { label: "C", text: "Membiarkan rekan yang berbeda keyakinan meliburkan diri sepenuhnya dari kantor." },
              { label: "D", text: "Mengganti perayaan keagamaan menjadi acara umum agar tidak ada yang terpisah." },
              { label: "E", text: "Berfokus pada anggota yang sekeyakinan agar acara berjalan lancar." },
            ],
            analysis: {
              competency: "Toleransi keagamaan dan inklusivitas kepemimpinan",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 5 }, { label: "C", score: 3 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Menunjukkan kepemimpinan yang inklusif, menghormati keyakinan, dan tetap melibatkan semua pihak dalam kebersamaan organisasi.",
            },
          },
          {
            heading: "Soal 3: Pelayanan warga dengan kendala bahasa",
            body: "Seorang warga berpakaian adat lokal datang untuk mendapatkan pelayanan. Ia tidak mahir berbahasa Indonesia dan antrean sedang padat. Tindakan Anda adalah...",
            choices: [
              { label: "A", text: "Memintanya mencari pendamping yang dapat berbahasa Indonesia sebelum dilayani." },
              { label: "B", text: "Melayaninya dengan sabar menggunakan gerak tubuh atau meminta bantuan staf yang memahami bahasa lokal." },
              { label: "C", text: "Menyuruhnya menunggu hingga semua warga yang mahir berbahasa Indonesia selesai dilayani." },
              { label: "D", text: "Memberikan formulir dan membiarkannya mengisi sendiri." },
              { label: "E", text: "Meminta atasan menyediakan loket khusus pelayanan budaya lokal." },
            ],
            analysis: {
              competency: "Pelayanan publik non-diskriminatif dan empati sosial",
              scores: [{ label: "A", score: 2 }, { label: "B", score: 5 }, { label: "C", score: 1 }, { label: "D", score: 3 }, { label: "E", score: 4 }],
              bestChoice: "B",
              explanation: "Mencerminkan pelayanan prima tanpa diskriminasi, tanggap terhadap keterbatasan warga, dan solutif.",
            },
          },
        ],
      },
      {
        title: "Pola Jawaban Skor Rendah dan Skor Tinggi",
        intro: "Bandingkan pola respons dari yang reaktif atau pasif menuju tindakan yang aktif mengelola keberagaman secara adil dan konstruktif.",
        sections: [
          {
            heading: "Perbandingan kualitas tindakan",
            body: "Gunakan pola ini untuk membedakan jawaban yang sekadar netral dari jawaban yang benar-benar mencerminkan kompetensi ASN.",
            table: {
              columns: ["Pola Rendah (Skor 1-2)", "Pola Sedang (Skor 3-4)", "Pola Tinggi (Skor 5)"],
              rows: [
                ["Menolak perbedaan atau etnosentris", "Menerima perbedaan secara pasif tanpa aksi", "Menghargai dan mengelola keberagaman secara aktif"],
                ["Menghakimi berdasarkan stereotip", "Bersikap netral atau tidak peduli", "Terbuka, objektif, dan empatik"],
                ["Diskriminatif dalam pelayanan", "Melayani jika diminta atasan", "Proaktif memberikan pelayanan inklusif"],
                ["Menghindari komunikasi atau bersikap kaku", "Berkomunikasi seperlunya", "Membuka dialog lintas budaya yang efektif"],
                ["Memicu atau memperburuk konflik", "Membiarkan konflik selesai sendiri", "Menyelesaikan konflik secara konstruktif dan adil"],
              ],
            },
          },
        ],
        callout: "Skor 5 biasanya menuntut tindakan nyata yang merangkul, bukan hanya sikap netral atau niat baik.",
      },
      {
        title: "Ringkasan dan 10 Prinsip Emas",
        intro: "Sepuluh prinsip ini merangkum pola pikir yang perlu dibawa ketika mengerjakan soal TKP Sosial Budaya.",
        sections: [
          {
            heading: "Sepuluh prinsip emas",
            body: "Gunakan daftar ini sebagai pemeriksaan cepat sebelum memilih jawaban akhir.",
            bullets: [
              "Hargai setiap perbedaan sebagai kekayaan, bukan ancaman.",
              "Jangan menilai seseorang berdasarkan stereotip etnis atau agama.",
              "Beradaptasilah dengan cepat di mana pun Anda ditempatkan.",
              "Berikan pelayanan publik yang setara dan non-diskriminatif.",
              "Utamakan musyawarah dan dialog konstruktif ketika terjadi ketegangan.",
              "Jaga etika dan profesionalisme sebagai aparatur perekat bangsa.",
              "Bersikap empatik terhadap keterbatasan atau perbedaan kultur orang lain.",
              "Rangkul seluruh anggota tim tanpa membentuk kubu-kubuan.",
              "Seimbangkan toleransi terhadap tradisi dengan ketaatan pada aturan hukum.",
              "Pilih tindakan proaktif yang berorientasi pada persatuan nasional.",
            ],
          },
        ],
        callout: "Jawaban terbaik menghargai perbedaan, bertindak proaktif, menjaga profesionalisme, dan memperkuat persatuan.",
      },
    ],
  },
  {
    id: "tkp-anti-radikalisme", category: "TKP", title: "Anti Radikalisme",
    summary: "Kenali respons ASN yang tenang, inklusif, berbasis fakta, dan mengikuti prosedur ketika menghadapi intoleransi atau provokasi.",
    points: ["Bedakan kritik konstruktif dari ajakan kebencian, intimidasi, atau kekerasan.", "Dahulukan verifikasi informasi, dialog yang aman, dan jalur pelaporan resmi.", "Jawaban TKP terbaik bersifat proporsional: tegas pada ancaman, tanpa melabeli atau menghakimi kelompok."],
    example: "Saat menerima pesan provokatif tanpa sumber jelas, jangan meneruskan pesan. Periksa sumber resmi, luruskan secara santun bila perlu, dan laporkan melalui jalur yang tepat jika ada ancaman serius.",
    chapters: [
      {
        title: "Memahami spektrum sikap",
        intro: "Soal anti radikalisme meminta kamu membaca situasi secara jernih. Tidak semua kritik atau perbedaan pandangan merupakan ancaman.",
        sections: [
          { heading: "Kritik, perubahan sah, dan ekstremisme", body: "Kritik yang berbasis data dan disampaikan untuk memperbaiki layanan adalah bagian dari ruang demokrasi. Perubahan sosial yang dilakukan melalui hukum, edukasi, dan partisipasi juga sah. Yang perlu diwaspadai adalah ajakan memaksakan kehendak, menolak toleransi, atau memakai intimidasi dan kekerasan.", bullets: ["Jangan samakan kritik dengan radikalisme.", "Jangan memberi label kepada orang atau kelompok hanya karena identitas atau perbedaan pendapat.", "Fokus pada perilaku, bukti, risiko, dan langkah yang proporsional."] },
          { heading: "Rantai yang perlu dicegah", body: "Intoleransi dapat berkembang menjadi polarisasi dan tindakan yang membahayakan bila dibiarkan. Dalam soal, cari pilihan yang mencegah eskalasi sejak awal tanpa menciptakan konflik baru." },
        ],
        callout: "Pegang prinsip ini: perbedaan pendapat tidak otomatis salah; ancaman, diskriminasi, dan kekerasan harus ditangani secara aman dan prosedural.",
      },
      {
        title: "Nilai kebangsaan dalam tindakan",
        intro: "Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika hadir dalam TKP sebagai arah tindakan, bukan sekadar hafalan.",
        sections: [
          { heading: "Kompas respons ASN", body: "Pilih tindakan yang menjaga persatuan, melayani warga secara setara, menghormati hukum, dan melindungi ruang kerja yang aman.", bullets: ["Inklusif: tidak membeda-bedakan layanan berdasarkan latar belakang.", "Tenang: tidak membalas provokasi dengan provokasi.", "Konstitusional: gunakan SOP, atasan, dan pihak berwenang sesuai tingkat risiko."] },
          { heading: "Tujuan yang dicari soal", body: "Respons terbaik membantu menjaga ketertiban, mencegah disinformasi, dan membuka jalan dialog atau penanganan resmi. Respons itu tidak mengorbankan hak warga atau profesionalisme ASN." },
        ],
      },
      {
        title: "Membaca pola jawaban skor tinggi",
        intro: "Pilihan bernilai tinggi biasanya memadukan ketenangan, verifikasi fakta, kepedulian, dan tindakan yang jelas.",
        sections: [
          { heading: "Ciri respons yang kuat", body: "Saat opsi terlihat sama-sama baik, pilih yang paling lengkap dan proporsional: memeriksa fakta, meredam risiko, memberi respons yang pantas, lalu memakai prosedur bila diperlukan.", bullets: ["Tegas terhadap kekerasan dan diskriminasi.", "Santun saat mengingatkan atau berdialog.", "Tidak pasif ketika risiko dapat meluas.", "Tidak mengambil tindakan berlebihan atau main hakim sendiri."] },
          { heading: "Waspadai jebakan", body: "Opsi yang emosional, mempermalukan orang di ruang publik, menyebarkan ulang konten provokatif, atau langsung memberi sanksi tanpa dasar yang cukup biasanya kurang tepat. Pilihan diam total juga dapat kurang kuat ketika masalah membutuhkan tindak lanjut." },
        ],
        callout: "Urutkan pilihan dari yang paling menjaga keselamatan, persatuan, dan prosedur; bukan dari yang terdengar paling keras.",
      },
      {
        title: "Verifikasi dan literasi digital",
        intro: "Banyak skenario TKP memakai pesan berantai, unggahan media sosial, atau informasi yang belum jelas sumbernya.",
        sections: [
          { heading: "Sebelum merespons", body: "Periksa asal informasi, tanggal, konteks, dan sumber resmi. Jangan memperkuat jangkauan konten bermasalah dengan meneruskannya atau membalas secara emosional.", bullets: ["Tahan diri sebelum membagikan.", "Gunakan rujukan resmi atau kanal pemeriksa fakta.", "Luruskan secara santun bila situasinya aman dan perlu.", "Simpan informasi seperlunya untuk pelaporan, bukan untuk disebarluaskan."] },
          { heading: "Kelola ruang komunikasi", body: "Dalam ruang kerja, arahkan percakapan kembali ke tujuan grup dan SOP. Moderasi konten yang melanggar aturan melalui mekanisme yang berlaku, lalu hadirkan informasi yang akurat dan menenangkan." },
        ],
      },
      {
        title: "Dialog, keamanan, dan pelaporan",
        intro: "Tingkat respons harus mengikuti risiko. Dialog cocok untuk ketegangan awal; ancaman nyata memerlukan koordinasi resmi.",
        sections: [
          { heading: "Gunakan tangga respons", body: "Mulailah dari langkah yang paling aman dan efektif: klarifikasi fakta, dialog personal atau mediasi bila tepat, lalu eskalasi ke atasan atau pihak berwenang ketika terdapat ancaman serius.", bullets: ["Konflik pendapat: tenangkan suasana dan kembalikan pada tujuan bersama.", "Konten intoleran: ingatkan dengan pantas, catat sesuai kebutuhan, dan ikuti SOP.", "Ajakan kekerasan atau bahaya langsung: utamakan keselamatan, amankan informasi, dan laporkan melalui jalur resmi."] },
          { heading: "Hindari dua ekstrem", body: "Jangan membiarkan risiko nyata tanpa tindakan, tetapi jangan pula mengonfrontasi sendirian, memviralkan temuan, atau melakukan tindakan di luar kewenangan." },
        ],
      },
      {
        title: "Ringkasan strategi ujian",
        intro: "Gunakan daftar cek ini saat menghadapi soal situasional anti radikalisme.",
        sections: [
          { heading: "Lima pertanyaan cepat", body: "Baca situasi, lalu uji setiap opsi dengan lima pertanyaan:", bullets: ["Apakah tindakan ini menjaga kemanusiaan dan persatuan?", "Apakah informasi sudah diverifikasi?", "Apakah responsnya tenang dan tidak diskriminatif?", "Apakah tindakan ini cukup proaktif tanpa berlebihan?", "Apakah jalur dan kewenangannya tepat?"] },
          { heading: "Kalimat kunci", body: "Pilih respons yang tenang, verifikatif, inklusif, dialogis, dan prosedural. Kelima unsur ini membantu membedakan opsi yang sekadar reaktif dari opsi yang matang secara profesional." },
        ],
        callout: "Setelah memahami pola ini, lanjutkan dengan latihan situasional TKP untuk membiasakan diri membandingkan kualitas setiap opsi.",
      },
    ],
  },
];
