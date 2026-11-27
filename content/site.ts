export const site = {
  name: "Peeranut Sriprathum",
  handle: "nxdus",
  url: "https://nxdus.com",
  intro:
    "Full-stack developer and Applied Computer Science student at KMUTT. I build web apps end to end, from the interface to the server they run on.",
  links: [
    { label: "GitHub", href: "https://github.com/Nxdus" },
    { label: "Email", href: "mailto:paitong1550@gmail.com" },
  ],
};

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Developer Intern",
    org: "Gofive",
    period: "Jun – Aug 2026",
    summary:
      "Built internal full-stack platforms for document workflows and Android kiosk management, plus a shadcn/ui-based design system with 45 components.",
  },
  {
    role: "Frontend Developer",
    org: "STIN Smart Care",
    period: "Sep 2025 – Mar 2026",
    summary:
      "Designed and built Flutter healthcare apps for the Thai Red Cross Society: medication tracking, symptom logs and nurse visit notes.",
  },
  {
    role: "Full-stack Developer",
    org: "Freelance",
    period: "Apr 2025 – Now",
    summary:
      "Developed Amory, a game-server storefront with payments, reconciliation and 2FA; Slipio, a payment-slip OCR app with Google Sheets and Drive export; and APIs plus an admin portal for provisioning Docker-based game servers.",
  },
  {
    role: "B.Sc. Applied Computer Science",
    org: "KMUTT",
    period: "2025 – 2029",
    summary: "King Mongkut's University of Technology Thonburi.",
  },
];
