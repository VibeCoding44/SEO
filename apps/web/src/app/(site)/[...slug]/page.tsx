import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ModuleRenderer from "@/components/ModuleRenderer";
import JsonLd from "@/components/JsonLd";
import { getAllPageSlugs, getPageBySlug, getSiteSettings } from "@/lib/content";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllPageSlugs()
    .filter((slug) => slug.length > 0)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {};
  }

  const siteSettings = getSiteSettings();
  return buildPageMetadata(page, siteSettings);
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = getPageBySlug(slug);

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
