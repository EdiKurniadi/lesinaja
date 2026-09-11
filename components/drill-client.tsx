"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { DRILL_PACKAGES, categoryTopics, getDrillPackage, getQuestion } from "@/lib/content";
import { bestScore, choiceScore } from "@/lib/scoring";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, Category, DrillPackage, Question } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { ExamShell, useExamKeyboard } from "./exam-shell";
import { QuestionCard } from "./question-card";

export function DrillClient() {
  const state = useLearningState();
  const [category, setCategory] = useState<Category>("TWK");
  const [topic, setTopic] = useState("Pancasila");
  const [summary, setSummary] = useState<{ earned: number; possible: number; total: number; packageTitle: string } | null>(null);
  const session = state.activeDrill;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    const nextCategory = ["TWK", "TIU", "TKP"].includes(requestedCategory ?? "") ? requestedCategory as Category : "TWK";
    setCategory(nextCategory);
    const requestedTopic = params.get("topic");
    const topics = categoryTopics(nextCategory);
    setTopic(requestedTopic && topics.includes(requestedTopic) ? requestedTopic : topics[0]);
  }, []);

  const questions = useMemo(() => session?.questionIds.map(getQuestion).filter((question): question is Question => Boolean(question)) ?? [], [session]);
  const current = session ? questions[session.currentIndex] : undefined;
  const answered = session ? Object.keys(session.answers).length : 0;
  const selectedId = session && current ? session.answers[current.id] : undefined;

  function start(drillPackage: DrillPackage) {
    const next: ActiveSession = {
      id: `drill-${drillPackage.id}-${Date.now()}`,
      kind: "drill",
      packageId: drillPackage.id,
      questionIds: drillPackage.questions.map((question) => question.id),
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt: Date.now(),
    };
    setSummary(null);
    updateLearningState((learning) => ({ ...learning, activeDrill: next }));
  }

  function select(choiceId: string) {
    if (!session || !current || session.answers[current.id]) return;
    const earned = choiceScore(current, choiceId);
    const possible = bestScore(current);
    updateLearningState((learning) => {
      if (!learning.activeDrill) return learning;
      const previous = learning.drillStats[current.id] ?? { attempts: 0, earned: 0, possible: 0, lastAnsweredAt: 0 };
      return {
        ...learning,
        activeDrill: { ...learning.activeDrill, answers: { ...learning.activeDrill.answers, [current.id]: choiceId } },
        drillStats: {
          ...learning.drillStats,
          [current.id]: { attempts: previous.attempts + 1, earned: previous.earned + earned, possible: previous.possible + possible, lastAnsweredAt: Date.now() },
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
    setSummary({ earned, possible, total: questions.length, packageTitle: session.packageId ? getDrillPackage(session.packageId)?.title ?? "Paket drill" : "Paket drill" });
    updateLearningState((learning) => ({ ...learning, activeDrill: null }));
  }

  useExamKeyboard({
    currentIndex: session?.currentIndex ?? 0,
    questions,
    onMove: move,
    onSelect: select,
    canMoveNext: Boolean(selectedId),
  });

  if (summary && !session) {
    const percentage = summary.possible ? Math.round((summary.earned / summary.possible) * 100) : 0;
    return (
      <section className="grid border-b border-black lg:grid-cols-[1fr_.65fr]">
        <div className="border-b border-black p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[.14em]">Drill selesai</p>
          <p className="mt-3 font-bold uppercase">{summary.packageTitle}</p>
          <p className="mt-5 text-7xl font-black tracking-[-.07em]">{percentage}%</p>
          <h2 className="mt-4 text-2xl font-bold">{summary.earned} dari {summary.possible} poin</h2>
          <p className="mt-2">Jawabanmu sudah masuk ke peta progres per topik.</p>
        </div>
        <div className="flex flex-col justify-between bg-signal p-5 sm:p-8 lg:p-10">
          <p className="text-lg">Ulangi kategori yang sama atau pilih fokus baru untuk sesi berikutnya.</p>
          <Button className="mt-12 h-12 rounded-none" onClick={() => setSummary(null)}><RotateCcw /> Drill lagi</Button>
        </div>
      </section>
    );
  }

  if (!session || !current) {
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
          <label className="grid gap-2 font-bold">Kategori
            <NativeSelect value={category} onChange={(event) => { const next = event.target.value as Category; setCategory(next); setTopic(categoryTopics(next)[0]); }} className="h-12 w-full rounded-none border-black bg-white text-base">
              <NativeSelectOption value="TWK">TWK — Wawasan Kebangsaan</NativeSelectOption>
              <NativeSelectOption value="TIU">TIU — Intelegensia Umum</NativeSelectOption>
              <NativeSelectOption value="TKP">TKP — Karakteristik Pribadi</NativeSelectOption>
            </NativeSelect>
          </label>
          <label className="grid gap-2 font-bold">Topik
            <NativeSelect value={topics.includes(topic) ? topic : topics[0]} onChange={(event) => setTopic(event.target.value)} className="h-12 w-full rounded-none border-black bg-white text-base">
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
                  <article key={drillPackage.id} className="border border-black bg-white p-5">
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
      footer={
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
          <Button variant="outline" className="h-11 rounded-none border-black px-3 sm:px-5" aria-keyshortcuts="ArrowLeft" disabled={session.currentIndex === 0} onClick={() => move(session.currentIndex - 1)}><ArrowLeft /><span className="hidden min-[380px]:inline">Sebelumnya</span></Button>
          <span className="font-mono text-xs font-bold">{session.currentIndex + 1} / {questions.length}</span>
          {session.currentIndex === questions.length - 1 ? (
            <Button className="h-11 rounded-none px-3 sm:px-5" disabled={answered < questions.length} onClick={finish}>Selesaikan paket</Button>
          ) : (
            <Button className="h-11 rounded-none px-3 sm:px-5" aria-keyshortcuts="ArrowRight" disabled={!selectedId} onClick={() => move(session.currentIndex + 1)}><span className="hidden min-[380px]:inline">Berikutnya</span><ArrowRight /></Button>
          )}
        </div>
      }
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Soal {session.currentIndex + 1} / {questions.length}</p>
        <p className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">Pilih A–E · ← → navigasi</p>
      </div>
        <QuestionCard question={current} selectedId={selectedId} onSelect={select} reveal={Boolean(selectedId)} />
    </ExamShell>
  );
}
