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
  Lock,
  Play,
  RotateCcw,
  Scale,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/page-frame";
import { MathText } from "@/components/math-text";
import {
  generatePerbandinganSet,
  getPerbandinganSurvivalTimeLimitSec,
  type PerbandinganLevel,
  type PerbandinganTopic,
} from "@/lib/perbandingan-engine";
import type { GameModeType, GameQuestion } from "@/lib/game-engine";
import {
  playCorrectSound,
  playGameOverSound,
  playStreakSound,
  playWrongSound,
  startBackgroundMusic,
  stopBackgroundMusic,
} from "@/lib/game-sound";
import {
  createDefaultPerbandinganStats,
  readPerbandinganStats,
  updatePerbandinganStats,
  type GameStats,
} from "@/lib/game-storage";

interface AnswerHistoryItem {
  question: GameQuestion;
  userAnswer: string;
  isCorrect: boolean;
  timeSpentSec: number;
}

interface PerbandinganGameClientProps {
  onBack: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
}

export function PerbandinganGameClient({
  onBack,
  soundOn,
  onToggleSound,
}: PerbandinganGameClientProps) {
  // Settings
  const [topic, setTopic] = useState<PerbandinganTopic>("all");
  const [level, setLevel] = useState<PerbandinganLevel>("dasar");
  const [modeType, setModeType] = useState<GameModeType>("survival");
  const [fixedCount, setFixedCount] = useState<5 | 10 | 20>(10);
  const [fixedTimeLimitMinutes, setFixedTimeLimitMinutes] = useState<number>(3); // 0 = tanpa batas
  const [autoAdvance, setAutoAdvance] = useState<boolean>(false);

  // Game Lifecycle
  const [gameState, setGameState] = useState<"lobby" | "playing" | "summary">("lobby");
  const [stats, setStats] = useState<GameStats>(createDefaultPerbandinganStats);

  // Match State
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [history, setHistory] = useState<AnswerHistoryItem[]>([]);

  // Selection & Feedback
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);

  // Timers
  const [survivalRemainingMs, setSurvivalRemainingMs] = useState<number>(45000);
  const [survivalTotalMs, setSurvivalTotalMs] = useState<number>(45000);
  const [fixedRemainingMs, setFixedRemainingMs] = useState<number>(180000);

  const questionStartTimeRef = useRef<number>(0);
  const timerIntervalRef = useRef<number | null>(null);
  const autoAdvanceTimeoutRef = useRef<number | null>(null);

  // Load stats safely on mount
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStats(readPerbandinganStats());
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // Background Music untuk Arena Perbandingan
  useEffect(() => {
    if (gameState === "playing" && soundOn) {
      startBackgroundMusic("perbandingan");
    } else {
      stopBackgroundMusic();
    }
    return () => {
      stopBackgroundMusic();
    };
  }, [gameState, soundOn]);

  const currentQuestion = questions[currentIndex] as GameQuestion | undefined;

  const clearAllTimers = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }
  }, []);

  // Start new match
  const startGame = useCallback(() => {
    clearAllTimers();

    let initialQuestions: GameQuestion[] = [];
    if (modeType === "fixed") {
      initialQuestions = generatePerbandinganSet(topic, fixedCount, level);
    } else {
      // Survival mode: preload 20 soal
      initialQuestions = generatePerbandinganSet(topic, 20, level);
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

    const firstLimitSec = getPerbandinganSurvivalTimeLimitSec(1);
    setSurvivalRemainingMs(firstLimitSec * 1000);
    setSurvivalTotalMs(firstLimitSec * 1000);
    setFixedRemainingMs(fixedTimeLimitMinutes > 0 ? fixedTimeLimitMinutes * 60 * 1000 : 0);

    questionStartTimeRef.current = Date.now();
    setGameState("playing");
  }, [clearAllTimers, fixedCount, fixedTimeLimitMinutes, level, modeType, topic]);

  // Finish match & save stats
  const finishGame = useCallback(
    (finalHistory: AnswerHistoryItem[], finalScore: number, finalMaxStreak: number) => {
      clearAllTimers();
      setGameState("summary");

      const correctCount = finalHistory.filter((h) => h.isCorrect).length;
      const updated = updatePerbandinganStats({
        mode: modeType,
        score: finalScore,
        streak: finalMaxStreak,
        answered: finalHistory.length,
        correct: correctCount,
        fixedCount: modeType === "fixed" ? fixedCount : undefined,
      });
      setStats(updated);
      playGameOverSound();
    },
    [clearAllTimers, fixedCount, modeType]
  );

  // Next question
  const advanceToNextQuestion = useCallback(() => {
    clearAllTimers();
    setSelectedOption(null);
    setIsAnswerRevealed(false);

    const nextIndex = currentIndex + 1;

    if (modeType === "fixed") {
      if (nextIndex >= questions.length) {
        finishGame(history, score, maxStreak);
        return;
      }
    } else {
      if (nextIndex >= questions.length - 2) {
        const extra = generatePerbandinganSet(topic, 10, level);
        setQuestions((prev) => [...prev, ...extra]);
      }
    }

    setCurrentIndex(nextIndex);
    const limitSec = getPerbandinganSurvivalTimeLimitSec(nextIndex + 1);
    setSurvivalRemainingMs(limitSec * 1000);
    setSurvivalTotalMs(limitSec * 1000);
    questionStartTimeRef.current = Date.now();
  }, [clearAllTimers, currentIndex, finishGame, history, level, maxStreak, modeType, questions.length, score, topic]);

  // Handle Answer Selection
  const handleAnswer = useCallback(
    (chosenAnswer: string) => {
      if (isAnswerRevealed || !currentQuestion) return;

      const timeSpentSec = Math.max(
        1,
        Math.round((Date.now() - questionStartTimeRef.current) / 1000)
      );

      setSelectedOption(chosenAnswer);
      setIsAnswerRevealed(true);

      const isCorrect = chosenAnswer === currentQuestion.correctAnswer;
      const newHistoryItem: AnswerHistoryItem = {
        question: currentQuestion,
        userAnswer: chosenAnswer,
        isCorrect,
        timeSpentSec,
      };

      const nextHistory = [...history, newHistoryItem];
      setHistory(nextHistory);

      let nextScore = score;
      let nextStreak = streak;
      let nextMaxStreak = maxStreak;
      let nextLives = lives;

      if (isCorrect) {
        nextStreak += 1;
        if (nextStreak > nextMaxStreak) {
          nextMaxStreak = nextStreak;
        }

        const streakBonus = Math.min(nextStreak * 10, 100);
        const speedBonus = Math.max(0, 30 - timeSpentSec * 2);
        nextScore += 100 + streakBonus + speedBonus;

        setScore(nextScore);
        setStreak(nextStreak);
        setMaxStreak(nextMaxStreak);

        if (nextStreak > 0 && nextStreak % 5 === 0) {
          playStreakSound();
        } else {
          playCorrectSound();
        }
      } else {
        nextStreak = 0;
        setStreak(0);
        playWrongSound();

        if (modeType === "survival") {
          nextLives -= 1;
          setLives(nextLives);
          if (nextLives <= 0) {
            if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
            autoAdvanceTimeoutRef.current = window.setTimeout(() => {
              finishGame(nextHistory, nextScore, nextMaxStreak);
            }, 1800);
            return;
          }
        }
      }

      if (autoAdvance) {
        if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
        autoAdvanceTimeoutRef.current = window.setTimeout(() => {
          advanceToNextQuestion();
        }, isCorrect ? 1200 : 2500);
      }
    },
    [
      advanceToNextQuestion,
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

  // Time-out per soal
  const handleQuestionTimeout = useCallback(() => {
    if (isAnswerRevealed || !currentQuestion) return;
    handleAnswer("__TIMEOUT__");
  }, [currentQuestion, handleAnswer, isAnswerRevealed]);

  // Main Timer Loop
  useEffect(() => {
    if (gameState !== "playing" || isAnswerRevealed) {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
      return;
    }

    const interval = window.setInterval(() => {
      if (modeType === "survival") {
        setSurvivalRemainingMs((prev) => {
          const next = prev - 100;
          if (next <= 0) {
            handleQuestionTimeout();
            return 0;
          }
          return next;
        });
      }

      if (modeType === "fixed" && fixedTimeLimitMinutes > 0) {
        setFixedRemainingMs((prev) => {
          const next = prev - 100;
          if (next <= 0) {
            finishGame(history, score, maxStreak);
            return 0;
          }
          return next;
        });
      }
    }, 100);

    timerIntervalRef.current = interval;
    return () => {
      clearInterval(interval);
    };
  }, [
    finishGame,
    gameState,
    handleQuestionTimeout,
    history,
    isAnswerRevealed,
    maxStreak,
    modeType,
    fixedTimeLimitMinutes,
    score,
  ]);

  // Keyboard Shortcuts (1-4, A-D, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;

      if (isAnswerRevealed) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          advanceToNextQuestion();
        }
        return;
      }

      if (!currentQuestion) return;

      const key = e.key.toLowerCase();
      let selectedIdx = -1;

      if (key === "1" || key === "a") selectedIdx = 0;
      else if (key === "2" || key === "b") selectedIdx = 1;
      else if (key === "3" || key === "c") selectedIdx = 2;
      else if (key === "4" || key === "d") selectedIdx = 3;

      if (selectedIdx >= 0 && selectedIdx < currentQuestion.options.length) {
        e.preventDefault();
        handleAnswer(currentQuestion.options[selectedIdx]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [advanceToNextQuestion, currentQuestion, gameState, handleAnswer, isAnswerRevealed]);

  // Evaluasi Performa
  const performanceEvaluation = useMemo(() => {
    const correctCount = history.filter((h) => h.isCorrect).length;
    const total = history.length || 1;
    const accuracy = Math.round((correctCount / total) * 100);

    if (accuracy === 100 && total >= 8) {
      return {
        badge: "PAKAR PERBANDINGAN TIU",
        color: "bg-signal text-black",
        desc: "Sempurna! Pemahaman konsep rasio, perbandingan senilai, dan berbalik nilai Anda sangat matang.",
      };
    }
    if (accuracy >= 80) {
      return {
        badge: "ANALIS PROPORSIONAL TANGGAP",
        color: "bg-cyan-400 text-black",
        desc: "Hebat! Insting membedakan senilai vs berbalik nilai serta pemetaan rasio Anda sangat tajam.",
      };
    }
    if (accuracy >= 60) {
      return {
        badge: "SOLID & BERKEMBANG",
        color: "bg-amber-300 text-black",
        desc: "Bagus! Terus latih kebiasaan mencari 'nilai 1 bagian rasio' agar semakin cepat menjawab.",
      };
    }
    return {
      badge: "BUTUH PEMANTAPAN",
      color: "bg-neutral-200 text-black",
      desc: "Jangan patah semangat! Perhatikan trik di pembahasan: cari nilai 1 bagian dengan membagi nilai asli terhadap jumlah/selisih rasio.",
    };
  }, [history]);

  const formatTime = (ms: number) => {
    const totalSec = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <PageFrame
      eyebrow="Game & Refleks TIU"
      title="ARENA PERBANDINGAN."
      description="Kuasai 3 pilar perbandingan: Konsep Rasio (Jumlah/Selisih), Perbandingan Senilai, dan Perbandingan Berbalik Nilai untuk ujian SKD CPNS & Kedinasan."
      showHeader={gameState === "lobby"}
    >
      <div className="bg-background text-foreground">
        {/* ========================================================================= */}
        {/* VIEW 1: LOBBY / MENU ARENA PERBANDINGAN */}
        {/* ========================================================================= */}
        {gameState === "lobby" && (
          <div className="p-4 sm:p-8 lg:p-10 space-y-8 max-w-5xl mx-auto">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-5">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase py-1.5 px-3 border-2 border-black bg-warm-white hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="size-4" /> Daftar Game
              </button>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onToggleSound}
                  className="border-2 border-black font-mono text-xs font-bold hover:bg-secondary"
                >
                  {soundOn ? (
                    <>
                      <Volume2 className="size-4 mr-1 text-cyan-700" /> Suara ON
                    </>
                  ) : (
                    <>
                      <VolumeX className="size-4 mr-1 text-muted-foreground" /> Suara OFF
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Philosophy Banner: Tiga Pilar Perbandingan */}
            <div className="border-2 border-black bg-cyan-50 p-5 sm:p-6 shadow-[5px_5px_0_#10100f] space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-cyan-950 tracking-wider">
                <Scale className="size-4 text-cyan-700" />
                Kaidah Emas Perbandingan TIU
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                Petakan Nilai 1 Bagian Rasio & Identifikasi Jenis Perbandingan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 font-mono text-xs">
                <div className="bg-white border border-black/30 p-2.5">
                  <span className="font-bold text-cyan-800 block">1. Konsep Rasio</span>
                  <span className="text-muted-foreground text-[11px] leading-tight block mt-0.5">
                    1 bagian = Nilai Asli / (Jumlah atau Selisih Rasio)
                  </span>
                </div>
                <div className="bg-white border border-black/30 p-2.5">
                  <span className="font-bold text-emerald-700 block">2. Senilai</span>
                  <span className="text-muted-foreground text-[11px] leading-tight block mt-0.5">
                    Variabel A naik, B ikut naik (hasil bagi konstan: A1/B1 = A2/B2)
                  </span>
                </div>
                <div className="bg-white border border-black/30 p-2.5">
                  <span className="font-bold text-brand-red block">3. Berbalik Nilai</span>
                  <span className="text-muted-foreground text-[11px] leading-tight block mt-0.5">
                    Variabel A naik, B turun (hasil kali konstan: A1 × B1 = A2 × B2)
                  </span>
                </div>
              </div>
            </div>

            {/* Form Settings & Highscores */}
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start">
              {/* Left Column: Form & Topik */}
              <div className="border-2 border-black bg-card p-5 sm:p-8 shadow-[6px_6px_0_#10100f] space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Langkah 1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-0.5">
                    Pilih Topik Perbandingan
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {/* Topik 1: Konsep Rasio */}
                  <label
                    className={`block border-2 border-black p-3.5 cursor-pointer transition-colors ${
                      topic === "konsep"
                        ? "bg-cyan-100/70 border-cyan-900 shadow-[2px_2px_0_#10100f]"
                        : "bg-card hover:bg-secondary/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="prop-topic"
                        checked={topic === "konsep"}
                        onChange={() => setTopic("konsep")}
                        className="mt-1 size-4 accent-cyan-600"
                      />
                      <div>
                        <div className="font-black text-sm uppercase">Konsep Rasio</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Informasi jumlah total, jumlah 2 objek, atau selisih 2 objek diketahui untuk menentukan nilai salah satu objek.
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Topik 2: Perbandingan Senilai */}
                  <label
                    className={`block border-2 border-black p-3.5 cursor-pointer transition-colors ${
                      topic === "senilai"
                        ? "bg-cyan-100/70 border-cyan-900 shadow-[2px_2px_0_#10100f]"
                        : "bg-card hover:bg-secondary/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="prop-topic"
                        checked={topic === "senilai"}
                        onChange={() => setTopic("senilai")}
                        className="mt-1 size-4 accent-cyan-600"
                      />
                      <div>
                        <div className="font-black text-sm uppercase">Perbandingan Senilai</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Pekerja vs hasil produksi, konsumsi bensin vs jarak tempuh, durasi mesin vs output, porsi vs bahan baku.
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Topik 3: Perbandingan Berbalik Nilai */}
                  <label
                    className={`block border-2 border-black p-3.5 cursor-pointer transition-colors ${
                      topic === "berbalik"
                        ? "bg-cyan-100/70 border-cyan-900 shadow-[2px_2px_0_#10100f]"
                        : "bg-card hover:bg-secondary/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="prop-topic"
                        checked={topic === "berbalik"}
                        onChange={() => setTopic("berbalik")}
                        className="mt-1 size-4 accent-cyan-600"
                      />
                      <div>
                        <div className="font-black text-sm uppercase">Perbandingan Berbalik Nilai</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Banyak hewan vs waktu pakan habis, kecepatan vs waktu tempuh, jumlah pekerja vs hari selesai, debit keran vs pengisian.
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Topik 4: Campuran Semua */}
                  <label
                    className={`block border-2 border-black p-3.5 cursor-pointer transition-colors ${
                      topic === "all"
                        ? "bg-cyan-100/70 border-cyan-900 shadow-[2px_2px_0_#10100f]"
                        : "bg-card hover:bg-secondary/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="prop-topic"
                        checked={topic === "all"}
                        onChange={() => setTopic("all")}
                        className="mt-1 size-4 accent-cyan-600"
                      />
                      <div>
                        <div className="font-black text-sm uppercase">Campuran (Semua Topik Dasar)</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Simulasi acak menguji refleks membedakan konsep rasio, senilai, dan berbalik nilai secara komprehensif.
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Level Selection (Dasar vs Lanjutan) */}
                <div className="pt-2 border-t-2 border-black/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Langkah 2: Tingkat Kesulitan
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setLevel("dasar")}
                      className={`p-3.5 border-2 border-black text-left transition-all ${
                        level === "dasar"
                          ? "bg-cyan-600 text-white shadow-[3px_3px_0_#10100f]"
                          : "bg-card hover:bg-secondary"
                      }`}
                    >
                      <div className="font-mono text-xs font-black uppercase">Level 1: Dasar</div>
                      <div className="text-xs mt-1 opacity-90">
                        Rasio, senilai & berbalik nilai dasar
                      </div>
                    </button>

                    <div className="p-3.5 border-2 border-black/40 bg-neutral-100 text-neutral-500 text-left relative cursor-not-allowed flex flex-col justify-center">
                      <div className="flex items-center justify-between font-mono text-xs font-black uppercase">
                        <span>Level 2: Lanjutan</span>
                        <span className="inline-flex items-center gap-1 text-[10px] bg-neutral-200 px-1.5 py-0.5 border border-black/30">
                          <Lock className="size-2.5" /> Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mode Selection */}
                <div className="pt-2 border-t-2 border-black/20">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Langkah 3: Mode Permainan
                  </span>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setModeType("survival")}
                      className={`p-3.5 border-2 border-black text-left transition-all ${
                        modeType === "survival"
                          ? "bg-brand-red text-white shadow-[3px_3px_0_#10100f]"
                          : "bg-card hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-mono text-xs font-black uppercase">
                        <Heart className="size-4 fill-current text-white" />
                        Survival
                      </div>
                      <div className="text-xs mt-1 opacity-90">
                        3 Nyawa · Timer dinamis 45s ke 10s · Kejar rekor poin
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModeType("fixed")}
                      className={`p-3.5 border-2 border-black text-left transition-all ${
                        modeType === "fixed"
                          ? "bg-brand-blue text-white shadow-[3px_3px_0_#10100f]"
                          : "bg-card hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-mono text-xs font-black uppercase">
                        <Clock className="size-4" />
                        Target Soal
                      </div>
                      <div className="text-xs mt-1 opacity-90">
                        Pilihan 5, 10, atau 20 soal · Cocok untuk latihan santai
                      </div>
                    </button>
                  </div>

                  {modeType === "fixed" && (
                    <div className="mt-4 p-3.5 bg-warm-white border-2 border-black space-y-3 font-mono text-xs">
                      <div>
                        <div className="font-bold uppercase text-muted-foreground mb-1.5">
                          Jumlah Soal:
                        </div>
                        <div className="flex gap-2">
                          {([5, 10, 20] as const).map((cnt) => (
                            <button
                              key={cnt}
                              type="button"
                              onClick={() => setFixedCount(cnt)}
                              className={`flex-1 py-1.5 border border-black font-bold uppercase transition-colors ${
                                fixedCount === cnt
                                  ? "bg-brand-blue text-white shadow-[1px_1px_0_#10100f]"
                                  : "bg-white hover:bg-secondary"
                              }`}
                            >
                              {cnt} Soal
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-bold uppercase text-muted-foreground mb-1.5">
                          Batas Waktu:
                        </div>
                        <div className="flex gap-2">
                          {[
                            { label: "Bebas", val: 0 },
                            { label: "2 Mnt", val: 2 },
                            { label: "3 Mnt", val: 3 },
                            { label: "5 Mnt", val: 5 },
                          ].map((t) => (
                            <button
                              key={t.val}
                              type="button"
                              onClick={() => setFixedTimeLimitMinutes(t.val)}
                              className={`flex-1 py-1.5 border border-black font-bold uppercase transition-colors ${
                                fixedTimeLimitMinutes === t.val
                                  ? "bg-brand-blue text-white shadow-[1px_1px_0_#10100f]"
                                  : "bg-white hover:bg-secondary"
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Auto Advance Toggle */}
                  <div className="mt-4 flex items-center justify-between p-3 border border-black/30 bg-warm-white">
                    <div className="font-mono text-xs">
                      <div className="font-bold uppercase">Lanjut Otomatis (Auto-Advance)</div>
                      <div className="text-[11px] text-muted-foreground">
                        Pindah ke soal berikutnya otomatis setelah menjawab
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAutoAdvance(!autoAdvance)}
                      className={`relative inline-flex h-6 w-11 items-center border border-black transition-colors ${
                        autoAdvance ? "bg-cyan-600" : "bg-neutral-300"
                      }`}
                    >
                      <span
                        className={`inline-block size-4 transform border border-black bg-white transition-transform ${
                          autoAdvance ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Tombol Mulai */}
                <Button
                  size="lg"
                  onClick={startGame}
                  className="w-full h-14 border-2 border-black bg-cyan-700 hover:bg-cyan-800 text-white font-black text-lg uppercase tracking-wider shadow-[4px_4px_0_#10100f]"
                >
                  <Play className="size-5 mr-2 fill-current" /> Mulai Arena Perbandingan
                </Button>
              </div>

              {/* Right Column: Rekor & Statistik */}
              <div className="space-y-6">
                <div className="border-2 border-black bg-card p-5 sm:p-6 shadow-[6px_6px_0_#10100f] space-y-4">
                  <div className="border-b-2 border-black pb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs font-black uppercase">
                      <Trophy className="size-4 text-amber-500" /> Rekor Pribadi Anda
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      Perbandingan
                    </span>
                  </div>

                  <div className="space-y-3 font-mono">
                    <div className="border border-black p-3 bg-warm-white">
                      <div className="text-[11px] uppercase text-muted-foreground">
                        Skor Terbaik Survival
                      </div>
                      <div className="text-2xl font-black text-brand-red mt-0.5">
                        {stats.survivalHighScore}{" "}
                        <span className="text-xs font-bold text-foreground">PTS</span>
                      </div>
                    </div>

                    <div className="border border-black p-3 bg-warm-white">
                      <div className="text-[11px] uppercase text-muted-foreground">
                        Rentetan Benar Tertinggi
                      </div>
                      <div className="text-2xl font-black text-amber-600 mt-0.5">
                        {stats.survivalBestStreak}x{" "}
                        <Flame className="size-4 inline text-amber-500 fill-current" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-black p-2.5 bg-warm-white text-center">
                        <div className="text-[10px] uppercase text-muted-foreground">
                          Total Dijawab
                        </div>
                        <div className="text-lg font-black mt-0.5">{stats.totalAnswered}</div>
                      </div>
                      <div className="border border-black p-2.5 bg-warm-white text-center">
                        <div className="text-[10px] uppercase text-muted-foreground">Akurasi</div>
                        <div className="text-lg font-black mt-0.5 text-cyan-700">
                          {stats.totalAnswered > 0
                            ? `${Math.round((stats.totalCorrect / stats.totalAnswered) * 100)}%`
                            : "0%"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ringkasan Konsep Card */}
                <div className="border-2 border-black bg-warm-white p-5 shadow-[4px_4px_0_#10100f] space-y-3 text-xs">
                  <div className="font-mono font-bold uppercase border-b border-black/20 pb-2 flex items-center gap-1.5">
                    <Sparkles className="size-4 text-cyan-700" /> Trik Cepat Perbandingan
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-4">
                    <li>
                      <strong className="text-foreground">Konsep Rasio:</strong> Tentukan nilai 1 bagian = Nilai Nyata / Jumlah atau Selisih Bagian Rasio.
                    </li>
                    <li>
                      <strong className="text-foreground">Perbandingan Senilai:</strong> Jika satu nilai membesar, nilai pasangannya membesar sebanding (hasil bagi konstan: A1/B1 = A2/B2).
                    </li>
                    <li>
                      <strong className="text-foreground">Perbandingan Berbalik Nilai:</strong> Jika subjek membesar (misal pekerja atau hewan bertambah), durasi waktu berkurang (hasil kali konstan: A × B = k).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: GAMEPLAY (PLAYING STATE) */}
        {/* ========================================================================= */}
        {gameState === "playing" && currentQuestion && (
          <div className="p-4 sm:p-8 max-w-4xl mx-auto space-y-6">
            {/* Top Bar */}
            <div className="border-2 border-black bg-card p-4 shadow-[4px_4px_0_#10100f] flex flex-wrap items-center justify-between gap-3 font-mono">
              <button
                type="button"
                onClick={() => setGameState("lobby")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase hover:underline"
              >
                <ArrowLeft className="size-3.5" /> Berhenti
              </button>

              <div className="flex items-center gap-4">
                {modeType === "survival" ? (
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((heartIndex) => (
                      <Heart
                        key={heartIndex}
                        className={`size-5 transition-transform ${
                          heartIndex <= lives
                            ? "fill-brand-red text-brand-red scale-100"
                            : "fill-neutral-300 text-neutral-400 scale-90"
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-xs font-bold uppercase">
                    Soal <span className="text-brand-blue font-black">{currentIndex + 1}</span> /{" "}
                    {fixedCount}
                  </div>
                )}

                {streak >= 2 && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 border border-amber-500 text-amber-900 text-xs font-black animate-pulse">
                    <Flame className="size-3.5 text-amber-500 fill-current" />
                    {streak}x STREAK
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 text-xs font-bold">
                <div>
                  SKOR: <span className="text-cyan-800 font-black">{score}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-warm-white px-2 py-1 border border-black">
                  <Clock className="size-3.5 text-brand-blue" />
                  <span>
                    {modeType === "survival"
                      ? `${Math.ceil(survivalRemainingMs / 1000)}s`
                      : fixedTimeLimitMinutes > 0
                      ? formatTime(fixedRemainingMs)
                      : "∞"}
                  </span>
                </div>
              </div>
            </div>

            {/* Timer Progress Bar */}
            {modeType === "survival" && (
              <div className="h-2 w-full border border-black bg-neutral-200 overflow-hidden">
                <div
                  className={`h-full transition-all duration-100 ${
                    survivalRemainingMs < 5000
                      ? "bg-brand-red"
                      : survivalRemainingMs < 15000
                      ? "bg-amber-500"
                      : "bg-cyan-600"
                  }`}
                  style={{
                    width: `${Math.max(0, Math.min(100, (survivalRemainingMs / survivalTotalMs) * 100))}%`,
                  }}
                />
              </div>
            )}

            {/* Question Card */}
            <div className="border-2 border-black bg-card p-6 sm:p-8 shadow-[6px_6px_0_#10100f] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase border border-black bg-warm-white text-cyan-800">
                  {currentQuestion.kind === "concept" && "Konsep Rasio"}
                  {currentQuestion.kind === "senilai" && "Perbandingan Senilai"}
                  {currentQuestion.kind === "berbalik" && "Perbandingan Berbalik Nilai"}
                </span>

                <span className="font-mono text-xs text-muted-foreground uppercase">
                  {currentQuestion.subtext || "Arena Perbandingan"}
                </span>
              </div>

              {/* Prompt */}
              <div className="text-lg sm:text-xl font-bold leading-relaxed text-foreground">
                <MathText text={currentQuestion.prompt} />
              </div>

              {/* 4 Options Grid */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {currentQuestion.options.map((opt, idx) => {
                  const shortcutLetter = ["A", "B", "C", "D"][idx];

                  let btnStyle = "bg-warm-white hover:bg-secondary text-foreground";
                  if (isAnswerRevealed) {
                    if (opt === currentQuestion.correctAnswer) {
                      btnStyle = "bg-emerald-500 text-white border-emerald-950 shadow-[2px_2px_0_#064e3b]";
                    } else if (opt === selectedOption) {
                      btnStyle = "bg-brand-red text-white border-red-950 shadow-[2px_2px_0_#450a0a]";
                    } else {
                      btnStyle = "bg-neutral-100 text-neutral-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswerRevealed}
                      onClick={() => handleAnswer(opt)}
                      className={`border-2 border-black p-4 text-left font-bold text-sm sm:text-base transition-all flex items-start gap-3 shadow-[3px_3px_0_#10100f] active:translate-x-0.5 active:translate-y-0.5 ${btnStyle}`}
                    >
                      <span className="size-6 shrink-0 border border-black bg-white text-black font-mono text-xs font-black flex items-center justify-center">
                        {shortcutLetter}
                      </span>
                      <span className="flex-1 leading-snug">
                        <MathText text={opt} />
                      </span>
                      {isAnswerRevealed && opt === currentQuestion.correctAnswer && (
                        <Check className="size-5 shrink-0 text-white stroke-[3]" />
                      )}
                      {isAnswerRevealed && opt === selectedOption && opt !== currentQuestion.correctAnswer && (
                        <X className="size-5 shrink-0 text-white stroke-[3]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Tip */}
              {isAnswerRevealed && (
                <div className="pt-4 border-t-2 border-black/20 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div
                    className={`p-4 border-2 border-black ${
                      selectedOption === currentQuestion.correctAnswer
                        ? "bg-emerald-50/80 border-emerald-800"
                        : "bg-red-50/80 border-red-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-mono text-xs font-black uppercase mb-1.5">
                      {selectedOption === currentQuestion.correctAnswer ? (
                        <>
                          <CheckCircle2 className="size-4 text-emerald-600" />
                          <span className="text-emerald-800">Jawaban Tepat!</span>
                        </>
                      ) : (
                        <>
                          <X className="size-4 text-brand-red" />
                          <span className="text-brand-red">Belum Tepat</span>
                        </>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm text-foreground/90 whitespace-pre-line leading-relaxed font-sans">
                      💡 <strong>Pembahasan:</strong>{" "}
                      <MathText text={currentQuestion.tip} />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={advanceToNextQuestion}
                      className="h-12 px-6 border-2 border-black bg-brand-blue hover:bg-brand-blue-hover text-white font-mono text-sm font-black uppercase tracking-wider shadow-[3px_3px_0_#10100f]"
                    >
                      Lanjut <ArrowRight className="size-4 ml-1.5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Keyboard Guide */}
            <div className="hidden sm:block text-center font-mono text-xs text-muted-foreground">
              Gunakan keyboard: <kbd className="px-1.5 py-0.5 border border-black bg-white">1</kbd> /{" "}
              <kbd className="px-1.5 py-0.5 border border-black bg-white">2</kbd> /{" "}
              <kbd className="px-1.5 py-0.5 border border-black bg-white">3</kbd> /{" "}
              <kbd className="px-1.5 py-0.5 border border-black bg-white">4</kbd> atau{" "}
              <kbd className="px-1.5 py-0.5 border border-black bg-white">A</kbd>-
              <kbd className="px-1.5 py-0.5 border border-black bg-white">D</kbd> ·{" "}
              <kbd className="px-1.5 py-0.5 border border-black bg-white">Enter</kbd> untuk lanjut
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: SUMMARY / HASIL PERMAINAN */}
        {/* ========================================================================= */}
        {gameState === "summary" && (
          <div className="p-4 sm:p-8 max-w-4xl mx-auto space-y-8">
            <div className="border-2 border-black bg-card p-6 sm:p-10 shadow-[6px_6px_0_#10100f] space-y-6">
              <div className="border-b-2 border-black pb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span
                    className={`inline-block px-3 py-1 font-mono text-xs font-black uppercase border border-black ${performanceEvaluation.color}`}
                  >
                    {performanceEvaluation.badge}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-2">
                    Hasil Permainan
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    {performanceEvaluation.desc}
                  </p>
                </div>

                <div className="font-mono text-right">
                  <div className="text-xs uppercase text-muted-foreground">Skor Anda</div>
                  <div className="text-4xl sm:text-5xl font-black text-cyan-800">
                    {score} <span className="text-sm font-bold text-foreground">PTS</span>
                  </div>
                </div>
              </div>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="border-2 border-black bg-warm-white p-3 text-center">
                  <div className="text-[11px] text-muted-foreground uppercase">Akurasi</div>
                  <div className="text-2xl font-black mt-1">
                    {history.length > 0
                      ? `${Math.round((history.filter((h) => h.isCorrect).length / history.length) * 100)}%`
                      : "0%"}
                  </div>
                </div>

                <div className="border-2 border-black bg-warm-white p-3 text-center">
                  <div className="text-[11px] text-muted-foreground uppercase">Benar / Total</div>
                  <div className="text-2xl font-black mt-1 text-emerald-600">
                    {history.filter((h) => h.isCorrect).length} / {history.length}
                  </div>
                </div>

                <div className="border-2 border-black bg-warm-white p-3 text-center">
                  <div className="text-[11px] text-muted-foreground uppercase">Rentetan Tertinggi</div>
                  <div className="text-2xl font-black mt-1 text-amber-600">
                    {maxStreak}x <Flame className="size-4 inline text-amber-500 fill-current" />
                  </div>
                </div>

                <div className="border-2 border-black bg-warm-white p-3 text-center">
                  <div className="text-[11px] text-muted-foreground uppercase">Rata-rata Waktu</div>
                  <div className="text-2xl font-black mt-1">
                    {history.length > 0
                      ? `${(
                          history.reduce((acc, cur) => acc + cur.timeSpentSec, 0) / history.length
                        ).toFixed(1)}s`
                      : "0s"}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={startGame}
                  className="flex-1 min-w-[180px] h-14 border-2 border-black bg-cyan-700 hover:bg-cyan-800 text-white font-black text-lg uppercase tracking-wider shadow-[3px_3px_0_#10100f]"
                >
                  <RotateCcw className="size-5 mr-2" /> Main Lagi
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setGameState("lobby")}
                  className="border-2 border-black h-14 font-black text-base uppercase tracking-wider hover:bg-secondary"
                >
                  Menu Perbandingan
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onBack}
                  className="border-2 border-black h-14 font-black text-base uppercase tracking-wider hover:bg-secondary"
                >
                  <ArrowLeft className="size-4 mr-1.5" /> Daftar Game
                </Button>
              </div>
            </div>

            {/* Question Breakdown List */}
            {history.length > 0 && (
              <div className="border-2 border-black bg-card p-5 sm:p-6 shadow-[6px_6px_0_#10100f] space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <HelpCircle className="size-5 text-cyan-700" /> Evaluasi & Pembahasan Soal
                </h3>

                <div className="space-y-3">
                  {history.map((item, idx) => (
                    <div
                      key={idx}
                      className={`border-2 border-black p-4 space-y-2 ${
                        item.isCorrect ? "bg-emerald-50/60" : "bg-red-50/60"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/20 pb-2">
                        <span className="font-mono text-xs font-bold uppercase">
                          Soal #{idx + 1} · {item.question.subtext || "Perbandingan"}
                        </span>
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="text-muted-foreground">{item.timeSpentSec} detik</span>
                          {item.isCorrect ? (
                            <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 border border-emerald-400">
                              <Check className="size-3.5" /> Benar
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 font-bold text-brand-red bg-red-100 px-2 py-0.5 border border-brand-red">
                              <X className="size-3.5" /> Salah
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-base sm:text-lg font-bold leading-relaxed">
                        <MathText text={item.question.prompt} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2 font-mono text-xs pt-1">
                        <div>
                          <span className="text-muted-foreground">Jawaban Anda: </span>
                          <span
                            className={
                              item.isCorrect ? "font-bold text-emerald-700" : "font-bold text-brand-red"
                            }
                          >
                            <MathText text={item.userAnswer === "__TIMEOUT__" ? "(Waktu Habis)" : item.userAnswer} />
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Kunci Benar: </span>
                          <span className="font-bold text-emerald-700">
                            <MathText text={item.question.correctAnswer} />
                          </span>
                        </div>
                      </div>

                      <div className="text-xs bg-white/90 p-2.5 border border-black/30 text-foreground leading-relaxed mt-1">
                        💡 <strong>Pembahasan:</strong>{" "}
                        <MathText text={item.question.tip} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </PageFrame>
  );
}
