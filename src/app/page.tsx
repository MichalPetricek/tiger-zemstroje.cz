import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getProducts, getNews } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "TIGER CZ s.r.o. – Zemědělské stroje | Traktory, Bagry, Nakladače",
  description:
    "Nejlevnější traktory na českém trhu. TIGER 504 za 199 000 Kč. Přímý dovoz zemědělské a stavební techniky – traktory TIGER, JINMA, YTO, bagry BAT, nakladače MANITECH. 2 roky záruka, servis v ČR.",
  alternates: {
    canonical: "https://jinma.cz",
  },
  openGraph: {
    title: "TIGER CZ s.r.o. – Zemědělské stroje | Traktory, Bagry, Nakladače",
    description:
      "Nejlevnější traktory na českém trhu. TIGER 504 za 199 000 Kč. Přímý dovoz, 2 roky záruka, servis v ČR.",
    url: "https://jinma.cz",
    images: [
      {
        url: "/images/tiger-504/7.jpg",
        width: 1200,
        height: 630,
        alt: "TIGER 504 Traktor – nejlevnější traktor 50 HP na českém trhu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIGER CZ s.r.o. – Zemědělské stroje",
    description:
      "Nejlevnější traktory na českém trhu. TIGER 504 za 199 000 Kč. Přímý dovoz, 2 roky záruka.",
    images: ["/images/tiger-504/7.jpg"],
  },
};

// JSON-LD for the homepage featuring the main product + local business
const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TIGER CZ s.r.o. – Zemědělské stroje",
    description:
      "Prodej zemědělské a stavební techniky – traktory, bagry, nakladače. Přímý dovoz od výrobce.",
    url: "https://jinma.cz",
    mainEntity: {
      "@type": "Product",
      name: "TIGER 504 Traktor",
      description: "Nejlevnější traktor s výkonem 50 HP na českém trhu",
      image: "https://jinma.cz/images/tiger-504/7.jpg",
      offers: {
        "@type": "Offer",
        price: "199000",
        priceCurrency: "CZK",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "TIGER CZ s.r.o.",
        },
      },
      brand: {
        "@type": "Brand",
        name: "TIGER",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TIGER CZ s.r.o.",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
    priceRange: "199 000 Kč – 2 300 000 Kč",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TIGER CZ s.r.o.",
    url: "https://jinma.cz",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jinma.cz/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default async function HomePage() {
  const products = await getProducts();
  const news = await getNews(true);

  return (
    <>
      {homeJsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <HomeContent products={products} news={news} />
    </>
  );
}
