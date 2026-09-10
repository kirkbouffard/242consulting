import fs from "node:fs";
import path from "node:path";

import { nav } from "@/content/copy";

// Drawn from Cormorant Garamond outlines and optically spaced, so the mark does
// not depend on a webfont loading and does not shift when one fails.
const markup = fs
  .readFileSync(path.join(process.cwd(), "app", "_brand", "logotype.svg"), "utf8")
  .replace(/^<svg /, `<svg aria-label="${nav.wordmark}" `);

export default function Logotype({ className = "" }: { className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
}
