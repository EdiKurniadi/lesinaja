# Sumber Try Out New CASN

| Paket aplikasi | TWK (1-30) | TIU (31-65) | TKP (66-110) |
| --- | --- | --- | --- |
| Try Out New CASN Paket 1 | TO TWK 1 DAN 2.pdf, paket 1 | New TIU CASN Paket 2 | SOAL TKP 1 DAN 2.pdf, paket 1 |
| Try Out New CASN Paket 2 | TO TWK 1 DAN 2.pdf, paket 2 | New TIU CASN Paket 3 | SOAL TKP 1 DAN 2.pdf, paket 2 |

Setiap paket memiliki 110 soal, durasi 100 menit, dan skor maksimum 550 (TWK 150, TIU 175, TKP 225). Soal TIU dan aset gambarnya digunakan kembali tanpa mengubah isinya. Kedua paket mini TIU tersebut tidak lagi ditawarkan; data lama tetap tersedia untuk riwayat dan sesi yang sudah dimulai.

## Catatan pemeriksaan sumber

- TWK paket 1 nomor 22: letak kunci pada PDF mendahului pertanyaan. Kunci dipisahkan dari pertanyaan saat impor.
- TWK paket 1 nomor 26: label pembahasan pada PDF berada di akhir penjelasan. Penjelasan ditempatkan kembali pada bagian pembahasan.
- TWK paket 1 nomor 30: pilihan A dan D sama-sama tertulis "efektivitas". Pengecoh A diubah menjadi "efektifisasi" dan pembahasannya disesuaikan agar hanya D yang benar. Kunci D dipertahankan.
- TKP paket 1 nomor 30: PDF tidak memuat uraian khusus pilihan E. Tabel skor lengkap dan pembahasan yang tersedia tetap diimpor; tidak menambahkan uraian yang tidak ada pada sumber.
- TKP paket 2 nomor 19: label kunci D bertentangan dengan tabel skor dan pembahasan yang menyatakan C bernilai 5. Aplikasi mengikuti tabel skor dan pembahasan: C=5, D=4.
- TKP paket 2 nomor 26: bobot A=3, B=2, C=4, D=3, E=5 dipertahankan sesuai tabel dan pembahasan PDF. A dan D sama-sama bernilai 3.

Identitas sumber, hash SHA-256, dan jumlah halaman tercatat pada [full-new-casn.json](full-new-casn.json). Data TWK/TKP dapat dibuat ulang dengan `scripts/import-full-casn-pdfs.py` menggunakan kedua PDF sumber dan Python dengan pypdf.
