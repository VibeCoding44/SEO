import type { PageModule } from "@/lib/types";
import Hero from "@/components/modules/Hero";
import RichText from "@/components/modules/RichText";
import CardsGrid from "@/components/modules/CardsGrid";
import CTA from "@/components/modules/CTA";
import FAQ from "@/components/modules/FAQ";
import Testimonials from "@/components/modules/Testimonials";
import Stats from "@/components/modules/Stats";
import Gallery from "@/components/modules/Gallery";
import LogosStrip from "@/components/modules/LogosStrip";
import Location from "@/components/modules/Location";
import MapEmbed from "@/components/modules/MapEmbed";
import RequestTourForm from "@/components/modules/RequestTourForm";

export default function ModuleRenderer({ module }: { module: PageModule }) {
  switch (module._type) {
    case "moduleHero":
      return <Hero {...module} />;
    case "moduleRichText":
      return <RichText {...module} />;
    case "moduleCardsGrid":
      return <CardsGrid {...module} />;
    case "moduleCTA":
      return <CTA {...module} />;
    case "moduleFAQ":
      return <FAQ {...module} />;
    case "moduleTestimonials":
      return <Testimonials {...module} />;
    case "moduleStats":
      return <Stats {...module} />;
    case "moduleGallery":
      return <Gallery {...module} />;
    case "moduleLogosStrip":
      return <LogosStrip {...module} />;
    case "moduleLocation":
      return <Location {...module} />;
    case "moduleMapEmbed":
      return <MapEmbed {...module} />;
    case "moduleRequestTourForm":
      return <RequestTourForm />;
    default:
      return null;
  }
}
