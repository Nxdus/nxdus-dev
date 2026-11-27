import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { getWork, works } from "@/content/work";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Project case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const work = getWork((await params).slug);
  if (!work) notFound();
  return renderOg({ eyebrow: `${site.name} · Case study · ${work.year}`, title: work.title, description: work.description });
}
