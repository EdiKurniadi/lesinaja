"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Check, Clock3, Play } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EXAM_PACKAGES, getPackage, getQuestion } from "@/lib/content";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { scoreAttempt } from "@/lib/scoring";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, AttemptResult, Question } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { ExamShell, useExamKeyboard } from "./exam-shell";
import { QuestionCard } from "./question-card";
import { ResultView } from "./result-view";

function timeLabel(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return [hours, minutes, seconds].map((item) => String(item).padStart(2, "0")).join(":");
}

export function TryoutClient() {
  const state = useLearningState();
  const [now, setNow] = useState(Date.now());
  const [result, setResult] = useState<AttemptResult | null>(null);
  const session = state.activeTryout;
  const examPackage = session?.packageId ? getPackage(session.packageId) : undefined;
  const questions = useMemo(() => session?.questionIds.map(getQuestion).filter((question): question is Question => Boolean(question)) ?? [], [session]);
  const current = session ? questions[session.currentIndex] : undefined;

  const finish = useCallback(() => {
    if (!session || !examPackage) return;
    const completedAt = Date.now();
    const nextResult = scoreAttempt(questions, session.answers, { id: `attempt-${completedAt}`, packageId: examPackage.id, startedAt: session.startedAt, completedAt });
    setResult(nextResult);
    updateLearningState((learning) => ({ ...learning, activeTryout: null, attempts: [nextResult, ...learning.attempts].slice(0, 30) }));
  }, [examPackage, questions, session]);

  useEffect(() => {
    if (!session?.deadlineAt) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [session?.deadlineAt]);

  useEffect(() => {
    if (session?.deadlineAt && now >= session.deadlineAt) finish();
  }, [finish, now, session?.deadlineAt]);

  function start(packageId: string) {
    const selected = getPackage(packageId);
    if (!selected) return;
    const startedAt = Date.now();
    const next: ActiveSession = {
      id: `tryout-${startedAt}`,
      kind: "tryout",
      packageId,
      questionIds: selected.questions.map((question) => question.id),
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt,
      deadlineAt: startedAt + selected.durationMinutes * 60_000,
    };
    setResult(null);
    setNow(startedAt);
    updateLearningState((learning) => ({ ...learning, activeTryout: next }));
  }

  function select(choiceId: string) {
    if (!session || !current) return;
    updateLearningState((learning) => learning.activeTryout ? { ...learning, activeTryout: { ...learning.activeTryout, answers: { ...learning.activeTryout.answers, [current.id]: choiceId } } } : learning);
  }

  function move(index: number) {
    updateLearningState((learning) => learning.activeTryout ? { ...learning, activeTryout: { ...learning.activeTryout, currentIndex: Math.min(Math.max(index, 0), questions.length - 1) } } : learning);
  }

  function toggleFlag() {
    if (!session || !current) return;
    updateLearningState((learning) => {
      if (!learning.activeTryout) return learning;
      const hasFlag = learning.activeTryout.flagged.includes(current.id);
      return { ...learning, activeTryout: { ...learning.activeTryout, flagged: hasFlag ? learning.activeTryout.flagged.filter((id) => id !== current.id) : [...learning.activeTryout.flagged, current.id] } };
    });
  }

  const answered = session ? Object.keys(session.answers).length : 0;
  const remaining = Math.max(0, (session?.deadlineAt ?? now) - now);
  const isFlagged = Boolean(session && current && session.flagged.includes(current.id));

  useExamKeyboard({
    currentIndex: session?.currentIndex ?? 0,
    questions,
    onMove: move,
    onSelect: select,
    onToggleFlag: toggleFlag,
  });

  if (result) {
    const source = getPackage(result.packageId)?.questions ?? [];
    return <ResultView result={result} questions={source} onClose={() => setResult(null)} />;
  }

  if (!session || !examPackage || !current) {
    return (
      <section className="border-b border-black">
        <div className="grid border-b border-black md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div key={category} className="border-b border-black p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[.14em]">{EXAM_RULES.composition[category]} soal</p>
              <h2 className="mt-4 text-4xl font-black">{category}</h2>
              <p className="mt-2">Ambang {EXAM_RULES.passingScores[category]} · Maks {EXAM_RULES.maximumScores[category]}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2">
          {EXAM_PACKAGES.map((item, index) => {
            const attempts = state.attempts.filter((attempt) => attempt.packageId === item.id);
            return (
              <article key={item.id} className="border-b border-black p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs">/{String(index + 1).padStart(2, "0")}</span><span className="border border-black px-2 py-1 font-mono text-xs">100 MENIT</span></div>
                <h2 className="mt-12 text-4xl font-black tracking-[-.05em]">{item.title}</h2>
                <p className="mt-3 max-w-lg leading-relaxed">{item.description}</p>
                <ul className="mt-7 space-y-2 text-sm"><li>✓ 110 soal sesuai komposisi SKD</li><li>✓ Timer tetap berjalan setelah halaman ditutup</li><li>✓ Pembahasan muncul setelah selesai</li></ul>
                {attempts[0] && <p className="mt-6 border-l-4 border-signal pl-3 text-sm">Skor terakhir: <strong>{attempts[0].totalScore}/550</strong></p>}
                <Button onClick={() => start(item.id)} className="mt-8 h-12 w-full rounded-none text-base"><Play /> Mulai {item.title.split(" — ")[0]}</Button>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <ExamShell
      eyebrow="Mode try out"
      title={examPackage.title}
      session={session}
      questions={questions}
      answered={answered}
      flagged={session.flagged.length}
      onMove={move}
      groupedPalette
      headerMetric={<div className="flex h-10 items-center gap-1.5 bg-black px-2 font-mono text-xs font-bold text-white sm:px-3 sm:text-sm"><Clock3 className="size-4 text-signal" /><span aria-label={`Sisa waktu ${timeLabel(remaining)}`}>{timeLabel(remaining)}</span></div>}
      headerAction={
        <AlertDialog>
          <AlertDialogTrigger asChild><Button className="h-10 rounded-none bg-signal px-2 text-black hover:bg-signal/80 sm:px-3"><Check /><span className="hidden sm:inline">Kumpulkan</span></Button></AlertDialogTrigger>
          <AlertDialogContent className="rounded-none border-black">
            <AlertDialogHeader><AlertDialogTitle>Kumpulkan try out sekarang?</AlertDialogTitle><AlertDialogDescription>{questions.length - answered} soal masih belum dijawab dan {session.flagged.length} soal ditandai ragu-ragu. Setelah dikumpulkan, jawaban tidak dapat diubah.</AlertDialogDescription></AlertDialogHeader>
            <AlertDialogFooter><AlertDialogCancel className="rounded-none border-black">Kembali mengerjakan</AlertDialogCancel><AlertDialogAction className="rounded-none" onClick={finish}>Ya, lihat hasil</AlertDialogAction></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
      footer={
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
          <Button variant="outline" className="h-11 rounded-none border-black px-3 sm:px-5" aria-keyshortcuts="ArrowLeft" disabled={session.currentIndex === 0} onClick={() => move(session.currentIndex - 1)}><ArrowLeft /><span className="hidden min-[420px]:inline">Sebelumnya</span></Button>
          <Button variant="outline" aria-pressed={isFlagged} aria-keyshortcuts="R" onClick={toggleFlag} className={`h-11 rounded-none border-black px-3 sm:px-5 ${isFlagged ? "bg-signal" : ""}`}><Bookmark className={isFlagged ? "fill-current" : ""} /><span className="hidden min-[420px]:inline">Ragu-ragu</span></Button>
          <span className="hidden font-mono text-xs font-bold sm:block">{session.currentIndex + 1} / {questions.length}</span>
          <Button className="h-11 rounded-none px-3 sm:px-5" aria-keyshortcuts="ArrowRight" disabled={session.currentIndex === questions.length - 1} onClick={() => move(session.currentIndex + 1)}><span className="hidden min-[420px]:inline">Berikutnya</span><ArrowRight /></Button>
        </div>
      }
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Soal {session.currentIndex + 1} / {questions.length}</p>
        <p className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">A–E pilih · R ragu · ← → navigasi</p>
      </div>
      <QuestionCard question={current} selectedId={session.answers[current.id]} onSelect={select} />
    </ExamShell>
  );
}
