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
    <article>
      <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase tracking-[.12em]">
        <span className="bg-black px-2 py-1 text-white">{question.category}</span>
        <span>{question.topic}</span>
      </div>
      <h2 className="text-xl font-bold leading-snug sm:text-2xl">{question.prompt}</h2>
      <div className="mt-7 grid gap-3" role="radiogroup" aria-label="Pilihan jawaban">
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
              onClick={() => onSelect(choice.id)}
              disabled={reveal}
              className={`h-auto min-h-14 justify-start whitespace-normal rounded-none border-black px-4 py-3 text-left text-base shadow-none disabled:pointer-events-none disabled:opacity-100 ${selected ? "bg-black text-white" : "bg-white"} ${showBest ? "bg-signal text-black" : ""}`}
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
        <div className="mt-6 border border-black bg-secondary p-5" aria-live="polite">
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Skor {selectedScore}/{maximum}</p>
          <p className="mt-2 leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </article>
  );
}
