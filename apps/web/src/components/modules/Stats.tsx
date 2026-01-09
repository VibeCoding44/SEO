import type { ModuleStats } from "@/lib/types";

export default function Stats({ title, stats }: ModuleStats) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={`${stat.label}-${index}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 text-center"
          >
            <div className="text-3xl font-semibold text-zinc-900">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-medium text-zinc-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
