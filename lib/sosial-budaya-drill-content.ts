import type { Question } from "./types";

type SosialBudayaSeed = {
  prompt: string;
  choices: string[];
  scores: number[];
  explanation: string;
};

const sosialBudayaSeeds: SosialBudayaSeed[] = [
  {
    "prompt": "Tim Anda terdiri dari pegawai yang berasal dari beberapa daerah. Dalam rapat, sebagian anggota terbiasa menyampaikan pendapat secara langsung, sedangkan anggota lain lebih berhati-hati karena menganggap kritik terbuka dapat mempermalukan rekan. Perbedaan ini mulai membuat diskusi tidak seimbang. Beberapa anggota yang lebih pendiam sebenarnya memiliki informasi penting, tetapi memilih diam agar tidak dianggap menentang senior. Anda ditunjuk memfasilitasi rapat berikutnya dan harus menjaga keterbukaan tanpa membuat pola komunikasi menjadi terlalu lambat.\n\nLangkah apa yang paling efektif untuk menciptakan ruang diskusi yang dapat diikuti anggota dengan gaya komunikasi berbeda?",
    "choices": [
      "Menetapkan aturan diskusi yang aman sambil memberi ruang bagi anggota untuk menyampaikan pendapat melalui cara yang nyaman.",
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      5,
      4,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: A. Menetapkan aturan diskusi yang aman sambil memberi ruang bagi anggota untuk menyampaikan pendapat melalui cara yang nyaman.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Di unit pelayanan, masyarakat dari berbagai latar belakang datang untuk mengurus dokumen yang sama. Sebagian warga terbiasa bertanya berulang karena belum memahami istilah administratif, sementara petugas lain menganggap penjelasan sekali sudah cukup. Antrean meningkat dan mulai muncul keluhan bahwa petugas hanya ramah kepada warga yang cepat memahami prosedur. Anda melihat bahwa masalah bukan hanya kecepatan layanan, tetapi juga cara informasi disampaikan kepada kelompok dengan tingkat pemahaman berbeda.\n\nStrategi pelayanan manakah yang paling mencerminkan penghargaan terhadap keragaman kemampuan memahami informasi?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Menyederhanakan penjelasan dan menyediakan ruang bertanya tanpa mengubah persyaratan administrasi yang berlaku.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      4,
      5,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: B. Menyederhanakan penjelasan dan menyediakan ruang bertanya tanpa mengubah persyaratan administrasi yang berlaku.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Anda ditempatkan di daerah yang memiliki kebiasaan sosial berbeda dari lingkungan tempat Anda sebelumnya bekerja. Dalam kegiatan lapangan, tokoh masyarakat meminta agar agenda dimulai setelah pertemuan adat selesai. Jadwal tersebut berpotensi mengurangi waktu kerja, tetapi menolak permintaan secara langsung dapat membuat masyarakat merasa tidak dihargai. Atasan meminta target kegiatan tetap tercapai pada hari yang sama.\n\nBagaimana Anda menyeimbangkan penghormatan terhadap kebiasaan lokal dengan tuntutan penyelesaian target?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Menyesuaikan urutan kegiatan sambil mengatur kembali pembagian waktu agar target pekerjaan tetap tercapai.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      3,
      2,
      5,
      4,
      1
    ],
    "explanation": "Jawaban terbaik: C. Menyesuaikan urutan kegiatan sambil mengatur kembali pembagian waktu agar target pekerjaan tetap tercapai.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Seorang rekan menyampaikan bahwa anggota tim dari daerah tertentu biasanya lebih lambat mengambil keputusan karena dianggap terlalu banyak mempertimbangkan pendapat orang lain. Pernyataan itu muncul saat pembagian tugas dan beberapa anggota mulai mengikuti penilaian tersebut tanpa melihat pengalaman individu. Anda mengetahui bahwa rekan yang menjadi bahan pembicaraan justru memiliki kemampuan analitis yang baik dan pernah menyelesaikan tugas sulit tepat waktu.\n\nPertimbangan apa yang seharusnya menjadi dasar Anda ketika menentukan pembagian tugas dalam kondisi tersebut?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menilai pembagian tugas berdasarkan kompetensi dan rekam kerja tanpa menggunakan asal daerah sebagai pertimbangan.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      2,
      1,
      4,
      5,
      3
    ],
    "explanation": "Jawaban terbaik: D. Menilai pembagian tugas berdasarkan kompetensi dan rekam kerja tanpa menggunakan asal daerah sebagai pertimbangan.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Dalam sebuah program pemerintah, masyarakat lokal menolak metode sosialisasi karena materi disampaikan dengan istilah teknis dan dilakukan hanya melalui kanal digital. Tim Anda beranggapan metode tersebut paling efisien karena target waktu sempit. Namun, sebagian warga lebih mudah memahami informasi melalui pertemuan langsung dan contoh yang dekat dengan kehidupan mereka. Jika pendekatan tidak diubah, program berisiko dianggap tidak relevan meskipun substansinya bermanfaat.\n\nJika tujuan utama adalah meningkatkan pemahaman warga, perubahan pendekatan apa yang paling tepat dilakukan?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat.",
      "Menggabungkan sosialisasi langsung dan digital dengan contoh yang disesuaikan dengan cara belajar masyarakat."
    ],
    "scores": [
      1,
      3,
      2,
      4,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menggabungkan sosialisasi langsung dan digital dengan contoh yang disesuaikan dengan cara belajar masyarakat.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Dalam grup kerja, seorang pegawai membagikan lelucon tentang kebiasaan masyarakat dari wilayah tertentu. Beberapa anggota menganggapnya sekadar candaan, tetapi anggota lain merasa tersinggung dan memilih tidak menanggapi. Percakapan kemudian beralih menjadi saling membela kelompok masing-masing. Anda bukan moderator grup, tetapi memiliki hubungan kerja baik dengan pihak yang mengirim pesan tersebut.\n\nRespons seperti apa yang paling tepat agar persoalan tersebut tidak berkembang menjadi ketegangan antarkelompok?",
    "choices": [
      "Mengingatkan dampak candaan secara proporsional dan mengarahkan percakapan kembali pada penghormatan terhadap perbedaan.",
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "Jawaban terbaik: A. Mengingatkan dampak candaan secara proporsional dan mengarahkan percakapan kembali pada penghormatan terhadap perbedaan.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nE (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan."
  },
  {
    "prompt": "Sebuah kegiatan kantor akan melibatkan pegawai dari berbagai wilayah. Panitia ingin menggunakan satu pola acara yang sama seperti tahun sebelumnya karena dianggap praktis. Beberapa pegawai mengusulkan penyesuaian kecil agar setiap peserta dapat berpartisipasi tanpa merasa kebiasaannya diabaikan. Sebagian panitia khawatir terlalu banyak penyesuaian akan membuat acara kehilangan keseragaman.\n\nMenurut Anda, prinsip apa yang paling tepat digunakan panitia dalam menentukan bentuk kegiatan tersebut?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Menetapkan kerangka acara yang seragam sambil memberi penyesuaian terbatas yang mendukung partisipasi semua peserta.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "Jawaban terbaik: B. Menetapkan kerangka acara yang seragam sambil memberi penyesuaian terbatas yang mendukung partisipasi semua peserta.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Anda bekerja dengan mitra lokal yang lebih terbiasa membangun kesepakatan melalui beberapa pertemuan informal sebelum keputusan resmi dibuat. Tim internal Anda terbiasa mengambil keputusan melalui rapat formal yang lebih cepat. Perbedaan ritme ini membuat kedua pihak saling menilai kurang responsif. Padahal, proyek membutuhkan keputusan bersama dalam waktu terbatas.\n\nManakah pendekatan yang paling mampu menjembatani perbedaan budaya kerja tersebut?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Menyepakati tahapan komunikasi yang menghormati kebiasaan mitra sekaligus menetapkan batas waktu keputusan bersama.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      3,
      1,
      5,
      2,
      4
    ],
    "explanation": "Jawaban terbaik: C. Menyepakati tahapan komunikasi yang menghormati kebiasaan mitra sekaligus menetapkan batas waktu keputusan bersama.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik."
  },
  {
    "prompt": "Seorang pegawai baru dari luar daerah jarang mengikuti percakapan informal tim karena belum memahami kebiasaan dan istilah yang digunakan. Beberapa rekan menganggap ia kurang mampu berbaur, sementara pegawai tersebut tetap menyelesaikan tugasnya dengan baik. Anda melihat risiko terbentuknya kelompok kecil yang hanya berisi anggota lama.\n\nApa yang dapat Anda lakukan untuk membantu integrasi pegawai baru tanpa memaksanya mengikuti seluruh kebiasaan kelompok?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengajak pegawai baru berinteraksi secara bertahap sambil menjelaskan konteks kebiasaan yang belum dipahaminya.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      4,
      2,
      3,
      5,
      1
    ],
    "explanation": "Jawaban terbaik: D. Mengajak pegawai baru berinteraksi secara bertahap sambil menjelaskan konteks kebiasaan yang belum dipahaminya.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam pelayanan keliling, tim Anda harus mendatangi beberapa komunitas dengan pola interaksi berbeda. Cara pendekatan yang berhasil di satu lokasi ternyata membuat warga di lokasi lain merasa terlalu terburu-buru. Sebagian anggota tim ingin mempertahankan satu metode agar operasional lebih sederhana. Anda bertanggung jawab menyusun pendekatan untuk kunjungan berikutnya.\n\nKetika standar layanan harus tetap sama, bagian mana yang sebaiknya Anda sesuaikan?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali.",
      "Mempertahankan standar layanan sambil menyesuaikan cara penyampaian dengan karakteristik komunitas yang dilayani."
    ],
    "scores": [
      1,
      4,
      3,
      2,
      5
    ],
    "explanation": "Jawaban terbaik: E. Mempertahankan standar layanan sambil menyesuaikan cara penyampaian dengan karakteristik komunitas yang dilayani.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Di kantor, dua pegawai berbeda generasi sering salah memahami cara memberikan umpan balik. Pegawai senior menyampaikan koreksi secara singkat dan tegas, sedangkan pegawai junior menganggap cara tersebut terlalu personal. Pegawai senior merasa junior terlalu sensitif dan sulit menerima kritik. Keduanya tetap harus bekerja dalam satu proyek yang tenggatnya dekat.\n\nBagaimana sebaiknya Anda membantu kedua pegawai tersebut memperbaiki pola komunikasi mereka?",
    "choices": [
      "Menyepakati cara memberi umpan balik yang tegas pada pekerjaan tetapi tetap menjaga martabat dan hubungan profesional.",
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      5,
      4,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: A. Menyepakati cara memberi umpan balik yang tegas pada pekerjaan tetapi tetap menjaga martabat dan hubungan profesional.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam forum warga, sebagian peserta lebih nyaman menggunakan bahasa daerah ketika menjelaskan persoalan sosial. Beberapa anggota tim yang tidak memahami bahasa tersebut merasa pembahasan menjadi tidak transparan. Namun, memaksa seluruh peserta menggunakan bahasa formal sejak awal membuat warga yang lebih tua enggan berbicara.\n\nSolusi komunikasi mana yang paling mampu menjaga kenyamanan warga sekaligus memastikan informasi forum dapat dipahami bersama?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Menggunakan bahasa yang nyaman dalam pembahasan lalu merangkum hasilnya dengan istilah yang dipahami semua pihak.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      4,
      5,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: B. Menggunakan bahasa yang nyaman dalam pembahasan lalu merangkum hasilnya dengan istilah yang dipahami semua pihak.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Sebuah program penataan lingkungan mendapat penolakan karena masyarakat merasa rencana dibuat tanpa memahami kebiasaan mereka menggunakan ruang bersama. Tim teknis berpendapat bahwa desain telah memenuhi standar dan perubahan akan mengurangi efisiensi. Tokoh masyarakat meminta kesempatan menjelaskan pola penggunaan ruang sebelum keputusan final.\n\nJika Anda menjadi penghubung antara tim teknis dan warga, apa yang paling perlu dilakukan sebelum desain ditetapkan?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Mendengarkan pola penggunaan ruang dari warga lalu mencari penyesuaian desain yang tetap memenuhi standar teknis.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      3,
      2,
      5,
      4,
      1
    ],
    "explanation": "Jawaban terbaik: C. Mendengarkan pola penggunaan ruang dari warga lalu mencari penyesuaian desain yang tetap memenuhi standar teknis.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Anda mengetahui bahwa satu kelompok pegawai selalu makan bersama dan jarang mengajak anggota dari kelompok lain. Tidak ada aturan yang dilanggar, tetapi anggota baru mulai merasa sulit membangun kedekatan dengan tim. Beberapa rekan mengatakan bahwa kelompok tersebut hanya mengikuti kebiasaan pertemanan lama.\n\nUpaya apa yang paling proporsional untuk mencegah kebiasaan pertemanan tersebut berubah menjadi eksklusivitas kerja?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membuka kegiatan interaksi yang lebih inklusif tanpa mengatur pilihan pertemanan pribadi setiap pegawai.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      2,
      1,
      4,
      5,
      3
    ],
    "explanation": "Jawaban terbaik: D. Membuka kegiatan interaksi yang lebih inklusif tanpa mengatur pilihan pertemanan pribadi setiap pegawai.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Saat pelaksanaan survei, warga dengan tingkat pendidikan berbeda memberikan jawaban yang tidak konsisten karena sebagian tidak memahami istilah dalam kuesioner. Petugas ingin membaca pertanyaan apa adanya agar hasil dianggap seragam. Anda khawatir cara tersebut justru menghasilkan data yang kurang akurat.\n\nBagaimana Anda menjaga keseragaman survei tanpa mengabaikan perbedaan tingkat pemahaman responden?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama.",
      "Menjelaskan istilah dengan bahasa sederhana tanpa mengubah makna pertanyaan dan prosedur survei."
    ],
    "scores": [
      1,
      3,
      2,
      4,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menjelaskan istilah dengan bahasa sederhana tanpa mengubah makna pertanyaan dan prosedur survei.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Dalam rapat, seorang anggota menyampaikan keberatan dengan cara yang menurut Anda sangat tidak langsung. Beberapa rekan menganggap ia sebenarnya setuju karena tidak menyatakan penolakan secara tegas. Setelah rapat, Anda mengetahui bahwa ia memiliki alasan penting tetapi merasa tidak nyaman menyampaikan keberatan di forum besar.\n\nSetelah mengetahui kondisi tersebut, langkah apa yang paling tepat Anda lakukan terhadap masukan yang belum tersampaikan?",
    "choices": [
      "Memberi ruang klarifikasi secara pribadi lalu memastikan keberatan substantif tetap dipertimbangkan dalam keputusan.",
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "Jawaban terbaik: A. Memberi ruang klarifikasi secara pribadi lalu memastikan keberatan substantif tetap dipertimbangkan dalam keputusan.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nE (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan."
  },
  {
    "prompt": "Sebuah pesan berantai yang mengaitkan kelompok sosial tertentu dengan ancaman keamanan menyebar di lingkungan kerja. Belum ada kepastian mengenai sumber informasi tersebut. Beberapa pegawai mulai meminta agar interaksi dengan kelompok yang disebut dikurangi sampai situasi jelas.\n\nApa tindakan yang paling tepat untuk menjaga suasana kerja tetap objektif ketika informasi tersebut belum terverifikasi?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Menghentikan penyebaran informasi yang belum terverifikasi dan mengarahkan pegawai pada sumber resmi.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "Jawaban terbaik: B. Menghentikan penyebaran informasi yang belum terverifikasi dan mengarahkan pegawai pada sumber resmi.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Di daerah penugasan, masyarakat memiliki kebiasaan mengundang petugas dalam kegiatan sosial sebelum program dimulai. Tim Anda khawatir menerima undangan akan dianggap tidak netral. Namun, menolak seluruh interaksi sosial juga dapat membuat komunikasi dengan masyarakat menjadi kaku.\n\nBagaimana Anda menyikapi interaksi sosial tersebut tanpa mengurangi independensi dalam menjalankan tugas?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Berinteraksi dalam kegiatan sosial yang wajar sambil menjaga batas hubungan dan objektivitas tugas.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      3,
      1,
      5,
      2,
      4
    ],
    "explanation": "Jawaban terbaik: C. Berinteraksi dalam kegiatan sosial yang wajar sambil menjaga batas hubungan dan objektivitas tugas.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik."
  },
  {
    "prompt": "Seorang warga lanjut usia kesulitan menggunakan layanan digital yang baru diterapkan. Petugas lain menyarankan agar ia meminta bantuan keluarganya karena prosedur harus seragam. Anda mengetahui bahwa tidak semua warga memiliki pendamping yang dapat membantu.\n\nKetika layanan digital menjadi standar, bentuk dukungan apa yang paling tepat diberikan kepada warga tersebut?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Menyediakan pendampingan penggunaan layanan tanpa mengambil alih keputusan atau data pribadi warga.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      4,
      2,
      3,
      5,
      1
    ],
    "explanation": "Jawaban terbaik: D. Menyediakan pendampingan penggunaan layanan tanpa mengambil alih keputusan atau data pribadi warga.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam proyek bersama, pegawai lokal merasa keputusan terlalu banyak ditentukan oleh anggota yang berasal dari kantor pusat. Pegawai pusat merasa pengalaman mereka lebih relevan untuk menjaga standar. Ketegangan meningkat karena kedua pihak merasa kepentingannya kurang didengar.\n\nModel pengambilan keputusan seperti apa yang paling tepat untuk mempertemukan kebutuhan lokal dan standar pusat?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim.",
      "Menggabungkan standar pusat dengan masukan lokal melalui pembagian ruang keputusan dan tanggung jawab yang jelas."
    ],
    "scores": [
      1,
      4,
      3,
      2,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menggabungkan standar pusat dengan masukan lokal melalui pembagian ruang keputusan dan tanggung jawab yang jelas.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Seorang rekan menggunakan istilah daerah dalam rapat internal karena merasa lebih mudah menjelaskan konsep tertentu. Anggota lain tidak memahami istilah tersebut dan memilih diam agar tidak dianggap kurang mengerti. Rapat tetap berjalan, tetapi kualitas diskusi menurun.\n\nApa yang sebaiknya dilakukan agar perbedaan istilah tidak mengurangi kualitas komunikasi tim?",
    "choices": [
      "Meminta penjelasan istilah secara terbuka lalu menggunakan padanan yang dipahami seluruh anggota.",
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      5,
      4,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: A. Meminta penjelasan istilah secara terbuka lalu menggunakan padanan yang dipahami seluruh anggota.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam kegiatan masyarakat, jadwal kerja tim berbenturan dengan tradisi lokal yang hanya berlangsung pada waktu tertentu. Mengubah jadwal dapat memengaruhi target, tetapi memaksakan agenda berisiko mengurangi partisipasi warga. Anda harus menyusun rekomendasi untuk pimpinan.\n\nRekomendasi apa yang paling seimbang antara kebutuhan operasional dan kondisi sosial masyarakat?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Menghitung dampak perubahan jadwal dan menawarkan penyesuaian terukur yang menjaga target serta partisipasi warga.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      4,
      5,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: B. Menghitung dampak perubahan jadwal dan menawarkan penyesuaian terukur yang menjaga target serta partisipasi warga.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Sebuah kelompok masyarakat meminta prioritas pelayanan karena merasa selama ini kurang diperhatikan. Kelompok lain menilai permintaan tersebut tidak adil jika diberikan tanpa dasar yang jelas. Data menunjukkan ada perbedaan kebutuhan, tetapi belum tentu membenarkan perlakuan istimewa dalam semua aspek layanan.\n\nDasar apa yang paling tepat digunakan ketika menentukan prioritas pelayanan dalam situasi tersebut?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Menetapkan prioritas berdasarkan kebutuhan terukur dengan kriteria yang transparan bagi seluruh kelompok.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      3,
      2,
      5,
      4,
      1
    ],
    "explanation": "Jawaban terbaik: C. Menetapkan prioritas berdasarkan kebutuhan terukur dengan kriteria yang transparan bagi seluruh kelompok.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam rapat evaluasi, seorang pegawai dari kelompok minoritas menyampaikan pengalaman kurang nyaman saat berinteraksi dengan rekan kerja. Tidak ada bukti pelanggaran berat, tetapi pola candaan dan komentar tertentu membuatnya merasa tidak diterima. Sebagian anggota meminta masalah dianggap selesai karena hubungan kerja tetap berjalan.\n\nBagaimana Anda sebaiknya menanggapi keluhan tersebut agar suasana kerja tetap inklusif?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menanggapi pengalaman tersebut secara serius dan memperbaiki pola interaksi sebelum berkembang menjadi konflik.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      2,
      1,
      4,
      5,
      3
    ],
    "explanation": "Jawaban terbaik: D. Menanggapi pengalaman tersebut secara serius dan memperbaiki pola interaksi sebelum berkembang menjadi konflik.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Anda mendapat tugas memimpin tim yang anggotanya memiliki cara berbeda dalam mengambil keputusan. Sebagian menginginkan keputusan cepat dari pemimpin, sementara lainnya mengharapkan pembahasan lebih luas. Tenggat pekerjaan tidak memungkinkan diskusi tanpa batas.\n\nBagaimana Anda menentukan mekanisme pengambilan keputusan yang tetap partisipatif tetapi tidak menghambat pekerjaan?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat.",
      "Menentukan batas waktu pembahasan dan memastikan masukan penting terkumpul sebelum keputusan dibuat."
    ],
    "scores": [
      1,
      3,
      2,
      4,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menentukan batas waktu pembahasan dan memastikan masukan penting terkumpul sebelum keputusan dibuat.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Masyarakat di wilayah kerja Anda lebih percaya pada penjelasan dari tokoh lokal daripada materi tertulis dari kantor. Sebagian anggota tim menilai ketergantungan pada tokoh lokal dapat mengurangi peran pemerintah. Namun, tanpa dukungan tokoh tersebut, partisipasi masyarakat diperkirakan rendah.\n\nPeran seperti apa yang paling tepat diberikan kepada tokoh lokal dalam pelaksanaan program?",
    "choices": [
      "Melibatkan tokoh lokal sebagai penghubung tanpa menyerahkan kendali substansi program kepada mereka.",
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "Jawaban terbaik: A. Melibatkan tokoh lokal sebagai penghubung tanpa menyerahkan kendali substansi program kepada mereka.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nE (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan."
  },
  {
    "prompt": "Dalam sebuah pelatihan, peserta berasal dari lingkungan sosial yang berbeda dan memiliki tingkat keberanian berbicara yang tidak sama. Metode diskusi terbuka membuat peserta tertentu mendominasi, sementara peserta lain hanya mengikuti. Panitia ingin mempertahankan metode tersebut karena dianggap lebih interaktif.\n\nPerubahan metode apa yang paling tepat agar interaksi tetap hidup sekaligus memberi kesempatan yang lebih merata?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Menggunakan sesi kelompok kecil lalu menggabungkan hasilnya dalam forum bersama agar perspektif tetap terhubung.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "Jawaban terbaik: B. Menggunakan sesi kelompok kecil lalu menggabungkan hasilnya dalam forum bersama agar perspektif tetap terhubung.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Seorang pegawai mengusulkan pembagian tugas berdasarkan kebiasaan kerja kelompok daerah masing-masing agar koordinasi lebih mudah. Usulan itu terlihat praktis, tetapi berisiko membuat pegawai hanya bekerja dengan orang yang dianggap memiliki karakter serupa. Anda diminta memberi pendapat dalam rapat tim.\n\nPrinsip apa yang sebaiknya Anda tekankan ketika menentukan pembagian tugas dalam tim yang beragam?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Membagi tugas berdasarkan kompetensi dan kebutuhan proyek tanpa menggunakan asal kelompok sebagai penentu utama.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      3,
      1,
      5,
      2,
      4
    ],
    "explanation": "Jawaban terbaik: C. Membagi tugas berdasarkan kompetensi dan kebutuhan proyek tanpa menggunakan asal kelompok sebagai penentu utama.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik."
  },
  {
    "prompt": "Dalam pelayanan publik, warga tertentu datang dengan cara berbicara yang dianggap kurang sopan oleh petugas. Setelah ditelusuri, gaya komunikasi tersebut merupakan kebiasaan yang umum di lingkungan mereka. Petugas merasa tetap harus menjaga batas profesional.\n\nBagaimana petugas sebaiknya membedakan persoalan gaya komunikasi dengan perilaku yang benar-benar mengganggu layanan?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Menjaga standar kesopanan layanan sambil membedakan gaya komunikasi dari perilaku yang mengganggu pelayanan.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      4,
      2,
      3,
      5,
      1
    ],
    "explanation": "Jawaban terbaik: D. Menjaga standar kesopanan layanan sambil membedakan gaya komunikasi dari perilaku yang mengganggu pelayanan.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Tim Anda mengembangkan aplikasi layanan untuk masyarakat. Uji coba menunjukkan sebagian pengguna tidak terbiasa membaca petunjuk digital yang panjang. Pengembang mengusulkan menambah fitur, sedangkan tim lapangan mengusulkan pendampingan manual. Anggaran terbatas sehingga tidak semua solusi dapat dilakukan sekaligus.\n\nJika anggaran hanya cukup untuk satu prioritas awal, pertimbangan apa yang paling tepat digunakan?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali.",
      "Memprioritaskan perbaikan informasi paling penting dan menyediakan pendampingan pada titik layanan yang membutuhkan."
    ],
    "scores": [
      1,
      4,
      3,
      2,
      5
    ],
    "explanation": "Jawaban terbaik: E. Memprioritaskan perbaikan informasi paling penting dan menyediakan pendampingan pada titik layanan yang membutuhkan.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Dalam diskusi lintas unit, salah satu unit menggunakan istilah dan kebiasaan kerja yang berbeda sehingga beberapa anggota menilai mereka tidak profesional. Setelah dikaji, perbedaan tersebut lebih banyak berasal dari budaya organisasi yang berbeda. Proyek tetap membutuhkan satu standar hasil.\n\nBagaimana Anda menjaga keseragaman hasil tanpa menghilangkan variasi cara kerja yang masih dapat diterima?",
    "choices": [
      "Menyepakati standar hasil bersama tanpa memaksakan seluruh kebiasaan kerja harus dibuat seragam.",
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      5,
      4,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: A. Menyepakati standar hasil bersama tanpa memaksakan seluruh kebiasaan kerja harus dibuat seragam.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Seorang anggota masyarakat meminta petugas menggunakan pendekatan khusus karena menurutnya cara umum kurang sesuai dengan norma setempat. Pendekatan tersebut masih memungkinkan selama tidak melanggar aturan. Beberapa rekan menolak karena khawatir memberi contoh bahwa aturan dapat dinegosiasikan.\n\nBagaimana Anda menentukan apakah penyesuaian pendekatan tersebut layak diterapkan?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Menyesuaikan cara pelaksanaan yang diperbolehkan tanpa mengubah standar dan ketentuan layanan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      4,
      5,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: B. Menyesuaikan cara pelaksanaan yang diperbolehkan tanpa mengubah standar dan ketentuan layanan.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Di media sosial internal, muncul komentar bahwa pegawai tertentu mendapat kesempatan karena kedekatan budaya dengan pimpinan. Belum ada bukti perlakuan khusus, tetapi komentar tersebut mulai memengaruhi kepercayaan tim. Pimpinan meminta Anda membantu menjaga suasana kerja.\n\nApa langkah yang paling tepat untuk menangani isu tersebut tanpa memperkuat prasangka?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Mendorong evaluasi berbasis data dan menjaga agar isu tidak berkembang menjadi prasangka antarkelompok.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      3,
      2,
      5,
      4,
      1
    ],
    "explanation": "Jawaban terbaik: C. Mendorong evaluasi berbasis data dan menjaga agar isu tidak berkembang menjadi prasangka antarkelompok.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Saat melakukan kunjungan, Anda menemukan bahwa warga lebih mudah memahami contoh konkret daripada presentasi formal. Beberapa anggota tim menganggap pendekatan tersebut terlalu sederhana untuk program pemerintah. Namun, tujuan utama kunjungan adalah memastikan warga memahami manfaat dan kewajiban program.\n\nJika pemahaman warga menjadi indikator keberhasilan, bagaimana sebaiknya materi disampaikan?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Menyesuaikan cara menjelaskan dengan kebutuhan warga tanpa mengurangi akurasi materi program.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      2,
      1,
      4,
      5,
      3
    ],
    "explanation": "Jawaban terbaik: D. Menyesuaikan cara menjelaskan dengan kebutuhan warga tanpa mengurangi akurasi materi program.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Dalam satu tim, pegawai yang telah lama tinggal di daerah setempat merasa pendatang harus mengikuti semua kebiasaan lokal. Pegawai pendatang merasa sebagian kebiasaan tersebut tidak relevan dengan tugas kantor. Perbedaan ini mulai memengaruhi pembagian pekerjaan.\n\nBagaimana Anda menetapkan batas antara adaptasi terhadap budaya setempat dan kebebasan pribadi pegawai?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama.",
      "Menyepakati kebiasaan yang relevan dengan pekerjaan sambil menghormati perbedaan pilihan pribadi."
    ],
    "scores": [
      1,
      3,
      2,
      4,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menyepakati kebiasaan yang relevan dengan pekerjaan sambil menghormati perbedaan pilihan pribadi.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Sebuah forum masyarakat menghadirkan dua kelompok dengan pandangan berbeda tentang penggunaan fasilitas umum. Keduanya membawa pengalaman masing-masing dan mulai saling menyalahkan. Jika Anda langsung memilih salah satu usulan, kelompok lain berpotensi menolak seluruh hasil forum.\n\nPendekatan apa yang paling konstruktif untuk menghasilkan aturan penggunaan fasilitas yang dapat diterima kedua kelompok?",
    "choices": [
      "Memetakan kepentingan kedua pihak dan mencari aturan penggunaan yang dapat diterapkan secara adil.",
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "Jawaban terbaik: A. Memetakan kepentingan kedua pihak dan mencari aturan penggunaan yang dapat diterapkan secara adil.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nE (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan."
  },
  {
    "prompt": "Dalam rapat, peserta dari latar belakang berbeda menggunakan cara berbeda untuk menunjukkan persetujuan. Ada yang menyatakan setuju secara eksplisit, ada yang hanya mengangguk atau diam. Ketua rapat ingin segera menyimpulkan bahwa semua peserta menyetujui keputusan.\n\nApa yang perlu dipastikan sebelum keputusan tersebut dinyatakan sebagai kesepakatan bersama?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memastikan bentuk persetujuan dipahami bersama sebelum keputusan dianggap telah disepakati.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "Jawaban terbaik: B. Memastikan bentuk persetujuan dipahami bersama sebelum keputusan dianggap telah disepakati.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Anda menemukan materi sosialisasi menggunakan contoh kehidupan yang kurang sesuai dengan kondisi masyarakat setempat. Materi tersebut sudah disahkan dan perubahan substansi tidak diperbolehkan. Tim lapangan tetap perlu membuat masyarakat merasa konteks mereka diperhatikan.\n\nPenyesuaian seperti apa yang masih dapat dilakukan tanpa mengubah substansi materi yang telah disahkan?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menambahkan contoh penjelas lokal yang tidak mengubah substansi materi yang telah disahkan.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      3,
      1,
      5,
      2,
      4
    ],
    "explanation": "Jawaban terbaik: C. Menambahkan contoh penjelas lokal yang tidak mengubah substansi materi yang telah disahkan.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik."
  },
  {
    "prompt": "Seorang rekan menganggap konflik kecil antarkelompok tidak perlu ditangani karena belum mengganggu pekerjaan. Anda melihat beberapa anggota mulai mengurangi komunikasi dan informasi penting tidak lagi dibagikan secara terbuka.\n\nKapan dan bagaimana sebaiknya Anda melakukan intervensi terhadap kondisi tersebut?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Menangani tanda awal konflik melalui dialog terarah sebelum berdampak pada pekerjaan.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      4,
      2,
      3,
      5,
      1
    ],
    "explanation": "Jawaban terbaik: D. Menangani tanda awal konflik melalui dialog terarah sebelum berdampak pada pekerjaan.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam program pemberdayaan, kelompok perempuan, pemuda, dan tokoh senior memiliki cara berbeda dalam menyampaikan kebutuhan. Pertemuan gabungan membuat peserta senior lebih dominan. Jika forum dipisahkan seluruhnya, masukan lintas kelompok justru berkurang.\n\nFormat partisipasi seperti apa yang paling tepat untuk memperoleh masukan yang beragam sekaligus menjaga dialog antarkelompok?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim.",
      "Menggunakan sesi kelompok kecil lalu membawa hasilnya ke forum bersama untuk menjaga partisipasi tetap seimbang."
    ],
    "scores": [
      1,
      4,
      3,
      2,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menggunakan sesi kelompok kecil lalu membawa hasilnya ke forum bersama untuk menjaga partisipasi tetap seimbang.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Di sebuah wilayah, petugas baru dianggap kurang menghargai masyarakat karena jarang mengikuti kegiatan sosial di luar jam kerja. Petugas tersebut sebenarnya menjaga batas profesional dan tidak ingin terlihat berpihak. Masyarakat mulai menjaga jarak sehingga koordinasi lapangan menjadi lebih sulit.\n\nBagaimana petugas dapat membangun kedekatan sosial tanpa mengaburkan batas profesional?",
    "choices": [
      "Membangun kedekatan melalui interaksi sosial yang wajar sambil mempertahankan batas profesional.",
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      5,
      4,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: A. Membangun kedekatan melalui interaksi sosial yang wajar sambil mempertahankan batas profesional.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam tim multikultural, beberapa anggota merasa cara kerja kelompok mayoritas selalu menjadi standar tidak tertulis. Anggota lain mulai mengikuti pola tersebut meskipun memiliki cara berbeda yang tetap memenuhi target. Anda diminta memperbaiki dinamika kerja.\n\nPerubahan apa yang paling tepat agar standar kerja tidak berubah menjadi dominasi budaya kelompok tertentu?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Menilai metode berdasarkan hasil dan aturan kerja sambil membuka ruang bagi cara berbeda yang tetap efektif.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      4,
      5,
      3,
      2,
      1
    ],
    "explanation": "Jawaban terbaik: B. Menilai metode berdasarkan hasil dan aturan kerja sambil membuka ruang bagi cara berbeda yang tetap efektif.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Sebuah kegiatan pembangunan memerlukan akses melalui lahan yang menurut masyarakat memiliki nilai sosial tertentu. Secara administratif akses tersebut memungkinkan, tetapi proses yang terburu-buru dapat menimbulkan penolakan. Tenggat proyek cukup ketat.\n\nLangkah apa yang paling tepat sebelum tim menggunakan akses tersebut?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Mengupayakan dialog pemilik kepentingan dan mencari akses alternatif yang tetap memenuhi kebutuhan proyek.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      3,
      2,
      5,
      4,
      1
    ],
    "explanation": "Jawaban terbaik: C. Mengupayakan dialog pemilik kepentingan dan mencari akses alternatif yang tetap memenuhi kebutuhan proyek.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam rapat daring, beberapa peserta dari wilayah dengan koneksi terbatas sering terlambat merespons. Peserta lain menganggap mereka tidak aktif. Anda mengetahui kendala teknis tersebut sudah terjadi beberapa kali.\n\nBagaimana Anda memastikan kendala teknis tidak berubah menjadi penilaian yang keliru terhadap partisipasi anggota?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menyediakan mekanisme kontribusi alternatif agar kendala teknis tidak disalahartikan sebagai kurangnya partisipasi.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      2,
      1,
      4,
      5,
      3
    ],
    "explanation": "Jawaban terbaik: D. Menyediakan mekanisme kontribusi alternatif agar kendala teknis tidak disalahartikan sebagai kurangnya partisipasi.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Seorang pegawai membuat keputusan layanan berdasarkan pengalaman sebelumnya bahwa warga dari komunitas tertentu biasanya membutuhkan perlakuan berbeda. Ia bermaksud mempercepat layanan, tetapi tidak memeriksa kebutuhan warga secara individual.\n\nApa yang perlu diperbaiki dari cara pegawai tersebut menggunakan pengalaman dalam memberikan layanan?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat.",
      "Mengembalikan penilaian layanan pada kebutuhan nyata setiap warga dan menggunakan pengalaman sebagai informasi pendukung."
    ],
    "scores": [
      1,
      3,
      2,
      4,
      5
    ],
    "explanation": "Jawaban terbaik: E. Mengembalikan penilaian layanan pada kebutuhan nyata setiap warga dan menggunakan pengalaman sebagai informasi pendukung.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  },
  {
    "prompt": "Dalam kegiatan lintas daerah, setiap kelompok mengusulkan bentuk kontribusi yang berbeda sesuai kebiasaan mereka. Panitia ingin menetapkan satu bentuk kontribusi agar mudah dihitung, tetapi beberapa bentuk alternatif sebenarnya memiliki nilai yang sama bagi tujuan kegiatan.\n\nBagaimana panitia dapat menjaga keadilan penilaian tanpa memaksakan bentuk kontribusi yang seragam?",
    "choices": [
      "Menetapkan ukuran hasil yang sama sambil memberi fleksibilitas pada bentuk kontribusi yang setara.",
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali."
    ],
    "scores": [
      5,
      3,
      4,
      1,
      2
    ],
    "explanation": "Jawaban terbaik: A. Menetapkan ukuran hasil yang sama sambil memberi fleksibilitas pada bentuk kontribusi yang setara.\n\nA (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nB (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nC (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nD (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nE (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan."
  },
  {
    "prompt": "Masyarakat mengeluhkan bahwa informasi program pemerintah selalu disampaikan dengan bahasa yang terlalu resmi. Petugas khawatir bahasa sederhana akan mengurangi kesan profesional. Anda melihat warga justru membutuhkan kejelasan agar dapat mengambil keputusan dengan benar.\n\nBagaimana seharusnya petugas menyeimbangkan bahasa yang mudah dipahami dengan tuntutan ketepatan informasi resmi?",
    "choices": [
      "Mempertahankan jadwal semula agar seluruh kegiatan dapat berlangsung sesuai rencana awal.",
      "Menggunakan bahasa yang lebih sederhana tanpa menghilangkan istilah penting dan ketentuan resmi.",
      "Mengikuti waktu yang diminta masyarakat agar hubungan dengan tokoh lokal tetap terjaga.",
      "Meminta pimpinan memilih antara target kegiatan dan penyesuaian jadwal agar keputusan lebih aman.",
      "Mengurangi agenda lapangan agar waktu yang tersedia dapat digunakan untuk kegiatan utama."
    ],
    "scores": [
      2,
      5,
      1,
      4,
      3
    ],
    "explanation": "Jawaban terbaik: B. Menggunakan bahasa yang lebih sederhana tanpa menghilangkan istilah penting dan ketentuan resmi.\n\nA (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nB (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nC (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nD (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nE (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak."
  },
  {
    "prompt": "Dalam tim, seorang pegawai menilai rekan dari wilayah tertentu kurang cocok menjadi koordinator karena dianggap terlalu menjaga perasaan anggota. Anda melihat ia justru mampu meredakan perbedaan dan menjaga target tetap berjalan.\n\nDasar penilaian apa yang paling objektif untuk menentukan kelayakan seseorang menjadi koordinator?",
    "choices": [
      "Menggunakan pengalaman umum tentang karakter daerah sebagai pertimbangan awal pembagian pekerjaan.",
      "Membagi tugas berdasarkan kenyamanan kerja agar koordinasi antaranggota menjadi lebih mudah.",
      "Menilai kelayakan koordinator berdasarkan rekam kerja dan kemampuan memimpin, bukan persepsi kelompok.",
      "Meminta anggota menentukan sendiri tugas yang paling sesuai dengan kebiasaan masing-masing.",
      "Menghindari penugasan tertentu kepada pegawai yang dianggap kurang sesuai dengan pola tim."
    ],
    "scores": [
      3,
      1,
      5,
      2,
      4
    ],
    "explanation": "Jawaban terbaik: C. Menilai kelayakan koordinator berdasarkan rekam kerja dan kemampuan memimpin, bukan persepsi kelompok.\n\nA (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nB (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nC (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik."
  },
  {
    "prompt": "Sebuah kebijakan baru mendapat kritik dari komunitas lokal karena dianggap mengubah kebiasaan yang sudah berlangsung lama. Kebijakan tersebut tetap harus diterapkan, tetapi beberapa aspek teknis masih dapat disesuaikan. Tim Anda diminta menjaga penerimaan masyarakat.\n\nStrategi apa yang paling tepat untuk meningkatkan penerimaan tanpa mengurangi kepatuhan terhadap kebijakan?",
    "choices": [
      "Menetapkan pola komunikasi yang selama ini berlaku agar seluruh anggota mengikuti standar yang sama.",
      "Memberi kebebasan kepada anggota memilih cara berkomunikasi selama tugas tetap dapat diselesaikan.",
      "Meminta anggota yang lebih berpengalaman memandu anggota lain agar diskusi berjalan lebih cepat.",
      "Menjelaskan alasan kebijakan dan mengidentifikasi penyesuaian teknis yang tetap sesuai ketentuan.",
      "Mengurangi pembahasan terbuka untuk mencegah perbedaan gaya komunikasi semakin terlihat."
    ],
    "scores": [
      4,
      2,
      3,
      5,
      1
    ],
    "explanation": "Jawaban terbaik: D. Menjelaskan alasan kebijakan dan mengidentifikasi penyesuaian teknis yang tetap sesuai ketentuan.\n\nA (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nB (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional.\n\nE (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan."
  },
  {
    "prompt": "Dalam proyek akhir, anggota tim berbeda pendapat tentang cara menyampaikan hasil kepada masyarakat. Sebagian ingin menggunakan istilah teknis agar informasi terlihat lengkap, sementara lainnya ingin menggunakan contoh sederhana agar mudah dipahami. Waktu presentasi terbatas dan audiens beragam.\n\nFormat penyampaian mana yang paling efektif untuk menjangkau audiens dengan tingkat pemahaman berbeda?",
    "choices": [
      "Mempertahankan penjelasan resmi agar seluruh pemohon memperoleh informasi dengan format yang seragam.",
      "Mengutamakan warga yang cepat memahami prosedur agar antrean tidak semakin panjang.",
      "Menyerahkan penjelasan tambahan kepada petugas tertentu agar proses layanan lebih terkoordinasi.",
      "Membatasi pertanyaan tambahan setelah penjelasan diberikan agar waktu pelayanan tetap terkendali.",
      "Menyusun pesan inti yang akurat dengan bahasa sederhana serta menyediakan rincian bagi pihak yang memerlukannya."
    ],
    "scores": [
      1,
      4,
      3,
      2,
      5
    ],
    "explanation": "Jawaban terbaik: E. Menyusun pesan inti yang akurat dengan bahasa sederhana serta menyediakan rincian bagi pihak yang memerlukannya.\n\nA (1): Paling kurang tepat karena kurang adaptif dan belum memberikan penyelesaian yang memadai terhadap persoalan.\n\nB (4): Sangat baik karena mempertimbangkan kebutuhan situasi, tetapi pendekatannya masih belum selengkap pilihan terbaik.\n\nC (3): Cukup tepat karena mengandung unsur positif, tetapi belum sepenuhnya menyelesaikan persoalan atau mengakomodasi semua pihak.\n\nD (2): Kurang optimal karena hanya menekankan sebagian kepentingan dan masih berpotensi menimbulkan persoalan lanjutan.\n\nE (5): Paling optimal karena menunjukkan adaptasi, menghargai perbedaan, dan tetap menjaga tujuan serta prinsip profesional."
  }
];

export const SOSIAL_BUDAYA_DRILL_QUESTIONS: Question[] = sosialBudayaSeeds.map((seed, index) => ({
  id: `tkp-sosial-budaya-${String(index + 1).padStart(3, "0")}`,
  category: "TKP",
  topic: "Sosial Budaya",
  prompt: seed.prompt,
  choices: seed.choices.map((label, choiceIndex) => ({
    id: String.fromCharCode(97 + choiceIndex),
    label,
    score: seed.scores[choiceIndex],
  })),
  explanation: seed.explanation,
}));
