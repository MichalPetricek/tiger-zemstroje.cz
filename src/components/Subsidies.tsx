import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Warning, Phone, Mail, Euro, Calendar, Info } from '@phosphor-icons/react'

interface SubsidiesProps {
  onContactClick: () => void
}

const subsidyPrograms = [
  {
    region: "Oslavka",
    territory: "Kraj Vysočina",
    support: "50%",
    deadline: "18. 8. – 17. 10. 2025",
    type: "Nezemědělská činnost - mobilní i nemobilní stroje",
    municipalities: "Budišov, Březník, Hartvíkovice, Hluboké, Jasenice, Jinošov, Kladeruby nad Oslavou, Kojatín, Koněšín, Kozlany, Kralice nad Oslavou, Kramolín, Krokočín, Kuroslepy, Lesní Jakubov, Lhánice, Mohelno, Naloučany, Náměšť nad Oslavou, Ocmanice, Okarec, Popůvky, Pozďatín, Pucov, Rapotice, Sedlec, Smrk, Studenec, Sudice, Třesov, Valdíkov, Vícenice u Náměště nad Oslavou, Zahrádka, Čikov, Číměř"
  },
  {
    region: "Rokytná", 
    territory: "Kraj Vysočina",
    support: "50-70%",
    deadline: "22. 8. – 22. 9. 2025",
    type: "Komunální technika (obce, svazky obcí) + podnikání",
    municipalities: "Babice, Bačice, Biskupice-Pulkov, Blatnice, Bohušice, Cidlina, Dalešice, Dešov, Dolní Lažany, Dukovany, Dědice, Hornice, Hrotovice, Jakubov u Moravských Budějovic, Jaroměřice nad Rokytnou, Klučov, Kojatice, Komárovice, Krhov, Lesná, Lesonice, Lesůňky, Lipník, Litohoř, Litovany, Lukov, Láz, Martínkov, Meziříčko, Moravské Budějovice, Myslibořice, Nimpšov, Nové Syrovice, Odunec, Přešovice, Příštpo, Radkovice u Budče, Radkovice u Hrotovic, Račice, Rouchovany, Slavětice, Stropešín, Třebenice, Valeč, Vícenice, Zvěrkovice, Zárubice, Častohostice, Želetava"
  },
  {
    region: "Sedlčansko",
    territory: "Středočeský kraj", 
    support: "60%",
    deadline: "1. 9. - 21. 10. 2025",
    type: "Zemědělství, školkařství, lesnictví - mobilní i nemobilní stroje",
    municipalities: "Bohostice, Cetyně, Dolní Hbity, Dublovice, Jablonná, Jesenice, Kamýk nad Vltavou, Klučenice, Kosova Hora, Krásná Hora nad Vltavou, Kňovice, Křepenice, Milešov, Nalžovice, Nechvalice, Nedrahovice, Obory, Osečany, Petrovice, Pečice, Počepice, Prosenická Lhota, Příčovy, Radíč, Sedlčany, Smolotely, Solenice, Svatý Jan, Višňová, Vysoký Chlumec, Zduchovice, Štětkovice"
  },
  {
    region: "Mezi Hrady",
    territory: "Středočeský kraj",
    support: "80%", 
    deadline: "1. 9. – 12. 10. 2025",
    type: "Komunální technika pro obce a neziskové organizace",
    municipalities: "Broumy, Hudlice, Hýskov, Chyňava, Kublov, Nižbor, Nový Jáchymov, Otročiněves, Svatá, Trubská, Vráž, Trubín, Nenačovice, Chrustenice, Železná, Bratronice, Běleč, Svárov, Hředle, Červený Újezd"
  },
  {
    region: "Východní Slovácko",
    territory: "Zlínský kraj",
    support: "min. 70%",
    deadline: "1. 9. – 2. 10. 2025", 
    type: "Komunální technika pro obce",
    municipalities: "Bystřice pod Lopeníkem, Bánov, Březová, Dolní Němčí, Horní Němčí, Korytná, Nivnice, Slavkov, Strání, Suchá Loz, Uherský Brod, Vlčnov"
  },
  {
    region: "Rožnovsko",
    territory: "Zlínský kraj",
    support: "50-70%",
    deadline: "1. 9. – 3. 10. 2025",
    type: "Komplexní program - komunální technika i podnikání",
    municipalities: "Branky, Choryně, Dolní Bečva, Horní Bečva, Hutisko-Solanec, Kelč, Kladeruby, Krhová, Kunovice, Lešná, Loučka, Podolí, Police, Poličná, Prostřední Bečva, Rožnov pod Radhoštěm, Střítež nad Bečvou, Valašská Bystřice, Valašské Meziříčí, Velká Lhota, Vidče, Vigantice, Zašová, Zubří"
  },
  {
    region: "Region Poodří",
    territory: "Moravskoslezský kraj",
    support: "50-70%",
    deadline: "20. 8. – 26. 9. 2025",
    type: "Komunální a silniční technika",
    municipalities: "Albrechtičky, Bartošovice, Bernartice nad Odrou, Bravantice, Bílov, Bílovec, Bítov, Fulnek, Heřmanice u Oder, Heřmánky, Hladké Životice, Jakubčovice nad Odrou, Jeseník nad Odrou, Jistebník, Kateřinice, Klimkovice, Kujavy, Kunín, Libhošť, Luboměř, Mankovice, Mošnov, Odry, Olbramice, Petřvald, Pustějov, Sedlnice, Skotnice, Slatina, Spálov, Studénka, Suchdol nad Odrou, Trnávka, Tísek, Velké Albrechtice, Vražné, Vrchy, Zbyslavice, Šenov u Nového Jičína"
  },
  {
    region: "Brána Písecka",
    territory: "Jihočeský kraj",
    support: "max. 50%",
    deadline: "15. 9. – 16. 10. 2025",
    type: "Zemědělská, lesnická a nezemědělská činnost",
    municipalities: "Boudy, Cerhonice, Dobev, Drhovle, Horosedly, Kestřany, Kožlí, Králova Lhota, Lety, Minice, Mirotice, Mirovice, Mišovice, Nerestce, Nevězice, Orlík nad Vltavou, Ostrovec, Probulov, Předotice, Rakovice, Smetanova Lhota, Varvažov, Vráž, Čimelice, Čížová"
  }
]

export default function Subsidies({ onContactClick }: SubsidiesProps) {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Dotace na zemědělskou a stavební techniku
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pomoháme získat dotace na nákup techniky. Zajistíme celý proces od výběru programu až po úspěšné vyúčtování.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Identifikace programů</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Najdeme vhodné dotační programy pro vaši techniku a region
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Euro className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Kompletní administrace</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Připravíme dokumentaci a zajistíme veškerou administraci žádosti
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Vyúčtování dotace</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Pomoháme s vyúčtováním a splněním všech podmínek
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Important Notices */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Financing Alert */}
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Euro className="w-6 h-6" />
                  Nemáte dostatek prostředků?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Kromě dotací vám můžeme zajistit výhodné financování pro pořízení zemědělské a stavební techniky.
                </p>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Info className="w-6 h-6" />
                  Důležité upozornění
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Negarantujeme úspěšné schválení dotace, ale uděláme maximum pro co největší šanci na úspěch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Subsidy Programs */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Aktuální dotační výzvy 2025
            </h2>
            <p className="text-xl text-muted-foreground">
              Výběr aktivních dotačních programů ze Společné zemědělské politiky
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {subsidyPrograms.slice(0, 8).map((program, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{program.region}</CardTitle>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {program.support}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {program.territory}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold">{program.deadline}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Typ podpory:</p>
                    <p className="text-sm text-muted-foreground">{program.type}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Obce (výběr):</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {program.municipalities.split(',').slice(0, 8).join(', ')}...
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              A dalších {subsidyPrograms.length - 8}+ regionů s aktivními výzvami
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Máte zájem o dotaci?</CardTitle>
              <CardDescription>
                Kontaktujte nás pro více informací k vámi vybrané dotaci
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+420 601 017 000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>zemstroje@gmail.com</span>
                </div>
              </div>
              
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}