"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";

const CATEGORIES = ["Traktory", "Nakladače", "Bagry", "Ještěrky", "Příslušenství"];

function emptyProduct(): Product {
  return {
    id: "",
    name: "",
    priceWithVat: 0,
    priceWithoutVat: 0,
    power: "",
    category: "Traktory",
    brand: "",
    image: "",
    images: [],
    badges: [],
    description: "",
    specs: {},
    features: [],
    available: true,
    documentation: "",
    youtubeUrl: "",
    sortOrder: 0,
  };
}

export default function AdminProductForm({
  initial,
  isNew,
}: {
  initial?: Product;
  isNew: boolean;
}) {
  const [product, setProduct] = useState<Product>(initial || emptyProduct());
  const [specsText, setSpecsText] = useState(
    initial
      ? Object.entries(initial.specs)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n")
      : ""
  );
  const [featuresText, setFeaturesText] = useState(
    initial ? initial.features.join("\n") : ""
  );
  const [badgesText, setBadgesText] = useState(
    initial ? initial.badges.join(", ") : ""
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function update(fields: Partial<Product>) {
    setProduct((prev) => ({ ...prev, ...fields }));
  }

  function handlePriceWithVat(val: string) {
    const num = parseInt(val, 10) || 0;
    update({
      priceWithVat: num,
      priceWithoutVat: num > 0 ? Math.round(num / 1.21) : 0,
    });
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", `products/${product.id || "new"}`);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.path) {
        update({ images: [...product.images, data.path] });
      }
    } catch {
      setError("Chyba při nahrávání obrázku");
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function removeImage(index: number) {
    const newImages = product.images.filter((_, i) => i !== index);
    update({
      images: newImages,
      image: newImages.length > 0 ? newImages[0] : product.image,
    });
  }

  async function handleSave() {
    setSaving(true);
    setError("");

    // Parse specs
    const specs: Record<string, string> = {};
    specsText
      .split("\n")
      .filter((l) => l.includes(":"))
      .forEach((line) => {
        const idx = line.indexOf(":");
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        if (key) specs[key] = val;
      });

    const features = featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
    const badges = badgesText
      .split(",")
      .map((b) => b.trim())
      .filter(Boolean);

    const toSave: Product = {
      ...product,
      specs,
      features,
      badges,
      image: product.images.length > 0 ? product.images[0] : product.image,
    };

    try {
      const url = isNew
        ? "/api/admin/products"
        : `/api/admin/products/${product.id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toSave),
      });

      if (res.ok) {
        router.push("/admin/products");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Chyba při ukládání");
      }
    } catch {
      setError("Chyba připojení");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/products">← Zpět</Link>
            </Button>
            <h1 className="text-xl font-bold">
              {isNew ? "Nový produkt" : `Upravit: ${product.name}`}
            </h1>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Ukládám..." : "Uložit"}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-500 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {/* Basic info */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Základní informace</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  ID (slug) *
                </label>
                <Input
                  value={product.id}
                  onChange={(e) => update({ id: e.target.value })}
                  disabled={!isNew}
                  placeholder="tiger-504"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  URL adresa produktu, jen malá písmena a pomlčky
                </p>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Název *
                </label>
                <Input
                  value={product.name}
                  onChange={(e) => update({ name: e.target.value })}
                  placeholder="TIGER 504"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Kategorie *
                </label>
                <select
                  value={product.category}
                  onChange={(e) => update({ category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Značka *
                </label>
                <Input
                  value={product.brand}
                  onChange={(e) => update({ brand: e.target.value })}
                  placeholder="TIGER"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Cena s DPH (Kč)
                </label>
                <Input
                  type="number"
                  value={product.priceWithVat || ""}
                  onChange={(e) => handlePriceWithVat(e.target.value)}
                  placeholder="0 = Na dotaz"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  0 = &quot;Cena na dotaz&quot;
                </p>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Cena bez DPH (Kč)
                </label>
                <Input
                  type="number"
                  value={product.priceWithoutVat || ""}
                  readOnly
                  className="bg-muted"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Počítá se automaticky (÷ 1,21)
                </p>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Výkon</label>
                <Input
                  value={product.power}
                  onChange={(e) => update({ power: e.target.value })}
                  placeholder="50 HP"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Popis</label>
              <textarea
                value={product.description}
                onChange={(e) => update({ description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border rounded-md bg-background resize-y"
                placeholder="Krátký popis produktu..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={product.available}
                    onChange={(e) => update({ available: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">Skladem / dostupné</span>
                </label>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Pořadí
                </label>
                <Input
                  type="number"
                  value={product.sortOrder || 0}
                  onChange={(e) =>
                    update({ sortOrder: parseInt(e.target.value, 10) || 0 })
                  }
                />
              </div>
            </div>
          </section>

          {/* Images */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Fotografie</h2>
            <p className="text-sm text-muted-foreground">
              📸 Doporučený rozměr: <strong>800×600 px</strong> (poměr 4:3),
              formát JPG nebo WebP, max 10 MB. První fotka je hlavní.
            </p>

            {/* Current images */}
            {product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt={`Obrázek ${i + 1}`}
                      className="w-full aspect-[4/3] object-cover rounded border"
                    />
                    {i === 0 && (
                      <span className="absolute top-1 left-1 bg-accent text-accent-foreground text-xs px-1 rounded">
                        Hlavní
                      </span>
                    )}
                    <button
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Manual image path */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Přidat cestu k obrázku ručně
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="/images/tiger-504/1.jpg"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const val = (e.target as HTMLInputElement).value.trim();
                      if (val) {
                        update({ images: [...product.images, val] });
                        (e.target as HTMLInputElement).value = "";
                      }
                    }
                  }}
                />
                <span className="text-xs text-muted-foreground self-center whitespace-nowrap">
                  Enter pro přidání
                </span>
              </div>
            </div>

            {/* Upload */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Nebo nahrát nový obrázek
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={handleImageUpload}
                className="text-sm"
                disabled={uploadingImage}
              />
              {uploadingImage && (
                <p className="text-sm text-muted-foreground mt-1">
                  Nahrávám...
                </p>
              )}
            </div>
          </section>

          {/* Specs & Features */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Technické údaje</h2>

            <div>
              <label className="text-sm font-medium block mb-1">
                Specifikace (řádek = Klíč: Hodnota)
              </label>
              <textarea
                value={specsText}
                onChange={(e) => setSpecsText(e.target.value)}
                rows={8}
                className="w-full px-3 py-2 border rounded-md bg-background resize-y font-mono text-sm"
                placeholder={`Motor: 4válcový diesel, 2392 ccm\nVýkon: 50 HP\nPřevodovka: 8+2 mechanická`}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Klíčové vlastnosti (každý řádek = 1 vlastnost)
              </label>
              <textarea
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                rows={5}
                className="w-full px-3 py-2 border rounded-md bg-background resize-y"
                placeholder={`Plný výkon 50 koní za cenu běžných traktorů\nPřímý dovoz od výrobce\nZáruka 2 roky + servis v ČR`}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Štítky/Badges (oddělené čárkou)
              </label>
              <Input
                value={badgesText}
                onChange={(e) => setBadgesText(e.target.value)}
                placeholder="CENOVÁ BOMBA, NEJPRODÁVANĚJŠÍ"
              />
            </div>
          </section>

          {/* Links */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Odkazy</h2>

            <div>
              <label className="text-sm font-medium block mb-1">
                YouTube video URL
              </label>
              <Input
                value={product.youtubeUrl || ""}
                onChange={(e) => update({ youtubeUrl: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Dokumentace (cesta k PDF)
              </label>
              <Input
                value={product.documentation || ""}
                onChange={(e) => update({ documentation: e.target.value })}
                placeholder="/docs/traktory/tiger-504.pdf"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
