import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Star, Shield, Wrench, Clock, ArrowRight } from '@phosphor-icons/react'
import { Toaster } from '@/components/ui/sonner'
import { useKV } from '@github/spark/hooks'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Import components
import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import ProductCard from '@/components/ProductCard'
import ProductDetail from '@/components/ProductDetail'
import Subsidies from '@/components/Subsidies'
import Service from '@/components/Service'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'

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

function AppContent() {
  const [showContactForm, setShowContactForm] = useKV('showContactForm', false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'product-detail' | 'subsidies' | 'service' | 'contacts'>('home')
  
  const [products, setProducts] = useKV<Product[]>('products', [])
  const [news, setNews] = useKV<NewsItem[]>('news', [])

  // Initialize sample data on first load
  useEffect(() => {
    if (products.length === 0) {
      const sampleProducts: Product[] = [
        {
          id: 'tiger-504',
          name: 'TIGER 504',
          price: '199 000 Kč',
          power: '50 HP',
          category: 'Traktory',
          brand: 'TIGER',
          image: '/api/placeholder/400/300',
          badges: ['CENOVÁ BOMBA', 'NEJPRODÁVANĚJŠÍ'],
          description: 'Nejlevnější traktor s výkonem 50 HP na českém trhu. Plný výkon za cenu běžných zahradních traktorů.',
          specs: {
            'Výkon motoru': '50 HP',
            'Palivová nádrž': '45 l',
            'Hydraulika': 'Jednoduché vývodové okruhy',
            'Záruka': '2 roky'
          },
          features: [
            'Přímý dovoz od výrobce',
            'Bez prostředníků - nejlepší cena',
            'Lokální servis v ČR',
            'Dostupné náhradní díly'
          ],
          available: true
        },
        {
          id: 'tiger-704',
          name: 'TIGER 704',
          price: '299 000 Kč',
          power: '70 HP',
          category: 'Traktory',
          brand: 'TIGER',
          image: '/api/placeholder/400/300',
          badges: ['VÝKONNÝ'],
          description: 'Výkonnější traktor pro náročnější práce s možností připojení nakladače.',
          specs: {
            'Výkon motoru': '70 HP',
            'Palivová nádrž': '65 l',
            'Hydraulika': 'Dvoucestná s nakladačem',
            'Rozchod kol': 'Nastavitelný'
          },
          features: [
            'Kompatibilní s nakladačem TZ04D',
            'Rozšiřitelný rozchod pro stabilitu',
            'Profesionální hydraulický systém',
            '2 roky záruky'
          ],
          available: true
        },
        {
          id: 'manitech-ml280',
          name: 'MANITECH ML280',
          price: 'Na dotaz',
          power: '80 HP',
          category: 'Nakladače',
          brand: 'MANITECH',
          image: '/api/placeholder/400/300',
          badges: ['MANIPULAČNÍ TECHNIKA'],
          description: 'Kolový nakladač pro profesionální použití ve stavebnictví a zemědělství.',
          specs: {
            'Výkon motoru': '80 HP',
            'Zdvihací síla': '2800 kg',
            'Objem lžíce': '1.2 m³',
            'Pracovní tlak': '180 bar'
          },
          features: [
            'Ergonomická kabina s klimatizací',
            'Široká škála příslušenství',
            'Jednoduchá obsluha',
            'Vysoká spolehlivost'
          ],
          available: true
        }
      ]
      setProducts(sampleProducts)
    }

    if (news.length === 0) {
      const sampleNews: NewsItem[] = [
        {
          id: '1',
          title: 'TIGER 504 v nabídce pronájmu',
          content: 'Nově můžete traktor TIGER 504 vyzkoušet v pronájmu se zvýhodněním při následné koupi.',
          date: '13. 8. 2025',
          featured: true
        },
        {
          id: '2',
          title: 'Dorazilo 50 nových traktorů',
          content: 'Do skladu jsme přijali 40× TIGER 504 a 10× TIGER 704. Část stále k dispozici.',
          date: '25. 7. 2025',
          featured: false
        },
        {
          id: '3',
          title: 'Nový dealer ve Velké Británii',
          content: 'Autorizovaný dealer v Norwichi rozšiřuje naši síť. Expedovali jsme 6 traktorů.',
          date: '23. 7. 2025',
          featured: false
        }
      ]
      setNews(sampleNews)
    }
  }, [products.length, news.length, setProducts, setNews])

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
    { name: 'Domů', href: '#home', onClick: handleBackToHome, active: currentView === 'home' },
    { name: 'Traktory', href: '#tractors', onClick: () => setCurrentView('products'), active: currentView === 'products' || currentView === 'product-detail' },
    { name: 'Servis', href: '#service', onClick: () => setCurrentView('service'), active: currentView === 'service' },
    { name: 'Pronájem', href: '#rental', onClick: () => setCurrentView('home'), active: false },
    { name: 'Dotace', href: '#subsidies', onClick: () => setCurrentView('subsidies'), active: currentView === 'subsidies' },
    { name: 'Kontakt', href: '#contact', onClick: () => setCurrentView('contacts'), active: currentView === 'contacts' }
  ]

  // If showing contacts, render contacts component
  if (currentView === 'contacts') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
        <div className="pt-20"> {/* Add padding to account for sticky navbar */}
          <Contacts onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => setCurrentView('products')} 
          onSubsidiesClick={() => setCurrentView('subsidies')}
        />
        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  // If showing service, render service component
  if (currentView === 'service') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
        <div className="pt-20"> {/* Add padding to account for sticky navbar */}
          <Service onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => setCurrentView('products')} 
          onSubsidiesClick={() => setCurrentView('subsidies')}
        />
        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  // If showing subsidies, render subsidies component
  if (currentView === 'subsidies') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
        <div className="pt-20"> {/* Add padding to account for sticky navbar */}
          <Subsidies onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => setCurrentView('products')} 
          onSubsidiesClick={() => setCurrentView('subsidies')}
        />
        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  // If showing products catalog, render product catalog
  if (currentView === 'products') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />

        {/* Products Catalog */}
        <section className="pt-24 py-20 px-4">
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

        <Footer 
          onProductsClick={() => setCurrentView('products')} 
          onSubsidiesClick={() => setCurrentView('subsidies')}
        />

        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  // If showing product detail, render that component
  if (currentView === 'product-detail' && selectedProduct) {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
        <div className="pt-20"> {/* Add padding to account for sticky navbar */}
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToProducts}
            onContact={() => setShowContactForm(true)}
          />
        </div>
        <Footer 
          onProductsClick={() => setCurrentView('products')} 
          onSubsidiesClick={() => setCurrentView('subsidies')}
        />
        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />

      {/* Hero Section */}
      <section id="home" className="pt-24 py-20 px-4">
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
              onClick={() => setCurrentView('contacts')}
            >
              Zobrazit všechny kontakty
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer 
        onProductsClick={() => setCurrentView('products')} 
        onSubsidiesClick={() => setCurrentView('subsidies')}
      />

      {/* Contact Form Modal */}
      <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App