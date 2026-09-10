"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroMediaProps = {
  src: string;
  alt: string;
};

/** Hero still with a parallax shift capped at 6% of the viewport height. */
export default function HeroMedia({ src, alt }: HeroMediaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const limit = window.innerHeight * 0.06;
      const offset = Math.min(window.scrollY * 0.18, limit);
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 will-change-transform">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,17,16,0.92),rgba(18,17,16,0.45)_55%,rgba(18,17,16,0.6))]" />
    </div>
  );
}
