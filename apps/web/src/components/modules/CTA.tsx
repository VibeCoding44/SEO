import Link from "next/link";
import type { ModuleCTA } from "@/lib/types";

export default function CTA({ title, body, ctaLabel, ctaHref }: ModuleCTA) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-3xl bg-zinc-900 px-10 py-12 text-white">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {body ? (
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-200">
            {body}
          </p>
        ) : null}
        {ctaLabel && ctaHref ? (
          <Link
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
            href={ctaHref}
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
