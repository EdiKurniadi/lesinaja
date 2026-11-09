/**
 * Bank Angka Pecahan Istimewa & Generator Soal Game Fondasi Hitung Cepat
 * Dirancang khusus untuk melatih refleks mental math SKD CPNS / Kedinasan.
 * Kriteria:
 * - Melibatkan angka-angka istimewa (benchmark fractions).
 * - Desimal maksimal 3 angka di belakang koma (misal: 0,125; 0,375; 0,333; 0,667).
 * - Pecahan pembilang > 1 (seperti 3/4, 2/5, 3/5, 4/5, 3/8, 5/8, 7/8, 2/3, 5/6)
 *   diberikan frekuensi kemunculan yang seimbang dan tinggi.
 * - Operasi hitung melibatkan variasi:
 *   1. Pecahan [op] Pecahan
 *   2. Pecahan [op] Desimal
 *   3. Persen [op] Pecahan / Desimal
 *   4. Desimal [op] Desimal
 *   5. Pecahan/Persen x Bilangan Bulat (porsi terkendali)
 */

export interface BenchmarkFraction {
  id: string;
  num: number;
  den: number;
  fractionStr: string;
  decimal: number;
  decimalStr: string;
  percent: number;
  percentStr: string;
  level: 1 | 2 | 3; // 1: Mudah (penyebut 2,4,5,10), 2: Menengah (8,20,25,50), 3: Aproksimasi (3,6,9,12)
  tip: string;
}

export const BENCHMARK_FRACTIONS: BenchmarkFraction[] = [
  // --- LEVEL 1: Sangat Umum & Mudah (Penyebut 2, 4, 5, 10) ---
  {
    id: "1/2",
    num: 1,
    den: 2,
    fractionStr: "1/2",
    decimal: 0.5,
    decimalStr: "0,5",
    percent: 50,
    percentStr: "50%",
    level: 1,
    tip: "1/2 bernilai 0,5 atau 50%.",
  },
  {
    id: "1/4",
    num: 1,
    den: 4,
    fractionStr: "1/4",
    decimal: 0.25,
    decimalStr: "0,25",
    percent: 25,
    percentStr: "25%",
    level: 1,
    tip: "1/4 bernilai 0,25 atau 25%.",
  },
  {
    id: "3/4",
    num: 3,
    den: 4,
    fractionStr: "3/4",
    decimal: 0.75,
    decimalStr: "0,75",
    percent: 75,
    percentStr: "75%",
    level: 1,
    tip: "3/4 adalah 3 × 0,25 = 0,75 atau 75%.",
  },
  {
    id: "1/5",
    num: 1,
    den: 5,
    fractionStr: "1/5",
    decimal: 0.2,
    decimalStr: "0,2",
    percent: 20,
    percentStr: "20%",
    level: 1,
    tip: "1/5 = 2/10 = 0,2 atau 20%.",
  },
  {
    id: "2/5",
    num: 2,
    den: 5,
    fractionStr: "2/5",
    decimal: 0.4,
    decimalStr: "0,4",
    percent: 40,
    percentStr: "40%",
    level: 1,
    tip: "2/5 adalah 2 × 0,2 = 0,4 atau 40%.",
  },
  {
    id: "3/5",
    num: 3,
    den: 5,
    fractionStr: "3/5",
    decimal: 0.6,
    decimalStr: "0,6",
    percent: 60,
    percentStr: "60%",
    level: 1,
    tip: "3/5 adalah 3 × 0,2 = 0,6 atau 60%.",
  },
  {
    id: "4/5",
    num: 4,
    den: 5,
    fractionStr: "4/5",
    decimal: 0.8,
    decimalStr: "0,8",
    percent: 80,
    percentStr: "80%",
    level: 1,
    tip: "4/5 adalah 4 × 0,2 = 0,8 atau 80%.",
  },
  {
    id: "1/10",
    num: 1,
    den: 10,
    fractionStr: "1/10",
    decimal: 0.1,
    decimalStr: "0,1",
    percent: 10,
    percentStr: "10%",
    level: 1,
    tip: "1/10 = 0,1 atau 10%.",
  },
  {
    id: "3/10",
    num: 3,
    den: 10,
    fractionStr: "3/10",
    decimal: 0.3,
    decimalStr: "0,3",
    percent: 30,
    percentStr: "30%",
    level: 1,
    tip: "3/10 = 0,3 atau 30%.",
  },
  {
    id: "7/10",
    num: 7,
    den: 10,
    fractionStr: "7/10",
    decimal: 0.7,
    decimalStr: "0,7",
    percent: 70,
    percentStr: "70%",
    level: 1,
    tip: "7/10 = 0,7 atau 70%.",
  },
  {
    id: "9/10",
    num: 9,
    den: 10,
    fractionStr: "9/10",
    decimal: 0.9,
    decimalStr: "0,9",
    percent: 90,
    percentStr: "90%",
    level: 1,
    tip: "9/10 = 0,9 atau 90%.",
  },

  // --- LEVEL 2: Pecahan Per-8 dan Kelipatan 100 (Maks 3 Desimal) ---
  {
    id: "1/8",
    num: 1,
    den: 8,
    fractionStr: "1/8",
    decimal: 0.125,
    decimalStr: "0,125",
    percent: 12.5,
    percentStr: "12,5%",
    level: 2,
    tip: "1/8 adalah setengah dari 1/4 = 0,125 atau 12,5%.",
  },
  {
    id: "3/8",
    num: 3,
    den: 8,
    fractionStr: "3/8",
    decimal: 0.375,
    decimalStr: "0,375",
    percent: 37.5,
    percentStr: "37,5%",
    level: 2,
    tip: "3/8 = 3 × 0,125 = 0,375 atau 37,5%.",
  },
  {
    id: "5/8",
    num: 5,
    den: 8,
    fractionStr: "5/8",
    decimal: 0.625,
    decimalStr: "0,625",
    percent: 62.5,
    percentStr: "62,5%",
    level: 2,
    tip: "5/8 = 0,5 + 0,125 = 0,625 atau 62,5%.",
  },
  {
    id: "7/8",
    num: 7,
    den: 8,
    fractionStr: "7/8",
    decimal: 0.875,
    decimalStr: "0,875",
    percent: 87.5,
    percentStr: "87,5%",
    level: 2,
    tip: "7/8 = 1 - 0,125 = 0,875 atau 87,5%.",
  },
  {
    id: "1/20",
    num: 1,
    den: 20,
    fractionStr: "1/20",
    decimal: 0.05,
    decimalStr: "0,05",
    percent: 5,
    percentStr: "5%",
    level: 2,
    tip: "1/20 = 5/100 = 0,05 atau 5%.",
  },
  {
    id: "3/20",
    num: 3,
    den: 20,
    fractionStr: "3/20",
    decimal: 0.15,
    decimalStr: "0,15",
    percent: 15,
    percentStr: "15%",
    level: 2,
    tip: "3/20 = 15/100 = 0,15 atau 15%.",
  },
  {
    id: "7/20",
    num: 7,
    den: 20,
    fractionStr: "7/20",
    decimal: 0.35,
    decimalStr: "0,35",
    percent: 35,
    percentStr: "35%",
    level: 2,
    tip: "7/20 = 35/100 = 0,35 atau 35%.",
  },
  {
    id: "9/20",
    num: 9,
    den: 20,
    fractionStr: "9/20",
    decimal: 0.45,
    decimalStr: "0,45",
    percent: 45,
    percentStr: "45%",
    level: 2,
    tip: "9/20 = 45/100 = 0,45 atau 45%.",
  },
  {
    id: "1/25",
    num: 1,
    den: 25,
    fractionStr: "1/25",
    decimal: 0.04,
    decimalStr: "0,04",
    percent: 4,
    percentStr: "4%",
    level: 2,
    tip: "1/25 = 4/100 = 0,04 atau 4%.",
  },
  {
    id: "2/25",
    num: 2,
    den: 25,
    fractionStr: "2/25",
    decimal: 0.08,
    decimalStr: "0,08",
    percent: 8,
    percentStr: "8%",
    level: 2,
    tip: "2/25 = 8/100 = 0,08 atau 8%.",
  },
  {
    id: "3/25",
    num: 3,
    den: 25,
    fractionStr: "3/25",
    decimal: 0.12,
    decimalStr: "0,12",
    percent: 12,
    percentStr: "12%",
    level: 2,
    tip: "3/25 = 12/100 = 0,12 atau 12%.",
  },
  {
    id: "4/25",
    num: 4,
    den: 25,
    fractionStr: "4/25",
    decimal: 0.16,
    decimalStr: "0,16",
    percent: 16,
    percentStr: "16%",
    level: 2,
    tip: "4/25 = 16/100 = 0,16 atau 16%.",
  },
  {
    id: "1/50",
    num: 1,
    den: 50,
    fractionStr: "1/50",
    decimal: 0.02,
    decimalStr: "0,02",
    percent: 2,
    percentStr: "2%",
    level: 2,
    tip: "1/50 = 2/100 = 0,02 atau 2%.",
  },

  // --- LEVEL 3: Pecahan Berulang / Aproksimasi TIU (3 Desimal) ---
  {
    id: "1/3",
    num: 1,
    den: 3,
    fractionStr: "1/3",
    decimal: 0.333,
    decimalStr: "0,333",
    percent: 33.33,
    percentStr: "33,33%",
    level: 3,
    tip: "1/3 bernilai ~0,333 atau 33,33%.",
  },
  {
    id: "2/3",
    num: 2,
    den: 3,
    fractionStr: "2/3",
    decimal: 0.667,
    decimalStr: "0,667",
    percent: 66.67,
    percentStr: "66,67%",
    level: 3,
    tip: "2/3 = 2 × 0,333... dibulatkan 0,667 atau 66,67%.",
  },
  {
    id: "1/6",
    num: 1,
    den: 6,
    fractionStr: "1/6",
    decimal: 0.167,
    decimalStr: "0,167",
    percent: 16.67,
    percentStr: "16,67%",
    level: 3,
    tip: "1/6 adalah setengah dari 1/3 = 0,167 atau 16,67%.",
  },
  {
    id: "5/6",
    num: 5,
    den: 6,
    fractionStr: "5/6",
    decimal: 0.833,
    decimalStr: "0,833",
    percent: 83.33,
    percentStr: "83,33%",
    level: 3,
    tip: "5/6 = 1 - 1/6 = 0,833 atau 83,33%.",
  },
  {
    id: "1/9",
    num: 1,
    den: 9,
    fractionStr: "1/9",
    decimal: 0.111,
    decimalStr: "0,111",
    percent: 11.11,
    percentStr: "11,11%",
    level: 3,
    tip: "1/9 = 0,111 atau 11,11%.",
  },
  {
    id: "2/9",
    num: 2,
    den: 9,
    fractionStr: "2/9",
    decimal: 0.222,
    decimalStr: "0,222",
    percent: 22.22,
    percentStr: "22,22%",
    level: 3,
    tip: "2/9 = 0,222 atau 22,22%.",
  },
  {
    id: "1/12",
    num: 1,
    den: 12,
    fractionStr: "1/12",
    decimal: 0.083,
    decimalStr: "0,083",
    percent: 8.33,
    percentStr: "8,33%",
    level: 3,
    tip: "1/12 = 0,083 atau 8,33%.",
  },
];

export type GameCategory = "mixed" | "conversion" | "operation";
export type GameModeType = "fixed" | "survival";

export interface GameQuestion {
  id: string;
  kind: "conversion" | "operation";
  prompt: string;
  subtext?: string;
  options: string[];
  correctAnswer: string;
  tip: string;
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function sample<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Mengambil pecahan dengan bobot seimbang antara pembilang 1 dan pembilang > 1
 * (agar 3/4, 2/5, 3/5, 4/5, 3/8, 5/8, 7/8, 2/3, 5/6 sering muncul)
 */
function sampleBalancedFraction(): BenchmarkFraction {
  const nonUnit = BENCHMARK_FRACTIONS.filter((b) => b.num > 1);
  const unit = BENCHMARK_FRACTIONS.filter((b) => b.num === 1);
  // 60% peluang mengambil pecahan dengan pembilang > 1 (seperti 3/4, 2/5, 3/8, dll.)
  if (Math.random() < 0.6 && nonUnit.length > 0) {
    return sample(nonUnit);
  }
  return sample(unit);
}

/**
 * Utilitas untuk memastikan selalu ada tepat 4 opsi unik
 */
function makeFourOptions(correct: string, candidatePool: string[], fallbackGenerator?: (offset: number) => string): string[] {
  const set = new Set<string>([correct]);
  for (const cand of candidatePool) {
    if (cand && cand.trim() !== "" && cand !== correct) {
      set.add(cand);
      if (set.size === 4) break;
    }
  }

  let offset = 1;
  while (set.size < 4 && offset < 30) {
    if (fallbackGenerator) {
      const gen = fallbackGenerator(offset);
      if (gen && gen !== correct) set.add(gen);
    } else {
      if (correct.endsWith("%")) {
        const num = parseFloat(correct.replace(",", ".")) || 10;
        set.add(`${String(Math.round((num + (offset % 2 === 0 ? offset * 5 : -offset * 5)) * 100) / 100).replace(".", ",")}%`);
      } else if (correct.includes(",")) {
        const num = parseFloat(correct.replace(",", ".")) || 0.5;
        const nextVal = Math.round((num + (offset % 2 === 0 ? offset * 0.1 : -offset * 0.05)) * 1000) / 1000;
        if (nextVal > 0) set.add(String(nextVal).replace(".", ","));
      } else if (correct.includes("/")) {
        const parts = correct.split("/");
        const n = parseInt(parts[0], 10);
        const d = parseInt(parts[1], 10);
        const newN = Math.max(1, n + (offset % 2 === 0 ? offset : -offset));
        set.add(`${newN}/${d}`);
      } else {
        const num = parseInt(correct, 10) || 10;
        set.add(String(num + (offset % 2 === 0 ? offset : -offset)));
      }
    }
    offset++;
  }

  return shuffle(Array.from(set).slice(0, 4));
}

/**
 * Menghasilkan soal tipe KONVERSI (Pecahan <-> Desimal <-> Persen)
 */
export function generateConversionQuestion(): GameQuestion {
  const item = sampleBalancedFraction();
  const conversionTypes: Array<{
    type: string;
    prompt: string;
    correct: string;
    distractors: () => string[];
  }> = [
    // 1. Pecahan -> Desimal
    {
      type: "frac_to_dec",
      prompt: `Bentuk desimal dari ${item.fractionStr} adalah ...`,
      correct: item.decimalStr,
      distractors: () => {
        const pool = BENCHMARK_FRACTIONS.filter((b) => b.id !== item.id).map((b) => b.decimalStr);
        const fake1 = (item.decimal * 10).toFixed(item.decimal >= 0.1 ? 2 : 1).replace(".", ",");
        const fake2 = (item.num / (item.den + 1)).toFixed(3).replace(".", ",");
        return shuffle([fake1, fake2, ...pool]);
      },
    },
    // 2. Pecahan -> Persen
    {
      type: "frac_to_pct",
      prompt: `Bentuk persen dari ${item.fractionStr} adalah ...`,
      correct: item.percentStr,
      distractors: () => {
        const pool = BENCHMARK_FRACTIONS.filter((b) => b.id !== item.id).map((b) => b.percentStr);
        const fake1 = `${(item.percent / 10).toFixed(1).replace(".", ",")}%`;
        const fake2 = `${(item.percent * 2).toFixed(1).replace(".", ",")}%`;
        return shuffle([fake1, fake2, ...pool]);
      },
    },
    // 3. Desimal -> Pecahan
    {
      type: "dec_to_frac",
      prompt: `Bentuk pecahan paling sederhana dari ${item.decimalStr} adalah ...`,
      correct: item.fractionStr,
      distractors: () => {
        const pool = BENCHMARK_FRACTIONS.filter((b) => b.id !== item.id).map((b) => b.fractionStr);
        const fake1 = `${item.num}/${item.den * 2}`;
        const fake2 = `${item.num + 1}/${item.den}`;
        return shuffle([fake1, fake2, ...pool]);
      },
    },
    // 4. Desimal -> Persen
    {
      type: "dec_to_pct",
      prompt: `Bentuk persen dari ${item.decimalStr} adalah ...`,
      correct: item.percentStr,
      distractors: () => {
        const pool = BENCHMARK_FRACTIONS.filter((b) => b.id !== item.id).map((b) => b.percentStr);
        const fake1 = `${(item.percent / 10).toFixed(1).replace(".", ",")}%`;
        const fake2 = `${(item.decimal * 10).toFixed(1).replace(".", ",")}%`;
        return shuffle([fake1, fake2, ...pool]);
      },
    },
    // 5. Persen -> Pecahan
    {
      type: "pct_to_frac",
      prompt: `Bentuk pecahan paling sederhana dari ${item.percentStr} adalah ...`,
      correct: item.fractionStr,
      distractors: () => {
        const pool = BENCHMARK_FRACTIONS.filter((b) => b.id !== item.id).map((b) => b.fractionStr);
        const fake1 = `${item.num}/${item.den + 2}`;
        return shuffle([fake1, ...pool]);
      },
    },
    // 6. Persen -> Desimal
    {
      type: "pct_to_dec",
      prompt: `Bentuk desimal dari ${item.percentStr} adalah ...`,
      correct: item.decimalStr,
      distractors: () => {
        const pool = BENCHMARK_FRACTIONS.filter((b) => b.id !== item.id).map((b) => b.decimalStr);
        return shuffle(pool);
      },
    },
  ];

  const chosen = sample(conversionTypes);
  const options = makeFourOptions(chosen.correct, chosen.distractors());

  return {
    id: `conv-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "conversion",
    prompt: chosen.prompt,
    options,
    correctAnswer: chosen.correct,
    tip: item.tip,
  };
}

/**
 * Menghasilkan soal tipe OPERASI HITUNG CEPAT
 * Melibatkan pecahan vs pecahan, pecahan vs desimal, persen vs desimal/pecahan,
 * serta porsi seimbang perkalian pecahan/persen x kelipatan bulat.
 */
export function generateOperationQuestion(): GameQuestion {
  // Pilihan tipe operasi
  const opCategory = sample([
    "frac_op_frac", // Pecahan [op] Pecahan (+, -, x, :) -> bobot tinggi
    "frac_op_frac",
    "frac_op_dec", // Pecahan [op] Desimal (+, -, x, :) -> bobot tinggi
    "frac_op_dec",
    "pct_op_mix", // Persen [op] Pecahan atau Desimal -> bobot sedang
    "dec_op_dec", // Desimal [op] Desimal (+, -, x, :) -> bobot sedang
    "mult_int", // Pecahan/Persen x Bulat (porsi terkendali ~15%)
  ]);

  // 1. PECAHAN [OP] PECAHAN
  if (opCategory === "frac_op_frac") {
    const bank: Array<{ p: string; correct: string; distractors: string[]; tip: string }> = [
      // Penjumlahan / Pengurangan Pecahan
      {
        p: "3/4 - 1/2",
        correct: "1/4",
        distractors: ["1/2", "3/8", "2/4", "1/8"],
        tip: "Samakan penyebut: 1/2 = 2/4. Maka 3/4 - 2/4 = 1/4 (atau 0,25).",
      },
      {
        p: "1/2 + 2/5",
        correct: "9/10",
        distractors: ["3/7", "7/10", "4/5", "1"],
        tip: "Samakan ke per-10: 1/2 = 5/10 dan 2/5 = 4/10. 5/10 + 4/10 = 9/10 (atau 0,9).",
      },
      {
        p: "1/4 + 3/8",
        correct: "5/8",
        distractors: ["4/12", "1/2", "3/4", "7/8"],
        tip: "1/4 = 2/8. Maka 2/8 + 3/8 = 5/8 (atau 0,625).",
      },
      {
        p: "5/8 - 1/4",
        correct: "3/8",
        distractors: ["4/4", "1/2", "1/8", "1/4"],
        tip: "1/4 = 2/8. Maka 5/8 - 2/8 = 3/8 (atau 0,375).",
      },
      {
        p: "7/8 - 3/4",
        correct: "1/8",
        distractors: ["4/4", "1/4", "3/8", "1/2"],
        tip: "3/4 = 6/8. Maka 7/8 - 6/8 = 1/8 (atau 0,125).",
      },
      {
        p: "5/6 - 1/3",
        correct: "1/2",
        distractors: ["4/3", "2/3", "1/6", "3/4"],
        tip: "1/3 = 2/6. Maka 5/6 - 2/6 = 3/6 = 1/2 (atau 0,5).",
      },
      {
        p: "1/3 + 1/6",
        correct: "1/2",
        distractors: ["2/9", "2/6", "3/6", "2/3"],
        tip: "1/3 = 2/6. Maka 2/6 + 1/6 = 3/6 = 1/2 (atau 0,5).",
      },
      {
        p: "1/2 - 1/5",
        correct: "3/10",
        distractors: ["0", "2/10", "4/10", "1/3"],
        tip: "1/2 = 5/10 dan 1/5 = 2/10. 5/10 - 2/10 = 3/10 (atau 0,3).",
      },
      {
        p: "3/5 - 1/2",
        correct: "1/10",
        distractors: ["2/3", "2/10", "1/5", "1/25"],
        tip: "3/5 = 6/10 dan 1/2 = 5/10. 6/10 - 5/10 = 1/10 (atau 0,1).",
      },
      {
        p: "3/4 + 1/4",
        correct: "1",
        distractors: ["4/8", "3/16", "2", "0,5"],
        tip: "3/4 + 1/4 = 4/4 = 1.",
      },
      // Perkalian / Pembagian Pecahan (Trik Coret)
      {
        p: "2/3 × 3/4",
        correct: "1/2",
        distractors: ["6/12", "5/7", "2/4", "1/4"],
        tip: "Trik coret angka 3: (2/3) × (3/4) = 2/4 = 1/2.",
      },
      {
        p: "3/5 × 5/6",
        correct: "1/2",
        distractors: ["15/30", "3/6", "1/3", "2/5"],
        tip: "Trik coret angka 5: menyisakan 3/6 = 1/2.",
      },
      {
        p: "4/5 × 5/8",
        correct: "1/2",
        distractors: ["20/40", "4/8", "1/4", "3/8"],
        tip: "Trik coret angka 5: menyisakan 4/8 = 1/2.",
      },
      {
        p: "3/8 × 2/3",
        correct: "1/4",
        distractors: ["6/24", "1/8", "1/2", "3/4"],
        tip: "Trik coret angka 3: menyisakan 2/8 = 1/4 (atau 0,25).",
      },
      {
        p: "1/2 × 4/5",
        correct: "2/5",
        distractors: ["4/10", "1/5", "3/5", "1/2"],
        tip: "4 dibagi 2 = 2. Menyisakan 2/5 (atau 0,4).",
      },
      {
        p: "3/4 × 2/3",
        correct: "1/2",
        distractors: ["6/12", "1/4", "3/6", "5/7"],
        tip: "Coret angka 3: tersisa 2/4 = 1/2 (atau 0,5).",
      },
      {
        p: "3/4 ÷ 1/4",
        correct: "3",
        distractors: ["3/16", "1", "4", "0,75"],
        tip: "3/4 dibagi 1/4 = 3/4 × 4/1 = 3.",
      },
      {
        p: "3/4 ÷ 3/8",
        correct: "2",
        distractors: ["9/32", "1", "4", "1/2"],
        tip: "3/4 × 8/3 = 8/4 = 2.",
      },
      {
        p: "1/2 ÷ 1/4",
        correct: "2",
        distractors: ["1/8", "1", "4", "0,5"],
        tip: "Setengah dibagi seperempat adalah 2 (1/2 × 4/1 = 2).",
      },
      {
        p: "4/5 ÷ 2/5",
        correct: "2",
        distractors: ["8/25", "1", "4", "1/2"],
        tip: "Penyebut sama-sama 5, langsung bagi pembilang: 4 ÷ 2 = 2.",
      },
      {
        p: "7/8 ÷ 1/8",
        correct: "7",
        distractors: ["7/64", "8", "6", "1"],
        tip: "7/8 dibagi 1/8 = 7/8 × 8/1 = 7.",
      },
    ];

    const item = sample(bank);
    const options = makeFourOptions(item.correct, item.distractors);
    return {
      id: `op-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      kind: "operation",
      prompt: `${item.p} = ...`,
      options,
      correctAnswer: item.correct,
      tip: item.tip,
    };
  }

  // 2. PECAHAN [OP] DESIMAL
  if (opCategory === "frac_op_dec") {
    const bank: Array<{ p: string; correct: string; distractors: string[]; tip: string }> = [
      {
        p: "3/4 + 0,25",
        correct: "1",
        distractors: ["0,5", "0,75", "1,25", "0,9"],
        tip: "3/4 = 0,75. Maka 0,75 + 0,25 = 1.",
      },
      {
        p: "0,75 - 1/2",
        correct: "0,25",
        distractors: ["0,5", "0,15", "0,2", "0,35"],
        tip: "1/2 = 0,5. Maka 0,75 - 0,5 = 0,25 (atau 1/4).",
      },
      {
        p: "1/2 - 0,2",
        correct: "0,3",
        distractors: ["0,2", "0,4", "0,25", "0,1"],
        tip: "1/2 = 0,5. Maka 0,5 - 0,2 = 0,3 (atau 3/10).",
      },
      {
        p: "2/5 + 0,5",
        correct: "0,9",
        distractors: ["0,7", "0,8", "1", "0,65"],
        tip: "2/5 = 0,4. Maka 0,4 + 0,5 = 0,9 (atau 9/10).",
      },
      {
        p: "4/5 × 0,25",
        correct: "0,2",
        distractors: ["0,4", "0,1", "0,25", "0,5"],
        tip: "0,25 = 1/4. Maka 4/5 × 1/4 = 1/5 = 0,2.",
      },
      {
        p: "0,5 × 2/5",
        correct: "0,2",
        distractors: ["0,1", "0,4", "0,25", "0,3"],
        tip: "0,5 = 1/2. Maka 1/2 × 2/5 = 1/5 = 0,2.",
      },
      {
        p: "3/8 + 0,125",
        correct: "0,5",
        distractors: ["0,375", "0,25", "0,625", "0,45"],
        tip: "3/8 = 0,375. 0,375 + 0,125 = 0,5 (atau 1/2).",
      },
      {
        p: "0,625 - 1/2",
        correct: "0,125",
        distractors: ["0,25", "0,375", "0,5", "0,025"],
        tip: "0,625 = 5/8 dan 1/2 = 4/8. 5/8 - 4/8 = 1/8 = 0,125.",
      },
      {
        p: "0,75 ÷ 1/4",
        correct: "3",
        distractors: ["1", "4", "0,3", "0,5"],
        tip: "1/4 = 0,25. Maka 0,75 ÷ 0,25 = 3.",
      },
      {
        p: "0,5 ÷ 1/8",
        correct: "4",
        distractors: ["2", "8", "0,0625", "1/4"],
        tip: "1/2 × 8/1 = 4.",
      },
      {
        p: "3/5 + 0,15",
        correct: "0,75",
        distractors: ["0,65", "0,8", "0,7", "0,5"],
        tip: "3/5 = 0,6. Maka 0,6 + 0,15 = 0,75 (atau 3/4).",
      },
      {
        p: "4/5 - 0,2",
        correct: "0,6",
        distractors: ["0,4", "0,5", "0,7", "0,8"],
        tip: "4/5 = 0,8. Maka 0,8 - 0,2 = 0,6 (atau 3/5).",
      },
    ];

    const item = sample(bank);
    const options = makeFourOptions(item.correct, item.distractors);
    return {
      id: `op-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      kind: "operation",
      prompt: `${item.p} = ...`,
      options,
      correctAnswer: item.correct,
      tip: item.tip,
    };
  }

  // 3. PERSEN [OP] PECAHAN / DESIMAL
  if (opCategory === "pct_op_mix") {
    const bank: Array<{ p: string; correct: string; distractors: string[]; tip: string }> = [
      {
        p: "75% - 1/2",
        correct: "25%",
        distractors: ["50%", "30%", "15%", "20%"],
        tip: "1/2 = 50%. Maka 75% - 50% = 25% (atau 1/4).",
      },
      {
        p: "50% + 1/4",
        correct: "75%",
        distractors: ["65%", "60%", "80%", "70%"],
        tip: "1/4 = 25%. Maka 50% + 25% = 75% (atau 3/4).",
      },
      {
        p: "50% × 4/5",
        correct: "40%",
        distractors: ["20%", "50%", "30%", "45%"],
        tip: "4/5 = 80%. Setengah dari 80% adalah 40% (atau 0,4).",
      },
      {
        p: "40% + 0,25",
        correct: "65%",
        distractors: ["60%", "55%", "70%", "75%"],
        tip: "0,25 = 25%. Maka 40% + 25% = 65% (atau 0,65).",
      },
      {
        p: "0,8 - 30%",
        correct: "50%",
        distractors: ["40%", "60%", "45%", "55%"],
        tip: "0,8 = 80%. Maka 80% - 30% = 50% (atau 0,5 / 1/2).",
      },
      {
        p: "25% × 0,4",
        correct: "10%",
        distractors: ["15%", "5%", "20%", "8%"],
        tip: "0,4 = 40%. Seperempat dari 40% adalah 10% (atau 0,1).",
      },
      {
        p: "60% ÷ 1/5",
        correct: "300%",
        distractors: ["120%", "200%", "150%", "30%"],
        tip: "1/5 = 20%. Maka 60% ÷ 20% = 3 (atau 300%).",
      },
      {
        p: "100% - 37,5%",
        correct: "62,5%",
        distractors: ["52,5%", "72,5%", "67,5%", "57,5%"],
        tip: "1 - 3/8 = 5/8 = 62,5%.",
      },
      {
        p: "100% - 12,5%",
        correct: "87,5%",
        distractors: ["77,5%", "82,5%", "92,5%", "85%"],
        tip: "1 - 1/8 = 7/8 = 87,5%.",
      },
      {
        p: "12,5% + 37,5%",
        correct: "50%",
        distractors: ["45%", "55%", "60%", "40%"],
        tip: "1/8 + 3/8 = 4/8 = 1/2 = 50%.",
      },
    ];

    const item = sample(bank);
    const options = makeFourOptions(item.correct, item.distractors);
    return {
      id: `op-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      kind: "operation",
      prompt: `${item.p} = ...`,
      options,
      correctAnswer: item.correct,
      tip: item.tip,
    };
  }

  // 4. DESIMAL [OP] DESIMAL
  if (opCategory === "dec_op_dec") {
    const bank: Array<{ p: string; correct: string; distractors: string[]; tip: string }> = [
      {
        p: "0,5 × 0,4",
        correct: "0,2",
        distractors: ["0,02", "0,4", "0,1", "0,25"],
        tip: "Trik pecahan: 1/2 × 2/5 = 1/5 = 0,2.",
      },
      {
        p: "0,25 × 0,8",
        correct: "0,2",
        distractors: ["0,02", "0,4", "0,15", "0,3"],
        tip: "Trik pecahan: 1/4 × 4/5 = 1/5 = 0,2.",
      },
      {
        p: "0,75 ÷ 0,25",
        correct: "3",
        distractors: ["2", "4", "0,3", "1,5"],
        tip: "75 dibagi 25 = 3.",
      },
      {
        p: "0,5 + 0,25",
        correct: "0,75",
        distractors: ["0,7", "0,8", "0,65", "0,85"],
        tip: "0,50 + 0,25 = 0,75 (atau 3/4).",
      },
      {
        p: "0,5 ÷ 0,125",
        correct: "4",
        distractors: ["2", "8", "0,4", "0,25"],
        tip: "Ubah ke pecahan: (1/2) ÷ (1/8) = (1/2) × 8 = 4.",
      },
      {
        p: "0,375 + 0,125",
        correct: "0,5",
        distractors: ["0,45", "0,6", "0,25", "0,55"],
        tip: "3/8 + 1/8 = 4/8 = 1/2 = 0,5.",
      },
      {
        p: "0,8 - 0,25",
        correct: "0,55",
        distractors: ["0,65", "0,45", "0,5", "0,6"],
        tip: "0,80 - 0,25 = 0,55.",
      },
      {
        p: "0,5 × 0,75",
        correct: "0,375",
        distractors: ["0,25", "0,45", "0,35", "0,125"],
        tip: "Setengah dari 0,75 adalah 0,375 (setara 3/8).",
      },
    ];

    const item = sample(bank);
    const options = makeFourOptions(item.correct, item.distractors);
    return {
      id: `op-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      kind: "operation",
      prompt: `${item.p} = ...`,
      options,
      correctAnswer: item.correct,
      tip: item.tip,
    };
  }

  // 5. PECAHAN/PERSEN X BILANGAN BULAT (Porsi terkontrol ~15%)
  // Fokus pada non-unit fractions: 3/4, 2/5, 3/5, 4/5, 3/8, 5/8, 7/8, 2/3, 5/6
  const pool = BENCHMARK_FRACTIONS.filter((b) => b.num > 1 && [3, 4, 5, 6, 8].includes(b.den));
  const item = sample(pool);
  const k = sample([2, 3, 4, 5, 6, 7]);
  const intOperand = item.den * k;
  const answerVal = item.num * k;
  const correct = String(answerVal);

  const displayOp = Math.random() < 0.5 ? item.fractionStr : item.percentStr;
  const distractors = [
    String(answerVal + k),
    String(Math.max(1, answerVal - k)),
    String(answerVal + 2),
    String(answerVal - 2),
    String(intOperand - answerVal),
  ];

  const options = makeFourOptions(correct, distractors);

  return {
    id: `op-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    kind: "operation",
    prompt: `${displayOp} × ${intOperand} = ...`,
    options,
    correctAnswer: correct,
    tip: `Ubah ${displayOp} ke pecahan ${item.fractionStr}. Bagi ${intOperand} dengan ${item.den} (hasil ${k}), lalu kalikan ${item.num} = ${correct}.`,
  };
}

/**
 * Menghasilkan satu soal acak berdasarkan kategori
 */
export function generateQuestion(category: GameCategory): GameQuestion {
  if (category === "conversion") return generateConversionQuestion();
  if (category === "operation") return generateOperationQuestion();
  return Math.random() < 0.5 ? generateConversionQuestion() : generateOperationQuestion();
}

/**
 * Menghasilkan sekumpulan soal unik untuk mode jumlah soal
 */
export function generateQuestionSet(category: GameCategory, count: number): GameQuestion[] {
  const list: GameQuestion[] = [];
  const seenPrompts = new Set<string>();
  let attempts = 0;

  while (list.length < count && attempts < count * 8) {
    attempts++;
    const q = generateQuestion(category);
    if (!seenPrompts.has(q.prompt)) {
      seenPrompts.add(q.prompt);
      list.push(q);
    }
  }

  while (list.length < count) {
    list.push(generateQuestion(category));
  }

  return list;
}

/**
 * Menghitung batas waktu dinamis per soal pada mode SURVIVAL.
 * Dimulai dari 45 detik di awal, lalu berkurang bertahap seiring bertambahnya nomor soal,
 * hingga tercepat mentok di 5 detik.
 */
export function getSurvivalTimeLimit(questionNumber: number): number {
  if (questionNumber <= 1) return 45;
  const calculated = Math.round(45 - (questionNumber - 1) * 2.2);
  return Math.max(5, calculated);
}
