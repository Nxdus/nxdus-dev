export type Demo = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-27". The feed is sorted newest first. */
  date: string;
  category: "Web" | "App";
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
// Uploaded files are cached for a year, so bump the -vN suffix when replacing one.
const demos: Demo[] = [
  {
    slug: "amory-storefront",
    title: "Amory storefront: cart and coupons",
    description: "Browse a server's store, add items to the cart, and apply a coupon on top of a running campaign discount.",
    date: "2026-11-28",
    category: "Web",
    video: "amory-store-v1.mp4",
    poster: "amory-store-v1.jpg",
    ratio: 16 / 10,
    links: [{ label: "Amory", href: "/work/amory" }],
  },
  {
    slug: "amory-admin",
    title: "Amory admin: catalog and promotions",
    description: "The staff side: manage products, campaigns, and coupons, then check sales in statistics.",
    date: "2026-11-28",
    category: "Web",
    video: "amory-admin-v1.mp4",
    poster: "amory-admin-v1.jpg",
    ratio: 16 / 10,
    links: [{ label: "Amory", href: "/work/amory" }],
  },
];

export const sortedDemos = [...demos].sort((a, b) => b.date.localeCompare(a.date));
