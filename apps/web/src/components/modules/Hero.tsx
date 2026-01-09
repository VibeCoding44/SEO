import Link from "next/link";
import type { ModuleHero } from "@/lib/types";

export default function Hero({ title, subtitle, ctaLabel, ctaHref }: ModuleHero) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            {subtitle}
          </p>
        ) : null}
        {ctaLabel && ctaHref ? (
          <div className="mt-8">
            <Link
              className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
              href={ctaHref}
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
