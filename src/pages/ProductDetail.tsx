import { useParams, Navigate } from "react-router-dom";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/products";

interface ProductDetailPageProps {
  onContactClick: () => void;
}

export default function ProductDetailPage({
  onContactClick,
}: ProductDetailPageProps) {
  const { productId } = useParams<{ productId: string }>();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-4">
      <ProductDetail
        product={product}
        onBack={() => window.history.back()}
        onContact={onContactClick}
      />
    </div>
  );
}
