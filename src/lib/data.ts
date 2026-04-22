import { supabase } from "./supabase";
import { Product, Manufacturer, NewsItem } from "@/types";

function logReadFallback(scope: string, error: unknown) {
  console.error(`[supabase:${scope}] Falling back to empty result`, error);
}

// ─── Transform helpers (snake_case DB → camelCase frontend) ───

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toProduct(row: any): Product {
  return {
    id: row.id,
    name: row.name,
    priceWithVat: row.price_with_vat,
    priceWithoutVat: row.price_without_vat,
    power: row.power,
    category: row.category,
    brand: row.brand,
    image: row.image,
    images: row.images || [],
    badges: row.badges || [],
    description: row.description,
    specs: row.specs || {},
    features: row.features || [],
    available: row.available,
    documentation: row.documentation || undefined,
    youtubeUrl: row.youtube_url || undefined,
    sortOrder: row.sort_order,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toManufacturer(row: any): Manufacturer {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    youtubeVideoId: row.youtube_video_id || undefined,
    sortOrder: row.sort_order,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toNewsItem(row: any): NewsItem {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    date: row.date,
    images: row.images || [],
    youtubeUrl: row.youtube_url || undefined,
    published: row.published,
  };
}

function fromProduct(product: Product) {
  return {
    id: product.id,
    name: product.name,
    price_with_vat: product.priceWithVat,
    price_without_vat: product.priceWithoutVat,
    power: product.power,
    category: product.category,
    brand: product.brand,
    image: product.image,
    images: product.images || [],
    badges: product.badges || [],
    description: product.description,
    specs: product.specs || {},
    features: product.features || [],
    available: product.available,
    documentation: product.documentation || null,
    youtube_url: product.youtubeUrl || null,
    sort_order: product.sortOrder || 0,
  };
}

function fromManufacturer(m: Manufacturer) {
  return {
    id: m.id,
    name: m.name,
    description: m.description,
    youtube_video_id: m.youtubeVideoId || null,
    sort_order: m.sortOrder || 0,
  };
}

function fromNewsItem(item: Omit<NewsItem, "id"> & { id?: number }) {
  return {
    ...(item.id ? { id: item.id } : {}),
    title: item.title,
    content: item.content,
    date: item.date,
    images: item.images || [],
    youtube_url: item.youtubeUrl || null,
    published: item.published,
  };
}

// ─── Product CRUD ───

export async function getProducts(includeHidden = false): Promise<Product[]> {
  let query = supabase
    .from("products")
    .select("*")
    .order("sort_order")
    .order("name");
  if (!includeHidden) {
    query = query.neq("category", "Ještěrky");
  }
  const { data, error } = await query;
  if (error) {
    logReadFallback("getProducts", error);
    return [];
  }
  return (data || []).map(toProduct);
}

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order")
    .order("name");
  if (error) {
    logReadFallback("getAllProducts", error);
    return [];
  }
  return (data || []).map(toProduct);
}

export async function getProduct(
  id: string
): Promise<Product | undefined> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    logReadFallback(`getProduct:${id}`, error);
    return undefined;
  }
  return data ? toProduct(data) : undefined;
}

export async function upsertProduct(product: Product): Promise<void> {
  const { error } = await supabase
    .from("products")
    .upsert(fromProduct(product));
  if (error) throw error;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
}

// ─── Manufacturer CRUD ───

export async function getManufacturers(): Promise<Manufacturer[]> {
  const { data, error } = await supabase
    .from("manufacturers")
    .select("*")
    .order("sort_order")
    .order("name");
  if (error) {
    logReadFallback("getManufacturers", error);
    return [];
  }
  return (data || []).map(toManufacturer);
}

export async function getManufacturer(
  id: string
): Promise<Manufacturer | undefined> {
  const { data, error } = await supabase
    .from("manufacturers")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    logReadFallback(`getManufacturer:${id}`, error);
    return undefined;
  }
  return data ? toManufacturer(data) : undefined;
}

export async function upsertManufacturer(m: Manufacturer): Promise<void> {
  const { error } = await supabase
    .from("manufacturers")
    .upsert(fromManufacturer(m));
  if (error) throw error;
}

export async function deleteManufacturer(id: string): Promise<void> {
  const { error } = await supabase
    .from("manufacturers")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

// ─── News CRUD ───

export async function getNews(publishedOnly = true): Promise<NewsItem[]> {
  let query = supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false })
    .order("id", { ascending: false });
  if (publishedOnly) {
    query = query.eq("published", true);
  }
  const { data, error } = await query;
  if (error) {
    logReadFallback("getNews", error);
    return [];
  }
  return (data || []).map(toNewsItem);
}

export async function getNewsItem(
  id: number
): Promise<NewsItem | undefined> {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    logReadFallback(`getNewsItem:${id}`, error);
    return undefined;
  }
  return data ? toNewsItem(data) : undefined;
}

export async function createNewsItem(
  item: Omit<NewsItem, "id">
): Promise<number> {
  const { data, error } = await supabase
    .from("news")
    .insert(fromNewsItem(item))
    .select("id")
    .single();
  if (error) throw error;
  return data.id;
}

export async function updateNewsItem(item: NewsItem): Promise<void> {
  const { error } = await supabase
    .from("news")
    .update(fromNewsItem(item))
    .eq("id", item.id);
  if (error) throw error;
}

export async function deleteNewsItem(id: number): Promise<void> {
  const { error } = await supabase.from("news").delete().eq("id", id);
  if (error) throw error;
}

// ─── Image upload (Supabase Storage) ───

export async function uploadImage(
  file: File,
  folder: string
): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `${folder}/${safeName}`;

  const { error } = await supabase.storage
    .from("images")
    .upload(path, file, { contentType: file.type });
  if (error) throw error;

  const { data } = supabase.storage.from("images").getPublicUrl(path);
  return data.publicUrl;
}

// ─── Auth helpers ───

export async function signIn(password: string) {
  const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "zemstroje@gmail.com";
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

// ─── Seed ───

export async function seedDatabase() {
  // Check if already seeded
  const { count } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });
  if (count && count > 0) {
    return { seeded: false, message: "Databáze je již naplněna" };
  }

  const { products: staticProducts } = await import("@/data/products");
  const { manufacturers: staticManufacturers } = await import(
    "@/data/manufacturers"
  );
  const { news: staticNews } = await import("@/data/news");

  // Insert products
  let sortOrder = 0;
  for (const p of staticProducts) {
    let priceWithVat = 0;
    if (typeof p.price === "string") {
      priceWithVat =
        parseInt((p.price as string).replace(/[^\d]/g, ""), 10) || 0;
    } else if (typeof p.priceWithVat === "number") {
      priceWithVat = p.priceWithVat as number;
    }
    const priceWithoutVat =
      priceWithVat > 0 ? Math.round(priceWithVat / 1.21) : 0;

    await upsertProduct({
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

  // Insert manufacturers
  for (let i = 0; i < staticManufacturers.length; i++) {
    const m = staticManufacturers[i];
    await upsertManufacturer({
      id: m.id,
      name: m.name,
      description: m.description,
      youtubeVideoId: m.youtubeVideoId,
      sortOrder: i,
    });
  }

  // Insert news
  for (const n of staticNews) {
    await createNewsItem({
      title: n.title,
      content: n.content,
      date: n.date,
      images: [],
      youtubeUrl: undefined,
      published: true,
    });
  }

  return {
    seeded: true,
    message: "Databáze úspěšně naplněna",
    counts: {
      products: staticProducts.length,
      manufacturers: staticManufacturers.length,
      news: staticNews.length,
    },
  };
}

// ─── Stats ───

export async function getStats() {
  const [p, m, n] = await Promise.all([
    supabase.from("products").select("category", { count: "exact" }),
    supabase
      .from("manufacturers")
      .select("*", { count: "exact", head: true }),
    supabase.from("news").select("*", { count: "exact", head: true }),
  ]);

  const products = p.count || 0;
  const categories = new Set(
    (p.data || []).map((r: { category: string }) => r.category)
  ).size;

  return {
    products,
    manufacturers: m.count || 0,
    news: n.count || 0,
    categories,
  };
}
