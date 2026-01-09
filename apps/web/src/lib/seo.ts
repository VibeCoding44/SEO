import type { Metadata } from "next";
import type { Page, PageModule, SiteSettings } from "@/lib/types";

export function getBaseUrl() {
  return process.env.SITE_URL ?? "http://localhost:3000";
}

export function buildPagePath(slug: string[]) {
  if (!slug.length) {
    return "/";
  }

  return `/${slug.join("/")}`;
}

export function buildPageUrl(slug: string[]) {
  const baseUrl = getBaseUrl();
  const path = buildPagePath(slug);
  return new URL(path, baseUrl).toString();
}

export function buildPageMetadata(
  page: Page,
  siteSettings: SiteSettings
): Metadata {
  const title = page.seo?.title ?? siteSettings.defaultSeo.title;
  const description =
    page.seo?.description ?? siteSettings.defaultSeo.description;
  const url = buildPageUrl(page.slug);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteSettings.siteName,
      type: "website",
    },
    robots: page.seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export function buildSiteJsonLd(siteSettings: SiteSettings) {
  const location = siteSettings.primaryLocation;
  const streetAddress = location.address2
    ? `${location.address1}, ${location.address2}`
    : location.address1;

  return {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization", "LocalBusiness"],
    name: location.name,
    telephone: location.phone,
    email: location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: location.city,
      addressRegion: location.region,
      postalCode: location.postalCode,
      addressCountry: location.country,
    },
    geo: location.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: location.geo.lat,
          longitude: location.geo.lng,
        }
      : undefined,
    sameAs: siteSettings.sameAs,
  };
}

export function buildFaqJsonLd(modules: PageModule[]) {
  const faqModule = modules.find((module) => module._type === "moduleFAQ");

  if (!faqModule || faqModule._type !== "moduleFAQ") {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqModule.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
