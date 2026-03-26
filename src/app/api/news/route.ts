import { NextResponse } from "next/server";
import { getNews } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const news = getNews(true); // published only
    return NextResponse.json(news);
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při načítání novinek", detail: String(e) },
      { status: 500 }
    );
  }
}
