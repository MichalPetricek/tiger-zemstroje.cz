"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { getAllProducts, deleteProduct } from "@/lib/data";

function formatPrice(n: number): string {
  if (n === 0) return "Na dotaz";
  return n.toLocaleString("cs-CZ") + " Kč";
}

export default function AdminProductsPage() {
  const { authenticated, loading: authLoading } = useAdminAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      getAllProducts().then(setProducts).catch(() => setProducts([]));
    }
  }, [authenticated]);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.category.toLowerCase().includes(filter.toLowerCase()) ||
      p.brand.toLowerCase().includes(filter.toLowerCase())
  );

  async function handleDelete(id: string) {
    if (!confirm(`Opravdu smazat produkt "${id}"?`)) return;
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin">← Zpět</Link>
            </Button>
            <h1 className="text-xl font-bold">Produkty</h1>
            <Badge variant="outline">{products.length}</Badge>
          </div>
          <Button asChild>
            <Link href="/admin/products/new">+ Nový produkt</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Hledat podle názvu, kategorie, značky..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-md px-3 py-2 border rounded-md bg-background"
          />
        </div>

        <p className="text-xs text-muted-foreground mb-4">
          📸 Doporučený rozměr fotek produktů: <strong>800×600 px</strong>{" "}
          (poměr 4:3), formát JPG nebo WebP, max 10 MB
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-2 px-3">Foto</th>
                <th className="py-2 px-3">Název</th>
                <th className="py-2 px-3">Kategorie</th>
                <th className="py-2 px-3">Značka</th>
                <th className="py-2 px-3">Cena s DPH</th>
                <th className="py-2 px-3">Cena bez DPH</th>
                <th className="py-2 px-3">Dostupné</th>
                <th className="py-2 px-3">Akce</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  className="border-b hover:bg-muted/50 cursor-pointer"
                  onClick={() => router.push(`/admin/products/edit?id=${p.id}`)}
                >
                  <td className="py-2 px-3">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-9 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="py-2 px-3 font-medium">{p.name}</td>
                  <td className="py-2 px-3">
                    <Badge variant="outline">{p.category}</Badge>
                  </td>
                  <td className="py-2 px-3">{p.brand}</td>
                  <td className="py-2 px-3 font-semibold">
                    {formatPrice(p.priceWithVat)}
                  </td>
                  <td className="py-2 px-3 text-muted-foreground">
                    {formatPrice(p.priceWithoutVat)}
                  </td>
                  <td className="py-2 px-3">
                    {p.available ? (
                      <Badge className="bg-green-600">Ano</Badge>
                    ) : (
                      <Badge variant="secondary">Ne</Badge>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(p.id);
                      }}
                    >
                      Smazat
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p className="text-center py-8 text-muted-foreground">
              Žádné produkty nenalezeny.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
