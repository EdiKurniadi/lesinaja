import test from "node:test";
import assert from "node:assert/strict";
import {
  EXAM_PACKAGE_CODE_WINDOW_MS,
  buildSubmissionFilename,
  createDeviceId,
  decryptExamSubmission,
  encryptExamSubmission,
  generateEmergencyOverrideCode,
  generateLockPin,
  generateNormalUnlockCode,
  generateRotatingPackageCode,
  getExamPackageCodeRemainingMs,
  normalizeDeviceId,
  resolveExamPackageByStartCode,
  shuffleExamQuestions,
  validateExamUnlockCode,
  type ExamSubmissionPayload,
} from "../lib/exam-security";
import { UJIAN_PACKAGES, getPackage, getPackageForReview } from "../lib/content";
import { bestScore, scoreAttempt } from "../lib/scoring";

test("device ID 4 karakter berbeda menghasilkan kode pembuka & override 5 karakter yang berbeda", () => {
  const randomDev = createDeviceId();
  assert.match(randomDev, /^[A-Z0-9]{4}$/);

  const devA = "7F4A";
  const devB = "8B2D";

  const normalA = generateNormalUnlockCode(devA, "K7P2");
  const normalB = generateNormalUnlockCode(devB, "K7P2");
  assert.notEqual(normalA, normalB);
  assert.match(normalA, /^[A-Z0-9]{5}$/);
  assert.match(normalB, /^[A-Z0-9]{5}$/);

  const emergencyA = generateEmergencyOverrideCode(devA, "K7P2");
  const emergencyB = generateEmergencyOverrideCode(devB, "K7P2");
  assert.notEqual(emergencyA, emergencyB);
  assert.notEqual(normalA, emergencyA);
  assert.match(emergencyA, /^[A-Z0-9]{5}$/);

  // Normalisasi spasi atau huruf kecil menghasilkan kode identik
  assert.equal(normalizeDeviceId(" 7f4a "), "7F4A");
  assert.equal(generateNormalUnlockCode("7f4a", "k7p2"), normalA);
});

test("PIN kunci sesi 4 karakter berbeda mencegah penggunaan ulang kode pembuka lama", () => {
  const dev = "7F4A";
  const pin1 = generateLockPin();
  assert.match(pin1, /^[A-Z0-9]{4}$/);

  let pin2 = generateLockPin();
  if (pin2 === pin1) pin2 = "Z9X8";

  const code1 = generateNormalUnlockCode(dev, pin1);
  const resForPin2 = validateExamUnlockCode({
    deviceId: dev,
    lockPin: pin2,
    inputCode: code1,
    requireEmergencyOverride: false,
  });
  assert.equal(resForPin2.valid, false);
});

test("validasi kode normal vs kode override darurat sebelum dan sesudah 4 menit", () => {
  const dev = "4C8E";
  const pin = "M4N9";
  const normalCode = generateNormalUnlockCode(dev, pin);
  const emergencyCode = generateEmergencyOverrideCode(dev, pin);

  // Sebelum lewat 4 menit: kode normal maupun override diterima
  const beforeTimeoutNormal = validateExamUnlockCode({
    deviceId: dev,
    lockPin: pin,
    inputCode: normalCode,
    requireEmergencyOverride: false,
  });
  assert.equal(beforeTimeoutNormal.valid, true);
  assert.equal(beforeTimeoutNormal.mode, "normal");

  const beforeTimeoutEmergency = validateExamUnlockCode({
    deviceId: dev,
    lockPin: pin,
    inputCode: emergencyCode,
    requireEmergencyOverride: false,
  });
  assert.equal(beforeTimeoutEmergency.valid, true);
  assert.equal(beforeTimeoutEmergency.mode, "emergency");

  // Setelah lewat 2+2 menit (requireEmergencyOverride = true): kode normal DITOLAK
  const afterTimeoutNormal = validateExamUnlockCode({
    deviceId: dev,
    lockPin: pin,
    inputCode: normalCode,
    requireEmergencyOverride: true,
  });
  assert.equal(afterTimeoutNormal.valid, false);
  assert.match(afterTimeoutNormal.error ?? "", /Override Darurat/i);

  const afterTimeoutEmergency = validateExamUnlockCode({
    deviceId: dev,
    lockPin: pin,
    inputCode: emergencyCode,
    requireEmergencyOverride: true,
  });
  assert.equal(afterTimeoutEmergency.valid, true);
  assert.equal(afterTimeoutEmergency.mode, "emergency");

  // Fallback tanpa PIN (ketika pengawas hanya menginput Device ID) juga valid
  const deviceOnlyEmergency = generateEmergencyOverrideCode(dev);
  const fallbackResult = validateExamUnlockCode({
    deviceId: dev,
    lockPin: pin,
    inputCode: deviceOnlyEmergency,
    requireEmergencyOverride: true,
  });
  assert.equal(fallbackResult.valid, true);
});

test("shuffleExamQuestions mengacak soal & opsi antar siswa namun mempertahankan akurasi penilaian", () => {
  const pkg = getPackage("tryout-new-casn-1");
  assert.ok(pkg);

  const studentA1 = shuffleExamQuestions(
    pkg.questions,
    "AAAA::SEED1",
    pkg.kind
  );
  const studentA2 = shuffleExamQuestions(
    pkg.questions,
    "AAAA::SEED1",
    pkg.kind
  );
  const studentB = shuffleExamQuestions(
    pkg.questions,
    "BBBB::SEED2",
    pkg.kind
  );

  // Deterministik untuk seed yang sama
  assert.deepEqual(
    studentA1.map((q) => q.id),
    studentA2.map((q) => q.id)
  );
  assert.deepEqual(
    studentA1[0].choices.map((c) => c.id),
    studentA2[0].choices.map((c) => c.id)
  );

  // Berbeda urutan antar siswa berbeda
  assert.notDeepEqual(
    studentA1.map((q) => q.id),
    studentB.map((q) => q.id)
  );

  // Untuk paket full SKD, pengacakan tetap menjaga pengelompokan TWK -> TIU -> TKP
  assert.equal(studentA1.slice(0, 30).every((q) => q.category === "TWK"), true);
  assert.equal(studentA1.slice(30, 65).every((q) => q.category === "TIU"), true);
  assert.equal(studentA1.slice(65, 110).every((q) => q.category === "TKP"), true);

  // Memilih pilihan dengan skor maksimum dari soal yang sudah diacak menghasilkan nilai maksimum 550
  const perfectAnswers: Record<string, string> = {};
  for (const q of studentA1) {
    const best = [...q.choices].sort((a, b) => b.score - a.score)[0];
    perfectAnswers[q.id] = best.id;
  }
  const scored = scoreAttempt(pkg.questions, perfectAnswers, {
    id: "test-attempt",
    packageId: pkg.id,
    startedAt: 1000,
    completedAt: 2000,
  });
  assert.equal(scored.totalScore, 550);
  assert.equal(scored.passed, true);
});

test("enkripsi dan dekripsi AES-256-GCM jawaban ujian serta deteksi modifikasi file", async () => {
  const payload: ExamSubmissionPayload = {
    formatVersion: 1,
    sessionId: "ujian-1795400000000",
    packageId: "ujian-ipa-ekosistem-tata-surya",
    packageTitle: "IPAS Kelas 10",
    participantName: "Budi Santoso",
    deviceId: "7F4A",
    shuffleSeed: "7F4A::123",
    startedAt: 1795400000000,
    completedAt: 1795401200000,
    durationSeconds: 1200,
    finishTrigger: "manual",
    answers: { "ujian-ipa-01": "d", "ujian-ipa-02": "e" },
    flagged: ["ujian-ipa-02"],
    questionOrder: ["ujian-ipa-01", "ujian-ipa-02"],
    alarmTriggeredDuringExam: false,
  };

  const envelope = await encryptExamSubmission(payload);
  assert.equal(envelope.format, "LESINAJA_ENCRYPTED_EXAM_V1");
  assert.equal(envelope.deviceId, "7F4A");
  assert.equal(JSON.stringify(envelope).includes("Budi Santoso"), false);

  const decrypted = await decryptExamSubmission(JSON.stringify(envelope));
  assert.deepEqual(decrypted, payload);

  // Ubah satu karakter pada ciphertext -> wajib gagal didekripsi
  const tamperedCipher =
    (envelope.ciphertext[0] === "A" ? "B" : "A") + envelope.ciphertext.slice(1);
  await assert.rejects(
    () =>
      decryptExamSubmission({
        ...envelope,
        ciphertext: tamperedCipher,
      }),
    /rusak|tidak sah|dimodifikasi/i
  );
});

test("buildSubmissionFilename menghasilkan format nama file sesuai spesifikasi", () => {
  const name = buildSubmissionFilename(
    "Andi Pratama Putra",
    "ujian-ipa-ekosistem-tata-surya",
    "7F4A"
  );
  assert.equal(
    name,
    "JAWABAN_ANDI-PRATAMA-PUTRA_UJIAN-IPA-EKOSISTEM-TATA-SURYA_7F4A.lesinaja.json"
  );
});

test("paket ujian IPAS Kelas 10 memakai kode mulai rotasi 5 menit tanpa pilihan paket", () => {
  assert.equal(UJIAN_PACKAGES.length, 1);
  const pkgId = "ujian-ipa-ekosistem-tata-surya";
  const pkg = getPackage(pkgId);
  const reviewPkg = getPackageForReview(pkgId);
  assert.ok(pkg);
  assert.ok(reviewPkg);
  assert.equal(pkg.title, "IPAS Kelas 10");
  assert.equal(pkg.questions.length, 40);
  assert.equal(pkg.durationMinutes, 60);

  // Setiap soal memiliki tepat 5 pilihan dan 1 kunci jawaban bernilai 5
  for (const q of pkg.questions) {
    assert.equal(q.choices.length, 5, `Soal ${q.id} tidak punya 5 pilihan`);
    const scores = q.choices.map((c) => c.score);
    assert.equal(scores.filter((s) => s === 5).length, 1, `Soal ${q.id} tidak punya 1 kunci benar`);
    assert.equal(scores.filter((s) => s === 0).length, 4, `Soal ${q.id} pengecoh harus 0`);
  }

  // Kode rotasi otomatis tiap 5 menit menyelesaikan paket IPAS Kelas 10 tanpa pilihan paket manual
  const t0 = 1_795_400_000_000;
  const tSameSlot = t0 + 10_000;
  const tNextSlot = t0 + EXAM_PACKAGE_CODE_WINDOW_MS;

  const code0 = generateRotatingPackageCode(pkgId, t0);
  const codeSame = generateRotatingPackageCode(pkgId, tSameSlot);
  const codeNext = generateRotatingPackageCode(pkgId, tNextSlot);
  assert.match(code0, /^[A-Z0-9]{6}$/);
  assert.equal(code0, codeSame);
  assert.notEqual(code0, codeNext);
  assert.ok(getExamPackageCodeRemainingMs(t0) <= EXAM_PACKAGE_CODE_WINDOW_MS);

  const resolved = resolveExamPackageByStartCode(UJIAN_PACKAGES, code0.toLowerCase(), t0);
  assert.equal(resolved?.id, pkgId);
  assert.equal(resolveExamPackageByStartCode(UJIAN_PACKAGES, code0, tNextSlot), undefined);
  assert.equal(resolveExamPackageByStartCode(UJIAN_PACKAGES, "SALAH", t0), undefined);

  // Acak dan hitung skor sempurna -> 40 benar, nilai total 200 (skala 100 = 100)
  const shuffled = shuffleExamQuestions(pkg.questions, "1234::IPA", pkg.kind);
  const allCorrect: Record<string, string> = {};
  for (const q of shuffled) {
    const max = bestScore(q);
    allCorrect[q.id] = q.choices.find((c) => c.score === max)!.id;
  }
  const res = scoreAttempt(pkg.questions, allCorrect, {
    id: "ipa-1",
    packageId: pkgId,
    startedAt: 1000,
    completedAt: 2000,
  });
  assert.equal(res.totalScore, 200);
});
