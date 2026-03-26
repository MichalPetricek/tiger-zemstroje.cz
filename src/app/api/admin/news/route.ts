import { NextResponse } from "next/server";
import { getNews, createNewsItem } from "@/lib/db";
import { NewsItem } from "@/types";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const news = getNews(false); // admin sees all
    return NextResponse.json(news);
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při načítání novinek", detail: String(e) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Omit<NewsItem, "id">;

    if (!data.title || !data.date) {
      return NextResponse.json(
        { error: "Povinná pole: title, date" },
        { status: 400 }
      );
    }

    const id = createNewsItem(data);
    return NextResponse.json({ success: true, id });
  } catch (e) {
    return NextResponse.json(
      { error: "Chyba při ukládání novinky", detail: String(e) },
      { status: 500 }
    );
  }
}
