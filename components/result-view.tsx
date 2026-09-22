"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Info,
  ListOrdered,
  RotateCcw,
  X,
  XCircle,
} from "lucide-react";
import { MathText } from "@/components/math-text";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CATEGORIES, EXAM_RULES } from "@/lib/exam-rules";
import { bestScore, choiceScore } from "@/lib/scoring";
import type { AttemptResult, Question } from "@/lib/types";

function duration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}m ${rest}s`;
}

type ReviewFilter = "all" | "incorrect" | "correct";

export function ResultView({
  result,
  questions,
  onClose,
}: {
  result: AttemptResult;
  questions: Question[];
  onClose?: () => void;
}) {
  const activeCategories = useMemo(
    () => CATEGORIES.filter((category) => questions.some((question) => question.category === category)),
    [questions]
  );
  const isMiniTiu = activeCategories.length === 1 && activeCategories[0] === "TIU";
  const isMiniTwk = activeCategories.length === 1 && activeCategories[0] === "TWK";
  const isMiniTkp = activeCategories.length === 1 && activeCategories[0] === "TKP";
  const isMini = isMiniTiu || isMiniTwk || isMiniTkp;
  const maximum = useMemo(
    () => questions.reduce((sum, question) => sum + bestScore(question), 0),
    [questions]
  );

  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [categoryTab, setCategoryTab] = useState<string>("ALL");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const questionsWithStats = useMemo(() => {
    return questions.map((question, index) => {
      const selectedId = result.answers[question.id];
      const earned = choiceScore(question, selectedId);
      const maxScore = bestScore(question);
      const isCorrect = earned === maxScore && earned > 0;
      return {
        question,
        index,
        selectedId,
        earned,
        maximum: maxScore,
        isCorrect,
      };
    });
  }, [questions, result.answers]);

  const correctCount = useMemo(
    () => questionsWithStats.filter((q) => q.isCorrect).length,
    [questionsWithStats]
  );
  const incorrectCount = questionsWithStats.length - correctCount;

  const currentReview = questionsWithStats[activeReviewIndex] ?? questionsWithStats[0];

  const categoryStats = useMemo(() => {
    return activeCategories.map((cat) => {
      const catQuestions = questionsWithStats.filter((q) => q.question.category === cat);
      const catWrong = catQuestions.filter((q) => !q.isCorrect).length;
      return {
        category: cat,
        total: catQuestions.length,
        wrong: catWrong,
        correct: catQuestions.length - catWrong,
      };
    });
  }, [activeCategories, questionsWithStats]);

  const filteredIndices = useMemo(() => {
    return questionsWithStats
      .filter((item) => {
        if (reviewFilter === "incorrect") return !item.isCorrect;
        if (reviewFilter === "correct") return item.isCorrect;
        return true;
      })
      .map((item) => item.index);
  }, [questionsWithStats, reviewFilter]);

  const nextIndex = filteredIndices.find((idx) => idx > (currentReview?.index ?? 0));
  const prevIndex = [...filteredIndices].reverse().find((idx) => idx < (currentReview?.index ?? 0));

  const selectQuestion = useCallback(
    (index: number) => {
      setActiveReviewIndex(index);
      if (categoryTab !== "ALL" && questionsWithStats[index]) {
        setCategoryTab(questionsWithStats[index].question.category);
      }
    },
    [categoryTab, questionsWithStats]
  );

  const handleNext = () => {
    if (nextIndex !== undefined) {
      selectQuestion(nextIndex);
    }
  };

  const handlePrev = () => {
    if (prevIndex !== undefined) {
      selectQuestion(prevIndex);
    }
  };

  const handleFilterChange = (filter: ReviewFilter) => {
    setReviewFilter(filter);
    if (filter === "incorrect" && currentReview?.isCorrect) {
      const firstIncorrect = questionsWithStats.find((item) => !item.isCorrect);
      if (firstIncorrect) {
        selectQuestion(firstIncorrect.index);
      }
    } else if (filter === "correct" && !currentReview?.isCorrect) {
      const firstCorrect = questionsWithStats.find((item) => item.isCorrect);
      if (firstCorrect) {
        selectQuestion(firstCorrect.index);
      }
    }
  };

  const handleCategoryTabClick = (cat: string) => {
    setCategoryTab(cat);
    if (cat !== "ALL" && currentReview?.question.category !== cat) {
      const firstMatchingInCat = questionsWithStats.find((q) => {
        if (q.question.category !== cat) return false;
        if (reviewFilter === "incorrect") return !q.isCorrect;
        if (reviewFilter === "correct") return q.isCorrect;
        return true;
      });
      if (firstMatchingInCat) {
        setActiveReviewIndex(firstMatchingInCat.index);
      } else {
        const firstInCat = questionsWithStats.find((q) => q.question.category === cat);
        if (firstInCat) setActiveReviewIndex(firstInCat.index);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight") {
        if (nextIndex !== undefined) {
          e.preventDefault();
          selectQuestion(nextIndex);
        }
      } else if (e.key === "ArrowLeft") {
        if (prevIndex !== undefined) {
          e.preventDefault();
          selectQuestion(prevIndex);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextIndex, prevIndex, selectQuestion]);

  const paletteQuestions = useMemo(() => {
    if (categoryTab === "ALL") {
      return questionsWithStats;
    }
    return questionsWithStats.filter((q) => q.question.category === categoryTab);
  }, [categoryTab, questionsWithStats]);

  const renderPalette = (isMobile = false) => {
    return (
      <div>
        {activeCategories.length > 1 && (
          <div className="mb-4 flex flex-wrap gap-1.5 border-b-2 border-black pb-3">
            <button
              type="button"
              onClick={() => handleCategoryTabClick("ALL")}
              className={`border-2 border-black px-2.5 py-1 font-mono text-[11px] font-bold uppercase transition-colors ${
                categoryTab === "ALL"
                  ? "bg-black text-white"
                  : "bg-warm-white hover:bg-black/10"
              }`}
            >
              Semua ({questions.length})
            </button>
            {categoryStats.map((cs) => {
              const isActive = categoryTab === cs.category;
              const hasErrors = cs.wrong > 0;
              return (
                <button
                  key={cs.category}
                  type="button"
                  onClick={() => handleCategoryTabClick(cs.category)}
                  className={`flex items-center gap-1.5 border-2 border-black px-2.5 py-1 font-mono text-[11px] font-bold uppercase transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-warm-white hover:bg-black/10"
                  }`}
                >
                  <span>{cs.category} ({cs.total})</span>
                  {hasErrors && (
                    <span
                      className={`inline-block size-2 rounded-full ${
                        isActive ? "bg-signal" : "bg-brand-red"
                      }`}
                      title={`${cs.wrong} perlu evaluasi`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        <div
          className={`grid gap-1.5 max-h-[380px] overflow-y-auto pr-1 ${
            isMobile ? "grid-cols-6 sm:grid-cols-8" : "grid-cols-5 xl:grid-cols-6"
          }`}
        >
          {paletteQuestions.map((item) => {
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
                onClick={() => {
                  selectQuestion(item.index);
                  if (isMobile) setIsDrawerOpen(false);
                }}
                className={`relative flex size-10 shrink-0 items-center justify-center border-2 font-mono text-xs font-black transition-all ${
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
                title={`Soal ${item.index + 1}: ${item.question.category} · ${
                  item.isCorrect ? "Benar" : "Salah"
                }`}
              >
                <span>{item.index + 1}</span>
                {item.isCorrect ? (
                  <span className="absolute -bottom-1 -right-1 flex size-3 items-center justify-center border border-black bg-black text-[8px] text-white">
                    ✓
                  </span>
                ) : (
                  <span className="absolute -bottom-1 -right-1 flex size-3 items-center justify-center border border-black bg-brand-red text-[8px] text-white">
                    ✕
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="border-t border-black">
      <div className="grid border-b border-black lg:grid-cols-[1fr_.65fr]">
        <div className={`p-5 sm:p-8 lg:border-r lg:border-black lg:p-10 ${result.passed ? "bg-signal/20" : "bg-brand-red-soft/60"}`}>
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">Hasil Try Out</p>
          <div className="mt-4 flex items-baseline gap-4">
            <span className="text-6xl font-black tracking-[-.07em] sm:text-7xl">{result.totalScore}</span>
            <span className="font-mono text-base font-bold sm:text-lg">dari {maximum} poin</span>
          </div>
          <p className="mt-3 flex items-center gap-2 text-base sm:text-lg font-bold">
            {result.passed ? <CheckCircle2 className="size-5 text-black" /> : <XCircle className="size-5 text-brand-red" />}
            {result.passed
              ? isMiniTiu
                ? "Memenuhi target latihan TIU"
                : isMiniTwk
                ? "Memenuhi target latihan TWK"
                : isMiniTkp
                ? "Memenuhi target latihan TKP"
                : "Memenuhi seluruh ambang batas"
              : isMiniTiu
              ? "Belum mencapai target latihan TIU"
              : isMiniTwk
              ? "Belum mencapai target latihan TWK"
              : isMiniTkp
              ? "Belum mencapai target latihan TKP"
              : "Belum memenuhi seluruh ambang batas"}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase text-muted-foreground">
            <span>Waktu: {duration(result.durationSeconds)}</span>
            <span>·</span>
            <span>
              Dijawab: {questions.filter((question) => result.answers[question.id]).length}/{questions.length}
            </span>
          </div>
        </div>

        {/* Desktop Evaluasi Mandiri Box (>= 1024px) */}
        <div className="hidden flex-col justify-between bg-signal p-5 sm:p-8 lg:flex lg:p-10">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Evaluasi Mandiri</p>
            <p className="mt-3 text-base font-bold sm:text-lg">
              Tinjau pembahasan setiap soal di bawah untuk memperkuat konsep dan strategi menjawab CAT SKD.
            </p>
          </div>
          {onClose && (
            <Button
              className="mt-8 h-12 rounded-none bg-black text-white hover:bg-black/80 font-mono text-xs font-bold uppercase"
              onClick={onClose}
            >
              <RotateCcw className="mr-2 size-4" /> Try out lagi
            </Button>
          )}
        </div>
      </div>

      {/* Subtest stats in ONE row across all screens */}
      <div
        className={`grid border-b border-black ${
          activeCategories.length > 1 ? "grid-cols-3 divide-x divide-black" : "grid-cols-1"
        }`}
      >
        {activeCategories.map((category) => {
          const score = result.scores[category];
          return (
            <article
              key={category}
              className="p-3 sm:p-6 text-center sm:text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">
                  {category}
                </span>
                <span
                  className={`inline-block self-center sm:self-auto font-mono text-[9px] sm:text-xs font-bold px-1.5 py-0.5 border border-black ${
                    score.passed ? "bg-signal text-black" : "bg-brand-red text-white"
                  }`}
                >
                  {score.passed ? "Lolos" : "Belum"}
                </span>
              </div>
              <p className="mt-1 sm:mt-3 text-2xl sm:text-4xl font-black tracking-tight">{score.score}</p>
              <div className="mt-1 font-mono text-[10px] sm:text-xs text-muted-foreground leading-tight sm:leading-normal">
                <span className="block sm:inline">{isMini ? "Target" : "Ambang"} {EXAM_RULES.passingScores[category]}</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">Maks {score.maximum}</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Review Section */}
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-8 border-b-2 border-black pb-5">
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">
            Tinjau Ulang
          </p>
          <h3 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">PEMBAHASAN TRY OUT</h3>
        </div>

        {/* Mobile Top Navigation Bar (< 1024px) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 lg:hidden">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-9 rounded-none border-2 border-black font-mono font-bold"
              disabled={prevIndex === undefined}
              onClick={handlePrev}
              title="Sebelumnya"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <span className="font-mono text-xs font-bold uppercase">
              Soal {currentReview?.index !== undefined ? currentReview.index + 1 : 1}/{questions.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="h-9 rounded-none border-2 border-black font-mono font-bold"
              disabled={nextIndex === undefined}
              onClick={handleNext}
              title="Berikutnya"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 rounded-none border-2 border-black bg-signal font-mono text-xs font-black uppercase text-black hover:bg-signal/80"
              >
                <ListOrdered className="mr-1.5 size-4" /> Daftar Soal ({questions.length})
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="max-h-[85vh] rounded-t-2xl border-t-4 border-black bg-background p-5 sm:p-6"
            >
              <SheetHeader className="p-0 pb-3">
                <SheetTitle className="font-mono text-sm font-black uppercase tracking-[.14em]">
                  Daftar Nomor Soal ({questions.length})
                </SheetTitle>
                <SheetDescription className="text-xs text-muted-foreground">
                  Pilih nomor soal untuk langsung meninjau pembahasan.
                </SheetDescription>
              </SheetHeader>

              <div className="mt-2 flex flex-wrap gap-2 pb-3">
                <button
                  type="button"
                  onClick={() => handleFilterChange("all")}
                  className={`border-2 border-black px-3 py-1 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "all" ? "bg-black text-white" : "bg-warm-white"
                  }`}
                >
                  Semua ({questions.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("incorrect")}
                  className={`border-2 border-black px-3 py-1 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "incorrect"
                      ? "bg-brand-red text-white"
                      : "bg-brand-red-soft text-brand-red"
                  }`}
                >
                  Salah Saja ({incorrectCount})
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("correct")}
                  className={`border-2 border-black px-3 py-1 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "correct" ? "bg-signal text-black" : "bg-warm-white"
                  }`}
                >
                  Benar Saja ({correctCount})
                </button>
              </div>

              {renderPalette(true)}
            </SheetContent>
          </Sheet>
        </div>

        {/* Side-by-side Container on Desktop */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          {/* Left Column: Question Card & Review Content */}
          <div>
            {currentReview ? (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-blue">
                    Soal {currentReview.index + 1} · {currentReview.question.category} ·{" "}
                    {currentReview.question.topic}
                  </span>
                  <div>
                    {currentReview.isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black">
                        <Check className="size-4 text-brand-blue" /> Skor Penuh (
                        {currentReview.earned}/{currentReview.maximum})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-red">
                        <X className="size-4" />{" "}
                        {currentReview.selectedId ? "Kurang Tepat" : "Tidak Dijawab"} (
                        {currentReview.earned}/{currentReview.maximum})
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

                <div className="mt-8 flex items-center justify-between gap-2 border-t-2 border-black pt-5">
                  <Button
                    variant="outline"
                    className="h-10 rounded-none border-black px-3 font-mono text-xs font-bold uppercase sm:px-4 shrink-0"
                    disabled={prevIndex === undefined}
                    onClick={handlePrev}
                  >
                    <ChevronLeft className="size-4 sm:mr-1" />
                    <span className="hidden sm:inline">Sebelumnya</span>
                  </Button>

                  <div className="text-center font-mono shrink min-w-0">
                    {/* Mobile view (< 640px): 2/110 */}
                    <span className="text-xs font-black sm:hidden truncate block">
                      {currentReview.index + 1}/{questions.length}
                      {reviewFilter !== "all" && (
                        <span className="ml-1 text-[10px] font-normal text-muted-foreground">
                          ({filteredIndices.indexOf(currentReview.index) + 1}/{filteredIndices.length}{" "}
                          {reviewFilter === "incorrect" ? "salah" : "benar"})
                        </span>
                      )}
                    </span>
                    {/* Desktop view (>= 640px): Soal 2 dari 110 */}
                    <span className="hidden text-xs font-bold uppercase tracking-[.14em] sm:inline">
                      Soal {currentReview.index + 1} dari {questions.length}
                      {reviewFilter !== "all" && (
                        <span className="ml-2 text-muted-foreground">
                          ({filteredIndices.indexOf(currentReview.index) + 1} dari{" "}
                          {filteredIndices.length}{" "}
                          {reviewFilter === "incorrect" ? "salah" : "benar"})
                        </span>
                      )}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="h-10 rounded-none border-black px-3 font-mono text-xs font-bold uppercase sm:px-4 shrink-0"
                    disabled={nextIndex === undefined}
                    onClick={handleNext}
                  >
                    <span className="hidden sm:inline">Berikutnya</span>
                    <ChevronRight className="size-4 sm:ml-1" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-black/40 p-12 text-center">
                <p className="font-mono text-sm font-bold uppercase">
                  Tidak ada soal yang sesuai dengan filter ini.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-none border-black font-mono text-xs font-bold uppercase"
                  onClick={() => handleFilterChange("all")}
                >
                  Tampilkan Semua Soal
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: Desktop Sticky Number Palette Panel (>= 1024px) */}
          <div className="hidden lg:block">
            <div className="sticky top-6 border-2 border-black bg-warm-white p-5 shadow-[4px_4px_0_0_#000]">
              <div className="mb-4 flex items-center justify-between border-b-2 border-black pb-3">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-brand-red">
                    Navigasi
                  </p>
                  <h4 className="text-lg font-black uppercase tracking-tight">Daftar Soal</h4>
                </div>
                <span className="font-mono text-xs font-bold">
                  {currentReview?.index !== undefined ? currentReview.index + 1 : 1} /{" "}
                  {questions.length}
                </span>
              </div>

              {/* Status Filter Pills */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleFilterChange("all")}
                  className={`border-2 border-black px-2.5 py-1 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "all" ? "bg-black text-white" : "bg-white hover:bg-black/10"
                  }`}
                >
                  Semua ({questions.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("incorrect")}
                  className={`border-2 border-black px-2.5 py-1 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "incorrect"
                      ? "bg-brand-red text-white"
                      : "bg-brand-red-soft text-brand-red hover:bg-brand-red/20"
                  }`}
                >
                  Salah ({incorrectCount})
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("correct")}
                  className={`border-2 border-black px-2.5 py-1 font-mono text-xs font-bold transition-colors ${
                    reviewFilter === "correct"
                      ? "bg-signal text-black"
                      : "bg-white hover:bg-signal/40"
                  }`}
                >
                  Benar ({correctCount})
                </button>
              </div>

              {/* Category tabs + Question numbers */}
              {renderPalette(false)}

              <div className="mt-4 border-t border-black/20 pt-3 text-center">
                <p className="font-mono text-[11px] text-muted-foreground">
                  Gunakan tombol <kbd className="border border-black/40 px-1 py-0.5 text-[10px]">←</kbd>{" "}
                  dan <kbd className="border border-black/40 px-1 py-0.5 text-[10px]">→</kbd> keyboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Evaluasi Mandiri Box (< 1024px) */}
      <div className="border-t-2 border-black bg-signal p-5 sm:p-8 lg:hidden">
        <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Evaluasi Mandiri</p>
        <p className="mt-2 text-base font-bold sm:text-lg">
          Sudah selesai meninjau pembahasan? Lakukan simulasi try out lagi untuk menguji peningkatan kesiapanmu.
        </p>
        {onClose && (
          <Button
            className="mt-6 h-12 w-full rounded-none bg-black text-base text-white hover:bg-black/80 font-mono text-xs font-bold uppercase"
            onClick={onClose}
          >
            <RotateCcw className="mr-2 size-4" /> Try out lagi
          </Button>
        )}
      </div>
    </section>
  );
}
