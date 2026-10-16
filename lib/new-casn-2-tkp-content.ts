import type { Question } from "./types";

// Imported from SOAL TKP 1 DAN 2.pdf, package 2. See content-sources/full-new-casn.json.
export const NEW_CASN_2_TKP_QUESTIONS: Question[] = [
  {
    "id": "new-casn-2-tkp-01",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda bertugas melakukan verifikasi dokumen pengajuan bantuan dari masyarakat. Menjelang akhir jam kerja, Anda menemukan adanya ketidaksesuaian kecil antara data pada formulir dengan dokumen pendukung. Rekan kerja yang menangani berkas tersebut mengatakan bahwa perbedaan itu kemungkinan hanya kesalahan penulisan dan menyarankan agar berkas tetap diproses karena pemohon sudah menunggu cukup lama. Di sisi lain, masih ada banyak berkas yang harus Anda selesaikan hari itu. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Memproses berkas tersebut sambil mencatat ketidaksesuaian untuk diperbaiki pada tahap berikutnya.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengembalikan berkas kepada petugas terkait untuk diperiksa kembali sebelum melanjutkan pekerjaan lainnya.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Menghubungi pemohon untuk memastikan data yang berbeda sebelum menentukan tindak lanjut berkas.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menyampaikan temuan kepada atasan dan meminta arahan sebelum proses berkas dilanjutkan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Melanjutkan berkas lain sambil menyerahkan penentuan tindak lanjut kepada petugas yang menangani.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 2 | D = 5 | E = 1.\n\nPilihan D paling tepat karena ketidaksesuaian ditemukan dalam proses verifikasi yang berkaitan dengan pemberian bantuan kepada masyarakat. Meskipun terlihat kecil, keputusan untuk melanjutkan atau menunda berkas sebaiknya didasarkan pada prosedur dan kewenangan yang jelas, bukan asumsi bahwa perbedaan tersebut hanya kesalahan penulisan.\n\nA (3): Cukup tepat karena tetap mencatat temuan, tetapi membiarkan berkas diproses sebelum ketidaksesuaian dipastikan dapat menimbulkan masalah pada tahap berikutnya.\n\nB (4): Baik karena berupaya memastikan kembali dokumen, tetapi keputusan penanganan sebaiknya tetap mempertimbangkan kewenangan dan prosedur yang berlaku.\n\nC (2): Dapat membantu mengklarifikasi data, tetapi menghubungi pemohon secara langsung belum tentu menjadi kewenangan petugas dan dapat melewati mekanisme verifikasi.\n\nD (5): Paling tepat karena menunjukkan ketelitian, kehati-hatian, dan kepatuhan prosedur dengan meminta arahan sebelum mengambil keputusan terhadap berkas yang bermasalah.\n\nE (1): Kurang tepat karena mengabaikan temuan yang belum diselesaikan dan menyerahkan keputusan tanpa memastikan bahwa berkas telah memenuhi ketentuan."
  },
  {
    "id": "new-casn-2-tkp-02",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda mendapat tugas membuat laporan yang akan digunakan pimpinan dalam rapat evaluasi. Waktu pengerjaan cukup terbatas. Saat memeriksa data, Anda menemukan beberapa angka yang berasal dari sumber berbeda dan belum sepenuhnya konsisten. Seorang rekan menyarankan agar Anda menggunakan angka yang paling sering muncul supaya laporan dapat segera diselesaikan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan angka yang paling banyak muncul dengan pertimbangan data tersebut paling mendekati kondisi sebenarnya.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Meminta rekan membantu menentukan angka yang paling sesuai agar laporan dapat segera diselesaikan.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menyusun laporan menggunakan data yang tersedia dengan memberi catatan pada angka yang belum konsisten.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Menghubungi sumber data yang berbeda untuk memperoleh angka yang dapat digunakan sebelum laporan diselesaikan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyampaikan ketidakkonsistenan data kepada pimpinan dan meminta arahan sebelum menggunakan angka yang belum terverifikasi.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 2 | C = 3 | D = 4 | E = 5.\n\nPilihan E paling tepat karena laporan akan digunakan dalam rapat evaluasi sehingga keakuratan data perlu dipastikan sebelum menjadi dasar pembahasan. Dengan menyampaikan kondisi secara terbuka dan meminta arahan, Anda menghindari penggunaan data yang belum terverifikasi sekaligus tetap mempertimbangkan kebutuhan pimpinan.\n\nA (1): Kurang tepat karena frekuensi kemunculan data tidak dapat menjadi dasar untuk menentukan angka yang paling benar.\n\nB (2): Cukup membantu proses, tetapi penentuan data yang benar seharusnya didasarkan pada verifikasi sumber, bukan sekadar pertimbangan rekan.\n\nC (3): Cukup tepat karena menunjukkan kehati-hatian, tetapi laporan tetap berpotensi memuat angka yang belum memiliki kepastian.\n\nD (4): Baik karena berusaha melakukan verifikasi, tetapi menghubungi berbagai sumber tanpa memastikan mekanisme atau kewenangan dapat membuat proses kurang terarah.\n\nE (5): Paling tepat karena mengutamakan akurasi, transparansi, dan akuntabilitas sebelum data digunakan dalam evaluasi pimpinan."
  },
  {
    "id": "new-casn-2-tkp-03",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda diminta mengambil keputusan teknis dalam pekerjaan karena atasan sedang menghadiri rapat. Keputusan tersebut masih berada dalam ruang lingkup tugas Anda, tetapi memiliki beberapa konsekuensi terhadap pekerjaan tim berikutnya. Anda memiliki dua alternatif yang sama-sama memungkinkan, tetapi belum pernah menghadapi situasi yang persis sama sebelumnya. Waktu untuk menentukan keputusan juga cukup terbatas. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Memilih alternatif yang selama ini paling sering digunakan agar keputusan tidak terlalu berisiko.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menunggu atasan kembali agar keputusan sepenuhnya menjadi tanggung jawab pimpinan.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Meminta pendapat beberapa rekan kemudian mengikuti pilihan yang paling banyak disetujui.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menelaah informasi dan ketentuan yang tersedia, mempertimbangkan konsekuensi masing-masing pilihan, lalu mengambil keputusan dalam kewenangan dengan mendokumentasikan pertimbangannya.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Memilih alternatif yang menurut Anda paling praktis kemudian menjelaskan alasannya apabila atasan mempertanyakan keputusan tersebut.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 1 | C = 2 | D = 5 | E = 4.\n\nPilihan D paling tepat karena profesionalisme tidak berarti selalu menunggu arahan atasan. Ketika keputusan masih berada dalam kewenangan Anda, keputusan perlu dibuat berdasarkan informasi yang tersedia, mempertimbangkan konsekuensi, serta dapat dipertanggungjawabkan melalui dokumentasi.\n\nA (3): Cukup tepat karena menggunakan pengalaman sebelumnya dapat menjadi pertimbangan, tetapi situasi yang berbeda belum tentu tepat diselesaikan dengan cara yang sama.\n\nB (1): Kurang tepat karena pekerjaan yang masih berada dalam kewenangan Anda seharusnya tidak selalu menunggu atasan, terutama ketika keputusan dibutuhkan segera.\n\nC (2): Cukup membantu karena masukan rekan dapat memperkaya pertimbangan, tetapi jumlah suara terbanyak bukan dasar utama dalam mengambil keputusan profesional.\n\nD (5): Paling tepat karena menunjukkan kemandirian, analisis, tanggung jawab, dan kemampuan mempertanggungjawabkan keputusan berdasarkan informasi serta kewenangan yang dimiliki.\n\nE (4): Baik karena menunjukkan keberanian mengambil keputusan dan menjelaskan pertimbangannya. Namun, memilih berdasarkan kepraktisan saja belum cukup apabila terdapat konsekuensi yang perlu dianalisis lebih mendalam."
  },
  {
    "id": "new-casn-2-tkp-04",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Dalam beberapa minggu terakhir, Anda menyadari terdapat pola kesalahan yang sama pada pekerjaan administrasi yang Anda lakukan. Kesalahannya tidak besar dan selalu dapat diperbaiki sebelum pekerjaan dikirimkan, tetapi proses pemeriksaan ulang membuat waktu penyelesaian pekerjaan semakin panjang. Setelah ditelusuri, Anda menemukan bahwa kesalahan tersebut terjadi karena Anda menggunakan format kerja yang berbeda-beda tergantung jenis dokumennya. Apa langkah yang paling tepat?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta rekan memeriksa seluruh pekerjaan sebelum dikirimkan agar kesalahan tidak kembali terjadi.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Membuat standar pemeriksaan dan format kerja yang lebih konsisten, kemudian mengevaluasi efektivitasnya setelah digunakan.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Menambah waktu pemeriksaan pada setiap pekerjaan agar semua kesalahan dapat ditemukan sebelum dokumen dikirimkan.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Mengurangi jumlah pekerjaan yang diterima agar Anda memiliki waktu lebih banyak untuk melakukan pemeriksaan.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Meminta atasan melakukan evaluasi terhadap pembagian pekerjaan karena kesalahan terjadi cukup sering.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 5 | D = 2 | E = 1.\n\nPilihan C paling tepat karena dalam kondisi tersebut masalah utama berada pada proses pemeriksaan yang belum mampu menjamin ketelitian secara konsisten. Menambah tahap pemeriksaan secara sistematis dapat menjadi kontrol untuk memastikan kesalahan terdeteksi sebelum pekerjaan dikirimkan.\n\nA (3): Cukup tepat karena pemeriksaan oleh rekan dapat menjadi kontrol tambahan, tetapi terlalu bergantung pada orang lain tidak menyelesaikan kelemahan dalam proses kerja pribadi.\n\nB (4): Baik karena standardisasi dapat mengurangi variasi kesalahan dan meningkatkan konsistensi. Namun, tetap diperlukan kontrol pemeriksaan untuk memastikan standar tersebut benar-benar efektif.\n\nC (5): Paling tepat karena memperkuat kontrol kualitas sebelum dokumen dikirimkan. Dalam praktiknya, pemeriksaan dapat dibuat terstruktur agar tidak sekadar menambah waktu, tetapi benar-benar menargetkan titik kesalahan yang berulang.\n\nD (2): Kurang tepat karena mengurangi pekerjaan tidak secara langsung menyelesaikan sumber masalah dalam proses kerja.\n\nE (1): Kurang tepat karena langsung mengaitkan masalah dengan pembagian pekerjaan, padahal penyebab yang ditemukan justru berasal dari ketidakkonsistenan format dan proses pemeriksaan."
  },
  {
    "id": "new-casn-2-tkp-05",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda menangani pemeriksaan sejumlah dokumen yang menjadi dasar pemberian suatu layanan. Pada saat pekerjaan hampir selesai, seorang pejabat dari unit lain menghubungi Anda dan meminta agar salah satu dokumen segera diproses karena pemohonnya sedang membutuhkan layanan tersebut. Setelah Anda periksa, dokumen tersebut masih memiliki satu bagian yang belum lengkap. Pejabat tersebut mengatakan bahwa kekurangan itu dapat dilengkapi belakangan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Memproses dokumen tersebut terlebih dahulu karena permintaan datang dari pejabat yang memiliki kewenangan lebih tinggi.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menunda seluruh pemeriksaan sampai pejabat tersebut memberikan kepastian mengenai dokumen yang belum lengkap.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Memproses bagian dokumen yang sudah lengkap dan memberi catatan bahwa terdapat persyaratan yang masih harus dipenuhi.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Meminta rekan mengambil alih dokumen tersebut agar keputusan mengenai kelengkapannya tidak berada pada Anda.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Menjelaskan bagian yang belum lengkap dan memastikan mekanisme pemenuhannya sesuai prosedur sebelum dokumen dapat diproses lebih lanjut.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 1 | C = 4 | D = 3 | E = 5.\n\nPilihan E paling tepat karena profesionalisme menuntut keseimbangan antara kecepatan pelayanan dan kepatuhan terhadap prosedur. Kebutuhan mendesak dapat dipertimbangkan, tetapi kelengkapan dokumen dan mekanisme pemenuhannya tetap harus dipastikan sebelum proses dilanjutkan.\n\nA (2): Kurang tepat karena kedudukan pihak yang meminta percepatan tidak otomatis menghilangkan persyaratan yang harus dipenuhi.\n\nB (1): Kurang tepat karena menghentikan seluruh pekerjaan justru tidak menyelesaikan masalah dan dapat mengganggu proses pelayanan lainnya.\n\nC (4): Baik karena berusaha mempercepat proses sambil mencatat kekurangan, tetapi tetap perlu dipastikan apakah prosedur memang memperbolehkan proses berjalan sebelum seluruh persyaratan terpenuhi.\n\nD (3): Cukup tepat untuk menghindari keputusan sepihak, tetapi memindahkan pekerjaan tanpa menyelesaikan persoalan substantif bukan solusi utama.\n\nE (5): Paling tepat karena mempertimbangkan kebutuhan pelayanan sekaligus menjaga kepatuhan prosedur, ketelitian, dan akuntabilitas pekerjaan."
  },
  {
    "id": "new-casn-2-tkp-06",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda menjadi anggota tim yang bertanggung jawab menyusun laporan bersama. Setelah hampir selesai, Anda menemukan bahwa bagian yang dikerjakan salah satu rekan menggunakan metode penghitungan yang berbeda dengan ketentuan yang disepakati sejak awal. Jika dibiarkan, hasil akhir laporan dapat berbeda cukup jauh. Rekan tersebut sedang tidak berada di kantor dan laporan harus segera diserahkan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menyesuaikan bagian tersebut dengan metode yang digunakan anggota lain agar laporan segera dapat diselesaikan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Memeriksa ketentuan yang disepakati, mencatat perbedaannya, lalu melakukan klarifikasi sebelum mengubah hasil tersebut.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Mempertahankan hasil tersebut sampai rekan kembali agar perubahan tidak dilakukan tanpa konfirmasi kepadanya.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menyertakan hasil tersebut dengan catatan khusus agar perbedaannya dapat diperiksa setelah laporan diserahkan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mengubah hasil tersebut berdasarkan ketentuan awal agar seluruh bagian laporan menggunakan metode yang sama.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 2 | D = 4 | E = 1.\n\nPilihan B paling tepat karena memastikan dasar penghitungan sebelum mengambil tindakan dan tetap menghargai tanggung jawab rekan terhadap pekerjaannya.\n\nA (3): Cukup tepat karena menjaga konsistensi laporan, tetapi metode yang digunakan anggota lain belum tentu sesuai dengan ketentuan awal.\n\nB (5): Paling tepat karena memeriksa dasar ketentuan, mendokumentasikan perbedaan, dan melakukan klarifikasi sebelum melakukan perubahan.\n\nC (2): Kurang tepat karena membiarkan perbedaan yang diketahui dapat menyebabkan hasil laporan tidak sesuai dengan ketentuan yang telah disepakati.\n\nD (4): Cukup tepat karena mencatat adanya perbedaan, tetapi laporan tetap diserahkan dengan hasil yang belum sesuai ketentuan.\n\nE (1): Kurang tepat karena langsung mengubah hasil pekerjaan rekan tanpa terlebih dahulu memastikan penyebab perbedaan dan melakukan klarifikasi."
  },
  {
    "id": "new-casn-2-tkp-07",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda sedang menyelesaikan pekerjaan berdasarkan prosedur yang sudah biasa digunakan selama beberapa tahun. Di tengah proses, instansi menerbitkan ketentuan baru yang mulai berlaku dalam waktu dekat. Beberapa rekan memilih tetap menggunakan prosedur lama karena menganggap perubahan tersebut hanya bersifat administratif dan petunjuk teknisnya belum sepenuhnya dipahami. Sementara itu, pekerjaan yang sedang Anda tangani harus tetap diselesaikan sesuai target. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menyelesaikan pekerjaan dengan prosedur lama sambil menunggu penjelasan resmi mengenai penerapan ketentuan baru.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Melanjutkan prosedur yang biasa digunakan sambil mencatat bagian pekerjaan yang berpotensi terdampak perubahan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mempelajari ketentuan baru, menelaah bagian yang terdampak, lalu memastikan penerapannya melalui arahan resmi.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Mulai menerapkan ketentuan baru pada seluruh pekerjaan agar proses segera menyesuaikan dengan perubahan.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Membandingkan kedua prosedur bersama rekan kerja, kemudian memilih penerapan yang paling sesuai dengan kondisi pekerjaan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 5 | D = 4 | E = 1.\n\nPilihan C menunjukkan kemampuan beradaptasi terhadap perubahan tanpa mengabaikan ketepatan prosedur. Ketentuan baru perlu dipahami terlebih dahulu, kemudian bagian yang terdampak diidentifikasi dan penerapannya dipastikan melalui arahan resmi.\n\nA (2): Kurang tepat karena tetap menggunakan prosedur lama ketika ketentuan baru sudah diterbitkan dapat menimbulkan ketidaksesuaian.\n\nB (3): Cukup tepat karena menyadari adanya dampak perubahan, tetapi masih mempertahankan prosedur lama tanpa memastikan ketentuan yang berlaku.\n\nC (5): Paling tepat karena menunjukkan kemauan belajar, kemampuan beradaptasi, dan kehati-hatian dalam menerapkan ketentuan baru.\n\nD (4): Cukup tepat karena menunjukkan respons terhadap perubahan, tetapi penerapan menyeluruh tanpa memahami ketentuannya dapat menimbulkan kesalahan.\n\nE (1): Kurang tepat karena pemilihan prosedur seharusnya berdasarkan ketentuan resmi, bukan berdasarkan kemudahan menurut anggota tim."
  },
  {
    "id": "new-casn-2-tkp-08",
    "category": "TKP",
    "topic": "Profesionalisme",
    "prompt": "Anda mendapat tugas mengolah data menggunakan aplikasi yang belum pernah Anda gunakan sebelumnya. Tenggat pekerjaan cukup dekat dan hasilnya akan digunakan sebagai bahan penyusunan laporan pimpinan. Seorang rekan yang menguasai aplikasi tersebut menawarkan untuk mengerjakan seluruh proses agar pekerjaan cepat selesai. Namun, jika hal itu dilakukan, Anda tidak memperoleh kesempatan memahami prosesnya dan kemungkinan akan kembali bergantung pada rekan tersebut pada pekerjaan berikutnya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta rekan memberikan contoh proses pengerjaan, kemudian mencoba mengerjakannya sendiri dan berkonsultasi jika menemukan kendala.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Menyerahkan pekerjaan kepada rekan karena yang terpenting adalah laporan dapat selesai tepat waktu.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Mencoba mengerjakan seluruh proses sendiri tanpa meminta bantuan agar kemampuan Anda dapat berkembang lebih cepat.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Meminta tambahan waktu kepada atasan agar dapat mempelajari aplikasi tersebut secara menyeluruh sebelum mengerjakan tugas.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Menggunakan cara manual yang sudah Anda kuasai agar hasil pekerjaan tetap dapat diselesaikan sesuai tenggat.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 1 | C = 4 | D = 3 | E = 2.\n\nPilihan A paling tepat karena mampu menyeimbangkan kebutuhan menyelesaikan pekerjaan dengan upaya meningkatkan kompetensi. Anda tidak sekadar bergantung pada rekan, tetapi juga tidak mengambil risiko mencoba seluruh proses tanpa memahami cara penggunaannya.\n\nA (5): Paling tepat karena menunjukkan kemauan belajar, kemandirian, kemampuan memanfaatkan bantuan secara proporsional, dan orientasi terhadap penyelesaian pekerjaan.\n\nB (1): Kurang tepat karena seluruh tanggung jawab praktis dialihkan kepada rekan dan tidak membantu meningkatkan kemampuan Anda dalam menggunakan aplikasi tersebut.\n\nC (4): Baik karena menunjukkan inisiatif belajar mandiri, tetapi mencoba seluruh proses tanpa meminta bantuan ketika diperlukan dapat meningkatkan risiko kesalahan.\n\nD (3): Cukup tepat apabila memang dibutuhkan waktu tambahan, tetapi meminta penundaan sebelum mencoba mempelajari aplikasi melalui sumber yang tersedia belum tentu diperlukan.\n\nE (2): Kurang tepat karena memilih cara lama hanya karena lebih dikuasai dapat menghambat adaptasi terhadap sistem kerja yang telah digunakan instansi."
  },
  {
    "id": "new-casn-2-tkp-09",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Pada jam pelayanan, terjadi peningkatan jumlah masyarakat yang datang untuk mengurus dokumen. Antrean menjadi cukup panjang karena salah satu petugas harus menangani kendala pada sistem. Beberapa masyarakat mulai mempertanyakan lamanya waktu tunggu. Di tengah kondisi tersebut, seorang warga lanjut usia datang dan mengatakan bahwa ia kesulitan berdiri terlalu lama. Sementara itu, masih terdapat masyarakat lain yang sudah menunggu lebih dahulu. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mempertahankan urutan antrean sambil meminta warga lanjut usia tersebut menunggu hingga kondisi pelayanan kembali berjalan normal.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menjelaskan kondisinya kepada masyarakat yang menunggu dan meminta persetujuan mereka untuk memberikan pelayanan lebih dahulu.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mengupayakan pelayanan bagi warga lanjut usia sesuai mekanisme prioritas yang tersedia tanpa mengabaikan hak masyarakat dalam antrean.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Mengarahkan warga lanjut usia tersebut kepada petugas lain agar kebutuhan khususnya dapat ditangani tanpa mengubah antrean utama.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mendahulukan warga lanjut usia tersebut karena kondisi fisiknya menjadi pertimbangan yang cukup untuk mengesampingkan antrean.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 5 | D = 4 | E = 1.\n\nPilihan C paling tepat karena menggabungkan kepastian prosedur, perhatian terhadap kelompok yang membutuhkan prioritas, dan keadilan bagi masyarakat lain yang telah menunggu. Pelayanan tidak dilakukan berdasarkan keputusan pribadi, tetapi melalui mekanisme prioritas yang memang berlaku.\n\nA (2): Kurang tepat karena mempertahankan antrean secara kaku tanpa mempertimbangkan kebutuhan warga yang mengalami keterbatasan fisik.\n\nB (3): Cukup tepat karena menjaga transparansi kepada masyarakat, tetapi pemberian prioritas seharusnya didasarkan pada mekanisme pelayanan, bukan persetujuan antrean.\n\nC (5): Paling tepat karena memperhatikan kebutuhan warga lanjut usia sekaligus tetap menjaga kepastian dan keadilan dalam proses pelayanan.\n\nD (4): Cukup tepat karena berupaya memberikan solusi tanpa mengganggu antrean utama, tetapi efektivitasnya bergantung pada ketersediaan petugas dan mekanisme yang berlaku.\n\nE (1): Kurang tepat karena menjadikan kondisi fisik sebagai alasan langsung untuk mengesampingkan antrean tanpa memastikan adanya mekanisme prioritas yang berlaku."
  },
  {
    "id": "new-casn-2-tkp-10",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Seorang warga datang untuk mengurus layanan administrasi. Ia membawa sebagian besar dokumen yang dipersyaratkan, tetapi terdapat satu dokumen yang belum dimiliki. Warga tersebut mengatakan bahwa informasi mengenai persyaratan di tempat lain berbeda dengan yang disampaikan petugas. Ia mulai merasa kecewa karena harus kembali lagi di lain waktu. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan persyaratan yang berlaku dan menunjukkan sumber informasi resmi kepada warga tersebut.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Meminta warga melengkapi dokumen yang kurang sebelum permohonannya dapat diproses lebih lanjut.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mengarahkan warga ke bagian informasi untuk memastikan kembali persyaratan yang harus dipenuhi.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Memproses permohonan tersebut sambil meminta warga melengkapi dokumen yang masih kurang.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Memastikan ketentuan resmi dan membantu warga menentukan langkah untuk melengkapi dokumen tersebut.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 3 | C = 2 | D = 1 | E = 5.\n\nPilihan E menunjukkan pelayanan yang informatif sekaligus solutif karena petugas memastikan dasar ketentuan dan membantu warga mengetahui langkah yang harus dilakukan.\n\nA (4): Cukup tepat karena memberikan informasi berdasarkan sumber resmi, tetapi belum membantu warga menentukan langkah penyelesaian.\n\nB (3): Tepat dari sisi kelengkapan administrasi, tetapi belum menanggapi kebingungan warga mengenai perbedaan informasi yang diterimanya.\n\nC (2): Dapat membantu memastikan persyaratan, tetapi terlalu cepat mengarahkan warga tanpa berupaya memberikan solusi langsung.\n\nD (1): Kurang tepat karena memproses permohonan yang belum lengkap dapat mengabaikan ketentuan pelayanan yang berlaku.\n\nE (5): Paling tepat karena memastikan ketentuan sekaligus membantu warga menyelesaikan kekurangan dokumen secara jelas."
  },
  {
    "id": "new-casn-2-tkp-11",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Anda melihat komentar masyarakat di akun media sosial resmi instansi yang mengeluhkan pelayanan di unit Anda. Komentar tersebut cukup keras dan menyebutkan bahwa petugas tidak memberikan penjelasan yang memadai. Anda mengetahui kejadian yang dimaksud karena saat itu Anda berada di lokasi. Menurut Anda, keluhan tersebut tidak sepenuhnya menggambarkan situasi sebenarnya. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan kronologi melalui kolom komentar agar masyarakat memperoleh gambaran yang lebih lengkap mengenai kejadian tersebut.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Membiarkan komentar tersebut karena penanganan keluhan bukan menjadi tanggung jawab petugas yang berada di lokasi.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Mengarahkan masyarakat menggunakan kanal pengaduan agar keluhan dapat ditangani sesuai mekanisme yang tersedia.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menyampaikan fakta kejadian kepada pengelola kanal agar respons resmi dapat disusun berdasarkan informasi yang dapat dipertanggungjawabkan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Menghubungi masyarakat secara pribadi untuk memberikan penjelasan agar kesalahpahaman tidak berlanjut di ruang publik.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 1 | C = 4 | D = 5 | E = 2.\n\nPilihan D paling tepat karena informasi mengenai kejadian disampaikan melalui jalur internal yang memiliki kewenangan mengelola kanal resmi. Dengan demikian, respons kepada masyarakat dapat disusun berdasarkan fakta tanpa membuat petugas memberikan tanggapan pribadi atas nama instansi.\n\nA (3): Cukup tepat karena berupaya memberikan informasi, tetapi penjelasan langsung di ruang publik berisiko menimbulkan tanggapan yang tidak terkoordinasi.\n\nB (1): Kurang tepat karena mengabaikan keluhan masyarakat yang dapat menjadi bahan evaluasi terhadap kualitas pelayanan.\n\nC (4): Baik karena mengarahkan keluhan melalui mekanisme resmi, tetapi belum memberikan informasi faktual yang sudah Anda ketahui kepada pihak yang menangani.\n\nD (5): Paling tepat karena menyampaikan informasi faktual melalui pihak yang berwenang sehingga respons instansi dapat diberikan secara terkoordinasi dan akuntabel.\n\nE (2): Kurang tepat karena komunikasi pribadi belum tentu sesuai mekanisme penanganan pengaduan pada kanal resmi instansi."
  },
  {
    "id": "new-casn-2-tkp-12",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Saat sedang memberikan pelayanan, Anda didatangi seseorang yang ternyata merupakan kenalan dari pejabat di instansi Anda. Orang tersebut meminta agar prosesnya dipercepat karena sedang terburu-buru. Pada saat yang sama, beberapa masyarakat lain sudah menunggu dan memiliki kebutuhan pelayanan yang serupa. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Memeriksa kelengkapan berkasnya terlebih dahulu dan mempertimbangkan percepatan apabila prosesnya memungkinkan dilakukan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menjelaskan mekanisme pelayanan yang berlaku dan melanjutkan proses sesuai urutan masyarakat yang telah menunggu.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Meminta arahan atasan sebelum memberikan perlakuan berbeda karena pemohon memiliki hubungan dengan pejabat instansi.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menanyakan kebutuhan mendesaknya dan memberikan prioritas apabila terdapat alasan yang dapat dipertanggungjawabkan.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menjelaskan ketentuan pelayanan dan menerapkan prioritas hanya apabila tersedia dasar resmi yang berlaku bagi seluruh pemohon.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 2 | D = 1 | E = 5.\n\nPilihan E paling tepat karena tetap memberikan ruang bagi kondisi yang memang membutuhkan prioritas, tetapi keputusan tersebut harus berdasarkan ketentuan resmi, bukan hubungan pribadi dengan pejabat.\n\nA (3): Cukup tepat karena tetap memeriksa kelengkapan, tetapi pertimbangan percepatan belum memiliki dasar yang jelas.\n\nB (4): Baik karena menjaga kesetaraan antrean, tetapi belum mempertimbangkan kemungkinan adanya mekanisme prioritas yang memang berlaku.\n\nC (2): Dapat menjaga kehati-hatian, tetapi meminta arahan hanya karena hubungan dengan pejabat berpotensi menjadikan status pemohon sebagai pertimbangan khusus.\n\nD (1): Kurang tepat karena alasan mendesak dari pemohon belum tentu menjadi dasar yang sah untuk mengubah urutan pelayanan.\n\nE (5): Paling tepat karena menerapkan prinsip yang sama kepada semua pemohon dan hanya memberikan prioritas berdasarkan ketentuan resmi yang dapat dipertanggungjawabkan."
  },
  {
    "id": "new-casn-2-tkp-13",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Pada saat jam pelayanan sedang ramai, sistem komputer tiba-tiba mengalami gangguan sehingga beberapa layanan tidak dapat diproses. Masyarakat mulai bertanya kapan sistem akan kembali normal. Anda belum mendapatkan informasi pasti dari bagian teknis mengenai berapa lama gangguan akan berlangsung. Sebagian rekan memilih meminta masyarakat pulang dan datang kembali pada hari berikutnya. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan bahwa gangguan masih ditangani dan meminta masyarakat menunggu sampai sistem kembali dapat digunakan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menghentikan layanan sementara dan mengarahkan masyarakat untuk kembali setelah sistem dipastikan kembali normal.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menjelaskan kondisi secara terbuka, memeriksa layanan alternatif, dan memberikan informasi tindak lanjut kepada masyarakat.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Mengarahkan masyarakat ke unit lain apabila layanan yang dibutuhkan masih tersedia di tempat tersebut.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mencatat kontak masyarakat dan meminta mereka menunggu pemberitahuan setelah gangguan sistem berhasil ditangani.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 5 | D = 4 | E = 1.\n\nPilihan C paling tepat karena tetap berupaya memberikan pelayanan meskipun terjadi gangguan, tanpa memberikan informasi yang belum pasti. Petugas juga mencari alternatif yang memungkinkan dan memberikan kejelasan mengenai tindak lanjut kepada masyarakat.\n\nA (3): Cukup tepat karena memberikan informasi mengenai gangguan, tetapi hanya meminta masyarakat menunggu tanpa mencari alternatif pelayanan.\n\nB (2): Kurang tepat karena langsung menghentikan pelayanan dan mengharuskan masyarakat kembali tanpa memastikan apakah sebagian layanan masih dapat dilakukan.\n\nC (5): Paling tepat karena menggabungkan keterbukaan informasi, pencarian alternatif pelayanan, dan kejelasan tindak lanjut bagi masyarakat.\n\nD (4): Cukup tepat karena dapat menjadi solusi bagi layanan tertentu, tetapi tidak semua masyarakat tentu dapat dilayani di unit lain.\n\nE (1): Kurang tepat karena hanya mengandalkan pemberitahuan setelah sistem normal tanpa memberikan solusi atau kepastian tindak lanjut pada saat pelayanan berlangsung."
  },
  {
    "id": "new-casn-2-tkp-14",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Seorang warga datang dengan membawa bukti bahwa ia telah mengikuti seluruh tahapan pelayanan. Namun, ketika diperiksa, namanya belum tercantum dalam daftar penerima hasil layanan. Warga tersebut menunjukkan bukti pendaftaran dan mengatakan bahwa petugas sebelumnya sudah memastikan prosesnya selesai. Setelah Anda memeriksa sistem, status permohonannya masih tercatat dalam tahap verifikasi. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan bahwa status dalam sistem belum selesai sehingga warga perlu menunggu sampai proses verifikasi berakhir.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Meminta warga menunjukkan kembali seluruh bukti pendaftaran agar Anda dapat mencocokkannya dengan data yang tersedia.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Menghubungi petugas yang menangani tahap verifikasi untuk mengetahui posisi permohonan dan menyampaikan hasil pengecekan kepada warga.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta warga membuat pengaduan resmi karena perbedaan informasi menunjukkan adanya masalah pada proses sebelumnya.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Meminta atasan memberikan keputusan apakah hasil layanan dapat diberikan berdasarkan bukti pendaftaran yang dibawa warga.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 5 | D = 2 | E = 1.\n\nPilihan C paling tepat karena status permohonan belum selesai dan terdapat perbedaan antara informasi yang diterima warga dengan data sistem. Koordinasi langsung dengan bagian yang menangani verifikasi memungkinkan posisi permohonan diketahui tanpa memberikan keputusan berdasarkan asumsi.\n\nA (3): Cukup tepat karena mengikuti status resmi dalam sistem, tetapi belum berupaya mencari tahu mengapa warga sebelumnya memperoleh informasi yang berbeda.\n\nB (4): Baik karena mencocokkan bukti dapat membantu memastikan identitas dan proses permohonan. Namun, setelah itu tetap diperlukan koordinasi dengan pihak yang menangani tahap verifikasi.\n\nC (5): Paling tepat karena melakukan penelusuran terhadap proses, berkoordinasi dengan unit terkait, dan tetap memberikan informasi yang jelas kepada masyarakat.\n\nD (2): Kurang tepat karena pengaduan dapat dilakukan jika diperlukan, tetapi masalah sebaiknya terlebih dahulu ditelusuri agar diketahui posisi permohonan dan sumber perbedaan informasi.\n\nE (1): Kurang tepat karena meminta keputusan atasan sebelum melakukan penelusuran pada unit yang memang menangani verifikasi dapat membuat proses menjadi lebih panjang."
  },
  {
    "id": "new-casn-2-tkp-15",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Pada saat pelayanan berlangsung, seorang masyarakat datang dalam keadaan kecewa karena permohonannya belum selesai sesuai perkiraan. Ia berbicara dengan nada tinggi dan beberapa kali menyampaikan bahwa pelayanan di instansi Anda lambat. Setelah diperiksa, ternyata proses permohonannya memang belum selesai karena masih menunggu verifikasi dari unit lain. Masyarakat tersebut terus meminta kepastian kapan dokumennya dapat diterbitkan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menenangkan masyarakat terlebih dahulu sambil menjelaskan bahwa proses permohonan masih membutuhkan tahapan pemeriksaan lanjutan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menjelaskan bahwa proses masih berada pada unit lain sehingga waktu penyelesaiannya belum dapat dipastikan oleh Anda.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mengarahkan masyarakat menggunakan kanal pengaduan agar keluhannya dapat dicatat dan ditindaklanjuti sesuai mekanisme.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menjelaskan status permohonan, tahapan yang masih berlangsung, serta waktu tindak lanjut yang dapat dipastikan berdasarkan informasi tersedia.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta masyarakat menunggu proses berikutnya sambil menjelaskan bahwa penerbitan dokumen bergantung pada hasil verifikasi.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 4 | D = 5 | E = 1.\n\nPilihan D paling tepat karena memberikan informasi yang faktual tanpa menjanjikan sesuatu yang belum dapat dipastikan. Masyarakat memperoleh gambaran mengenai posisi permohonan, proses yang masih berlangsung, dan tindak lanjut yang memang dapat diberikan.\n\nA (3): Cukup tepat karena berusaha meredakan situasi, tetapi belum memberikan informasi konkret yang dibutuhkan masyarakat mengenai status permohonannya.\n\nB (2): Kurang tepat karena hanya menjelaskan keterbatasan kewenangan tanpa memberikan informasi yang dapat membantu masyarakat memahami proses selanjutnya.\n\nC (4): Baik karena menyediakan mekanisme pengaduan, tetapi keluhan tersebut masih dapat ditangani dengan memberikan informasi pelayanan secara langsung.\n\nD (5): Paling tepat karena menggabungkan kejelasan informasi, transparansi proses, dan kepastian tindak lanjut tanpa memberikan janji yang belum dapat dipenuhi.\n\nE (1): Kurang tepat karena hanya meminta masyarakat menunggu tanpa memberikan informasi yang cukup mengenai perkembangan permohonannya."
  },
  {
    "id": "new-casn-2-tkp-16",
    "category": "TKP",
    "topic": "Pelayanan Publik",
    "prompt": "Seorang masyarakat datang untuk mengambil dokumen yang menurut sistem seharusnya sudah selesai. Setelah Anda memeriksa data, ternyata terdapat perbedaan antara informasi dalam sistem dan dokumen fisik yang tersimpan. Sistem menunjukkan bahwa dokumen sudah diterbitkan, sedangkan arsip fisik belum ditemukan. Masyarakat tersebut mengatakan bahwa ia membutuhkan dokumen itu untuk keperluan administrasi yang memiliki batas waktu pada hari yang sama. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta masyarakat menunggu sampai petugas arsip menemukan dokumen karena dokumen fisik merupakan bukti yang harus dipastikan keberadaannya.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menggunakan data pada sistem sebagai dasar dan mencetak kembali dokumen agar kebutuhan masyarakat dapat segera terpenuhi.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menjelaskan kendala yang ditemukan, memeriksa sumber data yang relevan, dan mengoordinasikan penyelesaian sesuai kewenangan sebelum dokumen diberikan.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta masyarakat menghubungi bagian arsip secara langsung karena masalah tersebut tidak berkaitan dengan proses pelayanan Anda.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menghubungi atasan untuk meminta izin mencetak dokumen berdasarkan data sistem agar masyarakat tidak kehilangan kesempatan memenuhi batas waktu.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 5 | D = 1 | E = 4.\n\nPilihan C paling tepat karena terdapat ketidaksesuaian antara sistem dan arsip sehingga petugas tidak seharusnya langsung memilih salah satu sumber tanpa verifikasi. Kebutuhan mendesak masyarakat tetap perlu diperhatikan, tetapi penyelesaian harus dapat dipertanggungjawabkan.\n\nA (3): Cukup tepat karena menjaga kehati-hatian terhadap dokumen, tetapi hanya menunggu tanpa melakukan koordinasi aktif dapat membuat pelayanan tidak responsif.\n\nB (2): Kurang tepat karena data sistem belum tentu cukup untuk memastikan dokumen dapat diterbitkan kembali tanpa pemeriksaan terhadap penyebab perbedaan.\n\nC (5): Paling tepat karena melakukan verifikasi, memberikan informasi kepada masyarakat, dan melibatkan pihak terkait sesuai kewenangan.\n\nD (1): Kurang tepat karena mengalihkan masyarakat kepada unit lain tanpa membantu menyelesaikan masalah yang masih berkaitan dengan proses pelayanan.\n\nE (4): Baik karena memperhatikan batas waktu masyarakat dan meminta pertimbangan atasan. Namun, izin mencetak berdasarkan sistem tetap sebaiknya didahului verifikasi agar tidak menghasilkan dokumen yang keliru."
  },
  {
    "id": "new-casn-2-tkp-17",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Dalam sebuah proyek lintas instansi, Anda pernah berbeda pendapat cukup tajam dengan salah satu anggota dari lembaga mitra. Setelah keputusan akhirnya diambil, ternyata pendekatan yang diusulkan oleh anggota tersebut digunakan dalam pelaksanaan. Anda menyadari bahwa beberapa pertimbangannya memang relevan dan membantu menyelesaikan persoalan yang muncul. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Membiarkan hasil pekerjaan berbicara sendiri karena perbedaan pendapat merupakan hal biasa dalam kerja sama.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menyampaikan kepada tim bahwa pendekatan tersebut ternyata dapat digunakan agar menjadi pembelajaran untuk kegiatan berikutnya.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Menunggu sampai mitra tersebut membahas kembali perbedaan pendapat yang pernah terjadi agar hubungan kerja dapat diperbaiki.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Mengakui bahwa pertimbangan mitra tersebut memiliki manfaat dan menyampaikan apresiasi atas kontribusinya dalam penyelesaian proyek.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Mengajak mitra tersebut berdiskusi secara pribadi mengenai perbedaan pendapat agar tidak memengaruhi hubungan kerja selanjutnya.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 2 | D = 5 | E = 1.\n\nPilihan D menunjukkan sikap profesional dalam jejaring kerja karena mampu mengakui kontribusi pihak lain meskipun sebelumnya terdapat perbedaan pendapat. Sikap tersebut membantu membangun hubungan kerja yang terbuka dan menghargai kontribusi anggota tim.\n\nA (3): Cukup tepat karena menjaga fokus pada hasil, tetapi belum menunjukkan penghargaan secara langsung terhadap kontribusi mitra.\n\nB (4): Baik karena mengakui manfaat pendekatan tersebut dalam forum tim, tetapi apresiasi kepada pihak yang memberikan gagasan belum disampaikan secara langsung.\n\nC (2): Kurang tepat karena menunggu pihak lain membuka kembali persoalan dapat membuat kesempatan memperbaiki hubungan kerja menjadi tertunda.\n\nD (5): Paling tepat karena menunjukkan keterbukaan menerima gagasan, menghargai kontribusi mitra, dan mengutamakan hubungan kerja profesional.\n\nE (1): Kurang tepat karena pembahasan kembali mengenai perbedaan pendapat berpotensi menghidupkan konflik yang sebenarnya sudah selesai."
  },
  {
    "id": "new-casn-2-tkp-18",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Instansi Anda sedang bekerja sama dengan lembaga eksternal dalam sebuah kegiatan. Pada tahap awal, mitra tersebut beberapa kali terlambat memberikan informasi sehingga tim Anda kesulitan menyesuaikan jadwal. Anggota tim mulai beranggapan bahwa kerja sama tersebut tidak akan berjalan efektif. Namun, Anda melihat bahwa pihak mitra sebenarnya cukup terbuka untuk memperbaiki pola komunikasi. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Mengurangi keterlibatan mitra dalam pekerjaan penting sampai mereka mampu menunjukkan konsistensi.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menyampaikan secara terbuka kendala yang muncul dan menyepakati pola komunikasi serta batas waktu yang jelas bersama mitra.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Meminta pimpinan membuat perjanjian baru agar mitra memiliki kewajiban yang lebih tegas.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Membiarkan pola kerja berjalan terlebih dahulu karena kerja sama baru saja dimulai.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Mengambil alih sebagian pekerjaan mitra agar keterlambatan tidak memengaruhi target kegiatan.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 4 | D = 1 | E = 2.\n\nPilihan B paling tepat karena kepercayaan dalam jejaring kerja dibangun melalui komunikasi, kejelasan ekspektasi, dan konsistensi. Permasalahan keterlambatan perlu dibahas secara langsung tanpa langsung mengurangi peran mitra.\n\nA (3): Cukup tepat sebagai langkah pengendalian risiko, tetapi mengurangi keterlibatan mitra terlalu cepat dapat menghambat terbentuknya hubungan kerja yang baik.\n\nB (5): Paling tepat karena menyelesaikan akar masalah melalui komunikasi terbuka dan kesepakatan kerja yang jelas.\n\nC (4): Baik apabila kerja sama memang membutuhkan penguatan kesepakatan formal. Namun, masalah komunikasi awal belum tentu harus langsung diselesaikan melalui perubahan perjanjian.\n\nD (1): Kurang tepat karena membiarkan pola keterlambatan tanpa pembahasan dapat membuat masalah menjadi kebiasaan.\n\nE (2): Kurang tepat karena mengambil alih pekerjaan mitra dapat menyelesaikan masalah sementara, tetapi tidak memperbaiki pola koordinasi jangka panjang."
  },
  {
    "id": "new-casn-2-tkp-19",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda mendapatkan informasi penting dari salah satu unit yang dapat membantu tim menyelesaikan pekerjaan lebih cepat. Namun, informasi tersebut belum disampaikan secara resmi kepada seluruh anggota tim. Anda mengetahui bahwa beberapa anggota sedang mengerjakan bagian yang mungkin terpengaruh oleh informasi tersebut. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Langsung meneruskan informasi tersebut ke seluruh anggota agar pekerjaan dapat segera disesuaikan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menyimpan informasi tersebut sampai ada instruksi resmi agar tidak terjadi kesalahan komunikasi.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menanyakan kepada sumber informasi apakah informasi tersebut sudah dapat dibagikan kepada anggota tim dan menjelaskan kebutuhan koordinasi yang ada.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menyampaikan informasi hanya kepada anggota yang pekerjaannya paling mungkin terdampak.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Membahas informasi tersebut dalam rapat berikutnya agar penyampaiannya dapat dilakukan secara bersama-sama.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 5 | D = 4 | E = 1.\n\nPilihan C paling tepat karena informasi yang belum disampaikan secara resmi perlu dipastikan status dan kewenangannya sebelum dibagikan. Pada saat yang sama, kebutuhan koordinasi tetap dapat disampaikan kepada sumber informasi agar tidak menghambat pekerjaan.\n\nA (3): Cukup tepat karena mencegah anggota bekerja berdasarkan informasi lama, tetapi membagikan informasi yang belum dipastikan statusnya dapat menimbulkan miskomunikasi.\n\nB (2): Kurang tepat karena terlalu pasif dan dapat membuat anggota tim terus bekerja dengan informasi yang sudah tidak relevan.\n\nC (5): Paling tepat karena menjaga akurasi informasi sekaligus mendorong koordinasi antara pihak yang memiliki informasi dan pihak yang membutuhkan.\n\nD (4): Baik karena membatasi penyebaran informasi kepada pihak yang relevan. Namun, status informasi tetap perlu dipastikan terlebih dahulu sebelum dibagikan.\n\nE (1): Kurang tepat karena menunggu rapat berikutnya dapat menyebabkan pekerjaan yang sedang berlangsung tidak segera menyesuaikan informasi penting tersebut."
  },
  {
    "id": "new-casn-2-tkp-20",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda terlibat dalam sebuah kegiatan yang membutuhkan data dari beberapa unit kerja. Salah satu unit belum mengirimkan data meskipun batas waktu pengumpulan semakin dekat. Ketika dihubungi, petugas dari unit tersebut mengatakan bahwa mereka sedang menyelesaikan pekerjaan lain yang juga mendesak. Jika data terlambat, penyusunan laporan tim Anda ikut tertunda. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Meminta atasan memberikan teguran kepada unit tersebut agar segera menyelesaikan pengiriman data.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menggunakan data periode sebelumnya agar penyusunan laporan tetap dapat berjalan sesuai jadwal.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Menjelaskan dampak keterlambatan terhadap pekerjaan bersama dan menyepakati waktu pengiriman yang realistis dengan unit tersebut.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta anggota tim Anda menghubungi beberapa pihak lain untuk memperoleh data yang sama dari sumber berbeda.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menunggu sampai unit tersebut menyelesaikan pekerjaannya karena setiap unit memiliki prioritas masing-masing.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 5 | D = 4 | E = 1.\n\nPilihan C paling tepat karena masalah koordinasi perlu diselesaikan melalui komunikasi yang jelas dan kesepakatan waktu yang realistis. Dengan menjelaskan dampak keterlambatan, kedua pihak dapat memahami kepentingan pekerjaan tanpa saling menyalahkan.\n\nA (2): Kurang tepat karena langsung membawa persoalan kepada atasan dapat membuat hubungan antarunit menjadi kurang kondusif apabila koordinasi langsung masih dapat dilakukan.\n\nB (3): Cukup tepat untuk menjaga pekerjaan tetap berjalan, tetapi penggunaan data lama tanpa memastikan kesesuaiannya dapat memengaruhi akurasi laporan.\n\nC (5): Paling tepat karena menunjukkan kemampuan berkomunikasi, memahami kondisi unit lain, sekaligus menjaga target pekerjaan bersama.\n\nD (4): Baik karena mencari sumber alternatif dapat menjadi solusi apabila data memang tersedia di tempat lain. Namun, langkah tersebut sebaiknya tidak mengabaikan koordinasi dengan unit yang memiliki tanggung jawab utama.\n\nE (1): Kurang tepat karena hanya menunggu dapat membuat pekerjaan semakin terlambat tanpa adanya upaya penyelesaian masalah."
  },
  {
    "id": "new-casn-2-tkp-21",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda menjadi anggota tim yang terdiri atas beberapa unit dengan kepentingan berbeda. Dalam rapat, dua unit memiliki pandangan yang bertentangan mengenai cara menjalankan sebuah program. Masing-masing merasa usulannya paling sesuai dengan kebutuhan unitnya. Perbedaan tersebut mulai membuat pembahasan tidak berkembang, sementara keputusan harus segera dibuat. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengarahkan pembahasan pada tujuan bersama, lalu membandingkan kebutuhan dan dampak setiap usulan.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Mengusulkan keputusan berdasarkan suara terbanyak agar perbedaan tidak menghambat pelaksanaan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mendorong usulan yang paling mudah diterapkan agar keputusan dapat segera dijalankan bersama.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Meminta pimpinan menetapkan pilihan setelah setiap unit menjelaskan alasan usulannya masing-masing.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menggabungkan unsur kedua usulan agar kepentingan setiap unit tetap dapat terakomodasi.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 2 | D = 4 | E = 1.\n\nPilihan A paling tepat karena mengarahkan perbedaan kepentingan menuju tujuan bersama dengan mempertimbangkan kebutuhan dan dampak setiap usulan.\n\nA (5): Paling tepat karena mengutamakan tujuan bersama dan mempertimbangkan dampak setiap usulan.\n\nB (3): Cukup tepat karena dapat menghasilkan keputusan, tetapi suara terbanyak belum tentu menghasilkan solusi terbaik.\n\nC (2): Kurang tepat karena kemudahan penerapan belum tentu sesuai dengan kebutuhan program secara keseluruhan.\n\nD (4): Baik karena melibatkan pimpinan, tetapi kesepahaman antarunit sebaiknya dibangun sebelum keputusan diserahkan kepada pimpinan.\n\nE (1): Kurang tepat karena penggabungan dua usulan belum tentu menghasilkan solusi yang efektif bagi program."
  },
  {
    "id": "new-casn-2-tkp-22",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda terlibat dalam kegiatan bersama beberapa instansi. Salah satu instansi menggunakan pola kerja yang berbeda sehingga beberapa dokumen yang mereka kirimkan tidak sesuai dengan format yang telah digunakan tim Anda. Mereka beralasan bahwa format tersebut sudah menjadi kebiasaan di instansinya dan selama ini tidak menimbulkan masalah. Jika format tidak diseragamkan, proses penggabungan data akan membutuhkan waktu lebih lama. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menjelaskan kebutuhan keseragaman data dan menyepakati format bersama yang dapat diterapkan tanpa menghambat pekerjaan.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Meminta instansi tersebut mengikuti format yang digunakan tim agar proses penggabungan data dapat dilakukan lebih mudah.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Menyesuaikan format dokumen tim dengan pola instansi tersebut agar perbedaan cara kerja tidak menghambat kegiatan.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Meminta koordinator menetapkan format yang sama agar seluruh instansi menggunakan acuan yang seragam.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Mempertahankan kedua format dan melakukan penyesuaian data setelah seluruh dokumen dari instansi terkumpul.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 2 | D = 4 | E = 1.\n\nPilihan A paling tepat karena tidak memaksakan pola kerja satu pihak kepada pihak lain, tetapi mencari kesepakatan yang tetap menjaga kebutuhan pengolahan data. Pendekatan ini menunjukkan kemampuan berkoordinasi, menghargai perbedaan, dan berorientasi pada tujuan bersama.\n\nA (5): Paling tepat karena mengutamakan kesepakatan bersama tanpa mengabaikan kebutuhan efektivitas pekerjaan.\n\nB (3): Cukup tepat karena menjaga konsistensi pengolahan data, tetapi kurang memberi ruang terhadap pola kerja instansi mitra.\n\nC (2): Kurang tepat karena menyesuaikan seluruh format berdasarkan satu pihak dapat menimbulkan beban baru bagi tim.\n\nD (4): Baik karena menghasilkan acuan yang seragam, tetapi penyelesaian melalui koordinator belum tentu diperlukan jika kesepakatan dapat dicapai langsung.\n\nE (1): Kurang tepat karena mempertahankan dua format dapat meningkatkan pekerjaan penyesuaian dan berisiko menimbulkan ketidakkonsistenan data."
  },
  {
    "id": "new-casn-2-tkp-23",
    "category": "TKP",
    "topic": "Jejaring Kerja",
    "prompt": "Anda membutuhkan konfirmasi dari seorang rekan di unit lain untuk menyelesaikan pekerjaan yang memiliki batas waktu cukup dekat. Anda sudah mengirim pesan melalui kanal komunikasi resmi, tetapi belum mendapat tanggapan. Anda mengetahui rekan tersebut sedang menangani banyak pekerjaan sehingga kemungkinan belum sempat membuka pesan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengirimkan pengingat secara berkala agar permintaan tersebut segera mendapat perhatian dari rekan terkait.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menunggu respons dari rekan tersebut karena tidak ingin menambah beban pekerjaan yang sedang ditanganinya.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menghubungi melalui jalur lain yang sesuai, menjelaskan kebutuhan, dan menyepakati batas waktu respons yang wajar.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta bantuan rekan satu unit untuk menghubungi pihak tersebut agar konfirmasi dapat segera diperoleh.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyampaikan kepada atasan bahwa pekerjaan belum dapat diselesaikan karena konfirmasi dari unit lain belum diterima.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 5 | D = 4 | E = 1.\n\nPilihan C menunjukkan kemampuan membangun komunikasi yang efektif tanpa mengabaikan kondisi rekan kerja. Anda tetap berinisiatif mencari solusi, tetapi menyampaikan urgensi dan batas waktu secara wajar agar koordinasi dapat berjalan dengan baik.\n\nA (3): Cukup tepat karena menunjukkan upaya melakukan tindak lanjut, tetapi pesan berulang dapat mengganggu jika tidak disertai pertimbangan terhadap kondisi rekan.\n\nB (2): Kurang tepat karena terlalu pasif dan berisiko menyebabkan pekerjaan melewati batas waktu yang telah ditetapkan.\n\nC (5): Paling tepat karena menggabungkan inisiatif, komunikasi yang proporsional, dan penghargaan terhadap kesibukan pihak lain.\n\nD (4): Cukup tepat karena dapat mempercepat koordinasi, tetapi melibatkan orang lain belum diperlukan jika komunikasi langsung masih dapat dilakukan melalui jalur yang sesuai.\n\nE (1): Kurang tepat karena terlalu cepat membawa persoalan kepada atasan tanpa terlebih dahulu mengoptimalkan upaya koordinasi dengan rekan terkait."
  },
  {
    "id": "new-casn-2-tkp-24",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda ditugaskan dalam sebuah tim yang anggotanya memiliki kebiasaan berbeda dalam mengambil keputusan. Sebagian anggota terbiasa berdiskusi panjang untuk memastikan semua pihak menyampaikan pendapat, sedangkan anggota lain lebih terbiasa mengambil keputusan secara cepat setelah memperoleh informasi utama. Perbedaan ini mulai membuat rapat berjalan lambat, sementara pekerjaan memiliki batas waktu yang cukup dekat. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengusulkan pembahasan yang lebih singkat agar perbedaan cara berdiskusi tidak menghambat penyelesaian pekerjaan tim.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengikuti pola pengambilan keputusan yang paling banyak digunakan agar proses rapat berjalan lebih mudah diterima anggota.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Menetapkan batas waktu pembahasan dengan tetap memberi kesempatan kepada anggota menyampaikan pertimbangan yang dianggap penting.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Meminta ketua tim menentukan mekanisme rapat yang seragam agar setiap anggota menggunakan pola pengambilan keputusan yang sama.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menyusun alur pembahasan yang membatasi waktu diskusi sekaligus memberi ruang bagi anggota menyampaikan pertimbangan sebelum keputusan ditetapkan.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 4 | D = 1 | E = 5.\n\nPilihan E paling mampu menjembatani dua kebutuhan yang berbeda, yaitu efisiensi waktu dan kesempatan menyampaikan pertimbangan. Cara ini tidak memaksakan satu pola kepada seluruh anggota, tetapi membuat mekanisme yang tetap memungkinkan keputusan diambil secara terarah.\n\nA (3): Cukup tepat karena berupaya mempercepat rapat, tetapi belum mengakomodasi anggota yang membutuhkan pembahasan lebih mendalam.\n\nB (2): Kurang tepat karena pola mayoritas belum tentu sesuai dengan kebutuhan seluruh anggota dan karakter pekerjaan yang sedang dibahas.\n\nC (4): Tepat karena mengatur batas waktu sekaligus memberi ruang berpendapat, tetapi belum secara jelas mengatur alur pembahasan agar proses tetap terarah.\n\nD (1): Kurang tepat karena menyerahkan penyelesaian perbedaan kepada ketua tanpa mendorong mekanisme yang dapat mengakomodasi kebutuhan anggota.\n\nE (5): Paling tepat karena menggabungkan efisiensi waktu dengan ruang pertimbangan melalui alur rapat yang terstruktur dan disepakati."
  },
  {
    "id": "new-casn-2-tkp-25",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda bekerja dalam satu tim yang terdiri atas pegawai dengan rentang usia dan pengalaman yang cukup beragam. Dalam suatu pembahasan, pegawai yang lebih muda mengusulkan penggunaan metode baru, sementara beberapa pegawai yang lebih senior merasa metode tersebut belum terbukti efektif. Sebaliknya, pegawai muda menganggap cara lama terlalu lambat untuk menghadapi kebutuhan saat ini. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mempertimbangkan pengalaman pegawai senior sebagai acuan utama sebelum menerima perubahan metode kerja yang belum teruji.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengajak kedua pihak menguji perbedaan pendekatan berdasarkan kebutuhan pekerjaan, bukti pendukung, serta risiko yang mungkin muncul.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Mengusulkan metode lama tetap digunakan sambil memberikan kesempatan terbatas untuk menguji metode baru pada pekerjaan tertentu.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Meminta pimpinan menentukan pendekatan yang digunakan setelah menerima masukan dari pegawai dengan pengalaman berbeda.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Mengarahkan tim menggunakan metode yang paling mudah diterapkan agar perbedaan pandangan tidak memperlambat penyelesaian pekerjaan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 4 | D = 2 | E = 1.\n\nPilihan B tidak langsung berpihak pada senioritas maupun perubahan. Keputusan didasarkan pada kebutuhan pekerjaan, bukti, dan risiko sehingga setiap pihak memiliki dasar yang objektif untuk menilai pendekatan yang berbeda.\n\nA (3): Cukup tepat karena pengalaman dapat menjadi pertimbangan, tetapi belum memberikan ruang yang seimbang terhadap gagasan dan bukti dari pegawai lain.\n\nB (5): Paling tepat karena mengarahkan perbedaan pendapat pada pembandingan kebutuhan, bukti, dan risiko sebelum menentukan pendekatan.\n\nC (4): Tepat karena memberikan ruang untuk menguji metode baru, tetapi penerapannya masih lebih berorientasi pada pola kerja lama sebagai acuan.\n\nD (2): Kurang tepat karena keputusan terlalu cepat diarahkan kepada pimpinan tanpa mendorong tim menilai perbedaan pendekatan secara bersama.\n\nE (1): Kurang tepat karena kemudahan penerapan belum tentu menunjukkan bahwa metode tersebut paling sesuai dengan kebutuhan pekerjaan."
  },
  {
    "id": "new-casn-2-tkp-26",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda bertugas di wilayah yang masyarakatnya memiliki kebiasaan berinteraksi secara berbeda dengan masyarakat yang biasa Anda layani. Sebagian warga lebih nyaman menyampaikan kebutuhan melalui tokoh yang mereka percaya daripada langsung berbicara kepada petugas. Beberapa rekan menganggap pola tersebut membuat pelayanan menjadi tidak efisien dan meminta warga berkomunikasi langsung dengan petugas. Apa yang Anda lakukan?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan tokoh masyarakat sebagai penghubung awal sambil mengarahkan warga mengikuti prosedur komunikasi yang telah ditetapkan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengakomodasi kebiasaan masyarakat melalui tokoh setempat sambil memastikan seluruh informasi pelayanan disampaikan dengan cara yang seragam.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Memberikan pilihan kepada warga untuk menggunakan tokoh masyarakat atau petugas langsung sesuai kebutuhan selama prosedur pelayanan tetap terpenuhi.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Mengutamakan komunikasi langsung dengan warga, tetapi tetap melibatkan tokoh masyarakat ketika penyampaian informasi membutuhkan pendekatan yang lebih sesuai.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Menyesuaikan pola komunikasi dengan melibatkan tokoh masyarakat sebagai penghubung, lalu memastikan kebutuhan warga tetap dikonfirmasi secara langsung.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 4 | D = 3 | E = 5.\n\nPilihan E paling seimbang karena tidak menolak kebiasaan komunikasi masyarakat, tetapi juga tidak menjadikan tokoh masyarakat sebagai satu-satunya saluran. Tokoh dapat berperan sebagai penghubung, sedangkan konfirmasi langsung menjaga agar kebutuhan warga tidak mengalami perubahan atau salah penyampaian.\n\nA (3): Cukup tepat karena melibatkan tokoh masyarakat dan tetap menjaga prosedur, tetapi masih terlalu menekankan jalur komunikasi yang telah ditetapkan.\n\nB (2): Cukup tepat karena menjaga keseragaman informasi, tetapi kurang memberikan ruang bagi pola komunikasi masyarakat yang berbeda.\n\nC (4): Tepat karena memberikan fleksibilitas kepada warga dan tetap memperhatikan prosedur, tetapi belum memastikan adanya komunikasi langsung untuk menghindari salah pemahaman.\n\nD (3): Cukup tepat karena menjaga komunikasi langsung sekaligus memanfaatkan tokoh masyarakat, tetapi penggunaannya masih bergantung pada kondisi tertentu.\n\nE (5): Paling tepat karena mengakomodasi pola komunikasi setempat sekaligus menjaga akurasi kebutuhan melalui konfirmasi langsung kepada warga."
  },
  {
    "id": "new-casn-2-tkp-27",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Dalam sebuah kegiatan lintas daerah, Anda mendengar beberapa anggota tim mulai menggunakan stereotip tertentu ketika membicarakan rekan dari daerah lain. Mereka menganggap gaya kerja kelompok tersebut cenderung lambat, sementara kelompok lain dianggap terlalu terburu-buru. Meskipun disampaikan dalam percakapan informal, stereotip tersebut mulai memengaruhi cara anggota membagi tugas dan meminta bantuan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengingatkan anggota tim agar penilaian terhadap rekan didasarkan pada kinerja nyata, bukan pada asal daerah atau kelompoknya.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Membiarkan pembicaraan tersebut karena setiap anggota memiliki pandangan pribadi yang tidak selalu memengaruhi pekerjaan.",
        "score": 1
      },
      {
        "id": "c",
        "label": "Mengusulkan agar pembagian tugas dilakukan berdasarkan kemampuan individu sehingga latar belakang tidak menjadi pertimbangan utama.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menyampaikan kepada ketua tim bahwa terdapat kecenderungan pengelompokan yang dapat memengaruhi hubungan kerja.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Mengajak anggota yang terlibat berdiskusi mengenai pengalaman kerja mereka agar dapat memahami penyebab munculnya pandangan tersebut.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 1 | C = 5 | D = 3 | E = 2.\n\nPilihan C paling tepat karena pembagian tugas berdasarkan kompetensi dan kebutuhan pekerjaan dapat mengurangi pengaruh stereotip dalam pengambilan keputusan. Pendekatan ini tidak sekadar menegur perilaku, tetapi memperbaiki mekanisme kerja agar penilaian lebih objektif.\n\nA (4): Baik karena mengingatkan pentingnya penilaian berdasarkan kinerja. Namun, imbauan tersebut belum secara langsung memperbaiki mekanisme pembagian tugas.\n\nB (1): Kurang tepat karena stereotip sudah mulai memengaruhi keputusan kerja sehingga tidak lagi sekadar menjadi pendapat pribadi.\n\nC (5): Paling tepat karena memastikan tugas diberikan berdasarkan kompetensi dan kebutuhan pekerjaan, bukan berdasarkan latar belakang kelompok.\n\nD (3): Cukup tepat karena ketua perlu mengetahui adanya persoalan yang dapat memengaruhi dinamika tim. Namun, masalah masih dapat ditangani melalui mekanisme kerja sebelum langsung dieskalasikan.\n\nE (2): Kurang tepat karena memahami pengalaman anggota memang berguna, tetapi diskusi tersebut belum tentu mengubah pola stereotip yang sudah memengaruhi pembagian pekerjaan."
  },
  {
    "id": "new-casn-2-tkp-28",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda ditempatkan di sebuah unit yang sebagian besar pegawainya sudah lama bekerja bersama. Mereka memiliki kebiasaan berdiskusi secara informal sebelum mengambil keputusan, sedangkan Anda terbiasa menyampaikan pendapat melalui pembahasan yang lebih terstruktur. Pada beberapa kesempatan, Anda merasa informasi penting sudah disepakati sebelum Anda sempat memberikan masukan. Ketika hal tersebut disampaikan kepada rekan, mereka mengatakan bahwa pola tersebut sudah menjadi kebiasaan dan tidak bermaksud mengabaikan Anda. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengikuti pola komunikasi yang sudah berjalan agar dapat lebih mudah menyesuaikan diri dengan lingkungan kerja.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Meminta rekan mengubah kebiasaan tersebut karena seluruh anggota seharusnya memperoleh informasi melalui forum resmi.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Membatasi keterlibatan dalam diskusi informal dan menyampaikan pendapat hanya ketika terdapat rapat resmi.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Membicarakan kebutuhan komunikasi tersebut dengan rekan dan mencari cara agar informasi penting tetap dapat dibagikan kepada seluruh anggota.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta atasan membuat aturan komunikasi baru agar setiap keputusan hanya dapat dibuat melalui rapat resmi.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 2 | C = 1 | D = 5 | E = 4.\n\nPilihan D paling tepat karena persoalannya bukan semata-mata perbedaan kebiasaan komunikasi, melainkan bagaimana memastikan seluruh anggota tetap memperoleh kesempatan berpartisipasi dalam pekerjaan. Dialog terbuka dan kesepakatan mengenai informasi penting dapat menjaga adaptasi sekaligus mencegah anggota tertentu merasa terabaikan.\n\nA (3): Cukup tepat karena kemampuan beradaptasi diperlukan dalam lingkungan kerja yang berbeda. Namun, mengikuti kebiasaan sepenuhnya tanpa memastikan akses terhadap informasi dapat membuat masalah tetap terjadi.\n\nB (2): Kurang tepat karena langsung meminta perubahan kebiasaan dapat membuat rekan merasa cara kerja mereka tidak dihargai.\n\nC (1): Kurang tepat karena membatasi diri justru dapat memperlebar jarak dengan anggota tim dan mengurangi kesempatan membangun hubungan kerja.\n\nD (5): Paling tepat karena menggabungkan kemampuan beradaptasi dengan upaya menciptakan pola komunikasi yang lebih inklusif dan tetap sesuai kebutuhan pekerjaan.\n\nE (4): Baik karena aturan formal dapat menjadi solusi jika masalah terus terjadi. Namun, persoalan tersebut masih dapat diselesaikan melalui komunikasi dan kesepakatan di tingkat tim."
  },
  {
    "id": "new-casn-2-tkp-29",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Anda ditugaskan melakukan kegiatan pendataan di wilayah yang masyarakatnya memiliki kebiasaan sosial berbeda dengan daerah tempat Anda sebelumnya bekerja. Sebagian warga lebih terbuka jika proses pendataan didampingi orang yang mereka kenal, sementara sebagian lainnya dapat langsung berkomunikasi dengan petugas. Rekan Anda mengusulkan agar seluruh proses dilakukan dengan cara yang sama supaya pekerjaan lebih cepat selesai. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menyesuaikan pendekatan dengan kondisi masing-masing warga selama proses pendataan tetap mengikuti ketentuan yang berlaku.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Menggunakan satu pola komunikasi yang sama agar seluruh masyarakat memperoleh perlakuan dan informasi yang seragam.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Meminta tokoh setempat mendampingi seluruh proses agar masyarakat lebih mudah menerima kedatangan petugas.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Mengikuti kebiasaan masyarakat sepenuhnya agar hubungan sosial dapat terjalin tanpa hambatan.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Membatasi pendampingan masyarakat agar petugas tetap memiliki kendali penuh atas proses pendataan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 3 | C = 4 | D = 2 | E = 1.\n\nPilihan A paling tepat karena keberagaman masyarakat membutuhkan kemampuan adaptasi tanpa mengurangi standar pelayanan atau ketentuan yang berlaku. Pendekatan dapat disesuaikan selama tujuan dan prosedur pendataan tetap terjaga.\n\nA (5): Paling tepat karena mampu menyesuaikan cara berinteraksi dengan karakter masyarakat tanpa mengorbankan ketentuan dan kualitas pekerjaan.\n\nB (3): Cukup tepat karena keseragaman dapat memudahkan pengendalian proses, tetapi belum tentu efektif bagi masyarakat dengan kebutuhan komunikasi yang berbeda.\n\nC (4): Baik karena tokoh setempat dapat membantu membangun kepercayaan. Namun, pendampingan tidak harus diterapkan kepada seluruh warga apabila sebagian sudah dapat berkomunikasi langsung dengan petugas.\n\nD (2): Kurang tepat karena mengikuti kebiasaan masyarakat tanpa batas dapat membuat standar proses menjadi tidak konsisten.\n\nE (1): Kurang tepat karena terlalu membatasi peran masyarakat atau pendamping dapat menghambat proses adaptasi dan membangun kepercayaan."
  },
  {
    "id": "new-casn-2-tkp-30",
    "category": "TKP",
    "topic": "Sosial Budaya",
    "prompt": "Dalam sebuah tim kerja, terdapat anggota dari berbagai latar belakang pendidikan, daerah, dan pengalaman. Saat menentukan konsep kegiatan, beberapa anggota cenderung lebih banyak menerima pendapat dari orang yang dianggap memiliki pengalaman paling dekat dengan persoalan. Anggota lain sebenarnya memiliki perspektif berbeda yang cukup relevan, tetapi mulai memilih diam karena merasa pendapatnya jarang dipertimbangkan. Anda melihat bahwa keputusan tim memang tetap dapat dibuat, tetapi kualitas diskusinya semakin berkurang. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengusulkan agar setiap anggota diberi kesempatan menyampaikan pertimbangan sebelum keputusan akhir ditetapkan.",
        "score": 4
      },
      {
        "id": "b",
        "label": "Mengarahkan diskusi berdasarkan kompetensi dan relevansi pendapat agar setiap anggota dapat berkontribusi pada bagian yang sesuai.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Membiarkan anggota yang memiliki pengalaman paling relevan menentukan arah pembahasan karena mereka dianggap paling memahami persoalan.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Meminta ketua tim menunjuk anggota tertentu untuk menyampaikan pandangan yang selama ini belum banyak terdengar.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Mengingatkan anggota yang pasif agar lebih berani menyampaikan pendapat ketika rapat berlangsung.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 4 | B = 5 | C = 1 | D = 3 | E = 2.\n\nPilihan B paling tepat karena keberagaman dalam tim akan memberikan manfaat apabila setiap perspektif digunakan sesuai kompetensi dan relevansinya. Dengan mengarahkan diskusi berdasarkan kontribusi, keputusan tidak hanya bergantung pada latar belakang atau pengalaman tertentu.\n\nA (4): Baik karena memberikan kesempatan yang lebih setara kepada anggota. Namun, kesempatan berbicara saja belum menjamin bahwa pendapat akan ditempatkan sesuai relevansinya terhadap persoalan.\n\nB (5): Paling tepat karena menciptakan ruang kontribusi berdasarkan kompetensi sekaligus mengurangi kecenderungan memilih pendapat hanya berdasarkan latar belakang atau pengalaman tertentu.\n\nC (1): Kurang tepat karena pengalaman memang penting, tetapi menjadikannya sebagai dasar utama dapat mengurangi keberagaman perspektif yang sebenarnya dibutuhkan tim.\n\nD (3): Cukup tepat karena dapat membantu memunculkan perspektif yang selama ini kurang terdengar. Namun, menunjuk individu tertentu belum tentu menyelesaikan pola diskusi secara keseluruhan.\n\nE (2): Kurang tepat karena tanggung jawab menciptakan ruang diskusi yang inklusif bukan hanya berada pada anggota yang pasif, tetapi juga pada mekanisme interaksi seluruh tim."
  },
  {
    "id": "new-casn-2-tkp-31",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda sedang mengikuti koordinasi daring dengan beberapa unit dari lokasi berbeda. Koneksi internet Anda tiba-tiba tidak stabil sehingga suara peserta terputus-putus. Pada saat yang sama, keputusan penting sedang dibahas dan Anda memiliki informasi yang dibutuhkan oleh tim. Jika tetap mengikuti rapat dengan kondisi tersebut, Anda berisiko salah memahami pembahasan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Tetap mengikuti rapat sampai selesai sambil mencatat bagian yang masih dapat Anda dengarkan melalui koneksi yang tersedia.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mematikan kamera agar penggunaan jaringan berkurang dan komunikasi suara dapat kembali berjalan lebih stabil.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Meminta peserta mengulangi pembahasan setiap kali suara terputus agar seluruh informasi dapat Anda ikuti.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Menunggu koneksi kembali stabil sebelum menyampaikan informasi yang menjadi tanggung jawab Anda kepada peserta rapat.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Menginformasikan kendala, menggunakan alternatif komunikasi yang tersedia, dan memastikan informasi penting tetap diterima dengan tepat.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 2 | D = 1 | E = 5.\n\nPilihan E menunjukkan kemampuan beradaptasi ketika teknologi mengalami gangguan. Anda tidak hanya menunggu kondisi normal, tetapi mencari alternatif agar informasi penting tetap tersampaikan secara akurat.\n\nA (3): Cukup tepat karena tetap berusaha mengikuti rapat, tetapi berisiko menimbulkan kesalahan pemahaman terhadap informasi yang terputus.\n\nB (4): Tepat karena dapat mengurangi beban koneksi, tetapi belum memberikan solusi apabila gangguan tetap memengaruhi komunikasi.\n\nC (2): Kurang tepat karena terlalu bergantung pada peserta lain untuk mengulang pembahasan dan dapat menghambat jalannya koordinasi.\n\nD (1): Kurang tepat karena menunda penyampaian informasi penting tanpa mencari alternatif komunikasi yang tersedia.\n\nE (5): Paling tepat karena menggabungkan transparansi mengenai kendala, pemanfaatan alternatif teknologi, dan verifikasi informasi."
  },
  {
    "id": "new-casn-2-tkp-32",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Dalam penyusunan laporan bersama, beberapa anggota tim mengedit dokumen secara bersamaan melalui platform digital. Anda menemukan bagian yang baru saja Anda susun berubah cukup banyak dan tidak diketahui siapa yang melakukan perubahan tersebut. Laporan harus dikirim pada hari yang sama, sementara setiap anggota merasa versinya paling sesuai. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Mengembalikan dokumen pada versi sebelumnya agar bagian yang telah Anda susun tidak berubah tanpa persetujuan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Membiarkan perubahan tersebut dan menyesuaikan bagian Anda agar laporan dapat segera diselesaikan bersama.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Membandingkan riwayat perubahan, mengklarifikasi perbedaan kepada anggota terkait, lalu menyepakati versi yang digunakan.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Meminta ketua tim memilih versi yang dianggap paling sesuai agar proses penyuntingan tidak semakin lama.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyalin bagian yang dianggap penting ke dokumen terpisah sebelum perubahan berikutnya dilakukan oleh anggota lain.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 5 | D = 4 | E = 1.\n\nRiwayat perubahan dapat digunakan untuk mengetahui sumber perubahan, kemudian perbedaan diklarifikasi agar keputusan terhadap isi dokumen dibuat berdasarkan informasi yang jelas.\n\nA (2): Kurang tepat karena langsung mengembalikan versi sebelumnya tanpa mengetahui alasan perubahan yang dilakukan anggota lain.\n\nB (3): Cukup tepat karena menjaga kelancaran pekerjaan, tetapi berisiko mempertahankan perubahan yang sebenarnya belum disepakati.\n\nC (5): Paling tepat karena menggunakan fitur digital untuk menelusuri perubahan sekaligus menyelesaikan perbedaan melalui komunikasi tim.\n\nD (4): Tepat karena melibatkan ketua dalam penyelesaian perbedaan, tetapi belum memanfaatkan informasi riwayat perubahan sebelum keputusan dibuat.\n\nE (1): Kurang tepat karena membuat dokumen tambahan dan berpotensi menimbulkan perbedaan versi baru dalam pekerjaan tim."
  },
  {
    "id": "new-casn-2-tkp-33",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Instansi Anda mulai menggunakan sistem otomatis untuk memproses data pelayanan. Dalam pemeriksaan rutin, Anda menemukan beberapa hasil yang tidak sesuai dengan dokumen sumber. Rekan menganggap perbedaan tersebut masih dapat ditoleransi karena sistem baru belum sepenuhnya stabil, sedangkan laporan harus segera diselesaikan. Langkah yang paling tepat dalam kondisi tersebut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Memeriksa data yang berbeda sambil tetap menggunakan hasil sistem lainnya agar penyusunan laporan tidak terlalu banyak mengalami penundaan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menghentikan pemrosesan otomatis untuk sementara dan memastikan seluruh data diperiksa secara manual sebelum laporan digunakan.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Membandingkan sampel hasil sistem dengan dokumen sumber untuk mengetahui pola perbedaan sebelum menentukan langkah penanganannya.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Melaporkan ketidaksesuaian kepada pengelola sistem dan meminta arahan mengenai penggunaan hasil tersebut sebelum laporan diselesaikan.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Memisahkan data yang tidak sesuai dan menggunakan hasil lainnya agar sebagian besar laporan tetap dapat diselesaikan sesuai tenggat.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 5 | D = 2 | E = 1.\n\nPilihan C paling tepat karena tidak langsung menerima ataupun menolak hasil sistem. Pemeriksaan terhadap sampel dapat menunjukkan apakah ketidaksesuaian bersifat sporadis atau menunjukkan pola tertentu sehingga keputusan berikutnya memiliki dasar yang lebih kuat.\n\nA (3): Cukup tepat karena tetap menjaga pekerjaan berjalan, tetapi belum memberikan gambaran apakah hasil sistem lainnya juga memiliki pola kesalahan serupa.\n\nB (4): Tepat karena mengutamakan akurasi, tetapi menghentikan seluruh sistem sebelum mengetahui tingkat dan pola masalah dapat membuat penanganan menjadi kurang efisien.\n\nC (5): Paling tepat karena melakukan verifikasi secara terarah untuk memahami karakter masalah sebelum menentukan tindakan selanjutnya.\n\nD (2): Cukup tepat karena melibatkan pengelola sistem, tetapi laporan masalah sebaiknya didukung temuan yang lebih jelas mengenai pola ketidaksesuaian.\n\nE (1): Kurang tepat karena memisahkan data berdasarkan perbedaan tanpa memastikan apakah data yang dianggap sesuai benar-benar dapat dipercaya."
  },
  {
    "id": "new-casn-2-tkp-34",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda bertugas menyiapkan bahan rapat berdasarkan informasi yang dikumpulkan dari beberapa sumber digital. Saat melakukan pengecekan, Anda menemukan dua sumber resmi menampilkan angka yang berbeda untuk indikator yang sama. Rekan meminta Anda segera menggunakan angka yang paling baru muncul karena bahan rapat harus segera diselesaikan. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menggunakan angka terbaru agar bahan rapat dapat segera diselesaikan sesuai waktu yang telah ditentukan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menggunakan angka dari sumber yang paling sering dijadikan acuan dalam pekerjaan sebelumnya.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Mencantumkan kedua angka tersebut agar peserta rapat dapat menentukan data yang dianggap paling sesuai.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Memeriksa periode, definisi indikator, dan sumber data sebelum menentukan angka yang relevan untuk digunakan.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Meminta rekan memilih angka yang dianggap paling sesuai agar penyusunan bahan rapat tidak mengalami keterlambatan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 4 | D = 5 | E = 1.\n\nPerbedaan angka tidak selalu berarti salah satu sumber keliru. Perlu diperiksa periode, definisi, dan sumber data agar angka yang digunakan benar-benar sesuai dengan kebutuhan analisis.\n\nA (2): Kurang tepat karena kebaruan informasi belum tentu menunjukkan bahwa data tersebut relevan dengan indikator yang sedang digunakan.\n\nB (3): Cukup tepat karena mempertimbangkan konsistensi dengan acuan sebelumnya, tetapi belum memastikan kesesuaian data dengan kondisi saat ini.\n\nC (4): Tepat karena transparan terhadap perbedaan data, tetapi belum menyelesaikan proses verifikasi untuk menentukan data yang relevan.\n\nD (5): Paling tepat karena memeriksa karakteristik data sebelum menentukan informasi yang layak digunakan dalam bahan rapat.\n\nE (1): Kurang tepat karena menyerahkan penentuan data kepada rekan tanpa melakukan verifikasi terhadap perbedaan informasi tersebut."
  },
  {
    "id": "new-casn-2-tkp-35",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda menemukan unggahan di media sosial yang menggunakan logo instansi dan memuat informasi mengenai program pelayanan. Unggahan tersebut telah mendapat banyak tanggapan masyarakat, tetapi informasi serupa belum ditemukan pada kanal resmi instansi. Beberapa rekan menyarankan agar unggahan tersebut segera dibantah karena dikhawatirkan menimbulkan kesalahpahaman. Sebelum memberikan respons terhadap kondisi tersebut, hal yang paling perlu Anda lakukan adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Menyampaikan temuan kepada atasan disertai informasi awal mengenai unggahan tersebut agar arah respons publik dapat ditentukan berdasarkan kewenangan yang berlaku.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Menghubungi pembuat unggahan untuk mengetahui sumber informasi yang digunakan sekaligus meminta penjelasan mengenai dasar penerbitan informasi tersebut.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Memeriksa kanal resmi dan sumber internal untuk membandingkan informasi yang beredar dengan informasi yang dimiliki instansi sebelum menentukan bentuk klarifikasi yang diperlukan.",
        "score": 3
      },
      {
        "id": "d",
        "label": "Menyiapkan penjelasan sementara melalui akun pribadi agar masyarakat memperoleh informasi pembanding sebelum instansi memberikan pernyataan secara resmi.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Meminta rekan menghentikan penyebaran unggahan tersebut sementara waktu agar informasi tidak semakin meluas sebelum status kebenarannya dapat dipastikan.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 4 | C = 3 | D = 1 | E = 2.\n\nJawaban yang paling tepat adalah A (5) karena temuan perlu segera disampaikan kepada pihak yang berwenang agar respons instansi dapat ditentukan secara resmi dan terkoordinasi.\n\nA (5): Paling tepat karena melibatkan atasan dalam menentukan respons resmi instansi.\n\nB (4): Cukup tepat karena dapat mengetahui sumber informasi, tetapi komunikasi eksternal sebaiknya dilakukan setelah koordinasi internal.\n\nC (3): Tepat untuk verifikasi, tetapi belum mencakup koordinasi dengan pihak yang berwenang menentukan respons.\n\nD (1): Kurang tepat karena akun pribadi tidak tepat digunakan untuk menyampaikan klarifikasi atas nama instansi.\n\nE (2): Kurang tepat karena membatasi penyebaran belum menyelesaikan persoalan mengenai kebenaran dan status informasi."
  },
  {
    "id": "new-casn-2-tkp-36",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Dua unit dalam instansi Anda menggunakan aplikasi berbeda untuk mengelola data kegiatan yang saling berkaitan. Saat data digabungkan, beberapa informasi tidak dapat terbaca dengan format yang sama. Masing-masing unit merasa sistem yang digunakan sudah sesuai kebutuhan dan tidak ingin mengubah proses kerjanya. Solusi yang paling memungkinkan untuk menjaga kelancaran integrasi data adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Meminta salah satu unit mengganti sistem agar seluruh data dapat menggunakan aplikasi yang sama.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Mempertahankan kedua sistem dan meminta petugas melakukan penyesuaian data secara manual setiap kali diperlukan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Menggunakan sistem unit yang memiliki jumlah data lebih besar sebagai standar pengelolaan bersama.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Menyepakati format pertukaran data dan mekanisme pemetaan informasi yang dapat digunakan oleh kedua sistem.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Menyerahkan proses penggabungan kepada petugas teknologi informasi agar perbedaan sistem tidak mengganggu pekerjaan unit.",
        "score": 4
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 1 | D = 5 | E = 4.\n\nMasalah utama bukan sekadar perbedaan aplikasi, melainkan ketidaksesuaian format dan struktur data. Kesepakatan mengenai format pertukaran dan pemetaan dapat memungkinkan kedua unit tetap menggunakan sistem masing-masing sekaligus menjaga integrasi.\n\nA (2): Kurang tepat karena membebankan perubahan hanya kepada satu unit tanpa terlebih dahulu mencari solusi yang dapat diterapkan bersama.\n\nB (3): Cukup tepat karena dapat menjadi solusi sementara, tetapi pekerjaan manual berulang berisiko menambah kesalahan dan beban kerja.\n\nC (1): Kurang tepat karena jumlah data tidak menjadi dasar yang cukup untuk menentukan sistem yang harus dijadikan standar.\n\nD (5): Paling tepat karena menyelesaikan persoalan pada tingkat format dan struktur data tanpa memaksakan satu sistem kepada kedua unit.\n\nE (4): Tepat karena melibatkan pihak yang memiliki kompetensi teknis, tetapi kesepakatan kebutuhan antarunit tetap diperlukan sebelum solusi diterapkan."
  },
  {
    "id": "new-casn-2-tkp-37",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Sebuah unit kerja mulai menggunakan dashboard digital untuk memantau capaian pelayanan secara harian. Pada suatu hari, beberapa indikator menunjukkan penurunan yang cukup tajam. Setelah diperiksa, Anda menemukan bahwa sebagian data belum masuk ke sistem akibat keterlambatan sinkronisasi. Pimpinan sudah meminta penjelasan mengenai penurunan tersebut. Informasi apa yang sebaiknya menjadi dasar sebelum Anda menyampaikan analisis kepada pimpinan?",
    "choices": [
      {
        "id": "a",
        "label": "Angka yang ditampilkan dashboard karena data tersebut merupakan hasil pemrosesan sistem yang digunakan instansi.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Perbandingan indikator hari tersebut dengan capaian sebelumnya agar perubahan kinerja dapat terlihat secara langsung.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Penjelasan petugas pengelola sistem mengenai keterlambatan sinkronisasi yang menyebabkan sebagian data belum masuk.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Hasil dashboard yang telah diperiksa kembali dengan mempertimbangkan status sinkronisasi dan kelengkapan data sumber.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Data hari sebelumnya sebagai pembanding utama karena informasi tersebut telah melalui proses sinkronisasi secara lengkap.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 3 | C = 4 | D = 5 | E = 2.\n\nDashboard tidak boleh dibaca secara terpisah dari kualitas dan kelengkapan data yang mendasarinya. Dengan memeriksa status sinkronisasi dan sumber data, analisis dapat membedakan penurunan kinerja sebenarnya dari masalah teknis.\n\nA (1): Kurang tepat karena angka pada dashboard belum tentu menggambarkan kondisi sebenarnya ketika proses sinkronisasi mengalami kendala.\n\nB (3): Cukup tepat karena memberikan pembanding, tetapi belum memastikan apakah data hari tersebut sudah lengkap.\n\nC (4): Tepat karena memberikan informasi mengenai gangguan teknis, tetapi tetap perlu dikaitkan dengan kondisi data yang ditampilkan.\n\nD (5): Paling tepat karena mempertimbangkan angka, proses sinkronisasi, dan kelengkapan data sebelum menarik kesimpulan.\n\nE (2): Kurang tepat karena data hari sebelumnya hanya berfungsi sebagai pembanding dan tidak menjelaskan kondisi data pada hari yang sedang dianalisis."
  },
  {
    "id": "new-casn-2-tkp-38",
    "category": "TKP",
    "topic": "Teknologi Informasi",
    "prompt": "Anda menemukan bahwa folder bersama unit kerja berisi banyak dokumen dengan nama file yang hampir sama. Beberapa dokumen merupakan versi lama, sementara sebagian lainnya merupakan dokumen terbaru yang belum diberi penanda. Seorang rekan menyarankan menghapus file lama agar penyimpanan lebih rapi, tetapi Anda khawatir terdapat dokumen yang masih dibutuhkan sebagai bahan penelusuran. Apa tindakan Anda?",
    "choices": [
      {
        "id": "a",
        "label": "Menghapus dokumen lama yang terlihat tidak digunakan agar kapasitas penyimpanan dan pencarian file lebih mudah.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Memindahkan seluruh dokumen lama ke folder terpisah agar folder utama hanya berisi dokumen terbaru.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Meminta setiap anggota memilih dokumen yang masih dibutuhkan sebelum file lama dipindahkan atau dihapus.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Membuat aturan penamaan baru dan meminta anggota mulai menggunakannya untuk dokumen yang akan dibuat berikutnya.",
        "score": 2
      },
      {
        "id": "e",
        "label": "Mengidentifikasi versi dokumen, menetapkan struktur penyimpanan, lalu mengarsipkan file lama sebelum menentukan yang dapat dihapus.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 3 | C = 4 | D = 2 | E = 5.\n\nPilihan E tidak langsung menghapus dokumen yang dianggap lama. Dokumen terlebih dahulu diidentifikasi dan diarsipkan sehingga riwayat pekerjaan tetap dapat ditelusuri sebelum menentukan file yang benar-benar tidak diperlukan.\n\nA (1): Kurang tepat karena menghapus berdasarkan perkiraan tanpa memastikan fungsi dan kebutuhan dokumen tersebut.\n\nB (3): Cukup tepat karena memisahkan dokumen lama, tetapi belum memastikan status dan nilai arsip dari setiap file.\n\nC (4): Tepat karena melibatkan anggota yang mengetahui kebutuhan dokumen, tetapi prosesnya belum memberikan sistem pengelolaan yang jelas.\n\nD (2): Kurang tepat karena hanya memperbaiki pengelolaan dokumen baru tanpa menyelesaikan persoalan file yang sudah menumpuk.\n\nE (5): Paling tepat karena menggabungkan identifikasi versi, pengarsipan, struktur penyimpanan, dan penghapusan secara terkontrol."
  },
  {
    "id": "new-casn-2-tkp-39",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Anda menemukan bahwa seorang rekan kerja mulai sering mengikuti forum digital yang membahas persoalan kebangsaan secara tertutup. Dalam beberapa unggahannya, ia mulai menggunakan istilah yang membedakan masyarakat berdasarkan kelompok dan menyebut kelompok tertentu sebagai pihak yang tidak layak dipercaya. Seorang rekan lain menganggap hal tersebut hanya bentuk kebebasan berpendapat. Langkah yang paling tepat untuk Anda lakukan adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Mengajak rekan tersebut berdiskusi mengenai sumber informasi dan dampak pandangan yang disebarkannya terhadap hubungan antarpegawai di lingkungan kerja.",
        "score": 5
      },
      {
        "id": "b",
        "label": "Menghargai pilihan rekan tersebut selama aktivitas forum dilakukan secara pribadi dan tidak secara langsung mengganggu pelaksanaan pekerjaan sehari-hari.",
        "score": 2
      },
      {
        "id": "c",
        "label": "Mengingatkan rekan tersebut mengenai pentingnya menjaga sikap dalam menyampaikan pandangan agar perbedaan pendapat tidak berkembang menjadi konflik di lingkungan kerja.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Mengamati perubahan sikap rekan tersebut dalam pekerjaan sambil mempertimbangkan langkah berikutnya apabila ditemukan perkembangan yang semakin mengkhawatirkan.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Menyampaikan kekhawatiran kepada pimpinan mengenai perubahan sikap rekan tersebut agar dapat dipertimbangkan langkah pembinaan sesuai kondisi yang ditemukan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 5 | B = 2 | C = 4 | D = 3 | E = 1.\n\nJawaban yang paling tepat adalah A (5) karena membuka dialog untuk memahami sumber pandangan sekaligus mencegah berkembangnya sikap diskriminatif.\n\nA (5): Paling tepat karena mengedepankan dialog, klarifikasi, dan pencegahan.\n\nB (2): Kurang tepat karena mengabaikan potensi dampak pandangan tersebut terhadap lingkungan kerja.\n\nC (4): Tepat karena memberikan pengingat, tetapi belum menggali sumber dan alasan munculnya pandangan tersebut.\n\nD (3): Cukup tepat karena melakukan pemantauan, tetapi terlalu pasif dalam menghadapi indikasi awal.\n\nE (1): Kurang tepat karena langsung membawa persoalan kepada pimpinan tanpa terlebih dahulu melakukan pendekatan awal."
  },
  {
    "id": "new-casn-2-tkp-40",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam sebuah kegiatan organisasi, Anda berada dalam kelompok diskusi yang mulai mendorong anggota untuk hanya mempercayai informasi dari lingkungan mereka sendiri. Beberapa anggota mengatakan bahwa informasi dari kelompok lain sebaiknya langsung ditolak karena dianggap tidak sejalan dengan nilai yang mereka yakini. Anda melihat beberapa peserta mulai mengikuti pola tersebut tanpa melakukan pemeriksaan terhadap informasi yang diterima. Bagaimana sebaiknya Anda menyikapi kondisi tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "Mengarahkan peserta untuk tetap menggunakan sumber yang selama ini dipercaya sambil membuka ruang pembahasan apabila muncul informasi yang dianggap berbeda.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Mengajak peserta memeriksa sumber informasi dan mempertimbangkan pandangan berbeda sebelum menerima suatu kesimpulan dalam pembahasan kelompok.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Mendorong pemimpin kelompok menetapkan rujukan informasi bersama agar setiap peserta memiliki dasar yang sama ketika mengikuti pembahasan.",
        "score": 4
      },
      {
        "id": "d",
        "label": "Menghargai pilihan peserta dalam menentukan informasi yang dipercaya selama perbedaan pandangan tidak memengaruhi hubungan dan kegiatan kelompok.",
        "score": 1
      },
      {
        "id": "e",
        "label": "Mengingatkan peserta untuk mempertimbangkan latar belakang informasi sebelum menerima ataupun menyebarkan informasi dari kelompok lain dalam diskusi.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 4 | D = 1 | E = 2.\n\nJawaban yang paling tepat adalah B (5) karena mendorong verifikasi informasi sekaligus keterbukaan terhadap pandangan yang berbeda.\n\nA (3): Cukup tepat, tetapi masih mempertahankan ketergantungan pada sumber yang sudah dipercaya.\n\nB (5): Paling tepat karena mengutamakan verifikasi dan keterbukaan terhadap perspektif berbeda.\n\nC (4): Tepat karena menciptakan acuan bersama, tetapi belum tentu menjamin informasi diperiksa secara kritis.\n\nD (1): Kurang tepat karena terlalu membiarkan pola penerimaan informasi yang eksklusif.\n\nE (2): Cukup baik karena mendorong kehati-hatian, tetapi masih dapat memperkuat kecurigaan terhadap informasi dari kelompok lain."
  },
  {
    "id": "new-casn-2-tkp-41",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam suatu kegiatan pelayanan masyarakat, Anda melihat sekelompok warga meminta agar penyampaian informasi hanya diberikan kepada masyarakat yang dianggap memiliki kesamaan latar belakang dengan mereka. Mereka beralasan bahwa cara tersebut akan membuat komunikasi lebih mudah dan mengurangi potensi perbedaan pendapat. Jika permintaan tersebut diikuti, sebagian warga lainnya berpotensi tidak memperoleh informasi yang sama. Keputusan yang paling tepat dalam kondisi tersebut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Mengikuti permintaan kelompok tersebut agar komunikasi pelayanan berlangsung lebih mudah dan konflik antarkelompok dapat dihindari.",
        "score": 1
      },
      {
        "id": "b",
        "label": "Menyampaikan informasi melalui perwakilan kelompok agar setiap pihak tetap memperoleh informasi tanpa memperpanjang perbedaan.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Meminta pimpinan menentukan kelompok masyarakat yang dianggap paling tepat menjadi sasaran utama penyampaian informasi.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Membagi penyampaian informasi berdasarkan kelompok agar masing-masing masyarakat memperoleh pendekatan yang sesuai dengan karakter mereka.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyediakan akses informasi yang sama bagi seluruh masyarakat sambil menyesuaikan cara penyampaian dengan kebutuhan masing-masing kelompok.",
        "score": 5
      }
    ],
    "explanation": "Skor pilihan: A = 1 | B = 3 | C = 2 | D = 4 | E = 5.\n\nPilihan E menjaga akses informasi secara setara tanpa mengabaikan perbedaan kebutuhan komunikasi. Penyesuaian cara penyampaian dapat dilakukan, tetapi tidak boleh berubah menjadi pembatasan berdasarkan kelompok.\n\nA (1): Kurang tepat karena membatasi akses informasi berdasarkan kesamaan latar belakang masyarakat.\n\nB (3): Cukup tepat karena menggunakan perwakilan sebagai penghubung, tetapi masih berpotensi membatasi komunikasi langsung dengan sebagian warga.\n\nC (2): Kurang tepat karena penentuan sasaran utama dapat membuat kelompok lain memperoleh akses informasi yang tidak setara.\n\nD (4): Tepat karena mengakui perbedaan karakter masyarakat, tetapi pembagian berdasarkan kelompok perlu dijaga agar tidak berubah menjadi pemisahan akses.\n\nE (5): Paling tepat karena menjaga kesetaraan akses sekaligus memberikan ruang untuk menyesuaikan metode komunikasi sesuai kebutuhan masyarakat."
  },
  {
    "id": "new-casn-2-tkp-42",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Saat membuka media sosial, Anda melihat akun seorang rekan kerja membagikan beberapa konten yang menyatakan bahwa kelompok tertentu tidak pantas memperoleh hak yang sama. Konten tersebut tidak berisi ajakan kekerasan, tetapi menggunakan narasi yang berulang dan semakin mengarah pada penolakan terhadap kelompok lain. Pertimbangan utama yang sebaiknya Anda gunakan sebelum mengambil langkah adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Memastikan apakah konten tersebut sudah mendapat banyak tanggapan sebelum menentukan perlu tidaknya dilakukan tindakan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Mempertimbangkan apakah konten tersebut berkaitan langsung dengan tugas kedinasan yang sedang dijalankan oleh rekan tersebut.",
        "score": 3
      },
      {
        "id": "c",
        "label": "Memahami konteks unggahan dan melihat apakah pola konten tersebut menunjukkan penyebaran pandangan yang semakin intoleran.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menilai apakah rekan tersebut pernah menyampaikan pandangan serupa dalam komunikasi langsung dengan pegawai lainnya.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menunggu adanya laporan dari pegawai lain agar tindakan yang dilakukan memiliki dasar dan tidak dianggap sebagai persoalan pribadi.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 3 | C = 5 | D = 4 | E = 1.\n\nPenilaian tidak cukup berdasarkan jumlah tanggapan atau ada tidaknya kekerasan. Konteks dan pola penyebaran narasi perlu diperhatikan untuk melihat apakah terdapat kecenderungan intoleransi yang semakin berkembang.\n\nA (2): Kurang tepat karena banyaknya respons tidak menentukan apakah suatu konten memiliki kecenderungan intoleran.\n\nB (3): Cukup tepat karena hubungan dengan kedinasan dapat menjadi pertimbangan, tetapi bukan satu-satunya dasar untuk memahami risiko konten tersebut.\n\nC (5): Paling tepat karena melihat konteks dan pola narasi secara keseluruhan sebelum menentukan langkah yang proporsional.\n\nD (4): Tepat karena memberikan informasi tambahan mengenai pola perilaku, tetapi tidak cukup jika hanya mengandalkan komunikasi langsung.\n\nE (1): Kurang tepat karena menunggu laporan dapat membuat persoalan berkembang tanpa adanya langkah pencegahan yang proporsional."
  },
  {
    "id": "new-casn-2-tkp-43",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam sebuah grup percakapan yang digunakan untuk koordinasi pekerjaan, seorang anggota beberapa kali membagikan materi yang menganggap kelompok tertentu tidak layak dipercaya dalam kehidupan bermasyarakat. Sebagian anggota memilih diam karena menganggap unggahan tersebut hanya pendapat pribadi. Namun, beberapa pegawai lain mulai ikut memberikan komentar yang semakin menyudutkan kelompok tersebut. Langkah yang paling tepat dalam situasi tersebut adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Mengingatkan anggota grup agar tidak membawa pembahasan mengenai perbedaan kelompok ke dalam komunikasi pekerjaan.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Meminta pengirim menghapus materi tersebut agar pembahasan yang berpotensi menimbulkan perpecahan tidak berlanjut.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Mengabaikan percakapan tersebut selama tidak terdapat ajakan melakukan tindakan kekerasan terhadap kelompok tertentu.",
        "score": 1
      },
      {
        "id": "d",
        "label": "Mengarahkan pembahasan kembali pada kepentingan pekerjaan sambil mengingatkan pentingnya menghargai perbedaan dalam komunikasi bersama.",
        "score": 5
      },
      {
        "id": "e",
        "label": "Melaporkan seluruh anggota yang memberikan komentar tersebut agar pimpinan dapat menentukan tindakan terhadap percakapan tersebut.",
        "score": 2
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 4 | C = 1 | D = 5 | E = 2.\n\nPilihan D tidak hanya menghentikan pembahasan yang berpotensi memecah hubungan, tetapi juga mengarahkan komunikasi kembali pada kepentingan pekerjaan dan penghormatan terhadap perbedaan.\n\nA (3): Cukup tepat karena membatasi pembahasan sensitif, tetapi belum secara langsung menangani munculnya narasi yang menyudutkan kelompok tertentu.\n\nB (4): Tepat karena mencegah materi tersebut terus berkembang, tetapi belum memberikan penguatan mengenai cara berkomunikasi yang menghargai perbedaan.\n\nC (1): Kurang tepat karena potensi radikalisasi tidak selalu diawali dengan ajakan kekerasan secara langsung.\n\nD (5): Paling tepat karena mengendalikan arah komunikasi sekaligus memperkuat sikap menghargai perbedaan dalam lingkungan kerja.\n\nE (2): Kurang tepat karena langsung membawa persoalan kepada pimpinan tanpa terlebih dahulu melakukan langkah proporsional di dalam komunikasi tim."
  },
  {
    "id": "new-casn-2-tkp-44",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Anda mengikuti kegiatan diskusi di luar kantor yang dihadiri beberapa pegawai dari berbagai unit. Dalam diskusi tersebut, seorang peserta menyampaikan bahwa pegawai seharusnya hanya bergaul dengan orang yang memiliki pandangan yang sama agar tidak terpengaruh pemikiran lain. Beberapa peserta terlihat setuju, sementara lainnya memilih diam karena tidak ingin memperpanjang perdebatan. Bagaimana Anda menyikapi situasi tersebut?",
    "choices": [
      {
        "id": "a",
        "label": "Menghindari perdebatan dan memilih tidak memberikan tanggapan agar suasana diskusi tetap berlangsung tenang.",
        "score": 3
      },
      {
        "id": "b",
        "label": "Menyampaikan pandangan bahwa perbedaan pemikiran perlu dihadapi dengan sikap terbuka dan tetap menghormati aturan bersama.",
        "score": 5
      },
      {
        "id": "c",
        "label": "Mengingatkan peserta bahwa hubungan antarpegawai sebaiknya dibatasi pada urusan pekerjaan agar tidak muncul perbedaan pandangan.",
        "score": 2
      },
      {
        "id": "d",
        "label": "Meminta penyelenggara menghentikan pembahasan tersebut karena topik yang disampaikan dapat memengaruhi peserta lainnya.",
        "score": 4
      },
      {
        "id": "e",
        "label": "Menyampaikan ketidaksetujuan secara langsung dan meminta peserta lain tidak mengikuti pandangan yang disampaikan dalam diskusi.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 3 | B = 5 | C = 2 | D = 4 | E = 1.\n\nPilihan B menunjukkan sikap terbuka terhadap perbedaan sekaligus menegaskan pentingnya aturan bersama. Pendekatan ini tidak memperuncing perdebatan, tetapi memberikan sudut pandang yang berlawanan dengan sikap eksklusif.\n\nA (3): Cukup tepat karena menjaga suasana tetap tenang, tetapi diam tidak membantu meluruskan pandangan yang berpotensi mendorong sikap eksklusif.\n\nB (5): Paling tepat karena menegaskan keterbukaan terhadap perbedaan tanpa mengubah diskusi menjadi pertentangan pribadi.\n\nC (2): Kurang tepat karena membatasi hubungan antarpegawai justru dapat memperkuat pemisahan berdasarkan perbedaan pandangan.\n\nD (4): Tepat jika pembahasan berkembang menjadi gangguan, tetapi penghentian diskusi belum tentu diperlukan ketika masih dapat diarahkan secara konstruktif.\n\nE (1): Kurang tepat karena cara penyampaian yang konfrontatif dapat membuat peserta semakin defensif terhadap pandangannya."
  },
  {
    "id": "new-casn-2-tkp-45",
    "category": "TKP",
    "topic": "Anti Radikalisme",
    "prompt": "Dalam sebuah rapat, seorang anggota tim menyampaikan bahwa kebijakan organisasi seharusnya hanya mempertimbangkan kepentingan kelompok yang dianggap paling sesuai dengan nilai yang dianutnya. Pernyataan tersebut kemudian mendapat dukungan dari beberapa anggota lain. Jika dibiarkan, pembahasan berpotensi bergeser dari tujuan pekerjaan menjadi perdebatan mengenai kelompok mana yang dianggap lebih layak. Pilihan yang paling mencerminkan sikap Anda adalah ...",
    "choices": [
      {
        "id": "a",
        "label": "Membiarkan perdebatan berlangsung selama anggota tetap menyampaikan pendapat tanpa melakukan tindakan yang melanggar aturan.",
        "score": 2
      },
      {
        "id": "b",
        "label": "Menghentikan pembahasan tersebut dan meminta ketua rapat segera menentukan keputusan agar konflik tidak semakin meluas.",
        "score": 4
      },
      {
        "id": "c",
        "label": "Mengingatkan peserta agar kembali membahas kebijakan berdasarkan kepentingan organisasi dan dampaknya terhadap seluruh pihak terkait.",
        "score": 5
      },
      {
        "id": "d",
        "label": "Menyampaikan pendapat yang berbeda agar peserta memahami bahwa pandangan kelompok tertentu tidak dapat dijadikan dasar keputusan.",
        "score": 3
      },
      {
        "id": "e",
        "label": "Meminta setiap anggota menyampaikan kelompok yang dianggap paling berkepentingan sebelum pembahasan kebijakan dilanjutkan.",
        "score": 1
      }
    ],
    "explanation": "Skor pilihan: A = 2 | B = 4 | C = 5 | D = 3 | E = 1.\n\nPilihan C mengembalikan pembahasan pada dasar yang objektif, yaitu kepentingan organisasi dan dampak kebijakan terhadap pihak terkait. Cara ini mencegah keputusan dibangun berdasarkan pengutamaan kelompok tertentu.\n\nA (2): Kurang tepat karena membiarkan pembahasan berkembang dapat membuat orientasi kelompok semakin memengaruhi proses pengambilan keputusan.\n\nB (4): Tepat karena mencegah perdebatan berlarut, tetapi belum membantu mengarahkan peserta pada dasar pembahasan yang lebih objektif.\n\nC (5): Paling tepat karena mengembalikan diskusi pada kepentingan bersama dan mencegah pengambilan keputusan berdasarkan eksklusivitas kelompok.\n\nD (3): Cukup tepat karena memberikan pandangan alternatif, tetapi berpotensi membuat diskusi berubah menjadi pertentangan antarpendapat.\n\nE (1): Kurang tepat karena justru memperkuat pengelompokan berdasarkan kepentingan masing-masing pihak."
  }
];
