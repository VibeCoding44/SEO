import type { ModuleFAQ } from "@/lib/types";

export default function FAQ({ title, items }: ModuleFAQ) {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <details
            key={`${item.question}-${index}`}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
