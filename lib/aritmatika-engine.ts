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
// LEVEL 2: APLIKASI HITUNG CEPAT (NOMINAL DIBERIKAN, TARGET BERVARIASI)
// Target pertanyaan: "final" (kondisi akhir), "delta" (perubahan/selisih),
// atau "initial" (kondisi mula-mula / nilai awal 100%).
// =========================================================================

export function generateLevel2NominalQuestion(): GameQuestion {
  const sub = sample(SUBJECTS);
  const prod = sample(PRODUCTS);
  const type = randInt(1, 6);
  // Target yang ditanyakan: "final" = kondisi akhir, "delta" = nilai naik/turun, "initial" = nilai awal 100%
  const target = sample(["final", "delta", "initial"] as const);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (type) {
    case 1: {
      // 1. KASUS DISKON
      const pctList = [8, 10, 12, 15, 16, 20, 25, 30, 35, 40, 50];
      const p = sample(pctList);
      const [, pDen] = simplifyFraction(p, 100);

      const baseUnit = prod.priceTier === "cheap" ? 1000 : prod.priceTier === "expensive" ? 100000 : 10000;
      const k = randInt(2, 8);
      const hargaAwal = k * pDen * baseUnit;
      const diskonRupiah = (hargaAwal * p) / 100;
      const hargaBayar = hargaAwal - diskonRupiah;

      if (target === "delta") {
        // Tanya besar diskon rupiah
        prompt = `${sub} membeli ${prod.name} yang memiliki label harga ${formatRupiah(hargaAwal)} dan mendapatkan diskon sebesar ${formatPercent(p)}. Berapa rupiah besar potongan harga (diskon) yang diperoleh ${sub}?`;
        correctAnswer = formatRupiah(diskonRupiah);
        distractors = [
          formatRupiah(hargaBayar), // Jebakan harga bayar
          formatRupiah(diskonRupiah + pDen * baseUnit),
          formatRupiah(diskonRupiah - pDen * baseUnit > 0 ? diskonRupiah - pDen * baseUnit : diskonRupiah + 15000),
          formatRupiah(hargaAwal / 2),
        ];
        tip = `Harga awal = 100% = ${formatRupiah(hargaAwal)}.\nPotongan diskon = ${formatPercent(p)} × ${formatRupiah(hargaAwal)} = ${formatRupiah(diskonRupiah)}.`;
      } else if (target === "initial") {
        // Tanya harga awal mula-mula (reverse calculation)
        prompt = `Setelah mendapatkan potongan harga (diskon) sebesar ${formatPercent(p)}, ${sub} membayar sebuah ${prod.name} seharga ${formatRupiah(hargaBayar)}. Berapakah harga label ${prod.name} tersebut sebelum didiskon?`;
        correctAnswer = formatRupiah(hargaAwal);
        distractors = [
          formatRupiah(hargaBayar + diskonRupiah * 2),
          formatRupiah(hargaBayar + (hargaBayar * p) / 100), // Jebakan hitung persen dari harga bayar
          formatRupiah(hargaAwal - pDen * baseUnit),
          formatRupiah(hargaAwal + pDen * baseUnit),
        ];
        tip = `Kaidah 100%: Harga label mula-mula selalu 100%.\nDiskon ${formatPercent(p)} berarti harga yang dibayar adalah ${100 - p}% dari harga label.\n${100 - p}% = ${formatRupiah(hargaBayar)} => Harga Label (100%) = ${formatRupiah(hargaBayar)} / ${(100 - p) / 100} = ${formatRupiah(hargaAwal)}.`;
      } else {
        // Tanya harga bayar akhir
        prompt = `${sub} membeli ${prod.name} dengan label harga ${formatRupiah(hargaAwal)} dan mendapatkan diskon ${formatPercent(p)}. Berapa rupiah harga yang harus dibayar?`;
        correctAnswer = formatRupiah(hargaBayar);
        distractors = [
          formatRupiah(diskonRupiah),
          formatRupiah(hargaAwal + diskonRupiah),
          formatRupiah(hargaBayar - pDen * baseUnit),
          formatRupiah(hargaBayar + pDen * baseUnit),
        ];
        tip = `Harga awal = 100%. Diskon ${formatPercent(p)} berarti bayar ${100 - p}%. Hitung: ${100 - p}% × ${formatRupiah(hargaAwal)} = ${formatRupiah(hargaBayar)}.`;
      }
      break;
    }

    case 2: {
      // 2. KASUS LABA / UNTUNG
      const pctList = [5, 8, 10, 12, 15, 20, 25, 30];
      const p = sample(pctList);
      const [, pDen] = simplifyFraction(p, 100);

      const baseUnit = prod.priceTier === "cheap" ? 2000 : 20000;
      const k = randInt(2, 8);
      const modal = k * pDen * baseUnit;
      const untungRupiah = (modal * p) / 100;
      const hargaJual = modal + untungRupiah;

      if (target === "delta") {
        // Tanya nominal keuntungan
        prompt = `Seorang pedagang membeli ${prod.name} dengan modal ${formatRupiah(modal)}. Jika dari penjualan barang tersebut ia memperoleh keuntungan sebesar ${formatPercent(p)}, berapakah rupiah keuntungan yang diraih pedagang tersebut?`;
        correctAnswer = formatRupiah(untungRupiah);
        distractors = [
          formatRupiah(hargaJual),
          formatRupiah(untungRupiah + pDen * baseUnit),
          formatRupiah(untungRupiah - pDen * baseUnit > 0 ? untungRupiah - pDen * baseUnit : untungRupiah + 25000),
          formatRupiah(modal - untungRupiah),
        ];
        tip = `Modal = 100% = ${formatRupiah(modal)}.\nNominal untung = ${formatPercent(p)} × ${formatRupiah(modal)} = ${formatRupiah(untungRupiah)}.`;
      } else if (target === "initial") {
        // Tanya modal mula-mula
        prompt = `Sebuah ${prod.name} berhasil dijual seharga ${formatRupiah(hargaJual)}. Dari penjualan tersebut, pedagang mendapatkan keuntungan sebesar ${formatPercent(p)} dari harga beli. Berapakah modal pembelian awal barang tersebut?`;
        correctAnswer = formatRupiah(modal);
        distractors = [
          formatRupiah(hargaJual - (hargaJual * p) / 100), // Jebakan potong langsung dari harga jual
          formatRupiah(modal - pDen * baseUnit),
          formatRupiah(modal + pDen * baseUnit),
          formatRupiah(hargaJual + untungRupiah),
        ];
        tip = `Kaidah 100%: Modal awal selalu 100%.\nUntung ${formatPercent(p)} berarti harga jual adalah ${100 + p}% dari modal.\n${100 + p}% = ${formatRupiah(hargaJual)} => Modal (100%) = ${formatRupiah(hargaJual)} / ${(100 + p) / 100} = ${formatRupiah(modal)}.`;
      } else {
        // Tanya harga jual akhir
        prompt = `Seorang pedagang membeli ${prod.name} seharga ${formatRupiah(modal)}. Jika ia ingin memperoleh keuntungan ${formatPercent(p)} dari harga beli, berapakah harga jual barang tersebut?`;
        correctAnswer = formatRupiah(hargaJual);
        distractors = [
          formatRupiah(untungRupiah),
          formatRupiah(modal - untungRupiah),
          formatRupiah(hargaJual + pDen * baseUnit),
          formatRupiah(hargaJual - pDen * baseUnit),
        ];
        tip = `Harga jual = 100% + ${formatPercent(p)} = ${100 + p}% dari modal. Hitung: ${100 + p}% × ${formatRupiah(modal)} = ${formatRupiah(hargaJual)}.`;
      }
      break;
    }

    case 3: {
      // 3. KASUS RUGI
      const pctList = [10, 15, 20, 25, 30];
      const p = sample(pctList);
      const [, pDen] = simplifyFraction(p, 100);

      const baseUnit = 25000;
      const k = randInt(2, 6);
      const hargaBeli = k * pDen * baseUnit;
      const rugiRupiah = (hargaBeli * p) / 100;
      const hargaJual = hargaBeli - rugiRupiah;

      if (target === "delta") {
        // Tanya nominal kerugian
        prompt = `${sub} menjual ${prod.name} yang semula dibeli seharga ${formatRupiah(hargaBeli)} dengan mengalami kerugian sebesar ${formatPercent(p)}. Berapa rupiah kerugian yang dialami ${sub}?`;
        correctAnswer = formatRupiah(rugiRupiah);
        distractors = [
          formatRupiah(hargaJual),
          formatRupiah(rugiRupiah + 20000),
          formatRupiah(rugiRupiah - 20000 > 0 ? rugiRupiah - 20000 : rugiRupiah + 40000),
          formatRupiah(hargaBeli / 2),
        ];
        tip = `Harga beli = 100% = ${formatRupiah(hargaBeli)}.\nNominal rugi = ${formatPercent(p)} × ${formatRupiah(hargaBeli)} = ${formatRupiah(rugiRupiah)}.`;
      } else if (target === "initial") {
        // Tanya harga beli mula-mula
        prompt = `Sebuah ${prod.name} dijual dengan harga ${formatRupiah(hargaJual)}. Penjual tersebut mengalami kerugian sebesar ${formatPercent(p)} dari harga pembelian mula-mula. Berapakah harga beli ${prod.name} tersebut semula?`;
        correctAnswer = formatRupiah(hargaBeli);
        distractors = [
          formatRupiah(hargaJual + (hargaJual * p) / 100), // Jebakan hitung persen dari harga jual
          formatRupiah(hargaBeli - 50000),
          formatRupiah(hargaBeli + 50000),
          formatRupiah(hargaJual + rugiRupiah * 2),
        ];
        tip = `Kaidah 100%: Harga beli mula-mula = 100%.\nRugi ${formatPercent(p)} berarti harga jual adalah ${100 - p}% dari harga beli.\n${100 - p}% = ${formatRupiah(hargaJual)} => Harga Beli (100%) = ${formatRupiah(hargaJual)} / ${(100 - p) / 100} = ${formatRupiah(hargaBeli)}.`;
      } else {
        // Tanya harga jual akhir
        prompt = `Sebuah ${prod.name} dibeli seharga ${formatRupiah(hargaBeli)}. Karena butuh dana cepat, pemilik menjualnya dengan kerugian ${formatPercent(p)}. Berapakah harga jualnya?`;
        correctAnswer = formatRupiah(hargaJual);
        distractors = [
          formatRupiah(rugiRupiah),
          formatRupiah(hargaBeli + rugiRupiah),
          formatRupiah(hargaJual - rugiRupiah),
          formatRupiah(hargaJual + 50000),
        ];
        tip = `Harga jual = 100% - ${formatPercent(p)} = ${100 - p}% dari harga beli. Hitung: ${100 - p}% × ${formatRupiah(hargaBeli)} = ${formatRupiah(hargaJual)}.`;
      }
      break;
    }

    case 4: {
      // 4. KASUS BRUTO, TARA & NETO
      const agri = sample(AGRI_ITEMS);
      const taraChoices = [1, 2, 2.5, 4, 5];
      const taraPct = sample(taraChoices);

      const possibleBruto = taraPct === 2.5 ? [40, 80, 120, 200] : [25, 40, 50, 60, 75, 80, 100];
      const bruto = sample(possibleBruto);
      const taraKg = (bruto * taraPct) / 100;
      const netoKg = bruto - taraKg;

      if (target === "delta") {
        // Tanya berat tara
        prompt = `Satu ${agri.container} ${agri.name} memiliki berat kotor (bruto) ${formatKg(bruto)} dengan persentase tara ${formatPercent(taraPct)}. Berapakah berat tara (kemasan kosong) dari ${agri.container} tersebut?`;
        correctAnswer = formatKg(taraKg);
        distractors = [
          formatKg(netoKg),
          formatKg(taraKg + 1),
          formatKg(taraKg + 0.5),
          formatKg(bruto * 0.1),
        ];
        tip = `Bruto = 100% = ${formatKg(bruto)}.\nTara = ${formatPercent(taraPct)} × ${bruto} kg = ${formatKg(taraKg)}.`;
      } else if (target === "initial") {
        // Tanya bruto mula-mula
        prompt = `Satu ${agri.container} ${agri.name} memiliki berat bersih (neto) ${formatKg(netoKg)}. Jika persentase tara wadah tersebut adalah ${formatPercent(taraPct)} terhadap bruto, berapakah berat kotor (bruto) ${agri.container} tersebut mula-mula?`;
        correctAnswer = formatKg(bruto);
        distractors = [
          formatKg(netoKg + (netoKg * taraPct) / 100),
          formatKg(bruto - 5),
          formatKg(bruto + 5),
          formatKg(bruto + 10),
        ];
        tip = `Kaidah 100%: Bruto mula-mula = 100%.\nTara ${formatPercent(taraPct)} berarti neto = ${100 - taraPct}% dari bruto.\n${100 - taraPct}% = ${formatKg(netoKg)} => Bruto (100%) = ${netoKg} / ${(100 - taraPct) / 100} = ${formatKg(bruto)}.`;
      } else {
        // Tanya neto akhir
        prompt = `Satu ${agri.container} ${agri.name} memiliki berat kotor (bruto) ${formatKg(bruto)} dengan persentase tara ${formatPercent(taraPct)}. Berapakah berat bersih (neto) ${agri.name} tersebut?`;
        correctAnswer = formatKg(netoKg);
        distractors = [
          formatKg(taraKg),
          formatKg(bruto + taraKg),
          formatKg(netoKg - 1),
          formatKg(netoKg + 1.5),
        ];
        tip = `Neto = (100% - ${formatPercent(taraPct)}) × ${formatKg(bruto)} = ${100 - taraPct}% × ${bruto} kg = ${formatKg(netoKg)}.`;
      }
      break;
    }

    case 5: {
      // 5. KASUS PAJAK (PPN / RESTORAN)
      const p = sample([10, 11, 12]);
      const baseOptions = [100000, 150000, 200000, 250000, 300000, 500000];
      const dasarTransaksi = sample(baseOptions);
      const pajakRupiah = (dasarTransaksi * p) / 100;
      const totalBayar = dasarTransaksi + pajakRupiah;

      if (target === "delta") {
        prompt = `${sub} bersantap di restoran dengan total tagihan makanan sebesar ${formatRupiah(dasarTransaksi)}. Jika restoran mengenakan Pajak Restoran sebesar ${formatPercent(p)}, berapakah besar nominal pajak yang harus dibayarkan?`;
        correctAnswer = formatRupiah(pajakRupiah);
        distractors = [
          formatRupiah(totalBayar),
          formatRupiah(pajakRupiah + 5000),
          formatRupiah(pajakRupiah - 5000 > 0 ? pajakRupiah - 5000 : pajakRupiah + 10000),
          formatRupiah(dasarTransaksi / 10),
        ];
        tip = `Dasar tagihan = 100% = ${formatRupiah(dasarTransaksi)}.\nNominal pajak = ${formatPercent(p)} × ${formatRupiah(dasarTransaksi)} = ${formatRupiah(pajakRupiah)}.`;
      } else if (target === "initial") {
        prompt = `Total tagihan yang dibayarkan ${sub} di kasir termasuk Pajak Pertambahan Nilai (PPN) sebesar ${formatPercent(p)} adalah ${formatRupiah(totalBayar)}. Berapakah harga asli barang/makanan tersebut sebelum dikenakan pajak?`;
        correctAnswer = formatRupiah(dasarTransaksi);
        distractors = [
          formatRupiah(totalBayar - (totalBayar * p) / 100), // Jebakan hitung persen dari total akhir
          formatRupiah(dasarTransaksi - 20000),
          formatRupiah(dasarTransaksi + 20000),
          formatRupiah(totalBayar - 10000),
        ];
        tip = `Kaidah 100%: Harga asli sebelum pajak = 100%.\nPajak ${formatPercent(p)} berarti total tagihan = ${100 + p}% dari harga asli.\n${100 + p}% = ${formatRupiah(totalBayar)} => Harga Asli (100%) = ${formatRupiah(totalBayar)} / ${(100 + p) / 100} = ${formatRupiah(dasarTransaksi)}.`;
      } else {
        prompt = `${sub} membeli peralatan seharga ${formatRupiah(dasarTransaksi)} yang dikenakan PPN sebesar ${formatPercent(p)}. Berapakah total rupiah yang harus dibayarkan ${sub}?`;
        correctAnswer = formatRupiah(totalBayar);
        distractors = [
          formatRupiah(pajakRupiah),
          formatRupiah(dasarTransaksi - pajakRupiah),
          formatRupiah(totalBayar + 15000),
          formatRupiah(totalBayar - 15000),
        ];
        tip = `Total bayar = 100% + ${formatPercent(p)} = ${100 + p}% dari harga dasar.\nTotal = ${100 + p}% × ${formatRupiah(dasarTransaksi)} = ${formatRupiah(totalBayar)}.`;
      }
      break;
    }

    default: {
      // 6. KASUS BUNGA BANK TUNGGAL (1 TAHUN)
      const bungaRate = sample([5, 6, 8, 10, 12]);
      const modalAwal = sample([2000000, 3000000, 4000000, 5000000, 6000000]);
      const bungaRupiah = (modalAwal * bungaRate) / 100;
      const saldoAkhir = modalAwal + bungaRupiah;

      if (target === "delta") {
        prompt = `${sub} menabung di bank sebesar ${formatRupiah(modalAwal)} dengan sistem bunga tunggal sebesar ${formatPercent(bungaRate)} per tahun. Berapa rupiah bunga yang diperoleh ${sub} setelah menabung selama 1 tahun?`;
        correctAnswer = formatRupiah(bungaRupiah);
        distractors = [
          formatRupiah(saldoAkhir),
          formatRupiah(bungaRupiah + 50000),
          formatRupiah(bungaRupiah - 50000 > 0 ? bungaRupiah - 50000 : bungaRupiah + 100000),
          formatRupiah(modalAwal / 10),
        ];
        tip = `Tabungan awal = 100% = ${formatRupiah(modalAwal)}.\nBunga 1 tahun = ${formatPercent(bungaRate)} × ${formatRupiah(modalAwal)} = ${formatRupiah(bungaRupiah)}.`;
      } else if (target === "initial") {
        prompt = `Setelah 1 tahun menabung di bank dengan suku bunga tunggal ${formatPercent(bungaRate)} per tahun, saldo rekening ${sub} bertambah menjadi ${formatRupiah(saldoAkhir)}. Berapakah besar uang yang pertama kali ditabungkan ${sub} mula-mula?`;
        correctAnswer = formatRupiah(modalAwal);
        distractors = [
          formatRupiah(saldoAkhir - (saldoAkhir * bungaRate) / 100),
          formatRupiah(modalAwal - 200000),
          formatRupiah(modalAwal + 200000),
          formatRupiah(saldoAkhir - 100000),
        ];
        tip = `Kaidah 100%: Uang awal selalu 100%.\nBunga ${formatPercent(bungaRate)} berarti saldo akhir adalah ${100 + bungaRate}% dari tabungan awal.\n${100 + bungaRate}% = ${formatRupiah(saldoAkhir)} => Tabungan Awal (100%) = ${formatRupiah(saldoAkhir)} / ${(100 + bungaRate) / 100} = ${formatRupiah(modalAwal)}.`;
      } else {
        prompt = `${sub} menabung di bank sebesar ${formatRupiah(modalAwal)} dengan suku bunga tunggal ${formatPercent(bungaRate)} per tahun. Berapakah jumlah total saldo tabungan ${sub} setelah 1 tahun?`;
        correctAnswer = formatRupiah(saldoAkhir);
        distractors = [
          formatRupiah(bungaRupiah),
          formatRupiah(modalAwal - bungaRupiah),
          formatRupiah(saldoAkhir + 100000),
          formatRupiah(saldoAkhir - 100000),
        ];
        tip = `Saldo akhir = 100% + ${formatPercent(bungaRate)} = ${100 + bungaRate}% dari saldo awal.\nSaldo = ${100 + bungaRate}% × ${formatRupiah(modalAwal)} = ${formatRupiah(saldoAkhir)}.`;
      }
      break;
    }
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `aritm-l2-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    kind: "nominal",
    prompt,
    subtext: "Level 2: Hitung Cepat Variatif",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// LEVEL 3: VARIASI KOMPLEKS & ANALITIS (PERTANYAAN LANGSUNG HOTS TIU SKD)
// Tanpa P vs Q dan tanpa Kecukupan Data; selalu pertanyaan terukur konkret.
// =========================================================================

export function generateLevel3ComplexQuestion(): GameQuestion {
  const pattern = randInt(1, 14);
  const sub = sample(SUBJECTS);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (pattern) {
    case 1: {
      // Pola 01: Multi-karung bruto-tara, modal beli total, jual eceran -> Untung Bersih
      const numBags = sample([2, 3, 4]);
      const brutoPerBag = sample([40, 50, 60]);
      const taraPct = sample([2, 2.5, 4, 5]);
      const taraPerBag = (brutoPerBag * taraPct) / 100;
      const netoPerBag = brutoPerBag - taraPerBag;
      const totalNeto = numBags * netoPerBag;

      const hargaEceran = sample([12000, 13000, 14000, 15000, 16000]);
      const totalPenerimaan = totalNeto * hargaEceran;

      const untungTarget = sample([160000, 180000, 196000, 204000, 212000, 224000, 240000]);
      const totalModal = totalPenerimaan - untungTarget;

      prompt = `Seorang pedagang membeli ${numBags} karung beras dengan bruto masing-masing ${formatKg(brutoPerBag)} dan tara ${formatPercent(taraPct)}. Total harga pembelian seluruh karung beras tersebut adalah ${formatRupiah(totalModal)}. Seluruh beras kemudian dijual kembali secara eceran dengan harga ${formatRupiah(hargaEceran)} per kg. Besar keuntungan bersih yang diperoleh pedagang tersebut adalah ...`;
      correctAnswer = formatRupiah(untungTarget);

      distractors = [
        formatRupiah(untungTarget + 8000),
        formatRupiah(untungTarget - 8000),
        formatRupiah(untungTarget + 20000),
        formatRupiah(untungTarget - 16000),
      ];

      tip = `Langkah 1: Neto 1 karung = (100% - ${formatPercent(taraPct)}) × ${brutoPerBag} kg = ${netoPerBag} kg. Total neto (${numBags} karung) = ${totalNeto} kg.\nLangkah 2: Total Penjualan = ${totalNeto} kg × ${formatRupiah(hargaEceran)} = ${formatRupiah(totalPenerimaan)}.\nLangkah 3: Untung = Penjualan - Modal = ${formatRupiah(totalPenerimaan)} - ${formatRupiah(totalModal)} = ${formatRupiah(untungTarget)}.`;
      break;
    }

    case 2: {
      // Pola 02: Selisih Bunga Dua Rekening / Dua Orang (Pertanyaan Langsung)
      const modalA = sample([3000000, 4000000, 5000000]);
      const modalB = sample([3000000, 4000000, 5000000]);
      const bungaA = sample([6, 8, 10]);
      const bungaB = sample([6, 9, 12]);
      const bulanA = sample([6, 9, 12]);
      const bulanB = sample([6, 8, 12]);

      const bungaNominalA = (modalA * bungaA * bulanA) / 1200;
      const bungaNominalB = (modalB * bungaB * bulanB) / 1200;
      const selisihBunga = Math.abs(bungaNominalA - bungaNominalB);

      // Pastikan selisih tidak nol agar opsi menarik
      const finalSelisih = selisihBunga === 0 ? 50000 : selisihBunga;

      prompt = `Dua orang menabung di bank dengan sistem bunga tunggal:\n• Nasabah X menabung ${formatRupiah(modalA)} dengan suku bunga ${bungaA}% per tahun selama ${bulanA} bulan.\n• Nasabah Y menabung ${formatRupiah(modalB)} dengan suku bunga ${bungaB}% per tahun selama ${bulanB} bulan.\n\nSelisih nominal bunga yang diperoleh oleh Nasabah X dan Nasabah Y adalah ...`;
      correctAnswer = formatRupiah(finalSelisih);

      distractors = [
        formatRupiah(finalSelisih + 25000),
        formatRupiah(finalSelisih - 25000 > 0 ? finalSelisih - 25000 : finalSelisih + 50000),
        formatRupiah(finalSelisih + 40000),
        formatRupiah(finalSelisih + 60000),
      ];

      tip = `Bunga X = ${formatRupiah(modalA)} × ${bungaA}% × (${bulanA}/12) = ${formatRupiah(bungaNominalA)}.\nBunga Y = ${formatRupiah(modalB)} × ${bungaB}% × (${bulanB}/12) = ${formatRupiah(bungaNominalB)}.\nSelisih Bunga = |${formatRupiah(bungaNominalA)} - ${formatRupiah(bungaNominalB)}| = ${formatRupiah(finalSelisih)}.`;
      break;
    }

    case 3: {
      // Pola 03: Pinjaman Modal Usaha & Angsuran Bulanan (Pertanyaan Langsung)
      const pinjaman = sample([12000000, 15000000, 18000000, 24000000]);
      const tenorBulan = sample([10, 12, 15, 20]);
      const bungaTahunan = sample([6, 8, 10, 12]);

      const totalBunga = (pinjaman * bungaTahunan * tenorBulan) / 1200;
      const totalPengembalian = pinjaman + totalBunga;
      const angsuranPerBulan = totalPengembalian / tenorBulan;

      prompt = `${sub} meminjam modal usaha di koperasi sebesar ${formatRupiah(pinjaman)} dengan bunga tunggal sebesar ${bungaTahunan}% per tahun. Pinjaman tersebut akan dilunasi secara mencicil merata setiap bulan selama ${tenorBulan} bulan (pokok ditambah seluruh bunga). Besar cicilan angsuran yang harus dibayar ${sub} setiap bulannya adalah ...`;
      correctAnswer = formatRupiah(angsuranPerBulan);

      distractors = [
        formatRupiah(pinjaman / tenorBulan), // Jebakan pokok saja tanpa bunga
        formatRupiah(angsuranPerBulan + 25000),
        formatRupiah(angsuranPerBulan - 25000),
        formatRupiah(angsuranPerBulan + 50000),
      ];

      tip = `Langkah 1: Total Bunga = Pokok × Bunga/Thn × (Tenor/12) = ${formatRupiah(pinjaman)} × ${bungaTahunan}% × (${tenorBulan}/12) = ${formatRupiah(totalBunga)}.\nLangkah 2: Total Pengembalian = Pokok + Bunga = ${formatRupiah(pinjaman)} + ${formatRupiah(totalBunga)} = ${formatRupiah(totalPengembalian)}.\nLangkah 3: Angsuran/Bulan = ${formatRupiah(totalPengembalian)} / ${tenorBulan} = ${formatRupiah(angsuranPerBulan)}.`;
      break;
    }

    case 4: {
      // Pola 04: Diskon Tunggal vs Diskon Bertingkat (Selisih Rupiah)
      const hargaLabel = sample([300000, 400000, 500000, 600000, 800000]);
      const disc1 = 35; // Promo I
      const bayar1 = (hargaLabel * (100 - disc1)) / 100;
      const bayar2 = hargaLabel * 0.8 * 0.8; // Promo II: 20% + 20% = bayar 64%
      const selisih = Math.abs(bayar1 - bayar2);

      prompt = `Sebuah pusat perbelanjaan memberikan dua pilihan promo untuk pakaian seharga ${formatRupiah(hargaLabel)}:\n• Promo A: Diskon langsung sebesar ${disc1}%.\n• Promo B: Diskon bertingkat 20% + 20%.\n\nBerapakah selisih rupiah yang harus dibayarkan konsumen antara kedua promo tersebut?`;
      correctAnswer = formatRupiah(selisih);

      distractors = [
        formatRupiah(selisih + 2000),
        formatRupiah(selisih - 2000 > 0 ? selisih - 2000 : selisih + 5000),
        formatRupiah(selisih + 4000),
        formatRupiah((hargaLabel * 5) / 100),
      ];

      tip = `Kaidah 100%:\n• Promo A: Bayar = 100% - 35% = 65% dari harga label.\n• Promo B: Diskon 20% + 20% berarti bayar 80% × 80% = 64% dari harga label.\n• Selisih Persen = 65% - 64% = 1% dari harga label.\n• Selisih Rupiah = 1% × ${formatRupiah(hargaLabel)} = ${formatRupiah(selisih)}.`;
      break;
    }

    case 5: {
      // Pola 05: Bruto, Tara, Susut Barang Busuk, & Persentase Untung Real
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

      prompt = `Seorang pedagang buah membeli satu peti jeruk dengan bruto ${formatKg(bruto)} seharga ${formatRupiah(modal)}. Peti kayu memiliki tara sebesar ${formatPercent(taraPct)}. Setelah disortir, terdapat ${busukKg} kg jeruk busuk yang terpaksa dibuang. Sisa jeruk berkualitas baik dijual seharga ${formatRupiah(hargaJualPerKg)} per kg. Persentase keuntungan yang diperoleh pedagang terhadap modal mula-mula adalah ...`;
      correctAnswer = formatPercent(untungPct);

      distractors = [
        "12%",
        "15%",
        "18%",
        "25%",
      ].filter((o) => o !== correctAnswer).slice(0, 3);

      tip = `Langkah 1: Neto total = (100% - 5%) × 40 kg = 38 kg.\nLangkah 2: Jeruk layak jual = 38 kg - 2 kg = 36 kg.\nLangkah 3: Penerimaan jual = 36 kg × Rp15.000 = Rp540.000.\nLangkah 4: Keuntungan = Rp540.000 - Rp450.000 = Rp90.000.\nLangkah 5: % Untung = (90.000 / 450.000) × 100% = 20%.`;
      break;
    }

    case 6: {
      // Pola 06: Service Charge + PPN Berantai (Restoran) -> Total Tagihan Kasir
      const totalPesanan = sample([200000, 300000, 320000, 400000]);
      const servicePct = 5;
      const ppnPct = 11;

      const setelahService = (totalPesanan * (100 + servicePct)) / 100;
      const totalAkhir = Math.round((setelahService * (100 + ppnPct)) / 100);

      prompt = `Satu keluarga menikmati makanan di restoran dengan total pesanan makanan dan minuman sebesar ${formatRupiah(totalPesanan)}. Restoran memberlakukan biaya layanan (service charge) sebesar ${servicePct}% dari harga pesanan. Kemudian, total tersebut dikenakan PPN sebesar ${ppnPct}% dari jumlah setelah penambahan biaya layanan. Total rupiah yang harus dibayarkan di kasir adalah ...`;
      correctAnswer = formatRupiah(totalAkhir);

      distractors = [
        formatRupiah(Math.round(totalPesanan * 1.16)), // Jebakan langsung tambah 16%
        formatRupiah(totalAkhir - 5000),
        formatRupiah(totalAkhir + 5000),
        formatRupiah(totalAkhir + 10000),
      ];

      tip = `Kaidah 100% Berjenjang:\n1. Setelah Service Charge 5%: 105% × ${formatRupiah(totalPesanan)} = ${formatRupiah(setelahService)}.\n2. Setelah PPN 11%: 111% × ${formatRupiah(setelahService)} = ${formatRupiah(totalAkhir)}.`;
      break;
    }

    case 7: {
      // Pola 07: Balik Modal dari Jual Rugi ke Target Untung
      const rugiPct = sample([15, 20, 25]);
      const untungTargetPct = sample([10, 15, 20]);

      const [, rDen] = simplifyFraction(100 - rugiPct, 100);
      const k = sample([10, 12, 14, 15]);
      const hargaBeli = k * rDen * 100000;
      const hargaJualRugi = (hargaBeli * (100 - rugiPct)) / 100;
      const hargaJualSeharusnya = (hargaBeli * (100 + untungTargetPct)) / 100;

      prompt = `Seorang pemilik kendaraan menjual kendaraannya seharga ${formatRupiah(hargaJualRugi)} dan mengalami kerugian sebesar ${formatPercent(rugiPct)} terhadap modal pembelian awal. Apabila semula ia menginginkan keuntungan sebesar ${formatPercent(untungTargetPct)} dari modal beli, harga jual kendaraan tersebut seharusnya ditetapkan sebesar ...`;
      correctAnswer = formatRupiah(hargaJualSeharusnya);

      distractors = [
        formatRupiah(hargaBeli),
        formatRupiah(hargaJualRugi + (hargaBeli * untungTargetPct) / 100),
        formatRupiah(hargaJualSeharusnya - 500000),
        formatRupiah(hargaJualSeharusnya + 500000),
      ];

      tip = `Langkah 1: Rugi ${rugiPct}% berarti harga jual adalah ${100 - rugiPct}% dari harga beli.\nHarga Beli = ${formatRupiah(hargaJualRugi)} / ${(100 - rugiPct) / 100} = ${formatRupiah(hargaBeli)}.\nLangkah 2: Target untung ${untungTargetPct}% berarti harga jual = ${100 + untungTargetPct}% × ${formatRupiah(hargaBeli)} = ${formatRupiah(hargaJualSeharusnya)}.`;
      break;
    }

    case 8: {
      // Pola 08: Campuran Dua Kualitas Beras & Target Untung -> Harga Jual per Kantong
      const kg1 = 30;
      const kg2 = 20;
      const totalKg = kg1 + kg2; // 50 kg
      const h1 = 14000;
      const h2 = 10000;
      const totalModal = kg1 * h1 + kg2 * h2; // 420.000 + 200.000 = 620.000
      const untungPct = 20;
      const totalPenjualanTarget = (totalModal * (100 + untungPct)) / 100; // 744.000
      const ukuranKantong = 5;
      const jumlahKantong = totalKg / ukuranKantong; // 10 kantong
      const hargaPerKantong = totalPenjualanTarget / jumlahKantong; // 74.400

      prompt = `Seorang pedagang mencampurkan ${kg1} kg beras super seharga ${formatRupiah(h1)}/kg dan ${kg2} kg beras standar seharga ${formatRupiah(h2)}/kg. Beras campuran tersebut dikemas merata ke dalam kantong-kantong berukuran ${ukuranKantong} kg. Jika pedagang ingin memperoleh keuntungan ${untungPct}% dari total modal pembelian, berapakah harga jual setiap kantong ${ukuranKantong} kg?`;
      correctAnswer = formatRupiah(hargaPerKantong);

      distractors = [
        formatRupiah(hargaPerKantong - 4000),
        formatRupiah(hargaPerKantong + 4000),
        formatRupiah(hargaPerKantong + 8000),
        formatRupiah(totalModal / jumlahKantong), // Jebakan harga modal per kantong
      ];

      tip = `Langkah 1: Modal = (30 × Rp14.000) + (20 × Rp10.000) = Rp420.000 + Rp200.000 = Rp620.000.\nLangkah 2: Target Penjualan (+20%) = 120% × Rp620.000 = Rp744.000.\nLangkah 3: Jumlah kantong = 50 kg / 5 kg = 10 kantong.\nLangkah 4: Harga per kantong = Rp744.000 / 10 = Rp74.400.`;
      break;
    }

    case 9: {
      // Pola 09: Bruto Drum, Tara Drum Kosong, & Total Penjualan Bersih
      const bruto = 120;
      const taraKg = 3.6;
      const taraPct = (taraKg / bruto) * 100; // 3%
      const neto = bruto - taraKg; // 116.4 kg
      const hargaPerKg = 15000;
      const totalJual = neto * hargaPerKg; // 1.746.000

      prompt = `Sebuah drum berisi penuh minyak memiliki berat kotor (bruto) sebesar ${formatKg(bruto)}. Saat isi minyak dikosongkan seluruhnya, drum kosong ditimbang dan berbobot ${formatKg(taraKg)}. Jika seluruh minyak tersebut kemudian dijual dengan harga ${formatRupiah(hargaPerKg)} per kg neto, total penerimaan hasil penjualan minyak adalah ...`;
      correctAnswer = formatRupiah(totalJual);

      distractors = [
        formatRupiah(bruto * hargaPerKg), // Jebakan dikali bruto
        formatRupiah(totalJual - 30000),
        formatRupiah(totalJual + 30000),
        formatRupiah(totalJual - 60000),
      ];

      tip = `Tara drum kosong = ${formatKg(taraKg)} (${formatPercent(taraPct)} dari bruto).\nNeto minyak bersih = ${bruto} kg - ${taraKg} kg = ${formatKg(neto)}.\nTotal Hasil Jual = ${neto} kg × ${formatRupiah(hargaPerKg)} = ${formatRupiah(totalJual)}.`;
      break;
    }

    case 10: {
      // Pola 10: Gaji Kotor, Batas PTKP, dan PPh 5% -> Gaji Bersih (Take-Home Pay)
      const ptkp = sample([4000000, 4500000, 5000000]);
      const pkp = sample([2000000, 3000000, 4000000, 5000000]);
      const gajiKotor = ptkp + pkp;
      const pphRate = 5;
      const pphNominal = (pkp * pphRate) / 100;
      const takeHomePay = gajiKotor - pphNominal;

      prompt = `${sub} memperoleh penghasilan kotor sebesar ${formatRupiah(gajiKotor)} per bulan. Batas Penghasilan Tidak Kena Pajak (PTKP) adalah ${formatRupiah(ptkp)} per bulan. Jika sisa penghasilan di atas PTKP dikenakan tarif PPh sebesar ${pphRate}%, besar penghasilan bersih (take-home pay) yang diterima ${sub} setiap bulan adalah ...`;
      correctAnswer = formatRupiah(takeHomePay);

      distractors = [
        formatRupiah(gajiKotor - (gajiKotor * pphRate) / 100), // Jebakan potong total kotor
        formatRupiah(takeHomePay - 50000),
        formatRupiah(takeHomePay + 50000),
        formatRupiah(takeHomePay + 100000),
      ];

      tip = `Penghasilan Kena Pajak (PKP) = Gaji Kotor - PTKP = ${formatRupiah(gajiKotor)} - ${formatRupiah(ptkp)} = ${formatRupiah(pkp)}.\nPotongan PPh = ${pphRate}% × ${formatRupiah(pkp)} = ${formatRupiah(pphNominal)}.\nPenghasilan Bersih = ${formatRupiah(gajiKotor)} - ${formatRupiah(pphNominal)} = ${formatRupiah(takeHomePay)}.`;
      break;
    }

    case 11: {
      // Pola 11: Menghitung Lama Menabung (Bulan) dari Pertambahan Bunga Tunggal
      const modal = sample([3000000, 4000000, 5000000, 6000000]);
      const bungaThn = sample([6, 8, 9, 10, 12]);
      const tBulan = sample([6, 8, 9, 10, 15, 18]);
      const bungaNominal = (modal * bungaThn * tBulan) / 1200;
      const saldoAkhir = modal + bungaNominal;

      prompt = `${sub} menabung di bank sebesar ${formatRupiah(modal)} dengan suku bunga tunggal ${formatPercent(bungaThn)} per tahun. Saat seluruh saldo tabungan diambil, jumlahnya telah bertambah menjadi ${formatRupiah(saldoAkhir)}. Berapa bulan ${sub} telah menabung di bank tersebut?`;
      correctAnswer = `${tBulan} bulan`;

      distractors = [
        `${tBulan + 2} bulan`,
        `${tBulan - 2 > 0 ? tBulan - 2 : tBulan + 4} bulan`,
        `${tBulan + 3} bulan`,
        `${tBulan + 6} bulan`,
      ];

      tip = `Pertambahan Bunga = ${formatRupiah(saldoAkhir)} - ${formatRupiah(modal)} = ${formatRupiah(bungaNominal)}.\nRumus Bunga = Modal × Suku Bunga × (t / 12).\n${formatRupiah(bungaNominal)} = ${formatRupiah(modal)} × ${bungaThn}% × (t / 12) => t = ${tBulan} bulan.`;
      break;
    }

    case 12: {
      // Pola 12: Rantai Distribusi Berjenjang (Pabrik -> Distributor -> Pengecer -> Konsumen)
      const biayaProduksi = sample([100000, 200000, 250000]);
      const untungPabrik = 20; // +20%
      const hargaDistributor = (biayaProduksi * 120) / 100;
      const untungDistributor = 15; // +15%
      const hargaPengecer = (hargaDistributor * 115) / 100;
      const untungPengecer = 25; // +25%
      const hargaKonsumen = (hargaPengecer * 125) / 100;

      prompt = `Biaya produksi sebuah pakaian di pabrik adalah ${formatRupiah(biayaProduksi)}. Pabrik menjual ke distributor dengan laba ${untungPabrik}%. Distributor menjual ke pengecer dengan laba ${untungDistributor}%. Terakhir, pengecer menjual ke konsumen akhir dengan laba ${untungPengecer}%. Berapakah harga yang harus dibayar konsumen akhir untuk pakaian tersebut?`;
      correctAnswer = formatRupiah(hargaKonsumen);

      distractors = [
        formatRupiah((biayaProduksi * (100 + untungPabrik + untungDistributor + untungPengecer)) / 100), // Jebakan tambah langsung persen (60%)
        formatRupiah(hargaKonsumen - 15000),
        formatRupiah(hargaKonsumen + 15000),
        formatRupiah(hargaPengecer),
      ];

      tip = `Kaidah 100% Berjenjang:\n1. Harga Distributor = 120% × ${formatRupiah(biayaProduksi)} = ${formatRupiah(hargaDistributor)}.\n2. Harga Pengecer = 115% × ${formatRupiah(hargaDistributor)} = ${formatRupiah(hargaPengecer)}.\n3. Harga Konsumen = 125% × ${formatRupiah(hargaPengecer)} = ${formatRupiah(hargaKonsumen)}.`;
      break;
    }

    case 13: {
      // Pola 13: Promo "Beli 4 Bayar 3" + Diskon Tambahan Member
      const hargaBaju = sample([80000, 100000, 120000, 150000]);
      const bayarAwal = 3 * hargaBaju; // Beli 4 bayar 3
      const diskonMember = sample([10, 20]);
      const totalBayar = (bayarAwal * (100 - diskonMember)) / 100;

      prompt = `Sebuah toko busana mengadakan promo khusus: "Beli 4 Kaos Bayar 3 Kaos". Harga satu kaos adalah ${formatRupiah(hargaBaju)}. Jika pembeli memiliki kartu anggota (member), ia berhak mendapatkan potongan diskon tambahan sebesar ${diskonMember}% dari total tagihan promo tersebut. Total uang yang harus dibayar pembeli untuk membawa pulang 4 kaos adalah ...`;
      correctAnswer = formatRupiah(totalBayar);

      distractors = [
        formatRupiah(4 * hargaBaju - (4 * hargaBaju * diskonMember) / 100),
        formatRupiah(bayarAwal),
        formatRupiah(totalBayar + 12000),
        formatRupiah(totalBayar - 12000),
      ];

      tip = `Langkah 1: Promo Beli 4 Bayar 3 => Bayar 3 kaos = 3 × ${formatRupiah(hargaBaju)} = ${formatRupiah(bayarAwal)}.\nLangkah 2: Diskon Member ${diskonMember}% => Bayar = (100% - ${diskonMember}%) × ${formatRupiah(bayarAwal)} = ${100 - diskonMember}% × ${formatRupiah(bayarAwal)} = ${formatRupiah(totalBayar)}.`;
      break;
    }

    default: {
      // Pola 14: Margin Laba terhadap Harga Jual (Bukan terhadap Modal)
      // Jual = 100%, Margin Laba = 20%, Modal = 80% dari Harga Jual
      const marginPct = sample([20, 25]);
      const modalChoices = marginPct === 20 ? [200000, 400000, 800000] : [150000, 300000, 450000];
      const modal = sample(modalChoices);
      const hargaJual = (modal * 100) / (100 - marginPct);

      prompt = `Seorang pengusaha membeli suatu barang dengan modal ${formatRupiah(modal)}. Pengusaha tersebut menginginkan margin keuntungan sebesar ${marginPct}% dari HARGA JUAL barang tersebut (bukan dari harga beli). Berapakah harga jual yang harus ditetapkan?`;
      correctAnswer = formatRupiah(hargaJual);

      distractors = [
        formatRupiah((modal * (100 + marginPct)) / 100), // Jebakan klasik: 120% x modal
        formatRupiah(hargaJual - 25000),
        formatRupiah(hargaJual + 25000),
        formatRupiah(modal + (modal * marginPct) / 100 + 50000),
      ];

      tip = `Kaidah 100%: Kali ini yang menjadi 100% adalah HARGA JUAL.\nHarga Jual = 100%.\nMargin Untung = ${marginPct}% dari Harga Jual.\nMaka Modal = 100% - ${marginPct}% = ${100 - marginPct}% dari Harga Jual.\n${100 - marginPct}% = ${formatRupiah(modal)} => Harga Jual (100%) = ${formatRupiah(modal)} / ${(100 - marginPct) / 100} = ${formatRupiah(hargaJual)}.`;
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

/**
 * Menghitung batas waktu dinamis per soal pada mode SURVIVAL Aritmatika Sosial (dalam detik):
 * - Level 1 (Konsep 100% / "concept"): mulai dari 45 detik, turun bertahap hingga paling cepat 5 detik.
 * - Level 2 (Hitung Nominal / "nominal"): mulai dari 60 detik (1 menit), turun bertahap hingga paling cepat 15 detik.
 * - Level 3 (Kasus Kompleks / "complex"): mulai dari 120 detik (2 menit), turun bertahap hingga paling cepat 30 detik.
 */
export function getAritmatikaSurvivalTimeLimitSec(
  kind: "concept" | "nominal" | "complex" | string = "complex",
  questionNumber: number = 1
): number {
  const qNum = Math.max(1, questionNumber);

  if (kind === "concept") {
    // Level 1: Mulai 45 detik, batas tercepat 5 detik
    const calculated = Math.round(45 - (qNum - 1) * 2);
    return Math.max(5, calculated);
  }

  if (kind === "nominal") {
    // Level 2: Mulai 60 detik (1 menit), berkurang 2 detik per nomor soal, batas tercepat 15 detik
    const calculated = Math.round(60 - (qNum - 1) * 2);
    return Math.max(15, calculated);
  }

  // Level 3 (complex): Mulai 120 detik (2 menit), berkurang 3 detik per nomor soal, batas tercepat 30 detik
  const calculated = Math.round(120 - (qNum - 1) * 3);
  return Math.max(30, calculated);
}

