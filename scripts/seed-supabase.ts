/**
 * Seeds Supabase directly using service role key.
 * Run: SUPABASE_SERVICE_ROLE_KEY=xxx node --import tsx scripts/seed-supabase.ts
 *
 * Get the service_role key from: Supabase Dashboard -> Project Settings -> API -> service_role
 * DO NOT commit the key. Run locally.
 */
import { createClient } from "@supabase/supabase-js";
import { products as seedProducts } from "../src/data/products";
import { manufacturers as seedManufacturers } from "../src/data/manufacturers";
import { news as seedNews } from "../src/data/news";

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://dfwdaapyyonqxmmfpled.supabase.co";
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_KEY;

if (!key) {
  console.error(
    "Missing SUPABASE_SERVICE_ROLE_KEY. Get it from Supabase dashboard -> Settings -> API."
  );
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

function parsePrice(raw: unknown): number {
  if (typeof raw === "number") return raw;
  if (typeof raw === "string") {
    const digits = raw.replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 0;
  }
  return 0;
}

async function seedProductsTable() {
  const rows = seedProducts.map((raw, index) => {
    const p = raw as Record<string, unknown>;
    const priceWithVat = parsePrice(p.price ?? p.priceWithVat);
    const priceWithoutVat =
      priceWithVat > 0 ? Math.round(priceWithVat / 1.21) : 0;
    return {
      id: p.id,
      name: p.name,
      price_with_vat: priceWithVat,
      price_without_vat: priceWithoutVat,
      power: p.power ?? "",
      category: p.category ?? "",
      brand: p.brand ?? "",
      image: p.image ?? "",
      images: p.images ?? [],
      badges: p.badges ?? [],
      description: p.description ?? "",
      specs: p.specs ?? {},
      features: p.features ?? [],
      available: p.available ?? true,
      documentation: p.documentation ?? null,
      youtube_url: p.youtubeUrl ?? null,
      sort_order: index,
    };
  });
  const { error, count } = await supabase
    .from("products")
    .upsert(rows, { count: "exact" });
  if (error) throw error;
  console.log(`  products:      upserted ${count ?? rows.length}`);
}

async function seedManufacturersTable() {
  const rows = seedManufacturers.map((m, index) => ({
    id: m.id,
    name: m.name,
    description: m.description ?? "",
    youtube_video_id: m.youtubeVideoId ?? null,
    sort_order: m.sortOrder ?? index,
  }));
  const { error, count } = await supabase
    .from("manufacturers")
    .upsert(rows, { count: "exact" });
  if (error) throw error;
  console.log(`  manufacturers: upserted ${count ?? rows.length}`);
}

async function seedNewsTable() {
  const { error: delErr } = await supabase.from("news").delete().gte("id", 0);
  if (delErr) throw delErr;
  const rows = seedNews.map((item) => ({
    title: item.title,
    content: item.content,
    date: item.date,
    images: [],
    youtube_url: null,
    published: true,
  }));
  const { error, count } = await supabase
    .from("news")
    .insert(rows, { count: "exact" });
  if (error) throw error;
  console.log(`  news:          inserted ${count ?? rows.length}`);
}

async function main() {
  console.log(`Seeding ${url}`);
  await seedProductsTable();
  await seedManufacturersTable();
  await seedNewsTable();
  console.log("Done.");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
