"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { choiceScore } from "@/lib/scoring";
import type { AttemptResult, Question } from "@/lib/types";

function duration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}m ${rest}s`;
}

export function ResultView({ result, questions, onClose }: { result: AttemptResult; questions: Question[]; onClose?: () => void }) {
  return (
    <section className="border-t border-black">
      <div className={`grid gap-6 border-b border-black p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10 ${result.passed ? "bg-signal" : "bg-brand-red-soft"}`}>
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Hasil try out</p>
          <h2 className="mt-4 text-5xl font-black tracking-[-.06em] sm:text-7xl">{result.totalScore}<span className="text-2xl">/550</span></h2>
          <p className="mt-3 flex items-center gap-2 text-lg font-bold">
            {result.passed ? <CheckCircle2 /> : <XCircle />}
            {result.passed ? "Memenuhi seluruh ambang batas" : "Belum memenuhi seluruh ambang batas"}
          </p>
        </div>
        <div className="self-end font-mono text-xs uppercase leading-relaxed">
          <p>Waktu: {duration(result.durationSeconds)}</p>
          <p>Dijawab: {questions.filter((question) => result.answers[question.id]).length}/{questions.length}</p>
        </div>
      </div>

      <div className="grid border-b border-black md:grid-cols-3">
        {CATEGORIES.map((category) => {
          const score = result.scores[category];
          return (
            <article key={category} className="border-b border-black p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7">
              <div className="flex items-center justify-between"><h3 className="text-3xl font-black">{category}</h3><span>{score.passed ? "Lolos" : "Belum"}</span></div>
              <p className="mt-8 text-5xl font-black tracking-[-.05em]">{score.score}</p>
              <p className="mt-1 font-mono text-xs">Ambang {EXAM_RULES.passingScores[category]} · Maks {score.maximum}</p>
            </article>
          );
        })}
      </div>

      <div className="grid border-b border-black lg:grid-cols-[260px_1fr]">
        <div className="border-b border-black bg-black p-5 text-white lg:border-b-0 lg:border-r lg:p-7">
          <p className="font-mono text-xs uppercase tracking-[.14em]">Peta kemampuan</p>
          <h3 className="mt-4 text-3xl font-black">PER TOPIK</h3>
        </div>
        <div className="grid sm:grid-cols-2">
          {result.topicBreakdown.map((topic) => (
            <div key={`${topic.category}-${topic.topic}`} className="border-b border-black p-5 odd:sm:border-r">
              <div className="flex justify-between gap-4"><span className="font-bold">{topic.topic}</span><span className="font-mono">{topic.percentage}%</span></div>
              <div className="mt-3 h-2 border border-black"><div className="h-full bg-signal" style={{ width: `${topic.percentage}%` }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div><p className="font-mono text-xs uppercase tracking-[.14em]">Tinjau ulang</p><h3 className="mt-2 text-3xl font-black">PEMBAHASAN SOAL</h3></div>
          {onClose && <Button className="rounded-none" onClick={onClose}>Kembali ke paket</Button>}
        </div>
        <div className="grid gap-3">
          {questions.map((question, index) => {
            const selected = result.answers[question.id];
            const earned = choiceScore(question, selected);
            const selectedLabel = question.choices.find((choice) => choice.id === selected)?.label ?? "Tidak dijawab";
            const best = Math.max(...question.choices.map((choice) => choice.score));
            return (
              <details key={question.id} className="border border-black bg-warm-white">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-4 font-bold">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center border border-black ${earned === best ? "bg-signal" : "bg-brand-red-soft text-brand-red"}`}>{index + 1}</span>
                  <span className="flex-1 line-clamp-2">{question.prompt}</span><span className="font-mono text-xs">{earned}/{best}</span>
                </summary>
                <div className="border-t border-black p-4 leading-relaxed">
                  <p><strong>Jawabanmu:</strong> {selectedLabel}</p>
                  <p className="mt-2">{question.explanation}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
