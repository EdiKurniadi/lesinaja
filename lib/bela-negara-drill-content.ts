import type { Question } from "./types";

type BelaNegaraSeed = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const belaNegaraSeeds: BelaNegaraSeed[] = [
  {
    "prompt": "Pada tanggal 19 Desember 1948, Belanda melancarkan Agresi Militer II dan berhasil menguasai Yogyakarta sebagai ibu kota negara, serta menawan Presiden Soekarno dan Wakil Presiden Mohammad Hatta. Sebelum ditangkap, pimpinan nasional sempat mengirimkan kawat mandat kepada Mr. Syafruddin Prawiranegara untuk membentuk Pemerintah Darurat Republik Indonesia (PDRI) di Sumatra. Ditinjau dari kacamata bela negara non-fisik dan hukum tata negara, esensi sejarah paling mendasar dari pembentukan PDRI yang kemudian ditetapkan sebagai latar belakang Hari Bela Negara adalah…",
    "choices": [
      "Penyelamatan eksistensi kedaulatan de jure dan keberlangsungan pemerintahan Republik Indonesia di mata dunia internasional saat ibu kota negara jatuh.",
      "Kepatuhan mutlak para pejabat kementerian terhadap perintah telegram resmi pimpinan tinggi negara untuk mendirikan ibu kota baru di Sumatera.",
      "Wujud Rela Berkorban para pejuang di Sumatera dengan mengambil alih tampuk pimpinan kekuasaan kepresidenan secara permanen.",
      "Bentuk Kemampuan Awal Bela Negara dalam hal perlawanan persenjataan militer secara terbuka untuk merebut kembali Yogyakarta.",
      "Implementasi nilai Cinta Tanah Air yang berfokus pada pembangunan infrastruktur pertahanan militer baru di Bukittinggi."
    ],
    "answer": 0,
    "explanation": "Pembentukan PDRI di Sumatera Barat oleh Mr. Sjafruddin Prawiranegara merupakan peristiwa vital yang membuktikan kepada dunia internasional bahwa Republik Indonesia dan pemerintahannya masih berdiri secara sah (de jure), meskipun ibu kota Yogyakarta dikuasai dan pimpinan negara ditawan. Keberhasilan menjaga keberlangsungan syarat berdirinya negara ini menjadi tonggak sejarah yang mendasari penetapan tanggal 19 Desember sebagai Hari Bela Negara melalui Keppres No. 28 Tahun 2006. Jadi, opsi A benar karena menekankan pada penyelamatan kedaulatan hukum/de jure serta kontinuitas pemerintahan negara.\n\nOpsi B salah karena kawat mandat dari Soekarno-Hatta sebenarnya tidak pernah sampai ke tangan Sjafruddin akibat terputusnya saluran komunikasi; PDRI dibentuk atas inisiatif dan kesadaran bernegara Sjafruddin bersama pimpinan daerah setempat.\n\nOpsi C salah karena penyerahan kepemimpinan lewat PDRI bersifat darurat dan sementara, bukan pengambilalihan kekuasaan secara permanen (mandat dikembalikan begitu kondisi membaik).\n\nOpsi D salah karena PDRI adalah bentuk perlawanan politik, diplomasi, dan administrasi pemerintahan (non-fisik), bukan pertahanan persenjataan militer terbuka.\n\nOpsi E salah karena fokus utama PDRI adalah menjaga eksistensi pemerintahan dan diplomasi luar negeri, bukan membangun basis infrastruktur pertahanan fisik militer di Bukittinggi."
  },
  {
    "prompt": "Seorang ahli peranti lunak muda asal Indonesia yang bekerja di perusahaan teknologi global terkemuka di luar negeri memutuskan untuk mengabaikan tawaran perpanjangan kontrak dengan gaji tinggi demi kembali ke Tanah Air. Ia memilih mengembangkan platform edukasi digital gratis yang memuat materi kurikulum kebangsaan dan keterampilan teknologi bagi anak-anak di daerah pelosok serta wilayah terdepan, terluar, dan tertinggal (3T). Dalam konteks bela negara non-fisik, tindakan yang dilakukan oleh ahli peranti lunak tersebut paling tepat menggambarkan implementasi nilai dasar…",
    "choices": [
      "Cinta Tanah Air melalui upaya pembuktian bahwa keahlian anak bangsa mampu bersaing secara adil dengan tenaga kerja asing.",
      "Kemampuan Awal Bela Negara secara keilmuan untuk memperkuat infrastruktur pertahanan cyber pemerintah di daerah perbatasan.",
      "Sadar Berbangsa dan Bernegara dengan cara menaati kebijakan pemerintah dalam program pemerataan pendidikan nasional.",
      "Rela Berkorban demi Bangsa dan Negara dengan mengorbankan kepentingan finansial pribadi untuk mempercepat pemerataan kualitas sumber daya manusia.",
      "Setia pada Pancasila sebagai Ideologi Negara melalui pengintegrasian nilai-nilai kearifan lokal dalam platform digital interaktif."
    ],
    "answer": 3,
    "explanation": "Tindakan melepaskan kesempatan finansial yang sangat besar di luar negeri demi mendedikasikan waktu, tenaga, serta keahlian bagi peningkatan mutu pendidikan anak-anak di daerah 3T merupakan bentuk nyata dari nilai Rela Berkorban demi Bangsa dan Negara. Indikator utama dari rela berkorban adalah kesediaan mengedepankan kepentingan umum di atas kepentingan pribadi/golongan dengan menyumbangkan tenaga dan pikiran demi kemajuan masyarakat. Jadi, opsi D benar karena secara presisi menekankan pengorbanan potensi finansial pribadi demi pemerataan SDM bangsa.\n\nOpsi A salah karena fokus aksi bukan lagi pada persaingan dengan tenaga asing, melainkan pengabdian sosial di dalam negeri.\n\nOpsi B salah karena platform yang dibangun berfokus pada pendidikan dan literasi digital masyarakat, bukan pada sistem pertahanan cyber militer.\n\nOpsi C salah karena aksi tersebut didasari oleh inisiatif serta kesadaran moral pribadi, bukan sekadar bentuk kepatuhan terhadap instruksi kebijakan pemerintah.\n\nOpsi E salah karena meskipun berkaitan dengan ideologi, substansi utama dari tindakan meninggalkan kenyamanan pribadi demi masyarakat adalah sikap rela berkorban"
  },
  {
    "prompt": "Sebuah kawasan pesisir menghadapi ancaman abrasi parah dan krisis air bersih akibat eksploitasi lingkungan oleh pihak swasta secara ilegal. Kondisi ini memicu kemiskinan serta memicu potensi migrasi massal warga keluar dari wilayah perbatasan NKRI. Seorang tokoh pemuda setempat menggerakkan warga untuk menanam ribuan mangrove dan mengelola sistem penyaringan air swadaya. Tindakan pemuda tersebut merupakan bentuk perwujudan bela negara dalam kehidupan berbangsa dan bernegara karena…",
    "choices": [
      "Berhasil menggantikan peran utama pemerintah daerah dalam mengelola seluruh anggaran dana pembangunan infrastruktur fasilitas umum.",
      "Membuktikan bahwa masyarakat sipil dapat bertindak secara bebas tanpa perlu mematuhi aturan regulasi perlindungan lingkungan hidup.",
      "Mampu memaksa pihak pengusaha swasta asing untuk memberikan ganti rugi finansial secara langsung kepada seluruh korban abrasi.",
      "Mengalihkan perhatian publik dari konflik politik lokal menuju kegiatan kemasyarakatan yang bersifat sementara di daerah pesisir.",
      "Menjaga daya dukung lingkungan serta keutuhan ruang hidup bangsa sebagai fondasi pertahanan dan keberlangsungan NKRI."
    ],
    "answer": 4,
    "explanation": "Menjaga dan memulihkan ekosistem lingkungan hidup di wilayah perbatasan merupakan upaya perlindungan terhadap ruang hidup bangsa dan daya dukung ketahanan nasional. Indikator dasarnya mencakup kepedulian terhadap kelestarian lingkungan serta menjaga keutuhan wilayah negara dari ancaman kerusakan ekologis yang dapat memicu disintegrasi. Jadi, opsi E benar karena secara presisi menjelaskan esensi perlindungan lingkungan sebagai fondasi ketahanan dan keberlangsungan wilayah NKRI.\n\nOpsi A salah karena aksi swadaya masyarakat bertujuan untuk melengkapi dan mendukung pembangunan, bukan mengambil alih kewenangan anggaran pemerintah.\n\nOpsi B salah karena tindakan perwujudan bela negara harus tetap berjalan selaras dengan koridor hukum dan peraturan perundang-undangan yang berlaku.\n\nOpsi C salah karena fokus utama kasus adalah pemulihan ekosistem dan penyediaan air bersih, bukan tindakan penagihan ganti rugi finansial kepada pihak luar.\n\nOpsi D salah karena gerakan pelestarian lingkungan lahir dari kepedulian pada keberlanjutan wilayah, bukan sekadar strategi pengalihan isu politik lokal."
  },
  {
    "prompt": "Seorang staf ahli teknologi informasi di sebuah lembaga kementerian mendeteksi adanya aktivitas mencurigakan pada infrastruktur peladen (server) internal yang mengindikasikan upaya penyusupan dan pencurian dokumen rahasia negara. Tanpa menunggu instruksi dari pimpinan, staf tersebut segera melakukan isolasi sistem secara mandiri, mengamankan salinan cadangan data sensitif, dan melaporkan potensi kebocoran tersebut ke Badan Cyber dan Sandi Negara (BSSN). Langkah yang diambil oleh staf ahli tersebut merupakan wujud keikutsertaan warga negara dalam bela negara melalui…",
    "choices": [
      "Pengabdian sesuai dengan profesi dalam membentengi aset data strategis negara dari ancaman kejahatan siber.",
      "Pelatihan dasar kemiliteran yang mewajibkan seluruh aparatur sipil negara menguasai teknik pertahanan sistem siber.",
      "Pengabdian sebagai prajurit Tentara Nasional Indonesia dalam menjalankan operasi pertahanan siber di ruang digital.",
      "Pendidikan kewarganegaraan yang memuat kurikulum formal mengenai cara kerja penanggulangan peretasan data.",
      "Pembentukan organisasi kemasyarakatan yang bertugas mengawasi lalu lintas data internet secara nasional."
    ],
    "answer": 0,
    "explanation": "Menurut UU No. 23 Tahun 2019, keikutsertaan warga negara dalam bela negara salah satunya dilaksanakan melalui pengabdian sesuai profesi. Tindakan staf IT menggunakan keahlian teknisnya untuk merespons secara cepat ancaman siber pada peladen kementerian adalah contoh konkret dari pengabdian profesi untuk menjaga keselamatan data rahasia negara. Jadi, opsi A benar karena mencerminkan partisipasi bela negara berbasis keahlian profesional di ranah siber.\n\nOpsi B salah karena tindakan tersebut didasari oleh kompetensi keahlian profesi sipil, bukan hasil dari pelatihan militer wajib.\n\nOpsi C salah karena staf kementerian tersebut berstatus sebagai tenaga ahli sipil/ASN, bukan prajurit TNI.\n\nOpsi D salah karena fokus kasus terletak pada tindakan respons teknis profesional, bukan pada kegiatan pembelajaran teori di kelas.\n\nOpsi E salah karena aksi yang dilakukan bersifat penanganan internal kelembagaan, bukan pembentukan organisasi masyarakat."
  },
  {
    "prompt": "Dalam era transformasi digital, sebuah kelompok peretas (hacker) internasional yang disponsori oleh entitas tertentu melancarkan serangan siber berupa pencurian data massal (data breach) pada Pusat Data Nasional. Data sensitif kependudukan dan keuangan negara tersebut kemudian diancam akan diperjualbelikan di dark web jika pemerintah tidak membayar tebusan. Serangan ini memicu kepanikan publik serta mengganggu kestabilan sistem pembayaran elektronik nasional. Ditinjau dari konsep Pertahanan Negara, peristiwa ini merupakan bentuk ancaman non-militer yang berdimensi...",
    "choices": [
      "Kebudayaan dan ideologi yang bertujuan merusak nilai kearifan lokal secara perlahan.",
      "Politik dan kedaulatan hukum yang bersifat teritorial dan terbuka.",
      "Teknologi dan ekonomi yang berpotensi melumpuhkan objek vital nasional serta kedaulatan data.",
      "Agresi hibrida yang tergolong sebagai bentuk ancaman militer aktif ber-skala luas.",
      "Pertahanan fisik yang mengancam keselamatan integritas wilayah perbatasan negara"
    ],
    "answer": 2,
    "explanation": "Serangan terhadap pusat data nasional yang mengancam integritas keuangan, sistem pembayaran, dan data pribadi warga negara dikategorikan sebagai ancaman non-militer berdimensi teknologi dan ekonomi. Karakteristik utamanya adalah tidak menggunakan kekuatan senjata militer konvensional, namun mampu melumpuhkan Objek Vital Nasional (OVN) dan merusak kedaulatan digital suatu negara. Jadi, opsi C benar karena secara presisi mengidentifikasi dimensi teknologi dan ekonomi sebagai sasaran serangan tersebut.\n\nOpsi A salah karena fokus peperangan siber ini bukan pada penetrasi kebudayaan atau ideologi, melainkan kelumpuhan sistem data dan ekonomi.\n\nOpsi B salah karena serangan siber bersifat cyber-space (maya) dan tidak terbatas pada wilayah teritorial fisik.\n\nOpsi D salah meletakkan jenis ancaman sebagai ancaman militer aktif, padahal serangan tanpa alat utama sistem senjata (alutsista) termasuk dalam ranah non-militer.\n\nOpsi E salah karena serangan tersebut mengincar aset data/sistem digital, bukan penerobosan wilayah perbatasan fisik secara teritorial."
  },
  {
    "prompt": "Seorang pengendara motor memilih untuk tetap berhenti di belakang garis stop saat lampu lalu lintas berwarna merah, meskipun kondisi jalan sedang sepi dan tidak ada petugas yang menjaga. Tindakan ini mencerminkan implementasi nilai bela negara yaitu Sadar Berbangsa dan Bernegara, karena...",
    "choices": [
      "Menunjukkan kepatuhan terhadap aturan hukum sebagai bentuk rasa takut terhadap sanksi.",
      "Menjadi teladan moral bagi pengendara lain agar tertib dalam berkendara.",
      "Mencegah terjadinya kecelakaan lalu lintas yang dapat merugikan diri sendiri.",
      "Wujud pengabdian warga negara terhadap pemeliharaan sarana dan prasarana umum.",
      "Menghargai hak pengguna jalan lain serta menjamin keselamatan bersama di ruang publik."
    ],
    "answer": 4,
    "explanation": "Kepatuhan terhadap norma hukum dan aturan lalu lintas—terutama saat tidak ada pengawasan merupakan wujud kesadaran berbangsa dan bernegara yang didasari oleh penghargaan atas hak-hak orang lain dan ketertiban umum. Indikator utamanya adalah pemahaman bahwa jalan raya milik bersama dan hukum dibuat untuk keselamatan kolektif. Jadi, opsi E benar karena menekankan pada kesadaran menghargai hak publik dan keselamatan bersama sebagai inti Sadar Berbangsa. Opsi A salah karena bela negara didasari oleh kesadaran integritas, bukan karena rasa takut akan sanksi atau keberadaan petugas. Opsi B salah meletakkan fokus pada dampak bagi orang lain (suri teladan), bukan pada alasan mendasar (intrinsic value) dari kesadaran hukum individu tersebut. Opsi C salah karena hanya berfokus pada kepentingan egois/individual (diri sendiri), bukan pada kepentingan berbangsa dan bernegara. Opsi D salah karena menaati lampu lalu lintas adalah bentuk kepatuhan aturan lalu lintas, bukan aksi pemeliharaan fisik sarana umum."
  },
  {
    "prompt": "Artikel polemik berjudul Als ik eens Nederlander was (Seandainya Aku Seorang Belanda) yang ditulis oleh R.M. Suwardi Suryaningrat (Ki Hajar Dewantara) pada tahun 1913 berisi sindiran tajam terhadap niat pemerintah kolonial Belanda yang hendak merayakan 100 tahun kemerdekaannya dari Perancis dengan menggunakan dana dan bantuan rakyat pribumi Indonesia yang saat itu masih dijajah. Dilihat dari kacamata bela negara non-fisik, nilai dasar kebangsaan yang paling dominan dan mendasar yang melandasi tindakan penulisan kritik tersebut adalah…",
    "choices": [
      "Kemampuan Awal Bela Negara dalam bentuk keberanian intelektual untuk meminimalkan potensi konflik terbuka antar etnis.",
      "Setia pada Pancasila dengan memperjuangkan nilai-nilai kemanusiaan yang adil dan beradab sebelum Pancasila dirumuskan.",
      "Cinta Tanah Air melalui sikap tidak rela atas ketidakadilan dan penghinaan terhadap martabat serta kedaulatan bangsa.",
      "Rela Berkorban demi Bangsa dan Negara dengan menanggung risiko hukuman pengasingan demi kepentingan kebebasan pers.",
      "Sadar Berbangsa dan Bernegara dengan menuntut hak-hak kewarganegaraan secara formal kepada pemerintah Hindia Belanda."
    ],
    "answer": 2,
    "explanation": "Penulisan artikel Als ik eens Nederlander was dipicu oleh rasa keterpanggilan jiwa melihat bangsa pribumi dihina dan diperas untuk perayaan kemerdekaan penjajahnya. Perasaan Cinta Tanah Air yang mencakup kepedulian atas martabat bangsa dan ketidakrelaan melihat tanah lahir direndahkan merupakan akar motivasi utama dari penulisan kritik tajam tersebut. Jadi, opsi C benar karena mencakup substansi utama dari rasa cinta tanah air, yaitu menjaga martabat dan kehormatan bangsa dari bentuk penghinaan.\n\nOpsi A salah karena tujuan utama penulisan kritik tersebut bukan untuk meminimalkan konflik antaretnis, melainkan menyuarakan ketidakadilan kolonial.\n\nOpsi B salah karena Pancasila belum dirumuskan secara resmi sebagai ideologi negara pada tahun 1913.\n\nOpsi D salah karena risiko hukuman pengasingan merupakan konsekuensi dari tindakan tersebut, bukan motivasi awal melatarbelakangi penulisan artikel.\n\nOpsi E salah karena penulisan itu merupakan gugatan moral atas dehumanisasi penjajahan, bukan sekadar tuntutan hak administratif formal."
  },
  {
    "prompt": "Bencana banjir bandang dan tanah longsor yang sering terjadi di berbagai wilayah Indonesia kerap disebabkan oleh alih fungsi lahan hutan yang tidak terkendali. Dalam perspektif bela negara, keterlibatan masyarakat dalam menjaga kelestarian alam merupakan wujud dari...",
    "choices": [
      "Ketaatan terhadap Undang-Undang Perlindungan dan Pengelolaan Lingkungan Hidup.",
      "Pembuktian kemampuan awal bela negara secara fisik dalam menghadapi bencana.",
      "Unsur Setia pada Pancasila khususnya sila kelima tentang keadilan sosial.",
      "Manifestasi Cinta Tanah Air melalui menjaga dan merawat ruang hidup bangsa Indonesia.",
      "Sikap rela berkorban waktu dan tenaga demi kepentingan generasi masa depan."
    ],
    "answer": 3,
    "explanation": "Tanah air bukan sekadar konsep geografis atau politis, melainkan ruang hidup (living space) yang harus dijaga kelestariannya. Merawat lingkungan hidup dari kerusakan merupakan wujud Cinta Tanah Air, karena menjaga kedaulatan dan keberlanjutan wilayah Indonesia agar tetap aman dan layak huni bagi seluruh rakyat. Jadi, opsi D benar karena mengorelasikan secara tepat antara kelestarian lingkungan sebagai ruang hidup dengan nilai Cinta Tanah Air. Opsi A salah karena menjaga lingkungan atas dasar bela negara berakar dari kesadaran moral kebangsaan, bukan sekadar kepatuhan administratif terhadap UU. Opsi B salah karena menjaga lingkungan adalah langkah preventif kelestarian alam, bukan sekadar latihan fisik pertahanan/kebencanaan. Opsi C salah karena menjaga alam lebih dekat pada pemaknaan geografi tanah air daripada sekadar prinsip keadilan distribusi ekonomi. Opsi E salah karena meskipun ada unsur pengorbanan, fokus utama objek yang dijaga adalah ekosistem tanah air itu sendiri."
  },
  {
    "prompt": "Disparitas tingkat kesejahteraan dan fasilitas publik antara kawasan perkotaan dan perdesaan masih menjadi tantangan yang memicu potensi disintegrasi sosial. Sebagai bentuk partisipasi aktif dalam bela negara, kontribusi paling nyata yang dapat diberikan oleh generasi muda terdidik adalah...",
    "choices": [
      "Mengaplikasikan ilmu pengetahuan dan keterampilannya untuk memicu pemberdayaan ekonomi masyarakat desa.",
      "Mengkampanyekan potensi ekonomi dan pariwisata daerah melalui media sosial agar menarik investor.",
      "Menyalurkan bantuan sosial secara berkala bagi masyarakat miskin di kawasan pelosok.",
      "Mengkritik kebijakan pembangunan pemerintah yang dinilai belum merata di wilayah pinggiran.",
      "Mendorong masyarakat desa untuk berpartisipasi aktif dalam kegiatan gotong royong dan koperasi lokal."
    ],
    "answer": 0,
    "explanation": "Mengatasi kesenjangan sosial-ekonomi dalam kerangka bela negara memerlukan solusi yang berkelanjutan dan berbasis pemberdayaan (empowerment). Generasi muda terdidik memiliki kapasitas intelektual yang sangat strategis untuk menciptakan kemandirian ekonomi masyarakat desa, bukan sekadar memberikan bantuan sesaat. Jadi, opsi A benar karena mencerminkan kontribusi nyata berupa pemanfaatan kapasitas diri untuk menyelesaikan akar masalah kesenjangan. Opsi B salah karena promosi media sosial bermanfaat, namun dampak langsungnya terhadap pemenuhan kebutuhan dasar masyarakat desa masih terbatas. Opsi C salah karena bantuan sosial bersifat karitatif (kedermawanan sementara) dan tidak menyelesaikan masalah kesenjangan secara struktural/berkelanjutan. Opsi D salah karena menyampaikan kritik tanpa aksi nyata belum memberikan dampak langsung bagi peningkatan kesejahteraan warga desa. Opsi E salah karena menggerakkan koperasi desa adalah langkah baik, tetapi fokus jawaban ini belum menonjolkan peran spesifik generasi muda terdidik sebagai motor inovasi."
  },
  {
    "prompt": "Di era keterbukaan informasi, sebuah narasi manipulatif dan berita bohong (hoaks) yang bermuatan sentimen suku, agama, ras, dan antar-golongan (SARA) tersebar luas di media sosial dan berpotensi memicu bentrokan antar kelompok masyarakat di suatu daerah. Seorang aparatur sipil negara (ASN) yang menerima informasi tersebut tidak langsung ikut membagikannya, melainkan melakukan verifikasi fakta secara mendalam, menyusun tinjauan edukatif berbasis data resmi, dan menyebarkannya guna meredam ketegangan publik. Tindakan ASN tersebut mencerminkan komitmen bela negara non-fisik yaitu...",
    "choices": [
      "Setia pada Pancasila sebagai Ideologi Negara dengan menjaga kerukunan dan persatuan bangsa dari ancaman disintegrasi sosial.",
      "Rela Berkorban demi Bangsa dan Negara dengan menggunakan jam kerja pribadi untuk menyelesaikan konflik sosial.",
      "Pengabdian sesuai profesi dengan cara melaksanakan perintah atasan untuk mengamankan ketertiban umum.",
      "Kemampuan Awal Bela Negara dalam bentuk kesiapan fisik dan mental menghadapi ancaman kejahatan siber.",
      "Sadar Berbangsa dan Bernegara melalui kepatuhan terhadap sanksi pidana yang diatur dalam Undang-Undang ITE."
    ],
    "answer": 0,
    "explanation": "Menjaga kedamaian, mencegah perselisihan SARA, dan menyaring informasi provokatif merupakan wujud pengamalan nilai-nilai Pancasila (khususnya Sila ke-3 Persatuan Indonesia). Sikap ASN ini merepresentasikan Setia pada Pancasila sebagai Ideologi Negara, di mana Pancasila dijadikan pemersatu dan filter dalam menghadapi ancaman disintegrasi di dunia maya. Jadi, opsi A benar karena menekankan pada nilai kebhinekaan dan persatuan bangsa sebagai inti dari kesetiaan pada Pancasila.\n\nOpsi B salah karena esensi utama tindakan tersebut adalah menjaga persatuan dan ideologi negara, bukan sekadar pengorbanan waktu pribadi.\n\nOpsi C salah karena aksi verifikasi fakta dan edukasi publik tersebut dilakukan atas kesadaran moral kebangsaan, bukan hanya karena perintah atasan.\n\nOpsi D salah karena verifikasi informasi merupakan kemampuan keilmuan/literasi digital, bukan persiapan ketahanan fisik.\n\nOpsi E salah karena bela negara berdasar pada kesadaran internal untuk menjaga persatuan, bukan karena rasa takut akan sanksi pidana UU ITE."
  },
  {
    "prompt": "Pasal 27 Ayat (3) UUD 1945 menegaskan bahwa setiap warga negara berhak dan wajib ikut serta dalam upaya bela negara. Bagi seorang tenaga medis yang bertugas di daerah terpencil dengan fasilitas terbatas, bentuk perwujudan nyata dari amanat pasal konstitusi tersebut dalam menjalankan tugas profesinya adalah…",
    "choices": [
      "Mengajukan permohonan pindah tugas ke kota besar agar dapat bekerja dengan fasilitas medis yang lebih modern.",
      "Menuntut imbalan finansial yang tinggi kepada pemerintah daerah sebelum memberikan pelayanan kesehatan kepada warga lokal.",
      "Mendedikasikan keahlian medisnya secara tulus untuk meningkatkan derajat kesehatan warga demi menjaga ketahanan sumber daya manusia.",
      "Mengurangi jam pelayanan medis di puskesmas guna membuka praktik pengobatan swasta yang berbiaya mahal bagi warga.",
      "Menyerahkan seluruh penanganan krisis kesehatan masyarakat kepada relawan organisasi internasional yang datang ke daerah tersebut."
    ],
    "answer": 2,
    "explanation": "Bela negara bagi warga negara sipil dilaksanakan salah satunya melalui pengabdian profesi untuk memperkuat ketahanan nasional. Indikator dasarnya mencakup integritas, keikutsertaan menjaga kualitas sumber daya manusia melalui pelayanan kesehatan, serta kesediaan berbakti dimanapun bertugas. Jadi, opsi C benar karena secara presisi menunjukkan implementasi Pasal 27 Ayat (3) UUD 1945 melalui pengabdian profesi tenaga medis di daerah terpencil.\n\nOpsi A salah karena mengutamakan kenyamanan pribadi di atas kebutuhan pelayanan kesehatan masyarakat terdepan.\n\nOpsi B salah karena menuntut imbalan materiil sebagai syarat pelayanan bertentangan dengan semangat pengabdian bela negara.\n\nOpsi D salah karena memanfaatkan keterbatasan warga demi keuntungan pribadi merusak kepercayaan dan kesejahteraan publik.\n\nOpsi E salah karena lepas tangan dan bergantung pada pihak asing menunjukkan lemahnya kemandirian dan rasa tanggung jawab nasional."
  },
  {
    "prompt": "Seorang Aparatur Sipil Negara (ASN) yang bertugas di bagian pengadaan barang dan jasa menemukan indikasi praktik pemfaktoran harga (mark-up) pada proyek pembangunan fasilitas publik yang melibatkan pejabat tinggi instansinya. Meskipun mendapat ancaman mutasi jabatan dan iming-iming uang bungkam, ASN tersebut tetap melaporkan temuan tersebut kepada lembaga pengawas eksternal resmi. Perwujudan sikap bela negara yang ditunjukkan oleh ASN tersebut bertumpu pada…",
    "choices": [
      "Kepatuhan mutlak terhadap instruksi atasan demi menjaga kerahasiaan internal dan reputasi nama baik instansi pemerintah.",
      "Keberanian mengambil alih wewenang penegak hukum untuk melakukan proses penyidikan independen secara tertutup di kantor.",
      "Sikap loyalitas kepada rekan kerja dengan cara menyelesaikan permasalahan penyimpangan anggaran secara internal melalui jalur kekeluargaan.",
      "Komitmen integritas profesional untuk menyelamatkan keuangan negara dari kejahatan korupsi demi terwujudnya tata kelola bersih.",
      "Upaya untuk mendapatkan jaminan kenaikan pangkat secara cepat serta penghargaan finansial dari kementerian atas tindakan pelaporan."
    ],
    "answer": 3,
    "explanation": "Menolak kompromi terhadap praktik korupsi dan berani melaporkan penyimpangan anggaran negara merupakan manifestasi integritas ASN dalam membela negara dari ancaman kerugian keuangan negara. Indikator dasarnya meliputi sikap jujur, bertanggung jawab, serta mengutamakan kepentingan publik dan tata kelola pemerintah yang bersih di atas kepentingan pribadi atau golongan. Jadi, opsi D benar karena secara presisi menunjukkan komitmen integritas profesional untuk menyelamatkan keuangan negara dari praktik korupsi.\n\nOpsi A salah karena kepatuhan kepada atasan tidak berlaku jika instruksi tersebut melanggar hukum dan merugikan keuangan negara.\n\nOpsi B salah karena ASN tersebut melaporkan temuan kepada lembaga berwenang resmi, bukan mengambil alih wewenang penyidikan secara independen.\n\nOpsi C salah karena penyelesaian kasus kejahatan korupsi secara kekeluargaan merupakan bentuk pembiaran pelanggaran hukum dan merusak integritas lembaga.\n\nOpsi E salah karena motivasi bela negara ASN didasari oleh tanggung jawab moral dan integritas, bukan demi mengejar kenaikan pangkat atau imbalan materiil."
  },
  {
    "prompt": "Di tengah kondisi krisis ekonomi global, sebuah daerah terluar mengalami keterisolasian pasokan bahan pangan nasional akibat cuaca ekstrem. Komando Distrik Militer (Kodim) setempat bekerja sama dengan pemerintah daerah, organisasi kepemudaan, dan warga lokal memanfaatkan lahan-lahan tidur untuk ditanami komoditas pangan cepat panen guna mencegah kelangkaan. Ditinjau dari doktrin Pertahanan Negara Indonesia, langkah kolaboratif tersebut paling mencerminkan penerapan prinsip...",
    "choices": [
      "Sentralisasi pertahanan dengan menempatkan komando militer sebagai pengambil keputusan tunggal.",
      "Kesemestaan yang melibatkan seluruh warga negara, wilayah, dan sumber daya nasional lainnya secara terpadu.",
      "Keterbukaan pertahanan dengan mengandalkan bantuan dan hibah dari negara-negara tetangga.",
      "Otonomi khusus dalam penyelenggaraan sistem pertahanan terpisah di setiap daerah.",
      "Efisiensi anggaran militer dengan memindahkan tugas pertahanan fisik kepada masyarakat sipil"
    ],
    "answer": 1,
    "explanation": "Doktrin pertahanan negara Indonesia menganut Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) yang bersifat semesta. Ciri utama dari prinsip kesemestaan adalah dilibatkannya seluruh warga negara, wilayah, serta sumber daya nasional (termasuk potensi pangan) secara terpadu dan berkelanjutan untuk mengatasi berbagai ancaman, baik militer maupun non-militer (seperti krisis pangan). Jadi, opsi B benar karena menggambarkan kolaborasi lintas elemen berbasis prinsip kesemestaan.\n\nOpsi A salah karena pertahanan semesta mengedepankan sinergi kolaboratif, bukan pemusatan kekuasaan/keputusan tunggal di tangan militer.\n\nOpsi C salah karena esensi dari aksi tersebut adalah kemandirian nasional dengan memanfaatkan potensi lokal, bukan bergantung pada hibah asing.\n\nOpsi D salah karena sistem pertahanan Indonesia bersifat nasional dan terintegrasi dalam NKRI, bukan berdiri sendiri-sendiri berbasis otonomi daerah.\n\nOpsi E salah karena tujuan utamanya adalah menjaga ketahanan pangan dan kestabilan daerah, bukan pelimpahan beban anggaran militer ke warga."
  },
  {
    "prompt": "Di tengah persaingan ekonomi global yang ketat, maraknya produk impor dengan harga murah dapat mengancam keberlangsungan industri UMKM dalam negeri. Sikap bela negara yang paling tepat ditunjukkan oleh seorang konsumen Indonesia dalam menghadapi situasi ini adalah...",
    "choices": [
      "Mengimbau pemerintah untuk menutup total akses masuk barang impor demi melindungi pengusaha lokal.",
      "Mengutamakan penggunaan produk dalam negeri serta membantu mempromosikan kualitas karya anak bangsa.",
      "Menuntut produsen lokal untuk menurunkan harga setara dengan produk impor tanpa menurunkan kualitas.",
      "Mengurangi konsumsi barang-barang sekunder dan mengalihkan tabungan ke lembaga keuangan pemerintah.",
      "Membeli produk impor secukupnya saja hanya ketika produk lokal tidak mampu memenuhi kebutuhan."
    ],
    "answer": 1,
    "explanation": "Nilai dasar Cinta Tanah Air dalam bidang ekonomi diwujudkan melalui aksi nyata Bangga Menggunakan Produk Indonesia. Langkah ini secara langsung memberikan dukungan terhadap keberlanjutan ekonomi nasional, menjaga lapangan kerja, serta memperkuat ketahanan ekonomi bangsa dari krisis global. Jadi, opsi B benar karena mencerminkan sikap bangga dan aksi aktif mendukung kemandirian ekonomi nasional. Opsi A salah karena menutup total pasar impor tidak realistis dalam tata perdagangan internasional dan dapat memicu perang dagang. Opsi C salah karena menuntut harga murah tanpa memahami struktur biaya produksi lokal bukanlah bentuk dukungan yang konstruktif. Opsi D salah karena menahan konsumsi secara berlebihan justru dapat memperlambat perputaran roda ekonomi nasional. Opsi E salah karena bersifat pasif dan defensif, belum mencerminkan dorongan proaktif untuk memajukan industri dalam negeri."
  },
  {
    "prompt": "Seorang insinyur sipil muda yang bekerja di perusahaan konstruksi multinasional memilih mengundurkan diri dari jabatannya yang mapan demi memimpin proyek pembangunan jembatan gantung dan akses jalan swadaya di kawasan pedalaman perbatasan. Selama bertahun-tahun, ia bersedia tinggal di pemukiman dengan fasilitas minim serta mengalokasikan sebagian tabungan pribadinya untuk membeli material tambahan agar akses jalan tersebut segera selesai dan anak-anak sekolah tidak perlu menyeberangi sungai berbahaya. Dalam konteks bela negara non-fisik, tindakan insinyur tersebut merupakan manifestasi utama dari nilai...",
    "choices": [
      "Rela Berkorban untuk Bangsa dan Negara dengan menyumbangkan tenaga, pikiran, dan materi pribadi demi kemajuan serta keselamatan masyarakat.",
      "Cinta Tanah Air yang berfokus pada kebanggaan terhadap keindahan alam wilayah perbatasan Indonesia.",
      "Sadar Berbangsa dan Bernegara melalui kepatuhan terhadap program percepatan pembangunan infrastruktur pemerintah pusat.",
      "Kemampuan Awal Bela Negara dalam bentuk penguasaan teknik sipil tingkat tinggi untuk merancang bangunan tahan gempa.",
      "Setia pada Pancasila dengan cara menuntut pemerintah daerah untuk lebih memperhatikan kesejahteraan warga pedalaman."
    ],
    "answer": 0,
    "explanation": "Keputusan melepaskan karier yang mapan, mendonasikan dana pribadi, serta mendedikasikan waktu dan keahlian di daerah terisolasi demi kepentingan keselamatan publik merupakan cerminan nyata dari nilai Rela Berkorban untuk Bangsa dan Negara. Indikator utamanya adalah kesediaan mengorbankan waktu, tenaga, pikiran, dan materi demi kemajuan bangsa serta membantu sesama warga negara yang mengalami kesulitan. Jadi, opsi A benar karena mencakup pengorbanan finansial, karier, dan tenaga secara sukarela demi kemakmuran dan keselamatan rakyat.\n\nOpsi B salah karena tindakan insinyur tersebut didasari oleh aksi pengabdian nyata, bukan sekadar kekaguman atau kebanggaan pada keindahan alam.\n\nOpsi C salah karena aksi pembangunan tersebut dilakukan secara swadaya atas panggilan moral pribadi, bukan karena menjalankan instruksi/program resmi pemerintah.\n\nOpsi D salah karena keahlian teknik sipil adalah alat (tool), sedangkan esensi utama dari keputusannya adalah jiwa pengorbanan untuk masyarakat.\n\nOpsi E salah karena insinyur tersebut memilih bertindak dan turun tangan secara langsung, bukan menuntut atau mengkritik pemerintah daerah."
  },
  {
    "prompt": "Sebuah wilayah perairan Indonesia yang kaya akan potensi perikanan dan sumber daya energi lepas pantai sering mengalami infiltrasi kapal asing yang melakukan penangkapan ikan ilegal (illegal fishing). Sebagai seorang akademisi dan praktisi hukum maritim, wujud konkret implementasi nilai Cinta Tanah Air yang paling tepat dan efektif untuk menjaga kedaulatan wilayah laut nasional adalah...",
    "choices": [
      "Menggalang dana swadaya masyarakat guna membeli armada kapal patroli swasta untuk mengusir kapal asing tersebut.",
      "Menyusun kajian hukum dan advokasi kebijakan untuk memperkuat rezim hukum laut serta penegakan kedaulatan maritim.",
      "Mendorong nelayan lokal untuk melakukan tindakan perlawanan fisik secara mandiri di tengah laut melawan pihak asing.",
      "Meminta lembaga peradilan internasional mengambil alih seluruh proses penindakan hukum atas pelanggaran wilayah laut.",
      "Mengusulkan penutupan seluruh akses perlintasan kapal niaga internasional yang melewati wilayah perairan Indonesia."
    ],
    "answer": 1,
    "explanation": "Cinta Tanah Air dalam skala nasional dan akademis diwujudkan melalui pengabdian profesional untuk membentengi aset serta kedaulatan negara. Menyusun kajian hukum dan memperkuat regulasi kedaulatan maritim merupakan wujud kontribusi nyata yang legal, terstruktur, dan berdampak jangka panjang bagi perlindungan laut nasional. Jadi, opsi B benar karena memanfaatkan keahlian profesi dan instrumen hukum untuk membela kedaulatan tanah air.\n\nOpsi A salah karena patroli laut merupakan kewenang militer/aparat negara (TNI AL/Bakamla), bukan ranah penggalangan dana swasta.\n\nOpsi C salah karena membenturkan nelayan sipil secara fisik dengan kapal asing sangat membahayakan keselamatan jiwa warga negara.\n\nOpsi D salah karena penegakan hukum di wilayah laut teritorial adalah hak berdaulat Indonesia, menyerahkannya ke pihak internasional justru mereduksi kedaulatan NKRI.\n\nOpsi E salah karena menutup alur laut kepulauan melanggar hukum laut internasional (UNCLOS) dan merusak hubungan diplomasi global"
  },
  {
    "prompt": "Di era melimpahnya arus informasi, marak terjadi kampanye terstruktur di media sosial yang mengajak generasi muda untuk bersikap apatis terhadap pemilu, menolak simbol negara, dan mengagungkan ideologi asing yang bertentangan dengan Pancasila. Sebagai seorang mahasiswa yang ingin mengimplementasikan sikap bela negara di era digital, langkah solutif yang paling tepat adalah...",
    "choices": [
      "Memproduksi konten kreatif berbasis nilai Pancasila, melakukan edukasi literasi kebangsaan, dan mengamalkannya dalam kehidupan sehari-hari.",
      "Memblokir seluruh akun media sosial yang menyebarkan paham asing tanpa pernah melakukan upaya klarifikasi narasi di publik.",
      "Mengajak kelompok mahasiswa untuk melakukan aksi unjuk rasa secara anarkis di depan kantor kementerian penanggung jawab komunikasi.",
      "Menyebarkan narasi tandingan yang memuat ujaran kebencian terhadap pendukung paham asing guna meredam pengaruh propaganda mereka.",
      "Memilih pasrah dan mengabaikan kampanye tersebut karena mengabaikan ideologi merupakan hal biasa dalam era arus globalisasi."
    ],
    "answer": 0,
    "explanation": "Aktif memproduksi konten kreatif berbasis Pancasila dan mengedukasi masyarakat di ruang digital merupakan wujud pertahanan ideologi negara di era modern. Indikator dasarnya mencakup kesetiaan pada Pancasila, pemanfaatan keahlian teknologi untuk menyebarkan nilai-nilai kebangsaan, serta pembentukan ketahanan mental masyarakat dari gempuran ideologi asing. Jadi, opsi A benar karena secara presisi menggabungkan aksi edukasi digital yang kreatif dengan pengamalan nyata nilai Pancasila.\n\nOpsi B salah karena tindakan memblokir bersifat pasif dan tidak menyelesaikan atau menghentikan sebaran propaganda ideologi asing kepada pengguna lain.\n\nOpsi C salah karena aksi unjuk rasa yang berujung anarkis justru merusak fasilitas publik, merusak ketertiban umum, dan bertentangan dengan nilai Pancasila.\n\nOpsi D salah karena menjawab propaganda asing dengan ujaran kebencian justru memicu kerusuhan baru dan tidak mencerminkan kepribadian bangsa yang beradab.\n\nOpsi E salah karena sikap pasrah dan mengabaikan ancaman ideologi merupakan bentuk sikap apatis yang bertentangan dengan kewajiban bela negara."
  },
  {
    "prompt": "Di tengah eskalasi konflik geopolitik global dan disrupsi rantai pasok energi dunia, harga komoditas pokok nasional mengalami lonjakan drastis. Kondisi ini dimanfaatkan oleh sebagian pelaku spekulan pasar untuk melakukan penimbunan barang demi meraih keuntungan sepihak. Menghadapi tantangan ketahanan ekonomi nasional yang mengancam kestabilan negara tersebut, langkah bela negara di bidang ekonomi yang paling strategis dan berdampak sistemik adalah...",
    "choices": [
      "Mengembangkan kebijakan penguatan kapasitas produksi pangan lokal dan hilirisasi guna membangun kemandirian ekonomi.",
      "Mendorong masyarakat sipil melakukan pemboikotan terhadap seluruh produk impor demi menjaga arus kas perdagangan.",
      "Memperkuat aliansi perdagangan eksklusif dengan negara sahabat untuk mengamankan pasokan barang konsumsi nasional.",
      "Memberikan subsidi penuh kepada pelaku pasar swasta agar harga komoditas pokok dapat ditekan serendah mungkin.",
      "Mengalokasikan dana cadangan pertahanan militer guna membiayai operasi pasar darurat di seluruh wilayah Indonesia."
    ],
    "answer": 0,
    "explanation": "Menghadapi ancaman krisis ekonomi global, wujud bela negara jangka panjang bukan sekadar aksi reaktif atau proteksionisme ekstrem, melainkan membangun kedaulatan dan ketahanan ekonomi dari dalam (self-reliance). Peningkatan kapasitas produksi domestik dan hilirisasi komoditas merupakan strategi sistemik untuk mengurangi ketergantungan pada rantai pasok asing. Jadi, opsi A benar karena berfokus pada penguatan kapasitas internal berbasis kedaulatan dan kemandirian ekonomi nasional.\n\nOpsi B salah karena pemboikotan impor secara total bersifat destruktif dan berpotensi memicu isolasi ekonomi serta kelangkaan barang pokok.\n\nOpsi C salah karena aliansi eksklusif masih menyisakan ketergantungan pada pihak luar, bukan membangun kemandirian sejati.\n\nOpsi D salah karena subsidi penuh kepada swasta tanpa kontrol produksi hanya akan membebankan APBN tanpa menyelesaikan masalah struktur produksi.\n\nOpsi E salah meletakkan fungsi anggaran pertahanan militer pada ranah yang bukan peruntukannya, sehingga merusak postur anggaran pertahanan negara."
  },
  {
    "prompt": "Disparitas tingkat kesejahteraan dan fasilitas publik antara kawasan perkotaan dan perdesaan masih menjadi tantangan yang memicu potensi disintegrasi sosial. Sebagai bentuk partisipasi aktif dalam bela negara, kontribusi paling nyata yang dapat diberikan oleh generasi muda terdidik adalah...",
    "choices": [
      "Mengkampanyekan potensi ekonomi dan pariwisata daerah melalui media sosial agar menarik investor.",
      "Menyalurkan bantuan sosial secara berkala bagi masyarakat miskin di kawasan pelosok.",
      "Mengaplikasikan ilmu pengetahuan dan keterampilannya untuk memicu pemberdayaan ekonomi masyarakat desa.",
      "Mengkritik kebijakan pembangunan pemerintah yang dinilai belum merata di wilayah pinggiran.",
      "Mendorong masyarakat desa untuk berpartisipasi aktif dalam kegiatan gotong royong dan koperasi lokal."
    ],
    "answer": 2,
    "explanation": "Mengatasi kesenjangan sosial-ekonomi dalam kerangka bela negara memerlukan solusi yang berkelanjutan dan berbasis pemberdayaan (empowerment). Generasi muda terdidik memiliki kapasitas intelektual yang sangat strategis untuk menciptakan kemandirian ekonomi masyarakat desa, bukan sekadar memberikan bantuan sesaat. Jadi, opsi C benar karena mencerminkan kontribusi nyata berupa pemanfaatan kapasitas diri untuk menyelesaikan akar masalah kesenjangan. Opsi A salah karena promosi media sosial bermanfaat, namun dampak langsungnya terhadap pemenuhan kebutuhan dasar masyarakat desa masih terbatas. Opsi B salah karena bantuan sosial bersifat karitatif (kedermawanan sementara) dan tidak menyelesaikan masalah kesenjangan secara struktural/berkelanjutan. Opsi D salah karena menyampaikan kritik tanpa aksi nyata belum memberikan dampak langsung bagi peningkatan kesejahteraan warga desa. Opsi E salah karena menggerakkan koperasi desa adalah langkah baik, tetapi fokus jawaban ini belum menonjolkan peran spesifik generasi muda terdidik sebagai motor inovasi."
  },
  {
    "prompt": "Pada peristiwa Pertempuran Surabaya (10 November 1945), Bung Tomo memekikkan takbir dan pidato berapi-api melalui pemancar radio untuk mengobarkan semangat perlawanan rakyat dan pemuda Surabaya melawan pasukan Sekutu/NICA. Ditinjau dari konsep bela negara, aksi perlawanan yang digerakkan oleh Bung Tomo tersebut merupakan bentuk pertahanan non-fisik berupa…",
    "choices": [
      "Ketaatan hukum warga negara terhadap maklumat perang yang dikeluarkan oleh kementerian pertahanan resmi.",
      "Penerapan Kemampuan Awal Bela Negara berupa keahlian penguasaan teknologi penyiaran radio internasional.",
      "Bentuk Rela Berkorban demi Bangsa dan Negara dengan cara mematuhi secara mutlak ultimatum yang dikeluarkan pihak asing.",
      "Manifestasi Sadar Berbangsa dan Bernegara yang bertujuan menuntut pengakuan kedaulatan diplomasi di meja perundingan PBB.",
      "Mobilisasi perlawanan berbasis penguatan benteng ideologi dan penyulut semangat nasionalisme untuk mempertahankan kedaulatan."
    ],
    "answer": 4,
    "explanation": "Pidato dan siaran radio Bung Tomo merupakan sarana pertahanan non-fisik yang berperan vital menyatukan tekad, membakar semangat kebangsaan, dan membentengi mental rakyat dari ancaman intimidasi musuh. Penguatan psikologis dan ideologis masyarakat melalui narasi perjuangan merupakan bagian dari benteng bela negara non-fisik yang menggerakkan perlawanan fisik rakyat. Jadi, opsi E benar karena menekankan pada aspek penguatan ideologi, mental, dan nasionalisme sebagai esensi pidato Bung Tomo.\n\nOpsi A salah karena gerakan perlawanan rakyat Surabaya dipicu oleh semangat spontanitas kebangsaan dan Resolusi Jihad, bukan sekadar perintah maklumat kementerian formal.\n\nOpsi B salah karena siaran radio adalah media/alat (tools), sedangkan esensi bela negaranya terletak pada penyulutan semangat nasionalisme.\n\nOpsi C salah karena rakyat Surabaya secara tegas menolak dan melawan ultimatum Sekutu, bukan mematuhinya.\n\nOpsi D salah karena tujuan siaran radio Bung Tomo adalah mengobarkan perlawanan di tingkat lokal/nasional, bukan untuk keperluan negosiasi formal di forum PBB."
  },
  {
    "prompt": "Perkembangan teknologi dan sains menjadi salah satu arena persaingan antarnegara. Yunita dan timnya berhasil meraih medali emas dalam kompetisi riset teknologi dan olimpiade sains tingkat dunia setelah melalui proses penelitian intensif serta persaingan ketat dengan berbagai negara maju. Dalam konteks nilai-nilai dasar bela negara, pencapaian tersebut secara mendasar merepresentasikan...",
    "choices": [
      "Penguasaan teknologi tinggi guna memperkuat pertahanan dan ketahanan militer nasional.",
      "Sikap rela berkorban demi meraih popularitas pribadi dan pengakuan akademik kelompok.",
      "Manifestasi rasa cinta tanah air melalui pembuktian kapasitas intelektual dan penghormatan nama bangsa di tingkat internasional.",
      "Wujud ketaatan penuh terhadap instruksi serta penugasan resmi dari lembaga pemerintah.",
      "Bentuk pengabdian warga negara dalam meningkatkan daya saing ekonomi berbasis komersialisasi teknologi."
    ],
    "answer": 2,
    "explanation": "Keberhasilan Yunita dan timnya dalam menjuarai olimpiade sains dan riset tingkat internasional dilandasi oleh rasa cinta tanah air yang diwujudkan melalui pembuktian kapasitas intelektual anak bangsa. Dorongan utamanya adalah mengibarkan nama baik Indonesia dan membuktikan daya saing bangsa di arena global. Jadi, opsi C benar karena secara presisi mengaitkan pencapaian keilmuan internasional dengan nilai dasar Cinta Tanah Air.\n\nOpsi A salah karena kompetisi sains tersebut berfokus pada keunggulan akademik dan riset umum, bukan pengembangan militer atau pertahanan fisik.\n\nOpsi B salah karena pencapaian tersebut ditujukan untuk kehormatan bangsa dan negara, bukan demi popularitas atau kepentingan personal.\n\nOpsi D salah karena prestasi keilmuan lahir dari kesadaran kebangsaan dan dedikasi tinggi, bukan sekadar kepatuhan hierarkis pada tugas pemerintah.\n\nOpsi E salah karena fokus utama bela negara dalam konteks riset internasional ini adalah menjaga kehormatan serta martabat bangsa (Cinta Tanah Air), bukan sekadar komersialisasi ekonomi."
  },
  {
    "prompt": "Dalam beberapa tahun terakhir, pasar domestik Indonesia diserbu oleh arus impor produk sandang dan kerajinan berbasis manufaktur massal dengan harga yang sangat murah namun beresiko mematikan industri tekstil dan batik lokal. Menanggapi fenomena ini, seorang pengusaha muda lokal memutuskan untuk tidak beralih menjadi pengimpor, melainkan melakukan modernisasi teknik produksi batik tradisional tanpa mengabaikan kelestarian lingkungan serta menggerakkan kampanye kebangsaan untuk mencintai produk lokal. Dalam konteks bela negara non-fisik di bidang ekonomi, esensi utama dari langkah yang diambil pengusaha tersebut adalah...",
    "choices": [
      "Wujud ketaatan terhadap imbauan pemerintah dalam membatasi kuota impor produk jadi di sektor tekstil.",
      "Manifestasi nilai Cinta Tanah Air melalui penguatan kemandirian ekonomi nasional dan pelestarian identitas budaya bangsa.",
      "Bentuk pertahanan ekonomi pasif dalam mengantisipasi ancaman krisis moneter global di sektor UMKM.",
      "Upaya meningkatkan daya saing individu agar dapat menguasai pangsa pasar ekspor secara monopoli.",
      "Implementasi kesadaran berbangsa untuk menuntut pemerintah memberikan subsidi bahan baku kepada industri lokal."
    ],
    "answer": 1,
    "explanation": "Langkah memajukan produk kerajinan/tekstil tradisional di tengah persaingan barang impor murah merepresentasikan nilai dasar Cinta Tanah Air yang diwujudkan melalui penguatan ekonomi domestik dan perlindungan warisan budaya. Menggunakan dan mengembangkan karya anak bangsa menjaga kedaulatan ekonomi serta lapangan kerja nasional dari ketergantungan asing. Jadi, opsi B benar karena mencakup dua dimensi penting: kemandirian ekonomi dan pelestarian budaya bangsa.\n\nOpsi A salah karena tindakan pengusaha tersebut merupakan inisiatif bisnis berbasis nilai kebangsaan, bukan sekadar kepatuhan regulasi kuota impor.\n\nOpsi C salah karena strategi yang dijalankan bersifat proaktif dan inovatif (penguatan produksi & kampanye), bukan sikap pasif.\n\nOpsi D salah karena tujuan bela negara adalah memperkuat ekosistem ekonomi nasional, bukan untuk penguasaan pasar secara monopoli pribadi.\n\nOpsi E salah karena fokus tindakan terletak pada inovasi mandiri dan pembentukan kesadaran publik, bukan pada tuntutan subsidi kepada pemerintah."
  },
  {
    "prompt": "Seorang warga masyarakat mencurigai adanya aktivitas tidak biasa di sebuah rumah sewa di lingkungannya, seperti tertutupnya penghuni dari interaksi sosial, seringnya pengiriman bahan kimia cair tertentu dalam jumlah besar pada malam hari, dan munculnya diskusi doktrin radikal. Warga tersebut kemudian melaporkan indikasi ini kepada aparat keamanan setempat. Mengapa tindakan pelaporan oleh warga sipil ini dikategorikan sebagai wujud nyata sikap bela negara?",
    "choices": [
      "Karena warga telah mengambil alih tugas serta kewenangan aparat kepolisian dalam upaya penindakan dan pelumpuhan jaringan terorisme.",
      "Karena tindakan tersebut merupakan bentuk partisipasi aktif warga dalam pencegahan awal (early warning) demi menjaga keselamatan nasional.",
      "Karena warga menjalankan kewajiban undang-undang yang menginstruksikan seluruh elemen masyarakat untuk melakukan kegiatan pengawasan intelijen profesional.",
      "Karena tindakan pelaporan tersebut bertujuan untuk memperoleh perlindungan hukum secara maksimal serta jaminan penghargaan finansial dari pemerintah.",
      "Karena tindakan tersebut membuktikan bahwa masyarakat sipil memiliki kapasitas fisik yang setara dengan personel militer dalam menangani terorisme."
    ],
    "answer": 1,
    "explanation": "Penanganan ancaman terorisme membutuhkan partisipasi masyarakat dalam bentuk kewaspadaan lingkungan (deteksi dini dan peringatan dini). Keikutsertaan warga melaporkan indikasi ancaman keselamatan publik merupakan bentuk partisipasi non-fisik yang sangat vital dalam sistem pertahanan keamanan rakyat semesta. Jadi, opsi B benar karena menunjuk pada esensi deteksi dini (early warning) warga dalam melindungi keselamatan nasional.\n\nOpsi A salah karena warga sipil tidak mengambil alih wewenang penindakan hukum/eksekusi yang dimiliki oleh aparat kepolisian.\n\nOpsi C salah karena tugas pengawasan intelijen profesional tetap merupakan ranah lembaga negara berwenang, warga hanya berpartisipasi memberikan informasi (kewaspadaan lingkungan).\n\nOpsi D salah karena motivasi dasar bela negara adalah kesadaran menjaga keselamatan bangsa, bukan karena mengharapkan imbalan finansial.\n\nOpsi E salah karena melapor adalah bentuk keikutsertaan berbasis kewaspadaan dan kepedulian sosial, bukan pembuktian kemampuan fisik militer."
  },
  {
    "prompt": "Seorang dokter spesialis epidemiologi yang bertugas di rumah sakit daerah terpencil menyadari bahwa potensi lonjakan kasus penyakit menular berbahaya di wilayahnya sangat tinggi akibat keterbatasan sanitasi. Meskipun sarana medis terbatas, dokter tersebut secara konsisten menjaga kebugaran fisiknya, mengasah keahlian analisis data kesehatan secara mandiri, serta membina kesehatan mental tim medisnya agar tetap sigap dan tidak panik saat terjadi krisis kesehatan. Ketika wabah benar-benar merebak, tim medis tersebut mampu merespons secara cepat dan terstruktur sehingga angka fatalitas dapat ditekan. Tindakan dokter tersebut paling tepat menggambarkan nilai dasar...",
    "choices": [
      "Sadar Berbangsa dan Bernegara melalui kepatuhan terhadap standar operasional prosedur penanganan krisis kesehatan dari kementerian.",
      "Rela Berkorban untuk Bangsa dan Negara dengan menyerahkan seluruh waktu istirahat pribadinya demi melayani pasien.",
      "Kemampuan Awal Bela Negara yang diwujudkan melalui kesiapsiagaan fisik, mental, dan peningkatan kompetensi profesi dalam mengantisipasi ancaman.",
      "Cinta Tanah Air melalui komitmen melestarikan kearifan lokal masyarakat dalam pengobatan tradisional.",
      "Setia pada Pancasila dengan menerapkan asas keadilan sosial dalam pembagian obat-obatan gratis kepada warga."
    ],
    "answer": 2,
    "explanation": "Tindakan secara sadar memelihara kesehatan fisik, menggembleng mental, serta terus mengasah kecakapan/kompetensi keahlian sebelum ancaman krisis benar-benar terjadi merupakan inti dari Kemampuan Awal Bela Negara. Indikator dasarnya meliputi memiliki kesiapsiagaan fisik dan mental, serta memiliki kecerdasan dan keterampilan sesuai bidangnya untuk menghadapi berbagai bentuk ancaman non-militer. Jadi, opsi C benar karena secara presisi menggambarkan integrasi kesiapsiagaan fisik, mental, dan profesionalisme sebagai bentuk kemampuan awal.\n\nOpsi A salah karena tindakan kesiapan tersebut lahir dari inisiatif peningkatan kapasitas diri, bukan sekadar bentuk kepatuhan administratif pada SOP.\n\nOpsi B salah karena esensi utama kasus berfokus pada aspek kesiapan (preparedness) dan kapasitas medis, bukan pada pengorbanan waktu istirahat semata.\n\nOpsi D salah karena fokus utama tindakan adalah pengembangan analisis data medis modern dan kesiapsiagaan krisis, bukan pelestarian pengobatan tradisional.\n\nOpsi E salah karena kasus tidak menekankan pada aspek skema pembagian bantuan atau keadilan distribusi logistik medis."
  },
  {
    "prompt": "Sebuah karya seni tari tradisional khas suatu suku di Indonesia diklaim secara sepihak dan didaftarkan sebagai hak paten budaya oleh sebuah perusahaan hiburan komersial asing. Seorang peneliti kebudayaan muda mengumpulkan bukti-bukti sejarah, mengolah dokumentasi etnografis secara sistematis, dan memfasilitasi komunitas lokal untuk mengajukan keberatan resmi ke organisasi hak atas kekayaan intelektual dunia (WIPO). Tindakan peneliti muda tersebut merupakan manifestasi nilai dasar Cinta Tanah Air yang berfokus pada...",
    "choices": [
      "Penolakan terhadap seluruh bentuk budaya luar yang masuk dan berkembang di dalam kehidupan masyarakat modern.",
      "Penguasaan pasar hiburan global melalui komersialisasi aset seni tradisional secara luas kepada publik dunia.",
      "Pemaksaan adopsi budaya lokal Indonesia kepada masyarakat luar negeri melalui jalur diplomasi kebudayaan.",
      "Penuntutan ganti rugi secara materiil kepada negara lain atas penggunaan karya seni tradisional tanpa izin.",
      "Perlindungan warisan budaya nasional dan penegakan identitas bangsa dari upaya klaim sepihak pihak asing."
    ],
    "answer": 4,
    "explanation": "Kekayaan budaya merupakan identitas dan jati diri bangsa yang wajib dilindungi dari pengakuan (klaim) sepihak oleh entitas luar. Tindakan peneliti yang memvalidasi bukti sejarah dan membawa kasus pencatatan warisan budaya ke WIPO adalah bentuk bela negara berbasis Cinta Tanah Air demi mempertahankan identitas dan kedaulatan budaya nasional. Jadi, opsi E benar karena secara akurat menggambarkan aspek perlindungan warisan budaya dan identitas bangsa.\n\nOpsi A salah karena tujuan tindakan bukan membenci atau menolak budaya asing, melainkan memperjuangkan hak cipta atas budaya lokal.\n\nOpsi B salah karena pengajuan ke WIPO bertujuan menjaga keabsahan hak cipta dan warisan sejarah, bukan sekadar komersialisasi hiburan.\n\nOpsi C salah karena diplomasi ini bertujuan menyelamatkan identitas bangsa, bukan memaksakan budaya Indonesia ke masyarakat luar.\n\nOpsi D salah karena esensi perlawanan terletak pada pengakuan sah atas kepemilikan warisan budaya, bukan sekadar memburu ganti rugi materiil."
  },
  {
    "prompt": "Pemindahan Ibu Kota Negara (IKN) dari Jakarta ke Nusantara di Kalimantan Timur merupakan langkah strategis yang tidak hanya bertujuan menata ulang pemerataan pembangunan ekonomi, tetapi juga didasari oleh kalkulasi pertahanan dan keamanan nasional. Ditinjau dari sudut pandang geopolitik pertahanan negara, alasan esensial di balik penetapan lokasi IKN yang baru tersebut adalah...",
    "choices": [
      "Memindahkan pusat gravitasi pertahanan dari pulau yang padat ke wilayah yang memiliki kedalaman strategis geografis.",
      "Meminimalkan keterlibatan TNI dalam pengamanan pusat pemerintahan agar fokus pada pemeliharaan ketertiban sipil.",
      "Mengisolasi pusat pemerintahan dari jalur perdagangan internasional guna menghindari potensi intervensi asing.",
      "Mempermudah pembelian dan pengadaan alutsista baru yang diimpor langsung dari negara-negara tetangga.",
      "Menyerahkan seluruh sistem pengamanan ibu kota baru kepada konsorsium pengembang swasta dan asing."
    ],
    "answer": 0,
    "explanation": "Dari perspektif geopolitik dan pertahanan (defence geography), Jakarta di Pulau Jawa sangat rentan karena memiliki kepadatan penduduk ekstrim dan posisi yang terbuka dari arah laut. Pemindahan IKN ke Kalimantan Timur memberikan strategic depth (kedalaman strategis), yaitu posisi geopolitik yang lebih seimbang di tengah Nusantara (sentris) dan dikelilingi benteng alam serta Alur Laut Kepulauan Indonesia (ALKI) II untuk ketahanan nasional. Jadi, opsi A benar karena menunjuk langsung pada aspek kedalaman strategis geografis pertahanan negara.\n\nOpsi B salah karena IKN justru membutuhkan pengamanan TNI secara terintegrasi (pembentukan Koopsau, Kodam, dan Lantamal baru), bukan mengurangi peran TNI.\n\nOpsi C salah karena Kaltim terletak dekat dengan ALKI II yang merupakan jalur perdagangan aktif; tujuannya adalah mengawasi dan mengamankan jalur tersebut, bukan mengisolasi diri.\n\nOpsi D salah karena lokasi IKN tidak berkaitan langsung dengan skema birokrasi impor alutsista dari negara tetangga.\n\nOpsi E salah karena pengamanan Objek Vital Nasional pusat pemerintahan wajib dipegang penuh oleh militer dan kepolisian negara, bukan pihak swasta/asing."
  },
  {
    "prompt": "Perang Jawa (1825–1830) yang dipimpin oleh Pangeran Diponegoro tidak hanya dipicu oleh ketidakadilan atas pematokan tanah leluhur, tetapi juga bentuk perlawanan terhadap penindasan ekonomi, campur tangan asing dalam kedaulatan lokal, dan kemerosotan moral akibat dominasi kolonial. Jika nilai-nilai perjuangan Pangeran Diponegoro dikontekstualisasikan dalam upaya bela negara masyarakat modern saat ini, wujud perlawanan yang paling setara dalam membela kedaulatan bangsa adalah...",
    "choices": [
      "Menggalang aksi penolakan secara fisik terhadap seluruh investor asing yang ingin menanamkan modalnya di daerah.",
      "Mengembangkan kemandirian ekonomi berbasis potensi lokal serta konsisten melawan praktik korupsi dan ketidakadilan.",
      "Membentuk kelompok milisi swadaya masyarakat guna menjaga stabilitas dan keamanan wilayah perbatasan secara mandiri.",
      "Menolak penerapan teknologi serta sistem hukum modern yang diadopsi dari standar dan regulasi internasional.",
      "Menguasai lahan tanah pribadi sebanyak-banyaknya agar tidak teralihkan kepemilikannya kepada pihak pengembang asing."
    ],
    "answer": 1,
    "explanation": "Esensi perjuangan Pangeran Diponegoro terletak pada keberanian melawan penindasan, menjaga harga diri/kedaulatan bangsa dari campur tangan yang merugikan rakyat, serta menolak kompromi terhadap korupsi dan kemerosotan moral di birokrasi kolonial. Pada era modern, semangat tersebut paling tepat diwujudkan melalui penguatan kemandirian ekonomi rakyat (berbasis potensi lokal) serta sikap tegas dalam memberantas korupsi dan ketidakadilan sosial yang merusak kedaulatan negara dari dalam. Jadi, opsi B benar karena secara tepat menerjemahkan esensi perjuangan Diponegoro ke dalam dimensi ekonomi mandiri dan integritas moral bangsa.\n\nOpsi A salah karena menolak seluruh investasi asing tanpa seleksi justru dapat menghambat pertumbuhan ekonomi; perjuangan modern adalah menjaga kedaulatan dan keadilan investasi, bukan xenofobia.\n\nOpsi C salah karena pembentukan milisi sipil melanggar hukum dan monopoli penggunaan kekuatan negara (TNI/Polri).\n\nOpsi D salah karena menolak teknologi modern adalah langkah mundur; perjuangan modern justru memanfaatkan teknologi untuk kemajuan bangsa.\n\nOpsi E salah karena penguasaan tanah untuk kepentingan pribadi semata tidak mencerminkan nilai bela negara yang berorientasi pada keadilan sosial bagi publik."
  },
  {
    "prompt": "Masuknya budaya populer asing yang masif melalui platform media sosial mulai menggeser penggunaan bahasa daerah dan norma kesopanan lokal di kalangan remaja. Di saat yang sama, kelompok ekstremis memanfaatkan algoritma media sosial untuk menyebarkan ideologi radikal yang mengaburkan wawasan kebangsaan generasi muda. Langkah paling strategis, solutif, dan berdampak jangka panjang yang dapat dilakukan oleh generasi muda dalam menghadapi tantangan bela negara tersebut adalah...",
    "choices": [
      "Mengisolasi diri dari penggunaan media sosial berbasis luar negeri serta mewajibkan penggunaan platform komunikasi lokal.",
      "Mendorong pemerintah untuk memperketat regulasi serta membatasi jam tayang seluruh konten hiburan asing di ruang digital.",
      "Mengadakan penertiban perilaku remaja secara berkala di ruang publik demi menjaga standar norma kesopanan daerah.",
      "Mengikuti pelatihan kepemimpinan militer secara intensif untuk membentengi diri dari paparan propaganda radikalisme digital.",
      "Memperkuat daya saring mental melalui literasi digital kebangsaan dan proaktif memproduksi konten kreatif berbasis kearifan lokal."
    ],
    "answer": 4,
    "explanation": "Menghadapi gempuran budaya asing dan propaganda radikalisme di era keterbukaan informasi, strategi bela negara tidak bisa dilakukan dengan penutupan akses atau pembatasan fisik. Langkah yang paling relevan bagi generasi muda adalah memperkuat daya saring (filter) internal melalui peningkatan literasi digital kebangsaan serta melakukan perlawanan narasi proaktif dengan memproduksi konten positif bernilai kearifan lokal. Jadi, opsi E benar karena memadukan penguatan benteng mental (literasi) dengan partisipasi aktif memproduksi narasi kebangsaan.\n\nOpsi A salah karena isolasi digital atau menutup akses platform asing adalah tindakan yang kurang realistis dan menghambat kemajuan teknologi.\n\nOpsi B salah karena menyerahkan seluruh penyelesaian masalah pada pembatasan regulasi pemerintah bersifat pasif dan tidak melatih daya kritis generasi muda.\n\nOpsi C salah karena pendekatan penertiban fisik bersifat represif dan tidak menyelesaikan akar masalah berupa kurangnya pemahaman literasi digital/kebangsaan.\n\nOpsi D salah karena ancaman radikalisme di era digital adalah perang narasi dan pemikiran (non-fisik), sehingga militerisasi fisik kurang tepat sasaran sebagai solusi utama."
  },
  {
    "prompt": "Di sebuah grup komunikasi digital warga, tersebar sebuah potongan video hasil rekayasa kecerdasan buatan (deepfake) yang memperlihatkan seorang tokoh masyarakat menyampaikan seruan provokatif berbasis isu SARA. Video tersebut memicu kemarahan publik dan mulai memancing aksi pengerahan massa di tingkat lokal. Sebagai seorang mahasiswa yang memiliki tanggung jawab bela negara non-fisik di era digital, langkah paling tepat dan solutif yang harus dilakukan adalah...",
    "choices": [
      "Mengunggah tangkapan layar video tersebut di akun media sosial pribadi disertai kecaman terbuka agar warga tidak terpengaruh.",
      "Menghapus diri dari grup komunikasi digital tersebut guna menghindari keterlibatan dalam konflik dan penyebaran konten negatif.",
      "Melaporkan pengunggah pertama video tersebut ke pihak kepolisian tanpa melakukan upaya verifikasi maupun edukasi di dalam grup.",
      "Melakukan verifikasi fakta berbasis data valid, membagikan klarifikasi resmi ke grup, dan mengedukasi warga agar tidak terprovokasi.",
      "Menyebarkan video tandingan dengan narasi serupa untuk mengalihkan perhatian publik dari isu utama yang sedang memanas"
    ],
    "answer": 3,
    "explanation": "Menghadapi provokasi digital berbasis manipulasi teknologi (deepfake), wujud bela negara dari generasi muda adalah bertindak sebagai agen pemutus rantai hoaks melalui verifikasi informasi serta edukasi publik secara langsung di lingkungan terdekatnya. Sikap kritis yang dipadukan dengan langkah komunikatif-edukatif merupakan benteng ideologis terkuat untuk mencegah potensi bentrokan antarwarga. Jadi, opsi D benar karena memadukan verifikasi berbasis bukti, klarifikasi langsung pada sumber penyebaran, dan edukasi publik.\n\nOpsi A salah karena mengunggah ulang tangkapan layar video provokatif ke media sosial pribadi justru berpotensi memperluas jangkauan sebaran konten negatif tersebut.\n\nOpsi B salah karena keluar dari grup adalah sikap pasif dan menghindar yang tidak menyelesaikan potensi konflik sosial di masyarakat.\n\nOpsi C salah karena pelaporan hukum adalah jalur formal, namun tidak langsung meredam potensi konflik yang sedang memanas di dalam grup warga saat itu juga.\n\nOpsi E salah karena membuat video tandingan berisiko menambah keruhan suasana dan memperluas disinformasi di tengah masyarakat."
  },
  {
    "prompt": "Di tengah tren perdagangan bebas, pasar domestik dibanjiri barang manufaktur impor berharga sangat murah akibat praktik predatory pricing platform digital asing. Kondisi ini mengancam keberlangsungan puluhan ribu pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) lokal. Sebagai perwujudan sikap bela negara dalam kehidupan berbangsa dan bernegara untuk menjaga kedaulatan ekonomi, langkah konkret paling tepat yang harus dilakukan warga negara adalah...",
    "choices": [
      "Mengampanyekan pemboikotan secara masif terhadap seluruh produk impor tanpa diimbangi peningkatan kualitas produksi barang lokal.",
      "Menuntut pemerintah untuk segera menutup seluruh akses perdagangan internasional guna melindungi bisnis para pedagang kecil.",
      "Beralih menjadi penjual barang-barang impor murah agar dapat memperoleh pendapatan finansial pribadi yang jauh lebih besar.",
      "Membatasi diri hanya membeli produk-produk kebutuhan pokok yang diproduksi oleh perusahaan milik pemerintah daerah setempat.",
      "Memprioritaskan penggunaan produk dalam negeri serta membantu mempromosikan UMKM lokal guna memperkuat kemandirian ekonomi bangsa."
    ],
    "answer": 4,
    "explanation": "Memprioritaskan penggunaan produk dalam negeri serta aktif mempromosikan UMKM lokal merupakan wujud nyata menjaga kedaulatan dan kemandirian ekonomi nasional dari gempuran barang impor. Indikator dasarnya meliputi rasa kepemilikan, dukungan terhadap ekonomi rakyat, serta upaya mengurangi ketergantungan pada produk asing demi kelangsungan perekonomian bangsa. Jadi, opsi E benar karena secara presisi menggambarkan tindakan konkret warga negara dalam memperkuat daya saing dan kemandirian ekonomi nasional.\n\nOpsi A salah karena tindakan pemboikotan tanpa diimbangi perbaikan kualitas produk dalam negeri tidak menjadi solusi yang konstruktif bagi ekonomi nasional.\n\nOpsi B salah karena menuntut penutupan total perdagangan internasional bersifat proteksionisme ekstrem yang justru merugikan posisi diplomasi dan perdagangan negara.\n\nOpsi C salah karena keputusan beralih menjual barang impor hanya menguntungkan finansial pribadi dan memperparah ancaman keterpurukan UMKM lokal.\n\nOpsi D salah karena wujud bela negara di bidang ekonomi berlaku secara universal untuk seluruh produk anak bangsa, tidak terbatas pada BUMD setempat saja."
  },
  {
    "prompt": "Seorang dosen di perguruan tinggi negeri meriset dan mengembangkan teknologi sistem deteksi dini (early warning system) gempa bumi dan tsunami berbasis sensor lokal yang murah serta presisi. Hasil riset tersebut divalidasi, diproduksi secara massal, dan diintegrasikan ke dalam sistem kebencanaan nasional oleh Badan Meteorologi, Climatology, dan Geofisika (BMKG) demi meminimalkan korban jiwa. Berdasarkan UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, bentuk keikutsertaan warga negara dalam bela negara yang dilakukan oleh dosen tersebut dilaksanakan melalui…",
    "choices": [
      "Pelatihan dasar militer secara wajib bagi seluruh civitas akademika perguruan tinggi.",
      "Pengabdian sebagai prajurit Tentara Nasional Indonesia secara sukarela atau wajib.",
      "Keanggotaan dalam organisasi kemasyarakatan yang dibina langsung oleh kementerian pertahanan.",
      "Pengabdian sesuai dengan profesi untuk kepentingan pertahanan dan keselamatan bangsa.",
      "Pendidikan kewarganegaraan melalui jalur formal persekolahan dan perkuliahan."
    ],
    "answer": 3,
    "explanation": "Menurut UU No. 23 Tahun 2019 Pasal 6 Ayat (2), keikutsertaan warga negara dalam usaha bela negara dapat diselenggarakannya melalui empat jalur: (1) pendidikan kewarganegaraan, (2) pelatihan dasar kemiliteran secara wajib, (3) pengabdian sebagai prajurit TNI, dan (4) pengabdian sesuai dengan profesi. Keahlian dosen dalam menciptakan teknologi kebencanaan demi menyelamatkan nyawa warga negara merupakan wujud nyata dari pengabdian sesuai profesi. Jadi, opsi D benar karena mencerminkan jalur partisipasi bela negara berbasis keahlian profesi.\n\nOpsi A salah karena dosen tersebut bertindak berdasarkan kapasitas keilmuan/risetnya, bukan karena mengikuti pelatihan militer wajib.\n\nOpsi B salah karena yang bersangkutan tetap berstatus sebagai akademisi/dosen sipil, bukan mendaftarkan diri sebagai prajurit TNI.\n\nOpsi C salah karena inovasi riset dosen tersebut merupakan karya profesional akademis, bukan bentuk keanggotaan ormas binaan kemhan.\n\nOpsi E salah karena meskipun terjadi di lingkungan perguruan tinggi, wujud pengabdian utamanya adalah hasil inovasi riset terapan (profesi), bukan sekadar kegiatan belajar-mengajar materi kewarganegaraan."
  },
  {
    "prompt": "Menjelang pelaksanaan Pemilu, situasi di suatu daerah permukiman perkotaan yang heterogen menjadi sangat memanas akibat penyebaran narasi politik identitas dan berita bohong (hoaks) yang memecah belah warga. Sebagai warga negara yang ingin mewujudkan sikap bela negara dalam menjaga persatuan bangsa di lingkungan sekitar, tindakan paling tepat yang harus dilakukan adalah...",
    "choices": [
      "Memilih untuk tidak menggunakan hak pilih (golput) agar tidak terlibat dalam dinamika konflik politik di lingkungan.",
      "Membatasi pergaulan sehari-hari hanya dengan warga yang memiliki kesamaan latar belakang pandangan politik serta ideologi.",
      "Menjadi pelopor kerukunan dengan memverifikasi informasi hoaks, mendinginkan suasana, serta memfasilitasi dialog warga yang menyejukkan.",
      "Menggalang massa pendukung paslonnya untuk mengintimidasi kelompok warga lain agar suasana lingkungan kembali berjalan tertib.",
      "Melaporkan seluruh tetangga yang berbeda pilihan politik ke pihak kepolisian atas tuduhan tindakan penyebaran ujaran kebencian."
    ],
    "answer": 2,
    "explanation": "Menjadi penyaring informasi bohong dan penengah di tengah masyarakat yang terpolarisasi merupakan tindakan nyata menjaga integrasi serta persatuan bangsa. Indikator dasarnya meliputi kemampuan menjaga kerukunan, mengutamakan kepentingan persatuan di atas kepentingan kelompok, serta aktif mencegah perpecahan sosial di lingkungan masyarakat. Jadi, opsi C benar karena secara presisi mencerminkan peran proaktif warga dalam memverifikasi hoaks dan menciptakan iklim dialog yang menyejukkan.\n\nOpsi A salah karena bersikap apatis dan tidak menggunakan hak pilih merupakan wujud pengabaian terhadap hak dan kewajiban sebagai warga negara.\n\nOpsi B salah karena membatasi pergaulan hanya pada kelompok yang sefaham menciptakan eksklusivisme dan memperparah sekat-sekat sosial di masyarakat.\n\nOpsi D salah karena tindakan intimidasi massa justru memicu gesekan sosial yang lebih luas dan merusak nilai-nilai kedamaian serta persatuan.\n\nOpsi E salah karena perbedaan pandangan politik adalah hal yang wajar dalam demokrasi dan tidak serta-merta dapat dikategorikan sebagai tindak pidana."
  },
  {
    "prompt": "Beberapa karya seni motif kain tradisional khas suatu daerah di Indonesia mulai diproduksi secara massal oleh pabrik tekstil luar negeri dan dijual tanpa mencantumkan asal-usul kebudayaannya. Sebagai warga negara yang memiliki kesadaran bela negara di bidang kebudayaan, sikap dan tindakan yang paling tepat untuk dilakukan adalah...",
    "choices": [
      "Membeli produk tekstil luar negeri tersebut karena harganya jauh lebih murah daripada buatan perajin lokal.",
      "Membiarkan praktik tersebut terjadi agar kebudayaan motif kain tradisional Indonesia dapat terkenal di luar negeri.",
      "Mengkampanyekan gerakan pemboikotan terhadap seluruh produk pakaian modern yang masuk dari negara luar.",
      "Mendorong pendaftaran hak cipta kain tradisional serta bangga memakai produk kain asli perajin dalam negeri.",
      "Menuntut pemerintah daerah untuk memberikan kompensasi finansial langsung kepada seluruh warga pemilik motif."
    ],
    "answer": 3,
    "explanation": "Ancaman penyerobotan warisan budaya oleh pihak asing harus direspons dengan proteksi hukum (pendaftaran Hak Kekayaan Intelektual/Gagasan Geografis) serta dukungan ekonomi terhadap perajin lokal. Menggunakan dan melestarikan produk asli buatan lokal merupakan wujud Cinta Tanah Air yang membentengi aset budaya dari kepunahan maupun akuisisi asing. Jadi, opsi D benar karena menggabungkan perlindungan hukum (pendaftaran hak cipta) dengan aksi nyata kebanggaan produk lokal.\n\nOpsi A salah karena membeli produk tiruan asing merugikan perajin lokal dan memperlemah ekonomi pengrajin dalam negeri.\n\nOpsi B salah karena pembiaran klaim tanpa pencatatan asal-usul akan menghilangkan hak kepemilikan komunal bangsa atas warisan budaya tersebut.\n\nOpsi C salah karena memboikot seluruh pakaian modern luar negeri adalah tindakan emosional yang tidak menyelesaikan masalah perlindungan hak cipta kain tradisional.\n\nOpsi E salah karena memberikan kompensasi finansial tidak menyelesaikan ancaman klaim hak cipta dan pengikisan identitas budaya oleh pabrik asing."
  },
  {
    "prompt": "Upaya pemerintah dalam memperketat pengawasan serta menindak tegas platform digital asing yang menyebarkan konten judi online dan kejahatan siber merupakan bentuk perlindungan nyata terhadap warga negara. Ditinjau dari kewajiban negara dalam menyelenggarakan bela negara non-fisik, tindakan ketat tersebut pada dasarnya merupakan wujud dari tugas negara dalam hal...",
    "choices": [
      "Membela dan melindungi keamanan serta keselamatan warga negara dari ancaman yang merusak moral dan ekonomi.",
      "Membatasi dan mengawasi seluruh bentuk kebebasan berpendapat warga negara di dalam platform media sosial.",
      "Menjamin dan menyediakan seluruh kebutuhan jaringan internet nasional yang terjangkau bagi masyarakat luas.",
      "Menjaga dan mempertahankan tingkat stabilitas harga komoditas digital nasional di tengah persaingan global.",
      "Mensejahterakan dan mengarahkan seluruh aktivitas perekonomian digital warga negara pada sektor formal saja."
    ],
    "answer": 0,
    "explanation": "Bela negara non-fisik bukan hanya tugas warga negara kepada negara, melainkan juga tugas negara untuk melindungi rakyatnya dari ancaman non-militer (seperti kejahatan siber dan judi online yang merusak struktur sosial-ekonomi). Penindakan platform bermasalah merupakan manifestasi dari fungsi perlindungan keselamatan seluruh bangsa (protection of the people). Jadi, opsi A benar karena mencakup esensi perlindungan keselamatan, moral, dan ekonomi warga negara.\n\nOpsi B salah karena pengawasan difokuskan pada kejahatan siber, bukan pembatasan kebebasan berpendapat sipil yang sah.\n\nOpsi C salah karena penyediaan infrastruktur internet adalah pelayanan publik, bukan esensi utama dari fungsi penindakan ancaman siber.\n\nOpsi D salah karena kasus ini tidak berfokus pada stabilitas harga komoditas, melainkan penanggulangan ancaman kejahatan digital.\n\nOpsi E salah karena penindakan kejahatan siber bertujuan menciptakan rasa aman, bukan memaksa pemindahan aktivitas ekonomi ke sektor formal secara sepihak."
  },
  {
    "prompt": "Memasuki tahun politik, muncul gerakan propaganda terorganisasi di media sosial yang memanfaatkan teknologi Generative AI untuk membuat ribuan akun fiktif. Akun-akun tersebut secara sistematis menyebarkan narasi bentrokan sejarah antar-kelompok keagamaan, mempertanyakan keabsahan Pancasila sebagai pemersatu, dan mengajak masyarakat sipil untuk tidak mematuhi hukum negara (civil disobedience). Jika ditinjau dari konsep Pertahanan Negara Non-Fisik, langkah paling fundamental bagi seorang ASN atau praktisi hukum untuk membendung serangan tersebut adalah...",
    "choices": [
      "Memutus total akses jaringan internet nasional secara berkala guna meredam potensi meluasnya sebaran narasi siber provokatif.",
      "Menyusun narasi tandingan berlandaskan fakta historis kebangsaan, mengedukasi asas hukum, serta memperkuat literasi kebhinekaan.",
      "Membalas narasi propaganda tersebut dengan memproduksi disinformasi baru yang ditujukan untuk menjatuhkan kredibilitas pembuat akun.",
      "Membiarkan sebaran narasi siber tersebut berkembang karena berasumsi bahwa masyarakat telah memiliki imunitas moral yang kuat.",
      "Menuntut pemerintah memberlakukan sanksi pencabutan status kewarganegaraan bagi setiap pihak yang mendiskusikan ideologi luar."
    ],
    "answer": 1,
    "explanation": "Propaganda siber berbasis kecerdasan buatan (AI) yang menyerang ideologi dan hukum negara bertujuan merusak persatuan dari akar rumput. Bagi praktisi hukum atau ASN, wujud bela negara paling fundamental adalah melakukan pembentengan ideologis (non-fisik) melalui edukasi hukum, diseminasi fakta sejarah yang sahih, serta penguatan pemahaman kebhinekaan. Jadi, opsi B benar karena menyasar substansi pertahanan non-fisik, yaitu penguatan literasi hukum, fakta kebangsaan, dan ideologi persatuan.\n\nOpsi A salah karena tindakan mematikan total jaringan internet merupakan langkah regresif yang dapat melumpuhkan aktivitas ekonomi serta melanggar hak informasi publik.\n\nOpsi C salah karena membalas propaganda dengan informasi fiktif justru memperkeruh ekosistem digital dan melanggar kode etik berbangsa.\n\nOpsi D salah karena pembiaran terhadap propaganda siber terorganisasi dapat mengikis kesadaran kebangsaan masyarakat secara perlahan.\n\nOpsi E salah karena pencabutan status kewarganegaraan tidak dapat dilakukan secara sembarangan dan bertentangan dengan prinsip dasar hukum hak asasi manusia."
  },
  {
    "prompt": "Sebuah wilayah hutan lindung di kawasan perbatasan negara mengalami keanekaragaman hayati yang terancam akibat maraknya pembalakan liar dan perburuan satwa langka yang diorganisasi oleh jaringan lintas negara. Seorang aktivis lingkungan sipil bersama masyarakat adat setempat menggalang gerakan patroli swadaya, memetakan secara digital area rawan kejahatan ekologis, serta mengunggah data pelanggaran tersebut secara terbuka ke basis data publik nasional. Tindakan aktivis dan warga adat tersebut paling tepat mencerminkan wujud bela negara non-fisik dalam bentuk...",
    "choices": [
      "Pelaksanaan fungsi pertahanan militer secara swadaya guna menggantikan peran aparat pengaman perbatasan yang bertugas.",
      "Penjagaan kedaulatan ekologis dan kekayaan alam nasional dari ancaman kejahatan lingkungan berbasis komunitas lokal.",
      "Penggalangan dukungan politik internasional untuk mendesak pemerintah pusat mengambil alih pengawasan wilayah perbatasan.",
      "Pemenuhan kewajiban administrasi kependudukan dalam menjaga ketertiban sosial di kawasan masyarakat adat perbatasan.",
      "Penuntutan ganti rugi finansial kepada perusahaan asing yang terindikasi mendanai kejahatan pembalakan liar kawasan hutan."
    ],
    "answer": 1,
    "explanation": "Kejahatan ekologis di wilayah perbatasan dapat merusak kedaulatan dan kelangsungan hidup bangsa. Menjaga kelestarian lingkungan dan kekayaan hayati nasional merupakan bagian dari ketahanan nasional berdimensi ekologi. Aksi aktivis dan masyarakat adat yang memanfaatkan pengetahuan lokal dan teknologi digital untuk mengamankan hutan lindung adalah wujud nyata pertahanan non-fisik berbasis masyarakat. Jadi, opsi B benar karena secara tepat mengidentifikasi tindakan tersebut sebagai penjagaan kedaulatan ekologis dan kekayaan alam.\n\nOpsi A salah karena tindakan tersebut adalah aksi kewaspadaan sipil (non-fisik), bukan pengambilalihan fungsi penindakan militer.\n\nOpsi C salah karena aksi warga berfokus pada perlindungan langsung dan diseminasi data nasional, bukan mencari intervensi politik internasional.\n\nOpsi D salah karena fokus utama kasus adalah perlindungan kawasan hutan lindung, bukan persoalan administrasi kependudukan.\n\nOpsi E salah karena gerakan warga bertujuan menghentikan kerusakan lingkungan, bukan berfokus pada tuntutan finansial."
  },
  {
    "prompt": "Lompatan teknologi informasi, kecerdasan buatan (AI), dan perang asimetris (asymmetric warfare) menjadikan ancaman terhadap kedaulatan negara tidak lagi didominasi oleh serangan militer konvensional, melainkan serangan terhadap kedaulatan data, disinformasi massal, dan kelumpuhan ekonomi. Berdasarkan dinamika tersebut, wujud keikutsertaan warga negara dalam bela negara yang paling mendasar, relevan, dan efektif untuk diterapkan oleh seluruh lapisan masyarakat saat ini adalah...",
    "choices": [
      "Mengikuti pendidikan bela negara serta pelatihan kesamaptaan fisik secara berkala di lembaga pelatihan militer resmi.",
      "Mendaftarkan diri menjadi bagian dari komponen cadangan pertahanan guna mengantisipasi eskalasi perang fisik terbuka.",
      "Meningkatkan literasi informasi, ketahanan siber pribadi, serta kesadaran penuh dalam menjaga kedaulatan data nasional.",
      "Membatasi seluruh bentuk kerja sama ekonomi dengan pihak luar negeri demi mewujudkan sistem perekonomian mandiri.",
      "Menggelar aksi penyampaian pendapat secara masif untuk menuntut peningkatan porsi anggaran belanja alutsista negara."
    ],
    "answer": 2,
    "explanation": "Ancaman modern bergeser dari perang konvensional ke ranah grey-zone atau perang asimetris yang mengincar ranah data, informasi, dan opini publik. Oleh karena itu, perwujudan bela negara yang paling mendasar dan dapat dilakukan oleh seluruh lapisan masyarakat adalah membangun ketahanan siber dari tingkat individu, bijak mengelola informasi, serta menjaga kedaulatan digital bangsa. Jadi, opsi C benar karena menyasar langsung pada spektrum ancaman non-fisik paling dominan di era modern.\n\nOpsi A salah karena kesamaptaan fisik di barak militer lebih menitikberatkan pada aspek pertahanan konvensional/fisik.\n\nOpsi B salah karena pembentukan komponen cadangan fisik disiapkan untuk ancaman militer, sedangkan ancaman dominan saat ini bersifat non-militer (siber/informasi).\n\nOpsi D salah karena menerapkan perekonomian tertutup di era globalisasi justru mematikan daya saing dan mengisolasi perekonomian nasional.\n\nOpsi E salah karena memperbesar anggaran alutsista fisik tidak otomatis menyelesaikan ancaman disinformasi dan peretasan siber yang menyasar masyarakat sipil."
  },
  {
    "prompt": "Berdasarkan ketentuan Pasal 27 Ayat (3) UUD 1945 juncto UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, dinyatakan bahwa \"Setiap warga negara berhak dan wajib ikut serta dalam upaya bela negara\". Makna yuridis-konstitusional dari frasa \"hak dan kewajiban\" dalam pasal tersebut mengandung arti bahwa...",
    "choices": [
      "Negara dapat memberlakukan mobilisasi militer secara paksa kepada seluruh warga negara dalam kondisi damai.",
      "Keikutsertaan warga negara merupakan kewajiban hukum yang melekat sekaligus hak sipil yang dijamin oleh konstitusi.",
      "Setiap warga negara diwajibkan menghentikan aktivitas profesi sipilnya untuk mengikuti pelatihan dasar militer.",
      "Upaya pembelaan negara hanya diwajibkan bagi warga negara yang telah memenuhi kualifikasi fisik dan mental tertentu.",
      "Keikutsertaan dalam bela negara bersifat sukarela sehingga tidak dapat dikenakan sanksi apabila warga menolak."
    ],
    "answer": 1,
    "explanation": "Konsep \"hak dan kewajiban\" dalam UUD 1945 menandakan bahwa bela negara adalah kehormatan sekaligus tanggung jawab konstitusional. Sebagai hak, negara wajib menyediakan ruang bagi warga untuk berpartisipasi (melalui pendidikan, profesi, maupun militer). Sebagai kewajiban, warga tidak boleh menghindar dari panggilan tugas bernegara sesuai ketentuan undang-undang. Jadi, opsi B benar karena secara yuridis mengeksplisitkan dualisme makna hak sipil dan kewajiban hukum konstitusional.\n\nOpsi A salah karena mobilisasi paksa hanya dapat dilakukan dalam keadaan darurat/perang berdasarkan keputusan resmi Presiden/DPR, bukan dalam kondisi damai secara acak.\n\nOpsi C salah karena bela negara tidak menghapus profesi sipil, melainkan justru dapat diwujudkan melalui profesi sipil itu sendiri.\n\nOpsi D salah karena kualifikasi fisik khusus berlaku untuk Komponen Utama/Cadangan militer, sedangkan prinsip bela negara secara umum berlaku wajib bagi seluruh warga negara tanpa kecuali.\n\nOpsi E salah karena frasa \"wajib\" menegaskan adanya ikatan hukum, sehingga tidak dapat disamakan dengan aksi yang murni sukarela tanpa dasar aturan."
  },
  {
    "prompt": "Pada masa Perang Dingin, persaingan hegemoni antara Blok Barat dan Blok Timur mengancam kedaulatan negara-negara yang baru merdeka. Indonesia mengambil prakarsa penting bersama beberapa negara lain untuk mendirikan Gerakan Non-Blok (GNB) pada Konferensi Beograd 1961. Ditinjau dari sudut pandang strategi pertahanan dan bela negara, alasan esensial Indonesia menolak beraliansi dengan salah satu blok raksasa tersebut adalah...",
    "choices": [
      "Mencegah wilayah kedaulatan Indonesia dijadikan pangkalan militer pertikaian asing serta menjaga kebebasan menentukan arah politik nasional.",
      "Memastikan Indonesia menerima bantuan hibah ekonomi serta pasokan alutsista militer dari kedua blok tanpa terikat pakta pertahanan.",
      "Membuktikan kekuatan diplomasi militer Indonesia kepada dunia internasional bahwa posisi penawaran bangsa setara dengan negara-negara adidaya.",
      "Mengembangkan jaringan kerja sama perdagangan eksklusif hanya dengan sesama negara berkembang di kawasan benua Asia dan Afrika.",
      "Menjalankan mandat konstitusi yang membatasi interaksi politik luar negeri Indonesia hanya pada pemenuhan bantuan kemanusiaan skala internasional."
    ],
    "answer": 0,
    "explanation": "Keputusan tidak memihak pada Blok Barat maupun Blok Timur (bebas-aktif) melalui kepeloporan di GNB merupakan kalkulasi strategi pertahanan negara yang matang. Bergabung dengan pakta militer salah satu blok akan menjadikan wilayah Indonesia sebagai pangkalan strategis perselisihan (proxy war) yang mengancam kedaulatan serta merampas kemerdekaan menentukan nasib sendiri. Jadi, opsi A benar karena secara fundamental menjelaskan tujuan perlindungan kedaulatan teritori dan independensi arah politik bangsa dari ancaman perang proksi asing.\n\nOpsi B salah karena fokus utama GNB adalah ideologi pertahanan dan politik luar negeri, bukan sekadar kalkulasi pragmatis memburu hibah ekonomi/alutsista.\n\nOpsi C salah karena kepeloporan Indonesia didasari pada cita-cita perdamaian dunia dan perlindungan kedaulatan, bukan ajang pembuktian atau kesombongan diplomasi militer.\n\nOpsi D salah karena Indonesia tidak pernah menutup diri dari kerja sama ekonomi dengan negara-negara maju di luar kawasan Asia-Afrika.\n\nOpsi E salah karena politik luar negeri bebas-aktif tidak membatasi interaksi hanya pada isu kemanusiaan, melainkan mencakup seluruh spektrum diplomasi internasional."
  },
  {
    "prompt": "Kemerdekaan Indonesia yang diproklamasikan pada 17 Agustus 1945 bukanlah hadiah dari bangsa asing, melainkan hasil perjuangan dan pengorbanan seluruh rakyat. Dalam konteks kehidupan berbangsa saat ini, makna utama dari mempertahankan kemerdekaan tersebut melalui bela negara adalah bahwa...",
    "choices": [
      "Bela negara merupakan tanggung jawab mutlak yang dibebankan khusus kepada generasi muda dan aparat keamanan.",
      "Bela negara merupakan sarana utama untuk membuktikan keunggulan militer Indonesia kepada negara-negara tetangga.",
      "Bela negara merupakan kewajiban moral dan konstitusional setiap warga negara demi kelangsungan hidup NKRI.",
      "Bela negara merupakan instrumen formal untuk menghapus seluruh bentuk kerja sama ekonomi dengan pihak luar.",
      "Bela negara merupakan proses pengambilalihan seluruh aset perusahaan asing yang beroperasi di wilayah Indonesia."
    ],
    "answer": 2,
    "explanation": "Kemerdekaan yang diraih dengan pengorbanan jiwa dan raga melahirkan konsekuensi logis: seluruh warga negara wajib menjaga dan mempertahankan kedaulatan tersebut. Bela negara merupakan wujud tanggung jawab konstitusional (sesuai UUD 1945) sekaligus dorongan moral untuk menjamin keberlangsungan bangsa dan negara. Jadi, opsi C benar karena menyimpulkan makna filosofis bela negara sebagai kewajiban moral dan konstitusional demi eksistensi NKRI.\n\nOpsi A salah karena bela negara berlaku untuk seluruh elemen warga negara tanpa mengecualikan kelompok usia atau profesi tertentu.\n\nOpsi B salah karena orientasi pertahanan Indonesia bersifat defensif untuk menjaga kedaulatan, bukan untuk unjuk kekuatan militer kepada negara tetangga.\n\nOpsi D salah karena bela negara tidak bertujuan menutup diri dari diplomasi atau kerja sama ekonomi internasional yang saling menguntungkan.\n\nOpsi E salah karena pertahanan negara bertujuan mengawal kedaulatan hukum, bukan melakukan nasionalisasi aset secara sewenang-wenang."
  },
  {
    "prompt": "Sebuah wilayah pesisir terluar memiliki potensi deposit mineral laut dalam yang sangat bernilai tinggi bagi industri teknologi global. Sebuah korporasi asing mengajukan izin eksploitasi besar-besaran dengan menawarkan investasi bernilai triliunan rupiah kepada pemerintah daerah setempat. Seorang kepala dinas lingkungan hidup daerah menolak menandatangani izin analisis mengenai dampak lingkungan (AMDAL) tersebut karena riset menunjukkan bahwa eksploitasi tersebut akan merusak ekosistem laut terumbu karang dan mematikan sumber pencaharian nelayan lokal. Ditinjau dari konsep bela negara non-fisik, tindakan kepala dinas tersebut merupakan manifestasi utama dari...",
    "choices": [
      "Kepatuhan penuh terhadap regulasi tata kelola perizinan administrasi pemerintah pusat di daerah.",
      "Kedaulatan ekologis demi menjaga keberlangsungan sumber daya dan keselamatan rakyat di masa depan.",
      "Penolakan terhadap seluruh investasi asing yang masuk ke dalam wilayah sektor pertambangan nasional.",
      "Kemampuan awal bela negara dalam hal penguasaan keahlian teknis pemetaan potensi mineral lepas pantai.",
      "Pengorbanan hak atas insentif jabatan pribadi demi menaikkan popularitas politik di mata masyarakat lokal."
    ],
    "answer": 1,
    "explanation": "Menjaga dan melindungi aset alam serta ekosistem nasional dari kerusakan akibat eksploitasi yang merugikan rakyat lokal merupakan wujud dari menjaga kedaulatan dan ketahanan ekologis bangsa. Bela negara tidak hanya berupa pertahanan batas wilayah, tetapi juga menjaga kelangsungan hidup warga negara dan kekayaan alam tanah air. Jadi, opsi B benar karena secara tepat menggambarkan esensi pelindungan kedaulatan ekologis dan keselamatan rakyat.\n\nOpsi A salah karena tindakan tersebut lahir dari pertimbangan keberlanjutan lingkungan dan keselamatan warga, bukan sekadar kepatuhan administrasi.\n\nOpsi C salah karena tujuan penolakan adalah proteksi lingkungan yang rusak, bukan sikap anti-investasi asing secara menyeluruh.\n\nOpsi D salah karena penguasaan keahlian teknis adalah alat/modal dasar (kemampuan awal), bukan esensi utama dari keputusan moral-kebijakan yang diambil.\n\nOpsi E salah karena motivasi pejabat tersebut adalah kepedulian lingkungan dan masyarakat, bukan pencitraan atau popularitas politik."
  },
  {
    "prompt": "Seorang mahasiswa Indonesia berhasil meraih beasiswa pemerintah untuk melanjutkan pendidikan jenjang doktoral di bidang teknologi energi terbarukan di Jerman. Selama menempuh studi, wujud nyata tindakan bela negara yang paling tepat dan berorientasi pada kepentingan nasional adalah...",
    "choices": [
      "Mencari peluang kerja permanen di perusahaan multinasional Jerman demi meningkatkan taraf hidup pribadi.",
      "Menuntut pihak penyelenggara beasiswa untuk menaikkan alokasi dana tunjangan hidup bulanan secara berkala.",
      "Mengabaikan seluruh kegiatan kebangsaan dan fokus mengejar prestasi akademik untuk kepentingan karier sendiri.",
      "Mengkritik kebijakan pemerintah Indonesia di media internasional agar mendapatkan perhatian luas dari publik luar.",
      "Memfokuskan seluruh waktu untuk kegiatan riset akademis serta aktif mempromosikan kebudayaan Indonesia di sana."
    ],
    "answer": 4,
    "explanation": "Mahasiswa penerima beasiswa negara (penerima mandat publik) di luar negeri mengemban misi bela negara non-fisik sebagai duta bangsa. Wujud kontribusi nyata yang seimbang adalah menyelesaikan studi dan risetnya dengan baik (menguasai ilmu pengetahuan) sekaligus mengenalkan identitas positif dan budaya Indonesia di kancah internasional. Jadi, opsi E benar karena mengombinasikan keunggulan akademis dengan peran diplomasi budaya.\n\nOpsi A salah karena tinggal permanen demi kepentingan pribadi mengabaikan komitmen pengabdian kepada negara yang membiayai studinya.\n\nOpsi B salah karena menuntut kenaikan tunjangan bukan merupakan bentuk kontribusi atau wujud bela negara.\n\nOpsi C salah karena bersikap apatis terhadap kegiatan kebangsaan tidak mencerminkan jiwa nasionalisme dan cinta tanah air.\n\nOpsi D salah karena mendiskreditkan negara sendiri di forum luar negeri bukan wujud perbaikan konstruktif, melainkan merusak citra diplomasi bangsa."
  },
  {
    "prompt": "Anda adalah seorang Aparatur Sipil Negara (ASN) di kementerian yang mengelola data strategis komoditas pangan nasional. Dalam sebuah evaluasi internal, Anda menemukan perbedaan data ketersediaan beras nasional yang cukup signifikan antara laporan resmi yang dirilis ke publik dan data riil di lapangan. Data yang dipublikasikan menunjukkan surplus, padahal data lapangan menunjukkan potensi kelangkaan dalam tiga bulan ke depan. Atasan Anda meminta Anda untuk tidak mempermasalahkan perbedaan tersebut demi menjaga stabilitas pasar dan mencegah kepanikan publik menjelang hari raya besar. Di saat yang sama, salah satu lembaga riset independen mulai mencium kejanggalan ini dan meminta konfirmasi terbuka dari kementerian Anda. Jika Anda berada dalam situasi tersebut, tindakan yang paling tepat adalah...",
    "choices": [
      "Menyampaikan data riil kepada media dan lembaga riset independen secara anonim agar publik tidak dirugikan oleh kebijakan impor yang terlambat.",
      "Menuruti arahan atasan untuk mempertahankan data resmi publik demi menjaga psikologis pasar dan mencegah lonjakan harga spekulatif.",
      "Menyusun analisis dampak komprehensif berdasarkan data lapangan dan menyajikannya secara rasional kepada atasan untuk mendesak penyesuaian kebijakan secara internal.",
      "Mengajukan surat keberatan resmi kepada Komisi Aparatur Sipil Negara (KASN) terkait pelanggaran transparansi publik yang dilakukan pimpinan Anda.",
      "Menyarankan pimpinan untuk mempublikasikan data riil secara bertahap sambil melakukan operasi pasar murah untuk meredam potensi gejolak masyarakat."
    ],
    "answer": 2,
    "explanation": "Tindakan menyusun analisis dampak berbasis data lapangan lalu menyajikannya secara rasional kepada pimpinan merupakan wujud nyata integritas ASN serta penerapan nilai Kesadaran Berbangsa dan Bernegara. Indikator utamanya adalah menjalankan tugas secara profesional, mematuhi mekanisme tata kelola pemerintahan yang sah, serta menempatkan kepentingan ketahanan pangan publik di atas kenyamanan hierarki. Jadi, opsi C benar karena secara presisi menyelesaikan masalah utama melalui prosedur internal yang sah tanpa melanggar kewajiban menjaga rahasia jabatan atau memicu kepanikan publik yang tidak perlu.\n\nOpsi A salah karena membocorkan data internal secara anonim melanggar rahasia jabatan dan dapat memicu kegaduhan publik tanpa menyelesaikan akar masalah penyesuaian kebijakan pangan.\n\nOpsi B salah karena membiarkan manipulasi data demi kenyamanan sementara merupakan bentuk loyalitas buta yang mengorbankan kepentingan publik jangka panjang atas risiko krisis pangan.\n\nOpsi D salah karena melaporkan ke KASN terlalu prematur dan mengabaikan upaya penyelesaian masalah teknis ketahanan pangan di internal organisasi terlebih dahulu.\n\nOpsi E salah karena mengambil alih wewenang strategi komunikasi publik pimpinan tanpa didahului oleh penyamaan persepsi data teknis secara internal."
  },
  {
    "prompt": "Seorang sineas muda Indonesia memproduksi film dokumenter yang mengangkat perjuangan masyarakat adat di pedalaman Sumatra dalam melestarikan hutan dan adat istiadat setempat. Film tersebut berhasil masuk dalam nominasi festival film internasional bergengsi di Eropa. Saat diminta oleh pihak penyelenggara asing untuk mengubah jalan cerita agar terkesan menggambarkan Indonesia sebagai negara yang tertinggal dan tidak beradab demi menaikkan angka penjualan penonton, sineas tersebut menolak dengan tegas. Ditinjau dari nilai dasar bela negara, tindakan sineas tersebut merupakan wujud dari...",
    "choices": [
      "Penolakan terhadap kerja sama kebudayaan dengan industri perfilman modern yang berasal dari luar negeri.",
      "Upaya membatasi akses publik internasional terhadap informasi mengenai kondisi masyarakat adat di Indonesia.",
      "Ketaatan pada regulasi perizinan sensor film nasional yang ditetapkan oleh kementerian terkait.",
      "Rela Berkorban demi menyumbangkan seluruh hasil penjualan tiket film untuk kegiatan sosial di daerah.",
      "Cinta Tanah Air melalui pelindungan martabat, harga diri, dan identitas positif bangsa di tingkat global."
    ],
    "answer": 4,
    "explanation": "Mempertahankan kebenaran narasi sejarah dan menolak eksploitasi citra buruk bangsa di mata dunia Internasional merupakan perwujudan dari nilai Cinta Tanah Air. Menjaga martabat dan identitas positif bangsa di forum internasional adalah bagian integral dari bela negara non-fisik di bidang kebudayaan dan diplomasi publik. Jadi, opsi E benar karena menyasar pada aspek pelindungan martabat dan identitas bangsa.\n\nOpsi A salah karena sineas tersebut tetap berpartisipasi dalam festival internasional; yang ditolak adalah manipulasi narasi yang merendahkan bangsa.\n\nOpsi B salah karena tujuan film tersebut justru mengenalkan perjuangan masyarakat adat, bukan menyembunyikan informasi.\n\nOpsi C salah karena keputusan menolak manipulasi cerita lahir dari integritas moral kebangsaan sineas, bukan perintah lembaga sensor.\n\nOpsi D salah karena fokus utama tindakan adalah menjaga harga diri bangsa, bukan masalah pembagian royalti atau hasil penjualan tiket."
  },
  {
    "prompt": "Di sebuah kawasan permukiman padat, tersebar selembaran bertuliskan ajakan untuk menolak sistem hukum nasional dan menggantinya dengan sistem ideologi ekstrem. Selembaran tersebut juga menghimbau warga untuk tidak berpartisipasi dalam kegiatan kemasyarakatan dan pemilu. Seorang tokoh pemuda di wilayah tersebut tidak membakar atau membuang selembaran tersebut secara sembunyi-sembunyi, melainkan mengumpulkan warga, membedah isi narasi tersebut bersama para sesepuh, serta menjelaskan bahaya ideologi ekstrem bagi persatuan bangsa. Tindakan tokoh pemuda tersebut merupakan wujud bela negara berupa...",
    "choices": [
      "Pembentengan ideologi masyarakat melalui penguatan literasi kebangsaan dan edukasi bahaya disintegrasi bangsa.",
      "Pengambilalihan fungsi aparat kepolisian dalam menindak pelaku penyebaran propaganda ideologi terlarang.",
      "Pembentukan satuan pengamanan khusus swadaya warga untuk mengawasi pergerakan pendatang baru di lingkungan.",
      "Pemenuhan kewajiban administrasi RT/RW dalam menjaga ketertiban dan kebersihan lingkungan tempat tinggal.",
      "Penuntutan proses hukum secara langsung kepada pihak penjelajah yang membagikan selembaran di permukiman."
    ],
    "answer": 0,
    "explanation": "Menghadapi ancaman radikalisme dan propaganda anti-Pancasila, cara paling efektif adalah melalui pembentengan mental/ideologi (counter-narration). Aksi tokoh pemuda yang mengedukasi masyarakat dan membedah secara kritis ancaman ideologi ekstrem merupakan wujud ketahanan nasional berdimensi ideologi dan sosial-budaya. Jadi, opsi A benar karena secara akurat menggambarkan pembentengan ideologi masyarakat melalui edukasi kebangsaan.\n\nOpsi B salah karena tokoh pemuda tersebut melakukan edukasi sosial (non-fisik), bukan tindakan hukum/penangkapan yang merupakan wewenang polisi.\n\nOpsi C salah karena tindakan yang dilakukan berfokus pada diskusi dan penyuluhan pikiran, bukan pembentukan milisi/siskamling fisik.\n\nOpsi D salah karena esensi tindakannya adalah meredam ancaman ideologi radikal, bukan sekadar tugas administrasi atau kebersihan lingkungan.\n\nOpsi E salah karena fokus pemuda tersebut adalah menyelamatkan pemikiran warga lokal dari provokasi, bukan aksi main hakim sendiri terhadap pelaku."
  },
  {
    "prompt": "Rudi adalah seorang mahasiswa tingkat akhir yang aktif di organisasi kemahasiswaan. Di kampus tempatnya menuntut ilmu, terjadi ketegangan antar kelompok mahasiswa yang dipicu oleh unggahan potongan video kontroversial di media sosial. Video tersebut memperlihatkan seorang tokoh mahasiswa dari kelompok suku tertentu yang diduga melecehkan kebiasaan adat kelompok lain. Gelombang protes mulai membesar dan berpotensi mengarah pada bentrokan fisik di dalam kampus. Pihak kepolisian dan rektorat telah mengimbau agar kedua pihak menahan diri. Namun, rekan-rekan satu daerah Rudi mendesak Rudi sebagai tokoh yang dipandang berpengaruh untuk memimpin aksi solidaritas menuntut permohonan maaf secara terbuka di depan umum. Jika Anda berada dalam posisi Rudi, tindakan yang paling tepat adalah...",
    "choices": [
      "Menolak terlibat dalam bentuk aksi apa pun dan menginstruksikan seluruh anggota kelompoknya untuk tetap tinggal di kediaman masing-masing hingga situasi kondusif.",
      "Memenuhi permintaan rekan-rekannya untuk memimpin aksi demonstrasi damai dengan syarat dikawal ketat oleh aparat keamanan dan pihak rektorat.",
      "Melaporkan pembuat dan penyebar unggahan video tersebut ke pihak kepolisian atas tuduhan ujaran kebencian berbasis SARA agar hukum segera ditegakkan.",
      "Mengunggah narasi tandingan di media sosial yang menegaskan pentingnya toleransi antar etnis untuk meredam kemarahan massa secara luas.",
      "Mengajak pimpinan kelompok mahasiswa yang bertikai untuk duduk bersama dalam forum dialog terstruktur dengan memverifikasi kebenaran video tersebut terlebih dahulu."
    ],
    "answer": 4,
    "explanation": "Tindakan menginisiasi forum dialog terstruktur sekaligus memverifikasi kebenaran data di tengah ancaman disintegrasi merupakan wujud nyata dari nilai Menjaga Persatuan dan Kesatuan Bangsa. Indikator utamanya adalah mengedepankan musyawarah mufakat, berpikir kritis terhadap potensi disinformasi, serta aktif mencegah eskalasi konflik primordial. Jadi, opsi E benar karena secara presisi meredam potensi bentrokan fisik melalui klarifikasi fakta dan pendekatan konsiliatif antar pihak.\n\nOpsi A salah karena menunjukkan sikap apatis dan menarik diri dari tanggung jawab kepemimpinan sosial saat lingkungan membutuhkan penengah konflik.\n\nOpsi B salah karena mengerahkan massa di tengah emosi yang tinggi tetap berisiko memicu bentrokan fisik meskipun mendapat pengawalan.\n\nOpsi C salah karena fokus melapor ke polisi bersifat legalistik kaku dan tidak secara langsung meredam emosi massa yang berpotensi bentrok di lapangan.\n\nOpsi D salah karena sekadar membuat narasi di media sosial kurang efektif meredam pergerakan massa yang sudah siap beraksi di dunia nyata."
  },
  {
    "prompt": "Maraknya penyebaran paham radikalisme dan ekstremisme melalui media sosial yang menyasar generasi muda dapat mengancam keutuhan NKRI. Langkah strategis yang mencerminkan nilai Setia pada Pancasila sebagai Ideologi Negara untuk menangkal ancaman tersebut adalah...",
    "choices": [
      "Mengarahkan generasi muda untuk menjauhi penggunaan media sosial agar tidak terpapar paham radikal.",
      "Mengamalkan nilai-nilai Pancasila dalam kehidupan sehari-hari serta kritis terhadap narasi yang memecah belah bangsa.",
      "Melaporkan setiap akun media sosial yang berbeda pandangan politik dengan pemerintah kepada pihak berwajib.",
      "Mengikutsertakan seluruh pemuda dalam pelatihan militer guna memperkuat pertahanan fisik negara.",
      "Membatasi interaksi sosial hanya dengan kelompok masyarakat yang memiliki keyakinan dan ideologi yang sama."
    ],
    "answer": 1,
    "explanation": "Menjaga Pancasila dari ancaman ideologi transnasional/radikal dilakukan dengan menjadikan Pancasila sebagai sarana penyaring (filter) pemikiran dan pedoman berperilaku. Sikap kritis terhadap narasi pemecah belah yang disertai pengamalan nyata nilai-nilai Pancasila merupakan benteng ideologis paling kuat di era digital. Jadi, opsi B benar karena memadukan pengamalan nilai Pancasila dengan sikap kritis dalam menyaring ideologi berbahaya.\n\nOpsi A salah karena menghindari teknologi/media sosial adalah langkah mundur yang tidak menyelesaikan akar masalah literasi ideologi.\n\nOpsi C salah karena perbedaan pandangan politik adalah hal wajar dalam demokrasi, tidak bisa disamakan begitu saja dengan tindakan radikalisme/kejahatan.\n\nOpsi D salah karena ancaman ideologi tidak bisa diselesaikan hanya dengan pendekatan pertahanan fisik/militer.\n\nOpsi E salah karena membatasi interaksi hanya pada kelompok sejiwa justru merusak nilai kebhinekaan yang diusung oleh Pancasila."
  },
  {
    "prompt": "Terjadi perselisihan lahan di pesisir perbatasan antara masyarakat adat (wilayah ritual) dan pengembang industri perikanan (berizin resmi pusat). Pemagaran sepihak oleh pengembang memicu ancaman bentrokan fisik dari warga adat. Sebagai mediator pemda, langkah manakah yang paling mengedepankan prinsip persatuan dan keadilan berbangsa?",
    "choices": [
      "Menghentikan pemagaran sementara dan memfasilitasi dialog pemetaan ulang zona bersama warga adat dan kementerian.",
      "Mengerahkan aparat TNI/Polri di lokasi demi menjamin kelancaran operasional pengembang yang berizin resmi.",
      "Mendukung penolakan warga adat dan menginstruksikan pencabutan izin pengembang tanpa evaluasi pusat.",
      "Menyarankan pengembang memberikan kompensasi uang tunai besar kepada tokoh adat agar penolakan diredam.",
      "Menyerahkan sengketa ke PTUN tanpa perlu melakukan intervensi mediasi sosial di lapangan."
    ],
    "answer": 0,
    "explanation": "Tindakan menghentikan aksi sepihak dan menginisiasi dialog inklusif merupakan penerapan nilai Menjaga Persatuan dan Kesatuan Bangsa. Indikator utamanya adalah menghormati hak masyarakat adat tanpa mengabaikan kepastian hukum investasi. Jadi, opsi A benar karena menghadirkan solusi adil, mencegah pertumpahan darah antar elemen bangsa, dan menjaga stabilitas wilayah perbatasan.\n\nOpsi B salah karena pendekatan represif aparat berisiko melukai rasa keadilan rakyat dan memicu bentrokan berdarah.\n\nOpsi C salah karena pemda tidak berwenang mencabut izin pusat secara sepihak tanpa mekanisme kajian yuridis.\n\nOpsi D salah karena kompensasi finansial semata mengabaikan nilai kearifan lokal dan perlindungan ekologi.\n\nOpsi E salah karena pasif menyerahkan ke PTUN membiarkan potensi bentrokan fisik tetap terjadi di lapangan."
  },
  {
    "prompt": "Bayu, ASN Dinas Kominfo, mengelola pengaduan publik. Menjelang Pilkada, terjadi gangguan air bersih yang memicu kemarahan warga dan dorongan boikot Pilkada. Pimpinan meminta Bayu memblokir akun pengadu dan menghapus komentar kritis warga agar suasana politik daerah tetap kondusif. Langkah manakah yang paling mencerminkan komitmen kebangsaan dan profesionalisme ASN saat menghadapi dilema tersebut?",
    "choices": [
      "Melaksanakan perintah pimpinan menghapus komentar demi menjaga kondusivitas politik daerah menjelang Pilkada.",
      "Menolak pembungkaman publik, lalu menyusun klarifikasi resmi mengenai kendala teknis dan garis waktu perbaikan air.",
      "Mengabaikan perintah pimpinan dan mendukung gerakan aktivis lokal secara tertutup sebagai wujud simpati pada warga.",
      "Mengajukan permohonan mutasi kerja ke dinas lain untuk menghindari benturan kepentingan antara pimpinan dan masyarakat.",
      "Membuat akun pribadi untuk membocorkan upaya pembungkaman pimpinan dinas ke media nasional."
    ],
    "answer": 1,
    "explanation": "Tindakan menolak transparansi yang destruktif lalu menyajikan komunikasi publik yang akuntabel mencerminkan nilai Kesadaran Berbangsa dan Bernegara. Indikator utamanya adalah menjaga integritas pelayanan publik serta memenuhi hak informasi warga tanpa mencederai demokrasi. Jadi, opsi B benar karena meredam gejolak masyarakat melalui kejelasan informasi tanpa melanggar etika pelayanan publik.\n\nOpsi A salah karena membungkam keluhan warga melanggar integritas pelayanan publik dan memperbesar ketidakpercayaan masyarakat.\n\nOpsi C salah karena mendukung gerakan boikot Pilkada mencederai netralitas ASN dan mengancam proses demokrasi nasional.\n\nOpsi D salah karena meminta mutasi merupakan bentuk melarikan diri dari tanggung jawab profesional ASN dalam menyelesaikan masalah.\n\nOpsi E salah karena membocorkan masalah secara tidak resmi melanggar etika jabatan ASN dan memicu kegaduhan tanpa solusi teknis."
  },
  {
    "prompt": "Perusahaan startup kecerdasan buatan (AI) lokal berhasil mengembangkan sistem prediktif distribusi pupuk nasional untuk mencegah kelangkaan pangan. Investor asing menawarkan pendanaan masif dengan syarat hak paten dan basis data dialihkan ke luar negeri. Pemda mendorong akuisisi ini demi investasi, namun pendiri startup khawatir kedaulatan data pertanian nasional dikuasai asing. Berdasarkan sudut pandang ketahanan nasional, bagaimana pendiri startup seharusnya menentukan skema keberlanjutan inovasinya?",
    "choices": [
      "Menerima akuisisi dari konsorsium asing demi komersialisasi riset secara global dengan syarat menempatkan tenaga ahli lokal pada posisi kunci.",
      "Menolak seluruh penawaran investasi asing dan menghentikan pengembangan sistem sampai memperoleh hibah dari pemerintah pusat.",
      "Menjual lisensi penggunaan terbatas kepada investor asing tanpa menyerahkan hak paten serta menjaga basis data tetap di server lokal.",
      "Menyerahkan kepemilikan hak paten kepada pemerintah daerah agar proyek tersebut dialihkan sepenuhnya menjadi aset BUMD.",
      "Menolak akuisisi lalu mengunggah algoritma secara open-source agar dapat dimanfaatkan masyarakat dunia tanpa batasan komersial."
    ],
    "answer": 2,
    "explanation": "Tindakan menjual lisensi penggunaan terbatas tanpa melepaskan paten serta mempertahankan kedaulatan data nasional merupakan wujud nilai Cinta Tanah Air dan Ketahanan Nasional. Indikator utamanya adalah memanfaatkan kerja sama internasional tanpa mengorbankan aset strategis bangsa. Jadi, opsi C benar karena melindungi kedaulatan data pertanian nasional sekaligus menjamin keberlanjutan finansial riset secara proporsional.\n\nOpsi A salah karena menyerahkan hak paten dan basis data pertanian kepada asing berisiko melumpuhkan kedaulatan pangan jangka panjang.\n\nOpsi B salah karena menolak total tanpa solusi finansial realistis dapat mematikan riset teknologi yang dibutuhkan masyarakat.\n\nOpsi D salah karena mengalihkan aset ke BUMD secara sepihak tidak menjamin kapasitas pengembangan sistem AI yang membutuhkan kepakaran spesifik.\n\nOpsi E salah karena merilis open-source tanpa perlindungan paten berpotensi dimanfaatkan entitas asing lain untuk dikomersialkan sepihak."
  },
];

export const BELA_NEGARA_DRILL_QUESTIONS: Question[] = belaNegaraSeeds.map((seed, index) => ({
  id: `twk-bela-negara-${String(index + 1).padStart(3, "0")}`,
  category: "TWK",
  topic: "Bela Negara",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: choiceIndex === seed.answer ? 5 : 0,
  })),
  explanation: seed.explanation,
}));
