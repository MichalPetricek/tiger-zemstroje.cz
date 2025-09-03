import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Warning, Phone, Mail } from '@phosphor-icons/react'

interface SubsidiesProps {
  onContactClick: () => void
}

interface SubsidyProgram {
  id: string
  region: string
  description: string
  supportRate: string
  deadline: string
  municipalities: string[]
  fiches: string[]
}

const subsidyPrograms: SubsidyProgram[] = [
  {
    id: 'oslavka',
    region: 'Oslavka',
    description: 'Pro firmy a podnikatele provozující nezemědělskou činnost na stroje mobilní i nemobilní.',
    supportRate: '50%',
    deadline: '18. 8. – 17. 10. 2025',
    municipalities: ['Budišov', 'Březník', 'Hartvíkovice', 'Hluboké', 'Jasenice', 'Jinošov', 'Kladeruby nad Oslavou', 'a další'],
    fiches: ['Fiche 4 - mobilní i nemobilní stroje']
  },
  {
    id: 'rokytna',
    region: 'Rokytná',
    description: 'Pro obce, svazky obcí a neziskové organizace na komunální techniku.',
    supportRate: 'min. 70%',
    deadline: '22. 8. – 22. 9. 2025',
    municipalities: ['Babice', 'Bačice', 'Biskupice-Pulkov', 'Blatnice', 'Bohušice', 'Cidlina', 'a další'],
    fiches: ['Fiche 5 - komunální technika', 'Fiche 4 - stroje pro firmy (max. 50%)']
  },
  {
    id: 'sedlcansko',
    region: 'Sedlčansko',
    description: 'Pro podnikatele v oblasti lesnické činnosti a zemědělství.',
    supportRate: 'max. 60%',
    deadline: '1. 9. - 21. 10. 2025',
    municipalities: ['Bohostice', 'Cetyně', 'Dolní Hbity', 'Dublovice', 'Jablonná', 'Jesenice', 'a další'],
    fiches: ['Fiche 2 - lesnická činnost', 'Fiche 1 - zemědělství (60%)']
  },
  {
    id: 'mezi-hrady',
    region: 'Mezi Hrady',
    description: 'Pro obce a neziskové organizace na komunální techniku.',
    supportRate: '80%',
    deadline: '1. 9. – 12. 10. 2025',
    municipalities: ['Broumy', 'Hudlice', 'Hýskov', 'Chyňava', 'Kublov', 'Nižbor', 'a další'],
    fiches: ['Fiche 5 - malotraktory, štěpkovače, sekačky, křovinořezy']
  }
]

export default function Subsidies({ onContactClick }: SubsidiesProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Dotace na zemědělskou techniku
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pomoháme získat dotace na zemědělskou a stavební techniku. Od výběru programu až po úspěšné podání žádosti.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Identifikace programů</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Najdeme vhodné dotační programy pro vaši techniku a region
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Kompletní administrace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Připravíme dokumentaci a zajistíme veškerou administraci žádosti
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Vyúčtování dotace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pomůžeme s vyúčtováním a splněním všech podmínek
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Financing Alert */}
          <Card className="mb-16 border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                Nemáte dostatek vlastních prostředků?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Kromě pomoci s dotacemi vám můžeme zajistit výhodné financování pro pořízení zemědělské a stavební techniky.
              </p>
            </CardContent>
          </Card>

          {/* Warning */}
          <Card className="mb-16 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Warning className="w-6 h-6 text-destructive" />
                Důležité upozornění
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Negarantujeme úspěšné schválení dotace, ale uděláme maximum pro to, aby vaše žádost měla co největší šanci na úspěch.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Subsidy Programs */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Aktuální dotační výzvy
            </h2>
            <p className="text-xl text-muted-foreground">
              Přehled aktivních dotačních programů pro rok 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {subsidyPrograms.map((program) => (
              <Card key={program.id}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{program.region}</CardTitle>
                    <Badge variant="outline" className="text-accent border-accent">
                      {program.supportRate}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    Termín: {program.deadline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{program.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Dostupné programy:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {program.fiches.map((fiche, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                          {fiche}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Příklady obcí:</h4>
                    <p className="text-xs text-muted-foreground">
                      {program.municipalities.join(', ')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Potřebujete pomoc s dotací?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Kontaktujte nás pro více informací k vámi vybrané dotaci
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={onContactClick}
              >
                Napište nám
                <Mail className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href="tel:+420601017000" className="flex items-center">
                  Zavolejte nám
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}