import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { works } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/demos`, changeFrequency: "weekly", priority: 0.6 },
    ...works.map((work) => ({
      url: `${site.url}/work/${work.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
