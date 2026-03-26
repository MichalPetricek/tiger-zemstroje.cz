import { NextResponse } from "next/server";
import { getProduct } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) {
    return NextResponse.json({ error: "Produkt nenalezen" }, { status: 404 });
  }
  return NextResponse.json(product);
}
