import { getSiteSettings } from "@/lib/content";
import LocationNAP from "@/components/LocationNAP";

export default function Footer() {
  const siteSettings = getSiteSettings();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <LocationNAP location={siteSettings.primaryLocation} />
          <div className="text-sm text-zinc-600">
            <div className="text-base font-semibold text-zinc-900">
              Admissions
            </div>
            <div className="mt-2 space-y-1">
              <a className="block" href="/admissions">
                Admissions Overview
              </a>
              <a className="block" href="/admissions/request-a-tour">
                Request a Tour
              </a>
              <a className="block" href="/admissions/tuition-fees">
                Tuition & Fees
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} First Christian Academy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
