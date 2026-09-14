import type { MetadataRoute } from "next";

import { site } from "@/content/copy";

// Two routes. /welcome is deliberately absent: nothing links to it and it is
// noindex. NOTE: /terms is also noindex (app/terms/page.tsx), so listing it
// here submits a URL that will not be indexed. It is listed on instruction.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
