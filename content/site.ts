export const site = {
  name: "Peeranut Sriprathum",
  handle: "nxdus",
  url: "https://nxdus.com",
  intro:
    "Full-stack developer and Applied Computer Science student at KMUTT. I build web apps end to end, from interface design to deployment.",
  links: [
    { label: "GitHub", href: "https://github.com/Nxdus" },
    { label: "Email", href: "mailto:paitong1550@gmail.com" },
  ],
};

export type ExperienceEntry = {
  title: string;
  period: string;
  summary: string;
};

export const experience: ExperienceEntry[] = [
  {
    title: "Software Developer Intern at Gofive",
    period: "Jun – Aug 2026",
    summary:
      "Built internal tools for document workflows and Android kiosk management. I also built a design system with shadcn/ui.",
  },
  {
    title: "Frontend Developer at STIN Smart Care",
    period: "Sep 2025 – Mar 2026",
    summary:
      "Designed and built Flutter apps for the Thai Red Cross Society to track medication, log symptoms, and record notes from nurse visits.",
  },
  {
    title: "Freelance Full-Stack Developer",
    period: "Apr 2025 – Present",
    summary:
      "Built Amory, a game-server storefront with payments, reconciliation, and two-factor authentication. I also built Slipio for Thai bank slip OCR and Google Sheets export, and an API and admin portal for provisioning Docker-based game servers.",
  },
  {
    title: "B.Sc. in Applied Computer Science at KMUTT",
    period: "2025 – Present",
    summary: "King Mongkut's University of Technology Thonburi.",
  },
];
