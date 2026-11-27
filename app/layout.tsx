import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.intro,
  openGraph: { siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} dark h-full scheme-dark font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto w-full max-w-2xl px-6 py-16 text-xs/relaxed sm:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
