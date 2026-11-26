"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Flame,
  Heart,
  HelpCircle,
  Lightbulb,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import type { GameModeType } from "@/lib/game-engine";
import {
  playCorrectSound,
  playGameOverSound,
  playStreakSound,
  playWrongSound,
  startBackgroundMusic,
  stopBackgroundMusic,
} from "@/lib/game-sound";
import {
  createDefaultSisaBagiStats,
  readSisaBagiStats,
  updateSisaBagiStats,
  type GameStats,
} from "@/lib/game-storage";
import {
  generateSisaBagiQuestion,
  generateSisaBagiSet,
  getSisaBagiSurvivalTimeLimitSec,
  type SisaBagiChallengeMode,
  type SisaBagiDigitLevel,
  type SisaBagiDivisorFilter,
  type SisaBagiQuestion,
} from "@/lib/sisa-bagi-engine";

interface AnswerHistoryItem {
  question: SisaBagiQuestion;
  userAnswer: string;
  isCorrect: boolean;
  timeSpentSec: number;
}

interface SisaBagiGameClientProps {
  onBack: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
}

type HitungInputStyle = "keypad" | "options";

const ELIMINATION_BADGE: Record<
  "correct" | "last_digit" | "mod9" | "mod11",
  { label: string; className: string }
> = {
  correct: {
    label: "BENAR · SETARA",
    className: "bg-emerald-600 text-white border-black",
  },
  last_digit: {
    label: "Gugur: Digit Terakhir",
    className: "bg-amber-300 text-black border-black",
  },
  mod9: {
    label: "Gugur: Sisa Bagi 9",
    className: "bg-rose-200 text-rose-950 border-black",
  },
  mod11: {
    label: "Gugur: Sisa Bagi 11",
    className: "bg-violet-200 text-violet-950 border-black",
  },
};

export function SisaBagiGameClient({
  onBack,
  soundOn,
  onToggleSound,
}: SisaBagiGameClientProps) {
  // Settings
  const [challengeMode, setChallengeMode] =
    useState<SisaBagiChallengeMode>("mixed");
  const [divisorFilter, setDivisorFilter] =
    useState<SisaBagiDivisorFilter>("mixed");
  const [digitLevel, setDigitLevel] = useState<SisaBagiDigitLevel>("all");
  const [hitungInputStyle, setHitungInputStyle] =
    useState<HitungInputStyle>("keypad");
  const [modeType, setModeType] = useState<GameModeType>("survival");
  const [fixedCount, setFixedCount] = useState<5 | 10 | 20>(10);
  const [fixedTimeLimitMinutes, setFixedTimeLimitMinutes] = useState<number>(4);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  // Lifecycle
  const [gameState, setGameState] = useState<"lobby" | "playing" | "summary">(
    "lobby"
  );
  const [stats, setStats] = useState<GameStats>(createDefaultSisaBagiStats);

  // Match State
  const [questions, setQuestions] = useState<SisaBagiQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [history, setHistory] = useState<AnswerHistoryItem[]>([]);

  // Answer feedback
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);

  // Timers
  const [survivalRemainingMs, setSurvivalRemainingMs] = useState<number>(45000);
  const [survivalTotalMs, setSurvivalTotalMs] = useState<number>(45000);
  const [fixedRemainingMs, setFixedRemainingMs] = useState<number>(240000);

  const questionStartTimeRef = useRef<number>(0);
  const timerIntervalRef = useRef<number | null>(null);
  const autoAdvanceTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStats(readSisaBagiStats());
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameState === "playing" && soundOn) {
      startBackgroundMusic("hitung");
    } else {
      stopBackgroundMusic();
    }
    return () => {
      stopBackgroundMusic();
    };
  }, [gameState, soundOn]);

  const currentQuestion = questions[currentIndex] as
    | SisaBagiQuestion
    | undefined;

  const startGame = useCallback(() => {
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    let initialQuestions: SisaBagiQuestion[] = [];
    if (modeType === "fixed") {
      initialQuestions = generateSisaBagiSet(
        challengeMode,
        divisorFilter,
        digitLevel,
        fixedCount
      );
    } else {
      initialQuestions = [
        generateSisaBagiQuestion(challengeMode, divisorFilter, digitLevel, 1),
        generateSisaBagiQuestion(challengeMode, divisorFilter, digitLevel, 2),
        generateSisaBagiQuestion(challengeMode, divisorFilter, digitLevel, 3),
      ];
    }

    setQuestions(initialQuestions);
    setCurrentIndex(0);
    setLives(3);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHistory([]);
    setSelectedOption(null);
    setIsAnswerRevealed(false);

    const firstMode = initialQuestions[0]?.challengeMode ?? "hitung-sisa";
    const firstLimitSec =
      modeType === "survival"
        ? getSisaBagiSurvivalTimeLimitSec(1, firstMode)
        : 0;
    setSurvivalRemainingMs(firstLimitSec * 1000);
    setSurvivalTotalMs(firstLimitSec * 1000);
    setFixedRemainingMs(fixedTimeLimitMinutes * 60 * 1000);
    questionStartTimeRef.current = Date.now();

    setGameState("playing");
  }, [
    challengeMode,
    digitLevel,
    divisorFilter,
    fixedCount,
    fixedTimeLimitMinutes,
    modeType,
  ]);

  const finishGame = useCallback(
    (
      reason: "lives_depleted" | "all_questions_answered" | "time_out",
      finalHistory?: AnswerHistoryItem[],
      finalScore?: number,
      finalMaxStreak?: number
    ) => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (autoAdvanceTimeoutRef.current)
        clearTimeout(autoAdvanceTimeoutRef.current);

      if (reason === "lives_depleted") {
        playGameOverSound();
      }

      setGameState("summary");

      const histToSave = finalHistory ?? history;
      const scoreToSave = finalScore ?? score;
      const streakToSave = finalMaxStreak ?? maxStreak;
      const correctCount = histToSave.filter((h) => h.isCorrect).length;

      const updated = updateSisaBagiStats({
        mode: modeType,
        fixedCount: modeType === "fixed" ? fixedCount : undefined,
        score: scoreToSave,
        streak: streakToSave,
        answered: histToSave.length,
        correct: correctCount,
      });
      setStats(updated);
    },
    [fixedCount, history, maxStreak, modeType, score]
  );

  const advanceToNext = useCallback(
    (overrideHistory?: AnswerHistoryItem[], overrideScore?: number, overrideStreak?: number) => {
      if (autoAdvanceTimeoutRef.current)
        clearTimeout(autoAdvanceTimeoutRef.current);

      setSelectedOption(null);
      setIsAnswerRevealed(false);

      if (modeType === "fixed") {
        const nextIdx = currentIndex + 1;
        if (nextIdx >= questions.length) {
          finishGame(
            "all_questions_answered",
            overrideHistory,
            overrideScore,
            overrideStreak
          );
          return;
        }
        setCurrentIndex(nextIdx);
        questionStartTimeRef.current = Date.now();
      } else {
        const nextIdx = currentIndex + 1;
        const upcoming = generateSisaBagiQuestion(
          challengeMode,
          divisorFilter,
          digitLevel,
          nextIdx + 1
        );
        setQuestions((prev) => [...prev, upcoming]);
        setCurrentIndex(nextIdx);

        const nextLimitSec = getSisaBagiSurvivalTimeLimitSec(
          nextIdx + 1,
          upcoming.challengeMode
        );
        setSurvivalRemainingMs(nextLimitSec * 1000);
        setSurvivalTotalMs(nextLimitSec * 1000);
        questionStartTimeRef.current = Date.now();
      }
    },
    [
      challengeMode,
      currentIndex,
      digitLevel,
      divisorFilter,
      finishGame,
      modeType,
      questions.length,
    ]
  );

  const handleAnswer = useCallback(
    (chosen: string) => {
      if (isAnswerRevealed || !currentQuestion) return;

      const timeSpentSec = Math.max(
        1,
        Math.round((Date.now() - questionStartTimeRef.current) / 1000)
      );
      const isCorrect = chosen === currentQuestion.correctAnswer;
      setSelectedOption(chosen);
      setIsAnswerRevealed(true);

      const newHistoryItem: AnswerHistoryItem = {
        question: currentQuestion,
        userAnswer: chosen,
        isCorrect,
        timeSpentSec,
      };
      const nextHistory = [...history, newHistoryItem];
      setHistory(nextHistory);

      if (isCorrect) {
        const nextStreak = streak + 1;
        const nextMaxStreak = Math.max(maxStreak, nextStreak);
        setStreak(nextStreak);
        setMaxStreak(nextMaxStreak);

        const basePoints =
          currentQuestion.challengeMode === "pasangan-setara" ? 150 : 100;
        const streakBonus = Math.min(60, nextStreak * 10);
        const nextScore = score + basePoints + streakBonus;
        setScore(nextScore);

        if (nextStreak > 0 && nextStreak % 3 === 0) {
          playStreakSound();
        } else {
          playCorrectSound();
        }

        if (autoAdvance) {
          const delayMs =
            currentQuestion.challengeMode === "pasangan-setara" ? 2600 : 1600;
          autoAdvanceTimeoutRef.current = window.setTimeout(
            () => advanceToNext(nextHistory, nextScore, nextMaxStreak),
            delayMs
          );
        }
      } else {
        setStreak(0);
        playWrongSound();

        if (modeType === "survival") {
          const nextLives = lives - 1;
          setLives(nextLives);
          if (nextLives <= 0) {
            autoAdvanceTimeoutRef.current = window.setTimeout(() => {
              finishGame("lives_depleted", nextHistory, score, maxStreak);
            }, 2200);
            return;
          }
        }

        if (autoAdvance) {
          const delayMs =
            currentQuestion.challengeMode === "pasangan-setara" ? 3400 : 2400;
          autoAdvanceTimeoutRef.current = window.setTimeout(
            () => advanceToNext(nextHistory, score, maxStreak),
            delayMs
          );
        }
      }
    },
    [
      advanceToNext,
      autoAdvance,
      currentQuestion,
      finishGame,
      history,
      isAnswerRevealed,
      lives,
      maxStreak,
      modeType,
      score,
      streak,
    ]
  );

  // Timer loop
  useEffect(() => {
    if (gameState !== "playing" || isAnswerRevealed) return;

    const interval = window.setInterval(() => {
      if (modeType === "survival") {
        setSurvivalRemainingMs((prev) => {
          const next = prev - 100;
          if (next <= 0) {
            playWrongSound();
            const timeSpentSec = Math.round(survivalTotalMs / 1000);
            let nextHist = history;
            if (currentQuestion) {
              nextHist = [
                ...history,
                {
                  question: currentQuestion,
                  userAnswer: "(Waktu Habis)",
                  isCorrect: false,
                  timeSpentSec,
                },
              ];
              setHistory(nextHist);
            }
            setStreak(0);
            const remaining = lives - 1;
            setLives(remaining);
            if (remaining <= 0) {
              finishGame("lives_depleted", nextHist, score, maxStreak);
            } else {
              advanceToNext(nextHist, score, maxStreak);
            }
            return 0;
          }
          return next;
        });
      }

      if (modeType === "fixed" && fixedTimeLimitMinutes > 0) {
        setFixedRemainingMs((prev) => {
          const next = prev - 100;
          if (next <= 0) {
            finishGame("time_out");
            return 0;
          }
          return next;
        });
      }
    }, 100);

    timerIntervalRef.current = interval;
    return () => window.clearInterval(interval);
  }, [
    advanceToNext,
    currentQuestion,
    finishGame,
    fixedTimeLimitMinutes,
    gameState,
    history,
    isAnswerRevealed,
    lives,
    maxStreak,
    modeType,
    score,
    survivalTotalMs,
  ]);

  // Keyboard shortcuts
  useEffect(() => {
    if (gameState !== "playing") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (isAnswerRevealed) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          advanceToNext();
        }
        return;
      }

      if (!currentQuestion) return;

      const usingMultipleChoice =
        currentQuestion.challengeMode === "pasangan-setara" ||
        hitungInputStyle === "options";

      if (usingMultipleChoice) {
        const key = e.key.toUpperCase();
        let idx = -1;
        if (["1", "A"].includes(key)) idx = 0;
        else if (["2", "B"].includes(key)) idx = 1;
        else if (["3", "C"].includes(key)) idx = 2;
        else if (["4", "D"].includes(key)) idx = 3;
        else if (["5", "E"].includes(key)) idx = 4;

        if (idx >= 0 && idx < currentQuestion.options.length) {
          e.preventDefault();
          handleAnswer(currentQuestion.options[idx]);
        }
      } else if (/^[0-9]$/.test(e.key)) {
        if (currentQuestion.divisor === 9 && e.key !== "0") {
          e.preventDefault();
          handleAnswer(e.key);
        } else if (currentQuestion.divisor === 11) {
          e.preventDefault();
          handleAnswer(e.key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    advanceToNext,
    currentQuestion,
    gameState,
    handleAnswer,
    hitungInputStyle,
    isAnswerRevealed,
  ]);

  const formatTime = (ms: number) => {
    const totalSec = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const performanceEvaluation = useMemo(() => {
    const correctCount = history.filter((h) => h.isCorrect).length;
    const total = history.length || 1;
    const accuracy = Math.round((correctCount / total) * 100);

    if (accuracy === 100 && total >= 10) {
      return {
        badge: "MASTER MODULO 9 & 11",
        color: "bg-signal text-black",
        desc: "Sempurna! Insting uji digit terakhir, sisa bagi 9 (1–9), dan selisih bergantian 11 Anda sangat tajam.",
      };
    }
    if (accuracy >= 80) {
      return {
        badge: "SANGAT TANGKAS",
        color: "bg-violet-600 text-white",
        desc: "Mantap! Anda mampu menyingkirkan perkalian panjang hanya lewat cek digit & sisa bagi.",
      };
    }
    if (accuracy >= 60) {
      return {
        badge: "TERUS BERKEMBANG",
        color: "bg-amber-300 text-black",
        desc: "Bagus! Perhatikan kembali langkah selisih bergantian dari kanan saat menguji sisa bagi 11.",
      };
    }
    return {
      badge: "BUTUH LATIHAN",
      color: "bg-neutral-300 text-black",
      desc: "Jangan menyerah! Biasakan buang kelipatan 9 dulu, dan hitung posisi ganjil − genap dari kanan untuk pembagi 11.",
    };
  }, [history]);

  // =========================================================================
  // LOBBY
  // =========================================================================
  if (gameState === "lobby") {
    return (
      <PageFrame
        eyebrow="TIU / Sisa Bagi 9 & 11"
        title="ARENA SISA BAGI."
        description="Hitung sisa bagi 9 (1–9) & sisa bagi 11 (0–10) dari perkalian puluhan, ratusan, ribuan, serta tebak pasangan perkalian setara dalam hitungan detik."
        showHeader={true}
      >
        <div className="p-4 sm:p-8 lg:p-10 space-y-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-5">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase py-1.5 px-3 border-2 border-black bg-warm-white hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="size-4" /> Daftar Game
            </button>

            <Button
              variant="outline"
              size="sm"
              onClick={onToggleSound}
              className="border-2 border-black font-mono text-xs font-bold hover:bg-secondary"
            >
              {soundOn ? (
                <>
                  <Volume2 className="size-4 mr-1 text-violet-700" /> Suara ON
                </>
              ) : (
                <>
                  <VolumeX className="size-4 mr-1 text-muted-foreground" /> Suara OFF
                </>
              )}
            </Button>
          </div>

          <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start">
            {/* Settings Panel */}
            <div className="border-2 border-black bg-card p-4 sm:p-8 shadow-[4px_4px_0_#10100f] sm:shadow-[6px_6px_0_#10100f] space-y-6 min-w-0">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Konfigurasi Permainan
                </span>
                <h2 className="text-2xl font-black uppercase tracking-tight mt-1">
                  Pengaturan Arena
                </h2>
              </div>

              {/* 1. Mode Tantangan */}
              <div className="space-y-2.5">
                <label className="font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="size-3.5 text-violet-700" />
                  1. Mode Tantangan
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {(
                    [
                      {
                        id: "hitung-sisa",
                        label: "Hitung Sisa Bagi",
                        sub: "Cari sisa A × B",
                      },
                      {
                        id: "pasangan-setara",
                        label: "Pasangan Setara",
                        sub: "5 Opsi A×B = C×D",
                      },
                      {
                        id: "mixed",
                        label: "Campuran Keduanya",
                        sub: "Hitung & Pasangan",
                      },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setChallengeMode(item.id)}
                      className={`p-3 border-2 border-black text-left transition-all ${
                        challengeMode === item.id
                          ? "bg-violet-600 text-white shadow-[3px_3px_0_#10100f]"
                          : "bg-warm-white hover:bg-secondary text-foreground"
                      }`}
                    >
                      <div className="font-bold text-xs uppercase">
                        {item.label}
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          challengeMode === item.id
                            ? "text-white/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Fokus Pembagi */}
              <div className="space-y-2.5">
                <label className="font-mono text-xs font-bold uppercase tracking-wider">
                  2. Fokus Pembagi (Modulo)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      {
                        id: "mod9",
                        label: "Sisa Bagi 9",
                        sub: "Hasil 1–9",
                      },
                      {
                        id: "mod11",
                        label: "Sisa Bagi 11",
                        sub: "Hasil 0–10",
                      },
                      {
                        id: "mixed",
                        label: "Campuran 9 & 11",
                        sub: "HOTS Lengkap",
                      },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDivisorFilter(item.id)}
                      className={`p-3 border-2 border-black text-left transition-all ${
                        divisorFilter === item.id
                          ? "bg-signal text-black shadow-[3px_3px_0_#10100f]"
                          : "bg-warm-white hover:bg-secondary text-foreground"
                      }`}
                    >
                      <div className="font-bold text-xs uppercase">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">
                        {item.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Besaran Digit */}
              <div className="space-y-2.5">
                <label className="font-mono text-xs font-bold uppercase tracking-wider">
                  3. Besaran Bilangan
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(
                    [
                      { id: "puluhan", label: "Puluhan", sub: "2 Digit" },
                      { id: "ratusan", label: "Ratusan", sub: "3 Digit" },
                      { id: "ribuan", label: "Ribuan", sub: "4 Digit" },
                      { id: "all", label: "Campuran", sub: "Progresif" },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDigitLevel(item.id)}
                      className={`p-2.5 border-2 border-black text-left transition-all ${
                        digitLevel === item.id
                          ? "bg-black text-signal shadow-[3px_3px_0_#2143d8]"
                          : "bg-warm-white hover:bg-secondary text-foreground"
                      }`}
                    >
                      <div className="font-bold text-xs uppercase">
                        {item.label}
                      </div>
                      <div
                        className={`text-[10px] ${
                          digitLevel === item.id
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Mode Input untuk Hitung Sisa */}
              {challengeMode !== "pasangan-setara" && (
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider">
                    4. Cara Menjawab (Mode Hitung Sisa)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setHitungInputStyle("keypad")}
                      className={`p-2.5 border-2 border-black text-left ${
                        hitungInputStyle === "keypad"
                          ? "bg-brand-blue text-white shadow-[3px_3px_0_#10100f]"
                          : "bg-warm-white hover:bg-secondary"
                      }`}
                    >
                      <div className="font-bold text-xs uppercase">
                        Keypad Angka Langsung
                      </div>
                      <div
                        className={`text-[10px] ${
                          hitungInputStyle === "keypad"
                            ? "text-white/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        1–9 (Mod 9) / 0–10 (Mod 11)
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHitungInputStyle("options")}
                      className={`p-2.5 border-2 border-black text-left ${
                        hitungInputStyle === "options"
                          ? "bg-brand-blue text-white shadow-[3px_3px_0_#10100f]"
                          : "bg-warm-white hover:bg-secondary"
                      }`}
                    >
                      <div className="font-bold text-xs uppercase">
                        5 Pilihan Ganda (A–E)
                      </div>
                      <div
                        className={`text-[10px] ${
                          hitungInputStyle === "options"
                            ? "text-white/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        Pilih 1 dari 5 opsi angka
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* 5. Mode Sesi */}
              <div className="space-y-2.5">
                <label className="font-mono text-xs font-bold uppercase tracking-wider">
                  {challengeMode !== "pasangan-setara" ? "5." : "4."} Format
                  Sesi
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setModeType("survival")}
                    className={`p-3 border-2 border-black text-left transition-all ${
                      modeType === "survival"
                        ? "bg-brand-red text-white shadow-[3px_3px_0_#10100f]"
                        : "bg-warm-white hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black uppercase text-sm">
                      <Heart className="size-4 fill-current" /> Survival 3 Nyawa
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        modeType === "survival"
                          ? "text-white/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      Timer dinamis makin cepat seiring skor naik.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModeType("fixed")}
                    className={`p-3 border-2 border-black text-left transition-all ${
                      modeType === "fixed"
                        ? "bg-brand-blue text-white shadow-[3px_3px_0_#10100f]"
                        : "bg-warm-white hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black uppercase text-sm">
                      <Clock className="size-4" /> Sprint Soal
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        modeType === "fixed"
                          ? "text-white/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      Jumlah soal tetap (5, 10, atau 20 soal).
                    </div>
                  </button>
                </div>

                {modeType === "fixed" && (
                  <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-black/15">
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase block mb-1.5">
                        Jumlah Soal
                      </span>
                      <div className="flex gap-1.5">
                        {([5, 10, 20] as const).map((cnt) => (
                          <button
                            key={cnt}
                            type="button"
                            onClick={() => setFixedCount(cnt)}
                            className={`flex-1 py-1.5 border-2 border-black font-mono text-xs font-bold ${
                              fixedCount === cnt
                                ? "bg-signal text-black"
                                : "bg-warm-white"
                            }`}
                          >
                            {cnt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase block mb-1.5">
                        Batas Waktu
                      </span>
                      <div className="flex gap-1.5">
                        {[0, 2, 4, 8].map((mins) => (
                          <button
                            key={mins}
                            type="button"
                            onClick={() => setFixedTimeLimitMinutes(mins)}
                            className={`flex-1 py-1.5 border-2 border-black font-mono text-xs font-bold ${
                              fixedTimeLimitMinutes === mins
                                ? "bg-signal text-black"
                                : "bg-warm-white"
                            }`}
                          >
                            {mins === 0 ? "Bebas" : `${mins}m`}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <label className="flex items-center gap-2 pt-1 cursor-pointer select-none text-xs font-medium">
                  <input
                    type="checkbox"
                    checked={autoAdvance}
                    onChange={(e) => setAutoAdvance(e.target.checked)}
                    className="size-4 accent-violet-600"
                  />
                  Otomatis lanjut ke soal berikutnya setelah pembahasan tampil
                </label>
              </div>

              <Button
                type="button"
                onClick={startGame}
                className="w-full h-14 border-2 border-black bg-violet-600 hover:bg-violet-700 text-white font-mono text-base font-black uppercase tracking-wider shadow-[4px_4px_0_#10100f]"
              >
                <Play className="size-5 mr-2 fill-current" /> Mulai Arena Sisa Bagi
              </Button>
            </div>

            {/* Right Column: Stats + Quick Cheat Sheet */}
            <div className="space-y-5">
              <div className="border-2 border-black bg-warm-white p-5 shadow-[4px_4px_0_#10100f]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-violet-700">
                  <Trophy className="size-4" /> Rekor Pribadi
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="border border-black bg-background p-3">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                      High Score Survival
                    </span>
                    <strong
                      className="font-mono text-2xl font-black text-violet-700"
                      suppressHydrationWarning
                    >
                      {stats.survivalHighScore}
                    </strong>
                  </div>
                  <div className="border border-black bg-background p-3">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                      Streak Terbaik
                    </span>
                    <strong
                      className="font-mono text-2xl font-black text-amber-600"
                      suppressHydrationWarning
                    >
                      {stats.survivalBestStreak}x
                    </strong>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black bg-signal/25 p-5 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs font-black uppercase">
                  <Lightbulb className="size-4 text-brand-red" /> 3 Jurus Cepat
                  Eliminasi
                </div>
                <div className="space-y-2.5 text-xs leading-relaxed">
                  <div className="border border-black bg-warm-white p-3">
                    <strong className="font-mono uppercase block text-amber-900">
                      1. Digit Terakhir (Ekor Satuan)
                    </strong>
                    Kalikan angka paling belakang saja. Contoh:{" "}
                    <code>43 × 27</code> pasti berekor <code>3×7 = 1</code>. Langsung gugurkan 1–2 opsi yang ekornya beda!
                  </div>
                  <div className="border border-black bg-warm-white p-3">
                    <strong className="font-mono uppercase block text-rose-900">
                      2. Sisa Bagi 9 (Hasil 1–9)
                    </strong>
                    Jumlahkan semua digit (coret angka/pasangan 9). Kelipatan 9 bernilai{" "}
                    <strong>9</strong>. Contoh: <code>4.729 → 4+7+2+9 → 4</code>.
                  </div>
                  <div className="border border-black bg-warm-white p-3">
                    <strong className="font-mono uppercase block text-violet-900">
                      3. Sisa Bagi 11 (Hasil 0–10)
                    </strong>
                    Hitung selisih bergantian dari kanan:{" "}
                    <strong>(+satuan − puluhan + ratusan − ribuan)</strong>. Jika negatif, tambah <code>11</code>. Contoh: <code>625 → (5+6)−2 = 9</code>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageFrame>
    );
  }

  // =========================================================================
  // SUMMARY
  // =========================================================================
  if (gameState === "summary") {
    const correctCount = history.filter((h) => h.isCorrect).length;
    const accuracy =
      history.length > 0 ? Math.round((correctCount / history.length) * 100) : 0;

    return (
      <PageFrame
        eyebrow="TIU / Sisa Bagi 9 & 11"
        title="HASIL ARENA."
        description="Evaluasi ketajaman teknik digit terakhir, sisa bagi 9, dan sisa bagi 11."
        showHeader={false}
      >
        <div className="p-4 sm:p-8 lg:p-10 max-w-4xl mx-auto space-y-6">
          <div className="border-2 border-black bg-card p-6 sm:p-8 shadow-[6px_6px_0_#10100f]">
            <span
              className={`inline-block border-2 border-black px-3 py-1 font-mono text-xs font-black uppercase ${performanceEvaluation.color}`}
            >
              {performanceEvaluation.badge}
            </span>
            <h2 className="text-3xl font-black uppercase mt-3">
              Skor Akhir: {score} PTS
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {performanceEvaluation.desc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="border-2 border-black bg-warm-white p-3">
                <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                  Benar
                </span>
                <strong className="font-mono text-xl font-black">
                  {correctCount} / {history.length}
                </strong>
              </div>
              <div className="border-2 border-black bg-warm-white p-3">
                <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                  Akurasi
                </span>
                <strong className="font-mono text-xl font-black text-violet-700">
                  {accuracy}%
                </strong>
              </div>
              <div className="border-2 border-black bg-warm-white p-3">
                <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                  Streak Maks
                </span>
                <strong className="font-mono text-xl font-black text-amber-600">
                  {maxStreak}x
                </strong>
              </div>
              <div className="border-2 border-black bg-warm-white p-3">
                <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                  Rekor Survival
                </span>
                <strong className="font-mono text-xl font-black">
                  {stats.survivalHighScore}
                </strong>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                type="button"
                onClick={startGame}
                className="h-11 px-5 border-2 border-black bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs font-black uppercase"
              >
                <RotateCcw className="size-4 mr-1.5" /> Main Lagi
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setGameState("lobby")}
                className="h-11 px-5 border-2 border-black font-mono text-xs font-bold uppercase"
              >
                Ubah Pengaturan
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="h-11 px-5 border-2 border-black font-mono text-xs font-bold uppercase"
              >
                <ArrowLeft className="size-4 mr-1.5" /> Daftar Game
              </Button>
            </div>
          </div>

          {history.length > 0 && (
            <div className="border-2 border-black bg-warm-white p-5 sm:p-6 space-y-4">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider">
                Pembahasan Tiap Soal ({history.length} Soal)
              </h3>
              <div className="space-y-3">
                {history.map((item, idx) => (
                  <div
                    key={`${item.question.id}-${idx}`}
                    className={`border-2 border-black p-4 ${
                      item.isCorrect ? "bg-emerald-50" : "bg-rose-50"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-black uppercase">
                        Soal {idx + 1} ·{" "}
                        {item.question.challengeMode === "pasangan-setara"
                          ? "Pasangan Setara"
                          : `Sisa Bagi ${item.question.divisor}`}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 border border-black font-mono text-[10px] font-bold uppercase ${
                          item.isCorrect
                            ? "bg-emerald-500 text-white"
                            : "bg-brand-red text-white"
                        }`}
                      >
                        {item.isCorrect ? (
                          <>
                            <Check className="size-3" /> Benar
                          </>
                        ) : (
                          <>
                            <X className="size-3" /> Salah ({item.userAnswer})
                          </>
                        )}
                      </span>
                    </div>
                    <p className="font-bold text-sm mt-2">
                      {item.question.prompt} →{" "}
                      <span className="font-mono text-emerald-800">
                        {item.question.correctAnswer}
                      </span>
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-foreground/90 font-mono">
                      {item.question.steps.map((s, sIdx) => (
                        <li key={sIdx}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </PageFrame>
    );
  }

  // =========================================================================
  // PLAYING
  // =========================================================================
  const survivalPct =
    survivalTotalMs > 0
      ? Math.max(0, Math.min(100, (survivalRemainingMs / survivalTotalMs) * 100))
      : 0;
  const isPairMode = currentQuestion?.challengeMode === "pasangan-setara";
  const optionLetters = ["A", "B", "C", "D", "E"];
  const keypadNumbers =
    currentQuestion?.divisor === 9
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
      : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <PageFrame
      eyebrow="TIU / Sisa Bagi 9 & 11"
      title="ARENA SISA BAGI."
      description=""
      showHeader={false}
    >
      <div className="p-3 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-4">
        {/* Top HUD */}
        <div className="border-2 border-black bg-warm-white p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-[4px_4px_0_#10100f]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                stopBackgroundMusic();
                setGameState("lobby");
              }}
              className="inline-flex items-center gap-1 border-2 border-black bg-background px-2.5 py-1.5 font-mono text-xs font-bold uppercase hover:bg-secondary"
            >
              <ArrowLeft className="size-3.5" /> Keluar
            </button>
            <Button
              variant="outline"
              size="icon"
              onClick={onToggleSound}
              aria-label="Toggle suara"
              className="size-8 border-2 border-black rounded-none"
            >
              {soundOn ? (
                <Volume2 className="size-4 text-violet-700" />
              ) : (
                <VolumeX className="size-4 text-muted-foreground" />
              )}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-black">
            {modeType === "survival" ? (
              <span className="inline-flex items-center gap-1 border border-black bg-rose-100 px-2.5 py-1 text-brand-red">
                {Array.from({ length: 3 }, (_, idx) => (
                  <Heart
                    key={idx}
                    className={`size-3.5 ${
                      idx < lives ? "fill-brand-red text-brand-red" : "text-neutral-300"
                    }`}
                  />
                ))}
              </span>
            ) : (
              <span className="border border-black bg-background px-2.5 py-1">
                Soal {currentIndex + 1} / {questions.length}
              </span>
            )}

            {modeType === "fixed" && fixedTimeLimitMinutes > 0 && (
              <span className="inline-flex items-center gap-1 border border-black bg-background px-2.5 py-1">
                <Clock className="size-3.5" /> {formatTime(fixedRemainingMs)}
              </span>
            )}

            <span className="inline-flex items-center gap-1 border border-black bg-signal px-2.5 py-1">
              <Flame className="size-3.5 text-brand-red" /> {streak}x
            </span>

            <span className="border border-black bg-violet-600 text-white px-2.5 py-1">
              {score} PTS
            </span>
          </div>
        </div>

        {/* Survival Dynamic Timer Bar */}
        {modeType === "survival" && (
          <div className="border-2 border-black bg-warm-white p-2.5 space-y-1">
            <div className="flex justify-between font-mono text-[11px] font-bold uppercase">
              <span>Sisa Waktu Soal #{currentIndex + 1}</span>
              <span
                className={
                  survivalRemainingMs <= 6000 ? "text-brand-red animate-pulse" : ""
                }
              >
                {Math.max(0, Math.ceil(survivalRemainingMs / 1000))} detik
              </span>
            </div>
            <div className="h-2.5 border border-black bg-background overflow-hidden">
              <div
                className={`h-full transition-all duration-100 ${
                  survivalPct > 45
                    ? "bg-violet-600"
                    : survivalPct > 20
                      ? "bg-amber-500"
                      : "bg-brand-red"
                }`}
                style={{ width: `${survivalPct}%` }}
              />
            </div>
          </div>
        )}

        {/* Question Card */}
        {currentQuestion && (
          <div className="border-2 border-black bg-card p-4 sm:p-7 shadow-[6px_6px_0_#10100f] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`border border-black px-3 py-1 font-mono text-xs font-black uppercase ${
                  isPairMode
                    ? "bg-signal text-black"
                    : currentQuestion.divisor === 9
                      ? "bg-brand-blue text-white"
                      : "bg-violet-600 text-white"
                }`}
              >
                {isPairMode
                  ? currentQuestion.divisorFilter === "mod9"
                    ? "PASANGAN SETARA · UJI MOD 9 (1–9)"
                    : currentQuestion.divisorFilter === "mod11"
                      ? "PASANGAN SETARA · UJI MOD 11 (0–10)"
                      : "PASANGAN SETARA · EKOR, MOD 9 & 11"
                  : currentQuestion.divisor === 9
                    ? "SISA BAGI 9 (HASIL 1–9)"
                    : "SISA BAGI 11 (HASIL 0–10)"}
              </span>

              <span className="border border-black bg-secondary px-2.5 py-1 font-mono text-[11px] font-bold uppercase">
                Level: {currentQuestion.digitLevel}
              </span>
            </div>

            <div className="space-y-1.5">
              {isPairMode ? (
                <>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                    {currentQuestion.prompt}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
                    <HelpCircle className="size-3.5 shrink-0" />
                    {currentQuestion.subPrompt}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {currentQuestion.subPrompt}
                  </p>
                  <div className="border-2 border-black bg-warm-white p-5 sm:p-7 text-center">
                    <div className="font-mono text-3xl sm:text-5xl font-black tracking-tight text-foreground">
                      {currentQuestion.prompt}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Answer Controls */}
            {isPairMode || hitungInputStyle === "options" ? (
              <div className="grid gap-2.5">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === opt;
                  const isRight = opt === currentQuestion.correctAnswer;
                  const analysis = currentQuestion.pairAnalyses?.[idx];
                  const badge =
                    analysis && isAnswerRevealed
                      ? ELIMINATION_BADGE[analysis.eliminationReason]
                      : null;

                  let cardCls =
                    "border-2 border-black bg-warm-white hover:bg-secondary text-foreground";
                  if (isAnswerRevealed) {
                    if (isRight) {
                      cardCls =
                        "border-2 border-black bg-emerald-500 text-white shadow-[3px_3px_0_#10100f]";
                    } else if (isSelected) {
                      cardCls = "border-2 border-black bg-brand-red text-white";
                    } else {
                      cardCls =
                        "border-2 border-black bg-background/70 text-muted-foreground";
                    }
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={isAnswerRevealed}
                      onClick={() => handleAnswer(opt)}
                      className={`w-full p-3.5 sm:p-4 text-left transition-all flex flex-wrap items-center justify-between gap-2 ${cardCls}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-8 shrink-0 items-center justify-center border-2 border-black bg-background font-mono text-xs font-black text-black">
                          {optionLetters[idx]}
                        </span>
                        <span className="font-mono text-base sm:text-xl font-black tracking-tight">
                          {opt}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {badge && (
                          <span
                            className={`border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${badge.className}`}
                          >
                            {badge.label}
                          </span>
                        )}
                        {isAnswerRevealed && isRight && (
                          <CheckCircle2 className="size-5 shrink-0" />
                        )}
                        {isAnswerRevealed && isSelected && !isRight && (
                          <X className="size-5 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Direct Keypad: 1-9 for Mod 9, 0-10 for Mod 11 */
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {keypadNumbers.map((num) => {
                  const val = String(num);
                  const isSelected = selectedOption === val;
                  const isRight = val === currentQuestion.correctAnswer;

                  let btnCls =
                    "border-2 border-black bg-warm-white hover:bg-signal text-foreground shadow-[3px_3px_0_#10100f]";
                  if (isAnswerRevealed) {
                    if (isRight) {
                      btnCls =
                        "border-2 border-black bg-emerald-500 text-white shadow-[3px_3px_0_#10100f]";
                    } else if (isSelected) {
                      btnCls = "border-2 border-black bg-brand-red text-white";
                    } else {
                      btnCls =
                        "border-2 border-black bg-background text-muted-foreground opacity-70";
                    }
                  }

                  return (
                    <button
                      key={val}
                      type="button"
                      disabled={isAnswerRevealed}
                      onClick={() => handleAnswer(val)}
                      className={`h-14 font-mono text-2xl font-black transition-all ${btnCls}`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Reveal Explanation Box */}
            {isAnswerRevealed && (
              <div className="border-2 border-black bg-secondary p-4 sm:p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase ${
                      selectedOption === currentQuestion.correctAnswer
                        ? "text-emerald-700"
                        : "text-brand-red"
                    }`}
                  >
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <>
                        <CheckCircle2 className="size-4" /> Tepat!
                      </>
                    ) : (
                      <>
                        <X className="size-4" /> Kurang Tepat — Jawaban:{" "}
                        {currentQuestion.correctAnswer}
                      </>
                    )}
                  </span>

                  <Button
                    type="button"
                    size="sm"
                    onClick={() => advanceToNext()}
                    className="h-9 border-2 border-black bg-black text-signal hover:bg-brand-blue hover:text-white font-mono text-xs font-black uppercase rounded-none"
                  >
                    {modeType === "fixed" &&
                    currentIndex + 1 >= questions.length
                      ? "Lihat Hasil"
                      : "Soal Berikutnya"}{" "}
                    <ArrowRight className="size-3.5 ml-1" />
                  </Button>
                </div>

                <div className="space-y-1.5 font-mono text-xs leading-relaxed">
                  {currentQuestion.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="border border-black/20 bg-warm-white px-3 py-1.5"
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Tips: {currentQuestion.tip}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageFrame>
  );
}
