import siteSettingsData from "@/content/siteSettings.json";
import pagesData from "@/content/pages.json";
import type { Page, SiteSettings } from "@/lib/types";

const siteSettings = siteSettingsData as SiteSettings;
const pages = pagesData as Page[];

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}

export function getPageBySlug(slug: string[]): Page | undefined {
  return pages.find((page) => slug.join("/") === page.slug.join("/"));
}

export function getAllPageSlugs(): string[][] {
  return pages.map((page) => page.slug);
}
