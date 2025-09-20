import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Products from "@/components/Products";
import { products } from "@/data/products";
import { Product } from "@/types";

export default function StrojePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Traktory");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleProductSelect = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  const handleBack = () => {
    navigate("/");
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
