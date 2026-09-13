import type { MaterialChapter, MaterialTopic } from "./types";

export function getMaterialChapters(material: MaterialTopic): MaterialChapter[] {
  if (material.chapters?.length) return material.chapters;

  return [
    {
      title: "Fondasi konsep",
      intro: material.summary,
      sections: [
        { heading: "Gagasan utama", body: "Mulailah dari definisi dan batas konsep. Dalam soal, gunakan pengertian ini untuk membedakan pilihan yang relevan dari pilihan yang hanya terdengar meyakinkan." },
        { heading: "Hal yang perlu diingat", body: "Gunakan tiga pengingat berikut sebagai jangkar saat belajar.", bullets: material.points },
      ],
    },
    {
      title: "Cara menerapkan",
      intro: "Pemahaman menjadi kuat ketika kamu dapat memakai konsep untuk membaca konteks dan memilih tindakan atau perhitungan yang tepat.",
      sections: [
        { heading: "Langkah berpikir", body: "Baca informasi yang pasti, tentukan hubungan atau nilai yang diuji, lalu eliminasi pilihan yang bertentangan dengan konsep. Jangan terburu-buru memilih sebelum seluruh petunjuk diperiksa." },
        { heading: "Cek jawaban", body: "Tanyakan apakah jawabanmu konsisten dengan informasi soal dan masuk akal dalam konteksnya. Pada soal situasional, pilih tindakan yang etis, jelas, dan sesuai prosedur." },
      ],
    },
    {
      title: "Contoh dan penguatan",
      intro: "Gunakan contoh untuk mengikat konsep sebelum masuk ke drill soal.",
      sections: [
        { heading: "Contoh penerapan", body: material.example },
        { heading: "Saat berlatih", body: "Catat alasan jawaban yang keliru. Pola kesalahan yang berulang lebih berguna untuk diperbaiki daripada sekadar mengejar jumlah soal." },
      ],
      callout: "Setelah selesai membaca, lanjutkan dengan drill topik ini agar konsepnya langsung dipakai.",
    },
  ];
}
