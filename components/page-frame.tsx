import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";

export function PageFrame({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="page-shell border-x border-black">
        <header className="grid border-b border-black lg:grid-cols-[220px_1fr]">
          <div className="flex items-end border-b border-black bg-signal p-5 lg:border-b-0 lg:border-r lg:p-7">
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em]">{eyebrow}</p>
          </div>
          <div className="p-5 sm:p-8 lg:p-10">
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[.86] tracking-[-.07em]">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">{description}</p>
          </div>
        </header>
        {children}
        <footer className="flex flex-col gap-2 border-t border-black p-5 text-xs sm:flex-row sm:justify-between sm:p-7">
          <span>LesinAja adalah platform latihan mandiri dan tidak berafiliasi dengan BKN.</span>
          <span className="font-mono uppercase tracking-wider">Acuan SKD CPNS TA 2024</span>
        </footer>
      </div>
    </main>
  );
}
