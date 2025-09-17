import React from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'

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

interface ProductsProps {
  products: Product[]
  onProductSelect: (product: Product) => void
  onBack: () => void
}

export default function Products({ products, onProductSelect, onBack }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Traktory')
  
  const categories = [
    { id: 'Traktory', name: 'Traktory' },
    { id: 'Nakladače', name: 'Nakladače' },
    { id: 'Bagry', name: 'Bagry' },
    { id: 'Ještěrky', name: 'Ještěrky' },
    { id: 'Příslušenství', name: 'Příslušenství' }
  ]

  const filteredProducts = products.filter(product => product.category === selectedCategory)

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Produkty</h1>
          <p className="text-xl text-muted-foreground">
            Kompletní sortiment zemědělské a manipulační techniky
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onProductSelect}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              V této kategorii nejsou momentálně dostupné žádné produkty.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}