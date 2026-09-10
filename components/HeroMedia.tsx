"use client";

import { useCallback, useState, useSyncExternalStore } from "react";

import EditorialImage from "@/components/EditorialImage";
import { hero } from "@/content/copy";

const QUERY = "(max-width: 767px), (prefers-reduced-motion: reduce)";

function useStillPreferred(): boolean {
  const subscribe = useCallback((notify: () => void) => {
    const media = window.matchMedia(QUERY);
    media.addEventListener("change", notify);
    return () => media.removeEventListener("change", notify);
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

export default function HeroMedia({ hasVideo, hasImage }: { hasVideo: boolean; hasImage: boolean }) {
  const stillPreferred = useStillPreferred();
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = hasVideo && !stillPreferred && !videoFailed;

  if (showVideo) {
    return (
      <video
        className="editorial-image hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={hasImage ? hero.poster : undefined}
        aria-label={hero.alt}
        onError={() => setVideoFailed(true)}
      >
        <source src={hero.video} type="video/mp4" />
      </video>
    );
  }

  if (hasImage) {
    return <EditorialImage file="hero.webp" alt={hero.alt} priority sizes="100vw" />;
  }

  return null;
}
