import Image from "next/image";
import type { ModuleLogosStrip } from "@/lib/types";

export default function LogosStrip({ title, items }: ModuleLogosStrip) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex h-16 w-36 items-center justify-center rounded-2xl border border-zinc-200 bg-white"
          >
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-xs font-semibold text-zinc-600">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
