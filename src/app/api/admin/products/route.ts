import { NextResponse } from "next/server";
import { getAllProducts, upsertProduct } from "@/lib/db";
import { Product } from "@/types";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const products = getAllProducts();
    return NextResponse.json(products);
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při načítání produktů", detail: String(e) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Product;

    if (!data.id || !data.name || !data.category || !data.brand) {
      return NextResponse.json(
        { error: "Povinná pole: id, name, category, brand" },
        { status: 400 }
      );
    }

    // Sanitize ID (slug-safe)
    data.id = data.id
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-");

    upsertProduct(data);
    return NextResponse.json({ success: true, id: data.id });
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při ukládání produktu", detail: String(e) },
      { status: 500 }
    );
  }
}
