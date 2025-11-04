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
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function Products({ products, onProductSelect, onBack: _onBack, selectedCategory, onCategoryChange }: ProductsProps) {
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
                onClick={() => onCategoryChange(category.id)}
                className={selectedCategory === category.id ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Special content for Příslušenství */}
        {selectedCategory === 'Příslušenství' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border rounded-lg p-8 shadow-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-3">Katalog příslušenství</h2>
                <p className="text-muted-foreground mb-6">
                  Kompletní nabídka příslušenství pro traktory, bagry a nakladače naleznete v našem katalogu SAMTRA.
                </p>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="https://6c427753da.clvaw-cdnwnd.com/de7a8e529be9a785c2063f327755fbbb/200001638-6fd326fd34/katalog%20SAMTRA.pdf?ph=6c427753da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Stáhnout katalog (PDF)
                </a>
              </div>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  V katalogu najdete: radlice, plečky, sněhové frézy, mulčovače, sekačky, shrnovače, diskové brány a další příslušenství.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        {selectedCategory !== 'Příslušenství' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={onProductSelect}
              />
            ))}
          </div>
        )}

        {selectedCategory !== 'Příslušenství' && filteredProducts.length === 0 && (
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