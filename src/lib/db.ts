import Database from "better-sqlite3";
import path from "path";
import { Product, Manufacturer, NewsItem } from "@/types";

const DB_PATH = path.join(process.cwd(), "data.db");

let db: Database.Database;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    initTables(db);
  }
  return db;
}

function initTables(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price_with_vat INTEGER NOT NULL DEFAULT 0,
      price_without_vat INTEGER NOT NULL DEFAULT 0,
      power TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL,
      brand TEXT NOT NULL,
      image TEXT NOT NULL DEFAULT '',
      images TEXT NOT NULL DEFAULT '[]',
      badges TEXT NOT NULL DEFAULT '[]',
      description TEXT NOT NULL DEFAULT '',
      specs TEXT NOT NULL DEFAULT '{}',
      features TEXT NOT NULL DEFAULT '[]',
      available INTEGER NOT NULL DEFAULT 1,
      documentation TEXT,
      youtube_url TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS manufacturers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      youtube_video_id TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      date TEXT NOT NULL,
      images TEXT NOT NULL DEFAULT '[]',
      youtube_url TEXT,
      published INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

// ─── Product helpers ───

function rowToProduct(row: Record<string, unknown>): Product {
  return {
    id: row.id as string,
    name: row.name as string,
    priceWithVat: row.price_with_vat as number,
    priceWithoutVat: row.price_without_vat as number,
    power: row.power as string,
    category: row.category as string,
    brand: row.brand as string,
    image: row.image as string,
    images: JSON.parse((row.images as string) || "[]"),
    badges: JSON.parse((row.badges as string) || "[]"),
    description: row.description as string,
    specs: JSON.parse((row.specs as string) || "{}"),
    features: JSON.parse((row.features as string) || "[]"),
    available: Boolean(row.available),
    documentation: (row.documentation as string) || undefined,
    youtubeUrl: (row.youtube_url as string) || undefined,
    sortOrder: row.sort_order as number,
  };
}

export function getProducts(includeHidden = false): Product[] {
  const d = getDb();
  const rows = d
    .prepare(
      includeHidden
        ? "SELECT * FROM products ORDER BY sort_order ASC, name ASC"
        : "SELECT * FROM products WHERE category != 'Ještěrky' ORDER BY sort_order ASC, name ASC"
    )
    .all() as Record<string, unknown>[];
  return rows.map(rowToProduct);
}

export function getAllProducts(): Product[] {
  const d = getDb();
  const rows = d
    .prepare("SELECT * FROM products ORDER BY sort_order ASC, name ASC")
    .all() as Record<string, unknown>[];
  return rows.map(rowToProduct);
}

export function getProductsByCategory(category: string): Product[] {
  const d = getDb();
  const rows = d
    .prepare(
      "SELECT * FROM products WHERE category = ? ORDER BY sort_order ASC, name ASC"
    )
    .all(category) as Record<string, unknown>[];
  return rows.map(rowToProduct);
}

export function getProduct(id: string): Product | undefined {
  const d = getDb();
  const row = d.prepare("SELECT * FROM products WHERE id = ?").get(id) as
    | Record<string, unknown>
    | undefined;
  return row ? rowToProduct(row) : undefined;
}

export function upsertProduct(product: Product): void {
  const d = getDb();
  d.prepare(
    `INSERT INTO products (id, name, price_with_vat, price_without_vat, power, category, brand, image, images, badges, description, specs, features, available, documentation, youtube_url, sort_order, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
     ON CONFLICT(id) DO UPDATE SET
       name=excluded.name, price_with_vat=excluded.price_with_vat, price_without_vat=excluded.price_without_vat,
       power=excluded.power, category=excluded.category, brand=excluded.brand, image=excluded.image,
       images=excluded.images, badges=excluded.badges, description=excluded.description,
       specs=excluded.specs, features=excluded.features, available=excluded.available,
       documentation=excluded.documentation, youtube_url=excluded.youtube_url,
       sort_order=excluded.sort_order, updated_at=datetime('now')`
  ).run(
    product.id,
    product.name,
    product.priceWithVat,
    product.priceWithoutVat,
    product.power,
    product.category,
    product.brand,
    product.image,
    JSON.stringify(product.images || []),
    JSON.stringify(product.badges || []),
    product.description,
    JSON.stringify(product.specs || {}),
    JSON.stringify(product.features || []),
    product.available ? 1 : 0,
    product.documentation || null,
    product.youtubeUrl || null,
    product.sortOrder || 0
  );
}

export function deleteProduct(id: string): void {
  const d = getDb();
  d.prepare("DELETE FROM products WHERE id = ?").run(id);
}

// ─── Manufacturer helpers ───

function rowToManufacturer(row: Record<string, unknown>): Manufacturer {
  return {
    id: row.id as string,
    name: row.name as string,
    description: row.description as string,
    youtubeVideoId: (row.youtube_video_id as string) || undefined,
    sortOrder: row.sort_order as number,
  };
}

export function getManufacturers(): Manufacturer[] {
  const d = getDb();
  const rows = d
    .prepare("SELECT * FROM manufacturers ORDER BY sort_order ASC, name ASC")
    .all() as Record<string, unknown>[];
  return rows.map(rowToManufacturer);
}

export function getManufacturer(id: string): Manufacturer | undefined {
  const d = getDb();
  const row = d
    .prepare("SELECT * FROM manufacturers WHERE id = ?")
    .get(id) as Record<string, unknown> | undefined;
  return row ? rowToManufacturer(row) : undefined;
}

export function upsertManufacturer(m: Manufacturer): void {
  const d = getDb();
  d.prepare(
    `INSERT INTO manufacturers (id, name, description, youtube_video_id, sort_order)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       name=excluded.name, description=excluded.description,
       youtube_video_id=excluded.youtube_video_id, sort_order=excluded.sort_order`
  ).run(m.id, m.name, m.description, m.youtubeVideoId || null, m.sortOrder || 0);
}

export function deleteManufacturer(id: string): void {
  const d = getDb();
  d.prepare("DELETE FROM manufacturers WHERE id = ?").run(id);
}

// ─── News helpers ───

function rowToNews(row: Record<string, unknown>): NewsItem {
  return {
    id: row.id as number,
    title: row.title as string,
    content: row.content as string,
    date: row.date as string,
    images: JSON.parse((row.images as string) || "[]"),
    youtubeUrl: (row.youtube_url as string) || undefined,
    published: Boolean(row.published),
  };
}

export function getNews(publishedOnly = true): NewsItem[] {
  const d = getDb();
  const sql = publishedOnly
    ? "SELECT * FROM news WHERE published = 1 ORDER BY date DESC, id DESC"
    : "SELECT * FROM news ORDER BY date DESC, id DESC";
  const rows = d.prepare(sql).all() as Record<string, unknown>[];
  return rows.map(rowToNews);
}

export function getNewsItem(id: number): NewsItem | undefined {
  const d = getDb();
  const row = d.prepare("SELECT * FROM news WHERE id = ?").get(id) as
    | Record<string, unknown>
    | undefined;
  return row ? rowToNews(row) : undefined;
}

export function createNewsItem(item: Omit<NewsItem, "id">): number {
  const d = getDb();
  const result = d
    .prepare(
      `INSERT INTO news (title, content, date, images, youtube_url, published, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`
    )
    .run(
      item.title,
      item.content,
      item.date,
      JSON.stringify(item.images || []),
      item.youtubeUrl || null,
      item.published ? 1 : 0
    );
  return Number(result.lastInsertRowid);
}

export function updateNewsItem(item: NewsItem): void {
  const d = getDb();
  d.prepare(
    `UPDATE news SET title=?, content=?, date=?, images=?, youtube_url=?, published=?, updated_at=datetime('now')
     WHERE id=?`
  ).run(
    item.title,
    item.content,
    item.date,
    JSON.stringify(item.images || []),
    item.youtubeUrl || null,
    item.published ? 1 : 0,
    item.id
  );
}

export function deleteNewsItem(id: number): void {
  const d = getDb();
  d.prepare("DELETE FROM news WHERE id = ?").run(id);
}

// ─── Stats ───

export function getStats() {
  const d = getDb();
  const products = (
    d.prepare("SELECT COUNT(*) as c FROM products").get() as { c: number }
  ).c;
  const manufacturers = (
    d.prepare("SELECT COUNT(*) as c FROM manufacturers").get() as { c: number }
  ).c;
  const news = (
    d.prepare("SELECT COUNT(*) as c FROM news").get() as { c: number }
  ).c;
  const categories = (
    d
      .prepare("SELECT COUNT(DISTINCT category) as c FROM products")
      .get() as { c: number }
  ).c;
  return { products, manufacturers, news, categories };
}

// ─── Seed check ───

export function isSeeded(): boolean {
  const d = getDb();
  const row = d.prepare("SELECT COUNT(*) as c FROM products").get() as {
    c: number;
  };
  return row.c > 0;
}
