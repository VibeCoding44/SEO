import type { ModuleMapEmbed } from "@/lib/types";

export default function MapEmbed({ title, embedUrl }: ModuleMapEmbed) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
        <iframe
          className="h-80 w-full"
          src={embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Campus map"
        />
      </div>
    </section>
  );
}
