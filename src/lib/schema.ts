import { site, siteUrl } from "./site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.shortName,
  jobTitle: site.role,
  description: site.bio,
  email: `mailto:${site.email}`,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  knowsLanguage: ["en", "ur"],
  knowsAbout: [
    "Academic writing",
    "Thesis development",
    "Literature review",
    "Research methodology",
    "Psychology",
    "APA style",
    "Chicago style",
    "Harvard referencing",
    "English to Urdu translation",
    "Urdu to English translation",
  ],
  sameAs: [site.links.fiverr, site.links.fiverrPro],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: `${site.name} — Academic Writing & Translation`,
  description: site.bio,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email: `mailto:${site.email}`,
  priceRange: "$$",
  areaServed: { "@type": "Place", name: "Worldwide" },
  availableLanguage: ["en", "ur"],
  provider: {
    "@type": "Person",
    name: site.name,
    url: siteUrl,
  },
  serviceType: site.services.map((s) => s.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Academic writing and translation services",
    itemListElement: site.services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  description: site.bio,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
