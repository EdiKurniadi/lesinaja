import type { Metadata } from "next";
import { GameClient } from "@/components/game-client";

export const metadata: Metadata = {
  title: "Arena Hitung Cepat — Game Pecahan, Desimal & Persen",
  description:
    "Game latihan fondasi mental math dan refleks pecahan istimewa untuk persiapan ujian TIU SKD CPNS dan Kedinasan.",
};

export const dynamic = "force-static";

export default function GamePage() {
  return <GameClient />;
}

