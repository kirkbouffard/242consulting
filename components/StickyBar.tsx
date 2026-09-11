"use client";

import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";

import { sticky } from "@/content/copy";

// Shown only once the hero has scrolled away, and hidden again over contact,
// where the same two routes are already on screen.
export default function StickyBar() {
  const [heroGone, setHeroGone] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    const contact = document.querySelector("#contact");
    if (!hero || !contact || !("IntersectionObserver" in window)) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroGone(!entry.isIntersecting),
      { threshold: 0 },
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { threshold: 0 },
    );

    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const shown = heroGone && !atContact;

  return (
    <nav className="sticky-bar" data-shown={shown} aria-label="Jump to an offer">
      {sticky.links.map((link, i) => (
        <span key={link.href}>
          {i > 0 ? <span className="sticky-rule" aria-hidden="true" /> : null}
          <a href={link.href} onClick={() => track(link.event)}>
            {link.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
