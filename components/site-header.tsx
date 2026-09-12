"use client";

import Image from "next/image";
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
        <Link href="/" aria-label="LesinAja — Beranda" className="flex h-full shrink-0 items-center border-r border-black px-3 sm:px-5">
          <Image
            src="/les-privat/lesinaja-logo.png"
            alt="LesinAja"
            width={1555}
            height={384}
            priority
            className="h-auto w-[128px] sm:w-[150px]"
          />
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
