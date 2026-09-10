import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // EditorialImage renders at quality 82; 75 is the Next default.
    qualities: [75, 82],
  },
};

export default nextConfig;
