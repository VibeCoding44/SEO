import Image from "next/image";
import type { ModuleGallery } from "@/lib/types";

export default function Gallery({ title, items }: ModuleGallery) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
          >
            <Image
              src={item.imageUrl}
              alt={item.alt}
              width={600}
              height={400}
              className="h-48 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
