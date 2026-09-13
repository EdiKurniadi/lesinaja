import Image from "next/image";
import { StaticLink as Link } from "@/components/static-link";
import { LESINAJA_INSTAGRAM_URL, LESINAJA_WHATSAPP_URL } from "@/lib/contact";

export function BrandFooter({
  containerClassName = "page-shell",
}: {
  containerClassName?: string;
}) {
  return (
    <footer className="bg-foreground pb-20 pt-9 text-warm-white">
      <div className={containerClassName}>
        <div className="grid gap-[18px] border-t border-white/35 pt-5 text-xs uppercase tracking-[.05em] md:grid-cols-[1fr_auto_auto] md:gap-10">
          <div>
            <Link href="/" aria-label="LesinAja — Beranda" className="inline-block focus-visible:outline-signal">
              <Image
                src="/les-privat/lesinaja-logo.png"
                width={1555}
                height={401}
                alt="LesinAja"
                className="mb-3 h-auto w-[180px] brightness-0 invert"
              />
            </Link>
            <span className="block text-white/65">Bimbel SKD CPNS · Pontianak</span>
          </div>
          <div>
            <span className="text-white/60">WhatsApp</span><br />
            <a className="border-b border-white/55 transition-colors hover:text-signal" href={LESINAJA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">0812 6369 9885</a>
          </div>
          <div>
            <span className="text-white/60">Instagram</span><br />
            <a className="border-b border-white/55 transition-colors hover:text-signal" href={LESINAJA_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@lesinaja</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/20 pt-5 font-mono text-[11px] uppercase tracking-[.1em] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LesinAja™. All rights reserved.</p>
          <p>Platform belajar mandiri & bimbingan belajar SKD CPNS.</p>
        </div>
      </div>
    </footer>
  );
}
