import type { EncryptedExamEnvelope } from "./exam-security";

export const EXAM_SESSION_STORAGE_KEY = "lesinaja.proctored-exam.v1";
export const LAST_SUBMISSION_STORAGE_KEY = "lesinaja.proctored-exam.last-submission";

export type ProctoredExamPhase = "rules" | "active" | "locked" | "completed";

export interface ProctoredExamSession {
  id: string;
  packageId: string;
  participantName: string;
  deviceId: string;
  shuffleSeed: string;
  phase: ProctoredExamPhase;
  answers: Record<string, string>;
  flagged: string[];
  currentIndex: number;
  createdAt: number;
  startedAt: number;
  deadlineAt: number;
  completedAt?: number;
  lockedAt?: number;
  lockReason?: string;
  lockPin?: string;
  alarmTriggeredDuringExam?: boolean;
  finishTrigger?: "manual" | "time_up";
}

export interface StoredSubmissionBackup {
  filename: string;
  exportedAt: number;
  envelope: EncryptedExamEnvelope;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isValidSession(value: unknown): value is ProctoredExamSession {
  if (!isRecord(value)) return false;
  return (
    typeof value.id === "string" &&
    typeof value.packageId === "string" &&
    typeof value.participantName === "string" &&
    typeof value.deviceId === "string" &&
    typeof value.shuffleSeed === "string" &&
    ["rules", "active", "locked", "completed"].includes(String(value.phase)) &&
    isRecord(value.answers) &&
    Array.isArray(value.flagged) &&
    typeof value.currentIndex === "number" &&
    typeof value.createdAt === "number" &&
    typeof value.startedAt === "number" &&
    typeof value.deadlineAt === "number"
  );
}

export function readExamSession(): ProctoredExamSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(EXAM_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return isValidSession(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeExamSession(session: ProctoredExamSession): ProctoredExamSession {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(EXAM_SESSION_STORAGE_KEY, JSON.stringify(session));
    } catch {
      // quota or private browsing ignore
    }
  }
  return session;
}

export function clearExamSession(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(EXAM_SESSION_STORAGE_KEY);
  } catch {
    // safe ignore
  }
}

export function readLastEncryptedSubmission(): StoredSubmissionBackup | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LAST_SUBMISSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredSubmissionBackup>;
    if (
      !parsed ||
      typeof parsed.filename !== "string" ||
      typeof parsed.exportedAt !== "number" ||
      !parsed.envelope ||
      parsed.envelope.format !== "LESINAJA_ENCRYPTED_EXAM_V1"
    ) {
      return null;
    }
    return parsed as StoredSubmissionBackup;
  } catch {
    return null;
  }
}

export function writeLastEncryptedSubmission(
  backup: StoredSubmissionBackup
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      LAST_SUBMISSION_STORAGE_KEY,
      JSON.stringify(backup)
    );
  } catch {
    // safe ignore
  }
}
