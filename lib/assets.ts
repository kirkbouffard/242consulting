import fs from "node:fs";
import path from "node:path";

import { site } from "@/content/copy";

const publicDir = path.join(process.cwd(), "public");

/** True when a /public path exists on disk at build time. */
export function assetExists(publicPath: string): boolean {
  if (!publicPath) return false;
  return fs.existsSync(path.join(publicDir, publicPath.replace(/^\//, "")));
}

export function mailto(subject?: string): string {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}
