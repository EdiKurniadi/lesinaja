"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { StaticLink as Link } from "@/components/static-link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  ["/drill", "Drill"],
  ["/tryout", "Try out"],
  ["/materi", "Materi"],
  ["/les-privat", "Les Privat"],
  ["/progres", "Progres"],
] as const;

const mobileNav = [["/", "Beranda"], ...nav] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-black bg-background/95 backdrop-blur">
      <div className="page-shell flex h-16 items-center border-x border-black">
        <Link href="/" aria-label="LESINAJA — Beranda" className="flex h-full shrink-0 items-center border-r border-black px-3 sm:px-5">
          <BrandLogo className="text-xl sm:text-2xl" />
        </Link>
        <nav className="hidden h-full min-w-0 flex-1 items-stretch md:flex" aria-label="Navigasi utama">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <span className="hidden h-full items-center border-l border-black px-6 font-mono text-[11px] uppercase tracking-[.14em] lg:flex">CPNS / 2024</span>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="ml-auto flex h-full min-w-16 items-center justify-center gap-2 border-l border-black bg-brand-blue px-3 font-mono text-xs font-bold uppercase tracking-[.12em] text-white transition-colors hover:bg-brand-blue-hover md:hidden"
              aria-label="Buka menu navigasi"
            >
              <Menu className="size-5" aria-hidden="true" />
              <span className="hidden min-[380px]:inline">Menu</span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="h-dvh w-[min(90vw,24rem)] gap-0 border-l-2 border-black bg-background p-0 text-foreground shadow-[-8px_0_0_#2143d8] sm:max-w-sm md:hidden"
          >
            <SheetHeader className="grid min-h-20 grid-cols-[1fr_4rem] items-stretch gap-0 border-b-2 border-black bg-brand-blue p-0 text-white">
              <div className="flex min-w-0 flex-col justify-center px-5">
                <span className="font-mono text-[11px] uppercase tracking-[.18em] text-signal">LESINAJA</span>
                <SheetTitle className="mt-1 text-xl font-black uppercase tracking-[-.03em] text-white">Menu utama</SheetTitle>
              </div>
              <SheetClose asChild>
                <button
                  type="button"
                  className="flex min-h-16 items-center justify-center border-l-2 border-black bg-brand-red text-white transition-colors hover:bg-red-700"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="size-6" aria-hidden="true" />
                </button>
              </SheetClose>
            </SheetHeader>

            <nav className="grid overflow-y-auto overscroll-contain" aria-label="Navigasi utama mobile">
              {mobileNav.map(([href, label], index) => {
                const active = isActive(href);
                return (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`group grid min-h-16 grid-cols-[3.25rem_1fr_2rem] items-center border-b border-black px-4 transition-colors focus-visible:z-10 ${
                        active ? "bg-signal text-black" : "bg-warm-white text-black hover:bg-secondary"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-black uppercase tracking-[-.02em]">{label}</span>
                      <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            <div className="mt-auto border-t-2 border-black bg-secondary px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[.14em]">
              Persiapan SKD CPNS / 2024
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
