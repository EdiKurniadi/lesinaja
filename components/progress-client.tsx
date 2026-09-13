"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { DRILL_QUESTIONS, getPackage } from "@/lib/content";
import { MATERIALS } from "@/lib/materials";
import { bestScore } from "@/lib/scoring";
import { useLearningState } from "@/hooks/use-learning-state";

function dateLabel(timestamp: number) {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(timestamp);
}

export function ProgressClient() {
  const state = useLearningState();
  const completedMaterials = MATERIALS.filter((material) => state.topicProgress[material.id]?.completed).length;
  const attemptedQuestions = DRILL_QUESTIONS.filter((question) => state.drillStats[question.id]);

  return (
    <section className="border-b border-black">
      <div className="grid border-b border-black md:grid-cols-3">
        <article className="border-b border-black p-5 md:border-b-0 md:border-r sm:p-7"><Target /><p className="mt-8 text-5xl font-black">{attemptedQuestions.length}</p><p className="mt-1 font-mono text-xs uppercase">Soal drill pernah dikerjakan</p></article>
        <article className="border-b border-black p-5 md:border-b-0 md:border-r sm:p-7"><Clock3 /><p className="mt-8 text-5xl font-black">{state.attempts.length}</p><p className="mt-1 font-mono text-xs uppercase">Try out selesai</p></article>
        <article className="p-5 sm:p-7"><BookOpen /><p className="mt-8 text-5xl font-black">{completedMaterials}/{MATERIALS.length}</p><p className="mt-1 font-mono text-xs uppercase">Materi ditandai selesai</p></article>
      </div>

      <div className="grid border-b border-black lg:grid-cols-[240px_1fr]">
        <div className="border-b border-black bg-brand-blue p-5 text-white lg:border-b-0 lg:border-r sm:p-7"><p className="font-mono text-xs uppercase tracking-[.14em]">Drill</p><h2 className="mt-3 text-3xl font-black">PER KATEGORI</h2></div>
        <div className="grid md:grid-cols-3">
          {CATEGORIES.map((category) => {
            const categoryQuestions = DRILL_QUESTIONS.filter((question) => question.category === category);
            const stats = categoryQuestions.map((question) => state.drillStats[question.id]).filter(Boolean);
            const earned = stats.reduce((sum, item) => sum + item.earned, 0);
            const possible = stats.reduce((sum, item) => sum + item.possible, 0);
            const accuracy = possible ? Math.round((earned / possible) * 100) : 0;
            return (
              <article key={category} className="border-b border-black p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7">
                <div className="flex justify-between"><h3 className="text-2xl font-black">{category}</h3><span className="font-mono">{accuracy}%</span></div>
                <div className="mt-8 h-3 border border-black bg-secondary"><div className="h-full bg-brand-blue" style={{ width: `${accuracy}%` }} /></div>
                <p className="mt-2 text-xs">{stats.length} dari {categoryQuestions.length} soal dicoba</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[.14em]">Riwayat</p><h2 className="mt-2 text-3xl font-black">TRY OUT TERAKHIR</h2></div><Button asChild className="rounded-none"><Link href="/tryout">Mulai try out <ArrowUpRight /></Link></Button></div>
        {state.attempts.length === 0 ? (
          <div className="mt-7 border border-black bg-warm-white p-8 text-center"><p className="text-xl font-bold">Belum ada hasil try out.</p><p className="mt-2">Selesaikan satu paket untuk melihat perkembanganmu.</p></div>
        ) : (
          <div className="mt-7 overflow-x-auto border border-black bg-warm-white">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead><tr className="bg-brand-blue text-white"><th className="p-4">Paket</th><th className="p-4">Tanggal</th>{CATEGORIES.map((category) => <th key={category} className="p-4">{category}</th>)}<th className="p-4">Total</th><th className="p-4">Status</th></tr></thead>
              <tbody>{state.attempts.map((attempt) => {
                const examPackage = getPackage(attempt.packageId);
                const activeCategories = new Set(examPackage?.questions.map((question) => question.category) ?? CATEGORIES);
                const maximum = examPackage?.questions.reduce((sum, question) => sum + bestScore(question), 0) ?? 550;
                const isMini = examPackage?.kind === "mini";
                return <tr key={attempt.id} className="border-t border-black"><td className="p-4 font-bold">{examPackage?.title ?? attempt.packageId}</td><td className="p-4 text-sm">{dateLabel(attempt.completedAt)}</td>{CATEGORIES.map((category) => <td key={category} className="p-4">{activeCategories.has(category) ? <span className={attempt.scores[category].score >= EXAM_RULES.passingScores[category] ? "font-bold" : "text-destructive"}>{attempt.scores[category].score}</span> : "—"}</td>)}<td className="p-4 font-black">{attempt.totalScore}/{maximum}</td><td className="p-4"><span className={`px-2 py-1 text-xs font-bold ${attempt.passed ? "bg-signal" : "border border-black"}`}>{attempt.passed ? (isMini ? "TARGET" : "MEMENUHI") : "BELUM"}</span></td></tr>;
              })}</tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
