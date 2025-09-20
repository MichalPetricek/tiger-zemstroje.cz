import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Envelope, Star, Video } from "@phosphor-icons/react";
import DocumentDownload from "@/components/DocumentDownload";
import { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onContact: () => void;
}

export default function ProductDetail({
  product,
  onBack,
  onContact,
}: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-background py-4 px-4">
      <div className="container mx-auto">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zpět na produkty
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-card p-8 flex items-center justify-center relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-accent text-accent-foreground text-xs font-bold"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              {product.price !== "Na dotaz" && (
                <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  {product.price}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  {product.name}
                </h1>
                <Badge variant="outline" className="text-accent border-accent">
                  {product.power}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>

              {product.price === "Na dotaz" ? (
                <div className="text-2xl font-bold text-accent">
                  Cena na dotaz
                </div>
              ) : (
                <div className="text-3xl font-bold text-accent">
                  {product.price}
                </div>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Klíčové vlastnosti</h3>
              <div className="grid gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star
                      className="w-5 h-5 text-accent flex-shrink-0"
                      weight="fill"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              {/* Main action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={onContact}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kontaktovat obchod
                </Button>
                <Button size="lg" variant="outline" onClick={onContact}>
                  <Envelope className="w-5 h-5 mr-2" />
                  Kontaktovat obchod
                </Button>
              </div>

              {/* Documentation and video buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <DocumentDownload
                  documentPath={product.documentation}
                  productName={product.name}
                  variant="outline"
                  size="lg"
                />
                {product.youtubeUrl && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(product.youtubeUrl, "_blank")}
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Zobrazit video
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Technické specifikace</CardTitle>
              <CardDescription>
                Podrobné technické parametry {product.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="text-muted-foreground capitalize">
                      {key.replace("_", " ")}:
                    </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Servis a podpora</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Záruka 2 roky</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Náhradní díly skladem</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Servis v ČR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">24/7 technická podpora</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Možnosti financování</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Leasing od 0% navýšení</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Dotace až 50%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Splátkový prodej</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" weight="fill" />
                <span className="text-sm">Trade-in možnost</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
