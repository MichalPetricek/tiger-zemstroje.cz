import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, Phone, Mail, MapPin, Shield, Wrench, Star, Truck, Clock, CreditCard } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface RentalProps {
  onBack?: () => void
  onContactClick: () => void
}

interface FormData {
  fullName: string
  email: string
  phone: string
  address: string
  startDate: string
  endDate: string
  note: string
  consent: boolean
}

export default function Rental({ onBack, onContactClick }: RentalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    startDate: '',
    endDate: '',
    note: '',
    consent: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      toast.error('Musíte souhlasit se zpracováním osobních údajů')
      return
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Rezervace byla odeslána! Brzy vás kontaktujeme.')
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        startDate: '',
        endDate: '',
        note: '',
        consent: false
      })
    } catch (error) {
      toast.error('Něco se pokazilo. Zkuste to prosím znovu.')
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const rentalPrices = [
    { period: 'Den', price: '3 000 Kč', priceWithoutVat: '2 479 Kč bez DPH' },
    { period: 'Víkend (Pá-Ne)', price: '6 500 Kč', priceWithoutVat: '5 372 Kč bez DPH' },
    { period: 'Týden (7 dní)', price: '15 000 Kč', priceWithoutVat: '12 397 Kč bez DPH' },
    { period: '1 měsíc', price: '30 000 Kč', priceWithoutVat: '24 793 Kč bez DPH' },
    { period: '3 měsíce', price: '85 000 Kč', priceWithoutVat: '70 248 Kč bez DPH' },
    { period: '6 měsíců', price: '160 000 Kč', priceWithoutVat: '132 231 Kč bez DPH' },
    { period: '12 měsíců', price: '300 000 Kč', priceWithoutVat: '247 934 Kč bez DPH' }
  ]

  const specs = [
    { label: 'Výkon', value: '50 koní' },
    { label: 'Váha včetně nakladače', value: '2100 kg' },
    { label: 'Pohon', value: '4x4' },
    { label: 'Převodovka', value: 'mechanická 8 vpřed / 8 vzad' },
    { label: 'Přední nakladač', value: 'model TZ04D, nosnost 400 kg' },
    { label: 'Příslušenství', value: 'klapačka (lžíce)' }
  ]

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        {onBack && (
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zpět na hlavní stránku
          </Button>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-accent text-accent-foreground mb-4">
                NOVÁ SLUŽBA
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Pronájem traktoru TIGER 504</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Kompletní nabídka pronájmu s předním nakladačem a klapačkou
              </p>
              <p className="text-muted-foreground">
                Náš nejprodávanější model je nyní dostupný i formou pronájmu. 
                Výkonný a spolehlivý traktor ideální pro širokou škálu prací na farmě, zahradě či stavebním pozemku.
              </p>
            </div>

            {/* Product Image */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center mb-4">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="TIGER 504 s nakladačem" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">TIGER 504 s nakladačem TZ04D</h3>
                <p className="text-sm text-muted-foreground">
                  Liberecký kraj • rychlé dodání • férové ceny
                </p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="w-5 h-5 mr-2 text-accent" />
                  Parametry traktoru
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{spec.label}:</span>
                      <span className="text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advantages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-accent" />
                  Výhody pronájmu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Flexibilita</p>
                      <p className="text-sm text-muted-foreground">
                        Pronajměte si na dobu, kterou skutečně potřebujete
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Úspora nákladů</p>
                      <p className="text-sm text-muted-foreground">
                        Bez nutnosti vysoké počáteční investice
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Kompletní servis</p>
                      <p className="text-sm text-muted-foreground">
                        Pravidelná údržba a technická podpora během pronájmu
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Kontakt a převzetí</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="font-medium">+420 601 017 000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>zemstroje@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Skuhrov, okr. Jablonec nad Nisou</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pricing & Form */}
          <div className="space-y-8">
            {/* Pricing Table */}
            <Card>
              <CardHeader>
                <CardTitle>Ceník pronájmu</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Ceny zahrnují DPH 21%. Konečná cena dle délky pronájmu a požadavků.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    Krátkodobý pronájem
                  </h4>
                  {rentalPrices.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-medium">{item.period}</span>
                      <div className="text-right">
                        <div className="font-bold text-accent">{item.price}</div>
                        <div className="text-xs text-muted-foreground">{item.priceWithoutVat}</div>
                      </div>
                    </div>
                  ))}
                  
                  <Separator className="my-4" />
                  
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    Dlouhodobý pronájem
                  </h4>
                  {rentalPrices.slice(3).map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-medium">{item.period}</span>
                      <div className="text-right">
                        <div className="font-bold text-accent">{item.price}</div>
                        <div className="text-xs text-muted-foreground">{item.priceWithoutVat}</div>
                      </div>
                    </div>
                  ))}
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Doprava</span>
                    <div className="text-right">
                      <div className="font-bold text-accent">25 Kč/km</div>
                      <div className="text-xs text-muted-foreground">21 Kč/km bez DPH</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conditions */}
            <Card>
              <CardHeader>
                <CardTitle>Podmínky pronájmu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Vratná kauce: <strong>10 000 Kč</strong> (8 264 Kč bez DPH)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Základní pojištění v ceně</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-5 h-5 text-accent" />
                    <span>Servis a asistence 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <Card className="border-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <Star className="w-5 h-5 mr-2" />
                  Speciální nabídka
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Pokud se rozhodnete po pronájmu zakoupit traktor TIGER 504, 
                  nabízíme vám <strong>výrazně zvýhodněnou cenu</strong>. 
                  Vyzkoušejte si stroj v praxi před samotným nákupem!
                </p>
              </CardContent>
            </Card>

            {/* Reservation Form */}
            <Card>
              <CardHeader>
                <CardTitle>Rezervační formulář</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Vyplňte formulář a my vás co nejdříve kontaktujeme
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Jméno a příjmení / Firma</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefonní číslo</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Adresa vč. PSČ</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">Začátek pronájmu</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate">Konec pronájmu</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="note">Poznámka / Dotaz</Label>
                    <Textarea
                      id="note"
                      value={formData.note}
                      onChange={(e) => handleInputChange('note', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                      required
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      Souhlasím se zpracováním osobních údajů pro zpracování tohoto dotazu a poskytnutí 
                      servisních služeb. Souhlas mohu kdykoli odvolat.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Rezervovat
                    <Truck className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}