"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Manufacturer } from "@/types";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { getManufacturers, deleteManufacturer } from "@/lib/data";

export default function AdminManufacturersPage() {
  const { authenticated, loading: authLoading } = useAdminAuth();
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      getManufacturers().then(setManufacturers).catch(() => setManufacturers([]));
    }
  }, [authenticated]);

  async function handleDelete(id: string) {
    if (!confirm(`Opravdu smazat výrobce "${id}"?`)) return;
    await deleteManufacturer(id);
    setManufacturers((prev) => prev.filter((m) => m.id !== id));
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
            <h1 className="text-xl font-bold">Výrobci</h1>
            <Badge variant="outline">{manufacturers.length}</Badge>
          </div>
          <Button asChild>
            <Link href="/admin/manufacturers/new">+ Nový výrobce</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Název</th>
                <th className="py-2 px-3">YouTube</th>
                <th className="py-2 px-3">Pořadí</th>
                <th className="py-2 px-3">Akce</th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((m) => (
                <tr
                  key={m.id}
                  className="border-b hover:bg-muted/50 cursor-pointer"
                  onClick={() =>
                    router.push(`/admin/manufacturers/edit?id=${m.id}`)
                  }
                >
                  <td className="py-2 px-3 font-mono text-xs">{m.id}</td>
                  <td className="py-2 px-3 font-medium">{m.name}</td>
                  <td className="py-2 px-3">
                    {m.youtubeVideoId ? (
                      <Badge className="bg-green-600">Ano</Badge>
                    ) : (
                      <Badge variant="secondary">Ne</Badge>
                    )}
                  </td>
                  <td className="py-2 px-3">{m.sortOrder || 0}</td>
                  <td className="py-2 px-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(m.id);
                      }}
                    >
                      Smazat
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {manufacturers.length === 0 && (
            <p className="text-center py-8 text-muted-foreground">
              Žádní výrobci nenalezeni. Použijte tlačítko Seed na dashboardu.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
