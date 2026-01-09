import type { ModuleRichText } from "@/lib/types";

export default function RichText({ body, align = "left" }: ModuleRichText) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className={`text-base leading-7 text-zinc-700 ${alignment}`}>
        {body}
      </div>
    </section>
  );
}
