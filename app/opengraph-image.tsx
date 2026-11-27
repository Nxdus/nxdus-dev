import { site } from "@/content/site";
import { ogSize, renderOg } from "@/lib/og";

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Portfolio", title: site.name, description: site.intro });
}
