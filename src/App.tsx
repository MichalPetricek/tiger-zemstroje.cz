import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, MapPin, Star, Shield, Wrench, Clock, ArrowRight, Envelope } from '@phosphor-icons/react'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Import components
import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import ProductCard from '@/components/ProductCard'
import ProductDetail from '@/components/ProductDetail'
import Subsidies from '@/components/Subsidies'
import Service from '@/components/Service'
import Contacts from '@/components/Contacts'
import Rental from '@/components/Rental'
import Products from '@/components/Products'
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
  const [showContactForm, setShowContactForm] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null)
  const [currentView, setCurrentView] = React.useState<'home' | 'products' | 'product-detail' | 'subsidies' | 'service' | 'contacts' | 'rental'>('home')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Traktory')
  
  const [products] = React.useState<Product[]>([
    // Traktory - TIGER
    {
      id: 'tiger-504',
      name: 'TIGER 504',
      price: '199 000 Kč',
      power: '50 HP',
      category: 'Traktory',
      brand: 'TIGER',
      image: '/api/placeholder/400/300',
      badges: ['CENOVÁ BOMBA', 'NEJPRODÁVANĚJŠÍ'],
      description: 'Nejlevnější traktor s výkonem 50 HP na českém trhu. Jednoduchá mechanika, 2letá záruka. Traktor není určen k registraci na SPZ.',
      specs: {
        'Výkon motoru': '50 HP',
        'Pohon': '4×4',
        'Převodovka': '8F/8R',
        'Hmotnost (vč. nakladače)': 'cca 2100 kg',
        'Přední nakladač': 'TZ04D (nosnost ~400 kg)',
        'Záruka': '2 roky'
      },
      features: [
        'Přímý dovoz od výrobce',
        'Bez prostředníků - nejlepší cena',
        'Lokální servis v ČR',
        'Jednoduchá mechanika',
        'Možnost připojení nakladače TZ04D'
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
      description: 'Model s možností zvětšení rozchodu prostým otočením kol pro vyšší stabilitu. Nelze přihlásit na SPZ.',
      specs: {
        'Výkon motoru': '70 HP',
        'Pohon': '4×4',
        'Převodovka': 'Mechanická',
        'Rozchod kol': 'Nastavitelný otočením kol',
        'Registrace': 'Nelze přihlásit na SPZ'
      },
      features: [
        'Kompatibilní s nakladačem TZ04D',
        'Rozšiřitelný rozchod pro stabilitu',
        'Jednoduchá mechanika',
        '2 roky záruky',
        'Vyšší výkon pro náročnější práce'
      ],
      available: true
    },
    {
      id: 'tiger-904',
      name: 'TIGER 904',
      price: '399 000 Kč',
      power: '90 HP',
      category: 'Traktory',
      brand: 'TIGER',
      image: '/api/placeholder/400/300',
      badges: ['VÝKONNÝ'],
      description: 'Vyšší výkonová třída TIGER pro profesionální použití. Nelze přihlásit na SPZ.',
      specs: {
        'Výkon motoru': '90 HP',
        'Pohon': '4×4',
        'Řada šasi': 'Těžší kategorie',
        'Registrace': 'Nelze přihlásit na SPZ',
        'Záruka': '2 roky'
      },
      features: [
        'Vysoký výkon pro náročné práce',
        'Robustní konstrukce těžšího šasi',
        'Profesionální hydraulika',
        'Lokální servis v ČR',
        'Vhodný pro větší farmy'
      ],
      available: true
    },
    {
      id: 'tiger-1504',
      name: 'TIGER 1504',
      price: '899 000 Kč',
      power: '150 HP',
      category: 'Traktory',
      brand: 'TIGER',
      image: '/api/placeholder/400/300',
      badges: ['VÝKONNÝ', 'PROFESIONÁLNÍ'],
      description: 'Výkonný traktor ze série těžších šasi TB/TD. Profesionální stroj pro náročné zemědělské podniky.',
      specs: {
        'Výkon motoru': '150 HP',
        'Řada šasi': 'TB/TD - těžší konstrukce',
        'Výkonová třída': 'Až 300 HP v řadě',
        'Kabina': 'Klimatizovaná',
        'Hydraulika': 'Profesionální'
      },
      features: [
        'Těžší šasi pro náročné podmínky',
        'Klimatizovaná kabina',
        'Profesionální hydraulický systém',
        'Vysoká nosnost a stabilita',
        'Pro velkoprodukční zemědělství'
      ],
      available: true
    },
    {
      id: 'tiger-2504',
      name: 'TIGER 2504',
      price: '1 299 000 Kč',
      power: '250 HP',
      category: 'Traktory',
      brand: 'TIGER',
      image: '/api/placeholder/400/300',
      badges: ['NEJVÝKONNĚJŠÍ', 'PROFESIONÁLNÍ'],
      description: 'Nejvýkonnější traktor v naší nabídce ze série těžších šasi TB/TD. Pro velké zemědělské podniky s nejvyšším nasazením.',
      specs: {
        'Výkon motoru': '250 HP',
        'Řada šasi': 'TB/TD - nejtěžší konstrukce',
        'Výkonové pokrytí': 'Až 300 HP v této řadě',
        'Kabina': 'Luxusní s klimatizací',
        'Hydraulika': 'Heavy-duty profesionální'
      },
      features: [
        'Maximální výkon a efektivita',
        'Nejtěžší šasi pro extrémní zátěž',
        'Luxusní kabina s plným vybavením',
        'Nejmodernější hydraulické systémy',
        'Pro největší zemědělské podniky'
      ],
      available: true
    },
    // Traktory - JINMA
    {
      id: 'jinma-254e',
      name: 'JINMA 254E',
      price: '289 000 Kč',
      power: '25 HP',
      category: 'Traktory',
      brand: 'JINMA',
      image: '/api/placeholder/400/300',
      badges: ['KOMPAKTNÍ'],
      description: 'Kompaktní 25HP traktor s možností 4×4, jednoduchá mechanika pro menší farmy a zahrady.',
      specs: {
        'Výkon motoru': '25 HP',
        'Pohon': '2WD / 4WD',
        'Rozměry (D×Š×V)': '3265×1440–1640×2450 mm',
        'Rozvor': '1670 mm',
        'Světlá výška': '320 mm',
        'Rychlost': 'až 28 km/h',
        'Převodovka': '8F/2R',
        'Hmotnost': '1527 kg'
      },
      features: [
        'Kompaktní rozměry pro malé prostory',
        'Volitelný pohon 4WD',
        'ROPS ochrana / kabina s topením',
        'Nízká spotřeba paliva',
        'Jednoduchá obsluha a údržba'
      ],
      available: true
    },
    // Traktory - YTO NLY série
    {
      id: 'yto-nly954',
      name: 'YTO NLY954',
      price: '799 000 Kč',
      power: '95 HP',
      category: 'Traktory',
      brand: 'YTO',
      image: '/api/placeholder/400/300',
      badges: ['KLIMATIZACE'],
      description: 'Profesionální traktor z řady NLY s motorem YTO Stage V (nízké vibrace/hluk) a vysokou pracovní účinností.',
      specs: {
        'Výkon motoru': '95 HP',
        'Motor': 'YTO Stage V (nízké vibrace/hluk)',
        'Převodovka': '12F/12R',
        'Kabina': 'Klimatizovaná',
        'Hydraulika': 'Vysoká pracovní účinnost'
      },
      features: [
        'Motor Stage V s nízkými vibracemi',
        'Klimatizovaná kabina',
        '12-rychlostní převodovka',
        'Vysoká pracovní účinnost',
        'Ergonomické ovládání'
      ],
      available: true
    },
    {
      id: 'yto-nly1054',
      name: 'YTO NLY1054',
      price: '899 000 Kč',
      power: '105 HP',
      category: 'Traktory',
      brand: 'YTO',
      image: '/api/placeholder/400/300',
      badges: ['KLIMATIZACE', 'VÝKONNÝ'],
      description: 'Výkonný traktor z řady NLY s motorem Stage V a vysokou pracovní účinností pro středně velké zemědělské podniky.',
      specs: {
        'Výkon motoru': '105 HP',
        'Motor': 'YTO Stage V (nízké vibrace/hluk)',
        'Převodovka': '12F/12R',
        'Kabina': 'Klimatizovaná s filtry',
        'Hydraulika': 'Vysoká pracovní účinnost'
      },
      features: [
        'Výkonný a tichý motor Stage V',
        'Luxusní kabina s filtrací vzduchu',
        '12-rychlostní převodovka s vysokou účinností',
        'Profesionální hydraulické systémy',
        'Optimální pro střední farmy'
      ],
      available: true
    },
    {
      id: 'yto-nly1154',
      name: 'YTO NLY1154',
      price: '999 000 Kč',
      power: '115 HP',
      category: 'Traktory',
      brand: 'YTO',
      image: '/api/placeholder/400/300',
      badges: ['KLIMATIZACE', 'VÝKONNÝ'],
      description: 'Nejsilnější model v NLY sérii s motorem Stage V, maximálním výkonem a komfortem pro náročné aplikace.',
      specs: {
        'Výkon motoru': '115 HP',
        'Motor': 'YTO Stage V (nízké vibrace/hluk)',
        'Převodovka': '12F/12R vysoká účinnost',
        'Kabina': 'Premium s klimatizací',
        'Hydraulika': 'High-flow profesionální'
      },
      features: [
        'Maximální výkon v NLY sérii',
        'Nejmodernější Stage V motor',
        'Premium kabina s plným komfortem',
        'High-flow hydraulické systémy',
        'Pro nejnáročnější zemědělské aplikace'
      ],
      available: true
    },
    // Traktory - YTO NMF série
    {
      id: 'yto-nmf554c',
      name: 'YTO NMF554C',
      price: '549 000 Kč',
      power: '55 HP',
      category: 'Traktory',
      brand: 'YTO',
      image: '/api/placeholder/400/300',
      badges: ['UNIVERZÁLNÍ'],
      description: 'Kompaktní traktor z řady NMF určené pro menší a střední farmy. Univerzální použití s výborným poměrem cena/výkon.',
      specs: {
        'Výkon motoru': '55 HP',
        'Řada': 'NMF - kompaktní pro malé/střední farmy',
        'Výkonové pokrytí řady': '55-70 HP',
        'Převodovka': '12F+12R',
        'Hydraulika': 'Standardní'
      },
      features: [
        'Ideální pro menší a střední farmy',
        'Univerzální použití',
        '12-rychlostní převodovka',
        'Spolehlivý a ekonomický motor',
        'Výborný poměr cena/výkon'
      ],
      available: true
    },
    {
      id: 'yto-nmf604c',
      name: 'YTO NMF604C',
      price: '599 000 Kč',
      power: '60 HP',
      category: 'Traktory',
      brand: 'YTO',
      image: '/api/placeholder/400/300',
      badges: ['UNIVERZÁLNÍ'],
      description: 'Výkonnější model NMF série pro středně náročné práce na menších a středních farmách.',
      specs: {
        'Výkon motoru': '60 HP',
        'Řada': 'NMF - kompaktní pro malé/střední farmy',
        'Výkonové pokrytí řady': '55-70 HP',
        'Převodovka': '12F+12R Creeper',
        'Hydraulika': 'Vylepšená'
      },
      features: [
        'Vyšší výkon než NMF554C',
        'Creeper převodovka pro pomalé práce',
        'Vylepšené hydraulické systémy',
        'Větší výkonové rezervy',
        'Optimální pro střední farmy'
      ],
      available: true
    },
    {
      id: 'yto-nmf704c',
      name: 'YTO NMF704C',
      price: '649 000 Kč',
      power: '70 HP',
      category: 'Traktory',
      brand: 'YTO',
      image: '/api/placeholder/400/300',
      badges: ['UNIVERZÁLNÍ', 'VÝKONNÝ'],
      description: 'Nejsilnější model NMF série pro náročnější zemědělské práce na středních farmách.',
      specs: {
        'Výkon motoru': '70 HP',
        'Řada': 'NMF - max. výkon v kompaktní řadě',
        'Výkonové pokrytí řady': '55-70 HP',
        'Převodovka': '16F+16R Creeper',
        'Hydraulika': 'Pokročilá'
      },
      features: [
        'Nejvyšší výkon v NMF sérii',
        '16-rychlostní převodovka s Creeper',
        'Pokročilé hydraulické systémy',
        'Pro náročnější zemědělské aplikace',
        'Maximální výkon v kompaktní kategorii'
      ],
      available: true
    },
    // Bagry
    {
      id: 'bat08',
      name: 'Bagr BAT08',
      price: 'Na dotaz',
      power: '18 HP',
      category: 'Bagry',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['KOMPAKTNÍ'],
      description: 'Kompaktní bagr pro menší stavební práce.',
      specs: {
        'Výkon motoru': '18 HP',
        'Hmotnost': '800 kg',
        'Hloubka výkopu': '1.8 m',
        'Dosah': '3.2 m'
      },
      features: [
        'Kompaktní rozměry',
        'Snadná manipulace',
        'Ekonomický provoz',
        'Univerzální použití'
      ],
      available: true
    },
    {
      id: 'bat10',
      name: 'Bagr BAT10',
      price: 'Na dotaz',
      power: '24 HP',
      category: 'Bagry',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['KOMPAKTNÍ'],
      description: 'Výkonnější kompaktní bagr pro středně náročné práce.',
      specs: {
        'Výkon motoru': '24 HP',
        'Hmotnost': '1000 kg',
        'Hloubka výkopu': '2.2 m',
        'Dosah': '3.8 m'
      },
      features: [
        'Vyšší výkon než BAT08',
        'Větší dosah a hloubka',
        'Robustnější konstrukce',
        'Profesionální použití'
      ],
      available: true
    },
    {
      id: 'bat12',
      name: 'Bagr BAT12',
      price: 'Na dotaz',
      power: '28 HP',
      category: 'Bagry',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['STŘEDNĚ VELKÝ'],
      description: 'Středně velký bagr pro profesionální stavební práce.',
      specs: {
        'Výkon motoru': '28 HP',
        'Hmotnost': '1200 kg',
        'Hloubka výkopu': '2.5 m',
        'Dosah': '4.2 m'
      },
      features: [
        'Optimální pro stavební práce',
        'Výborný výkon/hmotnost poměr',
        'Stabilní a bezpečný',
        'Nízké provozní náklady'
      ],
      available: true
    },
    {
      id: 'bat15',
      name: 'Bagr BAT15',
      price: 'Na dotaz',
      power: '38 HP',
      category: 'Bagry',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['VÝKONNÝ'],
      description: 'Výkonný bagr pro náročné stavební a zemní práce.',
      specs: {
        'Výkon motoru': '38 HP',
        'Hmotnost': '1500 kg',
        'Hloubka výkopu': '3.0 m',
        'Dosah': '5.0 m'
      },
      features: [
        'Vysoký výkon pro náročné práce',
        'Velká hloubka výkopu',
        'Stabilní podvozek',
        'Profesionální hydraulika'
      ],
      available: true
    },
    {
      id: 'bat17',
      name: 'Bagr BAT17',
      price: 'Na dotaz',
      power: '42 HP',
      category: 'Bagry',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['VÝKONNÝ'],
      description: 'Výkonný bagr s vysokou produktivitou práce.',
      specs: {
        'Výkon motoru': '42 HP',
        'Hmotnost': '1700 kg',
        'Hloubka výkopu': '3.2 m',
        'Dosah': '5.2 m'
      },
      features: [
        'Vysoká produktivita',
        'Pokročilá hydraulika',
        'Komfortní kabina',
        'Nízké emise'
      ],
      available: true
    },
    {
      id: 'bat18',
      name: 'Bagr BAT18',
      price: 'Na dotaz',
      power: '45 HP',
      category: 'Bagry',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['NEJSILNĚJŠÍ'],
      description: 'Nejsilnější bagr v naší nabídce pro nejvýkonnější práce.',
      specs: {
        'Výkon motoru': '45 HP',
        'Hmotnost': '1800 kg',
        'Hloubka výkopu': '3.5 m',
        'Dosah': '5.5 m'
      },
      features: [
        'Maximální výkon v kategorii',
        'Nejmodernější hydraulika',
        'Luxusní kabina',
        'Pro nejnáročnější aplikace'
      ],
      available: true
    },
    // Nakladače
    {
      id: 't135',
      name: 'T 135',
      price: 'Na dotaz',
      power: '35 HP',
      category: 'Nakladače',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['KOMPAKTNÍ'],
      description: 'Kompaktní teleskopický nakladač pro univerzální použití.',
      specs: {
        'Výkon motoru': '35 HP',
        'Zdvihací výška': '3.5 m',
        'Nosnost': '1350 kg',
        'Dosah': '2.8 m'
      },
      features: [
        'Kompaktní rozměry',
        'Teleskopické rameno',
        'Univerzální použití',
        'Snadná obsluha'
      ],
      available: true
    },
    {
      id: 'mtech-1160',
      name: 'MTECH 1160',
      price: 'Na dotaz',
      power: '60 HP',
      category: 'Nakladače',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['VÝKONNÝ'],
      description: 'Výkonný kolový nakladač pro střední stavební práce.',
      specs: {
        'Výkon motoru': '60 HP',
        'Zdvihací výška': '3.2 m',
        'Nosnost': '1100 kg',
        'Objem lžíce': '0.6 m³'
      },
      features: [
        'Výkonný motor',
        'Robustní konstrukce',
        'Jednoduchá údržba',
        'Spolehlivý provoz'
      ],
      available: true
    },
    {
      id: 'mtech-45',
      name: 'MTECH 4.5',
      price: 'Na dotaz',
      power: '75 HP',
      category: 'Nakladače',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['TELESKOPICKÝ'],
      description: 'Teleskopický nakladač s nosností 4.5 tuny.',
      specs: {
        'Výkon motoru': '75 HP',
        'Zdvihací výška': '6.0 m',
        'Nosnost': '4500 kg',
        'Dosah': '3.5 m'
      },
      features: [
        'Vysoká zdvihací výška',
        'Velká nosnost',
        'Teleskopické rameno',
        'Profesionální vybavení'
      ],
      available: true
    },
    {
      id: 'mtech-45t',
      name: 'MTECH 4.5T',
      price: 'Na dotaz',
      power: '75 HP',
      category: 'Nakladače',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['TELESKOPICKÝ', 'OTOČNÝ'],
      description: 'Otočný teleskopický nakladač s nosností 4.5 tuny.',
      specs: {
        'Výkon motoru': '75 HP',
        'Zdvihací výška': '6.0 m',
        'Nosnost': '4500 kg',
        'Otočení': '360°'
      },
      features: [
        'Plné otočení 360°',
        'Vysoká flexibilita práce',
        'Výborná stabilita',
        'Pokročilé ovládání'
      ],
      available: true
    },
    {
      id: 'mtech-55',
      name: 'MTECH 5.5',
      price: 'Na dotaz',
      power: '95 HP',
      category: 'Nakladače',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['TELESKOPICKÝ', 'VÝKONNÝ'],
      description: 'Výkonný teleskopický nakladač pro náročné práce.',
      specs: {
        'Výkon motoru': '95 HP',
        'Zdvihací výška': '7.0 m',
        'Nosnost': '5500 kg',
        'Dosah': '4.0 m'
      },
      features: [
        'Vysoký výkon a nosnost',
        'Maximální zdvihací výška',
        'Robustní konstrukce',
        'Pro těžké práce'
      ],
      available: true
    },
    {
      id: 'mtech-55t',
      name: 'MTECH 5.5T',
      price: 'Na dotaz',
      power: '95 HP',
      category: 'Nakladače',
      brand: 'MANITECH',
      image: '/api/placeholder/400/300',
      badges: ['TELESKOPICKÝ', 'OTOČNÝ', 'NEJSILNĚJŠÍ'],
      description: 'Nejsilnější otočný teleskopický nakladač v naší nabídce.',
      specs: {
        'Výkon motoru': '95 HP',
        'Zdvihací výška': '7.0 m',
        'Nosnost': '5500 kg',
        'Otočení': '360°'
      },
      features: [
        'Maximální výkon a flexibilita',
        'Plné otočení s nejvyšší nosností',
        'Pro nejtěžší aplikace',
        'Prémiové vybavení'
      ],
      available: true
    },
    // Ještěrky
    {
      id: 'lizard-30',
      name: 'LIZARD 30',
      price: 'Na dotaz',
      power: '58 kW',
      category: 'Ještěrky',
      brand: 'LIZZARD-VZV',
      image: '/api/placeholder/400/300',
      badges: ['TERÉNNÍ'],
      description: 'Terénní VZV 3,5–3,8 t s pohonem 4×4 a hydrodynamickou převodovkou pro náročné terény.',
      specs: {
        'Nosnost': '3500–3800 kg',
        'Zdvih': '3–6 m',
        'Hmotnost': '4600 kg',
        'Náklon': '≤ 35°',
        'Světlá výška': '280 mm',
        'Rozvor': '1850 mm',
        'Výkon motoru': '58 kW',
        'Rychlost': '28 km/h',
        'Rozměry stroje': '3800×1850×2200 mm'
      },
      features: [
        'Pohon 4×4 pro náročné terény',
        'Hydrodynamická převodovka',  
        'Vysoká nosnost až 3,8 tuny',
        'Variabilní zdvih 3-6 metrů',
        'Kompaktní rozměry pro manévrovatelnost'
      ],
      available: true
    },
    {
      id: 'lizard-35',
      name: 'LIZARD 35',
      price: 'Na dotaz',
      power: '58 kW',
      category: 'Ještěrky',
      brand: 'LIZZARD-VZV',
      image: '/api/placeholder/400/300',
      badges: ['TERÉNNÍ'],
      description: 'Terénní VZV 3,5–3,8 t s pohonem 4×4 a hydrodynamickou převodovkou. Parametrově shodná třída s LIZARD 30.',
      specs: {
        'Nosnost': '3500–3800 kg',
        'Zdvih': '3–6 m',
        'Hmotnost': '4600 kg',
        'Náklon': '≤ 35°',
        'Světlá výška': '280 mm',
        'Rozvor': '1850 mm',
        'Poloměr otáčení': '3500 mm',
        'Motor': '58 kW',
        'Rychlost': '28 km/h',
        'Délky vidlí': '1220–1820 mm',
        'Rozměry': '3800×1850×2200 mm'
      },
      features: [
        'Stejná nosnost jako LIZARD 30',
        'Pohon 4×4 s hydrodynamickou převodovkou',
        'Variabilní délky vidlí',
        'Kompaktní poloměr otáčení',
        'Optimalizované rozměry pro práci'
      ],
      available: true
    },
    {
      id: 'lizard-35-pro',
      name: 'LIZARD 35 PRO',
      price: 'Na dotaz',
      power: '58 kW',
      category: 'Ještěrky',
      brand: 'LIZZARD-VZV',
      image: '/api/placeholder/400/300',
      badges: ['TERÉNNÍ', 'ZESÍLENÝ'],
      description: 'Zesílená varianta LIZARD 35 s vyšší pohotovostní hmotností pro náročnější aplikace.',
      specs: {
        'Nosnost': '3500–3800 kg',
        'Zdvih': '3–6 m',
        'Hmotnost': '5100 kg (zesílená)',
        'Náklon': '≤ 35°',
        'Světlá výška': '280 mm',
        'Rozvor': '1950 mm (prodloužený)',
        'Poloměr otáčení': '3500 mm',
        'Motor': '58 kW',
        'Rychlost': '28 km/h',
        'Délky vidlí': '1220–1820 mm',
        'Rozměry': '3600×1850×2200 mm'
      },
      features: [
        'Zesílená konstrukce (+500 kg hmotnosti)',
        'Prodloužený rozvor pro vyšší stabilitu',
        'Stejná nosnost s lepší stabilitou',
        'Pokročilé bezpečnostní systémy',
        'Pro nejnáročnější terénní podmínky'
      ],
      available: true
    },
    {
      id: 'lizard-50',
      name: 'LIZARD 50',
      price: 'Na dotaz',
      power: '76 kW',
      category: 'Ještěrky',
      brand: 'LIZZARD-VZV',
      image: '/api/placeholder/400/300',
      badges: ['TERÉNNÍ', 'NEJSILNĚJŠÍ'],
      description: 'Nejvyšší třída LIZZARD s nosností 5 tun a zdvihem až 6 metrů. 4válcový motor pro maximální výkon.',
      specs: {
        'Nosnost': '5000 kg',
        'Zdvih': '3–6 m',
        'Hmotnost': '7800 kg',
        'Světlá výška': '380 mm',
        'Motor': '4válcový 4,8 l, 76 kW',
        'Rychlost': '28 km/h',
        'Pohon': '4×4',
        'Převodovka': 'Hydrodynamická'
      },
      features: [
        'Maximální nosnost 5 tun',
        '4válcový motor 4,8 l pro nejvyšší výkon',
        'Nejrobustnější konstrukce v řadě',
        'Nejvyšší světlá výška 380 mm',
        'Pro nejtěžší terénní aplikace'
      ],
      available: true
    }
  ])

  const [news] = React.useState<NewsItem[]>([
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
  ])

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    setCurrentView('product-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToProducts = () => {
    setCurrentView('products')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleViewChange = (view: 'home' | 'products' | 'product-detail' | 'subsidies' | 'service' | 'contacts' | 'rental') => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigation = [
    { name: 'Domů', href: '#home', onClick: handleBackToHome, active: currentView === 'home' },
    { name: 'Produkty', href: '#products', onClick: () => handleViewChange('products'), active: currentView === 'products' || currentView === 'product-detail' },
    { name: 'Servis', href: '#service', onClick: () => handleViewChange('service'), active: currentView === 'service' },
    { name: 'Pronájem', href: '#rental', onClick: () => handleViewChange('rental'), active: currentView === 'rental' },
    { name: 'Dotace', href: '#subsidies', onClick: () => handleViewChange('subsidies'), active: currentView === 'subsidies' },
    { name: 'Kontakt', href: '#contact', onClick: () => handleViewChange('contacts'), active: currentView === 'contacts' }
  ]

  // If showing contacts, render contacts component
  if (currentView === 'contacts') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
        <div className="pt-4">
          <Contacts onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => handleViewChange('products')} 
          onSubsidiesClick={() => handleViewChange('subsidies')}
        />
        <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
        <Toaster />
      </div>
    )
  }

  // If showing rental, render rental component  
  if (currentView === 'rental') {
    return (
      <div className="min-h-screen bg-background text-foreground font-[Inter]">
        <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
        <div className="pt-4">
          <Rental onBack={handleBackToHome} onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => handleViewChange('products')} 
          onSubsidiesClick={() => handleViewChange('subsidies')}
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
        <div className="pt-4">
          <Service onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => handleViewChange('products')} 
          onSubsidiesClick={() => handleViewChange('subsidies')}
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
        <div className="pt-4">
          <Subsidies onContactClick={() => setShowContactForm(true)} />
        </div>
        <Footer 
          onProductsClick={() => handleViewChange('products')} 
          onSubsidiesClick={() => handleViewChange('subsidies')}
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
        <div className="pt-4">
          <Products 
            products={products || []} 
            onProductSelect={handleProductSelect}
            onBack={handleBackToHome}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <Footer 
          onProductsClick={() => handleViewChange('products')} 
          onSubsidiesClick={() => handleViewChange('subsidies')}
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
        <div className="pt-4">
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToProducts}
            onContact={() => setShowContactForm(true)}
          />
        </div>
        <Footer 
          onProductsClick={() => handleViewChange('products')} 
          onSubsidiesClick={() => handleViewChange('subsidies')}
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
      <section id="home" className="pt-16 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
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
                  onClick={() => handleViewChange('rental')}
                >
                  Pronájem
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
      <section id="products" className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Naše produkty</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletní sortiment zemědělské a manipulační techniky přímo od výrobců
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={handleProductSelect}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => handleViewChange('products')}
            >
              Zobrazit všechny produkty
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-xl text-muted-foreground">
              Komplexní péče o vaši techniku
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Aktuality</h2>
            <p className="text-xl text-muted-foreground">
              Nejnovější informace ze světa TIGER CZ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section id="contact" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Kontakt</h2>
            <p className="text-xl text-muted-foreground">
              Jsme tu pro vás kdykoliv potřebujete
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
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

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => handleViewChange('contacts')}
            >
              Zobrazit všechny kontakty
              <Envelope className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer 
        onProductsClick={() => handleViewChange('products')} 
        onSubsidiesClick={() => handleViewChange('subsidies')}
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