/**
 * Regenerates app/_brand/logotype.svg and app/icon.svg from the Cormorant
 * Garamond outlines. Not part of the build: run it by hand when the mark
 * changes, with the font at $SP/cormorant300.ttf.
 *
 *   SP=/path/to/font/dir node scripts/generate-marks.mjs
 */
import opentype from "opentype.js";
import fs from "node:fs";
import { run } from "./mark-paths.mjs";

const SP = process.env.SP;
const font = opentype.parse(fs.readFileSync(`${SP}/cormorant300.ttf`).buffer);

// --- horizontal lockup for the nav and open graph card
const BASE = 100;
const CAP = 33;
const num = run(font, "242", BASE, 0.015, 0, 0);
const capsProbe = run(font, "CONSULTING", CAP, 0.2, 0, 0);
const capsX = num.width + BASE * 0.34;
const caps = run(font, "CONSULTING", CAP, 0.2, capsX, 0);

const total = capsX + capsProbe.width;
const top = -BASE * 0.72;
const height = BASE * 0.74;

const lockup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 ${top} ${total.toFixed(2)} ${height}" fill="currentColor" role="img" aria-label="242 Consulting"><path d="${num.d}"/><path d="${caps.d}"/></svg>`;
fs.writeFileSync(`${SP}/logotype.svg`, lockup);

// --- square favicon: rounded tile, sage keyline, numerals from the same outlines
const ISIZE = 30;
const box = 64;
const digits = run(font, "242", ISIZE, 0.015, 0, 0);
const gx = (box - digits.width) / 2;
// old style figures: the 4 descends, so centre on the ink, not the baseline
const inkTop = -ISIZE * 0.41;
const inkBottom = ISIZE * 0.19;
const gy = box / 2 - (inkTop + inkBottom) / 2;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 ${box} ${box}"><rect width="${box}" height="${box}" rx="16" fill="#0d100e"/><rect x="1.5" y="1.5" width="61" height="61" rx="14.5" fill="none" stroke="#7ba088" stroke-width="1.5"/><g transform="translate(${gx.toFixed(2)} ${gy.toFixed(2)})" fill="#ece7db"><path d="${digits.d}"/></g></svg>`;
fs.writeFileSync(`${SP}/icon.svg`, icon);

for (const [name, svg] of [["logotype", lockup], ["icon", icon]]) {
  const bad = (svg.match(/NaN|Infinity/g) || []).length;
  console.log(name, svg.length, "bytes | non-finite:", bad);
  if (bad) process.exit(1);
}
