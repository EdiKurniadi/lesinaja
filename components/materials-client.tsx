"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES } from "@/lib/exam-rules";
import { MATERIALS } from "@/lib/materials";
import { updateLearningState } from "@/lib/storage";
import { useLearningState } from "@/hooks/use-learning-state";

export function MaterialsClient() {
  const state = useLearningState();

  function markOpened(id: string) {
    updateLearningState((learning) => ({
      ...learning,
      topicProgress: {
        ...learning.topicProgress,
        [id]: { opened: true, completed: learning.topicProgress[id]?.completed ?? false, updatedAt: Date.now() },
      },
    }));
  }

  function toggleComplete(id: string) {
    updateLearningState((learning) => ({
      ...learning,
      topicProgress: {
        ...learning.topicProgress,
        [id]: { opened: true, completed: !learning.topicProgress[id]?.completed, updatedAt: Date.now() },
      },
    }));
  }

  return (
    <section className="border-b border-black p-5 sm:p-8 lg:p-10">
      <Tabs defaultValue="TWK">
        <TabsList variant="line" className="mb-8 grid h-auto w-full grid-cols-3 border border-black p-0">
          {CATEGORIES.map((category) => <TabsTrigger key={category} value={category} className="h-14 rounded-none border-r border-black text-base font-black last:border-r-0 data-[state=active]:bg-signal">{category}</TabsTrigger>)}
        </TabsList>
        {CATEGORIES.map((category) => (
          <TabsContent key={category} value={category}>
            <Accordion type="single" collapsible onValueChange={(value) => value && markOpened(value)} className="border-x border-t border-black">
              {MATERIALS.filter((material) => material.category === category).map((material, index) => {
                const progress = state.topicProgress[material.id];
                return (
                  <AccordionItem key={material.id} value={material.id} className="border-black bg-warm-white">
                    <AccordionTrigger className="rounded-none px-5 py-6 hover:no-underline sm:px-7">
                      <span className="flex min-w-0 items-center gap-5 text-left"><span className="font-mono text-xs">/{String(index + 1).padStart(2, "0")}</span><span><strong className="block text-xl sm:text-2xl">{material.title}</strong><span className="mt-1 block text-sm font-normal text-muted-foreground">{material.summary}</span></span></span>
                      {progress?.completed && <span className="ml-auto mr-3 flex items-center gap-1 bg-signal px-2 py-1 font-mono text-[10px] uppercase"><Check className="size-3" /> Selesai</span>}
                    </AccordionTrigger>
                    <AccordionContent className="border-t border-black p-5 sm:p-7">
                      <div className="grid gap-8 lg:grid-cols-[1fr_.7fr]">
                        <div>
                          <h3 className="font-mono text-xs font-bold uppercase tracking-[.14em]">Yang perlu diingat</h3>
                          <ul className="mt-4 grid gap-3">
                            {material.points.map((point) => <li key={point} className="flex gap-3 leading-relaxed"><span aria-hidden="true">→</span><span>{point}</span></li>)}
                          </ul>
                        </div>
                        <aside className="border border-black bg-secondary p-5">
                          <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Contoh</p>
                          <p className="mt-3 leading-relaxed">{material.example}</p>
                        </aside>
                      </div>
                      <div className="mt-7 flex flex-wrap gap-3 border-t border-black pt-5">
                        <Button type="button" variant={progress?.completed ? "outline" : "default"} className="rounded-none border-black" onClick={() => toggleComplete(material.id)}>{progress?.completed ? "Tandai belum selesai" : "Tandai selesai"}</Button>
                        <Button asChild variant="outline" className="rounded-none border-black"><Link href={`/drill?category=${category}&topic=${encodeURIComponent(material.title)}`}>Drill topik ini <ArrowUpRight /></Link></Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
