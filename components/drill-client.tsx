"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { DRILL_PACKAGES, categoryTopics, getDrillPackage, getQuestion } from "@/lib/content";
import { bestScore, choiceScore, updateDrillStat } from "@/lib/scoring";
import { clearSessionOpen, markSessionOpen, shouldOpenSession } from "@/lib/session-navigation";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, Category, DrillPackage, Question } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { ExamShell, useExamKeyboard } from "./exam-shell";
import { QuestionCard } from "./question-card";

type DrillSummary = {
  earned: number;
  possible: number;
  total: number;
  packageTitle: string;
  questions: Question[];
  answers: Record<string, string>;
};

function currentTime() {
  return Date.now();
}

export function DrillClient() {
  const state = useLearningState();
  const [category, setCategory] = useState<Category>("TWK");
  const [topic, setTopic] = useState("Pancasila");
  const [summary, setSummary] = useState<DrillSummary | null>(null);
  const [sessionOpen, setSessionOpen] = useState(false);
  const session = state.activeDrill;

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const requestedCategory = params.get("category");
      const nextCategory = ["TWK", "TIU", "TKP"].includes(requestedCategory ?? "") ? requestedCategory as Category : "TWK";
      setCategory(nextCategory);
      const requestedTopic = params.get("topic");
      const topics = categoryTopics(nextCategory);
      setTopic(requestedTopic && topics.includes(requestedTopic) ? requestedTopic : topics[0]);
      setSessionOpen(shouldOpenSession("drill"));
    }, 0);
    return () => window.clearTimeout(initialize);
  }, []);

  const questions = useMemo(() => session?.questionIds.map(getQuestion).filter((question): question is Question => Boolean(question)) ?? [], [session]);
  const current = session ? questions[session.currentIndex] : undefined;
  const answered = session ? Object.keys(session.answers).length : 0;
  const selectedId = session && current ? session.answers[current.id] : undefined;

  function start(drillPackage: DrillPackage) {
    const startedAt = currentTime();
    const next: ActiveSession = {
      id: `drill-${drillPackage.id}-${startedAt}`,
      kind: "drill",
      packageId: drillPackage.id,
      questionIds: drillPackage.questions.map((question) => question.id),
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt,
    };
    setSummary(null);
    markSessionOpen("drill");
    setSessionOpen(true);
    updateLearningState((learning) => ({ ...learning, activeDrill: next, activeTryout: null }));
  }

  function resume() {
    markSessionOpen("drill");
    setSummary(null);
    setSessionOpen(true);
  }

  function select(choiceId: string) {
    if (!session || !current) return;
    const previousChoiceId = session.answers[current.id];
    updateLearningState((learning) => {
      if (!learning.activeDrill) return learning;
      return {
        ...learning,
        activeDrill: { ...learning.activeDrill, answers: { ...learning.activeDrill.answers, [current.id]: choiceId } },
        drillStats: {
          ...learning.drillStats,
          [current.id]: updateDrillStat(learning.drillStats[current.id], current, choiceId, previousChoiceId),
        },
      };
    });
  }

  function move(index: number) {
    updateLearningState((learning) => learning.activeDrill ? { ...learning, activeDrill: { ...learning.activeDrill, currentIndex: Math.min(Math.max(index, 0), questions.length - 1) } } : learning);
  }

  function finish() {
    if (!session) return;
    const earned = questions.reduce((sum, question) => question ? sum + choiceScore(question, session.answers[question.id]) : sum, 0);
    const possible = questions.reduce((sum, question) => question ? sum + bestScore(question) : sum, 0);
    setSummary({
      earned,
      possible,
      total: questions.length,
      packageTitle: session.packageId ? getDrillPackage(session.packageId)?.title ?? "Paket drill" : "Paket drill",
      questions,
      answers: { ...session.answers },
    });
    clearSessionOpen();
    setSessionOpen(false);
    updateLearningState((learning) => ({ ...learning, activeDrill: null }));
  }

  useExamKeyboard({
    currentIndex: session?.currentIndex ?? 0,
    questions: sessionOpen ? questions : [],
    onMove: move,
    onSelect: select,
    canMoveNext: Boolean(selectedId),
    canMovePrevious: false,
  });

  if (summary && !session) {
    const percentage = summary.possible ? Math.round((summary.earned / summary.possible) * 100) : 0;
    return (
      <section className="border-b border-black">
        <div className="grid border-b border-black lg:grid-cols-[1fr_.65fr]">
          <div className="border-b border-black p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[.14em]">Drill selesai</p>
            <p className="mt-3 font-bold uppercase">{summary.packageTitle}</p>
            <p className="mt-5 text-7xl font-black tracking-[-.07em]">{percentage}%</p>
            <h2 className="mt-4 text-2xl font-bold">{summary.earned} dari {summary.possible} poin</h2>
            <p className="mt-2">{summary.total} soal diselesaikan. Jawabanmu sudah masuk ke peta progres per topik.</p>
          </div>
          <div className="flex flex-col justify-between bg-signal p-5 sm:p-8 lg:p-10">
            <p className="text-lg">Buka tiap soal untuk melihat jawaban terbaik dan pembahasannya.</p>
            <Button className="mt-12 h-12 rounded-none" onClick={() => setSummary(null)}><RotateCcw /> Drill lagi</Button>
          </div>
        </div>
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[.14em]">Tinjau ulang</p>
            <h2 className="mt-2 text-3xl font-black">PEMBAHASAN SOAL</h2>
          </div>
          <div className="grid gap-3">
            {summary.questions.map((question, index) => {
              const selectedId = summary.answers[question.id];
              const earned = choiceScore(question, selectedId);
              const maximum = bestScore(question);
              const selectedLabel = question.choices.find((choice) => choice.id === selectedId)?.label ?? "Tidak dijawab";
              const bestLabels = question.choices.filter((choice) => choice.score === maximum).map((choice) => choice.label).join(" / ");
              return (
                <details key={question.id} className="border border-black bg-warm-white">
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-4 font-bold">
                    <span className={`flex size-9 shrink-0 items-center justify-center border border-black ${earned === maximum ? "bg-signal" : "bg-brand-red-soft text-brand-red"}`}>{index + 1}</span>
                    <span className="line-clamp-2 flex-1">{question.prompt}</span>
                    <span className="font-mono text-xs">{earned}/{maximum}</span>
                  </summary>
                  <div className="border-t border-black p-4 leading-relaxed">
                    <p><strong>Jawabanmu:</strong> {selectedLabel}</p>
                    <p className="mt-2"><strong>Jawaban terbaik:</strong> {bestLabels}</p>
                    <p className="mt-3 border-l-4 border-brand-blue bg-secondary p-3">{question.explanation}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (!sessionOpen || !session || !current) {
    const topics = categoryTopics(category);
    const packages = DRILL_PACKAGES.filter((item) => item.category === category && item.topic === topic);
    return (
      <section className="grid border-b border-black lg:grid-cols-[.7fr_1.3fr]">
        <div className="border-b border-black bg-black p-5 text-white sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[.14em] text-signal">Atur sesi</p>
          <h2 className="mt-5 text-4xl font-black leading-none tracking-[-.05em]">KECIL.<br />FOKUS.<br />BERULANG.</h2>
          <p className="mt-8 max-w-md leading-relaxed text-white/75">Setiap topik memiliki paket berisi 10 soal tetap. Pilih paket untuk mengulang set yang sama dan mengukur peningkatanmu.</p>
        </div>
        <div className="grid gap-6 p-5 sm:p-8 lg:p-10">
          {session && current && (
            <div className="grid gap-4 border border-black bg-secondary p-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-brand-blue">Sesi drill tertunda</p>
                <h3 className="mt-1 text-xl font-black">{session.packageId ? getDrillPackage(session.packageId)?.title ?? current.topic : current.topic}</h3>
                <p className="mt-1 text-sm">{answered}/{questions.length} soal dijawab · posisi terakhir soal {session.currentIndex + 1}</p>
              </div>
              <Button type="button" onClick={resume} className="h-11 rounded-none">Lanjutkan sesi</Button>
            </div>
          )}
          <label className="grid gap-2 font-bold">Kategori
            <NativeSelect value={category} onChange={(event) => { const next = event.target.value as Category; setCategory(next); setTopic(categoryTopics(next)[0]); }} className="h-12 w-full rounded-none border-black bg-warm-white text-base">
              <NativeSelectOption value="TWK">TWK — Wawasan Kebangsaan</NativeSelectOption>
              <NativeSelectOption value="TIU">TIU — Intelegensia Umum</NativeSelectOption>
              <NativeSelectOption value="TKP">TKP — Karakteristik Pribadi</NativeSelectOption>
            </NativeSelect>
          </label>
          <label className="grid gap-2 font-bold">Topik
            <NativeSelect value={topics.includes(topic) ? topic : topics[0]} onChange={(event) => setTopic(event.target.value)} className="h-12 w-full rounded-none border-black bg-warm-white text-base">
              {topics.map((item) => <NativeSelectOption key={item} value={item}>{item}</NativeSelectOption>)}
            </NativeSelect>
          </label>
          <div>
            <p className="mb-3 font-bold">Pilih paket</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {packages.map((drillPackage) => {
                const stats = drillPackage.questions.map((question) => state.drillStats[question.id]).filter(Boolean);
                const earned = stats.reduce((sum, item) => sum + item.earned, 0);
                const possible = stats.reduce((sum, item) => sum + item.possible, 0);
                const percentage = possible ? Math.round((earned / possible) * 100) : 0;
                return (
                  <article key={drillPackage.id} className="border border-black bg-warm-white p-5">
                    <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs">/{String(drillPackage.sequence).padStart(2, "0")}</span><span className="bg-secondary px-2 py-1 font-mono text-[10px] font-bold">10 SOAL</span></div>
                    <h3 className="mt-7 text-2xl font-black tracking-[-.04em]">{drillPackage.title}</h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider">{stats.length ? `${stats.length}/10 dicoba · ${percentage}%` : "Belum dikerjakan"}</p>
                    <Button type="button" onClick={() => start(drillPackage)} className="mt-5 h-11 w-full rounded-none">Mulai paket <ArrowRight /></Button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <ExamShell
      eyebrow="Mode drill"
      title={session.packageId ? getDrillPackage(session.packageId)?.title ?? current.topic : current.topic}
      session={session}
      questions={questions}
      answered={answered}
      onMove={move}
      navigationMode="sequential"
      footer={
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <span className="font-mono text-xs font-bold">{session.currentIndex + 1} / {questions.length}</span>
          {session.currentIndex === questions.length - 1 ? (
            <Button className="h-11 rounded-none px-3 sm:px-5" disabled={!selectedId} onClick={finish}>Selesaikan paket</Button>
          ) : (
            <Button className="h-11 rounded-none px-3 sm:px-5" aria-keyshortcuts="ArrowRight" disabled={!selectedId} onClick={() => move(session.currentIndex + 1)}><span className="hidden min-[380px]:inline">Berikutnya</span><ArrowRight /></Button>
          )}
        </div>
      }
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Soal {session.currentIndex + 1} / {questions.length}</p>
        <p className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">Pilih A–E · → lanjut setelah menjawab</p>
      </div>
      <QuestionCard question={current} selectedId={selectedId} onSelect={select} />
    </ExamShell>
  );
}
