import Link from "next/link";
import { ArrowUpRight, Clock3, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { HomeProgress } from "@/components/home-progress";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="page-shell border-x border-black">
        <div className="grid min-h-[520px] lg:grid-cols-[1.35fr_.65fr]">
          <div className="flex flex-col justify-between border-b border-black p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.16em]">
              <span className="inline-block h-3 w-3 bg-signal" />
              Persiapan SKD CPNS
            </div>
            <div className="py-16 lg:py-24">
              <p className="mb-4 font-mono text-xs uppercase tracking-[.18em]">Belajar / Drill / Try out</p>
              <h1 className="max-w-4xl text-[clamp(3.6rem,10vw,8.8rem)] font-black leading-[.82] tracking-[-.075em]">
                SIAP<br />LEBIH<br /><span className="text-stroke">TERUKUR.</span>
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed">
              Kuasai materi, latih titik lemah, lalu uji diri dalam simulasi 110 soal seperti hari ujian.
            </p>
          </div>

          <aside className="flex flex-col bg-signal">
            <div className="border-b border-black p-5 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[.18em]">Mulai dari sini</p>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-[-.045em] sm:text-5xl">PILIH<br />MODEMU.</h2>
            </div>
            <div className="flex flex-1 flex-col">
              <Link className="action-row group" href="/drill">
                <span><Target aria-hidden="true" /> Drill cepat</span>
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
              <Link className="action-row group" href="/tryout">
                <span><Clock3 aria-hidden="true" /> Try out penuh</span>
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
              <Link className="action-row group border-b-0" href="/materi">
                <span><span className="text-2xl font-black">Aa</span> Baca materi</span>
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>

        <HomeProgress />

        <footer className="flex flex-col gap-3 border-t border-black p-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p>Latihan mandiri — bukan situs resmi BKN.</p>
          <p className="font-mono uppercase tracking-wider">Acuan SKD CPNS TA 2024</p>
        </footer>
      </section>
    </main>
  );
}
