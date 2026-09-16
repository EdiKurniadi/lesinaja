import type { Question } from "./types";

type IntegritasSeed = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const integritasSeeds: IntegritasSeed[] = [
  {
    "prompt": "Bu Anita adalah seorang petugas pelayanan administrasi kependudukan di dinas sipil. Seorang warga mendatangi mejanya dan meminta bantuan untuk mempercepat pembuatan dokumen penting karena harus dipakai besok pagi. Warga tersebut menyisipkan amplop berisi uang ucapan terima kasih di bawah tumpukan berkas. Sikap Bu Anita yang mencerminkan integritas tinggi adalah…",
    "choices": [
      "Menerima uang tersebut karena menganggapnya sebagai bentuk apresiasi warga atas pelayanan cepat yang diberikan.",
      "Menolak amplop tersebut dengan sopan dan tegas, serta menjelaskan bahwa pelayanan dilakukan sesuai standar operasional tanpa biaya tambahan.",
      "Memproses dokumen dengan cepat tetapi memberikan amplop tersebut kepada kotak sumbangan tempat ibadah kantor.",
      "Menolak uang tersebut namun bersedia mempercepat prosesnya hanya jika diminta langsung oleh atasan.",
      "Melaporkan warga tersebut ke pihak kepolisian atas tuduhan percobaan penyuapan berat tanpa memberikan penjelasan terlebih dahulu."
    ],
    "answer": 1,
    "explanation": "Nilai integritas ASN/pelayan publik berfokus pada penolakan gratifikasi, sikap adil, dan penegakan Standar Operasional Prosedur (SOP). Petugas wajib melayani masyarakat secara profesional tanpa menerima imbalan dalam bentuk apa pun. Penolakan harus disampaikan dengan santun, tegas, dan disertai edukasi prosedur agar tidak menimbulkan rasa tersinggung namun tetap menjaga prinsip anti-suap. Jadi, opsi B benar karena secara tepat memadukan etika pelayanan dan keteguhan prinsip anti-gratifikasi.\n\nOpsi A salah karena uang apresiasi dalam proses pelayanan publik tergolong gratifikasi yang dilarang keras oleh undang-undang.\n\nOpsi C salah karena mengalihkan uang hasil suap/gratifikasi ke tempat ibadah tetap tidak membenarkan penerimaan barang terlarang.\n\nOpsi D salah karena deskresi pelayanan tidak boleh dipengaruhi oleh imbalan atau instruksi yang melanggar kesetaraan antarantrean warga.\n\nOpsi E salah karena tindakan melapor ke polisi tanpa edukasi awal dinilai berlebihan dan merusak hubungan pelayanan masyarakat."
  },
  {
    "prompt": "Seorang peneliti senior di sebuah lembaga riset nasional menemukan adanya penyimpangan data statistik minor yang tidak sengaja dilakukan oleh rekan setimnya. Jika penyimpangan ini diperbaiki, kesimpulan riset akan berubah dan berpotensi membatalkan hibah pendanaan proyek yang bernilai miliaran rupiah. Sikap yang paling mencerminkan integritas ilmiah profesional adalah...",
    "choices": [
      "Membiarkan data tersebut tetap dipublikasikan demi menjaga kelangsungan pendanaan riset seluruh anggota tim.",
      "Melaporkan secara transparan kesalahan data tersebut dan merevisi temuan riset, meskipun berisiko kehilangan pendanaan.",
      "Mengubah metodologi riset secara diam-diam agar data yang menyimpang terlihat masuk akal dan sah.",
      "Mengeluarkan rekan tim yang melakukan kesalahan tersebut dari proyek tanpa merevisi laporan data.",
      "Menunda pengumuman riset sampai pendanaan hibah cair sepenuhnya ke rekening lembaga."
    ],
    "answer": 1,
    "explanation": "Nilai utama integritas ilmiah dan profesionalisme terletak pada kejujuran akademis serta validitas kebenaran data di atas kepentingan finansial. Seorang peneliti sejati mengutamakan etika kebenaran sains daripada keuntungan materiil jangka pendek. Opsi A salah karena mengorbankan kejujuran ilmiah demi kepentingan materi/keuangan kelompok. Opsi B benar karena secara tepat menegakkan kejujuran akademis dan transparansi validitas data meski menghadapi konsekuensi kerugian finansial. Opsi C salah karena merupakan bentuk manipulasi metodologi dan kebohongan intelektual. Opsi D salah karena mencari kambing hitam tanpa menyelesaikan inti masalah pemalsuan data. Opsi E salah karena mencerminkan sikap opportunis dan penipuan terencana untuk menyerap anggaran."
  },
  {
    "prompt": "Tanjung merupakan pemilik usaha kafe yang sering memutar lagu-lagu populer karya musisi terkenal melalui akun layanan streaming pribadi untuk memeriahkan suasana kafenya. Hal tersebut ia lakukan agar pengunjung merasa nyaman sehingga omzet usahanya meningkat. Ditinjau dari aspek etika dan integritas hukum, bagaimana menilai tindakan Tanjung tersebut?",
    "choices": [
      "Tindakan Tanjung sah dan berintegritas karena ia telah membayar biaya berlangganan bulanan akun streaming premium secara rutin.",
      "Tindakan Tanjung dibolehkan selama ia tidak memungut biaya tiket masuk tambahan khusus untuk mendengarkan musik tersebut.",
      "Tindakan Tanjung melanggar etika dan aturan hukum karena memanfaatkan karya cipta secara komersial tanpa lisensi pemutaran publik (royalti).",
      "Tindakan Tanjung sepenuhnya benar karena membantu mempromosikan lagu-lagu musisi tersebut secara gratis kepada pengunjung kafe.",
      "Tindakan Tanjung baru dianggap melanggar jika ada teguran atau gugatan tertulis secara langsung dari pemilik hak cipta."
    ],
    "answer": 2,
    "explanation": "Prinsip utama integritas dalam penghormatan karya cipta terletak pada kepatuhan terhadap hak ekonomi pencipta atas pemanfaatan komersial. Memutar karya cipta di tempat publik untuk meningkatkan keuntungan bisnis (omzet) wajib memiliki izin/lisensi pemutaran publik (public performance) dan membayar royalti sesuai regulasi yang berlaku. Opsi A salah karena akun streaming premium pribadi hanya mencakup lisensi penggunaan personal, bukan hak komersial ruang publik. Opsi B salah karena penarikan tiket masuk bukan syarat tunggal unsur komersial; penggunaan musik untuk membina suasana usaha tetap dikategorikan komersial. Opsi C benar karena secara tepat mengidentifikasi pelanggaran pemanfaatan komersial tanpa lisensi pemutaran publik yang merugikan hak ekonomi musisi. Opsi D salah karena dalih membantu promosi tidak menghapuskan kewajiban hukum bayar royalti atas pemanfaatan aset intelektual. Opsi E salah karena kepatuhan hukum dan integritas bersifat proaktif mematuhi regulasi, bukan menunggu teguran atau sanksi hukum."
  },
  {
    "prompt": "Sebuah instansi pemerintah daerah mengalami krisis kepercayaan publik setelah pejabat sebelumnya terjerat kasus korupsi dan nepotisme sistematis. Kepala daerah yang baru bertekad memperbaiki tata kelola dan memulihkan kepercayaan masyarakat yang runtuh. Dalam konteks ini, bagaimana peran utama penerapan integritas dalam memulihkan kepercayaan publik terhadap pemerintah daerah tersebut?",
    "choices": [
      "Integritas membantu pemerintah mendesain berbagai program bantuan sosial baru yang berfokus pada pemenuhan kebutuhan dasar masyarakat.",
      "Integritas mendorong pembentukan lembaga pengawas internal independen untuk memantau langsung jalannya proyek pimpinan daerah.",
      "Integritas membantu pemerintah mengamankan seluruh anggaran daerah agar dapat dialokasikan penuh pada sektor pembangunan infrastruktur.",
      "Integritas membantu pemerintah membangun sistem transparansi dan akuntabilitas publik dalam setiap proses pengambilan keputusan serta pelaksanaan kebijakan.",
      "Integritas membantu meningkatkan reputasi publik daerah di tingkat internasional melalui kerja sama investasi dan diplomasi daerah."
    ],
    "answer": 3,
    "explanation": "Untuk memulihkan kepercayaan publik yang hilang akibat korupsi dan nepotisme, integritas bertindak sebagai landasan mendasar untuk menciptakan transparansi (keterbukaan) dan akuntabilitas (pertanggungjawaban) dalam tata kelola pemerintahan. Ketika keputusan dan penggunaan anggaran dapat diakses serta dipertanggungjawabkan secara terbuka kepada publik, kepercayaan masyarakat akan terbangun kembali secara berkelanjutan. Jadi, opsi D benar karena menyasar akar penyelesaian krisis kepercayaan melalui keterbukaan dan pertanggungjawaban publik.\n\nOpsi A salah karena sekadar membuat program bantuan sosial tanpa perbaikan transparansi tidak menjamin bebas dari kecurangan.\n\nOpsi B salah karena pembentukan lembaga pengawas hanyalah sarana teknis/alat, bukan konsep mendasar dari penerapan integritas tata kelola.\n\nOpsi C salah karena penyerapan dana pada infrastruktur belum tentu efektif jika tidak disertai keterbukaan sistemik.\n\nOpsi E salah karena diplomasi luar negeri tidak menyelesaikan akar masalah kekecewaan masyarakat lokal."
  },
  {
    "prompt": "Dalam proses pelelangan proyek pengadaan perangkat komputer di sebuah instansi, ketua panitia pengadaan mengetahui bahwa salah satu vendor peserta lelang adalah perusahaan milik saudara kandungnya. Perusahaan tersebut memberikan penawaran harga paling murah dan spesifikasi paling tinggi. Langkah yang wajib diambil oleh ketua panitia pengadaan adalah...",
    "choices": [
      "Memenangkan perusahaan saudaranya karena secara objektif penawarannya memang yang terbaik dan termurah.",
      "Menyembunyikan hubungan kekeluargaan tersebut agar proses lelang dapat berjalan lancar tanpa spekulasi.",
      "Deklarasi konflik kepentingan (conflict of interest) dan mengundurkan diri dari posisinya sebagai panitia lelang.",
      "Meminta perusahaan saudaranya menaikkan harga penawaran agar tidak mencolok dibanding peserta lain.",
      "Mengalihkan hak penilaian kepada anggota panitia lain tetapi tetap memantau keputusan akhir"
    ],
    "answer": 2,
    "explanation": "Adanya hubungan kekeluargaan antara penilai/panitia dengan peserta lelang menimbulkan konflik kepentingan (conflict of interest) yang nyata. Meskipun penawaran vendor objektif baik, keberadaan hubungan darah akan merusak independensi dan transparansi. Ketua panitia wajib menyampaikan deklarasi tertulis dan mengundurkan diri dari proses tersebut (recusal). Jadi, opsi C benar karena mematuhi etika pengadaan barang dan jasa pemerintah.\n\nOpsi A salah karena tidak melaporkan konflik kepentingan melanggar asas transparansi pengadaan.\n\nOpsi B salah karena menyembunyikan hubungan keluarga merupakan tindakan tidak jujur/manipulatif.\n\nOpsi D salah karena merekayasa harga lelang adalah bentuk tindak kecurangan.\n\nOpsi E salah karena tetap memantau keputusan akhir menunjukkan intervensi yang tidak sepenuhnya lepas dari konflik kepentingan."
  },
  {
    "prompt": "Menjelang pelaksanaan Pemilihan Kepala Daerah (Pilkada), seorang pejabat ASN mendapat tekanan dari pimpinan daerah yang sedang mencalonkan diri kembali untuk mengarahkan staf bawahannya memilih calon tertentu. Pimpinan menjanjikan promosi jabatan jika berhasil, atau ancaman mutasi jika menolak. Sikap berintegritas yang ditunjukkan ASN tersebut adalah…",
    "choices": [
      "Menuruti perintah pimpinan secara tertutup demi mengamankan posisi karir ASN dan stafnya.",
      "Menolak instruksi pimpinan secara tegas dan menjaga netralitas sebagai ASN sesuai aturan undang-undang.",
      "Pura-pura mendukung instruksi pimpinan di depan umum namun memilih secara bebas saat di TPS.",
      "Mengikuti perintah pimpinan tetapi hanya mengimbau staf terdekat tanpa paksaan.",
      "Mengajukan cuti di luar tanggungan negara hingga masa Pilkada selesai untuk menghindari krisis etika."
    ],
    "answer": 1,
    "explanation": "ASN diwajibkan menjunjung tinggi asas netralitas dan tidak boleh terpengaruh atau dipengaruhi oleh kepentingan politik mana pun, termasuk tekanan pimpinan. Menolak intervensi politik dan mematuhi UU ASN merupakan kewajiban integritas utama seorang aparat negara. Jadi, opsi B benar karena menegakkan netralitas ASN dari tekanan kekuasaan.\n\nOpsi A salah karena mengorbankan netralitas demi jabatan merupakan pelanggaran etika dan hukum berat.\n\nOpsi C salah karena pura-pura mendukung tetap melanggar etika kejujuran dan netralitas ASN.\n\nOpsi D salah karena tetap mengarahkan staf merupakan pelanggaran larangan mobilisasi dalam politik praktis.\n\nOpsi E salah karena mengambil cuti merupakan sikap menghindar, bukan penegakan integritas saat memegang jabatan."
  },
  {
    "prompt": "Seorang petugas pelayanan publik di kantor pertanahan berhasil menyelesaikan pengurusan sertifikat tanah milik seorang warga miskin dengan cepat dan tepat waktu sesuai dengan janji layanan. Karena merasa sangat terbantu dan puas, warga tersebut memberikan amplop berisi uang tunai sebagai ucapan terima kasih. Petugas tersebut tahu bahwa warga memutuskannya secara sukarela tanpa ada paksaan. Tindakan yang harus dilakukan oleh petugas layanan tersebut adalah…",
    "choices": [
      "Menolak uang pemberian tersebut secara sopan dan menjelaskan bahwa pelayanan prima merupakan kewajiban yang sudah dibayar oleh negara.",
      "Menerima uang pemberian tersebut karena diberikan secara sukarela tanpa ada unsur pemerasan atau permintaan sebelumnya.",
      "Menerima uang tersebut namun melaporkannya ke Unit Pengendalian Gratifikasi (UPG) instansi dalam waktu 30 hari kerja.",
      "Menolak uang tersebut dan menyarankan agar uangnya disumbangkan saja kepada kas rumah ibadah atau lembaga sosial.",
      "Menerima uang tersebut lalu membagikannya kepada seluruh staf pelayanan untuk menikmati hasil kerja keras bersama."
    ],
    "answer": 0,
    "explanation": "Nilai utama etika pelayanan publik terletak pada penolakan secara tegas terhadap segala bentuk gratifikasi atas layanan yang memang sudah menjadi kewajiban aparatur negara. Berdasarkan UU Tipikor, pemberian uang dari pengguna layanan kepada petugas (meskipun sukarela) tergolong gratifikasi yang dilarang karena pelayanan yang diberikan sudah ditanggung dan digaji oleh negara melalui pajak masyarakat. Jadi, opsi A benar karena menunjukkan integritas tinggi dengan menolak pemberian langsung di tempat secara santun. Opsi B salah karena pemberian sukarela tetap dikategorikan sebagai bentuk gratifikasi yang dapat merusak objektivitas layanan. Opsi C salah karena pelaporan ke UPG hanya dilakukan jika gratifikasi tidak dapat ditolak secara langsung (misal dikirim lewat kurir/tanpa tatap muka). Opsi D salah karena memberi saran alokasi uang warga bukan tugas aparatur dan terkesan menggurui. Opsi E salah karena membagi uang gratifikasi kepada tim tetap merupakan tindakan penyalahgunaan dan tindak koruptif."
  },
  {
    "prompt": "Seorang staf pengelola barang milik negara (BMN) diminta oleh atasan langsungnya untuk meminjamkan kendaraan operasional dinas beserta fasilitas BBM instansi guna keperluan acara keluarga pribadi atasan pada akhir pekan. Atasan berjanji akan bertanggung jawab penuh jika terjadi kerusakan. Sebagai staf yang memegang komitmen integritas dan tata kelola BMN, tindakan yang paling tepat dilakukan adalah...",
    "choices": [
      "Meminjamkan kendaraan dinas tersebut dengan syarat atasan mengisi ulang BBM secara pribadi menggunakan uang sendiri.",
      "Melaporkan tindakan atasan tersebut secara tertulis kepada Inspektorat Jenderal tanpa memberikan penjelasan langsung kepada atasan.",
      "Menolak permintaan tersebut dan langsung mengajukan permohonan mutasi kerja karena merasa tidak cocok dengan budaya kerja pimpinan.",
      "Memenuhi permintaan atasan demi menjaga hubungan kerja yang harmonis dan menghindari risiko penilaian kinerja buruk.",
      "Menolak permintaan tersebut secara sopan sambil menjelaskan aturan larangan penggunaan aset negara untuk kepentingan pribadi."
    ],
    "answer": 4,
    "explanation": "Sesuai PP No. 94 Tahun 2021 tentang Disiplin PNS, aset/fasilitas negara wajib digunakan hanya untuk kepentingan dinas. Pegawai berintegritas harus berani menolak perintah pimpinan yang bertentangan dengan peraturan perundang-undangan dengan cara yang santun dan komunikatif. Jadi, opsi E benar. Opsi A salah karena kompromi BBM tidak mengubah fakta bahwa aset negara tetap disalahgunakan untuk keperluan pribadi. Opsi B salah karena penyelesaian komunikatif secara internal harus diutamakan sebelum melakukan pelaporan tingkat tinggi, kecuali ada ancaman kejahatan berat. Opsi C salah karena mengajukan mutasi merupakan sikap reaktif yang tidak menyelesaikan akar masalah kedisiplinan. Opsi D salah karena mengorbankan integritas dan aturan demi kelancaran hubungan dengan atasan adalah bentuk pelanggaran etika ASN."
  },
  {
    "prompt": "Prof. Dr. Ing. H. B.J. Habibie dikenal sebagai sosok ilmuwan cerdas, berdedikasi tinggi, dan visioner yang memberikan kontribusi besar dalam dunia penerbangan nasional. Selain keahlian teknisnya, beliau menunjukkan integritas dan etika kerja yang sangat tinggi selama mengabdi di birokrasi pemerintahan. Nilai keteladanan B.J. Habibie yang paling relevan untuk diterapkan oleh seorang ASN dalam menjalankan tugas pelayanan publik sehari-hari adalah...",
    "choices": [
      "Kedisiplinan tinggi dalam menyelesaikan setiap tugas pekerjaan tepat waktu dan selalu taat pada standar operasional prosedur (SOP).",
      "Kecermatan dan ketelitian ekstra dalam mengikuti seluruh prosedur birokrasi agar tidak terjadi kesalahan administrasi.",
      "Semangat inovasi dan keberanian berpikir kreatif untuk melahirkan solusi terbaik dalam memecahkan masalah publik.",
      "Kemampuan menjaga hubungan harmonis dan komunikasi yang efektif dengan seluruh rekan kerja demi soliditas tim.",
      "Komitmen pantang menyerah dan profesionalisme berbasis kompetensi dalam menghadirkan karya berstandar tinggi bagi bangsa."
    ],
    "answer": 0,
    "explanation": "Nilai utama keteladanan B.J. Habibie dalam konteks integritas operasional birokrasi ASN terletak pada kedisiplinan tinggi, ketepatan waktu, dan ketaatan penuh pada aturan/SOP. Sebagai sosok teknokrat bermutu tinggi, Habibie menjunjung standar kerja presisi di mana kedisiplinan dan kepatuhan pada aturan menjadi landasan utama integritas dalam melayani publik sehari-hari. Jadi, opsi A benar karena merefleksikan cerminan integritas dasar ASN dalam tugas rutin. Opsi B salah karena kecermatan administrasi semata bisa berujung pada birokrasi kaku tanpa efisiensi kerja. Opsi C salah karena inovasi merupakan nilai kompetensi/berorientasi pelayanan, bukan fokus utama integritas dasar. Opsi D salah karena keharmonisan tim merupakan aspek kompetensi sosio-kultural. Opsi E salah karena profesionalisme berstandar tinggi lebih menonjolkan aspek kompetensi teknis ketimbang nilai integritas kedisiplinan dasar."
  },
  {
    "prompt": "Seorang kepala dinas menolak pemberian gratifikasi berupa tiket liburan luar negeri dari kontraktor pemenang tender proyek daerah. Beliau juga memperingatkan kontraktor tersebut untuk tidak lagi mencoba memberikan hadiah apapun yang dapat mempengaruhi objektivitas penilaian. Tindakan kepala dinas ini mencerminkan sikap integritas...",
    "choices": [
      "Keberanian dalam memutus hubungan kerja sama dengan pihak swasta.",
      "Kedisiplinan dalam mematuhi seluruh peraturan jam kerja di dinas.",
      "Kesederhanaan dalam memilih tempat liburan pribadi bersama keluarga.",
      "Kerja keras dalam menyelesaikan seluruh tender proyek tepat waktu.",
      "Tegas dan konsisten dalam menjaga benteng anti-korupsi serta menghindari konflik"
    ],
    "answer": 4,
    "explanation": "Prinsip utama integritas kepemimpinan publik adalah keteguhan komitmen anti-korupsi dan penolakan tegas terhadap konflik kepentingan. Menolak segala bentuk gratifikasi serta menetapkan batas etik yang jelas menjaga independensi dan objektivitas dalam pengambilan keputusan penyeleksian. Opsi A salah karena penolakan gratifikasi bertujuan menjaga etika, bukan memutus kerja sama secara sembarangan. Opsi B salah karena kedisiplinan jam kerja tidak relevan dengan penolakan suap/gratifikasi. Opsi C salah karena narasi berfokus pada penolakan gratifikasi, bukan pemilihan gaya hidup atau lokasi liburan pribadi. Opsi D salah karena waktu penyelesaian tender adalah kinerja operasional, bukan benteng etika benturan kepentingan. Opsi E benar karena menangkap secara tepat sikap penolakan tegas gratifikasi demi menjaga independensi dan etika publik."
  },
  {
    "prompt": "Dalam proses rekrutmen pegawai Non-ASN di suatu lembaga pemerintah, seorang kepala bagian panitia seleksi menemukan bahwa anak kandungnya lolos hingga tahap wawancara akhir. Meskipun anak tersebut memiliki kualifikasi akademik yang sangat tinggi dan kompeten, keberadaan hubungan kekeluargaan ini berpotensi menimbulkan benturan kepentingan (conflict of interest). Tindakan yang paling mencerminkan integritas tinggi dari kepala bagian tersebut adalah...",
    "choices": [
      "Tetap menjadi penguji wawancara secara profesional dan memberikan nilai secara objektif sesuai lembar penilaian resmi.",
      "Meminta tim penguji lain memberikan nilai yang sedikit lebih rendah agar tidak menimbulkan tuduhan nepotisme dari peserta lain.",
      "Mengarahkan anak kandungnya untuk mengundurkan diri dari proses seleksi guna menjaga pimpinan dari isu negatif.",
      "Mendeklarasikan potensi konflik kepentingan kepada panitia dan menarik diri secara penuh dari seluruh proses penilaian tahap akhir.",
      "Menyerahkan keputusan kelulusan sepenuhnya kepada atasan pimpinan tertinggi tanpa perlu mengubah susunan panitia seleksi."
    ],
    "answer": 3,
    "explanation": "Standar etika penyelenggaraan negara saat menghadapi benturan kepentingan adalah transparansi (deklarasi) dan penarikan diri (recusal) dari proses pengambilan keputusan. Dengan menyatakan potensi konflik kepentingan dan tidak menguji, integritas proses seleksi tetap terjaga tanpa merugikan hak peserta. Jadi, opsi D benar. Opsi A salah karena klaim 'objektif' tetap dihinggapi bias hubungan darah dan merusak akuntabilitas publik. Opsi B salah karena sengaja menurunkan nilai adalah bentuk kecurangan dan ketidakadilan bagi sang anak. Opsi C salah karena menyuruh anak mundur merenggut hak warga negara yang kompeten secara tidak adil. Opsi E salah karena hanya menyerahkan keputusan tanpa menarik diri dari kepanitiaan tidak menghilangkan potensi pengaruh subjektif."
  },
  {
    "prompt": "Anda adalah seorang staf keuangan di sebuah lembaga pemerintah. Saat melakukan audit internal rutin, Anda menemukan indikasi manipulasi laporan anggaran (markup) yang dilakukan oleh atasan langsung Anda bersama oknum rekan kerja. Atasan Anda kemudian mendatangi Anda dan menjanjikan bagian dari dana tersebut serta mengancam akan menghambat karir Anda jika membocorkannya. Sikap yang paling tepat Anda lakukan adalah...",
    "choices": [
      "Menolak tawaran uang tersebut dan memilih diam demi menjaga keselamatan karier serta stabilitas unit kerja.",
      "Menegur atasan secara pribadi dan memintanya untuk mengembalikan uang negara sebelum dilaporkan ke pihak berwajib.",
      "Membocorkan bukti manipulasi anggaran tersebut ke media massa dan media sosial agar publik dapat mengawal kasus ini.",
      "Melaporkan temuan pelanggaran tersebut melalui saluran Whistleblowing System (WBS) resmi instansi beserta bukti-bukti yang valid.",
      "Mengajukan permohonan pindah unit kerja agar tidak terlibat dalam praktik kecurangan yang dilakukan oleh atasan."
    ],
    "answer": 3,
    "explanation": "Nilai utama penegakan integritas organisasi terletak pada keberanian menolak kecurangan serta melaporkannya melalui mekanisme resmi perlindungan pelapor (Whistleblowing System). Seorang pegawai berintegritas tidak hanya pasif menolak suap, melainkan aktif melakukan tindakan pencegahan dan penindakan korupsi dengan menyampaikan bukti sah ke saluran resmi yang terlindungi. Jadi, opsi D benar karena merupakan langkah terstruktur, aman, dan berkesesuaian dengan sistem hukum/etika birokrasi. Opsi A salah karena memilih diam merupakan bentuk pembiaran terhadap tindak pidana korupsi. Opsi B salah karena menegur langsung berisiko membahayakan diri pelapor dan memberi kesempatan pelaku merusak bukti. Opsi C salah karena membocorkan dokumen ke media sosial melanggar rahasia negara dan prosedur hukum yang sah. Opsi E salah karena mengajukan pindah unit kerja merupakan tindakan lepas tangan dan tidak menyelesaikan kejahatan anggaran."
  },
  {
    "prompt": "Seorang ASN yang bertugas di bagian verifikasi data berkas calon penerima beasiswa menemukan bahwa kerabat dekatnya terdaftar sebagai salah satu peserta. Meskipun kerabat tersebut memenuhi syarat secara formal, ASN tersebut tidak melaporkan hubungan kekeluargaan ini kepada pimpinan dan tetap memproses verifikasinya secara independen. Tindakan ASN tersebut melanggar kode etik integritas karena...",
    "choices": [
      "Melakukan diskriminasi terhadap peserta lain dengan menggagalkan berkas pesaing kerabatnya.",
      "Membocorkan dokumen rahasia penerimaan beasiswa kepada pihak yang tidak berwenang.",
      "Menolak melaksanakan tugas pelayanan publik secara profesional dan proporsional.",
      "Menggunakan fasilitas negara untuk kepentingan perolehan keuntungan finansial pribadi.",
      "Membiarkan terjadinya potensi benturan kepentingan dalam menjalankan tugas dan kewenangannya."
    ],
    "answer": 4,
    "explanation": "Nilai utama integritas dalam Kode Etik ASN mewajibkan setiap ASN untuk menghindari dan melaporkan situasi benturan kepentingan (conflict of interest). Meskipun tidak melakukan manipulasi nilai, memproses berkas kerabat tanpa deklarasi tertulis merusak asas netralitas dan transparansi birokrasi. Jadi, opsi E benar karena pelanggaran utama terletak pada pembiaran potensi benturan kepentingan tanpa adanya deklarasi resmi/pengunduran diri dari proses verifikasi tersebut. Opsi A salah karena dalam ilustrasi soal ASN tersebut tidak disebutkan melakukan diskriminasi atau menggagalkan berkas peserta lain. Opsi B salah karena permasalahan dalam kasus ini bukan mengenai pembocoran dokumen rahasia, melainkan independensi verifikator. Opsi C salah karena ASN tersebut tetap menjalankan tugas verifikasi, hanya saja melanggar etika keterbukaan terkait hubungan kekeluargaan. Opsi D salah karena tidak terdapat bukti atau indikasi penggunaan fasilitas negara untuk penyalahgunaan dana/keuntungan finansial secara langsung"
  },
  {
    "prompt": "Sebuah perusahaan swasta multinasional berencana menanamkan investasi besar di sebuah desa untuk pembangunan pabrik pemrosesan. Perwakilan perusahaan secara terselubung menawarkan dana hibah pembangunan fasilitas desa kepada Kepala Desa agar proses izin lingkungan dan administrasi dipercepat. Di sisi lain, masyarakat desa menolak keras investasi tersebut karena khawatir akan dampak pencemaran limbah dan rusaknya kearifan lokal. Langkah yang paling tepat dan mencerminkan integritas tinggi seorang Kepala Desa adalah...",
    "choices": [
      "Mengembalikan dana hibah tersebut dan memfasilitasi dialog transparan antara masyarakat dengan pihak perusahaan untuk menyampaikan aspirasi dan kekhawatiran warga.",
      "Menolak dana hibah secara tegas serta menyampaikan keputusan penolakan investasi secara langsung kepada perusahaan sesuai aspirasi warga desa.",
      "Mengadakan musyawarah desa guna memberikan sosialisasi dan pemahaman mendalam kepada masyarakat mengenai dampak positif investasi bagi perekonomian desa.",
      "Meminta pihak perusahaan melakukan studi AMDAL (Analisis Mengenai Dampak Lingkungan) secara independen terlebih dahulu sebelum memutuskan perizinan.",
      "Menyediakan ruang negosiasi agar sebagian keuntungan investasi dapat dialokasikan sebagai dana kompensasi lingkungan bagi masyarakat desa."
    ],
    "answer": 1,
    "explanation": "Nilai utama integritas seorang pejabat publik dalam menghadapi dilema perizinan terletak pada ketegasan menolak segala bentuk gratifikasi/suap serta konsistensi memperjuangkan aspirasi dan keselamatan rakyat yang diwakilinya. Dana hibah yang diberikan secara terselubung untuk mempercepat izin merupakan bentuk gratifikasi terselubung yang wajib ditolak. Jadi, opsi B benar karena menggabungkan tindakan tegas menolak gratifikasi dan keteguhan menjalankan amanah masyarakat. Opsi A salah karena membuka dialog lanjutan justru mengabaikan fakta bahwa warga sudah menolak dan ada upaya penyuapan sejak awal. Opsi C salah karena mengadakan sosialisasi terkesan memaksakan kehendak investasi dan mengabaikan kekhawatiran warga. Opsi D salah karena memindahkan penyelesaian isu pada studi AMDAL tanpa menyelesaikan potensi gratifikasi dan sikap warga. Opsi E salah karena melakukan negosiasi kompensasi mengindikasikan kompromi terhadap pelanggaran etika dan lingkungan."
  },
  {
    "prompt": "Seorang analis data bernama Maya selalu menyelesaikan tugasnya secara cermat hingga tuntas, bahkan rela meluangkan waktu di luar jam kerja untuk mempelajari teknologi pemrograman terbaru demi menunjang kualitas efisiensi pekerjaannya. Berdasarkan ilustrasi tersebut, sikap Maya mencerminkan nilai integritas berupa…",
    "choices": [
      "Disiplin tinggi terhadap waktu dan jam kerja yang disepakati.",
      "Keuletan dan kerja keras dalam menjalankan serta mengembangkan profesinya.",
      "Ketangguhan mental dalam menerima beban tugas dari atasan.",
      "Tanggung jawab moral dalam mematuhi perintah pimpinan.",
      "Kesederhanaan dalam menyikapi pencapaian hasil kerja harian"
    ],
    "answer": 1,
    "explanation": "Nilai utama dari etos kerja profesional berintegritas adalah keuletan dan semangat pembelajar sepanjang hayat dalam meningkatkan kualitas profesi. Sikap gigih menyelesaikan tugas hingga tuntas serta berinisiatif meningkatkan kapasitas diri secara mandiri mencerminkan keuletan yang melampaui rutinitas formal. Opsi A salah karena disiplin jam kerja lebih menyoroti kepatuhan jadwal, bukan inisiatif pengembangan kompetensi diri secara mandiri. Opsi B benar karena menangkap perpaduan kegigihan menyelesaikan tugas dan komitmen meningkatkan kemampuan profesi. Opsi C salah karena ketangguhan mental lebih merujuk pada daya tahan menghadapi tekanan/stres kerja. Opsi D salah karena fokus narasi adalah inisiatif mandiri, bukan sekadar kepatuhan pada instruksi atasan. Opsi E salah karena kesederhanaan berhubungan dengan pola hidup dan gaya diri, bukan peningkatkan kompetensi profesional."
  },
  {
    "prompt": "Seorang pejabat pembuat komitmen (PPK) di instansi pemerintah menerima tawaran dari sebuah penyedia jasa berupa fasilitas liburan keluarga gratis ke luar negeri setelah proyek pembangunan fasilitas umum selesai dikerjakan dengan baik sesuai kontrak. Pihak penyedia jasa beralasan itu adalah 'murni bonus kemitraan'. Tindakan pejabat yang tepat dan berintegritas adalah...",
    "choices": [
      "Menerima tawaran tersebut karena proyek telah selesai dengan hasil yang baik dan memuaskan.",
      "Menolak fasilitas liburan tersebut karena termasuk bentuk gratifikasi ilegal yang berkaitan dengan jabatan.",
      "Menerima fasilitas tersebut tetapi mengganti sebagian biaya secara pribadi agar tidak dianggap penyuapan.",
      "Meminta penyedia jasa mengganti fasilitas liburan dengan bantuan alat kantor untuk instansi.",
      "Menerima fasilitas liburan setelah berkonsultasi secara lisan dengan rekan sejawat di kantor."
    ],
    "answer": 1,
    "explanation": "Segala bentuk fasilitas, barang, atau uang yang diberikan oleh pihak ketiga yang memiliki hubungan kerja pejabat dikategorikan sebagai gratifikasi yang berpotensi menjadi suap terselubung. Pejabat berintegritas wajib menolak pemberian semacam ini karena dapat mempengaruhi independensi dan merusak etika jabatan. Jadi, opsi B benar karena secara eksplisit menolak pemberian gratifikasi.\n\nOpsi A salah karena penyelesaian proyek dengan baik merupakan kewajiban kontrak, bukan pembenar penerimaan bonus pribadi.\n\nOpsi C salah karena mengganti sebagian biaya tidak menghapus sifat dasar gratifikasi ilegal.\n\nOpsi D salah karena mengalihkan gratifikasi menjadi barang kantor tanpa prosedur resmi tetap melanggar aturan anti gratifikasi.\n\nOpsi E salah karena konsultasi lisan antar rekan kerja tidak melegalkan penerimaan gratifikasi."
  },
  {
    "prompt": "Mohammad Hatta, Wakil Presiden Pertama Republik Indonesia, dikenal sangat memegang teguh prinsip hidup bersih dan jujur. Beliau menolak memanfaatkan fasilitas negara untuk kepentingan pribadi, bahkan menolak menerima dana pensiun yang dianggapnya berlebihan dan tidak mencerminkan kondisi ekonomi rakyat pada masa itu. Nilai integritas utama dari Bung Hatta yang paling relevan diteladani oleh seorang Aparatur Sipil Negara (ASN) dalam kehidupan sehari-hari adalah...",
    "choices": [
      "Mendorong peningkatan efisiensi penggunaan sumber daya operasional kantor demi kemajuan instansi tempat bekerja.",
      "Mengutamakan kerja sama kelompok serta pembagian tugas yang adil dalam setiap pelaksanaan tugas pelayanan publik.",
      "Menjalani pola hidup sederhana serta menolak memanfaatkan wewenang dan fasilitas negara demi keuntungan pribadi.",
      "Menunjukkan sikap berani dalam mengkritik kebijakan pimpinan yang dianggap bertentangan dengan prinsip keadilan.",
      "Memiliki kemampuan mengelola keuangan pribadi secara mandiri tanpa tergantung pada tunjangan kinerja dari pemerintah."
    ],
    "answer": 2,
    "explanation": "Substansi keteladanan Bung Hatta yang menolak fasilitas dan dana pensiun berlebih terletak pada kesederhanaan hidup (simplicity) dan kejujuran menjaga integritas jabatan agar tidak menggunakan kekuasaan demi pengayaan diri/keluarga. Bagi ASN, hal ini tercermin dari sikap hidup sederhana serta tidak menyalahgunakan wewenang maupun aset negara. Jadi, opsi C benar. Opsi A salah karena efisiensi operasional kantor berfokus pada manajemen internal, bukan etika hidup sederhana pribadi tokoh. Opsi B salah karena kerja sama kelompok adalah dimensi kompetensi sosio-kultural, bukan esensi integritas kesederhanaan Bung Hatta. Opsi D salah karena sikap kritis terhadap pimpinan berfokus pada hierarki organisasi, bukan teladan kesederhanaan fasilitas. Opsi E salah karena ASN berhak menerima tunjangan resmi sesuai ketentuan; fokus Bung Hatta adalah menolak hal yang tidak sepatutnya/menjaga kesederhanaan."
  },
  {
    "prompt": "Seorang pejabat publik yang sebelumnya dipandang sebagai figur teladan terbukti melakukan penyalahgunaan anggaran daerah untuk kepentingan grup usahanya. Meskipun pejabat tersebut telah banyak berjasa membangun infrastruktur daerah, bagaimana masyarakat yang berintegritas dan berkesadaran hukum seharusnya merespons tindakan pejabat tersebut?",
    "choices": [
      "Memaklumi tindakan tersebut sebagai hal wajar selama kontribusi pembangunan yang dirasakan masyarakat lebih besar dari dana yang disalahgunakan.",
      "Mendorong pemberian pengampunan atau keringanan hukuman khusus mengingat jasa-jasa besarnya terhadap kemajuan daerah.",
      "Menyuarakan penolakan secara tegas serta menuntut penegakan hukum yang adil, jujur, dan transparan tanpa memandang jasa masa lalu.",
      "Mengabaikan kasus tersebut karena penanganan hukum merupakan ranah sepenuhnya dari aparat penegak hukum.",
      "Menunggu hingga masa jabatan pejabat tersebut berakhir sebelum menuntut pertanggungjawaban agar tidak mengganggu roda pemerintahan."
    ],
    "answer": 2,
    "explanation": "Prinsip integritas nasional dan persamaan di hadapan hukum (equality before the law) menuntut bahwa setiap pelanggaran hukum dan penyalahgunaan wewenang harus ditindak secara adil dan tegas, tanpa terpengaruh oleh jasa, status, atau prestasi pelaku di masa lalu. Masyarakat yang berintegritas harus aktif menyuarakan keadilan dan mendukung penegakan hukum secara adil. Jadi, opsi C benar karena mencerminkan sikap publik yang kritis, jujur, dan berlandaskan hukum.\n\nOpsi A salah karena prestasi masa lalu tidak boleh dijadikan pembenar atas kejahatan korupsi/penyelewengan.\n\nOpsi B salah karena pemberian amnesti/keringanan atas dasar jasa akan merusak prinsip persetaraan di mata hukum.\n\nOpsi D salah karena sikap apatis masyarakat justru memicu suburnya praktik korupsi.\n\nOpsi E salah karena menunda proses hukum dapat menghilangkan barang bukti dan merusak kepastian hukum."
  },
  {
    "prompt": "Seorang Pejabat Pembuat Komitmen (PPK) di instansi pemerintah sedang memimpin proses evaluasi lelang pengadaan barang/jasa bernilai miliaran rupiah. Dalam proses verifikasi, ia mendapati bahwa salah satu perusahaan peserta lelang yang mengajukan penawaran harga paling murah dan memenuhi syarat teknis adalah milik kerabat dekatnya. Tindakan yang paling menunjukkan integritas sesuai kode etik ASN adalah...",
    "choices": [
      "Tetap melanjutkan proses evaluasi secara objektif dan profesional tanpa membedakan peserta lelang.",
      "Melakukan konsultasi internal dengan Inspektorat/APIP untuk meminta arahan sebelum mengambil keputusan lelang.",
      "Menggugurkan perusahaan kerabatnya secara langsung guna menghindari prasangka buruk dan tuduhan nepotisme.",
      "Meminta panitia lelang lain untuk melakukan penilaian khusus terhadap perusahaan kerabatnya tersebut.",
      "Melaporkan potensi konflik kepentingan kepada atasan langsung serta mengundurkan diri dari kepanitiaan lelang tersebut."
    ],
    "answer": 4,
    "explanation": "Nilai utama pencegahan korupsi dan nepotisme dalam tata kelola pemerintahan terletak pada pencatatan dan penanganan konflik kepentingan (conflict of interest). Ketika pejabat publik memiliki hubungan kekeluargaan dengan peserta lelang, keberadaan potensi bias sangat tinggi sehingga pejabat wajib mendeklarasikan konflik tersebut dan menarik diri (recusal) dari proses pengambilan keputusan. Jadi, opsi E benar karena merupakan langkah etis dan hukum yang paling tepat sesuai tata kelola pengadaan barang/jasa. Opsi A salah karena merasa bisa 'objektif' tidak menghilagkan potensi konflik kepentingan yang melanggar transparansi. Opsi B salah karena konsultasi tidak menggantikan kewajiban utama untuk menyatakan pengunduran diri akibat konflik kepentingan. Opsi C salah karena menggugurkan secara sepihak tanpa alasan teknis merupakan tindakan diskriminatif yang tidak adil. Opsi D salah karena meminta panitia lain menilai tidak menghapus posisi PPK sebagai pengambil keputusan akhir."
  },
  {
    "prompt": "Komisi Yudisial (KY) memegang peranan krusial sebagai penyeimbang dan pengawas eksternal independen bagi kekuasaan kehakiman. Apabila KY gagal menjalankan fungsi pengawasan etika dan tidak mampu mematuhi mandat undang-undang dalam menegakkan Kode Etik dan Pedoman Perilaku Hakim (KEPPH), dampak paling mendasar yang akan terjadi pada sistem hukum Indonesia adalah...",
    "choices": [
      "Runtuhnya integritas sistem peradilan dan merosotnya kepercayaan masyarakat terhadap wibawa hukum serta kepastian keadilan.",
      "Terjadinya kelumpuhan total pada proses administrasi perkara di tingkat Mahkamah Agung dan badan peradilan di bawahnya.",
      "Pengambilalihan seluruh fungsi penegakan etika kehakiman oleh lembaga legislatif melalui Dewan Perwakilan Rakyat (DPR).",
      "Hilangnya kewenangan Mahkamah Agung dalam mengadili perkara pada tingkat kasasi dan peninjauan kembali.",
      "Timbulnya perselisihan kewenangan kelembagaan secara permanen antara Mahkamah Konstitusi dan Mahkamah Agung."
    ],
    "answer": 0,
    "explanation": "Tujuan utama pengawasan etika oleh KY adalah menjaga marwah, integritas, dan keagungan lembaga peradilan. Jika KY gagal atau tidak patuh pada UU, implikasi terbesarnya adalah hancurnya kepercayaan publik (public trust) terhadap keadilan dan peradilan di Indonesia. Jadi, opsi A benar karena merangkum dampak fundamental yuridis dan sosial. Opsi B salah karena administrasi teknis perkara merupakan ranah kepaniteraan MA, bukan ranah etika KY. Opsi C salah karena DPR tidak memiliki wewenang konstitusional untuk mengambil alih penegakan etika peradilan secara langsung. Opsi D salah karena kewenangan kasasi MA dijamin konstitusi dan tidak hilang akibat kinerja KY. Opsi E salah karena sengketa kewenangan antar-lembaga negara bukan akibat langsung dari kelalaian KY dalam mengawasi etika hakim."
  },
  {
    "prompt": "Dalam situasi darurat di mana keputusan cepat harus diambil terkait pengalokasian bantuan krisis nasional, bagaimana integritas seorang pemimpin berperan dalam menjaga kepercayaan publik dan stabilitas pemerintah?",
    "choices": [
      "Dengan menunjukkan keberanian mengambil risiko keputusan sepihak demi keuntungan kelompok pendukung utama.",
      "Dengan memastikan transparansi dan akuntabilitas dalam setiap keputusan yang diambil meskipun menghadapi tekanan situasi darurat.",
      "Dengan menyerahkan seluruh proses pengadaan bantuan kepada pihak luar negeri tanpa melibatkan lembaga pengawas independen.",
      "Dengan memprioritaskan privasi penyedia barang dan meretas akses data publik demi menghindari gejolak spekulasi harga.",
      "Dengan membatasi komunikasi publik dan merahasiakan kriteria penerima bantuan agar proses distribusi berjalan tenang."
    ],
    "answer": 1,
    "explanation": "Nilai utama integritas kepemimpinan dalam situasi krisis terletak pada keseimbangan antara kecepatan bertindak dan akuntabilitas publik. Dalam kondisi darurat, diskresi kepemimpinan memang diperlukan, namun transparansi kriteria serta keterbukaan informasi tetap menjadi pilar utama untuk mencegah korupsi dan mempertahankan stabilitas nasional. Opsi A salah karena mengutamakan keuntungan kelompok pendukung tertentu yang mencerminkan praktik nepotisme dan penyalahgunaan wewenang. Opsi B benar karena menangkap esensi integritas melalui keterbukaan informasi dan pertanggungjawaban publik di tengah tekanan krisis. Opsi C salah karena mengabaikan fungsi pengawasan independen yang justru membuka celah manipulasi dan penyelewengan. Opsi D salah karena melakukan tindakan ilegal dan penutupan akses publik yang mencederai prinsip kepemerintahan yang bersih. Opsi E salah karena pembatasan komunikasi dan kerahasiaan kriteria justru memicu krisis kepercayaan dan kecurigaan masyarakat."
  },
  {
    "prompt": "Seorang manajer proyek konstruksi menemukan kesalahan spesifikasi material ringan pada bagian struktur sekunder yang berpotensi mengurangi umur bangunan dari 25 tahun menjadi 20 tahun, tanpa membahayakan keselamatan. Jika diperbaiki, proyek akan mengalami keterlambatan jadwal dan pembengkakan biaya. Sikap yang paling mencerminkan integritas profesional tinggi adalah…",
    "choices": [
      "Mengabaikan temuan tersebut demi menjaga indikator kinerja utama (KPI) tim terkait ketepatan waktu dan efisiensi anggaran.",
      "Melaporkan fakta temuan tersebut secara jujur kepada pemilik proyek beserta alternatif solusi teknisnya, meskipun berisiko menunda jadwal.",
      "Menutup-nutupi kesalahan tersebut dan menawarkan kompensasi garansi pemeliharaan ekstra secara diam-diam di akhir proyek.",
      "Mengubah dokumen teknis perencanaan secara sepihak agar spesifikasi material tersebut terlihat sesuai dengan perjanjian awal.",
      "Melimpahkan seluruh keputusan penyesuaian material kepada subkontraktor lapangan tanpa melapor ke manajemen utama."
    ],
    "answer": 1,
    "explanation": "Nilai dasar integritas profesional menuntut kejujuran intelektual dan transparansi terhadap kualitas hasil kerja. Meskipun perbaikan berdampak pada risiko keterlambatan dan biaya, menyampaikan fakta sebenarnya kepada pemangku kepentingan merupakan komitmen moral untuk menjaga kepuasan jangka panjang serta kepercayaan publik. Opsi A salah karena mengorbankan kualitas dan kejujuran demi pencapaian target efisiensi semata. Opsi B benar karena menunjukkan sikap transparan, jujur, dan bertanggung jawab atas mutu pekerjaan kepada pemilik proyek. Opsi C salah karena berupaya menyembunyikan cacat mutu dengan solusi terselubung tanpa persetujuan terbuka. Opsi D salah karena merupakan bentuk pemalsuan dokumen dan pemutarbalikan fakta teknis. Opsi E salah karena melempar tanggung jawab kepemimpinan kepada pihak bawahan"
  },
  {
    "prompt": "Seorang pejabat pembuat komitmen (PPK) di sebuah dinas kementerian berhasil menyelesaikan proyek pembangunan fasilitas publik tepat waktu dengan kualitas sangat baik. Pihak kontraktor pelaksana yang merasa puas dan ingin menjaga hubungan baik memberikan hadiah berupa dua tiket liburan luar negeri beserta akomodasi penuh sebagai ucapan terima kasih atas kerja sama yang profesional. Langkah berintegritas yang wajib diambil oleh pejabat tersebut adalah...",
    "choices": [
      "Menolak pemberian tiket tersebut secara tegas namun santun karena tergolong gratifikasi yang berhubungan dengan jabatan.",
      "Menerima hadiah tersebut lalu menyerahkannya kepada instansi untuk dijadikan hadiah undian (doorprize) acara kebersamaan pegawai.",
      "Menerima tiket liburan tersebut dengan syarat tidak akan mempengaruhi penilaian proyek-proyek pembangunan di masa mendatang.",
      "Melaporkan pemberian tersebut ke Unit Pengendalian Gratifikasi (UPG) agar tiket tersebut dapat digunakan untuk perjalanan dinas resmi.",
      "Menolak pemberian tiket tersebut dan meminta kontraktor menggantinya dalam bentuk pemotongan harga proyek berikutnya."
    ],
    "answer": 0,
    "explanation": "Prinsip utama pengendalian gratifikasi menurut UU No. 20 Tahun 2001 (UU Tipikor) adalah menolak pada kesempatan pertama setiap pemberian yang berhubungan dengan jabatan atau berlawanan dengan kewajiban/tugas. Tiket liburan dari penyedia jasa merupakan bentuk gratifikasi yang wajib ditolak secara langsung. Jadi, opsi A benar. Opsi B salah karena mengalihkan gratifikasi menjadi doorprize tetap tergolong penampungan fasilitas ilegal yang dilarang. Opsi C salah karena menerima gratifikasi dengan syarat 'tetap objektif' adalah bentuk pembenaran (justifikasi) yang melanggar hukum. Opsi D salah karena pelaporan ke UPG hanya dilakukan jika gratifikasi tidak bisa ditolak secara langsung (misal dikirim tanpa pengirim jelas). Opsi E salah karena meminta konversi menjadi pemotongan harga merupakan bentuk negosiasi ilegal di luar dokumen kontrak resmi."
  },
  {
    "prompt": "Seorang mahasiswa yang terancam tidak lulus mata kuliah utama melakukan rekayasa dengan memalsukan lembar jawaban dan sertifikat kelulusan praktikum milik temannya agar nilainya diperbaiki oleh dosen pengampu. Mahasiswa tersebut berdalih bahwa tindakan tersebut terpaksa dilakukan demi mempertahankan beasiswa dan tidak mengecewakan orang tuanya. Bagaimana menilai tindakan mahasiswa ini dari sudut pandang integritas?",
    "choices": [
      "Tindakan tersebut mencerminkan integritas karena menunjukkan upaya keras dan tanggung jawab dalam mempertahankan beasiswa studi.",
      "Tindakan tersebut mencerminkan pelanggaran integritas fatal berupa penipuan dan kebohongan akademik yang merusak nilai kejujuran.",
      "Tindakan tersebut dapat dimaklumi secara etis karena dilakukan dalam kondisi darurat demi masa depan pendidikan.",
      "Tindakan tersebut merupakan langkah taktis yang bijaksana dalam menghadapi sistem penilaian perguruan tinggi yang kaku.",
      "Tindakan tersebut tidak relevan dinilai dari sudut pandang integritas karena fokus utama adalah kelulusan beasiswa."
    ],
    "answer": 1,
    "explanation": "Memalsukan dokumen dan hasil akademik merupakan pelanggaran integritas berat berupa penipuan, manipulasi, dan kebohongan akademik. Integritas menuntut kejujuran pada setiap proses, bukan menjustifikasi segala cara (*ends justify the means*) demi alasan darurat atau tekanan personal. Jadi, opsi B benar karena dengan tegas menilai tindakan tersebut sebagai pelanggaran integritas akibat perbuatan manipulatif/penipuan.\n\nOpsi A salah karena menghalalkan pemalsuan demi beasiswa bertentangan total dengan prinsip kejujuran integritas.\n\nOpsi C salah karena integritas tidak mengenal pemakluman atas tindakan manipulasi/pemalsuan dokumen.\n\nOpsi D salah karena tindakan curang tidak pernah bisa dikategorikan sebagai langkah bijaksana.\n\nOpsi E salah karena ranah akademik sangat bergantung pada nilai integritas kejujuran."
  },
  {
    "prompt": "Saat mengikuti ujian seleksi jabatan berisiko tinggi, seorang peserta tidak sengaja melihat lembar jawaban peserta di sebelahnya yang dikenal sangat mahir dan menemukan beberapa jawaban yang berbeda dari pilihannya. Tindakan yang mencerminkan integritas diri dan kemandirian berpikir adalah...",
    "choices": [
      "Menyalin seluruh jawaban peserta mahir tersebut agar peluang kelulusan menjadi lebih tinggi.",
      "Mengubah sebagian jawaban sendiri agar menyerupai jawaban peserta mahir tersebut demi rasa aman.",
      "Mengabaikan informasi yang diperoleh secara tidak sengaja dan tetap berpegang teguh pada hasil analisis sendiri.",
      "Melaporkan peserta mahir tersebut kepada pengawas ujian atas dugaan sengaja memperlihatkan lembar jawaban.",
      "Mencoba mengonfirmasi jawaban secara perlahan kepada peserta di sebelahnya saat pengawas sedang lengah."
    ],
    "answer": 2,
    "explanation": "Integritas pribadi dalam ranah evaluasi akademis/seleksi bertumpu pada kejujuran proses, kejujuran pada kemampuan diri, serta keyakinan pada prinsip pribadi. Memanfaatkan informasi yang diperoleh tidak sah meskipun tanpa sengaja mencederai prinsip keadilan seleksi. Opsi A salah karena merupakan tindakan kecurangan (menyontek) yang merusak keadilan seleksi. Opsi B salah karena menunjukkan ketiadaan kepercayaan diri dan kompromi terhadap integritas. Opsi C benar karena menegakkan kemandirian berpikir dan kejujuran penuh terhadap proses seleksi. Opsi D salah karena tindakan reaktif yang belum tentu terbukti (peserta lain belum tentu sengaja memperlihatkan). Opsi E salah karena melanggar tata tertib ujian melalui komunikasi ilegal."
  },
  {
    "prompt": "Seorang Aparatur Sipil Negara (ASN) menemukan adanya kelebihan dana operasional yang masuk ke rekening pribadinya akibat kesalahan administrasi bendahara. Tidak ada sistem pengawasan yang mendeteksi kesalahan tersebut. Sikap ASN yang paling menjunjung tinggi integritas adalah...",
    "choices": [
      "Menyimpan dana tersebut dan menggunakannya untuk menutupi kebutuhan operasional kantor yang tidak memiliki anggaran resmi.",
      "Menunggu konfirmasi atau teguran resmi dari auditor internal sebelum melakukan tindakan pengembalian.",
      "Membagi dana kelebihan tersebut kepada seluruh anggota tim secara merata sebagai bentuk apresiasi kerja keras.",
      "Mengembalikan sebagian besar dana dan mengambil sebagian kecil sebagai kompensasi atas kerumitan tugas dinas.",
      "Mengirimkan kembali seluruh kelebihan dana ke kas negara serta meminta bukti tanda penerimaan resmi segera setelah menyadarinya."
    ],
    "answer": 4,
    "explanation": "Prinsip utama integritas dalam tata kelola keuangan publik adalah penolakan terhadap segala bentuk kepemilikan harta yang bukan haknya (anti-korupsi). ASN yang berintegritas bertindak proaktif dalam mengoreksi kesalahan keuangan tanpa menunggu proses audit formal. Opsi A salah karena menggunakan dalih niat baik untuk membenarkan tindakan ilegal (penggunaan dana tanpa basis aturan). Opsi B salah karena bersikap pasif dan oportunis dalam merespons kesalahan keuangan. Opsi C salah karena merupakan bentuk penyalahgunaan dana negara berkedok kesejahteraan tim. Opsi D salah karena mencoba merasionalisasi pemilikan sebagian dana yang tidak sah. Opsi E benar karena mencerminkan sikap proaktif, jujur, dan akuntabel dalam mengembalikan aset publik ke kas negara."
  },
  {
    "prompt": "Rian adalah seorang bendahara pengadaan barang di sebuah instansi pemerintah. Saat memeriksa laporan keuangan akhir tahun, ia menemukan kelebihan pembayaran dari vendor sebesar Rp15.000.000 akibat kesalahan sistem transfer. Vendor tersebut menyatakan bahwa uang tersebut tidak perlu dikembalikan dan bisa dipakai sebagai 'bonus kerja' untuk Rian karena laporan sudah terlanjur ditutup. Tindakan paling berintegritas yang wajib dilakukan Rian adalah...",
    "choices": [
      "Menerima dana tersebut dan membagikannya secara transparan kepada seluruh staf keuangan sebagai bonus akhir tahun.",
      "Melaporkan kelebihan pembayaran tersebut kepada atasan dan memproses pengembalian dana kas negara sesuai mekanisme yang berlaku.",
      "Menyimpan dana tersebut dalam rekening penampungan instansi untuk digunakan pada kegiatan sosial panti asuhan.",
      "Mengembalikan dana tersebut secara pribadi langsung ke vendor tanpa perlu membuat catatan resmi agar tidak merusak laporan keuangan.",
      "Menolak dana tersebut namun menyarankan vendor untuk menyalurkannya sebagai dana sponsorship acara kantor."
    ],
    "answer": 1,
    "explanation": "Prinsip integritas utama dalam pengelolaan keuangan publik adalah kejujuran, akuntabilitas, dan kepatuhan pada regulasi hukum. Kelebihan pembayaran dana publik bukan merupakan hak pribadi maupun instansi. Menganggap kelebihan tersebut sebagai bonus adalah bentuk indikasi tindak pidana korupsi/gratifikasi. Jadi, opsi B benar karena pelaporan resmi dan pengembalian kas negara adalah prosedur baku yang memelihara transparansi dan keabsahan hukum.\n\nOpsi A salah karena membagikan uang yang bukan hak merupakan tindakan penyalahgunaan wewenang dan pembagian hasil korupsi/gratifikasi.\n\nOpsi C salah karena tujuan mulia (kegiatan sosial) tidak boleh dibiayai menggunakan dana yang diperoleh secara tidak sah/ilegal.\n\nOpsi D salah karena pengembalian tanpa catatan resmi berisiko menimbulkan manipulasi pembukuan dan menghilangkan jejak transparansi.\n\nOpsi E salah karena mengalihkan dana salah transfer menjadi sponsorship tetap melanggar etika dan aturan tata kelola keuangan instansi."
  },
  {
    "prompt": "Sebuah organisasi pemuda desa mengelola dana bantuan sosial untuk warga terdampak bencana. Bendahara organisasi selalu mengunggah laporan pengeluaran harian beserta foto kwitansi secara terbuka di papan pengumuman desa dan media sosial agar seluruh warga dapat memantau. Langkah ini merupakan bentuk implementasi integritas...",
    "choices": [
      "Transparansi dan akuntabilitas publik dalam pengelolaan amanah dana masyarakat.",
      "Kerja keras dalam menyusun laporan keuangan yang rumit secara tepat waktu.",
      "Kesederhanaan dalam mengelola anggaran pengeluaran organisasi desa.",
      "Keberanian dalam menghadapi potensi protes dari warga desa setempat.",
      "Kedisiplinan dalam mematuhi instruksi tertulis dari kepala desa setempat."
    ],
    "answer": 0,
    "explanation": "Pilar utama dari integritas tata kelola publik dan sosial adalah transparansi dan keterbukaan informasi pertanggungjawaban (akuntabilitas). Membuka akses data keuangan beserta bukti pendukung kepada publik secara proaktif mencegah penyalahgunaan anggaran dan membangun kepercayaan warga. Opsi A benar karena secara tepat menangkap nilai keterbukaan informasi dan pertanggungjawaban dana publik secara penuh. Opsi B salah karena penyusunan laporan menekankan aspek teknis, bukan dampak moral keterbukaan informasi bagi publik. Opsi C salah karena kesederhanaan berhubungan dengan pemangkasan gaya hidup/biaya, bukan asas publikasi laporan keuangan. Opsi D salah karena keberanian merupakan efek samping, bukan tujuan utama dilakukannya publikasi transparan. Opsi E salah karena tindakan tersebut berfokus pada pertanggungjawaban publik, bukan sekadar kepatuhan hierarkis administratif."
  },
  {
    "prompt": "Seorang kepala bagian keuangan di instansi swasta diminta oleh direksi untuk menyusun laporan perpajakan dengan memanfaatkan 'celah hukum' (tax avoidance) yang berbatas tipis dengan kejahatan pajak (tax evasion) demi memangkas pembayaran pajak tahunan. Sikap kepala bagian keuangan yang berintegritas tinggi adalah…",
    "choices": [
      "Menolak praktik manipulasi riskan tersebut dan memberikan rekomendasi perencanaan pajak yang legal serta patuh regulasi.",
      "Menuruti perintah direksi sepenuhnya karena hal tersebut merupakan tanggung jawab pimpinan tertinggi.",
      "Mengundurkan diri secara mendadak tanpa memberikan penjelasan atau laporan keuangan yang jelas.",
      "Mengubah laporan keuangan sesuai perintah direksi namun meminta komisi tambahan atas risiko tersebut.",
      "Membocorkan rahasia keuangan perusahaan ke media massa secara anonim sebelum berdiskusi dengan manajemen."
    ],
    "answer": 0,
    "explanation": "Integritas profesional di bidang keuangan menuntut kepatuhan pada hukum perpajakan dan penolakan terhadap manipulasi riskan. Seorang profesional wajib mengedukasi manajemen tentang batasan hukum yang sah ketimbang mengorbankan kepatuhan demi efisiensi yang melanggar etika. Opsi A benar karena secara tepat menegakkan kepatuhan aturan perpajakan dan profesionalisme penolakan manipulasi. Opsi B salah karena melakukan kepatuhan buta pada instruksi pimpinan yang melanggar prinsip etika. Opsi C salah karena sikap lepas tangan dan tidak bertanggung jawab dalam menyelesaikan persoalan profesional. Opsi D salah karena melakukan tindakan oportunis demi keuntungan pribadi di atas pelanggaran hukum. Opsi E salah karena melanggar kerahasiaan perusahaan tanpa melalui mekanisme perbaikan internal yang sah."
  },
  {
    "prompt": "Seorang pegawai ASN muda yang baru ditempatkan di bagian pengadaan barang dan jasa menemukan indikasi kuat adanya rekayasa tender yang melibatkan pimpinan unit kerjanya. Pegawai tersebut merasa dilematis dan khawatir laporan penyelewengan ini akan mengancam posisi serta keselamatan karirnya. Langkah paling tepat dan berintegritas yang harus diambil oleh pegawai tersebut adalah...",
    "choices": [
      "Membocorkan informasi kecurangan tersebut secara anonim ke media sosial agar menjadi viral dan mendapat perhatian publik.",
      "Melaporkan indikasi penyelewengan tersebut melalui saluran resmi Whistleblowing System (WBS) atau instansi pengawas internal dengan melampirkan bukti-bukti pendukung yang sah.",
      "Membahas temuan tersebut dengan rekan sejawat terlebih dahulu untuk menggalang dukungan politik internal kantor.",
      "Mengundurkan diri dari instansi tersebut untuk menghindari keterlibatan dalam praktik kecurangan lingkungan kerja.",
      "Memilih diam dan fokus pada tugas pribadi karena posisi sebagai ASN baru sangat rentan terhadap intimidasi."
    ],
    "answer": 1,
    "explanation": "Seorang ASN yang berintegritas wajib berani menegakkan kejujuran ketika menemukan pelanggaran. Prosedur yang paling tepat, aman, dan rasional adalah menggunakan saluran pelaporan resmi seperti Whistleblowing System (WBS) atau pengawas internal (APIP) yang dijamin kerahasiaannya dengan menyertakan bukti-bukti otentik, bukan bertindak gegabah atau melari dari tanggung jawab. Jadi, opsi B benar karena menunjukkan keberanian moral yang terukur dan berprosedur.\n\nOpsi A salah karena menyebarkan isu ke media sosial tanpa jalur resmi berisiko pelanggaran kerahasiaan/UU ITE dan bias informasi.\n\nOpsi C salah karena menggalang kekuatan internal tanpa prosedur resmi berisiko menciptakan konflik internal dan pembocoran rahasia.\n\nOpsi D salah karena mengundurkan diri adalah bentuk pembiaran terhadap kejahatan (avoidance).\n\nOpsi E salah karena bersikap diam mencerminkan sikap apatis dan kompromi terhadap korupsi"
  },
  {
    "prompt": "Seorang manajer SDM (HRD) menemukan fakta bahwa seorang calon pegawai yang meraih nilai tes tertinggi pada seleksi penerimaan karyawan ternyata pernah terlibat pelanggaran etika ringan di perusahaan sebelumnya. Calon tersebut merupakan keponakan dari direktur utama perusahaan. Sikap manajer SDM yang menunjukkan integritas dan independensi adalah...",
    "choices": [
      "Langsung meloloskan calon tersebut tanpa catatan agar hubungan dengan direktur utama tetap harmonis.",
      "Menolak secara sepihak tanpa memberikan laporan rekam jejak yang objektif kepada tim seleksi.",
      "Menyampaikan laporan rekam jejak dan fakta riwayat etika pelamar secara objektif dalam rapat keputusan akhir tanpa pengaruh nepotisme.",
      "Meminta calon tersebut memberikan sejumlah uang jaminan etika sebagai syarat kelolosan.",
      "Mengubah standar kualifikasi etika perusahaan agar keponakan direktur tersebut secara otomatis memenuhi syarat."
    ],
    "answer": 2,
    "explanation": "Prinsip utama integritas dalam tata kelola SDM profesional adalah objektivitas, kejujuran penyampaian data, dan penolakan terhadap nepotisme. Seorang manajer SDM wajib memberikan fakta secara utuh dan imparsial tanpa terpengaruh oleh posisi atau relasi kekeluargaan pimpinan. Opsi A salah karena tunduk pada praktik nepotisme dan kompromi terhadap etika kerja. Opsi B salah karena bersikap subjektif dan mengabaikan prosedur rapat keputusan bersama. Opsi C benar karena menegakkan objektivitas penyesuaian rekam jejak dan kejujuran tanpa intervensi nepotisme. Opsi D salah karena tindakan tersebut merupakan pemerasan atau pungutan liar berkedok jaminan. Opsi E salah karena melanggar konsistensi aturan demi kepentingan individu tertentu."
  },
  {
    "prompt": "Seorang dokter di rumah sakit pemerintah mendapati bahwa stok obat-obatan bersubsidi untuk pasien kurang mampu sering mengalami kelangkaan karena sistem pencatatan logistik yang kacau. Dokter tersebut menemukan bahwa sejawatnya sering memberikan obat tersebut kepada pasien non-subsidi demi kemudahan operasional. Tindakan yang mencerminkan integritas dan kepedulian sosial adalah...",
    "choices": [
      "Mengabaikan hal tersebut karena hal itu sudah menjadi kebiasaan lama di rumah sakit.",
      "Menyimpan persediaan obat subsidi secara pribadi di ruang kerjanya khusus untuk pasiennya sendiri.",
      "Meminta pasien kurang mampu untuk membeli obat non-subsidi di apotek luar dengan uang pribadi.",
      "Melaporkan ketidaksesuaian alokasi obat kepada komite etika dan mendorong pembenahan sistem distribusi logistik.",
      "Menegur rekan sejawatnya di depan umum saat pelayanan pasien berlangsung."
    ],
    "answer": 3,
    "explanation": "Nilai integritas dalam pelayanan publik kesehatan berfokus pada kepatuhan peruntukan wewenang dan perbaikan sistemik berbasis etika. Mengoreksi penyalahgunaan alokasi hak rakyat miskin melalui jalur resmi (komite etika/pembenahan sistem) memastikan keadilan sosial terwujud. Opsi A salah karena bersikap pembiaran (apatis) terhadap penyalahgunaan alokasi hak publik. Opsi B salah karena melakukan tindakan sepihak yang melanggar prosedur penyimpanan logistik resmi. Opsi C salah karena memberatkan pasien yang seharusnya berhak menerima subsidi negara. Opsi D benar karena menunjukkan sikap proaktif perbaikan sistem logistik dan penegakan keadilan subsidi. Opsi E salah karena tindakan konfrontasi publik melanggar etika profesional antar sejawat tanpa menyelesaikan perbaikan sistem logistik."
  },
  {
    "prompt": "Dua calon Kepala Desa Sukamaju, yaitu Bapak Ahmad dan Bapak Burhan, secara kebetulan merupakan saudara kandung yang bersaing dalam Pilkades tahun ini. Pada hari pemungutan suara, keduanya duduk berdampingan di panggung utama sambil tersenyum dan menyapa para warga tanpa memperlihatkan ketegangan atau rasa permusuhan. Sikap yang ditunjukkan oleh kedua calon kepala desa tersebut merefleksikan penerapan nilai integritas, yaitu...",
    "choices": [
      "Sikap transparansi dan akuntabilitas dalam menjaga iklim demokrasi yang jujur dan adil di tingkat desa.",
      "Sikap kedewasaan politik untuk menerima apapun hasil akhir dari pemilihan umum yang berlangsung.",
      "Sikap profesionalisme dan pemisahan kepentingan pribadi (kekeluargaan) demi menjaga kondusivitas dan persatuan masyarakat.",
      "Sikap komitmen moral terhadap warga desa untuk memprioritaskan kepentingan publik di atas hak pilih pribadi.",
      "Sikap keadilan sosial dalam mengakomodasi hak politik masyarakat tanpa membedakan ikatan kekeluargaan."
    ],
    "answer": 2,
    "explanation": "Nilai utama dari tindakan kedua calon kepala desa tersebut terletak pada pemisahan kepentingan pribadi (kekeluargaan) dan profesionalisme publik. Dalam kontestasi politik lokal, potensi konflik akibat ikatan kekeluargaan sangat tinggi. Namun, mereka mampu mengesampingkan rivalitas pribadi demi menjaga kondusifitas, persatuan masyarakat, dan ketertiban umum. Jadi, opsi C benar karena menangkap inti sikap profesional dalam mengelola konflik kepentingan kekeluargaan.\n\nOpsi A salah karena fokus narasi bukan pada transparansi sistem/prosedur pemilihan.\n\nOpsi B salah karena pemungutan suara baru berlangsung, belum pada tahap penerimaan hasil akhir.\n\nOpsi D salah karena tidak ada isu penyerahan hak pilih pribadi yang disinggung.\n\nOpsi E salah karena keadilan sosial berkaitan dengan pemerataan hak/fasilitas, bukan sikap persaudaraan antar calon."
  },
  {
    "prompt": "Seorang jurnalis mendapatkan rekaman rahasia mengenai tindak pidana korupsi yang melibatkan pejabat daerah populer yang selama ini dikenal sangat baik oleh masyarakat. Jurnalis tersebut diancam dan diajak bernegosiasi dengan penawaran sejumlah dana besar agar menghentikan penulisan berita. Tindakan jurnalis yang mencerminkan integritas profesi adalah...",
    "choices": [
      "Membatalkan penerbitan berita demi keamanan pribadi dan keluarga.",
      "Menerima uang penawaran tersebut lalu menyumbangkannya ke lembaga panti asuhan.",
      "Menolak imbalan, memverifikasi kebenaran bukti secara ketat, dan mempublikasikan berita secara objektif demi kepentingan publik.",
      "Menunda berita sampai pejabat tersebut tidak lagi menjabat di pemerintahan.",
      "Mengubah narasi berita menjadi lebih samar agar tidak menyudutkan pihak mana pun."
    ],
    "answer": 2,
    "explanation": "Nilai tertinggi dalam kode etik jurnalistik dan integritas media adalah kebenaran faktual dan independensi publik dari suap maupun ancaman. Menyajikan informasi fakta yang terverifikasi demi kepentingan umum merupakan wujud nyata integritas profesi pers. Opsi A salah karena tunduk pada intimidasi dan mengorbankan hak informasi publik. Opsi B salah karena mencoba membenarkan penerimaan uang suap melalui dalih amal. Opsi C benar karena menunjukkan independensi pers, ketahanan atas suap/ancaman, serta komitmen pada kebenaran publik. Opsi D salah karena bersikap kompromistis dan menghilangkan aktualitas informasi penting. Opsi E salah karena melakukan bias pemberitaan dan mengaburkan fakta korupsi."
  },
  {
    "prompt": "Ki Hajar Dewantara (Raden Mas Soewardi Soeryaningrat) secara berani mengkritik kebijakan pemerintah kolonial Belanda melalui tulisan 'Als ik eens Nederlander was' (Seandainya Aku Seorang Belanda), meskipun ia mengetahui konsekuensi pembuangan/pengasingan yang akan diterimanya. Upaya lanjutannya mendirikan Taman Siswa mempertegas bahwa nilai integritas utama yang diteladani dari beliau adalah...",
    "choices": [
      "Keberanian menyuarakan kebenaran dan keteguhan prinsip untuk memperjuangkan hak pendidikan bangsa meski di bawah tekanan dan risiko pribadi.",
      "Rasa ketidakpuasan terhadap sistem pemerintahan asing sehingga mendorong gerakan politik praktis.",
      "Tanggung jawab sosial untuk membuktikan kepada masyarakat pribumi bahwa dirinya adalah sosok yang berpendidikan tinggi.",
      "Bentuk kompromi diplomatik antara tokoh pergerakan nasional dengan pihak pemerintah kolonial Hindia Belanda.",
      "Sikap kepedulian pasif yang berfokus pada pengembangan sarana fisik sekolah tanpa terlibat pergerakan politik."
    ],
    "answer": 0,
    "explanation": "Integritas tokoh Ki Hajar Dewantara ditandai oleh keberanian moral (moral courage) serta konsistensi prinsip. Beliau bersedia mengambil risiko dipenjara dan diasingkan demi menyuarakan kebenaran serta ketidakadilan penguasa kolonial, lalu melanjutkannya secara konsisten melalui pembangunan fondasi pendidikan bangsa melalui Taman Siswa. Jadi, opsi A benar karena merangkum keberanian menyuarakan kebenaran dan keteguhan perjuangan di tengah ancaman bahaya.\n\nOpsi B salah karena perjuangan beliau berlandaskan moral dan cita-cita pendidikan bangsa, bukan sekadar ketidakpuasan emosional.\n\nOpsi C salah karena tindakan beliau murni untuk mencerdaskan rakyat, bukan untuk ajang pembuktian atau kesombongan status sosial.\n\nOpsi D salah karena pamplet kritik tajam beliau merupakan bentuk perlawanan prinsipil, bukan strategi kompromi diplomasi.\n\nOpsi E salah karena gerakan Ki Hajar Dewantara bersifat sangat aktif dan berdampak besar pada pergerakan nasional."
  },
  {
    "prompt": "Bapak Wisnu adalah seorang Kepala Cabang perusahaan swasta di Bogor. Dalam rapat evaluasi tahunan, pimpinan pusat memutuskan untuk memutasi Wisnu ke cabang kota lain sebagai bagian dari penataan ulang manajemen pascabencana. Karena merasa tidak terima dengan keputusan mutasi tanpa persetujuan pribadinya, Wisnu mengancam akan membocorkan rahasia data nasabah/perusahaan kepada kompetitor jika keputusan tersebut tidak dibatalkan. Tindakan yang ditunjukkan oleh Wisnu merupakan...",
    "choices": [
      "Bentuk pelanggaran serius terhadap kode etik profesionalisme, kerahasiaan data perusahaan, dan penyalahgunaan wewenang demi kepentingan pribadi.",
      "Bentuk kegagalan berkomunikasi dalam menyampaikan hak berpendapat saat rapat evaluasi berlangsung.",
      "Sikap pembelaan diri yang wajar dalam mempertahankan hak atas posisi jabatan di cabang Bogor.",
      "Bentuk pelanggaran terhadap hak asasi manusia dalam mengekspresikan ketidakpuasan kerja.",
      "Tindakan kurang bijak dalam memimpin rapat koordinasi dengan para pimpinan pusat."
    ],
    "answer": 0,
    "explanation": "Ancaman membocorkan data rahasia perusahaan demi menolak keputusan mutasi merupakan pelanggaran berat terhadap etika profesi, loyalitas organisasi, dan kerahasiaan data (confidentiality). Seorang pemangku jabatan tidak boleh menjadikan aset kerahasiaan lembaga sebagai alat pemerasan pribadi saat menghadapi kendala karir. Jadi, opsi A benar karena secara tepat mengidentifikasi pelanggaran kode etik dan penyalahgunaan wewenang.\n\nOpsi B salah karena pengancaman pembocoran data bukan sekadar masalah komunikasi, melainkan tindak pelanggaran etika dan hukum.\n\nOpsi C salah karena mengancam keamanan data perusahaan demi ego pribadi tidak pernah dianggap sebagai pembelaan diri yang sah.\n\nOpsi D salah karena kebebasan berpendapat tidak mencakup tindakan pengancaman atau pembocoran rahasia lembaga.\n\nOpsi E salah karena istilah 'kurang bijak' sangat meremehkan pelanggaran berat yang telah dilakukan Samsul."
  },
  {
    "prompt": "Bapak Hendra adalah seorang pemilik pabrik tekstil yang cukup sukses. Mengingat bisnisnya didukung penuh oleh masyarakat sekitar yang sebagian besar menjadi tenaga kerjanya, ia secara rutin menyisihkan sebagian keuntungan perusahaan untuk menyediakan sarana air bersih dan program beasiswa pendidikan anak warga. Tindakan yang dilakukan oleh Bapak Hendra merupakan wujud nyata dari...",
    "choices": [
      "Bentuk keadilan distributif untuk membagikan pendapatan perusahaan secara merata kepada seluruh warga desa.",
      "Bentuk kepedulian sosial dan tanggung jawab moral (CSR) sebagai wujud rasa terima kasih atas dukungan masyarakat.",
      "Rasa empati pribadi agar masyarakat sekitar tidak merasa tertinggal secara ekonomi dari pemilik usaha.",
      "Kewajiban hukum yang mutlak diatur oleh pemerintah daerah bagi setiap pemilik usaha lokal.",
      "Rasa patriotisme tinggi dalam rangka memajukan kesejahteraan umum tanpa mengharapkan timbal balik."
    ],
    "answer": 1,
    "explanation": "Wujud integritas dalam dunia usaha/bisnis tecermin melalui tanggung jawab moral lingkungan (Corporate Social Responsibility) dan kepedulian sosial. Tindakan menyisihkan keuntungan untuk sarana umum dan beasiswa bukan sekadar aksi sosial acak, melainkan komitmen timbal balik dan rasa terima kasih atas kontribusi masyarakat sekitar yang mendukung keberlangsungan usaha. Jadi, opsi B benar karena secara komprehensif mencakup unsur kepedulian sosial dan tanggung jawab moral perusahaan.\n\nOpsi A salah karena bantuan tersebut bukan bentuk pembagian pendapatan perusahaan secara rata/proporsional kepada seluruh warga.\n\nOpsi C salah karena tindakan tersebut didasari hubungan kemitraan sosial, bukan sebatas belas kasihan/empati pribadi semata.\n\nOpsi D salah karena narasi menekankan kesadaran tulus pelaku usaha, bukan keterpaksaan karena ancaman regulasi hukum.\n\nOpsi E salah karena konsep utama yang relevan adalah integritas sosial lokal/CSR, bukan semangat nasionalisme/patriotisme negara."
  },
  {
    "prompt": "Ketika seluruh rekan kerjanya meninggalkan kantor lebih awal saat pimpinan tidak berada di tempat, Arsa tetap bertahan di meja kerjanya untuk menyelesaikan laporan keuangan bulanan yang harus diserahkan besok pagi sesuai dengan standar mutu operasional. Sikap yang ditunjukkan oleh Arsa merupakan bentuk integritas yaitu...",
    "choices": [
      "Bentuk rasa takut akan teguran pimpinan saat evaluasi kinerja bulanan.",
      "Sikap individualistis yang kurang mendukung solidaritas sesama rekan kerja di kantor.",
      "Konsistensi komitmen dan kedisiplinan kerja tanpa perlu diawasi oleh pimpinan (self-control).",
      "Bentuk pencitraan diri agar mendapatkan penilaian kinerja terbaik dari pimpinan.",
      "Kepatuhan formalitas terhadap aturan jam kerja instansi pemerintah."
    ],
    "answer": 2,
    "explanation": "Integritas sejati tercermin dari konsistensi dan kedisiplinan diri (self-discipline) untuk tetap bekerja secara profesional meskipun tanpa pengawasan langsung. Orang berintegritas melakukan hal yang benar karena komitmen tanggung jawab moral terhadap tugasnya, bukan karena dilihat orang lain. Jadi, opsi C benar karena secara tepat menggambarkan konsistensi komitmen dan kedisiplinan mandiri.\n\nOpsi A salah karena pekerjaannya didasari rasa tanggung jawab pada tenggat waktu, bukan semata ketakutan diputus sanksi.\n\nOpsi B salah karena meninggalkan tugas sebelum selesai demi solidaritas yang salah bukanlah wujud integritas.\n\nOpsi D salah karena tindakan Rendi dilakukan saat pimpinan tidak berada di lokasi, sehingga bukan tindakan pencitraan.\n\nOpsi E salah karena motivasinya adalah kesadaran mutu penyelesaian tugas, bukan sekadar menggugurkan kewajiban hadir jam kerja."
  },
  {
    "prompt": "Seorang staf junior di sebuah perusahaan BUMN, Dimas, tidak sengaja menemukan bukti bahwa timnya secara sengaja merekayasa spesifikasi mutu bahan bangunan untuk menekan biaya proyek demi mengejar target bonus tahunan. Jika ia melaporkan hal ini, kemungkinan besar ia akan dimusuhi oleh rekan sejawatnya. Langkah yang mencerminkan integritas moral paling tepat bagi Dimas adalah...",
    "choices": [
      "Diam saja karena posisi Dimas masih staf junior dan tidak memiliki wewenang untuk mencampuri keputusan tim.",
      "Menegur rekan-rekannya secara tertutup dan berjanji akan merahasiakan hal tersebut jika mereka membatalkan rekayasa.",
      "Melaporkan temuan rekayasa mutu tersebut secara resmi melalui saluran pelaporan pelanggaran (whistleblowing system) atau kepada atasan yang berwenang.",
      "Mengundurkan diri dari perusahaan agar tidak terlibat dalam dampak hukum dari rekayasa proyek tersebut.",
      "Menyebarkan bukti rekayasa tersebut ke media sosial agar publik memberikan sanksi sosial kepada timnya."
    ],
    "answer": 2,
    "explanation": "Keberanian moral seorang pegawai ditunjukkan melalui sikap bersuara (whistleblowing) dan menolak pembiaran penyimpangan. Rekayasa mutu bahan bangunan sangat membahayakan keselamatan umum dan merugikan negara. Pelaporan melalui saluran resmi (whistleblowing system) memberikan perlindungan pelapor sekaligus memastikan penanganan secara proporsional. Jadi, opsi C benar karena tindakan tersebut menaruh kepentingan publik di atas kenyamanan relasi kerja pribadi.\n\nOpsi A salah karena sikap pembiaran (pasif) membuat seseorang tergolong bersekongkol secara moral dalam pelanggaran tersebut.\n\nOpsi B salah karena berjanji merahasiakan pelanggaran adalah bentuk kompromi yang mengkompromikan mutu dan keselamatan publik.\n\nOpsi D salah karena mengundurkan diri hanya menyelamatkan diri sendiri tanpa menyelesaikan potensi bahaya bagi masyarakat.\n\nOpsi E salah karena membocorkan ke media sosial tanpa prosedur internal melanggar etika kerahasiaan data dan dapat memicu kegaduhan liar."
  },
  {
    "prompt": "Seorang pejabat pembuat komitmen (PPK) di sebuah dinas pemerintahan mengarahkan pemenang tender proyek pembangunan fasilitas umum kepada perusahaan milik kerabat dekatnya, meskipun terdapat penawaran lain yang lebih berkualitas dan hemat anggaran. Tindakan pejabat tersebut mencerminkan pelanggaran nilai integritas berupa…",
    "choices": [
      "Bentuk pembiaran terhadap ketidakdisiplinan administrasi dalam proses seleksi tender.",
      "Bentuk kepedulian sosial untuk membantu perekonomian anggota keluarga yang sedang berkembang.",
      "Sikap kurang cermat dalam mengevaluasi dokumen kualifikasi penyedia jasa.",
      "Bentuk kebebasan diskresi pimpinan dalam menentukan mitra kerja terbaik bagi dinas.",
      "Penyalahgunaan wewenang jabatan yang memicu konflik kepentingan dan merusak keadilan persaingan usaha."
    ],
    "answer": 4,
    "explanation": "Mengarahkan pemenang tender kepada kerabat dekat tanpa memedulikan kualitas dan efisiensi anggaran merupakan tindakan nepotisme dan penyalahgunaan wewenang (abuse of power). Tindakan ini menciptakan konflik kepentingan (conflict of interest) dan merugikan keuangan negara serta rasa keadilan penyedia jasa lainnya. Jadi, opsi E benar karena menegaskan terjadinya penyalahgunaan wewenang dan konflik kepentingan.\n\nOpsi A salah karena pelanggaran ini bersifat kesengajaan (nepotisme), bukan sekadar pembiaran administrasi.\n\nOpsi B salah karena membantu keluarga tidak boleh dilakukan dengan melanggar hukum dan mengorbankan uang rakyat.\n\nOpsi C salah karena kasus ini dilandasi niat sengaja memenangkan kerabat, bukan karena kecerobohan penilaian.\n\nOpsi D salah karena diskresi tidak boleh melanggar asas transparansi dan kesetaraan dalam pengadaan barang/jasa pemerintah."
  },
  {
    "prompt": "Seorang Aparatur Sipil Negara (ASN) di dinas pelayanan publik menemukan adanya celah keamanan pada sistem database instansi tempatnya bekerja. Ia tergoda untuk membagikan informasi tersebut di forum daring profesional untuk membuktikan kemampuan teknisnya tanpa izin dari pimpinan instansi. Sikap tersebut bertentangan dengan prinsip integritas ASN dalam menjaga kode etik, khususnya terkait kewajiban...",
    "choices": [
      "Memelihara dan menjunjung tinggi standar etika yang luhur serta menjaga rahasia negara.",
      "Menjaga keterbukaan informasi publik secara mutlak tanpa batasan hierarki birokrasi.",
      "Mengembangkan potensi diri demi memajukan sistem teknologi informasi di instansi.",
      "Melaporkan kesalahan sistem secara langsung kepada pihak kepolisian tanpa koordinasi internal.",
      "Melakukan perbaikan mandiri terhadap sistem internal tanpa perlu membuat laporan resmi."
    ],
    "answer": 0,
    "explanation": "Nilai utama kode etik dan integritas ASN terletak pada kewajiban menjaga rahasia jabatan dan rahasia negara serta tidak menyalahgunakan informasi intern instansi untuk kepentingan pribadi maupun popularitas. Membagikan celah keamanan sistem internal ke publik tanpa izin melanggar integritas ASN karena berpotensi membahayakan data publik. Jadi, opsi A benar karena mencerminkan kewajiban ASN dalam memelihara standar etika luhur dan kerahasiaan instansi. Opsi B salah karena keterbukaan informasi publik tetap memiliki batasan terhadap data yang bersifat rahasia/keamanan sistem. Opsi C salah karena pengembangan potensi diri tidak boleh dilakukan dengan cara melanggar kode etik dan prosedur keamanan. Opsi D salah karena pelaporan kesalahan sistem internal harus melalui mekanisme koordinasi dan komando internal terlebih dahulu, bukan langsung ke kepolisian. Opsi E salah karena perbaikan sistem tanpa laporan resmi melanggar asas akuntabilitas dan prosedur operasional standar (SOP)."
  },
  {
    "prompt": "Seorang analis laboratorium riset, Edi, melakukan kesalahan dalam mencampur sampel pengujian mutu obat yang menyebabkan hasil uji menjadi tidak valid. Sebelum hasil uji tersebut terlanjur dipublikasikan ke publik, Edi segera melaporkan kesalahan teknis tersebut kepada kepala tim riset dan bersedia mengulang seluruh proses pengujian dari awal atas biaya pribadinya. Nilai integritas yang ditunjukkan oleh Edi adalah...",
    "choices": [
      "Sikap keberanian moral dan kejujuran untuk mengakui kesalahan kerja serta akuntabilitas atas dampak tindakannya.",
      "Bentuk kepatuhan mutlak terhadap perintah dan teguran dari pimpinan riset.",
      "Rasa takut terhadap sanksi pemutusan hubungan kerja jika kecurangan tersebut ditemukan orang lain.",
      "Sikap ketelitian dan kecermatan tinggi dalam mengelola sampel pengujian laboratorium.",
      "Bentuk profesionalisme pasif untuk menghindari polemik dengan rekan sesama peneliti."
    ],
    "answer": 0,
    "explanation": "Kesediaan melapor dengan jujur saat membuat kesalahan kerja sebelum timbul dampak luas menunjukkan kejujuran, keberanian moral, dan akuntabilitas (tanggung jawab). Orang yang berintegritas tidak menutup-nutupi kekeliruan, melainkan segera mengambil langkah korektif demi menjaga integritas data/publik. Jadi, opsi A benar karena mencakup aspek kejujuran pengakuan dan tanggung jawab koreksi.\n\nOpsi B salah karena Edi melapor atas kesadaran moral pribadi, bukan karena paksaan/perintah atasan terlebih dahulu.\n\nOpsi C salah karena motivasi utamanya adalah menjaga kesahihan hasil uji publik, bukan semata ketakutan pribadi.\n\nOpsi D salah karena Edi sempat membuat kesalahan pengerjaan, sehingga nilai utamanya terletak pada kejujuran pengakuan kesalahan.\n\nOpsi E salah karena tindakan Edi bersifat sangat aktif dan proaktif melakukan perbaikan."
  },
  {
    "prompt": "Dalam sebuah layanan publik pembuatan dokumen kependudukan, seorang petugas mengetahui adanya celah sistem yang memungkinkan ia mempercepat proses cetak dokumen warga jika warga membayar 'biaya tak resmi'. Walaupun rekan-rekannya biasa memanfaatkan celah ini untuk mencari uang tambahan, Rian menolak ikut serta dan melaporkan celah keamanan sistem tersebut ke bagian TI instansi. Sikap Rian menunjukkan integritas yaitu…",
    "choices": [
      "Bentuk persaingan tidak sehat antar petugas dalam mencari pendapatan tambahan di kantor.",
      "Sikap terlalu kaku yang dapat mengganggu keharmonisan hubungan kerja dengan rekan sejawat.",
      "Komitmen tinggi terhadap komitmen pelayanan jujur, akuntabel, dan penolakan terhadap pungli (pungutan liar).",
      "Keberanian mencari perhatian pimpinan demi kenaikan jabatan secara cepat.",
      "Kepatuhan sementara sebelum sistem baru resmi diterapkan oleh pemerintah"
    ],
    "answer": 2,
    "explanation": "Menolak memanfaatkan celah sistem untuk pungli serta aktif melaporkan kelemahan sistem demi perbaikan layanan publik mencerminkan komitmen tinggi pada pelayanan yang jujur, akuntabel, dan bersih dari pungutan liar. Integritas menuntut perbaikan sistem dan penolakan pada kompromi kecurangan kelompok. Jadi, opsi C benar karena merefleksikan nilai kejujuran dan akuntabilitas layanan publik.\n\nOpsi A salah karena tindakan Rian adalah penegakan etika, bukan bentuk persaingan pendapatan.\n\nOpsi B salah karena keharmonisan rekan kerja tidak boleh mengorbankan kejujuran dan aturan publik.\n\nOpsi D salah karena motivasi Rian adalah integritas layanan, bukan pencitraan karir.\n\nOpsi E salah karena integritas bersifat konsisten, bukan kepatuhan sementara."
  },
  {
    "prompt": "Seorang pejabat tinggi kementerian yang selama ini dikenal berprestasi dan dihormati publik kedapatan mengalihkan sebagian dana bantuan kemanusiaan bencana alam untuk membiayai pameran seni pribadi di luar negeri. Pejabat tersebut beralasan bahwa dana tersebut nanti akan diganti setelah sponsor pamerannya mencairkan dana. Tindakan pejabat tinggi tersebut merupakan...",
    "choices": [
      "Bentuk kejahatan korupsi dan penyalahgunaan wewenang dana publik demi kepentingan pribadi yang merusak amanah integritas.",
      "Bentuk inisiatif peminjaman anggaran sementara yang wajar dalam skema manajemen keuangan publik.",
      "Bentuk kekurangcermatan dalam mengatur alokasi waktu pencairan dana sponsor swasta.",
      "tindakan yang dimaklumi selama terdapat komitmen tertulis untuk mengembalikan dana bantuan bencana.",
      "Bentuk pelanggaran administrasi ringan yang cukup diselesaikan melalui teguran pimpinan."
    ],
    "answer": 0,
    "explanation": "Menggunakan dana bantuan kemanusiaan publik untuk kepentingan pribadi (pameran seni) merupakan tindak pidana korupsi dan pelanggaran berat integritas. Niat untuk mengganti anggaran di kemudian hari tidak menghilangkan fakta terjadinya penggelapan dan penyalahgunaan wewenang atas dana publik. Jadi, opsi A benar karena secara eksplisit menegaskan tindakan tersebut sebagai bentuk korupsi dan penyalahgunaan wewenang.\n\nOpsi B salah karena dana publik bantuan bencana tidak boleh dipinjamkan secara pribadi dalam skema keuangan apa pun.\n\nOpsi C salah karena kasus ini adalah kesengajaan pengalihan dana peruntukan, bukan masalah jadwal pencairan sponsor.\n\nOpsi D salah karena komitmen pengembalian tidak menghapuskan tindak pidana penggelapan dana publik.\n\nOpsi E salah karena penggelapan anggaran bencana merupakan pelanggaran pidana berat, bukan administrative ringan."
  },
  {
    "prompt": "Setelah menyelesaikan tugas dinas di luar kota, Anda mendapati jarum penunjuk bahan bakar mobil operasional kantor berada di posisi penuh. Padahal, Anda mengetahui persis bahwa sebelum berangkat bensin hanya tersisa seperempat. Setelah dikonfirmasi, ternyata pejabat yang Anda kunjungi secara diam-diam mengisikan bensin tersebut sebagai bentuk 'hadiah penyambutan'. Mengetahui hal tersebut, Anda memutuskan untuk meminta petugas bengkel menguras kembali bensin berlebih tersebut dan mengembalikannya, serta menegaskan bahwa pengisian bensin harus sesuai anggaran dinas yang sah. Nilai integritas yang tercermin dari tindakan Anda adalah…",
    "choices": [
      "Kedisiplinan kerja dalam menanggung seluruh risiko pengoperasian kendaraan dinas.",
      "Kejujuran dan keteguhan dalam menjaga prinsip penggunaan fasilitas negara sesuai peruntukan serta menolak gratifikasi terselubung.",
      "Tanggung jawab pribadi untuk memperbaiki kendaraan dinas agar kembali ke kondisi semula.",
      "Kesederhanaan hidup dengan menolak fasilitas mewah dalam setiap pelaksanaan tugas dinas.",
      "Keberanian untuk mengakui kesalahan administrasi penganggaran sebelum diperiksa oleh atasan"
    ],
    "answer": 1,
    "explanation": "Sikap menolak pemberian bahan bakar dari pihak luar dan memastikan penggunaan barang dinas sesuai anggaran resmi tercermin dalam nilai kejujuran dan keteguhan menolak gratifikasi tersembunyi. Fasilitas negara harus digunakan murni berbasis anggaran publik yang sah, tanpa menerima bantuan terselubung yang dapat menimbulkan rasa berhutang budi. Jadi, opsi B benar karena menangkap substansi kejujuran fasilitas dan penolakan gratifikasi.\n\nOpsi A salah karena tindakan ini fokus pada kejujuran dan etika penerimaan barang/fasilitas, bukan sekadar kedisiplinan kerja.\n\nOpsi C salah karena menguras bensin bukan tindakan perbaikan kerusakan kendaraan, melainkan penegakan etika kejujuran.\n\nOpsi D salah karena isu utama adalah transparansi/gratifikasi bensin dinas, bukan gaya hidup sederhana atau mewah.\n\nOpsi E salah karena tidak ada kesalahan administrasi yang dilakukan oleh pegawai tersebut sejak awal."
  },
  {
    "prompt": "Seorang anggota tim penilai ujian seleksi pegawai negeri menemukan bahwa salah satu peserta yang lolos ke tahap wawancara adalah anak kandungnya sendiri. Tindakan paling mencerminkan integritas yang harus diambil oleh anggota tim penilai tersebut adalah...",
    "choices": [
      "Tetap menguji peserta tersebut secara objektif dan memberikan nilai sesuai dengan kemampuan riil sang anak.",
      "Melaporkan potensi benturan kepentingan kepada pimpinan dan mengundurkan diri dari tim penilai untuk posisi peserta tersebut.",
      "Meminta rekan penilai lain memberikan nilai tinggi sementara dirinya memberikan nilai netral agar tidak mencurigakan.",
      "Tetap menjadi penilai tetapi meminta anak kandungnya mengundurkan diri dari proses seleksi pegawai.",
      "Mengabaikan hubungan kekeluargaan tersebut dan berpura-pura tidak mengenali peserta selama wawancara."
    ],
    "answer": 1,
    "explanation": "Ketika berhadapan dengan hubungan kekeluargaan dalam proses seleksi publik, timbul benturan kepentingan (conflict of interest). Sikap berintegritas tertinggi adalah melaporkan potensi benturan kepentingan dan mengundurkan diri (recusal) dari proses penilaian demi menjaga objektivitas dan transparansi hasil seleksi. Jadi, opsi B benar karena merupakan standar etika tata kelola publik dalam menghindari penilai yang bias.\n\nOpsi A salah karena meskipun berniat objektif, potensi bias subjektif dan kecurigaan publik tetap sangat tinggi.\n\nOpsi C salah karena tindakan ini merupakan persekongkolan dan penyalahgunaan wewenang.\n\nOpsi D salah karena merugikan hak anak untuk ikut seleksi secara adil selama penilai yang mundur.\n\nOpsi E salah karena berpura-pura tidak kenal adalah tindakan tidak jujur/manipulatif"
  },
  {
    "prompt": "Korupsi dikategorikan sebagai kejahatan luar biasa (extraordinary crime) yang berdampak langsung pada melambatnya pertumbuhan ekonomi, ketimpangan sosial, dan menurunnya kesejahteraan rakyat. Sebagai bagian dari elemen bangsa, peran paling mendasar dan berkelanjutan yang dapat dilakukan oleh masyarakat berintegritas untuk menghentikan kejahatan korupsi adalah...",
    "choices": [
      "Menuntut aparat penegak hukum untuk selalu menjatuhkan hukuman mati kepada seluruh terpidana kasus korupsi.",
      "Menyerahkan seluruh upaya pencegahan dan penindakan korupsi kepada lembaga antirasuah tanpa perlu ikut campur.",
      "Mengembangkan kesadaran hukum serta menanamkan nilai-nilai kejujuran dan antikorupsi sejak dini dalam kehidupan sehari-hari.",
      "Melakukan aksi unjuk rasa secara berkala di depan gedung-gedung pemerintah untuk mengawasi kinerja pejabat.",
      "Membentuk organisasi masyarakat independen khusus untuk mengambil alih tugas investigasi kasus korupsi."
    ],
    "answer": 2,
    "explanation": "Upaya masyarakat dalam pemberantasan korupsi yang paling efektif dan berkesinambungan adalah melalui jalur preventif dan edukatif, yaitu membangun budaya sadar hukum serta menerapkan nilai-nilai integritas kejujuran dalam lingkungan keluarga, pendidikan, dan bermasyarakat. Budaya antikorupsi yang kuat akan memotong potensi lahirnya perilaku koruptif. Jadi, opsi C benar karena berfokus pada pembentukan karakter bangsa yang berintegritas dari level paling dasar.\n\nOpsi A salah karena penjatuhan vonis hukum merupakan wewenang hakim yang terikat aturan perundang-undangan.\n\nOpsi B salah karena penanganan korupsi membutuhkan peran aktif masyarakat, bukan pasif menanti lembaga hukum.\n\nOpsi D salah karena unjuk rasa berkala tidak otomatis menyentuh akar masalah pencegahan perilaku koruptif.\n\nOpsi E salah karena investigasi tindak pidana merupakan wewenang eksklusif aparat penegak hukum resmi."
  },
  {
    "prompt": "Seorang pemohon izin usaha mendatangi seorang petugas pelayanan publik dan meminta bantuan agar berkas perizinannya dipercepat prosesnya dengan alasan jadwal investasi yang sangat mendesak. Pemohon tersebut menjanjikan kompensasi finansial yang besar jika perizinan terbit hari itu juga. Sikap petugas pelayan publik yang paling mencerminkan integritas adalah...",
    "choices": [
      "Menolak imbalan tersebut secara tegas dan memproses perizinan sesuai standar operasional prosedur (SOP) dan antrian yang berlaku.",
      "Menerima imbalan tersebut namun menyetorkannya ke kas negara sebagai pendapatan daerah non-pajak.",
      "Membantu mempercepat prosesnya tanpa mengambil imbalan uang demi menunjukkan rasa kepedulian pada pemohon.",
      "Menyarankan pemohon untuk menemui pimpinan instansi langsung guna meminta izin khusus penerbitan cepat.",
      "Menerima imbalan tersebut dengan janji akan membagi sebagian uang tersebut kepada tim verifikasi berkas."
    ],
    "answer": 0,
    "explanation": "Integritas dalam pelayanan publik menuntut kepatuhan mutlak pada Standard Operating Procedure (SOP), prinsip keadilan antrean, dan penolakan terhadap segala bentuk imbalan ilegal (suap). Petugas tidak boleh membedakan perlakuan pemohon berdasarkan imbalan atau desakan sepihak. Jadi, opsi A benar karena secara tegas menjaga kesetaraan layanan dan kepatuhan pada aturan resmi.\n\nOpsi B salah karena suap tidak bisa dilegalkan dengan menyerahkannya ke kas negara secara sepihak.\n\nOpsi C salah karena mendahulukan pemohon tanpa alasan prosedur yang sah merusak prinsip keadilan bagi antrian lain.\n\nOpsi D salah karena melimpahkan pemohon demi menerobos SOP tetap bertentangan dengan integritas sistem.\n\nOpsi E salah karena tindakan ini merupakan praktik penyuapan dan korupsi berjemaah."
  },
  {
    "prompt": "Seorang staf teknis di dinas perizinan menerima parcel mewah berisikan barang elektronik mahal dan uang tunai dari seorang pengusaha yang izin usahanya baru saja diterbitkan seminggu lalu. Pengusaha tersebut menyatakan hadiah itu murni ucapan terima kasih tanpa maksud apa pun. Tindakan integritas yang harus dilakukan staf tersebut adalah...",
    "choices": [
      "Menerima hadiah tersebut karena izin usaha telah selesai diterbitkan sehingga tidak ada pengaruh pada keputusan.",
      "Menerima barang elektronik untuk operasional kantor dan mengembalikan uang tunai kepada pengusaha.",
      "Menolak pemberian secara sopan atau melaporkan penerimaan tersebut kepada Unit Pengendalian Gratifikasi (UPG) / KPK.",
      "Membagi hadiah tersebut kepada seluruh staf kantor agar tercipta rasa kebersamaan.",
      "Menyimpan hadiah tersebut hingga evaluasi kinerja tahunan berakhir baru menggunakannya."
    ],
    "answer": 2,
    "explanation": "Pemberian barang atau uang dari pemohon layanan terkait wewenang jabatan merupakan gratifikasi yang wajib ditolak atau dilaporkan. Berintegritas berarti menolak pemberian tersebut atau melaporkannya ke UPG/KPK dalam batas waktu yang ditentukan aturan untuk mencegah terjadinya suap terselubung. Jadi, opsi C benar karena sesuai dengan prosedur hukum dan prinsip anti gratifikasi.\n\nOpsi A salah karena ucapan terima kasih berupa barang mahal/uang tetap dikategorikan gratifikasi ilegal terkait jabatan.\n\nOpsi B salah karena barang elektronik tetaplah gratifikasi yang tidak boleh diterima secara pribadi/kantor tanpa alur resmi.\n\nOpsi D salah karena membagi hasil gratifikasi ke rekan kantor tidak mengubah status ilegal hadiah tersebut.\n\nOpsi E salah karena menunda-nunda penanganan gratifikasi melanggar batas waktu pelaporan resmi"
  },
  {
    "prompt": "Dalam catatan sejarah kepemimpinannya sebagai Presiden Pertama RI, Ir. Soekarno secara tegas menolak berbagai bentuk penyelewengan, gratifikasi, serta praktik korupsi dan kolusi demi menjaga marwah negara, meskipun berada di tengah desakan ekonomi dan dinamika politik yang sangat tinggi. Tindakan Ir. Soekarno tersebut mencerminkan nilai integritas utama seorang pemimpin yang diwujudkan melalui...",
    "choices": [
      "Prinsip transparansi penuh dan akuntabilitas publik dalam setiap pengambilan kebijakan pemerintahan.",
      "Sikap menolak memanfaatkan jabatan untuk kepentingan pribadi serta konsistensi menjaga kesederhanaan hidup.",
      "Pengutamaan kepentingan bangsa dan negara di atas kepentingan pribadi/golongan sebagai wujud rasa tanggung jawab.",
      "Keberanian moral untuk menentang segala bentuk intervensi asing demi kedaulatan ekonomi nasional.",
      "Kepatuhan yang kaku terhadap peraturan hukum yang berlaku guna menghindari potensi konflik kepentingan."
    ],
    "answer": 2,
    "explanation": "Nilai utama keteladanan Ir. Soekarno dalam menolak korupsi dan kolusi terletak pada memprioritaskan kepentingan bangsa dan negara di atas kepentingan pribadi atau golongan. Penolakan terhadap godaan penyalahgunaan kekuasaan merupakan wujud nyata integritas tinggi di mana seorang pemimpin menempatkan tanggung jawab terhadap kesejahteraan rakyat dan keutuhan negara sebagai prioritas tertinggi. Jadi, opsi C benar karena secara tepat menangkap esensi integritas puncak seorang kepala negara. Opsi A salah karena transparansi dan akuntabilitas lebih berfokus pada mekanis birokrasi, bukan motif utama pengorbanan demi negara. Opsi B salah karena meskipun kesederhanaan adalah nilai positif, fokus utama tindakan Ir. Soekarno dalam narasi adalah penolakan korupsi demi martabat bangsa. Opsi D salah karena keberanian menentang intervensi asing lebih berkaitan dengan nilai nasionalisme dan kedaulatan luar negeri. Opsi E salah karena integritas bukan sekadar kepatuhan hukum yang kaku, melainkan komitmen moral dan etika kepemimpinan."
  },
];

export const INTEGRITAS_DRILL_QUESTIONS: Question[] = integritasSeeds.map((seed, index) => ({
  id: `twk-integritas-${String(index + 1).padStart(3, "0")}`,
  category: "TWK",
  topic: "Integritas",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: choiceIndex === seed.answer ? 5 : 0,
  })),
  explanation: seed.explanation,
}));
