import { getSiteSettings } from "@/lib/content";
import type { ModuleLocation } from "@/lib/types";
import LocationNAP from "@/components/LocationNAP";

export default function Location({ title }: ModuleLocation) {
  const siteSettings = getSiteSettings();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8">
        {title ? (
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h2>
        ) : null}
        <div className="mt-4">
          <LocationNAP location={siteSettings.primaryLocation} />
        </div>
      </div>
    </section>
  );
}
