"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Flame,
  Gamepad2,
  Heart,
  HelpCircle,
  Lock,
  Play,
  RotateCcw,
  Trophy,
  Volume2,
  VolumeX,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/page-frame";
import { MathText } from "@/components/math-text";
import {
  generateQuestion,
  generateQuestionSet,
  getSurvivalTimeLimit,
  type GameCategory,
  type GameModeType,
  type GameQuestion,
} from "@/lib/game-engine";
import {
  isSoundEnabled,
  playCorrectSound,
  playGameOverSound,
  playStreakSound,
  playWrongSound,
  setSoundEnabled,
  startBackgroundMusic,
  stopBackgroundMusic,
} from "@/lib/game-sound";
import {
  createDefaultAritmatikaStats,
  createDefaultGameStats,
  createDefaultPerbandinganStats,
  readAritmatikaStats,
  readGameStats,
  readPerbandinganStats,
  updateGameStats,
  type GameStats,
} from "@/lib/game-storage";
import { AritmatikaGameClient } from "@/components/aritmatika-game-client";
import { PerbandinganGameClient } from "@/components/perbandingan-game-client";

interface AnswerHistoryItem {
  question: GameQuestion;
  userAnswer: string;
  isCorrect: boolean;
  timeSpentSec: number;
}

export function GameClient() {
  // --- Game Selection State ---
  // null = Menampilkan Daftar Game (Katalog); "arena-hitung" = Arena Hitung Cepat; "aritmatika-sosial" = Arena Aritmatika Sosial; "perbandingan" = Arena Perbandingan
  const [activeGame, setActiveGame] = useState<"arena-hitung" | "aritmatika-sosial" | "perbandingan" | null>(null);

  // --- Arena Hitung Cepat State ---
  const [category, setCategory] = useState<GameCategory>("mixed");
  const [modeType, setModeType] = useState<GameModeType>("survival");
  const [fixedCount, setFixedCount] = useState<5 | 10 | 20>(10);
  const [fixedTimeLimitMinutes, setFixedTimeLimitMinutes] = useState<number>(2); // 0 = tanpa batas
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [soundOn, setSoundOn] = useState<boolean>(true);

  const [gameState, setGameState] = useState<"lobby" | "playing" | "summary">("lobby");
  const [stats, setStats] = useState<GameStats>(createDefaultGameStats);
  const [aritmStats, setAritmStats] = useState<GameStats>(createDefaultAritmatikaStats);
  const [propStats, setPropStats] = useState<GameStats>(createDefaultPerbandinganStats);

  // Active match data
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [history, setHistory] = useState<AnswerHistoryItem[]>([]);

  // Selected answer & feedback
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);

  // Timers
  const [survivalRemainingMs, setSurvivalRemainingMs] = useState<number>(45000);
  const [survivalTotalMs, setSurvivalTotalMs] = useState<number>(45000);
  const [fixedRemainingMs, setFixedRemainingMs] = useState<number>(120000);
  const questionStartTimeRef = useRef<number>(0);
  const timerIntervalRef = useRef<number | null>(null);
  const autoAdvanceTimeoutRef = useRef<number | null>(null);

  // Sync with URL query param ?play=... and hydrate localStorage state
  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const play = params.get("play");
      if (play === "arena-hitung" || play === "aritmatika-sosial" || play === "perbandingan") {
        setActiveGame(play);
      } else {
        setActiveGame(null);
      }
    };

    const initialSyncTimer = window.setTimeout(() => {
      syncFromUrl();
      setStats(readGameStats());
      setAritmStats(readAritmatikaStats());
      setPropStats(readPerbandinganStats());
      setSoundOn(isSoundEnabled());
    }, 0);

    window.addEventListener("popstate", syncFromUrl);
    return () => {
      window.clearTimeout(initialSyncTimer);
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, []);

  const openGame = (gameId: "arena-hitung" | "aritmatika-sosial" | "perbandingan") => {
    setActiveGame(gameId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("play", gameId);
      window.history.pushState({}, "", url.toString());
    }
  };

  const closeGame = () => {
    setActiveGame(null);
    // Refresh stats when closing game back to catalog
    setStats(readGameStats());
    setAritmStats(readAritmatikaStats());
    setPropStats(readPerbandinganStats());
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("play");
      window.history.pushState({}, "", url.toString());
    }
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  // Background Music untuk Arena Hitung Cepat
  useEffect(() => {
    if (gameState === "playing" && activeGame === null && soundOn) {
      startBackgroundMusic("hitung");
    } else {
      stopBackgroundMusic();
    }
    return () => {
      stopBackgroundMusic();
    };
  }, [gameState, activeGame, soundOn]);

  const currentQuestion = questions[currentIndex] as GameQuestion | undefined;

  // Start new match
  const startGame = useCallback(() => {
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    let initialQuestions: GameQuestion[] = [];
    if (modeType === "fixed") {
      initialQuestions = generateQuestionSet(category, fixedCount);
    } else {
      initialQuestions = [
        generateQuestion(category),
        generateQuestion(category),
        generateQuestion(category),
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

    const firstLimitSec = modeType === "survival" ? getSurvivalTimeLimit(1) : 0;
    setSurvivalRemainingMs(firstLimitSec * 1000);
    setSurvivalTotalMs(firstLimitSec * 1000);
    setFixedRemainingMs(fixedTimeLimitMinutes * 60 * 1000);
    questionStartTimeRef.current = Date.now();

    setGameState("playing");
  }, [category, fixedCount, fixedTimeLimitMinutes, modeType]);

  // Finish game & show summary
  const finishGame = useCallback(
    (reason: "lives_depleted" | "all_questions_answered" | "time_out") => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);

      if (reason === "lives_depleted") {
        playGameOverSound();
      }

      setGameState("summary");

      const correctCount = history.filter((h) => h.isCorrect).length;
      const updated = updateGameStats({
        mode: modeType,
        fixedCount: modeType === "fixed" ? fixedCount : undefined,
        score,
        streak: maxStreak,
        answered: history.length,
        correct: correctCount,
      });
      setStats(updated);
    },
    [fixedCount, history, maxStreak, modeType, score, setStats]
  );

  // Advance to next question
  const advanceToNext = useCallback(() => {
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);

    setSelectedOption(null);
    setIsAnswerRevealed(false);

    if (modeType === "fixed") {
      const nextIdx = currentIndex + 1;
      if (nextIdx >= questions.length) {
        finishGame("all_questions_answered");
        return;
      }
      setCurrentIndex(nextIdx);
      questionStartTimeRef.current = Date.now();
    } else {
      const nextIdx = currentIndex + 1;
      setQuestions((prev) => [...prev, generateQuestion(category)]);
      setCurrentIndex(nextIdx);

      const nextLimitSec = getSurvivalTimeLimit(nextIdx + 1);
      setSurvivalRemainingMs(nextLimitSec * 1000);
      setSurvivalTotalMs(nextLimitSec * 1000);
      questionStartTimeRef.current = Date.now();
    }
  }, [category, currentIndex, finishGame, modeType, questions.length]);

  // Handle user answering option
  const handleAnswer = useCallback(
    (chosen: string) => {
      if (isAnswerRevealed || !currentQuestion) return;

      const timeSpentSec = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
      const isCorrect = chosen === currentQuestion.correctAnswer;
      setSelectedOption(chosen);
      setIsAnswerRevealed(true);

      const newHistoryItem: AnswerHistoryItem = {
        question: currentQuestion,
        userAnswer: chosen,
        isCorrect,
        timeSpentSec,
      };
      setHistory((prev) => [...prev, newHistoryItem]);

      if (isCorrect) {
        const nextStreak = streak + 1;
        setStreak(nextStreak);
        setMaxStreak((prev) => Math.max(prev, nextStreak));

        const streakBonus = Math.min(50, nextStreak * 10);
        const points = 100 + streakBonus;
        setScore((prev) => prev + points);

        if (nextStreak > 0 && nextStreak % 3 === 0) {
          playStreakSound();
        } else {
          playCorrectSound();
        }

        if (autoAdvance) {
          autoAdvanceTimeoutRef.current = window.setTimeout(advanceToNext, 1200);
        }
      } else {
        setStreak(0);
        playWrongSound();

        if (modeType === "survival") {
          const nextLives = lives - 1;
          setLives(nextLives);
          if (nextLives <= 0) {
            autoAdvanceTimeoutRef.current = window.setTimeout(() => {
              finishGame("lives_depleted");
            }, 1400);
            return;
          }
        }

        if (autoAdvance) {
          autoAdvanceTimeoutRef.current = window.setTimeout(advanceToNext, 1800);
        }
      }
    },
    [
      advanceToNext,
      autoAdvance,
      currentQuestion,
      finishGame,
      isAnswerRevealed,
      lives,
      modeType,
      streak,
    ]
  );

  // Timer loop for playing state
  useEffect(() => {
    if (gameState !== "playing" || isAnswerRevealed || activeGame !== "arena-hitung") return;

    const interval = window.setInterval(() => {
      if (modeType === "survival") {
        setSurvivalRemainingMs((prev) => {
          const next = prev - 100;
          if (next <= 0) {
            playWrongSound();
            const timeSpentSec = Math.round(survivalTotalMs / 1000);
            if (currentQuestion) {
              setHistory((h) => [
                ...h,
                {
                  question: currentQuestion,
                  userAnswer: "(Waktu Habis)",
                  isCorrect: false,
                  timeSpentSec,
                },
              ]);
            }
            setStreak(0);
            setLives((l) => {
              const remaining = l - 1;
              if (remaining <= 0) {
                finishGame("lives_depleted");
              } else {
                advanceToNext();
              }
              return remaining;
            });
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
    activeGame,
    advanceToNext,
    currentQuestion,
    finishGame,
    fixedTimeLimitMinutes,
    gameState,
    isAnswerRevealed,
    modeType,
    survivalTotalMs,
  ]);

  // Keyboard navigation
  useEffect(() => {
    if (gameState !== "playing" || activeGame !== "arena-hitung") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (isAnswerRevealed) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          advanceToNext();
        }
        return;
      }

      if (!currentQuestion) return;

      const key = e.key.toUpperCase();
      let index = -1;
      if (["1", "A"].includes(key)) index = 0;
      else if (["2", "B"].includes(key)) index = 1;
      else if (["3", "C"].includes(key)) index = 2;
      else if (["4", "D"].includes(key)) index = 3;

      if (index >= 0 && index < currentQuestion.options.length) {
        e.preventDefault();
        handleAnswer(currentQuestion.options[index]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGame, advanceToNext, currentQuestion, gameState, handleAnswer, isAnswerRevealed]);

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
        badge: "MASTER HITUNG CEPAT",
        color: "bg-signal text-black",
        desc: "Sempurna! Refleks mental math Anda sudah setara peraih skor TIU 160+.",
      };
    }
    if (accuracy >= 80) {
      return {
        badge: "SANGAT TANGKAS",
        color: "bg-brand-blue text-white",
        desc: "Luar biasa! Fondasi pecahan dan desimal Anda sangat kokoh dan siap tanding.",
      };
    }
    if (accuracy >= 60) {
      return {
        badge: "SOLID & BERKEMBANG",
        color: "bg-amber-300 text-black",
        desc: "Bagus! Terus asah kecepatan agar tidak ragu saat melihat angka koma di ujian.",
      };
    }
    return {
      badge: "BUTUH PEMANTAPAN",
      color: "bg-neutral-300 text-black",
      desc: "Jangan patah semangat! Terus latih kembali konversi dan operasi pecahan untuk mempercepat refleks Anda.",
    };
  }, [history]);

  // =========================================================================
  // VIEW 1: DAFTAR GAME (GAME HUB / KATALOG)
  // =========================================================================
  if (activeGame === null) {
    return (
      <PageFrame
        eyebrow="Pusat Permainan Edukasi"
        title="DAFTAR GAME."
        description="Latihan interaktif berbasis game untuk mengasah kecepatan berpikir, insting angka, dan logika penalaran persiapan ujian SKD CPNS & Kedinasan."
        showHeader={true}
      >
        <div className="p-4 sm:p-8 lg:p-10 space-y-8 max-w-6xl mx-auto">
          {/* Status info bar */}
          <div className="border-2 border-black bg-warm-white p-4 flex flex-wrap items-center justify-between gap-3 shadow-[4px_4px_0_#10100f]">
            <div className="flex items-center gap-2">
              <Gamepad2 className="size-5 text-brand-blue" />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                3 Game Tersedia · 1 Game Segera Hadir
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
              <span className="text-muted-foreground">
                Hitung: <strong className="text-brand-red" suppressHydrationWarning>{stats.survivalHighScore} PTS</strong>
              </span>
              <span className="text-muted-foreground">
                Aritmatika: <strong className="text-emerald-700" suppressHydrationWarning>{aritmStats.survivalHighScore} PTS</strong>
              </span>
              <span className="text-muted-foreground">
                Perbandingan: <strong className="text-cyan-800" suppressHydrationWarning>{propStats.survivalHighScore} PTS</strong>
              </span>
            </div>
          </div>

          {/* Game Cards Grid (2x2 Layout) */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* GAME 1: ARENA HITUNG CEPAT (ACTIVE) */}
            <div className="border-2 border-black bg-card p-6 sm:p-7 shadow-[6px_6px_0_#10100f] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:translate-x-0.5 hover:translate-y-0.5 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b-2 border-black pb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase border border-black bg-signal text-black">
                    <Zap className="size-3.5 fill-current text-brand-red" /> Siap Dimainkan
                  </span>
                  <span className="font-mono text-xs font-bold text-brand-blue uppercase">
                    Fondasi TIU Numerik
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                    Arena Hitung Cepat
                  </h3>
                  <p className="font-mono text-xs font-bold text-muted-foreground">
                    Pecahan, Desimal & Persen
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Latih kecepatan refleks menaksir pecahan istimewa, konversi desimal/persen, dan operasi coret hitung cepat. Tersedia mode Survival 3 Nyawa dengan timer dinamis atau mode sprint 5, 10, 20 soal.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black/20 flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-xs">
                  <span className="text-muted-foreground">Rekor: </span>
                  <span className="font-black text-brand-blue" suppressHydrationWarning>{stats.survivalHighScore} PTS</span>
                  {stats.survivalBestStreak > 0 && (
                    <span className="text-amber-600 ml-1 font-bold" suppressHydrationWarning>
                      ({stats.survivalBestStreak}x 🔥)
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => openGame("arena-hitung")}
                  className="h-11 px-5 border-2 border-black bg-brand-blue hover:bg-brand-blue-hover text-white font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#10100f]"
                >
                  Mainkan <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* GAME 2: ARENA ARITMATIKA SOSIAL (ACTIVE) */}
            <div className="border-2 border-black bg-card p-6 sm:p-7 shadow-[6px_6px_0_#10100f] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:translate-x-0.5 hover:translate-y-0.5 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b-2 border-black pb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase border border-black bg-emerald-400 text-black">
                    <Zap className="size-3.5 fill-current text-emerald-950" /> Siap Dimainkan
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-700 uppercase">
                    Aritmatika TIU HOTS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                    Aritmatika Sosial
                  </h3>
                  <p className="font-mono text-xs font-bold text-muted-foreground">
                    Prinsip Logika 100%
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Kuasai aritmatika sosial tanpa rumus ribet! Kuasai satu ide kunci: <strong>Nilai Awal Selalu 100%</strong> untuk diskon, laba-rugi, bunga bank, bruto-neto, hingga variasi analitis HOTS TIU SKD.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black/20 flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-xs">
                  <span className="text-muted-foreground">Rekor: </span>
                  <span className="font-black text-emerald-700" suppressHydrationWarning>{aritmStats.survivalHighScore} PTS</span>
                  {aritmStats.survivalBestStreak > 0 && (
                    <span className="text-amber-600 ml-1 font-bold" suppressHydrationWarning>
                      ({aritmStats.survivalBestStreak}x 🔥)
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => openGame("aritmatika-sosial")}
                  className="h-11 px-5 border-2 border-black bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#10100f]"
                >
                  Mainkan <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* GAME 3: ARENA PERBANDINGAN (ACTIVE) */}
            <div className="border-2 border-black bg-card p-6 sm:p-7 shadow-[6px_6px_0_#10100f] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:translate-x-0.5 hover:translate-y-0.5 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b-2 border-black pb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase border border-black bg-cyan-400 text-black">
                    <Zap className="size-3.5 fill-current text-cyan-950" /> Siap Dimainkan
                  </span>
                  <span className="font-mono text-xs font-bold text-cyan-800 uppercase">
                    Perbandingan TIU HOTS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                    Arena Perbandingan
                  </h3>
                  <p className="font-mono text-xs font-bold text-muted-foreground">
                    Rasio, Senilai & Berbalik Nilai
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Kuasai 3 pilar perbandingan: <strong>Konsep Rasio</strong> (jumlah total, jumlah 2 objek, selisih), <strong>Perbandingan Senilai</strong> (pekerja, bensin, output), dan <strong>Berbalik Nilai</strong> (pakan ternak, kecepatan, proyek).
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black/20 flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-xs">
                  <span className="text-muted-foreground">Rekor: </span>
                  <span className="font-black text-cyan-800" suppressHydrationWarning>{propStats.survivalHighScore} PTS</span>
                  {propStats.survivalBestStreak > 0 && (
                    <span className="text-amber-600 ml-1 font-bold" suppressHydrationWarning>
                      ({propStats.survivalBestStreak}x 🔥)
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => openGame("perbandingan")}
                  className="h-11 px-5 border-2 border-black bg-cyan-700 hover:bg-cyan-800 text-white font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#10100f]"
                >
                  Mainkan <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* GAME 4: POLA ANGKA RAHASIA (COMING SOON) */}
            <div className="border-2 border-black bg-warm-white/60 p-6 sm:p-7 shadow-[4px_4px_0_#10100f] flex flex-col justify-between space-y-6 opacity-85">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b-2 border-black/30 pb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase border border-black/40 bg-neutral-200 text-neutral-700">
                    <Lock className="size-3" /> Segera Hadir
                  </span>
                  <span className="font-mono text-xs font-bold text-muted-foreground uppercase">
                    TIU Pola Numerik
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-800">
                    Pola Angka Rahasia
                  </h3>
                  <p className="font-mono text-xs font-bold text-muted-foreground">
                    Deret, Pola Tabel & Suku ke-n
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Tebak angka berikutnya pada pola loncat, deret Fibonacci, pola tabel angka/matriks, dan pola rumus suku ke-n secepat kilat.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black/20 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">Dalam Pengembangan</span>
                <Button disabled variant="outline" className="border-2 border-black/40 font-mono text-xs font-bold uppercase">
                  Segera Hadir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageFrame>
    );
  }

  // =========================================================================
  // VIEW 2: ARENA ARITMATIKA SOSIAL (GAMEPLAY)
  // =========================================================================
  if (activeGame === "aritmatika-sosial") {
    return (
      <AritmatikaGameClient
        onBack={closeGame}
        soundOn={soundOn}
        onToggleSound={toggleSound}
      />
    );
  }

  // =========================================================================
  // VIEW 3: ARENA PERBANDINGAN (GAMEPLAY)
  // =========================================================================
  if (activeGame === "perbandingan") {
    return (
      <PerbandinganGameClient
        onBack={closeGame}
        soundOn={soundOn}
        onToggleSound={toggleSound}
      />
    );
  }

  // =========================================================================
  // VIEW 4: ARENA HITUNG CEPAT (GAMEPLAY)
  // =========================================================================
  return (
    <PageFrame
      eyebrow="Game & Refleks TIU"
      title="ARENA HITUNG."
      description="Latih refleks fondasi perhitungan pecahan, desimal, dan persen untuk menaklukkan soal TIU SKD CPNS tanpa cakar-cakar lama."
      showHeader={gameState === "lobby"}
    >
      <div className="bg-background text-foreground">
        {/* ===================== LOBBY / MENU ===================== */}
        {gameState === "lobby" && (
          <div className="p-4 sm:p-8 lg:p-10 space-y-8 max-w-5xl mx-auto">
            {/* Top Toolbar: Kembali ke Katalog & Audio button */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-5">
              <button
                type="button"
                onClick={closeGame}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase py-1.5 px-3 border-2 border-black bg-warm-white hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="size-4" /> Daftar Game
              </button>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleSound}
                  className="border-2 border-black font-mono text-xs font-bold hover:bg-secondary"
                >
                  {soundOn ? (
                    <>
                      <Volume2 className="size-4 mr-1 text-brand-blue" /> Suara ON
                    </>
                  ) : (
                    <>
                      <VolumeX className="size-4 mr-1 text-muted-foreground" /> Suara OFF
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Mode Configuration Card */}
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start">
              {/* Left Column: Form & Settings */}
              <div className="border-2 border-black bg-card p-4 sm:p-8 shadow-[4px_4px_0_#10100f] sm:shadow-[6px_6px_0_#10100f] space-y-6 min-w-0">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Langkah 1
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Pilih Materi Soal</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 font-mono text-xs">
                    {[
                      { id: "mixed", label: "Campuran", desc: "Konversi + Operasi" },
                      { id: "conversion", label: "Konversi", desc: "Pecahan ↔ Desimal" },
                      { id: "operation", label: "Operasi", desc: "Hitung Cepat Antar Nilai" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCategory(item.id as GameCategory)}
                        className={`p-3 border-2 border-black text-left flex flex-col sm:justify-between transition-all min-w-0 ${
                          category === item.id
                            ? "bg-signal text-black shadow-[3px_3px_0_#10100f]"
                            : "bg-warm-white hover:bg-secondary"
                        }`}
                      >
                        <span className="font-black text-sm">{item.label}</span>
                        <span className="text-xs sm:text-[10px] text-muted-foreground mt-0.5 sm:mt-1">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-black pt-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Langkah 2
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Pilih Mode Permainan</h3>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => setModeType("survival")}
                      className={`p-4 border-2 border-black text-left transition-all ${
                        modeType === "survival"
                          ? "bg-brand-red text-white shadow-[4px_4px_0_#10100f]"
                          : "bg-warm-white hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase">
                        <Heart className="size-4 fill-current text-signal" /> 3 Nyawa
                      </div>
                      <div className="text-lg font-black uppercase mt-1">Survival</div>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          modeType === "survival" ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        Timer mulai 45s, menyusut hingga 5s. Salah 3x = Gugur!
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModeType("fixed")}
                      className={`p-4 border-2 border-black text-left transition-all ${
                        modeType === "fixed"
                          ? "bg-brand-blue text-white shadow-[4px_4px_0_#10100f]"
                          : "bg-warm-white hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase">
                        <Trophy className="size-4 text-signal" /> Target Soal
                      </div>
                      <div className="text-lg font-black uppercase mt-1">Jumlah Soal</div>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          modeType === "fixed" ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        Selesaikan paket 5, 10, atau 20 soal dengan batas waktu.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Sub-options for Fixed Mode */}
                {modeType === "fixed" && (
                  <div className="border-2 border-dashed border-black bg-secondary/40 p-4 space-y-4">
                    <div>
                      <label className="font-mono text-xs font-bold uppercase block mb-2">
                        Jumlah Soal:
                      </label>
                      <div className="flex gap-2">
                        {[5, 10, 20].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFixedCount(num as 5 | 10 | 20)}
                            className={`flex-1 py-2 border-2 border-black font-mono font-black text-sm transition-colors ${
                              fixedCount === num
                                ? "bg-black text-white"
                                : "bg-white hover:bg-brand-blue hover:text-white"
                            }`}
                          >
                            {num} Soal
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs font-bold uppercase block mb-2">
                        Batas Waktu Total:
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 font-mono text-xs font-bold">
                        {[
                          { min: 0, label: "Bebas" },
                          { min: 1, label: "1 Mnt" },
                          { min: 2, label: "2 Mnt" },
                          { min: 3, label: "3 Mnt" },
                          { min: 5, label: "5 Mnt" },
                        ].map((t) => (
                          <button
                            key={t.min}
                            type="button"
                            onClick={() => setFixedTimeLimitMinutes(t.min)}
                            className={`py-1.5 border border-black transition-colors ${
                              fixedTimeLimitMinutes === t.min
                                ? "bg-black text-white"
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

                {/* Start Button */}
                <Button
                  size="lg"
                  onClick={startGame}
                  className="w-full h-16 border-2 border-black bg-brand-blue hover:bg-brand-blue-hover text-white font-black text-xl uppercase tracking-wider shadow-[4px_4px_0_#10100f] active:translate-x-1 active:translate-y-1 transition-all"
                >
                  <Play className="size-6 mr-2 fill-current" /> Mulai Arena
                </Button>
              </div>

              {/* Right Column: Personal Records & Stats */}
              <div className="border-2 border-black bg-card p-5 sm:p-6 shadow-[6px_6px_0_#10100f] space-y-6">
                <div className="border-b-2 border-black pb-3">
                  <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">
                    Rekor Pribadi Anda
                  </p>
                  <h4 className="text-xl font-black uppercase tracking-tight">Statistik Prestasi</h4>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 border-2 border-black bg-warm-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="size-4 text-brand-red fill-current" />
                      <span className="font-bold">Survival Skor Tertinggi:</span>
                    </div>
                    <span className="text-base font-black text-brand-red" suppressHydrationWarning>
                      {stats.survivalHighScore} PTS
                    </span>
                  </div>

                  <div className="p-3 border-2 border-black bg-warm-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Flame className="size-4 text-amber-500 fill-current" />
                      <span className="font-bold">Survival Rentetan Benar:</span>
                    </div>
                    <span className="text-base font-black text-amber-600" suppressHydrationWarning>
                      {stats.survivalBestStreak}x Streak
                    </span>
                  </div>

                  <div className="p-3 border-2 border-black bg-warm-white">
                    <div className="font-bold mb-2 flex items-center gap-1.5">
                      <Trophy className="size-4 text-brand-blue" />
                      <span>Best Score Mode Soal:</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="border border-black p-1 bg-white">
                        <div className="text-[10px] text-muted-foreground">5 Soal</div>
                        <div className="font-black text-sm" suppressHydrationWarning>{stats.fixedBestScore[5]}</div>
                      </div>
                      <div className="border border-black p-1 bg-white">
                        <div className="text-[10px] text-muted-foreground">10 Soal</div>
                        <div className="font-black text-sm" suppressHydrationWarning>{stats.fixedBestScore[10]}</div>
                      </div>
                      <div className="border border-black p-1 bg-white">
                        <div className="text-[10px] text-muted-foreground">20 Soal</div>
                        <div className="font-black text-sm" suppressHydrationWarning>{stats.fixedBestScore[20]}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-black bg-secondary/50 flex items-center justify-between">
                    <span>Total Soal Dijawab:</span>
                    <span className="font-black text-sm" suppressHydrationWarning>{stats.totalAnswered} soal</span>
                  </div>

                  <div className="p-3 border-2 border-black bg-secondary/50 flex items-center justify-between">
                    <span>Akurasi Keseluruhan:</span>
                    <span className="font-black text-sm" suppressHydrationWarning>
                      {stats.totalAnswered > 0
                        ? `${Math.round((stats.totalCorrect / stats.totalAnswered) * 100)}%`
                        : "0%"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== IN-GAME PLAYING ===================== */}
        {gameState === "playing" && currentQuestion && (
          <div className="p-4 sm:p-8 max-w-3xl mx-auto space-y-6">
            {/* Playing Header Info */}
            <div className="border-2 border-black bg-card p-4 sm:p-5 shadow-[4px_4px_0_#10100f] flex flex-wrap items-center justify-between gap-3">
              {/* Left: Mode Indicator & Lives / Progress */}
              <div className="flex items-center gap-4">
                {modeType === "survival" ? (
                  <div className="flex items-center gap-1.5" title="Nyawa tersisa">
                    {[1, 2, 3].map((num) => (
                      <Heart
                        key={num}
                        className={`size-6 transition-all ${
                          num <= lives
                            ? "fill-brand-red text-brand-red scale-110"
                            : "fill-neutral-300 text-neutral-400 opacity-40 scale-90"
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="font-mono text-xs font-bold uppercase tracking-wider bg-secondary px-2.5 py-1 border border-black">
                    Soal {currentIndex + 1} / {questions.length}
                  </div>
                )}

                {streak >= 2 && (
                  <div className="flex items-center gap-1 font-mono text-xs font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 border border-amber-600 rounded animate-bounce">
                    <Flame className="size-3.5 fill-amber-500 text-amber-600" /> {streak}x Combo
                  </div>
                )}
              </div>

              {/* Center / Right: Score, Timer, Sound */}
              <div className="flex items-center gap-3">
                <div className="font-mono text-xs sm:text-sm font-black bg-warm-white px-3 py-1 border border-black shadow-[2px_2px_0_#10100f]">
                  {score} PTS
                </div>

                {/* Timer Display */}
                {modeType === "survival" ? (
                  <div
                    className={`font-mono text-xs sm:text-sm font-black px-2.5 py-1 border border-black flex items-center gap-1.5 ${
                      survivalRemainingMs <= 4000
                        ? "bg-brand-red text-white animate-pulse"
                        : "bg-secondary text-black"
                    }`}
                  >
                    <Clock className="size-3.5" />
                    {Math.ceil(survivalRemainingMs / 1000)}s
                  </div>
                ) : fixedTimeLimitMinutes > 0 ? (
                  <div
                    className={`font-mono text-xs sm:text-sm font-black px-2.5 py-1 border border-black flex items-center gap-1.5 ${
                      fixedRemainingMs <= 15000
                        ? "bg-brand-red text-white animate-pulse"
                        : "bg-secondary text-black"
                    }`}
                  >
                    <Clock className="size-3.5" />
                    {formatTime(fixedRemainingMs)}
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={toggleSound}
                  className="p-1.5 border border-black bg-white hover:bg-secondary"
                  aria-label="Toggle suara"
                >
                  {soundOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4 text-neutral-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => finishGame("time_out")}
                  className="px-2.5 py-1 border border-black font-mono text-xs font-bold bg-neutral-200 hover:bg-brand-red hover:text-white"
                >
                  Keluar
                </button>
              </div>
            </div>

            {/* Survival Timer Bar */}
            {modeType === "survival" && (
              <div className="h-2 w-full border-2 border-black bg-warm-white overflow-hidden">
                <div
                  className={`h-full transition-all duration-100 ease-linear ${
                    survivalRemainingMs <= 5000 ? "bg-brand-red" : "bg-brand-blue"
                  }`}
                  style={{
                    width: `${Math.max(0, (survivalRemainingMs / survivalTotalMs) * 100)}%`,
                  }}
                />
              </div>
            )}

            {/* Question Card */}
            <div className="border-2 border-black bg-card p-6 sm:p-10 shadow-[6px_6px_0_#10100f] text-center space-y-6">
              <div className="flex justify-center">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 border border-black bg-signal text-black">
                  {currentQuestion.kind === "conversion" ? "Konversi Nilai" : "Operasi Cepat"}
                </span>
              </div>

              <div className="py-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  <MathText text={currentQuestion.prompt} />
                </h2>
                {currentQuestion.subtext && (
                  <p className="font-mono text-xs text-muted-foreground mt-2">
                    {currentQuestion.subtext}
                  </p>
                )}
              </div>

              {/* 4 Answer Choice Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQuestion.options.map((option, idx) => {
                  const keyLetter = ["A", "B", "C", "D"][idx];
                  let btnStyle = "bg-warm-white hover:bg-secondary text-foreground";

                  if (isAnswerRevealed) {
                    if (option === currentQuestion.correctAnswer) {
                      btnStyle = "bg-emerald-500 text-white shadow-[2px_2px_0_#10100f]";
                    } else if (option === selectedOption) {
                      btnStyle = "bg-brand-red text-white shadow-[2px_2px_0_#10100f]";
                    } else {
                      btnStyle = "bg-neutral-200 text-neutral-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswerRevealed}
                      onClick={() => handleAnswer(option)}
                      className={`min-h-16 p-4 border-2 border-black text-left flex items-center justify-between font-mono transition-transform active:scale-[0.98] ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="size-7 rounded-none border border-black bg-black text-white flex items-center justify-center font-bold text-xs">
                          {keyLetter}
                        </span>
                        <span className="text-xl sm:text-2xl font-black">
                          <MathText text={option} />
                        </span>
                      </div>
                      {isAnswerRevealed && option === currentQuestion.correctAnswer && (
                        <Check className="size-6 text-white stroke-[3]" />
                      )}
                      {isAnswerRevealed && option === selectedOption && option !== currentQuestion.correctAnswer && (
                        <X className="size-6 text-white stroke-[3]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tip Explanation Box (Appears after answer) */}
              {isAnswerRevealed && (
                <div className="mt-4 border-2 border-black bg-signal/30 p-4 text-left space-y-2 animate-in fade-in-50">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-black uppercase">
                    <Zap className="size-4 text-brand-red fill-current" /> Trik Kilat Pembahasan:
                  </div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    <MathText text={currentQuestion.tip} />
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <label className="flex items-center gap-2 font-mono text-xs cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={autoAdvance}
                        onChange={(e) => setAutoAdvance(e.target.checked)}
                        className="size-3.5 border-black rounded-none"
                      />
                      <span>Lanjut Otomatis (1.2 detik)</span>
                    </label>

                    <Button
                      size="sm"
                      onClick={advanceToNext}
                      className="border-2 border-black bg-black text-white hover:bg-neutral-800 font-mono text-xs font-bold uppercase"
                    >
                      Lanjut <ArrowRight className="size-4 ml-1" />
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

        {/* ===================== SUMMARY / GAME OVER ===================== */}
        {gameState === "summary" && (
          <div className="p-4 sm:p-8 max-w-4xl mx-auto space-y-8">
            <div className="border-2 border-black bg-card p-6 sm:p-10 shadow-[6px_6px_0_#10100f] space-y-6">
              {/* Header Title */}
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
                  <div className="text-4xl sm:text-5xl font-black text-brand-blue">
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

              {/* Actions: Main Lagi, Menu Arena, & Kembali ke Daftar Game */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={startGame}
                  className="flex-1 min-w-[180px] h-14 border-2 border-black bg-brand-blue hover:bg-brand-blue-hover text-white font-black text-lg uppercase tracking-wider shadow-[3px_3px_0_#10100f]"
                >
                  <RotateCcw className="size-5 mr-2" /> Main Lagi
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setGameState("lobby")}
                  className="border-2 border-black h-14 font-black text-base uppercase tracking-wider hover:bg-secondary"
                >
                  Menu Arena
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={closeGame}
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
                  <HelpCircle className="size-5 text-brand-blue" /> Evaluasi & Pembahasan Soal
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
                          Soal #{idx + 1} · {item.question.kind === "conversion" ? "Konversi" : "Operasi"}
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

                      <div className="text-base sm:text-lg font-bold">
                        <MathText text={item.question.prompt} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2 font-mono text-xs pt-1">
                        <div>
                          <span className="text-muted-foreground">Jawaban Anda: </span>
                          <span className={item.isCorrect ? "font-bold text-emerald-700" : "font-bold text-brand-red"}>
                            <MathText text={item.userAnswer} />
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Kunci Benar: </span>
                          <span className="font-bold text-emerald-700">
                            <MathText text={item.question.correctAnswer} />
                          </span>
                        </div>
                      </div>

                      <div className="text-xs bg-white/80 p-2.5 border border-black/30 text-foreground leading-relaxed mt-1">
                        💡 <strong>Trik:</strong> <MathText text={item.question.tip} />
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
