import fs from "node:fs";
import path from "node:path";

// Drawn from Cormorant Garamond outlines and optically spaced, so the mark does
// not depend on a webfont loading and does not shift when one fails.
// The file already carries role="img" and aria-label. Injecting a second
// aria-label here emitted a duplicate attribute and a real HTML parse error.
const markup = fs.readFileSync(
  path.join(process.cwd(), "app", "_brand", "logotype.svg"),
  "utf8",
);

export default function Logotype({ className = "" }: { className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
}
