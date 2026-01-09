import type { MetadataRoute } from "next";
import { getAllPageSlugs, getPageBySlug } from "@/lib/content";
import { buildPagePath, getBaseUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const disallow = getAllPageSlugs()
    .filter((slug) => {
      const page = getPageBySlug(slug);
      return Boolean(page?.seo?.noIndex);
    })
    .map((slug) => buildPagePath(slug));

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
