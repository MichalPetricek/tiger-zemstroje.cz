"use client";

import { useRouter } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "@/types";
import { useContactForm } from "@/contexts/ContactFormContext";

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({
  product,
}: ProductDetailContentProps) {
  const router = useRouter();
  const { openContactForm } = useContactForm();

  const handleBack = () => {
    router.push("/products");
  };

  return (
    <div className="pt-4">
      <ProductDetail
        product={product}
        onBack={handleBack}
        onContact={openContactForm}
      />
    </div>
  );
}
