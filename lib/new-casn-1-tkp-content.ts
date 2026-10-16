import type { Question } from "./types";

// Imported from SOAL TKP 1 DAN 2.pdf, package 1. See content-sources/full-new-casn.json.
export const NEW_CASN_1_TKP_QUESTIONS: Question[] = [
  {
    "id": "new-casn-1-tkp-01",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Selama tiga bulan terakhir, Anda menyadari bahwa beberapa pekerjaan administratif yang Anda tangani hampir selalu selesai mendekati batas waktu. Tidak ada pekerjaan yang terlambat, tetapi kondisi tersebut membuat Anda kesulitan ketika muncul tugas mendadak. Setelah mengevaluasi pola kerja, Anda menemukan bahwa sebagian waktu terbuang karena sering berpindah dari satu pekerjaan ke pekerjaan lain sebelum pekerjaan sebelumnya selesai. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Menyelesaikan pekerjaan berdasarkan urutan tenggat agar seluruh target tetap tercapai.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Membatasi pekerjaan tambahan agar fokus pada pekerjaan yang sudah menjadi tanggung jawab utama.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menentukan prioritas berdasarkan urgensi, mengatur waktu, dan mengevaluasi hasilnya secara berkala.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menyelesaikan pekerjaan utama terlebih dahulu sebelum menangani tugas lain yang muncul.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Berkonsultasi dengan atasan untuk menentukan kembali prioritas pekerjaan yang harus diselesaikan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 5 | D = 4 | E = 1.\n\nPilihan C paling mencerminkan profesionalisme karena berfokus pada perbaikan pola kerja, bukan sekadar memastikan pekerjaan selesai. Tindakan tersebut mencakup penentuan prioritas, pengelolaan waktu, dan evaluasi agar masalah yang sama tidak terus berulang.\n\nA (3): Cukup tepat karena mempertimbangkan tenggat, tetapi belum memperhatikan faktor urgensi dan dampak pekerjaan.\n\nB (2): Dapat mengurangi beban, tetapi kurang tepat karena pekerjaan tambahan belum tentu dapat dihindari.\n\nC (5): Paling tepat karena memperbaiki pola kerja dari sisi prioritas, pengelolaan waktu, dan evaluasi.\n\nD (4): Baik untuk menjaga fokus, tetapi terlalu kaku jika ada tugas baru yang ternyata lebih mendesak.\n\nE (1): Komunikasi dengan atasan penting, tetapi masalah utama masih dapat diperbaiki melalui pengelolaan pekerjaan pribadi."
  },
  {
    "id": "new-casn-1-tkp-02",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda sedang mengolah dokumen internal yang berisi data pribadi masyarakat. Saat makan siang, seorang teman yang bekerja di instansi lain menanyakan data tersebut karena menurutnya informasi itu akan membantu pekerjaannya. Ia meminta Anda mengirimkan sebagian data melalui aplikasi pesan pribadi dan berjanji tidak akan menyebarkannya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengirimkan data yang dianggap tidak terlalu sensitif agar kebutuhan informasi tetap dapat terpenuhi.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Menanyakan tujuan penggunaan data sebelum menentukan apakah informasi tersebut dapat diberikan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Menghapus identitas tertentu kemudian mengirimkan bagian data yang dianggap masih diperlukan.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menjelaskan bahwa pemberian data harus melalui kewenangan dan prosedur resmi yang berlaku.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta persetujuan rekan satu tim sebelum menentukan apakah data tersebut dapat dibagikan.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 3 | C = 2 | D = 5 | E = 4.\n\nPilihan D paling tepat karena menjaga kerahasiaan data sekaligus memastikan setiap pemberian informasi dilakukan berdasarkan kewenangan dan prosedur yang berlaku. Kebutuhan pihak lain tidak dengan sendirinya menjadi dasar untuk membagikan data melalui jalur pribadi.\n\nA (1): Kurang tepat karena penilaian pribadi mengenai tingkat sensitivitas data tidak menjadi dasar yang cukup untuk membagikan informasi.\n\nB (3): Cukup tepat karena mempertimbangkan tujuan penggunaan, tetapi belum memastikan adanya kewenangan dan prosedur resmi.\n\nC (2): Mengurangi informasi pribadi memang dapat menekan risiko, tetapi tetap tidak tepat jika pemberian data dilakukan tanpa dasar kewenangan.\n\nD (5): Paling tepat karena menjaga keamanan informasi dengan memastikan pemberian data dilakukan melalui kewenangan dan prosedur yang berlaku.\n\nE (4): Cukup baik karena melibatkan pihak lain dalam pengambilan keputusan, tetapi persetujuan rekan satu tim belum tentu menggantikan prosedur resmi pemberian data."
  },
  {
    "id": "new-casn-1-tkp-03",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda ditugaskan menjadi anggota tim yang mempersiapkan sebuah kegiatan instansi. Dua hari sebelum pelaksanaan, salah satu anggota tim menyampaikan bahwa bagian pekerjaan yang menjadi tanggung jawabnya belum selesai karena ia juga mendapat tugas lain dari unit berbeda. Beberapa bagian pekerjaan tersebut saling berkaitan sehingga keterlambatan dapat memengaruhi persiapan tim secara keseluruhan. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Mengambil alih seluruh pekerjaan tersebut agar persiapan kegiatan tetap berjalan sesuai jadwal.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Membicarakan kondisi tersebut dengan anggota yang bersangkutan dan menyusun pembagian pekerjaan yang memungkinkan target tetap tercapai.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Menyampaikan kondisi tersebut kepada ketua tim agar menentukan anggota lain yang dapat membantu menyelesaikan pekerjaan.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Meminta anggota tersebut menyelesaikan pekerjaannya terlebih dahulu karena tanggung jawab sudah diberikan kepadanya.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Menyesuaikan target kegiatan dengan kondisi yang ada agar anggota tim tidak mengalami tekanan pekerjaan berlebihan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 4 | D = 2 | E = 1.\n\nPilihan B paling tepat karena menunjukkan kemampuan bekerja sama, komunikasi, dan penyelesaian masalah secara kolaboratif. Kondisi tidak langsung diambil alih atau dilempar kepada ketua tim, tetapi dibicarakan terlebih dahulu untuk mencari pembagian pekerjaan yang realistis agar target bersama tetap tercapai.\n\nA (3): Cukup tepat karena membantu menjaga jadwal, tetapi mengambil alih seluruh pekerjaan dapat menimbulkan ketergantungan dan membebani diri sendiri.\n\nB (5): Paling tepat karena mengutamakan komunikasi, pembagian tugas, dan pencapaian target secara bersama-sama.\n\nC (4): Baik karena melibatkan ketua tim, tetapi sebaiknya penyelesaian bersama anggota yang mengalami kendala diupayakan terlebih dahulu.\n\nD (2): Kurang tepat karena hanya menekankan tanggung jawab individu tanpa mempertimbangkan keterkaitan pekerjaan dan kepentingan tim.\n\nE (1): Kurang tepat karena menyesuaikan target bukan pilihan utama ketika masih terdapat peluang untuk mengatur kembali pembagian pekerjaan"
  },
  {
    "id": "new-casn-1-tkp-04",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Dalam satu hari Anda menerima tiga pekerjaan sekaligus. Pekerjaan pertama harus selesai hari itu karena berkaitan dengan pelayanan masyarakat. Pekerjaan kedua merupakan laporan internal yang tenggatnya dua hari lagi. Pekerjaan ketiga merupakan permintaan data dari atasan yang dibutuhkan untuk rapat esok pagi. Ketiganya sama-sama penting, sementara waktu dan tenaga Anda terbatas. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Memprioritaskan pekerjaan berdasarkan urgensi dan dampaknya, lalu mengatur waktu untuk menyelesaikan tugas lainnya sesuai tenggat.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Menyelesaikan pekerjaan berdasarkan urutan tugas diterima agar pembagian waktu tetap adil.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mengerjakan pekerjaan yang paling mudah terlebih dahulu supaya jumlah pekerjaan segera berkurang.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Meminta rekan mengambil sebagian pekerjaan agar seluruh tugas dapat selesai dalam waktu yang sama.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Mengerjakan permintaan atasan terlebih dahulu karena berkaitan dengan kebutuhan pimpinan, kemudian melanjutkan pekerjaan lainnya.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 2 | C = 1 | D = 3 | E = 4.\n\nPilihan A menunjukkan kemampuan menentukan prioritas secara objektif dengan mempertimbangkan urgensi dan dampak pekerjaan. Dengan demikian, tugas yang paling membutuhkan penyelesaian segera dapat ditangani terlebih dahulu, sementara pekerjaan lainnya tetap direncanakan berdasarkan tenggat yang tersedia.\n\nA (5): Paling tepat karena mempertimbangkan urgensi, dampak, dan tenggat dalam menentukan prioritas pekerjaan.\n\nB (2): Kurang tepat karena urutan penerimaan tugas tidak selalu menunjukkan tingkat urgensi atau dampak pekerjaan.\n\nC (1): Kurang tepat karena kemudahan pekerjaan bukan dasar utama dalam menentukan prioritas ketika beberapa tugas memiliki konsekuensi berbeda.\n\nD (3): Cukup tepat karena dapat membantu mengurangi beban, tetapi pembagian pekerjaan sebaiknya dilakukan setelah prioritas dan kapasitas kerja dipetakan.\n\nE (4): Cukup tepat karena kebutuhan rapat memiliki tenggat dekat, tetapi memprioritaskan atasan semata tanpa mempertimbangkan dampak pelayanan kurang objektif."
  },
  {
    "id": "new-casn-1-tkp-05",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda sedang menjadi anggota tim yang menilai beberapa proposal kegiatan. Salah satu proposal berasal dari unit yang selama ini memiliki hubungan kerja cukup dekat dengan Anda. Setelah diperiksa, proposal tersebut memiliki beberapa kekurangan dibandingkan proposal lain. Rekan Anda mengatakan bahwa kekurangan tersebut masih dapat dimaklumi karena unit tersebut sering membantu pekerjaan tim Anda. Apa yang paling tepat Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Mempertimbangkan kontribusi unit tersebut selama ini sebelum menentukan penilaian terhadap proposal yang diajukan.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Menyampaikan kekurangan proposal sesuai temuan, tetapi tetap memberi ruang pertimbangan terhadap kondisi unit pengusul.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mengalihkan penilaian kepada anggota lain agar hubungan kerja yang sudah terjalin tidak memengaruhi proses penilaian.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Mengusulkan kesempatan perbaikan agar kekurangan proposal dapat diselesaikan sebelum hasil penilaian ditetapkan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menerapkan kriteria yang sama kepada seluruh proposal dan menetapkan penilaian berdasarkan kelengkapan serta kualitas yang dipersyaratkan.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 3 | C = 2 | D = 4 | E = 5.\n\nPilihan E paling tepat karena menjaga objektivitas dengan menggunakan standar yang sama terhadap seluruh proposal. Hubungan kerja yang baik tidak seharusnya menjadi dasar untuk memberikan perlakuan berbeda dalam proses penilaian.\n\nA (1): Kurang tepat karena kontribusi sebelumnya dapat menimbulkan bias dan tidak berkaitan langsung dengan kualitas proposal yang sedang dinilai.\n\nB (3): Cukup tepat karena tetap mempertimbangkan kekurangan proposal, tetapi adanya pertimbangan khusus dapat membuka peluang perlakuan yang tidak sama.\n\nC (2): Dapat mengurangi keterlibatan pribadi, tetapi pengalihan penilaian bukan solusi utama apabila standar penilaian sebenarnya dapat diterapkan secara objektif.\n\nD (4): Cukup tepat karena memberi kesempatan perbaikan, tetapi harus dipastikan kesempatan tersebut juga tersedia bagi proposal lain dengan kondisi yang sama.\n\nE (5): Paling tepat karena menggunakan standar yang sama, menjaga objektivitas, dan mencegah hubungan kerja memengaruhi hasil penilaian."
  },
  {
    "id": "new-casn-1-tkp-06",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Setelah laporan bulanan dikirimkan kepada pimpinan, Anda menyadari terdapat kesalahan angka pada salah satu bagian laporan yang Anda kerjakan. Kesalahan tersebut belum diketahui oleh pimpinan dan tidak mengubah sebagian besar hasil laporan, tetapi dapat memengaruhi interpretasi terhadap salah satu indikator kinerja. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Meninjau bagian laporan yang berkaitan dengan angka tersebut sebelum menentukan apakah diperlukan tindakan lebih lanjut.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menunggu tanggapan pimpinan karena kesalahan hanya terdapat pada satu indikator dan belum memengaruhi keseluruhan laporan.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Memperbaiki file kerja yang tersimpan agar data yang digunakan pada laporan berikutnya sudah sesuai.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Memastikan sumber kesalahan, segera menginformasikannya kepada pihak terkait, dan menyampaikan data koreksi beserta dampaknya.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Mengonfirmasi kesalahan kepada rekan satu tim terlebih dahulu sebelum menentukan apakah informasi tersebut perlu disampaikan kepada pimpinan.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 1 | C = 2 | D = 5 | E = 4.\n\nPilihan D paling tepat karena menunjukkan tanggung jawab, ketelitian, dan keterbukaan dalam menangani kesalahan. Kesalahan yang dapat memengaruhi interpretasi indikator tidak sebaiknya dibiarkan, sehingga perlu dipastikan sumbernya, dikomunikasikan, dan disertai koreksi serta dampaknya.\n\nA (3): Cukup tepat karena menunjukkan kehati-hatian, tetapi belum memastikan adanya tindakan setelah kesalahan tersebut ditemukan.\n\nB (1): Kurang tepat karena membiarkan pimpinan menggunakan informasi yang berpotensi menimbulkan interpretasi yang keliru.\n\nC (2): Kurang tepat karena hanya memperbaiki file kerja tanpa mengoreksi informasi yang sudah terlanjur diterima pimpinan.\n\nD (5): Paling tepat karena memastikan kesalahan, mengomunikasikan secara terbuka, dan memberikan koreksi beserta dampaknya terhadap laporan.\n\nE (4): Cukup tepat karena melakukan verifikasi sebelum bertindak, tetapi menempatkan konfirmasi internal sebagai langkah awal dapat menunda penyampaian informasi yang berpotensi memengaruhi keputusan."
  },
  {
    "id": "new-casn-1-tkp-07",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Instansi Anda mulai menggunakan sistem digital baru untuk menggantikan proses administrasi yang sebelumnya dilakukan secara manual. Anda sudah mengikuti pelatihan dasar, tetapi masih beberapa kali mengalami kesulitan ketika menggunakan fitur tertentu. Sebagian rekan memilih kembali meminta bantuan operator setiap kali menemui kendala. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Memanfaatkan fitur yang telah dikuasai sambil menunggu kesempatan memperoleh pendampingan tambahan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Meminta bantuan operator pada fitur yang sulit agar pekerjaan tetap berjalan sesuai target.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mencatat kendala yang ditemukan dan menunggu arahan sebelum mencoba fitur yang belum dikuasai.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Menggunakan cara manual untuk pekerjaan tertentu agar kesalahan akibat sistem baru dapat diminimalkan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mempelajari panduan, mencoba fitur secara bertahap, dan meminta bantuan jika kendala tidak dapat diselesaikan sendiri.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 1 | D = 4 | E = 5.\n\nPilihan E menunjukkan profesionalisme karena berusaha beradaptasi dengan perubahan melalui pembelajaran mandiri sebelum meminta bantuan. Tindakan tersebut tetap mempertimbangkan ketepatan pekerjaan karena bantuan digunakan ketika kendala memang tidak dapat diselesaikan sendiri.\n\nA (3): Cukup tepat karena tetap menggunakan sistem, tetapi cenderung pasif dalam mengembangkan kemampuan pada fitur yang belum dikuasai.\n\nB (2): Membantu pekerjaan tetap berjalan, tetapi terlalu cepat bergantung pada operator dan kurang mendorong kemampuan beradaptasi secara mandiri.\n\nC (1): Pencatatan kendala dapat membantu, tetapi menunggu arahan sebelum mencoba membuat proses belajar menjadi kurang proaktif.\n\nD (4): Dapat mengurangi risiko kesalahan dalam jangka pendek, tetapi kurang mendukung proses adaptasi terhadap sistem digital yang telah ditetapkan.\n\nE (5): Paling tepat karena menunjukkan kemauan belajar, kemampuan beradaptasi, kemandirian, dan kesediaan meminta bantuan secara proporsional."
  },
  {
    "id": "new-casn-1-tkp-08",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda menjadi bagian dari tim yang memeriksa kelengkapan administrasi beberapa calon penyedia barang. Salah satu perusahaan yang dokumennya sedang diperiksa ternyata merupakan perusahaan milik kerabat dekat Anda. Anda yakin dapat menilai dokumen tersebut secara objektif karena sudah terbiasa bekerja secara profesional. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Memberi tahu ketua tim mengenai hubungan tersebut dan meminta arahan mengenai mekanisme penanganannya.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Meminta anggota tim lain memeriksa dokumen tersebut sementara Anda menangani dokumen penyedia lainnya.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Memeriksa dokumen bersama anggota lain agar hasil penilaian dapat dibandingkan sebelum ditetapkan.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Tetap memeriksa dokumen tersebut karena Anda yakin dapat menjaga objektivitas dalam penilaian.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menyelesaikan pemeriksaan seperti biasa, tetapi tidak ikut menentukan keputusan akhir terhadap perusahaan tersebut.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 4 | C = 3 | D = 1 | E = 2.\n\nPilihan A menunjukkan profesionalisme karena potensi konflik kepentingan disampaikan secara terbuka kepada pihak yang berwenang. Dengan meminta arahan, penanganan dapat dilakukan sesuai mekanisme yang berlaku dan objektivitas proses tetap terjaga.\n\nA (5): Paling tepat karena transparan terhadap potensi konflik kepentingan dan menyerahkan penanganannya sesuai mekanisme yang berlaku.\n\nB (4): Cukup tepat karena mengurangi potensi konflik kepentingan, tetapi keputusan untuk mengalihkan pemeriksaan sebaiknya melalui mekanisme yang jelas.\n\nC (3): Dapat meningkatkan objektivitas pemeriksaan, tetapi keberadaan hubungan pribadi tetap perlu disampaikan kepada pihak yang berwenang.\n\nD (1): Kurang tepat karena keyakinan terhadap objektivitas pribadi tidak menghilangkan potensi konflik kepentingan dalam proses pemeriksaan.\n\nE (2): Lebih baik daripada terlibat dalam keputusan akhir, tetapi tetap kurang tepat karena Anda masih terlibat dalam proses pemeriksaan terhadap pihak yang memiliki hubungan dengan Anda."
  },
  {
    "id": "new-casn-1-tkp-09",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Anda sedang melayani masyarakat yang mengajukan perubahan data administrasi. Setelah diperiksa, dokumen yang dibawa sebenarnya sudah sesuai, tetapi warga tersebut kurang memahami tahapan proses berikutnya. Ia beberapa kali bertanya karena khawatir salah mengikuti prosedur dan harus mengulang pengajuan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan tahapan berikutnya secara singkat agar warga dapat melanjutkan proses secara mandiri.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Meminta warga membaca petunjuk layanan terlebih dahulu sebelum melanjutkan proses berikutnya.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mengarahkan warga kepada petugas informasi agar memperoleh penjelasan mengenai tahapan pelayanan.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Memproses bagian yang dapat dilakukan terlebih dahulu agar waktu tunggu warga tidak terlalu lama.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menjelaskan tahapan sesuai prosedur dan memastikan warga memahami langkah yang perlu dilakukan berikutnya.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 2 | C = 3 | D = 1 | E = 5.\n\nPilihan E menunjukkan pelayanan yang tidak hanya berorientasi pada penyelesaian administrasi, tetapi juga memastikan masyarakat memahami proses yang harus dijalani.\n\nA (4): Cukup tepat karena memberikan penjelasan, tetapi belum memastikan warga benar-benar memahami tahapan tersebut.\n\nB (2): Kurang tepat karena terlalu mengandalkan kemampuan warga memahami informasi secara mandiri.\n\nC (3): Dapat membantu memberikan informasi, tetapi pengalihan kepada petugas lain belum tentu diperlukan jika informasi dapat diberikan langsung.\n\nD (1): Kurang tepat karena berfokus pada kecepatan proses tanpa menyelesaikan kebingungan warga mengenai tahapan berikutnya.\n\nE (5): Paling tepat karena memberikan informasi sekaligus memastikan pemahaman warga terhadap proses pelayanan."
  },
  {
    "id": "new-casn-1-tkp-10",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Anda sedang melayani masyarakat ketika seorang pemohon mulai berbicara dengan nada tinggi karena menganggap prosesnya terlalu lama. Setelah diperiksa, proses tersebut memang membutuhkan waktu karena masih menunggu verifikasi dari bagian lain. Beberapa masyarakat di sekitar mulai memperhatikan percakapan tersebut. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan bahwa proses masih berjalan dan meminta pemohon menunggu sampai verifikasi selesai.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Meminta pemohon menenangkan diri terlebih dahulu agar proses pelayanan dapat dilanjutkan dengan baik.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mengarahkan pemohon menyampaikan keluhan melalui kanal pengaduan agar dapat ditindaklanjuti.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menjelaskan tahapan yang sedang berlangsung dan memberikan informasi mengenai tindak lanjut yang dapat dilakukan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta petugas lain menangani pemohon tersebut agar suasana pelayanan tidak semakin terganggu.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 4 | D = 5 | E = 1.\n\nPilihan D paling tepat karena memberikan penjelasan yang jelas sekaligus membantu pemohon memahami alasan keterlambatan dan langkah berikutnya.\n\nA (3): Cukup tepat karena menjelaskan kondisi proses, tetapi belum memberikan informasi yang cukup mengenai tindak lanjutnya.\n\nB (2): Kurang tepat karena lebih berfokus pada sikap pemohon daripada menjelaskan persoalan pelayanan yang menjadi sumber keberatan.\n\nC (4): Baik karena menyediakan jalur pengaduan, tetapi persoalan masih dapat dijelaskan dan ditangani terlebih dahulu dalam proses pelayanan.\n\nD (5): Paling tepat karena mengutamakan komunikasi, kejelasan informasi, dan penyelesaian kebutuhan masyarakat.\n\nE (1): Kurang tepat karena mengalihkan pemohon hanya untuk meredakan situasi tanpa menyelesaikan persoalan yang sedang dihadapi."
  },
  {
    "id": "new-casn-1-tkp-11",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Anda menerima permohonan layanan dari seorang warga yang membawa dokumen lengkap. Namun, ketika memeriksa data dalam sistem, Anda menemukan informasi yang berbeda dengan dokumen tersebut. Warga mengatakan bahwa data pada dokumen sudah benar dan meminta proses tetap dilanjutkan karena ia harus segera menggunakan hasil layanan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Memproses dokumen berdasarkan data yang dibawa karena dokumen tersebut merupakan bukti resmi pemohon.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menunda proses sampai data dalam sistem diperbarui agar informasi yang digunakan menjadi konsisten.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Meminta warga mengurus perubahan data terlebih dahulu sebelum permohonan dapat diproses lebih lanjut.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menghubungi bagian terkait untuk memastikan sumber perbedaan sebelum menentukan proses selanjutnya.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Memproses permohonan dengan mencatat perbedaan data agar dapat diperbaiki pada kesempatan berikutnya.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 2 | D = 5 | E = 1.\n\nPilihan D paling tepat karena tidak langsung mengasumsikan data mana yang benar dan tidak pula memproses permohonan dengan informasi yang belum konsisten.\n\nA (3): Cukup tepat karena mempertimbangkan dokumen resmi, tetapi belum memastikan alasan perbedaan dengan data pada sistem.\n\nB (4): Baik karena mencegah proses menggunakan data yang tidak konsisten, tetapi belum mengambil langkah untuk mengetahui sumber perbedaannya.\n\nC (2): Kurang tepat karena langsung membebankan penyelesaian kepada warga sebelum memastikan penyebab perbedaan data.\n\nD (5): Paling tepat karena melakukan verifikasi terlebih dahulu sebelum menentukan tindakan terhadap permohonan.\n\nE (1): Kurang tepat karena membiarkan ketidaksesuaian tetap ada ketika data tersebut dapat memengaruhi ketepatan pelayanan."
  },
  {
    "id": "new-casn-1-tkp-12",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Pada akhir jam pelayanan, Anda mengetahui masih ada beberapa masyarakat yang belum selesai dilayani. Sebagian besar petugas sudah menyelesaikan tugasnya, tetapi beberapa berkas masih membutuhkan pemeriksaan. Atasan tidak memberikan instruksi khusus mengenai apakah pelayanan harus dilanjutkan atau ditunda ke hari berikutnya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menyelesaikan berkas yang paling mudah agar jumlah masyarakat yang menunggu dapat segera berkurang.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menghentikan pelayanan sesuai jam kerja dan meminta masyarakat melanjutkan proses pada hari berikutnya.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Menanyakan kepada petugas lain apakah mereka bersedia membantu menyelesaikan pelayanan yang masih tersisa.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menyampaikan kondisi kepada atasan dan menunggu keputusan sebelum menentukan pelayanan berikutnya.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Memeriksa ketentuan layanan dan mengatur penyelesaian sesuai mekanisme yang berlaku bagi pemohon yang masih menunggu.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 1 | C = 4 | D = 3 | E = 5.\n\nPilihan E paling tepat karena keputusan pelayanan tidak hanya didasarkan pada kondisi petugas, tetapi juga harus mempertimbangkan ketentuan yang mengatur pelayanan di luar situasi normal.\n\nA (2): Kurang tepat karena tingkat kemudahan berkas bukan dasar utama dalam menentukan siapa yang harus dilayani terlebih dahulu.\n\nB (1): Kurang tepat karena langsung menghentikan pelayanan tanpa memastikan mekanisme yang berlaku bagi masyarakat yang sudah berada dalam proses.\n\nC (4): Cukup tepat karena memanfaatkan kerja sama tim, tetapi tetap perlu memperhatikan ketentuan pelayanan yang berlaku.\n\nD (3): Cukup tepat karena melibatkan atasan, tetapi tidak selalu diperlukan jika mekanisme penanganannya sudah diatur.\n\nE (5): Paling tepat karena memastikan tindakan tetap sesuai ketentuan sekaligus mempertimbangkan kebutuhan masyarakat yang masih menunggu."
  },
  {
    "id": "new-casn-1-tkp-13",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Pada suatu pagi, seorang masyarakat datang untuk menyelesaikan proses administrasi yang sebelumnya sudah pernah ia konsultasikan kepada petugas lain. Ia membawa dokumen sesuai informasi yang diterimanya pada kunjungan sebelumnya. Setelah diperiksa, ternyata terdapat persyaratan tambahan yang tercantum dalam ketentuan terbaru. Masyarakat tersebut merasa keberatan karena menurutnya petugas sebelumnya sudah menyatakan dokumennya lengkap. Ia meminta agar proses tetap dilakukan karena sudah beberapa kali datang dan harus meninggalkan pekerjaannya setiap kali mengurus pelayanan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan bahwa ketentuan terbaru harus dipenuhi dan meminta masyarakat melengkapi dokumen sebelum proses dapat dilanjutkan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menghubungi petugas yang sebelumnya memberikan informasi untuk memastikan penyebab perbedaan sebelum menentukan tindak lanjut terhadap permohonan tersebut.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Memeriksa ketentuan terbaru, menjelaskan perubahan kepada masyarakat, dan membantu mencari mekanisme penyelesaian yang tetap sesuai prosedur.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Memproses dokumen yang tersedia terlebih dahulu karena masyarakat sebelumnya telah memperoleh informasi yang berbeda dari petugas.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Meminta masyarakat mengajukan keluhan terhadap petugas sebelumnya agar perbedaan informasi tersebut dapat ditindaklanjuti secara resmi.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 5 | D = 2 | E = 1.\n\nPilihan C paling tepat karena petugas perlu memastikan dasar aturan yang digunakan sekaligus memberikan solusi yang tetap berada dalam koridor pelayanan. Masyarakat tidak cukup hanya diberi tahu bahwa terdapat kekurangan, tetapi perlu dibantu memahami perubahan dan kemungkinan mekanisme penyelesaiannya.\n\nA (3): Cukup tepat karena persyaratan terbaru memang perlu dipenuhi. Namun, respons tersebut belum menunjukkan upaya membantu masyarakat mengatasi perbedaan informasi yang sebelumnya diterimanya.\n\nB (4): Baik karena memastikan sumber perbedaan informasi sebelum mengambil keputusan. Namun, penyelesaian sebaiknya tidak berhenti pada klarifikasi internal, tetapi juga memberikan solusi kepada masyarakat.\n\nC (5): Paling tepat karena menggabungkan kepastian aturan, komunikasi yang jelas, dan upaya memberikan solusi tanpa mengabaikan prosedur.\n\nD (2): Kurang tepat karena informasi sebelumnya tidak otomatis menghilangkan persyaratan yang berlaku saat ini.\n\nE (1): Kurang tepat karena pengaduan dapat menjadi mekanisme tersendiri, tetapi tidak secara langsung menyelesaikan kebutuhan pelayanan masyarakat pada saat itu."
  },
  {
    "id": "new-casn-1-tkp-14",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Anda sedang melayani masyarakat yang hendak mengurus dokumen penting. Pemohon terlihat kesulitan memahami beberapa pertanyaan pada formulir dan beberapa kali meminta penjelasan ulang. Antrean di belakangnya semakin panjang dan beberapa orang mulai menunjukkan ketidaksabaran. Anda sebenarnya masih memiliki cukup waktu untuk membantu pemohon tersebut, tetapi pelayanan menjadi lebih lambat dibandingkan biasanya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Membantu mengarahkan pengisian bagian yang belum dipahami sambil tetap memastikan informasi yang diberikan berasal dari ketentuan resmi.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Meminta pemohon mempelajari petunjuk pengisian terlebih dahulu agar pelayanan berikutnya dapat berlangsung lebih cepat.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Meminta petugas lain membantu pemohon tersebut sehingga Anda dapat melanjutkan antrean yang sudah menunggu.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menyelesaikan bagian yang sulit berdasarkan informasi yang disampaikan pemohon agar antrean tidak semakin panjang.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menyarankan pemohon datang kembali pada waktu yang lebih sepi supaya proses konsultasi dapat dilakukan dengan lebih leluasa.",
        "score": 3
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 2 | C = 4 | D = 1 | E = 3.\n\nPilihan A paling tepat karena pelayanan yang baik tetap memberikan bantuan yang proporsional kepada masyarakat tanpa mengorbankan ketepatan informasi. Kecepatan antrean penting, tetapi tidak seharusnya membuat masyarakat yang mengalami kesulitan kehilangan akses terhadap pelayanan yang semestinya.\n\nA (5): Paling tepat karena membantu masyarakat secara langsung, menggunakan informasi yang dapat dipertanggungjawabkan, dan tetap menjaga kualitas proses pelayanan.\n\nB (2): Kurang tepat karena tanggung jawab pelayanan tidak seharusnya sepenuhnya dikembalikan kepada masyarakat ketika petugas masih dapat memberikan bantuan.\n\nC (4): Baik karena dapat menjaga kelancaran antrean sekaligus memberikan bantuan kepada pemohon. Namun, perlu dipastikan bahwa petugas lain memiliki kompetensi dan kewenangan untuk menangani proses tersebut.\n\nD (1): Kurang tepat karena mengisi bagian formulir berdasarkan perkiraan dapat menimbulkan kesalahan pada dokumen yang menjadi tanggung jawab pemohon.\n\nE (3): Cukup tepat sebagai alternatif apabila kondisi memang memungkinkan, tetapi tidak seharusnya menjadi pilihan utama ketika pemohon masih dapat dilayani pada saat itu."
  },
  {
    "id": "new-casn-1-tkp-15",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Pada hari terakhir pendaftaran suatu program pemerintah, jumlah pemohon meningkat tajam. Beberapa masyarakat khawatir tidak sempat menyelesaikan proses sebelum batas waktu. Salah seorang pemohon kemudian meminta Anda memeriksa berkasnya terlebih dahulu karena tempat tinggalnya cukup jauh dan ia takut harus kembali lagi. Di belakangnya masih terdapat banyak pemohon yang telah menunggu lebih lama. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Memeriksa berkasnya lebih dahulu karena batas pendaftaran semakin dekat dan waktu pemohon cukup terbatas.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menjelaskan mekanisme antrean dan memastikan setiap pemohon dilayani sesuai ketentuan dengan proses yang tetap efisien.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta pemohon tetap mengikuti antrean karena masyarakat lain telah menunggu lebih dahulu untuk mendapatkan pelayanan.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Meminta persetujuan pemohon lain sebelum memberikan kesempatan agar keputusan tersebut tidak menimbulkan keberatan.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Memastikan ketentuan prioritas yang berlaku sebelum menentukan apakah pemohon tersebut dapat memperoleh pelayanan lebih dahulu.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 5 | C = 3 | D = 1 | E = 4.\n\nPilihan B paling tepat karena tetap menjaga keadilan antrean tanpa mengabaikan kebutuhan masyarakat. Petugas memberikan pelayanan berdasarkan mekanisme yang berlaku sekaligus berusaha menjaga proses tetap efektif di tengah meningkatnya jumlah pemohon.\n\nA (2): Kurang tepat karena batas pendaftaran dan jarak tempat tinggal belum menjadi dasar untuk mendahului masyarakat yang telah menunggu.\n\nB (5): Paling tepat karena menjaga ketertiban antrean, kesetaraan pelayanan, dan efisiensi proses tanpa memberikan perlakuan khusus.\n\nC (3): Cukup tepat karena mempertahankan urutan antrean, tetapi terlalu kaku jika terdapat kondisi tertentu yang memungkinkan pelayanan prioritas.\n\nD (1): Kurang tepat karena keputusan pelayanan seharusnya didasarkan pada ketentuan, bukan persetujuan dari masyarakat lain.\n\nE (4): Baik karena mempertimbangkan kemungkinan adanya mekanisme prioritas, tetapi masih berfokus pada kemungkinan memberikan perlakuan khusus sebelum melihat kebutuhan proses secara keseluruhan."
  },
  {
    "id": "new-casn-1-tkp-16",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Seorang masyarakat datang untuk mengambil dokumen yang sudah selesai. Setelah diperiksa, ternyata nama pada dokumen tersebut memiliki kesalahan satu huruf. Warga mengatakan bahwa kesalahan itu tidak masalah karena dokumen tersebut hanya akan digunakan untuk keperluan sederhana dan meminta Anda tetap menyerahkannya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menyerahkan dokumen tersebut karena perbedaannya kecil dan tidak mengubah identitas secara keseluruhan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menjelaskan bahwa kesalahan perlu diperbaiki terlebih dahulu sebelum dokumen dapat digunakan oleh pemohon.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Menanyakan kebutuhan dokumen tersebut dan mempertimbangkan penyerahannya sesuai urgensi pemohon.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Meminta warga menandatangani pernyataan bahwa kesalahan tersebut diketahui sebelum dokumen diberikan.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Memeriksa ketentuan koreksi dokumen dan memastikan perbaikannya dilakukan melalui prosedur yang berlaku.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 4 | C = 3 | D = 1 | E = 5.\n\nPilihan E paling tepat karena kesalahan identitas pada dokumen tetap perlu ditangani berdasarkan prosedur, meskipun menurut pemohon kesalahan tersebut terlihat kecil.\n\nA (2): Kurang tepat karena ukuran kesalahan tidak dapat menjadi dasar untuk mengabaikan ketepatan dokumen resmi.\n\nB (4): Baik karena tidak menyerahkan dokumen yang bermasalah, tetapi belum menunjukkan langkah konkret untuk menyelesaikan kesalahan tersebut.\n\nC (3): Cukup tepat karena mempertimbangkan kebutuhan pemohon, tetapi urgensi tidak seharusnya menggantikan ketentuan koreksi dokumen.\n\nD (1): Kurang tepat karena pernyataan pemohon tidak menghilangkan kewajiban memastikan dokumen resmi memiliki data yang benar.\n\nE (5): Paling tepat karena mengutamakan ketepatan dokumen sekaligus memastikan proses koreksi dilakukan sesuai ketentuan"
  },
  {
    "id": "new-casn-1-tkp-17",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda menjadi koordinator kecil dalam sebuah kegiatan lintas unit. Salah satu anggota tim jarang memberikan perkembangan pekerjaannya sehingga anggota lain kesulitan menyesuaikan bagian yang saling berkaitan. Ketika ditanya, ia mengatakan bahwa pekerjaannya tetap berjalan, tetapi tidak terbiasa memberikan laporan perkembangan terlalu sering. Sementara itu, beberapa keputusan tim membutuhkan informasi dari bagian yang ia tangani. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta anggota tersebut memberikan laporan perkembangan setiap hari agar koordinasi tim lebih mudah dilakukan.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Mengambil alih bagian pekerjaannya untuk sementara agar anggota lain dapat melanjutkan tugas masing-masing.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Membiarkan cara kerja tersebut selama hasil akhirnya tetap dapat diselesaikan sesuai target.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Menjelaskan kebutuhan koordinasi tim dan menyepakati bentuk serta waktu pembaruan informasi yang tidak membebani pekerjaannya.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta pimpinan menegur anggota tersebut karena kurang aktif memberikan perkembangan kepada tim.",
        "score": 3
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 2 | C = 1 | D = 5 | E = 3.\n\nPilihan D paling tepat karena masalah utamanya bukan sekadar frekuensi laporan, tetapi kebutuhan informasi untuk menjaga keterkaitan pekerjaan. Dengan menyepakati bentuk dan waktu pembaruan yang proporsional, koordinasi dapat diperbaiki tanpa menciptakan beban komunikasi yang tidak perlu.\n\nA (4): Baik karena meningkatkan keteraturan informasi, tetapi laporan setiap hari belum tentu diperlukan dan dapat menambah beban administratif bagi anggota tersebut.\n\nB (2): Kurang tepat karena mengambil alih pekerjaan tidak menyelesaikan masalah koordinasi dan dapat mengurangi tanggung jawab anggota terhadap tugasnya.\n\nC (1): Kurang tepat karena menunggu hasil akhir dapat membuat anggota lain terlambat menyesuaikan pekerjaan yang saling berkaitan.\n\nD (5): Paling tepat karena mencari pola komunikasi yang disepakati bersama dan disesuaikan dengan kebutuhan nyata tim.\n\nE (3): Cukup tepat jika koordinasi tetap tidak berjalan setelah upaya komunikasi dilakukan, tetapi melibatkan pimpinan terlalu cepat dapat membuat persoalan yang sebenarnya dapat diselesaikan di tingkat tim menjadi lebih formal."
  },
  {
    "id": "new-casn-1-tkp-18",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Dalam sebuah kegiatan bersama pihak eksternal, terjadi kesalahan koordinasi yang menyebabkan sebagian target tidak tercapai. Setelah dievaluasi, ternyata kedua pihak memiliki kontribusi terhadap masalah tersebut. Pihak mitra mengusulkan agar kerja sama berikutnya tetap dilanjutkan dengan memperbaiki mekanisme komunikasi. Beberapa rekan Anda berpendapat bahwa instansi sebaiknya mencari mitra baru agar masalah serupa tidak terulang. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mempertimbangkan mitra alternatif sambil mengevaluasi kembali efektivitas kerja sama yang telah berlangsung.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Melanjutkan kerja sama dengan pola sebelumnya sambil memperhatikan kemungkinan munculnya kendala serupa.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Membahas hasil evaluasi bersama mitra dan menyepakati langkah perbaikan sebelum menentukan pola kerja berikutnya.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menyampaikan hasil evaluasi kepada pimpinan agar keputusan mengenai kelanjutan kerja sama dapat ditetapkan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Membatasi cakupan kegiatan berikutnya sambil melihat perkembangan kinerja mitra dalam pelaksanaan kerja sama.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 1 | C = 5 | D = 4 | E = 2.\n\nPilihan C paling tepat karena tidak langsung menyalahkan mitra atau mengganti kerja sama, tetapi menggunakan hasil evaluasi untuk memperbaiki mekanisme kerja. Dengan membahas persoalan bersama dan menyepakati langkah perbaikan, hubungan profesional tetap terjaga sekaligus memberikan dasar yang lebih jelas untuk kegiatan berikutnya.\n\nA (3): Cukup tepat karena mempertimbangkan alternatif, tetapi terlalu cepat mengarah pada penggantian mitra sebelum upaya perbaikan dilakukan.\n\nB (1): Kurang tepat karena mempertahankan pola sebelumnya tanpa memperbaiki penyebab masalah berisiko mengulangi kendala yang sama.\n\nC (5): Paling tepat karena menggunakan evaluasi sebagai dasar perbaikan dan melibatkan mitra dalam menentukan mekanisme kerja berikutnya.\n\nD (4): Baik karena melibatkan pimpinan dalam keputusan, tetapi penyelesaian masalah secara langsung bersama mitra sebaiknya diupayakan terlebih dahulu.\n\nE (2): Cukup hati-hati karena membatasi risiko, tetapi belum menyelesaikan persoalan koordinasi yang menjadi penyebab utama kegagalan target."
  },
  {
    "id": "new-casn-1-tkp-19",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda menjadi bagian dari tim yang mengerjakan program bersama tiga unit kerja. Bagian Anda baru dapat diselesaikan setelah menerima data dari Unit B. Namun, Unit B masih menunggu informasi dari Unit C sebelum dapat memberikan data tersebut kepada Anda. Sementara itu, Unit C menganggap permintaan tersebut bukan prioritas karena tenggat yang mereka terima berbeda dengan tenggat program secara keseluruhan. Jika kondisi ini berlanjut, target program berpotensi terlambat. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengerjakan bagian yang tersedia terlebih dahulu sambil menunggu data lanjutan dari unit yang terkait.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menghubungi Unit C, menjelaskan keterkaitan pekerjaannya, dan menyepakati waktu penyampaian data yang memungkinkan.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta Unit B menggunakan informasi sementara agar bagian pekerjaan Anda dapat segera dilanjutkan.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menyampaikan hambatan kepada pimpinan program agar penentuan prioritas dapat segera dilakukan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyesuaikan pekerjaan Anda dengan jadwal Unit C sambil menjaga bagian program lain tetap berjalan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 2 | D = 4 | E = 1.\n\nPilihan B paling tepat karena menyelesaikan hambatan pada sumber persoalan melalui koordinasi langsung. Anda tidak hanya menyampaikan bahwa pekerjaan tertunda, tetapi membantu Unit C memahami dampaknya terhadap target bersama dan mencari waktu penyampaian yang realistis.\n\nA (3): Cukup tepat karena pekerjaan tetap berjalan, tetapi tidak menyelesaikan ketergantungan data yang menjadi hambatan utama.\n\nB (5): Paling tepat karena menghubungkan kepentingan antarunit, membangun kesepahaman, dan mencari solusi melalui koordinasi langsung.\n\nC (2): Kurang tepat karena penggunaan data sementara berisiko menghasilkan pekerjaan yang harus diulang apabila informasi akhirnya berbeda.\n\nD (4): Baik karena melibatkan pimpinan untuk menyelesaikan hambatan, tetapi koordinasi langsung antarunit sebaiknya diupayakan sebelum eskalasi.\n\nE (1): Kurang tepat karena hanya menyesuaikan diri dengan keterlambatan tanpa berusaha menyelesaikan penyebab yang menghambat rangkaian pekerjaan."
  },
  {
    "id": "new-casn-1-tkp-20",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Instansi Anda bekerja sama dengan sebuah organisasi eksternal dalam program pemberdayaan masyarakat. Dalam evaluasi awal, mitra mengusulkan agar sebagian besar sumber daya dialihkan ke kegiatan yang menurut mereka paling dibutuhkan masyarakat. Tim Anda memiliki data yang menunjukkan bahwa kebutuhan masyarakat cukup beragam sehingga pengalihan seluruh sumber daya berpotensi membuat kelompok lain tidak memperoleh layanan yang memadai. Kedua pihak sama-sama memiliki dasar dalam menyampaikan usulannya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mempertahankan hasil kajian internal sambil menjelaskan alasan pembagian sumber daya kepada pihak mitra.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengarahkan mitra menyesuaikan usulannya dengan rencana awal agar pelaksanaan program tetap berjalan sesuai rancangan.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mencoba usulan mitra secara terbatas sambil mempertahankan pembagian sumber daya pada kelompok lainnya.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Membawa perbedaan pandangan kepada pimpinan agar keputusan mengenai alokasi sumber daya dapat segera ditetapkan.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Membandingkan data kedua pihak, menyepakati dasar prioritas, lalu menyesuaikan alokasi berdasarkan tujuan program.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 4 | D = 1 | E = 5.\n\nPilihan E paling tepat karena tidak langsung menganggap salah satu pihak memiliki data yang lebih benar. Kedua informasi dibandingkan terlebih dahulu, kemudian prioritas disusun berdasarkan tujuan program agar keputusan dapat diterima dan dipertanggungjawabkan bersama.\n\nA (3): Cukup tepat karena menggunakan data yang telah tersedia, tetapi terlalu cepat mengutamakan kajian internal tanpa menguji informasi dari mitra.\n\nB (2): Kurang tepat karena mempertahankan rencana awal dapat mengabaikan temuan atau kebutuhan yang disampaikan oleh pihak mitra.\n\nC (4): Baik karena memberi ruang untuk menguji usulan, tetapi pendekatan terbatas belum tentu menghasilkan dasar yang cukup untuk menentukan alokasi secara keseluruhan.\n\nD (1): Kurang tepat karena langsung menyerahkan perbedaan kepada pimpinan sebelum upaya penyelarasan data dan kepentingan dilakukan.\n\nE (5): Paling tepat karena menggabungkan data kedua pihak, membangun kesepakatan prioritas, dan tetap berorientasi pada tujuan program."
  },
  {
    "id": "new-casn-1-tkp-21",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda tergabung dalam tim lintas unit yang sedang menyusun rekomendasi untuk pimpinan. Salah satu anggota tim berasal dari unit yang memiliki akses terhadap data penting, tetapi ia cenderung berhati-hati membagikan informasi karena khawatir data tersebut digunakan di luar kepentingan pekerjaan. Akibatnya, anggota lain kesulitan menyusun analisis yang membutuhkan data tersebut. Anda memahami bahwa kekhawatiran tersebut cukup beralasan, tetapi rekomendasi tim tetap harus disusun dalam waktu dekat. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Membahas kebutuhan data dengan anggota tersebut, menjelaskan tujuan penggunaannya, lalu menyepakati batas akses dan pemanfaatannya.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Menggunakan sumber data lain yang tersedia agar analisis tim tetap berjalan tanpa bergantung pada informasi tersebut.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Meminta pimpinan memberikan arahan mengenai akses data agar kebutuhan analisis dapat segera dipenuhi.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Meminta anggota tersebut memberikan informasi yang diperlukan karena data tersebut berkaitan dengan kepentingan pekerjaan tim.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menggunakan ringkasan informasi dari anggota tersebut agar kebutuhan analisis terpenuhi tanpa membuka keseluruhan data.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 4 | D = 1 | E = 2.\n\nPilihan A paling tepat karena menjaga keseimbangan antara kebutuhan tim dan kehati-hatian dalam penggunaan data. Dengan membahas tujuan, batas akses, serta cara pemanfaatannya, kebutuhan informasi dapat dipenuhi tanpa mengabaikan tanggung jawab terhadap data.\n\nA (5): Paling tepat karena membangun kepercayaan, memperjelas kebutuhan, dan mengatur penggunaan data secara bertanggung jawab.\n\nB (3): Cukup tepat karena pekerjaan tetap dapat berjalan, tetapi sumber lain belum tentu memiliki informasi yang sama atau cukup untuk mendukung analisis.\n\nC (4): Baik karena melibatkan pimpinan ketika akses data menjadi kendala, tetapi koordinasi langsung dengan pemilik data sebaiknya dilakukan terlebih dahulu.\n\nD (1): Kurang tepat karena tujuan pekerjaan bersama tidak otomatis menghilangkan batasan akses atau tanggung jawab terhadap data.\n\nE (2): Cukup hati-hati karena membatasi informasi yang dibagikan, tetapi belum memastikan apakah ringkasan tersebut cukup untuk kebutuhan analisis tim."
  },
  {
    "id": "new-casn-1-tkp-22",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda sedang menjalankan program bersama sebuah instansi mitra yang selama ini memiliki komunikasi cukup baik dengan Anda. Di tengah pelaksanaan, pejabat penghubung dari instansi tersebut dipindahkan dan digantikan oleh orang baru. Pejabat baru belum memahami seluruh kesepakatan yang telah dibuat sebelumnya sehingga beberapa keputusan mulai dipertanyakan. Sementara itu, jadwal kegiatan tetap berjalan dan anggota tim Anda khawatir perubahan tersebut akan mengganggu kerja sama. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengirimkan dokumen kerja sama agar pejabat baru dapat mempelajari kesepakatan yang telah dibuat sebelumnya.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menjelaskan tujuan, kesepakatan, dan perkembangan kegiatan serta membuka ruang untuk melakukan klarifikasi bersama.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta pejabat lama tetap membantu koordinasi agar pelaksanaan kegiatan berjalan tanpa mengalami banyak perubahan.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Meminta pimpinan mitra memastikan pejabat baru memahami keputusan yang telah disepakati oleh kedua pihak.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyesuaikan beberapa rencana kegiatan agar pejabat baru dapat mengikuti proses kerja sama secara bertahap.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 2 | D = 4 | E = 1.\n\nPilihan B paling tepat karena membangun kembali pemahaman dan komunikasi dengan pejabat baru tanpa mengabaikan kesepakatan yang telah dibuat.\n\nA (3): Cukup tepat karena memberikan dasar informasi, tetapi dokumen belum tentu menjelaskan seluruh konteks kerja sama.\n\nB (5): Paling tepat karena menggabungkan penyampaian informasi, komunikasi langsung, dan ruang klarifikasi antar pihak.\n\nC (2): Kurang tepat karena mempertahankan pejabat lama dapat menimbulkan ketergantungan dalam proses koordinasi.\n\nD (4): Baik karena melibatkan pimpinan mitra, tetapi komunikasi langsung dengan pejabat baru tetap perlu dilakukan.\n\nE (1): Kurang tepat karena mengubah rencana sebelum persoalan dipahami dapat menimbulkan penyesuaian yang tidak diperlukan."
  },
  {
    "id": "new-casn-1-tkp-23",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Dalam sebuah kegiatan lintas instansi, tim Anda mengira pihak mitra akan menyediakan sejumlah fasilitas pada hari pelaksanaan. Pihak mitra ternyata memahami bahwa fasilitas tersebut menjadi tanggung jawab tim Anda. Setelah ditelusuri, pembagian tugas tersebut memang pernah dibicarakan dalam rapat, tetapi tidak dituangkan secara jelas dalam dokumen hasil rapat. Kegiatan tinggal beberapa hari lagi dan kesalahan pemahaman tersebut berpotensi mengganggu pelaksanaan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta mitra menjalankan pembagian tugas yang pernah dibahas agar persiapan tidak kembali mengalami perubahan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menyiapkan fasilitas yang belum tersedia sambil menyelesaikan persoalan pembagian tanggung jawab setelah kegiatan.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mengakui adanya perbedaan pemahaman dan meminta kedua pihak meninjau kembali pembagian tugas sebelum persiapan dilanjutkan.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Membahas kebutuhan bersama mitra, menyepakati pembagian tanggung jawab yang jelas, lalu segera menyesuaikan persiapan kegiatan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Membagi kebutuhan fasilitas secara seimbang agar beban persiapan dapat ditanggung oleh kedua pihak.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 4 | D = 5 | E = 1.\n\nPilihan D paling tepat karena berfokus pada penyelesaian masalah secara kolaboratif tanpa memperdebatkan pihak yang paling bertanggung jawab. Dengan menyepakati kembali pembagian tugas secara jelas, kedua pihak memiliki pemahaman yang sama dan dapat segera menyesuaikan persiapan.\n\nA (3): Cukup tepat karena berusaha mempertahankan kesepakatan sebelumnya, tetapi pembagian tugas tersebut tidak terdokumentasi secara jelas sehingga berpotensi menimbulkan perbedaan pemahaman.\n\nB (2): Kurang tepat karena memang dapat menjaga kegiatan tetap berjalan, tetapi persoalan koordinasi justru ditunda dan berpotensi muncul kembali.\n\nC (4): Baik karena mengakui sumber masalah dan mendorong peninjauan bersama, tetapi belum secara tegas mengarahkan pada kesepakatan pembagian tugas yang segera diterapkan.\n\nD (5): Paling tepat karena menyelesaikan perbedaan melalui komunikasi, memperjelas tanggung jawab, dan segera menghubungkannya dengan kebutuhan persiapan kegiatan.\n\nE (1): Kurang tepat karena pembagian secara seimbang belum tentu sesuai dengan kapasitas, kewenangan, atau tanggung jawab masing-masing pihak"
  },
  {
    "id": "new-casn-1-tkp-24",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda ditempatkan dalam sebuah tim yang anggotanya berasal dari beberapa daerah dengan kebiasaan komunikasi yang berbeda. Dalam rapat, salah seorang anggota cenderung berbicara secara langsung dan menggunakan intonasi yang cukup tegas. Beberapa anggota lain menganggap gaya tersebut kurang menghargai peserta rapat, sementara Anda melihat bahwa ia memang terbiasa menyampaikan pendapat dengan cara seperti itu. Perbedaan tersebut mulai membuat sebagian anggota enggan menyampaikan pendapat. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta anggota tersebut menyesuaikan cara berbicaranya karena komunikasi dalam tim harus mengikuti kebiasaan mayoritas anggota.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Membiarkan perbedaan tersebut karena setiap orang memiliki karakter komunikasi yang berbeda selama pekerjaan tetap berjalan.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Membicarakan kondisi tersebut secara terbuka dengan tim dan mendorong setiap anggota menyepakati pola komunikasi yang saling menghargai.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menyampaikan kepada anggota yang merasa keberatan agar memahami bahwa perbedaan gaya komunikasi merupakan hal yang wajar.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mengusulkan agar pembahasan tertentu dilakukan melalui pesan tertulis supaya perbedaan gaya komunikasi tidak mengganggu kerja tim.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 5 | D = 4 | E = 1.\n\nPilihan C paling tepat karena perbedaan gaya komunikasi tidak seharusnya diselesaikan dengan memaksa seseorang mengikuti kebiasaan mayoritas. Tim perlu membangun kesepakatan komunikasi yang memungkinkan setiap anggota menyampaikan pendapat secara nyaman sekaligus tetap menjaga rasa saling menghargai.\n\nA (3): Cukup tepat karena penyesuaian komunikasi memang diperlukan, tetapi menjadikan kebiasaan mayoritas sebagai standar dapat mengabaikan keberagaman karakter anggota.\n\nB (2): Kurang tepat karena membiarkan situasi berlanjut dapat membuat sebagian anggota semakin enggan berkomunikasi dan memengaruhi kerja tim.\n\nC (5): Paling tepat karena mengutamakan dialog, saling memahami, dan membangun aturan komunikasi yang dapat diterima oleh seluruh anggota.\n\nD (4): Baik karena membantu anggota memahami adanya perbedaan karakter. Namun, hanya meminta pihak yang merasa keberatan untuk menyesuaikan diri belum menyelesaikan persoalan komunikasi secara bersama.\n\nE (1): Kurang tepat karena menghindari komunikasi langsung tidak menyelesaikan akar masalah dan justru dapat mengurangi interaksi dalam tim."
  },
  {
    "id": "new-casn-1-tkp-25",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Dalam kegiatan pelayanan di suatu daerah, Anda terlibat dalam program yang mengharuskan petugas berinteraksi dengan masyarakat setempat. Salah satu rencana kegiatan ternyata bertepatan dengan pelaksanaan tradisi masyarakat yang cukup penting bagi sebagian warga. Beberapa anggota tim menganggap kegiatan tetap harus dijalankan sesuai jadwal karena sudah ditetapkan sebelumnya. Namun, tokoh masyarakat menyampaikan bahwa pelaksanaan pada waktu tersebut dapat mengurangi partisipasi warga. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengkaji kembali jadwal kegiatan bersama tim dengan mempertimbangkan target program dan kondisi masyarakat setempat.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Mempertahankan jadwal kegiatan sambil meminta tokoh masyarakat membantu mendorong warga agar tetap berpartisipasi.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Menjalankan kegiatan sesuai rencana dengan menyesuaikan metode pelayanan agar dampak tradisi terhadap kehadiran warga berkurang.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Meminta pimpinan menentukan keputusan setelah menyampaikan adanya perbedaan antara jadwal program dan tradisi masyarakat setempat.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Membagi pelaksanaan kegiatan menjadi beberapa sesi agar pelayanan tetap berlangsung tanpa terlalu mengganggu kegiatan masyarakat.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 2 | D = 4 | E = 1.\n\nPilihan A menunjukkan kemampuan menyeimbangkan kepentingan program dengan kondisi sosial budaya masyarakat. Penyesuaian tidak dilakukan secara sepihak, tetapi dikaji bersama tim dengan tetap memperhatikan target kegiatan dan kebutuhan masyarakat.\n\nA (5): Paling tepat karena mempertimbangkan target program sekaligus kondisi sosial budaya masyarakat melalui pembahasan bersama tim.\n\nB (3): Cukup tepat karena tetap berupaya menjaga partisipasi masyarakat, tetapi lebih menekankan agar warga menyesuaikan diri dengan jadwal yang sudah ditetapkan.\n\nC (2): Kurang tepat karena hanya mengubah metode pelayanan tanpa terlebih dahulu mempertimbangkan apakah waktu pelaksanaan memang perlu disesuaikan.\n\nD (4): Tepat karena melibatkan pimpinan dalam menghadapi persoalan koordinasi, tetapi belum menunjukkan upaya awal untuk mencari solusi bersama tim.\n\nE (1): Kurang tepat karena langsung membagi kegiatan menjadi beberapa sesi tanpa terlebih dahulu mengkaji kebutuhan penyesuaian jadwal dan dampaknya terhadap program."
  },
  {
    "id": "new-casn-1-tkp-26",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda menjadi anggota tim yang melibatkan pegawai dari berbagai latar belakang sosial. Dalam beberapa pertemuan, muncul kecenderungan beberapa anggota hanya meminta pendapat dari rekan yang dianggap memiliki pengalaman atau latar belakang yang lebih dekat dengan persoalan. Anggota lain yang sebenarnya memiliki kompetensi relevan mulai jarang dilibatkan dalam diskusi. Tidak ada yang secara terang-terangan menolak pendapat mereka, tetapi pola tersebut mulai memengaruhi dinamika tim. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengingatkan anggota tim agar memberikan kesempatan yang sama kepada seluruh anggota untuk menyampaikan pendapat.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Meminta anggota yang jarang dilibatkan untuk lebih aktif menyampaikan pendapat agar keberadaannya tetap diperhitungkan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Membiarkan pola tersebut selama keputusan tim tetap dapat dibuat dan pekerjaan tidak mengalami hambatan.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Mengusulkan mekanisme diskusi yang memberi ruang kepada seluruh anggota sesuai kompetensi dan peran yang dimiliki.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta ketua tim menunjuk anggota tertentu untuk mewakili kelompok yang selama ini kurang dilibatkan dalam setiap pembahasan.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 3 | C = 1 | D = 5 | E = 2.\n\nPilihan D paling tepat karena persoalan tersebut tidak hanya berkaitan dengan keaktifan individu, tetapi juga pola interaksi dalam tim. Mekanisme diskusi yang memberi ruang berdasarkan kompetensi dan peran dapat membuat partisipasi lebih inklusif tanpa membedakan anggota berdasarkan latar belakang.\n\nA (4): Baik karena mengingatkan pentingnya kesempatan yang setara. Namun, imbauan umum belum tentu mengubah pola diskusi yang sudah terbentuk.\n\nB (3): Cukup tepat karena mendorong anggota untuk lebih aktif. Namun, tanggung jawab menciptakan lingkungan yang inklusif tidak seharusnya dibebankan hanya kepada anggota yang kurang dilibatkan.\n\nC (1): Kurang tepat karena pola tersebut dapat berkembang menjadi eksklusivitas meskipun pekerjaan dalam jangka pendek masih berjalan.\n\nD (5): Paling tepat karena memperbaiki mekanisme interaksi secara sistematis dan memastikan setiap anggota memperoleh ruang berdasarkan kompetensi serta kontribusinya.\n\nE (2): Kurang tepat karena menunjuk perwakilan berdasarkan kelompok tertentu justru dapat memperkuat pengelompokan, bukan menciptakan interaksi yang lebih terbuka."
  },
  {
    "id": "new-casn-1-tkp-27",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda ditugaskan sementara di sebuah daerah yang memiliki kebiasaan sosial berbeda dengan lingkungan kerja Anda sebelumnya. Pada minggu pertama, Anda beberapa kali merasa cara masyarakat setempat berkomunikasi cukup berbeda, terutama dalam menyampaikan kritik dan menyelesaikan persoalan. Seorang rekan mengatakan bahwa Anda sebaiknya menggunakan cara kerja yang biasa Anda gunakan agar tidak terlalu banyak menyesuaikan diri. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Mempelajari kebiasaan setempat, memahami konteksnya, lalu menyesuaikan cara berinteraksi tanpa mengabaikan aturan kerja.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Mempertahankan pola komunikasi yang sudah dikuasai agar penyampaian pekerjaan tetap konsisten selama bertugas.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mengikuti kebiasaan masyarakat setempat dalam berkomunikasi agar hubungan kerja dapat berlangsung lebih mudah.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Berkonsultasi dengan rekan yang lebih berpengalaman mengenai kebiasaan setempat yang perlu diperhatikan selama berinteraksi.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mengurangi komunikasi langsung dengan masyarakat dan memanfaatkan rekan yang lebih memahami kondisi sosial setempat.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 2 | D = 4 | E = 1.\n\nPilihan A menunjukkan kemampuan beradaptasi dengan lingkungan sosial yang berbeda tanpa kehilangan batas profesional. Penyesuaian dilakukan berdasarkan pemahaman terhadap konteks masyarakat, tetapi tetap menjaga kepatuhan terhadap aturan kerja.\n\nA (5): Paling tepat karena menunjukkan kemampuan memahami perbedaan sosial sekaligus menyesuaikan interaksi secara proporsional.\n\nB (3): Cukup tepat karena menjaga konsistensi komunikasi, tetapi kurang menunjukkan kemampuan beradaptasi dengan karakteristik lingkungan baru.\n\nC (2): Kurang tepat karena penyesuaian dilakukan terlalu luas tanpa memberikan batas bahwa kebiasaan tersebut tetap perlu disaring dengan aturan kerja.\n\nD (4): Tepat karena memanfaatkan pengalaman rekan untuk memahami kondisi setempat, tetapi proses adaptasi masih lebih bergantung pada pihak lain.\n\nE (1): Kurang tepat karena membatasi interaksi langsung justru dapat menghambat pemahaman terhadap masyarakat dan mengurangi kemampuan membangun hubungan kerja."
  },
  {
    "id": "new-casn-1-tkp-28",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda terlibat dalam kegiatan yang membutuhkan dukungan masyarakat setempat. Dalam pelaksanaannya, terdapat dua kelompok masyarakat yang memiliki pandangan berbeda mengenai bentuk kegiatan yang paling sesuai dengan kondisi wilayah mereka. Jika hanya mengikuti salah satu kelompok, kelompok lainnya berpotensi merasa tidak dilibatkan. Sementara itu, waktu persiapan kegiatan semakin terbatas. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan usulan kelompok yang lebih banyak anggotanya agar keputusan dapat segera ditetapkan dan kegiatan tetap berjalan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Mempertimbangkan usulan kelompok yang paling aktif berkoordinasi karena dinilai lebih memahami kebutuhan pelaksanaan kegiatan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Memberikan ruang kepada masing-masing kelompok untuk menerapkan pendekatan berbeda selama tujuan utama kegiatan tetap dapat tercapai.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Mempertahankan rencana awal dengan memberikan penjelasan agar perbedaan pandangan tidak menghambat persiapan kegiatan yang sudah berjalan.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Memfasilitasi pembahasan bersama untuk menemukan kepentingan yang sama dan menyusun penyesuaian yang dapat diterima kedua kelompok.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 4 | D = 1 | E = 5.\n\nPilihan E menunjukkan kemampuan membangun kesepahaman di tengah perbedaan kepentingan. Anda tidak langsung memilih salah satu kelompok, tetapi memfasilitasi komunikasi untuk menemukan titik temu yang tetap mendukung tujuan kegiatan.\n\nA (2): Kurang tepat karena jumlah anggota tidak menjadi dasar yang cukup untuk menentukan kepentingan yang harus diakomodasi.\n\nB (3): Cukup tepat karena mempertimbangkan komunikasi dengan masyarakat, tetapi dapat mengabaikan kelompok lain yang memiliki kebutuhan berbeda.\n\nC (4): Tepat karena memberikan ruang bagi perbedaan pendekatan, tetapi berpotensi membuat pelaksanaan kegiatan tidak seragam dan sulit dikoordinasikan.\n\nD (1): Kurang tepat karena terlalu berorientasi pada rencana awal dan belum berupaya menyelesaikan perbedaan kepentingan secara bersama.\n\nE (5): Paling tepat karena mempertemukan kedua kelompok untuk mencari kepentingan bersama dan menghasilkan penyesuaian yang dapat diterima."
  },
  {
    "id": "new-casn-1-tkp-29",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Dalam sebuah kegiatan bersama, beberapa anggota tim sering membuat candaan mengenai logat, makanan khas, dan kebiasaan daerah salah satu anggota. Awalnya anggota tersebut ikut tertawa, tetapi belakangan ia mulai lebih sedikit berbicara dan memilih tidak terlibat dalam percakapan informal. Beberapa rekan menganggap hal tersebut hanya candaan biasa dan tidak perlu dibesar-besarkan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menegur anggota yang membuat candaan tersebut agar tidak mengulangi perilakunya di depan anggota lain.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Membiarkan situasi selama anggota yang bersangkutan belum menyampaikan keberatan secara langsung.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Mengajak anggota tersebut berbicara secara pribadi untuk mengetahui apakah candaan tersebut membuatnya tidak nyaman.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Mengingatkan seluruh tim agar candaan mengenai latar belakang pribadi sebaiknya tidak menjadi bagian dari interaksi kerja.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Mengubah pembicaraan setiap kali candaan tersebut muncul agar suasana tim tidak menjadi canggung.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 1 | C = 3 | D = 5 | E = 2.\n\nPilihan D paling tepat karena persoalan tersebut bukan hanya menyangkut satu individu, tetapi juga budaya interaksi dalam tim. Mengingatkan seluruh anggota secara proporsional dapat mencegah candaan yang berpotensi menyinggung latar belakang tertentu tanpa harus mempermalukan individu tertentu.\n\nA (4): Baik karena memberikan batas terhadap perilaku yang berpotensi mengganggu kenyamanan. Namun, menegur individu secara langsung di depan anggota lain dapat membuat situasi menjadi defensif.\n\nB (1): Kurang tepat karena menunggu keberatan disampaikan secara eksplisit dapat membuat perilaku yang tidak nyaman terus berlangsung.\n\nC (3): Cukup tepat karena memahami perasaan anggota tersebut merupakan langkah yang baik. Namun, solusi juga perlu diarahkan pada pola interaksi seluruh tim.\n\nD (5): Paling tepat karena membangun kesadaran bersama mengenai pentingnya menghargai perbedaan tanpa mempermalukan pihak tertentu.\n\nE (2): Kurang tepat karena hanya mengalihkan pembicaraan tidak menyelesaikan kebiasaan yang menjadi sumber persoalan."
  },
  {
    "id": "new-casn-1-tkp-30",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Dalam sebuah kegiatan masyarakat, seorang tokoh lokal menyampaikan kritik terhadap cara kerja tim Anda. Kritik tersebut disampaikan dengan bahasa yang cukup keras di depan beberapa warga. Salah satu rekan merasa tersinggung dan menganggap cara penyampaian tersebut tidak pantas. Namun, isi kritik sebenarnya berkaitan dengan persoalan yang memang perlu diperbaiki dalam pelaksanaan kegiatan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan kepada tokoh tersebut bahwa kritik akan lebih mudah diterima jika disampaikan dengan cara yang lebih sopan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengabaikan cara penyampaian kritik dan langsung memperbaiki hal yang dianggap memang menjadi kekurangan tim.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Membahas kritik tersebut bersama tim untuk memisahkan persoalan cara penyampaian dengan substansi yang perlu ditindaklanjuti.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta tokoh tersebut menyampaikan kritik melalui forum resmi agar tidak menimbulkan kesalahpahaman di masyarakat.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Menyampaikan kepada rekan bahwa perbedaan cara berkomunikasi perlu dimaklumi karena setiap lingkungan memiliki kebiasaan yang berbeda.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 5 | D = 2 | E = 1.\n\nPilihan C paling tepat karena mampu melihat persoalan secara objektif. Cara penyampaian yang kurang nyaman tidak seharusnya membuat substansi kritik diabaikan, tetapi tim juga perlu mengevaluasi apakah kritik tersebut memang menunjukkan masalah yang perlu diperbaiki.\n\nA (3): Cukup tepat karena etika komunikasi tetap penting. Namun, langsung menyoroti cara penyampaian dapat membuat substansi kritik justru tidak tertangani.\n\nB (4): Baik karena fokus pada perbaikan masalah nyata. Namun, tim juga perlu membahas konteks komunikasi agar hubungan dengan masyarakat tetap terjaga.\n\nC (5): Paling tepat karena memisahkan persoalan emosional dari substansi, sehingga kritik dapat dianalisis secara objektif dan hubungan sosial tetap dijaga.\n\nD (2): Kurang tepat karena mengalihkan kritik ke forum resmi belum tentu diperlukan dan dapat membuat masyarakat merasa aspirasinya tidak didengarkan."
  },
  {
    "id": "new-casn-1-tkp-31",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Saat sedang memberikan pelayanan, sistem aplikasi mengalami gangguan sehingga beberapa data tidak dapat ditampilkan. Antrean masyarakat mulai bertambah, sementara sebagian petugas mengusulkan kembali menggunakan pencatatan manual agar pelayanan dapat terus berjalan. Namun, Anda mengetahui bahwa pencatatan manual memiliki risiko data tercatat ganda ketika sistem kembali normal. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menghentikan pelayanan sementara sampai sistem kembali normal agar tidak terjadi perbedaan pencatatan data.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menggunakan pencatatan manual untuk seluruh pelayanan agar antrean masyarakat dapat segera dikurangi.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Meminta masyarakat menunggu sampai sistem kembali normal agar seluruh proses tetap tercatat dalam aplikasi.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Menghubungi pengelola sistem untuk memastikan gangguan sekaligus mencari mekanisme sementara yang dapat dipertanggungjawabkan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Membatasi jenis pelayanan yang diberikan agar pencatatan tetap dapat dilakukan menggunakan sistem yang masih tersedia.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 1 | D = 5 | E = 4.\n\nPilihan D menyeimbangkan kebutuhan pelayanan dengan pengendalian risiko data. Gangguan dikonfirmasi terlebih dahulu dan solusi sementara dicari melalui mekanisme yang dapat dipertanggungjawabkan.\n\nA (2): Kurang tepat karena menghentikan pelayanan tanpa terlebih dahulu mencari alternatif penanganan gangguan.\n\nB (3): Cukup tepat karena pelayanan tetap berjalan, tetapi berisiko menimbulkan masalah pencatatan ketika sistem kembali normal.\n\nC (1): Kurang tepat karena sepenuhnya menunggu sistem pulih dan tidak memberikan alternatif bagi masyarakat yang sedang membutuhkan pelayanan.\n\nD (5): Paling tepat karena menggabungkan penanganan gangguan, kesinambungan pelayanan, dan pengendalian risiko pencatatan data.\n\nE (4): Tepat karena mengurangi risiko kesalahan pencatatan, tetapi dapat membatasi pelayanan lebih dari yang diperlukan."
  },
  {
    "id": "new-casn-1-tkp-32",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Menjelang pelaksanaan suatu program pelayanan, Anda menerima pesan melalui grup percakapan internal yang berisi informasi bahwa jadwal kegiatan akan mengalami perubahan. Pesan tersebut sudah diteruskan oleh beberapa pegawai, tetapi tidak mencantumkan sumber resmi. Beberapa rekan mulai menyesuaikan pekerjaan berdasarkan informasi tersebut. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menunggu informasi resmi sebelum mengubah pekerjaan agar tidak terjadi kesalahan akibat informasi yang belum jelas.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Menanyakan kepada pengirim pesan mengenai sumber informasi sebelum meneruskannya kepada pihak lain yang berkepentingan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Membandingkan informasi tersebut dengan jadwal yang tersedia dan menghubungi pihak terkait untuk memastikan perubahan yang disampaikan.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Mengingatkan rekan agar tidak langsung menyesuaikan pekerjaan sebelum memperoleh informasi resmi dari pihak yang berwenang.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Mengikuti informasi tersebut sementara waktu karena sudah diterima dan diteruskan oleh beberapa pegawai dalam grup.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 3 | C = 5 | D = 2 | E = 1.\n\nPilihan C menunjukkan proses verifikasi informasi melalui perbandingan sumber dan konfirmasi kepada pihak terkait sebelum mengambil tindakan.\n\nA (4): Tepat karena menghindari tindakan berdasarkan informasi yang belum terverifikasi, tetapi belum aktif memastikan kebenaran informasi tersebut.\n\nB (3): Cukup tepat karena meminta sumber informasi, tetapi belum memastikan kebenarannya melalui pihak yang memiliki kewenangan.\n\nC (5): Paling tepat karena melakukan pengecekan silang dan konfirmasi sebelum informasi digunakan sebagai dasar pekerjaan.\n\nD (2): Kurang tepat karena hanya memberikan peringatan kepada rekan tanpa ikut memastikan status informasi tersebut.\n\nE (1): Kurang tepat karena banyaknya orang yang meneruskan informasi tidak menjamin bahwa informasi tersebut benar."
  },
  {
    "id": "new-casn-1-tkp-33",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Instansi Anda mulai menggunakan aplikasi baru untuk menggantikan proses pencatatan yang sebelumnya dilakukan secara manual. Beberapa anggota tim merasa kesulitan karena fitur aplikasi berbeda dari sistem sebelumnya. Mereka kemudian mengusulkan agar pencatatan manual tetap dilakukan bersamaan dengan aplikasi supaya pekerjaan tidak terganggu. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan pencatatan manual sementara waktu sampai seluruh anggota tim terbiasa dengan aplikasi baru.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mempelajari fitur aplikasi secara bertahap dan membantu rekan memahami bagian yang paling sering digunakan dalam pekerjaan.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta petugas yang lebih memahami aplikasi menangani seluruh pencatatan agar kesalahan penggunaan dapat dikurangi.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Mengikuti cara kerja mayoritas anggota tim agar proses pencatatan tetap berjalan tanpa menimbulkan perbedaan metode.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menggunakan aplikasi sesuai kebutuhan sambil mencatat kendala yang muncul untuk disampaikan kepada pengelola sistem.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 2 | D = 1 | E = 4.\n\nPilihan B menunjukkan kemauan beradaptasi sekaligus membantu tim mengembangkan kemampuan menggunakan teknologi baru.\n\nA (3): Cukup tepat karena menjaga pekerjaan tetap berjalan, tetapi dapat membuat ketergantungan pada sistem lama semakin panjang.\n\nB (5): Paling tepat karena mendorong penguasaan sistem baru sekaligus membantu anggota tim menghadapi kesulitan penggunaannya.\n\nC (2): Kurang tepat karena hanya memindahkan tanggung jawab kepada pegawai tertentu dan tidak meningkatkan kemampuan seluruh tim.\n\nD (1): Kurang tepat karena mengikuti kebiasaan mayoritas tanpa mempertimbangkan tujuan penerapan sistem baru.\n\nE (4): Tepat karena membantu menemukan kendala penggunaan sistem, tetapi belum secara langsung mendorong peningkatan kemampuan anggota tim."
  },
  {
    "id": "new-casn-1-tkp-34",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Instansi Anda mulai menggunakan aplikasi baru untuk menggantikan proses pencatatan yang sebelumnya dilakukan secara manual. Beberapa anggota tim merasa kesulitan karena fitur aplikasi berbeda dari sistem sebelumnya. Mereka kemudian mengusulkan agar pencatatan manual tetap dilakukan bersamaan dengan aplikasi supaya pekerjaan tidak terganggu. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan pencatatan manual sementara waktu sampai seluruh anggota tim terbiasa dengan aplikasi baru.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mempelajari fitur aplikasi secara bertahap dan membantu rekan memahami bagian yang paling sering digunakan dalam pekerjaan.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta petugas yang lebih memahami aplikasi menangani seluruh pencatatan agar kesalahan penggunaan dapat dikurangi.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Mengikuti cara kerja mayoritas anggota tim agar proses pencatatan tetap berjalan tanpa menimbulkan perbedaan metode.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menggunakan aplikasi sesuai kebutuhan sambil mencatat kendala yang muncul untuk disampaikan kepada pengelola sistem.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 2 | D = 1 | E = 4.\n\nPilihan B menunjukkan kemauan beradaptasi sekaligus membantu tim mengembangkan kemampuan menggunakan teknologi baru.\n\nA (3): Cukup tepat karena menjaga pekerjaan tetap berjalan, tetapi dapat membuat ketergantungan pada sistem lama semakin panjang.\n\nB (5): Paling tepat karena mendorong penguasaan sistem baru sekaligus membantu anggota tim menghadapi kesulitan penggunaannya.\n\nC (2): Kurang tepat karena hanya memindahkan tanggung jawab kepada pegawai tertentu dan tidak meningkatkan kemampuan seluruh tim.\n\nD (1): Kurang tepat karena mengikuti kebiasaan mayoritas tanpa mempertimbangkan tujuan penerapan sistem baru.\n\nE (4): Tepat karena membantu menemukan kendala penggunaan sistem, tetapi belum secara langsung mendorong peningkatan kemampuan anggota tim."
  },
  {
    "id": "new-casn-1-tkp-35",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda bertugas mengelola dokumen pelayanan yang berisi data masyarakat. Suatu hari, seorang rekan meminta Anda mengirimkan file tersebut melalui akun pesan pribadi karena akun dinasnya sedang mengalami kendala. Rekan tersebut mengatakan bahwa file itu hanya akan digunakan untuk menyelesaikan pekerjaan dan akan segera dihapus setelah selesai. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengirimkan file tersebut karena kebutuhan pekerjaan harus segera diselesaikan sesuai batas waktu yang tersedia.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Mengirimkan bagian data yang diperlukan saja agar penggunaan informasi pribadi dapat dibatasi selama pekerjaan berlangsung.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Meminta rekan menggunakan perangkat lain yang tersedia agar pekerjaan tetap berjalan tanpa menghambat proses pelayanan.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Menunda pengiriman sampai akun dinas kembali dapat digunakan agar seluruh proses tetap berjalan melalui saluran resmi.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Memastikan mekanisme pengiriman yang diperbolehkan terlebih dahulu sebelum menentukan cara paling aman untuk membagikan file tersebut.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 4 | C = 3 | D = 1 | E = 5.\n\nPilihan E tidak langsung mengirimkan maupun menolak kebutuhan rekan, tetapi memastikan mekanisme yang aman dan sesuai sebelum data dibagikan.\n\nA (2): Kurang tepat karena mengutamakan kecepatan pekerjaan tanpa memastikan keamanan informasi yang akan dikirimkan.\n\nB (4): Tepat karena membatasi data yang dibagikan, tetapi belum memastikan saluran pengiriman tersebut aman dan diperbolehkan.\n\nC (3): Cukup tepat karena mencari alternatif teknis, tetapi belum menyelesaikan aspek keamanan dan kewenangan penggunaan data.\n\nD (1): Kurang tepat karena langsung menunda pekerjaan tanpa terlebih dahulu mencari mekanisme resmi yang mungkin dapat digunakan.\n\nE (5): Paling tepat karena mempertimbangkan kebutuhan pekerjaan sekaligus memastikan keamanan dan prosedur penggunaan data."
  },
  {
    "id": "new-casn-1-tkp-36",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda diminta membantu menyusun laporan berdasarkan sejumlah dokumen internal yang cukup banyak. Seorang rekan menyarankan menggunakan aplikasi kecerdasan buatan agar proses analisis dan penyusunan laporan lebih cepat. Namun, sebagian dokumen tersebut memuat informasi internal yang belum dapat disebarluaskan. Di sisi lain, waktu penyelesaian laporan cukup terbatas. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan aplikasi AI dengan menghapus beberapa informasi yang dianggap paling sensitif sebelum dokumen diproses.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Menyusun laporan secara manual agar seluruh informasi internal tetap berada dalam lingkungan kerja yang dapat dikendalikan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Menggunakan aplikasi AI untuk bagian yang bersifat umum dan mengolah informasi internal melalui mekanisme yang telah diperbolehkan.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta rekan menggunakan aplikasi AI terlebih dahulu agar pekerjaan dapat selesai cepat tanpa harus mengubah seluruh alur kerja.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Menunda penggunaan AI sampai seluruh dokumen dapat dipastikan tidak lagi mengandung informasi yang bersifat internal.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 3 | C = 5 | D = 2 | E = 1.\n\nPilihan C menunjukkan kemampuan memanfaatkan teknologi secara produktif tanpa mengabaikan keamanan informasi. Teknologi tetap digunakan pada bagian yang sesuai, sedangkan data internal diproses melalui mekanisme yang diperbolehkan.\n\nA (4): Tepat karena berusaha mengurangi risiko informasi sensitif, tetapi belum memastikan bahwa data yang tersisa aman untuk diproses melalui aplikasi tersebut.\n\nB (3): Cukup tepat karena menjaga keamanan informasi, tetapi belum memanfaatkan teknologi secara proporsional untuk meningkatkan efisiensi pekerjaan.\n\nC (5): Paling tepat karena menyeimbangkan efisiensi pemanfaatan AI dengan perlindungan informasi internal dan ketentuan penggunaannya.\n\nD (2): Kurang tepat karena menyerahkan penggunaan teknologi kepada rekan tanpa memastikan keamanan dan kewenangan pengolahan informasi.\n\nE (1): Kurang tepat karena menghindari teknologi secara keseluruhan meskipun sebagian pekerjaan sebenarnya dapat dibantu dengan aman."
  },
  {
    "id": "new-casn-1-tkp-37",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda menemukan adanya perbedaan antara data pada sistem digital dengan dokumen sumber yang digunakan dalam sebuah laporan. Seorang rekan mengatakan perbedaan tersebut kemungkinan hanya kesalahan input dan menyarankan Anda menyesuaikan data pada sistem agar sama dengan laporan yang akan segera dikirim. Jika dilakukan pemeriksaan ulang, proses penyelesaian laporan berpotensi menjadi lebih lama. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menyesuaikan data pada sistem berdasarkan laporan agar dokumen yang akan dikirim memiliki informasi yang konsisten.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Memeriksa sumber data dan riwayat perubahan sebelum menentukan bagian mana yang perlu diperbaiki.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta rekan yang membuat laporan memastikan kembali data tersebut sebelum dilakukan perubahan pada sistem.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menggunakan data yang sudah tercantum dalam sistem karena informasi tersebut telah melalui proses pencatatan sebelumnya.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Menyampaikan perbedaan kepada atasan agar keputusan perubahan data tidak dilakukan tanpa persetujuan pimpinan.",
        "score": 3
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 5 | C = 4 | D = 2 | E = 3.\n\nPilihan B tidak langsung mengubah data berdasarkan asumsi. Pemeriksaan sumber dan riwayat perubahan diperlukan untuk mengetahui asal perbedaan sebelum menentukan tindakan yang tepat.\n\nA (1): Kurang tepat karena langsung mengubah data agar sesuai laporan tanpa memastikan data mana yang sebenarnya benar.\n\nB (5): Paling tepat karena melakukan verifikasi berdasarkan sumber dan riwayat perubahan sebelum mengambil keputusan terhadap data.\n\nC (4): Tepat karena melibatkan pihak yang membuat laporan, tetapi verifikasi seharusnya tidak hanya bergantung pada penjelasan rekan tersebut.\n\nD (2): Kurang tepat karena keberadaan data dalam sistem tidak otomatis menjamin bahwa data tersebut bebas dari kesalahan.\n\nE (3): Cukup tepat karena melibatkan atasan, tetapi masalah teknis sebaiknya terlebih dahulu diperiksa berdasarkan sumber data yang tersedia."
  },
  {
    "id": "new-casn-1-tkp-38",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Dalam sebuah proyek lintas unit, Anda mengetahui bahwa salah satu anggota tim mengalami kendala akses ke aplikasi yang digunakan bersama. Tenggat pekerjaan semakin dekat, sedangkan anggota tersebut meminta Anda memberikan akun dan kata sandi milik Anda agar dapat segera menyelesaikan bagian pekerjaannya. Ia beralasan bahwa akses tersebut hanya akan digunakan selama beberapa jam dan pekerjaannya harus segera diselesaikan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Memberikan akses sementara dengan meminta anggota tersebut mengganti kata sandi setelah pekerjaannya selesai.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Mengizinkan penggunaan akun Anda dengan tetap mendampingi proses agar aktivitas yang dilakukan dapat diketahui.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Meminta anggota tersebut menggunakan akun rekan lain yang memiliki akses agar pekerjaan dapat segera dilanjutkan.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Menyelesaikan bagian pekerjaan anggota tersebut menggunakan akun sendiri agar kendala akses tidak menghambat proyek.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Membantu mencari mekanisme pemulihan atau pemberian akses resmi agar pekerjaan tetap berjalan tanpa berbagi kredensial.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 1 | D = 4 | E = 5.\n\nPilihan E menunjukkan penyelesaian masalah tanpa mengorbankan keamanan akses. Fokusnya bukan sekadar menolak permintaan, tetapi mencari mekanisme resmi agar anggota tetap dapat bekerja.\n\nA (2): Kurang tepat karena perubahan kata sandi setelah digunakan tidak menghilangkan risiko dari berbagi kredensial.\n\nB (3): Cukup tepat karena mencoba mengawasi penggunaan akun, tetapi tetap membuka risiko penggunaan identitas akses oleh pihak lain.\n\nC (1): Kurang tepat karena memindahkan penggunaan akses kepada akun orang lain tanpa menyelesaikan masalah akses secara resmi.\n\nD (4): Tepat karena pekerjaan tetap dapat diselesaikan tanpa memberikan kredensial, tetapi membuat tanggung jawab pekerjaan berpindah kepada Anda.\n\nE (5): Paling tepat karena menyelesaikan kendala akses melalui mekanisme resmi sekaligus menjaga keamanan akun dan akuntabilitas pengguna."
  },
  {
    "id": "new-casn-1-tkp-39",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam sebuah grup kerja, beredar potongan video yang menampilkan pernyataan seorang tokoh mengenai persoalan sosial. Video tersebut hanya menampilkan sebagian pembicaraan sehingga maknanya terlihat sangat berbeda dari konteks keseluruhan. Beberapa anggota langsung menyimpulkan bahwa pernyataan tersebut menunjukkan sikap permusuhan terhadap kelompok tertentu dan mulai mengajak anggota lain untuk tidak mempercayai tokoh tersebut. Langkah yang paling tepat untuk dilakukan adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Mengingatkan anggota agar tidak membagikan video tersebut sebelum diketahui sumber dan konteks pembicaraan secara lengkap.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Meminta pengirim video menjelaskan alasan membagikan materi tersebut agar maksud penyebarannya dapat diketahui.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Memeriksa sumber dan konteks lengkap video sebelum memberikan penilaian atau meneruskan informasi tersebut kepada pihak lain.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menghentikan pembahasan dalam grup agar perbedaan penafsiran tidak berkembang menjadi konflik antaranggota.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Menyampaikan bahwa setiap anggota memiliki hak menilai video tersebut berdasarkan pemahaman masing-masing.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 3 | C = 5 | D = 2 | E = 1.\n\nPotongan informasi dapat menghasilkan kesimpulan yang keliru apabila konteksnya tidak lengkap. Verifikasi sumber dan konteks merupakan langkah penting sebelum informasi digunakan untuk membentuk penilaian terhadap kelompok atau seseorang.\n\nA (4): Tepat karena mencegah penyebaran informasi yang belum jelas, tetapi belum secara aktif memastikan konteks sebenarnya.\n\nB (3): Cukup tepat karena mencari penjelasan dari pengirim, tetapi pengirim belum tentu memiliki informasi yang lengkap dan objektif.\n\nC (5): Paling tepat karena memastikan sumber dan konteks sebelum membuat penilaian atau menyebarkan informasi.\n\nD (2): Kurang tepat karena menghentikan pembahasan tanpa meluruskan informasi yang berpotensi menimbulkan kesalahpahaman.\n\nE (1): Kurang tepat karena memberikan kebebasan penafsiran tanpa mendorong pemeriksaan terhadap keutuhan informasi."
  },
  {
    "id": "new-casn-1-tkp-40",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam kegiatan kerja bersama, beberapa anggota mulai membentuk kelompok pergaulan yang hanya menerima pegawai dengan latar belakang dan pandangan yang dianggap sama. Mereka tetap bekerja secara formal dengan pegawai lain, tetapi mulai membatasi pertukaran informasi dan menghindari kegiatan bersama di luar kelompok tersebut. Apa yang sebaiknya Anda lakukan untuk menjaga kondisi kerja tetap kondusif?",
    "choices": [
      {
        "id": "a",
        "label": "Menghargai pilihan pergaulan mereka selama pembagian tugas dan tanggung jawab pekerjaan masih dapat diselesaikan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Mengajak seluruh anggota mengikuti kegiatan bersama secara berkala agar hubungan antarpegawai tidak semakin terpisah.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Meminta pimpinan mengatur kembali pembagian kelompok kerja agar interaksi antarpegawai menjadi lebih merata.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Membuka ruang interaksi yang melibatkan anggota dari berbagai latar belakang sambil menjaga komunikasi tetap berorientasi pada pekerjaan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Menyampaikan kepada kelompok tersebut bahwa pola pergaulan mereka dapat menghambat hubungan kerja jika terus dipertahankan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 4 | C = 3 | D = 5 | E = 1.\n\nD mendorong interaksi lintas kelompok tanpa memberikan label atau melakukan konfrontasi. Fokusnya adalah membangun ruang komunikasi yang sehat dan tetap berkaitan dengan kepentingan pekerjaan.\n\nA (2): Kurang tepat karena mengabaikan dampak pembatasan interaksi terhadap pertukaran informasi dan hubungan kerja.\n\nB (4): Tepat karena memperbanyak interaksi bersama, tetapi belum secara jelas memastikan interaksi tersebut tetap terarah pada tujuan pekerjaan.\n\nC (3): Cukup tepat karena dapat memperluas interaksi, tetapi perubahan pembagian kelompok belum tentu menyelesaikan pola eksklusivitas.\n\nD (5): Paling tepat karena menciptakan ruang interaksi lintas kelompok dengan tetap menjaga tujuan dan komunikasi profesional.\n\nE (1): Kurang tepat karena pendekatan langsung yang bernada menilai dapat membuat kelompok tersebut semakin defensif."
  },
  {
    "id": "new-casn-1-tkp-41",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam rapat internal, seorang anggota menyampaikan usulan yang berbeda dari mayoritas. Beberapa anggota kemudian mengatakan bahwa pendapat tersebut tidak perlu dipertimbangkan karena berasal dari orang yang dianggap memiliki cara pandang berbeda. Rapat mulai kehilangan fokus karena pembahasan bergeser dari substansi usulan menjadi penilaian terhadap pribadi pengusul. Bagaimana Anda mengembalikan pembahasan agar tetap konstruktif?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta pengusul menjelaskan kembali alasan usulannya setelah seluruh anggota menyampaikan pandangan masing-masing agar pembahasan berlangsung lebih teratur.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengarahkan anggota menilai usulan berdasarkan alasan, data, dan relevansinya terhadap kepentingan tim tanpa mengaitkannya dengan pribadi pengusul.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta ketua rapat mengatur kembali alur pembahasan agar setiap pendapat dapat dipertimbangkan sesuai dengan kepentingan dan tujuan rapat.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Mengingatkan anggota untuk menghargai perbedaan pandangan agar suasana rapat tetap kondusif dan pembahasan dapat kembali berjalan secara tertib.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Memberikan kesempatan kepada anggota lain menyampaikan tanggapan terhadap usulan tersebut sebelum rapat menentukan pandangan yang paling dapat diterima bersama.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 4 | D = 2 | E = 1.\n\nJawaban yang paling tepat adalah B (5) karena mengembalikan penilaian pada substansi, bukan identitas atau latar belakang pengusul.\n\nA (3): Cukup tepat karena memberi ruang penjelasan, tetapi belum mengarahkan anggota meninggalkan penilaian terhadap pribadi.\n\nB (5): Paling tepat karena menilai gagasan berdasarkan alasan, data, dan relevansinya.\n\nC (4): Tepat karena membantu mengembalikan keteraturan rapat, tetapi masih bergantung pada keputusan ketua.\n\nD (2): Cukup baik karena menjaga suasana, tetapi belum menyelesaikan pergeseran fokus pembahasan.\n\nE (1): Kurang tepat karena dapat memperpanjang perdebatan sebelum dasar penilaian terhadap usulan diperjelas."
  },
  {
    "id": "new-casn-1-tkp-42",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Seorang rekan mengajak Anda membatasi interaksi dengan pegawai dari unit lain karena menurutnya kelompok tersebut memiliki pandangan yang berbeda dan dapat memengaruhi cara berpikir anggota tim. Ia juga menyarankan agar informasi tertentu hanya dibahas di antara anggota yang dianggap memiliki pemahaman yang sama. Anda mengetahui bahwa pegawai dari unit tersebut tetap terlibat dalam beberapa pekerjaan bersama. Pertimbangan yang paling tepat dalam menghadapi situasi tersebut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Menjaga hubungan dengan kelompok sendiri agar koordinasi internal tetap kuat sebelum berinteraksi dengan unit lain.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengikuti saran rekan untuk membatasi komunikasi selama pekerjaan utama masih dapat diselesaikan tanpa melibatkan unit tersebut.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Meminta pimpinan menentukan batas komunikasi antarunit agar perbedaan pandangan tidak menimbulkan persoalan baru.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Membatasi pembahasan yang bersifat sensitif tetapi tetap berkomunikasi dengan unit lain untuk kebutuhan pekerjaan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menjaga komunikasi lintas unit berdasarkan kebutuhan pekerjaan dan menilai informasi berdasarkan sumber serta substansinya.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 1 | C = 2 | D = 4 | E = 5.\n\nE menjaga hubungan kerja lintas unit tanpa menerima pembatasan berdasarkan perbedaan pandangan. Informasi dinilai berdasarkan sumber dan substansinya, sehingga keputusan tidak dibangun atas prasangka terhadap kelompok tertentu.\n\nA (3): Cukup tepat karena menjaga koordinasi internal, tetapi dapat mempersempit interaksi jika dijadikan alasan untuk membatasi hubungan dengan unit lain.\n\nB (1): Kurang tepat karena pembatasan komunikasi berdasarkan perbedaan pandangan dapat memperkuat sikap eksklusif.\n\nC (2): Kurang tepat karena terlalu cepat menyerahkan pengaturan komunikasi kepada pimpinan tanpa terlebih dahulu mencari solusi dalam hubungan kerja.\n\nD (4): Tepat karena tetap menjaga komunikasi lintas unit sambil memperhatikan informasi yang perlu dikelola, tetapi belum menegaskan dasar penilaian informasi.\n\nE (5): Paling tepat karena mempertahankan kerja sama lintas unit sekaligus mendorong penilaian informasi berdasarkan sumber dan substansinya."
  },
  {
    "id": "new-casn-1-tkp-43",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam sebuah kegiatan bersama masyarakat, terjadi perbedaan pendapat mengenai pelaksanaan program. Salah seorang peserta mulai mengajak warga untuk tidak bekerja sama dengan kelompok masyarakat lain karena dianggap memiliki kepentingan yang berbeda. Beberapa warga terlihat mulai mengikuti ajakan tersebut, sementara kegiatan masih harus dilanjutkan. Respons yang paling tepat dalam kondisi tersebut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Mengajak perwakilan kelompok yang berbeda pandangan membahas persoalan secara terpisah terlebih dahulu agar ketegangan tidak memengaruhi keberlangsungan kegiatan bersama.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Mengarahkan pembahasan pada tujuan kegiatan dan membuka ruang dialog agar perbedaan kepentingan dapat diselesaikan tanpa berkembang menjadi permusuhan antarkelompok.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta tokoh masyarakat membantu mengingatkan warga mengenai pentingnya menjaga hubungan baik agar perbedaan kepentingan tidak menghambat pelaksanaan program.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Melanjutkan kegiatan sesuai kesepakatan sambil memberikan kesempatan kepada warga untuk menyampaikan keberatan melalui forum yang telah tersedia dalam kegiatan.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Menjaga agar kelompok yang berbeda pandangan tetap dapat mengikuti kegiatan dengan memberikan ruang masing-masing supaya perbedaan sikap tidak semakin berkembang.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 5 | C = 3 | D = 2 | E = 1.\n\nJawaban yang paling tepat adalah B (5) karena mengutamakan tujuan bersama sekaligus membuka dialog untuk mencegah perbedaan berkembang menjadi permusuhan kelompok.\n\nA (4): Tepat karena dapat meredakan ketegangan, tetapi pemisahan awal berisiko membuat kelompok semakin berjarak.\n\nB (5): Paling tepat karena menggabungkan dialog, kepentingan bersama, dan pencegahan konflik antarkelompok.\n\nC (3): Cukup tepat karena melibatkan tokoh masyarakat, tetapi belum secara langsung membuka ruang penyelesaian perbedaan.\n\nD (2): Kurang tepat karena kegiatan tetap berjalan, tetapi persoalan yang mulai memecah kelompok belum ditangani.\n\nE (1): Kurang tepat karena memberi ruang terpisah dapat mempertahankan batas antarkelompok dan mengurangi kerja sama."
  },
  {
    "id": "new-casn-1-tkp-44",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Anda menerima pesan pribadi dari seorang kenalan yang berisi ajakan untuk menyebarkan informasi mengenai kelompok tertentu. Pesan tersebut menyebut kelompok itu sebagai ancaman bagi masyarakat, tetapi tidak mencantumkan sumber yang jelas. Kenalan tersebut meminta Anda meneruskannya ke beberapa grup agar semakin banyak orang mengetahui informasi tersebut. Bagaimana Anda sebaiknya menyikapi pesan tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "Menolak meneruskan pesan tersebut dan memeriksa kebenaran informasinya melalui sumber yang dapat dipercaya.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Meneruskan pesan tersebut dengan catatan bahwa informasi masih perlu diperiksa oleh penerima.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Menanyakan kepada pengirim mengenai sumber informasi sebelum memutuskan apakah pesan tersebut perlu disebarkan.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menyimpan pesan tersebut sebagai bahan informasi pribadi tanpa memberikan tanggapan kepada pengirim.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Mengirimkan pesan kepada rekan kerja untuk meminta pendapat sebelum menentukan apakah informasi tersebut benar.",
        "score": 3
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 1 | C = 4 | D = 2 | E = 3.\n\nA menggabungkan dua langkah penting, yaitu tidak ikut menyebarkan informasi yang belum terverifikasi dan melakukan pemeriksaan melalui sumber yang dapat dipercaya. Hal ini penting karena narasi yang menuduh kelompok tertentu dapat memperkuat prasangka apabila disebarkan tanpa dasar.\n\nA (5): Paling tepat karena mencegah penyebaran informasi yang belum terverifikasi sekaligus mendorong pemeriksaan terhadap sumbernya.\n\nB (1): Kurang tepat karena tetap ikut menyebarkan informasi yang belum jelas meskipun disertai catatan.\n\nC (4): Tepat karena mencoba mengetahui sumber informasi, tetapi belum secara tegas mencegah pesan tersebut menyebar lebih lanjut.\n\nD (2): Kurang tepat karena hanya menyimpan pesan tanpa melakukan pemeriksaan atau mengambil sikap terhadap potensi penyebarannya.\n\nE (3): Cukup tepat karena mencari pandangan tambahan, tetapi rekan kerja belum tentu memiliki sumber yang lebih valid untuk memverifikasi informasi tersebut."
  },
  {
    "id": "new-casn-1-tkp-45",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam sebuah kegiatan seleksi anggota untuk program kerja, seorang peserta menyarankan agar calon yang memiliki latar belakang tertentu tidak perlu dipertimbangkan karena dianggap lebih sulit menyesuaikan diri dengan kelompok. Ia menyampaikan bahwa cara tersebut akan membuat proses kerja lebih cepat karena anggota memiliki karakter yang lebih seragam. Dasar yang paling tepat digunakan dalam menentukan calon anggota adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Kemampuan dan kesesuaian calon dengan kebutuhan kegiatan berdasarkan kriteria yang telah ditetapkan.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Kemudahan calon dalam menyesuaikan diri dengan mayoritas anggota yang sudah berada dalam kelompok.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Pengalaman calon bekerja bersama kelompok yang memiliki latar belakang serupa dengan anggota sebelumnya.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Rekomendasi anggota lama yang dianggap paling memahami karakter orang-orang yang akan bergabung.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Kesamaan cara pandang calon dengan anggota lain agar perbedaan pendapat selama kegiatan dapat diminimalkan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 4 | D = 2 | E = 1.\n\nSeleksi perlu didasarkan pada kriteria yang relevan dengan tugas dan kebutuhan kegiatan, bukan pada latar belakang atau kesamaan kelompok. Pendekatan tersebut mencegah eksklusivitas dalam proses pengambilan keputusan.\n\nA (5): Paling tepat karena menggunakan kriteria objektif yang berkaitan langsung dengan kemampuan dan kebutuhan kegiatan.\n\nB (3): Cukup tepat karena kemampuan beradaptasi penting, tetapi tidak seharusnya diukur berdasarkan kesesuaian dengan kelompok mayoritas.\n\nC (4): Tepat karena pengalaman dapat menjadi pertimbangan, tetapi kesamaan latar belakang bukan ukuran utama kemampuan seseorang.\n\nD (2): Kurang tepat karena rekomendasi anggota lama dapat membantu, tetapi berisiko membawa subjektivitas dan preferensi kelompok.\n\nE (1): Kurang tepat karena mengutamakan kesamaan pandangan dapat membatasi keberagaman dan memperkuat sikap eksklusif."
  }
];
