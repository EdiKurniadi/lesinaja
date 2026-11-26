/**
 * Engine Game Sisa Bagi 9 (1–9) & Sisa Bagi 11 (0–10) Perkalian Bilangan
 * - Sisa Bagi 9 memakai reduksi jumlah digit (digital root): rentang hasil 1 s.d. 9.
 * - Sisa Bagi 11 memakai selisih bergantian digit dari kanan: rentang hasil 0 s.d. 10.
 * - Mode Pasangan Perkalian Setara (5 opsi A–E):
 *   * 1 opsi tepat setara (A × B = C × D)
 *   * 1 atau 2 distraktor dapat dieliminasi memakai Teknik Digit Terakhir (ekor satuan berbeda)
 *   * 2 atau 3 distraktor lainnya ber-ekor satuan SAMA dan dekat nilainya, sehingga
 *     hanya bisa digugurkan memakai Uji Sisa Bagi 9 (1–9) dan/atau Sisa Bagi 11 (0–10).
 */

export type SisaBagiDivisorFilter = "mod9" | "mod11" | "mixed";
export type SisaBagiDigitLevel = "puluhan" | "ratusan" | "ribuan" | "all";
export type ConcreteDigitLevel = "puluhan" | "ratusan" | "ribuan";
export type SisaBagiChallengeMode = "hitung-sisa" | "pasangan-setara" | "mixed";

export interface PairOptionAnalysis {
  label: string;
  a: number;
  b: number;
  c: number;
  d: number;
  isEqual: boolean;
  lastDigitLeft: number;
  lastDigitRight: number;
  mod9Left: number; // 1..9
  mod9Right: number; // 1..9
  mod11Left: number; // 0..10
  mod11Right: number; // 0..10
  eliminationReason: "correct" | "last_digit" | "mod9" | "mod11";
  note: string;
}

export interface SisaBagiQuestion {
  id: string;
  challengeMode: "hitung-sisa" | "pasangan-setara";
  divisor: 9 | 11;
  divisorFilter: SisaBagiDivisorFilter;
  digitLevel: ConcreteDigitLevel;
  prompt: string;
  subPrompt: string;
  a?: number;
  b?: number;
  options: string[];
  correctAnswer: string;
  pairAnalyses?: PairOptionAnalysis[];
  steps: string[];
  tip: string;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function formatDotNumber(n: number): string {
  const sign = n < 0 ? "-" : "";
  const digits = String(Math.trunc(Math.abs(n)));
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${grouped}`;
}

/**
 * Sisa bagi 9 bernilai 1–9 (digital root): kelipatan 9 menghasilkan 9, bukan 0.
 */
export function mod9OneToNine(n: number): number {
  const abs = Math.trunc(Math.abs(n));
  if (abs === 0) return 9;
  const rem = abs % 9;
  return rem === 0 ? 9 : rem;
}

/**
 * Sisa bagi 11 bernilai 0–10.
 */
export function mod11ZeroToTen(n: number): number {
  const truncated = Math.trunc(n);
  return ((truncated % 11) + 11) % 11;
}

export function explainMod9Number(n: number): { value: number; detail: string } {
  const digits = String(Math.trunc(Math.abs(n)))
    .split("")
    .map(Number);
  const firstSum = digits.reduce((acc, d) => acc + d, 0);
  const finalVal = mod9OneToNine(n);

  if (firstSum <= 9) {
    return {
      value: finalVal,
      detail: `${formatDotNumber(n)} → ${digits.join("+")} = ${finalVal}`,
    };
  }

  const secondDigits = String(firstSum).split("").map(Number);
  const secondSum = secondDigits.reduce((acc, d) => acc + d, 0);
  if (secondSum <= 9) {
    return {
      value: finalVal,
      detail: `${formatDotNumber(n)} → ${digits.join("+")} = ${firstSum} → ${secondDigits.join("+")} = ${finalVal}`,
    };
  }

  return {
    value: finalVal,
    detail: `${formatDotNumber(n)} → ${digits.join("+")} = ${firstSum} → ${secondSum} → ${finalVal}`,
  };
}

export function explainMod11Number(n: number): { value: number; detail: string } {
  const digits = String(Math.trunc(Math.abs(n)))
    .split("")
    .map(Number)
    .reverse(); // index 0 = satuan (+), index 1 = puluhan (-), dst.

  const oddPosFromRight: number[] = [];
  const evenPosFromRight: number[] = [];
  digits.forEach((d, idx) => {
    if (idx % 2 === 0) oddPosFromRight.push(d);
    else evenPosFromRight.push(d);
  });

  const sumOdd = oddPosFromRight.reduce((acc, d) => acc + d, 0);
  const sumEven = evenPosFromRight.reduce((acc, d) => acc + d, 0);
  const diff = sumOdd - sumEven;
  const finalVal = mod11ZeroToTen(n);

  const lhs = `(${oddPosFromRight.join("+")})`;
  const rhs = evenPosFromRight.length > 0 ? `(${evenPosFromRight.join("+")})` : "(0)";

  if (diff === finalVal) {
    return {
      value: finalVal,
      detail: `${formatDotNumber(n)} → ${lhs} − ${rhs} = ${sumOdd} − ${sumEven} = ${finalVal}`,
    };
  }

  return {
    value: finalVal,
    detail: `${formatDotNumber(n)} → ${lhs} − ${rhs} = ${diff} ≡ ${finalVal} (mod 11)`,
  };
}

function getDigitRange(level: ConcreteDigitLevel): { min: number; max: number } {
  if (level === "puluhan") return { min: 12, max: 98 };
  if (level === "ratusan") return { min: 102, max: 998 };
  return { min: 1002, max: 9998 };
}

function randomNonTrivialOperand(level: ConcreteDigitLevel): number {
  const { min, max } = getDigitRange(level);
  for (let i = 0; i < 40; i++) {
    const val = randomInt(min, max);
    if (val % 10 !== 0) return val;
  }
  return min + 1;
}

export function generateHitungSisaQuestion(
  divisor: 9 | 11,
  digitLevel: ConcreteDigitLevel
): SisaBagiQuestion {
  const a = randomNonTrivialOperand(digitLevel);
  const b = randomNonTrivialOperand(digitLevel);
  const product = a * b;

  const correctVal =
    divisor === 9 ? mod9OneToNine(product) : mod11ZeroToTen(product);
  const minAllowed = divisor === 9 ? 1 : 0;
  const maxAllowed = divisor === 9 ? 9 : 10;

  const expA = divisor === 9 ? explainMod9Number(a) : explainMod11Number(a);
  const expB = divisor === 9 ? explainMod9Number(b) : explainMod11Number(b);
  const rawProductRem = expA.value * expB.value;

  const distractorPool = new Set<number>();
  // Jebakan umum: salah ingat sisa 0 vs 9 pada mod 9, atau tidak tambah 11 pada selisih negatif mod 11
  const candidateDistractors = [
    correctVal + 1,
    correctVal - 1,
    correctVal + 2,
    correctVal - 2,
    divisor === 9 ? ((correctVal + 3 - 1) % 9) + 1 : (correctVal + 3) % 11,
    divisor === 9 ? ((correctVal + 4 - 1) % 9) + 1 : (correctVal + 11 - 3) % 11,
    rawProductRem <= maxAllowed && rawProductRem >= minAllowed ? rawProductRem : correctVal + 5,
  ];

  for (const cand of candidateDistractors) {
    if (cand >= minAllowed && cand <= maxAllowed && cand !== correctVal) {
      distractorPool.add(cand);
    }
    if (distractorPool.size >= 4) break;
  }
  while (distractorPool.size < 4) {
    const r = randomInt(minAllowed, maxAllowed);
    if (r !== correctVal) distractorPool.add(r);
  }

  const options = shuffleArray([
    String(correctVal),
    ...Array.from(distractorPool).slice(0, 4).map(String),
  ]);

  const prodExplain =
    divisor === 9
      ? explainMod9Number(rawProductRem)
      : explainMod11Number(rawProductRem);

  const steps =
    divisor === 9
      ? [
          `Cari Sisa Bagi 9 (rentang 1–9) bilangan pertama: ${expA.detail}`,
          `Cari Sisa Bagi 9 bilangan kedua: ${expB.detail}`,
          `Kalikan kedua sisa: ${expA.value} × ${expB.value} = ${rawProductRem} → sisa bagi 9 = ${prodExplain.value}`,
        ]
      : [
          `Cari Sisa Bagi 11 (selisih bergantian dari kanan) bilangan pertama: ${expA.detail}`,
          `Cari Sisa Bagi 11 bilangan kedua: ${expB.detail}`,
          `Kalikan kedua sisa: ${expA.value} × ${expB.value} = ${rawProductRem} → sisa bagi 11 = ${correctVal}`,
        ];

  return {
    id: `sb-${divisor}-${digitLevel}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    challengeMode: "hitung-sisa",
    divisor,
    divisorFilter: divisor === 9 ? "mod9" : "mod11",
    digitLevel,
    prompt: `${formatDotNumber(a)} × ${formatDotNumber(b)}`,
    subPrompt:
      divisor === 9
        ? "Tentukan sisa bagi 9 (pilih angka 1–9) tanpa mengalikan penuh!"
        : "Tentukan sisa bagi 11 (pilih angka 0–10) menggunakan selisih bergantian!",
    a,
    b,
    options,
    correctAnswer: String(correctVal),
    steps,
    tip:
      divisor === 9
        ? "Sisa bagi 9 (1–9): jumlahkan digit tiap bilangan (kelipatan 9 bernilai 9), lalu kalikan sisanya."
        : "Sisa bagi 11 (0–10): (jumlah digit ganjil dari kanan) − (jumlah digit genap dari kanan). Bila negatif, tambahkan 11.",
  };
}

interface ProductQuad {
  a: number;
  b: number;
  c: number;
  d: number;
}

const FALLBACK_QUADS: Record<ConcreteDigitLevel, ProductQuad[]> = {
  puluhan: [
    { a: 24, b: 63, c: 28, d: 54 },
    { a: 36, b: 49, c: 42, d: 42 },
    { a: 27, b: 56, c: 36, d: 42 },
    { a: 32, b: 63, c: 36, d: 56 },
    { a: 28, b: 81, c: 36, d: 63 },
  ],
  ratusan: [
    { a: 126, b: 248, c: 186, d: 168 },
    { a: 144, b: 273, c: 182, d: 216 },
    { a: 168, b: 324, c: 216, d: 252 },
    { a: 234, b: 357, c: 273, d: 306 },
  ],
  ribuan: [
    { a: 1248, b: 2352, c: 1664, d: 1764 },
    { a: 1456, b: 2772, c: 1872, d: 2156 },
    { a: 1638, b: 2484, c: 1944, d: 2093 },
    { a: 1872, b: 3168, c: 2376, d: 2496 },
  ],
};

function generateEqualProductQuad(level: ConcreteDigitLevel): ProductQuad {
  const { min, max } = getDigitRange(level);
  const multiplierPairs: [number, number][] = [
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 5],
    [4, 7],
    [5, 6],
    [5, 7],
    [5, 8],
    [6, 7],
    [7, 8],
    [7, 9],
    [8, 9],
    [4, 9],
    [7, 11],
    [8, 11],
    [9, 11],
  ];

  for (let attempt = 0; attempt < 160; attempt++) {
    const [p, q] = pickRandom(multiplierPairs);
    const minFactor = Math.ceil(min / p);
    const maxFactor = Math.floor(max / q);
    if (minFactor >= maxFactor) continue;

    const x = randomInt(minFactor, maxFactor);
    const y = randomInt(minFactor, maxFactor);
    if (x === y) continue;

    const a = x * p;
    const b = y * q;
    const c = x * q;
    const d = y * p;

    if (
      a >= min &&
      a <= max &&
      b >= min &&
      b <= max &&
      c >= min &&
      c <= max &&
      d >= min &&
      d <= max &&
      a % 10 !== 0 &&
      b % 10 !== 0 &&
      c % 10 !== 0 &&
      d % 10 !== 0 &&
      a !== c &&
      a !== d &&
      a * b === c * d
    ) {
      return Math.random() < 0.5 ? { a, b, c, d } : { a: c, b: d, c: a, d: b };
    }
  }

  return pickRandom(FALLBACK_QUADS[level]);
}

function buildPairLabel(a: number, b: number, c: number, d: number): string {
  return `${formatDotNumber(a)} × ${formatDotNumber(b)} = ${formatDotNumber(c)} × ${formatDotNumber(d)}`;
}

function createLastDigitDistractor(
  level: ConcreteDigitLevel
): PairOptionAnalysis | null {
  const { min, max } = getDigitRange(level);
  const base = generateEqualProductQuad(level);
  const deltas = [1, -1, 2, -2, 3, -3, 4, -4];

  for (const delta of shuffleArray(deltas)) {
    const candidates: [number, number][] = [
      [base.c + delta, base.d],
      [base.c, base.d + delta],
    ];
    for (const [c, d] of candidates) {
      if (c < min || c > max || d < min || d > max) continue;
      if (c % 10 === 0 || d % 10 === 0) continue;
      if ((base.a === c && base.b === d) || (base.a === d && base.b === c)) continue;

      const leftProd = base.a * base.b;
      const rightProd = c * d;
      if (leftProd === rightProd) continue;

      const lastLeft = leftProd % 10;
      const lastRight = rightProd % 10;
      if (lastLeft === lastRight) continue;

      return {
        label: buildPairLabel(base.a, base.b, c, d),
        a: base.a,
        b: base.b,
        c,
        d,
        isEqual: false,
        lastDigitLeft: lastLeft,
        lastDigitRight: lastRight,
        mod9Left: mod9OneToNine(leftProd),
        mod9Right: mod9OneToNine(rightProd),
        mod11Left: mod11ZeroToTen(leftProd),
        mod11Right: mod11ZeroToTen(rightProd),
        eliminationReason: "last_digit",
        note: `Gugur di Digit Terakhir: kiri berekor ${lastLeft}, kanan berekor ${lastRight}.`,
      };
    }
  }

  return null;
}

function createSameLastDigitModDistractor(
  level: ConcreteDigitLevel,
  targetReason: "mod9" | "mod11",
  requirePassMod9ForMod11: boolean
): PairOptionAnalysis | null {
  const { min, max } = getDigitRange(level);

  for (let outer = 0; outer < 60; outer++) {
    const base = generateEqualProductQuad(level);
    const leftProd = base.a * base.b;
    const lastLeft = leftProd % 10;
    const mod9Left = mod9OneToNine(leftProd);
    const mod11Left = mod11ZeroToTen(leftProd);

    // 1. Untuk mode mod9 atau mod11 (tanpa wajib lolos mod 9), cukup ubah puluhan ±10..±50 agar digit terakhir tetap sama
    if (!requirePassMod9ForMod11) {
      const stepDeltas = shuffleArray([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]);
      for (const delta of stepDeltas) {
        const tryPairs: [number, number][] = [
          [base.c + delta, base.d],
          [base.c, base.d + delta],
        ];
        for (const [c, d] of tryPairs) {
          if (c < min || c > max || d < min || d > max) continue;
          if (c % 10 === 0 || d % 10 === 0) continue;
          const rightProd = c * d;
          if (rightProd === leftProd) continue;
          if (rightProd % 10 !== lastLeft) continue;

          const mod9Right = mod9OneToNine(rightProd);
          const mod11Right = mod11ZeroToTen(rightProd);

          if (targetReason === "mod9" && mod9Right !== mod9Left) {
            return {
              label: buildPairLabel(base.a, base.b, c, d),
              a: base.a,
              b: base.b,
              c,
              d,
              isEqual: false,
              lastDigitLeft: lastLeft,
              lastDigitRight: lastLeft,
              mod9Left,
              mod9Right,
              mod11Left,
              mod11Right,
              eliminationReason: "mod9",
              note: `Ekor sama (${lastLeft}), tetapi Sisa Bagi 9 berbeda: kiri ${mod9Left} vs kanan ${mod9Right}.`,
            };
          }

          if (targetReason === "mod11" && mod11Right !== mod11Left) {
            return {
              label: buildPairLabel(base.a, base.b, c, d),
              a: base.a,
              b: base.b,
              c,
              d,
              isEqual: false,
              lastDigitLeft: lastLeft,
              lastDigitRight: lastLeft,
              mod9Left,
              mod9Right,
              mod11Left,
              mod11Right,
              eliminationReason: "mod11",
              note: `Ekor sama (${lastLeft}), tetapi Sisa Bagi 11 berbeda: kiri ${mod11Left} vs kanan ${mod11Right}.`,
            };
          }
        }
      }
    } else {
      // 2. Distraktor HOTS: ekor sama (% 10) DAN sisa bagi 9 SAMA (1..9), hanya gugur di sisa bagi 11!
      // Coba delta kelipatan 90 dulu (otomatis mempertahankan % 10 dan mod 9!)
      for (const delta of shuffleArray([90, -90, 180, -180, 270, -270])) {
        const tryPairs: [number, number][] = [
          [base.c + delta, base.d],
          [base.c, base.d + delta],
        ];
        for (const [c, d] of tryPairs) {
          if (c < min || c > max || d < min || d > max) continue;
          if (c % 10 === 0 || d % 10 === 0) continue;
          const rightProd = c * d;
          if (rightProd === leftProd) continue;
          if (rightProd % 10 !== lastLeft) continue;
          const mod9Right = mod9OneToNine(rightProd);
          const mod11Right = mod11ZeroToTen(rightProd);
          if (mod9Right === mod9Left && mod11Right !== mod11Left) {
            return {
              label: buildPairLabel(base.a, base.b, c, d),
              a: base.a,
              b: base.b,
              c,
              d,
              isEqual: false,
              lastDigitLeft: lastLeft,
              lastDigitRight: lastLeft,
              mod9Left,
              mod9Right,
              mod11Left,
              mod11Right,
              eliminationReason: "mod11",
              note: `Jebakan HOTS! Ekor sama (${lastLeft}) & Sisa Bagi 9 sama (${mod9Left}), hanya gugur di Sisa Bagi 11 (${mod11Left} vs ${mod11Right}).`,
            };
          }
        }
      }

      // Untuk level puluhan (12..98) di mana ±90 keluar rentang, cari pasangan dekat di sekitar (c, d)
      let bestMatch: { c: number; d: number; diff: number; mod11Right: number } | null = null;
      const windowRadius = level === "puluhan" ? 28 : 24;
      for (let dc = -windowRadius; dc <= windowRadius; dc++) {
        const c = base.c + dc;
        if (c < min || c > max || c % 10 === 0) continue;
        for (let dd = -windowRadius; dd <= windowRadius; dd++) {
          const d = base.d + dd;
          if (d < min || d > max || d % 10 === 0) continue;
          const rightProd = c * d;
          if (rightProd === leftProd) continue;
          if (rightProd % 10 !== lastLeft) continue;
          if (mod9OneToNine(rightProd) !== mod9Left) continue;
          const mod11Right = mod11ZeroToTen(rightProd);
          if (mod11Right === mod11Left) continue;
          const diff = Math.abs(rightProd - leftProd);
          if (!bestMatch || diff < bestMatch.diff) {
            bestMatch = { c, d, diff, mod11Right };
          }
        }
      }
      if (bestMatch) {
        return {
          label: buildPairLabel(base.a, base.b, bestMatch.c, bestMatch.d),
          a: base.a,
          b: base.b,
          c: bestMatch.c,
          d: bestMatch.d,
          isEqual: false,
          lastDigitLeft: lastLeft,
          lastDigitRight: lastLeft,
          mod9Left,
          mod9Right: mod9Left,
          mod11Left,
          mod11Right: bestMatch.mod11Right,
          eliminationReason: "mod11",
          note: `Jebakan HOTS! Ekor sama (${lastLeft}) & Sisa Bagi 9 sama (${mod9Left}), hanya gugur di Sisa Bagi 11 (${mod11Left} vs ${bestMatch.mod11Right}).`,
        };
      }
    }
  }

  return null;
}

export function generatePasanganSetaraQuestion(
  divisorFilter: SisaBagiDivisorFilter,
  digitLevel: ConcreteDigitLevel
): SisaBagiQuestion {
  const trueQuad = generateEqualProductQuad(digitLevel);
  const trueProd = trueQuad.a * trueQuad.b;
  const trueAnalysis: PairOptionAnalysis = {
    label: buildPairLabel(trueQuad.a, trueQuad.b, trueQuad.c, trueQuad.d),
    a: trueQuad.a,
    b: trueQuad.b,
    c: trueQuad.c,
    d: trueQuad.d,
    isEqual: true,
    lastDigitLeft: trueProd % 10,
    lastDigitRight: trueProd % 10,
    mod9Left: mod9OneToNine(trueProd),
    mod9Right: mod9OneToNine(trueProd),
    mod11Left: mod11ZeroToTen(trueProd),
    mod11Right: mod11ZeroToTen(trueProd),
    eliminationReason: "correct",
    note: `BENAR! Hasil kali sama persis = ${formatDotNumber(trueProd)} (ekor ${trueProd % 10}, mod 9 = ${mod9OneToNine(trueProd)}, mod 11 = ${mod11ZeroToTen(trueProd)}).`,
  };

  // Sesuai permintaan: 1 atau 2 distraktor dapat dihilangkan dengan teknik digit terakhir
  const lastDigitTargetCount = Math.random() < 0.5 ? 1 : 2;
  const distractors: PairOptionAnalysis[] = [];
  const usedLabels = new Set<string>([trueAnalysis.label]);

  for (let i = 0; i < 30 && distractors.length < lastDigitTargetCount; i++) {
    const item = createLastDigitDistractor(digitLevel);
    if (item && !usedLabels.has(item.label)) {
      usedLabels.add(item.label);
      distractors.push(item);
    }
  }

  // Sisa distraktor (2 atau 3 opsi) ber-ekor satuan SAMA dan gugur di Sisa Bagi 9 / 11
  const remainingSlots = 4 - distractors.length;
  const planSpecs: { reason: "mod9" | "mod11"; requirePassMod9: boolean }[] = [];

  if (divisorFilter === "mod9") {
    for (let i = 0; i < remainingSlots; i++) {
      planSpecs.push({ reason: "mod9", requirePassMod9: false });
    }
  } else if (divisorFilter === "mod11") {
    for (let i = 0; i < remainingSlots; i++) {
      planSpecs.push({ reason: "mod11", requirePassMod9: false });
    }
  } else {
    // Mixed: minimal 1 gagal mod 9 dan minimal 1 jebakan HOTS lolos ekor + mod 9, gagal mod 11
    for (let i = 0; i < remainingSlots; i++) {
      if (i === 0) {
        planSpecs.push({ reason: "mod11", requirePassMod9: true });
      } else if (i === 1) {
        planSpecs.push({ reason: "mod9", requirePassMod9: false });
      } else {
        planSpecs.push({
          reason: "mod11",
          requirePassMod9: Math.random() < 0.65,
        });
      }
    }
  }

  for (const spec of planSpecs) {
    let added = false;
    for (let retry = 0; retry < 25; retry++) {
      const candidate = createSameLastDigitModDistractor(
        digitLevel,
        spec.reason,
        spec.requirePassMod9
      );
      if (candidate && !usedLabels.has(candidate.label)) {
        usedLabels.add(candidate.label);
        distractors.push(candidate);
        added = true;
        break;
      }
    }
    if (!added) {
      // Fallback aman apabila kombinasi spesifik jarang
      const fallback = createSameLastDigitModDistractor(
        digitLevel,
        spec.reason,
        false
      );
      if (fallback && !usedLabels.has(fallback.label)) {
        usedLabels.add(fallback.label);
        distractors.push(fallback);
      }
    }
  }

  const allAnalyses = shuffleArray([trueAnalysis, ...distractors]).slice(0, 5);
  const optionLetters = ["A", "B", "C", "D", "E"];
  const steps = allAnalyses.map(
    (item, idx) => `${optionLetters[idx]}. ${item.label} → ${item.note}`
  );

  const activeDivisor: 9 | 11 = divisorFilter === "mod9" ? 9 : 11;

  return {
    id: `sb-pair-${divisorFilter}-${digitLevel}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    challengeMode: "pasangan-setara",
    divisor: activeDivisor,
    divisorFilter,
    digitLevel,
    prompt: "Manakah pasangan perkalian yang hasil kalinya SETARA?",
    subPrompt:
      divisorFilter === "mod9"
        ? "Eliminasi cepat: cek Digit Terakhir, lalu gugurkan sisanya dengan Sisa Bagi 9 (1–9)."
        : divisorFilter === "mod11"
          ? "Eliminasi cepat: cek Digit Terakhir, lalu gugurkan sisanya dengan Sisa Bagi 11 (0–10)."
          : "Eliminasi cepat: cek Digit Terakhir → Sisa Bagi 9 (1–9) → Sisa Bagi 11 (0–10).",
    options: allAnalyses.map((item) => item.label),
    correctAnswer: trueAnalysis.label,
    pairAnalyses: allAnalyses,
    steps,
    tip: "Langkah jitu: 1) Cek digit terakhir (1–2 opsi langsung gugur). 2) Uji Sisa Bagi 9 (1–9). 3) Jika masih imbang, uji Sisa Bagi 11 (0–10).",
  };
}

export function resolveConcreteDigitLevel(
  filter: SisaBagiDigitLevel,
  questionIndex?: number
): ConcreteDigitLevel {
  if (filter !== "all") return filter;
  if (typeof questionIndex === "number") {
    if (questionIndex <= 4) return "puluhan";
    if (questionIndex <= 10) return "ratusan";
    if (questionIndex <= 16) return "ribuan";
  }
  return pickRandom(["puluhan", "ratusan", "ribuan"] as const);
}

export function generateSisaBagiQuestion(
  challengeMode: SisaBagiChallengeMode,
  divisorFilter: SisaBagiDivisorFilter,
  digitFilter: SisaBagiDigitLevel,
  questionNumber?: number
): SisaBagiQuestion {
  const concreteDigit = resolveConcreteDigitLevel(digitFilter, questionNumber);
  const concreteMode: "hitung-sisa" | "pasangan-setara" =
    challengeMode === "mixed"
      ? Math.random() < 0.5
        ? "hitung-sisa"
        : "pasangan-setara"
      : challengeMode;

  if (concreteMode === "pasangan-setara") {
    return generatePasanganSetaraQuestion(divisorFilter, concreteDigit);
  }

  const concreteDivisor: 9 | 11 =
    divisorFilter === "mixed" ? (Math.random() < 0.5 ? 9 : 11) : divisorFilter === "mod9" ? 9 : 11;
  return generateHitungSisaQuestion(concreteDivisor, concreteDigit);
}

export function generateSisaBagiSet(
  challengeMode: SisaBagiChallengeMode,
  divisorFilter: SisaBagiDivisorFilter,
  digitFilter: SisaBagiDigitLevel,
  count: number
): SisaBagiQuestion[] {
  return Array.from({ length: count }, (_, idx) =>
    generateSisaBagiQuestion(challengeMode, divisorFilter, digitFilter, idx + 1)
  );
}

export function getSisaBagiSurvivalTimeLimitSec(
  questionNumber: number,
  challengeMode: "hitung-sisa" | "pasangan-setara"
): number {
  if (challengeMode === "pasangan-setara") {
    return Math.max(20, 65 - (questionNumber - 1) * 3);
  }
  return Math.max(12, 45 - (questionNumber - 1) * 2);
}
