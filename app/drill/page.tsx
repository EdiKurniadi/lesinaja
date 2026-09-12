import type { Metadata } from "next";
import { DrillClient } from "@/components/drill-client";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = { title: "Drill", description: "Latihan soal SKD CPNS berurutan dengan pembahasan setelah paket selesai." };
export const dynamic = "force-static";

export default function DrillPage() {
  return <PageFrame eyebrow="01 / Drill" title="LATIH. PAHAM. ULANG." description="Pilih topik dan tuntaskan 10 soal secara berurutan. Nilai dan pembahasan lengkap muncul setelah paket selesai."><DrillClient /></PageFrame>;
}
