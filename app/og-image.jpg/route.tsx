import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";
import sharp from "sharp";

import { hero } from "@/content/copy";

export const dynamic = "force-static";

const WIDTH = 1200;
const HEIGHT = 630;
const MARK_WIDTH = 420;

async function heroDataUri(): Promise<string | null> {
  const file = path.join(process.cwd(), "public", hero.image.replace(/^\//, ""));
  try {
    const source = await fs.readFile(file);
    const jpeg = await sharp(source)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
      .jpeg({ quality: 78 })
      .toBuffer();
    return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
  } catch {
    return null;
  }
}

// The mark is vector in the page and rasterized here, so both come from one file.
async function markDataUri(): Promise<{ uri: string; height: number }> {
  const file = path.join(process.cwd(), "app", "_brand", "logotype.svg");
  const svg = (await fs.readFile(file, "utf8")).replace(/currentColor/g, "#ece7db");
  const png = await sharp(Buffer.from(svg), { density: 600 })
    .resize({ width: MARK_WIDTH })
    .png()
    .toBuffer();
  const meta = await sharp(png).metadata();
  return { uri: `data:image/png;base64,${png.toString("base64")}`, height: meta.height ?? 0 };
}

export async function GET() {
  const [background, mark] = await Promise.all([heroDataUri(), markDataUri()]);

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0d100e",
        }}
      >
        {background ? (
          // next/og renders through satori, which only understands plain img.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={background}
            width={WIDTH}
            height={HEIGHT}
            style={{ position: "absolute", top: 0, left: 0 }}
            alt=""
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(13,16,14,0.55)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mark.uri}
          width={MARK_WIDTH}
          height={mark.height}
          style={{ position: "absolute", bottom: 68, left: 72 }}
          alt=""
        />
      </div>
    ),
    { width: WIDTH, height: HEIGHT },
  );

  const png = Buffer.from(await image.arrayBuffer());
  const jpeg = await sharp(png).jpeg({ quality: 88, progressive: true }).toBuffer();

  return new Response(new Uint8Array(jpeg), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
