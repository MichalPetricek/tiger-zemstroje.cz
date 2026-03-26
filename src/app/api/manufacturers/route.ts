import { NextResponse } from "next/server";
import { getManufacturers } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const manufacturers = getManufacturers();
    return NextResponse.json(manufacturers);
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při načítání výrobců", detail: String(e) },
      { status: 500 }
    );
  }
}
