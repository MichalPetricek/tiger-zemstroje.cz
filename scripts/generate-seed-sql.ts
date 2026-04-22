/**
 * Generates supabase-seed.sql from bundled static data.
 * Run: npx tsx scripts/generate-seed-sql.ts
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { products as seedProducts } from "../src/data/products";
import { manufacturers as seedManufacturers } from "../src/data/manufacturers";
import { news as seedNews } from "../src/data/news";

function sqlString(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  const str = String(value).replace(/'/g, "''");
  return `'${str}'`;
}

function sqlJson(value: unknown): string {
  if (value === null || value === undefined) return "'[]'::jsonb";
  const json = JSON.stringify(value).replace(/'/g, "''");
  return `'${json}'::jsonb`;
}

function sqlBool(value: unknown): string {
  return value ? "true" : "false";
}

function sqlInt(value: unknown): string {
  if (typeof value === "number" && Number.isFinite(value)) return String(Math.trunc(value));
  return "0";
}

function parsePrice(raw: unknown): number {
  if (typeof raw === "number") return raw;
  if (typeof raw === "string") {
    const digits = raw.replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 0;
  }
  return 0;
}

const lines: string[] = [];
lines.push("-- Auto-generated seed data. Paste into Supabase SQL Editor.");
lines.push("-- Safe to re-run: uses UPSERT on primary keys.");
lines.push("");

// Products
lines.push("-- ============ PRODUCTS ============");
seedProducts.forEach((raw, index) => {
  const p = raw as Record<string, unknown>;
  const priceWithVat = parsePrice(p.price ?? p.priceWithVat);
  const priceWithoutVat = priceWithVat > 0 ? Math.round(priceWithVat / 1.21) : 0;
  lines.push(
    `INSERT INTO products (id, name, price_with_vat, price_without_vat, power, category, brand, image, images, badges, description, specs, features, available, documentation, youtube_url, sort_order) VALUES (` +
      [
        sqlString(p.id),
        sqlString(p.name),
        sqlInt(priceWithVat),
        sqlInt(priceWithoutVat),
        sqlString(p.power ?? ""),
        sqlString(p.category ?? ""),
        sqlString(p.brand ?? ""),
        sqlString(p.image ?? ""),
        sqlJson(p.images ?? []),
        sqlJson(p.badges ?? []),
        sqlString(p.description ?? ""),
        sqlJson(p.specs ?? {}),
        sqlJson(p.features ?? []),
        sqlBool(p.available ?? true),
        p.documentation ? sqlString(p.documentation) : "NULL",
        p.youtubeUrl ? sqlString(p.youtubeUrl) : "NULL",
        sqlInt(index),
      ].join(", ") +
      `) ON CONFLICT (id) DO UPDATE SET ` +
      [
        "name = EXCLUDED.name",
        "price_with_vat = EXCLUDED.price_with_vat",
        "price_without_vat = EXCLUDED.price_without_vat",
        "power = EXCLUDED.power",
        "category = EXCLUDED.category",
        "brand = EXCLUDED.brand",
        "image = EXCLUDED.image",
        "images = EXCLUDED.images",
        "badges = EXCLUDED.badges",
        "description = EXCLUDED.description",
        "specs = EXCLUDED.specs",
        "features = EXCLUDED.features",
        "available = EXCLUDED.available",
        "documentation = EXCLUDED.documentation",
        "youtube_url = EXCLUDED.youtube_url",
        "sort_order = EXCLUDED.sort_order",
        "updated_at = now()",
      ].join(", ") +
      ";"
  );
});
lines.push("");

// Manufacturers
lines.push("-- ============ MANUFACTURERS ============");
seedManufacturers.forEach((m, index) => {
  lines.push(
    `INSERT INTO manufacturers (id, name, description, youtube_video_id, sort_order) VALUES (` +
      [
        sqlString(m.id),
        sqlString(m.name),
        sqlString(m.description ?? ""),
        m.youtubeVideoId ? sqlString(m.youtubeVideoId) : "NULL",
        sqlInt(m.sortOrder ?? index),
      ].join(", ") +
      `) ON CONFLICT (id) DO UPDATE SET ` +
      [
        "name = EXCLUDED.name",
        "description = EXCLUDED.description",
        "youtube_video_id = EXCLUDED.youtube_video_id",
        "sort_order = EXCLUDED.sort_order",
      ].join(", ") +
      ";"
  );
});
lines.push("");

// News - clear then insert (no stable key)
lines.push("-- ============ NEWS ============");
lines.push("DELETE FROM news;");
seedNews.forEach((item) => {
  lines.push(
    `INSERT INTO news (title, content, date, images, youtube_url, published) VALUES (` +
      [
        sqlString(item.title),
        sqlString(item.content),
        sqlString(item.date),
        sqlJson([]),
        "NULL",
        "true",
      ].join(", ") +
      ");"
  );
});
lines.push("");

const outputPath = resolve(process.cwd(), "supabase-seed.sql");
writeFileSync(outputPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outputPath}`);
console.log(`  products:      ${seedProducts.length}`);
console.log(`  manufacturers: ${seedManufacturers.length}`);
console.log(`  news:          ${seedNews.length}`);
