import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { TryoutClient } from "@/components/tryout-client";

export const metadata: Metadata = { title: "Try out", description: "Simulasi try out SKD CPNS 110 soal dalam 100 menit." };
export const dynamic = "force-static";

export default function TryoutPage() {
  return <PageFrame eyebrow="02 / Try out" title="UKUR KESIAPANMU." description="Simulasi 110 soal dalam 100 menit. Pembahasan dan peta kemampuan muncul setelah ujian dikumpulkan."><TryoutClient /></PageFrame>;
}
