import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Star, Shield, Wrench, Clock, ArrowRight, Menu } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Toaster } from '@/components/ui/sonner'
import { useKV } from '@github/spark/hooks'
import ContactForm from '@/components/ContactForm'
import ProductCard from '@/components/ProductCard'
import ProductDetail from '@/components/ProductDetail'

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

interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  featured: boolean
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useKV('showContactForm', false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'product-detail'>('home')
  
  const [products] = useKV<Product[]>('products', [])
  const [news] = useKV<NewsItem[]>('news', [])

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    setCurrentView('product-detail')
  }

  const handleBackToProducts = () => {
    setCurrentView('products')
    setSelectedProduct(null)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedProduct(null)
  }

  const navigation = [
    { name: 'Domů', href: '#home', onClick: handleBackToHome },
    { name: 'Traktory', href: '#tractors', onClick: () => setCurrentView('products') },
    { name: 'Servis', href: '#service' },
    { name: 'Pronájem', href: '#rental' },
    { name: 'Dotace', href: '#subsidies' },
    { name: 'Kontakt', href: '#contact' }
  ]

  // If showing products catalog, render product catalog
  if (currentView === 'products') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-accent cursor-pointer" onClick={handleBackToHome}>TIGER</div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">+420 601 017 000</span>
                </div>
              </div>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-6 mt-6">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          if (item.onClick) item.onClick()
                          setMobileMenuOpen(false)
                        }}
                        className="text-lg hover:text-accent transition-colors text-left"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Products Catalog */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Naše produkty</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kompletní sortiment zemědělské a manipulační techniky přímo od výrobců
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelect={handleProductSelect}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  // If showing product detail, render that component
  if (currentView === 'product-detail' && selectedProduct) {
    return (
      <>
        <ProductDetail 
          product={selectedProduct} 
          onBack={handleBackToProducts}
          onContact={() => setShowContactForm(true)}
        />
        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-accent">TIGER</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button 
                  key={item.name} 
                  onClick={item.onClick || (() => {})}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">+420 601 017 000</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-2">
                <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.onClick) item.onClick()
                        setMobileMenuOpen(false)
                      }}
                      className="text-lg hover:text-accent transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Separator />
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">+420 601 017 000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Facebook className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                    <Instagram className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                    <Youtube className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground text-sm font-bold px-3 py-1">
                  CENOVÁ BOMBA!
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Nejlevnější traktor s výkonem 
                  <span className="text-accent"> 50 HP</span> na českém trhu
                </h1>
                <p className="text-xl text-muted-foreground">
                  TIGER 504 - plný výkon za cenu běžných zahradních traktorů
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-accent" weight="fill" />
                  <span>Plný výkon 50 koní za cenu běžných traktorů</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent" weight="fill" />
                  <span>Přímý dovoz od výrobce - bez prostředníků</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wrench className="w-5 h-5 text-accent" weight="fill" />
                  <span>Záruka 2 roky + servis v ČR</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => setShowContactForm(true)}
                >
                  Rezervovat za 199 000 Kč
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const tiger504 = products.find(p => p.id === 'tiger-504')
                    if (tiger504) handleProductSelect(tiger504)
                  }}
                >
                  Zobrazit specifikace
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card p-8 flex items-center justify-center">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="TIGER 504 Traktor"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg">
                199 000 Kč
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="tractors" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Naše produkty</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletní sortiment zemědělské a manipulační techniky přímo od výrobců
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={handleProductSelect}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setCurrentView('products')}
            >
              Zobrazit všechny produkty
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-xl text-muted-foreground">
              Komplexní péče o vaši techniku
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Rychlý servis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Diagnostika a opravy u zákazníka i v servisu. Specializace na čínské stroje.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>24/7 podpora</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Náhradní díly skladem nebo letecky do 10 dnů. Zapůjčení náhradní techniky.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Záruka</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  2 roky záruka na všechny stroje s kompletním poprodejním servisem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Pronájem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Vyzkoušejte před koupí. Vratná kauce 10 000 Kč, pojištění v ceně.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Aktuality</h2>
            <p className="text-xl text-muted-foreground">
              Nejnovější informace ze světa TIGER CZ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="text-sm text-accent font-medium">{item.date}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Kontakt</h2>
            <p className="text-xl text-muted-foreground">
              Jsme tu pro vás kdykoliv potřebujete
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Obchod</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">+420 601 017 000</p>
                <p className="text-sm text-muted-foreground">zemstroje@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Servis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">+420 602 458 177</p>
                <p className="text-sm text-muted-foreground">servis@zemstroje.cz</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Provozovna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">Skuhrov 13</p>
                <p className="text-sm">468 22 Železný Brod</p>
                <p className="text-sm text-muted-foreground">Po-Pá: 9:00-16:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setShowContactForm(true)}
            >
              Napište nám
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-accent mb-4">TIGER CZ</div>
              <p className="text-sm text-muted-foreground mb-4">
                Rychlost - Spolehlivost - Flexibilita
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produkty</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground">Traktory TIGER</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">Nakladače MANITECH</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">VZV LIZZARD</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">Příslušenství</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Služby</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground">Servis</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">Pronájem</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">Dotace</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">Financování</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>zemstroje@gmail.com</p>
                <p>+420 601 017 000</p>
                <p>Skuhrov 13<br/>468 22 Železný Brod</p>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 TIGER CZ s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}

export default App