export type Demo = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-27". The feed is sorted newest first. */
  date: string;
  category: "Web" | "Roblox" | "3D";
  /** Object key in the media bucket, e.g. "lomra-storyboard.mp4". */
  video: string;
  /** Optional poster image key in the same bucket. */
  poster?: string;
  /** Width / height. Defaults to 16 / 9. */
  ratio?: number;
  links?: { label: string; href: string }[];
};

// Public base URL of the SeaweedFS "demos" bucket. It is read at build time
// because /demos is prerendered.
const MEDIA_URL = (process.env.MEDIA_URL ?? "https://media.nxdus.com/demos").replace(/\/$/, "");

export const mediaUrl = (key: string) => `${MEDIA_URL}/${key}`;

// Add clips here after uploading them with scripts/upload-demo.sh. Example:
// {
//   slug: "lomra-storyboard",
//   title: "Storyboard to clip in Lomra",
//   description: "Pick shots from a reference set and render one clip per shot.",
//   date: "2026-11-20",
//   category: "Web",
//   video: "lomra-storyboard.mp4",
//   poster: "lomra-storyboard.jpg",
//   links: [{ label: "Lomra", href: "/work/lomra" }],
// },
const demos: Demo[] = [];

export const sortedDemos = [...demos].sort((a, b) => b.date.localeCompare(a.date));
