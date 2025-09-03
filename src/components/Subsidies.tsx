import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin, Percent, ArrowRight } from '@phosphor-icons/react'

interface SubsidyProgram {
  id: string
  name: string
  region: string
  supportRate: string
  deadline: string
  targetGroup: string
  description: string
  municipalities: string[]
  fiches: Array<{
    number: string
    description: string
    supportRate?: string
  }>
}

const subsidyPrograms: SubsidyProgram[] = [
  {
    id: 'oslavka',
    name: 'Oslavka',
    region: 'Kraj Vysočina',
    supportRate: '50%',
    deadline: '18. 8. – 17. 10. 2025',
    targetGroup: 'Firmy a podnikatelé (nezemědělská činnost)',
    description: 'Podpora nákupu mobilních i nemobilních strojů pro firmy provozující nezemědělskou činnost.',
    municipalities: ['Budišov', 'Březník', 'Hartvíkovice', 'Hluboké', 'Jasenice', 'Jinošov', 'Kladeruby nad Oslavou', 'Kojatín', 'Koněšín', 'Kozlany', 'Kralice nad Oslavou', 'Kramolín', 'Krokočín', 'Kuroslepy', 'Lesní Jakubov', 'Lhánice', 'Mohelno', 'Naloučany', 'Náměšť nad Oslavou', 'Ocmanice', 'Okarec', 'Popůvky', 'Pozďatín', 'Pucov', 'Rapotice', 'Sedlec', 'Smrk', 'Studenec', 'Sudice', 'Třesov', 'Valdíkov', 'Vícenice u Náměště nad Oslavou', 'Zahrádka', 'Čikov', 'Číměř'],
    fiches: [
      {
        number: '4',
        description: 'Mobilní i nemobilní stroje pro nezemědělskou činnost'
      }
    ]
  },
  {
    id: 'rokytna',
    name: 'Rokytná',
    region: 'Kraj Vysočina',
    supportRate: '50-70%',
    deadline: '22. 8. – 22. 9. 2025',
    targetGroup: 'Obce, firmy a podnikatelé',
    description: 'Podpora komunální techniky pro obce a strojů pro firmy v oblasti zemědělství a zpracování.',
    municipalities: ['Babice', 'Bačice', 'Biskupice-Pulkov', 'Blatnice', 'Bohušice', 'Cidlina', 'Dalešice', 'Dešov', 'Dolní Lažany', 'Dukovany', 'Dědice', 'Hornice', 'Hrotovice', 'Jakubov u Moravských Budějovic', 'Jaroměřice nad Rokytnou', 'Klučov', 'Kojatice', 'Komárovice', 'Krhov', 'Lesná', 'Lesonice', 'Lesůňky', 'Lipník', 'Litohoř', 'Litovany', 'Lukov', 'Láz', 'Martínkov', 'Meziříčko', 'Moravské Budějovice'],
    fiches: [
      {
        number: '4',
        description: 'Mobilní i nemobilní stroje pro firmy',
        supportRate: '50%'
      },
      {
        number: '5',
        description: 'Komunální technika pro obce',
        supportRate: '70%'
      }
    ]
  },
  {
    id: 'sedlcansko',
    name: 'Sedlčansko',
    region: 'Středočeský kraj',
    supportRate: '60%',
    deadline: '1. 9. – 21. 10. 2025',
    targetGroup: 'Podnikatelé a firmy',
    description: 'Podpora pro lesnickou a zemědělskou činnost, školkařskou činnost a zpracování produkce.',
    municipalities: ['Bohostice', 'Cetyně', 'Dolní Hbity', 'Dublovice', 'Jablonná', 'Jesenice', 'Kamýk nad Vltavou', 'Klučenice', 'Kosova Hora', 'Krásná Hora nad Vltavou', 'Kňovice', 'Křepenice', 'Milešov', 'Nalžovice', 'Nechvalice', 'Nedrahovice', 'Obory', 'Osečany', 'Petrovice', 'Pečice', 'Počepice', 'Prosenická Lhota', 'Příčovy', 'Radíč', 'Sedlčany'],
    fiches: [
      {
        number: '1',
        description: 'Zemědělská a školkařská činnost'
      },
      {
        number: '2',
        description: 'Lesnická činnost a dřevozpracování'
      }
    ]
  },
  {
    id: 'mezi-hrady',
    name: 'Mezi Hrady',
    region: 'Středočeský kraj',
    supportRate: '80%',
    deadline: '1. 9. – 12. 10. 2025',
    targetGroup: 'Obce a neziskové organizace',
    description: 'Komunální technika pro obce - malotraktory, štěpkovače, sekačky, křovinořezy, sypače a frézy.',
    municipalities: ['Broumy', 'Hudlice', 'Hýskov', 'Chyňava', 'Kublov', 'Nižbor', 'Nový Jáchymov', 'Otročiněves', 'Svatá', 'Trubská', 'Vráž', 'Trubín', 'Nenačovice', 'Chrustenice', 'Železná', 'Bratronice', 'Běleč', 'Svárov', 'Hředle', 'Červený Újezd'],
    fiches: [
      {
        number: '5',
        description: 'Komunální technika'
      }
    ]
  }
]

interface SubsidiesProps {
  onContactClick: () => void
}

export default function Subsidies({ onContactClick }: SubsidiesProps) {
  return (
    <section id="subsidies" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Dotace na zemědělskou techniku</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Pomůžeme vám získat dotace na nákup zemědělské a stavební techniky. Od identifikace vhodných programů po kompletní administraci žádosti.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Identifikace programů</h3>
                <p className="text-sm text-muted-foreground">
                  Najdeme vhodné dotační programy pro vaši techniku
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Kompletní administrace</h3>
                <p className="text-sm text-muted-foreground">
                  Připravíme dokumentaci a zajistíme celý proces žádosti
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Výhodné financování</h3>
                <p className="text-sm text-muted-foreground">
                  Zajistíme financování při nedostatku vlastních prostředků
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Aktuální dotační výzvy</h3>
            <p className="text-muted-foreground mb-8">
              Přehled aktuálně otevřených dotačních programů podle regionů
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {subsidyPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {program.region}
                    </Badge>
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {program.supportRate} podpora
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="w-4 h-4 text-accent" />
                      <span><strong>Termín:</strong> {program.deadline}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-accent mt-0.5" />
                      <span><strong>Cílová skupina:</strong> {program.targetGroup}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Podporované oblasti:</h4>
                    <div className="space-y-1">
                      {program.fiches.map((fiche, index) => (
                        <div key={index} className="text-xs text-muted-foreground bg-muted/50 rounded px-3 py-2">
                          <strong>Fiche {fiche.number}:</strong> {fiche.description}
                          {fiche.supportRate && <span className="ml-2 text-accent">({fiche.supportRate})</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      <strong>Obce v programu:</strong> {program.municipalities.slice(0, 5).join(', ')}
                      {program.municipalities.length > 5 && ` a dalších ${program.municipalities.length - 5} obcí`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card/50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Potřebujete pomoc s dotacemi?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Negarantujeme schválení dotace, ale uděláme maximum pro úspěch vaší žádosti. 
            Kontaktujte nás pro konzultaci k vašemu konkrétnímu případu.
          </p>
          <Button 
            size="lg"
            onClick={onContactClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Nezávazná konzultace
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}