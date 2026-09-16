import type { Question } from "./types";

type NasionalismeSeed = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const nasionalismeSeeds: NasionalismeSeed[] = [
  {
    "prompt": "Pendirian Budi Utomo pada tanggal 20 Mei 1908 sering kali dicatat sebagai fajar Kebangkitan Nasional Indonesia. Meskipun pada awal berdirinya ruang gerak Budi Utomo terbatas pada Jawa dan Madura serta berfokus pada kebudayaan, esensi kontribusi Budi Utomo dalam menumbuhkan jiwa nasionalisme Indonesia terletak pada…",
    "choices": [
      "Perubahannya dalam strategi perjuangan dari perjuangan kedaerahan bersenjata menjadi perjuangan modern berbasis organisasi dan pendidikan.",
      "Keberhasilannya membentuk front pertahanan militer bersenjata rakyat dalam menumbangkan kekuasaan kolonial.",
      "Kemampuannya memobilisasi aksi mogok kerja massal kaum buruh di pelabuhan dan pabrik gula seluruh Hindia Belanda.",
      "Keberhasilannya memperoleh pengakuan kedaulatan politik secara langsung dari Pemerintah Kerajaan Belanda.",
      "Keberhasilannya mendirikan jawatan perbankan pribumi untuk melepaskan ketergantungan ekonomi dari pihak asing."
    ],
    "answer": 0,
    "explanation": "Nilai utama Budi Utomo sebagai tonggak Kebangkitan Nasional terletak pada perubahan paradigma/strategi perjuangan bangsa. Sebelum 1908, perjuangan melawan penjajah bersifat kedaerahan, bergantung pada pimpinan karismatik, dan mengandalkan fisik bersenjata. Budi Utomo mengawali era perjuangan modern melalui wadah organisasi, penguatan kesadaran nasional, serta pendidikan dan kebudayaan. Jadi, opsi A benar karena menangkap pergeseran strategi dari kedaerahan fisik menjadi pergerakan organisasi modern.\n\nOpsi B salah karena Budi Utomo tidak bergerak di bidang militer atau perlawanan bersenjata.\n\nOpsi C salah karena aksi mogok buruh merupakan karakteristik gerakan radikal/serikat buruh seperti ISDV/Sarekat Islam, bukan Budi Utomo.\n\nOpsi D salah karena pengakuan kedaulatan baru tercapai setelah Proklamasi 1945 (Konferensi Meja Bundar 1949).\n\nOpsi E salah karena pendirian lembaga perbankan/koperasi pribumi lebih ditonjolkan oleh organisasi seperti Sarekat Dagang Islam (SDI)."
  },
  {
    "prompt": "Bagaimana peran nilai nasionalisme dalam mendorong terciptanya keadilan sosial yang merata di seluruh wilayah Indonesia?",
    "choices": [
      "Nasionalisme mengarahkan fokus pembangunan nasional semata-mata pada penguatan sektor perekonomian elit modern.",
      "Nasionalisme memprioritaskan pemenuhan hak-hak kelompok mayoritas agar tercapai stabilitas politik mendasar.",
      "Nasionalisme menumbuhkan kesadaran kolektif untuk mengesampingkan kepentingan ego sektoral demi kesejahteraan bersama.",
      "Nasionalisme memfokuskan seluruh kebijakan publik hanya pada pelestarian aspek bahasa dan kebudayaan daerah.",
      "Nasionalisme menyerahkan seluruh mekanisme pemerataan sosial-ekonomi kepada dinamika pasar bebas tanpa intervensi negara."
    ],
    "answer": 2,
    "explanation": "Keadilan sosial dapat terwujud apabila timbul kesadaran nasionalisme pada setiap warga negara dan pembuat kebijakan. Rasa cinta tanah air dan rasa persatuan menuntut individu/kelompok untuk mengesampingkan kepentingan ego sektoral demi kesejahteraan bersama seluruh rakyat Indonesia. Nilai moral utamanya adalah mewujudkan pemerataan yang inklusif dan berkeadilan. Jadi, opsi C benar karena menekankan kesadaran kolektif demi kepentingan bersama.\n\nOpsi A salah karena pembangunan nasional bertujuan untuk seluruh rakyat, bukan hanya penguatan sektor perekonomian elit modern.\n\nOpsi B salah karena keadilan sosial bersifat inklusif bagi seluruh warga negara, bukan memprioritaskan kelompok mayoritas semata.\n\nOpsi D salah karena nasionalisme mencakup seluruh aspek kehidupan berbangsa, tidak terfokus hanya pada pelestarian bahasa dan budaya daerah.\n\nOpsi E salah karena pemerataan sosial-ekonomi memerlukan peran dan intervensi aktif negara, bukan diserahkan sepenuhnya pada pasar bebas."
  },
  {
    "prompt": "Manajemen sebuah perusahaan multinasional menetapkan aturan pembatasan waktu ibadah harian bagi karyawan dengan alasan menjaga efisiensi dan target ritme kerja ritel. Kebijakan ini memicu ketidakpuasan karyawan karena dianggap membatasi hak konstitusional dalam menjalankan ibadah. Dalam konteks penerapan nilai Bhinneka Tunggal Ika serta kesadaran nasionalisme di lingkungan kerja majemuk, pendekatan paling tepat yang seharusnya ditempuh manajemen adalah…",
    "choices": [
      "Mewajibkan seluruh karyawan menyesuaikan jadwal ibadah secara mandiri sepenuhnya di luar jam operasional perusahaan.",
      "Menyediakan fasilitas dan mengatur skema kerja fleksibel/bergantian yang menjamin hak ibadah karyawan tanpa mengganggu produktivitas.",
      "Memberikan kelonggaran bebas tanpa batasan waktu ibadah sebagai bentuk penghormatan atas hak asasi dan toleransi keagamaan.",
      "Mengarahkan karyawan untuk mengganti waktu ibadah dengan insentif kompensasi lembur di akhir jam kerja.",
      "Meminta perwakilan keagamaan membuat kesepakatan internal untuk menunda ibadah hingga seluruh target harian selesai."
    ],
    "answer": 1,
    "explanation": "Nasionalisme yang berlandaskan Bhinneka Tunggal Ika menuntut keseimbangan antara penghormatan hak asasi/kebebasan beragama dan tanggung jawab profesionalisme. Kebebasan beribadah merupakan hak konstitusional yang tidak boleh dihilangkan atas nama efisiensi semata, namun pelaksanaannya juga harus diatur secara bijak agar tidak merugikan kepentingan bersama/kolektif. Jadi, opsi B benar karena menyediakan skema manajerial yang akomodatif sekaligus menjaga kelancaran operasional perusahaan.\n\nOpsi A salah karena bersifat sepihak dan mengabaikan hak konstitusional pekerja dalam menjalankan ibadah.\n\nOpsi C salah karena membiarkan kebebasan tanpa pengaturan yang berisiko mengganggu ritme kerja dan keadilan profesional.\n\nOpsi D salah karena memperlakukan ibadah secara transaksional yang tidak sesuai dengan esensi hak kebebasan beragama.\n\nOpsi E salah karena memaksakan penundaan ibadah yang melanggar prinsip akomodasi keagamaan dalam Pancasila."
  },
  {
    "prompt": "Secara politis, nasionalisme berfungsi sebagai pengikat kesadaran berbangsa dan pendorong perjuangan kolektif dalam mempertahankan kedaulatan. Dalam konteks kehidupan bernegara yang demokratis dan majemuk saat ini, manakah yang paling tepat menggambarkan hakikat keberadaan nasionalisme politis?",
    "choices": [
      "Alat kekuasaan untuk melegitimasi dominasi satu kelompok atas kelompok lain demi stabilitas nasional.",
      "Sarana penolakan terhadap pluralisme budaya demi terciptanya keseragaman identitas tunggal yang mutlak.",
      "Pendorong persatuan dalam perbedaan untuk mewujudkan cita-cita bersama serta memajukan kesejahteraan umum.",
      "Instrumen penegakan kebijakan ekspansionis dalam menunjukkan keunggulan bangsa di tingkat regional.",
      "Doktrin politik yang menempatkan kepentingan negara di atas hak asasi dan kebebasan dasar warga negara."
    ],
    "answer": 2,
    "explanation": "Hakikat nasionalisme politis dalam bingkai NKRI adalah sebagai sarana pemersatu kemajemukan (Bhinneka Tunggal Ika) untuk mencapai cita-cita bernegara sebagaimana tertuang dalam Pembukaan UUD 1945. Nasionalisme bertindak sebagai pendorong persatuan dalam perbedaan demi kesejahteraan bersama, bukan sebagai pemaksa keseragaman. Jadi, opsi C benar karena meletakkan nasionalisme pada fungsi pemersatu dan kemajuan kolektif yang inklusif.\n\nOpsi A salah karena nasionalisme bukan alat dominasi melainkan konsensus bersama seluruh elemen bangsa.\n\nOpsi B salah karena nasionalisme Indonesia memelihara keberagaman, bukan memaksakan homogenitas tunggal.\n\nOpsi D salah karena nasionalisme kita menganut prinsip anti-penjajahan, bukan ekspansionisme atau agresi.\n\nOpsi E salah karena nasionalisme yang sehat berjalan seiring dengan penghormatan terhadap hak-hak dasar warga negara."
  },
  {
    "prompt": "Rasa cinta tanah air dan semangat nasionalisme dapat diwujudkan melalui partisipasi aktif dalam pembangunan nasional di berbagai bidang. Untuk mempercepat kemandirian bangsa di sektor ekonomi, tindakan paling relevan yang mencerminkan penerapan nasionalisme ekonomi di era persaingan global adalah…",
    "choices": [
      "Membatasi dan melarang secara mutlak masuknya modal asing serta kerja sama investasi dengan negara lain.",
      "Mendorong kewirausahaan berbasis inovasi teknologi serta mengutamakan daya saing produk dalam negeri.",
      "Memberikan bantuan pinjaman usaha kepada pelaku UMKM dengan menetapkan suku bunga yang sangat tinggi.",
      "Fokus pada kegiatan kerja bakti sosial dan penggalangan donasi di permukiman warga secara rutin.",
      "Mengandalkan impor barang jadi dari luar negeri demi memenuhi kebutuhan masyarakat dengan harga murah."
    ],
    "answer": 1,
    "explanation": "Wujud nasionalisme dalam bidang ekonomi di era modern adalah mewujudkan kemandirian ekonomi (berdikari) tanpa terisolasi dari pergaulan global. Hal ini dicapai melalui pengembangan kewirausahaan, inovasi teknologi nasional, serta peningkatan mutu dan daya saing produk lokal. Jadi, opsi B benar karena secara langsung mendorong pertumbuhan ekonomi nasional yang mandiri dan berdaya saing.\n\nOpsi A salah karena menutup diri total dari investasi asing justru dapat menghambat aliran modal dan alih teknologi yang dibutuhkan.\n\nOpsi C salah karena menetapkan suku bunga tinggi pada UMKM justru mencekik dan mematikan usaha kecil.\n\nOpsi D salah karena kerja bakti dan donasi merupakan tindakan di bidang sosial-kemasyarakatan, bukan tindakan utama di bidang ekonomi makro.\n\nOpsi E salah karena bergantung pada barang impor akan mematikan industri lokal dan melemahkan kedaulatan ekonomi."
  },
  {
    "prompt": "Seorang desainer muda Indonesia berhasil menciptakan brand pakaian lokal menggunakan bahan kain tenun tradisional. Meskipun produknya mulai dikenal di pasar internasional, di pasar domestik ia menghadapi tantangan besar akibat maraknya produk pakaian impor ilegal berharga sangat murah yang membanjiri pasar. Sikap konsumen Indonesia yang mencerminkan esensi wujud Cinta Tanah Air secara nyata dalam merespons situasi tersebut adalah…",
    "choices": [
      "Mengampanyekan penutupan seluruh batas perdagangan internasional secara sepihak agar produk lokal terlindungi.",
      "Membeli produk impor ilegal secara massal dengan alasan menghemat pengeluaran belanja pribadi.",
      "Menuntut desainer tersebut untuk menjual produk tenunnya dengan harga di bawah biaya produksi agar mampu bersaing.",
      "Mengutamakan pembelian dan apresiasi terhadap produk lokal berkualitas sebagai bentuk dukungan atas kemandirian ekonomi nasional.",
      "Mengimbau pemerintah untuk memberikan subsidi penuh kepada seluruh pengusaha industri fashion import."
    ],
    "answer": 3,
    "explanation": "Cinta Tanah Air (patriotisme ekonomi/kesadaran nasional) diwujudkan melalui sikap membanggakan, menggunakan, dan mendukung produk buatan dalam negeri guna menguatkan perekonomian nasional dan mendukung karya anak bangsa. Memilih produk lokal berkualitas mencerminkan rasa bangga dan kepedulian terhadap keberlanjutan usaha domestik. Jadi, opsi D benar karena menunjukkan rasa cinta tanah air yang aplikatif di sektor ekonomi.\n\nOpsi A salah karena sikap isolasionis ekstrem bertentangan dengan prinsip perdagangan internasional dan diplomasi.\n\nOpsi B salah karena membeli barang ilegal merugikan negara dan merusak iklim industri dalam negeri.\n\nOpsi C salah karena memaksakan harga di bawah biaya produksi mematikan keberlanjutan usaha lokal.\n\nOpsi E salah karena memberi subsidi pada produk impor justru merugikan produsen dalam negeri."
  },
  {
    "prompt": "Nasionalisme dalam konteks berbangsa memiliki dua sisi: di satu sisi mampu menyatukan masyarakat dari latar belakang SARA yang beragam, namun di sisi lain dapat memicu pembelahan jika diselewengkan menjadi paham sempit. Di antara pernyataan berikut, manakah yang bukan termasuk bentuk atau dampak dari nasionalisme yang menyimpang (nasionalisme sempit/ekstrem)?",
    "choices": [
      "Mendorong ketakutan berlebihan atau kebencian terhadap warga asing dan kelompok etnis yang berbeda (xenofobia).",
      "Menggunakan narasi kebangsaan berlebihan untuk membenarkan tindakan diskriminasi terhadap kelompok minoritas.",
      "Mempropagandakan pandangan bahwa bangsa atau kelompok sendiri lebih superior dibandingkan bangsa lain (chauvinisme).",
      "Mengembangkan sikap inklusif yang menghargai keberagaman serta menguatkan persatuan dan kesatuan nasional.",
      "Menghambat pengakuan dan perlindungan hak-hak asasi warga negara, khususnya kelompok minoritas."
    ],
    "answer": 3,
    "explanation": "Soal menanyakan tindakan yang TIDAK termasuk bentuk nasionalisme yang buruk/menyimpang. Nasionalisme yang sehat di Indonesia bersifat inklusif (unity in diversity), yaitu menghargai keberagaman budaya dan etnis untuk memperkuat persatuan. Opsi A, B, C, dan E merupakan contoh bentuk nasionalisme sempit (chauvinisme/xenofobia) yang merusak persatuan. Jadi, opsi D benar karena nasionalisme inklusif adalah bentuk nasionalisme positif yang memperkokoh persatuan.\n\nOpsi A salah karena kebencian terhadap orang asing (xenofobia) adalah bentuk nasionalisme ekstrem yang destruktif.\n\nOpsi B salah karena diskriminasi terhadap minoritas merupakan Penyimpangan dari nilai keadilan dan persatuan Pancasila.\n\nOpsi C salah karena menganggap bangsa sendiri superior (chauvinisme) merupakan paham kebangsaan yang keliru dan berbahaya.\n\nOpsi E salah karena mengabaikan hak asasi kelompok minoritas mencederai prinsip kemanusiaan yang adil dan beradab."
  },
  {
    "prompt": "Di era globalisasi, persaingan ekonomi antarnegara semakin ketat. Sebagai seorang ASN sekaligus warga negara, bentuk komitmen nasionalisme yang paling relevan dalam mendukung kemandirian ekonomi nasional adalah…",
    "choices": [
      "Mendorong dan memprioritaskan penggunaan produk dalam negeri serta aktif mempromosikan UMKM lokal.",
      "Menolak secara mutlak seluruh barang impor dan teknologi dari luar negeri tanpa terkecuali.",
      "Membeli barang buatan luar negeri agar dinilai memiliki selera tinggi dan mengikuti tren modern.",
      "Mengkritik secara terbuka kelemahan produk lokal di media sosial tanpa memberikan solusi atau apresiasi.",
      "Menyerahkan seluruh pengelolaan sumber daya ekonomi negara kepada investor asing agar lebih efisien."
    ],
    "answer": 0,
    "explanation": "Nasionalisme ekonomi di era globalisasi diwujudkan melalui aksi nyata mendukung perekonomian domestik. Dengan memprioritaskan penggunaan produk dalam negeri dan memberdayakan UMKM, masyarakat berkontribusi langsung pada kemandirian ekonomi bangsa. Jadi, opsi A benar karena berorientasi pada penguatan ekonomi lokal dan produk dalam negeri.\n\nOpsi B salah karena sikap penolakan mutlak bersifat isolasionis dan tidak realistis dalam dinamika perdagangan internasional.\n\nOpsi C salah karena mengutamakan gengsi barang impor mencerminkan sikap konsumenisme yang tidak mendukung kemandirian nasional.\n\nOpsi D salah karena mencela produk dalam negeri tanpa solusi justru melemahkan kan motivasi pelaku usaha lokal.\n\nOpsi E salah karena menyerahkan seluruh sumber daya ekonomi kepada asing merusak kedaulatan ekonomi nasional."
  },
  {
    "prompt": "Memberikan sosialisasi dan pendidikan Pancasila secara berkelanjutan di lingkungan sekolah serta perguruan tinggi bukan sekadar agenda rutin kurikulum. Di tengah gempuran ideologi transnasional dan individualisme di kalangan generasi muda, tujuan paling mendasar dari upaya memasyarakatkan Pancasila di lingkungan pendidikan adalah…",
    "choices": [
      "Mendorong sikap kompetitif yang berlebihan di antara peserta didik agar mampu menguasai pasar kerja internasional.",
      "Membentuk ketahanan mental, jiwa nasionalisme, serta rasa cinta tanah air yang kokoh berbasis nilai-nilai luhur bangsa.",
      "Mewajibkan peserta didik menghafal seluruh butir Pancasila dan pasal UUD 1945 secara tekstual demi kelulusan ujian.",
      "Membatasi daya kritis dan kebebasan berpendapat peserta didik agar senantiasa patuh pada seluruh kebijakan pemerintah.",
      "Menanamkan rasa superioritas budaya nasional dan menolak seluruh bentuk kerja sama dengan bangsa luar."
    ],
    "answer": 1,
    "explanation": "Memasyarakatkan Pancasila di lembaga pendidikan bertujuan membentuk karakter peserta didik secara holistik. Hal ini tidak hanya menyasar aspek kognitif (hafalan), melainkan menanamkan jiwa nasionalisme, rasa cinta tanah air, dan kesadaran berbangsa agar generasi muda memiliki imunitas terhadap paham-paham yang bertentangan dengan Pancasila. Jadi, opsi B benar karena menekankan pembentukan jiwa nasionalisme dan rasa cinta tanah air yang substantif.\n\nOpsi A salah karena semangat kompetitif berlebihan tanpa orientasi nilai kebangsaan dapat mendorong sikap individualis yang mengabaikan gotong royong.\n\nOpsi C salah karena pendidikan Pancasila berfokus pada internalisasi dan pengamalan nilai, bukan sekadar hafalan tekstual.\n\nOpsi D salah karena Pancasila justru mengedepankan musyawarah dan kebebasan berpendapat yang bertanggung jawab.\n\nOpsi E salah karena menanamkan superioritas budaya berisiko memicu chauvinisme dan menutup diri dari dinamika global."
  },
  {
    "prompt": "Konflik horizontal yang berlatar belakang perbedaan etnis dan agama kerap dimanfaatkan oleh pihak-pihak tertentu untuk memecah belah bangsa. Jika Anda seorang ASN yang bertugas di daerah rawan konflik, langkah konkret berdasarkan nilai nasionalisme yang paling tepat dilakukan untuk meredam potensi disintegrasi tersebut adalah…",
    "choices": [
      "Membangun ruang dialog lintas tokoh masyarakat dan mengedepankan kesetaraan hak sebagai warga negara.",
      "Mengusulkan pemisahan wilayah permukiman berdasarkan kelompok etnis guna menghindari gesekan antar warga.",
      "Mendukung salah satu kelompok mayoritas agar situasi keamanan dapat dikendalikan dengan cepat.",
      "Menyerahkan penanganan konflik sepenuhnya kepada aparat militer tanpa melibatkan pendekatan kemasyarakatan.",
      "Membatasi kebebasan beragama dan berbudaya bagi kelompok minoritas demi menjaga perasaan kelompok mayoritas."
    ],
    "answer": 0,
    "explanation": "Nasionalisme Indonesia berdiri di atas prinsip inklusivitas dan kesetaraan (equality before the law). Menghadapi potensi konflik horizontal, solusi berkelanjutan adalah membangun ruang dialog interaktif dan menjamin kesetaraan hak warga negara tanpa membeda-bedakan SARA. Jadi, opsi A benar karena memperkuat perekat kebangsaan melalui komunikasi inklusif dan kesetaraan.\n\nOpsi B salah karena pemisahan permukiman (segregasi) justru memperjelas sekat perbedaan dan memper permanen konflik.\n\nOpsi C salah karena berpihak pada mayoritas melanggar prinsip keadilan dan persatuan nasional.\n\nOpsi D salah karena pendekatan militeristis tanpa pendekatan sosial tidak menyelesaikan akar permasalahan hubungan antarwarga.\n\nOpsi E salah karena membatasi hak minoritas bertentangan dengan Jaminan konstitusi UUD 1945 dan nilai Pancasila."
  },
  {
    "prompt": "Perhatikan beberapa pernyataan sikap warga negara berikut:\n1) Mengembangkan sikap saling menghargai dan menjunjung tinggi keberagaman di tengah masyarakat.\n2) Membuka peluang kerja sama internasional untuk menyelesaikan persoalan dinamika politik dalam negeri.\n3) Mengutamakan prinsip musyawarah dan mufakat dalam menyelesaikan potensi perselisihan warga.\n4) Mematuhi dan menjalankan seluruh peraturan perundang-undangan yang berlaku secara konsisten.\n5) Membina kerukunan serta menjaga keselarasan dalam kehidupan bertetangga dan bermasyarakat.\n6) Membatasi keterlibatan elemen masyarakat dalam kebijakan pertahanan agar fokus pada sektor ekonomi.\n\nSikap yang paling mencerminkan aktualisasi nasionalisme untuk memperkokoh persatuan dalam masyarakat yang heterogen ditunjukkan oleh nomor...",
    "choices": [
      "1), 2), dan 4)",
      "1), 3), dan 5)",
      "2), 4), dan 6)",
      "3), 4), dan 6)",
      "2), 3), dan 5)"
    ],
    "answer": 1,
    "explanation": "Esensi nasionalisme di tengah masyarakat majemuk berfokus pada penguatan kohesi internal, toleransi, musyawarah, dan keharmonisan sosial. Poin (1) mencerminkan penghargaan pluralisme, poin (3) mencerminkan budaya musyawarah, dan poin (5) memperkuat keharmonisan sosial warga. Jadi, opsi B benar karena ketiga poin tersebut merupakan pilar utama nasionalisme di tingkat akar rumput.\n\nOpsi A salah karena memasukkan poin (2) yang dapat membuka celah campur tangan asing pada masalah internal bangsa.\n\nOpsi C salah karena poin (2) dan (6) bertentangan dengan kedaulatan dan prinsip bela negara masyarakat.\n\nOpsi D salah karena poin (6) mengabaikan peran serta masyarakat dalam sistem pertahanan keamanan rakyat semesta.\n\nOpsi E salah karena masih menyertakan poin (2) yang berisiko merusak kedaulatan nasional."
  },
  {
    "prompt": "Era modernisasi informasi ditandai dengan fenomena post-truth, di mana emosi dan keyakinan pribadi lebih berpengaruh dalam membentuk opini publik daripada fakta objektif. Kondisi ini sering dimanfaatkan untuk mempropagandakan paham radikalisme dan memecah belah bangsa. Sikap nasionalisme yang reflektif dari seorang warga negara untuk membentengi diri dari ancaman tersebut adalah...",
    "choices": [
      "Mengembangkan pemikiran kritis, memverifikasi kebenaran informasi, dan mengutamakan persatuan di atas narasi provokatif.",
      "Mengikuti narasi kelompok mayoritas di media sosial agar tidak dianggap keluar dari arus utama masyarakat.",
      "Membalas setiap ujaran kebencian kelompok radikal dengan perlawanan fisik secara langsung di dunia nyata.",
      "Menyerahkan sepenuhnya pengawasan konten media sosial kepada pihak berwajib tanpa perlu seleksi pribadi.",
      "Menolak membaca berita atau informasi apa pun yang berkaitan dengan isu politik dan kebangsaan."
    ],
    "answer": 0,
    "explanation": "Ancaman post-truth dan polarisasi di era modernisasi membutuhkan ketahanan mental kebangsaan. Warga negara yang berjiwa nasionalis harus berpikir kritis, melakukan konfirmasi fakta (check and recheck), serta meletakkan persatuan nasional di atas kepentingan emosi kelompok. Jadi, opsi A benar karena mencerminkan sikap rasional, kritis, dan berorientasi pada integritas bangsa.\n\nOpsi B salah karena sekadar mengekor mayoritas tanpa verifikasi dapat memperluas penyebaran hoaks dan penyesatan informasi.\n\nOpsi C salah karena main hakim sendiri dan perlawanan fisik dapat memicu eskalasi konflik sosial yang lebih luas.\n\nOpsi D salah karena membentengi diri dari hoaks memerlukan kesadaran dan tanggung jawab pribadi tiap individu\n\nOpsi E salah karena bersikap apatis terhadap isu kebangsaan melemahkan kepedulian terhadap keutuhan negara."
  },
  {
    "prompt": "Generasi muda memegang peranan krusial dalam merawat rajutan kebangsaan di tengah kemajemukan suku, agama, dan budaya. Di antara berbagai aktivitas sosial-kemasyarakatan berikut, manakah bentuk tindakan nyata pemuda yang secara spesifik berfokus pada penguatan solidaritas dalam aspek kebudayaan nasional?",
    "choices": [
      "Membuka ruang dialog serta diskusi antar iman secara rutin untuk meminimalkan potensi gesekan keagamaan.",
      "Aktif menggalangkan kampanye literasi digital guna menyebarkan edukasi anti-hoaks dan paham anti-radikalisme.",
      "Melibatkan diri serta memprakarsai pertunjukan seni tradisional dan festival kebudayaan nusantara secara berkala.",
      "Mengorganisasi aksi bakti lingkungan di kawasan perdesaan dan perkotaan untuk mempererat jaringan sosial warga.",
      "Menjalin kerja sama antar elemen pemuda dalam penyaluran bantuan logistik bagi korban bencana alam."
    ],
    "answer": 2,
    "explanation": "Soal menekankan bentuk tindakan nyata generasi muda yang spesifik berfokus pada aspek kebudayaan nasional. Meskipun semua opsi merupakan kegiatan positif, keterlibatan dan inisiasi dalam pementasan seni serta festival budaya nusantara secara langsung Melestarikan warisan budaya dan mengokohkan identitas kultural bangsa. Jadi, opsi C benar karena paling tepat mewakili Penguatan kebersamaan dalam dimensi kebudayaan.\nOpsi A salah karena dialog antar iman tergolong ke dalam aspek keagamaan/toleransi kepercayaan.\nOpsi B salah karena kampanye anti-hoaks masuk dalam aspek keamanan informasi dan politik/ideologi.\nOpsi D salah karena aksi bakti lingkungan tergolong ke dalam aspek ekologi dan sosial-masyarakat.\nOpsi E salah karena bantuan bencana alam tergolong ke dalam aspek kemanusiaan dan solidaritas sosial."
  },
  {
    "prompt": "Dalam persaingan global yang sangat ketat, negara-negara maju cenderung menguasai teknologi dan sumber daya manusia (SDM) berkualitas tinggi, sementara negara berkembang berisiko hanya menjadi pasar ekspor dan penyedia bahan mentah. Ditinjau dari konsep nasionalisme ekonomi, upaya strategis pemerintah Indonesia untuk mempertahankan kedaulatan di era globalisasi adalah…",
    "choices": [
      "Melarang perusahaan luar negeri melakukan investasi dan beroperasi di wilayah Republik Indonesia.",
      "Menghentikan seluruh ekspor komoditas nasional agar semua bahan mentah dikonsumsi sendiri di dalam negeri.",
      "Menerapkan kebijakan hilirisasi industri serta meningkatkan kapasitas dan kualitas riset SDM dalam negeri.",
      "Menaikkan tarif pajak impor setinggi-tingginya agar warga negara tidak mampu membeli barang luar negeri.",
      "Menjual sumber daya alam yang belum dikelola kepada pihak asing agar mendapatkan dana segar secara cepat."
    ],
    "answer": 2,
    "explanation": "Nasionalisme ekonomi di era globalisasi bertujuan untuk keluar dari jebakan penyedia bahan mentah (raw materials supplier). Langkah strategis yang tepat adalah menjalankan hilirisasi industri (mengolah bahan mentah jadi barang bernilai tambah) disertai peningkatan kualitas SDM dan inovasi teknologi lokal. Jadi, opsi C benar karena merupakan kebijakan konkret untuk mewujudkan kemandirian dan nilai tambah ekonomi nasional.\n\nOpsi A salah karena melarang investasi asing secara mutlak dapat menghambat masuknya modal dan transfer teknologi.\n\nOpsi B salah karena menghentikan ekspor tanpa industri pengolahan yang siap akan merugikan penerimaan devisa negara.\n\nOpsi D salah karena tarif impor yang terlalu ekstrem dapat memicu perang dagang dan membebankan konsumen lokal.\n\nOpsi E salah karena menjual SDA mentah tanpa pengolahan mencederai kedaulatan ekonomi jangka panjang."
  },
  {
    "prompt": "Pendidikan nasionalisme di sekolah sering kali hanya berfokus pada romantisme sejarah masa lalu dan kebanggaan budaya secara statis. Padahal, nasionalisme modern menuntut pemahaman terhadap posisi strategis bangsa di era global. Cara paling efektif untuk meningkatkan kualitas pendidikan nasionalisme agar lebih holistik serta relevan dengan tantangan zaman adalah…",
    "choices": [
      "Fokus memberikan bimbingan karir bagi siswa agar siap memenangkan persaingan kerja di perusahaan multinasional.",
      "Menumbuhkan pemahaman teknologi dan inovasi karya anak bangsa sebagai pijakan kemandirian di panggung internasional.",
      "Memperbanyak program pertukaran siswa ke luar negeri agar peserta didik mengadopsi budaya dan gaya hidup global.",
      "Mewajibkan siswa mengikuti kegiatan ekstrakurikuler kepramukaan tanpa mengevaluasi pemahaman nilai substantifnya.",
      "Membatasi akses siswa terhadap wawasan luar negeri untuk menjaga kemurnian budaya lokal dari pengaruh asing."
    ],
    "answer": 1,
    "explanation": "Pendidikan nasionalisme yang holistik dan relevan di era modern harus mampu memadukan kebanggaan nasional dengan penguasaan teknologi serta inovasi nyata. Hal ini penting agar bangsa Indonesia tidak sekadar menjadi konsumen, melainkan produsen berdaya saing global yang mandiri. Jadi, opsi B benar karena menyelaraskan nasionalisme dengan pembangunan kapasitas sains, teknologi, dan inovasi bangsa.Opsi\n\nA salah karena bimbingan karir internasional berorientasi pada kepentingan individu/individu pragmatis, bukan penguatan orientasi kebangsaan.\n\nOpsi C salah karena pertukaran siswa yang hanya mengadopsi gaya hidup global berisiko mengerus identitas kebudayaan nasional.\n\nOpsi D salah karena kegiatan formalitas tanpa pendalaman nilai substantif tidak menjawab tantangan zaman modern.\n\nOpsi E salah karena isolasi dari dunia luar bersifat chauvinistik dan membuat bangsa tertinggal dalam peradaban global."
  },
  {
    "prompt": "Di era digital, ancaman terhadap kedaulatan negara tidak lagi dominan berbentuk invasi militer fisik, melainkan serangan siber (cyber attack) pada infrastruktur data vital nasional serta penyebaran disinformasi massal dari pihak asing yang memecah belah persatuan. Sikap nasionalisme dan bela negara yang paling relevan dilakukan oleh seorang aparatur sipil negara (ASN) maupun warga negara di bidang teknologi informasi untuk menghadapi ancaman ini adalah…",
    "choices": [
      "Memblokir seluruh jaringan internet luar negeri guna menjamin keamanan sistem data nasional.",
      "Mengabaikan serangan siber selama tidak merusak fasilitas umum fisik di lingkungan tempat tinggal.",
      "Menyerahkan sepenuhnya penanganan keamanan siber kepada peretas independen tanpa koordinasi dengan lembaga resmi.",
      "Menggunakan sistem proteksi siber buatan asing sepenuhnya tanpa perlu memuat konten buatan dalam negeri.",
      "Memperkuat proteksi keamanan data, meningkatkan literasi digital masyarakat, serta aktif membendung narasi provokatif pembelah bangsa."
    ],
    "answer": 4,
    "explanation": "Nasionalisme digital menuntut kesadaran dan kemampuan warga negara dalam menjaga kedaulatan informasi serta ruang siber bangsa. Serangan siber dan disinformasi dapat menghancurkan kohesi sosial dan melumpuhkan negara. Aktualisasi nasionalisme yang tepat adalah meningkatkan kapasitas proteksi data, memperkuat literasi digital rakyat, dan aktif menjaga kondusivitas ruang publik dari propaganda pembelah bangsa. Jadi, opsi E benar karena mencerminkan langkah proaktif dan konstruktif dalam bela negara digital.\n\nOpsi A salah karena bersifat isolasionis dan menutup akses perkembangan global yang merugikan kemajuan bangsa.\n\nOpsi B salah karena apatis terhadap ancaman non-fisik yang berpotensi melumpuhkan kedaulatan negara.\n\nOpsi C salah karena mengabaikan tata kelola resmi kenegaraan dan dapat berisiko kebocoran data lebih lanjut.\n\nOpsi D salah karena menciptakan ketergantungan mutlak pada pihak asing yang merusak prinsip kemandirian teknologi nasional."
  },
  {
    "prompt": "Maraknya penyebaran berita bohong (hoaks) dan ujaran kebencian berlatar belakang SARA di media sosial berpotensi memecah belah persatuan bangsa. Sikap reflektif nasionalisme yang tepat dalam merespons fenomena tersebut adalah…",
    "choices": [
      "Ikut menyebarkan informasi yang belum pasti kebenarannya selama informasi tersebut membela kelompoknya.",
      "Bersikap pasif dan acuh tak acuh terhadap dinamika informasi di media sosial demi menghindari konflik.",
      "Melakukan saring sebelum sharing serta aktif menyebarkan narasi positif yang memperkuat persatuan nasional.",
      "Membalas ujaran kebencian dengan kalimat yang lebih keras agar pihak lawan merasa terintimidasi.",
      "Menutup seluruh akses internet dan media sosial secara pribadi agar tidak terpengaruh isu negatif."
    ],
    "answer": 2,
    "explanation": "Nasionalisme digital menuntut setiap warga negara menjaga stabilitas dan keharmonisan di dunia maya. Perilaku saring sebelum sharing serta menyebarkan narasi positif menjadi benteng utama dalam mencegah perpecahan bangsa akibat hoaks. Jadi, opsi C benar karena menerapkan literasi digital yang bertanggung jawab demi persatuan.\nOpsi A salah karena menyebarkan informasi tak valid demi kelompok dapat memicu konflik dan perpecahan SARA.\n\nOpsi B salah karena bersikap acuh tak acuh menunjukkan kurangnya kepedulian sosial terhadap keutuhan bangsa.\nOpsi D salah karena membalas kebencian dengan intrik keras justru memperkeruh suasana dan memicu perselisihan baru.\nOpsi E salah karena mengisolasi diri dari teknologi adalah tindakan solutif-pasif yang tidak menyelesaikan masalah."
  },
  {
    "prompt": "Perubahan rumusan sila pertama Pancasila dari 'Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya' menjadi 'Ketuhanan Yang Maha Esa' pada tanggal 18 Agustus 1945 oleh para Founding Fathers mencerminkan manifestasi nasionalisme berupa…",
    "choices": [
      "Penyerahan posisi tawar kaum mayoritas kepada kehendak negara luar yang ingin menguasai Indonesia.",
      "Kebijakan kompromi politik sementara untuk menghindari perpecahan militer dengan pasukan asing.",
      "Kematangan jiwa negarawan yang mengedepankan persatuan nasional dan toleransi demi keutuhan NKRI.",
      "Kelemahan posisi fraksi keagamaan dalam mempertahankan aspirasi umat Islam saat sidang PPKI.",
      "Upaya sekularisasi sistem pemerintahan Indonesia agar terpisah secara total dari nilai-nilai keagamaan."
    ],
    "answer": 2,
    "explanation": "Keputusan para founding fathers (terutama dari tokoh-tokoh Islam seperti Ki Bagus Hadikusumo, Kasman Singodimedjo, dll) untuk mengubah rumusan Piagam Jakarta adalah bukti tertinggi sikap nasionalisme yang negarawan. Mereka rela mengorbankan kepentingan kelompok demi menjaga persatuan Indonesia dari ancaman disintegrasi wilayah Timur. Jadi, opsi C benar karena mencerminkan kematangan sikap negarawan demi keutuhan bangsa.\nOpsi A salah karena perubahan tersebut dilakukan murni atas kesadaran internal pendiri bangsa, bukan pendiktean asing.\nOpsi B salah karena keputusan ini bersifat mendasar untuk pondasi negara yang permanen, bukan kompromi taktis sementara.\nOpsi D salah karena tindakan tersebut didasari kebijaksanaan dan jiwa besar, bukan kelemahan fraksi.\nOpsi E salah karena Pancasila tetap menempatkan Ketuhanan Yang Maha Esa pada posisi utama, sehingga bukan sekularisme."
  },
  {
    "prompt": "Nasionalisme dan integritas merupakan dua fondasi utama dalam menjaga keberlanjutan serta kedaulatan bangsa Indonesia yang majemuk. Hubungan sinergis yang paling tepat antara kedua konsep tersebut dalam kehidupan bernegara adalah…",
    "choices": [
      "Nasionalisme menjadi dorongan moral mencintai bangsa, sementara integritas memastikan tindakan warga negara selalu jujur dan taat pada prinsip moral serta hukum.",
      "Nasionalisme berfokus pada simbol-simbol kenegaraan, sedangkan integritas bertugas mengatur tata kelola administrasi pemerintahan semata.",
      "Integritas merupakan sarana untuk mencapai popularitas publik, sedangkan nasionalisme berfungsi menjaga stabilitas politik pemerintah.",
      "Nasionalisme diwujudkan melalui pengorbanan fisik, sedangkan integritas hanya diperlukan bagi pejabat publik saat mengelola keuangan negara.",
      "Integritas membatasi kebebasan individu, sementara nasionalisme menuntut kepatuhan mutlak warga negara terhadap seluruh kebijakan negara."
    ],
    "answer": 0,
    "explanation": "Nasionalisme tanpa integritas berisiko menjadi chauvinisme atau sekadar retorika kosong, sedangkan integritas tanpa nasionalisme kehilangan arah pengabdian pada bangsa. Nasionalisme memberikan arah dan kecintaan pada tanah air, sementara integritas menjaga agar kecintaan tersebut diwujudkan secara jujur, konsisten, dan taat hukum. Jadi, opsi A benar karena secara akurat menggambarkan keterkaitan komplementer antara rasa kebangsaan dan keteguhan moral.\nOpsi B salah karena menyempitkan esensi nasionalisme dan integritas hanya pada aspek formalitas.\nOpsi C salah karena mendegradasi nilai integritas menjadi alat pencitraan publik.\nOpsi D salah karena membatasi integritas hanya untuk pejabat, padahal integritas adalah kewajiban seluruh warga negara.\nOpsi E salah karena menggambarkan nasionalisme secara otoriter yang bertentangan dengan nilai demokrasi Pancasila."
  },
  {
    "prompt": "Dalam era modernisasi yang cepat, Kurikulum Merdeka/Pendidikan Nasional dituntut untuk memperkuat karakter kebangsaan peserta didik. Strategi penyusunan kurikulum yang paling efektif untuk menanamkan jiwa nasionalisme adalah…",
    "choices": [
      "Memfokuskan pengajaran sejarah hanya pada narasi perjuangan tokoh sentral nasional dengan mengesampingkan peran daerah.",
      "Mengurangi jam pelajaran kebangsaan dan lebih menitikberatkan pada pembentukan keterampilan teknis digital semata.",
      "Mewajibkan hafalan doktrin-doktrin kebangsaan tanpa memberikan ruang kritis dan diskusi interaktif bagi siswa.",
      "Menerapkan standar pendidikan asing secara mutlak agar generasi muda dapat mengejar ketertinggalan teknologi.",
      "Menyusun materi sejarah secara holistik yang mencakup keberagaman budaya dan kontribusi seluruh daerah di Indonesia."
    ],
    "answer": 4,
    "explanation": "Kurikulum pendidikan kebangsaan harus mampu mencerminkan realitas kebhinekaan bangsa. Penulisan sejarah secara holistik yang mencakup keberagaman budaya dan kontribusi daerah menumbuhkan rasa persatuan dan kesetaraan antarwilayah. Jadi, opsi E benar karena mengusung pendekatan sejarah secara utuh dan inklusif.\nOpsi A salah karena mengesampingkan peran daerah bertentangan dengan prinsip kebhinekaan dan keadilan sejarah.\nOpsi B salah karena mengabaikan pelajaran kebangsaan akan menurunkan pemahaman nilai-nilai identitas nasional.\nOpsi C salah karena hafalan doktrinal tanpa ruang kritis tidak membentuk kesadaran nasionalisme yang rasional dan mendalam.\nOpsi D salah karena mengadopsi standar asing secara mutlak dapat mengabaikan konteks dan kearifan lokal bangsa."
  },
  {
    "prompt": "Ayu merupakan salah satu anggota tim kerja dalam sebuah organisasi kebudayaan. Saat diskusi perancangan agenda festival daerah, terjadi perbedaan pendapat yang tajam antaranggota karena masing-masing menonjolkan ego kedaerahan hingga suasana menjadi tegang dan tidak kondusif. Sebagai rekan kerja yang menjunjung tinggi semangat nasionalisme, tindakan paling tepat yang harus dilakukan Ayu adalah...",
    "choices": [
      "Memilih bersikap netral dan pasif agar tidak memperkeruh suasana forum yang sedang memanas.",
      "Mengusulkan agar rapat ditunda secara sepihak sampai semua pihak dapat mengendalikan emosi masing-masing.",
      "Mengambil inisiatif mengajukan usulan penyelesaian yang menjembatani perbedaan pendapat secara rasional dan objektif.",
      "Menyampaikan ulasan kelebihan dan kekurangan dari tiap pandangan tanpa memberikan solusi konkret.",
      "Meminta pimpinan organisasi untuk mengambil keputusan tegas tanpa perlu mendengarkan argumentasi anggota."
    ],
    "answer": 2,
    "explanation": "Nasionalisme bukan sekadar sikap pasif atau simpati, melainkan tindakan aktif dan konstruktif dalam menjaga persatuan di tengah perbedaan. Seorang nasionalis sejati harus mampu bertindak sebagai perekat bangsa dengan mengutamakan musyawarah dan memberikan solusi integratif ketika terjadi benturan primordial. Jadi, opsi C benar karena mencerminkan kepemimpinan solutif dan komitmen menjaga keutuhan kelompok.\nOpsi A salah karena mencerminkan sikap pembiaran/apatis yang tidak menyelesaikan konflik.\nOpsi B salah karena hanya menghindar dari masalah tanpa menawarkan mekanisme penyelesaian.\nOpsi D salah karena kurang solutif dalam membawa forum menuju mufakat.\nOpsi E salah karena mengabaikan prinsip demokrasi dan musyawarah yang menjadi jiwa kebangsaan."
  },
  {
    "prompt": "Banyak talenta digital terbaik Indonesia di bidang kecerdasan buatan (AI) dan teknologi finansial memilih bekerja pada perusahaan multinasional di luar negeri karena menawarkan gaji jauh lebih tinggi, fasilitas mutakhir, serta kepastian karier. Kondisi fenomena brain drain ini memicu kekhawatiran terkikisnya daya saing nasional dalam kemandirian teknologi jangka panjang. Dalam perspektif nasionalisme adaptif dan relevan dengan tantangan global, respons strategis pemerintah yang paling tepat untuk menyikapi fenomena ini adalah…",
    "choices": [
      "Mengembangkan ekosistem riset terpadu serta menyelaraskan insentif dan ruang inovasi nasional agar talenta terbaik dapat berkontribusi optimal bagi bangsa",
      "Mewajibkan seluruh lulusan teknologi terbaik bekerja di dalam negeri melalui regulasi ikatan dinas ketat tanpa pengecualian.",
      "Membatasi pemberian izin kerja luar negeri bagi tenaga ahli industri strategis guna mencegah kebocoran potensi intelektual bangsa.",
      "Membiarkan fenomena tersebut sebagai bagian dari mobilitas global pasar bebas tanpa perlu intervensi atau regulasi negara.",
      "Mengimbau secara moral agar talenta digital kembali ke tanah air sebagai wujud pengorbanan tanpa perlu memperbaiki fasilitas dan apresiasi."
    ],
    "answer": 0,
    "explanation": "Nasionalisme modern dalam persaingan ekonomi pengetahuan tidak lagi diwujudkan melalui pemaksaan atau pembatasan ruang gerak (restriksi), melainkan melalui pembangunan daya tarik dan ekosistem nasional yang kompetitif. Pemerintah bertanggung jawab menciptakan iklim riset, kepastian karier, dan insentif yang memadai agar talenta terbaik bangsa dapat mengaktualisasikan potensinya demi kemandirian nasional. Jadi, opsi A benar karena menyelaraskan cita-cita kemandirian bangsa dengan pemenuhan kebutuhan insentif dan ruang inovasi talenta nasional.\nOpsi B salah karena menghambat hak mobilitas individu tanpa menyelesaikan akar masalah belum memadainya fasilitas dalam negeri.\n\nOpsi C salah karena bersifat otoriter dan restriktif yang justru berpotensi mematikan motivasi serta kreativitas talenta muda.\nOpsi D salah karena mencerminkan sikap pembiaran dan lepas tangan atas potensi ancaman kedaulatan teknologi nasional.\nOpsi E salah karena hanya mengandalkan imbauan moral yang tidak realistis tanpa diimbangi perbaikan sistemik atas apresiasi negara."
  },
  {
    "prompt": "Di sebuah wilayah perbatasan antar provinsi yang kaya sumber daya alam, sering terjadi perselisihan penentuan batas daerah dan pengelolaan retribusi pasar antara dua pemerintah daerah. Masing-masing pemda saling memblokir akses distribusi hasil pertanian lokal untuk melindungi pendapatan daerah masing-masing, yang mengakibatkan komoditas warga membusuk dan harga kebutuhan pokok melonjak tajam. Ditinjau dari perspektif nasionalisme ekonomi dan persatuan kebangsaan, solusi paling mendasar untuk mengatasi perselisihan tersebut adalah…",
    "choices": [
      "Menolak seluruh bentuk retribusi daerah agar rantai pasok perdagangan kembali berjalan secara bebas tanpa pengawasan.",
      "Mengalihkan tata kelola perdagangan daerah perbatasan kepada pihak swasta nasional agar lepas dari potensi konflik antar-pemda.",
      "Menyerahkan keputusan final sengketa batas wilayah sepenuhnya kepada Mahkamah Konstitusi tanpa menyelesaikan dampak ekonomi warga.",
      "Menginstruksikan pemerintah pusat untuk mengambil alih seluruh pengelolaan pendapatan daerah perbatasan secara permanen.",
      "Membangun forum koordinasi lintas daerah berbasis konektivitas ekonomi integratif yang mengutamakan kesejahteraan rakyat di atas ego sektoral."
    ],
    "answer": 4,
    "explanation": "Nasionalisme dalam wadah Negara Kesatuan Republik Indonesia (NKRI) menuntut pengikisan ego sektoral dan egosentrisme kedaerahan demi kepentingan nasional yang lebih besar. Otonomi daerah tidak boleh mengorbankan kesejahteraan rakyat atau merusak konektivitas pasar dalam negeri. Pendekatan yang tepat adalah menciptakan kolaborasi dan sinergi integratif yang menguntungkan kedua pihak sekaligus menjamin kelancaran pasokan bagi warga. Jadi, opsi E benar karena mengutamakan semangat persatuan nasional dan kepentingan ekonomi rakyat di atas ego birokrasi daerah.\nOpsi A salah karena menghilangkan hak PAD daerah secara ekstrem tanpa menyelesaikan masalah regulasi tata kelola.\nOpsi B salah karena melakukan komersialisasi fungsi pelayanan publik yang seharusnya menjadi kewajiban negara.\nOpsi C salah karena hanya berfokus pada legalitas hukum formal tanpa memberikan solusi atas penderitaan ekonomi warga di lapangan.\nOpsi D salah karena mencabut semangat desentralisasi dan otonomi daerah yang dijamin oleh konstitusi."
  },
  {
    "prompt": "Dalam sebuah proses seleksi promosi jabatan di suatu instansi/perusahaan, seorang manajer senior cenderung hanya memberikan penilaian tinggi dan merekomendasikan calon yang berasal dari suku atau daerah asalnya saja, serta mengabaikan kandidat lain yang memiliki kompetensi dan prestasi lebih unggul. Perilaku manajer tersebut merupakan bentuk ancaman terhadap persatuan yang didasari oleh…",
    "choices": [
      "Etnosentrisme dan primordialisme yang merusak prinsip keadilan serta meritokrasi.",
      "Nasionalisme strategis yang mengutamakan kerapian pimpinan daerah.",
      "Patriotisme profesional yang menjaga tradisi lokal di tempat kerja.",
      "Sikap inklusif yang mendukung keberagaman di lingkungan kerja modern.",
      "Chauvinisme berlebihan terhadap negara asing."
    ],
    "answer": 0,
    "explanation": "Sikap manajer yang mengutamakan suku/daerahnya sendiri serta memandang rendah kandidat dari suku lain merupakan contoh nyata Etnosentrisme dan Primordialisme. Sikap ini membahayakan persatuan bangsa karena merusak sistem meritokrasi (keadilan berbasis kompetensi) dan memicu diskriminasi serta keretakan sosial. Jadi, opsi A benar.\nOpsi B salah karena tindakan membeda-bedakan suku bukan bagian dari nasionalisme.\nOpsi C salah karena patriotisme berfokus pada kepentingan bangsa keseluruhan, bukan favoritisme suku.\nOpsi D salah karena sikap inklusif justru merangkul semua perbedaan tanpa diskriminasi.\nOpsi E salah karena chauvinisme berkaitan dengan keunggulan negara terhadap negara lain, bukan persaingan antar suku lokal."
  },
  {
    "prompt": "Keluarga merupakan unit terkecil masyarakat yang memegang peranan kunci dalam penanaman awal karakter bangsa. Perilaku berikut yang paling tepat menggambarkan implementasi nilai nasionalisme dalam lingkungan keluarga adalah…",
    "choices": [
      "Menerapkan kedisiplinan dan aturan hukum yang ketat serta kaku di rumah guna melatih ketahanan fisik anak.",
      "Mengajarkan sejarah perjuangan bangsa dan kearifan lokal guna menumbuhkan rasa bangga serta cinta tanah air sejak dini.",
      "Mewajibkan seluruh anggota keluarga untuk aktif berdiskusi mengenai isu-isu politik internasional setiap hari.",
      "Fokus penuh pada pembentukan integritas moral pribadi anak tanpa perlu mengenalkan wawasan kebangsaan.",
      "Membebaskan anak mengadopsi budaya luar tanpa filter agar mampu bersaing secara global sejak usia dini."
    ],
    "answer": 1,
    "explanation": "Penanaman karakter kebangsaan sejak dini membutuhkan fondasi pemahaman sejarah dan rasa cinta tanah air. Dengan mengajarkan sejarah perjuangan bangsa dan kearifan lokal, anak-anak dapat membangun identitas serta rasa bangga terhadap bangsanya sendiri. Jadi, opsi B benar karena menanamkan rasa bangga dan cinta tanah air sejak dini secara tepat.\nOpsi A salah karena kedisiplinan kaku dan otoriter berfokus pada kepatuhan fisik semata, bukan pembentukan kesadaran kebangsaan.\nOpsi C salah karena isu politik internasional kurang relevan dengan penanaman nilai dasar nasionalisme pada tingkat keluarga.\nOpsi D salah karena pembentukan moral pribadi harus sejalan dengan wawasan kebangsaan agar pembentukan karakter utuh.\nOpsi E salah karena membiarkan penyerapan budaya luar tanpa filter berpotensi mengikis jati diri dan identitas bangsa."
  },
  {
    "prompt": "Seorang PNS bernama Aris bertugas di dinas pengadaan barang dan jasa. Ia menemukan adanya potensi efisiensi anggaran yang cukup besar jika menggunakan vendor lokal kecil dari daerah tertinggal. Namun, vendor tersebut belum memiliki sertifikasi standar internasional yang biasa disyaratkan dalam juknis proyek, meskipun kualitas barangnya teruji setara. Jika Aris memilih vendor besar yang bersertifikat lengkap, anggaran negara akan membengkak, namun prosedur aman secara administratif. Dilihat dari sudut pandang pengamalan nasionalisme yang berorientasi pada kemajuan dan keadilan nasional, langkah terbaik yang mestinya diambil Aris adalah…",
    "choices": [
      "Memilih vendor besar demi keamanan posisi pribadi dan kepatuhan penuh pada aturan administratif tanpa risiko.",
      "Langsung memenangkan vendor lokal untuk membuktikan kepedulian pada ekonomi daerah meskipun melanggar juknis secara terbuka.",
      "Melaporkan kondisi ini kepada atasan beserta kajian komparatif, lalu mengusulkan skema pendampingan/percepatan sertifikasi bagi vendor lokal agar memenuhi legalitas formal.",
      "Mengubah secara sepihak aturan juknis pengadaan agar vendor lokal bisa langsung masuk dalam kriteria penunjukan langsung.",
      "Menyerahkan sepenuhnya keputusan kepada panitia lelang tanpa memberikan masukan teknis atau pertimbangan ekonomi lokal."
    ],
    "answer": 2,
    "explanation": "Nasionalisme ASN menuntut keseimbangan antara ketaatan pada hukum/akuntabilitas dan upaya nyata memajukan potensi nasional. Seorang ASN tidak boleh melanggar aturan secara sepihak, namun juga tidak boleh bersikap apatis terhadap pemberdayaan ekonomi lokal. Pendekatan yang tepat adalah mencari solusi prosedural yang sah untuk membina potensi lokal agar memenuhi standar nasional. Jadi, opsi C benar karena mencerminkan integritas, ketaatan aturan, dan kepedulian pada kemandirian ekonomi secara bersamaan.\n\nOpsi A salah karena mencerminkan sikap apatis dan mencari aman tanpa ada upaya untuk mengoptimalkan potensi produk dalam negeri.\nOpsi B salah karena melanggar aturan pengadaan dan prinsip akuntabilitas yang dapat menimbulkan masalah hukum.\nOpsi D salah karena tindakan sepihak mengabaikan regulasi dan berpotensi memunculkan praktik nepotisme atau penyalahgunaan wewenang.\n\nOpsi E salah karena menghindari tanggung jawab profesional sebagai pelayan publik yang seharusnya memberikan pertimbangan strategis."
  },
  {
    "prompt": "Kontribusi nasionalisme tidak hanya terbatas pada dimensi politik dan ekonomi, tetapi juga dalam pemantapan ideologi negara. Di tengah arus globalisasi dan gempuran ideologi transnasional yang menawarkan kebebasan tanpa batas, bagaimana strategi paling efektif untuk memperkuat ketahanan ideologi nasional agar tetap relevan di kalangan generasi muda?",
    "choices": [
      "Mengadopsi kebebasan ideologi asing secara mutlak demi menyesuaikan diri dengan perkembangan zaman dan nilai-nilai modernitas.",
      "Memperkuat kesadaran dan internalisasi ideologi Pancasila melalui pendekatan pendidikan yang terencana, kontekstual, serta dialogis.",
      "Membiarkan pluralisme ideologi berkembang tanpa batasan agar masyarakat bebas memilih paham yang disukai.",
      "Menerapkan doktrinasi ideologi nasional secara tertutup dan menindak tegas setiap bentuk pemikiran kritis dari masyarakat.",
      "Mengurangi peran aktif warga negara dan menyerahkan pengawalan ideologi sepenuhnya kepada lembaga pertahanan negara."
    ],
    "answer": 1,
    "explanation": "Penguatan ideologi nasional di era modern tidak dapat dilakukan dengan cara-cara dogmatis apalagi mengadopsi paham luar tanpa filter. Strategi paling efektif dan berkelanjutan adalah melalui pendidikan yang terencana, kontekstual, dan dialogis sehingga nilai-nilai Pancasila dapat dihayati secara rasional dan relevan oleh generasi muda. Nilai moral utamanya adalah membangun ketahanan ideologi berbasis kesadaran kolektif. Jadi, opsi B benar karena menekankan internalisasi ideologi secara terencana dan berorientasi pada kesadaran.\nOpsi A salah karena mengadopsi ideologi asing secara mutlak akan mengikis identitas dan kepribadian bangsa Indonesia.\nOpsi C salah karena membiarkan paham transnasional masuk tanpa penyaringan dapat memicu disintegrasi dan mengancam konsensus nasional.\nOpsi D salah karena doktrinasi tertutup dan menekan daya kritis justru menimbulkan resistensi serta kontraproduktif di era digital.\nOpsi E salah karena ideologi negara adalah milik bersama sehingga memerlukan partisipasi aktif seluruh elemen masyarakat."
  },
  {
    "prompt": "Perhatikan beberapa sikap dan perilaku warga negara berikut:\n1) Menggunakan dan mencintai produk-produk hasil karya dalam negeri.\n2) Mengutamakan kepentingan bersama di atas kepentingan pribadi dan golongan.\n3) Mengembangkan rasa bangga bertanah air dan berbangsa Indonesia.\n4) Menghormati kebebasan warga negara dalam menjalankan ibadah sesuai keyakinan.\n5) Menjaga nama baik bangsa dan negara dalam kancah pergaulan internasional.\n6) Memberikan bantuan kemanusiaan kepada korban bencana di berbagai belahan dunia.\n\nPernyataan yang paling tepat menggambarkan bentuk pengamalan langsung dari semangat nasionalisme dalam kehidupan berbangsa ditunjukkan oleh nomor…",
    "choices": [
      "1), 2), dan 3)",
      "1), 4), dan 6)",
      "2), 4), dan 5)",
      "3), 5), dan 6)",
      "2), 3), dan 6)"
    ],
    "answer": 0,
    "explanation": "Nasionalisme secara langsung berkaitan dengan kecintaan terhadap tanah air, pengutamaan kepentingan nasional di atas kepentingan individu, serta kebanggaan terhadap identitas bangsa. Poin (1) adalah nasionalisme ekonomi/cinta produk dalam negeri, poin (2) adalah pengorbanan dan pengutamaan kepentingan bangsa, serta poin (3) adalah kebanggaan nasional. Poin (4) lebih menekankan nilai toleransi beragama (Sila ke-1), sedangkan poin (6) menekankan nilai kemanusiaan universal/internasionalisme (Sila ke-2). Jadi, opsi A benar karena poin (1), (2), dan (3) secara langsung mencerminkan pilar-pilar nasionalisme.\n\nOpsi B salah karena poin (4) berfokus pada kebebasan beragama dan poin (6) berfokus pada kemanusiaan global.\nOpsi C salah karena tidak mencakup poin (1) dan (3) yang merupakan manifestasi utama kecintaan tanah air.\n\nOpsi D salah karena poin (6) lebih merupakan bentuk internasionalisme/perikemanusiaan daripada nasionalisme domestik.\nOpsi E salah karena masih menyertakan poin (6) yang berorientasi pada isu kemanusiaan global."
  },
  {
    "prompt": "Sebuah desa yang heterogen mengalami penurunan partisipasi warga dalam agenda keagamaan dan kebudayaan lintas komunitas. Sebagian besar warga mulai berfokus pada kegiatan ekonomi pribadi, sehingga interaksi antar kelompok berkurang dan kohesi sosial memudar. Ketika terjadi goncangan ekonomi lokal, warga cenderung menyelesaikan masalahnya masing-masing tanpa ada solidaritas antarwarga. Tindakan berbasis nilai nasionalisme yang paling efektif dan berdampak jangka panjang untuk memulihkan ikatan sosial tersebut adalah…",
    "choices": [
      "Menyelenggarakan kegiatan kebudayaan megah secara rutin yang diwajibkan bagi seluruh warga desa.",
      "Mengembangkan program pemberdayaan ekonomi berbasis koperasi atau usaha bersama yang melibatkan seluruh elemen masyarakat tanpa membedakan latar belakang.",
      "Memberikan sanksi sosial atau administratif bagi warga yang absen dalam kegiatan kemasyarakatan.",
      "D. Memasang imbauan dan spanduk tentang pentingnya persatuan dan kesatuan di titik-titik strategis desa.",
      "Mengganti jajaran pengurus RT/RW dengan tokoh yang lebih tegas dalam menggerakkan gotong royong."
    ],
    "answer": 1,
    "explanation": "Solusi paling efektif atas menurunnya kohesi sosial akibat individualisme ekonomi adalah mengintegrasikan kepentingan ekonomi warga ke dalam kerja sama kolektif. Nasionalisme substantif tumbuh dari interaksi nyata yang saling menguntungkan dan inklusif, sehingga ikatan sosial terbangun secara alami dan berkelanjutan. Jadi, opsi B benar karena menyelesaikan masalah utama warga sekaligus memperkuat kembali nilai gotong royong lintas kelompok secara praktis.\nOpsi A salah karena bersifat seremonial dan pemaksaan, sehingga tidak menyentuh akar masalah keterasingan sosial antarwarga.\nOpsi C salah karena menerapkan tindakan represif yang justru dapat memicu resistensi dan ketegangan baru di masyarakat.\nOpsi D salah karena hanya berorientasi pada imbauan simbolis yang jarang berdampak nyata pada perubahan perilaku masyarakat.\nOpsi E salah karena hanya berfokus pada pergantian figur, bukan menciptakan sistem interaksi sosial-ekonomi yang inklusif."
  },
  {
    "prompt": "Di era keberlimpahan informasi, tantangan nasionalisme tidak lagi terbatas pada ancaman fisik atau perbedaan antardaerah semata. Seorang konten kreator lokal sering kali memproduksi konten yang mengkritik kebijakan publik dengan gaya bahasa satire. Di satu sisi, konten tersebut memicu diskusi kritis di kalangan pemuda, namun di sisi lain berpotensi menurunkan kepercayaan publik terhadap pembuat kebijakan dan memicu benturan narasi di ruang digital. Dalam perspektif esensi nasionalisme yang adaptif terhadap dinamika era modern, manakah tindakan yang paling tepat untuk merespons kondisi tersebut?",
    "choices": [
      "Melarang pembuatan konten satire yang membahas isu negara untuk menjaga stabilitas dan wibawa lembaga pemerintah di mata publik.",
      "Mengarahkan ruang digital hanya untuk mempublikasikan narasi positif demi menjaga citra serta persatuan bangsa.",
      "Mendorong literasi digital yang mengarahkan kritik agar tetap berbasis data, konstruktif, serta bermuara pada solusi bagi keutuhan bangsa.",
      "Membiarkan segala bentuk kebebasan berekspresi di media sosial sebagai wujud nyata nilai demokrasi tanpa perlu adanya regulasi pendamping.",
      "Mengatur agar seluruh kreator konten diwajibkan mengikuti sertifikasi wawasan kebangsaan sebelum mengunggah ide di media sosial."
    ],
    "answer": 2,
    "explanation": "Nasionalisme era digital memerlukan keseimbangan antara ruang kebebasan berekspresi dan tanggung jawab kebangsaan. Kritik terhadap kebijakan publik tidak boleh dibungkam, namun harus diarahkan agar berbasis data, konstruktif, dan solutif demi menjaga keutuhan bangsa. Pendekatan ini memperkuat demokrasi tanpa mengorbankan integrasi nasional dari risiko polarisasi digital. Jadi, opsi C benar karena menyelaraskan daya kritis warga negara dengan literasi digital yang berorientasi pada kepentingan nasional.\nOpsi A salah karena cenderung menggunakan pendekatan represif/pembungkaman yang merusak ruang kebebasan berpendapat di negara demokratis.\nOpsi B salah karena sekadar menampilkan narasi semu (pencitraan) tanpa menyelesaikan akar persoalan yang dikritik oleh masyarakat.\nOpsi D salah karena membiarkan kebebasan tanpa batas yang berisiko memperluas disinformasi dan memicu perpecahan sosial.\nOpsi E salah karena menambah birokrasi dan kontrol ketat yang membatasi kreativitas pemuda di ruang digital."
  },
  {
    "prompt": "Seorang dokter muda yang baru lulus ditempatkan bertugas di daerah pelosok perbatasan negara yang minim fasilitas medis dan akses transportasi. Meskipun mendapat tawaran bekerja di rumah sakit swasta kota besar dengan gaji dan fasilitas jauh lebih tinggi, ia memilih tetap bertahan dan berinovasi melayani masyarakat lokal. Tindakan dokter tersebut paling tepat dikategorikan sebagai wujud sikap…",
    "choices": [
      "Patriotisme, karena menunjukkan rela berkorban dan mengabdi demi kepentingan bangsa di atas kepentingan pribadi.",
      "Chauvinisme, karena menganggap pelayanan medis di daerahnya adalah yang terbaik di dunia.",
      "Etnosentrisme, karena hanya mau melayani kelompok masyarakat dari suku yang sama dengannya.",
      "Korupsi nilai, karena menolak peluang kesejahteraan ekonomi yang ditawarkan oleh pihak swasta.",
      "Pragmatisme, karena memanfaatkan daerah perbatasan untuk mencari popularitas media."
    ],
    "answer": 0,
    "explanation": "Patriotisme adalah sikap rela berkorban jiwa dan raga demi keutuhan, kemajuan, dan kesejahteraan bangsa dan negara. Keberanian dan ketulusan dokter tersebut dalam memilih pelayanan di wilayah 3T serta menanggalkan kenyamanan pribadi demi kesehatan rakyat di perbatasan merupakan manifestasi nyata nilai patriotisme. Jadi, opsi A benar.\nOpsi B salah karena Chauvinisme adalah rasa cinta tanah air yang berlebihan hingga merendahkan bangsa lain.\nOpsi C salah karena Etnosentrisme adalah sikap mengagungkan suku sendiri dan merendahkan suku lain.\nOpsi D salah karena pengabdian tulus bukan bentuk korupsi nilai melainkan integritas moral tinggi.\nOpsi E salah karena pengabdian di daerah 3T lahir dari panggilan jiwa bela negara, bukan mencari popularitas rekayasa."
  },
  {
    "prompt": "Pertempuran 10 November 1945 di Surabaya merupakan salah satu peristiwa terbesar dalam sejarah pertahanan kemerdekaan Indonesia. Peristiwa ini tidak hanya melibatkan tentara resmi (TKR), tetapi juga santri, pemuda, buruh, dan masyarakat sipil dari berbagai latar belakang suku dan daerah. Makna nasionalisme yang paling mendalam dari peristiwa sejarah tersebut bagi generasi muda saat ini adalah…",
    "choices": [
      "Mengutamakan strategi pertempuran fisik bersenjata di atas pendekatan diplomasi dalam setiap penyelesaian perselisihan internasional.",
      "Mewujudkan solidaritas kolektif tanpa memandang latar belakang sosial demi mempertahankan kedaulatan dan martabat bangsa.",
      "Mengandalkan bantuan militer luar negeri untuk memperkuat daya tawar pertahanan negara.",
      "Memusatkan kekuatan politik nasional pada satu kelompok pimpinan untuk mempercepat pengambilan keputusan strategis.",
      "Menolak seluruh kerja sama internasional karena dianggap membawa potensi kolonialisme bentuk baru."
    ],
    "answer": 1,
    "explanation": "Pertempuran Surabaya menunjukkan manifestasi tertinggi dari nasionalisme rakyat (popular nationalism) dan solidaritas lintas elemen. Berbagai lapisan masyarakat meleburkan perbedaan status sosial, suku, dan agama demi satu tujuan bersama, yaitu mempertahankan kedaulatan Negara Republik Indonesia dari ancaman sekutu dan NICA. Nilai moral utama bagi generasi muda adalah semangat persatuan dan rasa tanggung jawab bersama dalam menjaga kedaulatan bangsa. Jadi, opsi B benar karena menekankan solidaritas kolektif lintas elemen.\nOpsi A salah karena perjuangan kemerdekaan Indonesia dilakukan secara seimbang melalui jalur diplomasi dan perjuangan fisik, bukan mengagungkan perang fisik semata.\nOpsi C salah karena Pertempuran Surabaya justru merupakan bukti kemandirian rakyat dan kekuatan internal bangsa tanpa bergantung pada bantuan asing.\nOpsi D salah karena memusatkan kekuatan secara sepihak bertentangan dengan prinsip persatuan inklusif dan kebersamaan.\nOpsi E salah karena nasionalisme Indonesia bersifat perikemanusiaan dan terbuka pada dunia internasional (bukan isolasionis/chauvinis)."
  },
  {
    "prompt": "Di sebuah kawasan permukiman heterogen, terjadi gesekan antarwarga akibat prasangka etnosentrisme yang dipicu oleh kesalahpahaman tradisi lokal. Masing-masing kelompok mengklaim aturan adatnya yang paling benar dan menolak berkompromi. Langkah penyelesaian paling tepat berbasis nilai Pancasila dan Nasionalisme Inklusif untuk mengatasi masalah tersebut adalah…",
    "choices": [
      "Mengusir kelompok pendatang agar warga asli dapat mempertahankan adat resminya.",
      "Membiarkan konflik berlangsung sampai salah satu kelompok mengaku kalah secara alami.",
      "Memfasilitasi ruang dialog musyawarah antar-tokoh adat untuk membangun kesepakatan bersama dan saling menghormati.",
      "Meminta pemerintah pusat memusnahkan seluruh tradisi lokal agar tidak ada perbedaan lagi.",
      "Membawa isu tersebut ke media sosial agar publik menghakimi kelompok yang bersalah."
    ],
    "answer": 2,
    "explanation": "Guna mengatasi tantangan etnosentrisme dalam masyarakat majemuk, pendekatan yang tepat adalah Nasionalisme Inklusif dan Musyawarah Mufakat (Sila ke-4 Pancasila). Melalui forum dialog, warga dapat saling mengenali, mengikis prasangka, dan membangun kesepakatan sosial yang saling menghormati keanekaragaman budaya (Bhinneka Tunggal Ika). Jadi, opsi C benar.\nOpsi A salah karena diskriminatif dan merusak keutuhan NKRI.\nOpsi B salah karena membiarkan konflik berpotensi memicu kerusuhan horizontal.\nOpsi D salah karena menghapus tradisi bertentangan dengan UUD 1945 Pasal 32 tentang kebudayaan nasional.\nOpsi E salah karena viralitas media sosial sering memprovokasi eskalasi konflik."
  },
  {
    "prompt": "Pemerintah merencanakan pembangunan fasilitas infrastruktur energi terbarukan di suatu wilayah pelosok demi mendukung kemandirian energi nasional. Namun, proyek tersebut mendapat penolakan keras dari masyarakat adat setempat karena dinilai mengganggu kawasan yang disucikan dan belum adanya dialog komprehensif terkait dampak lingkungan serta ruang hidup mereka. Sebagai bentuk aktualisasi nasionalisme yang inklusif dan berkeadilan, langkah terbaik yang seharusnya ditempuh pemerintah adalah…",
    "choices": [
      "Meneruskan proyek secara paksa dengan pengawalan aparat demi menjamin tercapainya target pembangunan nasional tepat waktu.",
      "Membatalkan secara total seluruh rencana pembangunan infrastruktur energi tersebut untuk menghindari perselisihan dengan warga.",
      "Memberikan ganti rugi uang dalam jumlah besar tanpa perlu mengubah desain atau lokasi fasilitas proyek yang direncanakan.",
      "Membuka dialog bermartabat untuk mendesain tata ruang proyek yang mengakomodasi keberadaan kawasan adat serta melibatkan warga dalam manfaat pembangunan.",
      "Mengalihkan pelaksanaan proyek kepada lembaga swadaya masyarakat setempat agar pemerintah lepas dari tanggung jawab sosial."
    ],
    "answer": 3,
    "explanation": "Nasionalisme yang selaras dengan nilai-nilai Pancasila harus bersifat inklusif, berkeadilan, dan menghormati hak-hak warga negara. Pembangunan nasional atas nama kepentingan umum tidak boleh mengabaikan atau menindas keberadaan masyarakat adat. Pendekatan yang berjiwa kebangsaan adalah mengutamakan musyawarah, partisipasi masyarakat, dan penyesuaian teknis agar tujuan kemandirian energi dan kelestarian kearifan lokal dapat berjalan seiring. Jadi, opsi D benar karena menjembatani agenda strategis negara dengan perlindungan hak masyarakat adat melalui musyawarah.\nOpsi A salah karena menerapkan pendekatan represif/otoriter yang mencederai prinsip kedaulatan rakyat dan keadilan sosial.\nOpsi B salah karena bersifat menyerah pada keadaan sehingga mengorbankan agenda kemandirian energi nasional.\nOpsi C salah karena memperlakukan hak adat dan kelestarian lingkungan secara transaksional tanpa menyelesaikan keprihatinan utama warga.\nOpsi E salah karena pemerintah mengabaikan kewajiban konstitusionalnya dalam mengelola pembangunan strategis."
  },
  {
    "prompt": "Sebuah karya seni tari dan motif kain tradisional khas dari suatu daerah di Indonesia secara sepihak dipatenkan dan dikomersialisasi oleh perusahaan fashion internasional tanpa izin serta tanpa pembagian manfaat bagi masyarakat adat pemilik warisan tersebut. Situasi ini memicu kemarahan publik di media sosial. Ditinjau dari semangat nasionalisme kebudayaan yang bermartabat dan konstruktif, langkah strategis yang seharusnya dilakukan oleh masyarakat bersama pemerintah adalah…",
    "choices": [
      "Mengobarkan boikot total terhadap seluruh produk buatan negara asal perusahaan tersebut secara emosional.",
      "Melakukan inventarisasi, mendaftarkan Hak Kekayaan Intelektual (HKI) Komunal ke lembaga internasional (UNESCO/WIPO), serta memperkuat diplomasi kebudayaan.",
      "Membiarkan klaim tersebut karena menganggap hal itu sebagai bentuk pengakuan internasional atas keindahan budaya Indonesia.",
      "Mengubah seluruh motif tradisional menjadi modern agar tidak lagi dikenali oleh pihak asing.",
      "Menghentikan pementasan seni tradisional agar tidak dapat dipelajari atau ditiru oleh masyarakat luar negeri."
    ],
    "answer": 1,
    "explanation": "Nasionalisme kebudayaan tidak diwujudkan melalui tindakan emosional atau isolasi, melainkan melalui perlindungan hukum yang tegas, dokumentasi resmi, dan diplomasi kebudayaan yang cerdas. Perlindungan terhadap Hak Kekayaan Intelektual (HKI) Komunal melalui jalur hukum resmi kenegaraan dan lembaga internasional seperti WIPO/UNESCO menjamin pengakuan atas kepemilikan warisan budaya sekaligus melindungi hak ekonomi masyarakat adat. Jadi, opsi B benar karena memadukan ketegangan perlindungan aset bangsa dengan cara-cara legal dan bermartabat.\nOpsi A salah karena bersifat reaktif dan chauvinistik tanpa memberikan perlindungan hukum nyata bagi karya budaya tersebut.\nOpsi C salah karena mencerminkan sikap pasrah dan pengabaian atas hak cipta komunal bangsa.\nOpsi D salah karena merusak keaslian dan nilai sejarah warisan budaya itu sendiri.\nOpsi E salah karena menghambat pelestarian budaya internal dan mematikan daya hidup seni tradisional."
  },
  {
    "prompt": "Lahirnya Budi Utomo pada tahun 1908 sering kali dianggap sebagai titik awal Kebangkitan Nasional Indonesia. Namun, jika dianalisis dari dinamika pergerakan kebangsaan saat itu, transformasi mendasar yang menandai peralihan dari perlawanan kedaerahan menuju pergerakan nasional modern adalah…",
    "choices": [
      "Perubahan dari perjuangan bersenjata menjadi perlawanan fisik diplomasi rahasia dengan pihak kolonial.",
      "Pengusulan sistem ekonomi tertutup tanpa intervensi pihak asing untuk menggantikan sistem tanam paksa.",
      "Pembentukan pasukan militer profesional independen yang bersiap melakukan serangan serentak di seluruh wilayah Nusantara.",
      "Penyerahan seluruh wewenang perjuangan kepada kaum terpelajar tanpa melibatkan partisipasi rakyat bawah.",
      "Perubahan dari perlawanan fisik yang tersentralisasi pada tokoh lokal menjadi perjuangan terorganisir dengan organisasi modern berwawasan nasional."
    ],
    "answer": 4,
    "explanation": "Kebangkitan Nasional 1908 mengubah paradigma perjuangan bangsa Indonesia. Perjuangan yang sebelumnya bersifat kedaerahan, bergantung pada kepemimpinan karismatik lokal, dan mudah dipatahkan dengan politik devide et impera, berubah menjadi perjuangan terorganisir secara modern melalui organisasi yang bersifat nasional dan lintas kedaerahan. Jadi, opsi E benar karena secara tepat mendeskripsikan perubahan mendasar dari perlawanan kedaerahan ke organisasi modern.\nOpsi A salah karena Budi Utomo tidak menggunakan diplomasi rahasia, melainkan pendekatan sosio-kultural dan pendidikan secara terbuka.\nOpsi B salah karena Budi Utomo awal berfokus pada pendidikan dan kebudayaan, bukan perancangan sistem ekonomi tertutup.\nOpsi C salah because pergerakan awal mengedepankan pendidikan dan kesadaran politik, bukan pembentukan militer.\nOpsi D salah karena pergerakan nasional bertujuan membangkitkan kesadaran seluruh rakyat, bukan mengisolasi peran rakyat."
  },
  {
    "prompt": "Bela negara di era modern tidak lagi terbatas pada angkat senjata, melainkan berorientasi pada kontribusi nyata bagi kemajuan bangsa. Manakah dari tindakan berikut yang paling mencerminkan sikap nasionalisme seorang profesional di bidangnya?",
    "choices": [
      "Menuntut hak dan fasilitas maksimal dari negara sebelum memberikan kontribusi kinerja pada pekerjaan.",
      "Mengukir prestasi di tingkat internasional serta menyumbangkan inovasi untuk menyelesaikan masalah masyarakat.",
      "Bekerja semata-mata untuk mengejar materi pribadi tanpa peduli pada dampak sosial lingkungan sekitar.",
      "Memanfaatkan jabatan publik untuk keuntungan finansial pribadi dan kelompok politiknya.",
      "Memilih pindah kewarganegaraan ketika menghadapi tantangan atau kesulitan hidup di dalam negeri."
    ],
    "answer": 1,
    "explanation": "Nasionalisme konstruktif ditunjukkan melalui dedikasi dan keahlian untuk mengharumkan nama bangsa serta membantu masyarakat. Perilaku mengukir prestasi internasional dan menyumbang inovasi lokal adalah wujud nyata bela negara non-fisik era modern. Jadi, opsi B benar karena menunjukkan kontribusi nyata dan kebanggaan pada kedaulatan bangsa.\nOpsi A salah karena mendahulukan hak sebelum kewajiban mencerminkan mementingkan diri sendiri daripada pengabdian.\nOpsi C salah karena bekerja hanya demi materi pribadi mengabaikan tanggung jawab sosial dan rasa cinta tanah air.\nOpsi D salah karena menyalahgunakan jabatan publik merupakan tindakan koruptif yang merugikan negara.\nOpsi E salah karena meninggalkan kewarganegaraan saat ada kesulitan menandakan lemahnya komitmen dan daya juang kebangsaan."
  },
  {
    "prompt": "Dalam merespons tantangan ekonomi global, pemerintah mengeluarkan berbagai regulasi untuk memperkuat rasa kebangsaan dan kemandirian nasional. Sebagai warga negara yang memiliki sikap nasionalisme yang reflektif dan adaptif, bentuk partisipasi terbaik dalam mendukung kebijakan kebangsaan tersebut adalah…",
    "choices": [
      "Mendorong proteksionisme ekstrem dengan menolak seluruh kerja sama ekonomi dan investasi dari pihak luar negeri.",
      "Menutup akses teknologi modern dari luar negeri demi memproteksi industri lokal yang belum mandiri.",
      "Menolak setiap ide baru dan budaya luar agar keaslian tradisi lokal tetap terjaga secara murni.",
      "Meningkatkan partisipasi aktif dalam kegiatan sosial-budaya serta memprioritaskan pemanfaatan produk dalam negeri.",
      "Menjauhi interaksi dengan komoditas internasional dan membatasi pergaulan diplomatik antarnegara."
    ],
    "answer": 3,
    "explanation": "Nasionalisme modern tidak bersifat isolasionis atau anti-asing, melainkan pro-kemandirian dan berorientasi pada pemberdayaan potensi dalam negeri. Bentuk partisipasi paling nyata dari masyarakat adalah aktif dalam kegiatan sosial-budaya nasional serta mengutamakan produk dalam negeri. Hal ini secara langsung menguatkan identitas sekaligus perekonomian bangsa. Jadi, opsi D benar karena mencerminkan nasionalisme positif yang konstruktif dan nyata.\nOpsi A salah karena proteksionisme ekstrem akan menglisolasi negara dari rantai pasok dan dinamika ekonomi global.\nOpsi B salah karena menolak teknologi luar justru menghambat efisiensi dan kemajuan industri dalam negeri.\nOpsi C salah karena menutup diri dari gagasan baru mencerminkan nasionalisme sempit (chauvinisme) yang mematikan inovasi.\nOpsi E salah karena membatasi pergaulan diplomatik bertentangan dengan prinsip politik luar negeri bebas aktif."
  },
  {
    "prompt": "Sumpah Pemuda 1928 merupakan titik krusial dalam sejarah nasionalisme Indonesia yang berhasil menyatukan pemuda dari berbagai latar belakang kedaerahan (Jung Java, Jong Sumatra, dll). Nilai filosofis utama dari peristiwa Sumpah Pemuda yang paling relevan untuk menjaga keutuhan bangsa Indonesia di tengah isu SARA saat ini adalah…",
    "choices": [
      "Menciptakan keseragaman budaya tunggal dan menghapus seluruh identitas serta kearifan lokal.",
      "Mewajibkan penggunaan satu agama resmi untuk memperkuat ikatan spiritual antar pemuda.",
      "Menolak seluruh bentuk kerja sama dengan etnis minoritas demi menjaga dominasi pemuda lokal.",
      "Meleburkan identitas kesukuan dan kedaerahan menjadi kesadaran satu bangsa tanpa menghilangkan keberagaman.",
      "Mengutamakan kepentingan pemuda Jawa sebagai penggerak utama pergerakan nasional saat itu."
    ],
    "answer": 3,
    "explanation": "Konstruksi nasionalisme Indonesia yang dicetuskan dalam Sumpah Pemuda bersifat inklusif (unity in diversity). Para pemuda tidak menghapus identitas suku atau daerah mereka, melainkan menyatukan beragam identitas tersebut dalam satu kesadaran berbangsa, berdarah air, dan berbahasa satu yaitu Indonesia. Nilai ini sangat krusial untuk menangkal gesekan SARA saat ini. Jadi, opsi D benar karena menekankan konsensus persatuan tanpa menghapus keberagaman lokal.\nOpsi A salah karena Sumpah Pemuda bukan bertujuan memaksakan homogenitas tunggal yang mematikan kebudayaan lokal.\nOpsi B salah karena Sumpah Pemuda berdiri di atas semangat kebangsaan lintas agama.\nOpsi C salah karena pergerakan pemuda bersifat terbuka dan inklusif bagi seluruh etnis di Nusantara.\nOpsi E salah karena Sumpah Pemuda melibatkan perwakilan pemuda dari seluruh penjuru wilayah Nusantara."
  },
  {
    "prompt": "Di era modernisasi, masuknya budaya populer asing (pop culture) melalui platform digital melanda generasi muda Indonesia. Fenomena ini kerap memicu sikap kebarat-baratan (westernisasi), meningkatnya gaya hidup konsumtif, dan menurunnya kebanggaan terhadap kebudayaan nasional. Strategi paling tepat berbasis nilai nasionalisme untuk merespons ancaman tersebut adalah…",
    "choices": [
      "Menumbuhkan literasi budaya serta mengemas kearifan lokal secara kreatif dan modern agar mampu bersaing ditingkat global.",
      "Memblokir seluruh akses internet dan media sosial yang menampilkan kebudayaan serta tren dari luar negeri.",
      "Melarang generasi muda mengadopsi bahasa asing dalam interaksi sehari-hari di lingkungan pendidikan.",
      "Mewajibkan penggunaan pakaian adat nasional secara penuh dalam seluruh kegiatan kemasyarakatan sehari-hari.",
      "Mengisolasi diri dari perkembangan tren dunia dan menolak secara mutlak seluruh bentuk modernisasi."
    ],
    "answer": 0,
    "explanation": "Menghadapi gempuran budaya asing di era digital tidak bisa dengan cara-cara represif atau isolatif. Nasionalisme modern menuntut kita untuk membangun literasi budaya dan menginovasikan kebudayaan lokal dengan kemasan kreatif/modern agar tetap menarik bagi generasi muda sekaligus bersaing secara global. Jadi, opsi A benar karena merupakan solusi adaptif yang menguatkan jati diri bangsa.\nOpsi B salah karena memblokir internet secara total adalah tindakan yang tidak realistis dan menghambat kemajuan.\nOpsi C salah karena penguasaan bahasa asing justru diperlukan untuk membangun daya saing internasional.\nOpsi D salah karena memaksakan pakaian adat secara terus-menerus bersifat simbolis-kaku tanpa menyentuh substansi nasionalisme.\nOpsi E salah karena menolak modernisasi akan membuat bangsa tertinggal dari peradaban dunia."
  },
  {
    "prompt": "Korupsi, kolusi, dan nepotisme (KKN) merupakan ancaman laten yang merusak sendi-sendi nasionalisme dan meruntuhkan kepercayaan rakyat terhadap negara. Jika seorang pejabat publik dihadapkan pada tekanan dari pihak tertentu untuk memenangkan vendor keluarga dalam proyek pengadaan barang/jasa pemerintah, tindakan yang mencerminkan jiwa nasionalisme sejati adalah…",
    "choices": [
      "Menolak dengan tegas segala bentuk intervensi dan menjalankan proses pengadaan secara transparan, akuntabel, dan profesional.",
      "Menerima usulan tersebut dengan syarat vendor keluarga memberikan potongan harga khusus untuk instansi.",
      "Mengundurkan diri secara diam-diam dari jabatan agar tidak terlihat dalam konflik kepentingan tanpa melaporkan pelanggaran.",
      "Membantu meloloskan vendor keluarga tersebut selama dokumen persyaratan administrasi tampak formal dan sah.",
      "Menyerahkan keputusan pemenang pengadaan secara subjektif kepada rekan sejawat untuk menghindari tanggung jawab pribadi."
    ],
    "answer": 0,
    "explanation": "Nasionalisme tidak hanya berwujud sikap terhadap luar negeri, tetapi juga diwujudkan melalui integritas dan kejujuran dalam membela kepentingan negara di dalam negeri. Menolak nepotisme dan menjaga transparansi pengadaan barang/jasa adalah bukti nyata menjaga keuangan negara dan keadilan publik. Jadi, opsi A benar karena mencerminkan integritas tinggi dan pengutamaan kepentingan bangsa di atas kepentingan pribadi/keluarga.\nOpsi B salah karena memberikan potongan harga tetap tidak menghilangkan unsur nepotisme dan pelanggaran hukum pengadaan.\nOpsi C salah karena pembiaran tanpa tindakan atau pelaporan merupakan sikap pembiaran terhadap potensi kejahatan keuangan negara.\nOpsi D salah karena meloloskan vendor secara formalitas merupakan tindakan manipulatif yang merusak sistem integritas.\nOpsi E salah melempar tanggung jawab tidak menghentikan praktik nepotisme dalam instansi."
  },
  {
    "prompt": "Perhatikan tiga pernyataan berikut:\n1) Rina bangga mengenakan batik dan rajin mempelajari sejarah perjuangan bangsa di waktu luangnya.\n2) Pak Budi rela melepaskan masa pensiunnya untuk menjadi relawan medis darurat saat terjadi bencana alam nasional.\n3) Kelompok X menolak bekerja sama dengan warga dari luar daerah karena menganggap kebudayaan daerahnya paling mulia dan paling unggul.\n\nSecara berurutan, konsep nasionalisme yang tepat untuk menggambarkan perilaku Rina, Pak Budi, dan Kelompok X adalah…",
    "choices": [
      "Cinta Tanah Air, Patriotisme, dan Etnosentrisme",
      "Patriotisme, Cinta Tanah Air, dan Chauvinisme",
      "Etnosentrisme, Patriotisme, dan Nasionalisme Sempit",
      "Cinta Tanah Air, Etnosentrisme, dan Patriotisme",
      "Nasionalisme Radikal, Cinta Tanah Air, dan Primordialisme"
    ],
    "answer": 0,
    "explanation": "Analisis Konsep:\n1) Rina: Menunjukkan kebanggaan, kasih sayang, dan ketertarikan pada budaya/identitas bangsa -> Cinta Tanah Air.\n2) Pak Budi: Menunjukkan tindakan nyata berupa pengorbanan tenaga, waktu, dan rasa kemanusiaan demi bangsa -> Patriotisme (Rela Berkorban).\n3) Kelompok X: Memandang budayanya paling unggul dan memandang rendah/menolak kelompok lain -> Etnosentrisme.\nDengan demikian, urutan yang tepat adalah opsi A.\nOpsi B salah karena urutan Rina dan Pak Budi tertukar, serta Kelompok X mencerminkan etnosentrisme.\nOpsi C salah karena Rina bukan mencerminkan etnosentrisme.\nOpsi D salah karena Pak Budi bukan mencerminkan etnosentrisme.\nOpsi E salah karena Rina bukan nasionalisme radikal."
  },
  {
    "prompt": "Banyak peneliti dan talenta muda terbaik Indonesia memilih bekerja di luar negeri karena fasilitas riset dan penghargaan yang lebih menjanjikan. Fenomena brain drain ini mengancam kemajuan iptek nasional. Ditinjau dari sudut pandang nasionalisme yang dewasa, sikap terbaik yang harus diambil oleh ilmuwan Indonesia di luar negeri adalah…",
    "choices": [
      "Melepaskan status kewarganegaraan Indonesia dan memfokuskan seluruh karyanya hanya untuk negara tempatnya bekerja.",
      "Tetap menjalin jejaring, melakukan transfer teknologi, dan menyumbangkan hasil risetnya bagi kemajuan Indonesia.",
      "Menolak semua tawaran kolaborasi dengan lembaga penelitian dari Indonesia sampai fasilitas dalam negeri disetarakan.",
      "Mengecam pemerintah secara terbuka di media internasional tanpa memberikan masukan atau solusi konkret.",
      "Mengajak seluruh peneliti di Indonesia untuk meninggalkan tanah air guna mencari kesejahteraan pribadi."
    ],
    "answer": 1,
    "explanation": "Nasionalisme tidak dibatasi oleh ruang geografis keberadaan seseorang, melainkan oleh komitmen dan kontribusinya kepada tanah air. Walaupun berada di luar negeri, seorang ilmuwan tetap dapat menunjukkan jiwa nasionalismenya melalui transfer pengetahuan, kolaborasi riset, dan kontribusi nyata bagi pengembangan iptek dalam negeri. Jadi, opsi B benar karena mencerminkan sikap nasionalisme adaptif yang berkontribusi tanpa batas wilayah.\nOpsi A salah karena melepaskan kewarganegaraan dan melupakan tanah air menandakan hilangnya keterikatan dan komitmen kebangsaan.\nOpsi C salah karena menolak kolaborasi secara mutlak menghambat proses transfer ilmu bagi kemajuan bangsa.\nOpsi D salah karena mengecam tanpa solusi tidak memberikan dampak positif bagi perbaikan sistem riset nasional.\nOpsi E salah karena memprovokasi eksodus ilmuwan justru memperparah krisis SDM berkualifikasi di dalam negeri."
  },
  {
    "prompt": "Pasal 33 ayat (3) UUD 1945 mengamanatkan bahwa bumi, air, dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat. Namun, selama bertahun-tahun Indonesia cenderung mengeksplorasi dan mengekspor bahan mentah tanpa pengolahan. Langkah nyata ASN sebagai pelaksana kebijakan publik dalam mendukung nasionalisme pengelolaan sumber daya alam saat ini adalah…",
    "choices": [
      "Mengusulkan privatisasi seluruh tambang nasional kepada perusahaan swasta asing agar pengelolaan lebih efisien.",
      "Mendukung dan mengawal regulasi hilirisasi industri untuk memberikan nilai tambah bagi perekonomian nasional.",
      "Membiarkan penambangan liar berkembang pesat demi meningkatkan pendapatan ekonomi masyarakat lokal secara cepat.",
      "Mendorong penghentian seluruh eksploitasi kekayaan alam tanpa menyediakan energi alternatif bagi masyarakat.",
      "Menjual cadangan minyak dan mineral strategis kepada pihak luar negeri guna menambah cadangan devisa negara."
    ],
    "answer": 1,
    "explanation": "Penerapan nilai nasionalisme dalam Pasal 33 UUD 1945 di era modern diwujudkan melalui kebijakan hilirisasi. ASN bertugas mengawal dan merealisasikan kebijakan hilirisasi agar sumber daya alam diolah di dalam negeri, menciptakan lapangan kerja, dan memberikan nilai tambah maksimal bagi kemakmuran rakyat. Jadi, opsi B benar karena mencerminkan pengelolaan SDA yang berorientasi pada kedaulatan ekonomi nasional.\nOpsi A salah karena privatisasi total ke pihak asing mencederai amanat Pasal 33 UUD 1945.\nOpsi C salah karena penambangan liar merusak lingkungan dan melanggar hukum negara.\nOpsi D salah karena menghentikan total tanpa alternatif akan Lumpuhkan perekonomian dan pasokan energi nasional.\nOpsi E salah karena obral cadangan strategis ke asing mengancam ketahanan energi dan kedaulatan nasional."
  },
  {
    "prompt": "Nasionalisme yang sehat merupakan pilar utama pemersatu bangsa. Namun, ketika nasionalisme berkembang menjadi etnosentrisme, fanatisme berlebihan, dan chauvinisme, hal itu justru mengancam keutuhan NKRI. Di bawah ini yang bukan merupakan karakteristik atau manifestasi dari nasionalisme sempit yang merusak persatuan adalah…",
    "choices": [
      "Menganggap kebudayaan dan etnis sendiri jauh lebih unggul dibandingkan etnis lain di dalam negeri.",
      "Menolak keberadaan kelompok minoritas dalam kontestasi politik dan jabatan publik berbasis meritokrasi.",
      "Mengembangkan kesadaran kolektif yang menghargai hak asasi manusia serta keadilan sosial bagi seluruh warga.",
      "Membenarkan tindakan persekusi dan diskriminasi terhadap kelompok yang memiliki pandangan berbeda.",
      "Memprovokasi isu SARA untuk memicu sentimen kebencian antar wilayah dalam pemilu."
    ],
    "answer": 2,
    "explanation": "Soal meminta untuk menentukan hal yang BUKAN merupakan manifestasi dari nasionalisme sempit/ekstrem. Menghargai hak asasi manusia dan menjunjung keadilan sosial bagi seluruh warga negara merupakan prinsip dasar nasionalisme positif yang berlandaskan Pancasila (Sila ke-2 dan ke-5). Opsi A, B, D, dan E merupakan bentuk-bentuk penyimpangan nasionalisme (chauvinisme & diskriminasi). Jadi, opsi C benar karena penghargaan pada HAM dan keadilan sosial adalah pilar nasionalisme yang sehat.\nOpsi A salah karena menganggap etnis sendiri unggul merupakan sikap etnosentrisme yang merusak persatuan.\nOpsi B salah karena menolak minoritas dalam politik meritokrasi merupakan diskriminasi politik yang mencederai demokrasi.\nOpsi D salah karena membenarkan persekusi merupakan tindakan intoleran yang melanggar hukum dan Pancasila.\nOpsi E salah karena eksploitasi isu SARA dapat memicu disintegrasi dan konflik horizontal."
  },
  {
    "prompt": "Ancaman terhadap kedaulatan negara modern kini tidak lagi berbentuk invasi militer secara fisik, melainkan perang siber (cyber warfare) dan pencurian data strategis nasional. Sebagai seorang pakar teknologi yang berjiwa nasionalis, bentuk kontribusi bela negara yang paling relevan dalam menghadapi ancaman tersebut adalah…",
    "choices": [
      "Meretas sistem data milik negara lain sebagai bentuk pembalasan atas serangan siber yang diterima.",
      "Mengembangkan sistem keamanan siber mandiri berbasis produk lokal guna melindungi data vital negara.",
      "Menghentikan penggunaan seluruh jaringan internet di instansi pemerintah agar terhindar dari kebocoran data.",
      "Menyerahkan pengelolaan sistem keamanan data nasional kepada perusahaan asing terkemuka demi hasil maksimal.",
      "Menyebarkan kepanikan publik di media sosial mengenai kelemahan infrastruktur teknologi pemerintah."
    ],
    "answer": 1,
    "explanation": "Bela negara di era digital diwujudkan dengan menjaga kedaulatan siber (cyber sovereignty). Langkah konkret pakar teknologi nasionalis adalah mengembangkan dan menguatkan infrastruktur keamanan siber mandiri agar data vital bangsa tidak tergantung pada pihak asing. Jadi, opsi B benar karena menunjukkan kontribusi nyata dalam mewujudkan kemandirian dan ketahanan siber nasional.\nOpsi A salah karena tindakan peretasan balasan secara ilegal dapat memicu eskalasi konflik diplomatik antarnegara.\nOpsi C salah karena mematikan jaringan internet justru Lumpuhkan pelayanan publik dan perekonomian nasional.\nOpsi D salah karena menyerahkan data vital ke pihak asing mencederai kedaulatan dan rahasia negara.\nOpsi E salah karena memprovokasi kepanikan publik merupakan tindakan destruktif yang melemahkan ketahanan nasional."
  },
  {
    "prompt": "Dalam era komunikasi digital global, penggunaan bahasa gaul asing (*code-mixing*) semakin dominan di kalangan remaja hingga menggeser kebiasaan berbahasa Indonesia yang baik dan benar. Sebagai seorang pendidik yang berjiwa nasionalis, strategi paling bijaksana untuk menjaga kedudukan Bahasa Indonesia sebagai bahasa persatuan adalah…",
    "choices": [
      "Memberikan sanksi berat dan melarang total penggunaan kata-kata bahasa asing dalam interaksi informal siswa.",
      "Menumbuhkan kebanggaan berbahasa Indonesia melalui pembelajaran yang kontekstual dan ruang ekspresi karya sastra digital yang menarik.",
      "Membiarkan pergeseran bahasa terjadi secara alami tanpa perlu adanya intervensi dari lembaga pendidikan.",
      "Mewajibkan siswa berkomunikasi menggunakan bahasa daerah masing-masing di sekolah untuk menggantikan bahasa asing.",
      "Menutup akses terhadap literatur asing agar siswa hanya membaca karya berbahasa Indonesia."
    ],
    "answer": 1,
    "explanation": "Bahasa Indonesia adalah jati diri dan alat pemersatu bangsa (Sumpah Pemuda 1928 & UUD 1945). Penguatan kedudukan bahasa nasional di era modern harus dilakukan melalui pendekatan persuasif dan inovatif yang menumbuhkan kebanggaan, bukan dengan larangan yang represif. Jadi, opsi B benar karena menekankan pembinaan kebanggaan berbahasa melalui metode edukatif dan kreatif.\nOpsi A salah karena sanksi represif justru memicu resistensi dan antipati di kalangan remaja.\nOpsi C salah karena pembiaran dapat membuat Bahasa Indonesia kehilangan kedudukan utamanya sebagai alat pemersatu.\nOpsi D salah karena memaksakan bahasa daerah di lingkungan umum sekolah heterogen dapat menghambat komunikasi antar SARA.\nOpsi E salah karena menutup akses literatur asing akan menurunkan daya saing wawasan global siswa."
  },
  {
    "prompt": "Di era disrupsi digital, ancaman terhadap kedaulatan negara tidak lagi sebatas pertempuran fisik di perbatasan, melainkan peretasan data nasional, pencurian data pribadi warga, dan serangan siber pada infrastruktur vital. Sikap ASN dan warga negara yang mencerminkan digital nationalism (nasionalisme digital) adalah…",
    "choices": [
      "Mengabaikan ancaman siber karena menganggap perlindungan data merupakan tugas penuh Kementerian Komunikasi.",
      "Menggunakan software bajakan dari luar negeri demi menghemat anggaran operasional instansi pemerintah.",
      "Menyebarkan informasi rahasia negara ke media sosial untuk membuktikan transparansi kepada publik.",
      "Menutup seluruh jaringan internet di Indonesia agar terhindar secara mutlak dari serangan peretas asing.",
      "Aktif memperkuat literasi keamanan data pribadi serta mendukung pengembangan teknologi sistem siber mandiri karya anak bangsa."
    ],
    "answer": 4,
    "explanation": "Nasionalisme digital di era modern mewajibkan setiap warga negara dan ASN untuk menjaga kedaulatan data nasional serta mendorong kemandirian teknologi siber dalam negeri. Hal ini mencakup penerapan budaya sadar keamanan data (cyber hygiene) dan pengembangan sistem keamanan buatan lokal. Jadi, opsi E benar karena mencerminkan upaya konkret menjaga kedaulatan digital bangsa.\nOpsi A salah karena keamanan siber merupakan tanggung jawab kolektif seluruh pengguna ruang digital.\nOpsi B salah karena penggunaan software bajakan menciptakan celah keamanan dan melanggar HAKI.\nOpsi C salah karena membocorkan dokumen rahasia negara adalah tindakan pengkhianatan terhadap keamanan nasional.\nOpsi D salah karena memutus internet total akan Melumpuhkan aktivitas ekonomi dan komunikasi nasional."
  },
  {
    "prompt": "Seorang ASN di bidang pelayanan kesehatan ditugaskan di wilayah 3T (Tertinggal, Terdepan, dan Terluar) yang memiliki fasilitas terbatas dan akses geografis yang sangat sulit. Meskipun mendapat tawaran pindah ke kota besar dengan fasilitas nyaman, ASN tersebut memilih bertahan demi memastikan masyarakat perbatasan mendapatkan hak pelayanan medis. Sikap ASN tersebut merupakan cerminan dari…",
    "choices": [
      "Kepasrahan pada nasib karena tidak memiliki akses koneksi politik untuk mengurus kepindahan ke kota.",
      "Kesadaran bela negara dan nasionalisme sektoral yang menolak integrasi dengan wilayah urban.",
      "Bentuk pengabdian tulus serta rasa cinta tanah air dengan mengutamakan kepentingan publik di atas kenyamanan pribadi.",
      "Sikap chauvinistik terhadap daerah asal penugasan yang menganggap wilayah lain tidak memiliki masalah kesehatan.",
      "Upaya mencari popularitas media sosial demi mendapatkan penghargaan dari pemerintah pusat."
    ],
    "answer": 2,
    "explanation": "Nasionalisme dan bela negara bagi seorang ASN diwujudkan melalui dedikasi, integritas, dan pengorbanan dalam menjalankan tugas di mana pun di wilayah NKRI. Bertahan di wilayah 3T demi pelayanan rakyat adalah bukti pengutamaan kepentingan bangsa di atas kepentingan pribadi. Jadi, opsi C benar karena menunjukkan rasa cinta tanah air dan pengabdian tulus ASN.\nOpsi A salah karena menyimpulkan keputusan sebagai kepasrahan merendahkan nilai integritas dan komitmen ASN.\nOpsi B salah karena sikap tersebut bukan 'nasionalisme sektoral', melainkan Wujud nasionalisme Indonesia yang utuh.\nOpsi D salah karena tidak ada unsur chauvinisme dalam memberikan pelayanan kesehatan dasar bagi rakyat perbatasan.\nOpsi E salah karena mengasumsikan niat pencarian popularitas tidak berdasar dan mengabaikan nilai pengabdian."
  },
  {
    "prompt": "Di suatu permukiman perkotaan yang mayoritas warganya bekerja sebagai profesional, kegiatan kerja bakti bulanan mengalami penurunan partisipasi secara signifikan. Sebagian besar warga, termasuk tokoh muda berpengaruh seperti Bu Elena, memilih membayar iuran pengganti keberadaan alih-alih hadir secara fisik dengan alasan efisiensi waktu dan kesibukan kerja. Meskipun fasilitas lingkungan tetap terawat karena menyewa tenaga kebersihan, interaksi tatap muka antarwarga menjadi sangat minim. Jika kondisi ini terus dibiarkan dalam jangka panjang, dampak paling mendasar yang mengancam nilai nasionalisme di tingkat lokal adalah…",
    "choices": [
      "Menurunnya tingkat kebersihan dan fungsi fasilitas umum lingkungan akibat kurangnya pengawasan warga.",
      "Hilangnya kesadaran warga dalam membayar iuran lingkungan karena menganggap kebersihan adalah tanggung jawab pemerintah.",
      "Meningkatnya potensi konflik antarkelompok karena warga tidak saling mengenal kebiasaan dan latar belakang satu sama lain.",
      "Terkikisnya empati sosial dan rasa kebersamaan yang menjadi fondasi ikatan kebangsaan akibat komodifikasi kewajiban bermasyarakat.",
      "Melemahnya peran pengurus RT/RW dalam mengatur kewajiban warga karena aturan yang tidak tegas."
    ],
    "answer": 3,
    "explanation": "Nasionalisme tidak hanya diukur dari simbol negara, melainkan dari ikatan emosional dan empati sosial yang dibangun melalui gotong royong serta interaksi langsung antarwarga. Ketika kewajiban sosial digantikan semata-mata dengan uang (komodifikasi), rasa memiliki dan kepedulian terhadap kepentingan bersama akan memudar dan digantikan oleh sikap transaksional. Dampak mendalamnya adalah hilangnya rasa kebersamaan yang menjadi akar dari persatuan nasional. Jadi, opsi D benar karena menyoroti ancaman mendasar terhadap jiwa nasionalisme di tingkat tapak akibat komodifikasi relasi sosial.\n\nOpsi A salah karena hanya berfokus pada dampak fisik/infrastruktur, bukan pada esensi nilai nasionalisme atau modal sosial warga.\nOpsi B salah karena hanya menyoroti masalah administratif keuangan, yang belum tentu terjadi karena warga justru rajin membayar iuran pengganti.\nOpsi C salah karena konflik antar wilayah merupakan dampak sekunder, bukan akar masalah utama dari pudarnya jiwa nasionalisme warga.\nOpsi E salah karena terlalu berfokus pada kepemimpinan lokal/birokrasi RT/RW, bukan pada pergeseran nilai kebangsaan dalam masyarakat"
  }
];

export const NASIONALISME_DRILL_QUESTIONS: Question[] = nasionalismeSeeds.map((seed, index) => ({
  id: `twk-nasionalisme-${String(index + 1).padStart(3, "0")}`,
  category: "TWK",
  topic: "Nasionalisme",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: choiceIndex === seed.answer ? 5 : 0,
  })),
  explanation: seed.explanation,
}));
