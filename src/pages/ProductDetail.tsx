import { useParams, Navigate, useNavigate } from "react-router-dom";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/products";

interface ProductDetailPageProps {
  onContactClick: () => void;
}

export default function ProductDetailPage({
  onContactClick,
}: ProductDetailPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <div className="pt-4">
      <ProductDetail
        product={product}
        onBack={handleBack}
        onContact={onContactClick}
      />
    </div>
  );
}
