import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialReaderClient } from "@/components/material-reader-client";
import { MATERIALS } from "@/lib/materials";

export const dynamic = "force-static";

export function generateStaticParams() {
  return MATERIALS.map((material) => ({ id: material.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const material = MATERIALS.find((item) => item.id === params.id);
  return { title: material ? `${material.title} | Materi` : "Materi" };
}

export default function MaterialReaderPage({ params }: { params: { id: string } }) {
  const material = MATERIALS.find((item) => item.id === params.id);
  if (!material) notFound();
  return <MaterialReaderClient material={material} />;
}
