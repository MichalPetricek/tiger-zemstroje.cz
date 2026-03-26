"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Stats {
  products: number;
  manufacturers: number;
  news: number;
  categories: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      const [p, m, n] = await Promise.all([
        fetch("/api/admin/products").then((r) => r.json()),
        fetch("/api/admin/manufacturers").then((r) => r.json()),
        fetch("/api/admin/news").then((r) => r.json()),
      ]);
      const products = Array.isArray(p) ? p : [];
      const categories = new Set(products.map((x: { category: string }) => x.category));
      setStats({
        products: products.length,
        manufacturers: Array.isArray(m) ? m.length : 0,
        news: Array.isArray(n) ? n.length : 0,
        categories: categories.size,
      });
    } catch {
      // DB might not be seeded yet
      setStats({ products: 0, manufacturers: 0, news: 0, categories: 0 });
    }
  }

  async function handleSeed() {
    setSeeding(true);
    setSeedMessage("");
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();
      setSeedMessage(data.message || "Hotovo");
      loadStats();
    } catch {
      setSeedMessage("Chyba při plnění databáze");
    } finally {
      setSeeding(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">TIGER CZ s.r.o.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/" target="_blank">
                Zobrazit web
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Odhlásit se
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Produkty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats?.products ?? "..."}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Kategorie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats?.categories ?? "..."}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Výrobci
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {stats?.manufacturers ?? "..."}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Novinky
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats?.news ?? "..."}</p>
            </CardContent>
          </Card>
        </div>

        {/* Seed button */}
        {stats && stats.products === 0 && (
          <Card className="mb-8 border-amber-500/50 bg-amber-500/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Databáze je prázdná</h3>
                  <p className="text-sm text-muted-foreground">
                    Klikněte pro naplnění výchozími daty ze statických souborů.
                  </p>
                  {seedMessage && (
                    <p className="text-sm mt-2 font-medium">{seedMessage}</p>
                  )}
                </div>
                <Button onClick={handleSeed} disabled={seeding}>
                  {seeding ? "Plním..." : "Naplnit databázi"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation cards */}
        <h2 className="text-xl font-semibold mb-4">Správa obsahu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/admin/products">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle>Produkty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Správa produktů – traktory, bagry, nakladače. Ceny, fotky,
                  specifikace, videa.
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  📸 Doporučený rozměr fotek: <strong>800×600 px</strong> (poměr
                  4:3), formát JPG/WebP
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/manufacturers">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle>Výrobci</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Správa výrobců – JINMA, YTO, SAMTRA a další. Popisky a videa.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/news">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle>Novinky</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Přidávejte novinky – předání strojů, nové produkty,
                  fotografie a videa.
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  📸 Doporučený rozměr fotek: <strong>1200×800 px</strong>{" "}
                  (poměr 3:2), formát JPG/WebP
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
