import type { Metadata } from "next";
import { WebMcpBridge } from "@/components/webmcp-bridge";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "LesinAja — Persiapan SKD CPNS", template: "%s — LesinAja" },
  description: "Belajar materi, drill soal, dan try out SKD CPNS dalam satu tempat.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}<WebMcpBridge /></body>
    </html>
  );
}
