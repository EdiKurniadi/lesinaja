import type { ExamRules } from "./types";

export const EXAM_RULES: ExamRules = {
  reference: "SKD CPNS TA 2024 — Kepmen PANRB No. 321 Tahun 2024",
  durationMinutes: 100,
  composition: { TWK: 30, TIU: 35, TKP: 45 },
  maximumScores: { TWK: 150, TIU: 175, TKP: 225 },
  passingScores: { TWK: 65, TIU: 80, TKP: 166 },
};

export const CATEGORIES = ["TWK", "TIU", "TKP"] as const;
