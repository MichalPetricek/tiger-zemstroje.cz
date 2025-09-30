import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  // Use the first image from images array if available, otherwise fallback to image field
  const displayImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : product.image;

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col pt-0">
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.badges.map((badge, index) => (
            <Badge
              key={index}
              className="bg-accent text-accent-foreground text-xs font-bold"
            >
              {badge}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">
          <span className="font-bold text-accent">{product.price}</span>
        </div>
      </div>

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl">{product.name}</CardTitle>
            <CardDescription className="mt-2 line-clamp-3">
              {product.description}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className="ml-2 text-accent border-accent shrink-0"
          >
            {product.power}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => onSelect?.(product)}
        >
          Více informací
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
