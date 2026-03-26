"use client";

import { useEffect, useState } from "react";
import AdminNewsForm from "@/components/admin/NewsForm";
import { NewsItem } from "@/types";
import { use } from "react";

export default function AdminNewsEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/news/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((d) => setNewsItem(d))
      .catch(() => setError("Novinka nenalezena"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );

  if (error || !newsItem)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error || "Novinka nenalezena"}</p>
      </div>
    );

  return <AdminNewsForm initial={newsItem} isNew={false} />;
}
