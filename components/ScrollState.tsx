"use client";

import { useEffect } from "react";

// Headless. Flags the document once the page has moved, so the nav can take
// its scrolled treatment in CSS without making Nav a client component: Nav
// reads the logotype off disk at build time and has to stay on the server.
export default function ScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      root.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
