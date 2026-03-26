import { NextResponse } from "next/server";
import { getProducts } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const products = getProducts(false); // exclude hidden categories
    return NextResponse.json(products);
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při načítání produktů", detail: String(e) },
      { status: 500 }
    );
  }
}
