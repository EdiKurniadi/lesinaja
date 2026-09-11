"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bestScore, choiceScore } from "@/lib/scoring";
import type { Question } from "@/lib/types";

export function QuestionCard({
  question,
  selectedId,
  onSelect,
  reveal = false,
}: {
  question: Question;
  selectedId?: string;
  onSelect: (choiceId: string) => void;
  reveal?: boolean;
}) {
  const selectedScore = choiceScore(question, selectedId);
  const maximum = bestScore(question);
  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[.12em] sm:mb-4 sm:text-xs">
        <span className="bg-black px-2 py-1 text-white">{question.category}</span>
        <span>{question.topic}</span>
      </div>
      <h2 tabIndex={-1} data-exam-question-heading className="text-lg font-bold leading-snug outline-none sm:text-xl lg:text-2xl">{question.prompt}</h2>
      <div className="mt-4 grid gap-2 sm:mt-5 sm:gap-3" role="radiogroup" aria-label="Pilihan jawaban">
        {question.choices.map((choice, index) => {
          const selected = selectedId === choice.id;
          const best = choice.score === maximum;
          const showBest = reveal && best;
          const showWrong = reveal && selected && !best;
          return (
            <Button
              key={choice.id}
              type="button"
              variant="outline"
              role="radio"
              aria-checked={selected}
              aria-keyshortcuts={String.fromCharCode(65 + index)}
              onClick={() => onSelect(choice.id)}
              disabled={reveal}
              className={`h-auto min-h-12 justify-start whitespace-normal rounded-none border-black px-3 py-2.5 text-left text-base leading-snug shadow-none disabled:pointer-events-none disabled:opacity-100 sm:px-4 ${selected ? "bg-black text-white" : "bg-white"} ${showBest ? "bg-signal text-black" : ""}`}
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center border ${selected || showBest ? "border-current" : "border-black"}`}>{String.fromCharCode(65 + index)}</span>
              <span className="flex-1">{choice.label}</span>
              {showBest && <Check aria-label="Jawaban terbaik" />}
              {showWrong && <X aria-label="Bukan jawaban terbaik" />}
            </Button>
          );
        })}
      </div>
      {reveal && selectedId && (
        <div className="mt-4 border border-black bg-secondary p-4 sm:mt-5" aria-live="polite">
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Skor {selectedScore}/{maximum}</p>
          <p className="mt-2 leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </article>
  );
}
