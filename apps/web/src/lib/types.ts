export type Seo = {
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export type Location = {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  geo?: {
    lat: number;
    lng: number;
  };
};

export type SiteSettings = {
  siteName: string;
  defaultSeo: Seo;
  primaryLocation: Location;
  sameAs?: string[];
};

export type ModuleHero = {
  _type: "moduleHero";
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ModuleRichText = {
  _type: "moduleRichText";
  body: string;
  align?: "left" | "center";
};

export type ModuleCardsGrid = {
  _type: "moduleCardsGrid";
  title?: string;
  cards: Array<{
    title: string;
    description: string;
    href?: string;
  }>;
};

export type ModuleCTA = {
  _type: "moduleCTA";
  title: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ModuleFAQ = {
  _type: "moduleFAQ";
  title?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export type ModuleTestimonials = {
  _type: "moduleTestimonials";
  title?: string;
  items: Array<{
    quote: string;
    name: string;
    role?: string;
  }>;
};

export type ModuleStats = {
  _type: "moduleStats";
  title?: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
};

export type ModuleGallery = {
  _type: "moduleGallery";
  title?: string;
  items: Array<{
    alt: string;
    imageUrl: string;
  }>;
};

export type ModuleLogosStrip = {
  _type: "moduleLogosStrip";
  title?: string;
  items: Array<{
    name: string;
    imageUrl?: string;
  }>;
};

export type ModuleLocation = {
  _type: "moduleLocation";
  title?: string;
};

export type ModuleMapEmbed = {
  _type: "moduleMapEmbed";
  title?: string;
  embedUrl: string;
};

export type ModuleRequestTourForm = {
  _type: "moduleRequestTourForm";
  title?: string;
};

export type PageModule =
  | ModuleHero
  | ModuleRichText
  | ModuleCardsGrid
  | ModuleCTA
  | ModuleFAQ
  | ModuleTestimonials
  | ModuleStats
  | ModuleGallery
  | ModuleLogosStrip
  | ModuleLocation
  | ModuleMapEmbed
  | ModuleRequestTourForm;

export type Page = {
  title: string;
  slug: string[];
  seo?: Seo;
  modules: PageModule[];
};
