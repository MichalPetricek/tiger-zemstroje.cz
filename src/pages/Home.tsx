import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Star,
  Shield,
  Wrench,
  Clock,
  ArrowRight,
  Envelope,
} from "@phosphor-icons/react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { news } from "@/data/news";
import { Product } from "@/types";

interface HomeProps {
  onContactClick: () => void;
  onProductSelect: (product: Product) => void;
}

export default function Home({ onContactClick, onProductSelect }: HomeProps) {
  const handleProductSelect = (product: Product) => {
    onProductSelect(product);
  };

  return (
    <div>
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
                  onClick={onContactClick}
                >
                  Rezervovat za 199 000 Kč
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/rental">Pronájem</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const tiger504 = products.find((p) => p.id === "tiger-504");
                    if (tiger504) handleProductSelect(tiger504);
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Naše produkty
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletní sortiment zemědělské a manipulační techniky přímo od
              výrobců
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
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                Zobrazit všechny produkty
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
                  Diagnostika a opravy u zákazníka i v servisu. Specializace na
                  čínské stroje.
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
                  Náhradní díly skladem nebo letecky do 10 dnů. Zapůjčení
                  náhradní techniky.
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
                  2 roky záruka na všechny stroje s kompletním poprodejním
                  servisem.
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
                  Vyzkoušejte před koupí. Vratná kauce 10 000 Kč, pojištění v
                  ceně.
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
                  <div className="text-sm text-accent font-medium">
                    {item.date}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.content}
                  </p>
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
                <p className="text-sm text-muted-foreground">
                  zemstroje@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Servis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">+420 602 458 177</p>
                <p className="text-sm text-muted-foreground">
                  servis@zemstroje.cz
                </p>
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
                <p className="text-sm text-muted-foreground">
                  Po-Pá: 9:00-16:00
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/contacts">
                Zobrazit všechny kontakty
                <Envelope className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
