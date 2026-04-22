import type { Metadata } from "next";
import ManufacturersContent from "@/components/ManufacturersContent";
import { getManufacturers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Výrobci – JINMA, YTO, SAMTRA | Přímý dovoz zemědělské techniky",
  description:
    "Spolupracujeme přímo s předními výrobci zemědělské techniky – JINMA, YTO a SAMTRA. Přímý dovoz traktorů a příslušenství, nadstandardní kvalita.",
  alternates: {
    canonical: "https://jinma.cz/vyrobci",
  },
  openGraph: {
    title: "Výrobci zemědělské techniky – JINMA, YTO, SAMTRA | TIGER CZ",
    description:
      "Přímá spolupráce s výrobci JINMA, YTO a SAMTRA. Traktorové, zemědělské stroje a příslušenství nejvyšší kvality.",
    url: "https://jinma.cz/vyrobci",
  },
};

export default async function VyrobciPage() {
  const manufacturers = await getManufacturers();
  return <ManufacturersContent manufacturers={manufacturers} />;
}
