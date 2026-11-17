import type { Metadata } from "next";
import { SilogismeGameClient } from "@/components/silogisme-game-client";

export const metadata: Metadata = {
  title: "Arena Silogisme — Game Logika TIU",
  description: "Konversi premis, susun kartu simbol, dan buktikan kesimpulan dengan operasi logika interaktif. Sepuluh latihan bertahap untuk TIU SKD.",
};
export const dynamic = "force-static";
export default function SilogismePage() { return <SilogismeGameClient />; }
