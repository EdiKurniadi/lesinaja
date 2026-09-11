"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Check, Clock3, Grid3X3, Play } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EXAM_PACKAGES, getPackage, getQuestion } from "@/lib/content";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { scoreAttempt } from "@/lib/scoring";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, AttemptResult, Question } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { QuestionCard } from "./question-card";
import { ResultView } from "./result-view";

function timeLabel(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return [hours, minutes, seconds].map((item) => String(item).padStart(2, "0")).join(":");
}

function QuestionPalette({ session, questions, onMove }: { session: ActiveSession; questions: Question[]; onMove: (index: number) => void }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {questions.map((question, index) => {
        const answered = Boolean(session.answers[question.id]);
        const flagged = session.flagged.includes(question.id);
        return (
          <Button key={question.id} type="button" variant="outline" size="icon" onClick={() => onMove(index)} aria-label={`Buka soal ${index + 1}${answered ? ", sudah dijawab" : ""}${flagged ? ", ditandai ragu-ragu" : ""}`} className={`relative rounded-none border-black ${index === session.currentIndex ? "ring-2 ring-black ring-offset-2" : ""} ${answered ? "bg-black text-white" : "bg-white"}`}>
            {index + 1}
            {flagged && <span className="absolute -right-1 -top-1 h-3 w-3 border border-black bg-signal" />}
          </Button>
        );
      })}
    </div>
  );
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

  const answered = Object.keys(session.answers).length;
  const remaining = Math.max(0, (session.deadlineAt ?? now) - now);
  const isFlagged = session.flagged.includes(current.id);
  return (
    <section className="border-b border-black">
      <div className="sticky top-16 z-30 flex flex-wrap items-center gap-4 border-b border-black bg-white p-3 sm:px-7">
        <div className="flex items-center gap-2 bg-black px-3 py-2 font-mono text-sm font-bold text-white"><Clock3 className="text-signal" /> {timeLabel(remaining)}</div>
        <div className="min-w-[120px] flex-1"><Progress value={(answered / questions.length) * 100} className="h-2 rounded-none border border-black bg-white" /></div>
        <span className="font-mono text-xs">{answered}/{questions.length} DIJAWAB</span>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" className="rounded-none border-black lg:hidden"><Grid3X3 /> Nomor</Button></SheetTrigger>
          <SheetContent className="w-[90%] rounded-none border-black p-5" side="right">
            <SheetHeader><SheetTitle className="text-2xl font-black">DAFTAR SOAL</SheetTitle><SheetDescription>Pilih nomor untuk berpindah soal.</SheetDescription></SheetHeader>
            <div className="overflow-y-auto pt-3"><QuestionPalette session={session} questions={questions} onMove={move} /></div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="border-black p-5 sm:p-8 lg:border-r lg:p-10 xl:p-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[.14em]">Soal {session.currentIndex + 1} / {questions.length}</p>
            <Button variant="outline" aria-pressed={isFlagged} onClick={toggleFlag} className={`rounded-none border-black ${isFlagged ? "bg-signal" : ""}`}><Bookmark className={isFlagged ? "fill-current" : ""} /> Ragu-ragu</Button>
          </div>
          <QuestionCard question={current} selectedId={session.answers[current.id]} onSelect={select} />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-black pt-6">
            <Button variant="outline" className="h-11 rounded-none border-black" disabled={session.currentIndex === 0} onClick={() => move(session.currentIndex - 1)}><ArrowLeft /> Sebelumnya</Button>
            <div className="flex gap-3">
              {session.currentIndex < questions.length - 1 && <Button className="h-11 rounded-none" onClick={() => move(session.currentIndex + 1)}>Berikutnya <ArrowRight /></Button>}
              <AlertDialog>
                <AlertDialogTrigger asChild><Button className="h-11 rounded-none bg-signal text-black hover:bg-signal/80"><Check /> Kumpulkan</Button></AlertDialogTrigger>
                <AlertDialogContent className="rounded-none border-black">
                  <AlertDialogHeader><AlertDialogTitle>Kumpulkan try out sekarang?</AlertDialogTitle><AlertDialogDescription>{questions.length - answered} soal masih belum dijawab. Setelah dikumpulkan, jawaban tidak dapat diubah.</AlertDialogDescription></AlertDialogHeader>
                  <AlertDialogFooter><AlertDialogCancel className="rounded-none border-black">Kembali mengerjakan</AlertDialogCancel><AlertDialogAction className="rounded-none" onClick={finish}>Ya, lihat hasil</AlertDialogAction></AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>

        <aside className="hidden p-6 lg:block">
          <div className="sticky top-36">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[.14em]">Daftar soal</p>
            <QuestionPalette session={session} questions={questions} onMove={move} />
            <div className="mt-5 grid gap-2 border-t border-black pt-4 font-mono text-[11px] uppercase"><span>■ Sudah dijawab</span><span><i className="mr-2 inline-block h-3 w-3 border border-black bg-signal" />Ragu-ragu</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
