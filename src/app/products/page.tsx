import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsPageContent from "@/components/ProductsPageContent";
import { getProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Zemědělské stroje – Traktory, Bagry, Nakladače",
  description:
    "Kompletní nabídka zemědělské a stavební techniky. Traktory TIGER, JINMA, YTO od 199 000 Kč, bagry BAT, nakladače MANITECH. Přímý dovoz, 2 roky záruka.",
  alternates: {
    canonical: "https://jinma.cz/products",
  },
  openGraph: {
    title: "Zemědělské stroje – Traktory, Bagry, Nakladače | TIGER CZ",
    description:
      "Kompletní nabídka zemědělské a stavební techniky. Traktory od 199 000 Kč. Přímý dovoz, 2 roky záruka.",
    url: "https://jinma.cz/products",
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
        </div>
      }
    >
      <ProductsPageContent products={products} />
    </Suspense>
  );
}
