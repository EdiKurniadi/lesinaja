import type { ExamPackage, Question } from "./types";

type IpaSeed = {
  topic: string;
  prompt: string;
  choices: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
};

const IPA_SEEDS: IpaSeed[] = [
  {
    topic: "Ekosistem",
    prompt:
      "Dalam sebuah kegiatan pengamatan ekosistem di sekitar sekolah, siswa mencatat adanya tanah, air, cahaya matahari, suhu udara, rumput, serangga, dan jamur. Guru meminta mereka mengelompokkan komponen yang tidak hidup tetapi memengaruhi kelangsungan ekosistem. Komponen yang termasuk kelompok abiotik, kecuali ....",
    choices: [
      "Tanah yang menjadi tempat tumbuh dan berkembangnya organisme",
      "Air yang dibutuhkan tumbuhan dan hewan untuk bertahan hidup",
      "Suhu udara yang memengaruhi aktivitas organisme",
      "Jamur yang menguraikan sisa makhluk hidup menjadi zat sederhana",
      "Cahaya matahari yang menjadi sumber energi bagi tumbuhan",
    ],
    correctIndex: 3,
    explanation:
      "Jamur adalah makhluk hidup (komponen biotik) yang berperan sebagai pengurai, sedangkan tanah, air, suhu udara, dan cahaya matahari adalah komponen tak hidup (abiotik).",
  },
  {
    topic: "Ekosistem",
    prompt:
      "Di suatu padang rumput terdapat rantai makanan rumput → belalang → katak → ular → elang. Dalam beberapa bulan terakhir, penggunaan pestisida menyebabkan populasi katak menurun tajam. Jika hubungan makan-dimakan tersebut berlangsung tanpa perubahan besar dari faktor lain, perubahan yang paling mungkin terjadi adalah ....",
    choices: [
      "Populasi belalang menurun karena kehilangan pemangsa, sedangkan ular dan elang memperoleh makanan lebih banyak",
      "Populasi rumput menurun karena belalang semakin banyak, sementara populasi ular dan elang cenderung menurun",
      "Seluruh populasi tetap seimbang karena setiap organisme dapat mengganti sumber makanannya secara langsung",
      "Populasi ular meningkat karena katak semakin sedikit, sedangkan elang tetap stabil karena memperoleh mangsa dari ular",
      "Populasi belalang meningkat karena tekanan pemangsaan berkurang, sedangkan ular dan elang berisiko menurun akibat berkurangnya makanan",
    ],
    correctIndex: 4,
    explanation:
      "Saat katak (pemangsa belalang dan mangsa ular) menurun tajam, populasi belalang meningkat karena berkurangnya pemangsa, sedangkan ular dan elang berisiko menurun karena sumber makanannya berkurang.",
  },
  {
    topic: "Ekosistem",
    prompt:
      "Di sebuah lahan pertanian, ular berperan sebagai pemangsa tikus. Petani kemudian memburu ular karena dianggap membahayakan ternak. Beberapa waktu setelah jumlah ular berkurang, petani justru menemukan lebih banyak tanaman padi yang rusak akibat gigitan tikus. Penjelasan yang paling tepat untuk peristiwa tersebut adalah ....",
    choices: [
      "Tikus berubah menjadi organisme pengurai ketika jumlah ular di lingkungan berkurang",
      "Populasi tikus menurun karena ular yang tersisa akan memangsa tikus dalam jumlah lebih banyak",
      "Tikus kehilangan salah satu pemangsanya sehingga peluang hidup dan jumlah populasinya dapat meningkat",
      "Tikus kekurangan makanan karena ular biasanya membantu menyediakan sisa makanan bagi tikus",
      "Jumlah tikus tidak berkaitan dengan keberadaan ular karena keduanya menempati tingkat trofik yang sama",
    ],
    correctIndex: 2,
    explanation:
      "Ular adalah predator alami tikus. Berkurangnya jumlah ular menghilangkan kendali pemangsaan sehingga populasi tikus meningkat dan merusak lebih banyak padi.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Seorang siswa berlari mengelilingi lapangan. Setelah beberapa putaran, ia bernapas lebih cepat dan merasakan dadanya bergerak lebih kuat. Guru menjelaskan bahwa oksigen dari udara perlu masuk ke tubuh dan kemudian digunakan dalam proses menghasilkan energi. Organ yang menjadi bagian utama jalur masuk dan pertukaran gas pernapasan manusia adalah ....",
    choices: [
      "Lambung dan usus, karena keduanya mengolah makanan menjadi sumber energi",
      "Otak dan sumsum tulang belakang, karena keduanya mengatur seluruh gerakan tubuh",
      "Ginjal dan ureter, karena keduanya menyaring zat sisa dari darah",
      "Paru-paru dan saluran pernapasan seperti bronkus, karena udara masuk dan pertukaran gas berlangsung di paru-paru",
      "Jantung dan pembuluh darah, karena keduanya mengedarkan darah ke seluruh tubuh",
    ],
    correctIndex: 3,
    explanation:
      "Saluran pernapasan (seperti bronkus) mengantarkan udara ke paru-paru (alveolus) sebagai tempat utama pertukaran gas oksigen dan karbon dioksida.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Ketika mengamati beberapa organisme, siswa menemukan bahwa tumbuhan, hewan, jamur, dan bakteri memiliki bentuk serta cara hidup yang berbeda. Ada organisme yang tidak berpindah tempat, ada yang tidak memiliki alat pencernaan, dan ada pula yang tidak dapat membuat makanan sendiri. Meskipun demikian, salah satu ciri berikut dimiliki oleh semua makhluk hidup, yaitu ....",
    choices: [
      "Menghasilkan keturunan melalui perkawinan antara dua individu",
      "Mampu melakukan fotosintesis dengan bantuan cahaya matahari",
      "Melakukan respirasi untuk memperoleh energi dari zat makanan",
      "Memiliki organ pencernaan khusus untuk memecah makanan yang dikonsumsi",
      "Mampu berpindah tempat dari satu lokasi ke lokasi lain dengan menggunakan alat gerak",
    ],
    correctIndex: 2,
    explanation:
      "Seluruh makhluk hidup melakukan respirasi (bernapas / respirasi seluler) untuk menghasilkan energi yang menopang aktivitas kehidupannya.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Seorang siswa mengukur tinggi tanaman kacang hijau setiap dua hari. Pada awal pengamatan tinggi tanaman 4 cm, kemudian menjadi 7 cm dan akhirnya 12 cm. Ia menyimpulkan bahwa tanaman mengalami pertumbuhan. Indikator yang paling tepat untuk mendukung kesimpulan tersebut adalah ....",
    choices: [
      "Tanaman menghasilkan bunga sebagai tanda memasuki tahap reproduksi",
      "Terjadi pertambahan ukuran atau massa tubuh yang dapat diukur secara kuantitatif",
      "Tanaman mampu bertahan hidup ketika kondisi lingkungan berubah",
      "Daun tanaman berubah posisi ketika disentuh oleh tangan pengamat",
      "Tanaman mulai menghadap ke arah datangnya cahaya dari jendela",
    ],
    correctIndex: 1,
    explanation:
      "Pertumbuhan merupakan proses bertambahnya ukuran, tinggi, volume, atau massa tubuh yang bersifat kuantitatif dan dapat diukur.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Dalam kegiatan praktik, siswa membandingkan tanaman yang mendapat cukup air dan cahaya dengan tanaman yang tidak memperoleh kebutuhan tersebut. Tanaman yang tumbuh baik memiliki jaringan dan organ yang berkembang serta mampu menjalankan berbagai aktivitas kehidupannya. Secara umum, makanan atau zat nutrisi dibutuhkan makhluk hidup terutama untuk ....",
    choices: [
      "Menggantikan fungsi air dan udara dalam seluruh proses kehidupan",
      "Memungkinkan semua makhluk hidup berpindah tempat dengan cepat",
      "Membentuk suara agar dapat berkomunikasi dengan organisme lain",
      "Menghasilkan energi dan menyediakan bahan untuk pertumbuhan serta perbaikan sel",
      "Mengubah seluruh organisme menjadi mampu melakukan fotosintesis",
    ],
    correctIndex: 3,
    explanation:
      "Zat makanan/nutrisi menyediakan energi bagi metabolisme serta bahan penyusun untuk pertumbuhan dan perbaikan sel/jaringan tubuh.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Seekor kucing melahirkan beberapa anak. Anak-anak tersebut memiliki sejumlah ciri yang mirip dengan induknya, seperti bentuk telinga, jenis rambut, dan pola warna tubuh, meskipun ukuran tubuhnya masih kecil. Peristiwa tersebut paling tepat menunjukkan ciri makhluk hidup berupa ....",
    choices: [
      "Kemampuan memperbesar ukuran tubuh selama masa hidup",
      "Kemampuan melakukan pertukaran gas dengan lingkungan",
      "Kemampuan menanggapi rangsangan dari lingkungan sekitar",
      "Kemampuan berkembang biak dan mewariskan sifat kepada keturunannya",
      "Kemampuan menyesuaikan bentuk tubuh terhadap perubahan suhu",
    ],
    correctIndex: 3,
    explanation:
      "Melahirkan keturunan dengan sifat fisik mirip induk menunjukkan kemampuan berkembang biak (reproduksi) serta pewarisan sifat genetik.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Pada musim kemarau, tanaman di halaman sekolah tidak memperoleh air selama beberapa hari. Daunnya tampak kehilangan kesegaran, menggantung, dan sebagian mulai mengering. Perubahan tersebut paling mungkin terjadi karena ....",
    choices: [
      "Kekurangan air mengurangi tekanan turgor sel sehingga daun kehilangan kekakuannya dan menjadi layu",
      "Proses perkembangbiakan berlangsung terlalu cepat sehingga air berpindah ke bunga",
      "Tanaman memperoleh terlalu banyak mineral sehingga batang tidak mampu menopang daun",
      "Tanaman menerima cahaya berlebihan sehingga seluruh proses kehidupannya berhenti",
      "Akar tanaman menghasilkan oksigen terlalu banyak sehingga daun berubah warna",
    ],
    correctIndex: 0,
    explanation:
      "Kekurangan air menurunkan tekanan turgor di dalam vakuola sel tumbuhan sehingga sel kehilangan kekakuan dan daun menjadi layu.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Sebuah tanaman hias diletakkan di dalam kardus tertutup yang hampir tidak dapat ditembus cahaya selama beberapa hari. Tanaman tersebut tetap disiram, tetapi daunnya perlahan tampak pucat dan menguning. Berdasarkan kebutuhan dasar tumbuhan, faktor yang paling langsung tidak terpenuhi dalam kondisi tersebut adalah ....",
    choices: [
      "Karbon dioksida sebagai bahan baku fotosintesis yang berasal dari udara",
      "Cahaya yang diperlukan sebagai sumber energi dalam proses fotosintesis",
      "Oksigen yang digunakan akar untuk melakukan respirasi",
      "Mineral yang tersedia di dalam tanah atau media tanam",
      "Air yang diserap oleh akar dari media tanam",
    ],
    correctIndex: 1,
    explanation:
      "Kardus tertutup menghalangi masuknya cahaya yang dibutuhkan klorofil sebagai sumber energi fotosintesis dan pembentukan klorofil baru.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Seorang siswa mengikuti tes kebugaran dengan berlari mengelilingi lapangan. Ketika aktivitas semakin berat, denyut nadinya meningkat dibandingkan saat ia duduk beristirahat. Perubahan tersebut merupakan respons tubuh untuk memenuhi kebutuhan jaringan yang sedang bekerja, terutama karena tubuh memerlukan ....",
    choices: [
      "Penghentian respirasi sel agar cadangan energi dapat disimpan lebih lama",
      "Pasokan oksigen dan zat makanan lebih cepat untuk mendukung peningkatan kebutuhan energi",
      "Penurunan aliran darah agar suhu tubuh tidak mengalami perubahan",
      "Pengurangan distribusi oksigen karena otot sedang menggunakan energi lebih sedikit",
      "Peningkatan jumlah makanan di dalam lambung secara langsung selama berlari",
    ],
    correctIndex: 1,
    explanation:
      "Saat berolahraga berat, sel otot membutuhkan pasokan oksigen dan nutrisi lebih cepat untuk respirasi seluler penghasil energi.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Dalam dua kegiatan olahraga dengan intensitas berbeda, seorang siswa mencatat denyut nadinya saat berjalan santai dan setelah berlari cepat. Denyut nadi setelah berlari lebih tinggi. Ia kemudian mengaitkan perubahan tersebut dengan kerja sistem peredaran darah. Alasan yang paling tepat adalah ....",
    choices: [
      "Tubuh tidak lagi membutuhkan oksigen ketika otot bekerja dengan intensitas tinggi",
      "Peningkatan denyut nadi terjadi karena proses pencernaan berlangsung lebih cepat daripada biasanya",
      "Jantung memompa darah lebih cepat untuk membantu mengirim oksigen dan nutrisi ke sel yang membutuhkan energi lebih besar",
      "Darah berhenti mengalir ke organ yang tidak digunakan sehingga denyut nadi meningkat",
      "Jantung memperlambat pemompaan darah agar tubuh tidak kehilangan cairan",
    ],
    correctIndex: 2,
    explanation:
      "Peningkatan denyut jantung mempercepat sirkulasi darah yang membawa oksigen dan nutrisi menuju jaringan otot yang bekerja keras.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Saat menyaksikan pertandingan sepak bola yang menegangkan, seorang penonton merasa jantungnya berdebar lebih cepat ketika tim kesayangannya hampir mencetak gol. Padahal, ia hanya duduk dan tidak melakukan aktivitas fisik berat. Peristiwa tersebut menunjukkan bahwa tubuh dapat memberikan respons terhadap ....",
    choices: [
      "Perubahan kadar air di dalam tanah",
      "Perubahan tekanan udara yang selalu terjadi di dalam ruangan",
      "Aktivitas pencernaan makanan yang sedang berlangsung",
      "Rangsangan emosi yang memengaruhi kerja sistem saraf dan denyut jantung",
      "Peningkatan intensitas cahaya yang diterima oleh kulit",
    ],
    correctIndex: 3,
    explanation:
      "Emosi atau ketegangan memicu sistem saraf otonom (dan hormon adrenalin) meningkatkan frekuensi detak jantung tanpa aktivitas otot berat.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Serangga kecil yang hidup di permukaan tanah sering bergerak menuju bagian tanah yang lebih lembap ketika kondisi lingkungan menjadi kering. Perilaku tersebut menunjukkan bahwa organisme mampu mengenali perubahan lingkungan dan memberikan tanggapan. Ciri makhluk hidup yang paling sesuai dengan peristiwa tersebut adalah ....",
    choices: [
      "Iritabilitas, karena serangga menanggapi rangsangan berupa perubahan kelembapan",
      "Metamorfosis, karena serangga mengalami perubahan bentuk tubuh",
      "Reproduksi, karena serangga sedang menghasilkan individu baru",
      "Respirasi, karena serangga mengambil oksigen dari lingkungan",
      "Pertumbuhan, karena ukuran tubuh serangga bertambah",
    ],
    correctIndex: 0,
    explanation:
      "Iritabilitas (peka terhadap rangsang) adalah kemampuan makhluk hidup mengenali dan merespons rangsangan lingkungan seperti kelembapan.",
  },
  {
    topic: "Adaptasi & Ciri Makhluk Hidup",
    prompt:
      "Ikan dapat hidup di dalam air karena memiliki insang yang membantu mengambil oksigen terlarut. Bentuk dan fungsi organ tersebut sesuai dengan lingkungan tempat ikan hidup. Keadaan ini merupakan contoh bahwa makhluk hidup memiliki kemampuan ....",
    choices: [
      "Mengubah air menjadi energi tanpa melalui proses metabolisme",
      "Melakukan fotosintesis untuk menghasilkan makanan sendiri",
      "Menghasilkan keturunan tanpa melalui proses reproduksi",
      "Menghentikan respirasi ketika kadar oksigen di lingkungan menurun",
      "Beradaptasi terhadap kondisi lingkungan agar dapat bertahan hidup",
    ],
    correctIndex: 4,
    explanation:
      "Kepemilikan insang merupakan contoh adaptasi morfologi dan fisiologi ikan agar dapat mengambil oksigen terlarut dan bertahan hidup di air.",
  },
  {
    topic: "Adaptasi & Ciri Makhluk Hidup",
    prompt:
      "Seekor bunglon berada di antara dedaunan dan dapat mengubah warna kulitnya sehingga warna tubuhnya menyerupai lingkungan sekitar. Perubahan tersebut dapat mengurangi kemungkinan keberadaannya diketahui oleh pemangsa. Cara perlindungan diri yang ditunjukkan bunglon disebut ....",
    choices: [
      "Mimikri, yaitu menyerupai bentuk organisme lain yang berbahaya",
      "Kamuflase, yaitu menyamarkan penampilan agar sulit dibedakan dari lingkungan",
      "Regenerasi, yaitu menumbuhkan kembali bagian tubuh yang hilang",
      "Hibernasi, yaitu menurunkan aktivitas tubuh dalam waktu tertentu",
      "Migrasi, yaitu berpindah ke wilayah lain untuk mencari kondisi yang lebih baik",
    ],
    correctIndex: 1,
    explanation:
      "Kamuflase adalah penyamaran warna atau pola tubuh menyerupai latar belakang lingkungan sehingga sulit dikenali pemangsa.",
  },
  {
    topic: "Adaptasi & Ciri Makhluk Hidup",
    prompt:
      "Pada musim kemarau yang panjang, beberapa hewan berpindah dari satu tempat ke tempat lain untuk memperoleh sumber makanan dan air. Perpindahan tersebut dilakukan karena kondisi lingkungan di tempat semula tidak lagi mendukung kebutuhan hidupnya. Ciri makhluk hidup yang paling jelas tampak pada peristiwa tersebut adalah ....",
    choices: [
      "Tumbuh karena ukuran tubuh bertambah seiring waktu",
      "Mengalami fotosintesis untuk menghasilkan cadangan makanan",
      "Bernapas untuk memperoleh oksigen dari udara",
      "Berkembang biak untuk mempertahankan jumlah keturunan",
      "Bergerak atau berpindah tempat sebagai respons terhadap kebutuhan hidup",
    ],
    correctIndex: 4,
    explanation:
      "Perpindahan tempat untuk mencari makanan dan air merupakan wujud ciri makhluk hidup berupa gerak aktif terhadap kondisi lingkungan.",
  },
  {
    topic: "Adaptasi & Ciri Makhluk Hidup",
    prompt:
      "Kaktus dapat hidup di daerah kering dengan curah hujan rendah. Salah satu cirinya adalah batang tebal yang mampu menyimpan air, sedangkan daunnya berubah menjadi duri sehingga penguapan dapat ditekan. Fungsi utama batang tebal pada kaktus adalah ....",
    choices: [
      "Menyimpan cadangan air untuk membantu tumbuhan bertahan pada kondisi kering",
      "Menyerap oksigen langsung dari tanah dalam jumlah besar",
      "Meningkatkan jumlah daun agar fotosintesis berlangsung sepanjang malam",
      "Menarik serangga agar membantu proses penyerbukan",
      "Mempercepat penguapan air agar suhu tumbuhan tetap rendah",
    ],
    correctIndex: 0,
    explanation:
      "Kaktus memiliki jaringan penyimpan air (batang sukulen yang tebal) guna mempertahankan cadangan air di lingkungan gersang.",
  },
  {
    topic: "Adaptasi & Ciri Makhluk Hidup",
    prompt:
      "Dalam daur hidup kupu-kupu, telur menetas menjadi larva atau ulat, kemudian berubah menjadi pupa sebelum berkembang menjadi kupu-kupu dewasa. Perubahan bentuk tubuh yang terjadi melalui beberapa tahap tersebut dikenal sebagai ....",
    choices: [
      "Regenerasi, yaitu pembentukan kembali jaringan tubuh yang rusak",
      "Fotosintesis, yaitu proses pembentukan makanan dengan bantuan cahaya",
      "Metamorfosis, yaitu perubahan bentuk tubuh selama tahapan perkembangan",
      "Adaptasi, yaitu penyesuaian organisme terhadap kondisi lingkungan",
      "Homeostasis, yaitu pengaturan kondisi internal tubuh agar tetap stabil",
    ],
    correctIndex: 2,
    explanation:
      "Metamorfosis (pada kupu-kupu: metamorfosis sempurna) adalah perubahan struktur dan bentuk tubuh bertahap dari telur, larva, pupa, hingga dewasa.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Ketika seseorang keluar dari ruangan gelap menuju tempat yang sangat terang, matanya secara spontan berkedip atau menyipit. Reaksi tersebut membantu melindungi mata dari cahaya yang terlalu kuat. Peristiwa ini merupakan contoh ciri makhluk hidup berupa ....",
    choices: [
      "Reproduksi, karena tubuh menghasilkan sel baru",
      "Pertumbuhan, karena organ mata mengalami pertambahan ukuran",
      "Iritabilitas, karena tubuh menanggapi rangsangan cahaya",
      "Ekskresi, karena tubuh mengeluarkan zat sisa metabolisme",
      "Respirasi, karena tubuh membutuhkan oksigen",
    ],
    correctIndex: 2,
    explanation:
      "Refleks menyipitkan/mengedipkan mata saat terkena cahaya menyilaukan merupakan tanggapan organisme terhadap rangsang (iritabilitas).",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Seekor kucing yang belum makan sejak pagi melihat seekor tikus bergerak di dekat tempat penyimpanan makanan. Kucing tersebut kemudian mengejar tikus itu. Perilaku tersebut berkaitan dengan kebutuhan makan dan kemampuan organisme menanggapi keadaan di sekitarnya. Ciri makhluk hidup yang paling tepat ditunjukkan adalah ....",
    choices: [
      "Reproduksi untuk menghasilkan individu baru",
      "Fotosintesis untuk menghasilkan sumber energi",
      "Adaptasi struktur tubuh terhadap perubahan iklim",
      "Respons terhadap rangsangan yang berasal dari lingkungan dan kondisi tubuh",
      "Homeostasis yang hanya berkaitan dengan pengaturan suhu tubuh",
    ],
    correctIndex: 3,
    explanation:
      "Kucing merespons rangsang internal (rasa lapar) dan eksternal (gerakan tikus) melalui perilaku mengejar mangsa.",
  },
  {
    topic: "Makhluk Hidup",
    prompt:
      "Pada siang hari, daun tumbuhan yang mendapat cahaya matahari melakukan proses pembentukan zat makanan. Dalam proses tersebut, tumbuhan menggunakan air dan karbon dioksida dengan bantuan energi cahaya, serta melepaskan oksigen sebagai salah satu hasilnya. Proses yang dimaksud adalah ....",
    choices: [
      "Respirasi, yaitu pemecahan zat makanan untuk memperoleh energi",
      "Fermentasi, yaitu penguraian zat tanpa memerlukan oksigen",
      "Ekskresi, yaitu pengeluaran zat sisa dari tubuh organisme",
      "Transpirasi, yaitu penguapan air melalui permukaan tumbuhan",
      "Fotosintesis, yaitu pembentukan makanan dengan memanfaatkan energi cahaya",
    ],
    correctIndex: 4,
    explanation:
      "Fotosintesis menggunakan air dan karbon dioksida dengan bantuan energi cahaya matahari untuk membentuk karbohidrat serta melepaskan oksigen.",
  },
  {
    topic: "Pencemaran Lingkungan",
    prompt:
      "Kawasan perkotaan dengan lalu lintas padat sering mengalami penurunan kualitas udara. Gas dan partikel dari proses pembakaran bahan bakar kendaraan dapat bercampur dengan udara dan berpengaruh terhadap kesehatan manusia. Di antara pilihan berikut, zat yang bukan merupakan polutan primer yang umumnya langsung dikeluarkan dari kendaraan, melainkan dapat terbentuk melalui reaksi di atmosfer, adalah ....",
    choices: [
      "Karbon dioksida yang dihasilkan dari proses pembakaran bahan bakar",
      "Hidrokarbon yang berasal dari bahan bakar yang tidak terbakar sempurna",
      "Karbon monoksida dari pembakaran bahan bakar yang tidak sempurna",
      "Ozon troposfer yang terbentuk melalui reaksi fotokimia di udara",
      "Nitrogen dioksida yang dapat dihasilkan dalam proses pembakaran bersuhu tinggi",
    ],
    correctIndex: 3,
    explanation:
      "Ozon permukaan (troposfer) adalah polutan sekunder yang terbentuk dari reaksi fotokimia antara nitrogen oksida dan senyawa organik volatil oleh sinar matahari.",
  },
  {
    topic: "Pencemaran Lingkungan",
    prompt:
      "Warga yang tinggal di dekat jalan raya dan kawasan industri mengeluhkan sulit beristirahat karena suara kendaraan berat, klakson, mesin, dan kegiatan produksi terdengar hampir sepanjang hari. Jenis pencemaran lingkungan yang paling sesuai dengan kondisi tersebut adalah ....",
    choices: [
      "Pencemaran suara, terutama akibat kegiatan transportasi dan industri",
      "Pencemaran tanah, karena getaran mesin selalu mengubah komposisi tanah",
      "Pencemaran air, karena suara kendaraan mengubah kualitas air tanah",
      "Pencemaran cahaya, karena suara mesin meningkatkan intensitas penerangan",
      "Pencemaran biologis, karena bunyi kendaraan meningkatkan jumlah mikroorganisme",
    ],
    correctIndex: 0,
    explanation:
      "Kebisingan terus-menerus dari lalu lintas dan mesin pabrik yang mengganggu kenyamanan dan kesehatan pendengaran termasuk pencemaran suara.",
  },
  {
    topic: "Pencemaran Lingkungan",
    prompt:
      "Di daerah pertanian, sebagian petani menggunakan pupuk dan pestisida untuk meningkatkan hasil panen serta mengendalikan hama. Ketika hujan turun, sebagian bahan kimia tersebut terbawa aliran permukaan menuju sungai dan saluran irigasi. Berdasarkan sumbernya, pencemaran air pada peristiwa tersebut terutama berasal dari ....",
    choices: [
      "Gas buang kendaraan yang langsung masuk ke badan air",
      "Sampah plastik dari kegiatan perdagangan di sekitar sungai",
      "Limbah industri tekstil yang berasal dari proses pewarnaan kain",
      "Pupuk dan pestisida yang terbawa dari lahan pertanian",
      "Limbah rumah tangga berupa sisa deterjen dan air cucian",
    ],
    correctIndex: 3,
    explanation:
      "Aliran limpasan air hujan membawa residu pupuk dan pestisida dari area pertanian langsung ke perairan sehingga menyebabkan pencemaran pertanian.",
  },
  {
    topic: "Pencemaran Lingkungan",
    prompt:
      "Sebuah lingkungan permukiman menghasilkan sampah organik berupa sisa sayuran dan sampah anorganik berupa plastik kemasan. Sampah organik relatif mudah diuraikan oleh mikroorganisme, sedangkan plastik membutuhkan waktu jauh lebih lama untuk terurai. Jika tidak dikelola dengan baik, dampak yang paling mungkin ditimbulkan sampah anorganik adalah ....",
    choices: [
      "Meningkatkan kesuburan tanah dalam waktu singkat karena mudah menjadi humus",
      "Mempercepat proses penguraian seluruh bahan organik di dalam tanah",
      "Mengubah seluruh mikroorganisme tanah menjadi organisme yang menguntungkan",
      "Menghilangkan kebutuhan masyarakat terhadap pengelolaan sampah secara rutin",
      "Menumpuk dalam lingkungan dan berpotensi mengganggu kualitas tanah serta aliran air",
    ],
    correctIndex: 4,
    explanation:
      "Sampah anorganik seperti plastik sulit diuraikan secara alami sehingga menumpuk, menurunkan kualitas tanah, dan menyumbat saluran air.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Dalam pembelajaran tata surya, siswa diminta menyusun urutan planet berdasarkan jaraknya dari Matahari. Mereka membandingkan Merkurius, Venus, Bumi, Mars, dan planet-planet luar. Planet yang menempati urutan pertama atau memiliki jarak rata-rata paling dekat dengan Matahari adalah ....",
    choices: [
      "Venus, karena memiliki suhu permukaan yang sangat tinggi",
      "Merkurius, karena orbitnya paling dekat dengan Matahari",
      "Mars, karena berada di wilayah dalam tata surya",
      "Jupiter, karena ukurannya paling besar di antara planet",
      "Bumi, karena menjadi planet tempat manusia hidup dan menerima cahaya Matahari",
    ],
    correctIndex: 1,
    explanation:
      "Merkurius berada pada lintasan orbit pertama sehingga memiliki jarak rata-rata paling dekat dari Matahari.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Ketika mengamati foto planet-planet tata surya, siswa menemukan sebuah planet yang tampak kemerahan. Warna tersebut berkaitan dengan kondisi permukaannya yang kaya akan mineral besi yang mengalami oksidasi. Planet yang dikenal dengan sebutan 'planet merah' adalah ....",
    choices: [
      "Uranus, karena atmosfernya mengandung gas yang membuatnya tampak kebiruan",
      "Venus, karena atmosfernya tebal dan memantulkan cahaya Matahari",
      "Merkurius, karena permukaannya dipenuhi kawah dan batuan",
      "Saturnus, karena memiliki sistem cincin yang sangat luas",
      "Mars, karena permukaannya tampak kemerahan akibat mineral besi teroksidasi",
    ],
    correctIndex: 4,
    explanation:
      "Mars dijuluki planet merah karena debu permukaannya kaya akan besi(III) oksida (karat besi) yang memantulkan warna kemerahan.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Dalam diskusi mengenai kemungkinan adanya kehidupan di luar Bumi, guru meminta siswa membedakan antara tempat yang memiliki kondisi ekstrem dan planet yang telah terbukti mendukung kehidupan. Hingga saat ini, satu-satunya planet di tata surya yang diketahui memiliki kehidupan adalah ....",
    choices: [
      "Bumi, karena memiliki air dalam bentuk cair, atmosfer, dan kondisi yang mendukung kehidupan",
      "Mars, karena ditemukan bukti bahwa planet tersebut pernah memiliki air",
      "Venus, karena menerima energi Matahari lebih banyak daripada Bumi",
      "Jupiter, karena ukurannya besar dan memiliki banyak satelit alami",
      "Neptunus, karena berada jauh dari Matahari dan memiliki atmosfer tebal",
    ],
    correctIndex: 0,
    explanation:
      "Bumi berada pada zona layak huni dengan air cair, atmosfer pelindung beroksigen, dan suhu stabil yang mendukung kehidupan.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Sebuah model tata surya dibuat dengan ukuran planet yang berbeda-beda. Ketika siswa membandingkan diameter dan massa planet, terlihat bahwa ada satu planet yang jauh lebih besar daripada planet lainnya. Planet terbesar dalam tata surya adalah ....",
    choices: [
      "Jupiter, karena merupakan planet terbesar di tata surya",
      "Mars, karena memiliki gunung berapi yang sangat tinggi",
      "Saturnus, karena cincin-cincinnya membentang sangat luas",
      "Bumi, karena memiliki satu satelit alami dan mendukung kehidupan",
      "Venus, karena ukurannya hampir sama dengan Bumi",
    ],
    correctIndex: 0,
    explanation:
      "Jupiter adalah raksasa gas dengan diameter dan massa terbesar di antara seluruh planet tata surya.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Dalam pengamatan menggunakan teleskop, siswa melihat planet yang dikelilingi sistem cincin yang sangat menonjol dan mudah dikenali. Walaupun beberapa planet lain juga mempunyai cincin, planet yang paling terkenal karena cincin besarnya adalah ....",
    choices: [
      "Mars, karena memiliki dua satelit alami yang mengelilinginya",
      "Saturnus, karena sistem cincinnya luas dan tampak jelas",
      "Jupiter, karena memiliki banyak satelit dan cincin yang sangat terang",
      "Neptunus, karena memiliki atmosfer biru dan badai besar",
      "Uranus, karena sumbu rotasinya sangat miring terhadap bidang orbit",
    ],
    correctIndex: 1,
    explanation:
      "Saturnus memiliki sistem cincin es dan batuan yang paling lebar, terang, dan mudah teramati melalui teleskop.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Pada malam hari, Bulan tampak berubah bentuk dari sabit, separuh, hingga purnama jika diamati dari Bumi. Guru menjelaskan bahwa perubahan kenampakan tersebut berkaitan dengan posisi Bulan terhadap Bumi dan Matahari, bukan karena Bulan menghasilkan cahaya sendiri. Bulan merupakan satelit alami yang mengelilingi ....",
    choices: [
      "Bumi, karena Bulan terikat oleh gaya gravitasi Bumi",
      "Saturnus, karena memiliki sistem cincin yang besar",
      "Venus, karena merupakan planet terdekat dengan Bumi",
      "Jupiter, karena memiliki jumlah satelit alami yang banyak",
      "Mars, karena planet tersebut juga memiliki satelit alami",
    ],
    correctIndex: 0,
    explanation:
      "Bulan mengorbit Bumi akibat tarik-menarik gravitasi Bumi–Bulan sambil memantulkan cahaya Matahari.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Selama satu tahun, posisi Bumi berubah ketika bergerak mengelilingi Matahari. Gerakan ini berbeda dari rotasi, yaitu gerakan Bumi berputar pada porosnya. Gerakan Bumi yang menjadi dasar perhitungan satu tahun disebut ....",
    choices: [
      "Rotasi Bumi, yaitu gerakan Bumi pada porosnya",
      "Revolusi Bulan, yaitu gerakan Bulan mengelilingi Bumi",
      "Rotasi Matahari, yaitu gerakan Matahari mengelilingi Bumi",
      "Presesi, yaitu perubahan arah sumbu rotasi Bumi secara perlahan",
      "Revolusi Bumi, yaitu gerakan Bumi mengelilingi Matahari",
    ],
    correctIndex: 4,
    explanation:
      "Revolusi Bumi adalah gerak Bumi mengelilingi Matahari dalam satu periode sekitar 365,25 hari yang mendasari kalender tahunan.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Seorang siswa mengamati peristiwa gerhana Bulan. Pada saat itu, Bulan tampak gelap atau kemerahan karena cahaya Matahari yang seharusnya diterimanya terhalang oleh Bumi. Agar gerhana Bulan dapat terjadi, susunan benda langit yang tepat adalah ....",
    choices: [
      "Matahari dan Bulan berada pada sisi yang sama tanpa melibatkan posisi Bumi",
      "Bulan berada jauh dari bidang orbit sehingga tidak menerima gravitasi Bumi",
      "Matahari berada di antara Bumi dan Bulan sehingga cahaya Bulan tidak terlihat",
      "Bulan berada di antara Matahari dan Bumi sehingga cahaya Matahari terhalang menuju Bumi",
      "Bumi berada di antara Matahari dan Bulan sehingga bayangan Bumi jatuh ke Bulan",
    ],
    correctIndex: 4,
    explanation:
      "Gerhana Bulan terjadi saat Bumi berada sejajar di antara Matahari dan Bulan sehingga Bulan memasuki bayangan umbra/penumbra Bumi.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Ketika mengamati langit malam, seseorang melihat benda langit yang tampak seperti titik bercahaya dengan ekor panjang ketika mendekati Matahari. Ekor tersebut terbentuk karena material pada benda langit mengalami pemanasan dan terdorong oleh radiasi serta angin Matahari. Benda langit yang dimaksud adalah ....",
    choices: [
      "Meteorit, karena merupakan benda yang telah sampai ke permukaan Bumi",
      "Komet, karena tersusun atas es, debu, dan material lain yang dapat membentuk ekor",
      "Asteroid, karena merupakan bongkahan batuan yang mengorbit Matahari",
      "Planet, karena memantulkan cahaya Matahari tanpa membentuk ekor",
      "Satelit, karena selalu mengorbit planet dan memancarkan cahaya sendiri",
    ],
    correctIndex: 1,
    explanation:
      "Komet tersusun atas es, gas beku, dan debu yang menyublim membentuk koma serta ekor panjang menjauhi Matahari saat mendekatinya.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Nelayan memperhatikan bahwa permukaan air laut mengalami pasang dan surut secara berkala. Guru menjelaskan bahwa perubahan tersebut tidak terutama disebabkan oleh suhu udara, melainkan dipengaruhi oleh gaya tarik benda langit terhadap massa air di Bumi. Faktor utama yang memengaruhi pasang surut air laut adalah ....",
    choices: [
      "Gravitasi Bumi yang membuat air laut selalu bergerak ke arah daratan",
      "Gaya gravitasi Bulan dan Matahari yang bekerja terhadap massa air di Bumi",
      "Rotasi Matahari yang menyebabkan seluruh samudra mengalami gelombang",
      "Suhu Matahari yang memanaskan permukaan laut setiap siang hari",
      "Perubahan suhu Bulan yang memengaruhi penguapan air laut",
    ],
    correctIndex: 1,
    explanation:
      "Pasang surut air laut terutama disebabkan oleh gaya tarik gravitasi Bulan (dan turut diperkuat atau diperlemah oleh gravitasi Matahari).",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Dalam sebuah tugas, siswa diminta menyebutkan planet yang paling jauh dari Matahari berdasarkan susunan delapan planet yang diakui saat ini. Mereka harus membedakan planet terluar dari benda langit katai yang berada lebih jauh atau memiliki orbit berbeda. Planet yang berada pada urutan kedelapan dari Matahari adalah ....",
    choices: [
      "Uranus, karena berada setelah Saturnus",
      "Mars, karena menjadi planet keempat dari Matahari",
      "Neptunus, karena merupakan planet kedelapan dan terjauh dari Matahari",
      "Saturnus, karena memiliki cincin yang mudah diamati",
      "Jupiter, karena merupakan planet terbesar dalam tata surya",
    ],
    correctIndex: 2,
    explanation:
      "Urutan planet tata surya dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus sebagai planet kedelapan.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Rotasi Bumi menyebabkan berbagai wilayah di permukaan Bumi mengalami pergantian siang dan malam. Dalam sebuah simulasi sederhana, guru meminta siswa membayangkan Bumi tidak lagi berotasi pada porosnya, sementara Bumi tetap berada pada orbitnya mengelilingi Matahari. Dampak yang paling tepat untuk dipahami dari kondisi tersebut adalah ....",
    choices: [
      "Seluruh permukaan Bumi akan menerima cahaya Matahari secara merata pada waktu yang sama",
      "Pergantian siang dan malam tetap berlangsung setiap 24 jam seperti kondisi normal",
      "Satu sisi Bumi akan terus menghadap Matahari dan sisi lainnya terus membelakanginya dalam model tanpa rotasi dan tanpa gerak lain",
      "Bumi akan berhenti mengelilingi Matahari karena rotasi dan revolusi merupakan gerakan yang sama",
      "Gravitasi Bumi akan hilang sehingga semua benda terlepas dari permukaannya",
    ],
    correctIndex: 2,
    explanation:
      "Dalam model sederhana tanpa rotasi dan tanpa perubahan orientasi relatif terhadap Matahari, satu belahan akan terus menghadap cahaya dan sisi sebaliknya terus gelap.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Saat terjadi gerhana Matahari total, pengamat di wilayah tertentu melihat piringan Matahari tertutup seluruhnya oleh Bulan. Peristiwa ini hanya dapat terjadi ketika ketiga benda langit berada pada posisi hampir segaris. Urutan posisi dari Matahari menuju Bumi pada saat gerhana Matahari adalah ....",
    choices: [
      "Matahari – Bulan – Bumi, karena Bulan berada di antara Matahari dan Bumi",
      "Bulan – Bumi – Matahari, karena Bumi menutupi cahaya Matahari",
      "Bulan – Matahari – Bumi, karena Matahari berada di belakang Bulan",
      "Bumi – Bulan – Matahari, karena pengamat berada di sisi Bulan",
      "Matahari – Bumi – Bulan, karena Bumi berada di antara Matahari dan Bulan",
    ],
    correctIndex: 0,
    explanation:
      "Gerhana Matahari terjadi ketika Bulan berada tepat di antara Matahari dan Bumi sehingga bayangan Bulan jatuh ke permukaan Bumi.",
  },
  {
    topic: "Tata Surya",
    prompt:
      "Planet-planet dalam tata surya bergerak mengelilingi Matahari pada lintasan tertentu. Walaupun memiliki kecenderungan bergerak lurus karena kelembamannya, gaya tarik gravitasi Matahari membelokkan gerak planet sehingga tetap berada pada orbitnya. Pernyataan yang paling tepat mengenai peran gravitasi Matahari adalah ....",
    choices: [
      "Menarik semua planet menuju Bulan sehingga orbitnya berubah setiap bulan",
      "Menyebabkan seluruh planet bergerak mengelilingi Bumi sebagai pusat tata surya",
      "Menjaga planet tetap bergerak pada lintasan orbitnya mengelilingi Matahari melalui gaya tarik gravitasi",
      "Menghentikan gerak planet agar posisinya selalu tetap terhadap Matahari",
      "Mendorong seluruh planet menjauhi Matahari dengan kecepatan yang sama",
    ],
    correctIndex: 2,
    explanation:
      "Gaya gravitasi Matahari bertindak sebagai gaya sentripetal yang mempertahankan planet tetap mengorbit mengelilingi Matahari.",
  },
];

export const UJIAN_IPA_QUESTIONS: Question[] = IPA_SEEDS.map((item, idx) => ({
  id: `ujian-ipa-${String(idx + 1).padStart(2, "0")}`,
  category: "TIU",
  topic: item.topic,
  prompt: item.prompt,
  choices: item.choices.map((label, cIdx) => ({
    id: String.fromCharCode(97 + cIdx),
    label,
    score: cIdx === item.correctIndex ? 5 : 0,
  })),
  explanation: item.explanation,
}));

export const UJIAN_IPA_PACKAGE: ExamPackage = {
  id: "ujian-ipa-ekosistem-tata-surya",
  kind: "mini",
  title: "IPAS Kelas 10",
  description:
    "40 soal IPAS Kelas 10 mencakup ekosistem, ciri dan adaptasi makhluk hidup, pencemaran lingkungan, serta tata surya.",
  questions: UJIAN_IPA_QUESTIONS,
  durationMinutes: 60,
};
