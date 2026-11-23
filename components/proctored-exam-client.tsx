"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  CheckCircle2,
  Clock3,
  Copy,
  Download,
  Key,
  Lock,
  Maximize2,
  Play,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Volume2,
  Wifi,
  WifiOff,
  X,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { validatePackageAccessCode } from "@/lib/access-codes";
import { extractQuestionImageUrls, preloadQuestionAssets } from "@/lib/asset-preload";
import { ALL_TRYOUT_PACKAGES, UJIAN_PACKAGES, getPackage } from "@/lib/content";
import {
  startExamAlarm,
  stopExamAlarm,
  unlockExamAlarmAudio,
} from "@/lib/exam-alarm";
import {
  buildSubmissionFilename,
  encryptExamSubmission,
  generateLockPin,
  getOrCreateDeviceId,
  shuffleExamQuestions,
  validateExamUnlockCode,
  type ExamSubmissionPayload,
} from "@/lib/exam-security";
import {
  clearExamSession,
  readExamSession,
  readLastEncryptedSubmission,
  writeExamSession,
  writeLastEncryptedSubmission,
  type ProctoredExamSession,
  type StoredSubmissionBackup,
} from "@/lib/exam-storage";
import { toStaticPath } from "@/lib/static-path";
import type { Question } from "@/lib/types";
import { ExamShell, useExamKeyboard } from "./exam-shell";
import { PageFrame } from "./page-frame";
import { QuestionCard } from "./question-card";
import { StaticLink } from "./static-link";

const STAGE_1_MS = 120_000; // 2 menit waktu normal minta kode
const STAGE_2_MS = 240_000; // +2 menit tambahan dengan alarm (total 4 menit)

function formatClock(ms: number): string {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  if (hours > 0) {
    return [hours, minutes, seconds]
      .map((item) => String(item).padStart(2, "0"))
      .join(":");
  }
  return [minutes, seconds].map((item) => String(item).padStart(2, "0")).join(":");
}

function downloadJsonFile(filename: string, data: unknown): void {
  const jsonText = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonText], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function replaceImagePaths(
  text: string,
  cacheMap: Record<string, string>
): string {
  let updated = text;
  for (const [origUrl, dataUrl] of Object.entries(cacheMap)) {
    if (updated.includes(origUrl)) {
      updated = updated.split(origUrl).join(dataUrl);
    }
  }
  return updated;
}

async function cacheImagesToDataUrls(
  questions: Question[],
  onProgress: (done: number, total: number) => void
): Promise<Record<string, string>> {
  const urls = extractQuestionImageUrls(questions);
  if (urls.length === 0) {
    onProgress(1, 1);
    return {};
  }

  let completed = 0;
  const entries = await Promise.all(
    urls.map(async (rawUrl): Promise<[string, string] | null> => {
      try {
        const res = await fetch(toStaticPath(rawUrl), { cache: "force-cache" });
        if (!res.ok) return null;
        const blob = await res.blob();
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () =>
            typeof reader.result === "string"
              ? resolve(reader.result)
              : reject(new Error("Invalid result"));
          reader.onerror = () => reject(new Error("FileReader failed"));
          reader.readAsDataURL(blob);
        });
        completed += 1;
        onProgress(completed, urls.length);
        return [rawUrl, dataUrl];
      } catch {
        completed += 1;
        onProgress(completed, urls.length);
        return null;
      }
    })
  );

  // Also trigger standard image warm-up in parallel
  await preloadQuestionAssets(questions, 10000).catch(() => {});

  const map: Record<string, string> = {};
  for (const entry of entries) {
    if (entry) map[entry[0]] = entry[1];
  }
  return map;
}

export function ProctoredExamClient() {
  const [hydrated, setHydrated] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [session, setSession] = useState<ProctoredExamSession | null>(null);
  const [lastBackup, setLastBackup] = useState<StoredSubmissionBackup | null>(
    null
  );

  // Form entry states
  const [participantName, setParticipantName] = useState("");
  const [selectedPackageId, setSelectedPackageId] = useState(
    UJIAN_PACKAGES[0]?.id ?? ALL_TRYOUT_PACKAGES[0]?.id ?? "tryout-new-casn-1"
  );
  const [startCodeInput, setStartCodeInput] = useState("");
  const [startError, setStartError] = useState<string | null>(null);

  // Environment / anti-cheat runtime states
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOffline, setIsOffline] = useState(true);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [nowMs, setNowMs] = useState(Date.now);

  // Asset caching state for offline figural images
  const [assetsReady, setAssetsReady] = useState(false);
  const [assetProgress, setAssetProgress] = useState({ done: 0, total: 1 });
  const [imageCacheMap, setImageCacheMap] = useState<Record<string, string>>({});

  // Unlock modal states
  const [unlockCodeInput, setUnlockCodeInput] = useState("");
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  // Encrypted submission export state
  const [submissionBackup, setSubmissionBackup] =
    useState<StoredSubmissionBackup | null>(null);
  const [encryptionError, setEncryptionError] = useState<string | null>(null);
  const [isEncrypting, setIsEncrypting] = useState(false);

  const sessionRef = useRef<ProctoredExamSession | null>(null);

  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  // Initial client hydration
  useEffect(() => {
    const id = getOrCreateDeviceId();
    const savedSession = readExamSession();
    const savedSubmission = readLastEncryptedSubmission();
    const timer = window.setTimeout(() => {
      setDeviceId(id);
      sessionRef.current = savedSession;
      setSession(savedSession);
      setLastBackup(savedSubmission);
      if (savedSession?.phase === "completed" && savedSubmission) {
        setSubmissionBackup(savedSubmission);
      }
      setIsFullscreen(Boolean(document.fullscreenElement));
      setIsOffline(!navigator.onLine);
      setNowMs(Date.now());
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  // Stop alarm if component unmounts
  useEffect(() => {
    return () => {
      stopExamAlarm();
    };
  }, []);

  // Keep offline & fullscreen status synced continuously
  useEffect(() => {
    const syncEnv = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
      setIsOffline(!navigator.onLine);
    };
    window.addEventListener("online", syncEnv);
    window.addEventListener("offline", syncEnv);
    document.addEventListener("fullscreenchange", syncEnv);
    const poll = window.setInterval(syncEnv, 500);
    return () => {
      window.removeEventListener("online", syncEnv);
      window.removeEventListener("offline", syncEnv);
      document.removeEventListener("fullscreenchange", syncEnv);
      window.clearInterval(poll);
    };
  }, []);

  // Selected package and deterministically shuffled questions + options
  const activePackage = useMemo(
    () => (session ? getPackage(session.packageId) : undefined),
    [session]
  );

  const shuffledQuestions = useMemo(() => {
    if (!session || !activePackage) return [];
    const baseShuffled = shuffleExamQuestions(
      activePackage.questions,
      session.shuffleSeed,
      activePackage.kind ?? "mini"
    );
    if (Object.keys(imageCacheMap).length === 0) return baseShuffled;
    return baseShuffled.map((q) => ({
      ...q,
      prompt: replaceImagePaths(q.prompt, imageCacheMap),
      choices: q.choices.map((c) => ({
        ...c,
        label: replaceImagePaths(c.label, imageCacheMap),
      })),
    }));
  }, [activePackage, imageCacheMap, session]);

  // Preload / download questions & figural assets whenever entering rules or resuming active session
  const runAssetDownload = useCallback(async (questions: Question[]) => {
    setAssetsReady(false);
    const urls = extractQuestionImageUrls(questions);
    setAssetProgress({ done: 0, total: Math.max(1, urls.length) });
    const cacheMap = await cacheImagesToDataUrls(questions, (done, total) => {
      setAssetProgress({ done, total });
    });
    setImageCacheMap((prev) => ({ ...prev, ...cacheMap }));
    setAssetsReady(true);
  }, []);

  useEffect(() => {
    if (!session || !activePackage) return;
    if (session.phase === "completed") return;
    if (assetsReady) return;
    const init = window.setTimeout(() => {
      void runAssetDownload(activePackage.questions);
    }, 0);
    return () => window.clearTimeout(init);
  }, [activePackage, assetsReady, runAssetDownload, session]);

  const updateSession = useCallback(
    (
      updater: (prev: ProctoredExamSession) => ProctoredExamSession
    ): ProctoredExamSession | null => {
      const current = sessionRef.current;
      if (!current) return null;
      const next = writeExamSession(updater(current));
      sessionRef.current = next;
      setSession(next);
      return next;
    },
    []
  );

  const generateEncryptedExport = useCallback(
    async (
      completedSession: ProctoredExamSession,
      pkgTitle: string,
      orderedQuestions: Question[]
    ) => {
      setIsEncrypting(true);
      setEncryptionError(null);
      try {
        const finishedAt = completedSession.completedAt ?? Date.now();
        const payload: ExamSubmissionPayload = {
          formatVersion: 1,
          sessionId: completedSession.id,
          packageId: completedSession.packageId,
          packageTitle: pkgTitle,
          participantName: completedSession.participantName,
          deviceId: completedSession.deviceId,
          shuffleSeed: completedSession.shuffleSeed,
          startedAt: completedSession.startedAt,
          completedAt: finishedAt,
          durationSeconds: Math.max(
            0,
            Math.round((finishedAt - completedSession.startedAt) / 1000)
          ),
          finishTrigger: completedSession.finishTrigger ?? "manual",
          answers: completedSession.answers,
          flagged: completedSession.flagged,
          questionOrder: orderedQuestions.map((q) => q.id),
          alarmTriggeredDuringExam: Boolean(
            completedSession.alarmTriggeredDuringExam
          ),
        };
        const envelope = await encryptExamSubmission(payload);
        const filename = buildSubmissionFilename(
          completedSession.participantName,
          completedSession.packageId,
          completedSession.deviceId
        );
        const backup: StoredSubmissionBackup = {
          filename,
          exportedAt: Date.now(),
          envelope,
        };
        writeLastEncryptedSubmission(backup);
        setSubmissionBackup(backup);
        setLastBackup(backup);
      } catch (err) {
        setEncryptionError(
          err instanceof Error
            ? err.message
            : "Gagal mengenkripsi file jawaban."
        );
      } finally {
        setIsEncrypting(false);
      }
    },
    []
  );

  const completeExam = useCallback(
    (trigger: "manual" | "time_up") => {
      const current = sessionRef.current;
      if (!current || current.phase === "completed") return;

      stopExamAlarm();
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }

      const completedAt = Date.now();
      const finished = updateSession((prev) => ({
        ...prev,
        phase: "completed",
        completedAt,
        finishTrigger: trigger,
        lockedAt: undefined,
        lockReason: undefined,
        lockPin: undefined,
      }));

      if (finished && activePackage) {
        void generateEncryptedExport(
          finished,
          activePackage.title,
          shuffledQuestions
        );
      }
    },
    [activePackage, generateEncryptedExport, shuffledQuestions, updateSession]
  );

  // Immediately lock the exam WITHOUT counting violations and WITHOUT cooldown
  const lockExam = useCallback(
    (reason: string) => {
      const current = sessionRef.current;
      if (!current || current.phase !== "active") return;
      const now = Date.now();
      if (now >= current.deadlineAt) {
        completeExam("time_up");
        return;
      }

      const pin = generateLockPin();
      updateSession((prev) => ({
        ...prev,
        phase: "locked",
        lockedAt: Date.now(),
        lockReason: reason,
        lockPin: pin,
      }));
      setUnlockCodeInput("");
      setUnlockError(null);
    },
    [completeExam, updateSession]
  );

  // Clock tick while active or locked: keeps exam timer running AND triggers 2-min -> +2-min alarm
  useEffect(() => {
    if (!session || (session.phase !== "active" && session.phase !== "locked")) {
      return;
    }

    const tick = () => {
      const current = sessionRef.current;
      if (!current) return;
      const now = Date.now();
      setNowMs(now);

      if (now >= current.deadlineAt) {
        completeExam("time_up");
        return;
      }

      if (current.phase === "locked" && current.lockedAt) {
        const lockElapsed = now - current.lockedAt;
        if (lockElapsed >= STAGE_1_MS) {
          startExamAlarm();
          if (!current.alarmTriggeredDuringExam) {
            updateSession((prev) => ({
              ...prev,
              alarmTriggeredDuringExam: true,
            }));
          }
        }
      }
    };

    const init = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 250);
    return () => {
      window.clearTimeout(init);
      window.clearInterval(interval);
    };
  }, [completeExam, session, updateSession]);

  // Strict anti-cheat watchers while exam phase is "active"
  useEffect(() => {
    if (!session || session.phase !== "active") return;

    // Push trap history state so pressing mobile Back triggers popstate instead of leaving page
    try {
      window.history.pushState({ lesinajaExamGuard: true }, "", window.location.href);
    } catch {
      // safe ignore
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        lockExam("Keluar dari mode layar penuh (Fullscreen).");
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lockExam("Berpindah tab atau meminimalkan jendela browser.");
      }
    };

    const handleBlur = () => {
      lockExam("Keluar fokus ke aplikasi atau jendela lain.");
    };

    const handleOnline = () => {
      lockExam("Koneksi internet terdeteksi menyala selama ujian.");
    };

    const handlePopState = () => {
      try {
        window.history.pushState(
          { lesinajaExamGuard: true },
          "",
          window.location.href
        );
      } catch {
        // safe ignore
      }
      lockExam("Menekan tombol Kembali (Back) selama ujian berlangsung.");
    };

    const blockContextMenu = (e: Event) => {
      e.preventDefault();
    };

    const blockCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const blockCheatKeys = (e: KeyboardEvent) => {
      if (
        e.key === "PrintScreen" ||
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) &&
          ["c", "v", "x", "p", "u", "s"].includes(e.key.toLowerCase())) ||
        ((e.ctrlKey || e.metaKey) &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const onlinePoll = window.setInterval(() => {
      if (navigator.onLine) {
        lockExam("Koneksi internet terdeteksi menyala selama ujian.");
      }
    }, 500);

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("online", handleOnline);
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("copy", blockCopyPaste);
    document.addEventListener("cut", blockCopyPaste);
    document.addEventListener("paste", blockCopyPaste);
    window.addEventListener("keydown", blockCheatKeys, true);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.clearInterval(onlinePoll);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("copy", blockCopyPaste);
      document.removeEventListener("cut", blockCopyPaste);
      document.removeEventListener("paste", blockCopyPaste);
      window.removeEventListener("keydown", blockCheatKeys, true);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [lockExam, session]);

  const activeSession = session;
  const currentQuestion =
    activeSession &&
    (activeSession.phase === "active" || activeSession.phase === "locked")
      ? shuffledQuestions[activeSession.currentIndex]
      : undefined;

  const selectChoice = useCallback(
    (choiceId: string) => {
      if (!activeSession || activeSession.phase !== "active" || !currentQuestion) {
        return;
      }
      updateSession((prev) => ({
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: choiceId,
        },
      }));
    },
    [activeSession, currentQuestion, updateSession]
  );

  const moveQuestion = useCallback(
    (index: number) => {
      if (!activeSession || activeSession.phase !== "active") return;
      updateSession((prev) => ({
        ...prev,
        currentIndex: Math.min(
          Math.max(index, 0),
          Math.max(0, shuffledQuestions.length - 1)
        ),
      }));
    },
    [activeSession, shuffledQuestions.length, updateSession]
  );

  const toggleFlag = useCallback(() => {
    if (!activeSession || activeSession.phase !== "active" || !currentQuestion) {
      return;
    }
    updateSession((prev) => {
      const exists = prev.flagged.includes(currentQuestion.id);
      return {
        ...prev,
        flagged: exists
          ? prev.flagged.filter((id) => id !== currentQuestion.id)
          : [...prev.flagged, currentQuestion.id],
      };
    });
  }, [activeSession, currentQuestion, updateSession]);

  useExamKeyboard({
    currentIndex: activeSession?.currentIndex ?? 0,
    questions:
      activeSession?.phase === "active" ? shuffledQuestions : [],
    onMove: moveQuestion,
    onSelect: selectChoice,
    onToggleFlag: activeSession?.phase === "active" ? toggleFlag : undefined,
  });

  async function requestFullscreenAndAudio() {
    unlockExamAlarmAudio();
    setAudioUnlocked(true);
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
      setIsFullscreen(true);
    } catch {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
  }

  function handleEnterRules(e: React.FormEvent) {
    e.preventDefault();
    const cleanName = participantName.trim();
    if (cleanName.length < 2) {
      setStartError("Masukkan nama lengkap peserta terlebih dahulu.");
      return;
    }
    const pkg = getPackage(selectedPackageId);
    if (!pkg) {
      setStartError("Paket ujian tidak ditemukan.");
      return;
    }
    if (!validatePackageAccessCode(pkg.id, startCodeInput)) {
      setStartError("Kode mulai ujian tidak valid. Periksa kembali dari pengawas.");
      return;
    }

    const now = Date.now();
    const seedSuffix = Math.random().toString(36).slice(2, 8).toUpperCase();
    const newSession: ProctoredExamSession = {
      id: `ujian-${now}`,
      packageId: pkg.id,
      participantName: cleanName,
      deviceId,
      shuffleSeed: `${deviceId}::${now}::${seedSuffix}`,
      phase: "rules",
      answers: {},
      flagged: [],
      currentIndex: 0,
      createdAt: now,
      startedAt: now,
      deadlineAt: now + pkg.durationMinutes * 60_000,
    };

    setStartError(null);
    setAssetsReady(false);
    setImageCacheMap({});
    setSubmissionBackup(null);
    writeExamSession(newSession);
    sessionRef.current = newSession;
    setSession(newSession);
  }

  async function handleBeginActiveExam() {
    if (!session || !activePackage) return;
    unlockExamAlarmAudio();
    setAudioUnlocked(true);

    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch {
        return;
      }
    }
    if (navigator.onLine) {
      return;
    }

    const startedAt = Date.now();
    updateSession((prev) => ({
      ...prev,
      phase: "active",
      startedAt,
      deadlineAt: startedAt + activePackage.durationMinutes * 60_000,
      lockedAt: undefined,
      lockReason: undefined,
      lockPin: undefined,
    }));
  }

  async function handleUnlockAttempt(e: React.FormEvent) {
    e.preventDefault();
    if (!session) return;

    const now = Date.now();
    const lockElapsed = session.lockedAt ? Math.max(0, now - session.lockedAt) : 0;
    const requireEmergency = lockElapsed >= STAGE_2_MS;

    if (navigator.onLine) {
      setUnlockError(
        "Internet masih menyala. Matikan Wi-Fi / Data Seluler terlebih dahulu."
      );
      return;
    }

    const check = validateExamUnlockCode({
      deviceId: session.deviceId,
      lockPin: session.lockPin,
      inputCode: unlockCodeInput,
      requireEmergencyOverride: requireEmergency,
    });

    if (!check.valid) {
      setUnlockError(check.error ?? "Kode pembuka tidak valid.");
      return;
    }

    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch {
        setUnlockError(
          "Gagal mengaktifkan Fullscreen. Tekan tombol Fullscreen di bawah lalu coba lagi."
        );
        return;
      }
    }

    stopExamAlarm();
    unlockExamAlarmAudio();
    setUnlockCodeInput("");
    setUnlockError(null);

    updateSession((prev) => ({
      ...prev,
      phase: "active",
      lockedAt: undefined,
      lockReason: undefined,
      lockPin: undefined,
    }));
  }

  function handleCopy(text: string, tag: string) {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopiedTag(tag);
    window.setTimeout(() => setCopiedTag(null), 1500);
  }

  function handleResetForNewExam() {
    stopExamAlarm();
    clearExamSession();
    sessionRef.current = null;
    setSession(null);
    setAssetsReady(false);
    setImageCacheMap({});
    setSubmissionBackup(null);
    setStartCodeInput("");
    setStartError(null);
  }

  if (!hydrated) {
    return (
      <PageFrame
        eyebrow="06 / Ujian"
        title="UJIAN TERKUNCI."
        description="Memuat perangkat dan memeriksa status sesi ujian..."
      >
        <div className="p-8 font-mono text-sm">Mempersiapkan halaman ujian...</div>
      </PageFrame>
    );
  }

  // =========================================================================
  // PHASE: RULES & CHECKLIST PRA-UJIAN
  // =========================================================================
  if (session && activePackage && session.phase === "rules") {
    const canStartExam = assetsReady && isFullscreen && isOffline;
    return (
      <PageFrame
        eyebrow="06 / Aturan Ujian"
        title="PERSIAPAN & ATURAN UJIAN."
        description={`${activePackage.title} · Peserta: ${session.participantName}`}
        showHeader={false}
      >
        <section className="p-5 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-2 border-black bg-warm-white p-5">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-blue">
                  Tahap Pra-Ujian · {activePackage.questions.length} Soal ·{" "}
                  {activePackage.durationMinutes} Menit
                </p>
                <h1 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
                  {activePackage.title}
                </h1>
                <p className="mt-1 text-sm">
                  Peserta: <strong>{session.participantName}</strong> · Device ID:{" "}
                  <code className="border border-black bg-secondary px-1.5 py-0.5 font-mono text-xs font-bold">
                    {session.deviceId}
                  </code>
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={handleResetForNewExam}
                className="rounded-none border-black font-mono text-xs uppercase"
              >
                Ganti Peserta / Paket
              </Button>
            </div>

            {/* Rules Box */}
            <div className="border-2 border-black bg-brand-red-soft p-5 sm:p-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">
                <ShieldAlert className="size-4" />
                Aturan Ketat Selama Ujian Berlangsung
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed sm:text-base">
                <li>
                  <strong>Wajib Fullscreen:</strong> Layar tidak boleh diperkecil atau keluar dari mode layar penuh.
                </li>
                <li>
                  <strong>Dilarang Ganti Tab / Aplikasi:</strong> Berpindah tab, meminimalkan browser, *split-screen*, atau menekan tombol Kembali (Back) akan langsung mengunci ujian.
                </li>
                <li>
                  <strong>Internet Wajib Mati Setelah Unduh Soal:</strong> Setelah seluruh soal dan gambar terunduh, matikan Wi-Fi dan Data Seluler selama mengerjakan ujian hingga selesai.
                </li>
                <li>
                  <strong>Penguncian & Alarm Otomatis:</strong> Setiap pelanggaran mengunci layar (waktu ujian tetap berjalan). Kamu diberi waktu <strong>2 menit</strong> untuk meminta kode pembuka dari pengawas, lalu tambahan <strong>2 menit dengan alarm sirine keras (volume 90% anti-mute)</strong>. Lewat 4 menit, layar hanya bisa dibuka memakai <strong>Kode Override Darurat</strong>.
                </li>
                <li>
                  <strong>Acak Soal & Jawaban:</strong> Urutan soal dan pilihan A–E diacak unik untuk perangkatmu. File jawaban diunduh dalam format JSON terenkripsi dan dinilai oleh pengawas.
                </li>
              </ul>
            </div>

            {/* 3 Mandatory Live Requirements Checklist */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* 1. Soal & Gambar */}
              <div
                className={`border-2 border-black p-4 ${
                  assetsReady ? "bg-signal/35" : "bg-warm-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase">
                    1. Unduh Soal
                  </span>
                  {assetsReady ? (
                    <CheckCircle2 className="size-5 text-black" />
                  ) : (
                    <RefreshCw className="size-4 animate-spin text-brand-blue" />
                  )}
                </div>
                <p className="mt-2 text-sm font-bold">
                  {assetsReady
                    ? "Soal & Gambar Siap (100%)"
                    : `Mengunduh (${assetProgress.done}/${assetProgress.total})...`}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Pastikan unduhan selesai sebelum mematikan internet.
                </p>
              </div>

              {/* 2. Fullscreen & Audio */}
              <div
                className={`border-2 border-black p-4 ${
                  isFullscreen ? "bg-signal/35" : "bg-warm-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase">
                    2. Layar Penuh & Audio
                  </span>
                  {isFullscreen ? (
                    <CheckCircle2 className="size-5 text-black" />
                  ) : (
                    <Maximize2 className="size-4 text-brand-red" />
                  )}
                </div>
                <p className="mt-2 text-sm font-bold">
                  {isFullscreen
                    ? "Fullscreen Aktif"
                    : "Belum Layar Penuh"}
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Volume2 className="size-3.5 shrink-0" />
                  {audioUnlocked
                    ? "Izin alarm audio aktif"
                    : "Klik tombol di bawah untuk aktivasi"}
                </p>
                <Button
                  type="button"
                  onClick={() => void requestFullscreenAndAudio()}
                  className="mt-3 h-9 w-full rounded-none bg-brand-blue font-mono text-xs font-bold uppercase text-white hover:bg-brand-blue-hover"
                >
                  <Maximize2 className="size-3.5" />{" "}
                  {isFullscreen
                    ? "Uji Audio Pengawas"
                    : "Aktifkan Fullscreen & Audio"}
                </Button>
              </div>

              {/* 3. Internet Wajib Mati */}
              <div
                className={`border-2 border-black p-4 ${
                  isOffline ? "bg-signal/35" : "bg-warm-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase">
                    3. Internet Wajib Mati
                  </span>
                  {isOffline ? (
                    <WifiOff className="size-5 text-black" />
                  ) : (
                    <Wifi className="size-5 text-brand-red" />
                  )}
                </div>
                <p className="mt-2 text-sm font-bold">
                  {isOffline
                    ? "Offline (Internet Mati)"
                    : "Internet Masih Menyala"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isOffline
                    ? "Koneksi aman untuk memulai ujian."
                    : "Matikan Wi-Fi dan Data Seluler perangkat sekarang."}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-between gap-3 border-2 border-black bg-warm-white p-5 sm:flex-row sm:items-center">
              <div className="text-sm">
                {canStartExam ? (
                  <span className="flex items-center gap-2 font-bold text-black">
                    <ShieldCheck className="size-5 text-brand-blue" /> Semua syarat
                    terpenuhi. Siap mengerjakan ujian.
                  </span>
                ) : (
                  <span className="text-muted-foreground">
                    Penuhi ketiga syarat di atas untuk membuka tombol mulai ujian.
                  </span>
                )}
              </div>
              <Button
                type="button"
                disabled={!canStartExam}
                onClick={() => void handleBeginActiveExam()}
                className="h-12 rounded-none bg-black px-6 text-base font-black uppercase text-signal hover:bg-brand-blue hover:text-white disabled:opacity-40"
              >
                <Play className="size-4" /> Mulai Kerjakan Ujian
              </Button>
            </div>
          </div>
        </section>
      </PageFrame>
    );
  }

  // =========================================================================
  // PHASE: COMPLETED -> UNDUH JSON TERENKRIPSI (TANPA NILAI)
  // =========================================================================
  if (session && activePackage && session.phase === "completed") {
    const answeredCount = Object.keys(session.answers).length;
    return (
      <PageFrame
        eyebrow="06 / Ujian Selesai"
        title="UJIAN TELAH SELESAI."
        description="Jawaban kamu telah dikunci dan dienkripsi. Unduh file jawaban di bawah dan serahkan kepada pengawas."
        showHeader={false}
      >
        <section className="p-5 sm:p-8 lg:p-12">
          <div className="mx-auto max-w-2xl border-2 border-black bg-warm-white p-6 sm:p-8 shadow-[6px_6px_0_0_#10100f]">
            <div className="inline-flex items-center gap-2 border border-black bg-signal px-3 py-1 font-mono text-xs font-bold uppercase">
              <ShieldCheck className="size-4" /> Jawaban Terenkripsi AES-256-GCM
            </div>
            <h1 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Sesi Ujian Selesai
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nilai ujian hanya dapat dibaca dan dihitung melalui sistem pengawas.
              Silakan unduh file jawaban terenkripsi di bawah ini, lalu nyalakan
              kembali internet untuk mengirim file ke pengawas.
            </p>

            <div className="mt-6 grid gap-3 border-2 border-black bg-background p-4 font-mono text-xs sm:grid-cols-2">
              <div>
                <span className="block text-muted-foreground uppercase">Peserta</span>
                <strong className="text-sm">{session.participantName}</strong>
              </div>
              <div>
                <span className="block text-muted-foreground uppercase">Device ID</span>
                <strong className="text-sm">{session.deviceId}</strong>
              </div>
              <div>
                <span className="block text-muted-foreground uppercase">Paket Ujian</span>
                <strong className="text-sm">{activePackage.title}</strong>
              </div>
              <div>
                <span className="block text-muted-foreground uppercase">Terjawab</span>
                <strong className="text-sm">
                  {answeredCount} / {shuffledQuestions.length} Soal
                </strong>
              </div>
            </div>

            {encryptionError && (
              <div className="mt-4 border-2 border-brand-red bg-brand-red-soft p-3 text-sm font-bold text-brand-red">
                {encryptionError}
              </div>
            )}

            <div className="mt-6 space-y-3">
              {submissionBackup ? (
                <>
                  <Button
                    type="button"
                    onClick={() =>
                      downloadJsonFile(
                        submissionBackup.filename,
                        submissionBackup.envelope
                      )
                    }
                    className="h-14 w-full rounded-none bg-brand-blue text-base font-black uppercase text-white hover:bg-brand-blue-hover"
                  >
                    <Download className="size-5" /> Unduh Jawaban Terenkripsi (.json)
                  </Button>
                  <p className="break-all border border-black bg-secondary p-2.5 font-mono text-[11px]">
                    Nama file: <strong>{submissionBackup.filename}</strong>
                  </p>
                </>
              ) : (
                <Button
                  type="button"
                  disabled={isEncrypting}
                  onClick={() =>
                    void generateEncryptedExport(
                      session,
                      activePackage.title,
                      shuffledQuestions
                    )
                  }
                  className="h-14 w-full rounded-none bg-brand-blue text-base font-black uppercase text-white"
                >
                  {isEncrypting
                    ? "Mengenkripsi Jawaban..."
                    : "Siapkan File Jawaban Terenkripsi"}
                </Button>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-black pt-5">
              <p className="text-xs text-muted-foreground">
                Cadangan file terakhir otomatis tersimpan di perangkat ini.
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-none border-black font-mono text-xs uppercase"
                  >
                    Ujian Baru / Keluar
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="rounded-none border-black">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Pastikan File Sudah Terunduh</AlertDialogTitle>
                    <AlertDialogDescription>
                      Apakah file jawaban terenkripsi sudah berhasil diunduh dan
                      disimpan? Membuka sesi baru akan membersihkan sesi selesai
                      saat ini (cadangan unduh ulang file terakhir tetap disimpan).
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-none border-black">
                      Batal
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="rounded-none"
                      onClick={handleResetForNewExam}
                    >
                      Ya, Tutup Sesi
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </section>
      </PageFrame>
    );
  }

  // =========================================================================
  // PHASE: ACTIVE OR LOCKED -> EXAM SHELL + OVERLAY KUNCI 2+2 MENIT & ALARM
  // =========================================================================
  if (
    session &&
    activePackage &&
    currentQuestion &&
    (session.phase === "active" || session.phase === "locked")
  ) {
    const answered = Object.keys(session.answers).length;
    const isFlagged = session.flagged.includes(currentQuestion.id);
    const remainingExamMs = Math.max(0, session.deadlineAt - nowMs);
    const lockElapsedMs =
      session.phase === "locked" && session.lockedAt
        ? Math.max(0, nowMs - session.lockedAt)
        : 0;
    const inStage1 = lockElapsedMs < STAGE_1_MS;
    const inStage2Alarm =
      lockElapsedMs >= STAGE_1_MS && lockElapsedMs < STAGE_2_MS;
    const inStage3Emergency = lockElapsedMs >= STAGE_2_MS;
    const lockCountdownMs = inStage1
      ? STAGE_1_MS - lockElapsedMs
      : inStage2Alarm
        ? STAGE_2_MS - lockElapsedMs
        : 0;

    return (
      <>
        <ExamShell
          eyebrow={`UJIAN TERKUNCI · ${session.participantName}`}
          title={activePackage.title}
          session={{
            id: session.id,
            kind: "tryout",
            packageId: session.packageId,
            questionIds: shuffledQuestions.map((q) => q.id),
            answers: session.answers,
            flagged: session.flagged,
            currentIndex: session.currentIndex,
            startedAt: session.startedAt,
            deadlineAt: session.deadlineAt,
          }}
          questions={shuffledQuestions}
          answered={answered}
          flagged={session.flagged.length}
          onMove={moveQuestion}
          groupedPalette={activePackage.kind === "full"}
          onExit={() => lockExam("Mencoba keluar dari lembar ujian.")}
          headerMetric={
            <div className="flex h-8 shrink-0 items-center gap-1.5 bg-brand-blue px-2.5 font-mono text-xs font-bold text-white">
              <Clock3 className="size-3.5 shrink-0 text-signal" />
              <span>{formatClock(remainingExamMs)}</span>
            </div>
          }
          headerAction={
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="h-8 shrink-0 gap-1 rounded-none border border-black bg-signal/90 px-2.5 text-xs font-bold text-black shadow-none hover:bg-signal"
                  aria-label="Kumpulkan ujian"
                >
                  <Check className="size-3.5 stroke-2" />
                  <span>Selesai</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="z-[90] rounded-none border-black">
                <AlertDialogHeader>
                  <AlertDialogTitle>Kumpulkan ujian sekarang?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {shuffledQuestions.length - answered} soal masih belum dijawab
                    dan {session.flagged.length} soal ditandai ragu-ragu. Setelah
                    dikumpulkan, jawaban akan dienkripsi dan tidak dapat diubah.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="rounded-none border-black">
                    Lanjut mengerjakan
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="rounded-none"
                    onClick={() => completeExam("manual")}
                  >
                    Ya, Selesai &amp; Unduh Jawaban
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          }
          footer={
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
              <Button
                variant="outline"
                className="h-11 rounded-none border-black px-3 sm:px-5"
                aria-keyshortcuts="ArrowLeft"
                disabled={session.currentIndex === 0}
                onClick={() => moveQuestion(session.currentIndex - 1)}
              >
                <ArrowLeft />
                <span className="hidden min-[420px]:inline">Sebelumnya</span>
              </Button>
              <Button
                variant="outline"
                aria-pressed={isFlagged}
                aria-keyshortcuts="R"
                onClick={toggleFlag}
                className={`h-11 rounded-none border-black px-3 sm:px-5 ${
                  isFlagged ? "bg-signal" : ""
                }`}
              >
                <Bookmark className={isFlagged ? "fill-current" : ""} />
                <span className="hidden min-[420px]:inline">Ragu-ragu</span>
              </Button>
              <div className="hidden flex-col items-center sm:flex">
                <span className="font-mono text-xs font-bold">
                  {session.currentIndex + 1} / {shuffledQuestions.length}
                </span>
                <span className="font-mono text-[9px] uppercase text-muted-foreground">
                  A–E pilih · R ragu · ← → navigasi
                </span>
              </div>
              <Button
                className="h-11 rounded-none px-3 sm:px-5"
                aria-keyshortcuts="ArrowRight"
                disabled={session.currentIndex === shuffledQuestions.length - 1}
                onClick={() => moveQuestion(session.currentIndex + 1)}
              >
                <span className="hidden min-[420px]:inline">Berikutnya</span>
                <ArrowRight />
              </Button>
            </div>
          }
        >
          <QuestionCard
            question={currentQuestion}
            selectedId={session.answers[currentQuestion.id]}
            onSelect={selectChoice}
          />
        </ExamShell>

        {/* LAYAR TERKUNCI PENUH SAAT PELANGGARAN */}
        {session.phase === "locked" && (
          <div
            role="alertdialog"
            aria-modal="true"
            aria-label="Ujian Terkunci"
            className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 ${
              inStage2Alarm || inStage3Emergency
                ? "bg-brand-red/95"
                : "bg-black/95"
            }`}
          >
            <div className="w-full max-w-lg border-4 border-black bg-warm-white p-5 sm:p-7 shadow-[8px_8px_0_0_#10100f]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3">
                <span className="inline-flex items-center gap-1.5 bg-brand-red px-2.5 py-1 font-mono text-xs font-bold uppercase text-white">
                  <Lock className="size-3.5" />
                  {inStage3Emergency ? "TERKUNCI DARURAT" : "UJIAN TERKUNCI"}
                </span>
                <span className="inline-flex items-center gap-1.5 border border-black bg-secondary px-2.5 py-1 font-mono text-xs font-bold">
                  <Clock3 className="size-3.5" /> Sisa Waktu Ujian:{" "}
                  {formatClock(remainingExamMs)}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase tracking-tight">
                {inStage3Emergency
                  ? "Wajib Kode Override Darurat"
                  : inStage2Alarm
                    ? "Tambahan 2 Menit + Alarm Aktif"
                    : "Pelanggaran Terdeteksi"}
              </h2>
              <p className="mt-1.5 border-l-4 border-brand-red bg-brand-red-soft p-2.5 text-sm font-medium">
                {session.lockReason ??
                  "Aktivitas tidak diperbolehkan terdeteksi pada perangkat."}
              </p>

              {/* Countdown 2 Menit Normal -> 2 Menit Tambahan Alarm 90% -> Darurat */}
              <div
                className={`mt-4 border-2 border-black p-4 ${
                  inStage2Alarm || inStage3Emergency
                    ? "bg-brand-red text-white animate-pulse"
                    : "bg-signal text-black"
                }`}
              >
                {inStage1 && (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase">
                        Waktu Meminta Kode Pengawas
                      </p>
                      <p className="text-xs">
                        Setelah habis, masuk tambahan 2 menit + alarm HP berbunyi
                      </p>
                    </div>
                    <strong className="font-mono text-3xl font-black">
                      {formatClock(lockCountdownMs)}
                    </strong>
                  </div>
                )}
                {inStage2Alarm && (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase">
                        <Volume2 className="size-4" /> ALARM SIRINE 90% AKTIF (TAMBAHAN 2 MENIT)
                      </p>
                      <p className="text-xs">
                        Segera lapor pengawas sebelum berubah menjadi Terkunci Darurat!
                      </p>
                    </div>
                    <strong className="font-mono text-3xl font-black">
                      {formatClock(lockCountdownMs)}
                    </strong>
                  </div>
                )}
                {inStage3Emergency && (
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="size-8 shrink-0" />
                    <div>
                      <p className="font-mono text-xs font-bold uppercase">
                        BATAS 2+2 MENIT HABIS · ALARM TETAP BERBUNYI
                      </p>
                      <p className="text-xs">
                        Kode biasa tidak lagi berlaku. Hanya dapat dibuka dengan{" "}
                        <strong>Kode Override Darurat</strong> dari pengawas.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Identitas Device ID & PIN Kunci untuk disampaikan ke Pengawas */}
              <div className="mt-4 grid gap-3 border-2 border-black bg-background p-4 sm:grid-cols-2">
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase text-muted-foreground">
                    Device ID Perangkat
                  </span>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <strong className="font-mono text-base font-black tracking-wider">
                      {session.deviceId}
                    </strong>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleCopy(session.deviceId, "device")}
                      className="size-7 rounded-none border-black"
                      aria-label="Salin Device ID"
                    >
                      {copiedTag === "device" ? (
                        <Check className="size-3.5" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase text-muted-foreground">
                    PIN Kunci Sesi
                  </span>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <strong className="font-mono text-base font-black tracking-widest text-brand-blue">
                      {session.lockPin ?? "-"}
                    </strong>
                    {session.lockPin && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          handleCopy(session.lockPin ?? "", "pin")
                        }
                        className="size-7 rounded-none border-black"
                        aria-label="Salin PIN Kunci"
                      >
                        {copiedTag === "pin" ? (
                          <Check className="size-3.5" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Cek Syarat Lanjut: Fullscreen + Internet Mati */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void requestFullscreenAndAudio()}
                  className={`h-9 flex-1 rounded-none border-black font-mono text-[11px] font-bold uppercase ${
                    isFullscreen ? "bg-signal/50" : "bg-brand-red-soft text-brand-red"
                  }`}
                >
                  <Maximize2 className="size-3.5" />{" "}
                  {isFullscreen ? "Fullscreen Siap" : "Aktifkan Fullscreen"}
                </Button>
                <div
                  className={`flex h-9 flex-1 items-center justify-center gap-1.5 border border-black px-3 font-mono text-[11px] font-bold uppercase ${
                    isOffline ? "bg-signal/50" : "bg-brand-red-soft text-brand-red"
                  }`}
                >
                  {isOffline ? (
                    <WifiOff className="size-3.5" />
                  ) : (
                    <Wifi className="size-3.5" />
                  )}
                  {isOffline ? "Internet Mati" : "Matikan Internet"}
                </div>
              </div>

              <form onSubmit={handleUnlockAttempt} className="mt-4 space-y-3">
                <div>
                  <label
                    htmlFor="unlock-code-input"
                    className="block font-mono text-xs font-bold uppercase"
                  >
                    {inStage3Emergency
                      ? "Masukkan Kode Override Darurat Pengawas"
                      : "Masukkan Kode Pembuka dari Pengawas"}
                  </label>
                  <input
                    id="unlock-code-input"
                    type="text"
                    value={unlockCodeInput}
                    onChange={(e) => {
                      setUnlockCodeInput(e.target.value.toUpperCase());
                      if (unlockError) setUnlockError(null);
                    }}
                    autoComplete="off"
                    autoCapitalize="characters"
                    spellCheck={false}
                    placeholder={
                      inStage3Emergency
                        ? "Contoh: Kode Override 8 karakter"
                        : "Contoh: Kode Pembuka 8 karakter"
                    }
                    className="mt-1.5 h-12 w-full border-2 border-black bg-background px-3 font-mono text-base font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                {unlockError && (
                  <p className="flex items-start gap-1.5 font-mono text-xs font-bold text-brand-red">
                    <X className="mt-0.5 size-3.5 shrink-0" />
                    <span>{unlockError}</span>
                  </p>
                )}

                <Button
                  type="submit"
                  className="h-12 w-full rounded-none bg-brand-blue text-sm font-black uppercase text-white hover:bg-brand-blue-hover"
                >
                  <Key className="size-4" /> Buka Kunci &amp; Lanjutkan Soal
                </Button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  // =========================================================================
  // PHASE: ENTRY GATE (NO ACTIVE SESSION)
  // =========================================================================
  const selectedPkg = getPackage(selectedPackageId);

  return (
    <PageFrame
      eyebrow="06 / Ujian Terkunci"
      title="UJIAN RESMI."
      description="Mode ujian ketat dengan pengacakan soal & opsi unik per siswa, layar penuh wajib, pemantauan offline, serta pengumpulan jawaban JSON terenkripsi."
    >
      <section className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-black p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 border border-black bg-signal px-2.5 py-1 font-mono text-xs font-bold uppercase">
              <Lock className="size-3.5" /> Gerbang Masuk Ujian
            </span>
            <span className="font-mono text-xs">
              Device ID:{" "}
              <strong className="border border-black bg-secondary px-1.5 py-0.5">
                {deviceId}
              </strong>
            </span>
          </div>

          <form onSubmit={handleEnterRules} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="exam-participant-name"
                className="block font-mono text-xs font-bold uppercase tracking-[.1em]"
              >
                1. Nama Lengkap Peserta
              </label>
              <input
                id="exam-participant-name"
                type="text"
                value={participantName}
                onChange={(e) => {
                  setParticipantName(e.target.value);
                  if (startError) setStartError(null);
                }}
                placeholder="Masukkan nama lengkap sesuai absensi"
                className="mt-2 h-12 w-full border-2 border-black bg-warm-white px-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div>
              <label
                htmlFor="exam-package-select"
                className="block font-mono text-xs font-bold uppercase tracking-[.1em]"
              >
                2. Pilih Paket Ujian
              </label>
              <select
                id="exam-package-select"
                value={selectedPackageId}
                onChange={(e) => {
                  setSelectedPackageId(e.target.value);
                  if (startError) setStartError(null);
                }}
                className="mt-2 h-12 w-full border-2 border-black bg-warm-white px-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <optgroup label="Paket Ujian Khusus">
                  {UJIAN_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} ({pkg.questions.length} soal ·{" "}
                      {pkg.durationMinutes} menit)
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Paket Try Out & Mini TO">
                  {ALL_TRYOUT_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} ({pkg.questions.length} soal ·{" "}
                      {pkg.durationMinutes} menit)
                    </option>
                  ))}
                </optgroup>
              </select>
              {selectedPkg && (
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {selectedPkg.description}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="exam-start-code"
                className="block font-mono text-xs font-bold uppercase tracking-[.1em]"
              >
                3. Kode Mulai Ujian
              </label>
              <input
                id="exam-start-code"
                type="text"
                value={startCodeInput}
                onChange={(e) => {
                  setStartCodeInput(e.target.value.toUpperCase());
                  if (startError) setStartError(null);
                }}
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                placeholder="Masukkan kode paket dari pengawas"
                className="mt-2 h-12 w-full border-2 border-black bg-warm-white px-3 font-mono text-base font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            {startError && (
              <p className="flex items-center gap-1.5 border border-brand-red bg-brand-red-soft p-3 font-mono text-xs font-bold text-brand-red">
                <X className="size-4 shrink-0" />
                {startError}
              </p>
            )}

            <Button
              type="submit"
              className="h-12 w-full rounded-none bg-brand-blue text-base font-black uppercase text-white hover:bg-brand-blue-hover"
            >
              <Key className="size-4" /> Verifikasi &amp; Unduh Soal Ujian
            </Button>
          </form>
        </div>

        <aside className="flex flex-col justify-between gap-6 bg-secondary p-5 sm:p-8 lg:p-10">
          <div className="space-y-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">
              Prosedur Ujian Terkunci
            </p>
            <h2 className="text-2xl font-black uppercase">
              Cara Mengikuti Ujian
            </h2>
            <ol className="list-decimal space-y-2.5 pl-5 text-sm leading-relaxed">
              <li>
                Pastikan internet <strong>masih menyala</strong> saat memasukkan kode agar seluruh soal dan gambar terunduh penuh.
              </li>
              <li>
                Di layar aturan, aktifkan <strong>Fullscreen &amp; Audio</strong>, lalu{" "}
                <strong>matikan internet (Wi-Fi &amp; Data)</strong> untuk mulai.
              </li>
              <li>
                Selama mengerjakan, dilarang berpindah tab, keluar fullscreen, atau menyalakan internet.
              </li>
              <li>
                Setelah selesai, unduh file{" "}
                <code className="border border-black bg-warm-white px-1 font-mono text-xs">
                  .lesinaja.json
                </code>{" "}
                terenkripsi dan serahkan ke pengawas.
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            {lastBackup && (
              <div className="border-2 border-black bg-warm-white p-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-brand-blue">
                  Cadangan File Terakhir Tersimpan
                </p>
                <p className="mt-1 break-all font-mono text-xs font-bold">
                  {lastBackup.filename}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    downloadJsonFile(lastBackup.filename, lastBackup.envelope)
                  }
                  className="mt-3 h-10 w-full rounded-none border-black font-mono text-xs font-bold uppercase"
                >
                  <Download className="size-3.5" /> Unduh Ulang File Jawaban Terakhir
                </Button>
              </div>
            )}

            <div className="border-t border-black pt-4">
              <p className="font-mono text-[11px] uppercase text-muted-foreground">
                Khusus Pengawas / Guru
              </p>
              <StaticLink
                href="/ujian/admin"
                className="mt-2 inline-flex h-10 w-full items-center justify-center gap-2 border-2 border-black bg-warm-white px-4 font-mono text-xs font-bold uppercase hover:bg-signal"
              >
                <ShieldCheck className="size-4" /> Buka Panel Pengawas &amp; Penilai
              </StaticLink>
            </div>
          </div>
        </aside>
      </section>
    </PageFrame>
  );
}
