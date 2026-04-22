"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AdminNewsForm from "@/components/admin/NewsForm";
import { NewsItem } from "@/types";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { getNewsItem } from "@/lib/data";

function EditContent() {
  const { authenticated, loading: authLoading } = useAdminAuth();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authenticated || !id) return;
    getNewsItem(Number(id))
      .then((n) => {
        if (n) setNewsItem(n);
        else setError("Novinka nenalezena");
      })
      .catch(() => setError("Novinka nenalezena"))
      .finally(() => setLoading(false));
  }, [id, authenticated]);

  if (authLoading || loading)
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

export default function AdminNewsEditPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
        </div>
      }
    >
      <EditContent />
    </Suspense>
  );
}
