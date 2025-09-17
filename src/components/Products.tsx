import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
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

const categories = [
  {
    id: 'traktory',
    name: 'Traktory',
    description: 'Kompletní řada traktorů od kompaktních po výkonné profesionální modely',
    icon: '🚜'
  },
  {
    id: 'nakladace',
    name: 'Nakladače',
    description: 'Kolové a teleskopické nakladače pro stavebnictví a zemědělství',
    icon: '🏗️'
  },
  {
    id: 'bagry',
    name: 'Bagry',
    description: 'Kompaktní bagry pro zemní a stavební práce různých velikostí',
    icon: '⛏️'
  },
  {
    id: 'jesterky',
    name: 'Ještěrky',
    description: 'Vysokozdvižné vozíky pro skladové a logistické operace',
    icon: '🔋'
  },
  {
    id: 'prislusenstvi',
    name: 'Příslušenství',
    description: 'Široká škála příslušenství a nástaveb pro všechny typy strojů',
    icon: '🔧'
  }
]

export default function Products({ products, onProductSelect, onBack }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory 
    ? products.filter(product => {
        if (selectedCategory === 'traktory') return product.category === 'Traktory'
        if (selectedCategory === 'nakladace') return product.category === 'Nakladače'
        if (selectedCategory === 'bagry') return product.category === 'Bagry'
        if (selectedCategory === 'jesterky') return product.category === 'Ještěrky'
        if (selectedCategory === 'prislusenstvi') return product.category === 'Příslušenství'
        return false
      })
    : products

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zpět na hlavní stránku
          </Button>
          
          {selectedCategory && (
            <Button 
              variant="ghost" 
              onClick={handleBackToCategories}
              className="mb-4 ml-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zpět na kategorie
            </Button>
          )}
        </div>

        {!selectedCategory ? (
          // Category selection view
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Naše produkty</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kompletní sortiment zemědělské a manipulační techniky přímo od výrobců
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const categoryProducts = products.filter(product => {
                  if (category.id === 'traktory') return product.category === 'Traktory'
                  if (category.id === 'nakladace') return product.category === 'Nakladače'
                  if (category.id === 'bagry') return product.category === 'Bagry'
                  if (category.id === 'jesterky') return product.category === 'Ještěrky'
                  if (category.id === 'prislusenstvi') return product.category === 'Příslušenství'
                  return false
                })

                return (
                  <Card 
                    key={category.id} 
                    className="cursor-pointer hover:shadow-lg transition-shadow group"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <CardHeader className="text-center">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="secondary" className="mb-4">
                        {categoryProducts.length} {categoryProducts.length === 1 ? 'produkt' : 
                         categoryProducts.length < 5 ? 'produkty' : 'produktů'}
                      </Badge>
                      <div className="flex items-center justify-center text-accent">
                        <span className="mr-2">Zobrazit produkty</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ) : (
          // Products in selected category
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-semibold mb-2">Připravujeme pro vás</h3>
                <p className="text-muted-foreground">
                  Produkty v této kategorii jsou momentálně v přípravě. Kontaktujte nás pro více informací.
                </p>
              </div>
            ) : (
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
          </div>
        )}
      </div>
    </div>
  )
}