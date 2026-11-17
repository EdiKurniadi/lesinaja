import type { Metadata } from "next";
import { GameClient } from "@/components/game-client";

export const metadata: Metadata = {
  title: "Game TIU — Arena Numerik dan Silogisme",
  description:
    "Game latihan hitung cepat, aritmatika, perbandingan, dan silogisme interaktif untuk persiapan TIU SKD CPNS dan Kedinasan.",
};

export const dynamic = "force-static";

export default function GamePage() {
  return <GameClient />;
}

