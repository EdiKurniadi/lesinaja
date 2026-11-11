/**
 * Aritmatika Sosial Engine - Prinsip "Nilai Awal Selalu 100%"
 * 
 * Level 1: Refleks Konseptual (Logika 100% tanpa nominal)
 * Level 2: Aplikasi Hitung Cepat (Nominal diberikan di soal, 1 langkah komputasi)
 * Level 3: Kasus Kompleks & Analitis TIU SKD (Berdasarkan 10 pola PDF standar CAT CPNS/Kedinasan)
 * 
 * Menjamin 100% "Clean Numbers" via Dynamic Fractional Reduction & Constraint-Based Generation.
 */

import type { GameQuestion } from "./game-engine";

export type AritmatikaLevel = 1 | 2 | 3 | "all";

// =========================================================================
// UTILITY MATEMATIKA & FORMATTING
// =========================================================================

export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

export function simplifyFraction(num: number, den: number): [number, number] {
  const common = gcd(num, den);
  return [num / common, den / common];
}

export function formatRupiah(amount: number): string {
  const rounded = Math.round(amount);
  return `Rp${new Intl.NumberFormat("id-ID").format(rounded)}`;
}

export function formatKg(amount: number): string {
  if (Number.isInteger(amount)) {
    return `${amount} kg`;
  }
  return `${amount.toLocaleString("id-ID", { maximumFractionDigits: 1 })} kg`;
}

export function formatPercent(p: number): string {
  if (Number.isInteger(p)) {
    return `${p}%`;
  }
  return `${p.toLocaleString("id-ID", { maximumFractionDigits: 1 })}%`;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sample<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Menghasilkan 4 opsi unik dengan 1 jawaban benar.
 */
function makeFourOptions(correct: string, distractors: string[]): string[] {
  const unique = new Set<string>();
  unique.add(correct);

  for (const d of distractors) {
    if (d && d.trim() !== "" && !unique.has(d)) {
      unique.add(d);
      if (unique.size === 4) break;
    }
  }

  // Fallback jika belum cukup 4 opsi
  let counter = 1;
  while (unique.size < 4) {
    const fallback = `${correct} (Opsi ${counter++})`;
    unique.add(fallback);
  }

  return shuffle(Array.from(unique));
}

// =========================================================================
// KAMUS VARIABEL CERITA (STORY SLOTS)
// =========================================================================

interface ProductItem {
  name: string;
  category: "fashion" | "electronic" | "food" | "vehicle" | "agriculture";
  priceTier: "cheap" | "medium" | "expensive" | "luxury";
  unit: string;
}

const PRODUCTS: ProductItem[] = [
  { name: "sepatu olahraga", category: "fashion", priceTier: "medium", unit: "pasang" },
  { name: "jaket musim dingin", category: "fashion", priceTier: "medium", unit: "potong" },
  { name: "kemeja batik premium", category: "fashion", priceTier: "medium", unit: "lembar" },
  { name: "tas ransel kanvas", category: "fashion", priceTier: "cheap", unit: "buah" },
  { name: "jam tangan analog", category: "fashion", priceTier: "medium", unit: "unit" },
  { name: "laptop kerja", category: "electronic", priceTier: "expensive", unit: "unit" },
  { name: "tablet belajar", category: "electronic", priceTier: "expensive", unit: "unit" },
  { name: "kamera mirorless", category: "electronic", priceTier: "expensive", unit: "unit" },
  { name: "smartphone 5G", category: "electronic", priceTier: "expensive", unit: "unit" },
  { name: "headphone wireless", category: "electronic", priceTier: "cheap", unit: "buah" },
  { name: "sepeda motor matik bekas", category: "vehicle", priceTier: "luxury", unit: "unit" },
  { name: "mobil niaga bekas", category: "vehicle", priceTier: "luxury", unit: "unit" },
  { name: "sepeda lipat", category: "vehicle", priceTier: "medium", unit: "unit" },
  { name: "mesin cuci otomatis", category: "electronic", priceTier: "medium", unit: "unit" },
];

const AGRI_ITEMS = [
  { name: "beras pandan wangi", container: "karung", defaultBruto: 50 },
  { name: "jeruk medan super", container: "peti", defaultBruto: 40 },
  { name: "apel malang", container: "dus kayu", defaultBruto: 40 },
  { name: "kopi biji sangrai", container: "karung goni", defaultBruto: 60 },
  { name: "gula pasir tebu", container: "karung", defaultBruto: 50 },
  { name: "bawang merah brebes", container: "karung jaring", defaultBruto: 25 },
  { name: "minyak goreng kelapa", container: "drum", defaultBruto: 120 },
];

const SUBJECTS = [
  "Rian", "Dian", "Bu Wahyu", "Pak Ahmad", "Arman", "Siti", "Hendra", "Bu Lina", "Pak Rahmat", "Kevin", "Budi", "Farhan"
];

// =========================================================================
// LEVEL 1: FONDASI KONSEPTUAL (LOGIKA 100% TANPA HITUNG NOMINAL)
// =========================================================================

export function generateLevel1ConceptQuestion(): GameQuestion {
  const sub = sample(SUBJECTS);
  const prod = sample(PRODUCTS);
  const type = randInt(1, 6);

  // Variasi persentase acak: 5% s.d. 45% (termasuk koma 0.5)
  const percentChoices = [8, 12, 14, 15, 16, 17.5, 20, 22, 25, 30, 35, 40];
  const p = sample(percentChoices);
  const pStr = formatPercent(p);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (type) {
    case 1: {
      // Diskon -> Sisa bayar
      const payPct = 100 - p;
      prompt = `${sub} membeli ${prod.name} yang sedang mendapat diskon ${pStr}. Berapa persentase harga yang harus dibayar pembeli terhadap harga awal?`;
      correctAnswer = `${formatPercent(payPct)} harga awal`;
      distractors = [
        `${formatPercent(100 + p)} harga awal`,
        `${pStr} harga awal`,
        `${formatPercent(payPct - 5)} harga awal`,
        `${formatPercent(100 - Math.floor(p / 2))} harga awal`,
      ];
      tip = `Harga awal selalu 100%. Diskon ${pStr} berarti pembeli cukup membayar: 100% - ${pStr} = ${formatPercent(payPct)} dari harga awal.`;
      break;
    }

    case 2: {
      // Keuntungan (Laba) -> Harga Jual
      const sellPct = 100 + p;
      prompt = `Seorang penjual ingin memperoleh keuntungan sebesar ${pStr} dari modal awal saat menjual ${prod.name}. Harga jual barang tersebut setara dengan berapa persen dari modal awal?`;
      correctAnswer = `${formatPercent(sellPct)} modal awal`;
      distractors = [
        `${formatPercent(100 - p)} modal awal`,
        `${pStr} modal awal`,
        `${formatPercent(sellPct + 10)} modal awal`,
        `${formatPercent(sellPct - 5)} modal awal`,
      ];
      tip = `Modal awal adalah 100%. Untung ${pStr} berarti harga jual = 100% + ${pStr} = ${formatPercent(sellPct)} dari modal awal.`;
      break;
    }

    case 3: {
      // Kerugian -> Harga Jual
      const lossPct = 100 - p;
      prompt = `Karena model lama, sebuah ${prod.name} dijual dengan kerugian ${pStr} dari harga belinya. Harga jual barang tersebut setara dengan berapa persen dari harga beli mula-mula?`;
      correctAnswer = `${formatPercent(lossPct)} harga beli`;
      distractors = [
        `${formatPercent(100 + p)} harga beli`,
        `${pStr} harga beli`,
        `${formatPercent(lossPct - 10)} harga beli`,
        `${formatPercent(100 - Math.floor(p / 2))} harga beli`,
      ];
      tip = `Harga beli adalah 100%. Rugi ${pStr} berarti harga jual = 100% - ${pStr} = ${formatPercent(lossPct)} dari harga beli.`;
      break;
    }

    case 4: {
      // Bruto, Tara, Neto
      const taraChoices = [1, 2, 2.5, 3, 4, 5];
      const tara = sample(taraChoices);
      const taraStr = formatPercent(tara);
      const netoPct = 100 - tara;
      const agri = sample(AGRI_ITEMS);

      prompt = `Sebuah ${agri.container} ${agri.name} memiliki tara sebesar ${taraStr}. Berapa persentase berat bersih (neto) terhadap berat kotor (bruto)?`;
      correctAnswer = `${formatPercent(netoPct)} dari bruto`;
      distractors = [
        `${formatPercent(100 + tara)} dari bruto`,
        `${taraStr} dari bruto`,
        `${formatPercent(netoPct - 2)} dari bruto`,
        `${formatPercent(netoPct + 1)} dari bruto`,
      ];
      tip = `Bruto adalah berat total 100%. Neto = 100% - Tara = 100% - ${taraStr} = ${formatPercent(netoPct)} dari bruto.`;
      break;
    }

    case 5: {
      // Pajak / Biaya Layanan Restoran
      const taxChoices = [5, 10, 11, 12, 15];
      const tax = sample(taxChoices);
      const taxStr = formatPercent(tax);
      const totalPct = 100 + tax;

      prompt = `Sebuah kafe memberlakukan biaya tambahan/pajak sebesar ${taxStr} dari total pesanan. Berapa persentase total tagihan yang harus dibayarkan pelanggan terhadap tagihan dasar?`;
      correctAnswer = `${formatPercent(totalPct)} tagihan dasar`;
      distractors = [
        `${formatPercent(100 - tax)} tagihan dasar`,
        `${taxStr} tagihan dasar`,
        `${formatPercent(totalPct + 5)} tagihan dasar`,
        `${formatPercent(totalPct - 2)} tagihan dasar`,
      ];
      tip = `Tagihan dasar adalah 100%. Dikenakan pajak ${taxStr} membuat total bayar = 100% + ${taxStr} = ${formatPercent(totalPct)} dari tagihan dasar.`;
      break;
    }

    default: {
      // Bunga Total Pinjaman / Tabungan
      const interestChoices = [6, 8, 9, 10, 12, 15];
      const b = sample(interestChoices);
      const bStr = formatPercent(b);
      const totalPct = 100 + b;

      prompt = `Seseorang meminjam uang di koperasi dengan total bunga selama pinjaman sebesar ${bStr} dari pokok pinjaman. Berapa total uang yang harus dilunasi terhadap pinjaman awal?`;
      correctAnswer = `${formatPercent(totalPct)} pinjaman awal`;
      distractors = [
        `${formatPercent(100 - b)} pinjaman awal`,
        `${bStr} pinjaman awal`,
        `${formatPercent(totalPct + 10)} pinjaman awal`,
        `${formatPercent(totalPct - 5)} pinjaman awal`,
      ];
      tip = `Pinjaman pokok adalah 100%. Dengan bunga ${bStr}, total pengembalian = 100% + ${bStr} = ${formatPercent(totalPct)} dari pokok.`;
      break;
    }
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `aritm-l1-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    kind: "concept",
    prompt,
    subtext: "Level 1: Konsep Fondasi 100%",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// LEVEL 2: APLIKASI HITUNG CEPAT (NOMINAL DIBERIKAN, HASIL BULAT RAPI)
// =========================================================================

export function generateLevel2NominalQuestion(): GameQuestion {
  const sub = sample(SUBJECTS);
  const prod = sample(PRODUCTS);
  const type = randInt(1, 4);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (type) {
    case 1: {
      // Diskon dengan persentase fleksibel (8%, 12%, 15%, 20%, 25%, 35%, dll.)
      const pctList = [8, 12, 14, 15, 16, 20, 25, 30, 35, 40, 45, 50];
      const p = sample(pctList);
      const [, pDen] = simplifyFraction(p, 100);

      // Skala harga berdasarkan barang
      const baseUnit = prod.priceTier === "cheap" ? 1000 : prod.priceTier === "expensive" ? 100000 : 10000;
      const k = randInt(2, 10);
      const hargaAwal = k * pDen * baseUnit;

      const diskonRupiah = (hargaAwal * p) / 100;
      const hargaBayar = hargaAwal - diskonRupiah;

      prompt = `${sub} membeli ${prod.name} dengan label harga ${formatRupiah(hargaAwal)} dan mendapatkan diskon ${formatPercent(p)}. Berapa rupiah harga yang harus dibayar?`;
      correctAnswer = formatRupiah(hargaBayar);

      distractors = [
        formatRupiah(diskonRupiah), // Jebakan diskonnya saja
        formatRupiah(hargaAwal + diskonRupiah), // Jebakan ditambah
        formatRupiah(hargaBayar - pDen * baseUnit),
        formatRupiah(hargaBayar + pDen * baseUnit),
      ];

      tip = `Harga awal = 100%. Diskon ${formatPercent(p)} berarti bayar ${100 - p}%. Hitung: ${100 - p}% × ${formatRupiah(hargaAwal)} = ${formatRupiah(hargaBayar)}.`;
      break;
    }

    case 2: {
      // Untung (Markup Penjualan)
      const pctList = [5, 8, 10, 12, 15, 20, 25, 30];
      const p = sample(pctList);
      const [, pDen] = simplifyFraction(p, 100);

      const baseUnit = prod.priceTier === "cheap" ? 2000 : 20000;
      const k = randInt(2, 8);
      const modal = k * pDen * baseUnit;

      const untungRupiah = (modal * p) / 100;
      const hargaJual = modal + untungRupiah;

      prompt = `Seorang pedagang membeli ${prod.name} seharga ${formatRupiah(modal)}. Jika ia ingin memperoleh keuntungan ${formatPercent(p)} dari harga beli, berapakah harga jual barang tersebut?`;
      correctAnswer = formatRupiah(hargaJual);

      distractors = [
        formatRupiah(untungRupiah), // Jebakan untung saja
        formatRupiah(modal - untungRupiah), // Jebakan dikurangi
        formatRupiah(hargaJual + pDen * baseUnit),
        formatRupiah(hargaJual - pDen * baseUnit),
      ];

      tip = `Harga jual = 100% + ${formatPercent(p)} = ${100 + p}% dari modal. Hitung: ${100 + p}% × ${formatRupiah(modal)} = ${formatRupiah(hargaJual)}.`;
      break;
    }

    case 3: {
      // Jual Rugi
      const pctList = [10, 15, 20, 25, 30];
      const p = sample(pctList);
      const [, pDen] = simplifyFraction(p, 100);

      const baseUnit = 50000;
      const k = randInt(3, 9);
      const hargaBeli = k * pDen * baseUnit;

      const rugiRupiah = (hargaBeli * p) / 100;
      const hargaJual = hargaBeli - rugiRupiah;

      prompt = `Sebuah ${prod.name} dibeli seharga ${formatRupiah(hargaBeli)}. Karena butuh dana cepat, pemilik menjualnya dengan kerugian ${formatPercent(p)}. Berapakah harga jualnya?`;
      correctAnswer = formatRupiah(hargaJual);

      distractors = [
        formatRupiah(rugiRupiah),
        formatRupiah(hargaBeli + rugiRupiah),
        formatRupiah(hargaJual - rugiRupiah),
        formatRupiah(hargaJual + 100000),
      ];

      tip = `Harga jual = 100% - ${formatPercent(p)} = ${100 - p}% dari harga beli. Hitung: ${100 - p}% × ${formatRupiah(hargaBeli)} = ${formatRupiah(hargaJual)}.`;
      break;
    }

    default: {
      // Bruto, Tara & Berat Bersih (Neto)
      const agri = sample(AGRI_ITEMS);
      const taraChoices = [1, 2, 2.5, 4, 5];
      const taraPct = sample(taraChoices);

      // Pilih bruto yang menghasilkan tara bulat
      const possibleBruto = taraPct === 2.5 ? [40, 80, 120, 200] : [25, 40, 50, 60, 75, 80, 100];
      const bruto = sample(possibleBruto);

      const taraKg = (bruto * taraPct) / 100;
      const netoKg = bruto - taraKg;

      prompt = `Satu ${agri.container} ${agri.name} memiliki berat kotor (bruto) ${formatKg(bruto)} dengan persentase tara ${formatPercent(taraPct)}. Berapakah berat bersih (neto) ${agri.name} tersebut?`;
      correctAnswer = formatKg(netoKg);

      distractors = [
        formatKg(taraKg), // Jebakan taranya saja
        formatKg(bruto + taraKg), // Jebakan ditambah
        formatKg(netoKg - 1),
        formatKg(netoKg + 1.5),
      ];

      tip = `Neto = (100% - ${formatPercent(taraPct)}) × ${formatKg(bruto)} = ${100 - taraPct}% × ${bruto} kg = ${formatKg(netoKg)}.`;
      break;
    }
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `aritm-l2-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    kind: "nominal",
    prompt,
    subtext: "Level 2: Hitung Nominal Cepat",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// LEVEL 3: VARIASI KOMPLEKS & ANALITIS (10 POLA CAT SKD DARI PDF)
// =========================================================================

export function generateLevel3ComplexQuestion(): GameQuestion {
  const pattern = randInt(1, 10);
  const sub = sample(SUBJECTS);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (pattern) {
    case 1: {
      // Pola Soal 01: Multi-karung bruto tara, modal beli total, jual eceran -> Untung
      const numBags = sample([2, 3, 4]);
      const brutoPerBag = sample([40, 50, 60]);
      const taraPct = sample([2, 2.5, 4, 5]);
      const taraPerBag = (brutoPerBag * taraPct) / 100;
      const netoPerBag = brutoPerBag - taraPerBag;
      const totalNeto = numBags * netoPerBag;

      const hargaEceran = sample([12000, 13000, 14000, 15000, 16000]);
      const totalPenerimaan = totalNeto * hargaEceran;

      // Buat modal pembelian dengan untung bersih kelipatan Rp5.000 atau Rp10.000
      const untungTarget = sample([160000, 180000, 196000, 204000, 212000, 224000, 240000]);
      const totalModal = totalPenerimaan - untungTarget;

      prompt = `Seorang pedagang membeli ${numBags} karung beras dengan bruto masing-masing ${formatKg(brutoPerBag)} dan tara ${formatPercent(taraPct)}. Total harga pembelian kedua karung beras tersebut adalah ${formatRupiah(totalModal)}. Seluruh beras tersebut kemudian dijual kembali secara eceran dengan harga ${formatRupiah(hargaEceran)} per kg. Besar keuntungan yang diperoleh pedagang tersebut adalah ...`;
      correctAnswer = formatRupiah(untungTarget);

      distractors = [
        formatRupiah(untungTarget + 8000),
        formatRupiah(untungTarget - 8000),
        formatRupiah(untungTarget + 20000),
        formatRupiah(untungTarget - 16000),
      ];

      tip = `Langkah 1: Cari neto 1 karung = (100% - ${formatPercent(taraPct)}) × ${brutoPerBag} kg = ${netoPerBag} kg. Total neto (${numBags} karung) = ${totalNeto} kg.\nLangkah 2: Penjualan = ${totalNeto} kg × ${formatRupiah(hargaEceran)} = ${formatRupiah(totalPenerimaan)}.\nLangkah 3: Untung = Penjualan - Modal = ${formatRupiah(totalPenerimaan)} - ${formatRupiah(totalModal)} = ${formatRupiah(untungTarget)}.`;
      break;
    }

    case 2: {
      // Pola Soal 02: Bunga Tunggal - Kuantitas P vs Q
      const modal = sample([4000000, 5000000, 6000000, 8000000]);
      const bungaThn = sample([6, 8, 9, 10, 12]);
      const tBulan = sample([6, 8, 9, 10, 12, 15, 18]);

      const bungaTotal = (modal * bungaThn * tBulan) / 1200;
      const saldoAkhir = modal + bungaTotal;

      const Q = sample([tBulan - 2, tBulan, tBulan + 2]);

      prompt = `${sub} menabung uang di bank sebesar ${formatRupiah(modal)} dengan sistem bunga tunggal sebesar ${formatPercent(bungaThn)} per tahun. Setelah t bulan, jumlah saldo tabungan ${sub} bertambah menjadi ${formatRupiah(saldoAkhir)}.\n\nKuantitas P: Nilai t (dalam bulan)\nKuantitas Q: ${Q}`;

      let relation = "";
      if (tBulan > Q) relation = "Kuantitas P lebih besar daripada kuantitas Q.";
      else if (tBulan < Q) relation = "Kuantitas P lebih kecil daripada kuantitas Q.";
      else relation = "Kuantitas P sama dengan kuantitas Q.";

      correctAnswer = relation;
      distractors = [
        "Kuantitas P lebih besar daripada kuantitas Q.",
        "Kuantitas P lebih kecil daripada kuantitas Q.",
        "Kuantitas P sama dengan kuantitas Q.",
        "Informasi yang diberikan tidak cukup untuk memutuskan hubungan antara kuantitas P dan Q.",
      ].filter((o) => o !== correctAnswer);

      tip = `Bunga = Saldo Akhir - Saldo Awal = ${formatRupiah(saldoAkhir)} - ${formatRupiah(modal)} = ${formatRupiah(bungaTotal)}.\nBunga = Pokok × Bunga/Thn × (t/12) => ${formatRupiah(bungaTotal)} = ${formatRupiah(modal)} × ${bungaThn}% × (t/12) => t = ${tBulan} bulan.\nBandingkan P (${tBulan}) dengan Q (${Q}) => ${correctAnswer}`;
      break;
    }

    case 3: {
      // Pola Soal 03: Kecukupan Data (Data Sufficiency) Angsuran Pinjaman
      const pinjaman = sample([10000000, 12000000, 15000000, 18000000]);
      const tenorBulan = sample([12, 18, 24]);
      const tenorTahun = tenorBulan / 12;
      const bungaTahunan = 10;
      const totalBunga = (pinjaman * bungaTahunan * tenorTahun) / 100;

      prompt = `${sub} meminjam uang di koperasi sebesar ${formatRupiah(pinjaman)} dengan sistem bunga tunggal dan berniat melunasinya dengan cara mengangsur secara merata setiap bulan selama ${tenorTahun} tahun (${tenorBulan} bulan). Berapakah besar angsuran yang harus dibayarkan ${sub} setiap bulannya?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Suku bunga pinjaman koperasi tersebut adalah ${bungaTahunan}% per tahun.\n(2) Total bunga pinjaman yang harus dibayar selama masa pinjaman adalah ${formatRupiah(totalBunga)}.`;

      correctAnswer = "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.";
      distractors = [
        "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
        "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
        "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
        "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.",
      ];

      tip = `Pokok pinjaman (${formatRupiah(pinjaman)}) dan tenor (${tenorBulan} bulan) sudah diketahui di soal.\nDari pernyataan (1), suku bunga diketahui sehingga total bunga dan angsuran bisa dihitung (CUKUP).\nDari pernyataan (2), total bunga nominal langsung diketahui sehingga angsuran = (Pokok + Bunga)/${tenorBulan} bisa langsung dihitung (CUKUP).\nJadi (1) SAJA cukup dan (2) SAJA cukup.`;
      break;
    }

    case 4: {
      // Pola Soal 04: Diskon Tunggal vs Diskon Bertingkat
      const hargaLabel = sample([300000, 400000, 500000, 600000, 800000]);
      const disc1 = 35; // Promo I
      // Promo II: bertingkat 20% + 20%
      // Bayar I = (100 - 35)% = 65%
      // Bayar II = 80% * 80% = 64%
      const bayar1 = (hargaLabel * (100 - disc1)) / 100;
      const bayar2 = hargaLabel * 0.8 * 0.8;
      const selisih = Math.abs(bayar1 - bayar2);

      prompt = `Sebuah gerai pakaian menawarkan dua opsi promosi untuk sebuah jaket dengan label harga ${formatRupiah(hargaLabel)}:\n• Opsi Promo I: Diskon langsung sebesar ${disc1}%.\n• Opsi Promo II: Diskon bertingkat 20% + 20%.\n\nSelisih harga akhir yang harus dibayar konsumen antara kedua opsi promosi tersebut adalah ...`;
      correctAnswer = formatRupiah(selisih);

      distractors = [
        formatRupiah(selisih - 1000 > 0 ? selisih - 1000 : selisih + 3000),
        formatRupiah(selisih + 1000),
        formatRupiah(selisih + 2000),
        formatRupiah(selisih + 4000),
      ];

      tip = `Promo I: Bayar = 100% - 35% = 65% dari harga.\nPromo II: Diskon bertingkat 20% + 20% artinya bayar 80% × 80% = 64% dari harga.\nSelisih persentase bayar = 65% - 64% = 1% dari harga awal.\nSelisih = 1% × ${formatRupiah(hargaLabel)} = ${formatRupiah(selisih)}.`;
      break;
    }

    case 5: {
      // Pola Soal 05: Bruto, Tara, Susut Barang Busuk, & Persentase Untung
      const bruto = 40;
      const taraPct = 5;
      const taraKg = (bruto * taraPct) / 100; // 2 kg
      const busukKg = 2; // 2 kg busuk
      const netoBagus = bruto - taraKg - busukKg; // 36 kg
      const modal = 450000;
      const hargaJualPerKg = 15000;
      const hasilJual = netoBagus * hargaJualPerKg; // 36 * 15.000 = 540.000
      const untungRupiah = hasilJual - modal; // 90.000
      const untungPct = (untungRupiah / modal) * 100; // 20%

      prompt = `Seorang pedagang buah membeli satu peti jeruk dengan bruto ${formatKg(bruto)} seharga ${formatRupiah(modal)}. Peti kayu tersebut memiliki tara sebesar ${formatPercent(taraPct)}. Saat disortir, ternyata terdapat ${busukKg} kg jeruk busuk yang tidak layak untuk dijual. Jika seluruh sisa jeruk dalam kondisi baik dijual dengan harga ${formatRupiah(hargaJualPerKg)} per kg, persentase keuntungan yang diperoleh pedagang terhadap modal awal adalah ...`;
      correctAnswer = formatPercent(untungPct);

      distractors = [
        "12%",
        "15%",
        "16,5%",
        "18%",
        "25%",
      ].filter((o) => o !== correctAnswer).slice(0, 3);

      tip = `Langkah 1: Neto total = (100% - 5%) × 40 kg = 38 kg.\nLangkah 2: Jeruk yang dapat dijual = 38 kg - 2 kg = 36 kg.\nLangkah 3: Total penerimaan = 36 kg × Rp15.000 = Rp540.000.\nLangkah 4: Untung = Rp540.000 - Rp450.000 = Rp90.000.\nLangkah 5: % Untung = (90.000 / 450.000) × 100% = 20%.`;
      break;
    }

    case 6: {
      // Pola Soal 06: Service Charge + PPN Berantai (Restoran) - P vs Q
      const totalPesanan = sample([200000, 300000, 320000, 400000]);
      const servicePct = 5;
      const ppnPct = 11;

      const setelahService = (totalPesanan * (100 + servicePct)) / 100;
      const totalAkhir = Math.round((setelahService * (100 + ppnPct)) / 100);

      const Q = sample([totalAkhir - 5000, totalAkhir, totalAkhir + 5000]);

      prompt = `Sebuah keluarga bersantap di restoran dengan total pesanan makanan dan minuman sebesar ${formatRupiah(totalPesanan)}. Restoran memberlakukan biaya layanan (service charge) sebesar ${servicePct}% dari total pesanan. Selanjutnya, transaksi tersebut dikenakan Pajak Pertambahan Nilai (PPN) sebesar ${ppnPct}% yang dihitung dari total setelah penambahan biaya layanan.\n\nKuantitas P: Total biaya akhir yang harus dibayarkan (dalam rupiah)\nKuantitas Q: ${formatRupiah(Q)}`;

      let rel = "";
      if (totalAkhir > Q) rel = "Kuantitas P lebih besar daripada kuantitas Q.";
      else if (totalAkhir < Q) rel = "Kuantitas P lebih kecil daripada kuantitas Q.";
      else rel = "Kuantitas P sama dengan kuantitas Q.";

      correctAnswer = rel;
      distractors = [
        "Kuantitas P lebih besar daripada kuantitas Q.",
        "Kuantitas P lebih kecil daripada kuantitas Q.",
        "Kuantitas P sama dengan kuantitas Q.",
        "Hubungan antara kuantitas P dan kuantitas Q tidak dapat ditentukan berdasarkan informasi yang diberikan.",
      ].filter((o) => o !== correctAnswer);

      tip = `Setelah service charge: 105% × ${formatRupiah(totalPesanan)} = ${formatRupiah(setelahService)}.\nSetelah PPN 11%: 111% × ${formatRupiah(setelahService)} = ${formatRupiah(totalAkhir)}.\nMaka P = ${formatRupiah(totalAkhir)}, bandingkan dengan Q = ${formatRupiah(Q)} => ${correctAnswer}`;
      break;
    }

    case 7: {
      // Pola Soal 07: Jual Rugi -> Balik Modal 100% -> Target Untung
      const rugiPct = sample([15, 20, 25]);
      const untungTargetPct = sample([10, 15, 20]);

      const [, rDen] = simplifyFraction(100 - rugiPct, 100);
      const k = sample([10, 12, 14, 15]);
      const hargaBeli = k * rDen * 100000;
      const hargaJualRugi = (hargaBeli * (100 - rugiPct)) / 100;
      const hargaJualSeharusnya = (hargaBeli * (100 + untungTargetPct)) / 100;

      prompt = `Seorang pemilik kendaraan menjual kendaraannya dengan harga ${formatRupiah(hargaJualRugi)}. Dari penjualan tersebut, pemilik mengalami kerugian sebesar ${formatPercent(rugiPct)} terhadap harga pembelian mula-mula. Apabila semula pemilik menginginkan keuntungan sebesar ${formatPercent(untungTargetPct)} dari harga beli, harga jual kendaraan tersebut seharusnya ditetapkan sebesar ...`;
      correctAnswer = formatRupiah(hargaJualSeharusnya);

      distractors = [
        formatRupiah(hargaBeli), // Jebakan modal saja
        formatRupiah(hargaJualRugi + (hargaBeli * untungTargetPct) / 100),
        formatRupiah(hargaJualSeharusnya - 600000),
        formatRupiah(hargaJualSeharusnya + 600000),
      ];

      tip = `Langkah 1: Rugi ${rugiPct}% berarti harga jual ${formatRupiah(hargaJualRugi)} adalah ${100 - rugiPct}% dari harga beli.\nHarga Beli = ${formatRupiah(hargaJualRugi)} / ${(100 - rugiPct) / 100} = ${formatRupiah(hargaBeli)}.\nLangkah 2: Target untung ${untungTargetPct}% berarti harga jual = ${100 + untungTargetPct}% × ${formatRupiah(hargaBeli)} = ${formatRupiah(hargaJualSeharusnya)}.`;
      break;
    }

    case 8: {
      // Pola Soal 08: Kecukupan Data Campuran Komoditas
      prompt = `Seorang pedagang mencampurkan 30 kg beras super dan 20 kg beras standar. Seluruh beras campuran tersebut kemudian dikemas kembali secara merata ke dalam kantong-kantong berukuran 5 kg. Pedagang ingin memperoleh keuntungan sebesar 20% dari total modal pembelian. Berapakah harga jual setiap kantong beras 5 kg?\n\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) Harga beli beras super adalah Rp14.000 per kg.\n(2) Harga beli beras standar adalah Rp10.000 per kg.`;
      correctAnswer = "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.";
      distractors = [
        "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
        "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
        "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
        "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.",
      ];

      tip = `Untuk menghitung total modal beras campuran, kita memerlukan kedua komponen harga: harga beras super (1) DAN harga beras standar (2). Tanpa salah satunya, modal campuran tidak dapat dihitung sehingga harga jual per kantong tidak dapat ditentukan. DUA pernyataan bersama-sama CUKUP.`;
      break;
    }

    case 9: {
      // Pola Soal 09: Bruto, Drum Kosong (Tara), dan Persentase Tara
      const bruto = 120;
      const taraKg = 3.6;
      const taraPct = (taraKg / bruto) * 100; // 3%
      const neto = bruto - taraKg; // 116.4 kg

      prompt = `Sebuah drum berisi penuh minyak goreng memiliki berat kotor (bruto) sebesar ${formatKg(bruto)}. Setelah seluruh isi minyak goreng dipindahkan ke wadah jeriken, drum kosong tersebut ditimbang dan jarum timbangan menunjukkan angka ${formatKg(taraKg)}. Persentase tara terhadap bruto serta berat neto minyak goreng di dalam drum tersebut berturut-turut adalah ...`;
      correctAnswer = `${formatPercent(taraPct)} dan ${formatKg(neto)}`;

      distractors = [
        `${formatPercent(taraPct)} dan ${formatKg(bruto)}`,
        `${formatPercent(taraPct)} dan ${formatKg(bruto + taraKg)}`,
        `3,6% dan ${formatKg(neto)}`,
        `30% dan 84 kg`,
      ];

      tip = `Tara = berat drum kosong = ${formatKg(taraKg)}.\n% Tara = (Tara / Bruto) × 100% = (${taraKg} / ${bruto}) × 100% = ${formatPercent(taraPct)}.\nNeto = Bruto - Tara = ${bruto} kg - ${taraKg} kg = ${formatKg(neto)}.`;
      break;
    }

    default: {
      // Pola Soal 10: Gaji Kotor, Batas PTKP, dan PPh 5% -> Gaji Bersih (Take-Home Pay)
      const ptkp = sample([4000000, 4500000, 5000000]);
      const pkp = sample([2000000, 3000000, 4000000, 5000000]); // Penghasilan kena pajak
      const gajiKotor = ptkp + pkp;
      const pphRate = 5;
      const pphNominal = (pkp * pphRate) / 100;
      const takeHomePay = gajiKotor - pphNominal;

      prompt = `${sub} memperoleh penghasilan kotor sebesar ${formatRupiah(gajiKotor)} setiap bulan. Batas Penghasilan Tidak Kena Pajak (PTKP) yang ditetapkan untuk ${sub} adalah ${formatRupiah(ptkp)} per bulan. Jika seluruh sisa penghasilan di atas PTKP dikenakan tarif Pajak Penghasilan (PPh) sebesar ${pphRate}%, besar penghasilan bersih (take-home pay) yang diterima ${sub} setiap bulan adalah ...`;
      correctAnswer = formatRupiah(takeHomePay);

      distractors = [
        formatRupiah(gajiKotor - (gajiKotor * pphRate) / 100), // Jebakan potong dari total kotor
        formatRupiah(takeHomePay - 50000),
        formatRupiah(takeHomePay + 50000),
        formatRupiah(takeHomePay + 100000),
      ];

      tip = `Penghasilan Kena Pajak (PKP) = Gaji Kotor - PTKP = ${formatRupiah(gajiKotor)} - ${formatRupiah(ptkp)} = ${formatRupiah(pkp)}.\nPotongan PPh ${pphRate}% = ${pphRate}% × ${formatRupiah(pkp)} = ${formatRupiah(pphNominal)}.\nPenghasilan Bersih = Gaji Kotor - PPh = ${formatRupiah(gajiKotor)} - ${formatRupiah(pphNominal)} = ${formatRupiah(takeHomePay)}.`;
      break;
    }
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `aritm-l3-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    kind: "complex",
    prompt,
    subtext: "Level 3: Kasus Kompleks TIU SKD",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// GENERATOR UTAMA
// =========================================================================

export function generateAritmatikaQuestion(level: AritmatikaLevel = "all"): GameQuestion {
  let targetLevel = level;
  if (level === "all") {
    targetLevel = sample([1, 2, 3]) as AritmatikaLevel;
  }

  if (targetLevel === 1) return generateLevel1ConceptQuestion();
  if (targetLevel === 2) return generateLevel2NominalQuestion();
  return generateLevel3ComplexQuestion();
}

export function generateAritmatikaSet(level: AritmatikaLevel, count: number): GameQuestion[] {
  const questions: GameQuestion[] = [];
  for (let i = 0; i < count; i++) {
    questions.push(generateAritmatikaQuestion(level));
  }
  return questions;
}

