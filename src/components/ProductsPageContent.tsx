"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Products from "@/components/Products";
import { Product } from "@/types";

export default function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Traktory");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((d) => setProducts(Array.isArray(d) ? d : []));
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleProductSelect = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="pt-4">
      <Products
        products={products}
        onProductSelect={handleProductSelect}
        onBack={handleBack}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  );
}
