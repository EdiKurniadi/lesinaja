import test from "node:test";
import assert from "node:assert/strict";
import {
  generateAritmatikaSet,
  generateLevel1ConceptQuestion,
  generateLevel2NominalQuestion,
  generateLevel3ComplexQuestion,
  getAritmatikaSurvivalTimeLimitSec,
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

test("Level 2 (Nominal) menghasilkan variasi target kondisi awal, delta perubahan, dan akhir dengan angka rapi", () => {
  let hasInitialTarget = false;
  let hasDeltaTarget = false;
  let hasFinalTarget = false;

  for (let i = 0; i < 100; i++) {
    const q = generateLevel2NominalQuestion();
    assert.ok(q.prompt.length > 10);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correctAnswer));
    assert.ok(!q.correctAnswer.includes("NaN"), "Tidak boleh menghasilkan NaN");

    if (q.prompt.includes("mula-mula") || q.prompt.includes("sebelum") || q.prompt.includes("pertama kali")) {
      hasInitialTarget = true;
    }
    if (q.prompt.includes("besar potongan") || q.prompt.includes("rupiah keuntungan") || q.prompt.includes("rupiah kerugian") || q.prompt.includes("berat tara") || q.prompt.includes("nominal pajak") || q.prompt.includes("bunga yang diperoleh")) {
      hasDeltaTarget = true;
    }
    if (q.prompt.includes("harus dibayar") || q.prompt.includes("harga jual") || q.prompt.includes("berat bersih") || q.prompt.includes("total rupiah")) {
      hasFinalTarget = true;
    }
  }

  assert.ok(hasInitialTarget, "Level 2 harus memuat pertanyaan nilai kondisi awal (100%)");
  assert.ok(hasDeltaTarget, "Level 2 harus memuat pertanyaan selisih/delta perubahan");
  assert.ok(hasFinalTarget, "Level 2 harus memuat pertanyaan kondisi akhir");
});

test("Level 3 (Kasus Kompleks) menghasilkan pertanyaan langsung tanpa format P vs Q dan kecukupan data", () => {
  for (let i = 0; i < 100; i++) {
    const q = generateLevel3ComplexQuestion();
    assert.ok(q.prompt.length > 20);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.correctAnswer));
    assert.ok(!q.correctAnswer.includes("NaN"));

    // Pastikan format P vs Q dan kecukupan data tidak lagi digunakan
    assert.ok(!q.prompt.includes("Kuantitas P"), "Tidak boleh ada soal Kuantitas P vs Q");
    assert.ok(!q.prompt.includes("Kuantitas Q"), "Tidak boleh ada soal Kuantitas P vs Q");
    assert.ok(!q.prompt.includes("Pernyataan (1)"), "Tidak boleh ada soal Kecukupan Data");
    assert.ok(!q.correctAnswer.includes("SAJA cukup"), "Tidak boleh ada opsi kecukupan data");

    // Tip harus informatif dan memiliki panjang memadai
    assert.ok(q.tip.length > 20, "Tip pembahasan harus detail");
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

test("getAritmatikaSurvivalTimeLimitSec memenuhi batas waktu survival tiap level", () => {
  // Level 1: 35s di awal, minimal 15s
  assert.equal(getAritmatikaSurvivalTimeLimitSec("concept", 1), 35);
  assert.equal(getAritmatikaSurvivalTimeLimitSec("concept", 50), 15);

  // Level 2: Mulai 1 menit (60 detik) dan paling cepat 10 detik
  assert.equal(getAritmatikaSurvivalTimeLimitSec("nominal", 1), 60);
  assert.ok(getAritmatikaSurvivalTimeLimitSec("nominal", 10) < 60);
  assert.equal(getAritmatikaSurvivalTimeLimitSec("nominal", 50), 10);

  // Level 3: Mulai 2 menit (120 detik) dan paling cepat 30 detik
  assert.equal(getAritmatikaSurvivalTimeLimitSec("complex", 1), 120);
  assert.ok(getAritmatikaSurvivalTimeLimitSec("complex", 15) < 120);
  assert.equal(getAritmatikaSurvivalTimeLimitSec("complex", 60), 30);
});

