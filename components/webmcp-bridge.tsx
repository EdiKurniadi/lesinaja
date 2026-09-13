"use client";

import { useEffect } from "react";
import { ALL_TRYOUT_PACKAGES, DRILL_PACKAGES, getDrillPackage, getPackage } from "@/lib/content";
import { clearSessionOpen, markSessionOpen } from "@/lib/session-navigation";
import { readLearningState, updateLearningState } from "@/lib/storage";
import type { ActiveSession } from "@/lib/types";

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
      description: "Memulai paket drill bertopik yang berisi 10 soal tetap dan membuka halaman drill.",
      inputSchema: { type: "object", properties: { packageId: { type: "string", enum: DRILL_PACKAGES.map((item) => item.id) } }, required: ["packageId"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const packageId = (input as { packageId?: string })?.packageId;
        const drillPackage = packageId ? getDrillPackage(packageId) : undefined;
        if (!drillPackage) throw new Error("Paket drill tidak valid.");
        const session: ActiveSession = { id: `drill-${drillPackage.id}-${Date.now()}`, kind: "drill", packageId: drillPackage.id, questionIds: drillPackage.questions.map((question) => question.id), answers: {}, flagged: [], currentIndex: 0, startedAt: Date.now() };
        markSessionOpen("drill");
        updateLearningState((state) => ({ ...state, activeDrill: session, activeTryout: null }));
        window.location.assign("/drill");
        return { status: "started", sessionId: session.id, packageId: drillPackage.id, title: drillPackage.title, questionCount: session.questionIds.length };
      },
    });

    void register({
      name: "start_tryout",
      title: "Mulai try out SKD",
      description: "Membuka konfirmasi paket try out sebelum timer paket terpilih dimulai.",
      inputSchema: { type: "object", properties: { packageId: { type: "string", enum: ALL_TRYOUT_PACKAGES.map((item) => item.id) } }, required: ["packageId"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const packageId = (input as { packageId?: string })?.packageId;
        const examPackage = packageId ? getPackage(packageId) : undefined;
        if (!examPackage) throw new Error("Paket try out tidak valid.");
        clearSessionOpen();
        window.location.assign(`/tryout?package=${encodeURIComponent(examPackage.id)}`);
        return { status: "confirmation_required", packageId: examPackage.id, title: examPackage.title, durationMinutes: examPackage.durationMinutes };
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
        markSessionOpen(session.kind);
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
