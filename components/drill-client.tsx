"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Info, Key, Lock, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageFrame } from "@/components/page-frame";
import { validatePackageAccessCode } from "@/lib/access-codes";
import { DRILL_PACKAGES, categoryTopics, getDrillPackage, getQuestion } from "@/lib/content";
import { bestScore, choiceScore, updateDrillStat } from "@/lib/scoring";
import { clearSessionOpen, markSessionOpen, shouldOpenSession } from "@/lib/session-navigation";
import { updateLearningState } from "@/lib/storage";
import type { ActiveSession, Category, DrillPackage, Question } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";
import { ExamShell, useExamKeyboard } from "./exam-shell";
import { MathText } from "./math-text";
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
  const [categoryPopoutOpen, setCategoryPopoutOpen] = useState(false);
  const [topicPopoutOpen, setTopicPopoutOpen] = useState(false);
  const [summary, setSummary] = useState<DrillSummary | null>(null);
  const [sessionOpen, setSessionOpen] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [reviewFilter, setReviewFilter] = useState<"all" | "incorrect" | "correct">("all");
  const [pendingDrillPackage, setPendingDrillPackage] = useState<DrillPackage | null>(null);
  const [drillAccessCodeInput, setDrillAccessCodeInput] = useState("");
  const [drillAccessCodeError, setDrillAccessCodeError] = useState<string | null>(null);
  const session = state.activeDrill;
  const invalidSessionId = session?.questionIds.some((questionId) => !getQuestion(questionId)) ? session.id : null;

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

  useEffect(() => {
    if (!invalidSessionId) return;
    const clearInvalidSession = window.setTimeout(() => {
      clearSessionOpen();
      setSessionOpen(false);
      updateLearningState((learning) => learning.activeDrill?.id === invalidSessionId
        ? { ...learning, activeDrill: null }
        : learning);
    }, 0);
    return () => window.clearTimeout(clearInvalidSession);
  }, [invalidSessionId]);

  const questions = useMemo(() => {
    if (session) {
      const stored = session.questionIds.map(getQuestion).filter((item): item is Question => Boolean(item));
      return stored.length === session.questionIds.length ? stored : [];
    }
    const drillPackage = DRILL_PACKAGES.find((item) => item.category === category && item.topic === topic);
    return drillPackage?.questions ?? [];
  }, [category, session, topic]);

  const current = questions[session?.currentIndex ?? 0];
  const selectedId = current && session ? session.answers[current.id] : undefined;
  const answered = session ? Object.keys(session.answers).length : 0;

  function start(drillPackage: DrillPackage) {
    const nextSession: ActiveSession = {
      id: `drill-${drillPackage.id}-${currentTime()}`,
      kind: "drill",
      packageId: drillPackage.id,
      questionIds: drillPackage.questions.map((item) => item.id),
      answers: {},
      flagged: [],
      currentIndex: 0,
      deadlineAt: currentTime() + 10 * 60 * 1000,
      startedAt: currentTime(),
    };
    updateLearningState((learning) => ({ ...learning, activeDrill: nextSession, activeTryout: null }));
    markSessionOpen("drill");
    setSessionOpen(true);
    setSummary(null);
  }

  function handleInitiateDrill(drillPackage: DrillPackage) {
    const isUnlocked = (state.unlockedPackages ?? []).includes(drillPackage.id);
    if (isUnlocked) {
      start(drillPackage);
      return;
    }
    setPendingDrillPackage(drillPackage);
    setDrillAccessCodeInput("");
    setDrillAccessCodeError(null);
  }

  function handleConfirmDrillCode() {
    if (!pendingDrillPackage) return;
    const isValid = validatePackageAccessCode(pendingDrillPackage.id, drillAccessCodeInput);
    if (!isValid) {
      setDrillAccessCodeError("Kode akses tidak valid. Silakan periksa kembali.");
      return;
    }
    updateLearningState((learning) => {
      const currentUnlocked = learning.unlockedPackages ?? [];
      if (!currentUnlocked.includes(pendingDrillPackage.id)) {
        return { ...learning, unlockedPackages: [...currentUnlocked, pendingDrillPackage.id] };
      }
      return learning;
    });
    const target = pendingDrillPackage;
    setPendingDrillPackage(null);
    setDrillAccessCodeInput("");
    setDrillAccessCodeError(null);
    start(target);
  }

  function resume() {
    markSessionOpen("drill");
    setSessionOpen(true);
    setSummary(null);
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
    setActiveReviewIndex(0);
    setReviewFilter("all");
    clearSessionOpen();
    setSessionOpen(false);
    updateLearningState((learning) => ({ ...learning, activeDrill: null }));
  }

  useEffect(() => {
    if (!summary || session) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (event.key === "ArrowLeft") {
        setActiveReviewIndex((prev) => Math.max(0, prev - 1));
      } else if (event.key === "ArrowRight") {
        setActiveReviewIndex((prev) => Math.min(summary!.total - 1, prev + 1));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [summary, session]);

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

    const questionsWithStats = summary.questions.map((question, index) => {
      const currentSelectedId = summary.answers[question.id];
      const earned = choiceScore(question, currentSelectedId);
      const maximum = bestScore(question);
      const isCorrect = earned === maximum && earned > 0;
      return {
        question,
        index,
        selectedId: currentSelectedId,
        earned,
        maximum,
        isCorrect,
      };
    });

    const correctCount = questionsWithStats.filter((item) => item.isCorrect).length;
    const incorrectCount = questionsWithStats.length - correctCount;

    const currentReview = questionsWithStats[activeReviewIndex] ?? questionsWithStats[0];

    const filteredReviewIndices = questionsWithStats
      .filter((item) => {
        if (reviewFilter === "incorrect") return !item.isCorrect;
        if (reviewFilter === "correct") return item.isCorrect;
        return true;
      })
      .map((item) => item.index);

    const nextReviewIndex = filteredReviewIndices.find((idx) => idx > currentReview.index);
    const prevReviewIndex = [...filteredReviewIndices].reverse().find((idx) => idx < currentReview.index);

    return (
      <PageFrame
        eyebrow="01 / Drill"
        title="LATIH. PAHAM. ULANG."
        description="Pilih topik dan tuntaskan 10 soal secara berurutan. Nilai dan pembahasan lengkap muncul setelah paket selesai."
        showHeader={false}
      >
        <section className="border-b border-black">
          <div className="grid border-b border-black lg:grid-cols-[1fr_.65fr]">
            <div className="p-5 sm:p-8 lg:border-r lg:border-black lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[.14em] text-brand-red">Drill Selesai</p>
              <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">{summary.packageTitle}</h2>
              <div className="mt-5 flex items-baseline gap-4">
                <span className="text-6xl font-black tracking-[-.07em] sm:text-7xl">{percentage}%</span>
                <span className="font-mono text-base font-bold sm:text-lg">{summary.earned} dari {summary.possible} poin</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {summary.total} soal diselesaikan · {correctCount} benar · {incorrectCount} perlu dievaluasi.
              </p>
            </div>
            <div className="hidden flex-col justify-between bg-signal p-5 sm:p-8 lg:flex lg:p-10">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Evaluasi Mandiri</p>
                <p className="mt-3 text-base font-bold sm:text-lg">
                  Tinjau pembahasan setiap soal di bawah untuk memperkuat konsep dan strategi menjawab.
                </p>
              </div>
              <Button
                className="mt-8 h-12 rounded-none bg-black text-white hover:bg-black/80"
                onClick={() => setSummary(null)}
              >
                <RotateCcw /> Drill lagi
              </Button>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-5">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">Tinjau Ulang</p>
                <h3 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">PEMBAHASAN SOAL</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setReviewFilter("all")}
                  className={`border-2 border-black px-3 py-1.5 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "all" ? "bg-black text-white" : "bg-warm-white hover:bg-black/10"
                  }`}
                >
                  Semua ({summary.total})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setReviewFilter("incorrect");
                    if (currentReview.isCorrect) {
                      const firstIncorrect = questionsWithStats.find((item) => !item.isCorrect);
                      if (firstIncorrect) setActiveReviewIndex(firstIncorrect.index);
                    }
                  }}
                  className={`border-2 border-black px-3 py-1.5 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "incorrect"
                      ? "bg-brand-red text-white"
                      : "bg-brand-red-soft text-brand-red hover:bg-brand-red/20"
                  }`}
                >
                  Salah Saja ({incorrectCount})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setReviewFilter("correct");
                    if (!currentReview.isCorrect) {
                      const firstCorrect = questionsWithStats.find((item) => item.isCorrect);
                      if (firstCorrect) setActiveReviewIndex(firstCorrect.index);
                    }
                  }}
                  className={`border-2 border-black px-3 py-1.5 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "correct" ? "bg-signal text-black" : "bg-warm-white hover:bg-signal/40"
                  }`}
                >
                  Benar Saja ({correctCount})
                </button>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[.12em] text-muted-foreground">Pilih nomor soal:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {questionsWithStats.map((item) => {
                  const isActive = item.index === activeReviewIndex;
                  const isMatchingFilter =
                    reviewFilter === "all"
                      ? true
                      : reviewFilter === "incorrect"
                      ? !item.isCorrect
                      : item.isCorrect;
                  const isDimmed = !isMatchingFilter;

                  return (
                    <button
                      key={item.question.id}
                      type="button"
                      disabled={isDimmed}
                      onClick={() => setActiveReviewIndex(item.index)}
                      className={`relative flex size-10 shrink-0 items-center justify-center border-2 font-mono text-xs font-black transition-all sm:size-11 sm:text-sm ${
                        isActive
                          ? "border-brand-blue ring-4 ring-brand-blue/30 scale-105 z-10"
                          : "border-black"
                      } ${
                        item.isCorrect
                          ? "bg-signal text-black hover:bg-signal/80"
                          : "bg-brand-red-soft text-brand-red hover:bg-brand-red/20"
                      } ${
                        isDimmed
                          ? "opacity-25 cursor-not-allowed pointer-events-none"
                          : "opacity-100 cursor-pointer"
                      }`}
                      title={`Soal ${item.index + 1}: ${item.isCorrect ? "Benar" : "Salah"}`}
                    >
                      <span>{item.index + 1}</span>
                      {item.isCorrect ? (
                        <span className="absolute -bottom-1 -right-1 flex size-3.5 items-center justify-center border border-black bg-black text-[9px] text-white">✓</span>
                      ) : (
                        <span className="absolute -bottom-1 -right-1 flex size-3.5 items-center justify-center border border-black bg-brand-red text-[9px] text-white">✕</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {currentReview && (
              <div className="mt-8 pt-2">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-blue">
                    Soal {currentReview.index + 1} · {currentReview.question.category} · {currentReview.question.topic}
                  </span>
                  <div>
                    {currentReview.isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black">
                        <Check className="size-4 text-brand-blue" /> Skor Penuh ({currentReview.earned}/{currentReview.maximum})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-red">
                        <X className="size-4" /> {currentReview.selectedId ? "Kurang Tepat" : "Tidak Dijawab"} ({currentReview.earned}/{currentReview.maximum})
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 text-base font-normal leading-relaxed text-foreground sm:text-lg">
                  <MathText text={currentReview.question.prompt} />
                </div>

                <div className="mt-6 space-y-2">
                  {currentReview.question.choices.map((choice) => {
                    const isSelected = choice.id === currentReview.selectedId;
                    const isBest = choice.score === currentReview.maximum;

                    let containerStyles = "border-l-4 border-transparent px-4 py-3 hover:bg-black/5";
                    let badgeNode = null;

                    if (isSelected && isBest) {
                      containerStyles = "border-l-4 border-signal bg-signal/25 px-4 py-3.5";
                      badgeNode = (
                        <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-brand-blue">
                          <Check className="size-3.5" /> Jawabanmu (Benar)
                        </span>
                      );
                    } else if (isSelected && !isBest) {
                      containerStyles = "border-l-4 border-brand-red bg-brand-red-soft/70 px-4 py-3.5";
                      badgeNode = (
                        <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-brand-red">
                          <X className="size-3.5" /> Jawabanmu
                        </span>
                      );
                    } else if (!isSelected && isBest) {
                      containerStyles = "border-l-4 border-brand-blue bg-brand-blue/10 px-4 py-3.5";
                      badgeNode = (
                        <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-brand-blue">
                          <Check className="size-3.5" /> Kunci Jawaban
                        </span>
                      );
                    }

                    return (
                      <div
                        key={choice.id}
                        className={`flex flex-col gap-2 transition-all sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${containerStyles}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-base font-black shrink-0 w-6 text-foreground">
                            {choice.id.toUpperCase()}.
                          </span>
                          <span className="text-base font-normal leading-relaxed"><MathText text={choice.label} /></span>
                        </div>
                        <div className="flex shrink-0 items-center gap-3 pl-9 sm:pl-0">
                          <span className="font-mono text-xs font-bold text-muted-foreground">
                            {choice.score} poin
                          </span>
                          {badgeNode}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 border-l-4 border-brand-blue bg-secondary/80 p-5 sm:p-6">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-blue">
                    <Info className="size-4" /> Pembahasan Soal
                  </div>
                  <div className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">
                    <MathText text={currentReview.question.explanation} />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 border-black pt-5">
                  <Button
                    variant="outline"
                    className="rounded-none border-black font-mono text-xs font-bold uppercase"
                    disabled={prevReviewIndex === undefined}
                    onClick={() => {
                      if (prevReviewIndex !== undefined) setActiveReviewIndex(prevReviewIndex);
                    }}
                  >
                    <ChevronLeft /> Sebelumnya
                  </Button>
                  <span className="font-mono text-xs font-bold uppercase tracking-[.14em]">
                    Soal {currentReview.index + 1} dari {summary.total}
                    {reviewFilter !== "all" && (
                      <span className="ml-2 text-muted-foreground">
                        ({filteredReviewIndices.indexOf(currentReview.index) + 1} dari {filteredReviewIndices.length} {reviewFilter === "incorrect" ? "salah" : "benar"})
                      </span>
                    )}
                  </span>
                  <Button
                    variant="outline"
                    className="rounded-none border-black font-mono text-xs font-bold uppercase"
                    disabled={nextReviewIndex === undefined}
                    onClick={() => {
                      if (nextReviewIndex !== undefined) setActiveReviewIndex(nextReviewIndex);
                    }}
                  >
                    Berikutnya <ChevronRight />
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="border-t-2 border-black bg-signal p-5 sm:p-8 lg:hidden">
            <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Evaluasi Mandiri</p>
            <p className="mt-2 text-base font-bold sm:text-lg">
              Sudah selesai meninjau pembahasan? Ulangi drill untuk menguji peningkatan pemahamanmu.
            </p>
            <Button
              className="mt-6 h-12 w-full rounded-none bg-black text-base text-white hover:bg-black/80"
              onClick={() => setSummary(null)}
            >
              <RotateCcw /> Drill lagi
            </Button>
          </div>
        </section>
      </PageFrame>
    );
  }

  if (!sessionOpen || !session || !current) {
    const topics = categoryTopics(category);
    const packages = DRILL_PACKAGES.filter((item) => item.category === category && item.topic === topic);
    return (
      <PageFrame
        eyebrow="01 / Drill"
        title="LATIH. PAHAM. ULANG."
        description="Pilih topik dan tuntaskan 10 soal secara berurutan. Nilai dan pembahasan lengkap muncul setelah paket selesai."
        showHeader={true}
      >
        <section className="grid border-b border-black lg:grid-cols-[.7fr_1.3fr]">
          <div className="hidden border-b border-black bg-black p-5 text-white sm:p-8 lg:block lg:border-b-0 lg:border-r lg:p-10">
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
            {/* Trigger Cards for Category and Topic */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">01 / Kategori</p>
                <button
                  type="button"
                  onClick={() => setCategoryPopoutOpen(true)}
                  className="group flex w-full items-center justify-between border-2 border-black bg-warm-white p-4 text-left shadow-[3px_3px_0_0_#000] transition-all hover:bg-secondary hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <span className="text-xl font-black uppercase tracking-tight sm:text-2xl">{category}</span>
                  <div className="flex items-center gap-1 font-mono text-xs font-bold uppercase text-brand-blue group-hover:underline">
                    <span>Ganti</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">02 / Topik</p>
                <button
                  type="button"
                  onClick={() => setTopicPopoutOpen(true)}
                  className="group flex w-full items-center justify-between border-2 border-black bg-warm-white p-4 text-left shadow-[3px_3px_0_0_#000] transition-all hover:bg-secondary hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <span className="text-xl font-black uppercase tracking-tight sm:text-2xl">{topic}</span>
                  <div className="flex items-center gap-1 font-mono text-xs font-bold uppercase text-brand-blue group-hover:underline">
                    <span>Ganti</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Category Popout Dialog (Centered) */}
            <Dialog open={categoryPopoutOpen} onOpenChange={setCategoryPopoutOpen}>
              <DialogContent
                showCloseButton={false}
                className="flex flex-col w-[min(94vw,28rem)] max-h-[85vh] gap-0 rounded-none border-2 border-black bg-background p-0 text-foreground shadow-[8px_8px_0_0_#2143d8] overflow-hidden sm:max-w-md"
              >
                <DialogHeader className="grid min-h-20 grid-cols-[1fr_4rem] items-stretch gap-0 border-b-2 border-black bg-brand-blue p-0 text-white shrink-0 text-left">
                  <div className="flex min-w-0 flex-col justify-center px-5 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-[.18em] text-signal">01 / Drill Soal</span>
                    <DialogTitle className="mt-0.5 text-xl font-black uppercase tracking-[-.03em] text-white">Pilih Kategori</DialogTitle>
                    <DialogDescription className="sr-only">Pilih kategori soal TWK, TIU, atau TKP</DialogDescription>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCategoryPopoutOpen(false)}
                    className="flex min-h-16 items-center justify-center border-l-2 border-black bg-brand-red text-white transition-colors hover:bg-red-700"
                    aria-label="Tutup pemilihan kategori"
                  >
                    <X className="size-6" aria-hidden="true" />
                  </button>
                </DialogHeader>

                <div className="grid overflow-y-auto overscroll-contain" aria-label="Daftar Kategori Drill">
                  {(["TWK", "TIU", "TKP"] as Category[]).map((catKey, index) => {
                    const isCatActive = catKey === category;
                    return (
                      <button
                        key={catKey}
                        type="button"
                        onClick={() => {
                          setCategory(catKey);
                          const newTopics = categoryTopics(catKey);
                          setTopic(newTopics[0]);
                          setCategoryPopoutOpen(false);
                        }}
                        className={`group grid min-h-20 grid-cols-[3.25rem_1fr_2.5rem] items-center border-b border-black px-4 text-left transition-colors ${
                          isCatActive ? "bg-signal text-black" : "bg-warm-white text-black hover:bg-secondary"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                        <span className="min-w-0 pr-2 text-lg font-black uppercase tracking-[-.02em]">{catKey}</span>
                        {isCatActive ? (
                          <Check className="size-5 text-black" />
                        ) : (
                          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-auto border-t-2 border-black bg-secondary px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[.14em] shrink-0">
                  Pilih kategori untuk memuat topik latihan
                </div>
              </DialogContent>
            </Dialog>

            {/* Topic Popout Dialog (Centered) */}
            <Dialog open={topicPopoutOpen} onOpenChange={setTopicPopoutOpen}>
              <DialogContent
                showCloseButton={false}
                className="flex flex-col w-[min(94vw,28rem)] max-h-[85vh] gap-0 rounded-none border-2 border-black bg-background p-0 text-foreground shadow-[8px_8px_0_0_#2143d8] overflow-hidden sm:max-w-md"
              >
                <DialogHeader className="grid min-h-20 grid-cols-[1fr_4rem] items-stretch gap-0 border-b-2 border-black bg-brand-blue p-0 text-white shrink-0 text-left">
                  <div className="flex min-w-0 flex-col justify-center px-5 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-[.18em] text-signal">Kategori: {category}</span>
                    <DialogTitle className="mt-0.5 text-xl font-black uppercase tracking-[-.03em] text-white">Pilih Topik</DialogTitle>
                    <DialogDescription className="sr-only">Pilih topik materi untuk latihan {category}</DialogDescription>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTopicPopoutOpen(false)}
                    className="flex min-h-16 items-center justify-center border-l-2 border-black bg-brand-red text-white transition-colors hover:bg-red-700"
                    aria-label="Tutup pemilihan topik"
                  >
                    <X className="size-6" aria-hidden="true" />
                  </button>
                </DialogHeader>

                <div className="grid overflow-y-auto overscroll-contain" aria-label="Daftar Topik Drill">
                  {topics.map((tItem, index) => {
                    const isTopicActive = tItem === topic;
                    return (
                      <button
                        key={tItem}
                        type="button"
                        onClick={() => {
                          setTopic(tItem);
                          setTopicPopoutOpen(false);
                        }}
                        className={`group grid min-h-20 grid-cols-[3.25rem_1fr_2.5rem] items-center border-b border-black px-4 text-left transition-colors ${
                          isTopicActive ? "bg-signal text-black" : "bg-warm-white text-black hover:bg-secondary"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                        <span className="min-w-0 pr-2 text-lg font-black uppercase tracking-[-.02em]">{tItem}</span>
                        {isTopicActive ? (
                          <Check className="size-5 text-black" />
                        ) : (
                          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-auto border-t-2 border-black bg-secondary px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[.14em] shrink-0">
                  Topik {category} · LesinAja Bank Soal
                </div>
              </DialogContent>
            </Dialog>
            <div>
              <p className="mb-3 font-bold">Pilih paket</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {packages.map((drillPackage) => {
                  const isUnlocked = (state.unlockedPackages ?? []).includes(drillPackage.id);
                  const stats = drillPackage.questions.map((question) => state.drillStats[question.id]).filter(Boolean);
                  const earned = stats.reduce((sum, item) => sum + item.earned, 0);
                  const possible = stats.reduce((sum, item) => sum + item.possible, 0);
                  const percentage = possible ? Math.round((earned / possible) * 100) : 0;
                  return (
                    <article key={drillPackage.id} className="border border-black bg-warm-white p-5">
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-mono text-xs">/{String(drillPackage.sequence).padStart(2, "0")}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`inline-flex items-center gap-1 border border-black px-2 py-0.5 font-mono text-[10px] font-bold ${isUnlocked ? "bg-emerald-100 text-emerald-950" : "bg-signal text-black"}`}>
                            {isUnlocked ? <Key className="size-3" /> : <Lock className="size-3" />}
                            {isUnlocked ? "TERBUKA" : "PERLU KODE"}
                          </span>
                          <span className="bg-secondary px-2 py-1 font-mono text-[10px] font-bold">10 SOAL</span>
                        </div>
                      </div>
                      <h3 className="mt-7 text-2xl font-black tracking-[-.04em]">{drillPackage.title}</h3>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider">{stats.length ? `${stats.length}/10 dicoba · ${percentage}%` : "Belum dikerjakan"}</p>
                      <Button type="button" onClick={() => handleInitiateDrill(drillPackage)} className="mt-5 h-11 w-full rounded-none">
                        {isUnlocked ? "Mulai paket" : "Buka & Mulai"} <ArrowRight />
                      </Button>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Drill Access Code Dialog */}
            <Dialog open={Boolean(pendingDrillPackage)} onOpenChange={(open) => {
              if (!open) {
                setPendingDrillPackage(null);
                setDrillAccessCodeInput("");
                setDrillAccessCodeError(null);
              }
            }}>
              <DialogContent
                showCloseButton={false}
                className="flex flex-col w-[min(94vw,28rem)] gap-0 rounded-none border-2 border-black bg-background p-0 text-foreground shadow-[8px_8px_0_0_#2143d8] overflow-hidden sm:max-w-md"
              >
                <DialogHeader className="grid min-h-20 grid-cols-[1fr_4rem] items-stretch gap-0 border-b-2 border-black bg-brand-blue p-0 text-white shrink-0 text-left">
                  <div className="flex min-w-0 flex-col justify-center px-5 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-[.18em] text-signal">Akses Terkunci</span>
                    <DialogTitle className="mt-0.5 text-xl font-black uppercase tracking-[-.03em] text-white">Masukkan Kode Drill</DialogTitle>
                    <DialogDescription className="sr-only">Masukkan kode akses untuk membuka paket drill {pendingDrillPackage?.title}</DialogDescription>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPendingDrillPackage(null);
                      setDrillAccessCodeInput("");
                      setDrillAccessCodeError(null);
                    }}
                    className="flex min-h-16 items-center justify-center border-l-2 border-black bg-brand-red text-white transition-colors hover:bg-red-700"
                    aria-label="Tutup dialog kode akses"
                  >
                    <X className="size-6" aria-hidden="true" />
                  </button>
                </DialogHeader>

                <div className="p-5 space-y-4 bg-warm-white">
                  <p className="text-sm font-medium">
                    Paket <strong>{pendingDrillPackage?.title}</strong> membutuhkan kode akses sebelum mulai mengerjakan.
                  </p>

                  <div className="space-y-1.5">
                    <label htmlFor="drill-access-code-input" className="font-mono text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1.5">
                      <Key className="size-3.5 text-brand-blue" />
                      Kode Akses Drill
                    </label>
                    <input
                      id="drill-access-code-input"
                      type="text"
                      value={drillAccessCodeInput}
                      onChange={(e) => {
                        setDrillAccessCodeInput(e.target.value);
                        if (drillAccessCodeError) setDrillAccessCodeError(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleConfirmDrillCode();
                        }
                      }}
                      placeholder="Masukkan kode akses"
                      className="w-full border-2 border-black bg-white px-3 py-2.5 font-mono text-base font-bold uppercase tracking-widest text-black placeholder:font-sans placeholder:text-xs placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      autoFocus
                    />
                    {drillAccessCodeError && (
                      <p className="font-mono text-xs font-bold text-brand-red">
                        {drillAccessCodeError}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 rounded-none border-2 border-black font-mono text-xs font-bold uppercase"
                      onClick={() => {
                        setPendingDrillPackage(null);
                        setDrillAccessCodeInput("");
                        setDrillAccessCodeError(null);
                      }}
                    >
                      Batal
                    </Button>
                    <Button
                      type="button"
                      className="flex-1 rounded-none border-2 border-black bg-brand-blue text-white font-mono text-xs font-bold uppercase hover:bg-blue-700"
                      onClick={handleConfirmDrillCode}
                    >
                      Buka & Mulai
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </PageFrame>
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
      <QuestionCard question={current} selectedId={selectedId} onSelect={select} />
    </ExamShell>
  );
}
