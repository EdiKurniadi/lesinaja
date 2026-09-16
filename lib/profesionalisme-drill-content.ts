import type { Question } from "./types";

type ProfesionalismeSeed = {
  prompt: string;
  choices: string[];
  scores: number[];
  explanation: string;
};

const profesionalismeSeeds: ProfesionalismeSeed[] = [
  {
    "prompt": "Anda bertugas sebagai analis kebijakan di sebuah instansi pemerintah. Tiga jam sebelum dokumen ringkasan kebijakan pengadaan barang nasional diserahkan kepada pimpinan eksekutif untuk dipublikasikan, Anda menemukan bahwa terdapat kesalahan formula perhitungan estimasi efisiensi anggaran pada lampiran utama. Jika kesalahan dibiarkan, laporan tampak sangat menguntungkan instansi namun menyesatkan secara analisis teknis. Jika diperbaiki secara menyeluruh, verifikasi ulang membutuhkan waktu minimal lima jam, yang berarti akan melewati tenggat waktu publikasi dan berpotensi memicu teguran dari pemangku kepentingan eksternal. Prioritas tindakan yang paling tepat untuk Anda lakukan adalah...",
    "choices": [
      "Menyelesaikan perbaikan formula pada angka-angka indikator paling krusial, melampirkan catatan keterbatasan analisis data aktual, dan melaporkan situasi penyesuaian tersebut kepada pimpinan sebelum batas waktu.",
      "Meminta pimpinan menunda jadwal publikasi ringkasan kebijakan agar seluruh data dan formula dapat diverifikasi ulang secara komprehensif demi menjaga keakuratan dokumen.",
      "Publikasikan dokumen sesuai jadwal yang ditetapkan, kemudian segera menyusun dokumen revisi resmi (addendum) untuk disampaikan pada hari kerja berikutnya.",
      "Memperbaiki seluruh perhitungan secara mandiri dan langsung mengganti file publikasi di sistem tanpa perlu mengganggu fokus pimpinan yang sedang bersiap rapat.",
      "Mengonsultasikan temuan kesalahan formula tersebut kepada pimpinan untuk meminta keputusan apakah publikasi ditunda atau tetap dilanjutkan sesuai draf yang ada."
    ],
    "scores": [
      5,
      4,
      2,
      1,
      3
    ],
    "explanation": "A (5): Tindakan proporsional: mengamankan bagian paling berdampak, memberikan mitigasi transparan (catatan keterbatasan), dan tetap menghormati hierarki penyesuaian.\n\nB (4): Terlalu berfokus pada kesempurnaan teknis (tipe terlalu hati-hati), sehingga mengorbankan ketepatan waktu komitmen instansi. Memiliki iktikad integritas baik tetapi kurang responsif terhadap kondisi darurat.\n\nC (2): Menjaga deadline tetapi membiarkan data salah terpublikasi (tipe terlalu mengejar target/hasil), yang berisiko tinggi merusak reputasi instansi di kemudian hari.\n\nD (1): Berani mengambil keputusan secara sepihak tanpa koordinasi (tipe terlalu mandiri/abaikan prosedur pimpinan), yang berisiko menciptakan kelalaian administratif baru.\n\nE (3): Bergantung penuh pada instruksi atasan tanpa memberikan draf solusi atau tindakan mitigasi awal (tipe terlalu bergantung pada atasan)."
  },
  {
    "prompt": "Rekan satu tim Anda yang bertanggung jawab atas penyusunan laporan keuangan proyek sedang mengalami musibah keluarga, sehingga kinerjanya menurun drastis menjelang tenggat audit internal. Bagian pekerjaan rekan Anda mengandung beberapa ketidaksesuaian input transaksi yang cukup masif. Di sisi lain, tugas mandiri Anda sebagai pengawas lapangan juga menumpuk dan memiliki batas waktu penyelesaian yang persis sama pada sore ini. Sikap yang paling mencerminkan profesionalisme dalam situasi ini adalah...",
    "choices": [
      "Mengambil alih sepenuhnya pengerjaan laporan keuangan rekan Anda hingga selesai, lalu meminta bantuan anggota tim lain untuk menyelesaikan tugas pengawasan lapangan Anda.",
      "Fokus menyelesaikan tugas pengawasan lapangan Anda hingga tuntas, lalu menyarankan rekan Anda untuk meminta perpanjangan waktu secara resmi kepada pihak auditor.",
      "Membantu rekan Anda mengidentifikasi dan mengoreksi transaksi yang salah secara spesifik, sembari memastikan tugas utama Anda sendiri selesai sesuai standar ketepatan waktu.",
      "Melaporkan kondisi ketidaksesuaian laporan rekan Anda kepada ketua tim agar beban pengerjaan dapat didistribusikan ulang kepada anggota tim yang pekerjaannya lebih longgar.",
      "Mengerjakan tugas pengawasan lapangan hingga selesai, kemudian memanfaatkan waktu lembur malam untuk memperbaiki seluruh laporan keuangan rekan Anda."
    ],
    "scores": [
      2,
      3,
      5,
      4,
      1
    ],
    "explanation": "A (2): Mengabaikan batasan tugas utama sendiri demi mengambil porsi orang lain secara total (tipe terlalu kompromistis/melempar fokus), memicu potensi kegagalan di dua lini.\n\nB (3): Terlalu kaku membatasi diri (tipe terlalu prosedural) saat tim membutuhkan dukungan kritis, meski tugas sendiri aman.\n\nC (5): Solusi paling efektif dan efisien: tugas mandiri tidak terbengkalai, bantuan diberikan secara terarah dan terukur.\n\nD (4): Prosedural dan baik dalam koordinasi tim, tetapi sedikit kurang menunjukkan inisiatif bantuan langsung pada tingkat operasional awal.\n\nE (1): Memaksa diri mengerjakan segalanya secara berlebihan tanpa koordinasi tim, berisiko menurunkan kualitas kedua pekerjaan akibat kelelahan parah."
  },
  {
    "prompt": "Anda baru saja dipindahkan ke unit kerja baru yang menerapkan aplikasi tata kelola sistem digital mutakhir. Sebagian besar pegawai senior di unit tersebut merasa enggan menggunakan sistem baru dan tetap memakai metode manual karena dianggap lebih praktis. Atasan Anda cenderung membiarkan kondisi tersebut demi menjaga kondusivitas suasana kerja. Padahal, petunjuk teknis instansi mewajibkan pemanfaatan aplikasi baru untuk seluruh proses administrasi mulai bulan ini. Tindakan yang paling dapat dipertanggungjawabkan dalam kondisi tersebut adalah...",
    "choices": [
      "Menerapkan aplikasi baru secara konsisten untuk seluruh pekerjaan pribadi Anda, serta siap membagikan pengalaman praktis dan kemudahan penggunaannya kepada rekan senior saat diminta.",
      "Mengusulkan kepada atasan untuk mengadakan sesi pengerjaan bersama (co-working) khusus integrasi sistem baru tanpa mengganggu jam pelayanan rutin.",
      "Tetap menggunakan metode manual sebagaimana pegawai senior lainnya agar keselarasan dan alur kerja dalam unit tetap berjalan harmonis tanpa konflik internal.",
      "Melaporkan penolakan penggunaan sistem digital ini kepada unit pengawas eksternal instansi agar dilakukan evaluasi kepatuhan terhadap kebijakan baru.",
      "Menggunakan aplikasi baru hanya untuk pekerjaan yang dipantau langsung oleh pusat, dan menggunakan metode manual untuk koordinasi internal unit kerja."
    ],
    "scores": [
      4,
      5,
      1,
      2,
      3
    ],
    "explanation": "Pembahasan Jawaban Terbaik: Opsi B menunjukkan profesionalisme konstruktif: tidak sekadar patuh individu, tetapi aktif membawa perubahan positif bagi instansi melalui usulan solusi konkret (sesi pengerjaan bersama) tanpa terkesan menggurui senior atau merusak komando atasan.\n\nAnalisis Opsi Pengecoh:\n\nA (4): Sangat baik dalam komitmen dan integritas pribadi, namun dampak perubahannya masih bersifat pasif terhadap lingkungan unit.\n\nB (5): Keseimbangan sempurna antara kepatuhan standar, perbaikan sistemik, inisiatif, dan manajemen hubungan kerja (change management).\n\nC (1): Mengorbankan standar resmi organisasi demi kompromi lingkungan (tipe terlalu kompromistis).\n\nD (2): Terlalu konfrontatif dan melompati tata krama hierarki internal tanpa mencoba pemecahan masalah di tingkat unit terlebih dahulu.\n\nE (3): Mengambil jalan tengah yang dualistis, kurang konsisten terhadap komitmen transformasi digital instansi."
  },
  {
    "prompt": "Atasan langsung Anda meminta Anda menyusun draf laporan evaluasi proyek pelayanan publik dengan menonjolkan pencapaian positif saja dan meminimalkan temuan kekuarangan pada variabel kepuasan masyarakat. Atasan berargumen bahwa laporan tersebut akan memengaruhi penilaian kinerja unit di mata kementerian pusat dan kelangsungan anggaran tahun depan. Dalam situasi dilematis ini, langkah yang paling tepat adalah...",
    "choices": [
      "Menyusun laporan persis sesuai arahan atasan demi menjaga alokasi anggaran unit dan loyalitas kepemimpinan.",
      "Tetap mencantumkan seluruh data temuan kekurangan secara objektif, lalu melengkapinya dengan analisis akar masalah dan rencana aksi perbaikan yang terukur.",
      "Menolak dengan tegas arahan atasan tersebut dan langsung menyerahkan draf laporan asli yang memuat seluruh kekurangan kepada pihak kementerian pusat.",
      "Menyusun dua versi laporan, yakni versi internal yang mencantumkan kekurangan dan versi eksekutif yang disesuaikan dengan permintaan atasan.",
      "Berkonsultasi dengan tim Inspektorat mengenai arahan atasan tersebut sebelum mengambil sikap dalam penyusunan laporan."
    ],
    "scores": [
      1,
      5,
      3,
      2,
      4
    ],
    "explanation": "A (1): Mengorbankan integritas dan objektivitas demi loyalitas sempit (tipe mengorbankan integritas).\n\nB (5): Menjaga kebenaran data sekaligus menawarkan solusi konstruktif untuk mengatasi dampak temuan negatif.\n\nC (3): Berniat menjaga integritas, namun caranya terkesan konfrontatif (terlalu kaku) dan merusak hierarki kerja tanpa mencoba diskusi penyempurnaan laporan terlebih dahulu.\n\nD (2): Melakukan manipulasi informasi ganda yang melanggar standar transparansi kedinasan.\n\nE (4): Langkah pengamanan integritas yang baik, tetapi menunjukkan ketergantungan pada pihak ketiga sebelum mengupayakan argumentasi profesional kepada atasan."
  },
  {
    "prompt": "Anda ditunjuk sebagai ketua tim penyelesaian target pemutakhiran data kepegawaian nasional. Di tengah pengerjaan yang tersisa dua hari lagi, Anda menyadari adanya kelemahan pada algoritma verifikasi internal yang berpotensi meloloskan 5% data yang tidak valid. Jika algoritma diperbaiki sekarang, proses verifikasi ulang memerlukan waktu tambahan tiga hari melebihi deadline nasional. Keputusan terbaik yang sebaiknya Anda ambil adalah...",
    "choices": [
      "Melanjutkan proses hingga selesai sesuai batas waktu, lalu melakukan pembersihan data (data cleansing) secara bertahap pada tahap pemeliharaan sistem berikutnya.",
      "Menghentikan sementara pengiriman data, memperbaiki algoritma, dan mengirimkan surat permohonan dispensasi perpanjangan waktu dengan alasan penyempurnaan mutu.",
      "Menyelesaikan pengiriman data utama yang sudah terverifikasi valid tepat waktu, memisahkan 5% data berisiko untuk diverifikasi manual tambahan, dan melaporkan kondisi tersebut.",
      "Membiarkan algoritma berjalan apa adanya mengingat persentase kesalahan 5% masih dalam batas toleransi wajar pekerjaan proyek skala besar.",
      "Menyerahkan keputusan sepenuhnya kepada pihak pengembang aplikasi utama untuk menentukan apakah perbaikan algoritma perlu dilakukan saat ini atau nanti."
    ],
    "scores": [
      3,
      4,
      5,
      1,
      2
    ],
    "explanation": "A (3): Mengejar deadline dengan sadar meloloskan data cacat (berorientasi hasil jangka pendek).\n\nB (4): Menjaga mutu sempurna tetapi mengorbankan komitmen waktu instansi (tipe terlalu prosedural/hati-hati).\n\nC (5): Pemisahan prioritas (triage) yang paling optimal antara target waktu dan jaminan kualitas.\n\nD (1): Kompromi kualitas yang merugikan akuntabilitas sistem tanpa mitigasi apapun.\n\nE (2): Melempar tanggung jawab pengambilan keputusan substansial kepada pihak ketiga/vendor."
  },
  {
    "prompt": "Saat menghadiri rapat antar-lembaga yang membahas penyusunan draf keragaman tarif pelayanan umum, seorang anggota tim dari unit lain memaparkan analisis statistik yang menggunakan asumsi data kadaluarsa, sehingga menghasilkan kesimpulan rekomendasi yang kurang akurat. Rapat tersebut dipimpin oleh pejabat tinggi dari instansi koordinator. Sebagai peserta rapat yang mengetahui kekeliruan data tersebut, tindakan Anda adalah...",
    "choices": [
      "Langsung menyela paparan presenter dan menyodorkan data pembanding terbaru agar diskusi rapat tidak berpatokan pada asumsi yang salah.",
      "Mencatat kekeliruan tersebut dan menyampaikannya secara santun melalui catatan tertulis atau saat forum membuka sesi tanggapan teknis.",
      "Mendiamkan hal tersebut selama rapat berlangsung untuk menjaga wibawa rekan selembaga, kemudian menegurnya setelah forum selesai.",
      "Mengajukan pertanyaan umum yang mengarahkan rapat untuk mengonfirmasi ulang pembaruan data yang digunakan dalam analisis tersebut.",
      "Menghubungi pimpinan unit Anda melalui pesan singkat untuk meminta petunjuk apakah kekeliruan data tersebut perlu diinterupsi."
    ],
    "scores": [
      2,
      4,
      1,
      5,
      3
    ],
    "explanation": "A (2): Berorientasi kebenaran data tetapi cara penyampaiannya mengabaikan etika komunikasi forum dan merusak reputasi rekan (terlalu konfrontatif).\n\nB (4): Sangat baik dan prosedural, namun langsung menyatakan kekeliruan di forum berisiko menciptakan defensivitas.\n\nC (1): Membiarkan keputusan rapat berbasis data salah hanya demi perasaan rekan (kompromi profesional buruk).\n\nD (5): Menyampaikan kritik substansial secara elegan, objektif, dan menjaga etika kelembagaan.\n\nE (3): Kurang responsif dan terlalu ragu mengambil peran sebagai wakil unit di forum."
  },
  {
    "prompt": "Anda mendapati bahwa salah satu dokumen kerja yang tersimpan di perangkat Anda memuat draft rencana pembentukan unit kerja baru yang bersifat rahasia kedinasan. Seorang rekan sejawat dari unit berbeda meminta dokumen tersebut dengan alasan membutuhkan acuan format penulisan tata naskah dinas untuk tugasnya. Respons yang paling tepat untuk menjaga kerahasiaan informasi kedinasan adalah...",
    "choices": [
      "Mengedit isi dokumen tersebut dengan menghapus seluruh informasi substansial rahasia, lalu memberikan template kosongnya kepada rekan Anda.",
      "Menolak memberikan dokumen tersebut dan menyarankannya meminta acuan format naskah resmi kepada bagian umum atau arsip.",
      "Memberikan dokumen tersebut dengan berpesan agar rekan Anda menjaga kerahasiaannya dan tidak menyebarkannya ke pihak lain.",
      "Melaporkan permintaan rekan tersebut kepada atasan langsung untuk diantisipasi kemungkinan kebocoran dokumen rahasia.",
      "Meminta izin atasan terlebih dahulu sebelum menyerahkan dokumen draf tersebut kepada rekan sejawat."
    ],
    "scores": [
      4,
      5,
      1,
      2,
      3
    ],
    "explanation": "A (4): Bertindakan solutif, tetapi melakukan manipulasi/pengeditan dokumen rahasia pribadi berisiko menyisakan data sensitif (metadata) yang tidak disengaja.\n\nB (5): Memiliki ketegangan integritas tinggi terhadap data rahasia serta memberikan saluran pemenuhan kebutuhan yang tepat.\n\nC (1): Pelanggaran serius terhadap kerahasiaan dokumen kedinasan berbasis rasa percaya pribadi.\n\nD (2): Menganggap permintaan biasa sebagai ancaman kejahatan secara berlebihan (kecurigaan destruktif).\n\nE (3): Memindahkan beban perlindungan dokumen rahasia yang sudah jelas aturan dasarnya kepada atasan."
  },
  {
    "prompt": "Dalam sebuah evaluasi kerja tahunan, Anda menerima kritik pedas dari atasan dan rekan tim bahwa gaya kerja Anda terkesan kaku, lambat dalam merespons perubahan mendadak, serta terlalu dipengaruhi oleh keraguan verifikasi data berlebih. Padahal, Anda melakukan hal tersebut demi meminimalkan tingkat kesalahan teknis pekerjaan. Sikap yang paling mencerminkan keterbukaan terhadap evaluasi dan komitmen perbaikan diri adalah...",
    "choices": [
      "Menerima kritik tersebut dengan lapang dada, serta menjelaskan alasan rasional bahwa kehati-hatian Anda bertujuan melindungi tim dari risiko kesalahan fatal.",
      "Mengucapkan terima kasih atas masukan tersebut, mengidentifikasi titik lambat alur kerja pribadi, dan merancang kriteria fleksibilitas verifikasi tanpa menurunkan standar mutu.",
      "Menerima masukan tersebut dan berjanji akan merubah gaya kerja menjadi lebih cepat dalam merespons semua permintaan tugas di masa mendatang.",
      "Meminta atasan memberikan indikator baku sejauh mana kecepatan dan keluwesan kerja yang diharapkan dari posisi tugas Anda.",
      "Mengikuti pelatihan manajemen waktu dan fleksibilitas kerja secara mandiri untuk meningkatkan kemampuan adaptasi di tempat kerja."
    ],
    "scores": [
      3,
      5,
      2,
      4,
      1
    ],
    "explanation": "A (3): Terlihat defensif dengan memberikan pembenaran atas kelemahan yang dikritik orang lain.\n\nB (5): Mengubah kritik menjadi rencana aksi konkret yang menyeimbangkan efisiensi waktu dan kualitas.\n\nC (2): Kompromi berlebihan (tipe respons reaktif tanpa pertimbangan matang) yang berpotensi merusak standar kualitas akibat sekadar berburu kecepatan.\n\nD (4): Proaktif meminta klarifikasi standar, namun aspek inisiatif analisis internal pribadi masih kurang dominan dibanding opsi B.\n\nE (1): Solusi generik yang tidak langsung menjawab masalah penyesuaian gaya kerja spesifik pada unit saat ini."
  },
  {
    "prompt": "Anda ditugaskan memimpin proyek implementasi aplikasi internal. Di tengah jalan, terjadi perubahan regulasi pusat yang membuat 30% spesifikasi aplikasi yang sedang dibangun menjadi tidak relevan. Anggota tim merasa frustrasi dan mengusulkan untuk menghentikan proyek hingga ada arahan lebih detail dari Kementerian. Sementara itu, tenggat penyerahan anggaran proyek sudah dekat. Keputusan kepemimpinan profesional yang sebaiknya Anda ambil adalah...",
    "choices": [
      "Menghentikan sementara pengerjaan sesuai usul tim, serta menyusun dokumen laporan kendala regulasi untuk diserahkan kepada pimpinan instansi.",
      "Melanjutkan pengerjaan sesuai spesifikasi awal agar penyerapan anggaran tepat waktu, lalu menyesuaikan aplikasi pada pembaruan versi mendatang.",
      "Memetakan modul aplikasi yang tidak terdampak regulasi baru untuk terus dikerjakan, sembari melakukan penyesuaian paralel pada modul yang terdampak.",
      "Mengajukan konsultasi mendesak ke unit pembina regulasi di Kementerian untuk mendapatkan kepastian arahan sebelum melanjutkan pengerjaan.",
      "Mengubah fokus tim untuk menyelesaikan seluruh dokumentasi dan administrasi proyek terlebih dahulu sebelum menyentuh pengerjaan teknis aplikasi."
    ],
    "scores": [
      2,
      1,
      5,
      4,
      3
    ],
    "explanation": "A (2): Sikap pasif yang menghentikan operasional total saat masih ada porsi pekerjaan yang aman dikerjakan.\n\nB (1): Mengerjakan sesuatu yang diketahui melanggar/berbeda dengan regulasi baru hanya demi serapan dana (merusak efisiensi anggaran).\n\nC (5): Pengelolaan manajemen risiko dan ketangkasan adaptasi kerja paling sempurna.\n\nD (4): Sangat prosedural, namun mengabaikan pemanfaatan waktu produktif pada modul yang tidak terdampak.\n\nE (3): Mengalihkan ke pekerjaan perantara yang kurang memecahkan kebuntuan utama proyek."
  },
  {
    "prompt": "Instansi Anda meluncurkan program kerja prioritas dengan target pemantauan ketat. Sebagai pengelola data, Anda menemukan bahwa capaian indikator kinerja utama unit Anda belum memenuhi target akibat keterlambatan pasokan data dari wilayah eksternal. Rekan senior menyarankan untuk memasukkan data perkiraan (estimasi) agar laporan unit terlihat mencapai target pertengahan tahun. Dalam menghadapi kondisi ini, tindakan yang paling dapat dipertanggungjawabkan adalah...",
    "choices": [
      "Menyajikan data aktual apa adanya yang telah terverifikasi, melampirkan proyeksi estimasi sebagai pembanding, dan melaporkan kendala pasokan data daerah.",
      "Menggunakan data estimasi sebagaimana disarankan rekan senior demi mengamankan reputasi kinerja unit di mata pimpinan pusat.",
      "Menunda penyerahan laporan hingga seluruh data real dari wilayah eksternal terkumpul secara lengkap, meskipun melewati tenggat jadwal.",
      "Menyampaikan laporan hasil pencapaian aktual yang ada tanpa mencantumkan indikator yang datanya belum lengkap.",
      "Melaporkan tindakan saran rekan senior tersebut kepada unit pengawas internal karena mengarah pada manipulasi laporan."
    ],
    "scores": [
      5,
      1,
      3,
      2,
      4
    ],
    "explanation": "A (5): Akuntabel, jujur, transparan, serta memberikan analisis pelengkap yang sah.\n\nB (1): Tindakan tidak profesional yang tergolong manipulasi data demi formalitas hasil (merusak integritas).\n\nC (3): Mengedepankan kelengkapan tetapi mengabaikan disiplin tenggat waktu pelaporan instansi.\n\nD (2): Menyajikan laporan yang tidak utuh/menghilangkan indikator secara sepihak, mengurangi keterbacaan evaluasi.\n\nE (4): Memiliki ketegangan integritas, tetapi reaksi melaporkan terlalu prematur untuk dinamika diskusi internal."
  },
  {
    "prompt": "Anda diminta menggantikan rekan kerja yang tiba-tiba dirawat di rumah sakit untuk mempresentasikan proposal anggaran proyek di depan Tim Anggaran Pemerintah Daerah (TAPD). Materi presentasi telah dibuat oleh rekan Anda tersebut, namun saat Anda mempelajari materi satu jam sebelum rapat, Anda menemukan ada selisih perhitungan alokasi dana yang tidak wajar pada salah satu komponen kegiatan. Sikap yang paling mencerminkan profesionalisme tinggi adalah...",
    "choices": [
      "Membatalkan sesi presentasi instansi Anda dan meminta penjadwalan ulang sampai rekan yang bersangkutan sembuh.",
      "Mengoreksi selisih perhitungan tersebut berdasarkan data pendukung yang ada, serta menjelaskan penyesuaian angka tersebut saat presentasi.",
      "Mempresentasikan materi sesuai draf asli rekan Anda, dan mencatat pertanyaan TAPD untuk dijawab tertulis kemudian.",
      "Memfokuskan paparan pada substansi program utama dan menghindari pembahasan rincian angka alokasi dana yang berselisih.",
      "Meminta arahan langsung dari pimpinan unit mengenai selisih angka tersebut sebelum dipaparkan di depan rapat forum TAPD."
    ],
    "scores": [
      1,
      4,
      2,
      3,
      5
    ],
    "explanation": "A (1): Menunjukkan ketidakmampuan beradaptasi dan merugikan nama baik instansi karena membatalkan forum penting.\n\nB (4): Sangat inisiatif dan menguasai masalah, namun berisiko melampaui kewenangan posisi pengganti terkait angka anggaran resmi instansi.\n\nC (2): Membiarkan kejanggalan dipaparkan terbuka yang berpotensi menjadi temuan kritikal TAPD.\n\nD (3): Tindakan menghindar yang memunculkan kesan ketidaksiapan tim di mata penguji anggaran.\n\nE (5): Akuntabel, menghormati kewenangan anggaran instansi, serta mengambil langkah verifikasi hierarkis yang tepat pada situasi kritis."
  },
  {
    "prompt": "Unit kerja Anda menghadapi akumulasi beban pengerjaan berkas pelayanan publik yang menumpuk tinggi akibat adanya libur nasional panjang. Standar waktu pelayanan (SOP) menetapkan batas maksimal penyelesaian adalah 3 hari kerja per berkas. Jika mengikuti alur pemeriksaan ganda biasa, target penyelesaian seluruh berkas akan terlambat dua minggu. Langkah paling efektif dan bertanggung jawab yang harus Anda lakukan adalah...",
    "choices": [
      "Mengusulkan skema pembagian kerja berbasis skala risiko, di mana berkas berisiko tinggi tetap melewati alur ganda dan berkas sederhana dipercepat melalui verifikasi tunggal.",
      "Meminta seluruh staf bekerja lembur setiap hari tanpa mengubah prosedur pemeriksaan baku demi mengejar keterlambatan.",
      "Melewati beberapa tahapan verifikasi administrasi awal agar berkas dapat diselesaikan tepat waktu sesuai SOP 3 hari.",
      "Fokus menyelesaikan berkas pelayanan baru yang masuk agar tidak menambah daftar antrean baru, sementara berkas lama diselesaikan bertahap.",
      "Meminta penambahan personel sementara dari unit kerja lain untuk membantu penyelesaian tunggakan berkas pelayanan."
    ],
    "scores": [
      5,
      4,
      1,
      2,
      3
    ],
    "explanation": "A (5): Solusi fleksibel, efektif, efisien, dan tetap menjaga akuntabilitas pengendalian mutu.\n\nB (4): Menjaga kualitas dan prosedur 100%, tetapi kurang efisien dalam manajemen daya tahan SDM (berisiko burnout).\n\nC (1): Mengabaikan kontrol kualitas mendasar yang berisiko menciptakan pembiaran kesalahan hukum administrasi.\n\nD (2): Mengabaikan prinsip komitmen layanan first-in first-out (FIFO) yang merugikan pemohon awal.\n\nE (3): Solusi ideal jangka panjang tetapi kurang cepat merealisasikan tindakan instan dalam menghadapi lonjakan mendadak."
  },
  {
    "prompt": "Setelah menyerahkan laporan rekomendasi perencanaan tata ruang daerah kepada instansi pemohon, Anda baru mengetahui bahwa terdapat kesalahan analisis spasial pada peta zonasi akibat penggunaan layer peta dasar yang belum ditautkan dengan pembaruan data topografi terkini. Langkah terbaik untuk mempertanggungjawabkan kesalahan tersebut adalah...",
    "choices": [
      "Menunggu tanggapan atau koreksi dari instansi pemohon sebelum melakukan revisi peta agar tidak memicu keraguan internal.",
      "Menyusun draf peta perbaikan secara internal terlebih dahulu, kemudian secara resmi bersurat menarik dokumen lama untuk diganti dokumen hasil revisi.",
      "Mengirimkan lembaran perbaikan peta saja secara informal kepada staf teknis di instansi pemohon untuk mengganti lampiran yang salah.",
      "Melaporkan kelalaian tim kepada atasan dan membiarkan atasan yang berkoordinasi langsung dengan pihak pemohon.",
      "Membuat dokumen klarifikasi teknis yang menyatakan bahwa kesalahan data tersebut tidak memengaruhi substansi utama rekomendasi."
    ],
    "scores": [
      1,
      5,
      2,
      3,
      4
    ],
    "explanation": "A (1): Sikap pasif dan tidak jujur (menunggu kesalahan ditemukan pihak lain).\n\nB (5): Respons tanggap, profesional secara administrasi resmi, serta proaktif memperbaiki kesalahan.\n\nC (2): Mengabaikan standar administrasi tata naskah dinas resmi (tindakan di bawah tangan).\n\nD (3): Terlalu bergantung pada atasan untuk menyelesaikan urusan tanggung jawab teknis diri/tim.\n\nE (4): Cenderung bersikap defensif dan meremehkan implikasi kesalahan teknis."
  },
  {
    "prompt": "Anda mengelola sistem pendaftaran pelatihan kepemimpinan pegawai. Seorang rekan akrab dari unit lain meminta bantuan Anda untuk memasukkan nama salah satu stafnya yang terlambat mendaftar melebihi batas jadwal sistem, dengan alasan posisi staf tersebut sangat membutuhkan pelatihan tersebut untuk kenaikan pangkat pertengahan tahun ini. Tindakan paling profesional yang memisahkan kepentingan pribadi/rekanan dengan ketentuan tugas adalah...",
    "choices": [
      "Membantu memasukkan data pendaftaran staf tersebut ke dalam sistem dengan syarat mendapatkan persetujuan tertulis dari atasan unit Anda.",
      "Menolak permintaan tersebut dengan sopan, menjelaskan batasan sistem yang telah terkunci, dan mengarahkannya mengikuti jadwal pendaftaran gelombang berikutnya.",
      "Membantu meloloskan pendaftaran tersebut selama masih ada kuota peserta yang belum terisi dari unit kerja lainnya.",
      "Menyarankan rekan tersebut untuk membuat surat permohonan khusus langsung kepada pimpinan instansi agar diberikan perlakuan diskresi pendaftaran.",
      "Menerima pendaftaran tersebut secara manual dan memasukkannya ke dalam daftar tunggu (waiting list) peserta cadangan."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "A (2): Berusaha berlindung di balik izin atasan untuk menyimpangi aturan baku sistem (kompromi tak berdasar).\n\nB (5): Menjaga integritas sistem, konsisten pada aturan, dan mengedepankan objektivitas kedinasan.\n\nC (1): Bentuk nepotisme/favoritisme kecil berbasis relasi pertemanan yang merusak aturan sistem.\n\nD (4): Mengarahkan pada jalur birokrasi resmi yang sah (diskresi pimpinan), namun opsi B lebih solutif secara teknis prosedur.\n\nE (3): Mengakomodasi kelonggaran informal yang tidak diatur dalam juknis pendaftaran."
  },
  {
    "prompt": "Anda ditugaskan dalam tim survei kelayakan lokasi pembangunan fasilitas umum. Hasil analisis objektif data lapangan menunjukkan bahwa Lokasi X kurang layak akibat tingkat kerawanan bencana. Namun, pimpinan instansi secara informal telah menyampaikan ke media bahwa Lokasi X adalah calon kuat tempat pembangunan fasilitas tersebut. Dalam menyusun dokumen rekomendasi akhir, tindakan yang paling profesional adalah...",
    "choices": [
      "Mengubah kriteria bobot penilaian teknis agar Lokasi X memenuhi ambang batas layak demi menyesuaikan pernyataan publik pimpinan.",
      "Tetap menyajikan data ketidaklayakan Lokasi X sesuai fakta teknis, serta menyajikan pilihan opsi mitigasi bencana jika Lokasi X tetap dipaksakan pilih.",
      "Menyajikan hasil kelayakan teknis apa adanya secara terperinci, disertai rekomendasi alternatif lokasi lain yang lebih aman dan efisien bagi instansi.",
      "Mengonsultasikan hasil temuan tersebut terlebih dahulu secara tertutup kepada pimpinan sebelum menyusun dokumen rekomendasi resmi.",
      "Mengusulkan penundaan penetapan lokasi dan meminta dilakukannya survei ulang oleh pihak ketiga netral demi menguji objektivitas."
    ],
    "scores": [
      1,
      4,
      5,
      3,
      2
    ],
    "explanation": "A (1): Pelanggaran berat terhadap objektivitas teknis demi menyenangkan pimpinan (bias pemalsuan data).\n\nB (4): Mempertahankan kejujuran data dan memberi kompromi mitigasi, tetapi masih membuka pintu pada lokasi yang jelas-jelas rawan.\n\nC (5): Menjaga integritas data teknis sepenuhnya sekaligus berorientasi pada keselamatan publik dan tujuan organisasi.\n\nD (3): Menunjukkan kehati-hatian komunikasi, tetapi berpotensi terintervensi sebelum draf jujur terbentuk.\n\nE (2): Menghindari ketegasan sikap profesional dengan cara melemparkan tanggung jawab pada pihak ketiga."
  },
  {
    "prompt": "Anda dipercaya memimpin proyek unit kerja yang menggunakan metodologi kerja agile digital baru. Beberapa anggota senior di tim Anda kerap memprotes keharusan pengisian papan aktivitas harian (scrum board) karena dianggap sebagai formalitas buang waktu yang membatasi fleksibilitas kerja mereka yang sudah berpengalaman. Sikap yang paling tepat untuk mengelola dinamika tersebut adalah...",
    "choices": [
      "Membebaskan anggota senior dari kewajiban pengisian papan aktivitas harian, selama target kinerja akhir mereka tetap tercapai.",
      "Mengubah format pelaporan menjadi mingguan khusus bagi anggota senior agar mereka tidak merasa terbebani aturan harian.",
      "Mengadakan diskusi untuk menjelaskan relevansi transparansi papan aktivitas bagi koordinasi tim, serta menyederhanakan mekanisme pengisian agar lebih praktis.",
      "Menegaskan kewajiban pengisian papan aktivitas secara ketat sesuai panduan kerja tanpa toleransi demi menegakkan disiplin aturan.",
      "Melaporkan ketidakpatuhan staf senior tersebut kepada pimpinan unit untuk diberikan pembinaan disiplin pegawai."
    ],
    "scores": [
      1,
      2,
      5,
      4,
      3
    ],
    "explanation": "A (1): Menerapkan standar ganda dan menghancurkan akuntabilitas tata kelola sistem tim.\n\nB (2): Berkompromi secara salah yang berpotensi memicu kecemburuan sosial antar-anggota tim.\n\nC (5): Memperbaiki alur kerja agar efisien, mendengarkan masukan, tetapi standar akuntabilitas bersama tetap terjaga.\n\nD (4): Mengutamakan ketaatan prosedural murni (terlalu rigid) tanpa mencoba memecahkan hambatan kepraktisan di lapangan.\n\nE (3): Langkah punitif prematur yang berisiko merusak hubungan kerja dalam tim."
  },
  {
    "prompt": "Sebuah proyek riset yang Anda pimpin sedang mengalami penurunan kualitas draf keluaran akibat tingginya tingkat perputaran (turnover) anggota tim. Waktu penyelesaian tersisa satu bulan lagi, sementara laporan evaluasi tengah tahunan harus diserahkan kepada dewan pembina proyek. Tindakan prioritas utama yang harus Anda ambil adalah...",
    "choices": [
      "Fokus merekrut personel baru yang memiliki pengalaman siap pakai untuk langsung menyelesaikan sisa draf pekerjaan riset.",
      "Menyusun ulang pembagian kerja anggota tim yang tersisa berdasarkan keahlian inti, menetapkan standar minimum luaran, dan mengintensifkan supervisi.",
      "Mengajukan permohonan pengurangan indikator target riset kepada dewan pembina agar sesuai dengan kapasitas sumber daya yang ada.",
      "Bekerja mandiri menyelesaikan bagian-bagian terrumit riset untuk menjamin kriteria kualitas luaran akhir terpenuhi.",
      "Melaporkan kendala perputaran anggota tim kepada dewan pembina dan meminta perpanjangan tenggat waktu proyek secara resmi."
    ],
    "scores": [
      3,
      5,
      2,
      4,
      1
    ],
    "explanation": "A (3): Rekrutmen di sisa waktu 1 bulan memakan waktu adaptasi baru yang berisiko tidak efisien.\n\nB (5): Berorientasi pada tindakan solutif internal yang efisien, efektif, dan menjaga ketercapaian target.\n\nC (2): Cenderung menyerah pada standar awal target organisasi tanpa mengupayakan optimasi internal.\n\nD (4): Menunjukkan komitmen pribadi tinggi, namun berbahaya (hero-syndrome) dan tidak menyelesaikan masalah manajemen tim.\n\nE (1): Respons reaktif yang langsung melempar kegagalan tata kelola tim ke dewan pembina."
  },
  {
    "prompt": "Dalam proses pengadaan barang dan jasa instansi, Anda ditunjuk sebagai anggota panitia teknis. Salah satu penyedia jasa yang ikut serta dalam tender adalah perusahaan milik kerabat jauh Anda. Meskipun Anda tidak duduk di posisi penentu pemenang, keterlibatan Anda dapat menimbulkan persepsi benturan kepentingan (conflict of interest). Sikap yang paling menjunjung tinggi integritas dan profesionalisme adalah...",
    "choices": [
      "Tetap menjalankan tugas panitia teknis secara objektif dan profesional tanpa memengaruhi proses penilaian rekan panitia lain.",
      "Mengundurkan diri secara tertulis dari keanggotaan panitia teknis pengadaan demi menghindari konflik kepentingan.",
      "Melaporkan hubungan kekeluargaan tersebut kepada ketua panitia dan meminta agar Anda tidak diberi tugas menilai dokumen penyedia jasa tersebut.",
      "Meminta perusahaan kerabat Anda untuk mundur dari proses tender demi menjaga nama baik dan reputasi instansi Anda.",
      "Meneruskan tugas penilaian dan menyerahkan seluruh hasil evaluasi teknis kepada tim pengawas internal untuk diverifikasi ketat."
    ],
    "scores": [
      2,
      4,
      5,
      1,
      3
    ],
    "explanation": "A (2): Mengabaikan standar pengelolaan persepsi benturan kepentingan publik (terlalu percaya diri pada netralitas internal).\n\nB (4): Sangat bersih dan menjauhi risiko, tetapi dalam konteks kepanitiaan organisasi, pengunduran diri total bisa mengganggu kelengkapan personel panitia jika penyesuaian porsi penilaian sudah mencukupi.\n\nC (5): Praktik transparansi etika kerja paling standar: deklarasikan, batasi kewenangan spesifik, jaga akuntabilitas.\n\nD (1): Mencampuri hak bisnis pihak luar/kerabat secara tidak proporsional.\n\nE (3): Menggeser fungsi pengawasan etika ke pihak inspektorat tanpa melakukan deklarasi terbuka di tingkat panitia."
  },
  {
    "prompt": "Anda baru saja dipromosikan menjadi kepala subbagian pelayanan administrasi. Pada minggu pertama kerja, Anda menemukan bahwa alur persetujuan dokumen dinas saat ini sangat berbelit-belit dan melewati 6 tahapan paraf yang menyebabkan waktu penyelesaian menjadi sangat lambat, walaupun secara regulasi lama alur tersebut legal. Langkah awal paling bijaksana untuk meningkatkan efisiensi kerja adalah...",
    "choices": [
      "Mengeluar tata laksana baru yang memangkas alur paraf menjadi 2 tahapan saja mulai hari berikutnya demi kecepatan layanan.",
      "Melakukan pemetaan alur proses bisnis saat ini, menganalisis titik urgensi tiap paraf, dan mendiskusikan usulan pemangkasan dengan tim serta pimpinan.",
      "Meneruskan alur persetujuan yang sudah ada untuk menjaga kepastian hukum dan menghindari gejolak resistensi pegawai senior.",
      "Meminta staf untuk mempercepat durasi pemeriksaan dokumen pada setiap tahapan paraf tanpa mengubah struktur alur yang ada.",
      "Mengonsultasikan regulasi baku pembuatan SOP ke bagian organisasi untuk memastikan apakah pemangkasan alur diperbolehkan."
    ],
    "scores": [
      2,
      5,
      1,
      3,
      4
    ],
    "explanation": "A (2): Berorientasi perubahan cepat, tetapi gegabah/ototoriter tanpa analisis risiko penjaminan mutu pada tahapan yang dipangkas.\n\nB (5): Sistematis, terukur, melibatkan pemangku kepentingan, dan menjamin efisiensi jangka panjang.\n\nC (1): Sikap status-quo dan takut pada perubahan (penghambat kemajuan efisiensi organisasi).\n\nD (3): Menuntut kecepatan staf tanpa menyelesaikan akar masalah struktural (penyebab bottleneck).\n\nE (4): Prosedural baik, namun pasif karena belum menyusun bukti analisis kebutuhan perubahan internal."
  },
  {
    "prompt": "Unit Anda mendapat penugasan mendadak dari pimpinan instansi untuk menyusun bahan paparan rapat kerja nasional dalam waktu 24 jam. Pada saat yang sama, Anda sedang memimpin pengerjaan proyek rutin unit yang jatuh tempo besok sore. Seluruh anggota tim berada dalam tingkat kejenuhan tinggi akibat lembur beruntun. Prioritas tindakan Anda sebagai pemimpin unit adalah...",
    "choices": [
      "Menolak tugas mendadak pimpinan secara halus dengan alasan tim sedang fokus pada proyek rutin yang jatuh tempo.",
      "Mengalihkan seluruh anggota tim untuk menyelesaikan tugas mendadak pimpinan, dan meminta perpanjangan waktu proyek rutin.",
      "Membagi tim menjadi dua kelompok: satu kelompok mengamankan pengerjaan proyek rutin, dan kelompok lainnya fokus pada penyusunan bahan paparan mendadak.",
      "Mengerjakan sendiri bahan paparan mendadak pimpinan hingga selesai, sementara seluruh tim difokuskan menyelesaikan proyek rutin.",
      "Melakukan konsolidasi cepat untuk memetakan bagian paling penting dari kedua tugas, mendistribusikan beban secara proporsional, dan memimpin pengerjaan paralel."
    ],
    "scores": [
      1,
      3,
      4,
      2,
      5
    ],
    "explanation": "A (1): Tidak responsif terhadap kebutuhan strategis instansi dalam kondisi darurat pimpinan.\n\nB (3): Mengorbankan tenggat tugas rutin yang sudah terjadwal tanpa upaya mitigasi pengerjaan simultan.\n\nC (4): Pembagian kerja yang lumayan baik, namun kurang memiliki unsur penentuan titik kritis (prioritasi beban) dibanding opsi E.\n\nD (2): Mengambil beban ekstrim sendiri (heroic leadership yang tidak sehat) yang berpotensi menurunkan kualitas bahan paparan mendadak.\n\nE (5): Kombinasi manajemen beban kerja, ketepatan prioritas, kepemimpinan inklusif, dan efisiensi waktu."
  },
  {
    "prompt": "Anda menjadi anggota tim yang bertugas menyusun laporan evaluasi program untuk disampaikan kepada pimpinan besok pagi. Saat melakukan pemeriksaan akhir, Anda menemukan perbedaan angka pada salah satu tabel dengan data pendukung. Perbedaan tersebut hanya memengaruhi sebagian kecil isi laporan, tetapi jika dibiarkan dapat menimbulkan pertanyaan mengenai validitas laporan. Waktu yang tersedia hanya sekitar dua jam, sementara rekan yang mengolah data sedang tidak dapat dihubungi. Tindakan yang paling tepat adalah…",
    "choices": [
      "Memperbaiki angka yang tidak sesuai berdasarkan data pendukung yang paling mutakhir, kemudian melanjutkan penyelesaian laporan agar tenggat tetap terpenuhi.",
      "Menghentikan penyusunan laporan sementara dan menelusuri seluruh data dari awal agar tidak ada kemungkinan kesalahan lain yang terlewat.",
      "Menyampaikan temuan tersebut kepada ketua tim, lalu menunggu arahan sebelum melakukan perubahan terhadap laporan.",
      "Memeriksa sumber data yang berkaitan langsung dengan angka tersebut, memperbaiki bagian yang dapat dipastikan, serta mencatat bagian yang masih memerlukan konfirmasi sebelum laporan disampaikan.",
      "Menggunakan angka yang telah tercantum dalam laporan sementara agar pekerjaan selesai tepat waktu, kemudian mengusulkan koreksi setelah laporan disampaikan."
    ],
    "scores": [
      4,
      3,
      2,
      5,
      1
    ],
    "explanation": "D (5): Memverifikasi bagian yang berisiko, memperbaiki hal yang sudah dapat dipastikan, dan menandai informasi yang belum terkonfirmasi. Pendekatan ini paling proporsional terhadap keterbatasan waktu dan risiko laporan.\n\nA (4): Menunjukkan inisiatif dan menjaga tenggat, tetapi koreksi dilakukan tanpa pengelolaan eksplisit terhadap bagian yang masih belum pasti.\n\nB (3): Sangat teliti, tetapi pemeriksaan seluruh data dari awal tidak proporsional dengan waktu yang tersedia.\n\nC (2): Menjaga kewenangan, tetapi terlalu bergantung pada atasan untuk masalah yang sebagian dapat ditangani secara mandiri.\n\nE (1): Deadline tercapai, tetapi risiko memasukkan informasi yang diketahui bermasalah ke laporan resmi tetap dibiarkan."
  },
  {
    "prompt": "Atasan meminta Anda menyelesaikan rekapitulasi data yang biasanya membutuhkan dua hari, tetapi kali ini harus selesai sore ini karena akan digunakan dalam rapat mendadak. Data berasal dari beberapa unit dan sebagian belum diperbarui. Atasan mengatakan, “Gunakan dulu data yang ada, yang penting bahan rapat tersedia.” Anda mengetahui bahwa keputusan dalam rapat kemungkinan akan menggunakan angka tersebut. Apa tindakan Anda?",
    "choices": [
      "Menggunakan data terbaru yang tersedia dan memberikan catatan bahwa sebagian data belum diperbarui.",
      "Menyelesaikan seluruh rekap berdasarkan data yang ada agar pimpinan memperoleh bahan rapat sesuai waktu yang diminta.",
      "Meminta penundaan rapat karena data belum seluruhnya diperbarui sehingga hasil rekap belum dapat dijamin akurat.",
      "Menanyakan kepada atasan bagian data mana yang paling kritis, kemudian memprioritaskan verifikasi bagian tersebut sebelum menyelesaikan rekap.",
      "Mengolah data yang tersedia, memisahkan angka yang sudah terverifikasi dan belum terverifikasi, lalu menjelaskan keterbatasannya agar bahan rapat tetap dapat digunakan secara proporsional."
    ],
    "scores": [
      4,
      2,
      1,
      5,
      3
    ],
    "explanation": "D (5): Mengidentifikasi informasi yang paling berpengaruh terhadap keputusan lalu memprioritaskan verifikasinya. Ini menunjukkan kemampuan menentukan prioritas berdasarkan risiko.\n\nA (4): Transparan mengenai keterbatasan data, tetapi belum menentukan data mana yang paling kritis.\n\nB (2): Memenuhi deadline tetapi terlalu mengandalkan data yang belum diperbarui.\n\nC (1): Menjaga akurasi secara berlebihan tanpa mempertimbangkan kebutuhan organisasi yang mendesak.\n\nE (3): Transparan dan cukup aman, tetapi belum melakukan prioritas verifikasi terhadap informasi yang paling menentukan."
  },
  {
    "prompt": "Anda sedang menyelesaikan tugas utama yang memiliki deadline hari ini. Seorang rekan meminta bantuan karena pekerjaannya juga harus selesai hari ini. Jika Anda membantunya terlalu lama, tugas utama Anda berpotensi terlambat. Namun, pekerjaan rekan tersebut merupakan bagian dari proses yang nantinya berkaitan dengan pekerjaan tim Anda. Tindakan paling tepat adalah…",
    "choices": [
      "Menyelesaikan tugas sendiri terlebih dahulu karena deadline pribadi merupakan tanggung jawab utama Anda.",
      "Membantu rekan secara penuh sampai pekerjaannya selesai agar target tim tidak terganggu.",
      "Menjelaskan kondisi pekerjaan Anda, membantu bagian rekan yang paling kritis, kemudian kembali menyelesaikan tugas utama.",
      "Meminta ketua tim menentukan apakah Anda boleh membantu rekan sebelum melanjutkan pekerjaan sendiri.",
      "Memberikan beberapa arahan kepada rekan agar ia dapat menyelesaikan pekerjaannya sendiri tanpa mengganggu pekerjaan Anda."
    ],
    "scores": [
      3,
      1,
      5,
      4,
      2
    ],
    "explanation": "C (5): Membantu secara terukur pada bagian paling kritis tanpa meninggalkan tugas utama. Ini paling baik dalam menyeimbangkan kepentingan individu dan tim.\n\nD (4): Koordinasi dengan ketua tim aman, tetapi situasi masih dapat ditangani secara mandiri.\n\nA (3): Menjaga tugas pribadi, tetapi kurang mempertimbangkan ketergantungan pekerjaan dalam tim.\n\nE (2): Mendorong kemandirian rekan, tetapi bantuan yang diberikan belum tentu menyelesaikan hambatan utama.\n\nB (1): Mengutamakan pekerjaan rekan secara penuh sehingga tanggung jawab utama sendiri berisiko terbengkalai."
  },
  {
    "prompt": "Anda mendapat tugas baru yang harus selesai dalam tiga hari. Tugas tersebut belum pernah Anda kerjakan sebelumnya dan memiliki konsekuensi cukup besar jika hasilnya keliru. Anda memiliki kemampuan dasar untuk mengerjakannya, tetapi belum memahami beberapa aspek teknis. Apa tindakan Anda?",
    "choices": [
      "Mempelajari seluruh aspek teknis terlebih dahulu sebelum mulai mengerjakan agar hasil tidak mengandung kesalahan.",
      "Mulai mengerjakan bagian yang sudah Anda kuasai sambil mempelajari aspek yang belum dipahami.",
      "Meminta rekan yang lebih berpengalaman mengerjakan bagian teknis agar hasil pekerjaan lebih aman.",
      "Meminta arahan pimpinan secara rinci sebelum memulai karena tugas tersebut memiliki risiko tinggi.",
      "Mengidentifikasi bagian yang berada di luar penguasaan Anda, mempelajari referensi yang relevan, lalu berkonsultasi secara spesifik pada aspek yang berisiko tinggi."
    ],
    "scores": [
      3,
      4,
      1,
      2,
      5
    ],
    "explanation": "E (5): Menggabungkan pembelajaran mandiri dengan konsultasi pada titik yang memang membutuhkan keahlian khusus.\n\nB (4): Menunjukkan inisiatif, tetapi belum secara eksplisit mengendalikan risiko pada bagian teknis yang belum dikuasai.\n\nA (3): Teliti, tetapi terlalu lama berada pada tahap persiapan.\n\nD (2): Meminta arahan secara rinci dapat mengurangi risiko, tetapi terlalu bergantung pada pimpinan.\n\nC (1): Mengurangi risiko pribadi, tetapi terlalu cepat mengalihkan bagian pekerjaan yang sebenarnya masih dapat dipelajari."
  },
  {
    "prompt": "Dalam pemeriksaan dokumen, Anda menemukan kesalahan kecil yang berasal dari pekerjaan Anda sendiri. Dokumen tersebut sudah diperiksa atasan tetapi belum dikirim kepada pihak eksternal. Kesalahan tersebut tidak mengubah substansi utama, tetapi dapat menimbulkan pertanyaan jika diketahui kemudian. Tindakan terbaik adalah…",
    "choices": [
      "Segera memperbaiki kesalahan tersebut sebelum dokumen dikirim tanpa perlu membahasnya lebih lanjut karena dampaknya kecil.",
      "Memberi tahu atasan mengenai kesalahan, menjelaskan dampaknya, kemudian mengusulkan perbaikan sebelum dokumen dikirim.",
      "Memeriksa kembali seluruh dokumen secara menyeluruh untuk memastikan tidak terdapat kesalahan lain sebelum memberitahukan atasan.",
      "Membiarkan dokumen dikirim karena kesalahan tersebut tidak memengaruhi substansi utama.",
      "Memperbaiki bagian yang salah dan menyampaikan kepada atasan bahwa telah dilakukan koreksi sebelum dokumen diteruskan."
    ],
    "scores": [
      4,
      5,
      3,
      1,
      2
    ],
    "explanation": "B (5): Mengakui kesalahan, menilai dampaknya, dan mengusulkan koreksi sebelum dokumen keluar.\n\nA (4): Cepat melakukan koreksi, tetapi kurang transparan mengenai perubahan.\n\nC (3): Teliti, tetapi memperpanjang proses sebelum menangani kesalahan yang sudah diketahui.\n\nE (2): Melakukan koreksi dan memberi tahu atasan, tetapi tidak menjelaskan dampak maupun alasan koreksi secara memadai.\n\nD (1): Menganggap kecilnya dampak sebagai alasan untuk membiarkan kesalahan."
  },
  {
    "prompt": "Dalam rapat tim, seorang pegawai senior mengusulkan metode kerja yang selama ini digunakan. Anda menemukan bahwa metode tersebut sudah tidak sepenuhnya sesuai dengan kebijakan terbaru. Jika Anda langsung menyampaikan hal tersebut, ada kemungkinan ia merasa pendapatnya diabaikan. Apa respons Anda?",
    "choices": [
      "Mengikuti arahan pegawai senior karena ia memiliki pengalaman lebih banyak.",
      "Menyampaikan bahwa terdapat perubahan kebijakan dan mengajak tim membandingkan metode lama dengan ketentuan terbaru.",
      "Menunggu rapat selesai kemudian menyampaikan persoalan tersebut secara pribadi kepada pegawai senior.",
      "Menyampaikan keberatan secara langsung agar tim tidak mengambil keputusan berdasarkan metode yang sudah tidak berlaku.",
      "Mengikuti metode yang disarankan sementara waktu sambil memeriksa kembali apakah kebijakan terbaru memang berlaku."
    ],
    "scores": [
      1,
      5,
      4,
      3,
      2
    ],
    "explanation": "B (5): Menjadikan kebijakan sebagai dasar objektif tanpa merendahkan pengalaman senior.\n\nC (4): Menjaga hubungan kerja, tetapi informasi penting bagi keputusan tim disampaikan terlambat.\n\nD (3): Tegas terhadap risiko, tetapi pendekatan langsung dapat menimbulkan resistensi.\n\nE (2): Menunjukkan kehati-hatian, tetapi menunda persoalan yang relevan terhadap keputusan.\n\nA (1): Mengutamakan senioritas daripada ketentuan yang berlaku."
  },
  {
    "prompt": "Anda mendapat akses ke dokumen internal yang memuat informasi strategis organisasi. Seorang rekan dari unit lain meminta salinan dokumen tersebut karena informasi itu akan membantu menyelesaikan pekerjaannya. Ia memang memiliki hubungan kerja dengan proyek terkait, tetapi Anda tidak mengetahui apakah ia memiliki kewenangan mengakses dokumen tersebut. Apa yang Anda lakukan?",
    "choices": [
      "Memberikan dokumen tersebut karena pekerjaan rekan masih berkaitan dengan kepentingan organisasi.",
      "Memberikan bagian informasi yang dianggap relevan tanpa menyertakan keseluruhan dokumen.",
      "Menjelaskan bahwa Anda perlu memastikan kewenangan akses terlebih dahulu sebelum membagikan informasi.",
      "Meminta rekan menghubungi atasannya agar akses dapat diberikan secara resmi.",
      "Tidak memberikan dokumen dan meminta rekan memperoleh informasi melalui jalur resmi tanpa melakukan pengecekan lebih lanjut."
    ],
    "scores": [
      1,
      2,
      5,
      4,
      3
    ],
    "explanation": "C (5): Memastikan hak akses terlebih dahulu sebelum informasi dibagikan.\n\nD (4): Aman dan formal, tetapi langsung mengalihkan proses tanpa memastikan kebutuhan akses terlebih dahulu.\n\nE (3): Aman, tetapi kurang membantu mencari penyelesaian yang paling efisien.\n\nB (2): Membatasi informasi tetapi tetap membagikan sesuatu tanpa memastikan kewenangan.\n\nA (1): Menganggap kepentingan pekerjaan otomatis menjadi dasar pemberian akses."
  },
  {
    "prompt": "Di pertengahan minggu, pimpinan mengubah prioritas pekerjaan karena muncul kebutuhan organisasi yang lebih mendesak. Pekerjaan lama tim Anda sudah hampir selesai. Sebagian anggota merasa perubahan tersebut tidak efisien. Apa yang paling tepat Anda lakukan?",
    "choices": [
      "Tetap menyelesaikan pekerjaan lama karena sudah hampir selesai.",
      "Mengikuti prioritas baru dan menghentikan pekerjaan lama sepenuhnya.",
      "Meminta pimpinan memastikan kembali prioritas sebelum tim mengubah rencana.",
      "Memetakan pekerjaan lama yang sudah berjalan, menentukan bagian yang dapat ditutup atau ditunda, kemudian mengalihkan sumber daya pada prioritas baru.",
      "Mengajak tim membagi waktu antara pekerjaan lama dan baru."
    ],
    "scores": [
      2,
      1,
      4,
      5,
      3
    ],
    "explanation": "D (5): Mengelola perubahan dengan mempertimbangkan pekerjaan yang sudah berjalan sekaligus kebutuhan baru.\n\nC (4): Tepat untuk memastikan prioritas, tetapi belum menyelesaikan pengelolaan transisi.\n\nE (3): Menjaga dua pekerjaan, tetapi dapat membuat sumber daya terlalu terbagi.\n\nA (2): Terlalu terikat pada rencana lama.\n\nB (1): Responsif tetapi mengabaikan hasil pekerjaan lama yang sudah hampir selesai."
  },
  {
    "prompt": "Anda diminta membantu menyiapkan bahan presentasi pimpinan. Salah satu data berasal dari unit lain dan belum mendapatkan konfirmasi terakhir. Pimpinan membutuhkan presentasi beberapa jam lagi. Tindakan paling tepat adalah…",
    "choices": [
      "Menggunakan data tersebut karena berasal dari unit yang berwenang.",
      "Menghapus data tersebut agar tidak ada informasi yang belum terverifikasi.",
      "Menghubungi unit sumber untuk meminta konfirmasi sambil menyiapkan bagian presentasi lain yang sudah pasti.",
      "Menggunakan data sementara dengan catatan bahwa angka tersebut masih menunggu konfirmasi.",
      "Menunggu seluruh data dikonfirmasi sebelum melanjutkan presentasi."
    ],
    "scores": [
      2,
      4,
      5,
      3,
      1
    ],
    "explanation": "C (5): Melakukan verifikasi secara paralel tanpa menghentikan pekerjaan yang dapat terus berjalan.\n\nB (4): Mengurangi risiko, tetapi dapat menghilangkan informasi yang sebenarnya penting.\n\nD (3): Transparan mengenai status data, tetapi tetap memasukkan informasi yang belum terverifikasi.\n\nA (2): Mengandalkan otoritas sumber tanpa konfirmasi.\n\nE (1): Menunggu seluruh proses sehingga pekerjaan yang aman dikerjakan ikut tertunda."
  },
  {
    "prompt": "Anda mendapat kritik dari atasan karena hasil pekerjaan dianggap kurang sistematis. Anda merasa sebagian kritik tidak tepat karena keterbatasan waktu membuat Anda harus menyederhanakan beberapa bagian. Respons terbaik adalah…",
    "choices": [
      "Menjelaskan bahwa keterbatasan waktu menjadi penyebab utama.",
      "Menerima kritik dan langsung memperbaiki seluruh pekerjaan sesuai arahan.",
      "Meminta contoh bagian yang dianggap kurang sistematis.",
      "Memeriksa kembali hasil pekerjaan berdasarkan kritik, mengidentifikasi bagian yang memang perlu diperbaiki, kemudian menyampaikan kendala yang relevan.",
      "Membandingkan hasil pekerjaan dengan hasil sebelumnya untuk menunjukkan bahwa kualitas sebenarnya meningkat."
    ],
    "scores": [
      2,
      4,
      3,
      5,
      1
    ],
    "explanation": "D (5): Tidak defensif dan tidak menerima kritik secara buta. Kritik dievaluasi lalu digunakan sebagai dasar perbaikan.\n\nB (4): Terbuka terhadap evaluasi, tetapi menerima seluruh kritik tanpa memilah substansinya.\n\nC (3): Memperjelas kritik, tetapi belum menunjukkan evaluasi mandiri.\n\nA (2): Memberikan konteks, tetapi cenderung membela diri.\n\nE (1): Mengalihkan pembahasan pada pencapaian sebelumnya daripada memperbaiki masalah saat ini."
  },
  {
    "prompt": "Pada akhir bulan, Anda mengetahui bahwa salah satu target unit hampir tidak tercapai. Beberapa anggota mengusulkan agar indikator tertentu dihitung menggunakan metode lama sehingga secara administratif target terlihat tercapai. Metode lama pernah digunakan, tetapi sudah tidak lagi menjadi pendekatan yang disepakati. Apa yang paling tepat Anda lakukan?",
    "choices": [
      "Menggunakan metode lama jika masih dapat dijelaskan secara administratif.",
      "Menolak perubahan perhitungan dan menggunakan metode terbaru meskipun hasil target terlihat lebih rendah.",
      "Mengajak tim meninjau dasar perhitungan yang berlaku dan menyusun laporan berdasarkan metode yang dapat dipertanggungjawabkan.",
      "Menyampaikan kepada pimpinan bahwa target tidak tercapai dan menyerahkan keputusan selanjutnya.",
      "Menggunakan metode terbaru untuk laporan resmi, tetapi mencantumkan hasil metode lama sebagai pembanding."
    ],
    "scores": [
      1,
      4,
      5,
      2,
      3
    ],
    "explanation": "C (5): Memastikan dasar pengukuran yang digunakan jelas dan dapat dipertanggungjawabkan.\n\nB (4): Memilih metode terbaru, tetapi belum memastikan pemahaman bersama terhadap dasar perhitungan.\n\nE (3): Memberikan pembanding, tetapi dapat membingungkan apabila status kedua metode tidak dijelaskan.\n\nD (2): Melibatkan pimpinan, tetapi terlalu cepat melepaskan tanggung jawab analisis.\n\nA (1): Mengutamakan pencapaian indikator dengan mengabaikan standar pengukuran yang berlaku."
  },
  {
    "prompt": "Anda sedang mengerjakan tiga pekerjaan sekaligus. Pekerjaan pertama memiliki deadline sore ini dan dampaknya cukup besar jika terlambat. Pekerjaan kedua harus selesai besok tetapi membutuhkan konsentrasi tinggi. Pekerjaan ketiga merupakan permintaan pimpinan yang baru masuk dan diminta “secepatnya”, tanpa deadline jelas. Bagaimana Anda menentukan prioritas?",
    "choices": [
      "Menyelesaikan pekerjaan pertama karena deadline paling dekat.",
      "Mengerjakan permintaan pimpinan terlebih dahulu karena berasal langsung dari pimpinan.",
      "Menilai urgensi dan dampak masing-masing pekerjaan, kemudian menyusun urutan berdasarkan risiko dan tenggat.",
      "Menyelesaikan pekerjaan pertama, kemudian pekerjaan dari pimpinan, baru pekerjaan kedua.",
      "Menghubungi pimpinan untuk meminta penentuan prioritas ketiga pekerjaan."
    ],
    "scores": [
      4,
      2,
      5,
      3,
      1
    ],
    "explanation": "C (5): Prioritas ditentukan berdasarkan kombinasi urgensi, dampak, risiko, dan deadline.\n\nA (4): Logis, tetapi hanya menggunakan deadline sebagai dasar.\n\nD (3): Memiliki urutan, tetapi tidak berdasarkan analisis risiko.\n\nB (2): Responsif terhadap pimpinan, tetapi belum ada alasan tugas tersebut paling mendesak.\n\nE (1): Terlalu bergantung pada atasan padahal informasi awal cukup untuk menentukan prioritas."
  },
  {
    "prompt": "Dalam suatu proyek, Anda menemukan rekan satu tim terlambat menyerahkan bagian pekerjaannya. Keterlambatan tersebut berpotensi membuat pekerjaan Anda ikut terlambat. Rekan tersebut juga sedang menangani pekerjaan lain yang mendesak. Apa tindakan paling tepat?",
    "choices": [
      "Menunggu rekan menyelesaikan pekerjaannya karena bagian tersebut merupakan tanggung jawabnya.",
      "Mengambil alih seluruh bagian pekerjaan agar proyek tidak terlambat.",
      "Mengingatkan rekan mengenai dampak keterlambatan dan menyepakati bagian mana yang dapat diselesaikan lebih dahulu.",
      "Melaporkan keterlambatan kepada ketua tim agar ia menentukan langkah selanjutnya.",
      "Menyesuaikan pekerjaan Anda dengan kondisi yang ada sambil meminta rekan memberikan perkiraan waktu penyelesaian."
    ],
    "scores": [
      1,
      2,
      5,
      4,
      3
    ],
    "explanation": "C (5): Masalah ditangani langsung secara proporsional dengan mempertimbangkan dampak dan prioritas.\n\nD (4): Tepat jika masalah tidak dapat diselesaikan, tetapi eskalasi belum diperlukan.\n\nE (3): Membantu perencanaan, tetapi belum menyelesaikan konflik prioritas.\n\nB (2): Menjaga target tetapi mengaburkan tanggung jawab.\n\nA (1): Menghormati tanggung jawab rekan tetapi pasif terhadap risiko proyek."
  },
  {
    "prompt": "Anda menemukan bahwa prosedur baru membuat pekerjaan menjadi lebih lambat dibandingkan metode lama. Sebagian rekan memilih tetap menggunakan cara lama karena hasilnya lebih cepat. Sikap Anda adalah…",
    "choices": [
      "Mengikuti prosedur baru sepenuhnya meskipun pekerjaan menjadi lebih lambat.",
      "Menggunakan cara lama untuk pekerjaan mendesak dan prosedur baru untuk pekerjaan rutin.",
      "Mencoba memahami alasan perubahan prosedur dan mencari bagian proses yang dapat dibuat lebih efisien tanpa mengubah ketentuan.",
      "Menyampaikan kepada pimpinan bahwa prosedur baru tidak efektif dan meminta prosedur dikembalikan.",
      "Mengikuti prosedur baru sambil mencatat bagian yang menyebabkan hambatan sebagai bahan evaluasi."
    ],
    "scores": [
      3,
      1,
      5,
      2,
      4
    ],
    "explanation": "C (5): Tidak memilih antara kepatuhan dan efisiensi secara ekstrem, tetapi mencari efisiensi yang tetap berada dalam ketentuan.\n\nE (4): Baik sebagai bahan evaluasi, tetapi kurang proaktif mencari solusi.\n\nA (3): Patuh tetapi kurang adaptif terhadap masalah efisiensi.\n\nD (2): Kritik dapat diperlukan, tetapi terlalu cepat meminta perubahan.\n\nB (1): Menciptakan penerapan prosedur yang tidak konsisten."
  },
  {
    "prompt": "Dalam pekerjaan kelompok, hasil yang disusun tim ternyata tidak mencapai standar. Beberapa anggota berpendapat penyebab utamanya adalah kualitas pekerjaan salah satu anggota. Anda mengetahui bahwa masalah sebenarnya berasal dari beberapa keputusan tim yang dibuat bersama. Apa yang Anda lakukan?",
    "choices": [
      "Menjelaskan bahwa kesalahan merupakan tanggung jawab bersama agar tidak ada satu orang yang disalahkan.",
      "Mengidentifikasi bagian hasil yang tidak memenuhi standar dan menelusuri faktor penyebabnya bersama anggota tim.",
      "Meminta anggota yang pekerjaannya paling bermasalah memperbaiki bagian tersebut.",
      "Melaporkan kepada ketua tim bahwa target tidak tercapai dan meminta evaluasi terhadap anggota terkait.",
      "Mengambil bagian yang paling bermasalah untuk diperbaiki sendiri agar kualitas akhir segera meningkat."
    ],
    "scores": [
      4,
      5,
      3,
      1,
      2
    ],
    "explanation": "B (5): Menelusuri masalah berdasarkan fakta dan proses, bukan mencari individu untuk disalahkan.\n\nA (4): Menjaga rasa tanggung jawab kolektif, tetapi belum mencari akar masalah.\n\nC (3): Cepat memperbaiki hasil, tetapi menyederhanakan penyebab masalah.\n\nE (2): Efektif jangka pendek, tetapi masalah proses dapat berulang.\n\nD (1): Terlalu cepat mengarah pada evaluasi individu sebelum penyebabnya jelas."
  },
  {
    "prompt": "Anda mendapat kesempatan mengikuti pelatihan yang sangat relevan dengan pekerjaan. Namun, jadwal pelatihan bertepatan dengan periode penyelesaian pekerjaan penting yang menjadi tanggung jawab Anda. Atasan mengatakan Anda boleh mengikuti pelatihan selama pekerjaan tetap selesai. Apa keputusan paling profesional?",
    "choices": [
      "Menolak pelatihan karena pekerjaan utama harus menjadi prioritas.",
      "Mengikuti pelatihan karena kesempatan meningkatkan kompetensi belum tentu tersedia lagi.",
      "Mengikuti pelatihan dan menyelesaikan pekerjaan pada waktu di luar jam pelatihan.",
      "Mendiskusikan pembagian pekerjaan dan jadwal penyelesaian dengan atasan sebelum memastikan keikutsertaan.",
      "Meminta rekan mengambil alih pekerjaan utama selama Anda mengikuti pelatihan."
    ],
    "scores": [
      4,
      2,
      1,
      5,
      3
    ],
    "explanation": "D (5): Menyeimbangkan pengembangan kompetensi dan tanggung jawab pekerjaan melalui pengaturan kapasitas terlebih dahulu.\n\nA (4): Sangat bertanggung jawab terhadap pekerjaan, tetapi terlalu cepat mengorbankan kesempatan pengembangan.\n\nE (3): Delegasi dapat membantu, tetapi harus memperhitungkan kapasitas dan kewenangan rekan.\n\nB (2): Berorientasi pengembangan, tetapi belum memastikan pekerjaan tetap terkendali.\n\nC (1): Berusaha mengerjakan semuanya, tetapi berisiko menurunkan kualitas dan meningkatkan beban kerja."
  },
  {
    "prompt": "Anda sedang mengerjakan laporan yang membutuhkan data dari beberapa unit. Salah satu unit memberikan data yang tampak tidak konsisten dengan tren sebelumnya. Mereka menjelaskan bahwa kondisi tahun ini memang berbeda dan data tersebut telah disahkan oleh penanggung jawab unit. Apa tindakan terbaik?",
    "choices": [
      "Menggunakan data tersebut karena sudah disahkan oleh unit sumber.",
      "Menolak data tersebut sampai unit memberikan penjelasan tertulis.",
      "Memasukkan data tersebut tetapi memberikan catatan bahwa terdapat perbedaan dengan data sebelumnya.",
      "Membandingkan data dengan sumber pendukung yang tersedia dan meminta klarifikasi pada bagian yang memiliki perbedaan paling signifikan.",
      "Menyampaikan kepada atasan bahwa data unit tersebut diragukan dan meminta keputusan."
    ],
    "scores": [
      3,
      2,
      4,
      5,
      1
    ],
    "explanation": "D (5): Memeriksa anomali berdasarkan data dan meminta klarifikasi secara spesifik tanpa langsung menuduh data salah.\n\nC (4): Transparan mengenai perbedaan, tetapi belum mencari penyebabnya.\n\nA (3): Menghormati validasi unit, tetapi kurang melakukan pemeriksaan silang.\n\nB (2): Hati-hati, tetapi dapat memperlambat pekerjaan secara berlebihan.\n\nE (1): Terlalu cepat mengeskalasi tanpa melakukan pemeriksaan awal."
  },
  {
    "prompt": "Atasan meminta Anda menyelesaikan dokumen dengan format sedikit berbeda dari format standar karena dokumen tersebut akan digunakan untuk kebutuhan khusus. Perubahan tersebut tidak bertentangan dengan aturan, tetapi belum pernah digunakan oleh unit Anda. Apa tindakan Anda?",
    "choices": [
      "Menggunakan format lama karena sudah terbukti digunakan sebelumnya.",
      "Mengikuti format baru sepenuhnya karena merupakan permintaan langsung atasan.",
      "Memastikan kebutuhan format khusus tersebut, kemudian menyesuaikan bagian yang diperlukan tanpa mengubah unsur wajib dalam dokumen.",
      "Meminta persetujuan tertulis terlebih dahulu sebelum mengubah format apa pun.",
      "Membuat dua versi dokumen, yaitu format lama dan format baru."
    ],
    "scores": [
      3,
      4,
      5,
      2,
      1
    ],
    "explanation": "C (5): Adaptif terhadap kebutuhan baru tetapi tetap menjaga unsur yang wajib.\n\nB (4): Responsif terhadap atasan, tetapi perlu memastikan unsur standar tetap terpenuhi.\n\nA (3): Aman karena familiar, tetapi kurang adaptif.\n\nD (2): Sangat hati-hati, tetapi persetujuan tertulis belum tentu diperlukan.\n\nE (1): Menambah pekerjaan tanpa menyelesaikan kebutuhan secara efisien."
  },
  {
    "prompt": "Anda mengetahui bahwa seorang rekan yang cukup dekat dengan Anda melakukan kesalahan dalam proses administrasi. Kesalahan tersebut belum menimbulkan dampak karena masih dapat diperbaiki. Rekan meminta Anda tidak menyampaikan kepada siapa pun dan berjanji akan memperbaikinya sendiri. Apa tindakan Anda?",
    "choices": [
      "Memberikan kesempatan kepada rekan memperbaiki kesalahan karena dampaknya belum terjadi.",
      "Meminta rekan segera memperbaiki kesalahan dan kemudian memastikan bahwa koreksinya benar.",
      "Menyampaikan kepada rekan bahwa kesalahan perlu ditangani sesuai mekanisme yang berlaku, termasuk memberi tahu pihak yang bertanggung jawab jika diperlukan.",
      "Langsung melaporkan kesalahan kepada atasan agar tidak ada risiko masalah di kemudian hari.",
      "Membantu rekan memperbaiki kesalahan tersebut agar masalah selesai tanpa perlu diketahui pihak lain."
    ],
    "scores": [
      3,
      4,
      5,
      2,
      1
    ],
    "explanation": "C (5): Memisahkan hubungan pribadi dari kewajiban profesional dan menggunakan mekanisme yang proporsional.\n\nB (4): Efektif dan cukup bertanggung jawab, tetapi belum memastikan apakah pelaporan diperlukan.\n\nA (3): Memberikan kesempatan koreksi, tetapi terlalu mengandalkan komitmen pribadi.\n\nD (2): Sangat aman, tetapi eskalasi langsung belum tentu proporsional.\n\nE (1): Membantu menyelesaikan kesalahan tetapi berpotensi menyembunyikannya dari pihak yang berkepentingan."
  },
  {
    "prompt": "Anda menjadi penanggung jawab sebuah pekerjaan yang harus selesai hari ini. Menjelang akhir waktu kerja, sebagian besar pekerjaan sudah selesai, tetapi pemeriksaan akhir belum dilakukan. Jika pemeriksaan dilakukan secara menyeluruh, pekerjaan kemungkinan baru selesai beberapa jam kemudian. Jika langsung dikirim, target waktu tercapai tetapi terdapat risiko kesalahan yang belum terdeteksi. Apa tindakan paling tepat?",
    "choices": [
      "Mengirim pekerjaan tepat waktu karena target merupakan indikator utama keberhasilan pekerjaan.",
      "Menyelesaikan pemeriksaan menyeluruh terlebih dahulu meskipun pekerjaan melewati deadline.",
      "Melakukan pemeriksaan pada bagian yang paling kritis dan berisiko, menyelesaikan koreksi yang diperlukan, kemudian menyampaikan status bagian yang masih belum diperiksa secara penuh.",
      "Meminta tambahan waktu kepada atasan agar pemeriksaan dapat dilakukan tanpa mengurangi kualitas.",
      "Meminta anggota tim lain melakukan pemeriksaan sementara Anda menyiapkan dokumen untuk dikirim."
    ],
    "scores": [
      1,
      3,
      5,
      4,
      2
    ],
    "explanation": "C (5): Menggunakan pemeriksaan berbasis risiko sehingga bagian paling kritis mendapat prioritas tanpa mengabaikan deadline dan transparansi.\n\nD (4): Dapat menjadi pilihan jika risiko sangat tinggi, tetapi belum tentu diperlukan apabila pemeriksaan kritis masih dapat dilakukan.\n\nB (3): Menjaga kualitas, tetapi tidak menyesuaikan metode dengan keterbatasan waktu.\n\nE (2): Memanfaatkan sumber daya tim, tetapi belum tentu memastikan pemeriksaan diarahkan pada bagian paling berisiko.\n\nA (1): Terlalu berorientasi deadline dan mengabaikan risiko kualitas."
  },
  {
    "prompt": "Dua jam sebelum laporan anggaran dipublikasikan, Anda menemukan kesalahan rumus minor pada tabel efisiensi. Memperbaikinya butuh waktu 3 jam, yang berarti melewati deadline.Langkah pertama yang paling tepat adalah...",
    "choices": [
      "Meminta izin pimpinan menunda publikasi demi menjamin keakuratan 100% data anggaran.",
      "Memperbaiki angka pada bagian utama yang paling berdampak, memberi catatan batas analisis, dan melapor ke pimpinan.",
      "Menerbitkan laporan sesuai jadwal, lalu mengirimkan lembar ralat (addendum) besok pagi.",
      "Memperbaiki seluruh rumus secara mandiri dan mengganti file di sistem tanpa mengganggu pimpinan.",
      "Melaporkan temuan kesalahan tersebut kepada pimpinan dan menyerahkan keputusan publikasi kepadanya."
    ],
    "scores": [
      4,
      5,
      2,
      1,
      3
    ],
    "explanation": "A (4): Terlalu berfokus pada kesempurnaan teknis hingga mengorbankan komitmen waktu instansi.\n\nB (5): Tindakan cepat, solutif, transparan, dan terukur.\n\nC (2): Berorientasi hasil/deadline tetapi sadar membiarkan data salah terpublikasi.\n\nD (1): Mengambil keputusan sendiri tanpa koordinasi, melangkahi wewenang pimpinan.\n\nE (3): Terlalu bergantung pada pimpinan tanpa memberikan opsi atau draf solusi awal."
  },
  {
    "prompt": "Rekan tim Anda tertimpa musibah sehingga tugas laporan keuangannya berantakan. Sementara itu, tugas pengawasan lapangan Anda sendiri juga menumpuk dan harus selesai sore ini. Sikap yang paling mencerminkan profesionalisme adalah...",
    "choices": [
      "Mengambil alih seluruh laporan keuangan rekan, lalu meminta bantuan rekan lain mengerjakan tugas lapangan Anda.",
      "Membantu rekan mengoreksi transaksi yang salah secara spesifik, sambil memastikan tugas lapangan Anda selesai tepat waktu.",
      "Fokus menyelesaikan tugas lapangan Anda hingga tuntas dan menyarankan rekan meminta tambahan waktu ke atasan.",
      "Melaporkan masalah laporan keuangan rekan ke ketua tim agar dibagi ke anggota yang pekerjaannya lebih longgar.",
      "Menyelesaikan tugas lapangan tepat waktu, lalu menggunakan waktu malam untuk merapikan seluruh laporan rekan."
    ],
    "scores": [
      2,
      5,
      3,
      4,
      1
    ],
    "explanation": "A (2): Melempar tugas utama sendiri demi mengambil tanggung jawab orang lain secara berlebihan.\n\nB (5): Prioritas tepat: tugas mandiri aman, bantuan tim diberikan secara efisien.\n\nC (3): Terlalu kaku membatasi diri saat rekan tim mengalami krisis mendadak.\n\nD (4): Koordinasi tim baik, tetapi kurang inisiatif bantuan operasional langsung.\n\nE (1): Memaksa diri lembur mengerjakan semua hal tanpa koordinasi, berisiko menurunkan kualitas kedua tugas."
  },
  {
    "prompt": "Unit kerja Anda diwajibkan memakai aplikasi tata kelola baru bulan ini, tetapi rekan-rekan senior tetap menggunakan cara manual. Atasan membiarkan demi menjaga suasana kerja. Tindakan yang paling dapat dipertanggungjawabkan adalah...",
    "choices": [
      "Mengusulkan sesi pengerjaan bersama (co-working) khusus integrasi sistem baru tanpa mengganggu jam pelayanan.",
      "Menggunakan aplikasi baru untuk tugas pribadi Anda dan siap berbagi kemudahannya jika senior bertanya.",
      "Ikut memakai metode manual agar alur kerja unit tetap harmonis dan tidak memicu konflik.",
      "Melaporkan penolakan penggunaan aplikasi ini ke unit pengawas internal agar dievaluasi.",
      "Memakai aplikasi baru saat dipantau pusat dan memakai cara manual untuk koordinasi internal unit."
    ],
    "scores": [
      5,
      4,
      1,
      2,
      3
    ],
    "explanation": "A (5): Solusi perubahan (change management) paling aktif, santun, dan solutif.\n\nB (4): Patuh secara pribadi tetapi berdampak pasif bagi transformasi unit kerja.\n\nC (1): Kompromi salah yang mengorbankan aturan resmi organisasi demi kenyamanan.\n\nD (2): Terlalu konfrontatif melompati alur hierarki tanpa solusi internal.\n\nE (3): Sikap dualistis yang memicu ketidakpastian standar kerja."
  },
  {
    "prompt": "Atasan meminta Anda menyembunyikan temuan kekurangan kepuasan publik pada laporan evaluasi agar penilaian unit di tingkat pusat tetap baik dan anggaran tidak dipotong. Respons terbaik Anda terhadap arahan tersebut adalah...",
    "choices": [
      "Menyusun laporan sesuai arahan atasan demi mengamankan anggaran unit dan kelangsungan program.",
      "Tetap mencantumkan data kekurangan secara objektif, disertai analisis akar masalah dan draf rencana perbaikan.",
      "Menolak tegas perintah atasan dan langsung menyerahkan laporan asli yang berisi kekurangan ke pusat.",
      "Menyusun dua versi laporan: versi internal yang jujur dan versi eksekutif yang disesuaikan.",
      "Melaporkan arahan atasan tersebut ke Inspektorat sebelum menyusun dokumen laporan."
    ],
    "scores": [
      1,
      5,
      3,
      2,
      4
    ],
    "explanation": "A (1): Mengorbankan integritas dan kejujuran demi loyalitas sempit.\n\nB (5): Jujur, objektif, solutif, serta menjaga akuntabilitas kerja.\n\nC (3): Menjaga integritas tetapi caranya rigid/konfrontatif tanpa dialog perbaikan.\n\nD (2): Melakukan manipulasi ganda yang melanggar standar etika.\n\nE (4): Menjaga etika tetapi terlalu bergantung pada pihak luar sebelum mencoba cara profesional internal."
  },
  {
    "prompt": "Sisa dua hari menjelang deadline pemutakhiran data nasional, Anda menemukan bug sistem yang berpotensi memicu kesalahan 5% data. Perbaikan total membutuhkan waktu tambahan 3 hari. Keputusan paling tepat yang harus Anda ambil adalah...",
    "choices": [
      "Kirim data valid yang sudah terverifikasi tepat waktu, pisahkan 5% data berisiko untuk diverifikasi manual, lalu laporkan.",
      "Melanjutkan proses hingga selesai tepat waktu, lalu merapikan 5% data cacat pada pemeliharaan berikutnya.",
      "Menghentikan pengiriman data dan mengajukan surat permohonan dispensasi tambahan waktu.",
      "Membiarkan bug tersebut karena potensi kesalahan 5% masih dalam batas toleransi wajar.",
      "Menyerahkan keputusan sepenuhnya kepada tim IT vendor untuk menentukan perbaikan."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "A (5): Sangat cerdas dalam prioritas, menyeimbangkan kecepatan dan penjaminan mutu.\n\nB (3): Berorientasi hasil jangka pendek dengan membiarkan data salah terkirim.\n\nC (4): Mengutamakan kualitas sempurna namun mengorbankan komitmen waktu instansi.\n\nD (1): Mengabaikan standar mutu tanpa upaya koreksi apapun.\n\nE (2): Melempar tanggung jawab keputusan utama kepada pihak ketiga."
  },
  {
    "prompt": "Dalam rapat antar-lembaga, rekan seunit Anda memaparkan analisis yang keliru akibat memakai data lama. Rapat dipimpin oleh pejabat dari instansi luar. Tindakan paling profesional yang sebaiknya Anda lakukan adalah...",
    "choices": [
      "Mengajukan pertanyaan umum yang mengarahkan forum untuk mengonfirmasi pembaruan data yang digunakan.",
      "Mencatat kekeliruan tersebut dan menyampaikannya secara santun saat forum membuka sesi tanggapan teknis.",
      "Langsung menyela paparan rekan Anda dan menyerahkan data terbaru agar rekomendasi tidak salah.",
      "Mendiamkan saja saat rapat untuk menjaga wibawa rekan, lalu menegurnya setelah rapat selesai.",
      "Mengirim pesan singkat ke pimpinan unit meminta arahan apakah perlu menginterupsi paparan tersebut."
    ],
    "scores": [
      5,
      4,
      2,
      1,
      3
    ],
    "explanation": "A (5): Mengoreksi substansi secara elegan, santun, dan menjaga martabat lembaga.\n\nB (4): Prosedural baik, namun mengritik langsung di forum berisiko memicu defensivitas.\n\nC (2): Berorientasi kebenaran tetapi mengabaikan etika dan mempermalukan rekan.\n\nD (1): Mengorbankan objektivitas rapat demi perasaan pertemanan.\n\nE (3): Ragu-ragu mengambil peran representasi unit dalam situasi cepat."
  },
  {
    "prompt": "Rekan dari unit lain meminta berkas di laptop Anda untuk melihat contoh format penulisan. Berkas tersebut memuat draf rahasia rencana penataan organisasi baru. Respons terbaik Anda untuk menjaga rahasia kedinasan adalah...",
    "choices": [
      "Mengapus isi rahasianya terlebih dahulu, lalu memberikan draf kosong tersebut kepada rekan Anda.",
      "Memberikan berkas tersebut sambil mewanti-wanti agar ia tidak menyebarkannya ke orang lain.",
      "Melaporkan permintaan rekan tersebut ke atasan sebagai potensi ancaman kebocoran dokumen.",
      "Menolak memberikan berkas tersebut dan menyarankannya meminta format resmi ke bagian arsip atau umum.",
      "Meminta izin atasan terlebih dahulu sebelum membagikan berkas tersebut kepada rekan Anda."
    ],
    "scores": [
      4,
      1,
      2,
      5,
      3
    ],
    "explanation": "D (5): Patuh total pada standar kerahasiaan dan solutif mengarahkan ke pihak berwenang.\n\nA (4): Berniat membantu, tetapi mengedit dokumen rahasia pribadi rentan menyisakan metadata rahasia.\n\nE (3): Melempar kewenangan perlindungan rahasia baku kepada pimpinan.\n\nC (2): Berlebih-lebihan dalam bereaksi tanpa klarifikasi biasa.\n\nB (1): Pelanggaran kerahasiaan fatal atas dasar kepercayaan pribadi semata."
  },
  {
    "prompt": "Saat evaluasi kerja, atasan mengkritik gaya kerja Anda yang terkesan lambat dan terlalu banyak verifikasi. Anda melakukan hal itu untuk menghindari kesalahan teknis. Sikap yang paling mencerminkan keterbukaan pada perbaikan adalah...",
    "choices": [
      "Menerima kritik dengan sopan dan menjelaskan bahwa kehati-hatian Anda demi melindungi tim dari kelalaian.",
      "Meminta atasan menetapkan indikator baku sejauh mana batas kecepatan dan keluwesan yang diharapkan.",
      "Langsung berjanji akan merespons semua pekerjaan secara lebih cepat pada tugas-tugas berikutnya.",
      "Mendaftarkan diri untuk mengikuti pelatihan manajemen waktu dan efisiensi kerja secara mandiri.",
      "Menerima masukan, mengidentifikasi titik alur kerja yang lambat, dan merancang kriteria verifikasi yang lebih fleksibel."
    ],
    "scores": [
      3,
      4,
      2,
      1,
      5
    ],
    "explanation": "E (5): Mengubah masukan menjadi aksi nyata yang menyeimbangkan mutu dan kecepatan.\n\nB (4): Bagus dalam konfirmasi standar, tetapi inisiatif pembenahan internalnya belum terlihat.\n\nA (3): Cenderung pembelaan diri (defensif) di balik alasan kehati-hatian.\n\nC (2): Kompromi reaktif tanpa strategi yang berisiko merusak akurasi data.\n\nD (1): Solusi umum yang kurang menyasar perbaikan gaya kerja spesifik di unit."
  },
  {
    "prompt": "Di tengah pembuatan proyek aplikasi, terjadi perubahan aturan pusat yang membuat 30% fitur aplikasi tidak berguna. Tim frustrasi dan ingin menyetop pengerjaan total. Keputusan terbaik Anda sebagai ketua proyek adalah...",
    "choices": [
      "Menghentikan proyek sementara sesuai usul tim dan bersurat ke pimpinan untuk melaporkan kendala aturan.",
      "Memetakan fitur yang tidak terdampak aturan untuk terus dikerjakan, sembari menyesuaikan fitur yang bermasalah.",
      "Meneruskan seluruh pengerjaan sesuai draf awal agar anggaran terserap, lalu diperbaiki di pembaruan versi.",
      "Mengajukan konsultasi mendesak ke kementerian pembina sebelum melanjutkan pengerjaan aplikasi.",
      "Mengalihkan kerja tim untuk menuntaskan dokumen dan administrasi proyek terlebih dahulu."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "B (5): Adaptif, efisien, solutif, dan berorientasi pada keberhasilan target proyek.\n\nD (4): Prosedural baik tetapi membiarkan produktivitas tim stagnan selama masa penantian.\n\nE (3): Sekadar alihan sementara yang kurang memecahkan akar masalah teknis.\n\nA (2): Sikap pasif menghentikan pekerjaan secara total saat ada opsi lain yang aman dikerjakan.\n\nC (1): Menyodorkan hasil yang diketahuinya salah hanya demi serapan dana (pemborosan)."
  },
  {
    "prompt": "Target IKU unit Anda belum tercapai karena keterlambatan data dari wilayah eksternal. Rekan senior menyarankan memasukkan data perkiraan agar laporan pertengahan tahun aman. Tindakan yang paling dapat dipertanggungjawabkan adalah...",
    "choices": [
      "Menggunakan data perkiraan sesuai saran senior demi mengamankan reputasi dan penilaian unit di mata pusat.",
      "Menunda penyerahan laporan sampai seluruh data dari wilayah eksternal lengkap, meski terlambat dari jadwal.",
      "Menyajikan data aktual terverifikasi apa adanya, melampirkan perkiraan sebagai pembanding, dan menjelaskan kendalanya.",
      "Mengirim laporan dengan menyembunyikan indikator yang belum lengkap agar tidak menurunkan skor.",
      "Melaporkan usulan rekan senior tersebut ke unit pengawas internal atas dugaan manipulasi laporan."
    ],
    "scores": [
      1,
      3,
      5,
      2,
      4
    ],
    "explanation": "C (5): Akuntabel, jujur, transparan, dan solutif secara analisis kedinasan.\n\nE (4): Memiliki ketegangan integritas, namun terlalu prematur melaporkan rekan kerja internal.\n\nB (3): Mengedepankan kelengkapan tetapi mengabaikan kedisiplinan tenggat waktu.\n\nD (2): Menutupi fakta secara sepihak yang merusak objektivitas evaluasi.\n\nA (1): Manipulasi data murni yang melanggar integritas profesional."
  }
];

export const PROFESIONALISME_DRILL_QUESTIONS: Question[] = profesionalismeSeeds.map((seed, index) => ({
  id: `tkp-profesionalisme-${String(index + 1).padStart(3, "0")}`,
  category: "TKP",
  topic: "Profesionalisme",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: seed.scores[choiceIndex],
  })),
  explanation: seed.explanation,
}));
