import { NextResponse } from "next/server";
import { getManufacturers, upsertManufacturer } from "@/lib/db";
import { Manufacturer } from "@/types";

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

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Manufacturer;

    if (!data.id || !data.name) {
      return NextResponse.json(
        { error: "Povinná pole: id, name" },
        { status: 400 }
      );
    }

    data.id = data.id
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-");

    upsertManufacturer(data);
    return NextResponse.json({ success: true, id: data.id });
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při ukládání výrobce", detail: String(e) },
      { status: 500 }
    );
  }
}
