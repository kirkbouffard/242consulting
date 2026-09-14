import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { hero, site } from "@/content/copy";

// Generated rather than shipped as a flat file, so the card is built from the
// same tokens and the same typeface as the page and cannot drift from the
// palette the way the old static jpeg did.
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const IVORY = "#f7f3eb";
const ESPRESSO = "#2a211b";

const MARK_WIDTH = 500;
// from the viewBox on logotype.svg, so the mark keeps its own proportions
const MARK_RATIO = 74 / 429.24;

const brandDir = path.join(process.cwd(), "app", "_brand");

// Cormorant Garamond at weight 300, the display weight the page loads,
// instanced from the variable original and subset to latin. Satori takes ttf,
// not the woff2 next/font serves, so the card carries its own copy.
const cormorant = await fs.readFile(path.join(brandDir, "cormorant-300.ttf"));

// The nav renders this file as inline SVG off disk. Satori cannot resolve
// currentColor, so the one colour it inherits is set explicitly here.
const markSvg = (await fs.readFile(path.join(brandDir, "logotype.svg"), "utf8")).replace(
  /currentColor/g,
  ESPRESSO,
);
const markUri = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: IVORY,
          // optical centre sits above the geometric one, so the block is
          // nudged up rather than measured to the middle
          paddingBottom: 46,
        }}
      >
        <img
          src={markUri}
          width={MARK_WIDTH}
          height={Math.round(MARK_WIDTH * MARK_RATIO)}
          alt=""
        />
        <div
          style={{
            marginTop: 44,
            fontFamily: "Cormorant Garamond",
            fontSize: 42,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: ESPRESSO,
            textAlign: "center",
          }}
        >
          {hero.heading}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Cormorant Garamond", data: cormorant, weight: 300, style: "normal" }],
    },
  );
}
