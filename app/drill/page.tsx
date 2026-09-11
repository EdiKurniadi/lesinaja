import type { Metadata } from "next";
import { DrillClient } from "@/components/drill-client";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = { title: "Drill", description: "Latihan soal SKD CPNS dengan pembahasan langsung." };
export const dynamic = "force-static";

export default function DrillPage() {
  return <PageFrame eyebrow="01 / Drill" title="LATIH. PAHAM. ULANG." description="Pilih kategori dan fokuskan latihan. Setiap jawaban langsung dinilai agar pola yang benar cepat menempel."><DrillClient /></PageFrame>;
}
