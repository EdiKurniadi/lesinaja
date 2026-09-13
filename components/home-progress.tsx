"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLearningState } from "@/hooks/use-learning-state";

export function HomeProgress() {
  const state = useLearningState();
  if (!state.activeTryout && !state.activeDrill) return null;

  return (
    <Link href={state.activeTryout ? "/tryout" : "/drill"} className="flex flex-wrap items-center justify-between gap-4 border-t border-black bg-brand-blue p-5 text-white transition-colors hover:bg-brand-blue-hover sm:p-7">
      <span><span className="block font-mono text-[11px] uppercase tracking-[.14em] text-signal">Sesi aktif</span><strong className="mt-1 block text-xl">Lanjutkan {state.activeTryout ? "try out" : "drill"}</strong></span>
      <span className="flex items-center gap-2 font-bold">Buka sesi <ArrowRight /></span>
    </Link>
  );
}
