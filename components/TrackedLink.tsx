"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  event: string;
  className?: string;
  external?: boolean;
  children: ReactNode;
};

// Thin client wrapper so the offer sections stay server rendered and only the
// click handler ships to the browser.
export default function TrackedLink({
  href,
  event,
  className,
  external = false,
  children,
}: TrackedLinkProps) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => track(event)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
