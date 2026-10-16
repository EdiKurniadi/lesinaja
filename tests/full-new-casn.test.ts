import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { getPackage, getPackageForReview, getQuestion, MINI_TRYOUT_PACKAGES } from "../lib/content";
import { getPackageAccessCode, validatePackageAccessCode } from "../lib/access-codes";
import { extractQuestionImageUrls } from "../lib/asset-preload";
import { choiceScore, scoreAttempt } from "../lib/scoring";
import { MINI_TIU_9_QUESTIONS } from "../lib/mini-tiu-9-content";
import { MINI_TIU_10_QUESTIONS } from "../lib/mini-tiu-10-content";

for (const [number, tiu] of [[1, MINI_TIU_9_QUESTIONS], [2, MINI_TIU_10_QUESTIONS]] as const) {
  const packageId = `tryout-new-casn-${number}`;
  test(`try out ${number}: 110 soal berurutan TWK/TIU/TKP, 100 menit, maksimum 550`, () => {
    const pkg = getPackage(packageId)!;
    assert.ok(pkg);
    assert.equal(pkg.kind, "full");
    assert.equal(pkg.durationMinutes, 100);
    assert.equal(pkg.questions.length, 110);
    assert.deepEqual(pkg.questions.slice(0, 30).map((q) => q.category), Array(30).fill("TWK"));
    assert.deepEqual(pkg.questions.slice(30, 65), tiu);
    assert.deepEqual(pkg.questions.slice(65).map((q) => q.category), Array(45).fill("TKP"));
    const answers = Object.fromEntries(pkg.questions.map((q) => {
      assert.equal(getQuestion(q.id), q);
      assert.equal(q.choices.length, 5);
      assert.equal(new Set(q.choices.map((c) => c.label)).size, 5);
      assert.ok(q.prompt && q.explanation);
      return [q.id, q.choices.find((c) => c.score === 5)!.id];
    }));
    const context = { id: "full-test", packageId, startedAt: 0, completedAt: 1000 };
    const result = scoreAttempt(pkg.questions, answers, context);
    assert.deepEqual(Object.values(result.scores).map((s) => s.score), [150, 175, 225]);
    assert.equal(result.totalScore, 550);
    assert.equal(result.passed, true);
    const empty = scoreAttempt(pkg.questions, {}, context);
    assert.equal(empty.totalScore, 0);
    assert.equal(empty.passed, false);
    const urls = extractQuestionImageUrls(pkg.questions);
    assert.equal(urls.length, 29);
    for (const url of urls) assert.ok(existsSync(`public${url}`), url);
    assert.equal(getPackageAccessCode(packageId), `TOCASN${number}NIPSQUAD`);
    assert.equal(validatePackageAccessCode(packageId, `  tocasn${number}nipsquad  `), true);
    assert.equal(validatePackageAccessCode(packageId, `TOCASN${3 - number}NIPSQUAD`), false);
  });
}

test("mini TIU 2/3 tidak dapat dimulai lagi; riwayat dan sesi lama tetap dapat dibaca", () => {
  for (const number of [2, 3]) {
    const id = `mini-tiu-new-casn-${number}`;
    assert.equal(MINI_TRYOUT_PACKAGES.some((pkg) => pkg.id === id), false);
    assert.equal(getPackage(id), undefined);
    assert.equal(getPackageAccessCode(id), undefined);
    const legacy = getPackageForReview(id)!;
    assert.equal(legacy.kind, "mini");
    assert.equal(legacy.questions.length, 35);
    assert.equal(legacy.durationMinutes, 30);
    assert.ok(legacy.questions.every((q) => getQuestion(q.id) === q));
  }
});

test("Paket A dan B tidak ditawarkan lagi; kedua try out SKD tetap tersedia", () => {
  for (const id of ["paket-a", "paket-b"]) {
    assert.equal(getPackage(id), undefined);
    assert.equal(getPackageAccessCode(id), undefined);
    const legacy = getPackageForReview(id)!;
    assert.equal(legacy.kind, "full");
    assert.equal(legacy.questions.length, 110);
    assert.ok(legacy.questions.every((q) => getQuestion(q.id) === q));
  }
  assert.equal(getPackage("tryout-new-casn-1")!.title, "Try Out SKD Paket 1");
  assert.equal(getPackage("tryout-new-casn-2")!.title, "Try Out SKD Paket 2");
});

test("koreksi TWK duplikat dan bobot TKP mengikuti hasil audit PDF", () => {
  const twk30 = getQuestion("new-casn-1-twk-30")!;
  assert.equal(twk30.choices.find((c) => c.score === 5)!.id, "d");
  assert.equal(twk30.choices[0].label, "efektifisasi");
  assert.equal(twk30.choices[3].label, "efektivitas");
  const tkp19 = getQuestion("new-casn-2-tkp-19")!;
  assert.equal(choiceScore(tkp19, "c"), 5);
  assert.equal(choiceScore(tkp19, "d"), 4);
  const tkp26 = getQuestion("new-casn-2-tkp-26")!;
  assert.deepEqual(tkp26.choices.map((c) => c.score), [3, 2, 4, 3, 5]);
  assert.equal(choiceScore(tkp26), 0);
  assert.equal(getQuestion("new-casn-1-twk-22")!.prompt.startsWith("Sebuah pemerintah daerah"), true);
  assert.ok(getQuestion("new-casn-1-twk-26")!.explanation.startsWith("Kalimat efektif"));
});

test("kunci TIU paket 3 tetap seimbang dan instruksi figural tetap ringkas", () => {
  const keys: Record<string, number> = {};
  for (const q of MINI_TIU_10_QUESTIONS) {
    const correct = q.choices.find((c) => c.score === 5)!;
    keys[correct.id] = (keys[correct.id] ?? 0) + 1;
  }
  assert.deepEqual(keys, { a: 7, b: 7, c: 7, d: 7, e: 7 });
  for (const q of MINI_TIU_10_QUESTIONS.slice(30)) {
    const instruction = q.prompt.split("\n\n")[0];
    assert.ok(instruction.length < 100);
    assert.equal(instruction.split(/[.!?]/).filter(Boolean).length, 1);
  }
});
