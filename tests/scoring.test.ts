import test from "node:test";
import assert from "node:assert/strict";
import { DRILL_PACKAGES, EXAM_PACKAGES, validateContent } from "../lib/content";
import { EXAM_RULES } from "../lib/exam-rules";
import { scoreAttempt } from "../lib/scoring";

function answerWithScore(question: (typeof EXAM_PACKAGES)[number]["questions"][number], score: number) {
  return question.choices.find((choice) => choice.score === score)?.id;
}

test("seluruh bank soal memenuhi kontrak konten", () => {
  assert.deepEqual(validateContent(), []);
  for (const examPackage of EXAM_PACKAGES) {
    assert.equal(examPackage.questions.length, 110);
    assert.equal(examPackage.questions.filter((question) => question.category === "TWK").length, 30);
    assert.equal(examPackage.questions.filter((question) => question.category === "TIU").length, 35);
    assert.equal(examPackage.questions.filter((question) => question.category === "TKP").length, 45);
  }
});

test("setiap topik drill memiliki dua paket tetap berisi 10 soal", () => {
  assert.equal(DRILL_PACKAGES.length, 24);
  const groups = new Map<string, typeof DRILL_PACKAGES>();
  for (const drillPackage of DRILL_PACKAGES) {
    assert.equal(drillPackage.questions.length, 10);
    assert.ok(drillPackage.questions.every((question) => question.category === drillPackage.category && question.topic === drillPackage.topic));
    const key = `${drillPackage.category}:${drillPackage.topic}`;
    groups.set(key, [...(groups.get(key) ?? []), drillPackage]);
  }
  assert.equal(groups.size, 12);
  assert.ok([...groups.values()].every((packages) => packages.length === 2));
  assert.equal(new Set(DRILL_PACKAGES.flatMap((item) => item.questions.map((question) => question.id))).size, 240);
});

test("jawaban sempurna menghasilkan skor maksimum 550", () => {
  const questions = EXAM_PACKAGES[0].questions;
  const answers = Object.fromEntries(questions.map((question) => [question.id, answerWithScore(question, 5)!]));
  const result = scoreAttempt(questions, answers, { id: "perfect", packageId: "paket-a", startedAt: 0, completedAt: 1000 });
  assert.equal(result.totalScore, 550);
  assert.equal(result.scores.TWK.score, EXAM_RULES.maximumScores.TWK);
  assert.equal(result.scores.TIU.score, EXAM_RULES.maximumScores.TIU);
  assert.equal(result.scores.TKP.score, EXAM_RULES.maximumScores.TKP);
  assert.equal(result.passed, true);
});

test("ambang 65/80/166 dinilai lulus dan satu poin di bawahnya tidak", () => {
  const questions = EXAM_PACKAGES[0].questions;
  const answers: Record<string, string> = {};
  const twk = questions.filter((question) => question.category === "TWK");
  const tiu = questions.filter((question) => question.category === "TIU");
  const tkp = questions.filter((question) => question.category === "TKP");
  twk.slice(0, 13).forEach((question) => { answers[question.id] = answerWithScore(question, 5)!; });
  tiu.slice(0, 16).forEach((question) => { answers[question.id] = answerWithScore(question, 5)!; });
  tkp.slice(0, 31).forEach((question) => { answers[question.id] = answerWithScore(question, 4)!; });
  tkp.slice(31).forEach((question) => { answers[question.id] = answerWithScore(question, 3)!; });
  const threshold = scoreAttempt(questions, answers, { id: "threshold", packageId: "paket-a", startedAt: 0, completedAt: 1000 });
  assert.deepEqual([threshold.scores.TWK.score, threshold.scores.TIU.score, threshold.scores.TKP.score], [65, 80, 166]);
  assert.equal(threshold.passed, true);

  answers[tkp[0].id] = answerWithScore(tkp[0], 3)!;
  const below = scoreAttempt(questions, answers, { id: "below", packageId: "paket-a", startedAt: 0, completedAt: 1000 });
  assert.equal(below.scores.TKP.score, 165);
  assert.equal(below.passed, false);
});

test("soal kosong bernilai nol", () => {
  const result = scoreAttempt(EXAM_PACKAGES[0].questions, {}, { id: "empty", packageId: "paket-a", startedAt: 0, completedAt: 1000 });
  assert.equal(result.totalScore, 0);
  assert.equal(result.passed, false);
});
