import Link from "next/link";
import type { ModuleCardsGrid } from "@/lib/types";

export default function CardsGrid({ title, cards }: ModuleCardsGrid) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {card.description}
            </p>
            {card.href ? (
              <Link
                className="mt-4 inline-flex text-sm font-semibold text-zinc-900"
                href={card.href}
              >
                Learn more
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
