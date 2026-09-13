import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Target } from "lucide-react";
import { BrandFooter } from "@/components/brand-footer";
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
              <span className="inline-block h-3 w-3 bg-brand-red" />
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

          <aside className="flex flex-col bg-brand-blue text-white">
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

        <section className="grid border-t border-black lg:grid-cols-[.78fr_1.22fr]" aria-labelledby="home-private-lessons-title">
          <div className="flex flex-col justify-between border-b border-black bg-brand-red p-5 text-white sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em]">04 / Les Privat</p>
            <div className="py-12 sm:py-16">
              <h2 id="home-private-lessons-title" className="text-4xl font-black leading-[.92] tracking-[-.055em] sm:text-6xl">BELAJAR<br />LEBIH<br />TERARAH.</h2>
            </div>
            <p className="flex items-center gap-2 font-bold"><MapPin className="size-5" aria-hidden="true" /> Offline di Pontianak · Online tersedia</p>
          </div>

          <div className="bg-warm-white p-5 sm:p-8 lg:p-10">
            <p className="max-w-2xl text-xl font-bold leading-snug sm:text-2xl">Belajar langsung bersama pengajar untuk memahami konsep, membedah kesalahan, dan menentukan fokus latihan berikutnya.</p>
            <div className="mt-9 grid border border-black sm:grid-cols-3">
              {[
                ["01", "TWK", "Pahami konsep kebangsaan."],
                ["02", "TIU", "Urai cara kerja setiap soal."],
                ["03", "TKP", "Bedah pilihan dan alasannya."],
              ].map(([number, category, description]) => (
                <div key={category} className="border-b border-black p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <span className="font-mono text-[11px] font-bold text-brand-red">/{number}</span>
                  <h3 className="mt-5 text-2xl font-black">{category}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Kelas disesuaikan dengan kebutuhan belajar dan dievaluasi melalui latihan serta try out.</p>
              <Link href="/les-privat" className="group inline-flex min-h-12 items-center gap-3 border border-black bg-brand-blue px-5 font-bold text-white transition-colors hover:bg-brand-blue-hover focus-visible:outline-signal">
                Lihat Les Privat
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </section>
      <BrandFooter showDisclaimer />
    </main>
  );
}
