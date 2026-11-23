"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Eye,
  FileJson,
  Key,
  Lock,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { isMasterAccessCode } from "@/lib/access-codes";
import { getPackageForReview } from "@/lib/content";
import {
  decryptExamSubmission,
  generateEmergencyOverrideCode,
  generateNormalUnlockCode,
  normalizeDeviceId,
  normalizeLockPin,
  type ExamSubmissionPayload,
} from "@/lib/exam-security";
import { bestScore, choiceScore, scoreAttempt } from "@/lib/scoring";
import type { AttemptResult, Question } from "@/lib/types";
import { PageFrame } from "./page-frame";
import { StaticLink } from "./static-link";

const ADMIN_AUTH_STORAGE_KEY = "lesinaja.exam.admin-auth";

interface GradedSubmission {
  filename: string;
  payload: ExamSubmissionPayload;
  questions: Question[];
  result: AttemptResult;
  correctCount: number;
  maxScore: number;
  scale100: number;
}

function summarizeSubmissionMetrics(
  questions: Question[],
  answers: Record<string, string>,
  totalScore: number
): { correctCount: number; maxScore: number; scale100: number } {
  let correctCount = 0;
  let maxScore = 0;
  for (const q of questions) {
    const max = bestScore(q);
    maxScore += max;
    if (choiceScore(q, answers[q.id]) === max) {
      correctCount += 1;
    }
  }
  const scale100 =
    maxScore > 0 ? Number(((totalScore / maxScore) * 100).toFixed(2)) : 0;
  return { correctCount, maxScore, scale100 };
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${String(s).padStart(2, "0")}d`;
}

function escapeCsvCell(value: string | number): string {
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function ExamAdminClient() {
  const [authorized, setAuthorized] = useState(false);
  const [authInput, setAuthInput] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  // Code generator states
  const [deviceIdInput, setDeviceIdInput] = useState("");
  const [lockPinInput, setLockPinInput] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Grader states
  const [submissions, setSubmissions] = useState<GradedSubmission[]>([]);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);
  const [selectedDetailIndex, setSelectedDetailIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(ADMIN_AUTH_STORAGE_KEY) === "1") {
        const t = window.setTimeout(() => setAuthorized(true), 0);
        return () => window.clearTimeout(t);
      }
    } catch {
      // safe ignore
    }
  }, []);

  function handleAdminLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!isMasterAccessCode(authInput)) {
      setAuthError("Kode otorisasi pengawas tidak valid.");
      return;
    }
    setAuthError(null);
    setAuthorized(true);
    try {
      window.sessionStorage.setItem(ADMIN_AUTH_STORAGE_KEY, "1");
    } catch {
      // safe ignore
    }
  }

  function handleLogout() {
    setAuthorized(false);
    setAuthInput("");
    try {
      window.sessionStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
    } catch {
      // safe ignore
    }
  }

  function copyValue(val: string, key: string) {
    navigator.clipboard?.writeText(val).catch(() => {});
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(null), 1500);
  }

  async function handleFilesUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    const newErrors: string[] = [];
    const newGraded: GradedSubmission[] = [];

    for (const file of files) {
      try {
        const text = await file.text();
        const payload = await decryptExamSubmission(text);
        const pkg = getPackageForReview(payload.packageId);
        if (!pkg) {
          newErrors.push(
            `${file.name}: Paket ujian "${payload.packageId}" tidak ditemukan di sistem.`
          );
          continue;
        }
        const result = scoreAttempt(pkg.questions, payload.answers, {
          id: payload.sessionId,
          packageId: payload.packageId,
          startedAt: payload.startedAt,
          completedAt: payload.completedAt,
        });
        const metrics = summarizeSubmissionMetrics(
          pkg.questions,
          payload.answers,
          result.totalScore
        );
        newGraded.push({
          filename: file.name,
          payload,
          questions: pkg.questions,
          result,
          ...metrics,
        });
      } catch (err) {
        newErrors.push(
          `${file.name}: ${
            err instanceof Error ? err.message : "Gagal mendekripsi file."
          }`
        );
      }
    }

    setUploadErrors(newErrors);
    setSubmissions((prev) => {
      const merged = [...prev];
      for (const item of newGraded) {
        const idx = merged.findIndex(
          (x) =>
            x.payload.sessionId === item.payload.sessionId &&
            x.payload.deviceId === item.payload.deviceId
        );
        if (idx >= 0) merged[idx] = item;
        else merged.unshift(item);
      }
      return merged;
    });

    e.target.value = "";
  }

  function exportCsv() {
    if (submissions.length === 0) return;
    const headers = [
      "Nama Peserta",
      "Device ID",
      "Paket",
      "Jumlah Benar",
      "Total Soal",
      "Nilai Skala 100",
      "TWK",
      "TIU",
      "TKP",
      "Total Skor",
      "Skor Maksimal",
      "Status Passing Grade",
      "Durasi (detik)",
      "Alarm Sempat Bunyi",
      "Waktu Selesai",
    ];
    const rows = submissions.map(
      ({ payload, questions, result, correctCount, maxScore, scale100 }) => [
        payload.participantName,
        payload.deviceId,
        payload.packageTitle,
        correctCount,
        questions.length,
        scale100,
        result.scores.TWK.total > 0 ? result.scores.TWK.score : "-",
        result.scores.TIU.total > 0 ? result.scores.TIU.score : "-",
        result.scores.TKP.total > 0 ? result.scores.TKP.score : "-",
        result.totalScore,
        maxScore,
        result.passed ? "LULUS" : "TIDAK LULUS",
        payload.durationSeconds,
        payload.alarmTriggeredDuringExam ? "YA" : "TIDAK",
        new Date(payload.completedAt).toLocaleString("id-ID"),
      ]
    );

    const csv = [
      headers.map(escapeCsvCell).join(","),
      ...rows.map((r) => r.map(escapeCsvCell).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `REKAP_NILAI_UJIAN_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  if (!authorized) {
    return (
      <PageFrame
        eyebrow="06 / Admin Pengawas"
        title="PANEL PENGAWAS."
        description="Otorisasi khusus pengawas untuk membuat kode pembuka kunci perangkat dan menilai file jawaban terenkripsi."
      >
        <section className="p-5 sm:p-8 lg:p-12">
          <form
            onSubmit={handleAdminLogin}
            className="mx-auto max-w-md border-2 border-black bg-warm-white p-6 shadow-[6px_6px_0_0_#2143d8]"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-blue">
              <Lock className="size-4" /> Otorisasi Pengawas Sistem
            </div>
            <h2 className="mt-2 text-2xl font-black uppercase">
              Masuk Panel Pengawas
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Masukkan Master Code LesinAja untuk mengakses generator kode
              perangkat dan mesin penilai file JSON terenkripsi.
            </p>
            <input
              type="password"
              value={authInput}
              onChange={(e) => {
                setAuthInput(e.target.value);
                if (authError) setAuthError(null);
              }}
              autoFocus
              placeholder="Masukkan kode otorisasi pengawas"
              className="mt-4 h-12 w-full border-2 border-black bg-background px-3 font-mono text-sm font-bold tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            {authError && (
              <p className="mt-2 flex items-center gap-1 font-mono text-xs font-bold text-brand-red">
                <X className="size-3.5" /> {authError}
              </p>
            )}
            <Button
              type="submit"
              className="mt-4 h-12 w-full rounded-none bg-brand-blue font-bold uppercase text-white hover:bg-brand-blue-hover"
            >
              <ShieldCheck className="size-4" /> Buka Panel Pengawas
            </Button>
            <div className="mt-4 border-t border-black pt-3 text-center">
              <StaticLink
                href="/ujian"
                className="font-mono text-xs underline hover:text-brand-blue"
              >
                ← Kembali ke Halaman Ujian Siswa
              </StaticLink>
            </div>
          </form>
        </section>
      </PageFrame>
    );
  }

  const normalizedDevice = normalizeDeviceId(deviceIdInput);
  const normalizedPin = normalizeLockPin(lockPinInput);
  const hasDevice = normalizedDevice.length >= 4;
  const normalCode = hasDevice
    ? generateNormalUnlockCode(normalizedDevice, normalizedPin || undefined)
    : "";
  const emergencyCode = hasDevice
    ? generateEmergencyOverrideCode(normalizedDevice, normalizedPin || undefined)
    : "";

  const activeDetail =
    selectedDetailIndex !== null ? submissions[selectedDetailIndex] : null;

  return (
    <PageFrame
      eyebrow="06 / Admin Pengawas"
      title="PENGAWAS & PENILAI."
      description="Hasilkan kode pembuka unik berdasarkan Device ID peserta, serta dekripsi & hitung nilai file jawaban .lesinaja.json."
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black bg-secondary px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-brand-blue">
          <ShieldCheck className="size-4" /> Sesi Pengawas Aktif
        </div>
        <div className="flex items-center gap-2">
          <StaticLink
            href="/ujian"
            className="inline-flex h-8 items-center border border-black bg-warm-white px-3 font-mono text-[11px] font-bold uppercase hover:bg-signal"
          >
            Halaman Ujian Siswa
          </StaticLink>
          <Button
            type="button"
            variant="outline"
            onClick={handleLogout}
            className="h-8 rounded-none border-black font-mono text-[11px] uppercase"
          >
            Keluar Panel
          </Button>
        </div>
      </div>

      {/* SECTION 1: GENERATOR KODE PEMBUKA PER-DEVICE */}
      <section className="grid border-b border-black lg:grid-cols-2">
        <div className="border-b border-black p-5 sm:p-8 lg:border-b-0 lg:border-r">
          <span className="inline-flex items-center gap-1.5 bg-brand-blue px-2.5 py-1 font-mono text-xs font-bold uppercase text-white">
            <Key className="size-3.5" /> 1. Generator Kode Pembuka Perangkat
          </span>
          <h2 className="mt-3 text-2xl font-black uppercase">
            Buka Kunci Peserta
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Setiap perangkat memiliki <strong>Device ID</strong> berbeda sehingga
            kode pembuka yang dihasilkan selalu unik dan tidak dapat dipakai di
            perangkat lain.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
            <div>
              <label
                htmlFor="admin-device-id"
                className="block font-mono text-xs font-bold uppercase"
              >
                Device ID Siswa
              </label>
              <input
                id="admin-device-id"
                type="text"
                value={deviceIdInput}
                onChange={(e) => setDeviceIdInput(e.target.value.toUpperCase())}
                placeholder="Contoh: LSN-7F4A-92C1"
                className="mt-1.5 h-11 w-full border-2 border-black bg-warm-white px-3 font-mono text-sm font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label
                htmlFor="admin-lock-pin"
                className="block font-mono text-xs font-bold uppercase"
              >
                PIN Kunci (Opsional)
              </label>
              <input
                id="admin-lock-pin"
                type="text"
                value={lockPinInput}
                onChange={(e) => setLockPinInput(e.target.value.toUpperCase())}
                placeholder="Mis. K7P2"
                maxLength={6}
                className="mt-1.5 h-11 w-full border-2 border-black bg-warm-white px-3 font-mono text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <p className="mt-2 font-mono text-[11px] text-muted-foreground">
            Tips: Memasukkan PIN Kunci membuat kode hanya berlaku satu kali untuk
            pelanggaran tersebut. Mengosongkan PIN menghasilkan kode induk khusus
            untuk Device ID tersebut.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 bg-warm-white p-5 sm:p-8">
          {!hasDevice ? (
            <div className="border-2 border-dashed border-black p-6 text-center font-mono text-xs uppercase text-muted-foreground">
              Masukkan Device ID peserta di sebelah kiri untuk menghasilkan
              Kode Pembuka Normal &amp; Kode Override Darurat.
            </div>
          ) : (
            <>
              <div className="border-2 border-black bg-signal/40 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase">
                    Kode Pembuka Normal (&lt; 4 Menit)
                  </span>
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    {normalizedDevice}
                    {normalizedPin ? ` · PIN ${normalizedPin}` : ""}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <strong className="font-mono text-2xl font-black tracking-[0.2em] text-black sm:text-3xl">
                    {normalCode}
                  </strong>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => copyValue(normalCode, "normal")}
                    className="h-9 rounded-none border-black bg-warm-white font-mono text-xs font-bold uppercase"
                  >
                    {copiedKey === "normal" ? (
                      <>
                        <Check className="size-3.5" /> Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" /> Salin
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="border-2 border-black bg-brand-red-soft p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 font-mono text-[11px] font-bold uppercase text-brand-red">
                    <ShieldAlert className="size-3.5" /> Kode Override Darurat
                    (Lewat 2+2 Menit / Alarm)
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <strong className="font-mono text-2xl font-black tracking-[0.2em] text-brand-red sm:text-3xl">
                    {emergencyCode}
                  </strong>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => copyValue(emergencyCode, "emergency")}
                    className="h-9 rounded-none border-black bg-warm-white font-mono text-xs font-bold uppercase"
                  >
                    {copiedKey === "emergency" ? (
                      <>
                        <Check className="size-3.5" /> Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" /> Salin
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* SECTION 2: DEKRIPSI & PENILAIAN FILE JSON JAWABAN */}
      <section className="p-5 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 border border-black bg-signal px-2.5 py-1 font-mono text-xs font-bold uppercase">
              <FileJson className="size-3.5" /> 2. Dekripsi &amp; Penilai Jawaban
            </span>
            <h2 className="mt-3 text-2xl font-black uppercase">
              Unggah File Jawaban Terenkripsi (.json)
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pilih satu atau beberapa file{" "}
              <code className="border border-black bg-secondary px-1 font-mono text-xs">
                .lesinaja.json
              </code>{" "}
              milik siswa untuk membuka enkripsi AES-256-GCM dan menghitung nilai.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="inline-flex h-11 cursor-pointer items-center gap-2 border-2 border-black bg-brand-blue px-4 font-mono text-xs font-bold uppercase text-white hover:bg-brand-blue-hover">
              <Upload className="size-4" />
              <span>Unggah File JSON</span>
              <input
                type="file"
                accept=".json,.lesinaja.json,application/json"
                multiple
                onChange={(e) => void handleFilesUpload(e)}
                className="sr-only"
              />
            </label>
            {submissions.length > 0 && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={exportCsv}
                  className="h-11 rounded-none border-2 border-black font-mono text-xs font-bold uppercase"
                >
                  <Download className="size-4" /> Ekspor CSV
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setSubmissions([]);
                    setSelectedDetailIndex(null);
                  }}
                  className="h-11 rounded-none border-black font-mono text-xs uppercase text-brand-red"
                >
                  <Trash2 className="size-4" /> Bersihkan
                </Button>
              </>
            )}
          </div>
        </div>

        {uploadErrors.length > 0 && (
          <div className="mt-4 space-y-1 border-2 border-brand-red bg-brand-red-soft p-4">
            <p className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-brand-red">
              <AlertTriangle className="size-4" /> File Ditolak / Gagal Didekripsi
            </p>
            <ul className="list-disc pl-5 text-xs font-medium text-brand-red">
              {uploadErrors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {submissions.length === 0 ? (
          <div className="mt-6 border-2 border-dashed border-black bg-warm-white p-10 text-center font-mono text-xs uppercase text-muted-foreground">
            Belum ada file jawaban yang diunggah. Unggah file{" "}
            <span className="font-bold text-foreground">.lesinaja.json</span>{" "}
            dari siswa untuk langsung menilai.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto border-2 border-black bg-warm-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-black bg-secondary font-mono text-[11px] uppercase">
                  <th className="border-r border-black p-3">Peserta</th>
                  <th className="border-r border-black p-3">Device ID</th>
                  <th className="border-r border-black p-3">Paket</th>
                  <th className="border-r border-black p-3 text-center">Benar</th>
                  <th className="border-r border-black p-3 text-center">Nilai (0–100)</th>
                  <th className="border-r border-black p-3 text-center">TWK</th>
                  <th className="border-r border-black p-3 text-center">TIU</th>
                  <th className="border-r border-black p-3 text-center">TKP</th>
                  <th className="border-r border-black p-3 text-center">Total</th>
                  <th className="border-r border-black p-3 text-center">Status</th>
                  <th className="border-r border-black p-3">Durasi &amp; Info</th>
                  <th className="p-3 text-center">Rincian</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item, idx) => {
                  const {
                    payload,
                    questions,
                    result,
                    correctCount,
                    scale100,
                  } = item;
                  return (
                    <tr
                      key={`${payload.sessionId}-${payload.deviceId}`}
                      className="border-b border-black last:border-b-0"
                    >
                      <td className="border-r border-black p-3 font-bold">
                        {payload.participantName}
                      </td>
                      <td className="border-r border-black p-3 font-mono text-xs">
                        {payload.deviceId}
                      </td>
                      <td className="border-r border-black p-3 text-xs">
                        {payload.packageTitle}
                      </td>
                      <td className="border-r border-black p-3 text-center font-mono font-bold">
                        {correctCount} / {questions.length}
                      </td>
                      <td className="border-r border-black p-3 text-center font-mono text-base font-black text-black bg-signal/35">
                        {scale100}
                      </td>
                      <td className="border-r border-black p-3 text-center font-mono font-bold">
                        {result.scores.TWK.total > 0
                          ? result.scores.TWK.score
                          : "-"}
                      </td>
                      <td className="border-r border-black p-3 text-center font-mono font-bold">
                        {result.scores.TIU.total > 0
                          ? result.scores.TIU.score
                          : "-"}
                      </td>
                      <td className="border-r border-black p-3 text-center font-mono font-bold">
                        {result.scores.TKP.total > 0
                          ? result.scores.TKP.score
                          : "-"}
                      </td>
                      <td className="border-r border-black p-3 text-center font-mono text-base font-black text-brand-blue">
                        {result.totalScore}
                      </td>
                      <td className="border-r border-black p-3 text-center">
                        {result.passed ? (
                          <span className="inline-flex items-center gap-1 border border-black bg-signal px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                            <CheckCircle2 className="size-3" /> Lulus
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 border border-black bg-brand-red-soft px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-brand-red">
                            <X className="size-3" /> Belum Lulus
                          </span>
                        )}
                      </td>
                      <td className="border-r border-black p-3 font-mono text-[11px]">
                        <div>{formatDuration(payload.durationSeconds)}</div>
                        {payload.alarmTriggeredDuringExam && (
                          <span className="mt-1 inline-block bg-brand-red px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                            Alarm Pernah Bunyi
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            setSelectedDetailIndex(
                              selectedDetailIndex === idx ? null : idx
                            )
                          }
                          className="h-8 rounded-none border-black font-mono text-[11px] uppercase"
                        >
                          <Eye className="size-3.5" /> Detail
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* DETAIL JAWABAN PER SOAL */}
        {activeDetail && (
          <div className="mt-6 border-2 border-black bg-warm-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black pb-3">
              <div>
                <h3 className="text-lg font-black uppercase">
                  Rincian Jawaban: {activeDetail.payload.participantName}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {activeDetail.payload.packageTitle} · Device{" "}
                  {activeDetail.payload.deviceId} · Total Skor:{" "}
                  <strong>{activeDetail.result.totalScore}</strong>
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedDetailIndex(null)}
                className="h-8 rounded-none border-black font-mono text-xs uppercase"
              >
                Tutup Detail
              </Button>
            </div>

            <div className="mt-4 max-h-96 overflow-y-auto border border-black">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="sticky top-0 border-b border-black bg-secondary font-mono uppercase">
                  <tr>
                    <th className="border-r border-black p-2">No Urut Soal</th>
                    <th className="border-r border-black p-2">ID Soal</th>
                    <th className="border-r border-black p-2">Subtes / Topik</th>
                    <th className="border-r border-black p-2 text-center">
                      Pilihan Siswa
                    </th>
                    <th className="p-2 text-center">Skor</th>
                  </tr>
                </thead>
                <tbody>
                  {activeDetail.questions.map((q, qIdx) => {
                    const chosenId = activeDetail.payload.answers[q.id];
                    const earned = choiceScore(q, chosenId);
                    const max = bestScore(q);
                    return (
                      <tr key={q.id} className="border-b border-black last:border-b-0">
                        <td className="border-r border-black p-2 font-mono font-bold">
                          {qIdx + 1}
                        </td>
                        <td className="border-r border-black p-2 font-mono">
                          {q.id}
                        </td>
                        <td className="border-r border-black p-2">
                          <span className="font-bold">{q.category}</span> ·{" "}
                          {q.topic}
                        </td>
                        <td className="border-r border-black p-2 text-center font-mono font-bold uppercase">
                          {chosenId ?? "-"}
                        </td>
                        <td
                          className={`p-2 text-center font-mono font-bold ${
                            earned === max
                              ? "bg-signal/40"
                              : earned === 0
                                ? "bg-brand-red-soft text-brand-red"
                                : ""
                          }`}
                        >
                          {earned} / {max}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </PageFrame>
  );
}
