import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

// Matches the dark theme tokens in app/globals.css (satori can't read CSS vars).
const colors = { bg: "#0a0a0a", fg: "#fafafa", muted: "#a1a1a1", border: "#262626" };

// Read once at module scope; readFileSync keeps these routes prerenderable.
const fonts = (["Regular", "Medium"] as const).map((w) => ({
  name: "JetBrains Mono",
  data: readFileSync(join(process.cwd(), `assets/fonts/JetBrainsMono-${w}.ttf`)),
  weight: w === "Regular" ? (400 as const) : (500 as const),
  style: "normal" as const,
}));

export function renderOg({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: colors.bg,
          color: colors.fg,
          fontFamily: "JetBrains Mono",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: colors.muted }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 500, lineHeight: 1.1 }}>{title}</div>
          <div style={{ fontSize: 32, color: colors.muted, lineHeight: 1.4 }}>{description}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${colors.border}`,
            paddingTop: 32,
            fontSize: 28,
            color: colors.muted,
          }}
        >
          <span>nxdus.com</span>
          <span>@{site.handle}</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}

export function renderIcon(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.bg,
          color: colors.fg,
          fontFamily: "JetBrains Mono",
          fontSize: size * 0.62,
          fontWeight: 500,
        }}
      >
        N
      </div>
    ),
    { width: size, height: size, fonts },
  );
}
