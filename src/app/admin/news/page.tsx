"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/types";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { getNews, deleteNewsItem } from "@/lib/data";

export default function AdminNewsPage() {
  const { authenticated, loading: authLoading } = useAdminAuth();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      getNews(false).then(setNewsItems).catch(() => setNewsItems([]));
    }
  }, [authenticated]);

  async function handleDelete(id: number) {
    if (!confirm("Opravdu smazat tuto novinku?")) return;
    await deleteNewsItem(id);
    setNewsItems((prev) => prev.filter((n) => n.id !== id));
  }

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin">← Zpět</Link>
            </Button>
            <h1 className="text-xl font-bold">Novinky</h1>
            <Badge variant="outline">{newsItems.length}</Badge>
          </div>
          <Button asChild>
            <Link href="/admin/news/new">+ Nová novinka</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <p className="text-xs text-muted-foreground mb-4">
          📸 Doporučený rozměr fotek novinky: <strong>1200×800 px</strong>{" "}
          (poměr 3:2), formát JPG nebo WebP, max 10 MB
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-2 px-3">Foto</th>
                <th className="py-2 px-3">Titulek</th>
                <th className="py-2 px-3">Datum</th>
                <th className="py-2 px-3">YouTube</th>
                <th className="py-2 px-3">Stav</th>
                <th className="py-2 px-3">Akce</th>
              </tr>
            </thead>
            <tbody>
              {newsItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-muted/50 cursor-pointer"
                  onClick={() => router.push(`/admin/news/edit?id=${item.id}`)}
                >
                  <td className="py-2 px-3">
                    {item.images.length > 0 ? (
                      <img
                        src={item.images[0]}
                        alt=""
                        className="w-16 h-11 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-11 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                        —
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-3 font-medium">{item.title}</td>
                  <td className="py-2 px-3">{item.date}</td>
                  <td className="py-2 px-3">
                    {item.youtubeUrl ? (
                      <Badge className="bg-green-600">Ano</Badge>
                    ) : (
                      <Badge variant="secondary">Ne</Badge>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {item.published ? (
                      <Badge className="bg-green-600">Publikováno</Badge>
                    ) : (
                      <Badge variant="secondary">Koncept</Badge>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item.id);
                      }}
                    >
                      Smazat
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {newsItems.length === 0 && (
            <p className="text-center py-8 text-muted-foreground">
              Žádné novinky. Přidejte první novinku.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
