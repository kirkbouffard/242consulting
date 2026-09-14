import type { MetadataRoute } from "next";

import { site } from "@/content/copy";

// The five AI crawlers are named rather than left to the wildcard so the
// position is stated. Same directive as everyone else: allow. There is nothing
// on the site worth withholding from a model that a search engine already has.
const AI_CRAWLERS = ["GPTBot", "ClaudeBot", "PerplexityBot", "CCBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
