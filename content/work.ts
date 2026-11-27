export type Work = {
  slug: string;
  title: string;
  description: string;
  year: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

// Order = order on the home page. Body copy lives in content/work/<slug>.mdx.
export const works: Work[] = [
  {
    slug: "lomra",
    title: "Lomra",
    description: "Local-first AI canvas for images, video and 3D",
    year: "2026",
    stack: ["Electron", "Next.js", "Three.js", "Ollama", "Whisper"],
    links: [{ label: "GitHub", href: "https://github.com/Nxdus/lomra-app" }],
  },
  {
    slug: "acs-grader",
    title: "ACS Grader",
    description: "Programming contest and auto-grading platform",
    year: "2026",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Judge0", "Better Auth"],
    links: [
      { label: "Live", href: "https://acs.nxdus.space" },
      { label: "GitHub", href: "https://github.com/Nxdus/acs-grader" },
    ],
  },
  {
    slug: "amory",
    title: "Amory",
    description: "Game-server storefront with a separate admin app",
    year: "2026",
    stack: ["Next.js", "NestJS", "PostgreSQL", "MySQL", "Coolify"],
  },
  {
    slug: "krk-story",
    title: "KRK Story",
    description: "Minecraft server and launcher pack manager",
    year: "2026",
    stack: ["Next.js", "Express", "Docker", "Prisma", "PostgreSQL"],
  },
  {
    slug: "slipio",
    title: "Slipio",
    description: "Payment-slip OCR with Google Sheets export",
    year: "2026",
    stack: ["Next.js", "NestJS", "PaddleOCR", "PostgreSQL"],
  },
  {
    slug: "langkrua",
    title: "Langkrua",
    description: "Kitchen stock, recipe costing and orders on LINE",
    year: "2026",
    stack: ["Next.js", "LINE LIFF", "Prisma", "Stripe"],
  },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
