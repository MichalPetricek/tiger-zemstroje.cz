import { NextResponse } from "next/server";
import { getManufacturer, upsertManufacturer, deleteManufacturer } from "@/lib/db";
import { Manufacturer } from "@/types";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const m = getManufacturer(id);
  if (!m) {
    return NextResponse.json({ error: "Výrobce nenalezen" }, { status: 404 });
  }
  return NextResponse.json(m);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = (await request.json()) as Manufacturer;
    data.id = id;
    upsertManufacturer(data);
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
  deleteManufacturer(id);
  return NextResponse.json({ success: true });
}
