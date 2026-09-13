"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, CheckCircle2, ChevronRight } from "lucide-react";
import { StaticLink as Link } from "@/components/static-link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DRILL_PACKAGES } from "@/lib/content";
import { getMaterialChapters } from "@/lib/material-lessons";
import { updateLearningState } from "@/lib/storage";
import type { MaterialTopic } from "@/lib/types";
import { useLearningState } from "@/hooks/use-learning-state";

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

function chapterLabel(index: number) {
  return `BAB ${numerals[index] ?? index + 1}`;
}

export function MaterialReaderClient({ material }: { material: MaterialTopic }) {
  const state = useLearningState();
  const chapters = useMemo(() => getMaterialChapters(material), [material]);
  const [activeChapter, setActiveChapter] = useState("chapter-0");
  const progress = state.topicProgress[material.id];
  const drillPackage = DRILL_PACKAGES.find((item) => item.category === material.category && item.topic === material.title);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeChapter]);

  useEffect(() => {
    updateLearningState((learning) => ({
      ...learning,
      topicProgress: { ...learning.topicProgress, [material.id]: { opened: true, completed: learning.topicProgress[material.id]?.completed ?? false, updatedAt: Date.now() } },
    }));
  }, [material.id]);

  function toggleComplete() {
    updateLearningState((learning) => ({
      ...learning,
      topicProgress: { ...learning.topicProgress, [material.id]: { opened: true, completed: !learning.topicProgress[material.id]?.completed, updatedAt: Date.now() } },
    }));
  }

  const isLastChapter = activeChapter === `chapter-${chapters.length - 1}`;

  return (
    <section className="border-b border-black">
      <Tabs value={activeChapter} onValueChange={setActiveChapter}>
        <div className="sticky top-0 z-20 border-b-2 border-black bg-brand-blue px-5 py-3 sm:px-8 lg:px-10">
          <TabsList className="material-chapter-tabs">
            {chapters.map((chapter, index) => (
              <TabsTrigger
                key={chapter.title}
                value={`chapter-${index}`}
                className="shrink-0 rounded-none font-mono text-xs font-bold tracking-[.12em]"
              >
                <span className={chapters.length > 3 ? "hidden sm:inline" : "inline"}>BAB </span>
                <span>{numerals[index] ?? index + 1}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black bg-warm-white px-5 py-3 sm:px-8 lg:px-10">
          <Link
            href="/materi"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[.12em] text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-signal"
          >
            <ArrowLeft className="size-4" /> Semua materi
          </Link>
          <span className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">
            {material.category} · {material.title}
          </span>
        </div>

        {chapters.map((chapter, index) => (
          <TabsContent key={chapter.title} value={`chapter-${index}`} className="m-0">
            <article className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
              <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_230px]">
                <div className="min-w-0">
                  <div className="border-l-8 border-brand-red pl-4">
                    <p className="font-mono text-xs font-bold uppercase tracking-[.15em] text-brand-red">{chapterLabel(index)} / {String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-3 text-4xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">{chapter.title}</h2>
                  </div>
                  <p className="mt-8 max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9">{chapter.intro}</p>
                  <div className="mt-10 space-y-10">
                    {chapter.sections.map((item) => (
                      <section key={item.heading} className="max-w-3xl border-t-2 border-black pt-5">
                        <h3 className="text-2xl font-black tracking-[-.035em] sm:text-3xl">{item.heading}</h3>
                        <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">{item.body}</p>
                        {item.bullets && <ul className="mt-5 grid gap-3">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-3 border-l-4 border-signal bg-secondary px-4 py-3 text-base leading-7"><Check className="mt-1 size-4 shrink-0 text-brand-blue" /><span>{bullet}</span></li>)}</ul>}
                      </section>
                    ))}
                  </div>
                  {chapter.callout && <aside className="mt-10 border-2 border-black bg-signal p-5 sm:p-6"><p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Pegangan ujian</p><p className="mt-3 text-lg font-bold leading-8">{chapter.callout}</p></aside>}
                  <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-black pt-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-[.12em]">{index + 1} dari {chapters.length} bab</span>
                    {index < chapters.length - 1 ? <Button className="rounded-none" onClick={() => setActiveChapter(`chapter-${index + 1}`)}>Bab berikutnya <ChevronRight /></Button> : <Button variant={progress?.completed ? "outline" : "default"} className="rounded-none border-black" onClick={toggleComplete}>{progress?.completed ? "Tandai belum selesai" : <><CheckCircle2 /> Tandai selesai</>}</Button>}
                  </div>
                </div>

                <aside className="h-fit border-2 border-black bg-brand-blue p-5 text-white lg:sticky lg:top-20">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-signal">Peta materi</p>
                  <ol className="mt-5 space-y-4">
                    {chapters.map((item, itemIndex) => <li key={item.title}><button type="button" onClick={() => setActiveChapter(`chapter-${itemIndex}`)} aria-current={activeChapter === `chapter-${itemIndex}` ? "step" : undefined} className="flex w-full items-start gap-3 text-left text-sm font-bold leading-snug underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"><span className={`flex size-6 shrink-0 items-center justify-center border border-white font-mono text-[10px] ${activeChapter === `chapter-${itemIndex}` ? "bg-signal text-black" : ""}`}>{String(itemIndex + 1).padStart(2, "0")}</span><span>{item.title}</span></button></li>)}
                  </ol>
                </aside>
              </div>
            </article>
          </TabsContent>
        ))}
      </Tabs>

      {isLastChapter && (
        <div className="border-t-2 border-black bg-warm-white p-5 sm:p-8 lg:p-10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <div><p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">Langkah berikutnya</p><h2 className="mt-2 text-3xl font-black">UJI PEMAHAMANMU</h2></div>
            {drillPackage ? <Button asChild className="h-12 rounded-none"><Link href={`/drill?category=${material.category}&topic=${encodeURIComponent(material.title)}`}>Drill {material.title} <ArrowUpRight /></Link></Button> : <Button asChild variant="outline" className="h-12 rounded-none border-black"><Link href="/materi">Pilih materi lain <ArrowUpRight /></Link></Button>}
          </div>
        </div>
      )}

      <footer className="flex flex-col gap-2 border-t-2 border-black p-5 font-mono text-[11px] uppercase tracking-[.1em] text-muted-foreground sm:flex-row sm:justify-between sm:p-7">
        <p>© {new Date().getFullYear()} LesinAja™. All rights reserved.</p>
        <p>Platform belajar mandiri & bimbingan belajar SKD CPNS.</p>
      </footer>
    </section>
  );
}
