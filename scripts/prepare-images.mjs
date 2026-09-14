/**
 * Turns source photography in public/images into the optimized WebP the page
 * renders, plus the blur placeholders it imports.
 *
 * Missing sources are skipped with a warning rather than failing: the page
 * degrades to a typographic entry wherever a photograph does not exist yet.
 * Runs from prebuild, so image-blur-data.json always exists before next build.
 */
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");

// target file -> source file, both inside public/images
const sources = {
  "hero.webp": "savaya-official.jpg",
  "atlantis.webp": "atlantis-source.jpg",
  "bahamas-venue.webp": "bahamas-venue-source.jpg",
  "celavi.webp": "celavi-source.jpg",
  "savaya.webp": "savaya-official.jpg",
  "kitsune.webp": "kitsune-source.jpg",
  "zumana.webp": "zumana.webp",
  "contact.webp": "savaya-cube-official.webp",
};

// Portraits are cropped 4:5 rather than 3:2. Treatment matches the venue
// tiles, which carry none, so the crop is the only change made here.
// Drop the untouched headshot in as the source; this does the rest.
const portraits = {
  "kirk.webp": "kirk-source.jpg",
};

await fs.mkdir(imagesDir, { recursive: true });

const built = [];
const skipped = [];

for (const [target, source] of Object.entries(sources)) {
  const sourcePath = path.join(imagesDir, source);
  const targetPath = path.join(imagesDir, target);

  // A finished asset that is its own source is left alone. Re-encoding it on
  // every build would compound generation loss and make builds nondeterministic.
  if (path.resolve(sourcePath) === path.resolve(targetPath)) {
    if (existsSync(targetPath)) built.push(target);
    else skipped.push(`${target} (no ${source})`);
    continue;
  }

  if (!existsSync(sourcePath)) {
    if (existsSync(targetPath)) built.push(target);
    else skipped.push(`${target} (no ${source})`);
    continue;
  }

  const temp = `${targetPath}.tmp`;
  await sharp(sourcePath)
    .resize(2400, 1600, { fit: "cover", withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(temp);
  await fs.rename(temp, targetPath);
  built.push(target);
}

for (const [target, source] of Object.entries(portraits)) {
  const sourcePath = path.join(imagesDir, source);
  const targetPath = path.join(imagesDir, target);

  if (!existsSync(sourcePath)) {
    if (existsSync(targetPath)) built.push(target);
    else skipped.push(`${target} (no ${source})`);
    continue;
  }

  const temp = `${targetPath}.tmp`;
  await sharp(sourcePath)
    // attention keeps the face in frame rather than trusting the centre
    .resize(1000, 1250, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 82 })
    .toFile(temp);
  await fs.rename(temp, targetPath);
  built.push(target);
}

// Poster for the hero video, only where a hero still exists.
const heroPath = path.join(imagesDir, "hero.webp");
if (existsSync(heroPath)) {
  await sharp(heroPath)
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 82 })
    .toFile(path.join(imagesDir, "hero-poster.jpg"));
}

const blur = {};
for (const target of built) {
  const file = path.join(imagesDir, target);
  // Match the placeholder to the asset's own shape; a 16x10 blur behind a 4:5
  // portrait stretches into a smear.
  const meta = await sharp(file).metadata();
  const height = Math.max(1, Math.round((16 * (meta.height ?? 10)) / (meta.width ?? 16)));
  const buffer = await sharp(file)
    .resize(16, height, { fit: "cover" })
    .webp({ quality: 20 })
    .toBuffer();
  blur[target] = `data:image/webp;base64,${buffer.toString("base64")}`;
}
await fs.writeFile(
  path.join(root, "image-blur-data.json"),
  `${JSON.stringify(blur, null, 2)}\n`,
);

for (const line of skipped) console.warn(`warn  prepare-images: skipped ${line}`);
console.log(`prepare-images: ${built.length} asset(s) ready, ${skipped.length} awaiting source.`);
