"use client";

import { useEffect } from "react";
import { DRILL_QUESTIONS, getPackage } from "@/lib/content";
import { readLearningState, updateLearningState } from "@/lib/storage";
import type { ActiveSession, Category } from "@/lib/types";

type ToolDefinition = {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean };
  execute: (input: unknown) => unknown | Promise<unknown>;
};

type ModelContext = { registerTool: (tool: ToolDefinition, options?: { signal?: AbortSignal }) => void | Promise<void> };

function modelContext(): ModelContext | undefined {
  return (document as Document & { modelContext?: ModelContext }).modelContext;
}

export function WebMcpBridge() {
  useEffect(() => {
    const context = modelContext();
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = (tool: ToolDefinition) => Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => undefined);

    void register({
      name: "start_drill",
      title: "Mulai drill SKD",
      description: "Memulai sesi drill baru dan membuka halaman drill.",
      inputSchema: { type: "object", properties: { category: { type: "string", enum: ["TWK", "TIU", "TKP"] }, topic: { type: "string" }, count: { type: "integer", enum: [10, 20] } }, required: ["category", "count"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const value = input as { category?: Category; topic?: string; count?: number };
        if (!value || !["TWK", "TIU", "TKP"].includes(value.category ?? "") || ![10, 20].includes(value.count ?? 0)) throw new Error("Kategori atau jumlah soal tidak valid.");
        const pool = DRILL_QUESTIONS.filter((question) => question.category === value.category && (!value.topic || question.topic === value.topic));
        if (!pool.length) throw new Error("Topik tidak ditemukan.");
        const session: ActiveSession = { id: `drill-${Date.now()}`, kind: "drill", questionIds: pool.slice(0, Math.min(value.count!, pool.length)).map((question) => question.id), answers: {}, flagged: [], currentIndex: 0, startedAt: Date.now() };
        updateLearningState((state) => ({ ...state, activeDrill: session }));
        window.location.assign("/drill");
        return { status: "started", sessionId: session.id, questionCount: session.questionIds.length };
      },
    });

    void register({
      name: "start_tryout",
      title: "Mulai try out SKD",
      description: "Memulai salah satu paket try out 110 soal dengan timer 100 menit dan membuka halaman ujian.",
      inputSchema: { type: "object", properties: { packageId: { type: "string", enum: ["paket-a", "paket-b"] } }, required: ["packageId"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const packageId = (input as { packageId?: string })?.packageId;
        const examPackage = packageId ? getPackage(packageId) : undefined;
        if (!examPackage) throw new Error("Paket try out tidak valid.");
        const startedAt = Date.now();
        const session: ActiveSession = { id: `tryout-${startedAt}`, kind: "tryout", packageId, questionIds: examPackage.questions.map((question) => question.id), answers: {}, flagged: [], currentIndex: 0, startedAt, deadlineAt: startedAt + examPackage.durationMinutes * 60_000 };
        updateLearningState((state) => ({ ...state, activeTryout: session }));
        window.location.assign("/tryout");
        return { status: "started", sessionId: session.id, packageId, deadlineAt: session.deadlineAt };
      },
    });

    void register({
      name: "continue_session",
      title: "Lanjutkan sesi belajar",
      description: "Membuka kembali sesi try out aktif, atau sesi drill aktif jika tidak ada try out.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute() {
        const state = readLearningState();
        const session = state.activeTryout ?? state.activeDrill;
        if (!session) return { status: "empty" };
        window.location.assign(session.kind === "tryout" ? "/tryout" : "/drill");
        return { status: "continued", sessionId: session.id, kind: session.kind };
      },
    });

    void register({
      name: "get_progress",
      title: "Lihat progres belajar",
      description: "Membaca ringkasan progres lokal LesinAja tanpa mengubah data.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        const state = readLearningState();
        const completedMaterials = Object.values(state.topicProgress).filter((topic) => topic.completed).length;
        return { completedTryouts: state.attempts.length, latestScore: state.attempts[0]?.totalScore ?? null, attemptedDrillQuestions: Object.keys(state.drillStats).length, completedMaterials, activeSession: state.activeTryout?.kind ?? state.activeDrill?.kind ?? null };
      },
    });

    return () => lifecycle.abort();
  }, []);

  return null;
}
