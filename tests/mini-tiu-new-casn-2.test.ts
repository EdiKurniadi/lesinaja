import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getPackage, getPackageForReview, getQuestion } from "../lib/content";
import { getPackageAccessCode, validatePackageAccessCode } from "../lib/access-codes";
import { extractQuestionImageUrls } from "../lib/asset-preload";
import { scoreAttempt } from "../lib/scoring";
import { MINI_TIU_9_QUESTIONS } from "../lib/mini-tiu-9-content";

const packageId = "mini-tiu-new-casn-paket-2";

test("New TIU CASN Paket 2 memuat 35 soal final selama 30 menit dan skor maksimum 175", () => {
  const pkg = getPackage(packageId)!;
  assert.ok(pkg);
  assert.equal(pkg.title, "Mini Try Out New TIU CASN Paket 2");
  assert.equal(pkg.kind, "mini");
  assert.equal(pkg.durationMinutes, 30);
  assert.equal(pkg.questions.length, 35);
  assert.ok(pkg.questions.every((q) => q.category === "TIU" && getQuestion(q.id) === q));
  assert.match(pkg.questions[10].prompt, /24 × 26/);
  assert.match(pkg.questions[10].prompt, /25 × 25/);
  assert.equal(pkg.questions[11].prompt, "Pasangan perkalian yang memiliki nilai sama adalah ...");
  assert.equal(pkg.questions[11].choices.find((c) => c.score === 5)!.label, "64 × 15 dan 48 × 20");
  const answers = Object.fromEntries(pkg.questions.map((q) => [q.id, q.choices.find((c) => c.score === 5)!.id]));
  const keys = pkg.questions.reduce<Record<string, number>>((counts, q) => {
    const key = answers[q.id];
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
  assert.deepEqual(keys, { a: 7, b: 7, c: 7, d: 7, e: 7 });
  const context = { id: "mini-tiu-2-final", packageId, startedAt: 0, completedAt: 1000 };
  const full = scoreAttempt(pkg.questions, answers, context);
  assert.equal(full.totalScore, 175);
  assert.equal(full.passed, true);
  const target = scoreAttempt(pkg.questions, Object.fromEntries(Object.entries(answers).slice(0, 16)), context);
  assert.equal(target.totalScore, 80);
  assert.equal(target.passed, true);
  const empty = scoreAttempt(pkg.questions, {}, context);
  assert.equal(empty.totalScore, 0);
  assert.equal(empty.passed, false);
});

test("Paket 2 baru memiliki kode akses sendiri dan tidak menimpa riwayat paket lama", () => {
  assert.equal(getPackageAccessCode(packageId), "MTTIU2NIPSQUAD");
  assert.equal(validatePackageAccessCode(packageId, "  mttiu2nipsquad  "), true);
  assert.equal(validatePackageAccessCode(packageId, "MTTIUNIPSQUAD"), false);
  const retired = getPackageForReview("mini-tiu-new-casn-2")!;
  assert.equal(getPackage("mini-tiu-new-casn-2"), undefined);
  assert.equal(retired.questions, MINI_TIU_9_QUESTIONS);
  assert.notEqual(retired.questions[0].id, getPackage(packageId)!.questions[0].id);
});

test("29 SVG Paket 2 tersedia dengan ukuran intrinsik untuk pilihan jawaban", () => {
  const urls = extractQuestionImageUrls(getPackage(packageId)!.questions);
  assert.equal(urls.length, 29);
  for (const url of urls) {
    assert.ok(url.startsWith("/tryout/mini-tiu-new-casn-2/"));
    const svg = readFileSync(`public${url}`, "utf8");
    assert.match(svg, /<svg[^>]*width="\d+"[^>]*height="\d+"/);
  }
});
