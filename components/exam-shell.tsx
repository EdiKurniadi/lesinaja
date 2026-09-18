"use client";

import { Bookmark, Check, Grid3X3, LogOut, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CATEGORIES } from "@/lib/exam-rules";
import { clearSessionOpen } from "@/lib/session-navigation";
import type { ActiveSession, Question } from "@/lib/types";

type PaletteProps = {
  session: ActiveSession;
  questions: Question[];
  onMove: (index: number) => void;
  grouped?: boolean;
  compact?: boolean;
};

function PaletteButton({ session, question, index, onMove, compact = false }: Omit<PaletteProps, "questions" | "grouped"> & { question: Question; index: number }) {
  const answered = Boolean(session.answers[question.id]);
  const flagged = session.flagged.includes(question.id);
  const active = index === session.currentIndex;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => onMove(index)}
      aria-current={active ? "step" : undefined}
      aria-label={`Buka soal ${index + 1}, ${answered ? "sudah dijawab" : "belum dijawab"}${flagged ? ", ditandai ragu-ragu" : ""}`}
      className={`relative shrink-0 rounded-none p-0 font-mono text-xs font-bold shadow-none ${compact ? "size-9" : "size-10"} ${answered ? "bg-brand-blue text-white hover:bg-brand-blue-hover hover:text-white" : "bg-warm-white"} ${active ? "border-[3px] border-brand-red" : "border-black"}`}
    >
      {index + 1}
      {answered && <Check aria-hidden="true" className="absolute -bottom-1 -right-1 size-3 border border-black bg-warm-white text-brand-blue" />}
      {flagged && <Bookmark aria-hidden="true" className="absolute -right-1 -top-1 size-3 fill-signal text-black" />}
    </Button>
  );
}

export function QuestionPalette({ session, questions, onMove, grouped = false, compact = false }: PaletteProps) {
  const indexed = questions.map((question, index) => ({ question, index }));
  const groups = grouped
    ? CATEGORIES.map((category) => ({ label: category, items: indexed.filter(({ question }) => question.category === category) }))
    : [{ label: questions[0]?.category ?? "Soal", items: indexed }];

  return (
    <div className="grid gap-5">
      {groups.filter((group) => group.items.length).map((group) => (
        <section key={group.label} aria-label={`Soal ${group.label}`}>
          {grouped && <div className="mb-3 flex items-center justify-between border-b border-black pb-2"><strong className="font-mono text-xs">{group.label}</strong><span className="font-mono text-[10px]">{group.items.length} SOAL</span></div>}
          <div className={`grid grid-cols-5 ${compact ? "gap-1.5" : "gap-2"}`}>
            {group.items.map(({ question, index }) => <PaletteButton key={question.id} session={session} question={question} index={index} onMove={onMove} compact={compact} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

function StatusLegend() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-2 border-t border-black pt-4 font-mono text-[10px] uppercase">
      <span className="flex items-center gap-2"><i className="size-3 border border-black bg-warm-white" /> Kosong</span>
      <span className="flex items-center gap-2"><i className="flex size-3 items-center justify-center bg-brand-blue text-white"><Check className="size-2" /></i> Dijawab</span>
      <span className="flex items-center gap-2"><Bookmark className="size-3 fill-signal" /> Ragu-ragu</span>
      <span className="flex items-center gap-2"><i className="size-3 border-2 border-brand-red bg-warm-white" /> Aktif</span>
    </div>
  );
}

export function useExamKeyboard({
  currentIndex,
  questions,
  onMove,
  onSelect,
  onToggleFlag,
  canMoveNext = true,
  canMovePrevious = true,
}: {
  currentIndex: number;
  questions: Question[];
  onMove: (index: number) => void;
  onSelect: (choiceId: string) => void;
  onToggleFlag?: () => void;
  canMoveNext?: boolean;
  canMovePrevious?: boolean;
}) {
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey || document.querySelector('[role="dialog"]')) return;
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (event.key === "ArrowLeft" && canMovePrevious && currentIndex > 0) {
        event.preventDefault();
        onMove(currentIndex - 1);
      } else if (event.key === "ArrowRight" && canMoveNext && currentIndex < questions.length - 1) {
        event.preventDefault();
        onMove(currentIndex + 1);
      } else if (/^[a-eA-E]$/.test(event.key)) {
        const choice = questions[currentIndex]?.choices[event.key.toUpperCase().charCodeAt(0) - 65];
        if (choice) {
          event.preventDefault();
          onSelect(choice.id);
        }
      } else if (event.key.toLowerCase() === "r" && onToggleFlag) {
        event.preventDefault();
        onToggleFlag();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [canMoveNext, canMovePrevious, currentIndex, onMove, onSelect, onToggleFlag, questions]);
}

export function ExamShell({
  eyebrow,
  title,
  session,
  questions,
  answered,
  flagged = 0,
  onMove,
  groupedPalette = false,
  navigationMode = "free",
  headerMetric,
  headerAction,
  footer,
  children,
}: {
  eyebrow?: string;
  title: string;
  session: ActiveSession;
  questions: Question[];
  answered: number;
  flagged?: number;
  onMove: (index: number) => void;
  groupedPalette?: boolean;
  navigationMode?: "free" | "sequential";
  headerMetric?: ReactNode;
  headerAction?: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const unanswered = questions.length - answered;
  const percentage = questions.length ? Math.round((answered / questions.length) * 100) : 0;
  const size = Math.min(5, questions.length);
  const maxStart = Math.max(0, questions.length - size);

  const [windowStart, setWindowStart] = useState(() => {
    return Math.min(Math.max(0, session.currentIndex - 2), maxStart);
  });

  let effectiveStart = Math.min(Math.max(0, windowStart), maxStart);
  if (session.currentIndex < effectiveStart) {
    effectiveStart = session.currentIndex;
  } else if (session.currentIndex >= effectiveStart + size) {
    effectiveStart = session.currentIndex - size + 1;
  }
  effectiveStart = Math.min(Math.max(0, effectiveStart), maxStart);

  if (effectiveStart !== windowStart) {
    setWindowStart(effectiveStart);
  }

  const quickIndexes = useMemo(() => {
    return Array.from({ length: size }, (_, offset) => effectiveStart + offset);
  }, [effectiveStart, size]);

  useEffect(() => {
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;
    const shell = contentRef.current?.closest("section");
    const siblings: Element[] = [];
    let branch: Element | null | undefined = shell;
    while (branch?.parentElement && branch.parentElement !== document.body) {
      siblings.push(...Array.from(branch.parentElement.children).filter((element) => element !== branch));
      branch = branch.parentElement;
    }
    const previousAccessibility = siblings.map((element) => ({
      element,
      ariaHidden: element.getAttribute("aria-hidden"),
      inert: element.hasAttribute("inert"),
    }));
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    siblings.forEach((element) => {
      element.setAttribute("aria-hidden", "true");
      element.setAttribute("inert", "");
    });
    return () => {
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
      previousAccessibility.forEach(({ element, ariaHidden, inert }) => {
        if (ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", ariaHidden);
        if (!inert) element.removeAttribute("inert");
      });
    };
  }, []);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "instant" });
    window.requestAnimationFrame(() => contentRef.current?.querySelector<HTMLElement>("[data-exam-question-heading]")?.focus({ preventScroll: true }));
  }, [session.currentIndex]);

  function moveFromPanel(index: number) {
    onMove(index);
    setPaletteOpen(false);
  }

  return (
    <section className="fixed inset-0 z-[60] flex h-dvh min-h-0 w-screen flex-col overflow-hidden bg-background text-foreground">
      <header className="shrink-0 border-b border-black bg-warm-white">
        <div className="flex min-h-14 items-center gap-1.5 px-2 sm:gap-4 sm:px-4 lg:px-6">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="button" variant="outline" size="icon" className="size-8 shrink-0 rounded-none border-black sm:h-9 sm:w-auto sm:px-3" aria-label="Keluar sementara"><LogOut className="size-3.5 sm:size-4" /><span className="hidden sm:inline">Keluar sementara</span></Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-none border-black">
              <AlertDialogHeader>
                <AlertDialogTitle>Keluar dari mode ujian?</AlertDialogTitle>
                <AlertDialogDescription>Jawaban dan waktu sesi tetap tersimpan. Kamu dapat melanjutkannya nanti dari halaman pilihan.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="rounded-none border-black">Tetap di sini</AlertDialogCancel>
                <AlertDialogAction className="rounded-none" onClick={() => { clearSessionOpen(); window.location.assign("/"); }}>Ya, keluar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="min-w-0 flex-1">
            {eyebrow ? (
              <p className="font-mono text-[9px] font-bold uppercase tracking-[.12em] text-muted-foreground sm:text-[10px]">{eyebrow}</p>
            ) : null}
            <h1 className="truncate text-[11px] font-bold uppercase tracking-tight sm:text-base sm:font-black sm:tracking-normal">{title}</h1>
          </div>
          {headerMetric}
          {headerAction}
        </div>
        {navigationMode === "free" ? (
          <div className="flex min-h-12 items-center gap-2 border-t border-black px-2 lg:hidden">
            <p className="w-[76px] shrink-0 font-mono text-[9px] font-bold uppercase leading-tight"><span className="block">{answered} dijawab</span><span>{unanswered} kosong{flagged ? ` · ${flagged} ragu` : ""}</span></p>
            <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
              {quickIndexes.map((index) => <PaletteButton key={questions[index].id} session={session} question={questions[index]} index={index} onMove={onMove} compact />)}
            </div>
            <Sheet open={paletteOpen} onOpenChange={setPaletteOpen}>
              <SheetTrigger asChild><Button type="button" variant="outline" size="icon" className="size-11 rounded-none border-black" aria-label="Buka semua nomor"><Grid3X3 /></Button></SheetTrigger>
              <SheetContent side="right" showCloseButton={false} overlayClassName="z-[80]" className="z-[81] h-dvh w-full max-w-none gap-0 rounded-none border-l-2 border-black bg-background p-0 sm:max-w-md">
                <SheetHeader className="flex-row items-start justify-between border-b border-black p-5 text-left">
                  <div><SheetTitle className="text-2xl font-black">SEMUA NOMOR</SheetTitle><SheetDescription>{answered} dijawab · {unanswered} belum dijawab{flagged ? ` · ${flagged} ragu-ragu` : ""}</SheetDescription></div>
                  <SheetClose asChild><Button type="button" variant="outline" size="icon" className="rounded-none border-black" aria-label="Tutup daftar soal"><X /></Button></SheetClose>
                </SheetHeader>
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5">
                  <QuestionPalette session={session} questions={questions} onMove={moveFromPanel} grouped={groupedPalette} />
                  <div className="mt-6"><StatusLegend /></div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex min-h-10 items-center justify-between gap-4 border-t border-black px-3 font-mono text-[10px] font-bold uppercase tracking-[.08em] sm:px-5">
            <span>{answered} dari {questions.length} dijawab</span>
            <span>Soal {session.currentIndex + 1} / {questions.length}</span>
          </div>
        )}
        <div className="h-1 bg-secondary" role="progressbar" aria-label="Progres jawaban" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={answered}><div className="h-full bg-signal transition-[width]" style={{ width: `${percentage}%` }} /></div>
      </header>

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div ref={contentRef} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain bg-warm-white" data-exam-scroll-region>
          <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8 xl:p-10">{children}</div>
        </div>
        {navigationMode === "free" && <aside className="hidden w-[310px] shrink-0 flex-col border-l border-black bg-background lg:flex xl:w-[340px]">
          <div className="border-b border-black p-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Daftar soal</p>
            <p className="mt-2 text-sm"><strong>{answered}</strong> dijawab · <strong>{unanswered}</strong> belum{flagged ? ` · ${flagged} ragu-ragu` : ""}</p>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5">
            <QuestionPalette session={session} questions={questions} onMove={onMove} grouped={groupedPalette} />
          </div>
          <div className="shrink-0 p-5"><StatusLegend /></div>
        </aside>}
      </div>

      <footer className="shrink-0 border-t border-black bg-background px-3 pb-[max(.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-5">{footer}</footer>
    </section>
  );
}
