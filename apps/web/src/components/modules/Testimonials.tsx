import type { ModuleTestimonials } from "@/lib/types";

export default function Testimonials({ title, items }: ModuleTestimonials) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <blockquote className="text-sm leading-6 text-zinc-600">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-zinc-900">
              {item.name}
              {item.role ? (
                <span className="ml-2 text-xs font-medium text-zinc-500">
                  {item.role}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
