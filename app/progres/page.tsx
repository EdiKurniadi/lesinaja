import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { ProgressClient } from "@/components/progress-client";

export const metadata: Metadata = { title: "Progres", description: "Pantau performa drill, materi, dan try out SKD CPNS." };
export const dynamic = "force-static";

export default function ProgresPage() {
  return <PageFrame eyebrow="04 / Progres" title="LIHAT POLANYA." description="Temukan kategori yang sudah kuat dan bagian yang masih perlu diulang. Semua data tersimpan di perangkat ini."><ProgressClient /></PageFrame>;
}
