import { EXAM_RULES } from "./exam-rules";
import { BELA_NEGARA_DRILL_QUESTIONS } from "./bela-negara-drill-content";
import { INTEGRITAS_DRILL_QUESTIONS } from "./integritas-drill-content";
import { JEJARING_KERJA_DRILL_QUESTIONS } from "./jejaring-kerja-drill-content";
import { MINI_TIU_QUESTIONS } from "./mini-tiu-content";
import { MINI_TIU_2_QUESTIONS } from "./mini-tiu-2-content";
import { MINI_TIU_3_QUESTIONS } from "./mini-tiu-3-content";
import { MINI_TWK_QUESTIONS } from "./mini-twk-content";
import { NASIONALISME_DRILL_QUESTIONS } from "./nasionalisme-drill-content";
import { PELAYANAN_PUBLIK_DRILL_QUESTIONS } from "./pelayanan-publik-drill-content";
import { PROFESIONALISME_DRILL_QUESTIONS } from "./profesionalisme-drill-content";
import { SOSIAL_BUDAYA_DRILL_QUESTIONS } from "./sosial-budaya-drill-content";
import { TEKNOLOGI_INFORMASI_DRILL_QUESTIONS } from "./teknologi-informasi-drill-content";
import type { Category, Choice, DrillPackage, ExamPackage, Question } from "./types";

type TwkSeed = [string, string, string[], string, string];

const twkSeeds: TwkSeed[] = [
  ["Kedudukan Pancasila sebagai dasar negara berarti Pancasila berfungsi sebagai …", "sumber nilai dalam penyelenggaraan negara", ["aturan teknis setiap instansi", "tradisi yang boleh diabaikan", "ideologi kelompok tertentu", "pengganti seluruh peraturan tertulis"], "Pancasila menjadi landasan nilai bagi pembentukan hukum dan penyelenggaraan negara.", "Pancasila"],
  ["Sikap yang paling mencerminkan sila kedua adalah …", "membantu korban bencana tanpa membedakan latar belakang", ["memaksakan keputusan mayoritas", "mendahulukan kelompok sendiri", "menghindari kerja sama lintas agama", "menolak kritik terhadap kebijakan"], "Sila Kemanusiaan yang Adil dan Beradab menuntut perlakuan manusiawi dan setara.", "Pancasila"],
  ["Dalam rapat warga terjadi perbedaan pendapat. Tindakan yang sesuai sila keempat adalah …", "mencari mufakat setelah semua pihak didengar", ["mengakhiri rapat secara sepihak", "mengikuti pihak yang paling keras", "menyerahkan keputusan pada satu orang", "mengabaikan pendapat minoritas"], "Musyawarah menempatkan pertimbangan bersama dan penghormatan pada setiap suara.", "Pancasila"],
  ["Contoh penerapan keadilan sosial di lingkungan kerja adalah …", "membagi kesempatan pengembangan berdasarkan kriteria yang transparan", ["memberi fasilitas hanya kepada teman dekat", "menyamakan hasil tanpa melihat tanggung jawab", "menutup informasi promosi", "membiarkan diskriminasi"], "Keadilan sosial menuntut kesempatan yang layak, objektif, dan dapat dipertanggungjawabkan.", "Pancasila"],
  ["Pancasila disebut ideologi terbuka karena …", "nilai dasarnya tetap dan penerapannya dapat menjawab perkembangan zaman", ["isinya dapat diganti kapan saja", "hanya berlaku pada masa tertentu", "tidak memiliki nilai dasar", "mengikuti seluruh ideologi asing"], "Ideologi terbuka menjaga nilai dasar sambil memungkinkan penjabaran yang adaptif.", "Pancasila"],
  ["Lambang rantai pada Garuda Pancasila mewakili sila …", "Kemanusiaan yang Adil dan Beradab", ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan", "Keadilan Sosial bagi Seluruh Rakyat Indonesia"], "Rantai emas adalah lambang sila kedua.", "Pancasila"],
  ["Peraturan perundang-undangan tidak boleh bertentangan dengan Pancasila karena …", "Pancasila merupakan sumber dari segala sumber hukum negara", ["Pancasila adalah kebiasaan daerah", "Pancasila hanya pedoman moral pribadi", "Pancasila setara dengan peraturan menteri", "Pancasila berlaku untuk lembaga tertentu saja"], "Semua pembentukan hukum harus berpijak pada nilai Pancasila.", "Pancasila"],
  ["UUD 1945 berkedudukan sebagai …", "hukum dasar tertulis negara", ["undang-undang biasa", "keputusan presiden", "peraturan daerah nasional", "dokumen sejarah tanpa daya ikat"], "UUD 1945 adalah konstitusi dan hukum dasar tertulis Indonesia.", "UUD 1945"],
  ["Lembaga yang berwenang mengubah dan menetapkan UUD 1945 adalah …", "MPR", ["DPR", "Presiden", "Mahkamah Agung", "BPK"], "Pasal 3 UUD 1945 memberi kewenangan tersebut kepada MPR.", "UUD 1945"],
  ["Pengujian undang-undang terhadap UUD 1945 dilakukan oleh …", "Mahkamah Konstitusi", ["Mahkamah Agung", "Komisi Yudisial", "DPR", "BPK"], "Mahkamah Konstitusi berwenang menguji undang-undang terhadap UUD 1945.", "UUD 1945"],
  ["Fungsi utama DPR menurut UUD 1945 meliputi …", "legislasi, anggaran, dan pengawasan", ["yudikasi, moneter, dan audit", "eksekusi, diplomasi, dan peradilan", "konstitusi, amnesti, dan grasi", "pertahanan, agama, dan fiskal daerah"], "Tiga fungsi DPR adalah legislasi, anggaran, dan pengawasan.", "UUD 1945"],
  ["Lembaga yang memeriksa pengelolaan dan tanggung jawab keuangan negara adalah …", "BPK", ["DPR", "Bank Indonesia", "Komisi Yudisial", "Mahkamah Konstitusi"], "BPK menjalankan pemeriksaan keuangan negara secara bebas dan mandiri.", "UUD 1945"],
  ["Presiden dan Wakil Presiden dipilih …", "langsung oleh rakyat dalam satu pasangan", ["oleh MPR secara terpisah", "oleh DPR bersama DPD", "oleh partai pemenang pemilu", "oleh Mahkamah Konstitusi"], "UUD 1945 mengatur pemilihan langsung dalam satu pasangan calon.", "UUD 1945"],
  ["Kekuasaan kehakiman harus bersifat …", "merdeka untuk menegakkan hukum dan keadilan", ["tunduk pada pemerintah", "mengikuti suara mayoritas", "bergantung pada partai politik", "dibatasi keputusan kementerian"], "Kemandirian peradilan menjaga putusan dari intervensi kekuasaan lain.", "UUD 1945"],
  ["Hak sekaligus kewajiban warga negara yang ditegaskan UUD 1945 adalah …", "ikut serta dalam upaya pembelaan negara", ["mendapat jabatan publik", "menentukan putusan pengadilan", "menguasai sumber daya alam", "menghindari seluruh pungutan negara"], "Pembelaan negara merupakan hak sekaligus kewajiban setiap warga negara.", "UUD 1945"],
  ["Makna semboyan Bhinneka Tunggal Ika adalah …", "berbeda-beda tetapi tetap satu", ["satu budaya untuk semua", "perbedaan harus dihapus", "daerah berdiri sendiri", "mayoritas menentukan identitas nasional"], "Semboyan ini menegaskan persatuan yang tetap mengakui keragaman.", "NKRI & Bhinneka"],
  ["Bentuk negara Indonesia menurut UUD 1945 adalah …", "negara kesatuan berbentuk republik", ["negara federal berbentuk republik", "negara kesatuan berbentuk monarki", "konfederasi parlementer", "federasi presidensial"], "Pasal 1 ayat (1) menegaskan Indonesia sebagai negara kesatuan berbentuk republik.", "NKRI & Bhinneka"],
  ["Otonomi daerah dalam NKRI bertujuan untuk …", "meningkatkan pelayanan dan kesejahteraan sesuai kebutuhan daerah", ["memisahkan daerah dari pemerintah pusat", "membentuk negara bagian", "menghapus standar nasional", "memindahkan seluruh kewenangan pusat"], "Otonomi memberi ruang pengelolaan daerah tetap dalam kerangka NKRI.", "NKRI & Bhinneka"],
  ["Wawasan Nusantara memandang wilayah Indonesia sebagai …", "satu kesatuan politik, ekonomi, sosial budaya, serta pertahanan keamanan", ["kumpulan wilayah yang berdiri sendiri", "wilayah ekonomi tanpa kesatuan politik", "pusat dan daerah yang saling bersaing", "daerah yang dipisahkan oleh laut"], "Wawasan Nusantara menekankan kesatuan seluruh wilayah dan kehidupan nasional.", "NKRI & Bhinneka"],
  ["Bahasa Indonesia berperan dalam persatuan karena …", "menjadi bahasa bersama di tengah keragaman bahasa daerah", ["menggantikan seluruh bahasa daerah", "hanya digunakan dalam dokumen hukum", "membatasi komunikasi antarwilayah", "menjadi bahasa kelompok terbesar"], "Bahasa Indonesia menjadi alat pemersatu tanpa menghapus bahasa daerah.", "NKRI & Bhinneka"],
  ["Sikap tepat menghadapi berita yang memecah belah antarkelompok adalah …", "memeriksa sumber dan tidak menyebarkannya sebelum terverifikasi", ["langsung meneruskan kepada banyak orang", "menambahkan komentar provokatif", "menyerang kelompok yang disebut", "menganggap semua informasi daring benar"], "Literasi informasi dan pengendalian diri membantu menjaga persatuan.", "NKRI & Bhinneka"],
  ["Pemilu mencerminkan kedaulatan rakyat ketika diselenggarakan secara …", "langsung, umum, bebas, rahasia, jujur, dan adil", ["tertutup dan terbatas", "wajib memilih satu kelompok", "dikendalikan pemerintah", "tanpa pengawasan publik"], "Asas Luber dan Jurdil menjaga kebebasan serta keabsahan pilihan rakyat.", "NKRI & Bhinneka"],
  ["Keberagaman budaya akan memperkuat NKRI apabila …", "dikelola dengan saling menghormati dan kesempatan yang setara", ["satu budaya dipaksakan", "interaksi antarkelompok dibatasi", "perbedaan dijadikan alasan diskriminasi", "tradisi lokal dilarang"], "Pengakuan dan penghormatan membuat keragaman menjadi kekuatan bersama.", "NKRI & Bhinneka"],
  ["Seorang pegawai mengetahui adanya gratifikasi terkait layanan. Sikap berintegritas adalah …", "menolak dan melaporkannya melalui mekanisme resmi", ["menerima lalu membaginya", "menyimpan tanpa memberitahu siapa pun", "menerima karena nilainya kecil", "menukar dengan layanan khusus"], "Integritas menuntut penolakan konflik kepentingan dan pelaporan yang benar.", "Integritas & Bela Negara"],
  ["Bela negara dalam kehidupan sehari-hari dapat diwujudkan dengan …", "menjalankan profesi secara bertanggung jawab dan taat hukum", ["menghindari kewajiban warga", "menyebarkan rahasia negara", "mengutamakan kepentingan pribadi", "menolak kerja sama sosial"], "Bela negara tidak terbatas pada kegiatan militer; kontribusi profesional juga penting.", "Integritas & Bela Negara"],
  ["Ketika menemukan kesalahan dalam laporan yang menguntungkan timnya, seorang pegawai sebaiknya …", "mengoreksi dan menyampaikan kondisi sebenarnya", ["membiarkan karena menguntungkan", "menghapus bukti kesalahan", "menyalahkan tim lain", "menunda sampai tidak diperiksa"], "Kejujuran dan akuntabilitas harus dijaga meskipun hasilnya kurang menguntungkan.", "Integritas & Bela Negara"],
  ["Mendahulukan kepentingan umum berarti …", "memilih keputusan yang memberi manfaat publik secara adil", ["selalu memenuhi permintaan atasan", "memberi prioritas kepada kerabat", "menghindari keputusan sulit", "mengikuti kepentingan kelompok sendiri"], "Pelayanan publik mengutamakan manfaat masyarakat dan keadilan.", "Integritas & Bela Negara"],
  ["Sikap yang mendukung ketahanan nasional di ruang digital adalah …", "menjaga data, memverifikasi informasi, dan melaporkan ancaman", ["membagikan kata sandi", "mengunggah data sensitif", "meneruskan semua pesan berantai", "mengabaikan kebocoran data"], "Keamanan informasi merupakan bagian dari tanggung jawab warga di era digital.", "Integritas & Bela Negara"],
  ["Nasionalisme yang sehat ditunjukkan dengan …", "mencintai Indonesia sambil menghormati bangsa lain", ["merendahkan semua bangsa lain", "menolak seluruh kerja sama internasional", "menganggap kritik sebagai pengkhianatan", "membenarkan tindakan yang melanggar hukum"], "Nasionalisme berakar pada cinta tanah air tanpa sikap merendahkan pihak lain.", "Integritas & Bela Negara"],
  ["Jika kepentingan pribadi bertentangan dengan tugas publik, tindakan yang tepat adalah …", "mengungkap konflik kepentingan dan mengikuti prosedur penanganannya", ["menyembunyikan hubungan pribadi", "tetap memutuskan sendiri", "memberi akses khusus", "meminta imbalan agar netral"], "Transparansi dan pengelolaan konflik kepentingan menjaga kepercayaan publik.", "Integritas & Bela Negara"],
];

function rotate<T>(items: T[], amount: number): T[] {
  const offset = ((amount % items.length) + items.length) % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

function choicesFromRanked(labels: string[], scores: number[], rotation: number): Choice[] {
  return rotate(labels.map((label, index) => ({ label, score: scores[index] })), rotation)
    .map((choice, index) => ({ ...choice, id: String.fromCharCode(97 + index) }));
}

function makeTwk(prefix: string, variant: number, limit = 30): Question[] {
  return twkSeeds.slice(0, limit).map(([prompt, answer, wrong, explanation, topic], index) => ({
    id: `${prefix}-twk-${String(index + 1).padStart(2, "0")}`,
    category: "TWK",
    topic,
    prompt: variant === 1 ? prompt : variant === 2 ? `Pilih jawaban paling tepat. ${prompt}` : `Cek pemahamanmu: ${prompt}`,
    choices: choicesFromRanked([answer, ...wrong], [5, 0, 0, 0, 0], index + variant),
    explanation,
  }));
}

function n(value: number): string {
  return new Intl.NumberFormat("id-ID").format(value);
}

const analogies = [
  ["dokter : pasien", "guru : murid", "profesi dan pihak yang dilayani"],
  ["kompas : arah", "termometer : suhu", "alat dan hal yang diukur atau ditunjukkan"],
  ["akar : pohon", "fondasi : bangunan", "bagian dasar yang menopang"],
  ["editor : naskah", "kurator : koleksi", "pengelola dan objek yang dikelola"],
  ["benih : tanaman", "gagasan : inovasi", "awal yang dapat berkembang menjadi hasil"],
] as const;

function makeTiu(prefix: string, variant: number): Question[] {
  const questions: Question[] = [];
  for (let index = 0; index < 10; index += 1) {
    const start = 3 + index + variant;
    const step = 2 + (index % 5) + variant;
    const values = [start, start + step, start + step * 2, start + step * 3];
    const answer = start + step * 4;
    questions.push({
      id: `${prefix}-tiu-${String(index + 1).padStart(2, "0")}`, category: "TIU", topic: "Deret & Pola",
      prompt: `Angka berikutnya dari deret ${values.join(", ")}, … adalah …`,
      choices: choicesFromRanked([String(answer), String(answer + step), String(answer - 1), String(answer + 1), String(answer + step * 2)], [5, 0, 0, 0, 0], index + variant),
      explanation: `Setiap suku bertambah ${step}, sehingga suku berikutnya adalah ${values[3]} + ${step} = ${answer}.`,
    });
  }
  for (let index = 0; index < 5; index += 1) {
    const price = 100000 + (index + variant) * 50000;
    const percent = 10 + index * 5;
    const answer = (price * percent) / 100;
    questions.push({
      id: `${prefix}-tiu-${String(11 + index).padStart(2, "0")}`, category: "TIU", topic: "Kemampuan Numerik",
      prompt: `Sebuah barang seharga Rp${n(price)} mendapat potongan ${percent}%. Besar potongannya adalah …`,
      choices: choicesFromRanked([`Rp${n(answer)}`, `Rp${n(answer + 5000)}`, `Rp${n(answer - 5000)}`, `Rp${n(answer * 2)}`, `Rp${n(answer / 2)}`], [5, 0, 0, 0, 0], index + variant),
      explanation: `${percent}% × Rp${n(price)} = Rp${n(answer)}.`,
    });
  }
  for (let index = 0; index < 5; index += 1) {
    const a = 2 + index;
    const b = 3 + index + variant;
    const unit = 8 + index * 2;
    const total = (a + b) * unit;
    const answer = a * unit;
    questions.push({
      id: `${prefix}-tiu-${String(16 + index).padStart(2, "0")}`, category: "TIU", topic: "Kemampuan Numerik",
      prompt: `Perbandingan jumlah peserta A dan B adalah ${a}:${b}. Jika totalnya ${total} orang, jumlah peserta A adalah …`,
      choices: choicesFromRanked([String(answer), String(b * unit), String(unit), String(answer + unit), String(total - unit)], [5, 0, 0, 0, 0], index + variant),
      explanation: `Total bagian ${a + b}; satu bagian ${total} ÷ ${a + b} = ${unit}. Peserta A = ${a} × ${unit} = ${answer}.`,
    });
  }
  for (let index = 0; index < 5; index += 1) {
    const base = 60 + variant * 3 + index * 4;
    const values = [base, base + 6, base + 12];
    const answer = base + 6;
    questions.push({
      id: `${prefix}-tiu-${String(21 + index).padStart(2, "0")}`, category: "TIU", topic: "Kemampuan Numerik",
      prompt: `Rata-rata dari ${values.join(", ")} adalah …`,
      choices: choicesFromRanked([String(answer), String(answer - 3), String(answer + 3), String(base), String(base + 12)], [5, 0, 0, 0, 0], index + variant),
      explanation: `Jumlah ketiga nilai ${answer * 3}, kemudian dibagi 3 sehingga rata-ratanya ${answer}.`,
    });
  }
  analogies.forEach(([stem, answer, relation], index) => {
    const distractors = analogies.filter((_, i) => i !== index).map((item) => item[1]);
    questions.push({
      id: `${prefix}-tiu-${String(26 + index).padStart(2, "0")}`, category: "TIU", topic: "Kemampuan Verbal",
      prompt: `Hubungan yang setara dengan “${stem}” adalah …`,
      choices: choicesFromRanked([answer, ...distractors], [5, 0, 0, 0, 0], index + variant),
      explanation: `Pasangan tersebut menunjukkan hubungan ${relation}.`,
    });
  });
  const logicSubjects = ["arsip digital", "laporan audit", "layanan terpadu", "program pelatihan", "data terverifikasi"];
  logicSubjects.forEach((subject, index) => {
    questions.push({
      id: `${prefix}-tiu-${String(31 + index).padStart(2, "0")}`, category: "TIU", topic: "Logika Analitis",
      prompt: `Semua ${subject} telah diperiksa. Semua yang telah diperiksa memiliki catatan. Simpulan yang pasti benar adalah …`,
      choices: choicesFromRanked([`Semua ${subject} memiliki catatan`, `Semua yang memiliki catatan adalah ${subject}`, `Sebagian ${subject} tidak diperiksa`, `Tidak ada ${subject} yang memiliki catatan`, `Hanya ${subject} yang diperiksa`], [5, 0, 0, 0, 0], index + variant),
      explanation: "Jika seluruh kelompok pertama masuk kelompok kedua, dan seluruh kelompok kedua masuk kelompok ketiga, maka kelompok pertama pasti masuk kelompok ketiga.",
    });
  });
  return questions;
}

type TkpSeed = [string, string, string[]];
const tkpSeeds: TkpSeed[] = [
  ["Pelayanan Publik", "Seorang warga kesulitan memahami syarat layanan yang Anda jelaskan.", ["Menanyakan bagian yang belum dipahami lalu menjelaskan ulang dengan bahasa sederhana", "Memberi contoh dokumen dan memastikan warga memahami langkah berikutnya", "Mengarahkan warga membaca ulang papan informasi", "Meminta warga datang bersama orang lain", "Mengakhiri penjelasan karena antrean panjang"]],
  ["Pelayanan Publik", "Sistem layanan sedang lambat sementara antrean terus bertambah.", ["Memberi informasi jujur, menawarkan alternatif yang tersedia, dan berkoordinasi menangani gangguan", "Mengatur antrean serta memperbarui perkiraan waktu secara berkala", "Tetap memproses tanpa memberi penjelasan", "Meminta semua warga kembali besok", "Menyalahkan tim teknis di depan warga"]],
  ["Kerja Sama", "Rekan satu tim tertinggal dalam menyelesaikan bagian tugasnya.", ["Mencari hambatan bersama, menyepakati bantuan, dan menjaga target tim", "Menawarkan bantuan pada bagian yang paling mendesak", "Mengingatkan tenggat melalui pesan singkat", "Mengambil seluruh tugas tanpa berdiskusi", "Langsung melaporkannya sebagai pegawai yang tidak mampu"]],
  ["Kerja Sama", "Dua anggota tim berselisih dan mulai mengganggu pekerjaan bersama.", ["Memfasilitasi pembicaraan berbasis fakta dan tujuan tim", "Mendengarkan kedua pihak secara terpisah lalu mencari titik temu", "Menunggu hingga mereka menyelesaikannya sendiri", "Memihak rekan yang paling dekat", "Menyebarkan konflik kepada tim lain"]],
  ["Teknologi Informasi", "Instansi mulai memakai aplikasi baru yang belum Anda kuasai.", ["Mempelajari panduan resmi, mencoba fitur utama, lalu berbagi temuan dengan tim", "Mengikuti pelatihan dan mencatat pertanyaan yang muncul", "Menunggu rekan lain mengajarkan seluruhnya", "Tetap memakai cara lama tanpa izin", "Menolak karena aplikasi sebelumnya lebih nyaman"]],
  ["Teknologi Informasi", "Anda menerima tautan mencurigakan yang meminta kata sandi akun kerja.", ["Tidak membuka tautan, memverifikasi sumber, dan melaporkannya ke pengelola keamanan", "Menghapus pesan lalu mengingatkan rekan terdekat", "Membuka tautan dari perangkat pribadi", "Meneruskan tautan untuk meminta pendapat", "Mengisi data agar pekerjaan cepat selesai"]],
  ["Sosial Budaya", "Anggota baru dari latar budaya berbeda tampak kesulitan mengikuti diskusi tim.", ["Mengajaknya terlibat, menjelaskan konteks, dan memberi ruang untuk menyampaikan pandangan", "Menanyakan bantuan apa yang ia perlukan setelah rapat", "Menganggap ia akan menyesuaikan sendiri", "Mengurangi tugasnya tanpa berbicara", "Membuat lelucon tentang perbedaannya"]],
  ["Sosial Budaya", "Seorang pengguna layanan membutuhkan penyesuaian aksesibilitas.", ["Menanyakan kebutuhannya secara sopan dan menyediakan penyesuaian yang tersedia", "Mencari petugas yang memahami fasilitas aksesibilitas", "Memberi layanan biasa agar semua diperlakukan sama", "Meminta pendampingnya mengurus seluruh proses", "Menolak karena prosedur dianggap merepotkan"]],
  ["Integritas", "Atasan meminta Anda mengubah angka laporan agar terlihat lebih baik.", ["Menjelaskan risikonya, mempertahankan data yang benar, dan memakai jalur pelaporan bila tekanan berlanjut", "Meminta instruksi tertulis sambil menyiapkan data pendukung", "Mengubah sebagian kecil angka", "Mengikuti perintah tanpa bertanya", "Menghapus data asli agar perubahan tidak terlacak"]],
  ["Integritas", "Mitra memberi hadiah setelah proses layanan selesai.", ["Menolak dengan sopan dan mengikuti prosedur pelaporan gratifikasi", "Berkonsultasi kepada unit kepatuhan sebelum mengambil tindakan", "Menerima lalu membaginya dengan tim", "Menyimpan karena layanan sudah selesai", "Meminta hadiah diganti dalam bentuk uang"]],
  ["Profesionalisme", "Anda menemukan kesalahan pada pekerjaan sendiri menjelang tenggat.", ["Segera memperbaiki, memberi tahu pihak terkait, dan menjelaskan dampaknya", "Memprioritaskan bagian yang paling berdampak lalu melanjutkan koreksi", "Memperbaiki diam-diam tanpa menilai dampak", "Menunggu jika ada orang lain yang menemukan", "Mengalihkan kesalahan kepada rekan"]],
  ["Profesionalisme", "Tugas baru berada di luar pengalaman utama Anda.", ["Mempelajari kebutuhan, meminta arahan terarah, dan membuat rencana kerja", "Mencari referensi serta contoh hasil yang baik", "Mencoba tanpa memastikan tujuan", "Menunda sampai ada orang lain yang mengambil", "Menolak karena bukan keahlian utama"]],
  ["Pengembangan Diri", "Anda menerima kritik yang cukup tajam terhadap hasil kerja.", ["Memisahkan isi dari cara penyampaian, meminta contoh, lalu menyusun perbaikan", "Mencatat poin yang dapat ditindaklanjuti dan meninjau ulang pekerjaan", "Menerima kritik tanpa menanyakan detail", "Membela diri sebelum mendengar seluruh penjelasan", "Menghindari orang yang memberi kritik"]],
  ["Anti-radikalisme", "Di grup kerja muncul pesan yang merendahkan kelompok tertentu.", ["Tidak ikut menyebarkan, mengingatkan norma kerja, dan melaporkan bila berlanjut", "Mengajak pengirim berdiskusi secara pribadi dengan tetap menjaga batas", "Mengabaikan pesan agar tidak terlibat", "Membalas dengan hinaan serupa", "Meneruskan pesan ke grup lain sebagai hiburan"]],
  ["Jejaring Kerja", "Unit lain menolak permintaan data karena tujuan permintaan belum jelas.", ["Menjelaskan tujuan, dasar kebutuhan, batas penggunaan, dan menyepakati cara pertukaran yang aman", "Mengadakan percakapan singkat untuk menyamakan kebutuhan", "Mengirim ulang permintaan yang sama", "Meminta atasan menekan unit tersebut", "Mencari data melalui jalur tidak resmi"]],
];

const situationDetails = [
  "Keputusan perlu dibuat tanpa mengabaikan prosedur.",
  "Situasi terjadi ketika beban kerja tim sedang tinggi.",
  "Pelayanan harus tetap berjalan dan dampaknya perlu dikendalikan.",
];

function makeTkp(prefix: string, variant: number): Question[] {
  return Array.from({ length: 45 }, (_, index) => {
    const [topic, prompt, ranked] = tkpSeeds[index % tkpSeeds.length];
    const round = Math.floor(index / tkpSeeds.length);
    const detail = situationDetails[(round + variant - 1) % situationDetails.length];
    return {
      id: `${prefix}-tkp-${String(index + 1).padStart(2, "0")}`,
      category: "TKP" as const,
      topic,
      prompt: `${prompt} ${detail}`,
      choices: choicesFromRanked(ranked, [5, 4, 3, 2, 1], index + variant),
      explanation: `Pilihan dengan nilai tertinggi menunjukkan respons yang proaktif, etis, dan tetap mempertimbangkan ${topic.toLowerCase()} serta prosedur.`,
    };
  });
}

const packageA = [...makeTwk("a", 1), ...makeTiu("a", 1), ...makeTkp("a", 1)];
const packageB = [...makeTwk("b", 2), ...makeTiu("b", 2), ...makeTkp("b", 2)];

export const EXAM_PACKAGES: ExamPackage[] = [
  { id: "paket-a", kind: "full", title: "Paket A — Fondasi", description: "Simulasi lengkap untuk mengukur titik awalmu.", questions: packageA, durationMinutes: EXAM_RULES.durationMinutes },
  { id: "paket-b", kind: "full", title: "Paket B — Pemantapan", description: "Simulasi kedua dengan variasi konteks dan angka baru.", questions: packageB, durationMinutes: EXAM_RULES.durationMinutes },
];

export const MINI_TRYOUT_PACKAGES: ExamPackage[] = [
  {
    id: "mini-tiu-kedinasan",
    kind: "mini",
    title: "Mini TO TIU — Kedinasan 1",
    description: "35 soal verbal, numerik, dan figural untuk melatih kecepatan dan ketelitian TIU.",
    questions: MINI_TIU_QUESTIONS,
    durationMinutes: 35,
  },
  {
    id: "mini-tiu-pemantapan",
    kind: "mini",
    title: "Mini TO TIU — Pemantapan",
    description: "35 soal verbal, numerik, dan figural paket pemantapan dengan variasi kasus baru.",
    questions: MINI_TIU_2_QUESTIONS,
    durationMinutes: 35,
  },
  {
    id: "mini-tiu-lanjutan",
    kind: "mini",
    title: "Mini TO TIU — Simulasi Lanjutan",
    description: "35 soal verbal, numerik, dan figural paket simulasi lanjutan dengan variasi kasus baru.",
    questions: MINI_TIU_3_QUESTIONS,
    durationMinutes: 35,
  },
  {
    id: "mini-twk-kebangsaan",
    kind: "mini",
    title: "Mini TO TWK — Pemahaman Kebangsaan",
    description: "30 soal Bahasa Indonesia, Pilar Negara, Bela Negara, Integritas, dan Nasionalisme.",
    questions: MINI_TWK_QUESTIONS,
    durationMinutes: 30,
  },
];

export const ALL_TRYOUT_PACKAGES = [...EXAM_PACKAGES, ...MINI_TRYOUT_PACKAGES];

const DRILL_TOPICS: Record<Category, string[]> = {
  TWK: ["Pancasila", "UUD 1945", "NKRI & Bhinneka", "Nasionalisme", "Integritas", "Bela Negara"],
  TIU: ["Kemampuan Verbal", "Kemampuan Numerik", "Deret & Pola", "Logika Analitis"],
  TKP: ["Pelayanan Publik", "Profesionalisme", "Jejaring Kerja", "Teknologi Informasi", "Sosial Budaya"],
};

const DRILL_PACKAGE_COUNTS: Record<string, number> = {
  "TWK:Nasionalisme": 5,
  "TWK:Integritas": 5,
  "TWK:Bela Negara": 5,
  "TKP:Pelayanan Publik": 5,
  "TKP:Profesionalisme": 5,
  "TKP:Jejaring Kerja": 5,
  "TKP:Teknologi Informasi": 5,
  "TKP:Sosial Budaya": 5,
};

const drillSource: Question[] = [
  ...[3, 4, 5]
    .flatMap((variant) => makeTwk(`d${variant}`, variant))
    .filter((question) => question.topic !== "Integritas & Bela Negara"),
  ...NASIONALISME_DRILL_QUESTIONS,
  ...INTEGRITAS_DRILL_QUESTIONS,
  ...BELA_NEGARA_DRILL_QUESTIONS,
  ...[3, 4, 5, 6].flatMap((variant) => makeTiu(`d${variant}`, variant)),
  ...PELAYANAN_PUBLIK_DRILL_QUESTIONS,
  ...PROFESIONALISME_DRILL_QUESTIONS,
  ...JEJARING_KERJA_DRILL_QUESTIONS,
  ...TEKNOLOGI_INFORMASI_DRILL_QUESTIONS,
  ...SOSIAL_BUDAYA_DRILL_QUESTIONS,
  ...[3, 4, 5, 6, 7, 8, 9]
    .flatMap((variant) => makeTkp(`d${variant}`, variant))
    .filter((question) => !["Pelayanan Publik", "Profesionalisme", "Jejaring Kerja", "Teknologi Informasi", "Sosial Budaya"].includes(question.topic)),
];

function topicSlug(topic: string): string {
  return topic.toLowerCase().replace(/&/g, "dan").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const DRILL_PACKAGES: DrillPackage[] = (Object.entries(DRILL_TOPICS) as [Category, string[]][]).flatMap(
  ([category, topics]) => topics.flatMap((topic) => {
    const packageCount = DRILL_PACKAGE_COUNTS[`${category}:${topic}`] ?? 2;
    const questions = drillSource
      .filter((question) => question.category === category && question.topic === topic)
      .slice(0, packageCount * 10);
    return Array.from({ length: packageCount }, (_, index) => index + 1).map((sequence) => ({
      id: `${category.toLowerCase()}-${topicSlug(topic)}-${sequence}`,
      title: `${topic} ${sequence}`,
      category,
      topic,
      sequence,
      questions: questions.slice((sequence - 1) * 10, sequence * 10),
    }));
  }),
);

export const DRILL_QUESTIONS: Question[] = DRILL_PACKAGES.flatMap((drillPackage) => drillPackage.questions);

export const ALL_QUESTIONS = [...DRILL_QUESTIONS, ...packageA, ...packageB, ...MINI_TIU_QUESTIONS, ...MINI_TIU_2_QUESTIONS, ...MINI_TIU_3_QUESTIONS, ...MINI_TWK_QUESTIONS];
const questionMap = new Map(ALL_QUESTIONS.map((question) => [question.id, question]));

export function getQuestion(questionId: string): Question | undefined {
  return questionMap.get(questionId);
}

export function getPackage(packageId: string): ExamPackage | undefined {
  return ALL_TRYOUT_PACKAGES.find((item) => item.id === packageId);
}

export function getDrillPackage(packageId: string): DrillPackage | undefined {
  return DRILL_PACKAGES.find((item) => item.id === packageId);
}

export function categoryTopics(category: Category): string[] {
  return DRILL_TOPICS[category];
}

export function validateContent(): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const question of ALL_QUESTIONS) {
    if (ids.has(question.id)) errors.push(`ID duplikat: ${question.id}`);
    ids.add(question.id);
    if (question.choices.length !== 5) errors.push(`${question.id} tidak memiliki 5 pilihan`);
    const scores = question.choices.map((choice) => choice.score);
    if (question.category === "TKP" && [...scores].sort().join(",") !== "1,2,3,4,5") errors.push(`${question.id} skor TKP tidak valid`);
    if (question.category !== "TKP" && (scores.filter((score) => score === 5).length !== 1 || scores.some((score) => ![0, 5].includes(score)))) errors.push(`${question.id} skor objektif tidak valid`);
    if (!question.explanation.trim()) errors.push(`${question.id} tidak memiliki pembahasan`);
  }
  for (const item of EXAM_PACKAGES) {
    if (item.questions.length !== 110) errors.push(`${item.id} berisi ${item.questions.length} soal`);
    (["TWK", "TIU", "TKP"] as Category[]).forEach((category) => {
      const count = item.questions.filter((question) => question.category === category).length;
      if (count !== EXAM_RULES.composition[category]) errors.push(`${item.id} ${category} berisi ${count} soal`);
    });
  }
  for (const item of MINI_TRYOUT_PACKAGES) {
    if (item.durationMinutes !== 35 && item.durationMinutes !== 30) errors.push(`${item.id} harus berdurasi 30 atau 35 menit`);
    if (item.questions.length !== 35 && item.questions.length !== 30) errors.push(`${item.id} berisi ${item.questions.length} soal`);
    const isAllTiu = item.questions.every((question) => question.category === "TIU");
    const isAllTwk = item.questions.every((question) => question.category === "TWK");
    if (!isAllTiu && !isAllTwk) errors.push(`${item.id} harus hanya berisi soal TIU atau hanya soal TWK`);
  }
  for (const item of DRILL_PACKAGES) {
    if (item.questions.length !== 10) errors.push(`${item.id} berisi ${item.questions.length} soal`);
    if (item.questions.some((question) => question.category !== item.category || question.topic !== item.topic)) errors.push(`${item.id} memiliki soal di luar topik`);
  }
  return errors;
}
