"use client";

import { memo } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathText } from "@/components/math-text";
import { bestScore, choiceScore } from "@/lib/scoring";
import type { Question } from "@/lib/types";

function QuestionCardComponent({
  question,
  selectedId,
  onSelect,
  locked = false,
  reveal = false,
}: {
  question: Question;
  selectedId?: string;
  onSelect: (choiceId: string) => void;
  locked?: boolean;
  reveal?: boolean;
}) {
  const selectedScore = choiceScore(question, selectedId);
  const maximum = bestScore(question);
  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-2 flex flex-wrap items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[.12em] sm:mb-3 sm:text-xs">
        <span className="bg-brand-blue px-2 py-0.5 text-white">{question.category}</span>
        <span>{question.topic}</span>
      </div>
      <h2
        tabIndex={-1}
        data-exam-question-heading
        className="text-sm sm:text-base font-normal sm:font-medium leading-relaxed outline-none text-foreground"
      >
        <MathText text={question.prompt} />
      </h2>
      <div className="mt-3.5 grid gap-2 sm:mt-4 sm:gap-2.5" role="radiogroup" aria-label="Pilihan jawaban">
        {question.choices.map((choice, index) => {
          const selected = selectedId === choice.id;
          const best = choice.score === maximum;
          const showBest = reveal && best;
          const showWrong = reveal && selected && !best;
          const stateClass = showBest
            ? "bg-signal text-black hover:bg-signal"
            : showWrong
              ? "bg-brand-red text-white hover:bg-brand-red hover:text-white focus-visible:text-white active:text-white"
              : selected
                ? "bg-brand-blue text-white hover:bg-brand-blue-hover hover:text-white focus-visible:text-white active:text-white"
                : "bg-warm-white";
          return (
            <Button
              key={choice.id}
              type="button"
              variant="outline"
              role="radio"
              aria-checked={selected}
              aria-keyshortcuts={String.fromCharCode(65 + index)}
              onClick={() => onSelect(choice.id)}
              disabled={locked || reveal}
              className={`h-auto min-h-10 justify-start whitespace-normal rounded-none border-black px-2.5 py-2 text-left text-sm sm:text-[15px] font-normal leading-normal shadow-none disabled:pointer-events-none disabled:opacity-100 sm:px-3.5 sm:py-2.5 ${stateClass}`}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-xs font-bold ${selected || showBest ? "border-current" : "border-black"}`}>{String.fromCharCode(65 + index)}</span>
              <span className="flex-1 min-w-0"><MathText text={choice.label} /></span>
              {showBest && <Check aria-label="Jawaban terbaik" className="size-4 shrink-0" />}
              {showWrong && <X aria-label="Bukan jawaban terbaik" className="size-4 shrink-0" />}
            </Button>
          );
        })}
      </div>
      {reveal && selectedId && (
        <div className="mt-4 border border-black bg-secondary p-3.5 sm:mt-5 sm:p-4" aria-live="polite">
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Skor {selectedScore}/{maximum}</p>
          <div className="mt-2 text-sm leading-relaxed"><MathText text={question.explanation} /></div>
        </div>
      )}
    </article>
  );
}

export const QuestionCard = memo(QuestionCardComponent);
