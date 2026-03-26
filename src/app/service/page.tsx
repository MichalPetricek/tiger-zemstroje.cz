import type { Metadata } from "next";
import ServiceContent from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Servis zemědělské techniky – Opravy, Diagnostika, Náhradní díly",
  description:
    "Profesionální servis zemědělské a stavební techniky. Diagnostika a opravy u zákazníka i v servisu, náhradní díly skladem, zapůjčení náhradní techniky. Certifikované svařování EWT.",
  alternates: {
    canonical: "https://jinma.cz/service",
  },
  openGraph: {
    title: "Servis zemědělské techniky | TIGER CZ",
    description:
      "Profesionální servis a opravy zemědělské techniky. Náhradní díly skladem, 24/7 podpora.",
    url: "https://jinma.cz/service",
  },
};

// JSON-LD Service schema
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Servis zemědělské techniky – TIGER CZ s.r.o.",
  description:
    "Profesionální servis zemědělské a stavební techniky. Diagnostika, opravy, náhradní díly, certifikované svařování.",
  url: "https://jinma.cz/service",
  telephone: "+420602458177",
  email: "zemstroje@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "CZ",
  },
  provider: {
    "@type": "Organization",
    name: "TIGER CZ s.r.o.",
    url: "https://jinma.cz",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skuhrov 13",
    addressLocality: "Železný Brod",
    postalCode: "468 22",
    addressCountry: "CZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "16:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servisní služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostika a opravy",
          description: "Kompletní diagnostika a opravy zemědělské techniky u zákazníka i v servisu",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Náhradní díly",
          description: "Náhradní díly skladem pro traktory TIGER, JINMA, YTO",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Certifikované svařování EWT",
          description: "Profesionální svářečské práce s certifikací EWT",
        },
      },
    ],
  },
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceContent />
    </>
  );
}
