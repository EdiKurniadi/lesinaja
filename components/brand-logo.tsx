import Image from "next/image";

export function BrandLogo({
  className = "",
  markClassName = "",
  wordmarkClassName = "",
  inverted = false,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  inverted?: boolean;
}) {
  return (
    <span className={`inline-flex font-black leading-none tracking-[-.055em] ${className}`}>
      <span className={`relative block shrink-0 overflow-hidden ${markClassName}`} aria-hidden="true">
        <Image
          src="/les-privat/lesinaja-logo.png"
          width={1555}
          height={384}
          alt=""
          className={`h-full w-auto max-w-none ${inverted ? "brightness-0 invert" : ""}`}
        />
      </span>
      <span className={wordmarkClassName}>LESINAJA</span>
    </span>
  );
}
