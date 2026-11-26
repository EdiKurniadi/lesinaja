import test from "node:test";
import assert from "node:assert/strict";
import {
  explainMod11Number,
  explainMod9Number,
  generateHitungSisaQuestion,
  generatePasanganSetaraQuestion,
  mod11ZeroToTen,
  mod9OneToNine,
} from "../lib/sisa-bagi-engine";

test("mod9OneToNine selalu mengembalikan rentang 1 s.d. 9 (tidak pernah 0)", () => {
  assert.equal(mod9OneToNine(9), 9);
  assert.equal(mod9OneToNine(18), 9);
  assert.equal(mod9OneToNine(81), 9);
  assert.equal(mod9OneToNine(4729), 4);
  assert.equal(mod9OneToNine(67 * 84), mod9OneToNine(mod9OneToNine(67) * mod9OneToNine(84)));

  for (let n = 1; n <= 500; n++) {
    const r = mod9OneToNine(n);
    assert.ok(r >= 1 && r <= 9, `Hasil mod9(${n}) = ${r} di luar 1..9`);
  }

  const exp = explainMod9Number(4729);
  assert.equal(exp.value, 4);
});

test("mod11ZeroToTen selalu mengembalikan rentang 0 s.d. 10 dengan aturan selisih bergantian", () => {
  assert.equal(mod11ZeroToTen(11), 0);
  assert.equal(mod11ZeroToTen(8316), 0);
  assert.equal(mod11ZeroToTen(625), 9);
  assert.equal(mod11ZeroToTen(10), 10);
  assert.equal(mod11ZeroToTen(4729 * 8316), mod11ZeroToTen(mod11ZeroToTen(4729) * mod11ZeroToTen(8316)));

  for (let n = 0; n <= 500; n++) {
    const r = mod11ZeroToTen(n);
    assert.ok(r >= 0 && r <= 10, `Hasil mod11(${n}) = ${r} di luar 0..10`);
  }

  const exp = explainMod11Number(625);
  assert.equal(exp.value, 9);
});

test("generateHitungSisaQuestion menghasilkan nilai akurat 1..9 untuk mod9 dan 0..10 untuk mod11 di semua level digit", () => {
  for (const level of ["puluhan", "ratusan", "ribuan"] as const) {
    for (let i = 0; i < 30; i++) {
      const q9 = generateHitungSisaQuestion(9, level);
      assert.ok(q9.a && q9.b);
      const ans9 = Number(q9.correctAnswer);
      assert.ok(ans9 >= 1 && ans9 <= 9);
      assert.equal(ans9, mod9OneToNine(q9.a * q9.b));
      assert.equal(q9.options.length, 5);
      assert.equal(new Set(q9.options).size, 5);
      assert.equal(q9.options.includes(q9.correctAnswer), true);

      const q11 = generateHitungSisaQuestion(11, level);
      assert.ok(q11.a && q11.b);
      const ans11 = Number(q11.correctAnswer);
      assert.ok(ans11 >= 0 && ans11 <= 10);
      assert.equal(ans11, mod11ZeroToTen(q11.a * q11.b));
      assert.equal(q11.options.length, 5);
      assert.equal(new Set(q11.options).size, 5);
      assert.equal(q11.options.includes(q11.correctAnswer), true);
    }
  }
});

test("generatePasanganSetaraQuestion memiliki 5 opsi, 1 jawaban setara, 1-2 distraktor digit terakhir, dan sisanya uji mod 9 / 11", () => {
  for (const level of ["puluhan", "ratusan", "ribuan"] as const) {
    for (const filter of ["mod9", "mod11", "mixed"] as const) {
      for (let i = 0; i < 20; i++) {
        const q = generatePasanganSetaraQuestion(filter, level);
        assert.equal(q.options.length, 5, "Harus tepat 5 opsi A-E");
        assert.equal(new Set(q.options).size, 5, "Semua 5 opsi harus unik");
        assert.ok(q.pairAnalyses && q.pairAnalyses.length === 5);

        const correctItems = q.pairAnalyses.filter((p) => p.a * p.b === p.c * p.d);
        assert.equal(correctItems.length, 1, "Harus tepat 1 pasangan perkalian yang benar-benar setara");
        assert.equal(correctItems[0].label, q.correctAnswer);
        assert.notEqual(correctItems[0].a, correctItems[0].c);
        assert.notEqual(correctItems[0].a, correctItems[0].d);

        const distractors = q.pairAnalyses.filter((p) => p.a * p.b !== p.c * p.d);
        assert.equal(distractors.length, 4);

        const diffLastDigit = distractors.filter(
          (p) => p.lastDigitLeft !== p.lastDigitRight
        );
        const sameLastDigit = distractors.filter(
          (p) => p.lastDigitLeft === p.lastDigitRight
        );

        assert.ok(
          diffLastDigit.length >= 1 && diffLastDigit.length <= 2,
          `Jumlah distraktor digit terakhir harus 1 atau 2 (dapat: ${diffLastDigit.length}, level=${level}, filter=${filter})`
        );
        assert.equal(sameLastDigit.length, 4 - diffLastDigit.length);

        for (const d of sameLastDigit) {
          if (filter === "mod9") {
            assert.notEqual(d.mod9Left, d.mod9Right);
          } else if (filter === "mod11") {
            assert.notEqual(d.mod11Left, d.mod11Right);
          } else {
            assert.ok(
              d.mod9Left !== d.mod9Right || d.mod11Left !== d.mod11Right,
              "Distraktor ekor sama wajib gugur di mod9 atau mod11"
            );
          }
        }

        if (filter === "mixed") {
          const hotsMod11Only = sameLastDigit.filter(
            (d) => d.mod9Left === d.mod9Right && d.mod11Left !== d.mod11Right
          );
          assert.ok(
            hotsMod11Only.length >= 1,
            `Mode campuran wajib punya minimal 1 distraktor HOTS yang lolos ekor & mod9 lalu gugur di mod11 (${level})`
          );
        }
      }
    }
  }
});
