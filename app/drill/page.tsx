import type { Metadata } from "next";
import { DrillClient } from "@/components/drill-client";

export const metadata: Metadata = { title: "Drill", description: "Latihan soal SKD CPNS berurutan dengan pembahasan setelah paket selesai." };
export const dynamic = "force-static";

export default function DrillPage() {
  return <DrillClient />;
}
