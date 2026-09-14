import Image from "next/image";

import blurData from "@/image-blur-data.json";

const SIZES = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw";

type EditorialImageProps = {
  file: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  loading?: "eager" | "lazy";
};

export default function EditorialImage({
  file,
  alt,
  priority = false,
  sizes = SIZES,
  loading,
}: EditorialImageProps) {
  const blur = (blurData as Record<string, string>)[file];

  return (
    <div className="image-placeholder relative">
      <Image
        src={`/images/${file}`}
        alt={alt}
        fill
        sizes={sizes}
        quality={82}
        priority={priority}
        {...(loading && !priority ? { loading } : {})}
        {...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {})}
        className="editorial-image"
      />
    </div>
  );
}
