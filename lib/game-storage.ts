/**
 * Penyimpanan Statistik & Rekor Tertinggi Game LesinAja di LocalStorage
 */

export interface GameStats {
  totalPlayed: number;
  totalAnswered: number;
  totalCorrect: number;
  survivalHighScore: number;
  survivalBestStreak: number;
  fixedBestScore: {
    5: number;
    10: number;
    20: number;
  };
  lastPlayedAt: number;
}

const GAME_STORAGE_KEY = "lesinaja.game.stats.v1";

export function createDefaultGameStats(): GameStats {
  return {
    totalPlayed: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    survivalHighScore: 0,
    survivalBestStreak: 0,
    fixedBestScore: {
      5: 0,
      10: 0,
      20: 0,
    },
    lastPlayedAt: 0,
  };
}

export function readGameStats(): GameStats {
  if (typeof window === "undefined") return createDefaultGameStats();
  try {
    const raw = window.localStorage.getItem(GAME_STORAGE_KEY);
    if (!raw) return createDefaultGameStats();
    const parsed = JSON.parse(raw);
    return {
      totalPlayed: typeof parsed.totalPlayed === "number" ? parsed.totalPlayed : 0,
      totalAnswered: typeof parsed.totalAnswered === "number" ? parsed.totalAnswered : 0,
      totalCorrect: typeof parsed.totalCorrect === "number" ? parsed.totalCorrect : 0,
      survivalHighScore: typeof parsed.survivalHighScore === "number" ? parsed.survivalHighScore : 0,
      survivalBestStreak: typeof parsed.survivalBestStreak === "number" ? parsed.survivalBestStreak : 0,
      fixedBestScore: {
        5: typeof parsed.fixedBestScore?.["5"] === "number" ? parsed.fixedBestScore["5"] : 0,
        10: typeof parsed.fixedBestScore?.["10"] === "number" ? parsed.fixedBestScore["10"] : 0,
        20: typeof parsed.fixedBestScore?.["20"] === "number" ? parsed.fixedBestScore["20"] : 0,
      },
      lastPlayedAt: typeof parsed.lastPlayedAt === "number" ? parsed.lastPlayedAt : 0,
    };
  } catch {
    return createDefaultGameStats();
  }
}

export function writeGameStats(stats: GameStats): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // quota exceeded or private mode
  }
}

export function updateGameStats(
  result: {
    mode: "fixed" | "survival";
    fixedCount?: 5 | 10 | 20;
    score: number;
    streak: number;
    answered: number;
    correct: number;
  }
): GameStats {
  const current = readGameStats();
  const next: GameStats = {
    ...current,
    totalPlayed: current.totalPlayed + 1,
    totalAnswered: current.totalAnswered + result.answered,
    totalCorrect: current.totalCorrect + result.correct,
    lastPlayedAt: Date.now(),
  };

  if (result.mode === "survival") {
    next.survivalHighScore = Math.max(current.survivalHighScore, result.score);
    next.survivalBestStreak = Math.max(current.survivalBestStreak, result.streak);
  } else if (result.fixedCount && [5, 10, 20].includes(result.fixedCount)) {
    const currentBest = current.fixedBestScore[result.fixedCount] || 0;
    next.fixedBestScore = {
      ...current.fixedBestScore,
      [result.fixedCount]: Math.max(currentBest, result.score),
    };
  }

  writeGameStats(next);
  return next;
}

const ARITMATIKA_STORAGE_KEY = "lesinaja.aritmatika.stats.v1";

export function createDefaultAritmatikaStats(): GameStats {
  return createDefaultGameStats();
}

export function readAritmatikaStats(): GameStats {
  if (typeof window === "undefined") return createDefaultAritmatikaStats();
  try {
    const raw = window.localStorage.getItem(ARITMATIKA_STORAGE_KEY);
    if (!raw) return createDefaultAritmatikaStats();
    const parsed = JSON.parse(raw);
    return {
      totalPlayed: typeof parsed.totalPlayed === "number" ? parsed.totalPlayed : 0,
      totalAnswered: typeof parsed.totalAnswered === "number" ? parsed.totalAnswered : 0,
      totalCorrect: typeof parsed.totalCorrect === "number" ? parsed.totalCorrect : 0,
      survivalHighScore: typeof parsed.survivalHighScore === "number" ? parsed.survivalHighScore : 0,
      survivalBestStreak: typeof parsed.survivalBestStreak === "number" ? parsed.survivalBestStreak : 0,
      fixedBestScore: {
        5: typeof parsed.fixedBestScore?.["5"] === "number" ? parsed.fixedBestScore["5"] : 0,
        10: typeof parsed.fixedBestScore?.["10"] === "number" ? parsed.fixedBestScore["10"] : 0,
        20: typeof parsed.fixedBestScore?.["20"] === "number" ? parsed.fixedBestScore["20"] : 0,
      },
      lastPlayedAt: typeof parsed.lastPlayedAt === "number" ? parsed.lastPlayedAt : 0,
    };
  } catch {
    return createDefaultAritmatikaStats();
  }
}

export function writeAritmatikaStats(stats: GameStats): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ARITMATIKA_STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // quota exceeded or private mode
  }
}

export function updateAritmatikaStats(
  result: {
    mode: "fixed" | "survival";
    fixedCount?: 5 | 10 | 20;
    score: number;
    streak: number;
    answered: number;
    correct: number;
  }
): GameStats {
  const current = readAritmatikaStats();
  const next: GameStats = {
    ...current,
    totalPlayed: current.totalPlayed + 1,
    totalAnswered: current.totalAnswered + result.answered,
    totalCorrect: current.totalCorrect + result.correct,
    lastPlayedAt: Date.now(),
  };

  if (result.mode === "survival") {
    next.survivalHighScore = Math.max(current.survivalHighScore, result.score);
    next.survivalBestStreak = Math.max(current.survivalBestStreak, result.streak);
  } else if (result.fixedCount && [5, 10, 20].includes(result.fixedCount)) {
    const currentBest = current.fixedBestScore[result.fixedCount] || 0;
    next.fixedBestScore = {
      ...current.fixedBestScore,
      [result.fixedCount]: Math.max(currentBest, result.score),
    };
  }

  writeAritmatikaStats(next);
  return next;
}

