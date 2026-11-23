import type { Metadata } from "next";
import { ExamAdminClient } from "@/components/exam-admin-client";

export const metadata: Metadata = {
  title: "Panel Pengawas Ujian",
  description:
    "Generator kode pembuka perangkat dan pembaca nilai file jawaban terenkripsi LesinAja.",
};
export const dynamic = "force-static";

export default function UjianAdminPage() {
  return <ExamAdminClient />;
}
