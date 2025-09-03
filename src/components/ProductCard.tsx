import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from '@phosphor-icons/react'

interface Product {
  id: string
  name: string
  price: string
  power: string
  category: string
  brand: string
  image: string
  badges: string[]
  description: string
  specs: Record<string, string>
  features: string[]
  available: boolean
}

interface ProductCardProps {
  product: Product
  onSelect?: (product: Product) => void
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-muted relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.badges.map((badge, index) => (
            <Badge key={index} className="bg-accent text-accent-foreground text-xs font-bold">
              {badge}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">
          <span className="font-bold text-accent">{product.price}</span>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{product.name}</CardTitle>
            <CardDescription className="mt-2">{product.description}</CardDescription>
          </div>
          <Badge variant="outline" className="ml-2 text-accent border-accent">
            {product.power}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => onSelect?.(product)}
          >
            Více informací
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="flex-1">
            Kontakt
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}