import { NextResponse } from "next/server";
import { getNewsItem, updateNewsItem, deleteNewsItem } from "@/lib/db";
import { NewsItem } from "@/types";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = getNewsItem(Number(id));
  if (!item) {
    return NextResponse.json({ error: "Novinka nenalezena" }, { status: 404 });
  }
  return NextResponse.json(item);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = (await request.json()) as NewsItem;
    data.id = Number(id);
    updateNewsItem(data);
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
  deleteNewsItem(Number(id));
  return NextResponse.json({ success: true });
}
