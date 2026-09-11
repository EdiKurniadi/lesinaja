"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DRILL_QUESTIONS } from "@/lib/content";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { useLearningState } from "@/hooks/use-learning-state";

const labels = { TWK: "Wawasan kebangsaan", TIU: "Intelegensia umum", TKP: "Karakteristik pribadi" };

export function HomeProgress() {
  const state = useLearningState();
  return (
    <>
      {(state.activeTryout || state.activeDrill) && (
        <Link href={state.activeTryout ? "/tryout" : "/drill"} className="flex flex-wrap items-center justify-between gap-4 border-t border-black bg-black p-5 text-white sm:p-7">
          <span><span className="block font-mono text-[11px] uppercase tracking-[.14em] text-signal">Sesi aktif</span><strong className="mt-1 block text-xl">Lanjutkan {state.activeTryout ? "try out" : "drill"}</strong></span>
          <span className="flex items-center gap-2 font-bold">Buka sesi <ArrowRight /></span>
        </Link>
      )}
      <div className="grid border-t border-black md:grid-cols-3">
        {CATEGORIES.map((category, index) => {
          const questions = DRILL_QUESTIONS.filter((question) => question.category === category);
          const stats = questions.map((question) => state.drillStats[question.id]).filter(Boolean);
          const earned = stats.reduce((sum, item) => sum + item.earned, 0);
          const possible = stats.reduce((sum, item) => sum + item.possible, 0);
          const percentage = possible ? Math.round((earned / possible) * 100) : 0;
          return (
            <article key={category} className="border-b border-black p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7">
              <div className="mb-10 flex items-start justify-between"><span className="font-mono text-xs">/{String(index + 1).padStart(2, "0")}</span><span className="border border-black px-2 py-1 font-mono text-xs">TARGET {EXAM_RULES.passingScores[category]}</span></div>
              <div className="flex items-end justify-between gap-4"><div><h2 className="text-5xl font-black tracking-[-.05em]">{category}</h2><p className="mt-2 text-sm">{labels[category]}</p></div><span className="font-mono text-lg font-bold">{percentage}%</span></div>
              <div className="mt-7 h-2 w-full border border-black bg-white"><div className="h-full bg-black transition-[width] duration-500" style={{ width: `${percentage}%` }} /></div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider">{stats.length ? `${stats.length} soal dicoba` : "Belum ada aktivitas"}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}
