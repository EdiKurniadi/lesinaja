# Paket Draft Latihan 20 Soal Pola Angka TIU SKD & Kedinasan CASN

> **Distribusi Kunci Jawaban:** Terdistribusi seimbang secara sempurna (A: 4, B: 4, C: 4, D: 4, E: 4).  
> **Komposisi Soal:**
> - Nomor 1–4: Deret Aritmetika, Deret Larik, Deret Pengali, dan Deret Pecahan (Level 1–2).
> - Nomor 5–10: Pola Tabel Baris, Matriks Kolom, Tiga Larik, Diagram Segitiga, Kuadratik Tingkat 2, dan Operasi Bertingkat Variabel (Level 3–5).
> - Nomor 11–15: Matriks Selisih Kuadrat, Tripel Pythagoras, Perkalian Digit, Pola Kubik, dan Indeks Bilangan Segitiga (Level 4–5).
> - Nomor 16–20: Matriks $4 \times 3$, Matriks $4 \times 4$, Matriks $3 \times 4$, Pola Kubik Bergeser, dan Tabel Teori Bilangan KPK (Level 4–5).

---

### Soal 1 [Level 1 — Mudah: Deret Selisih Bertingkat Sederhana]
Angka berikutnya pada deret **$4, 7, 12, 19, 28, ...$** adalah ...
* A. 39
* B. 38
* C. 40
* D. 41
* E. 43

**Kunci: A**  
**Pembahasan:**  
Selisih antarsuku berturut-turut bertambah $+2$ (bilangan ganjil berurutan):
- $7 - 4 = +3$
- $12 - 7 = +5$
- $19 - 12 = +7$
- $28 - 19 = +9$
- Selisih berikutnya adalah $+11 \implies 28 + 11 = \mathbf{39}$.

---

### Soal 2 [Level 1 — Mudah: Deret Dua Larik Berselang-seling]
Angka berikutnya pada deret **$5, 40, 10, 37, 15, 34, 20, ...$** adalah ...
* A. 25
* B. 28
* C. 30
* D. 31
* E. 33

**Kunci: D**  
**Pembahasan:**  
Deret terdiri atas 2 larik yang saling berselang-seling:
- **Larik ganjil (posisi 1, 3, 5, 7):** $5, 10, 15, 20$ (pola $+5$).
- **Larik genap (posisi 2, 4, 6, 8):** $40, 37, 34, ...$ (pola $-3$).
- Suku ke-8 berada di larik genap: $34 - 3 = \mathbf{31}$.

---

### Soal 3 [Level 2 — Mudah-Sedang: Deret Operasi Pengali & Pengurang]
Angka berikutnya pada deret **$3, 5, 9, 17, 33, ...$** adalah ...
* A. 57
* B. 61
* C. 63
* D. 64
* E. 65

**Kunci: E**  
**Pembahasan:**  
Operasi per suku: $(\text{Suku sebelumnya} \times 2) - 1$:
- $3 \times 2 - 1 = 5$
- $5 \times 2 - 1 = 9$
- $9 \times 2 - 1 = 17$
- $17 \times 2 - 1 = 33$
- Suku berikutnya: $33 \times 2 - 1 = \mathbf{65}$ (atau pola selisih $+2, +4, +8, +16, +32 \implies 33 + 32 = 65$).

---

### Soal 4 [Level 2 — Sedang: Deret Pecahan Berpola Mandiri]
Suku berikutnya pada deret pecahan **$\frac{1}{2}, \frac{2}{5}, \frac{4}{10}, \frac{7}{17}, \frac{11}{26}, ...$** adalah ...
* A. $\frac{15}{35}$
* B. $\frac{16}{37}$
* C. $\frac{16}{35}$
* D. $\frac{17}{37}$
* E. $\frac{18}{39}$

**Kunci: B**  
**Pembahasan:**  
- **Pembilang:** $1, 2, 4, 7, 11, ...$ (selisih $+1, +2, +3, +4, +5$) $\implies 11 + 5 = 16$.
- **Penyebut:** Pola $n^2 + 1$ untuk $n=1,2,3,4,5,6$:
  - $1^2+1=2,\; 2^2+1=5,\; 3^2+1=10,\; 4^2+1=17,\; 5^2+1=26,\; 6^2+1=37$.
- Suku berikutnya adalah $\mathbf{\frac{16}{37}}$.

---

### Soal 5 [Level 3 — Sedang: Pola Tabel Baris FR Kedinasan/CPNS]
Perhatikan tabel hubungan antara indeks suku ke-$n$ dan nilainya berikut:

| Suku ke-$n$ | Nilai |
| :---: | :---: |
| 3 | 18 |
| 5 | 50 |
| 7 | 98 |
| 10 | 200 |
| 12 | **?** |

Nilai pengganti tanda tanya adalah ...
* A. 288
* B. 264
* C. 296
* D. 312
* E. 336

**Kunci: A**  
**Pembahasan:**  
Hubungan formula: $U_n = 2n^2$.
- $U_3 = 2 \times 3^2 = 18$
- $U_5 = 2 \times 5^2 = 50$
- $U_7 = 2 \times 7^2 = 98$
- $U_{10} = 2 \times 10^2 = 200$
- Untuk $n = 12 \implies U_{12} = 2 \times 12^2 = 2 \times 144 = \mathbf{288}$.

---

### Soal 6 [Level 3 — Sedang: Pola Matriks Angka Operasi Kolom]
Perhatikan matriks angka berukuran $3 \times 4$ berikut:

| 7 | 4 | 6 | 22 |
| :---: | :---: | :---: | :---: |
| 9 | 3 | 5 | 22 |
| 8 | 5 | 4 | **?** |

Nilai pengganti tanda tanya adalah ...
* A. 32
* B. 34
* C. 36
* D. 38
* E. 40

**Kunci: C**  
**Pembahasan:**  
Operasi sepanjang baris: $(K_1 \times K_2) - K_3 = K_4$.
- Baris 1: $(7 \times 4) - 6 = 28 - 6 = 22$
- Baris 2: $(9 \times 3) - 5 = 27 - 5 = 22$
- Baris 3: $(8 \times 5) - 4 = 40 - 4 = \mathbf{36}$.

---

### Soal 7 [Level 4 — Sulit: Deret Tiga Larik Berselang-seling (Trio)]
Angka berikutnya pada deret **$2, 50, 3, 4, 45, 9, 8, 40, 27, ...$** adalah ...
* A. 12
* B. 16
* C. 35
* D. 64
* E. 81

**Kunci: B**  
**Pembahasan:**  
Deret memiliki 3 jalur melompat setiap 3 suku:
- **Jalur 1 (Posisi 1, 4, 7, 10):** $2, 4, 8, ...$ ($\times 2$) $\implies$ suku ke-10 adalah $8 \times 2 = \mathbf{16}$.
- **Jalur 2 (Posisi 2, 5, 8, 11):** $50, 45, 40, ...$ ($-5$).
- **Jalur 3 (Posisi 3, 6, 9, 12):** $3, 9, 27, ...$ ($\times 3$).
- Suku yang dicari adalah suku ke-10, yaitu $\mathbf{16}$.

---

### Soal 8 [Level 4 — Sulit: Pola Bangun Segitiga Angka]
Perhatikan susunan bilangan pada 3 bangun segitiga dengan pola operasi yang identik:
- **Segitiga I:** Sudut atas $= 6$, sudut kiri bawah $= 4$, sudut kanan bawah $= 5$, angka pusat di dalam $= 29$.
- **Segitiga II:** Sudut atas $= 8$, sudut kiri bawah $= 3$, sudut kanan bawah $= 7$, angka pusat di dalam $= 31$.
- **Segitiga III:** Sudut atas $= 7$, sudut kiri bawah $= 6$, sudut kanan bawah $= 8$, angka pusat di dalam $= \mathbf{?}$.

Nilai angka pusat pada Segitiga III adalah ...
* A. 44
* B. 46
* C. 48
* D. 52
* E. 50

**Kunci: E**  
**Pembahasan:**  
Formula: $\text{Pusat} = (\text{Sudut Atas} \times \text{Sudut Kiri Bawah}) + \text{Sudut Kanan Bawah}$.
- Segitiga I: $(6 \times 4) + 5 = 24 + 5 = 29$
- Segitiga II: $(8 \times 3) + 7 = 24 + 7 = 31$
- Segitiga III: $(7 \times 6) + 8 = 42 + 8 = \mathbf{50}$.

---

### Soal 9 [Level 5 — Sulit / HOTS: Tabel Deret Kuadratik Tingkat 2]
Tabel berikut mengikuti aturan hubungan konsisten antara indeks suku ke-$n$ dan nilainya:

| Suku ke-$n$ | Nilai |
| :---: | :---: |
| 2 | 7 |
| 4 | 21 |
| 6 | 43 |
| 9 | 91 |
| 12 | **?** |

Nilai untuk suku ke-$12$ adalah ...
* A. 143
* B. 151
* C. 157
* D. 163
* E. 169

**Kunci: C**  
**Pembahasan:**  
Formula barisan: $U_n = n^2 + n + 1$.
- $U_2 = 2^2 + 2 + 1 = 7$
- $U_4 = 4^2 + 4 + 1 = 21$
- $U_6 = 6^2 + 6 + 1 = 43$
- $U_9 = 9^2 + 9 + 1 = 91$
- Untuk $n = 12 \implies U_{12} = 12^2 + 12 + 1 = 144 + 12 + 1 = \mathbf{157}$.

---

### Soal 10 [Level 5 — Sangat Sulit / HOTS: Pola Pengali Bertingkat Variabel]
Angka berikutnya pada deret **$2, 3, 8, 27, 112, ...$** adalah ...
* A. 448
* B. 545
* C. 560
* D. 565
* E. 580

**Kunci: D**  
**Pembahasan:**  
Pola operasi bertingkat variabel $(\times k + k)$:
- Suku 1 ke 2: $2 \times \mathbf{1} + \mathbf{1} = 3$
- Suku 2 ke 3: $3 \times \mathbf{2} + \mathbf{2} = 8$
- Suku 3 ke 4: $8 \times \mathbf{3} + \mathbf{3} = 27$
- Suku 4 ke 5: $27 \times \mathbf{4} + \mathbf{4} = 112$
- Suku 5 ke 6: $112 \times \mathbf{5} + \mathbf{5} = 560 + 5 = \mathbf{565}$.

---

### Soal 11 [Level 4 — Sulit: Matriks Selisih Kuadrat Vertikal Antar-Baris]
Perhatikan matriks angka $3 \times 3$ berikut:

| 6 | 8 | 7 |
| :---: | :---: | :---: |
| 4 | 3 | 5 |
| 20 | 55 | **?** |

Nilai pengganti tanda tanya adalah ...
* A. 24
* B. 22
* C. 26
* D. 28
* E. 32

**Kunci: A**  
**Pembahasan:**  
Hubungan vertikal per kolom: $\text{Baris 3} = (\text{Baris 1})^2 - (\text{Baris 2})^2$.
- Kolom 1: $6^2 - 4^2 = 36 - 16 = 20$
- Kolom 2: $8^2 - 3^2 = 64 - 9 = 55$
- Kolom 3: $7^2 - 5^2 = 49 - 25 = \mathbf{24}$.

---

### Soal 12 [Level 4 — Sulit: Matriks Pola Tripel Kuadratik]
Perhatikan susunan bilangan pada matriks $3 \times 3$ berikut:

| 3 | 4 | 25 |
| :---: | :---: | :---: |
| 5 | 12 | 169 |
| 7 | 24 | **?** |

Nilai pengganti tanda tanya adalah ...
* A. 484
* B. 529
* C. 576
* D. 625
* E. 676

**Kunci: D**  
**Pembahasan:**  
Konsep jumlah kuadrat (Tripel Pythagoras): $\text{Kolom 3} = (\text{Kolom 1})^2 + (\text{Kolom 2})^2$.
- Baris 1: $3^2 + 4^2 = 9 + 16 = 25$ ($5^2$)
- Baris 2: $5^2 + 12^2 = 25 + 144 = 169$ ($13^2$)
- Baris 3: $7^2 + 24^2 = 49 + 576 = \mathbf{625}$ ($25^2$).

---

### Soal 13 [Level 5 — Sangat Sulit / HOTS: Matriks Operasi Perkalian Digit]
Perhatikan matriks bilangan dua digit berikut:

| 23 | 14 | 10 |
| :---: | :---: | :---: |
| 34 | 21 | 14 |
| 45 | 32 | **?** |

Nilai pengganti tanda tanya adalah ...
* A. 20
* B. 22
* C. 24
* D. 28
* E. 26

**Kunci: E**  
**Pembahasan:**  
Operasi perkalian per-digit: $\text{Kolom 3} = (d_1 \times d_2) + (d_3 \times d_4)$.
- Baris 1: $(2 \times 3) + (1 \times 4) = 6 + 4 = 10$
- Baris 2: $(3 \times 4) + (2 \times 1) = 12 + 2 = 14$
- Baris 3: $(4 \times 5) + (3 \times 2) = 20 + 6 = \mathbf{26}$.

---

### Soal 14 [Level 4 — Sulit: Tabel Pola Kubik dengan Indeks Melompat]
Tabel berikut menunjukkan nilai suku ke-$n$ yang mengikuti suatu aturan formula aljabar tertentu:

| Suku ke-$n$ | Nilai |
| :---: | :---: |
| 2 | 6 |
| 3 | 24 |
| 4 | 60 |
| 5 | 120 |
| 7 | **?** |

Nilai pengganti tanda tanya pada suku ke-$7$ adalah ...
* A. 210
* B. 272
* C. 336
* D. 350
* E. 504

**Kunci: C**  
**Pembahasan:**  
Formula: $U_n = n^3 - n = (n-1) \times n \times (n+1)$.
- $U_2 = 2^3 - 2 = 6$
- $U_3 = 3^3 - 3 = 24$
- $U_4 = 4^3 - 4 = 60$
- $U_5 = 5^3 - 5 = 120$
- Indeks melompati $n = 6$ dan langsung ke $n = 7$:
  $$U_7 = 7^3 - 7 = 343 - 7 = \mathbf{336} \quad (6 \times 7 \times 8 = 336)$$

---

### Soal 15 [Level 5 — Sangat Sulit / HOTS: Tabel Deret Kuadratik Dua Arah & Indeks Bilangan Segitiga]
Perhatikan tabel nilai barisan berikut:

| Suku ke-$n$ | Nilai |
| :---: | :---: |
| 1 | 4 |
| 3 | 18 |
| 6 | 54 |
| 10 | 130 |
| 15 | **?** |

Nilai suku ke-$15$ pada tabel tersebut adalah ...
* A. 255
* B. 270
* C. 285
* D. 290
* E. 300

**Kunci: B**  
**Pembahasan:**  
- **Rasio Nilai terhadap $n$:**
  - $n=1 \implies 4/1 = 4 = 1 + 3$
  - $n=3 \implies 18/3 = 6 = 3 + 3$
  - $n=6 \implies 54/6 = 9 = 6 + 3$
  - $n=10 \implies 130/10 = 13 = 10 + 3$
  - Formula: $U_n = n(n + 3) = n^2 + 3n$.
- Untuk $n = 15$:
  $$U_{15} = 15 \times (15 + 3) = 15 \times 18 = \mathbf{270}$$

---

### Soal 16 [Level 4 — Sulit: Matriks $4 \times 3$ Pecahan Rasional Vertikal]
Perhatikan matriks angka berukuran $4 \times 3$ berikut:

| 18 | 24 | 35 |
| :---: | :---: | :---: |
| 4 | 6 | 10 |
| 6 | 5 | 8 |
| 27 | 20 | **?** |

Nilai pengganti tanda tanya pada baris terbawah kolom ketiga adalah ...
* A. 28
* B. 24
* C. 26
* D. 30
* E. 32

**Kunci: A**  
**Pembahasan:**  
Pola vertikal per kolom: $B_4 = \frac{B_1 \times B_3}{B_2}$.
- Kolom 1: $\frac{18 \times 6}{4} = \frac{108}{4} = 27$
- Kolom 2: $\frac{24 \times 5}{6} = 4 \times 5 = 20$
- Kolom 3: $\frac{35 \times 8}{10} = \frac{280}{10} = \mathbf{28}$.

---

### Soal 17 [Level 4 — Sulit: Matriks $4 \times 4$ Proporsi Ujung-Tengah]
Perhatikan matriks angka berukuran $4 \times 4$ berikut:

| 4 | 6 | 8 | 12 |
| :---: | :---: | :---: | :---: |
| 3 | 9 | 6 | 18 |
| 5 | 10 | 4 | 8 |
| 6 | 8 | 9 | **?** |

Nilai pengganti tanda tanya pada baris ke-4 kolom ke-4 adalah ...
* A. 10
* B. 12
* C. 14
* D. 15
* E. 16

**Kunci: B**  
**Pembahasan:**  
Proporsi geometri: $K_1 \times K_4 = K_2 \times K_3$.
- Baris 1: $4 \times 12 = 48 = 6 \times 8$
- Baris 2: $3 \times 18 = 54 = 9 \times 6$
- Baris 3: $5 \times 8 = 40 = 10 \times 4$
- Baris 4: $6 \times \mathbf{?} = 8 \times 9 = 72 \implies \mathbf{?} = \frac{72}{6} = \mathbf{12}$.

---

### Soal 18 [Level 5 — Sangat Sulit / HOTS: Matriks $3 \times 4$ Rata-Rata Geometris & Verifikasi Total]
Perhatikan matriks angka berukuran $3 \times 4$ berikut:

| 8 | 18 | 12 | 38 |
| :---: | :---: | :---: | :---: |
| 3 | 27 | 9 | 39 |
| 5 | 20 | **?** | 35 |

Nilai pengganti tanda tanya pada kolom ketiga adalah ...
* A. 8
* B. 12
* C. 14
* D. 15
* E. 10

**Kunci: E**  
**Pembahasan:**  
Dua aturan baris yang saling mengonfirmasi:
1. Kolom 3 adalah rata-rata geometris: $K_3 = \sqrt{K_1 \times K_2}$.
2. Kolom 4 adalah jumlah total: $K_4 = K_1 + K_2 + K_3$.
- Baris 1: $K_3 = \sqrt{8 \times 18} = 12 \implies 8 + 18 + 12 = 38$
- Baris 2: $K_3 = \sqrt{3 \times 27} = 9 \implies 3 + 27 + 9 = 39$
- Baris 3: $K_3 = \sqrt{5 \times 20} = \sqrt{100} = \mathbf{10} \implies 5 + 20 + 10 = 35$.

---

### Soal 19 [Level 4 — Sulit: Tabel Pola Kubik Bergeser Linier]
Tabel berikut menunjukkan hubungan fungsi nilai terhadap variabel input $x$:

| Nilai $x$ | Nilai $f(x)$ |
| :---: | :---: |
| 1 | 3 |
| 2 | 11 |
| 3 | 31 |
| 4 | 69 |
| 6 | **?** |

Nilai untuk $x = 6$ adalah ...
* A. 131
* B. 182
* C. 216
* D. 223
* E. 235

**Kunci: D**  
**Pembahasan:**  
Fungsi polinomial: $f(x) = x^3 + x + 1$.
- $x = 1 \implies 1 + 1 + 1 = 3$
- $x = 2 \implies 8 + 2 + 1 = 11$
- $x = 3 \implies 27 + 3 + 1 = 31$
- $x = 4 \implies 64 + 4 + 1 = 69$
- Nilai $x = 5$ dilewati; untuk $x = 6$:
  $$f(6) = 6^3 + 6 + 1 = 216 + 7 = \mathbf{223}$$

---

### Soal 20 [Level 5 — Sangat Sulit / HOTS: Tabel Teori Bilangan (Kelipatan Persekutuan Terkecil)]
Perhatikan tabel hubungan bilangan berikut:

| Bilangan $P$ | Bilangan $Q$ | Nilai Hasil $R$ |
| :---: | :---: | :---: |
| 12 | 18 | 36 |
| 15 | 20 | 60 |
| 14 | 35 | 70 |
| 18 | 24 | **?** |

Nilai pengganti tanda tanya pada baris keempat adalah ...
* A. 48
* B. 54
* C. 72
* D. 96
* E. 108

**Kunci: C**  
**Pembahasan:**  
Operasi baris adalah KPK (Kelipatan Persekutuan Terkecil) dari $P$ dan $Q$: $R = \text{KPK}(P, Q)$.
- Baris 1: $\text{KPK}(12, 18) = 36$
- Baris 2: $\text{KPK}(15, 20) = 60$
- Baris 3: $\text{KPK}(14, 35) = 70$
- Baris 4:
  - $18 = 2 \times 3^2$
  - $24 = 2^3 \times 3$
  - $\text{KPK}(18, 24) = 2^3 \times 3^2 = 8 \times 9 = \mathbf{72}$.
