"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const prefersReducedMotion = () => matchMedia(QUERY).matches;

// shadcn has no video component. Like a GIF, this plays a muted loop with no
// controls while it is on screen. Viewers who prefer reduced motion get
// controls and no autoplay instead.
export function DemoVideo({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(subscribe, prefersReducedMotion, () => false);

  useEffect(() => {
    const video = ref.current;
    if (!video || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={title}
      muted
      loop
      playsInline
      controls={reducedMotion}
      preload="metadata"
      className="size-full bg-muted object-cover"
    />
  );
}
