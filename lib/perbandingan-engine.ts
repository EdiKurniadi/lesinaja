/**
 * Engine Game Arena Perbandingan
 * Mencakup 3 Pilar:
 * 1. Konsep Perbandingan (Rasio 2 Objek & 3 Objek dengan variasi info jumlah total, jumlah 2 objek, atau selisih 2 objek)
 * 2. Perbandingan Senilai (Direct Proportion)
 * 3. Perbandingan Berbalik Nilai (Inverse Proportion)
 * 
 * Clean Numbers Guarantee: Seluruh angka perhitungan, rasio bagian, dan hasil akhir selalu bernilai bulat rapi.
 */

import type { GameQuestion } from "./game-engine";

export type PerbandinganTopic = "konsep" | "senilai" | "berbalik" | "all";
export type PerbandinganLevel = "dasar" | "lanjutan";

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

export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(Math.round(num));
}

export function formatRupiah(amount: number): string {
  return `Rp ${new Intl.NumberFormat("id-ID").format(Math.round(amount))}`;
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

function makeFourOptions(correct: string, distractors: string[]): string[] {
  const unique = new Set<string>();
  unique.add(correct);

  for (const d of distractors) {
    if (d && d.trim() !== "" && !unique.has(d)) {
      unique.add(d);
      if (unique.size === 4) break;
    }
  }

  let counter = 1;
  while (unique.size < 4) {
    unique.add(`${correct} (${counter++})`);
  }

  return shuffle(Array.from(unique));
}

// =========================================================================
// KAMUS VARIABEL CERITA (STORY SLOTS)
// =========================================================================

const PEOPLE_DUO = [
  ["Andi", "Budi"],
  ["Riko", "Sinta"],
  ["Deni", "Fajar"],
  ["Citra", "Dewi"],
  ["Dimas", "Gilang"],
  ["Hendra", "Irfan"],
  ["Rian", "Yusuf"],
  ["Nina", "Tari"],
];

const PEOPLE_TRIO = [
  ["Andi", "Budi", "Caca"],
  ["Riko", "Sinta", "Tomi"],
  ["Ali", "Bagas", "Candra"],
  ["Dina", "Erna", "Fitri"],
  ["Rian", "Surya", "Taufik"],
  ["Gilang", "Hendra", "Indra"],
];

const OBJECT_ITEMS = [
  { item: "kelereng", unit: "butir" },
  { item: "buku tulis", unit: "buah" },
  { item: "kartu koleksi", unit: "lembar" },
  { item: "uang saku", unit: "rupiah" },
  { item: "stiker", unit: "lembar" },
  { item: "bibit tanaman", unit: "batang" },
  { item: "pensil warna", unit: "batang" },
];

const LIVESTOCK = [
  { animal: "sapi", pakan: "konsentrat pakan" },
  { animal: "kambing", pakan: "rumput segar" },
  { animal: "ayam petelur", pakan: "jagung giling" },
  { animal: "domba", pakan: "pakan silase" },
  { animal: "bebek", pakan: "dedak bekatul" },
];

// =========================================================================
// 1. GENERATOR KONSEP PERBANDINGAN (2 OBJEK & 3 OBJEK)
// =========================================================================

export function generateKonsepRasioQuestion(): GameQuestion {
  // Pilih apakah 2 Objek (50%) atau 3 Objek (50%)
  const isTrio = Math.random() < 0.5;

  if (!isTrio) {
    // --- 2 OBJEK (A : B) ---
    const duo = sample(PEOPLE_DUO);
    const p1 = duo[0];
    const p2 = duo[1];
    const obj = sample(OBJECT_ITEMS);

    // Rasio a : b sederhana (fpb 1)
    const ratioPairs = [
      [2, 3], [3, 4], [3, 5], [4, 5], [2, 5],
      [4, 7], [3, 7], [5, 6], [5, 7], [5, 8],
    ];
    const [a, b] = sample(ratioPairs);

    // Pengali integer agar nilai asli bulat rapi
    const multiplier = obj.unit === "rupiah" ? sample([15000, 20000, 25000, 30000, 50000]) : randInt(3, 12);
    const valA = a * multiplier;
    const valB = b * multiplier;
    const sumVal = valA + valB;
    const diffVal = Math.abs(valB - valA);
    const diffRatio = Math.abs(b - a);
    const sumRatio = a + b;

    // Varian informasi yang diberikan di soal:
    // 0: Diketahui Jumlah (sumVal) -> Tanya salah satu objek atau selisih
    // 1: Diketahui Selisih (diffVal) -> Tanya salah satu objek atau jumlah
    // 2: Diketahui Salah Satu Objek -> Tanya objek lain atau jumlah/selisih
    const infoType = randInt(0, 2);

    let prompt = "";
    let correctAnswer = "";
    let distractors: string[] = [];
    let tip = "";

    const formatVal = (v: number) => (obj.unit === "rupiah" ? formatRupiah(v) : `${formatNumber(v)} ${obj.unit}`);

    if (infoType === 0) {
      // Diberikan JUMLAH
      const askTarget = sample(["A", "B", "diff"] as const);

      if (askTarget === "A") {
        prompt = `Perbandingan banyak ${obj.item} milik ${p1} dan ${p2} adalah ${a} : ${b}. Jika jumlah total ${obj.item} milik mereka berdua adalah ${formatVal(sumVal)}, berapakah banyak ${obj.item} milik ${p1}?`;
        correctAnswer = formatVal(valA);
        distractors = [
          formatVal(valB),
          formatVal(valA + multiplier),
          formatVal(valA - multiplier > 0 ? valA - multiplier : valA + multiplier * 2),
          formatVal(sumVal / 2),
        ];
        tip = `Jumlah perbandingan = ${a} + ${b} = ${sumRatio} bagian.\nNilai 1 bagian = ${formatVal(sumVal)} / ${sumRatio} = ${formatVal(multiplier)}.\nBanyak ${obj.item} ${p1} = ${a} × ${formatVal(multiplier)} = ${formatVal(valA)}.`;
      } else if (askTarget === "B") {
        prompt = `Perbandingan ${obj.item} ${p1} dan ${p2} adalah ${a} : ${b}. Jika jumlah ${obj.item} mereka berdua adalah ${formatVal(sumVal)}, berapakah banyak ${obj.item} milik ${p2}?`;
        correctAnswer = formatVal(valB);
        distractors = [
          formatVal(valA),
          formatVal(valB - multiplier),
          formatVal(valB + multiplier),
          formatVal(diffVal),
        ];
        tip = `Jumlah perbandingan = ${a} + ${b} = ${sumRatio} bagian.\nNilai 1 bagian = ${formatVal(sumVal)} / ${sumRatio} = ${formatVal(multiplier)}.\nBanyak ${obj.item} ${p2} = ${b} × ${formatVal(multiplier)} = ${formatVal(valB)}.`;
      } else {
        prompt = `Perbandingan banyak ${obj.item} ${p1} dan ${p2} adalah ${a} : ${b}. Jika jumlah seluruh ${obj.item} keduanya adalah ${formatVal(sumVal)}, berapakah selisih banyak ${obj.item} mereka berdua?`;
        correctAnswer = formatVal(diffVal);
        distractors = [
          formatVal(valA),
          formatVal(valB),
          formatVal(diffVal + multiplier),
          formatVal(diffVal - multiplier > 0 ? diffVal - multiplier : diffVal + multiplier * 2),
        ];
        tip = `Selisih perbandingan = |${b} - ${a}| = ${diffRatio} bagian.\nJumlah rasio = ${sumRatio} bagian = ${formatVal(sumVal)} => 1 bagian = ${formatVal(multiplier)}.\nSelisih = ${diffRatio} × ${formatVal(multiplier)} = ${formatVal(diffVal)}.`;
      }
    } else if (infoType === 1) {
      // Diberikan SELISIH
      const askTarget = sample(["A", "B", "sum"] as const);

      if (askTarget === "sum") {
        prompt = `Perbandingan banyak ${obj.item} ${p1} dan ${p2} adalah ${a} : ${b}. Jika selisih ${obj.item} mereka berdua adalah ${formatVal(diffVal)}, berapakah jumlah total seluruh ${obj.item} keduanya?`;
        correctAnswer = formatVal(sumVal);
        distractors = [
          formatVal(sumVal - multiplier * diffRatio),
          formatVal(sumVal + multiplier * diffRatio),
          formatVal(valB),
          formatVal(valA),
        ];
        tip = `Selisih perbandingan = |${b} - ${a}| = ${diffRatio} bagian.\nNilai 1 bagian = ${formatVal(diffVal)} / ${diffRatio} = ${formatVal(multiplier)}.\nJumlah perbandingan = ${a} + ${b} = ${sumRatio} bagian.\nJumlah total = ${sumRatio} × ${formatVal(multiplier)} = ${formatVal(sumVal)}.`;
      } else {
        const who = askTarget === "A" ? p1 : p2;
        const targetRatio = askTarget === "A" ? a : b;
        const targetVal = askTarget === "A" ? valA : valB;

        prompt = `Perbandingan ${obj.item} ${p1} dan ${p2} adalah ${a} : ${b}. Jika selisih ${obj.item} mereka berdua adalah ${formatVal(diffVal)}, berapakah banyak ${obj.item} milik ${who}?`;
        correctAnswer = formatVal(targetVal);
        distractors = [
          formatVal(askTarget === "A" ? valB : valA),
          formatVal(sumVal),
          formatVal(targetVal + multiplier),
          formatVal(targetVal - multiplier > 0 ? targetVal - multiplier : targetVal + multiplier * 2),
        ];
        tip = `Selisih perbandingan = ${diffRatio} bagian = ${formatVal(diffVal)} => 1 bagian = ${formatVal(multiplier)}.\nBanyak ${obj.item} ${who} = ${targetRatio} × ${formatVal(multiplier)} = ${formatVal(targetVal)}.`;
      }
    } else {
      // Diberikan NILAI SALAH SATU OBJEK
      prompt = `Perbandingan banyak ${obj.item} ${p1} dan ${p2} adalah ${a} : ${b}. Jika ${p1} memiliki ${formatVal(valA)}, berapakah banyak ${obj.item} milik ${p2}?`;
      correctAnswer = formatVal(valB);
      distractors = [
        formatVal(sumVal),
        formatVal(diffVal),
        formatVal(valB + multiplier),
        formatVal(valB - multiplier > 0 ? valB - multiplier : valB + multiplier * 2),
      ];
      tip = `Rasio ${p1} = ${a} bagian = ${formatVal(valA)} => 1 bagian = ${formatVal(multiplier)}.\nRasio ${p2} = ${b} bagian => ${b} × ${formatVal(multiplier)} = ${formatVal(valB)}.`;
    }

    const options = makeFourOptions(correctAnswer, distractors);
    return {
      id: `prop-k2-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      kind: "concept",
      prompt,
      subtext: "Konsep Perbandingan (2 Objek)",
      options,
      correctAnswer,
      tip,
    };
  }

  // --- 3 OBJEK (A : B : C) ---
  const trio = sample(PEOPLE_TRIO);
  const [p1, p2, p3] = trio;
  const obj = sample(OBJECT_ITEMS);

  // Rasio 3 objek a : b : c
  const trioRatios = [
    [2, 3, 5],
    [3, 4, 5],
    [2, 4, 5],
    [3, 5, 7],
    [1, 2, 4],
    [2, 3, 4],
    [3, 4, 7],
  ];
  const [a, b, c] = sample(trioRatios);
  const sumRatio = a + b + c;

  const multiplier = obj.unit === "rupiah" ? sample([10000, 15000, 20000, 25000, 50000]) : randInt(3, 10);
  const valA = a * multiplier;
  const valB = b * multiplier;
  const valC = c * multiplier;
  const totalVal = valA + valB + valC;

  const formatVal = (v: number) => (obj.unit === "rupiah" ? formatRupiah(v) : `${formatNumber(v)} ${obj.unit}`);

  // Tiga ragam informasi sesuai revisi pengguna:
  // 0: Jumlah ketiganya (A + B + C)
  // 1: Jumlah dari dua di antaranya (misal A + B, atau A + C, atau B + C)
  // 2: Selisih dari dua di antaranya (misal C - A, atau B - A, atau C - B)
  const trioInfoType = randInt(0, 2);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  if (trioInfoType === 0) {
    // 1. INFO: JUMLAH KETIGANYA (A + B + C)
    const askWho = sample([p1, p2, p3]);
    let targetVal = valB;
    let targetRatio = b;
    if (askWho === p1) {
      targetVal = valA;
      targetRatio = a;
    } else if (askWho === p3) {
      targetVal = valC;
      targetRatio = c;
    }

    prompt = `Perbandingan ${obj.item} ${p1}, ${p2}, dan ${p3} adalah ${a} : ${b} : ${c}. Jika jumlah total ${obj.item} mereka bertiga adalah ${formatVal(totalVal)}, berapakah banyak ${obj.item} milik ${askWho}?`;
    correctAnswer = formatVal(targetVal);

    distractors = [
      formatVal(askWho === p1 ? valB : valA),
      formatVal(askWho === p3 ? valB : valC),
      formatVal(targetVal + multiplier),
      formatVal(targetVal - multiplier > 0 ? targetVal - multiplier : targetVal + multiplier * 2),
    ];

    tip = `Jumlah rasio = ${a} + ${b} + ${c} = ${sumRatio} bagian.\nNilai 1 bagian = ${formatVal(totalVal)} / ${sumRatio} = ${formatVal(multiplier)}.\nBanyak ${obj.item} ${askWho} (${targetRatio} bagian) = ${targetRatio} × ${formatVal(multiplier)} = ${formatVal(targetVal)}.`;
  } else if (trioInfoType === 1) {
    // 2. INFO: JUMLAH DARI DUA DI ANTARANYA (misal p1 + p2, atau p2 + p3, atau p1 + p3)
    const pairChoice = sample([
      { names: `${p1} dan ${p2}`, sumR: a + b, sumV: valA + valB },
      { names: `${p2} dan ${p3}`, sumR: b + c, sumV: valB + valC },
      { names: `${p1} dan ${p3}`, sumR: a + c, sumV: valA + valC },
    ]);

    // Tanya objek yang ketiga atau salah satunya
    const target = sample(["third", "total"] as const);

    if (target === "third") {
      // Tentukan siapa yang bukan di pairChoice
      let askWho = p3;
      let askVal = valC;
      let askRatio = c;
      if (pairChoice.names.includes(p1) && pairChoice.names.includes(p3)) {
        askWho = p2;
        askVal = valB;
        askRatio = b;
      } else if (pairChoice.names.includes(p2) && pairChoice.names.includes(p3)) {
        askWho = p1;
        askVal = valA;
        askRatio = a;
      }

      prompt = `Perbandingan ${obj.item} milik ${p1}, ${p2}, dan ${p3} berturut-turut adalah ${a} : ${b} : ${c}. Jika jumlah ${obj.item} milik ${pairChoice.names} adalah ${formatVal(pairChoice.sumV)}, berapakah banyak ${obj.item} yang dimiliki oleh ${askWho}?`;
      correctAnswer = formatVal(askVal);

      distractors = [
        formatVal(pairChoice.sumV - askVal > 0 ? pairChoice.sumV - askVal : askVal + multiplier),
        formatVal(askVal + multiplier),
        formatVal(askVal - multiplier > 0 ? askVal - multiplier : askVal + multiplier * 2),
        formatVal(totalVal),
      ];

      tip = `Rasio ${pairChoice.names} = ${pairChoice.sumR} bagian = ${formatVal(pairChoice.sumV)}.\nNilai 1 bagian = ${formatVal(pairChoice.sumV)} / ${pairChoice.sumR} = ${formatVal(multiplier)}.\nBanyak ${obj.item} ${askWho} (${askRatio} bagian) = ${askRatio} × ${formatVal(multiplier)} = ${formatVal(askVal)}.`;
    } else {
      // Tanya jumlah total ketiganya
      prompt = `Perbandingan banyak ${obj.item} ${p1}, ${p2}, dan ${p3} adalah ${a} : ${b} : ${c}. Jika jumlah ${obj.item} milik ${pairChoice.names} adalah ${formatVal(pairChoice.sumV)}, berapakah jumlah total ${obj.item} mereka bertiga?`;
      correctAnswer = formatVal(totalVal);

      distractors = [
        formatVal(totalVal - multiplier * 2),
        formatVal(totalVal + multiplier * 2),
        formatVal(pairChoice.sumV),
        formatVal(valC * 2),
      ];

      tip = `Rasio ${pairChoice.names} = ${pairChoice.sumR} bagian = ${formatVal(pairChoice.sumV)} => 1 bagian = ${formatVal(multiplier)}.\nTotal ketiga rasio = ${a} + ${b} + ${c} = ${sumRatio} bagian.\nJumlah total = ${sumRatio} × ${formatVal(multiplier)} = ${formatVal(totalVal)}.`;
    }
  } else {
    // 3. INFO: SELISIH DUA DI ANTARANYA (misal p3 - p1 atau p3 - p2 atau p2 - p1)
    const diffChoice = sample([
      { diffName: `${p3} dan ${p1}`, diffR: c - a, diffV: valC - valA },
      { diffName: `${p3} dan ${p2}`, diffR: c - b, diffV: valC - valB },
      { diffName: `${p2} dan ${p1}`, diffR: b - a, diffV: valB - valA },
    ]);

    const askWho = sample([p1, p2, p3]);
    let targetVal = valB;
    let targetRatio = b;
    if (askWho === p1) {
      targetVal = valA;
      targetRatio = a;
    } else if (askWho === p3) {
      targetVal = valC;
      targetRatio = c;
    }

    prompt = `Perbandingan ${obj.item} ${p1}, ${p2}, dan ${p3} adalah ${a} : ${b} : ${c}. Jika selisih ${obj.item} milik ${diffChoice.diffName} adalah ${formatVal(diffChoice.diffV)}, berapakah banyak ${obj.item} milik ${askWho}?`;
    correctAnswer = formatVal(targetVal);

    distractors = [
      formatVal(askWho === p1 ? valB : valA),
      formatVal(askWho === p3 ? valB : valC),
      formatVal(targetVal + multiplier),
      formatVal(totalVal),
    ];

    tip = `Selisih rasio ${diffChoice.diffName} = ${diffChoice.diffR} bagian = ${formatVal(diffChoice.diffV)}.\nNilai 1 bagian = ${formatVal(diffChoice.diffV)} / ${diffChoice.diffR} = ${formatVal(multiplier)}.\nBanyak ${obj.item} ${askWho} (${targetRatio} bagian) = ${targetRatio} × ${formatVal(multiplier)} = ${formatVal(targetVal)}.`;
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `prop-k3-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "concept",
    prompt,
    subtext: "Konsep Perbandingan (3 Objek)",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// 2. GENERATOR PERBANDINGAN SENILAI
// =========================================================================

export function generatePerbandinganSenilaiQuestion(): GameQuestion {
  const scenarioType = randInt(1, 6);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (scenarioType) {
    case 1: {
      // 1. Waktu Pembuatan vs Minuman / Makanan (Barista, Kafe & Dapur)
      // Termasuk variasi non-kelipatan seperti 4 menit -> 18 kopi, 10 menit -> ?
      const cafeData = [
        { subject: "Seorang barista kafe", verb: "meracik", t1: 4, o1: 18, t2: 10, unitT: "menit", unitO: "cangkir kopi" },
        { subject: "Seorang barista", verb: "membuat", t1: 6, o1: 21, t2: 10, unitT: "menit", unitO: "cangkir kopi susu" },
        { subject: "Karyawan kedai teh", verb: "menyajikan", t1: 6, o1: 15, t2: 14, unitT: "menit", unitO: "cangkir teh tarik" },
        { subject: "Koki restoran", verb: "memasak", t1: 8, o1: 20, t2: 18, unitT: "menit", unitO: "porsi mi goreng" },
        { subject: "Pelayan kedai roti", verb: "memanggang", t1: 4, o1: 14, t2: 6, unitT: "menit", unitO: "porsi roti bakar" },
        { subject: "Barista kedai jus", verb: "membuat", t1: 5, o1: 12, t2: 15, unitT: "menit", unitO: "gelas jus buah segar" },
        { subject: "Chef pastry", verb: "membuat", t1: 8, o1: 30, t2: 12, unitT: "menit", unitO: "potong kue waffle" },
      ];
      const c = sample(cafeData);
      const o2 = Math.round((c.t2 / c.t1) * c.o1);
      const askOutput = Math.random() < 0.75; // 75% tanya output (B2), 25% tanya waktu (A2)

      if (askOutput) {
        prompt = `${c.subject} mampu ${c.verb} ${c.o1} ${c.unitO} dalam waktu ${c.t1} ${c.unitT}. Jika ia bekerja konstan selama ${c.t2} ${c.unitT}, berapa banyak ${c.unitO} yang dapat dihasilkan?`;
        correctAnswer = `${formatNumber(o2)} ${c.unitO}`;
        distractors = [
          `${formatNumber(o2 - Math.round(c.o1 / 2))} ${c.unitO}`,
          `${formatNumber(o2 + Math.round(c.o1 / 2))} ${c.unitO}`,
          `${formatNumber(Math.round(c.o1 * (c.t2 / c.t1) * 0.8))} ${c.unitO}`,
          `${formatNumber(c.t2 * 3)} ${c.unitO}`,
        ];
        tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${c.t1} ${c.unitT}, B1 = ${c.o1} ${c.unitO}\nA2 = ${c.t2} ${c.unitT}, B2 = ?\nRumus: A1/B1 = A2/B2  =>  B2 = (A2 / A1) × B1\nB2 = (${c.t2} / ${c.t1}) × ${c.o1} = ${correctAnswer}.`;
      } else {
        prompt = `${c.subject} mampu ${c.verb} ${c.o1} ${c.unitO} dalam waktu ${c.t1} ${c.unitT}. Berapa ${c.unitT} waktu yang dibutuhkan jika ia harus ${c.verb} ${o2} ${c.unitO} dengan kecepatan yang sama?`;
        correctAnswer = `${c.t2} ${c.unitT}`;
        distractors = [
          `${c.t2 - 2} ${c.unitT}`,
          `${c.t2 + 2} ${c.unitT}`,
          `${c.t2 + 4} ${c.unitT}`,
          `${Math.round(c.t1 * 2)} ${c.unitT}`,
        ];
        tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${c.t1} ${c.unitT}, B1 = ${c.o1} ${c.unitO}\nB2 = ${o2} ${c.unitO}, A2 = ?\nRumus: A1/B1 = A2/B2  =>  A2 = (B2 / B1) × A1\nA2 = (${o2} / ${c.o1}) × ${c.t1} = ${correctAnswer}.`;
      }
      break;
    }

    case 2: {
      // 2. Pekerja / Hari vs Hasil Produksi (Kerajinan, Tekstil & Proyek)
      const crafts = [
        { role: "pembatik", verb: "menghasilkan", w1: 8, o1: 14, w2: 20, unitW: "hari kerja", unitO: "helai kain batik" },
        { role: "penjahit", verb: "menjahit", w1: 6, o1: 15, w2: 8, unitW: "orang penjahit", unitO: "potong kemeja dinas" },
        { role: "pengrajin kulit", verb: "membuat", w1: 4, o1: 18, w2: 10, unitW: "orang pengrajin", unitO: "buah tas kulit" },
        { role: "pengrajin kayu", verb: "memproduksi", w1: 6, o1: 21, w2: 8, unitW: "orang tukang kayu", unitO: "unit meja belajar" },
        { role: "karyawan suvenir", verb: "merakit", w1: 9, o1: 24, w2: 15, unitW: "orang karyawan", unitO: "kotak parsel hadiah" },
        { role: "penenun tradisional", verb: "menenun", w1: 6, o1: 21, w2: 8, unitW: "orang penenun", unitO: "sarung tenun ikat" },
        { role: "pengrajin rotan", verb: "menganyam", w1: 4, o1: 14, w2: 10, unitW: "orang pengrajin", unitO: "keranjang rotan" },
        { role: "pembatik tulis", verb: "membuat", w1: 3, o1: 5, w2: 18, unitW: "orang pembatik", unitO: "helai kain batik" },
      ];
      const item = sample(crafts);
      const o2 = Math.round((item.w2 / item.w1) * item.o1);

      prompt = `Sebanyak ${item.w1} ${item.unitW} mampu ${item.verb} ${item.o1} ${item.unitO}. Jika dialokasikan ${item.w2} ${item.unitW} dengan ritme kerja yang sama, berapa banyak ${item.unitO} yang dapat diselesaikan?`;
      correctAnswer = `${formatNumber(o2)} ${item.unitO}`;

      distractors = [
        `${formatNumber(o2 - Math.round(item.o1 / 2))} ${item.unitO}`,
        `${formatNumber(o2 + Math.round(item.o1 / 2))} ${item.unitO}`,
        `${formatNumber(o2 + 6)} ${item.unitO}`,
        `${formatNumber(item.w2 * 2)} ${item.unitO}`,
      ];

      tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${item.w1} ${item.unitW}, B1 = ${item.o1} ${item.unitO}\nA2 = ${item.w2} ${item.unitW}, B2 = ?\nRumus: A1/B1 = A2/B2  =>  B2 = (A2 / A1) × B1\nB2 = (${item.w2} / ${item.w1}) × ${item.o1} = ${correctAnswer}.`;
      break;
    }

    case 3: {
      // 3. Konsumsi Bahan Bakar (Bensin) vs Jarak Tempuh
      const fuelData = [
        { f1: 4, d1: 54, f2: 10, ask: "dist" }, // 54 * (10/4) = 135 km
        { f1: 6, d1: 75, f2: 10, ask: "fuel" }, // d2 = 125 km -> butuh 10 liter
        { f1: 8, d1: 140, f2: 12, ask: "fuel" }, // d2 = 210 km -> butuh 12 liter
        { f1: 6, d1: 84, f2: 9, ask: "dist" },  // 84 * (9/6) = 126 km
        { f1: 8, d1: 100, f2: 14, ask: "dist" }, // 100 * (14/8) = 175 km
        { f1: 5, d1: 65, f2: 8, ask: "dist" },  // 65 * (8/5) = 104 km
        { f1: 4, d1: 48, f2: 7, ask: "fuel" },  // d2 = 84 km -> butuh 7 liter
        { f1: 6, d1: 72, f2: 18, ask: "dist" }, // 72 * 3 = 216 km
      ];
      const item = sample(fuelData);
      const d2 = Math.round((item.f2 / item.f1) * item.d1);

      if (item.ask === "dist") {
        prompt = `Sebuah mobil operasional memerlukan ${item.f1} liter bensin untuk menempuh perjalanan sejauh ${item.d1} km. Berapa km jarak yang dapat ditempuh mobil tersebut jika menghabiskan ${item.f2} liter bensin dengan laju rata-rata yang sama?`;
        correctAnswer = `${d2} km`;
        distractors = [
          `${d2 - 15} km`,
          `${d2 + 15} km`,
          `${d2 + 25} km`,
          `${Math.round(item.d1 * 2)} km`,
        ];
        tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${item.f1} liter, B1 = ${item.d1} km\nA2 = ${item.f2} liter, B2 = ?\nRumus: A1/B1 = A2/B2  =>  B2 = (A2 / A1) × B1\nB2 = (${item.f2} / ${item.f1}) × ${item.d1} = ${correctAnswer}.`;
      } else {
        prompt = `Sebuah mobil dinas memerlukan ${item.f1} liter bensin untuk menempuh jarak ${item.d1} km. Berapa liter bensin yang dibutuhkan mobil tersebut untuk menempuh jarak ${d2} km dengan kondisi jalan yang sama?`;
        correctAnswer = `${item.f2} liter`;
        distractors = [
          `${item.f2 - 2} liter`,
          `${item.f2 + 2} liter`,
          `${item.f2 + 4} liter`,
          `${Math.round(item.f1 * 2)} liter`,
        ];
        tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${item.f1} liter, B1 = ${item.d1} km\nB2 = ${d2} km, A2 = ?\nRumus: A1/B1 = A2/B2  =>  A2 = (B2 / B1) × A1\nA2 = (${d2} / ${item.d1}) × ${item.f1} = ${correctAnswer}.`;
      }
      break;
    }

    case 4: {
      // 4. Mesin Otomatis vs Output Cetak / Scan / Kemas
      const machineData = [
        { task: "mencetak dokumen arsip dinas", t1: 8, o1: 60, t2: 14, unit: "lembar arsip" },
        { task: "mencetak sablon kaos seragam", t1: 6, o1: 21, t2: 10, unit: "kaos sablon" },
        { task: "mencetak lembar soal ujian", t1: 4, o1: 26, t2: 10, unit: "halaman cetak" },
        { task: "memasang label botol kemasan", t1: 9, o1: 24, t2: 15, unit: "botol kemasan" },
        { task: "mengemas paket kardus logistik", t1: 4, o1: 14, t2: 6, unit: "kardus paket" },
        { task: "memindai berkas digitalisasi", t1: 5, o1: 60, t2: 15, unit: "lembar berkas" },
      ];
      const m = sample(machineData);
      const out2 = Math.round((m.t2 / m.t1) * m.o1);

      prompt = `Sebuah mesin otomatis mampu ${m.task} sebanyak ${m.o1} ${m.unit} dalam waktu ${m.t1} menit. Jika mesin tersebut terus bekerja konstan selama ${m.t2} menit, berapa banyak ${m.unit} yang selesai diproses?`;
      correctAnswer = `${formatNumber(out2)} ${m.unit}`;

      distractors = [
        `${formatNumber(out2 - Math.round(m.o1 / 2))} ${m.unit}`,
        `${formatNumber(out2 + Math.round(m.o1 / 2))} ${m.unit}`,
        `${formatNumber(out2 + 20)} ${m.unit}`,
        `${formatNumber(m.o1 * 2)} ${m.unit}`,
      ];

      tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${m.t1} menit, B1 = ${m.o1} ${m.unit}\nA2 = ${m.t2} menit, B2 = ?\nRumus: A1/B1 = A2/B2  =>  B2 = (A2 / A1) × B1\nB2 = (${m.t2} / ${m.t1}) × ${m.o1} = ${correctAnswer}.`;
      break;
    }

    case 5: {
      // 5. Porsi Resep Masakan vs Kebutuhan Bahan Baku
      const recipeData = [
        { p1: 4, b1: 180, p2: 10, name: "porsi kue bolu kukus", bahan: "tepung terigu", unit: "gram" },
        { p1: 6, b1: 450, p2: 8, name: "porsi rendang daging sapi", bahan: "santan kelapa", unit: "gram" },
        { p1: 6, b1: 210, p2: 8, name: "gelas jus buah segar", bahan: "sirup murni", unit: "ml" },
        { p1: 4, b1: 14, p2: 6, name: "loyang martabak manis", bahan: "butir telur bebek", unit: "butir" },
        { p1: 8, b1: 140, p2: 12, name: "toples kue kering mentega", bahan: "margarin berkualitas", unit: "gram" },
        { p1: 4, b1: 250, p2: 12, name: "porsi sup jamur tiram", bahan: "jamur tiram segar", unit: "gram" },
      ];
      const r = sample(recipeData);
      const b2 = Math.round((r.p2 / r.p1) * r.b1);

      prompt = `Untuk membuat ${r.p1} ${r.name} diperlukan bahan baku ${r.bahan} sebanyak ${formatNumber(r.b1)} ${r.unit}. Jika koki ingin membuat ${r.p2} ${r.name} dengan takaran rasa yang sama persis, berapa ${r.unit} ${r.bahan} yang harus disediakan?`;
      correctAnswer = `${formatNumber(b2)} ${r.unit}`;

      distractors = [
        `${formatNumber(b2 - Math.round(r.b1 / 2))} ${r.unit}`,
        `${formatNumber(b2 + Math.round(r.b1 / 2))} ${r.unit}`,
        `${formatNumber(b2 + 80)} ${r.unit}`,
        `${formatNumber(Math.round(r.b1 * 2))} ${r.unit}`,
      ];

      tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${r.p1} porsi, B1 = ${formatNumber(r.b1)} ${r.unit}\nA2 = ${r.p2} porsi, B2 = ?\nRumus: A1/B1 = A2/B2  =>  B2 = (A2 / A1) × B1\nB2 = (${r.p2} / ${r.p1}) × ${formatNumber(r.b1)} = ${correctAnswer}.`;
      break;
    }

    default: {
      // 6. Kuantitas Barang vs Total Biaya Pembelian
      const priceData = [
        { q1: 4, c1: 18000, q2: 10, item: "buah spidol whiteboard" },
        { q1: 6, c1: 75000, q2: 10, item: "meter kain seragam dinas" },
        { q1: 8, c1: 36000, q2: 14, item: "buah pulpen gel kantor" },
        { q1: 6, c1: 90000, q2: 9, item: "buah buku agenda kerja" },
        { q1: 8, c1: 380000, q2: 12, item: "rim kertas HVS A4" },
        { q1: 6, c1: 27000, q2: 8, item: "buah buku catatan bergaris" },
        { q1: 3, c1: 45000, q2: 12, item: "buah map arsip kulit" },
      ];
      const p = sample(priceData);
      const c2 = Math.round((p.q2 / p.q1) * p.c1);

      prompt = `Harga pembelian ${p.q1} ${p.item} adalah ${formatRupiah(p.c1)}. Berapakah biaya yang harus dibayarkan jika instansi membeli ${p.q2} ${p.item} yang serupa?`;
      correctAnswer = formatRupiah(c2);

      const step = Math.round((p.c1 / p.q1) * 2);
      distractors = [
        formatRupiah(c2 - step),
        formatRupiah(c2 + step),
        formatRupiah(c2 + step * 2),
        formatRupiah(p.c1 * 2),
      ];

      tip = `Perbandingan Senilai (hasil bagi konstan: A1/B1 = A2/B2):\nA1 = ${p.q1} barang, B1 = ${formatRupiah(p.c1)}\nA2 = ${p.q2} barang, B2 = ?\nRumus: A1/B1 = A2/B2  =>  B2 = (A2 / A1) × B1\nB2 = (${p.q2} / ${p.q1}) × ${formatRupiah(p.c1)} = ${correctAnswer}.`;
      break;
    }
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `prop-sen-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "senilai",
    prompt,
    subtext: "Perbandingan Senilai",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// 3. GENERATOR PERBANDINGAN BERBALIK NILAI (INVERSE PROPORTION)
// =========================================================================

export function generatePerbandinganBerbalikQuestion(): GameQuestion {
  const scenarioType = randInt(1, 4);

  let prompt = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let tip = "";

  switch (scenarioType) {
    case 1: {
      // 1. Pakan Ternak vs Jumlah Hewan (seperti Soal 11 di PDF)
      const stock = sample(LIVESTOCK);
      // a1 * h1 = a2 * h2
      // Misal: 45 sapi 24 hari = 1080 ekor-hari. Beli 15 lagi -> a2 = 60, h2 = 1080 / 60 = 18 hari.
      const combinations = [
        { a1: 45, add: 15, h1: 24 }, // a2 = 60 -> h2 = 18
        { a1: 30, add: 10, h1: 20 }, // a2 = 40 -> h2 = 15
        { a1: 24, add: 12, h1: 30 }, // a2 = 36 -> h2 = 20
        { a1: 50, add: 25, h1: 18 }, // a2 = 75 -> h2 = 12
        { a1: 40, add: 10, h1: 25 }, // a2 = 50 -> h2 = 20
        { a1: 36, add: 18, h1: 24 }, // a2 = 54 -> h2 = 16
      ];
      const c = sample(combinations);
      const a2 = c.a1 + c.add;
      const h2 = (c.a1 * c.h1) / a2;

      prompt = `Seorang peternak memiliki persediaan ${stock.pakan} yang cukup untuk ${c.a1} ekor ${stock.animal} selama ${c.h1} hari. Jika peternak tersebut membeli lagi ${c.add} ekor ${stock.animal}, dalam berapa hari persediaan pakan tersebut akan habis?`;
      correctAnswer = `${h2} hari`;

      distractors = [
        `${h2 - 2} hari`,
        `${h2 + 2} hari`,
        `${h2 + 4} hari`,
        `${c.h1} hari`,
      ];

      tip = `Perbandingan Berbalik Nilai: Semakin banyak hewan, pakan habis LEBIH CEPAT.\nRumus: Hewan₁ × Hari₁ = Hewan₂ × Hari₂\nTotal porsi = ${c.a1} × ${c.h1} = ${c.a1 * c.h1} porsi.\nTotal hewan sekarang = ${c.a1} + ${c.add} = ${a2} ekor.\nHari = ${c.a1 * c.h1} / ${a2} = ${h2} hari.`;
      break;
    }

    case 2: {
      // 2. Kecepatan vs Waktu Tempuh
      const speedCombos = [
        { v1: 60, t1: 4, v2: 80 }, // v1*t1 = 240 -> t2 = 3 jam
        { v1: 50, t1: 6, v2: 75 }, // v1*t1 = 300 -> t2 = 4 jam
        { v1: 40, t1: 6, v2: 60 }, // v1*t1 = 240 -> t2 = 4 jam
        { v1: 70, t1: 4, v2: 80 }, // v1*t1 = 280 -> t2 = 3.5 jam
        { v1: 80, t1: 3, v2: 60 }, // v1*t1 = 240 -> t2 = 4 jam
      ];
      const s = sample(speedCombos.filter((x) => Number.isInteger((x.v1 * x.t1) / x.v2)));
      const t2 = (s.v1 * s.t1) / s.v2;

      prompt = `Sebuah kendaraan melaju dengan kecepatan rata-rata ${s.v1} km/jam dan membutuhkan waktu ${s.t1} jam untuk sampai di kota tujuan. Jika pengemudi menaikkan kecepatannya menjadi ${s.v2} km/jam pada rute yang sama, berapa jam waktu tempuh yang dibutuhkan?`;
      correctAnswer = `${t2} jam`;

      distractors = [
        `${t2 + 1} jam`,
        `${t2 - 1 > 0 ? t2 - 1 : t2 + 2} jam`,
        `${t2 + 2} jam`,
        `${s.t1} jam`,
      ];

      tip = `Perbandingan Berbalik Nilai: Kecepatan makin tinggi, waktu tempuh makin singkat.\nJarak konstan = ${s.v1} km/jam × ${s.t1} jam = ${s.v1 * s.t1} km.\nWaktu baru = ${s.v1 * s.t1} / ${s.v2} = ${t2} jam.`;
      break;
    }

    case 3: {
      // 3. Pekerja vs Waktu Selesai (Dipercepat, tanya tambahan pekerja) (seperti Soal 12 di PDF)
      const projectCombos = [
        { w1: 24, d1: 45, fast: 9 }, // d2 = 36 -> w2 = (24*45)/36 = 30 -> add = 6
        { w1: 20, d1: 30, fast: 5 }, // d2 = 25 -> w2 = (20*30)/25 = 24 -> add = 4
        { w1: 16, d1: 40, fast: 8 }, // d2 = 32 -> w2 = (16*40)/32 = 20 -> add = 4
        { w1: 15, d1: 28, fast: 7 }, // d2 = 21 -> w2 = (15*28)/21 = 20 -> add = 5
      ];
      const p = sample(projectCombos);
      const d2 = p.d1 - p.fast;
      const w2 = (p.w1 * p.d1) / d2;
      const addWorker = w2 - p.w1;

      prompt = `Sebuah pekerjaan pembangunan gedung semula dijadwalkan selesai dalam waktu ${p.d1} hari oleh ${p.w1} orang pekerja. Karena instruksi pimpinan, proyek tersebut harus diselesaikan ${p.fast} hari lebih cepat dari jadwal semula. Berapa jumlah pekerja tambahan yang harus direkrut?`;
      correctAnswer = `${addWorker} orang`;

      distractors = [
        `${w2} orang`, // Jebakan total pekerja
        `${addWorker + 2} orang`,
        `${addWorker - 2 > 0 ? addWorker - 2 : addWorker + 3} orang`,
        `${p.fast} orang`,
      ];

      tip = `Perbandingan Berbalik Nilai:\nTarget hari baru = ${p.d1} - ${p.fast} = ${d2} hari.\nTotal beban kerja = ${p.w1} pekerja × ${p.d1} hari = ${p.w1 * p.d1} orang-hari.\nTotal pekerja dibutuhkan = ${p.w1 * p.d1} / ${d2} = ${w2} orang.\nPekerja tambahan = ${w2} - ${p.w1} = ${addWorker} orang.`;
      break;
    }

    default: {
      // 4. Jumlah Keran Air vs Waktu Pengisian Kolam / Bak
      const tapCombos = [
        { t1: 3, m1: 40, t2: 5 }, // 3*40 = 120 -> 120/5 = 24 menit
        { t1: 2, m1: 60, t2: 4 }, // 2*60 = 120 -> 120/4 = 30 menit
        { t1: 4, m1: 45, t2: 6 }, // 4*45 = 180 -> 180/6 = 30 menit
        { t1: 3, m1: 50, t2: 5 }, // 3*50 = 150 -> 150/5 = 30 menit
      ];
      const tap = sample(tapCombos);
      const m2 = (tap.t1 * tap.m1) / tap.t2;

      prompt = `Sebanyak ${tap.t1} buah keran air dengan debit yang sama mampu mengisi penuh sebuah bak penampungan air dalam waktu ${tap.m1} menit. Jika bak tersebut diisi menggunakan ${tap.t2} buah keran air sekaligus, berapa menit waktu yang diperlukan hingga bak penuh?`;
      correctAnswer = `${m2} menit`;

      distractors = [
        `${m2 - 5} menit`,
        `${m2 + 5} menit`,
        `${m2 + 10} menit`,
        `${tap.m1} menit`,
      ];

      tip = `Perbandingan Berbalik Nilai: Semakin banyak keran yang dibuka, waktu pengisian semakin cepat.\nBeban kerja = ${tap.t1} keran × ${tap.m1} menit = ${tap.t1 * tap.m1} menit-keran.\nWaktu (${tap.t2} keran) = ${tap.t1 * tap.m1} / ${tap.t2} = ${m2} menit.`;
      break;
    }
  }

  const options = makeFourOptions(correctAnswer, distractors);
  return {
    id: `prop-ber-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "berbalik",
    prompt,
    subtext: "Perbandingan Berbalik Nilai",
    options,
    correctAnswer,
    tip,
  };
}

// =========================================================================
// GENERATOR UTAMA
// =========================================================================

export function generatePerbandinganQuestion(
  topic: PerbandinganTopic = "all",
  _level: PerbandinganLevel = "dasar"
): GameQuestion {
  void _level;
  let targetTopic = topic;
  if (topic === "all") {
    targetTopic = sample(["konsep", "senilai", "berbalik"]) as PerbandinganTopic;
  }

  if (targetTopic === "konsep") return generateKonsepRasioQuestion();
  if (targetTopic === "senilai") return generatePerbandinganSenilaiQuestion();
  return generatePerbandinganBerbalikQuestion();
}

export function generatePerbandinganSet(
  topic: PerbandinganTopic,
  count: number,
  level: PerbandinganLevel = "dasar"
): GameQuestion[] {
  const list: GameQuestion[] = [];
  for (let i = 0; i < count; i++) {
    list.push(generatePerbandinganQuestion(topic, level));
  }
  return list;
}

/**
 * Menghitung batas waktu dinamis per soal pada mode SURVIVAL Arena Perbandingan (dalam detik):
 * - Mulai 45 detik di soal awal
 * - Berkurang perlahan 1.5 detik per nomor soal
 * - Paling cepat mentok di 10 detik
 */
export function getPerbandinganSurvivalTimeLimitSec(questionNumber: number = 1): number {
  const qNum = Math.max(1, questionNumber);
  const calculated = Math.round(45 - (qNum - 1) * 1.5);
  return Math.max(10, calculated);
}
