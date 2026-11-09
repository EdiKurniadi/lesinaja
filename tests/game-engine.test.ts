import test from "node:test";
import assert from "node:assert/strict";
import {
  BENCHMARK_FRACTIONS,
  generateConversionQuestion,
  generateOperationQuestion,
  generateQuestionSet,
  getSurvivalTimeLimit,
} from "../lib/game-engine";

test("benchmark fractions memenuhi aturan: desimal maksimal 3 angka di belakang koma", () => {
  assert.ok(BENCHMARK_FRACTIONS.length >= 20, "Harus ada minimal 20 pecahan benchmark");

  for (const item of BENCHMARK_FRACTIONS) {
    const parts = item.decimalStr.split(",");
    if (parts.length > 1) {
      assert.ok(
        parts[1].length <= 3,
        `Pecahan ${item.fractionStr} memiliki ${parts[1].length} digit di belakang koma (${item.decimalStr})`
      );
    }

    assert.ok(item.num > 0 && item.den > 0, "Pembilang dan penyebut harus positif");
    assert.ok(item.fractionStr.includes("/"), "Format pecahan harus a/b");
    assert.ok(item.percentStr.endsWith("%"), "Format persen harus berakhiran %");
    assert.ok(item.tip.length > 5, "Harus menyertakan trik/pembahasan");
  }
});

test("generateConversionQuestion menghasilkan 4 opsi unik dan jawaban benar ada di dalam opsi", () => {
  for (let i = 0; i < 200; i++) {
    const q = generateConversionQuestion();
    assert.equal(q.kind, "conversion");
    assert.ok(q.prompt.length > 5);
    assert.equal(q.options.length, 4, `Harus ada 4 opsi pilihan jawaban: ${JSON.stringify(q)}`);
    const uniqueOptions = new Set(q.options);
    assert.equal(uniqueOptions.size, 4, `Opsi tidak boleh duplikat: ${JSON.stringify(q.options)}`);
    assert.ok(q.options.includes(q.correctAnswer), "Jawaban benar harus terdapat dalam opsi");
    assert.ok(q.tip.length > 0, "Harus ada tips");
  }
});

test("generateOperationQuestion menghasilkan 4 opsi unik dan hasil bilangan bulat/desimal rapi", () => {
  for (let i = 0; i < 200; i++) {
    const q = generateOperationQuestion();
    assert.equal(q.kind, "operation");
    assert.ok(q.prompt.length > 3);
    assert.equal(q.options.length, 4, `Harus ada 4 opsi pilihan jawaban: ${JSON.stringify(q)}`);
    const uniqueOptions = new Set(q.options);
    assert.equal(uniqueOptions.size, 4, `Opsi tidak boleh duplikat: ${JSON.stringify(q.options)}`);
    assert.ok(q.options.includes(q.correctAnswer), "Jawaban benar harus terdapat dalam opsi");
  }
});

test("generateQuestionSet menghasilkan jumlah soal yang diminta", () => {
  const set5 = generateQuestionSet("mixed", 5);
  assert.equal(set5.length, 5);

  const set10 = generateQuestionSet("conversion", 10);
  assert.equal(set10.length, 10);

  const set20 = generateQuestionSet("operation", 20);
  assert.equal(set20.length, 20);
});

test("getSurvivalTimeLimit berkurang dari 45 detik hingga minimal 5 detik", () => {
  assert.equal(getSurvivalTimeLimit(1), 45, "Soal 1 harus 45 detik");
  assert.ok(getSurvivalTimeLimit(5) < 45, "Soal 5 harus berkurang");
  assert.ok(getSurvivalTimeLimit(10) < getSurvivalTimeLimit(5), "Soal 10 harus lebih cepat dari soal 5");
  assert.ok(getSurvivalTimeLimit(25) >= 5, "Tidak boleh kurang dari 5 detik");
  assert.equal(getSurvivalTimeLimit(30), 5, "Harus mentok di 5 detik pada level tinggi");
  assert.equal(getSurvivalTimeLimit(100), 5, "Harus tetap 5 detik");
});

test("generateConversionQuestion memunculkan pecahan non-unit (3/4, 2/5, 3/8, dll.) secara seimbang", () => {
  let nonUnitCount = 0;
  const sampleSize = 100;
  for (let i = 0; i < sampleSize; i++) {
    const q = generateConversionQuestion();
    const hasNonUnit = ["3/4", "2/5", "3/5", "4/5", "3/8", "5/8", "7/8", "2/3", "5/6", "3/10", "7/10", "9/10", "0,75", "0,4", "0,6", "0,8", "0,375", "0,625", "0,875", "0,667", "0,833"].some((val) => q.prompt.includes(val) || q.correctAnswer === val);
    if (hasNonUnit) nonUnitCount++;
  }
  assert.ok(nonUnitCount >= 30, `Pecahan non-unit harus sering muncul (ditemukan: ${nonUnitCount}/${sampleSize})`);
});

test("generateOperationQuestion memuat operasi antar pecahan, desimal, dan persen (bukan hanya pengali bulat)", () => {
  let fractionOrDecimalSecondOperand = 0;
  const sampleSize = 100;
  for (let i = 0; i < sampleSize; i++) {
    const q = generateOperationQuestion();
    const isNonPureIntMultiplier = q.prompt.includes("+") || q.prompt.includes("-") || q.prompt.includes("÷") || q.prompt.includes("0,") || q.prompt.includes("%") || q.prompt.includes("/");
    if (isNonPureIntMultiplier) fractionOrDecimalSecondOperand++;
  }
  assert.ok(fractionOrDecimalSecondOperand >= 50, `Operasi antar pecahan/desimal/persen harus dominan (ditemukan: ${fractionOrDecimalSecondOperand}/${sampleSize})`);
});
