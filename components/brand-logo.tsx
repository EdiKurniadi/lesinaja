import Image from "next/image";

export function BrandLogo({
  className = "",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-[.18em] font-black leading-none tracking-[-.055em] ${className}`}>
      <span className="relative block h-[.82em] w-[1.11em] shrink-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/les-privat/lesinaja-logo.png"
          width={1555}
          height={384}
          alt=""
          className={`h-full w-auto max-w-none ${inverted ? "brightness-0 invert" : ""}`}
        />
      </span>
      <span>LESINAJA</span>
    </span>
  );
}
