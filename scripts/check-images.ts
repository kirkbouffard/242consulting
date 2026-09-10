/**
 * Image gate. Runs in prebuild.
 *
 * Every file in /public/images must be WebP, under 350KB and in 3:2. Those are
 * hard errors. Width below 2400px is a warning, not an error: an operator's own
 * photograph at lower resolution still beats a borrowed or missing one. Raise it
 * back to an error by moving the push below from warnings to errors.
 *
 * Missing photographs are also warnings: the page drops a venue tile rather than
 * substituting a stand-in.
 */
import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";

const MAX_BYTES = 350 * 1024;
const MIN_WIDTH = 2400;
const TARGET_RATIO = 3 / 2;
const RATIO_TOLERANCE = 0.02;

// Mirrors the paths referenced in /content/copy.ts.
const REQUIRED = ["hero.webp", "contact.webp"];
const VENUE_TILES = [
  "atlantis.webp",
  "bahamas.webp",
  "celavi.webp",
  "savaya.webp",
  "zumana.webp",
  "desa-kitsune.webp",
];

const imagesDir = path.join(process.cwd(), "public", "images");
const errors: string[] = [];
const warnings: string[] = [];

function listImages(): string[] {
  if (!fs.existsSync(imagesDir)) return [];
  return fs
    .readdirSync(imagesDir)
    .filter((name) => !name.startsWith("."))
    .sort();
}

async function main(): Promise<void> {
  const files = listImages();

  for (const name of files) {
    const file = path.join(imagesDir, name);
    const stat = fs.statSync(file);
    if (!stat.isFile()) continue;

    if (path.extname(name).toLowerCase() !== ".webp") {
      errors.push(`${name}: must be WebP`);
      continue;
    }

    if (stat.size > MAX_BYTES) {
      errors.push(`${name}: ${Math.round(stat.size / 1024)}KB, limit is 350KB`);
    }

    let width = 0;
    let height = 0;
    try {
      const meta = await sharp(file).metadata();
      width = meta.width ?? 0;
      height = meta.height ?? 0;
    } catch {
      errors.push(`${name}: could not be read as an image`);
      continue;
    }

    if (width < MIN_WIDTH) {
      warnings.push(`${name}: ${width}px wide, below the ${MIN_WIDTH}px standard`);
    }

    const ratio = height > 0 ? width / height : 0;
    if (Math.abs(ratio - TARGET_RATIO) > RATIO_TOLERANCE) {
      errors.push(`${name}: ${width}x${height} is not 3:2`);
    }
  }

  for (const name of REQUIRED) {
    if (!files.includes(name)) warnings.push(`${name} is missing, the section renders without art`);
  }

  for (const name of VENUE_TILES) {
    if (!files.includes(name)) warnings.push(`${name} is missing, the tile is dropped from the grid`);
  }

  for (const line of warnings) console.warn(`warn  public/images/${line}`);
  for (const line of errors) console.error(`error public/images/${line}`);

  if (errors.length > 0) {
    console.error(`\ncheck-images: ${errors.length} violation(s).`);
    process.exit(1);
  }

  console.log(`check-images: ${files.length} file(s) checked, no violations.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
