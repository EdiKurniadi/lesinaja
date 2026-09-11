import type { Metadata } from "next";
import { MaterialsClient } from "@/components/materials-client";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = { title: "Materi", description: "Ringkasan materi inti TWK, TIU, dan TKP untuk SKD CPNS." };
export const dynamic = "force-static";

export default function MateriPage() {
  return <PageFrame eyebrow="03 / Materi" title="BACA YANG PENTING." description="Dua belas ringkasan bertopik untuk menguatkan konsep sebelum kamu masuk ke sesi latihan."><MaterialsClient /></PageFrame>;
}
