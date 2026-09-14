import Image from "next/image";

import manifest from "@/image-blur-data.json";

const SIZES = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw";

type Asset = { width: number; height: number; blur: string };

type EditorialImageProps = {
  file: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  loading?: "eager" | "lazy";
  /**
   * Crops the photograph into a fixed box. Omit it and the image keeps its own
   * dimensions: the box sizes to the photograph rather than the other way
   * round, and it never renders wider than its own pixels.
   */
  shape?: "wide" | "portrait";
};

export default function EditorialImage({
  file,
  alt,
  priority = false,
  sizes = SIZES,
  loading,
  shape,
}: EditorialImageProps) {
  const asset = (manifest as Record<string, Asset>)[file];
  const blur = asset?.blur;
  const common = {
    src: `/images/${file}`,
    sizes,
    quality: 82,
    priority,
    ...(loading && !priority ? { loading } : {}),
    ...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {}),
    className: "editorial-image",
  };

  // Cropped: the box carries the ratio and next/image fills it.
  if (shape || !asset?.width || !asset?.height) {
    return (
      <div className={`image-placeholder relative${shape ? ` ${shape}` : ""}`}>
        <Image {...common} alt={alt} fill />
      </div>
    );
  }

  // Uncropped: explicit width and height, so the browser reserves the right
  // box before the bytes arrive and CLS stays at zero without a CSS ratio.
  // maxWidth pins it to its own pixel count, so it is never scaled up.
  return (
    <div className="image-placeholder" style={{ maxWidth: asset.width }}>
      <Image
        {...common}
        alt={alt}
        width={asset.width}
        height={asset.height}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
