"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Progress } from "@/components/ui/progress";
import { DRILL_QUESTIONS, categoryTopics, getQuestion } from "@/lib/content";
import { bestScore, choiceScore } from "@/lib/scoring";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, Category } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { QuestionCard } from "./question-card";

function shuffled<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

export function DrillClient() {
  const state = useLearningState();
  const [category, setCategory] = useState<Category>("TWK");
  const [topic, setTopic] = useState("all");
  const [count, setCount] = useState(10);
  const [summary, setSummary] = useState<{ earned: number; possible: number; total: number } | null>(null);
  const session = state.activeDrill;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    if (["TWK", "TIU", "TKP"].includes(requestedCategory ?? "")) setCategory(requestedCategory as Category);
    const requestedTopic = params.get("topic");
    if (requestedTopic) setTopic(requestedTopic);
  }, []);

  const questions = useMemo(() => session?.questionIds.map(getQuestion).filter(Boolean) ?? [], [session]) as ReturnType<typeof getQuestion>[];
  const current = session ? questions[session.currentIndex] : undefined;
  const answered = session ? Object.keys(session.answers).length : 0;

  function start() {
    const pool = DRILL_QUESTIONS.filter((question) => question.category === category && (topic === "all" || question.topic === topic));
    const selected = shuffled(pool).slice(0, Math.min(count, pool.length));
    const next: ActiveSession = {
      id: `drill-${Date.now()}`,
      kind: "drill",
      questionIds: selected.map((question) => question.id),
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
    updateLearningState((learning) => learning.activeDrill ? { ...learning, activeDrill: { ...learning.activeDrill, currentIndex: index } } : learning);
  }

  function finish() {
    if (!session) return;
    const earned = questions.reduce((sum, question) => question ? sum + choiceScore(question, session.answers[question.id]) : sum, 0);
    const possible = questions.reduce((sum, question) => question ? sum + bestScore(question) : sum, 0);
    setSummary({ earned, possible, total: questions.length });
    updateLearningState((learning) => ({ ...learning, activeDrill: null }));
  }

  if (summary && !session) {
    const percentage = summary.possible ? Math.round((summary.earned / summary.possible) * 100) : 0;
    return (
      <section className="grid border-b border-black lg:grid-cols-[1fr_.65fr]">
        <div className="border-b border-black p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[.14em]">Drill selesai</p>
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
    return (
      <section className="grid border-b border-black lg:grid-cols-[.7fr_1.3fr]">
        <div className="border-b border-black bg-black p-5 text-white sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[.14em] text-signal">Atur sesi</p>
          <h2 className="mt-5 text-4xl font-black leading-none tracking-[-.05em]">KECIL.<br />FOKUS.<br />BERULANG.</h2>
          <p className="mt-8 max-w-md leading-relaxed text-white/75">Setiap jawaban langsung diberi skor dan pembahasan. Hasilnya tersimpan otomatis di perangkat ini.</p>
        </div>
        <div className="grid gap-6 p-5 sm:p-8 lg:p-10">
          <label className="grid gap-2 font-bold">Kategori
            <NativeSelect value={category} onChange={(event) => { setCategory(event.target.value as Category); setTopic("all"); }} className="h-12 w-full rounded-none border-black bg-white text-base">
              <NativeSelectOption value="TWK">TWK — Wawasan Kebangsaan</NativeSelectOption>
              <NativeSelectOption value="TIU">TIU — Intelegensia Umum</NativeSelectOption>
              <NativeSelectOption value="TKP">TKP — Karakteristik Pribadi</NativeSelectOption>
            </NativeSelect>
          </label>
          <label className="grid gap-2 font-bold">Topik
            <NativeSelect value={topics.includes(topic) ? topic : "all"} onChange={(event) => setTopic(event.target.value)} className="h-12 w-full rounded-none border-black bg-white text-base">
              <NativeSelectOption value="all">Semua topik</NativeSelectOption>
              {topics.map((item) => <NativeSelectOption key={item} value={item}>{item}</NativeSelectOption>)}
            </NativeSelect>
          </label>
          <fieldset>
            <legend className="mb-2 font-bold">Jumlah soal</legend>
            <div className="grid grid-cols-2 gap-3">
              {[10, 20].map((value) => <Button key={value} type="button" variant="outline" aria-pressed={count === value} onClick={() => setCount(value)} className={`h-12 rounded-none border-black ${count === value ? "bg-signal" : "bg-white"}`}>{value} soal</Button>)}
            </div>
          </fieldset>
          <Button onClick={start} className="mt-2 h-14 rounded-none text-base">Mulai drill <ArrowRight /></Button>
        </div>
      </section>
    );
  }

  const selectedId = session.answers[current.id];
  return (
    <section className="border-b border-black">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black bg-white p-4 sm:px-7">
        <div className="min-w-[180px] flex-1"><Progress value={(answered / questions.length) * 100} className="h-2 rounded-none border border-black bg-white" /></div>
        <span className="font-mono text-xs font-bold">{answered}/{questions.length} DIJAWAB</span>
      </div>
      <div className="mx-auto max-w-4xl p-5 sm:p-8 lg:p-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-[.14em]">Soal {session.currentIndex + 1} / {questions.length}</p>
        <QuestionCard question={current} selectedId={selectedId} onSelect={select} reveal={Boolean(selectedId)} />
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-black pt-6">
          <Button variant="outline" className="h-11 rounded-none border-black" disabled={session.currentIndex === 0} onClick={() => move(session.currentIndex - 1)}><ArrowLeft /> Sebelumnya</Button>
          {session.currentIndex === questions.length - 1 ? (
            <Button className="h-11 rounded-none" disabled={answered < questions.length} onClick={finish}>Selesai</Button>
          ) : (
            <Button className="h-11 rounded-none" disabled={!selectedId} onClick={() => move(session.currentIndex + 1)}>Berikutnya <ArrowRight /></Button>
          )}
        </div>
      </div>
    </section>
  );
}
