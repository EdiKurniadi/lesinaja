import type { Question } from "./types";

type JejaringKerjaSeed = {
  prompt: string;
  choices: string[];
  scores: number[];
  explanation: string;
};

const jejaringKerjaSeeds: JejaringKerjaSeed[] = [
  {
    "prompt": "Anda ditunjuk memimpin proyek digitalisasi pelayanan publik lintas sektor. Unit IT instansi Anda memiliki kapasitas teknis tinggi namun kurang memahami alur lapangan. Sebaliknya, Unit Pelayanan Lapangan sangat memahami kebutuhan masyarakat namun enggan mengadopsi teknologi baru karena merasa alur manual yang ada saat ini sudah memadai dan aman. Keduanya saling menyalahkan atas keterlambatan tahapan awal proyek. Bagaimana langkah paling efektif yang harus Anda ambil untuk membangun kolaborasi yang produktif di antara kedua unit tersebut?",
    "choices": [
      "Menyelenggarakan lokakarya pemetaan bersama untuk menyelaraskan pemahaman alur kerja dan merumuskan solusi teknologi yang memfasilitasi kebutuhan lapangan secara bertahap.",
      "Meminta Unit IT menyesuaikan seluruh desain sistem dengan alur manual yang diinginkan oleh Unit Pelayanan Lapangan demi menjaga keharmonisan kerja tim.",
      "Menugaskan Unit IT untuk memberikan pelatihan intensif pengoperasian sistem baru kepada Unit Pelayanan Lapangan agar kendala teknis segera teratasi.",
      "Meminta pimpinan tinggi menetapkan instruksi tertulis mengenai pembagian peran secara kaku agar kedua unit mematuhi batas kewenangan masing-masing.",
      "Mengumpulkan perwakilan kedua unit secara informal guna membangun keakraban personal sebelum membahas target teknis pekerjaan proyek."
    ],
    "scores": [
      5,
      2,
      3,
      1,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi A mampu mengintegrasikan kompetensi teknis dan kebutuhan riil lapangan melalui pendekatan partisipatif (lokakarya pemetaan bersama). Langkah ini membangun titik temu (common ground), menumbuhkan rasa kepemilikan bersama (sense of ownership), serta mengakomodasi kepentingan kedua pihak tanpa mengorbankan inovasi teknologi maupun kepraktisan operasional.\n\nA (5): Sisi Positif: Solutif, inklusif, menyelaraskan kepentingan, dan membangun kolaborasi berbasis masalah nyata. Kelemahan: Membutuhkan fasilitasi diskusi yang intensif. Kesimpulan: Paling ideal untuk menyatukan dua unit dengan persepsi berbeda.\n\nB (2): Sisi Positif: Mengutamakan kenyamanan pengguna lapangan. Kelemahan: Terlalu kompromistis (Tipe 8); mengorbankan tujuan modernisasi pelayanan publik hanya demi menghindari konflik.\n\nC (3): Sisi Positif: Fokus pada peningkatan kapabilitas. Kelemahan: Terlalu fokus pada tujuan/teknis (Tipe 3); berasumsi bahwa kendala utama hanyalah teknis pengoperasian, padahal resistensi timbul dari perbedaan sudut pandang alur kerja.\n\nD (1): Sisi Positif: Kepastian hierarki. Kelemahan: Terlalu formal (Tipe 6); paksaan instruksi tertulis tanpa menyelesaikan perbedaan persepsi akan menciptakan kolaborasi yang pasif dan kaku.\n\nE (4): Sisi Positif: Membangun hubungan antarpribadi dan mencairkan suasana. Kelemahan: Terlalu informal (Tipe 7); pendekatan personal baik untuk awal, namun tanpa wadah kerja terstruktur (seperti pada Opsi A), masalah substansi alur kerja tidak terselesaikan."
  },
  {
    "prompt": "Dalam pelaksanaan program penanggulangan stunting lintas instansi, instansi Anda bertindak sebagai koordinator. Salah satu instansi mitra utama yang memegang data krusial penerima bantuan terkesan lambat dan tertutup dalam membagikan datanya. Setelah ditelusuri, mereka khawatir data tersebut digunakan secara tidak tepat oleh pihak ketiga dan merusak reputasi instansi mereka. Apa strategi jejaring kerja paling tepat yang harus Anda lakukan untuk mengatasi kendala penyediaan data tersebut?",
    "choices": [
      "Menyusun nota kesepahaman (MoU) dan protokol berbagi data yang menjamin keamanan data serta mengatur batasan hak akses secara jelas bersama instansi mitra.",
      "Mengadakan pertemuan informal dengan pejabat instansi mitra untuk menjamin secara lisan bahwa data mereka akan aman di tangan instansi Anda.",
      "Mengajukan surat teguran resmi melalui pimpinan daerah agar instansi mitra segera menyerahkan data sesuai jadwal proyek.",
      "Menggunakan data estimasi sekunder dari lembaga independen agar pelaksanaan program tidak terhambat oleh kelambatan instansi mitra.",
      "Menawarkan pertukaran data yang dimiliki instansi Anda sebagai bentuk timbal balik agar instansi mitra merasa mendapatkan keuntungan bersaing."
    ],
    "scores": [
      5,
      3,
      1,
      2,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi A menjawab kekhawatiran dasar mitra (masalah keamanan dan reputasi) dengan memberikan kepastian hukum dan tata kelola (data governance) yang akuntabel. Ini menciptakan rasa percaya (trust) yang berkelanjutan dalam kerangka profesional resmi.\n\nA (5): Sisi Positif: Membangun kepercayaan, profesional, memberikan kepastian hukum, dan melindungi reputasi mitra. Kelemahan: Membutuhkan proses penyusunan draf aturan bersama. Kesimpulan: Solusi jejaring jangka panjang paling aman dan bermartabat.\n\nB (3): Sisi Positif: Komunikasi cepat dan mencairkan suasana. Kelemahan: Terlalu informal (Tipe 7); komitmen lisan tidak memberikan jaminan hukum formal atas keamanan data rahasia instansi.\n\nC (1): Sisi Positif: Menggunakan kewenangan formal. Kelemahan: Terlalu formal & konfrontatif; memperburuk hubungan kerja sama dan merusak keretakan jejaring antarinstansi.\n\nD (2): Sisi Positif: Kecepatan eksekusi program. Kelemahan: Terlalu fokus pada tujuan singkat (Tipe 3); mengabaikan kemitraan strategis dan menggunakan data sekunder yang berisiko kurang akurat.\n\nE (4): Sisi Positif: Mengedepankan prinsip saling menguntungkan (win-win). Kelemahan: Belum menjawab secara langsung kekhawatiran utama mitra mengenai mekanisme perlindungan keamanan data."
  },
  {
    "prompt": "Anda baru saja dipindahkan ke unit kerja yang menangani kerja sama dengan LSM dan organisasi kemasyarakatan. Pejabat lama menyarankan Anda untuk terus memakai jejaring dari 2 LSM senior yang sudah bertahun-tahun menjadi mitra utama. Namun, dari analisis Anda, fokus kedua LSM tersebut kurang relevan dengan arah strategis organisasi saat ini, sementara ada beberapa LSM lokal baru yang memiliki kepakaran lebih sesuai namun belum dikenal oleh internal unit Anda. Tindakan yang paling menunjukkan profesionalisme dalam mengembangkan jejaring kerja adalah...",
    "choices": [
      "Tetap mengutamakan kerja sama dengan 2 LSM senior demi menjaga hubungan baik yang telah terbangun, sambil menyisipkan sedikit peran LSM baru.",
      "Memutus hubungan kerja sama dengan 2 LSM senior dan mengalihkan seluruh alokasi kemitraan kepada LSM-LSM baru yang lebih relevan.",
      "Melakukan pemetaan ulang pemangku kepentingan (stakeholder mapping) untuk menilai relevansi dan kapasitas seluruh LSM, lalu membuka proses kemitraan yang transparan sesuai kriteria strategis.",
      "Mengajukan diskusi dengan pimpinan untuk meminta petunjuk apakah prioritas diberikan pada loyalitas jejaring lama atau relevansi program baru.",
      "Mengundang LSM senior dan LSM baru dalam forum konsultasi bersama untuk membahas pembagian peran proyek secara proporsional."
    ],
    "scores": [
      2,
      1,
      5,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C berdasar pada prinsip objektivitas dan efektivitas organisasi. Pemetaan ulang (stakeholder mapping) yang transparan memungkinkan pembaruan jejaring kerja sesuai kebutuhan strategis tanpa bias kenyamanan relasi masa lalu.\n\nA (2): Sisi Positif: Menjaga keharmonisan relasi historis. Kelemahan: Terlalu bergantung pada jaringan lama (Tipe 5); mengorbankan relevansi dan capaian target strategis organisasi.\n\nB (1): Sisi Positif: Tegas memprioritaskan kebutuhan baru. Kelemahan: Ekstrem dan merusak hubungan kerja jangka panjang; memutus hubungan secara sepihak mencerminkan etika berjejaring yang buruk.\n\nC (5): Sisi Positif: Objektif, transparan, terukur, berorientasi kebutuhan organisasi, dan terbuka pada inovasi mitra baru. Kelemahan: Membutuhkan waktu untuk proses pemetaan. Kesimpulan: Strategi pengembangan jejaring yang paling matang secara profesional.\n\nD (3): Sisi Positif: Taat hierarki. Kelemahan: Terlalu cepat melimpahkan analisis staf ke atasan tanpa membawa draf solusi berbasis data.\n\nE (4): Sisi Positif: Inklusif dan komunikatif. Kelemahan: Menyamaratakan posisi LSM tanpa melakukan evaluasi objektif terlebih dahulu terhadap kapasitas dan relevansi masing-masing LSM."
  },
  {
    "prompt": "Proyek pembangunan fasilitas daerah tempat Anda bertugas mengalami kebuntuan karena adanya penolakan dari komunitas warga lokal. Rekan satu tim Anda yang memiliki hubungan kekerabatan dekat dengan tokoh masyarakat setempat menawarkan diri untuk menyelesaikan masalah tersebut secara personal \"di luar jalur formal\" agar proyek cepat berjalan kembali. Sikap Anda sebagai bagian dari tim kerja profesional adalah...",
    "choices": [
      "Mengizinkan rekan tersebut memanfaatkan hubungan personalnya sepenuhnya dan menyerahkan strategi negosiasi kepadanya agar cepat selesai.",
      "Menyediakan ruang bagi rekan tersebut untuk membuka komunikasi awal secara informal, tetapi tetap melanjutkan proses kesepakatan melalui forum dialog resmi yang terdokumentasi.",
      "Menolak usulan rekan tersebut dan menegaskan bahwa seluruh komunikasi wajib dilakukan secara formal melalui surat resmi instansi agar tidak melanggar aturan.",
      "Mengambil alih proses negosiasi secara langsung untuk memastikan batas profesionalitas dan etika birokrasi tetap terjaga 100%.",
      "Melaporkan potensi benturan kepentingan rekan tersebut kepada pimpinan proyek sebelum langkah negosiasi dimulai."
    ],
    "scores": [
      2,
      5,
      3,
      1,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi B secara cerdas memadukan jalur informal (personal trust) untuk memecah kebekuan awal dengan jalur formal (institutional framework) untuk mengesahkan keputusan. Ini memanfaatkan jejaring internal secara optimal tanpa mengorbankan akuntabilitas dan batas profesionalitas instansi.\n\nA (2): Sisi Positif: Kecepatan pergerakan. Kelemahan: Terlalu informal (Tipe 7); berisiko menimbulkan masalah transparansi, komitmen di luar kewenangan, dan hilangnya kontrol akuntabilitas publik.\n\nB (5): Sisi Positif: Menyeimbangkan pendekatan informal dan formal, fleksibel, serta akuntabel secara hukum. Kelemahan: Memerlukan kontrol agar pembicaraan informal tetap dalam koridor. Kesimpulan: Pengelolaan jejaring krisis yang paling taktis.\n\nC (3): Sisi Positif: Menjaga ketaatan aturan. Kelemahan: Terlalu formal (Tipe 6); mengabaikan potensi keunggulan relasi lokal rekan tim yang sebenarnya bisa memecahkan kebuntuan secara efektif.\n\nD (1): Sisi Positif: Kemandirian kepemimpinan. Kelemahan: Terlalu kaku dan egois; mematikan potensi anggota tim dan mengabaikan saluran relasi yang efektif.\n\nE (4): Sisi Positif: Menjaga integritas dan prinsip pencegahan benturan kepentingan. Kelemahan: Terlalu reaktif curiga; memposisikan relasi lokal sebagai ancaman, bukan sebagai aset komunikasi awal."
  },
  {
    "prompt": "Anda mengelola jejaring kerja sama lintas kementerian dalam pengawasan barang impor. Salah satu pejabat teknis kementerian mitra adalah teman akrab Anda saat kuliah. Suatu hari, ia meminta bantuan Anda untuk memberikan \"akses awal\" informasi jadwal inspeksi mendadak demi membantu persiapan unitnya, dengan alasan agar kinerja pengawasan gabungan terlihat sempurna di mata publik. Respons yang paling tepat untuk menjaga kerahasiaan tugas sekaligus merawat jejaring kerja profesional adalah...",
    "choices": [
      "Menolak permintaan tersebut dengan tegas dan mengancam akan melaporkan tindakan teman Anda ke komite etik jika tetap memaksa.",
      "Menjelaskan secara santun mengenai batasan-batasan aturan kerahasiaan jadwal inspeksi, lalu mengalihkan bantuan pada fasilitasi pemahaman kriteria umum standar kepatuhan inspeksi.",
      "Membantu memberikan bocoran garis besar waktu inspeksi secara informal demi menjaga hubungan baik dan membantu kelancaran persiapan instansi temannya.",
      "Mengarahkan teman Anda untuk mengajukan surat permohonan informasi jadwal secara resmi kepada kepala instansi Anda.",
      "Mengabaikan pesan dari teman Anda tersebut dan berpura-pura tidak membacanya agar tidak merusak hubungan pertemanan maupun melanggar aturan."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "Penjelasan Skor 5: Opsi B secara sempurna menunjukkan kemampuan menjaga batas profesional di tengah relasi personal. Tindakan ini tegas menolak kompromi integritas (bocoran jadwal), namun tetap solutif dan komunikatif dengan menawarkan edukasi kriteria kepatuhan secara objektif.\n\nA (2): Sisi Positif: Menjaga integritas tugas. Kelemahan: Terlalu konfrontatif; merusak hubungan kerja sama lintas kementerian dan memutus saluran komunikasi tanpa alasan edukatif.\n\nB (5): Sisi Positif: Memegang teguh integritas, santun, menjaga relasi jangka panjang, dan solutif tanpa melanggar etik. Kelemahan: Butuh keahlian komunikasi persuasif. Kesimpulan: Terbaik dalam pengelolaan batas profesionalisme jejaring.\n\nC (1): Sisi Positif: Menjaga keakraban relasi. Kelemahan: Pelanggaran berat integritas; mengorbankan prinsip kerahasiaan dinas demi kepentingan relasi personal (Tipe 7).\n\nD (4): Sisi Positif: Menjaga formalitas aturan. Kelemahan: Terkesan birokratis dan defensif; tidak memberikan solusi edukatif atas kebutuhan kesiapan kepatuhan mitra.\n\nE (3): Sisi Positif: Mengurangi risiko pelanggaran langsung. Kelemahan: Pasif dan menghindar; tindakan non-komunikatif justru bisa menciptakan kesalahpahaman relasi."
  },
  {
    "prompt": "Unit Anda membutuhkan dukungan penyedia jasa analis data profesional untuk penyusunan cetak biru (blueprint) 5 tahunan. Seorang rekan kerja menyarankan memakai jasa konsultan dari lembaga tempat ia menjadi pengurus nonaktif, dengan alasan komunikasi akan jauh lebih cepat dan hasilnya pasti tepercaya. Sementara itu, terdapat mekanisme pengadaan terbuka yang bisa menjaring konsultan independen lain. Tindakan terbaik yang harus Anda ambil untuk memastikan transparansi jejaring kerja adalah...",
    "choices": [
      "Mengikuti saran rekan kerja tersebut langsung agar efisiensi waktu dan kemudahan koordinasi dapat tercapai maksimal.",
      "Menggunakan jasa konsultan saran rekan kerja tersebut, namun menambahkan pengawas independen internal untuk memantau pengerjaannya.",
      "Mendorong pelaksanaan seleksi terbuka sesuai aturan pengadaan dengan mengundang berbagai lembaga kompeten, termasuk lembaga saran rekan secara adil.",
      "Menolak melibatkan lembaga saran rekan kerja tersebut secara mutlak guna menghindari tuduhan benturan kepentingan dari publik.",
      "Menyerahkan seluruh keputusan pemilihan konsultan kepada bagian pengadaan tanpa memberikan masukan kualifikasi teknis yang dibutuhkan."
    ],
    "scores": [
      1,
      2,
      5,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C menjaga reputasi dan kepercayaan organisasi melalui mekanisme objektif (seleksi terbuka), namun tidak mendiskriminasi pihak mana pun yang berkapasitas. Ini adalah wujud memperluas dan memilih jejaring berdasarkan meritokrasi serta akuntabilitas publik.\n\nA (1): Sisi Positif: Kecepatan koordinasi. Kelemahan: Nepotisme dan bias jejaring lama/personal (Tipe 5 & 7); mencederai prinsip transparansi pengadaan publik.\n\nB (2): Sisi Positif: Usaha menghadirkan kontrol mutu. Kelemahan: Terlalu kompromistis pada pelanggaran prosedur awal; pengawas internal hanya pembenaran atas penunjukan yang cacat akuntabilitas.\n\nC (5): Sisi Positif: Transparan, adil, menjaring kompetensi terbaik, dan terhindar dari benturan kepentingan. Kelemahan: Proses pengadaan membutuhkan waktu prosedural. Kesimpulan: Pengelolaan jejaring mitra berstandar etika tinggi.\n\nD (3): Sisi Positif: Sangat aman dari kritik benturan kepentingan. Kelemahan: Terlalu kaku/defensif; menggugurkan potensi mitra berkualitas secara tidak adil hanya karena isu relasi internal.\n\nE (4): Sisi Positif: Menjaga independensi proses. Kelemahan: Pasif; melepaskan tanggung jawab penyusunan kebutuhan spesifikasi teknis yang menjadi domain unit pengusul."
  },
  {
    "prompt": "Anda ditempatkan sebagai pejabat penghubung (liaison officer) antara pemerintah daerah dan para investor swasta dalam proyek infrastruktur. Salah satu pihak investor merasa proses perizinan sangat lambat karena kerumitan birokrasi di Dinas Perizinan, dan mengancam akan membatalkan investasinya jika minggu ini tidak ada kepastian. Langkah paling tepat yang harus Anda lakukan untuk memelihara kemitraan strategis tersebut adalah...",
    "choices": [
      "Meminta pihak investor bersabar dan menegaskan bahwa proses birokrasi perizinan pemerintah memang memiliki tahapan baku yang tidak bisa dipercepat.",
      "Memfasilitasi pertemuan koordinasi terpadu antara pihak investor dan Dinas Perizinan untuk mengidentifikasi hambatan dokumen dan merumuskan jadwal kepastian perizinan bersama.",
      "Menggunakan jalur pribadi ke kepala Dinas Perizinan agar berkas investor tersebut diprioritaskan dan diselesaikan dalam dua hari.",
      "Menyusun laporan ke pimpinan daerah agar memberikan teguran terbuka kepada Dinas Perizinan yang menghambat arus investasi.",
      "Mengambil alih pengurusan berkas perizinan tersebut dan mengerjakannya sendiri bersama tim Anda agar segera tuntas."
    ],
    "scores": [
      2,
      5,
      3,
      4,
      1
    ],
    "explanation": "Penjelasan Skor 5: Opsi B memosisikan peran penghubung secara ideal: menjadi jembatan komunikasi solutif. Dengan mempertemukan kedua pihak secara transparan, hambatan teknis terurai (problem solving), rasa percaya investor terjaga, dan kewenangan Dinas Perizinan tetap dihormati.\n\nA (2): Sisi Positif: Menjelaskan norma hukum. Kelemahan: Pasif dan kaku (Tipe 6); tidak berupaya mencari jalan keluar teknis sehingga berisiko menggagalkan investasi daerah.\n\nB (5): Sisi Positif: Kolaboratif, transparansi proses, memecahkan masalah tanpa melanggar kewenangan instansi lain. Kelemahan: Menuntut kepiawaian fasilitasi dialog. Kesimpulan: Tindakan berjejaring yang efisien dan akuntabel.\n\nC (3): Sisi Positif: Respons cepat atas keluhan investor. Kelemahan: Terlalu informal & melompati prosedur (Tipe 7); mencederai kesetaraan pelayanan perizinan bagi publik.\n\nD (4): Sisi Positif: Ketegasan dorongan struktural dari atas. Kelemahan: Berpotensi merusak hubungan kerja internal pemerintah daerah sebelum dilakukan koordinasi musyawarah teknis.\n\nE (1): Sisi Positif: Keinginan membantu yang sangat tinggi. Kelemahan: Melampaui batas kewenangan fungsi dinas lain (overstepping); merusak mekanisme kerja organisasi."
  },
  {
    "prompt": "Tim kerja Anda berkolaborasi dengan perguruan tinggi dalam membuat kajian kebijakan. Di tengah jalan, pihak perguruan tinggi memublikasikan sebagian temuan awal kajian tersebut ke media massa tanpa koordinasi, sehingga memicu polemik di masyarakat karena data belum terverifikasi penuh oleh instansi Anda. Bagaimana cara terbaik menyelesaikan situasi tersebut demi menjaga stabilitas proyek dan hubungan jangka panjang?",
    "choices": [
      "Menghentikan kontrak kerja sama secara sepihak dan menuntut ganti rugi atas pencemaran nama baik instansi.",
      "Mengadakan rapat evaluasi tertutup dengan tim peneliti perguruan tinggi untuk menyepakati klarifikasi bersama ke publik serta memperketat protokol komunikasi media.",
      "Membiarkan berita tersebut meredap sendiri di masyarakat agar tidak memicu pembahasan polemik yang lebih luas.",
      "Mengeluarkan siaran pers resmi yang menyatakan bahwa publikasi perguruan tinggi tersebut keliru dan di luar tanggung jawab instansi Anda.",
      "Mengalihkan sisa pekerjaan riset kepada unit internal agar terhindar dari risiko insiden kebocoran informasi berulang."
    ],
    "scores": [
      1,
      5,
      2,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi B mencerminkan penyelesaian masalah (conflict resolution) dalam jejaring secara dewasa. Tindakan ini menyelesaikan krisis publik secara bersatu (klarifikasi bersama) sekaligus memperbaiki sistem interaksi (protokol media) tanpa merusak hubungan kerja sama akademis jangka panjang.\n\nA (1): Sisi Positif: Ketegasan hukum. Kelemahan: Emosional dan merusak jejaring; mematikan peluang kolaborasi akademis di masa depan secara permanen.\n\nB (5): Sisi Positif: Menyelesaikan masalah, memperbaiki kelemahan proses, dan mempertahankan jejaring strategis. Kelemahan: Membutuhkan negosiasi penyelarasan klarifikasi. Kesimpulan: Strategi manajemen krisis kemitraan yang paling matang.\n\nC (2): Sisi Positif: Menghindari eskalasi perdebatan. Kelemahan: Membiarkan kesalahpahaman informasi publik liar tanpa akuntabilitas pejabat berwenang.\n\nD (3): Sisi Positif: Mengamankan posisi legal instansi. Kelemahan: Melempar kesalahan secara terbuka; mempermalukan mitra dan memicu konflik antarlembaga secara terbuka.\n\nE (4): Sisi Positif: Kontrol penuh informasi di masa depan. Kelemahan: Terisolasi (silo-mentality); menutup diri dari kepakaran eksternal yang dibutuhkan organisasi."
  },
  {
    "prompt": "Anda diutus menghadiri konferensi internasional untuk membangun jalinan jejaring kerja sama teknis. Waktu kegiatan sangat terbatas, sementara terdapat puluhan perwakilan instansi luar negeri dengan berbagai latar belakang keahlian. Pendekatan paling strategis yang harus Anda lakukan dalam memanfaatkan waktu konferensi tersebut adalah...",
    "choices": [
      "Berkenalan dengan sebanyak mungkin peserta dari seluruh negara dan membagikan kartu nama tanpa membatasi profil target.",
      "Berfokus mendampingi dan berbincang erat dengan perwakilan dari negara yang sudah memiliki kerja sama lama dengan instansi Anda.",
      "Mengidentifikasi lembaga yang memiliki kesesuaian program strategis dengan instansi Anda, lalu melakukan diskusi terfokus untuk mendalami peluang kerja sama konkret.",
      "Menghadiri seluruh sesi pemaparan materi dari awal hingga akhir tanpa perlu menghabiskan waktu berinteraksi di luar ruangan konferensi.",
      "Mengumpulkan brosur serta dokumen profil seluruh lembaga peserta untuk dipelajari nanti setibanya di kantor."
    ],
    "scores": [
      3,
      2,
      5,
      1,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C menunjukkan efektivitas membangun jejaring kerja yang target-oriented dan bernilai strategis. Berjejaring bukan sekadar mengumpulkan relasi sosial yang banyak (kuantitas), melainkan memetakan relevansi kompetensi dan tindak lanjut kolaborasi konkret (kualitas).\n\nA (3): Sisi Positif: Memperluas jangkauan relasi secara luas. Kelemahan: Kuantitas tanpa kualitas (Tipe 1); kontak yang terlalu dangkal jarang menghasilkan tindak lanjut proyek nyata.\n\nB (2): Sisi Positif: Merawat hubungan lama yang sudah aman. Kelemahan: Terlalu bergantung pada jaringan lama (Tipe 5); melupakan peluang emas ekspansi jejaring mitra baru.\n\nC (5): Sisi Positif: Efisien, relevan, berfokus pada hasil konkret, dan sejalan dengan visi organisasi. Kelemahan: Membutuhkan persiapan pemetaan profil peserta konferensi. Kesimpulan: Penggunaan waktu berjejaring secara paling produktif.\n\nD (1): Sisi Positif: Menyerap keilmuan materi konferensi. Kelemahan: Terisolasi; membuang fungsi utama dari penugasan menghadiri forum interaktif langsung.\n\nE (4): Sisi Positif: Pengumpulan bahan riset yang akurat. Kelemahan: Pasif; pengumpulan brosur tidak menggantikan kekuatan interaksi dan pembentukan kepercayaan secara personal/langsung."
  },
  {
    "prompt": "Unit Anda sering mengalami kendala karena proses verifikasi data lintas bagian yang lambat. Setelah diteliti, hambatan utama terjadi pada Subbagian X yang stafnya cenderung tertutup dan sangat birokratis. Rekan-rekan lain biasanya memilih menghindari interaksi langsung dan menggunakan surat formal yang memakan waktu mingguan. Sebagai pegawai yang profesional, langkah inovatif apa yang paling tepat Anda lakukan untuk memecahkan kebekuan komunikasi tersebut?",
    "choices": [
      "Mengikuti alur surat formal seperti yang dilakukan rekan lain agar tidak menyinggung prosedur internal Subbagian X.",
      "Mendatangi Subbagian X untuk berkenalan, memahami kendala beban kerja mereka, serta menawarkan bantuan penyelarasan format data agar verifikasi lebih cepat.",
      "Mengajukan keluhan resmi kepada pimpinan mengenai kinerja Subbagian X yang menghambat produktivitas unit lain.",
      "Mengajak staf Subbagian X makan siang bersama guna membangun kedekatan personal agar kelak berkas Anda didahulukan.",
      "Menerobos alur birokrasi dengan meminta bantuan langsung dari Kepala Subbagian X tanpa melalui staf verifikatornya."
    ],
    "scores": [
      2,
      5,
      3,
      4,
      1
    ],
    "explanation": "Penjelasan Skor 5: Opsi B memadukan empati organisasi dan solusi teknis. Dengan memahami hambatan internal mitra kerja (Subbagian X) serta membantu mempermudah alur kerja mereka, kepercayaan dan kolaborasi produktif antar-unit dapat terbangun secara alami dan berkelanjutan.\n\nA (2): Sisi Positif: Menjaga formalitas alur. Kelemahan: Terlalu formal & pasrah (Tipe 6); membiarkan inefisiensi organisasi terus berlangsung tanpa ada upaya perbaikan.\n\nB (5): Sisi Positif: Empatis, solutif, meruntuhkan \"silo\" antardivisi, dan memperbaiki proses bisnis internal. Kelemahan: Membutuhkan kerendahan hati dan waktu extra. Kesimpulan: Membangun jejaring internal paling substantif.\n\nC (3): Sisi Positif: Dorongan perbaikan dari level struktural. Kelemahan: Cenderung konfrontatif; dapat menciptakan rasa defensif dan permusuhan antar-unit kerja.\n\nD (4): Sisi Positif: Mencairkan suasana melalui pendekatan informal. Kelemahan: Berpotensi mengarah pada perlakuan diskriminatif/favoritisme personal (Tipe 7) dibanding pembenahan sistem kerja bersama.\n\nE (1): Sisi Positif: Hasil cepat jangka pendek. Kelemahan: Melompati alur kerja (bypassing); merusak hierarki dan menyakiti perasaan verifikator teknis di bawah."
  },
  {
    "prompt": "Dalam proyek kolaborasi pengembangan sistem informasi antara instansi Anda dan Instansi Mitra Y, terjadi benturan perbedaan prioritas. Instansi Anda menginginkan sistem difokuskan pada perlindungan keamanan data tingkat tinggi, sedangkan Instansi Y mendesak agar sistem difokuskan pada kemudahan akses antarmuka pengguna demi mengejar target kebiasaan masyarakat. Diskusi tim mengalami kebuntuan selama 2 minggu. Sebagai anggota tim kolaborasi, tindakan yang paling konstruktif untuk mengatasi situasi tersebut adalah...",
    "choices": [
      "Mempertahankan argumen keamanan data secara mutlak karena merupakan standar utama instansi Anda yang tidak dapat ditawar.",
      "Mengalah dan mengikuti prioritas kemudahan antarmuka Instansi Y demi menjaga kelanjutan kerja sama dan menghindari pembatalan proyek.",
      "Mengusulkan arsitektur sistem berbasis integrasi bertahap, di mana tingkat keamanan inti tetap terjamin sambil merancang antarmuka yang simpel bagi masyarakat.",
      "Menyerahkan penyelesaian perselisihan tersebut kepada komite pengarah tingkat tinggi dari kedua instansi untuk diputuskan dari atas.",
      "Mengajak tim Instansi Y melakukan studi banding ke lembaga lain yang telah berhasil menerapkan standar keamanan tanpa mengorbankan kenyamanan antarmuka."
    ],
    "scores": [
      2,
      1,
      5,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C adalah wujud nyata menyelaraskan kepentingan yang berbeda melalui kerangka win-win solution. Opsi ini tidak mengorbankan integritas sistem (keamanan), namun tetap mengakomodasi target mitra (kemudahan pengguna) secara terukur.\n\nA (2): Sisi Positif: Menjaga standar mutu keamanan. Kelemahan: Rigid/kaku (Tipe 3); berisiko memicu kebuntuan abadi dan kegagalan kerja sama lintas instansi.\n\nB (1): Sisi Positif: Menjaga keharmonisan hubungan mitra. Kelemahan: Terlalu kompromistis (Tipe 8); mengorbankan faktor keamanan yang sangat vital demi sekadar merawat relasi.\n\nC (5): Sisi Positif: Inovatif, akomodatif, mempertahankan kualitas kritis, dan berorientasi pada pencapaian tujuan bersama. Kelemahan: Membutuhkan penyesuaian teknis arsitektur. Kesimpulan: Puncak strategi kolaborasi profesional.\n\nD (3): Sisi Positif: Eskalasi prosedural jika terjadi kebuntuan. Kelemahan: Pasif; melimpahkan kegagalan analisis tim kerja teknis ke tingkat manajemen atas secara cepat.\n\nE (4): Sisi Positif: Edukatif dan membuka wawasan bersama melalui contoh nyata (benchmark). Kelemahan: Membutuhkan waktu tambahan untuk kegiatan studi banding sebelum masuk ke solusi teknis."
  },
  {
    "prompt": "Anda baru saja menyelesaikan tugas proyek gabungan lintas kementerian yang terbilang sangat sukses. Meskipun proyek telah berakhir secara resmi, hubungan komunikasi informal antar-anggota tim dari berbagai kementerian masih terjalin sangat baik melalui grup perpesanan. Langkah apa yang paling tepat untuk memanfaatkan jejaring yang sudah terbentuk tersebut secara berkelanjutan bagi organisasi?",
    "choices": [
      "Keluar dari grup perpesanan tersebut karena tugas formal proyek sudah selesai dan untuk menjaga efisiensi komunikasi pribadi Anda.",
      "Memelihara komunikasi rutin dalam grup dengan sesekali membagikan informasi peluang kolaborasi, pertukaran pengetahuan, atau isu strategis antar-kementerian.",
      "Menggunakan grup tersebut untuk meminta bantuan pengerjaan tugas-tugas rutin internal unit Anda kepada anggota dari kementerian lain.",
      "Meminta pimpinan instansi Anda melegalkan grup informal tersebut menjadi forum komunikasi antarlembaga resmi yang mengikat.",
      "Menjadikan anggota grup tersebut sebagai relasi pribadi semata untuk membantu pengembangan karir individu Anda di masa depan."
    ],
    "scores": [
      1,
      5,
      2,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi B menunjukkan kemampuan menjaga hubungan jangka panjang (sustaining relationship). Menjaga jejaring tetap hidup melalui pertukaran nilai (informasi strategis & ilmu pengetahuan) secara wajar menciptakan modal sosial (social capital) yang sewaktu-waktu dapat diaktifkan kembali untuk kepentingan organisasi.\n\nA (1): Sisi Positif: Fokus pada kesibukan pribadi. Kelemahan: Memutus relasi secara instan; membuang investasi modal sosial yang telah dibangun selama proyek.\n\nB (5): Sisi Positif: Menjaga keberlanjutan jejaring, saling memberi nilai tambah, informal tetapi profesional. Kelemahan: Harus konsisten memilah informasi yang relevan. Kesimpulan: Pengelolaan jejaring pasca-proyek yang ideal.\n\nC (2): Sisi Positif: Memanfaatkan relasi kerja. Kelemahan: Memanfaat jaringan secara salah; membebankan tugas rutin internal organisasi sendiri kepada pihak luar.\n\nD (3): Sisi Positif: Pelembagaan hubungan. Kelemahan: Terlalu formal (Tipe 6); memberatkan komunikasi yang justru efektif karena keluwesan sifat informalnya.\n\nE (4): Sisi Positif: Orientasi pengembangan karier. Kelemahan: Terlalu berfokus pada kepentingan individu dibanding utilitas perkembangan kapasitas organisasi."
  },
  {
    "prompt": "Unit Anda berencana meluncurkan program pelatihan kewirausahaan masyarakat. Anda memiliki kenalan pengusaha sukses yang sering menjadi pembicara. Namun, pengusaha tersebut terkenal memiliki gaya komunikasi yang sangat blak-blakan, eksplosif, dan kadang mengkritik kebijakan pemerintah secara terbuka, yang berpotensi menimbulkan ketidaknyamanan bagi para pejabat instansi Anda. Bagaimana pertimbangan strategis Anda dalam memutuskan pelibatan kenalan tersebut?",
    "choices": [
      "Membatalkan pelibatan pengusaha tersebut dan menggantinya dengan birokrat internal agar suasana acara aman dan terkendali.",
      "Tetap mengundang pengusaha tersebut dengan memberikan pengarahan awal (briefing) terkait profil audiens dan batasan-batasan etika penyampaian materi tanpa mengurai kepakarannya.",
      "Mengundang pengusaha tersebut secara bebas tanpa pengarahan apa pun untuk menjaga keaslian gaya penyampaiannya yang inspiratif.",
      "Meminta pengusaha tersebut menuliskan draf naskah pidato penuh yang wajib disetujui oleh tim hukum instansi Anda sebelum acara.",
      "Mengalihkan peran pengusaha tersebut menjadi konsultan di balik layar saja tanpa perlu tampil langsung di depan pejabat dan publik."
    ],
    "scores": [
      2,
      5,
      3,
      1,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi B menunjukkan keberanian memanfaatkan kompetensi dan keahlian pihak lain yang berbeda karakter, dengan melakukan mitigasi risiko komunikasi (pemberian briefing kerangka acara). Ini membuktikan bahwa jejaring kerja yang baik tidak harus diisi oleh orang yang \"seragam\", melainkan yang mampu dikelola secara profesional.\n\nA (2): Sisi Positif: Menghindari ketidaknyamanan pejabat internal. Kelemahan: Terisolasi/homogen; mengorbankan kualitas materi keahlian praktis yang dibutuhkan masyarakat hanya karena ketakutan gaya komunikasi.\n\nB (5): Sisi Positif: Memanfaatkan kepakaran berharga mitra, inklusif, profesional, serta melakukan mitigasi risiko secara terukur. Kelemahan: Membutuhkan kecermatan saat penyampaian briefing. Kesimpulan: Strategi kolaborasi paling matang dan terbuka.\n\nC (3): Sisi Positif: Menghargai kebebasan ekspresi pakar. Kelemahan: Ceroboh; mengabaikan risiko reputasi organisasi dan kenyamanan ekosistem jejaring yang lebih luas.\n\nD (1): Sisi Positif: Pengendalian mutlak isi materi. Kelemahan: Terlalu kaku & mengekang (Tipe 6); menyinggung profesionalisme pakar eksternal.\n\nE (4): Sisi Positif: Memanfaatkan keahlian tanpa risiko ekspos media. Kelemahan: Mengurangi dampak inspirasional langsung dari pakar kepada audiens utama program."
  },
  {
    "prompt": "Dalam proyek lintas sektor pengentasan kemiskinan, instansi Anda bertugas menyalurkan sarana usaha, sementara Instansi Z bertugas memberikan pendampingan teknis. Di lapangan, warga mengeluh karena pendamping dari Instansi Z tidak pernah datang, sehingga sarana dari instansi Anda mangkrak dan instansi Anda dikritik publik. Tindakan koordinasi paling tepat yang harus Anda ambil adalah...",
    "choices": [
      "Menyampaikan surat teguran resmi kepada kepemimpinan Instansi Z dan menembuskannya ke lembaga pengawasan internal.",
      "Menghubungi penanggung jawab teknis Instansi Z untuk memverifikasi kendala lapangan mereka, lalu merumuskan ulang penjadwalan pendampingan bersama.",
      "Mengambil alih fungsi pendampingan teknis dengan mengerahkan staf instansi Anda agar warga segera terlayani.",
      "Mengeluarkan siaran pers yang mengklarifikasi bahwa kegagalan pendampingan sepenuhnya merupakan tanggung jawab Instansi Z.",
      "Menghentikan sementara penyaluran bantuan sarana usaha sampai Instansi Z memberi jaminan tertulis kesiapan pendamping."
    ],
    "scores": [
      3,
      5,
      2,
      1,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi B mengutamakan koordinasi berbasis klarifikasi fakta (fact-finding) dan penyelesaian masalah bersama. Daripada menyalahkan mitra secara terbuka yang merusak relasi, opsi ini memperkuat komitmen jejaring kerja untuk mencapai tujuan utama (layanan bagi warga).\n\nA (3): Sisi Positif: Menggunakan jalur formal dan tegas. Kelemahan: Cenderung birokratis & konfrontatif; bisa memicu sikap defensif mitra sebelum dicapai klarifikasi lapangan.\n\nB (5): Sisi Positif: Solutif, menghargai mitra, menjaga hubungan jangka panjang, dan mengutamakan penyelesaian target program. Kelemahan: Butuh kesabaran dalam menyelaraskan ulang jadwal. Kesimpulan: Pengelolaan kendala kemitraan yang paling konstruktif.\n\nC (2): Sisi Positif: Kecepatan penyelamatan warga penerima. Kelemahan: Melampaui batas kewenangan (overstepping); merusak pembagian peran yang disepakati dan membuat Instansi Z lepas tangan.\n\nD (1): Sisi Positif: Menyelamatkan citra instansi sendiri. Kelemahan: Melempar tanggung jawab (blame-shifting); mencederai etika jejaring kerja sama antar-pemerintah secara fatal.\n\nE (4): Sisi Positif: Pengendalian risiko penumpukan sarana. Kelemahan: Menyandera kelangsungan program masyarakat; tindakan penundaan pasif sebelum dilakukan koordinasi langsung."
  },
  {
    "prompt": "Sebagai kepala unit pelayanan, Anda mendapati bahwa salah satu mitra LSM yang bekerja sama dengan unit Anda sering memanfaatkan forum rapat koordinasi untuk mempromosikan kegiatan penggalangan dana internal mereka, yang membuat anggota jejaring dari instansi lain merasa terganggu. Bagaimana cara paling profesional untuk mengoreksi perilaku mitra tersebut tanpa merusak jalinan kerja sama yang sedang berlangsung?",
    "choices": [
      "Menyampaikan teguran terbuka dalam forum rapat agar mitra tersebut jera dan paham batas etika rapat dinas.",
      "Mengeluarkan mitra LSM tersebut dari keanggotaan jejaring kerja sama untuk menjaga fokus anggota yang lain.",
      "Mengadakan diskusi pribadi di luar rapat dengan pimpinan LSM tersebut untuk menjelaskan fokus agenda rapat formal serta mengarahkan saluran promosi ke media yang lebih tepat.",
      "Membiarkan hal tersebut terjadi demi menghargai kontribusi LSM tersebut dalam membantu program kerja unit Anda.",
      "Mengubah aturan rapat menjadi tertulis dan sangat kaku sehingga tidak ada lagi sesi diskusi bebas di akhir acara."
    ],
    "scores": [
      2,
      1,
      5,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C menggunakan pendekatan komunikasi personal (persuasive communication) yang menghormati martabat mitra. Tindakan ini tegas menegakkan fokus agenda organisasi, namun dilakukan di wadah terpisah (diskusi pribadi) agar tidak mempermalukan mitra di depan umum.\n\nA (2): Sisi Positif: Menegakkan etika secara langsung. Kelemahan: Mempermalukan mitra di depan umum; merusak hubungan kerja sama dan menciptakan resistensi.\n\nB (1): Sisi Positif: Menghilangkan gangguan secara instan. Kelemahan: Reaksi berlebihan (disproorsional); memutus jejaring berharga hanya karena kelalaian etika komunikasi yang sebenarnya bisa dikoreksi.\n\nC (5): Sisi Positif: Peka etika, tegas pada fokus organisasi, merawat martabat mitra, dan solutif. Kelemahan: Membutuhkan waktu untuk dialog khusus secara tatap muka. Kesimpulan: Penyelesaian konflik etika berjejaring terbaik.\n\nD (3): Sisi Positif: Menjaga perasaan mitra. Kelemahan: Terlalu kompromistis (Tipe 8); pembiaran hal yang mengganggu kenyamanan anggota jejaring lainnya.\n\nE (4): Sisi Positif: Kepastian tata tertib rapat. Kelemahan: Terlalu kaku (Tipe 6); mematikan dinamika diskusi positif dari seluruh peserta rapat hanya demi mengatasi satu oknum."
  },
  {
    "prompt": "Anda bertugas di bagian humas instansi pemerintah. Terjadi perubahan mendadak pada kepemimpinan di instansi mitra utama Anda. Pejabat baru yang ditunjuk belum mengenal alur kerja sama yang telah disepakati sebelumnya dan cenderung acuh tak acuh terhadap draf program bersama yang sedang berjalan. Tindakan prioritas yang harus Anda lakukan untuk memperbarui jejaring kerja profesional tersebut adalah...",
    "choices": [
      "Menunggu hingga pejabat baru tersebut menghubungi instansi Anda terlebih dahulu sebagai bentuk tata krama birokrasi.",
      "Mengirimkan salinan dokumen berkas kerja sama lama melalui kurir dan meminta pejabat baru tersebut menandatanganinya.",
      "Menyusun taklimat singkat (briefing note) pencapaian dan nilai strategis kerja sama, lalu mengajukan audiensi resmi untuk berkenalan dan memaparkan keberlanjutan program.",
      "Meminta bantuan pimpinan instansi Anda untuk menegur pejabat baru tersebut agar lebih kooperatif menanggapi program bersama.",
      "Melanjutkan pelaksanaan program secara sepihak tanpa perlu melibatkan pejabat baru tersebut sampai ia menyesuaikan diri."
    ],
    "scores": [
      2,
      3,
      5,
      1,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C menunjukkan inisiatif proaktif dalam mengelola perubahan jejaring (managing stakeholder transition). Menyediakan informasi eksekutif yang ringkas (briefing note) disertai ajakan audiensi hormat membangun awal relasi yang profesional, terinformasi, dan berorientasi nilai tambah.\n\nA (2): Sisi Positif: Menjaga kebiasaan birokrasi pasif. Kelemahan: Pasif; membiarkan kelangsungan program terkatung-katung tanpa kejelasan dalam waktu lama.\n\nB (3): Sisi Positif: Mengirimkan bukti dokumentasi hukum. Kelemahan: Kaku dan tidak empati; menjejalkan berkas tebal tanpa membangun pemahaman dan hubungan personal terlebih dahulu.\n\nC (5): Sisi Positif: Proaktif, menghormati pejabat baru, informatif, dan menjamin keberlanjutan program secara akuntabel. Kelemahan: Menuntut kesiapan materi paparan yang padat. Kesimpulan: Pengelolaan transisi jejaring paling ideal.\n\nD (1): Sisi Positif: Memanfaatkan bobot struktural pimpinan. Kelemahan: Merusak hubungan sejak awal; mencitrakan instansi Anda beritikad buruk dengan mengadu sebelum berdialog.\n\nE (4): Sisi Positif: Menjaga kesinambungan eksekusi target. Kelemahan: Berisiko memicu masalah hukum/etika birokrasi karena berjalan tanpa persetujuan pemangku kewenangan baru."
  },
  {
    "prompt": "Unit kerja Anda mendapat tugas mengadakan festival budaya daerah secara mendadak dengan anggaran terbatas. Rekan Anda menyarankan agar menggandeng komunitas pemuda lokal yang memiliki anggota sangat banyak dan aktif di media sosial, meskipun mereka belum pernah mengelola event berskala besar resmi instansi. Bagaimana langkah Anda mengoptimalkan kolaborasi dengan komunitas pemuda tersebut agar tujuan acara tercapai tanpa risiko kegagalan teknis?",
    "choices": [
      "Meminta komunitas pemuda tersebut menjadi penanggung jawab tunggal seluruh acara demi efisiensi dan kebebasan kreasi mereka.",
      "Menolak pelibatan komunitas tersebut dan mengalihkan ke event organizer (EO) profesional meskipun harus memotong skala acara akibat biaya mahal.",
      "Menggabungkan peran komunitas pemuda untuk fungsi promosi dan pergerakan massa, sementara manajemen operasional inti tetap dipandu oleh tim internal Anda.",
      "Menggunakan komunitas pemuda tersebut hanya sebagai tenaga lapangan/sukarelawan saat hari pelaksanaan acara tanpa dilibatkan dalam perencanaan.",
      "Meminta komunitas pemuda tersebut membuat surat jaminan ganti rugi jika acara mengalami kegagalan teknis sebelum disetujui bergabung."
    ],
    "scores": [
      2,
      3,
      5,
      4,
      1
    ],
    "explanation": "Penjelasan Skor 5: Opsi C menerapkan prinsip memanfaatkan kompetensi pihak lain secara tepat sesuai kapasitasnya (capacity-based collaboration). Opsi ini membagi peran secara adil: memanfaatkan keunggulan pemuda (massa & medsos) sambil menutup kelemahan mereka (manajemen event) melalui pendampingan internal Anda.\n\nA (2): Sisi Positif: Memberikan kepercayaan penuh. Kelemahan: Ceroboh; melepaskan tanggung jawab manajemen pada pihak yang belum berpengalaman dalam acara resmi instansi.\n\nB (3): Sisi Positif: Mengutamakan kepastian kualitas teknis profesional. Kelemahan: Mengabaikan sumber daya lokal yang murah dan potensial; memotong skala acara secara tidak perlu.\n\nC (5): Sisi Positif: Saling melengkapi, terukur, meminimalkan risiko, dan memberdayakan potensi lokal secara maksimal. Kelemahan: Butuh koordinasi intensif antar-kelompok. Kesimpulan: Pembagian peran jejaring yang paling cerdas.\n\nD (4): Sisi Positif: Aman dari risiko kesalahan perencanaan. Kelemahan: Kurang menghargai potensi mitra (Tipe 4); memperlakukan komunitas sekadar pekerja otot tanpa ruang gagasan.\n\nE (1): Sisi Positif: Perlindungan finansial instansi. Kelemahan: Tidak realistis dan merusak semangat kemitraan; membebankan syarat tidak proporsional kepada komunitas non-profit."
  },
  {
    "prompt": "Dalam rapat evaluasi tahunan, seorang wakil dari lembaga mitra eksternal menyampaikan kritik pedas secara terbuka mengenai lambatnya sistem pembayaran klaim di instansi Anda. Kritik tersebut membuat beberapa pejabat internal Anda tersinggung dan meminta agar kerja sama dengan lembaga mitra tersebut ditinjau ulang atau dihentikan. Sebagai manajer jejaring kerja sama, respons profesional yang harus Anda tunjukkan adalah...",
    "choices": [
      "Mendukung pejabat internal untuk menghentikan kerja sama demi menjaga kehormatan dan marwah instansi Anda.",
      "Menyampaikan permohonan maaf terbuka saat rapat dan berjanji akan menyetujui seluruh klaim mitra secara cepat tanpa verifikasi rumit lagi.",
      "Meminta maaf atas ketidaknyamanan teknis, menerima kritik sebagai masukan pembenahan alur klaim internal, serta memfasilitasi dialog perbaikan alur kerja dengan pihak mitra secara konstruktif.",
      "Menginterupsi ucapan wakil mitra tersebut dan menegur caranya menyampaikan kritik yang dianggap melanggar etika kesopanan rapat.",
      "Membiarkan perdebatan berlangsung dan menyerahkan keputusan kelanjutan kerja sama sepenuhnya kepada pimpinan tertinggi."
    ],
    "scores": [
      1,
      2,
      5,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C menunjukkan keterbukaan terhadap kritik dan kemampuan mengelola konflik jejaring secara dewasa. Menerima masukan objektif (sistem keluhan) tanpa emosi defensif, lalu mengubah kritik menjadi perbaikan proses internal, adalah tanda kematangan berjejaring kerja jangka panjang.\n\nA (1): Sisi Positif: Menjaga kebersamaan emosional internal. Kelemahan: Egois dan anti-kritik; memutus kemitraan strategis hanya karena masalah teknis operasional yang tersinggung secara emosional.\n\nB (2): Sisi Positif: Menyenangkan perasaan mitra. Kelemahan: Terlalu kompromistis (Tipe 8); mengorbankan prosedur verifikasi akuntabilitas keuangan hanya demi meredakan kritik.\n\nC (5): Sisi Positif: Terbuka pada perbaikan, tenang, profesional, fokus pemecahan masalah (problem solving), serta menjaga kemitraan. Kelemahan: Menuntut proses pembenahan sistem internal. Kesimpulan: Respons terhadap kritik mitra yang paling berkualitas.\n\nD (3): Sisi Positif: Menegakkan etika penyampaian. Kelemahan: Defensif; berfokus pada bungkus kemasan komunikasi ketimbang substansi perbaikan masalah yang disampaikan mitra.\n\nE (4): Sisi Positif: Menghormati hierarki pimpinan. Kelemahan: Pasif; pengelola jejaring seharusnya mampu memberikan rekomendasi mediasi sebelum menyerahkan ke pimpinan."
  },
  {
    "prompt": "Proyek penataan lingkungan membutuhkan kerja sama antara instansi Anda, swasta melalui dana CSR, dan warga lokal. Pihak swasta ingin memasang logo produk mereka secara dominan di lokasi penataan sebagai kompensasi dana, sementara warga lokal menolak keras karena menganggap lokasi tersebut adalah kawasan cagar budaya yang tidak boleh terkesan komersial. Bagaimana Anda menyeimbangkan persaingan kepentingan dalam jejaring tersebut?",
    "choices": [
      "Memenangkan tuntutan warga lokal total dan meminta pihak swasta tetap menyalurkan dana CSR tanpa perlu memasang logo apa pun.",
      "Mengabulkan keinginan pihak swasta sepenuhnya karena mereka adalah penyokong dana utama keberlangsungan proyek penataan.",
      "Memfasilitasi diskusi penyelarasan untuk merancang penempatan apresiasi kontribusi swasta yang artistik, tidak mencolok, dan selaras dengan estetika cagar budaya warga lokal.",
      "Batalkan keterlibatan pihak swasta dan ajukan tambahan dana penataan dari APBD agar tidak ada konflik sosial.",
      "Menyerahkan penyelesaian perselisihan penempatan logo tersebut kepada pihak swasta dan warga lokal untuk bernegosiasi sendiri tanpa keterlibatan Anda."
    ],
    "scores": [
      2,
      1,
      5,
      3,
      4
    ],
    "explanation": "Penjelasan Skor 5: Opsi C secara cemerlang melakukan peta kepentingan dan pencarian titik temu (negotiated compromise). Solusi ini menghargai kepentingan swasta (branding apresiasi) sekaligus menghormati nilai warga lokal (kelestarian cagar budaya), sehingga kolaborasi multi-pihak dapat terus berjalan selaras.\n\nA (2): Sisi Positif: Menjaga nilai budaya lokal. Kelemahan: Berat sebelah; mengabaikan kebutuhan insentif publikasi mitra swasta yang berisiko membuat mereka membatalkan pendanaan.\n\nB (1): Sisi Positif: Menjamin ketersediaan anggaran swasta. Kelemahan: Terlalu komersial; memicu perlawanan sosial warga lokal dan merusak nilai cagar budaya publik.\n\nC (5): Sisi Positif: Solutif, kreatif, adil, menjaga kepentingan seluruh pihak (win-win), dan mempertahankan keberlanjutan proyek. Kelemahan: Membutuhkan daya cipta desain yang disepakati bersama. Kesimpulan: Pengelolaan titik temu jejaring terbaik.\n\nD (3): Sisi Positif: Mengeliminasi potensi konflik kepentingan swasta. Kelemahan: Terlalu cepat menyerah pada pencarian modal swasta; membebankan anggaran negara secara tidak efisien.\n\nE (4): Sisi Positif: Mendorong kemandirian antar-mitra. Kelemahan: Lepas tangan (abandonment); instansi pemerintah seharusnya hadir sebagai fasilitator netral di tengah kebuntuan mitra."
  },
  {
    "prompt": "Anda bertugas memimpin unit baru yang belum memiliki jejaring kerja eksternal yang luas. Pimpinan memberikan target waktu 3 bulan untuk menjalin kemitraan strategis dengan minimal 3 lembaga nasional guna mendukung program kerja unit. Strategi awal apa yang paling sistematis untuk membangun jejaring kerja dari nol?",
    "choices": [
      "Mengirimkan surat penawaran kerja sama umum beserta draf MoU ke 10 lembaga nasional secara serentak.",
      "Menyusun peta kebutuhan strategis unit, mengidentifikasi lembaga nasional yang memiliki irisan target sejalan, serta melakukan pendekatan audiensi terfokus dengan membawa proposal nilai tambah bersama.",
      "Menghadiri berbagai seminar nasional untuk membagikan profil unit Anda kepada siapa saja pengambil keputusan yang Anda temui.",
      "Meminta pimpinan Anda mengenalkan relasi-relasi pribadi tingkat tingginya di lembaga nasional agar proses kerja sama lebih cepat ditandatangani.",
      "Mengundang perwakilan dari berbagai lembaga nasional dalam acara ramah tamah dan makan malam untuk memperkenalkan keanggotaan unit baru Anda."
    ],
    "scores": [
      3,
      5,
      4,
      2,
      1
    ],
    "explanation": "Penjelasan Skor 5: Opsi B menyajikan langkah berjejaring yang sistematis, objektif, dan bernilai strategis (value-proposition). Membangun jejaring dari nol membutuhkan tahapan: analisis kebutuhan identifikasi mitra relevan kompilasi tawaran manfaat bersama pendekatan terfokus.\n\nA (3): Sisi Positif: Menggunakan jalur formal dan massal. Kelemahan: Generik dan tidak personal (Tipe 1); surat penawaran umum tanpa analisis kebutuhan mitra sering kali diabaikan.\n\nB (5): Sisi Positif: Terstruktur, relevan, profesional, menawarkan kemitraan berbasis nilai tambah, dan berorientasi jangka panjang. Kelemahan: Butuh waktu perancangan peta kebutuhan. Kesimpulan: Perancangan awal jejaring kerja yang paling sempurna.\n\nC (4): Sisi Positif: Aktif mencari peluang relasi di forum publik. Kelemahan: Kurang terstruktur; bergantung pada faktor kebetulan tanpa analisis peta target lembaga yang jelas sebelumnya.\n\nD (2): Sisi Positif: Kecepatan akses pintu masuk. Kelemahan: Terlalu bergantung pada jaringan pimpinan/lama (Tipe 5); tidak menguji kemandirian kapasitas analisis unit baru.\n\nE (1): Sisi Positif: Mencairkan keakraban awal. Kelemahan: Terlalu informal & boros anggaran; acara ramah tamah tanpa kejelasan gagasan penawaran substansi kurang menarik bagi mitra profesional."
  },
  {
    "prompt": "Anda ditunjuk memimpin persiapan program lintas unit. Unit A memiliki data yang sangat dibutuhkan, tetapi hubungan kedua unit sebelumnya kurang baik karena beberapa pekerjaan bersama sering berakhir saling menyalahkan. Tenggat program tinggal tiga minggu. Langkah Anda adalah ...",
    "choices": [
      "Menghubungi pejabat penghubung Unit A untuk menyampaikan kebutuhan data dan meminta dukungan agar target program tetap tercapai.",
      "Mengajak perwakilan Unit A membahas kebutuhan masing-masing agar komunikasi awal tidak kembali dipengaruhi persoalan kerja sama sebelumnya.",
      "Meminta anggota tim yang memiliki hubungan baik dengan Unit A membantu membuka komunikasi sehingga permintaan data dapat diproses lebih cepat.",
      "Menyepakati kebutuhan data, peran, batas waktu, dan mekanisme penyelesaian kendala bersama Unit A, lalu menjaga komunikasi berkala selama pelaksanaan.",
      "Mengutamakan pembagian tugas secara tertulis sejak awal agar kedua unit memiliki acuan yang sama dan potensi perbedaan pendapat dapat ditekan."
    ],
    "scores": [
      4,
      3,
      2,
      5,
      1
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nB (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nC (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nD (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nE (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus."
  },
  {
    "prompt": "Tim Anda membutuhkan data dari instansi mitra untuk menyusun laporan. Data belum diterima meskipun tenggat semakin dekat. Mitra menjelaskan bahwa permintaan dari beberapa pihak sedang menumpuk dan mereka belum mengetahui data mana yang paling mendesak. Anda ...",
    "choices": [
      "Mengirimkan pengingat beserta batas waktu baru agar mitra memiliki target yang lebih jelas.",
      "Menjelaskan dampak keterlambatan, menyepakati data yang benar-benar prioritas, serta mencari mekanisme pengiriman bertahap yang realistis.",
      "Meminta atasan menghubungi pimpinan mitra agar data segera diprioritaskan.",
      "Menawarkan bantuan teknis kepada mitra agar proses penyiapan data dapat dipercepat.",
      "Menggunakan data periode sebelumnya sebagai bahan sementara sambil menunggu mitra menyelesaikan permintaan."
    ],
    "scores": [
      3,
      5,
      2,
      4,
      1
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nB (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nC (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nD (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nE (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus."
  },
  {
    "prompt": "Atasan meminta Anda mencari mitra untuk mengembangkan sistem layanan. Anda mengenal sebuah instansi yang komunikasinya sangat mudah, tetapi kompetensinya hanya sebagian sesuai kebutuhan. Ada pihak lain yang belum pernah bekerja sama dengan tim Anda namun memiliki kompetensi teknis lebih lengkap. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Memilih pihak yang sudah dikenal karena hubungan kerja yang telah terbukti dapat mempercepat pelaksanaan.",
      "Menghubungi kedua pihak dan membandingkan pengalaman mereka berdasarkan kebutuhan teknis program.",
      "Memprioritaskan pihak yang kompetensinya paling relevan, sekaligus melakukan penjajakan awal untuk memastikan kapasitas, kewenangan, dan kesediaannya.",
      "Menggunakan mitra lama sebagai pelaksana utama dan meminta pihak yang lebih kompeten menjadi konsultan.",
      "Meminta rekomendasi dari jaringan profesional sebelum menentukan pihak yang akan dilibatkan."
    ],
    "scores": [
      2,
      4,
      5,
      3,
      1
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nB (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nC (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nD (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nE (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus."
  },
  {
    "prompt": "Program bersama harus selesai dalam satu bulan. Unit Anda mengejar percepatan layanan, sedangkan unit lain lebih menekankan ketelitian verifikasi. Keduanya memiliki alasan yang kuat dan saling menilai prioritas pihak lain menghambat pekerjaan. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Mengusulkan agar kedua unit menggunakan target waktu yang sama supaya tidak ada pihak yang merasa tertinggal.",
      "Mengikuti prioritas unit yang memiliki kewenangan terbesar agar keputusan dapat segera dijalankan.",
      "Membagi tahapan kerja berdasarkan keunggulan masing-masing unit agar kecepatan dan verifikasi dapat berjalan bersamaan.",
      "Memetakan titik yang benar-benar membutuhkan verifikasi, menyepakati standar bersama, dan membagi tahapan kerja serta indikator keberhasilan secara proporsional.",
      "Meminta pimpinan menentukan prioritas agar konflik kepentingan antarunit tidak berlarut."
    ],
    "scores": [
      3,
      1,
      4,
      5,
      2
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nB (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus.\n\nC (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nD (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nE (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis."
  },
  {
    "prompt": "Seorang rekan menawarkan banyak kontak dari berbagai instansi untuk mendukung proyek. Namun, sebagian besar tidak memiliki kewenangan atau kompetensi yang berkaitan langsung dengan proyek. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Menggunakan jaringan tersebut sebanyak mungkin untuk membuka peluang kerja sama baru.",
      "Memilih beberapa kontak yang tampak paling aktif agar komunikasi awal dapat segera dilakukan.",
      "Memetakan kontak berdasarkan kewenangan dan kompetensi, lalu memprioritaskan pihak yang paling relevan dengan kebutuhan proyek.",
      "Meminta rekan memilihkan kontak terbaik berdasarkan pengalamannya agar proses tidak terlalu lama.",
      "Menghubungi kontak yang sudah memiliki hubungan baik dengan rekan tersebut sebelum menilai kecocokan lebih lanjut."
    ],
    "scores": [
      1,
      2,
      5,
      3,
      4
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus.\n\nB (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nC (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nD (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nE (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik."
  },
  {
    "prompt": "Pada evaluasi proyek, mitra menyampaikan bahwa tim Anda sering menyebut keberhasilan sebagai hasil kerja internal, padahal mitra memberikan kontribusi penting. Hubungan kerja masih dibutuhkan untuk tahap berikutnya. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Mengakui kontribusi mitra dalam forum evaluasi dan memperbaiki cara pencatatan kontribusi pada tahap berikutnya.",
      "Menjelaskan bahwa hasil akhir tetap merupakan tanggung jawab bersama sehingga tidak perlu mempermasalahkan pembagian pengakuan.",
      "Menyampaikan apresiasi secara personal agar hubungan tetap baik tanpa memperpanjang pembahasan.",
      "Mengajak mitra menyepakati mekanisme pembagian peran dan pengakuan kontribusi untuk tahap berikutnya.",
      "Meminta tim lebih berhati-hati dalam menyampaikan capaian agar tidak menimbulkan kesan mengabaikan pihak lain."
    ],
    "scores": [
      4,
      1,
      2,
      5,
      3
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nB (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus.\n\nC (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nD (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nE (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama."
  },
  {
    "prompt": "Tim Anda sering meminta bantuan seorang pegawai dari unit lain karena ia sangat kompeten. Pekerjaan menjadi cepat, tetapi mulai terlihat bahwa anggota tim Anda menyerahkan sebagian besar pekerjaan teknis kepadanya. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Tetap meminta bantuannya untuk pekerjaan yang kritis karena kualitas hasil lebih terjamin.",
      "Meminta ia mendampingi anggota tim sekaligus mentransfer pengetahuan agar kapasitas internal meningkat.",
      "Membagi pekerjaan antara tim Anda dan dirinya berdasarkan tingkat kesulitan pekerjaan.",
      "Mengurangi permintaan bantuan secara bertahap agar tim belajar mandiri.",
      "Menetapkan bahwa seluruh pekerjaan harus dikerjakan tim sendiri agar tidak bergantung pada unit lain."
    ],
    "scores": [
      2,
      5,
      4,
      3,
      1
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nB (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nC (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nD (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nE (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus."
  },
  {
    "prompt": "Dalam proyek lintas instansi, pihak A menilai pihak B tidak memenuhi komitmen. Pihak B mengatakan permintaan A berubah-ubah. Keduanya mulai berkomunikasi melalui pesan yang bernada defensif. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Meminta kedua pihak kembali menggunakan jalur komunikasi resmi agar pertukaran informasi lebih tertib.",
      "Mempertemukan kedua pihak untuk membahas fakta, komitmen awal, perubahan kebutuhan, dan langkah korektif yang dapat disepakati.",
      "Berkomunikasi terpisah dengan masing-masing pihak untuk mengetahui sumber masalah sebelum mempertemukan mereka.",
      "Meminta setiap pihak membuat laporan tertulis mengenai kendalanya agar masalah dapat didokumentasikan.",
      "Memprioritaskan penyelesaian pekerjaan yang paling mendesak sambil membiarkan pihak yang berselisih menyelesaikan masalahnya sendiri."
    ],
    "scores": [
      2,
      5,
      4,
      3,
      1
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nB (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nC (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nD (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nE (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus."
  },
  {
    "prompt": "Anda memiliki hubungan pertemanan dengan calon mitra. Ia meminta proses penjajakan dipercepat karena mengaku dapat membantu tim Anda memperoleh akses yang sulit didapat. Tindakan yang paling tepat adalah ...",
    "choices": [
      "Memanfaatkan hubungan tersebut untuk memperoleh informasi awal, tetapi tetap menggunakan kriteria resmi dalam menentukan kerja sama.",
      "Menyerahkan proses kepada rekan lain agar hubungan personal tidak memengaruhi keputusan.",
      "Menjelaskan batas profesional, mengikuti prosedur yang berlaku, dan memastikan calon mitra dinilai dengan kriteria yang sama seperti pihak lain.",
      "Meminta teman tersebut memberikan informasi yang tersedia secara informal sebelum proses resmi dimulai.",
      "Mempertahankan komunikasi personal agar peluang kerja sama tidak hilang, sambil menunggu keputusan formal."
    ],
    "scores": [
      4,
      3,
      5,
      2,
      1
    ],
    "explanation": "Opsi ini memperoleh skor 5 karena paling seimbang antara pencapaian tujuan organisasi, pengelolaan kepentingan pihak lain, kejelasan peran, komunikasi, mitigasi risiko, dan keberlanjutan hubungan kerja. Keunggulannya terletak pada ketepatan strategi, bukan sekadar intensitas komunikasi atau kedekatan personal.\n\nA (4): Sangat baik dan realistis, tetapi masih kurang satu unsur strategis dibanding pilihan terbaik.\n\nB (3): Cukup tepat, tetapi pendekatannya belum sepenuhnya mengatasi akar persoalan atau keberlanjutan kerja sama.\n\nC (5): Paling optimal karena mengintegrasikan kebutuhan pekerjaan dan kualitas hubungan secara strategis.\n\nD (2): Masih profesional, tetapi terlalu menekankan satu aspek sehingga menimbulkan risiko strategis.\n\nE (1): Tetap tampak profesional, tetapi pendekatannya kurang tepat karena terlalu pasif, terlalu bergantung, atau mengabaikan aspek penting dalam konteks kasus."
  },
  {
    "prompt": "Seorang mitra yang Anda percaya meminta dokumen internal karena menurutnya dokumen tersebut diperlukan untuk menyelaraskan pekerjaan. Namun, sebagian isi dokumen belum dapat dibagikan kepada pihak eksternal. Bagaimanakah sikap profesional Anda dalam mengelola kerahasiaan dokumen tersebut tanpa mengganggu hubungan kemitraan?",
    "choices": [
      "Memberikan bagian dokumen yang menurut Anda paling relevan agar pekerjaan mitra tidak terhambat.",
      "Meminta atasan menentukan apakah seluruh dokumen dapat diberikan kepada mitra.",
      "Menunda memberikan informasi sampai seluruh proses internal selesai.",
      "Memberikan ringkasan umum mengenai informasi yang dibutuhkan tanpa menjelaskan batas akses secara rinci.",
      "Menjelaskan keterbatasan akses yang berlaku secara transparan dan mencari bentuk informasi alternatif yang sah untuk dibagikan."
    ],
    "scores": [
      2,
      3,
      1,
      4,
      5
    ],
    "explanation": "A (2): Masih profesional, tetapi mengambil keputusan sepihak dalam membagi dokumen berisiko memicu kebocoran informasi strategis.\n\nB (3): Cukup tepat untuk menjaga amanah kepemimpinan, tetapi menunjukkan kurangnya inisiatif mandiri dalam menawarkan solusi awal.\n\nC (1): Kurang tepat karena pasif dan dapat menghambat kelancaran koordinasi kerja sama yang sedang berjalan.\n\nD (4): Sangat baik dan realistis, tetapi kurang transparan mengenai batasan regulasi internal yang berlaku.\n\nE (5): Paling optimal karena mengintegrasikan kepatuhan atas kerahasiaan dokumen (mitigasi risiko) dengan solusi komunikasi yang sah demi menjaga keberlanjutan hubungan kerja."
  },
  {
    "prompt": "Seorang mitra menyampaikan kritik bahwa mekanisme komunikasi tim Anda terlalu lambat dan membuat mereka kesulitan menyesuaikan pekerjaan. Sebagian anggota tim merasa kritik tersebut berlebihan. Bagaimana langkah terbaik yang sebaiknya Anda ambil untuk merespons masukan dari mitra tersebut secara objektif?",
    "choices": [
      "Meminta mitra menjelaskan contoh hambatan agar tim dapat mengetahui bagian yang perlu diperbaiki.",
      "Membahas kritik tersebut secara internal terlebih dahulu sebelum memberikan tanggapan kepada mitra.",
      "Menjelaskan bahwa prosedur internal memang diperlukan sehingga mitra perlu menyesuaikan diri.",
      "Menggali bukti dan dampak kritik, membandingkannya dengan kebutuhan internal, lalu menyepakati perbaikan komunikasi yang proporsional bersama mitra.",
      "Mengubah seluruh mekanisme komunikasi agar mitra merasa lebih nyaman."
    ],
    "scores": [
      4,
      3,
      1,
      5,
      2
    ],
    "explanation": "A (4): Sangat baik dalam membangun komunikasi terbuka, tetapi masih memerlukan langkah evaluasi internal secara komprehensif.\n\nB (3): Cukup tepat untuk menjaga konsolidasi tim, tetapi menunda komunikasi ke mitra dapat memberi kesan respons yang lambat.\n\nC (1): Pendekatan kurang tepat karena bersifat kaku, defensif, dan mengabaikan pentingnya penyelarasan kerja.\n\nD (5): Paling optimal karena menggabungkan evaluasi berbasis data (bukti & dampak) dengan kolaborasi yang proporsional tanpa mengorbankan standar kerja internal.\n\nE (2): Terlalu reaktif dan berisiko merusak sistem kerja internal yang sudah terbangun secara baku."
  },
  {
    "prompt": "Pegawai utama dari instansi mitra yang selama ini menjadi penghubung proyek dipindahkan. Penggantinya belum memahami riwayat keputusan dan hubungan kerja yang telah terbentuk. Bentuk inisiatif komunikasi apa yang paling efektif Anda lakukan untuk memastikan keberlanjutan proyek kerja sama ini?",
    "choices": [
      "Mengirim seluruh dokumen proyek kepada pengganti agar ia dapat mempelajarinya sendiri.",
      "Meminta penghubung lama memberikan pengantar singkat kepada penggantinya.",
      "Membangun komunikasi awal dengan pengganti, menjelaskan tujuan, keputusan penting, peran masing-masing, serta menyamakan ekspektasi.",
      "Menunggu pengganti memahami pekerjaannya sebelum melanjutkan koordinasi intensif.",
      "Mengajak pengganti mengikuti rapat berikutnya agar proses adaptasi berlangsung secara alami."
    ],
    "scores": [
      2,
      4,
      5,
      1,
      3
    ],
    "explanation": "A (2): Kurang proaktif karena memberikan beban belajar mandiri tanpa pendampingan langsung.\n\nB (4): Sangat baik dalam memanfaatkan jalur informal, tetapi tetap memerlukan keterlibatan langsung dari Anda.\n\nC (5): Paling optimal karena menunjukkan kepemimpinan proaktif dalam membangun kejelasan peran dan kesetaraan ekspektasi demi kelancaran proyek.\n\nD (1): Sangat pasif dan berisiko menimbulkan kelambatan signifikan pada penyelesaian proyek.\n\nE (3): Cukup baik, tetapi tanpa pengenalan konteks di awal, rapat dapat berjalan kurang efektif bagi personel baru."
  },
  {
    "prompt": "Sebuah organisasi eksternal menawarkan dukungan untuk program Anda. Dukungan tersebut menarik, tetapi mereka ingin program lebih menonjolkan kepentingan organisasi mereka. Respons strategis manakah yang paling mencerminkan prinsip integritas dan keberlanjutan program organisasi Anda?",
    "choices": [
      "Menerima dukungan selama tidak mengubah target utama program.",
      "Mencari titik temu antara kepentingan mereka dan tujuan program, lalu menetapkan batas kontribusi yang tidak menggeser mandat organisasi.",
      "Menolak tawaran agar organisasi tidak memiliki pengaruh terhadap program.",
      "Meminta pimpinan memutuskan agar risiko kepentingan dapat dialihkan ke tingkat yang lebih tinggi.",
      "Menerima dukungan secara terbatas sambil menjaga komunikasi agar peluang kerja sama tetap terbuka."
    ],
    "scores": [
      3,
      5,
      1,
      2,
      4
    ],
    "explanation": "A (3): Cukup tepat, namun kurang memiliki batasan kontribusi yang tegas sehingga berpotensi bias di tengah jalan.\n\nB (5): Paling optimal karena mampu melakukan negosiasi yang saling menguntungkan (win-win) tanpa mengorbankan mandat utama organisasi.\n\nC (1): Sangat kaku dan menutup potensi kolaborasi positif yang sebenarnya dapat dikelola.\n\nD (2): Kurang menunjukkan kemandirian manajerial dalam mengurai potensi konflik kepentingan.\n\nE (4): Sangat baik dan pragmatis, namun penetapan batas di opsi B jauh lebih tegas secara kelembagaan."
  },
  {
    "prompt": "Anda mengetahui bahwa informasi perubahan jadwal penting tidak diterima oleh salah satu unit mitra. Penghubung mengatakan ia mengira anggota lain sudah menyampaikannya. Upaya pembenahan manakah yang berorientasi pada pencegahan jangka panjang agar masalah alur komunikasi tersebut tidak terulang?",
    "choices": [
      "Menyepakati siapa yang bertanggung jawab menyampaikan informasi, media yang digunakan, dan cara memastikan pesan diterima secara jelas.",
      "Mengirimkan informasi langsung kepada semua pihak secara mandiri agar tidak terjadi kesalahan berikutnya.",
      "Menegur penghubung karena tidak memastikan informasi sampai ke tujuan.",
      "Meminta setiap unit menunjuk satu orang sebagai penerima informasi utama.",
      "Membuat grup komunikasi baru yang berisi seluruh anggota proyek."
    ],
    "scores": [
      5,
      3,
      1,
      4,
      2
    ],
    "explanation": "A (5): Paling optimal karena membangun SOP komunikasi yang solutif, akuntabel, dan jelas bagi seluruh pihak.\n\nB (3): Menyelesaikan masalah sesaat tetapi berisiko merusak struktur rantai komando komunikasi mitra.\n\nC (1): Bersifat emosional/punitive tanpa memberikan perbaikan sistemik pada akar persoalan.\n\nD (4): Langkah penataan yang sangat baik, namun belum mencakup kejelasan media dan mekanisme konfirmasi.\n\nE (2): Menambah kanal komunikasi tanpa aturan jelas justru berpotensi menimbulkan distorsi informasi baru."
  },
  {
    "prompt": "Anda melihat pola kerja mitra yang berulang kali menyebabkan keterlambatan. Jika disampaikan terlalu keras, hubungan dapat memburuk. Jika terlalu lunak, masalah kemungkinan berulang. Bagaimanakah penyampaian umpan balik yang paling konstruktif untuk mengatasi situasi sensitif tersebut?",
    "choices": [
      "Menyampaikan masalah secara langsung dengan contoh konkret, membahas dampaknya, dan mengajak mitra menyusun perbaikan yang dapat dipantau.",
      "Menyampaikan kritik secara informal agar mitra tidak merasa sedang ditekan.",
      "Menyampaikan masalah kepada pimpinan mitra agar ada dukungan untuk memperbaikinya.",
      "Mengurangi ketergantungan pada mitra sambil tetap menjaga komunikasi yang baik.",
      "Memberikan umpan balik secara sopan dan meminta mitra meningkatkan ketepatan waktu pada pekerjaan berikutnya."
    ],
    "scores": [
      5,
      2,
      3,
      1,
      4
    ],
    "explanation": "A (5): Paling optimal karena mengombinasikan kejelasan data konkret dengan pendekatan kolaboratif terukur.\n\nB (2): Terlalu ragu-ragu sehingga esensi masalah dan ketegasan perbaikan berisiko tidak ditangkap oleh mitra.\n\nC (3): Dapat menyelesaikan masalah tetapi berpotensi merusak hubungan kerja di tingkat operasional.\n\nD (1): Tindakan pasif yang menghindar dari masalah tanpa mencoba menyelesaikan dinamika kemitraan.\n\nE (4): Sopan dan positif, namun kurang dilengkapi dengan mekanisme evaluasi dan tindak lanjut perbaikan yang jelas."
  },
  {
    "prompt": "Atasan meminta Anda memperluas jejaring kerja. Waktu terbatas dan banyak pihak menawarkan kesempatan bertemu, tetapi tidak semuanya berkaitan dengan sasaran unit. Strategi pengelolaan waktu dan peluang manakah yang paling efisien untuk memenuhi arahan atasan tersebut?",
    "choices": [
      "Mengikuti sebanyak mungkin forum agar jumlah kontak meningkat pesat.",
      "Memprioritaskan forum yang dihadiri pejabat penting karena berpotensi membuka akses lebih luas.",
      "Mengikuti forum yang paling mudah diakses agar jejaring dapat berkembang secara bertahap.",
      "Mengikuti beberapa forum yang memiliki reputasi baik dan kemudian memilah kontak yang relevan.",
      "Memilih forum yang pesertanya memiliki keterkaitan langsung dengan sasaran unit serta menyiapkan tujuan komunikasi sebelum hadir."
    ],
    "scores": [
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "A (1): Berfokus pada kuantitas tanpa kualitas, sangat tidak efisien dan berisiko menyita waktu kerja.\n\nB (2): Cenderung pragmatis pada posisi/jabatan tanpa mempertimbangkan relevansi operasional unit.\n\nC (3): Cukup aman tetapi kurang berorientasi pada pencapaian target strategis organisasi.\n\nD (4): Sangat baik dalam menjaga reputasi, tetapi persiapan sebelum hadir masih perlu dimaksimalkan.\n\nE (5): Paling optimal karena menggunakan pendekatan terencana dan berorientasi pada efisiensi serta sasaran kerja unit."
  },
  {
    "prompt": "Seorang mitra lama menawarkan bantuan tambahan yang sangat mempercepat pekerjaan. Namun, ada pihak lain yang memenuhi kebutuhan dengan kompetensi setara dan proses pemilihannya lebih objektif. Pertimbangan utama manakah yang wajib Anda kedepankan dalam mengambil keputusan kerja sama ini?",
    "choices": [
      "Memilih mitra lama karena rekam jejak kerja sama sudah terbukti akurat.",
      "Menggunakan mitra lama untuk tahap awal sambil mengevaluasi alternatif pada tahap berikutnya.",
      "Meminta mitra lama memberikan penawaran terbaik agar dapat dibandingkan secara langsung.",
      "Membandingkan alternatif berdasarkan kebutuhan, kapasitas, risiko, dan ketentuan yang berlaku sebelum menetapkan kerja sama.",
      "Menghindari mitra lama sepenuhnya agar tidak muncul persepsi keberpihakan publik."
    ],
    "scores": [
      2,
      3,
      4,
      5,
      1
    ],
    "explanation": "A (2): Mengabaikan prinsip transparansi dan tata kelola yang objektif dalam pemilihan mitra.\n\nB (3): Solusi kompromi yang masih mengandung risiko keberpihakan di tahap awal.\n\nC (4): Langkah perbandingan yang baik, namun kriterianya belum sekomprehensif opsi D.\n\nD (5): Paling optimal karena menjunjung tinggi transparansi, akuntabilitas, serta penilaian risiko secara menyeluruh.\n\nE (1): Terlalu reaktif dan berpotensi menghilangkan kesempatan kerja sama yang sebenarnya kompetitif."
  },
  {
    "prompt": "Dalam forum lintas unit, satu pihak sangat dominan sehingga keputusan sering mengikuti pandangannya. Pihak lain sebenarnya memiliki data penting tetapi jarang menyampaikan pendapat. Langkah fasilitasi manakah yang paling ideal untuk menciptakan ruang diskusi yang inklusif dan berbasis bukti?",
    "choices": [
      "Membatasi waktu bicara pihak yang dominan agar semua peserta mendapat kesempatan.",
      "Meminta peserta yang lebih pendiam menyampaikan pendapat setelah pihak dominan selesai berbicara.",
      "Menyusun agenda dan mekanisme pengambilan keputusan yang memberi ruang pada seluruh pihak berdasarkan peran dan bukti relevan.",
      "Mengadakan diskusi terpisah dengan pihak yang kurang aktif agar masukan mereka tetap terakomodasi.",
      "Membiarkan forum berjalan karena pihak dominan memang memiliki pengalaman lebih banyak."
    ],
    "scores": [
      3,
      4,
      5,
      2,
      1
    ],
    "explanation": "A (3): Cukup membantu dari segi pembagian waktu, tetapi belum menyentuh struktur pengambilan keputusan yang berbasis data.\n\nB (4): Sangat baik secara taktikal dalam rapat, namun belum menciptakan sistem yang berkelanjutan.\n\nC (5): Paling optimal karena menciptakan tata kelola rapat yang objektif, berimbang, dan mengedepankan kualitas keputusan berbasis bukti.\n\nD (2): Menyelesaikan masalah di luar sistem utama rapat sehingga forum utama tetap tidak berimbang.\n\nE (1): Sikap pembiaran yang merugikan organisasi karena mengabaikan data penting dari unit lain."
  },
  {
    "prompt": "Proyek bersama telah selesai dengan hasil baik. Sebagian anggota menganggap komunikasi dengan mitra tidak lagi diperlukan sampai ada proyek baru. Bagaimanakah pengelolaan hubungan pasca-proyek yang paling tepat untuk menjaga keberlanjutan jejaring kerja?",
    "choices": [
      "Menjaga komunikasi sesekali agar hubungan tidak terputus.",
      "Menyimpan kontak mitra dan menghubunginya kembali ketika ada kebutuhan proyek baru.",
      "Menyampaikan apresiasi dan dokumentasi hasil proyek, lalu menjaga hubungan melalui komunikasi yang relevan tanpa formalitas berlebihan.",
      "Mengundang mitra ke kegiatan unit secara berkala agar hubungan tetap dekat.",
      "Mengakhiri komunikasi agar masing-masing pihak dapat fokus pada pekerjaan berikutnya."
    ],
    "scores": [
      4,
      2,
      5,
      3,
      1
    ],
    "explanation": "A (4): Sangat baik dalam menjaga silaturahmi, namun komunikasinya masih cenderung umum.\n\nB (2): Pendekatan transaksional yang membuat hubungan terasa dimanfaatkan saat ada butuhnya saja.\n\nC (5): Paling optimal karena memberikan penutupan yang profesional sekaligus memelihara relasi secara wajar dan bermakna.\n\nD (3): Baik, tetapi berisiko menjadi beban formalitas jika frekuensinya terlalu sering tanpa relevansi pekerjaan.\n\nE (1): Sikap acuh tak acuh yang dapat merusak jejaring kerja profesional jangka panjang."
  },
  {
    "prompt": "Tim Anda memiliki kerja sama yang sangat efektif dengan satu unit mitra. Karena hubungan tersebut berjalan lancar, hampir semua pekerjaan tertentu mulai diarahkan kepada unit tersebut. Anda melihat risiko jika suatu saat kapasitas mitra berubah. Tindakan mitigasi strategis manakah yang paling tepat untuk menjaga efisiensi sekaligus ketahanan operasional tim?",
    "choices": [
      "Membagi sebagian pengetahuan dan proses ke tim internal serta mengembangkan alternatif mitra tanpa mengurangi kualitas hubungan yang ada.",
      "Mempertahankan pola kerja karena efektivitas hubungan yang terbukti lebih penting daripada kemungkinan masalah.",
      "Mengurangi porsi kerja mitra secara bertahap agar tim Anda kembali lebih mandiri.",
      "Mencari beberapa pihak alternatif untuk menjaga fleksibilitas ketika kapasitas mitra berubah.",
      "Meminta mitra menambah personel agar kebutuhan tim Anda tetap dapat dipenuhi."
    ],
    "scores": [
      5,
      1,
      3,
      4,
      2
    ],
    "explanation": "A (5): Paling optimal karena memperkuat kapasitas internal, memitigasi risiko tunggal, dan tetap menjaga integritas hubungan baik yang ada.\n\nB (1): Sangat berisiko karena mengabaikan analisis manajemen risiko dan keberlanjutan jangka panjang.\n\nC (3): Cukup berhati-hati, namun mengurangi porsi kerja mendadak dapat menurunkan efektivitas yang sedang berjalan.\n\nD (4): Sangat baik dari segi manajemen mitra luar, tetapi belum menyentuh peningkatan kapabilitas internal.\n\nE (2): Terlalu mengintervensi urusan internal mitra dan tidak menyelesaikan risiko ketergantungan."
  },
  {
    "prompt": "Dua organisasi mitra penting dalam konsorsium proyek Anda sedang mengalami konflik internal yang tajam. Konflik ini mulai memengaruhi komunikasi antarunit serta memperlambat pertukaran data yang dibutuhkan untuk penyelesaian target. Langkah fasilitasi manakah yang paling konstruktif untuk menjaga kelancaran sinergi proyek tanpa mencampuri urusan internal mitra?",
    "choices": [
      "Menghentikan keterlibatan kedua mitra sampai konflik internal mereka selesai secara mandiri.",
      "Mengambil alih seluruh fungsi pertukaran data agar proyek tidak bergantung pada kedua mitra.",
      "Melaporkan konflik tersebut kepada pimpinan tinggi agar diberikan sanksi administratif kepada kedua mitra.",
      "Mengadakan forum koordinasi khusus berbasis target kerja untuk menyepakati mekanisme alur data teknis tanpa membahas konflik internal mereka.",
      "Memilih salah satu mitra yang paling kooperatif untuk menyelesaikan seluruh sisa pekerjaan proyek."
    ],
    "scores": [
      1,
      3,
      2,
      5,
      4
    ],
    "explanation": "A (1): Sikap pasif dan pembiaran yang berisiko menggagalkan pencapaian target proyek.\n\nB (3): Membantu kelancaran proyek, tetapi menambah beban internal dan merusak kerangka kemitraan yang sudah dibentuk.\n\nC (2): Tindakan terburu-buru yang dapat memperkeruh hubungan dan memicu resistensi mitra.\n\nD (5): Paling optimal karena fokus pada solusi objektif (profesionalisme berbasis target) tanpa mengintervensi dinamika internal mitra.\n\nE (4): Solutif untuk kecepatan target, namun dapat memicu persepsi keberpihakan dan merusak jejaring konsorsium."
  },
  {
    "prompt": "Tim Anda bekerja sama dengan instansi lintas sektor yang memiliki budaya kerja sangat birokratis dan formal, sedangkan tim Anda terbiasa dengan pola kerja cepat dan berbasis digital. Perbedaan ini memunculkan gesekan dan kesalahpahaman dalam penyampaian laporan. Bagaimanakah strategi penyesuaian komunikasi yang paling efektif untuk membangun kesepahaman kerja sama?",
    "choices": [
      "Meminta instansi mitra mengikuti gaya kerja tim Anda agar koordinasi berjalan lebih efisien.",
      "Menyepakati prosedur komunikasi jembatan yang mengakomodasi standar formalitas mitra sekaligus mempertahankan efisiensi digital tim Anda.",
      "Mengikuti seluruh prosedur birokrasi kaku mitra meskipun memperlambat waktu penyelesaian pekerjaan.",
      "Membatasi komunikasi langsung dan hanya berhubungan melalui media surat-menyurat resmi.",
      "Menggunakan pihak ketiga sebagai perantara komunikasi guna menghindari gesekan antaranggota tim."
    ],
    "scores": [
      2,
      5,
      3,
      1,
      4
    ],
    "explanation": "A (2): Cenderung egois dan tidak menghormati karakteristik budaya kerja mitra eksternal.\n\nB (5): Paling optimal karena menunjukkan fleksibilitas adaptif, saling menghormati, dan menciptakan kompromi profesional.\n\nC (3): Menunjukkan sikap menghargai mitra, tetapi mengorbankan aspek efisiensi dan kecepatan kerja.\n\nD (1): Sangat kaku dan memperburuk keterbukaan alur informasi dalam jejaring kerja.\n\nE (4): Cukup pragmatis untuk menghindari konflik, tetapi menambah rantai komunikasi yang tidak perlu."
  },
  {
    "prompt": "Hasil pekerjaan yang diserahkan oleh tim mitra belum memenuhi standar kualitas internal organisasi Anda. Jika diminta melakukan revisi total, tenggat waktu proyek terancam terlewati dan dapat merusak hubungan baik yang sudah terjalin. Sikap manakah yang paling menunjukkan kesetimbangan antara integritas kualitas hasil dan pembinaan jejaring kerja?",
    "choices": [
      "Menerima apa adanya hasil pekerjaan mitra demi menjaga hubungan baik dan menghindari keterlambatan.",
      "Mengambil alih perbaikan hasil pekerjaan secara mandiri tanpa memberitahukan kekurangannya kepada mitra.",
      "Melakukan pendampingan bersama mitra untuk mengidentifikasi bagian utama yang perlu disempurnakan secara terfokus tanpa mengganggu jadwal utama.",
      "Menolak hasil pekerjaan secara tegas dan memberikan teguran keras atas ketidakprofesionalan mitra.",
      "Meminta pimpinan membatalkan kontrak kerja sama dengan mitra tersebut untuk proyek mendatang."
    ],
    "scores": [
      1,
      3,
      5,
      2,
      4
    ],
    "explanation": "A (1): Mengorbankan standar mutu dan integritas organisasi hanya demi kompromi emosional.\n\nB (3): Kualitas kerja tertolong, tetapi tidak edukatif dan tidak membangun kapabilitas mitra dalam jejaring.\n\nC (5): Paling optimal karena mengombinasikan orientasi pada kualitas (quality control) dan pembinaan kemitraan (collaborative improvement).\n\nD (2): Bersifat konfrontatif tanpa memberikan jalan keluar yang konstruktif.\n\nE (4): Tindakan tegas untuk kualitas jangka panjang, tetapi kurang matang dalam mengelola masalah yang sedang berjalan."
  },
  {
    "prompt": "Penghubung dari instansi mitra meminta bantuan tim Anda untuk mengerjakan analisis tambahan yang tidak tertuang dalam dokumen kerja sama (MoU). Ia beralasan analisis tersebut sangat mendesak bagi instansinya. Bagaimanakah pertimbangan keputusan yang paling bijaksana dalam merespons permintaan tersebut?",
    "choices": [
      "Menolak secara langsung karena permintaan tersebut tidak tercantum dalam dokumen MoU resmi.",
      "Menguji relevansi permintaan dengan sasaran bersama, lalu menyepakati adendum atau penyesuaian beban kerja yang sah secara kelembagaan.",
      "Mengerjakan seluruh bantuan tersebut secara diam-diam agar hubungan personal dengan penghubung tetap terjaga.",
      "Mengerjakan bantuan tersebut dengan syarat mitra memberikan imbalan finansial tambahan secara informal.",
      "Melaporkan tindakan penghubung mitra ke pihak berwajib atas tuduhan penyalahgunaan wewenang."
    ],
    "scores": [
      3,
      5,
      2,
      1,
      4
    ],
    "explanation": "A (3): Taat pada dokumen resmi, namun terlalu kaku dan dapat menutup peluang sinergi positif.\n\nB (5): Paling optimal karena fleksibel terhadap kebutuhan strategis namun tetap menjaga akuntabilitas dan tata kelola (governance).\n\nC (2): Tindakan kompromistis tanpa dasar hukum/administrasi yang berisiko memicu masalah audit internal.\n\nD (1): Bentuk pelanggaran etika dan penyalahgunaan wewenang demi keuntungan personal.\n\nE (4): Sangat tegas menjaga integritas, namun terlalu reaktif jika masalah tersebut masih bisa diselesaikan secara administratif."
  },
  {
    "prompt": "Dalam rangka optimalisasi jejaring kerja, instansi mitra meminta akses langsung ke basis data pengguna organisasi Anda. Regulasi internal mengatur bahwa akses data eksternal harus melalui prosedur verifikasi dan enkripsi yang cukup ketat. Langkah pengelolaan akses manakah yang paling tepat untuk menjamin keamanan data tanpa menghambat kolaborasi?",
    "choices": [
      "Memfasilitasi pemenuhan akses data sesuai standar regulasi dan keamanan yang berlaku melalui kanal integrasi terverifikasi.",
      "Memberikan akun akses khusus milik Anda kepada mitra agar proses pertukaran data berjalan cepat.",
      "Menolak memberikan data apa pun dengan alasan keamanan informasi organisasi adalah hal mutlak.",
      "Meminta mitra membuat surat pernyataan ganti rugi jika terjadi kebocoran data sebelum memberikan akses penuh.",
      "Mengulur waktu proses verifikasi data agar mitra mencari sumber data alternatif secara mandiri."
    ],
    "scores": [
      5,
      1,
      2,
      4,
      3
    ],
    "explanation": "A (5): Paling optimal karena menyeimbangkan pelayanan kerja sama jejaring dengan mitigasi risiko keamanan informasi secara patuh aturan.\n\nB (1): Pelanggaran fatal terhadap etika dan keamanan TI (sharing credential) yang membahayakan organisasi.\n\nC (2): Terlalu defensif dan dapat mematikan inisiatif kerja sama lintas instansi.\n\nD (4): Menunjukkan kesadaran akan risiko, tetapi belum menerapkan standar teknis keamanan yang seharusnya.\n\nE (3): Bentuk pelayanan yang tidak profesional dan merusak kepercayaan mitra."
  },
  {
    "prompt": "Anda baru saja dimutasi ke unit kerja yang menangani hubungan antarlembaga. Sebagian besar mitra kerja di unit ini belum mengenal Anda, dan ada kecenderungan skeptis terhadap efektivitas kepemimpinan baru. Bentuk inisiatif adaptasi manakah yang paling efektif Anda lakukan untuk membangun kepercayaan awal?",
    "choices": [
      "Menunggu para mitra menghubungi Anda terlebih dahulu saat ada agenda rapat resmi.",
      "Mengirimkan profil resmi kepemimpinan Anda melalui surat elektronik ke seluruh pimpinan mitra.",
      "Menyusun perombakan total aturan kerja sama unit untuk menunjukkan ketegasan kepemimpinan Anda.",
      "Melakukan audiensi pemetaan kebutuhan (need assessment) dan mendengarkan masukan dari setiap mitra untuk menyelaraskan agenda kerja.",
      "Mengundang seluruh mitra dalam acara ramah tamah informal di luar jam kerja."
    ],
    "scores": [
      1,
      3,
      2,
      5,
      4
    ],
    "explanation": "A (1): Sikap pasif yang tidak mencerminkan jiwa proaktif dalam membangun jejaring kerja.\n\nB (3): Formal dan informatif, tetapi kurang membangun keterikatan dan pemahaman mendalam.\n\nC (2): Terlalu otoriter dan dapat menimbulkan perlawanan atau ketidaknyamanan mitra kerja.\n\nD (5): Paling optimal karena menunjukkan sikap inklusif, mau mendengarkan, serta berorientasi pada kemitraan strategis.\n\nE (4): Pendekatan personal yang baik untuk mencairkan suasana, namun perlu dilengkapi penyesuaian agenda kerja formal."
  },
  {
    "prompt": "Di tengah pelaksanaan program bersama, instansi mitra mengalami perubahan pimpinan yang mendadak. Pimpinan baru mitra tersebut mengubah prioritas internal mereka sehingga keterlibatan mereka dalam proyek bersama menjadi berkurang. Upaya penyelarasan manakah yang paling tepat untuk merespons perubahan arah kebijakan mitra tersebut?",
    "choices": [
      "Memaksa mitra tetap menjalankan komitmen awal sesuai dengan kesepakatan tertulis yang lama.",
      "Menghentikan seluruh program kerja sama karena mitra tidak lagi fokus pada tujuan bersama.",
      "Melakukan re-evaluasi kesepakatan untuk menemukan irisan prioritas baru yang tetap saling menguntungkan kedua belah pihak.",
      "Melanjutkan program sendiri tanpa melibatkan mitra dalam proses pengambilan keputusan berikutnya.",
      "Mengajukan komplain resmi ke instansi pembina mitra atas ketidakkonsistenan arah kebijakan mereka."
    ],
    "scores": [
      2,
      1,
      5,
      3,
      4
    ],
    "explanation": "A (2): Kaku dan mengabaikan dinamika realitas organisasi mitra.\n\nB (1): Reaktif dan cepat menyerah tanpa mencoba mencari titik temu baru.\n\nC (5): Paling optimal karena menunjukkan fleksibilitas strategis, resiliensi kemitraan, dan orientasi win-win solution.\n\nD (3): Menjaga keberlangsungan program, tetapi mengabaikan esensi kolaborasi jejaring.\n\nE (4): Langkah formal untuk penegakan norma, tetapi berisiko menutup pintu kompromi yang konstruktif."
  },
  {
    "prompt": "Muncul isu dan persepsi negatif di publik bahwa kolaborasi organisasi Anda dengan salah satu mitra eksternal mengandung unsur benturan kepentingan (conflict of interest) dan merugikan pihak lain. Respons keterbukaan publik manakah yang paling ideal untuk menjaga kredibilitas jejaring kerja Anda?",
    "choices": [
      "Mengabaikan rumor tersebut karena menganggap kerja sama sudah dijalankan secara jujur.",
      "Memutus hubungan kerja sama dengan mitra tersebut secara mendadak untuk membersihkan nama baik.",
      "Menyampaikan klarifikasi bersama yang memuat transparansi proses, kriteria objektif, dan manfaat publik dari kerja sama tersebut.",
      "Mengancam akan menuntut secara hukum pihak-pihak yang menyebarkan rumor tersebut.",
      "Mengalihkan perhatian publik dengan membuat program kerja sama baru bersama mitra yang berbeda."
    ],
    "scores": [
      1,
      2,
      5,
      3,
      4
    ],
    "explanation": "A (1): Sikap acuh yang dapat memperburuk krisis kepercayaan publik terhadap integritas organisasi.\n\nB (2): Reaktif dan merugikan mitra yang tidak bersalah hanya demi persepsi sepihak.\n\nC (5): Paling optimal karena mengedepankan akuntabilitas, transparansi, serta solidaritas kemitraan dalam menghadapi krisis.\n\nD (3): Pendekatan defensif-hukum yang belum tentu menjawab keraguan publik secara edukatif.\n\nE (4): Cukup solutif dari aspek humas, tetapi tidak menyelesaikan akar kecurigaan publik secara substantif."
  },
  {
    "prompt": "Pengelolaan komunikasi jejaring kerja kelompok Anda masih menggunakan cara tradisional (surat fisik dan pertemuan tatap muka), sehingga lambat dalam merespons dinamika lapangan yang cepat. Langkah pembaruan sistem komunikasi apa yang paling tepat untuk meningkatkan efektivitas jejaring kerja?",
    "choices": [
      "Menyarankan dan merancang platform kolaborasi digital terpadu yang aman dan mudah diakses oleh seluruh anggota jejaring.",
      "Mewajibkan seluruh mitra membeli perangkat teknologi terbaru agar sejajar dengan standar kantor Anda.",
      "Tetap menggunakan cara tradisional karena dianggap lebih sopan dan minim risiko kebocoran data.",
      "Mengganti seluruh anggota jejaring yang tidak mahir menggunakan teknologi informasi modern.",
      "Menggunakan aplikasi pesan pribadi informal untuk seluruh transaksi dokumen rahasia jejaring."
    ],
    "scores": [
      5,
      2,
      3,
      1,
      4
    ],
    "explanation": "A (5): Paling optimal karena menunjukkan inisiatif modernisasi komunikasi (digitalisasi) yang efisien, inklusif, dan aman.\n\nB (2): Terlalu memberatkan mitra dan tidak mempertimbangkan keberagaman kapasitas modal mitra.\n\nC (3): Aman secara konservatif, tetapi menghambat efisiensi dan daya saing organisasi.\n\nD (1): Tindakan kaku dan merusak hubungan jejaring sosial yang telah terbangun.\n\nE (4): Cepat dan responsif, tetapi mengabaikan aspek keamanan data rahasia organisasi."
  },
  {
    "prompt": "Sebuah siklus program kerja sama tahunan lintas instansi telah berakhir dengan pencapaian melampaui target. Namun, beberapa unit mitra merasa kontribusi mereka kurang diakui dalam laporan publik. Langkah penyempurnaan manajemen jejaring manakah yang paling tepat dilakukan untuk menjaga motivasi kemitraan di masa depan?",
    "choices": [
      "Menjelaskan bahwa laporan publik hanya berfokus pada instansi penanggung jawab utama.",
      "Mengadakan forum evaluasi transparan, merevisi publikasi laporan dengan mencantumkan apresiasi peran seluruh mitra, serta menyusun acuan kerja sama berikutnya.",
      "Memberikan kompensasi finansial tambahan kepada mitra yang merasa kurang diakui.",
      "Abaikan keluhan tersebut karena target utama proyek toh sudah berhasil dicapai.",
      "Menjanjikan posisi yang lebih dominan bagi mitra tersebut pada proyek di tahun mendatang."
    ],
    "scores": [
      2,
      5,
      3,
      1,
      4
    ],
    "explanation": "A (2): Sikap egosentris yang meremehkan peran serta anggota jejaring kerja.\n\nB (5): Paling optimal karena mencerminkan penghargaan (recognition), evaluasi transparan, dan orientasi keberlanjutan jejaring (sustainability).\n\nC (3): Upaya kompromi finansial, namun tidak menyelesaikan kebutuhan moril atas pengakuan peran.\n\nD (1): Sangat tidak bijaksana dan dapat merusak hubungan kemitraan untuk jangka panjang.\n\nE (4): Menunjukkan niat baik, tetapi janji subjektif di awal berisiko menimbulkan masalah transparansi kelak."
  }
];

export const JEJARING_KERJA_DRILL_QUESTIONS: Question[] = jejaringKerjaSeeds.map((seed, index) => ({
  id: `tkp-jejaring-kerja-${String(index + 1).padStart(3, "0")}`,
  category: "TKP",
  topic: "Jejaring Kerja",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: seed.scores[choiceIndex],
  })),
  explanation: seed.explanation,
}));
