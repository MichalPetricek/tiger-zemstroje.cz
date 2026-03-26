import type { Metadata } from "next";
import RentalContent from "@/components/RentalContent";

export const metadata: Metadata = {
  title: "Pronájem traktorů – TIGER 504 | Vyzkoušejte před koupí",
  description:
    "Pronájem traktoru TIGER 504 s výkonem 50 HP. Vratná kauce 10 000 Kč, pojištění v ceně, zvýhodnění při následné koupi. Vyzkoušejte si traktor před koupí.",
  alternates: {
    canonical: "https://jinma.cz/rental",
  },
  openGraph: {
    title: "Pronájem traktorů TIGER 504 | TIGER CZ",
    description:
      "Pronájem traktoru TIGER 504. Vratná kauce, pojištění v ceně, zvýhodnění při následné koupi.",
    url: "https://jinma.cz/rental",
  },
};

// JSON-LD RentalService schema
const rentalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Pronájem traktoru TIGER 504",
  description:
    "Pronájem traktoru TIGER 504 s výkonem 50 HP. Vratná kauce 10 000 Kč, pojištění v ceně.",
  url: "https://jinma.cz/rental",
  image: "https://jinma.cz/images/tiger-504/7.jpg",
  brand: {
    "@type": "Brand",
    name: "TIGER",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "CZK",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "TIGER CZ s.r.o.",
      url: "https://jinma.cz",
    },
    businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
    description: "Vratná kauce 10 000 Kč, pojištění v ceně, zvýhodnění při následné koupi",
  },
};

export default function RentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalJsonLd) }}
      />
      <RentalContent />
    </>
  );
}
