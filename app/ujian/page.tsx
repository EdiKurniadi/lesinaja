import type { Metadata } from "next";
import { ProctoredExamClient } from "@/components/proctored-exam-client";

export const metadata: Metadata = {
  title: "Ujian Terkunci",
  description:
    "Simulasi ujian SKD terkunci dengan pengawasan layar penuh, mode offline wajib, pengacakan soal per peserta, dan pengumpulan jawaban JSON terenkripsi.",
};
export const dynamic = "force-static";

export default function UjianPage() {
  return <ProctoredExamClient />;
}
