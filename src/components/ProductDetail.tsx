import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  ArrowLeft,
  Phone,
  Envelope,
  Star,
  Video,
  X,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import DocumentDownload from "@/components/DocumentDownload";
import { Product } from "@/types";
import { useState, useEffect } from "react";

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
  // Get all images - use images array if available, otherwise fallback to single image
  const allImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  const handleCarouselApi = (api: CarouselApi) => {
    if (!api) return;

    api.on("select", () => {
      setCurrentImageIndex(api.selectedScrollSnap());
    });
  };

  const openFullscreen = (index: number) => {
    setFullscreenImageIndex(index);
    setIsFullscreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  // Keyboard navigation for fullscreen
  useEffect(() => {
    if (!isFullscreenOpen) return;

    const nextFullscreenImage = () => {
      setFullscreenImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevFullscreenImage = () => {
      setFullscreenImageIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length
      );
    };

    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeFullscreen();
          break;
        case "ArrowLeft":
          prevFullscreenImage();
          break;
        case "ArrowRight":
          nextFullscreenImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isFullscreenOpen, allImages.length]);

  const nextFullscreenImage = () => {
    setFullscreenImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevFullscreenImage = () => {
    setFullscreenImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

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
          {/* Product Image(s) */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-card relative overflow-hidden">
              {allImages.length > 1 ? (
                // Carousel for multiple images
                <Carousel
                  className="w-full h-full"
                  setApi={handleCarouselApi}
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                >
                  <CarouselContent className="h-full">
                    {allImages.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div
                          className="flex items-center justify-center h-full relative group cursor-pointer"
                          onClick={() => openFullscreen(index)}
                        >
                          <img
                            src={image}
                            alt={`${product.name} - obrázek ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              ) : (
                // Single image display
                <div
                  className="flex items-center justify-center h-full relative group cursor-pointer"
                  onClick={() => openFullscreen(0)}
                >
                  <img
                    src={allImages[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Badges overlay */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                {product.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-accent text-accent-foreground text-xs font-bold"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Price overlay */}
              {product.price !== "Na dotaz" && (
                <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg z-10">
                  {product.price}
                </div>
              )}
            </div>

            {/* Image indicators and counter for carousel */}
            {allImages.length > 1 && (
              <div className="space-y-3">
                {/* Dot indicators */}
                <div className="flex justify-center space-x-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? "bg-accent"
                          : "bg-muted-foreground/30"
                      }`}
                      onClick={() => {
                        // Implementace pro přeskočení na konkrétní obrázek by vyžadovala další API
                      }}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="text-center text-sm text-muted-foreground">
                  {currentImageIndex + 1} z {allImages.length}{" "}
                  {allImages.length === 1
                    ? "obrázku"
                    : allImages.length < 5
                    ? "obrázků"
                    : "obrázků"}
                </div>
              </div>
            )}
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

      {/* Fullscreen Modal */}
      {isFullscreenOpen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {fullscreenImageIndex + 1} / {allImages.length}
          </div>

          {/* Navigation buttons */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevFullscreenImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <CaretLeft className="w-8 h-8" weight="bold" />
              </button>
              <button
                onClick={nextFullscreenImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <CaretRight className="w-8 h-8" weight="bold" />
              </button>
            </>
          )}

          {/* Main image */}
          <img
            src={allImages[fullscreenImageIndex]}
            alt={`${product.name} - obrázek ${fullscreenImageIndex + 1}`}
            className="max-w-full max-h-full object-contain p-4"
          />

          {/* Dot indicators */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setFullscreenImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === fullscreenImageIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
