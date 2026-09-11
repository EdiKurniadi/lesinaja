"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["/drill", "Drill"],
  ["/tryout", "Try out"],
  ["/materi", "Materi"],
  ["/les-privat", "Les Privat"],
  ["/progres", "Progres"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-black bg-background/95 backdrop-blur">
      <div className="page-shell flex h-16 items-center border-x border-black">
        <Link href="/" className="flex h-full items-center border-r border-black px-5 text-xl font-black tracking-[-.055em] sm:px-7">
          LESIN<span className="bg-signal px-1">AJA</span>
        </Link>
        <nav className="scrollbar-none flex h-full min-w-0 flex-1 items-stretch overflow-x-auto" aria-label="Navigasi utama">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <span className="hidden h-full items-center border-l border-black px-6 font-mono text-[11px] uppercase tracking-[.14em] lg:flex">CPNS / 2024</span>
      </div>
    </header>
  );
}
