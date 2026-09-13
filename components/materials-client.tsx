"use client";

import { ArrowUpRight, Check, ChevronRight, Clock3 } from "lucide-react";
import { StaticLink as Link } from "@/components/static-link";
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
      topicProgress: { ...learning.topicProgress, [id]: { opened: true, completed: learning.topicProgress[id]?.completed ?? false, updatedAt: Date.now() } },
    }));
  }

  return (
    <section className="border-b border-black p-5 sm:p-8 lg:p-10">
      <Tabs defaultValue="TWK">
        <TabsList className="material-category-tabs mb-8">
          {CATEGORIES.map((category) => (
            <TabsTrigger key={category} value={category} className="rounded-none font-mono text-sm font-black tracking-[.14em]">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((category) => {
          const categoryMaterials = MATERIALS.filter((material) => material.category === category);
          return (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="mb-5 flex items-end justify-between gap-4 border-b-2 border-black pb-4">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-brand-red">Jalur baca {category}</p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-.04em] sm:text-4xl">{categoryMaterials.length} TOPIK UNTUK DIKUASAI</h2>
                </div>
                <p className="hidden max-w-52 text-right text-sm leading-relaxed text-muted-foreground md:block">Pilih satu topik untuk membuka materi lengkap per bab.</p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {categoryMaterials.map((material, index) => {
                  const progress = state.topicProgress[material.id];
                  return (
                    <Link key={material.id} href={`/materi/${material.id}`} onClick={() => markOpened(material.id)} className="group relative block border-2 border-black bg-warm-white p-5 transition-[transform,background-color] hover:-translate-y-1 hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-signal sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center border-2 border-black bg-signal font-mono text-xs font-bold">/{String(index + 1).padStart(2, "0")}</span>
                        {progress?.completed ? <span className="flex items-center gap-1 border border-black bg-signal px-2 py-1 font-mono text-[10px] font-bold uppercase text-black"><Check className="size-3" /> Selesai</span> : <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground group-hover:text-white">Baca per bab</span>}
                      </div>
                      <h3 className="mt-10 text-3xl font-black tracking-[-.05em] group-hover:text-white">{material.title}</h3>
                      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground group-hover:text-white/85">{material.summary}</p>
                      <div className="mt-7 flex items-center justify-between border-t border-black pt-4 font-mono text-xs font-bold uppercase group-hover:text-white">
                        <span className="flex items-center gap-2"><Clock3 className="size-4" /> {material.chapters?.length ?? 3} bab</span>
                        <span className="flex items-center gap-1">Mulai baca <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
      <div className="mt-8 flex items-center gap-2 border-l-4 border-brand-red bg-brand-red-soft p-4 text-sm leading-relaxed">
        <ArrowUpRight className="size-4 shrink-0" />
        Materi dirancang sebagai ringkasan belajar. Setelah membaca, gunakan drill untuk menguji pemahamanmu.
      </div>
    </section>
  );
}
