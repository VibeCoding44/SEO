import type { MetadataRoute } from "next";
import { getAllPageSlugs, getPageBySlug } from "@/lib/content";
import { buildPageUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllPageSlugs()
    .map((slug) => {
      const page = getPageBySlug(slug);

      if (!page || page.seo?.noIndex) {
        return null;
      }

      return {
        url: buildPageUrl(slug),
        lastModified: new Date(),
      };
    })
    .filter((entry): entry is MetadataRoute.Sitemap[0] => Boolean(entry));
}
