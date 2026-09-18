import test from "node:test";
import assert from "node:assert/strict";
import { DRILL_PACKAGES, EXAM_PACKAGES, MINI_TRYOUT_PACKAGES, getDrillPackage, getQuestion, validateContent } from "../lib/content";
import { EXAM_RULES } from "../lib/exam-rules";
import { scoreAttempt, updateDrillStat } from "../lib/scoring";

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

test("topik drill lama memiliki dua paket sementara delapan topik khusus memiliki lima paket", () => {
  assert.equal(DRILL_PACKAGES.length, 54);
  const groups = new Map<string, typeof DRILL_PACKAGES>();
  for (const drillPackage of DRILL_PACKAGES) {
    assert.equal(drillPackage.questions.length, 10);
    assert.ok(drillPackage.questions.every((question) => question.category === drillPackage.category && question.topic === drillPackage.topic));
    const key = `${drillPackage.category}:${drillPackage.topic}`;
    groups.set(key, [...(groups.get(key) ?? []), drillPackage]);
  }
  assert.equal(groups.size, 15);
  assert.equal(groups.get("TWK:Nasionalisme")?.length, 5);
  assert.equal(groups.get("TWK:Integritas")?.length, 5);
  assert.equal(groups.get("TWK:Bela Negara")?.length, 5);
  assert.equal(groups.get("TKP:Pelayanan Publik")?.length, 5);
  assert.equal(groups.get("TKP:Profesionalisme")?.length, 5);
  assert.equal(groups.get("TKP:Jejaring Kerja")?.length, 5);
  assert.equal(groups.get("TKP:Teknologi Informasi")?.length, 5);
  assert.equal(groups.get("TKP:Sosial Budaya")?.length, 5);
  assert.ok([...groups.entries()].every(([topic, packages]) => (
    ["TWK:Nasionalisme", "TWK:Integritas", "TWK:Bela Negara", "TKP:Pelayanan Publik", "TKP:Profesionalisme", "TKP:Jejaring Kerja", "TKP:Teknologi Informasi", "TKP:Sosial Budaya"].includes(topic)
      || packages.length === 2
  )));
  assert.equal(new Set(DRILL_PACKAGES.flatMap((item) => item.questions.map((question) => question.id))).size, 540);
});

test("lima paket Nasionalisme memuat 50 soal sumber secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TWK" && item.topic === "Nasionalisme")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "twk-nasionalisme-1",
    "twk-nasionalisme-2",
    "twk-nasionalisme-3",
    "twk-nasionalisme-4",
    "twk-nasionalisme-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `twk-nasionalisme-${String(index + 1).padStart(3, "0")}`,
  ));
  assert.ok(questions.every((question) => question.choices.length === 5));
  assert.ok(questions.every((question) => question.choices.filter((choice) => choice.score === 5).length === 1));
  assert.ok(questions.every((question) => question.choices.filter((choice) => choice.score === 0).length === 4));
  assert.ok(questions.every((question) => question.explanation.trim().length > 0));
});

test("kunci Nasionalisme yang bertentangan dengan pembahasan mengikuti koreksi semantis", () => {
  const expectedAnswers: Record<number, string> = { 4: "c", 5: "b", 23: "e" };
  for (const [number, expected] of Object.entries(expectedAnswers)) {
    const question = getQuestion(`twk-nasionalisme-${String(number).padStart(3, "0")}`);
    assert.ok(question);
    assert.equal(answerWithScore(question, 5), expected);
    assert.match(question.explanation, new RegExp(`opsi ${expected.toUpperCase()} benar`, "i"));
  }

  const nasionalismeText = DRILL_PACKAGES
    .filter((item) => item.topic === "Nasionalisme")
    .flatMap((item) => item.questions)
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.doesNotMatch(
    nasionalismeText,
    /kerjasama|pemukiman|konkrit|kondusifitas|ekstrim|mengorganisir|meminimalisir|Mencekik/,
  );
});

test("lima paket Integritas memuat 50 soal sumber secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TWK" && item.topic === "Integritas")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "twk-integritas-1",
    "twk-integritas-2",
    "twk-integritas-3",
    "twk-integritas-4",
    "twk-integritas-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `twk-integritas-${String(index + 1).padStart(3, "0")}`,
  ));
  assert.ok(questions.every((question) => question.choices.length === 5));
  assert.ok(questions.every((question) => question.choices.filter((choice) => choice.score === 5).length === 1));
  assert.ok(questions.every((question) => question.choices.filter((choice) => choice.score === 0).length === 4));
  assert.ok(questions.every((question) => question.explanation.trim().length > 0));
});

test("soal Integritas nomor 34 memakai koreksi semantis dan ejaan yang telah dirapikan", () => {
  const question = getQuestion("twk-integritas-034");
  assert.ok(question);
  assert.equal(answerWithScore(question, 5), "c");
  assert.match(question.explanation, /Opsi C benar/);
  assert.match(question.explanation, /Opsi E salah/);

  const integritasText = DRILL_PACKAGES
    .filter((item) => item.topic === "Integritas")
    .flatMap((item) => item.questions)
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.doesNotMatch(integritasText, /beresiko|obyektif|ketegangan komitmen|mengembangkankan|Seorang analisis data/);
});

test("lima paket Bela Negara memuat 50 soal sumber secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TWK" && item.topic === "Bela Negara")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "twk-bela-negara-1",
    "twk-bela-negara-2",
    "twk-bela-negara-3",
    "twk-bela-negara-4",
    "twk-bela-negara-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `twk-bela-negara-${String(index + 1).padStart(3, "0")}`,
  ));
  assert.ok(questions.every((question) => question.choices.length === 5));
  assert.ok(questions.every((question) => question.choices.filter((choice) => choice.score === 5).length === 1));
  assert.ok(questions.every((question) => question.choices.filter((choice) => choice.score === 0).length === 4));
  assert.ok(questions.every((question) => question.explanation.trim().length > 0));

  assert.equal(questions[8].prompt, questions[18].prompt);
  assert.equal(answerWithScore(questions[8], 5), "a");
  assert.equal(answerWithScore(questions[18], 5), "c");
});

test("kunci dan label pembahasan Bela Negara mengikuti koreksi semantis", () => {
  const expectedAnswers: Record<number, string> = { 9: "a", 20: "e", 28: "e", 39: "a", 42: "e", 46: "e" };
  for (const [number, expected] of Object.entries(expectedAnswers)) {
    const question = getQuestion(`twk-bela-negara-${String(number).padStart(3, "0")}`);
    assert.ok(question);
    assert.equal(answerWithScore(question, 5), expected);
  }

  assert.match(getQuestion("twk-bela-negara-020")!.explanation, /Jadi, opsi E benar/);
  assert.match(getQuestion("twk-bela-negara-028")!.explanation, /Opsi B salah karena menyerahkan/);
  assert.match(getQuestion("twk-bela-negara-039")!.explanation, /Jadi, opsi A benar/);
  assert.match(getQuestion("twk-bela-negara-046")!.explanation, /Opsi C salah karena fokus melapor/);
});

test("lima paket Pelayanan Publik memuat 50 soal sumber dan gradasi skor secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TKP" && item.topic === "Pelayanan Publik")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "tkp-pelayanan-publik-1",
    "tkp-pelayanan-publik-2",
    "tkp-pelayanan-publik-3",
    "tkp-pelayanan-publik-4",
    "tkp-pelayanan-publik-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `tkp-pelayanan-publik-${String(index + 1).padStart(3, "0")}`,
  ));

  const expectedBestChoices = "EACEDABCEDDAEDEBCDEEABCDCEBDCACDCDBDECADCBDECDBCAE".toLowerCase();
  questions.forEach((question, index) => {
    assert.equal(question.choices.length, 5);
    assert.deepEqual(question.choices.map((choice) => choice.score).sort(), [1, 2, 3, 4, 5]);
    assert.equal(answerWithScore(question, 5), expectedBestChoices[index]);
    assert.ok(question.explanation.trim().length > 0);
    question.choices.forEach((choice, choiceIndex) => {
      const label = String.fromCharCode(65 + choiceIndex);
      assert.match(question.explanation, new RegExp(`${label} \\(${choice.score}\\)`));
    });
  });

  const sourceText = questions
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.equal(sourceText.match(/…/g)?.length, 38);
  assert.doesNotMatch(sourceText, /seorang masyarakat|beberapa masyarakat|�/i);
  assert.match(sourceText, /Salah seorang orang tua siswa/);
  assert.equal(getQuestion("d3-tkp-01"), undefined);
});

test("lima paket Profesionalisme memuat 50 soal sumber dan gradasi skor secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TKP" && item.topic === "Profesionalisme")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "tkp-profesionalisme-1",
    "tkp-profesionalisme-2",
    "tkp-profesionalisme-3",
    "tkp-profesionalisme-4",
    "tkp-profesionalisme-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `tkp-profesionalisme-${String(index + 1).padStart(3, "0")}`,
  ));

  const expectedBestChoices = "ACBBCDBBCAEABBCCBCBEDDCEBBCDCDCCCCBDDCCCBBABAADEBC".toLowerCase();
  questions.forEach((question, index) => {
    assert.equal(question.choices.length, 5);
    assert.deepEqual(question.choices.map((choice) => choice.score).sort(), [1, 2, 3, 4, 5]);
    assert.equal(answerWithScore(question, 5), expectedBestChoices[index]);
    assert.ok(question.explanation.trim().length > 0);
    question.choices.forEach((choice, choiceIndex) => {
      const label = String.fromCharCode(65 + choiceIndex);
      assert.match(question.explanation, new RegExp(`${label} \\(${choice.score}\\):`));
    });
  });

  const sourceText = questions
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.doesNotMatch(sourceText, /konkrit|obyektif|\bijin\b|hirarki|�/i);
  assert.match(questions[2].explanation, /profesionalisme konstruktif/i);
  assert.match(questions[49].explanation, /D \(2\):[\s\S]+A \(1\):/);
  assert.equal(getQuestion("d3-tkp-11"), undefined);
});

test("lima paket Jejaring Kerja memuat 50 soal sumber dan gradasi skor secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TKP" && item.topic === "Jejaring Kerja")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "tkp-jejaring-kerja-1",
    "tkp-jejaring-kerja-2",
    "tkp-jejaring-kerja-3",
    "tkp-jejaring-kerja-4",
    "tkp-jejaring-kerja-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `tkp-jejaring-kerja-${String(index + 1).padStart(3, "0")}`,
  ));

  const expectedBestChoices = "AACBBCBBCBCBBBCCCCCBDBCDCDBBCEDCBAAEDCCADBCBADCCAB".toLowerCase();
  questions.forEach((question, index) => {
    assert.equal(question.choices.length, 5);
    assert.deepEqual(question.choices.map((choice) => choice.score).sort(), [1, 2, 3, 4, 5]);
    assert.equal(answerWithScore(question, 5), expectedBestChoices[index]);
    assert.ok(question.explanation.trim().length > 0);
    question.choices.forEach((choice, choiceIndex) => {
      const label = String.fromCharCode(65 + choiceIndex);
      assert.match(question.explanation, new RegExp(`${label} \\(${choice.score}\\):`));
    });
  });

  const sourceText = questions
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.doesNotMatch(sourceText, /hirarki|obyektif|\banalisa\b|batasan batasan|keharmoniskan|pembahasaan|memperpermalukan|\bmerespon\b|�|[\u200b-\u200d\ufeff]/i);
  assert.match(questions[0].prompt, /proyek\. Bagaimana/);
  assert.match(questions[20].explanation, /Opsi ini memperoleh skor 5/i);
  assert.equal(getQuestion("d3-tkp-03"), undefined);
  assert.equal(getQuestion("d3-tkp-15"), undefined);
});

test("lima paket Sosial Budaya memuat 50 soal sumber PDF dan gradasi skor secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TKP" && item.topic === "Sosial Budaya")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "tkp-sosial-budaya-1",
    "tkp-sosial-budaya-2",
    "tkp-sosial-budaya-3",
    "tkp-sosial-budaya-4",
    "tkp-sosial-budaya-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `tkp-sosial-budaya-${String(index + 1).padStart(3, "0")}`,
  ));

  const expectedBestChoices = "ABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDE".toLowerCase();
  questions.forEach((question, index) => {
    assert.equal(question.choices.length, 5);
    assert.deepEqual(question.choices.map((choice) => choice.score).sort(), [1, 2, 3, 4, 5]);
    assert.equal(answerWithScore(question, 5), expectedBestChoices[index]);
    assert.match(question.prompt, /\n\n/);
    assert.match(question.explanation, new RegExp(`Jawaban terbaik: ${expectedBestChoices[index]}`, "i"));
    question.choices.forEach((choice, choiceIndex) => {
      const label = String.fromCharCode(65 + choiceIndex);
      assert.match(question.explanation, new RegExp(`${label} \\(${choice.score}\\):`));
    });
  });

  const sourceText = questions
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.doesNotMatch(sourceText, /�|[\u200b-\u200d\ufeff]/);
  assert.match(questions[0].prompt, /Tim Anda terdiri dari pegawai yang berasal dari beberapa daerah/);
  assert.match(questions[49].prompt, /Dalam proyek akhir, anggota tim berbeda pendapat/);
  assert.equal(getQuestion("d3-tkp-07"), undefined);
  assert.equal(getQuestion("d3-tkp-08"), undefined);
});

test("lima paket Teknologi Informasi memuat 50 soal sumber PDF dan gradasi skor secara berurutan", () => {
  const packages = DRILL_PACKAGES
    .filter((item) => item.category === "TKP" && item.topic === "Teknologi Informasi")
    .sort((left, right) => left.sequence - right.sequence);
  assert.deepEqual(packages.map((item) => item.sequence), [1, 2, 3, 4, 5]);
  assert.deepEqual(packages.map((item) => item.id), [
    "tkp-teknologi-informasi-1",
    "tkp-teknologi-informasi-2",
    "tkp-teknologi-informasi-3",
    "tkp-teknologi-informasi-4",
    "tkp-teknologi-informasi-5",
  ]);

  const questions = packages.flatMap((item) => item.questions);
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map((question) => question.prompt)).size, 50);
  assert.deepEqual(questions.map((question) => question.id), Array.from(
    { length: 50 },
    (_, index) => `tkp-teknologi-informasi-${String(index + 1).padStart(3, "0")}`,
  ));

  const expectedBestChoices = "becadcebdaecbdadbeaccaedbeadcbacdbebdaecdebcaecadb";
  questions.forEach((question, index) => {
    assert.equal(question.choices.length, 5);
    assert.deepEqual(question.choices.map((choice) => choice.score).sort(), [1, 2, 3, 4, 5]);
    assert.equal(answerWithScore(question, 5), expectedBestChoices[index]);
    assert.match(question.prompt, /\n\n/);
    assert.match(question.explanation, new RegExp(`Jawaban terbaik: ${expectedBestChoices[index]}`, "i"));
    question.choices.forEach((choice, choiceIndex) => {
      const label = String.fromCharCode(65 + choiceIndex);
      assert.match(question.explanation, new RegExp(`${label} \\(${choice.score}\\):`));
    });
  });

  const sourceText = questions
    .map((item) => [item.prompt, ...item.choices.map((choice) => choice.label), item.explanation].join(" "))
    .join(" ");
  assert.doesNotMatch(sourceText, /�|[\u200b-\u200d\ufeff]/);
  assert.match(questions[0].prompt, /Sebuah unit pelayanan mulai menerapkan sistem penyimpanan digital/);
  assert.match(questions[49].prompt, /Pegawai mengolah data masyarakat/);
  assert.equal(getQuestion("d3-tkp-05"), undefined);
  assert.equal(getQuestion("d3-tkp-06"), undefined);
});

test("paket mock gabungan tidak lagi tersedia sebagai drill", () => {
  assert.equal(getDrillPackage("twk-integritas-dan-bela-negara-1"), undefined);
  assert.equal(getQuestion("d3-twk-24"), undefined);
  assert.ok(DRILL_PACKAGES.every((item) => item.topic !== "Integritas & Bela Negara"));
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

test("mengganti jawaban drill memperbarui skor tanpa menambah percobaan", () => {
  const question = DRILL_PACKAGES[0].questions[0];
  const correct = answerWithScore(question, 5)!;
  const wrong = answerWithScore(question, 0)!;
  const first = updateDrillStat(undefined, question, correct, undefined, 1000);
  const replaced = updateDrillStat(first, question, wrong, correct, 2000);

  assert.deepEqual(first, { attempts: 1, earned: 5, possible: 5, lastAnsweredAt: 1000 });
  assert.deepEqual(replaced, { attempts: 1, earned: 0, possible: 5, lastAnsweredAt: 2000 });
});

test("paket-paket mini TO TIU berdurasi 35 menit dan terdiri dari soal TIU dengan target latihan 80", () => {
  assert.equal(MINI_TRYOUT_PACKAGES.length, 2);
  for (const mini of MINI_TRYOUT_PACKAGES) {
    assert.equal(mini.durationMinutes, 35);
    assert.equal(mini.questions.length, 35);
    assert.ok(mini.questions.every((question) => question.category === "TIU"));
    assert.ok(mini.questions.every((question) => getQuestion(question.id) !== undefined));

    const answers = Object.fromEntries(mini.questions.slice(0, 16).map((question) => [question.id, answerWithScore(question, 5)!]));
    const result = scoreAttempt(mini.questions, answers, { id: `mini-target-${mini.id}`, packageId: mini.id, startedAt: 0, completedAt: 1000 });
    assert.equal(result.scores.TIU.score, 80);
    assert.equal(result.scores.TIU.maximum, 175);
    assert.equal(result.totalScore, 80);
    assert.equal(result.passed, true);
  }
});
