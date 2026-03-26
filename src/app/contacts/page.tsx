import type { Metadata } from "next";
import ContactsContent from "@/components/ContactsContent";

export const metadata: Metadata = {
  title: "Kontakt – TIGER CZ s.r.o. | Zemědělské stroje",
  description:
    "Kontaktujte nás – TIGER CZ s.r.o., Skuhrov 13, 468 22 Železný Brod. Obchod: +420 601 017 000, Servis: +420 602 458 177. E-mail: zemstroje@gmail.com. Po-Pá 9:00-16:00.",
  alternates: {
    canonical: "https://jinma.cz/contacts",
  },
  openGraph: {
    title: "Kontakt – TIGER CZ s.r.o.",
    description:
      "Kontaktujte nás. Obchod: +420 601 017 000, Servis: +420 602 458 177. Skuhrov 13, Železný Brod.",
    url: "https://jinma.cz/contacts",
  },
};

// JSON-LD for contact page with LocalBusiness
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TIGER CZ s.r.o.",
  description: "Prodej a servis zemědělské a stavební techniky",
  image: "https://jinma.cz/images/tiger-504/7.jpg",
  url: "https://jinma.cz",
  telephone: "+420601017000",
  email: "zemstroje@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skuhrov 13",
    addressLocality: "Železný Brod",
    postalCode: "468 22",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.6441,
    longitude: 15.2547,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+420601017000",
      contactType: "sales",
      areaServed: "CZ",
      availableLanguage: "Czech",
    },
    {
      "@type": "ContactPoint",
      telephone: "+420602458177",
      contactType: "customer service",
      areaServed: "CZ",
      availableLanguage: "Czech",
    },
  ],
  priceRange: "199 000 Kč – 2 300 000 Kč",
  hasMap: "https://maps.google.com/?q=50.6441,15.2547",
};

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <ContactsContent />
    </>
  );
}
