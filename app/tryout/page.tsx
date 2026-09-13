import type { Metadata } from "next";
import { TryoutClient } from "@/components/tryout-client";

export const metadata: Metadata = {
  title: "Try out",
  description: "Simulasi try out SKD CPNS 110 soal dalam 100 menit.",
};
export const dynamic = "force-static";

export default function TryoutPage() {
  return <TryoutClient />;
}
