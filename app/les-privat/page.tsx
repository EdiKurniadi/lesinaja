import type { Metadata } from "next";
import { PrivateLessonsClient } from "@/components/private-lessons-client";
import { SiteHeader } from "@/components/site-header";
import "./les-privat.css";

export const metadata: Metadata = {
  title: "Les Privat SKD CPNS Pontianak",
  description: "Belajar TWK, TIU, dan TKP bersama pengajar berpengalaman secara offline di Pontianak atau online.",
};

export const dynamic = "force-static";

export default function PrivateLessonsPage() {
  return (
    <main className="private-landing">
      <SiteHeader />
      <PrivateLessonsClient />
    </main>
  );
}
