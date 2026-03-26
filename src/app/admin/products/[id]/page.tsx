"use client";

import { useEffect, useState } from "react";
import AdminProductForm from "@/components/admin/ProductForm";
import { Product } from "@/types";
import { use } from "react";

export default function AdminProductEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/products/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Product not found");
        return r.json();
      })
      .then((d) => setProduct(d))
      .catch(() => setError("Produkt nenalezen"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
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
