import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Wrench, 
  Clock, 
  Shield, 
  Truck, 
  Phone, 
  CheckCircle,
  Star,
  Gear,
  Toolbox
} from '@phosphor-icons/react'
import { toast } from 'sonner'

interface ServiceProps {
  onContactClick: () => void
}

export default function Service({ onContactClick }: ServiceProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    machineType: '',
    issueDescription: '',
    preferredDate: '',
    contactMethod: 'phone' as 'phone' | 'email',
    gdprConsent: false,
    marketingConsent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.gdprConsent) {
      toast.error('Pro odeslání formuláře je nutný souhlas se zpracováním osobních údajů')
      return
    }

    if (!formData.name || !formData.phone || !formData.email || !formData.machineType || !formData.issueDescription) {
      toast.error('Vyplňte prosím všechna povinná pole')
      return
    }

    // Simulate form submission
    toast.success('Formulář byl úspěšně odeslán. Náš technik vás brzy kontaktuje!')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      machineType: '',
      issueDescription: '',
      preferredDate: '',
      contactMethod: 'phone',
      gdprConsent: false,
      marketingConsent: false
    })
  }

  const serviceFeatures = [
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Expresní diagnostika",
      description: "Rychlé určení závady s následnou cenovou nabídkou"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Náhradní díly do 10 dnů",
      description: "Skladem nebo dodání letecky přímo od výrobce"
    },
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      title: "Opravy u zákazníka",
      description: "Přijedeme přímo k vám nebo oprava v našem servisu"
    },
    {
      icon: <Gear className="w-8 h-8 text-accent" />,
      title: "Zapůjčení náhrady",
      description: "Náhradní technika během opravy vašeho stroje"
    },
    {
      icon: <Toolbox className="w-8 h-8 text-accent" />,
      title: "Certifikace EWT",
      description: "Odborné svařování a opravy konstrukcí dle EU norem"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Flexibilní přístup",
      description: "Individuální domluva podle vašich potřeb"
    }
  ]

  const pricingData = [
    {
      service: "Práce servisního technika",
      price: "750 Kč/hod",
      note: "Orientační cena, může se lišit podle složitosti"
    },
    {
      service: "Doprava technika",
      price: "18 Kč/km",
      note: "Minimální účtovaná vzdálenost 10 km"
    },
    {
      service: "Diagnostika závady",
      price: "500 Kč",
      note: "Jednorázová platba při kontrole bez opravy"
    },
    {
      service: "Výjezd mimo pracovní dobu",
      price: "1 200 Kč/hod",
      note: "Příplatek za víkendy a svátky"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Servis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zajišťujeme servis zemědělské a manipulační techniky všech značek 
              se specializací na čínské stroje TIGER, YTO, JINMA, MANITECH
            </p>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Welding Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Specializované svařovací práce
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" weight="fill" />
                  <p className="text-muted-foreground">
                    Certifikace European Welding Technologist (EWT) pro vysoce kvalitní opravy
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" weight="fill" />
                  <p className="text-muted-foreground">
                    Opravy rámů, nosných konstrukcí a dalších svařovaných částí strojů
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" weight="fill" />
                  <p className="text-muted-foreground">
                    Splnění nejpřísnějších evropských norem pro prodloužení životnosti
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" weight="fill" />
                  <p className="text-muted-foreground">
                    Řešení i vážných poškození, která by znamenala dlouhodobé odstavení
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Náhradní díly na čínské stroje</h3>
              <p className="text-muted-foreground mb-6">
                Specializujeme se na dodávky dílů pro jakoukoli čínskou značku bez ohledu na model.
              </p>
              <div className="space-y-3">
                <h4 className="font-medium">Pro správné dodání dílu potřebujeme:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" weight="fill" />
                    <span>Typ stroje a model</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" weight="fill" />
                    <span>Výrobní číslo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" weight="fill" />
                    <span>Popis dílu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" weight="fill" />
                    <span>Ideálně fotografii dílu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ceník servisních služeb</h2>
            <p className="text-muted-foreground">
              Transparentní ceny bez skrytých poplatků
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-semibold">Služba</th>
                        <th className="text-left p-4 font-semibold">Cena bez DPH</th>
                        <th className="text-left p-4 font-semibold">Poznámka</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingData.map((item, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="p-4 font-medium">{item.service}</td>
                          <td className="p-4 text-accent font-semibold">{item.price}</td>
                          <td className="p-4 text-sm text-muted-foreground">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-muted/20 text-sm text-muted-foreground">
                  <strong>Poznámka:</strong> Ceny nezahrnují náhradní díly a materiál, tyto položky se účtují samostatně.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Objednat servis</h2>
              <p className="text-muted-foreground">
                Vyplňte formulář a náš technik vás co nejdříve kontaktuje s cenovou nabídkou
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno a příjmení / Firma *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonní číslo *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="machineType">Typ stroje / model *</Label>
                    <Input
                      id="machineType"
                      value={formData.machineType}
                      onChange={(e) => setFormData({...formData, machineType: e.target.value})}
                      placeholder="např. TIGER 504, YTO X804, MANITECH ML280..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issueDescription">Popis závady *</Label>
                    <Textarea
                      id="issueDescription"
                      value={formData.issueDescription}
                      onChange={(e) => setFormData({...formData, issueDescription: e.target.value})}
                      placeholder="Popište co nejpřesněji, co se na stroji pokazilo..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferované datum opravy</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Možnosti kontaktu</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="contact-phone"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={(e) => setFormData({...formData, contactMethod: e.target.value as 'phone'})}
                          className="accent-accent"
                        />
                        <Label htmlFor="contact-phone" className="text-sm">Telefonicky</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="contact-email"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={(e) => setFormData({...formData, contactMethod: e.target.value as 'email'})}
                          className="accent-accent"
                        />
                        <Label htmlFor="contact-email" className="text-sm">E-mailem</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="gdpr-consent"
                        checked={formData.gdprConsent}
                        onCheckedChange={(checked) => setFormData({...formData, gdprConsent: checked as boolean})}
                        required
                      />
                      <Label htmlFor="gdpr-consent" className="text-sm leading-relaxed">
                        Souhlasím se zpracováním osobních údajů pro zpracování tohoto dotazu 
                        a poskytnutí servisních služeb. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketing-consent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => setFormData({...formData, marketingConsent: checked as boolean})}
                      />
                      <Label htmlFor="marketing-consent" className="text-sm leading-relaxed text-muted-foreground">
                        Souhlasím se zasíláním obchodních sdělení, novinek a marketingových nabídek 
                        od společnosti TIGER CZ s.r.o. Souhlas mohu kdykoli odvolat.
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Odeslat žádost o servis
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardHeader className="text-center">
                  <Phone className="w-8 h-8 text-accent mb-2 mx-auto" />
                  <CardTitle className="text-center">Přímý kontakt na servis</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-lg">+420 602 458 177</p>
                  <p className="text-muted-foreground">servis@zemstroje.cz</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Po-Pá: 9:00-16:00<br />
                    Víkendy: dle domluvy
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}