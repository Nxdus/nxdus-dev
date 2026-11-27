"use client";

import { useEffect, useRef } from "react";

// shadcn has no video component. This plays a muted loop only while it is on
// screen, and leaves playback to the viewer when they prefer reduced motion.
export function DemoVideo({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={title}
      muted
      loop
      playsInline
      controls
      preload="none"
      className="size-full bg-muted object-cover"
    />
  );
}
