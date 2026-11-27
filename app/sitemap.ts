import type { MetadataRoute } from "next";
import { sortedDemos } from "@/content/demos";
import { site } from "@/content/site";
import { works } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...(sortedDemos.length > 0
      ? [{ url: `${site.url}/demos`, changeFrequency: "weekly" as const, priority: 0.6 }]
      : []),
    ...works.map((work) => ({
      url: `${site.url}/work/${work.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
