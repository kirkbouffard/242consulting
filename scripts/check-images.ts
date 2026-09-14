/**
 * Image gate. Runs in prebuild, after prepare-images.
 *
 * Only the rendered targets are checked. Source photography and generated
 * posters live in the same directory and are ignored here.
 *
 * A target must be WebP, under 350KB and in 3:2. Those are hard errors. Width
 * below 2400px is a warning: an operator's own photograph at lower resolution
 * still beats a borrowed or missing one. Move the push below from warnings to
 * errors to tighten it again.
 *
 * Missing photographs are warnings too: the page falls back to a typographic
 * entry rather than substituting a stand-in.
 */
import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";

const MAX_BYTES = 350 * 1024;
const MIN_WIDTH = 2400;
const TARGET_RATIO = 3 / 2;
const RATIO_TOLERANCE = 0.02;

// Mirrors the files referenced in /content/copy.ts.
const BACKGROUNDS = ["hero.webp", "contact.webp"];
const VENUE_TILES = [
  "atlantis.webp",
  "bahamas-venue.webp",
  "celavi.webp",
  "savaya.webp",
  "kitsune.webp",
  "zumana.webp",
];
const TARGETS = [...BACKGROUNDS, ...VENUE_TILES];

const imagesDir = path.join(process.cwd(), "public", "images");
const errors: string[] = [];
const warnings: string[] = [];

async function main(): Promise<void> {
  let checked = 0;

  for (const name of TARGETS) {
    const file = path.join(imagesDir, name);

    if (!fs.existsSync(file)) {
      warnings.push(
        BACKGROUNDS.includes(name)
          ? `${name} is missing, the section renders without art`
          : `${name} is missing, the tile falls back to a typographic entry`,
      );
      continue;
    }

    checked += 1;
    const { size } = fs.statSync(file);

    if (path.extname(name).toLowerCase() !== ".webp") {
      errors.push(`${name}: must be WebP`);
      continue;
    }

    if (size > MAX_BYTES) {
      errors.push(`${name}: ${Math.round(size / 1024)}KB, limit is 350KB`);
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

  for (const line of warnings) console.warn(`warn  public/images/${line}`);
  for (const line of errors) console.error(`error public/images/${line}`);

  if (errors.length > 0) {
    console.error(`\ncheck-images: ${errors.length} violation(s).`);
    process.exit(1);
  }

  console.log(`check-images: ${checked} target(s) checked, no violations.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
