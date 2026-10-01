"use client";

import { useEffect, useState } from "react";

export function PreparingExamOverlay({ open }: { open: boolean }) {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    if (!open) return;
    const interval = window.setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 400);
    return () => window.clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in-0 duration-200"
    >
      <div className="flex w-full max-w-sm flex-col items-center justify-center border-2 border-black bg-warm-white p-8 text-center shadow-[6px_6px_0_0_#2143d8]">
        <div className="flex items-center justify-center text-lg font-black uppercase tracking-tight text-foreground sm:text-xl">
          <span>Menyiapkan lembar ujian</span>
          <span className="inline-block w-8 text-left font-mono font-bold text-brand-blue">{dots}</span>
        </div>
        <div className="mt-4 h-1.5 w-44 overflow-hidden border border-black bg-secondary">
          <div className="h-full w-full bg-brand-blue animate-pulse" />
        </div>
      </div>
    </div>
  );
}
