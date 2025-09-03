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
    region: 'Oslavka (Kraj Vysočina)',
    description: 'Firmy a podnikatelé - stroje mobilní i nemobilní pro nezemědělskou činnost.',
    supportRate: '50%',
    deadline: '18. 8. – 17. 10. 2025',
    municipalities: ['Budišov', 'Březník', 'Hartvíkovice', 'Hluboké', 'Jasenice', 'Jinošov', 'Kladeruby nad Oslavou', 'Kojatín', 'Koněšín', 'Kozlany', 'Kralice nad Oslavou', 'Kramolín', 'Krokočín', 'a další (35 obcí)'],
    fiches: ['Fiche 4 - mobilní i nemobilní stroje pro nezemědělskou činnost']
  },
  {
    id: 'rokytna',
    region: 'Rokytná (Kraj Vysočina)',
    description: 'Obce a neziskové organizace - komunální technika, firmy - stroje pro různé činnosti.',
    supportRate: '50-70%',
    deadline: '22. 8. – 22. 9. 2025',
    municipalities: ['Babice', 'Bačice', 'Biskupice-Pulkov', 'Blatnice', 'Bohušice', 'Cidlina', 'Dalešice', 'Dešov', 'Dolní Lažany', 'Dukovany', 'a další (40+ obcí)'],
    fiches: ['Fiche 5 - komunální technika pro obce (min. 70%)', 'Fiche 4 - stroje pro firmy a podnikatele (max. 50%)']
  },
  {
    id: 'sedlcansko',
    region: 'Sedlčansko (Středočeský kraj)',
    description: 'Podnikatelé v lesnické, zemědělské a školkařské činnosti.',
    supportRate: '60%',
    deadline: '1. 9. - 21. 10. 2025',
    municipalities: ['Bohostice', 'Cetyně', 'Dolní Hbity', 'Dublovice', 'Jablonná', 'Jesenice', 'Kamýk nad Vltavou', 'Klučenice', 'Kosova Hora', 'a další (24 obcí)'],
    fiches: ['Fiche 2 - lesnická činnost, dřevozpracování (max. 60%)', 'Fiche 1 - zemědělství, školkařství, zpracování produkce (60%)']
  },
  {
    id: 'mezi-hrady',
    region: 'Mezi Hrady (Středočeský kraj)',
    description: 'Obce a neziskové organizace - komunální technika.',
    supportRate: '80%',
    deadline: '1. 9. – 12. 10. 2025',
    municipalities: ['Broumy', 'Hudlice', 'Hýskov', 'Chyňava', 'Kublov', 'Nižbor', 'Nový Jáchymov', 'Otročiněves', 'Svatá', 'Trubská', 'a další (20 obcí)'],
    fiches: ['Fiche 5 - malotraktory s nástavbami, štěpkovače, sekačky, křovinořezy, sypače, frézy']
  },
  {
    id: 'vychodni-slovacko',
    region: 'Východní Slovácko (Zlínský kraj)',
    description: 'Obce a neziskové organizace - komunální technika.',
    supportRate: 'min. 70%',
    deadline: '1. 9. – 2. 10. 2025',
    municipalities: ['Bystřice pod Lopeníkem', 'Bánov', 'Březová', 'Dolní Němčí', 'Horní Němčí', 'Korytná', 'Nivnice', 'Slavkov', 'Strání', 'Suchá Lhota', 'Uherský Brod', 'Vlčnov'],
    fiches: ['Fiche 5 - malotraktory s nástavbami, štěpkovače, sekačky, křovinořezy, sypače, frézy, multifunkční stroje']
  },
  {
    id: 'roznovsky',
    region: 'Rožnovsko (Zlínský kraj)',
    description: 'Komplexní program pro obce, firmy i podnikatele.',
    supportRate: '50-70%',
    deadline: '1. 9. – 3. 10. 2025',
    municipalities: ['Branky', 'Choryně', 'Dolní Bečva', 'Horní Bečva', 'Hutisko-Solanec', 'Kelč', 'Rožnov pod Radhoštěm', 'Valašské Meziříčí', 'Zubří', 'a další (26 obcí)'],
    fiches: ['Fiche 1 - zemědělství, školkařství (50%)', 'Fiche 3 - zemědělské/nezemědělské firmy (50%)', 'Fiche 4 - zpracování produktů (50%)', 'Fiche 5 - komunální technika pro obce (min. 70%)']
  },
  {
    id: 'region-poodri',
    region: 'Region Poodří (Moravskoslezský kraj)',
    description: 'Obce - komunální technika, firmy - lesnická a nezemědělská činnost.',
    supportRate: '50-70%',
    deadline: '20. 8. – 26. 9. 2025',
    municipalities: ['Albrechtičky', 'Bartošovice', 'Bernartice nad Odrou', 'Bravantice', 'Bílov', 'Bílovec', 'Fulnek', 'Klimkovice', 'Studénka', 'a další (39 obcí)'],
    fiches: ['Fiche 5 - komunální a silniční úklidová technika pro obce (min. 70%)', 'Fiche 4 - stroje pro lesnickou a nezemědělskou činnost (max. 50%)']
  },
  {
    id: 'brana-pisecka',
    region: 'Brána Písecka (Jihočeský kraj)',
    description: 'Firmy a podnikatelé - zemědělská, lesnická a nezemědělská technika.',
    supportRate: 'max. 50%',
    deadline: '15. 9. – 16. 10. 2025',
    municipalities: ['Boudy', 'Cerhonice', 'Dobev', 'Drhovle', 'Horosedly', 'Kestřany', 'Minice', 'Mirotice', 'Orlík nad Vltavou', 'Čimelice', 'a další (25 obcí)'],
    fiches: ['Fiche 4 - mobilní i nemobilní stroje pro zemědělskou, lesnickou a nezemědělskou činnost']
  },
  {
    id: 'hanacke-kralovstvi',
    region: 'Hanácké Království (Olomoucký kraj)',
    description: 'Obce a neziskové organizace - komunální technika.',
    supportRate: 'min. 70%',
    deadline: '1. 8. – 1. 9. 2025',
    municipalities: ['Blatec', 'Brodek u Přerova', 'Charváty', 'Citov', 'Císařov', 'Dub nad Moravou', 'Grygov', 'Kokory', 'Kožušany-Tážaly', 'Krčmaň', 'a další (18 obcí)'],
    fiches: ['Fiche 5 - malotraktory s nástavbami, štěpkovače, sekačky, křovinořezy, sypače, frézy']
  },
  {
    id: 'podhuiri-zeleznych-hor',
    region: 'Podhůří Železných hor (Kraj Vysočina)',
    description: 'Firmy a podnikatelé - zemědělská, lesnická a nezemědělská technika.',
    supportRate: '50%',
    deadline: '20. 8. – 3. 10. 2025',
    municipalities: ['Bezděkov', 'Chotěboř', 'Dolní Sokolovec', 'Jeřišno', 'Klokočov', 'Libice nad Doubravou', 'Lány', 'Maleč', 'Nová Ves u Chotěboře', 'a další (13 obcí)'],
    fiches: ['Fiche 4 - mobilní i nemobilní stroje pro zemědělskou, lesnickou a nezemědělskou činnost']
  },
  {
    id: 'hrubovsky',
    region: 'Hrušovansko (Jihomoravský kraj)',
    description: 'Firmy a podnikatelé - zemědělská, lesnická a nezemědělská technika.',
    supportRate: 'min. 60%',
    deadline: '14. 7. – 8. 9. 2025',
    municipalities: ['Božice', 'Břežany', 'Dyjákovice', 'Hevlín', 'Hrabětice', 'Hrušovany nad Jevišovkou', 'Jevišovka', 'Mackovice', 'Pravice', 'Velký Karlov', 'Čejkovice', 'Šanov'],
    fiches: ['Fiche 4 - mobilní i nemobilní stroje pro zemědělskou, lesnickou a nezemědělskou činnost']
  },
  {
    id: 'zubiri-zeme',
    region: 'Zubří země (Vysočina + Jihomoravský)',
    description: 'Obce - komunální technika, firmy - lesnická a nezemědělská činnost.',
    supportRate: '50-80%',
    deadline: '9. 9. – 14. 10. 2025',
    municipalities: ['Blažkov', 'Bobrová', 'Bystřice nad Pernštejnem', 'Jimramov', 'Nové Město na Moravě', 'Nedvědice', 'Velké Meziříčí', 'a další (75+ obcí)'],
    fiches: ['Fiche 5 - komunální technika pro obce (80%)', 'Fiche 4 - stroje pro firmy a podnikatele (max. 50%)']
  }
]

export default function Subsidies({ onContactClick }: SubsidiesProps) {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 px-4">
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