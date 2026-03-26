import { NextResponse } from "next/server";
import { isSeeded, upsertProduct, upsertManufacturer, createNewsItem } from "@/lib/db";
import { products as staticProducts } from "@/data/products";
import { manufacturers as staticManufacturers } from "@/data/manufacturers";
import { news as staticNews } from "@/data/news";

export async function POST() {
  try {
    if (isSeeded()) {
      return NextResponse.json({
        message: "Databáze je již naplněna",
        seeded: false,
      });
    }

    // Seed products
    let sortOrder = 0;
    for (const p of staticProducts) {
      // Handle old string format ("199 000 Kč") from static data
      let priceWithVat = 0;
      if (typeof p.price === 'string') {
        priceWithVat = parseInt((p.price as string).replace(/[^\d]/g, ""), 10) || 0;
      } else if (typeof p.priceWithVat === 'number') {
        priceWithVat = p.priceWithVat as number;
      }
      const priceWithoutVat = priceWithVat > 0 ? Math.round(priceWithVat / 1.21) : 0;

      upsertProduct({
        id: p.id as string,
        name: p.name as string,
        priceWithVat,
        priceWithoutVat,
        power: p.power as string,
        category: p.category as string,
        brand: p.brand as string,
        image: p.image as string,
        images: (p.images as string[]) || [],
        badges: (p.badges as string[]) || [],
        description: p.description as string,
        specs: (p.specs as Record<string, string>) || {},
        features: (p.features as string[]) || [],
        available: p.available as boolean,
        documentation: p.documentation as string | undefined,
        youtubeUrl: p.youtubeUrl as string | undefined,
        sortOrder: sortOrder++,
      });
    }

    // Seed manufacturers
    for (let i = 0; i < staticManufacturers.length; i++) {
      const m = staticManufacturers[i];
      upsertManufacturer({
        id: m.id,
        name: m.name,
        description: m.description,
        youtubeVideoId: m.youtubeVideoId,
        sortOrder: i,
      });
    }

    // Seed news
    for (const n of staticNews) {
      createNewsItem({
        title: n.title,
        content: n.content,
        date: n.date,
        images: [],
        youtubeUrl: undefined,
        published: true,
      });
    }

    return NextResponse.json({
      message: "Databáze úspěšně naplněna",
      seeded: true,
      counts: {
        products: staticProducts.length,
        manufacturers: staticManufacturers.length,
        news: staticNews.length,
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při plnění databáze", detail: String(e) },
      { status: 500 }
    );
  }
}
