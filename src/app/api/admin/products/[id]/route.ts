import { NextResponse } from "next/server";
import { getProduct, upsertProduct, deleteProduct } from "@/lib/db";
import { Product } from "@/types";

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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = (await request.json()) as Product;
    data.id = id;
    upsertProduct(data);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při ukládání", detail: String(e) },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  deleteProduct(id);
  return NextResponse.json({ success: true });
}
