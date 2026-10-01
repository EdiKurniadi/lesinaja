import test from "node:test";
import assert from "node:assert/strict";
import { extractQuestionImageUrls, preloadQuestionAssets } from "../lib/asset-preload";
import { MINI_TRYOUT_PACKAGES } from "../lib/content";
import type { Question } from "../lib/types";

test("ekstraksi URL gambar dari soal mini-tiu-new-casn menemukan seluruh aset soal dan pilihan", () => {
  const newTiuPackage = MINI_TRYOUT_PACKAGES.find((p) => p.id === "mini-tiu-new-casn");
  assert.ok(newTiuPackage, "Paket mini-tiu-new-casn harus ditemukan");

  const urls = extractQuestionImageUrls(newTiuPackage.questions);
  assert.ok(urls.length >= 25, `Minimal 25 gambar terdeteksi (ditemukan: ${urls.length})`);

  // Pastikan URL spesifik dari soal 31 s/d 35 terdeteksi
  assert.ok(urls.includes("/tryout/mini-tiu/soal-31.png"));
  assert.ok(urls.includes("/tryout/mini-tiu/soal-31-a.png"));
  assert.ok(urls.includes("/tryout/mini-tiu/soal-32-a.png"));
  assert.ok(urls.includes("/tryout/mini-tiu/soal-33.png"));
  assert.ok(urls.includes("/tryout/mini-tiu/soal-34.png"));
  assert.ok(urls.includes("/tryout/mini-tiu/soal-35.png"));
});

test("ekstraksi URL gambar menghasilkan array kosong jika soal tidak memiliki gambar", () => {
  const mockQuestions: Question[] = [
    {
      id: "q-text-only",
      category: "TIU",
      topic: "Analogi",
      prompt: "Soal teks biasa tanpa gambar apapun.",
      choices: [
        { id: "a", label: "Pilihan A", score: 0 },
        { id: "b", label: "Pilihan B", score: 5 },
      ],
      explanation: "Pembahasan teks biasa.",
    },
  ];

  const urls = extractQuestionImageUrls(mockQuestions);
  assert.deepEqual(urls, []);
});

test("preloadQuestionAssets dapat berjalan tanpa error dan menghormati timeout", async () => {
  const mockQuestions: Question[] = [
    {
      id: "q-1",
      category: "TIU",
      topic: "Figural",
      prompt: "![Gambar](/tryout/mini-tiu/soal-31.png)",
      choices: [{ id: "a", label: "[img]/tryout/mini-tiu/soal-31-a.png", score: 0 }],
      explanation: "Pembahasan",
    },
  ];

  // In Node environment where window/Image is undefined or mocked, preloadQuestionAssets completes cleanly
  await assert.doesNotReject(async () => {
    await preloadQuestionAssets(mockQuestions, 500);
  });
});
