"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Products from "@/components/Products";
import { Product } from "@/types";

export default function ProductsPageContent({
  products,
}: {
  products: Product[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Traktory");

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
