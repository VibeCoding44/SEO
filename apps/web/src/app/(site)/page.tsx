import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ModuleRenderer from "@/components/ModuleRenderer";
import JsonLd from "@/components/JsonLd";
import { getPageBySlug, getSiteSettings } from "@/lib/content";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const page = getPageBySlug([]);

  if (!page) {
    return {};
  }

  const siteSettings = getSiteSettings();
  return buildPageMetadata(page, siteSettings);
}

export default function HomePage() {
  const page = getPageBySlug([]);

  if (!page) {
    notFound();
  }

  const faqJsonLd = buildFaqJsonLd(page.modules);

  return (
    <div className="flex flex-col">
      {faqJsonLd ? <JsonLd data={faqJsonLd} id="faq-jsonld" /> : null}
      {page.modules.map((module, index) => (
        <ModuleRenderer key={`${module._type}-${index}`} module={module} />
      ))}
    </div>
  );
}
