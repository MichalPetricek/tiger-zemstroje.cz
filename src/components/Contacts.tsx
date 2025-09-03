import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, Globe } from '@phosphor-icons/react'

interface ContactsProps {
  onContactClick: () => void
}

export default function Contacts({ onContactClick }: ContactsProps) {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kontakty</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jsme tu pro vás kdykoliv potřebujete pomoc s výběrem, servisem nebo dotazem
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Obchod */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" weight="fill" />
              <CardTitle className="text-xl">Obchod</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div>
                <p className="font-semibold text-lg text-accent">+420 601 017 000</p>
                <p className="text-sm text-muted-foreground">Prodej a poradenství</p>
              </div>
              <div>
                <p className="font-medium">zemstroje@gmail.com</p>
                <p className="text-sm text-muted-foreground">Obchodní dotazy</p>
              </div>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={onContactClick}
              >
                Napsat zprávu
              </Button>
            </CardContent>
          </Card>

          {/* Servis */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" weight="fill" />
              <CardTitle className="text-xl">Servis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div>
                <p className="font-semibold text-lg text-accent">+420 602 458 177</p>
                <p className="text-sm text-muted-foreground">Technická podpora</p>
              </div>
              <div>
                <p className="font-medium">servis@zemstroje.cz</p>
                <p className="text-sm text-muted-foreground">Servisní požadavky</p>
              </div>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={onContactClick}
              >
                Objednat servis
              </Button>
            </CardContent>
          </Card>

          {/* DACH */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Globe className="w-12 h-12 text-accent mx-auto mb-4" weight="fill" />
              <CardTitle className="text-xl">DACH region</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <Badge variant="secondary" className="mb-2">Německo • Rakousko • Švýcarsko</Badge>
              <div>
                <p className="font-medium">dach@zemstroje.cz</p>
                <p className="text-sm text-muted-foreground">Obchodní zástupce pro DACH</p>
              </div>
              <Button 
                variant="outline"
                className="w-full"
                onClick={onContactClick}
              >
                Kontakt DACH
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Provozovna Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-accent" weight="fill" />
                Provozovna a korespondenční adresa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Adresa</h3>
                    <p className="text-muted-foreground">
                      Skuhrov 13<br />
                      468 22 Železný Brod
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      Otevírací doba
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p><span className="font-medium">Pondělí - Pátek:</span> 9:00 - 16:00</p>
                      <p className="text-sm">(jinak dle telefonické domluvy)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Jak nás najdete</h3>
                  <p className="text-sm text-muted-foreground">
                    Naša provozovna se nachází ve Skuhrově u Železného Brodu, 
                    snadno dostupná z hlavních silničních tahů. 
                    Parkování přímo u objektu.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      window.open('https://maps.google.com/?q=Skuhrov+13,+468+22+Železný+Brod,+Czech+Republic', '_blank')
                    }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Navigovat v Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps */}
        <Card>
          <CardHeader>
            <CardTitle>Mapa</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full h-96 rounded-b-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.34!2d15.27342!3d50.64462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e7b2e7b2e7b2e%3A0x123456789abcdef0!2sSkuhrov+13%2C+468+22+%C5%BDelezn%C3%BD+Brod%2C+Czechia!5e0!3m2!1sen!2scz!4v1000000000000!5m2!1sen!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="TIGER CZ s.r.o. - Mapa provozovny"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8">
            <p className="text-muted-foreground mb-6">
              Neváhejte nás kontaktovat. Rádi vám pomůžeme s výběrem vhodné techniky, 
              servisem nebo zodpovíme jakékoli dotazy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('tel:+420601017000')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Zavolat: +420 601 017 000
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={onContactClick}
              >
                <Mail className="w-5 h-5 mr-2" />
                Napsat zprávu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}