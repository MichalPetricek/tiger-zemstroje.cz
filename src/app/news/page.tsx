import type { Metadata } from "next";
import NewsPageContent from "@/components/NewsContent";
import { getNews } from "@/lib/data";

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

export default async function NewsPage() {
  const news = await getNews(true);
  return <NewsPageContent news={news} />;
}
