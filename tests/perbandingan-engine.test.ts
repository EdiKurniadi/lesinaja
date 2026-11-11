import test from "node:test";
import assert from "node:assert/strict";
import {
  generateKonsepRasioQuestion,
  generatePerbandinganSenilaiQuestion,
  generatePerbandinganBerbalikQuestion,
  generatePerbandinganQuestion,
  generatePerbandinganSet,
  getPerbandinganSurvivalTimeLimitSec,
  gcd,
  lcm,
  formatNumber,
  formatRupiah,
} from "../lib/perbandingan-engine";

test("utilitas matematika gcd, lcm, dan formatting perbandingan", () => {
  assert.equal(gcd(12, 18), 6);
  assert.equal(lcm(4, 6), 12);
  assert.equal(formatNumber(1500), "1.500");
  assert.equal(formatRupiah(850000), "Rp 850.000");
});

test("Konsep Rasio (2 & 3 Objek) menghasilkan opsi unik dan mencakup info jumlah serta selisih", () => {
  let hasTrioTotal = false;
  let hasTrioPairSum = false;
  let hasTrioDiff = false;
  let hasDuo = false;

  for (let i = 0; i < 150; i++) {
    const q = generateKonsepRasioQuestion();
    assert.ok(q.prompt.length > 20);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4, "Opsi harus 4 unik");
    assert.ok(q.options.includes(q.correctAnswer), "Kunci harus ada di opsi");
    assert.ok(!q.correctAnswer.includes("NaN"), "Tidak boleh menghasilkan NaN");

    if (q.subtext?.includes("2 Objek")) hasDuo = true;
    if (q.subtext?.includes("3 Objek")) {
      if (q.tip.includes("Jumlah total") || q.tip.includes("Jumlah rasio")) hasTrioTotal = true;
      if (q.prompt.includes("milik") && q.prompt.includes("dan")) {
        if (q.prompt.includes("jumlah")) hasTrioPairSum = true;
        if (q.prompt.includes("selisih")) hasTrioDiff = true;
      }
    }
  }

  assert.ok(hasDuo, "Harus memuat variasi 2 objek");
  assert.ok(hasTrioTotal, "Harus memuat variasi 3 objek info jumlah total");
  assert.ok(hasTrioPairSum, "Harus memuat variasi 3 objek info jumlah 2 di antaranya");
  assert.ok(hasTrioDiff, "Harus memuat variasi 3 objek info selisih 2 di antaranya");
});

test("Perbandingan Senilai menghasilkan kalkulasi proporsional bulat rapi", () => {
  for (let i = 0; i < 50; i++) {
    const q = generatePerbandinganSenilaiQuestion();
    assert.ok(q.prompt.length > 20);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correctAnswer));
    assert.ok(!q.correctAnswer.includes("NaN"));
    assert.ok(q.tip.includes("Perbandingan Senilai"));
  }
});

test("Perbandingan Berbalik Nilai menghasilkan kalkulasi invers bulat rapi", () => {
  for (let i = 0; i < 50; i++) {
    const q = generatePerbandinganBerbalikQuestion();
    assert.ok(q.prompt.length > 20);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correctAnswer));
    assert.ok(!q.correctAnswer.includes("NaN"));
    assert.ok(q.tip.includes("Perbandingan Berbalik Nilai"));
  }
});

test("generatePerbandinganSet dan generatePerbandinganQuestion menghasilkan set soal sesuai topik yang dipilih", () => {
  const qSingle = generatePerbandinganQuestion("all");
  assert.ok(qSingle.prompt.length > 20);
  assert.equal(qSingle.options.length, 4);

  const setKonsep = generatePerbandinganSet("konsep", 5);
  const setSenilai = generatePerbandinganSet("senilai", 5);
  const setBerbalik = generatePerbandinganSet("berbalik", 5);
  const setAll = generatePerbandinganSet("all", 10);

  assert.equal(setKonsep.length, 5);
  assert.equal(setSenilai.length, 5);
  assert.equal(setBerbalik.length, 5);
  assert.equal(setAll.length, 10);

  assert.ok(setKonsep.every((q) => q.kind === "concept"));
  assert.ok(setSenilai.every((q) => q.kind === "senilai"));
  assert.ok(setBerbalik.every((q) => q.kind === "berbalik"));
});

test("getPerbandinganSurvivalTimeLimitSec memenuhi batas waktu survival", () => {
  assert.equal(getPerbandinganSurvivalTimeLimitSec(1), 45);
  assert.ok(getPerbandinganSurvivalTimeLimitSec(10) < 45);
  assert.equal(getPerbandinganSurvivalTimeLimitSec(50), 10);
});
