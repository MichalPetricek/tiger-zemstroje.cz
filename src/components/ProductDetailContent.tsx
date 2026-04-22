"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "@/types";
import { useContactForm } from "@/contexts/ContactFormContext";
import { getProduct } from "@/lib/data";

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({
  product,
}: ProductDetailContentProps) {
  const router = useRouter();
  const { openContactForm } = useContactForm();
  const [liveProduct, setLiveProduct] = useState<Product>(product);

  useEffect(() => {
    let active = true;
    getProduct(product.id)
      .then((fresh) => {
        if (active && fresh) setLiveProduct(fresh);
      })
      .catch(() => {
        // keep static fallback
      });
    return () => {
      active = false;
    };
  }, [product.id]);

  const handleBack = () => {
    router.push("/products");
  };

  return (
    <div className="pt-4">
      <ProductDetail
        product={liveProduct}
        onBack={handleBack}
        onContact={openContactForm}
      />
    </div>
  );
}
