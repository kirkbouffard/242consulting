import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";
import sharp from "sharp";

import { hero, nav } from "@/content/copy";

export const dynamic = "force-static";

const WIDTH = 1200;
const HEIGHT = 630;

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

export async function GET() {
  const [font, background] = await Promise.all([
    fs.readFile(path.join(process.cwd(), "app", "_fonts", "CormorantGaramond-Light.woff")),
    heroDataUri(),
  ]);

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#121110",
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
            backgroundColor: "rgba(18,17,16,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 72,
            display: "flex",
            fontFamily: "Cormorant Garamond",
            fontSize: 64,
            color: "#EDE6DA",
            letterSpacing: "0.02em",
          }}
        >
          {nav.wordmark}
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [{ name: "Cormorant Garamond", data: font, weight: 300, style: "normal" }],
    },
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
