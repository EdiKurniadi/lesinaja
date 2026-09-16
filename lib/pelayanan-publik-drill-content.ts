import type { Question } from "./types";

type PelayananPublikSeed = {
  prompt: string;
  choices: string[];
  scores: number[];
  explanation: string;
};

const pelayananPublikSeeds: PelayananPublikSeed[] = [
  {
    "prompt": "Anda bertugas di loket pelayanan administrasi kependudukan. Sejak pagi sistem pelayanan berjalan lambat sehingga waktu pemrosesan setiap pemohon menjadi lebih panjang. Antrean telah mencapai puluhan orang. Di tengah kondisi tersebut, seorang lansia terlihat kesulitan menggunakan layanan digital dan meminta bantuan. Jika Anda memberikan pendampingan terlalu lama, antrean akan semakin panjang. Jika Anda berada dalam situasi tersebut, tindakan yang paling tepat adalah…",
    "choices": [
      "Meminta lansia tersebut mengikuti panduan digital yang tersedia terlebih dahulu, kemudian membantu apabila masih terdapat bagian yang tidak dapat dipahami.",
      "Mendahulukan lansia tersebut karena kelompok yang mengalami kesulitan perlu memperoleh perhatian lebih agar prosesnya dapat diselesaikan.",
      "Meminta petugas lain membantu lansia tersebut sementara Anda tetap melanjutkan antrean, apabila terdapat petugas yang sedang tidak menangani pemohon.",
      "Menjelaskan kondisi sistem kepada lansia tersebut dan meminta kesediaannya menunggu sampai antrean sedikit berkurang sebelum mendapatkan pendampingan.",
      "Mengidentifikasi bagian yang benar-benar sulit bagi lansia, memberikan bantuan secukupnya, dan mengatur agar pendampingan tidak menghambat alur pemohon lain."
    ],
    "scores": [
      2,
      3,
      4,
      1,
      5
    ],
    "explanation": "E (5) paling ideal karena memberikan bantuan sesuai kebutuhan lansia sekaligus mempertahankan kelancaran dan keadilan antrean. Bantuan tidak diberikan secara berlebihan, tetapi diarahkan pada bagian yang memang menjadi hambatan.\n\nA (2) memiliki sisi positif karena mendorong kemandirian pengguna, tetapi kurang responsif karena lansia sudah menunjukkan kesulitan.\n\nB (3) menunjukkan empati, tetapi langsung mendahulukan tanpa mempertimbangkan dampaknya terhadap antrean.\n\nC (4) merupakan solusi baik apabila petugas lain tersedia, tetapi keberhasilannya bergantung pada sumber daya tambahan\n\nD (1) mempertimbangkan antrean, tetapi terlalu menunda kebutuhan pengguna yang sedang mengalami kesulitan."
  },
  {
    "prompt": "Anda bertugas pada unit pelayanan perizinan. Menjelang penutupan pelayanan, seorang pemohon datang dengan dokumen yang hampir lengkap. Ia menjelaskan bahwa izin tersebut sangat dibutuhkan karena kegiatan usahanya akan berlangsung keesokan hari. Namun, terdapat satu dokumen yang belum terpenuhi dan dokumen tersebut merupakan bagian dari persyaratan wajib. Langkah pertama yang paling tepat adalah…",
    "choices": [
      "Memeriksa terlebih dahulu bagian dokumen yang sudah tersedia dan menjelaskan secara spesifik kekurangan yang harus dipenuhi.",
      "Menerima berkas tersebut agar proses awal dapat dilakukan, kemudian meminta pemohon melengkapi kekurangannya pada tahap berikutnya.",
      "Menjelaskan bahwa berkas belum dapat diproses dan meminta pemohon kembali pada hari berikutnya setelah seluruh persyaratan terpenuhi.",
      "Meminta atasan memberikan keputusan apakah kondisi mendesak tersebut dapat menjadi dasar untuk memberikan pengecualian.",
      "Mengarahkan pemohon mencari cara memperoleh dokumen yang kurang pada hari itu agar proses tetap dapat dilanjutkan jika mekanisme tersebut tersedia."
    ],
    "scores": [
      5,
      2,
      3,
      4,
      1
    ],
    "explanation": "A (5) paling tepat karena petugas terlebih dahulu memastikan kondisi konkret berkas dan memberikan informasi yang jelas mengenai kekurangannya. Langkah ini tidak membuat pengecualian, tetapi juga tidak langsung menghentikan upaya penyelesaian.\n\nB (2) berorientasi pada kecepatan, tetapi menerima berkas yang belum memenuhi persyaratan dapat menimbulkan persoalan administratif.\n\nC (3) sesuai prosedur, tetapi terlalu cepat mengakhiri proses tanpa mengeksplorasi solusi.\n\nD (4) tepat jika memang terdapat kemungkinan diskresi, tetapi belum tentu diperlukan sebelum kondisi berkas diperiksa.\n\nE (1) terlihat solutif, tetapi terlalu cepat mengarahkan pemohon tanpa memastikan terlebih dahulu mekanisme dan status dokumen tersebut."
  },
  {
    "prompt": "Seorang warga datang dengan nada tinggi karena sebelumnya memperoleh informasi persyaratan yang ternyata tidak lengkap. Ia sudah datang dua kali dan harus mengambil cuti dari pekerjaannya. Antrean di loket juga sedang panjang sehingga beberapa warga mulai memperhatikan perdebatan tersebut. Respons yang paling efektif adalah…",
    "choices": [
      "Meminta masyarakat menenangkan diri terlebih dahulu agar pembicaraan dapat dilakukan secara tertib.",
      "Meminta maaf atas ketidaknyamanan yang terjadi, kemudian segera menyampaikan persyaratan yang benar agar persoalan tidak semakin panjang.",
      "Mendengarkan penjelasan masyarakat, memastikan informasi yang sebelumnya diterima, lalu menjelaskan kekeliruannya dan solusi yang dapat dilakukan.",
      "Memanggil petugas yang sebelumnya memberikan informasi agar masyarakat memperoleh penjelasan langsung dari petugas tersebut.",
      "Menjelaskan bahwa informasi yang salah akan menjadi bahan evaluasi internal dan meminta masyarakat mengikuti persyaratan terbaru."
    ],
    "scores": [
      2,
      4,
      5,
      3,
      1
    ],
    "explanation": "C (5) paling ideal karena tidak hanya meredakan keluhan, tetapi mencari fakta, memahami pengalaman masyarakat, dan memberikan solusi. Tindakan ini menangani persoalan saat ini sekaligus mencegah kesalahpahaman lanjutan.\n\nA (2) menjaga komunikasi agar tetap terkendali, tetapi belum menyentuh akar masalah.\n\nB (4) menunjukkan tanggung jawab dan memberikan solusi, tetapi tidak melakukan klarifikasi terlebih dahulu.\n\nD (3) melibatkan petugas terkait, tetapi dapat memperpanjang proses dan belum tentu menyelesaikan kebutuhan masyarakat dengan cepat.\n\nE (1) benar bahwa masalah perlu dievaluasi, tetapi terlalu berorientasi internal dan kurang menyelesaikan kebutuhan masyarakat."
  },
  {
    "prompt": "Sistem pendaftaran layanan pemerintah mengalami gangguan tepat pada hari terakhir pendaftaran. Beberapa warga telah mengunggah dokumen, tetapi belum mendapatkan tanda terima. Mereka meminta Anda memastikan bahwa pendaftaran mereka tetap dianggap masuk. Anda mengetahui bahwa penetapan status pendaftaran bukan kewenangan Anda. Tindakan yang paling tepat adalah…",
    "choices": [
      "Meminta masyarakat menunggu hingga sistem normal agar status pendaftaran dapat diketahui secara pasti.",
      "Mencatat masyarakat yang mengalami kendala dan meneruskan data tersebut kepada unit yang berwenang untuk mendapatkan tindak lanjut.",
      "Menjanjikan bahwa masyarakat yang dapat menunjukkan bukti unggah akan tetap dianggap telah mendaftar.",
      "Mengarahkan masyarakat langsung kepada unit teknis karena keputusan mengenai status pendaftaran bukan kewenangan Anda.",
      "Mendata kendala dan bukti yang dimiliki masyarakat, menjelaskan batas kewenangan Anda, serta meneruskannya melalui mekanisme resmi kepada pihak yang berwenang."
    ],
    "scores": [
      2,
      4,
      1,
      3,
      5
    ],
    "explanation": "E (5) paling lengkap karena menggabungkan pencatatan, transparansi, bantuan konkret, dan kepatuhan terhadap batas kewenangan.\n\nA (2) aman tetapi terlalu pasif.\n\nB (4) sudah proaktif, tetapi belum memastikan masyarakat memahami apa yang terjadi.\n\nC (1) sangat membantu secara emosional, tetapi petugas tidak berwenang menjamin status pendaftaran.\n\nD (3) benar dari sisi kewenangan, tetapi terlalu cepat melepaskan masyarakat tanpa membantu proses pengaduannya."
  },
  {
    "prompt": "Anda bertugas di pusat pelayanan yang hanya memiliki beberapa petugas. Pada saat yang sama, satu petugas sedang menangani kasus kompleks yang membutuhkan kewenangan khusus. Antrean pemohon terus bertambah dan sebagian besar pemohon sebenarnya memiliki kebutuhan sederhana yang dapat diselesaikan dengan cepat. Prioritas tindakan yang harus Anda lakukan adalah…",
    "choices": [
      "Meminta petugas yang menangani kasus kompleks mempercepat pekerjaannya agar dapat segera kembali membantu antrean.",
      "Mengambil alih pelayanan sebanyak mungkin agar antrean segera berkurang meskipun beberapa bagian perlu dikonsultasikan kemudian.",
      "Mempertahankan seluruh antrean sesuai satu alur agar tidak ada pemohon yang merasa memperoleh perlakuan berbeda.",
      "Mengelompokkan pemohon berdasarkan jenis kebutuhan dan menangani layanan sederhana yang berada dalam kewenangan Anda, sementara kasus kompleks tetap ditangani petugas terkait.",
      "Menghentikan penerimaan pemohon baru sementara sampai kasus kompleks selesai agar kualitas pelayanan tetap terjaga."
    ],
    "scores": [
      3,
      2,
      4,
      5,
      1
    ],
    "explanation": "D (5) paling tepat karena menggunakan sumber daya yang tersedia secara optimal tanpa melampaui kewenangan. Layanan sederhana tetap berjalan sementara kasus khusus ditangani oleh petugas yang tepat.\n\nA (3) dapat mempercepat antrean, tetapi berpotensi menurunkan ketelitian kasus kompleks.\n\nB (2) proaktif tetapi berisiko melampaui kompetensi atau kewenangan.\n\nC (4) menjamin konsistensi antrean tetapi tidak memanfaatkan kapasitas petugas secara optimal.\n\nE (1) menjaga kualitas tetapi terlalu mengorbankan akses masyarakat."
  },
  {
    "prompt": "Seorang pemohon meminta agar berkasnya diproses lebih cepat karena mengaku mengenal pejabat di instansi Anda. Ia tidak meminta Anda secara terang-terangan melanggar aturan, tetapi berharap memperoleh perlakuan khusus. Antrean saat itu cukup panjang. Sikap yang sebaiknya Anda ambil adalah…",
    "choices": [
      "Menjelaskan bahwa seluruh pemohon mengikuti mekanisme yang sama dan menawarkan bantuan untuk memastikan berkasnya tidak memiliki kekurangan.",
      "Tetap memproses sesuai antrean tetapi memberikan perhatian lebih agar berkas tersebut tidak mengalami hambatan.",
      "Meminta pemohon menunjukkan bukti bahwa dirinya memang memiliki hubungan dengan pejabat tersebut sebelum menentukan tindak lanjut.",
      "Menolak permintaan tersebut dan meminta pemohon kembali mengikuti prosedur tanpa membahas alasan permintaannya.",
      "Menanyakan apakah terdapat dasar resmi yang memungkinkan prioritas diberikan dan, jika tidak ada, mengarahkan pemohon mengikuti mekanisme yang berlaku."
    ],
    "scores": [
      5,
      3,
      1,
      2,
      4
    ],
    "explanation": "A (5) paling ideal karena menolak perlakuan khusus secara halus sekaligus tetap memberikan pelayanan yang dapat membantu pemohon. Fokusnya adalah kualitas berkas, bukan hubungan pribadi.\n\nB (3) terlihat membantu, tetapi perhatian khusus dapat menciptakan perlakuan berbeda.\n\nC (1) justru memberi ruang bagi hubungan pribadi menjadi pertimbangan.\n\nD (2) tegas, tetapi kurang solutif dan dapat membuat komunikasi menjadi tidak perlu konfrontatif.\n\nE (4) sangat baik karena menguji dasar resmi, tetapi A lebih langsung memberikan bantuan konkret kepada pemohon."
  },
  {
    "prompt": "Anda bertugas sebagai petugas informasi. Seorang warga datang membawa dokumen yang belum lengkap karena tidak memahami informasi pada situs pelayanan. Salah satu dokumen yang kurang sebenarnya dapat diperoleh secara elektronik dari layanan pemerintah lainnya. Tindakan yang paling tepat adalah…",
    "choices": [
      "Menjelaskan bahwa dokumen tersebut wajib tersedia dan meminta warga kembali setelah seluruh persyaratan lengkap.",
      "Membantu warga memahami dokumen yang kurang serta menunjukkan mekanisme memperoleh dokumen elektronik tersebut jika layanan memang tersedia.",
      "Menghubungi unit penerbit dokumen terlebih dahulu untuk memastikan mekanisme memperoleh dokumen tersebut.",
      "Memberikan informasi mengenai dokumen yang kurang dan meminta warga mengurusnya sendiri melalui layanan yang tersedia.",
      "Membantu warga sampai memahami langkah memperoleh dokumen tersebut, kemudian memastikan ia mengetahui tahapan berikutnya dalam proses pelayanan."
    ],
    "scores": [
      2,
      5,
      4,
      3,
      1
    ],
    "explanation": "B (5) paling tepat karena memberikan bantuan konkret yang masih berada dalam fungsi petugas informasi. Warga tidak sekadar diberi tahu kekurangannya, tetapi diarahkan pada solusi yang tersedia.\n\nA (2) sesuai persyaratan tetapi kurang solutif.\n\nC (4) sangat hati-hati, tetapi mungkin tidak diperlukan apabila mekanisme sudah tersedia dan dapat dijelaskan.\n\nD (3) informatif tetapi masih membebankan penyelesaian kepada masyarakat.\n\nE (1) terdengar sangat membantu, tetapi “sampai memahami” dan pendampingan penuh dapat menghabiskan sumber daya yang tidak diperlukan."
  },
  {
    "prompt": "Anda mengetahui bahwa seorang rekan kerja beberapa kali memberikan informasi persyaratan yang sudah tidak sesuai dengan ketentuan terbaru. Beberapa warga akhirnya harus kembali karena membawa dokumen yang keliru. Rekan tersebut lebih senior dan cukup berpengalaman. Apa yang sebaiknya Anda lakukan?",
    "choices": [
      "Mengoreksi informasi tersebut setiap kali Anda menemukan masyarakat yang menerima informasi keliru.",
      "Menyampaikan masalah tersebut kepada atasan agar dapat dilakukan evaluasi terhadap petugas yang bersangkutan.",
      "Mengingatkan rekan tersebut secara pribadi dan mengusulkan penyamaan informasi agar kesalahan tidak berulang.",
      "Memberikan informasi yang benar kepada masyarakat yang Anda layani dan tidak mencampuri cara kerja rekan tersebut.",
      "Mengumpulkan beberapa contoh kesalahan informasi kemudian menyampaikannya dalam evaluasi unit."
    ],
    "scores": [
      4,
      3,
      5,
      1,
      2
    ],
    "explanation": "C (5) paling ideal karena menyelesaikan masalah pada sumbernya secara konstruktif sekaligus mendorong konsistensi informasi.\n\nA (4) melindungi masyarakat secara langsung tetapi bersifat reaktif.\n\nB (3) dapat dilakukan jika masalah berulang, tetapi eskalasi langsung belum tentu menjadi langkah pertama terbaik.\n\nD (1) menjaga batas pekerjaan pribadi tetapi membiarkan masalah berulang.\n\nE (2) berguna untuk evaluasi, tetapi penyelesaian langsung dengan rekan lebih proporsional terlebih dahulu."
  },
  {
    "prompt": "Menjelang akhir jam pelayanan, antrean masih panjang. Sebagian pemohon hanya membutuhkan informasi sederhana, sedangkan pemohon lainnya membutuhkan pemeriksaan dokumen yang lebih lama. Jika seluruh pelayanan dilakukan dengan durasi yang sama, kemungkinan sebagian masyarakat tidak terlayani. Respons yang paling efektif adalah…",
    "choices": [
      "Mempercepat seluruh pemeriksaan agar jumlah masyarakat yang terlayani sebanyak mungkin.",
      "Mempertahankan durasi pelayanan normal karena ketelitian tidak boleh dikurangi.",
      "Mengumumkan kepada masyarakat bahwa pelayanan akan berakhir sesuai jadwal sehingga mereka dapat menentukan apakah tetap menunggu.",
      "Memprioritaskan layanan yang membutuhkan waktu paling singkat agar antrean cepat berkurang.",
      "Mengidentifikasi layanan yang dapat diproses lebih cepat tanpa mengurangi pemeriksaan penting, kemudian mengatur alur pelayanan secara proporsional."
    ],
    "scores": [
      3,
      2,
      1,
      4,
      5
    ],
    "explanation": "E (5) paling tepat karena menyeimbangkan kecepatan dengan kualitas. Bukan sekadar mempercepat semua layanan, melainkan mengidentifikasi proses yang memang dapat dibuat lebih efisien.\n\nA (3) efisien tetapi berisiko mengurangi ketelitian.\n\nB (2) menjaga kualitas tetapi kurang adaptif terhadap kondisi.\n\nC (1) transparan tetapi bukan solusi.\n\nD (4) cukup efektif, tetapi jika diterapkan tanpa kriteria yang jelas dapat mengganggu keadilan pelayanan."
  },
  {
    "prompt": "Seorang warga mengunggah keluhan mengenai pelayanan instansi Anda di media sosial. Keluhan tersebut mendapat banyak respons. Setelah diperiksa, sebagian informasi benar tetapi sebagian lainnya tidak sesuai fakta. Anda bukan petugas yang memiliki kewenangan memberikan pernyataan resmi atas nama instansi. Tindakan yang paling tepat adalah…",
    "choices": [
      "Tidak memberikan tanggapan karena Anda tidak memiliki kewenangan berbicara atas nama instansi.",
      "Menghubungi warga secara pribadi untuk meminta klarifikasi agar masalah tidak berkembang.",
      "Membalas unggahan dengan fakta yang Anda ketahui agar masyarakat tidak mendapatkan informasi keliru.",
      "Mengumpulkan informasi mengenai kasus tersebut dan meneruskannya kepada pihak yang memiliki kewenangan menangani komunikasi publik.",
      "Melaporkan unggahan tersebut kepada atasan dan menunggu arahan sebelum melakukan tindakan lebih lanjut."
    ],
    "scores": [
      2,
      3,
      1,
      5,
      4
    ],
    "explanation": "D (5) paling ideal karena memastikan informasi yang benar tersedia bagi pihak yang berwenang tanpa membuat petugas melampaui kewenangan komunikasi publik.\n\nA (2) aman tetapi terlalu pasif.\n\nB (3) dapat membantu klarifikasi tetapi tidak menggantikan mekanisme komunikasi resmi.\n\nC (1) berniat meluruskan fakta tetapi berisiko memberikan pernyataan atas nama instansi.\n\nE (4) tepat untuk eskalasi, tetapi D lebih lengkap karena informasi faktual langsung disiapkan untuk pihak yang menangani."
  },
  {
    "prompt": "Seorang warga berulang kali menanyakan status pengajuan bantuan sosialnya. Sistem menunjukkan bahwa berkas masih dalam proses verifikasi. Ia meminta Anda memberikan kepastian kapan bantuan akan diterima karena kondisi ekonominya sedang sulit. Sikap yang sebaiknya Anda ambil adalah…",
    "choices": [
      "Menjelaskan bahwa proses masih berjalan dan meminta warga menunggu sampai keputusan selesai.",
      "Menghubungi unit verifikasi untuk meminta agar berkas warga tersebut segera diperiksa karena sudah beberapa kali menanyakan.",
      "Memberikan perkiraan waktu berdasarkan pengalaman agar warga memiliki gambaran kapan bantuan kemungkinan diterima.",
      "Menjelaskan status yang dapat diketahui, tahapan berikutnya, serta informasi yang belum dapat dipastikan tanpa memberikan janji.",
      "Mencatat kontak warga dan berjanji memberikan informasi setelah keputusan tersedia."
    ],
    "scores": [
      3,
      4,
      1,
      5,
      2
    ],
    "explanation": "D (5) paling tepat karena transparan dan tidak menciptakan harapan yang belum dapat dijamin. Masyarakat tetap memperoleh informasi mengenai posisi prosesnya.\n\nA (3) benar tetapi terlalu singkat.\n\nB (4) proaktif, tetapi tidak otomatis dapat dibenarkan jika tidak terdapat dasar untuk memprioritaskan berkas.\n\nC (1) dapat menenangkan warga tetapi berisiko menjadi janji tidak resmi.\n\nE (2) membantu tindak lanjut tetapi belum memberikan informasi yang dibutuhkan saat itu."
  },
  {
    "prompt": "Seorang warga datang mengurus dokumen penting. Ia membawa sebagian besar persyaratan, tetapi satu dokumen wajib belum tersedia. Ia menjelaskan bahwa dokumen tersebut baru dapat diperoleh beberapa hari lagi dan meminta Anda tetap memproses permohonannya. Langkah yang paling tepat adalah…",
    "choices": [
      "Membantu warga mencari mekanisme resmi untuk memperoleh dokumen tersebut lebih cepat sebelum menentukan apakah proses dapat dilanjutkan.",
      "Meminta persetujuan atasan agar persyaratan tersebut dapat dikecualikan karena kondisi warga mendesak.",
      "Menjelaskan bahwa dokumen tersebut wajib dilengkapi dan meminta warga kembali setelah seluruh persyaratan tersedia.",
      "Tetap menerima berkas agar proses awal dapat dilakukan sambil menunggu dokumen dilengkapi.",
      "Mengarahkan warga langsung kepada unit penerbit dokumen tersebut agar kebutuhan administratifnya segera diselesaikan."
    ],
    "scores": [
      5,
      4,
      3,
      2,
      1
    ],
    "explanation": "A (5) paling ideal karena tidak melanggar persyaratan tetapi tetap aktif mencari solusi yang sah.\n\nB (4) tepat apabila memang tersedia ruang pengecualian, tetapi belum tentu perlu dilakukan.\n\nC (3) benar secara prosedural tetapi kurang membantu.\n\nD (2) berisiko menimbulkan masalah administratif karena persyaratan belum lengkap.\n\nE (1) hanya memindahkan masyarakat ke unit lain tanpa memastikan alternatif penyelesaian yang paling tepat."
  },
  {
    "prompt": "Jumlah petugas di unit Anda berkurang karena beberapa pegawai sedang mengikuti kegiatan dinas. Antrean masyarakat meningkat. Sebagian pemohon hanya membutuhkan informasi singkat, sedangkan lainnya membutuhkan pemeriksaan dokumen. Anda harus menentukan pola pelayanan agar kondisi tidak semakin buruk. Prioritas tindakan yang paling tepat adalah…",
    "choices": [
      "Melayani berdasarkan urutan kedatangan secara ketat agar seluruh pemohon mendapatkan perlakuan yang sama.",
      "Meminta pemohon dengan kebutuhan sederhana menunggu agar seluruh pelayanan tetap menggunakan satu alur.",
      "Mengalihkan layanan informasi sederhana kepada petugas yang tersedia agar petugas pemeriksa dapat fokus pada proses yang membutuhkan waktu lebih lama.",
      "Mendahulukan pemohon yang prosesnya paling singkat agar antrean cepat berkurang.",
      "Membagi alur berdasarkan jenis kebutuhan dengan tetap mempertahankan prioritas yang memang ditetapkan dalam ketentuan pelayanan."
    ],
    "scores": [
      4,
      2,
      3,
      1,
      5
    ],
    "explanation": "E (5) paling ideal karena memadukan efisiensi dengan keadilan. Pemisahan alur dilakukan berdasarkan kebutuhan, bukan berdasarkan kepentingan pribadi.\n\nA (4) sangat adil tetapi kurang efisien.\n\nB (2) tidak memanfaatkan perbedaan jenis layanan.\n\nC (3) baik secara pembagian tugas tetapi belum tentu menyelesaikan masalah alur secara keseluruhan.\n\nD (1) mengejar pengurangan antrean tanpa mempertimbangkan prinsip prioritas."
  },
  {
    "prompt": "Seorang warga mengeluhkan bahwa petugas sebelumnya berbicara dengan nada kurang ramah. Setelah diperiksa, informasi yang diberikan petugas tersebut sebenarnya benar. Namun, cara penyampaiannya membuat warga merasa tidak dihargai. Petugas tersebut merupakan rekan kerja Anda yang lebih senior. Tindakan yang paling tepat adalah…",
    "choices": [
      "Menjelaskan kepada warga bahwa informasi yang diberikan petugas sebenarnya sudah benar sehingga masalah tidak perlu diperpanjang.",
      "Meminta maaf atas pengalaman warga dan memastikan kebutuhan informasinya telah terpenuhi.",
      "Menyampaikan keluhan tersebut kepada atasan karena perilaku petugas dapat memengaruhi citra instansi.",
      "Menangani kebutuhan warga terlebih dahulu, kemudian menyampaikan masukan kepada rekan secara pribadi mengenai cara komunikasi yang perlu diperbaiki.",
      "Meminta rekan tersebut memberikan penjelasan kembali kepada warga agar tidak terjadi kesalahpahaman."
    ],
    "scores": [
      1,
      4,
      3,
      5,
      2
    ],
    "explanation": "D (5) paling komprehensif karena menyelesaikan kebutuhan masyarakat sekaligus memperbaiki sumber persoalan melalui komunikasi internal yang konstruktif.\n\nA (1) benar dari sisi substansi informasi tetapi mengabaikan pengalaman pengguna.\n\nB (4) empatik dan tepat untuk meredakan situasi, tetapi belum mencegah masalah terulang.\n\nC (3) dapat dilakukan jika masalah serius atau berulang, tetapi belum menjadi langkah pertama.\n\nE (2) berpotensi memperpanjang situasi dan menempatkan warga kembali pada interaksi yang dikeluhkan."
  },
  {
    "prompt": "Sistem pelayanan baru saja kembali normal setelah mengalami gangguan. Banyak masyarakat mencoba mengakses layanan secara bersamaan. Sebagian masyarakat yang sebelumnya gagal mengunggah dokumen meminta petugas memprosesnya secara manual agar tidak perlu mengulang. Respons yang paling efektif adalah…",
    "choices": [
      "Memproses secara manual masyarakat yang sebelumnya gagal agar mereka tidak dirugikan akibat gangguan sistem.",
      "Meminta semua masyarakat kembali menggunakan sistem sesuai prosedur agar pencatatan tetap konsisten.",
      "Memberikan panduan kepada masyarakat yang mengalami kendala agar mereka dapat mengulangi proses secara mandiri.",
      "Memprioritaskan masyarakat yang gagal akibat gangguan karena mereka telah menunggu lebih lama.",
      "Mengidentifikasi masyarakat yang benar-benar terdampak gangguan, membantu kendala teknis yang tersedia, dan mengarahkan proses melalui mekanisme resmi."
    ],
    "scores": [
      3,
      2,
      4,
      1,
      5
    ],
    "explanation": "E (5) paling tepat karena memberikan perhatian khusus kepada masyarakat terdampak tanpa membuat jalur manual yang belum tentu diperbolehkan.\n\nA (3) sangat membantu tetapi berpotensi mengubah mekanisme.\n\nB (2) konsisten secara prosedural tetapi kurang responsif.\n\nC (4) baik dan aman, tetapi belum secara khusus memastikan masyarakat yang terdampak memperoleh solusi paling tepat.\n\nD (1) berorientasi pada keadilan menurut persepsi, tetapi prioritas harus memiliki dasar yang jelas."
  },
  {
    "prompt": "Anda menemukan papan pengumuman pelayanan yang masih memuat persyaratan lama. Beberapa warga datang berdasarkan informasi tersebut dan baru mengetahui adanya perubahan ketika berada di loket. Mengubah materi resmi secara sepihak bukan bagian dari kewenangan Anda. Tindakan yang paling tepat adalah…",
    "choices": [
      "Menghapus pengumuman lama agar tidak semakin banyak masyarakat memperoleh informasi yang salah.",
      "Menjelaskan persyaratan terbaru kepada masyarakat yang datang dan melaporkan ketidaksesuaian materi kepada pihak yang bertanggung jawab.",
      "Membiarkan pengumuman sampai ada instruksi resmi agar Anda tidak melakukan perubahan di luar kewenangan.",
      "Menambahkan catatan informasi terbaru di bawah pengumuman lama sambil menunggu materi resmi diperbarui.",
      "Meminta petugas administrasi mengganti pengumuman tersebut karena informasi lama sudah tidak relevan."
    ],
    "scores": [
      4,
      5,
      1,
      3,
      2
    ],
    "explanation": "B (5) paling ideal karena langsung melindungi masyarakat dari informasi yang keliru sekaligus melaporkan masalah melalui jalur yang sesuai.\n\nA (4) cepat mengatasi masalah tetapi dapat melampaui kewenangan.\n\nC (1) aman bagi petugas tetapi membiarkan masyarakat terus menerima informasi salah.\n\nD (3) praktis tetapi belum tentu memiliki status resmi.\n\nE (2) proaktif tetapi belum memastikan petugas administrasi memiliki kewenangan mengubah materi resmi."
  },
  {
    "prompt": "Seorang warga marah karena permohonannya ditolak. Setelah diperiksa, keputusan penolakan memang sesuai hasil verifikasi. Namun, warga tersebut mengaku tidak memahami alasan penolakan dan tidak mengetahui apakah masih ada kesempatan memperbaiki kekurangannya. Tindakan yang paling tepat adalah…",
    "choices": [
      "Menjelaskan bahwa keputusan sudah sesuai hasil verifikasi sehingga tidak dapat diubah.",
      "Meminta warga mengajukan keberatan secara tertulis agar proses dapat ditangani melalui mekanisme resmi.",
      "Menjelaskan dasar penolakan, memastikan warga memahami kekurangannya, dan menunjukkan langkah yang tersedia apabila terdapat mekanisme perbaikan atau pengajuan ulang.",
      "Meminta atasan menjelaskan keputusan karena warga sudah dalam kondisi emosional.",
      "Menjelaskan prosedur keberatan dan meminta warga menentukan apakah akan menerima keputusan atau mengajukan proses lanjutan."
    ],
    "scores": [
      3,
      2,
      5,
      1,
      4
    ],
    "explanation": "C (5) paling ideal karena memberikan penjelasan substantif sekaligus solusi. Petugas tidak mengubah keputusan, tetapi memastikan masyarakat memahami alasan dan pilihan yang tersedia.\n\nA (3) benar tetapi terlalu singkat.\n\nB (2) menyediakan jalur formal tetapi tidak menjelaskan akar masalah.\n\nD (1) terlalu cepat melakukan eskalasi dan tidak memanfaatkan kewenangan yang\n\ndimiliki untuk menjelaskan.\n\nE (4) sangat baik karena memberikan pilihan prosedural, tetapi C lebih lengkap karena memastikan warga memahami kekurangannya."
  },
  {
    "prompt": "Atasan meminta Anda mempercepat satu berkas karena pemohon dianggap memiliki kebutuhan mendesak. Setelah Anda periksa, kebutuhan tersebut memang penting, tetapi tidak ditemukan ketentuan yang secara otomatis memberikan prioritas. Antrean masyarakat lain cukup panjang. Keputusan yang paling tepat adalah…",
    "choices": [
      "Memproses berkas tersebut terlebih dahulu karena instruksi atasan merupakan bagian dari tanggung jawab pekerjaan.",
      "Memproses sesuai antrean tetapi memastikan tidak ada penundaan yang sebenarnya tidak diperlukan.",
      "Menjelaskan kepada atasan bahwa perlakuan khusus dapat menimbulkan ketidakadilan dan meminta agar berkas tetap mengikuti antrean.",
      "Menanyakan kepada atasan apakah terdapat dasar resmi atau kewenangan tertentu yang memungkinkan berkas tersebut diberikan prioritas.",
      "Mengutamakan berkas tersebut tetapi memastikan masyarakat lain memperoleh penjelasan mengenai alasan prioritas."
    ],
    "scores": [
      2,
      4,
      3,
      5,
      1
    ],
    "explanation": "D (5) paling tepat karena tidak langsung menolak instruksi atasan, tetapi memastikan prioritas memiliki dasar yang dapat dipertanggungjawabkan.\n\nA (2) menunjukkan kepatuhan tetapi mengabaikan potensi ketidakadilan.\n\nB (4) menjaga antrean dan tetap efisien, tetapi belum menyelesaikan permintaan atasan secara langsung.\n\nC (3) menjaga keadilan tetapi terlalu cepat menyimpulkan bahwa prioritas pasti tidak dapat dilakukan.\n\nE (1) transparan tetapi tetap memberikan perlakuan khusus tanpa dasar yang jelas."
  },
  {
    "prompt": "Anda sedang mendampingi seorang pengguna layanan yang kesulitan memahami formulir. Pada saat yang sama, antrean semakin panjang. Sebagian besar bagian formulir sebenarnya dapat diisi sendiri oleh pengguna jika memperoleh penjelasan yang tepat. Apa yang sebaiknya dilakukan?",
    "choices": [
      "Mengisi formulir bersama pengguna sampai seluruh bagian selesai agar tidak terjadi kesalahan.",
      "Meminta pengguna mengisi sendiri terlebih dahulu kemudian membantu jika terdapat kesalahan.",
      "Meminta petugas lain mendampingi pengguna tersebut sementara Anda melanjutkan pelayanan antrean.",
      "Memberikan penjelasan singkat kepada pengguna mengenai seluruh formulir agar ia dapat menyelesaikannya secara mandiri.",
      "Mengidentifikasi bagian yang paling sulit, memberikan pendampingan pada bagian tersebut, kemudian membiarkan pengguna menyelesaikan bagian yang sudah dipahaminya."
    ],
    "scores": [
      4,
      2,
      3,
      1,
      5
    ],
    "explanation": "E (5) paling tepat karena bantuan diberikan secara proporsional. Pengguna memperoleh pendampingan pada bagian yang benar-benar sulit tanpa membuat petugas mengambil alih seluruh pekerjaan.\n\nA (4) sangat membantu tetapi kurang efisien.\n\nB (2) efisien tetapi terlalu sedikit memberikan dukungan.\n\nC (3) baik jika petugas lain tersedia, tetapi tidak selalu memungkinkan.\n\nD (1) efisien tetapi terlalu umum dan belum tentu menjawab kesulitan pengguna."
  },
  {
    "prompt": "Pada akhir hari pelayanan, Anda menyadari bahwa seorang pemohon memperoleh informasi yang keliru dari petugas lain. Akibatnya, ia membawa dokumen yang sebenarnya tidak diperlukan dan tidak membawa dokumen yang justru wajib. Pemohon sudah menunggu cukup lama dan harus mengeluarkan biaya transportasi untuk datang ke kantor. Tindakan yang paling ideal adalah…",
    "choices": [
      "Meminta maaf atas informasi yang keliru dan menjelaskan dokumen yang benar agar pemohon dapat kembali pada kesempatan berikutnya.",
      "Menghubungi petugas yang sebelumnya memberikan informasi untuk mencari kemungkinan agar pemohon tetap dapat dilayani.",
      "Memeriksa apakah bagian proses yang tidak bergantung pada dokumen tersebut masih dapat dilakukan hari itu sesuai ketentuan.",
      "Meminta atasan menentukan apakah terdapat kebijakan khusus karena kesalahan informasi berasal dari petugas.",
      "Memeriksa kemungkinan penyelesaian yang masih dapat dilakukan, menjelaskan kekurangan yang wajib dipenuhi, dan memberikan langkah lanjutan yang paling jelas agar pemohon tidak kembali mengalami kesalahan yang sama."
    ],
    "scores": [
      3,
      4,
      2,
      1,
      5
    ],
    "explanation": "E (5) paling ideal karena tidak langsung menyuruh masyarakat kembali. Petugas terlebih dahulu mencari bagian yang masih dapat diselesaikan, menjelaskan kekurangan, dan memastikan pemohon memahami langkah berikutnya.\n\nA (3) empatik dan informatif tetapi terlalu cepat mengasumsikan bahwa pemohon harus kembali.\n\nB (4) menunjukkan kolaborasi dan tanggung jawab, tetapi belum langsung memeriksa apa yang sebenarnya masih dapat diselesaikan.\n\nC (2) cukup solutif tetapi hanya berfokus pada proses hari itu dan belum memastikan pencegahan kesalahan berikutnya.\n\nD (1) dapat digunakan jika memang membutuhkan keputusan di luar kewenangan, tetapi terlalu cepat melakukan eskalasi."
  },
  {
    "prompt": "Anda bertugas di kantor pelayanan pajak daerah. Seorang wajib pajak datang untuk melakukan pembayaran sebelum batas waktu. Setelah diperiksa, sistem menunjukkan adanya perbedaan data antara identitas wajib pajak dan data objek pajak. Wajib pajak merasa data tersebut seharusnya benar karena tahun sebelumnya ia dapat melakukan pembayaran tanpa kendala. Antrean di loket juga cukup panjang. Langkah pertama yang paling tepat adalah…",
    "choices": [
      "Memeriksa sumber perbedaan data dan menjelaskan kepada wajib pajak bagian yang perlu diklarifikasi sebelum pembayaran dilanjutkan.",
      "Meminta wajib pajak melakukan pembayaran terlebih dahulu agar tidak melewati batas waktu, kemudian menyelesaikan perbedaan data setelahnya.",
      "Mengarahkan wajib pajak ke bagian pengaduan atau verifikasi data karena persoalan tersebut tidak dapat diselesaikan di loket pembayaran.",
      "Meminta wajib pajak menunjukkan bukti pembayaran tahun sebelumnya sebagai dasar untuk memastikan bahwa data lama dapat digunakan.",
      "Menghubungi petugas pengelola data untuk memastikan apakah perbedaan tersebut merupakan kesalahan sistem sebelum menentukan langkah berikutnya."
    ],
    "scores": [
      5,
      2,
      3,
      4,
      1
    ],
    "explanation": "A (5) paling tepat karena petugas terlebih dahulu memahami sumber masalah sebelum mengambil tindakan. Hal ini mencegah pembayaran menggunakan data yang belum terverifikasi sekaligus memberikan penjelasan kepada masyarakat.\n\nB (2) mengutamakan batas waktu, tetapi berisiko menimbulkan masalah administrasi.\n\nC (3) sesuai pembagian kewenangan, tetapi terlalu cepat mengalihkan pemohon sebelum masalah diidentifikasi.\n\nD (4) merupakan langkah klarifikasi yang baik, tetapi bukti lama belum tentu menyelesaikan perbedaan data saat ini.\n\nE (1) menunjukkan kehati-hatian, tetapi terlalu bergantung pada petugas lain sebelum melakukan pemeriksaan awal yang sebenarnya dapat dilakukan sendiri."
  },
  {
    "prompt": "Anda bekerja pada layanan kesehatan milik pemerintah. Seorang pasien datang tanpa membawa salah satu dokumen administrasi yang biasanya diperlukan. Ia mengatakan bahwa dokumen tersebut tertinggal di rumah dan meminta tetap dilayani karena kondisinya cukup mendesak. Petugas administrasi harus tetap memastikan ketertiban data pelayanan. Tindakan yang paling tepat adalah…",
    "choices": [
      "Meminta pasien melengkapi dokumen terlebih dahulu agar seluruh proses administrasi berjalan sesuai ketentuan.",
      "Memeriksa apakah kondisi pasien dan jenis layanan yang dibutuhkan memungkinkan adanya mekanisme pelayanan terlebih dahulu dengan melengkapi administrasi sesuai prosedur.",
      "Meminta keluarga pasien mengambil dokumen tersebut sebelum proses dilanjutkan.",
      "Menghubungi petugas yang berwenang untuk memastikan mekanisme administrasi yang dapat digunakan dalam kondisi tersebut.",
      "Melayani pasien terlebih dahulu tanpa mempermasalahkan dokumen karena kebutuhan kesehatan lebih penting daripada administrasi."
    ],
    "scores": [
      3,
      5,
      2,
      4,
      1
    ],
    "explanation": "B (5) paling ideal karena tidak langsung mengabaikan persyaratan, tetapi juga tidak membiarkan kebutuhan mendesak terhambat secara administratif. Petugas terlebih dahulu melihat mekanisme yang memang tersedia.\n\nA (3) tertib tetapi terlalu kaku jika terdapat prosedur khusus untuk kondisi mendesak.\n\nC (2) cukup aman tetapi dapat menunda pelayanan.\n\nD (4) sangat hati-hati dan tepat bila kewenangan belum jelas, tetapi B lebih berorientasi pada pencarian mekanisme penyelesaian.\n\nE (1) sangat responsif tetapi mengabaikan ketertiban administrasi tanpa memastikan dasar pengecualiannya."
  },
  {
    "prompt": "Anda bertugas pada pelayanan transportasi publik. Seorang penumpang lanjut usia salah menaiki jalur antrean digital sehingga nomor antreannya jauh tertinggal. Ia tidak memahami cara mengambil nomor baru dan meminta bantuan. Pada saat yang sama, banyak penumpang lain sedang menunggu. Respons yang paling tepat adalah…",
    "choices": [
      "Meminta penumpang tersebut mengikuti antrean sesuai nomor yang sudah diperoleh agar seluruh pengguna diperlakukan sama.",
      "Meminta petugas informasi membantu penumpang tersebut sementara Anda melanjutkan pelayanan utama.",
      "Membantu penumpang memahami kesalahannya dan mengarahkan mekanisme yang tersedia agar ia dapat memperoleh antrean yang sesuai tanpa mengambil alih hak pengguna lain.",
      "Memberikan nomor antrean baru secara manual agar penumpang tidak perlu mengulang proses.",
      "Meminta penumpang menunggu sampai antrean berkurang agar Anda dapat memberikan pendampingan lebih lama."
    ],
    "scores": [
      2,
      4,
      5,
      1,
      3
    ],
    "explanation": "C (5) paling ideal karena membantu kelompok yang kesulitan sekaligus menjaga mekanisme antrean. Petugas tidak langsung memberikan perlakuan khusus tanpa dasar.\n\nA (2) adil secara formal tetapi kurang responsif.\n\nB (4) merupakan solusi baik jika petugas lain tersedia, tetapi belum tentu diperlukan.\n\nD (1) cepat tetapi berpotensi mengubah urutan antrean secara tidak sah.\n\nE (3) memberi pendampingan tetapi justru menunda kebutuhan pengguna dan tidak menyelesaikan persoalan antreannya."
  },
  {
    "prompt": "Anda bekerja pada unit pelayanan pendidikan. Orang tua siswa datang karena ingin memperbaiki data nama anaknya yang berbeda antara dokumen sekolah dan dokumen kependudukan. Ia meminta perubahan dilakukan segera karena pendaftaran beasiswa akan ditutup dua hari lagi. Namun, perubahan data membutuhkan verifikasi dokumen tertentu. Keputusan yang paling tepat adalah…",
    "choices": [
      "Meminta orang tua menunggu sampai seluruh proses verifikasi selesai karena data resmi tidak boleh diubah secara terburu-buru.",
      "Membantu mengoreksi data sementara agar proses beasiswa tidak terhambat, kemudian melakukan verifikasi setelah pendaftaran selesai.",
      "Mengarahkan orang tua langsung ke instansi kependudukan karena sumber data berbeda berasal dari dokumen kependudukan.",
      "Memeriksa dokumen yang tersedia, menjelaskan tahapan verifikasi yang diperlukan, dan mencari bagian proses yang masih dapat dilakukan sebelum batas pendaftaran.",
      "Meminta persetujuan pimpinan untuk mempercepat perubahan data karena terdapat tenggat waktu beasiswa."
    ],
    "scores": [
      2,
      1,
      3,
      5,
      4
    ],
    "explanation": "D (5) paling tepat karena menggabungkan ketelitian data dengan upaya mencari solusi atas tenggat waktu. Petugas tidak mengubah data tanpa verifikasi, tetapi juga tidak berhenti pada penolakan.\n\nA (2) menjaga akurasi tetapi kurang solutif.\n\nB (1) sangat membantu dari sisi kecepatan tetapi berisiko membuat data resmi tidak valid.\n\nC (3) mungkin diperlukan jika koreksi memang berada pada instansi lain, tetapi perlu pemeriksaan awal terlebih dahulu.\n\nE (4) cukup baik apabila terdapat kewenangan percepatan, tetapi belum memastikan langkah yang dapat dilakukan pada tingkat pelayanan."
  },
  {
    "prompt": "Anda bertugas di pusat pelayanan terpadu. Seorang pemohon mengeluhkan bahwa informasi di situs resmi berbeda dengan informasi yang diberikan petugas loket. Setelah diperiksa, ternyata situs belum diperbarui, sedangkan petugas menggunakan ketentuan terbaru. Pemohon meminta kepastian informasi mana yang harus diikuti. Sikap yang paling tepat adalah…",
    "choices": [
      "Menjelaskan bahwa informasi petugas lebih terbaru dan meminta pemohon mengikuti arahan loket.",
      "Meminta pemohon mengikuti informasi di situs karena informasi tersebut merupakan sumber yang dapat diakses masyarakat.",
      "Menyampaikan ketentuan terbaru, mencatat adanya ketidaksesuaian informasi, dan meneruskannya kepada pihak yang bertanggung jawab memperbarui kanal resmi.",
      "Meminta pemohon menunggu sampai situs diperbarui agar tidak terjadi perbedaan informasi.",
      "Menyarankan pemohon menyimpan bukti informasi dari situs jika nantinya terjadi perbedaan dalam proses pelayanan."
    ],
    "scores": [
      4,
      2,
      5,
      1,
      3
    ],
    "explanation": "C (5) paling ideal karena menyelesaikan kebutuhan informasi saat itu sekaligus memperbaiki sumber masalah agar masyarakat lain tidak mengalami kebingungan yang sama.\n\nA (4) memberikan informasi terbaru tetapi tidak memperbaiki kanal resmi.\n\nB (2) tampak konsisten tetapi justru mempertahankan informasi yang sudah tidak sesuai.\n\nD (1) menunda pelayanan tanpa memberikan solusi.\n\nE (3) melindungi pemohon secara administratif tetapi tidak menyelesaikan ketidaksesuaian informasi."
  },
  {
    "prompt": "Anda bertugas pada pelayanan bantuan hukum pemerintah. Seorang warga datang membawa masalah yang sebenarnya berada di luar lingkup layanan unit Anda. Ia sudah menjelaskan persoalannya cukup panjang dan berharap Anda tetap membantu karena tidak mengetahui harus menghubungi siapa. Tindakan yang paling tepat adalah…",
    "choices": [
      "Menjelaskan batas layanan dan memberikan informasi mengenai lembaga atau unit yang sesuai dengan persoalannya.",
      "Mendengarkan permasalahannya secara lengkap dan mencoba memberikan saran hukum berdasarkan pengetahuan pribadi.",
      "Meminta masyarakat membuat surat permohonan agar unit Anda dapat menentukan apakah kasus tersebut dapat ditangani.",
      "Mengarahkan masyarakat ke unit lain tanpa perlu mendalami persoalannya karena kasus tersebut bukan kewenangan Anda.",
      "Membantu mengidentifikasi kebutuhan utamanya, menjelaskan batas kewenangan unit, kemudian memberikan rujukan yang paling relevan beserta informasi langkah berikutnya."
    ],
    "scores": [
      4,
      2,
      3,
      1,
      5
    ],
    "explanation": "E (5) paling baik karena tidak mengambil alih kewenangan, tetapi tetap membantu masyarakat menemukan jalur penyelesaian yang tepat.\n\nA (4) sudah baik tetapi kurang mendalam dalam memastikan rujukan benar-benar sesuai kebutuhan.\n\nB (2) empatik tetapi berisiko memberikan informasi di luar kompetensi dan kewenangan.\n\nC (3) formal tetapi dapat membebani masyarakat dengan proses yang tidak diperlukan.\n\nD (1) paling kurang membantu karena sekadar memindahkan masyarakat."
  },
  {
    "prompt": "Di sebuah kantor pelayanan, masyarakat mulai mengeluhkan bahwa nomor antrean tidak dipanggil sesuai urutan. Setelah Anda periksa, ternyata beberapa nomor terlewat karena masalah pada layar pemanggilan. Beberapa warga meminta langsung dipanggil agar tidak semakin lama menunggu. Apa yang sebaiknya dilakukan?",
    "choices": [
      "Memanggil nomor yang terlewat terlebih dahulu tanpa menjelaskan masalah agar antrean segera kembali normal.",
      "Mengidentifikasi nomor yang terdampak, menjelaskan kondisi kepada antrean, kemudian memulihkan urutan berdasarkan data antrean yang dapat diverifikasi.",
      "Memulai antrean baru agar tidak terjadi perdebatan mengenai nomor yang telah terlewat.",
      "Meminta seluruh masyarakat menunggu sampai sistem pemanggilan kembali normal.",
      "Meminta petugas lain mencatat nomor yang terlewat sambil Anda melanjutkan pemanggilan secara manual."
    ],
    "scores": [
      3,
      5,
      1,
      2,
      4
    ],
    "explanation": "B (5) paling ideal karena memperbaiki sistem sekaligus menjaga keadilan antrean berdasarkan data yang dapat diverifikasi.\n\nA (3) cepat tetapi dapat menimbulkan ketidakjelasan urutan.\n\nC (1) menyelesaikan masalah secara sederhana tetapi sangat merugikan masyarakat yang telah menunggu.\n\nD (2) terlalu pasif.\n\nE (4) cukup baik karena menggunakan pencatatan manual, tetapi B lebih menjamin transparansi dan pemulihan urutan secara sistematis."
  },
  {
    "prompt": "Anda bertugas melayani masyarakat di kantor kelurahan. Seorang warga datang meminta surat pengantar untuk keperluan tertentu. Setelah diperiksa, data alamatnya belum diperbarui meskipun ia mengaku sudah tinggal di wilayah tersebut selama beberapa tahun. Ia meminta Anda tetap menerbitkan surat karena dokumen tersebut dibutuhkan segera. Tindakan yang paling tepat adalah…",
    "choices": [
      "Memperbarui data secara langsung berdasarkan keterangan warga agar surat dapat segera diterbitkan.",
      "Menolak permohonan sampai data kependudukan benar-benar diperbarui melalui prosedur yang berlaku.",
      "Meminta warga membawa saksi atau dokumen tambahan yang dapat membuktikan tempat tinggalnya.",
      "Memeriksa dokumen yang tersedia, menjelaskan konsekuensi ketidaksesuaian data, dan membantu menentukan tahapan pembaruan yang diperlukan sebelum surat diterbitkan.",
      "Meminta warga mengurus perubahan data terlebih dahulu di instansi terkait tanpa memeriksa dokumen yang telah dibawanya."
    ],
    "scores": [
      1,
      3,
      4,
      5,
      2
    ],
    "explanation": "D (5) paling ideal karena tidak mengabaikan validitas data, tetapi juga memberikan bantuan agar masyarakat memahami cara menyelesaikan masalahnya.\n\nA (1) cepat tetapi sangat berisiko karena perubahan data tidak boleh hanya berdasarkan pernyataan lisan.\n\nB (3) aman secara prosedural tetapi kurang membantu.\n\nC (4) cukup baik untuk verifikasi, tetapi belum tentu merupakan persyaratan yang tepat.\n\nE (2) mengarahkan masyarakat tetapi tidak memanfaatkan kesempatan untuk memberikan pemeriksaan dan penjelasan yang lebih konkret."
  },
  {
    "prompt": "Anda bertugas pada layanan pengaduan masyarakat. Seorang warga melaporkan bahwa bantuan pemerintah yang diterimanya tidak sesuai dengan kondisi yang tercatat. Ia membawa beberapa dokumen pendukung, tetapi informasi dalam dokumen tersebut juga belum sepenuhnya konsisten. Respons yang paling tepat adalah…",
    "choices": [
      "Menerima pengaduan berdasarkan dokumen yang tersedia agar masyarakat tidak perlu kembali.",
      "Meminta warga melengkapi seluruh dokumen terlebih dahulu sebelum pengaduan dicatat.",
      "Mencatat pengaduan, memverifikasi informasi penting yang tersedia, dan menjelaskan dokumen tambahan yang mungkin diperlukan untuk proses pemeriksaan.",
      "Mengarahkan warga langsung kepada unit penyalur bantuan karena persoalan tersebut berkaitan dengan data penerima.",
      "Meminta warga menjelaskan kembali seluruh kronologi secara rinci sebelum menentukan apakah pengaduan dapat diterima."
    ],
    "scores": [
      4,
      2,
      5,
      1,
      3
    ],
    "explanation": "C (5) paling tepat karena pengaduan tetap diterima dan ditangani tanpa mengorbankan proses verifikasi. Masyarakat tidak dipaksa menyelesaikan seluruh bukti sebelum persoalannya dicatat.\n\nA (4) responsif tetapi berisiko jika dokumen yang ada langsung dianggap cukup.\n\nB (2) menjaga kelengkapan tetapi dapat menghambat akses pengaduan.\n\nD (1) terlalu cepat mengalihkan tanggung jawab.\n\nE (3) membantu memahami kasus tetapi berpotensi membuat proses awal terlalu panjang."
  },
  {
    "prompt": "Anda bekerja di layanan perizinan usaha. Seorang pelaku usaha kecil datang meminta bantuan karena tidak memahami istilah teknis pada formulir digital. Ia sudah mencoba beberapa kali tetapi selalu gagal mengirim permohonan. Antrean pengguna lain juga sedang meningkat. Tindakan yang paling tepat adalah…",
    "choices": [
      "Membantu mengidentifikasi bagian formulir yang menjadi hambatan dan menjelaskan cara mengisinya, kemudian membiarkan pemohon menyelesaikan bagian lainnya secara mandiri.",
      "Mengisi seluruh formulir untuk pemohon agar proses cepat selesai.",
      "Meminta pemohon membaca petunjuk penggunaan aplikasi terlebih dahulu agar tidak terlalu bergantung kepada petugas.",
      "Mengarahkan pemohon ke meja bantuan digital agar memperoleh pendampingan khusus.",
      "Menjelaskan secara umum cara menggunakan aplikasi dan meminta pemohon mencoba kembali dari awal."
    ],
    "scores": [
      5,
      2,
      1,
      4,
      3
    ],
    "explanation": "A (5) paling ideal karena memberikan bantuan tepat pada titik kesulitan tanpa mengambil alih seluruh proses. Hal ini mendukung kemandirian sekaligus mempercepat pelayanan.\n\nB (2) sangat cepat tetapi membuat pemohon bergantung pada petugas dan berpotensi menimbulkan kesalahan data.\n\nC (1) mendorong kemandirian tetapi kurang responsif terhadap hambatan nyata.\n\nD (4) tepat jika meja bantuan memang tersedia, tetapi A dapat menyelesaikan masalah lebih langsung.\n\nE (3) memberikan arahan tetapi terlalu umum."
  },
  {
    "prompt": "Anda bertugas pada pelayanan administrasi sekolah. Salah seorang orang tua siswa datang pada hari terakhir pengambilan dokumen kelulusan. Ia tidak membawa surat kuasa karena dokumen akan diambilkan oleh anggota keluarganya yang lain. Ia menjelaskan bahwa orang yang bersangkutan sudah berada di perjalanan dan tidak mungkin kembali mengambil dokumen tersebut. Sikap yang sebaiknya Anda ambil adalah…",
    "choices": [
      "Menyerahkan dokumen karena orang tua tersebut dapat menunjukkan identitas dan mengetahui data siswa.",
      "Menolak penyerahan sampai surat kuasa tersedia sesuai ketentuan.",
      "Menanyakan apakah terdapat mekanisme alternatif yang sah untuk membuktikan kewenangan pengambilan dokumen sebelum menentukan apakah dokumen dapat diserahkan.",
      "Meminta kepala sekolah memberikan persetujuan agar dokumen dapat diserahkan sebagai pengecualian.",
      "Meminta orang tua menunggu sampai anggota keluarga yang diberi tugas datang bersama dokumen pendukung."
    ],
    "scores": [
      2,
      4,
      5,
      3,
      1
    ],
    "explanation": "C (5) paling tepat karena mencari alternatif yang sah sebelum menolak atau menyerahkan dokumen. Petugas tetap menjaga keamanan dokumen sekaligus berusaha memberikan solusi.\n\nA (2) praktis tetapi berisiko terhadap keamanan dokumen.\n\nB (4) sangat aman tetapi belum mengeksplorasi alternatif yang mungkin tersedia.\n\nD (3) dapat menjadi pilihan jika kewenangan kepala sekolah memang relevan, tetapi belum menjadi langkah pertama.\n\nE (1) aman tetapi terlalu pasif dan belum mencari solusi."
  },
  {
    "prompt": "Di sebuah kantor pelayanan, Anda menemukan bahwa banyak masyarakat datang tanpa mengetahui bahwa beberapa layanan sudah berpindah ke sistem daring. Mereka baru mengetahuinya setelah tiba di kantor. Kondisi ini menyebabkan antrean informasi semakin panjang. Tindakan yang paling tepat adalah…",
    "choices": [
      "Memasang pemberitahuan di pintu masuk agar masyarakat mengetahui perubahan layanan.",
      "Menjelaskan kepada masyarakat bahwa informasi sebenarnya sudah tersedia di situs resmi.",
      "Meminta petugas keamanan mengarahkan masyarakat yang datang ke layanan daring.",
      "Membantu masyarakat yang datang memahami mekanisme baru, sekaligus menyampaikan temuan tersebut kepada pengelola informasi agar kanal komunikasi diperbaiki.",
      "Mengusulkan agar kantor tetap melayani secara manual karena banyak masyarakat belum memahami layanan daring."
    ],
    "scores": [
      4,
      2,
      3,
      5,
      1
    ],
    "explanation": "D (5) paling ideal karena menangani kebutuhan masyarakat saat ini sekaligus memperbaiki masalah komunikasi agar kejadian tidak berulang.\n\nA (4) merupakan mitigasi baik tetapi belum menyelesaikan persoalan informasi secara menyeluruh.\n\nB (2) benar tetapi terlalu menyalahkan ketidaktahuan masyarakat.\n\nC (3) membantu mengarahkan tetapi belum memperbaiki sumber masalah.\n\nE (1) mengutamakan kenyamanan tetapi berpotensi bertentangan dengan kebijakan digitalisasi layanan."
  },
  {
    "prompt": "Anda bertugas pada pelayanan perizinan bangunan. Seorang pemohon membawa rekomendasi dari pejabat lingkungan setempat dan meminta agar prosesnya dipercepat karena pembangunan akan segera dimulai. Setelah diperiksa, beberapa dokumen teknis belum lengkap. Keputusan yang paling tepat adalah…",
    "choices": [
      "Memproses bagian administrasi yang sudah lengkap sambil memberi waktu pemohon melengkapi dokumen teknis.",
      "Meminta pemohon melengkapi seluruh dokumen terlebih dahulu sebelum berkas diproses.",
      "Menjelaskan bahwa rekomendasi lingkungan tidak otomatis menggantikan dokumen teknis dan membantu pemohon mengetahui bagian yang masih harus dilengkapi.",
      "Menghubungi pejabat pemberi rekomendasi untuk meminta konfirmasi mengenai kelayakan berkas.",
      "Meminta pemohon melengkapi dokumen teknis secepatnya agar proses dapat segera dilanjutkan."
    ],
    "scores": [
      4,
      2,
      5,
      3,
      1
    ],
    "explanation": "C (5) paling tepat karena meluruskan persepsi pemohon sekaligus membantu mengidentifikasi kekurangan secara konkret.\n\nA (4) efisien tetapi perlu memastikan bahwa bagian administrasi memang dapat diproses terpisah.\n\nB (2) prosedural tetapi kurang membantu.\n\nD (3) dapat menjadi klarifikasi tambahan tetapi belum menyelesaikan kekurangan dokumen teknis.\n\nE (1) terlalu umum dan hanya meminta percepatan tanpa memberikan bantuan konkret."
  },
  {
    "prompt": "Anda bertugas pada pusat layanan informasi pemerintah. Seorang warga meminta data mengenai suatu program publik. Data tersebut tersedia, tetapi sebagian informasi termasuk data pribadi penerima manfaat sehingga tidak dapat diberikan secara terbuka. Pemohon berpendapat bahwa sebagai masyarakat ia berhak mengetahui seluruh data tersebut. Tindakan yang paling tepat adalah…",
    "choices": [
      "Memberikan seluruh data karena prinsip keterbukaan informasi harus diutamakan.",
      "Menolak seluruh permintaan agar tidak terjadi pelanggaran terhadap data pribadi.",
      "Meminta pemohon mengajukan permintaan tertulis agar permintaan dapat dipertimbangkan lebih lanjut.",
      "Menjelaskan bagian informasi yang dapat diberikan, alasan pembatasan data tertentu, serta alternatif informasi yang tetap dapat diakses masyarakat.",
      "Memberikan data penerima manfaat tanpa identitas lengkap agar kebutuhan informasi tetap terpenuhi."
    ],
    "scores": [
      1,
      2,
      3,
      5,
      4
    ],
    "explanation": "D (5) paling ideal karena menyeimbangkan keterbukaan informasi dengan perlindungan data pribadi. Pemohon tetap mendapatkan informasi yang memang dapat diberikan.\n\nA (1) terlalu mengutamakan keterbukaan dan mengabaikan perlindungan data.\n\nB (2) sangat aman tetapi terlalu membatasi hak informasi.\n\nC (3) formal tetapi belum memberikan solusi langsung.\n\nE (4) dapat menjadi alternatif jika anonimisasi memang diperbolehkan, tetapi D lebih lengkap karena menjelaskan batasan dan alternatif secara transparan."
  },
  {
    "prompt": "Anda bertugas pada layanan administrasi pertanahan. Seorang warga datang dengan dokumen lama yang menurutnya membuktikan kepemilikan tanah. Namun, terdapat perbedaan ukuran tanah antara dokumen tersebut dengan data terbaru. Warga meminta proses tetap dilanjutkan karena sudah lama menunggu. Apa tindakan yang paling tepat?",
    "choices": [
      "Memproses berdasarkan dokumen lama karena dokumen tersebut merupakan bukti yang dibawa warga.",
      "Menjelaskan perbedaan data dan membantu warga mengetahui dokumen atau verifikasi yang diperlukan untuk memastikan data yang benar sebelum proses dilanjutkan.",
      "Meminta warga membuat surat pernyataan bahwa ukuran tanah yang disampaikan adalah benar.",
      "Mengarahkan warga langsung kepada bagian pengukuran tanpa memeriksa dokumen lebih lanjut.",
      "Menghubungi petugas pengukuran untuk memastikan apakah perbedaan tersebut dapat diselesaikan tanpa meminta warga melengkapi dokumen tambahan."
    ],
    "scores": [
      2,
      5,
      1,
      3,
      4
    ],
    "explanation": "B (5) paling tepat karena tidak langsung memilih salah satu data, melainkan membantu memastikan dasar verifikasi yang diperlukan.\n\nA (2) praktis tetapi mengabaikan data terbaru.\n\nC (1) terlalu membebankan tanggung jawab kepada warga tanpa menyelesaikan perbedaan data.\n\nD (3) dapat diperlukan tetapi terlalu cepat mengalihkan proses.\n\nE (4) proaktif dan kolaboratif, tetapi perlu memastikan terlebih dahulu jenis verifikasi yang diperlukan."
  },
  {
    "prompt": "Anda bertugas di kantor pelayanan sosial. Seorang warga datang membawa seorang anggota keluarga yang memiliki keterbatasan dalam berkomunikasi. Proses wawancara membutuhkan informasi langsung dari orang tersebut. Keluarga meminta Anda hanya berbicara dengan pendamping agar proses lebih cepat. Tindakan yang paling tepat adalah…",
    "choices": [
      "Mengikuti permintaan keluarga agar proses wawancara dapat selesai lebih cepat.",
      "Meminta keluarga menjelaskan seluruh informasi karena mereka lebih memahami kondisi yang bersangkutan.",
      "Menunda proses sampai tersedia petugas khusus yang dapat membantu komunikasi.",
      "Menggunakan cara komunikasi yang memungkinkan, memberikan waktu yang cukup, dan melibatkan pendamping sejauh diperlukan tanpa menghilangkan kesempatan orang yang bersangkutan menyampaikan informasi.",
      "Meminta keluarga menyiapkan pernyataan tertulis agar wawancara tidak perlu dilakukan terlalu lama."
    ],
    "scores": [
      2,
      3,
      1,
      5,
      4
    ],
    "explanation": "D (5) paling ideal karena menghormati pengguna layanan sekaligus menjaga efektivitas komunikasi. Pendamping dapat membantu, tetapi tidak sepenuhnya menggantikan pihak yang dilayani.\n\nA (2) efisien tetapi mengurangi akses langsung pengguna.\n\nB (3) praktis tetapi dapat menghilangkan informasi langsung dari yang bersangkutan.\n\nC (1) sangat hati-hati tetapi dapat menunda pelayanan tanpa alasan yang cukup.\n\nE (4) dapat membantu dokumentasi tetapi belum tentu mampu menggantikan proses komunikasi yang diperlukan."
  },
  {
    "prompt": "Anda bekerja di unit pelayanan administrasi kendaraan. Seorang pemohon datang beberapa menit sebelum jam tutup dengan kondisi dokumen lengkap. Sistem pelayanan masih tersedia, tetapi waktu yang tersisa terbatas. Jika diproses seperti biasa, ada kemungkinan pelayanan melewati jam operasional. Tindakan yang paling tepat adalah…",
    "choices": [
      "Memproses permohonan sesuai standar selama sistem masih memungkinkan, sambil memastikan pemohon mengetahui kondisi waktu pelayanan.",
      "Meminta pemohon datang kembali keesokan hari karena waktu pelayanan hampir selesai.",
      "Mempercepat pemeriksaan agar permohonan dapat selesai sebelum kantor tutup.",
      "Meminta petugas lain mengambil alih agar proses dapat berlangsung lebih cepat.",
      "Memeriksa bagian yang dapat diproses sebelum penutupan, mempertahankan pemeriksaan penting, dan menjelaskan kepada pemohon bagian yang mungkin harus dilanjutkan sesuai mekanisme."
    ],
    "scores": [
      4,
      2,
      3,
      1,
      5
    ],
    "explanation": "E (5) paling ideal karena tidak mengorbankan pemeriksaan penting hanya demi mengejar waktu, tetapi juga berusaha memaksimalkan pelayanan yang masih dapat dilakukan.\n\nA (4) sangat baik dan menjaga standar, tetapi kurang eksplisit dalam mencari alternatif efisiensi.\n\nB (2) aman tetapi terlalu cepat menghentikan pelayanan.\n\nC (3) berorientasi hasil tetapi berisiko mengurangi ketelitian.\n\nD (1) belum tentu efektif karena petugas lain juga memiliki tugas dan kewenangan masing-masing."
  },
  {
    "prompt": "Anda bertugas di unit pelayanan kependudukan. Seorang warga menemukan bahwa nama pada dokumen digitalnya salah satu huruf dibandingkan dokumen fisik. Ia meminta Anda langsung memperbaikinya karena kesalahan tersebut tampaknya sangat kecil. Namun, perubahan data tetap memerlukan verifikasi. Keputusan yang paling tepat adalah…",
    "choices": [
      "Memperbaiki kesalahan tersebut secara langsung karena perbedaannya hanya satu huruf.",
      "Meminta warga mengajukan permohonan perubahan data sesuai prosedur.",
      "Memeriksa dokumen pembanding, menjelaskan bahwa perubahan perlu diverifikasi, dan membantu warga mengikuti tahapan yang diperlukan.",
      "Menghubungi petugas pengelola database agar perubahan dapat dilakukan lebih cepat.",
      "Meminta warga membawa dokumen asli dan kembali pada hari lain setelah dokumen diperiksa."
    ],
    "scores": [
      1,
      4,
      5,
      3,
      2
    ],
    "explanation": "C (5) paling tepat karena menggabungkan verifikasi, komunikasi, dan bantuan kepada masyarakat. Kesalahan kecil tetap dapat berdampak pada konsistensi data.\n\nA (1) cepat tetapi tidak menjamin perubahan memiliki dasar verifikasi.\n\nB (4) sesuai prosedur tetapi kurang membantu proses warga.\n\nD (3) proaktif tetapi belum melakukan pemeriksaan dasar.\n\nE (2) hati-hati tetapi terlalu cepat meminta warga kembali tanpa memanfaatkan dokumen yang mungkin sudah tersedia."
  },
  {
    "prompt": "Anda bertugas pada unit pengaduan pelayanan publik. Seorang warga menyampaikan keluhan mengenai petugas lain dan meminta identitas petugas tersebut diumumkan agar masyarakat mengetahui siapa yang dianggap melakukan kesalahan. Anda mengetahui bahwa pengaduan memang perlu ditindaklanjuti, tetapi informasi personal petugas tidak seharusnya disebarkan sembarangan. Respons yang paling tepat adalah…",
    "choices": [
      "Menjelaskan bahwa identitas petugas tidak dapat diberikan secara terbuka, tetapi pengaduan akan dicatat dan diproses melalui mekanisme yang tersedia.",
      "Memberikan identitas petugas kepada warga agar proses pengaduan menjadi transparan.",
      "Meminta warga membuat pengaduan tertulis lengkap sebelum informasi apa pun dapat diproses.",
      "Menjelaskan prosedur pengaduan dan meminta warga menyampaikan kronologi tanpa perlu menyebutkan nama petugas.",
      "Menerima pengaduan dan meminta warga memberikan informasi yang diketahuinya mengenai petugas tersebut agar pemeriksaan dapat dilakukan."
    ],
    "scores": [
      5,
      1,
      3,
      4,
      2
    ],
    "explanation": "A (5) paling ideal karena melindungi informasi personal sekaligus memastikan hak masyarakat untuk menyampaikan pengaduan tetap berjalan.\n\nB (1) mengutamakan transparansi tetapi berisiko melanggar perlindungan informasi personal.\n\nC (3) memberikan jalur formal tetapi dapat menjadi hambatan awal yang tidak diperlukan.\n\nD (4) cukup baik karena fokus pada substansi, tetapi A lebih jelas dalam menjamin pengaduan tetap diproses.\n\nE (2) dapat membantu pemeriksaan tetapi berpotensi mendorong penyebaran informasi personal yang tidak diperlukan."
  },
  {
    "prompt": "Anda bertugas di loket pelayanan dokumen perjalanan. Seorang pemohon datang bersama anak kecil dan harus menunggu cukup lama karena ada pemeriksaan tambahan pada dokumennya. Anak tersebut mulai rewel, sementara antrean tetap berjalan. Pemohon meminta agar prosesnya dipercepat karena sulit mengendalikan kondisi anak. Tindakan yang paling tepat adalah…",
    "choices": [
      "Mendahulukan pemohon tersebut karena membawa anak kecil agar kondisi tidak semakin sulit.",
      "Meminta pemohon tetap menunggu sesuai antrean karena seluruh pemohon harus diperlakukan sama.",
      "Menjelaskan bahwa pemeriksaan tambahan tetap diperlukan dan meminta pemohon menunggu sampai proses selesai.",
      "Memeriksa apakah terdapat fasilitas atau mekanisme layanan yang dapat membantu kondisi pemohon tanpa mengubah prioritas antrean secara tidak sah.",
      "Meminta petugas lain membantu menjaga anak sementara Anda menyelesaikan pemeriksaan dokumen secepat mungkin."
    ],
    "scores": [
      2,
      3,
      1,
      5,
      4
    ],
    "explanation": "D (5) paling ideal karena mencari bentuk bantuan yang sesuai tanpa otomatis mengubah urutan antrean. Petugas tetap mempertahankan pemeriksaan yang diperlukan sekaligus memperhatikan kondisi pengguna.\n\nA (2) menunjukkan empati tetapi dapat mengurangi keadilan antrean.\n\nB (3) adil secara prosedural tetapi kurang responsif terhadap kondisi konkret.\n\nC (1) benar mengenai pemeriksaan tetapi terlalu pasif.\n\nE (4) cukup membantu jika petugas lain tersedia, tetapi D lebih tepat karena terlebih dahulu mencari mekanisme pelayanan yang memang tersedia."
  },
  {
    "prompt": "Anda bertugas di sebuah kantor pelayanan administrasi kependudukan. Seorang warga datang untuk mengurus dokumen yang dibutuhkan untuk melamar pekerjaan. Saat pemeriksaan, ditemukan bahwa salah satu data pada dokumen pendukung berbeda dengan data dalam sistem. Warga tersebut mengatakan bahwa ia sudah beberapa kali datang dan khawatir kehilangan kesempatan kerja jika proses kembali tertunda. Apa tindakan Anda?",
    "choices": [
      "Meminta warga memperbaiki dokumen pendukung terlebih dahulu sebelum permohonannya dapat diproses.",
      "Memproses dokumen berdasarkan data dalam sistem agar warga tidak kehilangan kesempatan kerja.",
      "Menjelaskan adanya perbedaan data, memeriksa dokumen yang tersedia, kemudian membantu menentukan prosedur koreksi yang paling tepat.",
      "Meminta warga menghubungi atasannya agar memperoleh surat keterangan tambahan mengenai kebutuhan dokumen tersebut.",
      "Menghubungi petugas pengelola data untuk meminta agar proses warga tersebut diprioritaskan karena memiliki tenggat pekerjaan."
    ],
    "scores": [
      3,
      2,
      5,
      1,
      4
    ],
    "explanation": "C (5) paling tepat karena petugas tidak mengorbankan validitas data demi kecepatan, tetapi tetap berupaya mencari solusi konkret agar kebutuhan warga dapat diselesaikan.\n\nA (3) menjaga ketertiban tetapi belum membantu mencari solusi.\n\nB (2) responsif terhadap kebutuhan warga tetapi berisiko menghasilkan dokumen dengan data tidak sesuai.\n\nD (1) membebani warga dengan dokumen tambahan yang belum tentu diperlukan.\n\nE (4) menunjukkan kepedulian dan koordinasi, tetapi prioritas tidak seharusnya diberikan hanya karena alasan pribadi sebelum masalah datanya jelas."
  },
  {
    "prompt": "Anda bekerja pada unit pelayanan bantuan sosial. Seorang warga lanjut usia datang seorang diri untuk menanyakan mengapa dirinya belum menerima bantuan. Ia kesulitan memahami istilah administrasi dan beberapa kali salah menjelaskan informasi yang ditanyakan petugas. Antrean masyarakat lainnya mulai bertambah. Apa yang paling tepat Anda lakukan?",
    "choices": [
      "Meminta warga tersebut datang kembali bersama anggota keluarga agar proses wawancara lebih mudah.",
      "Menjelaskan pertanyaan dengan bahasa yang lebih sederhana dan membantu warga memahami informasi yang perlu disampaikan tanpa menjawab atas namanya.",
      "Meminta warga menunggu sampai antrean berkurang agar Anda dapat memberikan pelayanan lebih lama.",
      "Mengarahkan warga ke bagian informasi karena proses tersebut membutuhkan penjelasan yang lebih panjang.",
      "Mengajukan pertanyaan secara singkat dan langsung mencatat jawaban yang menurut Anda paling sesuai dengan kondisi warga."
    ],
    "scores": [
      2,
      5,
      3,
      4,
      1
    ],
    "explanation": "B (5) menunjukkan pelayanan inklusif. Petugas menyesuaikan cara komunikasi tanpa mengambil alih jawaban warga.\n\nA (2) dapat membantu tetapi justru menunda akses warga.\n\nC (3) memberi waktu lebih banyak tetapi tidak efisien.\n\nD (4) bisa menjadi pilihan jika kewenangan memang terbatas, tetapi masalah utama masih dapat dibantu di loket.\n\nE (1) cepat tetapi berisiko membuat petugas menyimpulkan jawaban sendiri."
  },
  {
    "prompt": "Anda bertugas di kantor pelayanan perizinan. Seorang pelaku usaha kecil datang untuk menanyakan perkembangan permohonannya. Berdasarkan sistem, permohonan masih dalam tahap pemeriksaan. Ia mengatakan bahwa usahanya akan segera beroperasi dan meminta Anda “membantu sedikit mempercepat” prosesnya. Ia bahkan menawarkan memberikan hadiah setelah izin selesai. Apa respons terbaik?",
    "choices": [
      "Menolak pemberian tersebut dan menjelaskan bahwa proses tetap berjalan sesuai tahapan yang berlaku.",
      "Menolak hadiah tersebut, tetapi tetap berusaha mempercepat pemeriksaan karena usaha warga memiliki kebutuhan mendesak.",
      "Meminta warga tidak memberikan hadiah dan mengarahkan pertanyaannya kepada atasan agar proses dapat dipastikan.",
      "Menjelaskan bahwa pemberian tidak dapat diterima, kemudian memeriksa status permohonan dan memberikan informasi mengenai tahapan serta estimasi proses sesuai ketentuan.",
      "Menerima informasi dari warga mengenai kebutuhan mendesaknya tetapi meminta hadiah diberikan setelah proses selesai agar tidak memengaruhi keputusan."
    ],
    "scores": [
      4,
      3,
      2,
      5,
      1
    ],
    "explanation": "D (5) paling ideal karena menolak potensi konflik kepentingan sekaligus tetap memberikan pelayanan yang informatif dan solutif.\n\nA (4) sudah benar tetapi hanya menyelesaikan aspek penolakan hadiah.\n\nB (3) niatnya membantu tetapi dapat menciptakan perlakuan khusus.\n\nC (2) cukup aman tetapi terlalu cepat mengalihkan persoalan.\n\nE (1) tetap membuka ruang penerimaan gratifikasi."
  },
  {
    "prompt": "Di tempat Anda bekerja, sistem antrean elektronik mengalami gangguan. Masyarakat yang sudah memperoleh nomor antrean mulai mempertanyakan apakah mereka masih akan dilayani sesuai urutan. Sebagian masyarakat meminta petugas menggunakan antrean manual, sedangkan sebagian lainnya khawatir antrean manual akan menimbulkan ketidakadilan. Tindakan yang paling tepat adalah…",
    "choices": [
      "Menghentikan pelayanan sampai sistem elektronik kembali normal.",
      "Menggunakan antrean manual secara langsung agar pelayanan tetap berjalan.",
      "Meminta masyarakat mencatat sendiri nomor kedatangannya kemudian memanggil berdasarkan urutan tersebut.",
      "Meminta setiap petugas membuat daftar antrean masing-masing agar pelayanan tidak berhenti.",
      "Memastikan data nomor antrean yang sudah tercatat, menjelaskan kondisi kepada masyarakat, lalu menggunakan mekanisme manual yang transparan dan dapat diverifikasi jika diperlukan."
    ],
    "scores": [
      1,
      3,
      2,
      4,
      5
    ],
    "explanation": "E (5) paling tepat karena menjaga kesinambungan pelayanan sekaligus mempertahankan keadilan antrean melalui mekanisme yang dapat diperiksa.\n\nA (1) aman tetapi terlalu pasif.\n\nB (3) cepat tetapi belum menjamin kesinambungan urutan sebelumnya.\n\nC (2) melibatkan masyarakat tetapi rawan ketidakteraturan.\n\nD (4) menunjukkan inisiatif, tetapi banyak daftar dapat justru membuat antrean semakin sulit dikendalikan."
  },
  {
    "prompt": "Anda bekerja pada pelayanan pengaduan infrastruktur. Seorang warga melaporkan jalan rusak di sekitar tempat tinggalnya. Ia membawa foto dan lokasi yang cukup jelas. Setelah Anda memeriksa sistem, ternyata lokasi tersebut sudah pernah dilaporkan tetapi belum ditindaklanjuti. Warga kecewa karena merasa laporan sebelumnya diabaikan. Apa tindakan yang paling tepat?",
    "choices": [
      "Menyarankan warga membuat laporan baru agar kasus tersebut kembali masuk ke sistem.",
      "Menjelaskan bahwa penanganan jalan rusak bergantung pada prioritas dan anggaran pemerintah.",
      "Memeriksa riwayat laporan sebelumnya, memastikan informasi yang diberikan masih relevan, kemudian meneruskan atau memperbarui laporan sesuai mekanisme tindak lanjut.",
      "Menghubungi unit teknis dan meminta mereka segera memperbaiki jalan tersebut.",
      "Meminta warga mengumpulkan lebih banyak tanda tangan masyarakat agar laporan memperoleh perhatian lebih besar."
    ],
    "scores": [
      2,
      3,
      5,
      4,
      1
    ],
    "explanation": "C (5) paling tepat karena petugas tidak membuat masyarakat mengulang proses tanpa alasan. Riwayat laporan digunakan untuk memastikan tindak lanjut yang tepat.\n\nA (2) mudah tetapi tidak efisien.\n\nB (3) memberikan konteks tetapi tidak menyelesaikan persoalan laporan.\n\nD (4) proaktif tetapi belum memastikan jalur koordinasinya.\n\nE (1) menambah beban masyarakat tanpa dasar bahwa tanda tangan diperlukan."
  },
  {
    "prompt": "Anda bertugas pada pelayanan pendidikan. Seorang siswa datang untuk meminta informasi mengenai program beasiswa. Ia mengatakan bahwa keluarganya sedang mengalami kesulitan ekonomi, tetapi belum mengetahui dokumen apa saja yang harus disiapkan. Ia terlihat malu menceritakan kondisinya di depan banyak orang. Tindakan terbaik adalah…",
    "choices": [
      "Menjelaskan persyaratan secara terbuka agar siswa mengetahui seluruh dokumen yang diperlukan.",
      "Meminta siswa membaca informasi beasiswa yang telah ditempel di papan pengumuman.",
      "Meminta siswa membawa orang tua agar informasi kondisi ekonomi dapat diverifikasi.",
      "Memberikan informasi secara sopan, menawarkan tempat atau cara komunikasi yang lebih privat bila diperlukan, serta menjelaskan tahapan dan dokumen yang relevan.",
      "Langsung memberikan formulir agar siswa dapat mempelajarinya sendiri di rumah."
    ],
    "scores": [
      3,
      2,
      1,
      5,
      4
    ],
    "explanation": "D (5) paling ideal karena menggabungkan akses informasi, empati, dan perlindungan kenyamanan pemohon.\n\nA (3) informatif tetapi kurang memperhatikan situasi siswa.\n\nB (2) mengarahkan ke sumber informasi tetapi kurang responsif.\n\nC (1) belum tentu diperlukan pada tahap informasi awal.\n\nE (4) cukup membantu tetapi belum memberikan penjelasan langsung yang dibutuhkan."
  },
  {
    "prompt": "Anda bekerja pada layanan administrasi rumah sakit. Seorang keluarga pasien meminta Anda memberikan informasi lengkap mengenai kondisi pasien kepada dirinya. Setelah diperiksa, hubungan keluarga tersebut memang dekat, tetapi belum terdapat kejelasan apakah ia merupakan pihak yang berwenang menerima informasi medis. Apa yang Anda lakukan?",
    "choices": [
      "Memberikan informasi karena yang bersangkutan mengaku sebagai keluarga dekat pasien.",
      "Menjelaskan bahwa informasi tertentu hanya dapat diberikan kepada pihak yang memiliki kewenangan, lalu membantu menjelaskan prosedur untuk memperoleh informasi tersebut.",
      "Menolak memberikan informasi apa pun karena seluruh informasi pasien bersifat rahasia.",
      "Meminta keluarga pasien menunggu sampai dokter datang dan menyampaikan informasi secara langsung.",
      "Meminta pasien menghubungi keluarganya melalui telepon untuk memberikan izin secara lisan."
    ],
    "scores": [
      1,
      5,
      3,
      4,
      2
    ],
    "explanation": "B (5) paling tepat karena melindungi kerahasiaan informasi sekaligus tetap membantu keluarga memahami mekanisme yang sah.\n\nA (1) berisiko melanggar kerahasiaan.\n\nC (3) terlalu membatasi karena mungkin terdapat mekanisme akses yang sah.\n\nD (4) cukup aman tetapi belum memberikan solusi administratif.\n\nE (2) dapat menjadi bagian dari prosedur tertentu, tetapi tidak selalu cukup sebagai dasar pemberian informasi."
  },
  {
    "prompt": "Anda bertugas di kantor pelayanan perizinan usaha. Seorang pemohon mengisi formulir dengan data yang tampak benar, tetapi Anda menemukan bahwa satu bagian penting belum diisi. Pemohon mengatakan bahwa ia tidak memahami maksud bagian tersebut dan meminta Anda mengisinya karena takut salah. Apa tindakan yang paling tepat?",
    "choices": [
      "Mengisi bagian tersebut berdasarkan informasi yang Anda pahami dari dokumen pemohon.",
      "Meminta pemohon mengosongkannya dan menjelaskan bahwa bagian tersebut akan diperiksa petugas.",
      "Menjelaskan fungsi bagian tersebut dan memberikan contoh jenis informasi yang perlu dicantumkan, kemudian meminta pemohon mengisinya sendiri.",
      "Meminta pemohon berkonsultasi dengan petugas khusus sebelum formulir diteruskan.",
      "Mengisi bagian tersebut setelah meminta pemohon menyetujui informasi yang Anda masukkan."
    ],
    "scores": [
      2,
      1,
      5,
      4,
      3
    ],
    "explanation": "C (5) paling tepat karena petugas membantu pemohon memahami formulir tanpa mengambil alih tanggung jawab pengisian data.\n\nA (2) cepat tetapi berisiko salah tafsir.\n\nB (1) tidak memberikan solusi.\n\nD (4) baik jika tersedia petugas khusus, tetapi masalah dapat diselesaikan melalui edukasi sederhana.\n\nE (3) lebih aman daripada mengisi tanpa persetujuan, tetapi tetap membuat petugas mengambil alih proses yang seharusnya dilakukan pemohon."
  },
  {
    "prompt": "Anda bertugas pada sebuah unit pelayanan publik yang menerima banyak pertanyaan melalui media sosial resmi. Anda menemukan bahwa beberapa pertanyaan masyarakat dijawab oleh petugas dengan bahasa yang berbeda-beda. Ada jawaban yang sangat formal, ada yang terlalu singkat, dan beberapa bahkan menggunakan istilah teknis yang sulit dipahami. Apa tindakan yang paling tepat?",
    "choices": [
      "Membuat pedoman komunikasi sederhana agar jawaban petugas lebih konsisten, jelas, dan tetap dapat disesuaikan dengan konteks pertanyaan.",
      "Meminta seluruh petugas menggunakan satu format jawaban yang sama untuk semua pertanyaan.",
      "Mengoreksi setiap jawaban petugas sebelum dipublikasikan agar tidak ada perbedaan gaya.",
      "Meminta masyarakat membaca FAQ terlebih dahulu sebelum mengajukan pertanyaan melalui media sosial.",
      "Menyerahkan seluruh pengelolaan media sosial kepada satu petugas agar gaya komunikasi tidak berbeda-beda."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "A (5) paling ideal karena menciptakan standar komunikasi tanpa membuat respons menjadi kaku. Pedoman membantu memastikan informasi konsisten dan mudah dipahami.\n\nB (3) meningkatkan konsistensi tetapi dapat membuat jawaban terlalu mekanis.\n\nC (4) meningkatkan kontrol kualitas tetapi kurang efisien jika dilakukan untuk seluruh respons.\n\nD (1) memindahkan beban kepada masyarakat.\n\nE (2) menyelesaikan perbedaan gaya secara sederhana tetapi menciptakan ketergantungan pada satu petugas."
  },
  {
    "prompt": "Anda bertugas di kantor pelayanan publik yang sedang menerapkan sistem pendaftaran daring. Pada minggu pertama penerapan, banyak masyarakat datang langsung karena belum terbiasa dengan sistem baru. Sebagian petugas berpendapat bahwa masyarakat harus belajar sendiri karena petunjuk penggunaan sudah tersedia. Sebagai petugas pelayanan, apa tindakan Anda?",
    "choices": [
      "Tetap melayani secara manual agar masyarakat tidak merasa kesulitan selama masa transisi.",
      "Meminta masyarakat mempelajari panduan terlebih dahulu dan kembali jika masih mengalami kesulitan.",
      "Mengarahkan seluruh masyarakat kepada petugas khusus teknologi agar loket utama tidak terganggu.",
      "Menjelaskan bahwa sistem daring merupakan kebijakan baru dan meminta masyarakat menyesuaikan diri.",
      "Membantu masyarakat memahami langkah dasar penggunaan sistem, mengidentifikasi hambatan yang sering muncul, dan menyampaikan pola kendala tersebut kepada pengelola untuk perbaikan layanan."
    ],
    "scores": [
      3,
      2,
      4,
      1,
      5
    ],
    "explanation": "E (5) paling ideal karena tidak hanya membantu pengguna saat ini, tetapi juga menggunakan pengalaman masyarakat sebagai masukan untuk memperbaiki implementasi layanan digital.\n\nA (3) sangat membantu dalam jangka pendek tetapi dapat menghambat tujuan digitalisasi.\n\nB (2) mendorong kemandirian tetapi terlalu membebankan masyarakat.\n\nC (4) cukup efektif bila petugas khusus tersedia, tetapi belum memanfaatkan temuan lapangan untuk perbaikan sistem.\n\nD (1) hanya menyampaikan kebijakan tanpa memberikan bantuan."
  }
];

export const PELAYANAN_PUBLIK_DRILL_QUESTIONS: Question[] = pelayananPublikSeeds.map((seed, index) => ({
  id: `tkp-pelayanan-publik-${String(index + 1).padStart(3, "0")}`,
  category: "TKP",
  topic: "Pelayanan Publik",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: seed.scores[choiceIndex],
  })),
  explanation: seed.explanation,
}));
