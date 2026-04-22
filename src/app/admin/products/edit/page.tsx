"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AdminProductForm from "@/components/admin/ProductForm";
import { Product } from "@/types";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { getProduct } from "@/lib/data";

function EditContent() {
  const { authenticated, loading: authLoading } = useAdminAuth();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authenticated || !id) return;
    getProduct(id)
      .then((p) => {
        if (p) setProduct(p);
        else setError("Produkt nenalezen");
      })
      .catch(() => setError("Produkt nenalezen"))
      .finally(() => setLoading(false));
  }, [id, authenticated]);

  if (authLoading || loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );

  if (error || !product)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error || "Produkt nenalezen"}</p>
      </div>
    );

  return <AdminProductForm initial={product} isNew={false} />;
}

export default function AdminProductEditPage() {
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
