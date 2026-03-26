"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Manufacturer } from "@/types";

export default function AdminManufacturersPage() {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/manufacturers")
      .then((r) => r.json())
      .then((d) => setManufacturers(Array.isArray(d) ? d : []));
  }, []);

  async function handleDelete(id: string) {
    if (!confirm(`Opravdu smazat výrobce "${id}"?`)) return;
    await fetch(`/api/admin/manufacturers/${id}`, { method: "DELETE" });
    setManufacturers((prev) => prev.filter((m) => m.id !== id));
  }

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
                    router.push(`/admin/manufacturers/${m.id}`)
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
