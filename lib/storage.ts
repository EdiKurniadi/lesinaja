import type { ActiveSession, AttemptResult, DrillStat, PersistedLearningState, TopicProgress } from "./types";

export const STORAGE_KEY = "lesinaja.learning.v2";
export const STATE_EVENT = "lesinaja:state-change";

export function createDefaultState(): PersistedLearningState {
  return {
    version: 2,
    activeTryout: null,
    activeDrill: null,
    attempts: [],
    drillStats: {},
    topicProgress: {},
    updatedAt: Date.now(),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validSession(value: unknown): value is ActiveSession {
  if (!isRecord(value)) return false;
  return typeof value.id === "string" && ["drill", "tryout"].includes(String(value.kind)) &&
    Array.isArray(value.questionIds) && value.questionIds.every((id) => typeof id === "string") &&
    isRecord(value.answers) && Object.values(value.answers).every((answer) => typeof answer === "string") &&
    Array.isArray(value.flagged) && value.flagged.every((id) => typeof id === "string") &&
    typeof value.currentIndex === "number" && typeof value.startedAt === "number" &&
    (value.deadlineAt === undefined || typeof value.deadlineAt === "number");
}

function validAttempt(value: unknown): value is AttemptResult {
  if (!isRecord(value) || !isRecord(value.scores)) return false;
  const scores = value.scores;
  return typeof value.id === "string" && typeof value.packageId === "string" &&
    typeof value.startedAt === "number" && typeof value.completedAt === "number" &&
    typeof value.totalScore === "number" && typeof value.passed === "boolean" &&
    isRecord(value.answers) && ["TWK", "TIU", "TKP"].every((category) => isRecord(scores[category]) && typeof (scores[category] as Record<string, unknown>).score === "number") &&
    Array.isArray(value.topicBreakdown);
}

function validDrillStat(value: unknown): value is DrillStat {
  return isRecord(value) && ["attempts", "earned", "possible", "lastAnsweredAt"].every((key) => typeof value[key] === "number");
}

function validTopicProgress(value: unknown): value is TopicProgress {
  return isRecord(value) && typeof value.opened === "boolean" && typeof value.completed === "boolean" && typeof value.updatedAt === "number";
}

function sanitize(value: unknown): PersistedLearningState {
  if (!value || typeof value !== "object") return createDefaultState();
  const input = value as Partial<PersistedLearningState> & { version?: number };
  return {
    version: 2,
    activeTryout: validSession(input.activeTryout) ? input.activeTryout : null,
    activeDrill: validSession(input.activeDrill) ? input.activeDrill : null,
    attempts: Array.isArray(input.attempts) ? input.attempts.filter(validAttempt).slice(0, 30) : [],
    drillStats: isRecord(input.drillStats) ? Object.fromEntries(Object.entries(input.drillStats).filter(([, stat]) => validDrillStat(stat))) : {},
    topicProgress: isRecord(input.topicProgress) ? Object.fromEntries(Object.entries(input.topicProgress).filter(([, progress]) => validTopicProgress(progress))) : {},
    updatedAt: typeof input.updatedAt === "number" ? input.updatedAt : Date.now(),
  };
}

export function readLearningState(): PersistedLearningState {
  if (typeof window === "undefined") return createDefaultState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultState();
    return sanitize(JSON.parse(raw));
  } catch {
    return createDefaultState();
  }
}

export function writeLearningState(state: PersistedLearningState): PersistedLearningState {
  const next = { ...state, version: 2 as const, updatedAt: Date.now() };
  if (typeof window !== "undefined") {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* private mode or full quota */ }
    window.dispatchEvent(new CustomEvent(STATE_EVENT, { detail: next }));
  }
  return next;
}

export function updateLearningState(
  updater: (state: PersistedLearningState) => PersistedLearningState,
): PersistedLearningState {
  return writeLearningState(updater(readLearningState()));
}
