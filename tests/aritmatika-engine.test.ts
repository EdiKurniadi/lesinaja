import test from "node:test";
import assert from "node:assert/strict";
import {
  generateAritmatikaQuestion,
  generateAritmatikaSet,
  generateLevel1ConceptQuestion,
  generateLevel2NominalQuestion,
  generateLevel3ComplexQuestion,
  gcd,
  simplifyFraction,
  formatRupiah,
  formatKg,
  formatPercent,
} from "../lib/aritmatika-engine";

test("utilitas matematika pecahan & formating bekerja tepat", () => {
  assert.equal(gcd(12, 100), 4);
  assert.equal(gcd(35, 100), 5);
  assert.deepEqual(simplifyFraction(12, 100), [3, 25]);
  assert.deepEqual(simplifyFraction(35, 100), [7, 20]);
  assert.equal(formatRupiah(1078000), "Rp1.078.000");
  assert.equal(formatKg(50), "50 kg");
  assert.equal(formatPercent(20), "20%");
});

test("Level 1 (Konseptual) menghasilkan 4 opsi unik dan jawaban ada di dalam opsi", () => {
  for (let i = 0; i < 50; i++) {
    const q = generateLevel1ConceptQuestion();
    assert.ok(q.prompt.length > 10, "Prompt harus terisi");
    assert.equal(q.options.length, 4, "Harus ada 4 opsi");
    assert.equal(new Set(q.options).size, 4, "Opsi harus unik");
    assert.ok(q.options.includes(q.correctAnswer), "Jawaban benar harus ada di dalam opsi");
    assert.ok(q.tip.length > 5, "Tip harus terisi");
  }
});

test("Level 2 (Nominal) menghasilkan nominal bulat rupiah dan kg tanpa desimal liar", () => {
  for (let i = 0; i < 50; i++) {
    const q = generateLevel2NominalQuestion();
    assert.ok(q.prompt.length > 10);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correctAnswer));
    assert.ok(!q.correctAnswer.includes("NaN"), "Tidak boleh menghasilkan NaN");
  }
});

test("Level 3 (Kasus Kompleks) menghasilkan variasi pola PDF dengan 4 opsi unik", () => {
  for (let i = 0; i < 60; i++) {
    const q = generateLevel3ComplexQuestion();
    assert.ok(q.prompt.length > 20);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correctAnswer));
    assert.ok(!q.correctAnswer.includes("NaN"));
    assert.ok(q.tip.includes("Langkah") || q.tip.includes("CUKUP") || q.tip.includes("Bunga") || q.tip.includes("Promo") || q.tip.includes("Tara") || q.tip.includes("Pajak") || q.tip.includes("Kuantitas"));
  }
});

test("generateAritmatikaSet menghasilkan jumlah soal yang tepat untuk level apapun", () => {
  const setL1 = generateAritmatikaSet(1, 5);
  const setL2 = generateAritmatikaSet(2, 10);
  const setL3 = generateAritmatikaSet(3, 20);
  const setAll = generateAritmatikaSet("all", 15);

  assert.equal(setL1.length, 5);
  assert.equal(setL2.length, 10);
  assert.equal(setL3.length, 20);
  assert.equal(setAll.length, 15);
});

