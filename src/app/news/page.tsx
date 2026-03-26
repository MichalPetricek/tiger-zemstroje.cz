import type { Metadata } from "next";
import { Suspense } from "react";
import NewsPageContent from "@/components/NewsContent";

export const metadata: Metadata = {
  title: "Novinky – Aktuality ze světa zemědělské techniky | TIGER CZ",
  description:
    "Nejnovější informace ze světa TIGER CZ – předání strojů zákazníkům, nové produkty, rozšíření nabídky a další aktuality.",
  alternates: {
    canonical: "https://jinma.cz/news",
  },
  openGraph: {
    title: "Novinky – TIGER CZ s.r.o.",
    description:
      "Aktuality ze světa zemědělské techniky – předání strojů, nové produkty a další.",
    url: "https://jinma.cz/news",
  },
};

export default function NewsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
        </div>
      }
    >
      <NewsPageContent />
    </Suspense>
  );
}
