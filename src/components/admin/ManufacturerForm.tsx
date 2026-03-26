"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Manufacturer } from "@/types";

function emptyManufacturer(): Manufacturer {
  return {
    id: "",
    name: "",
    description: "",
    youtubeVideoId: "",
    sortOrder: 0,
  };
}

export default function AdminManufacturerForm({
  initial,
  isNew,
}: {
  initial?: Manufacturer;
  isNew: boolean;
}) {
  const [manufacturer, setManufacturer] = useState<Manufacturer>(
    initial || emptyManufacturer()
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function update(fields: Partial<Manufacturer>) {
    setManufacturer((prev) => ({ ...prev, ...fields }));
  }

  async function handleSave() {
    setSaving(true);
    setError("");

    try {
      const url = isNew
        ? "/api/admin/manufacturers"
        : `/api/admin/manufacturers/${manufacturer.id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(manufacturer),
      });

      if (res.ok) {
        router.push("/admin/manufacturers");
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
              <Link href="/admin/manufacturers">← Zpět</Link>
            </Button>
            <h1 className="text-xl font-bold">
              {isNew ? "Nový výrobce" : `Upravit: ${manufacturer.name}`}
            </h1>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Ukládám..." : "Uložit"}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-3xl">
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-500 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Základní informace</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  ID (slug) *
                </label>
                <Input
                  value={manufacturer.id}
                  onChange={(e) => update({ id: e.target.value })}
                  disabled={!isNew}
                  placeholder="jinma"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Název *
                </label>
                <Input
                  value={manufacturer.name}
                  onChange={(e) => update({ name: e.target.value })}
                  placeholder="Jinma"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Popis</label>
              <textarea
                value={manufacturer.description}
                onChange={(e) => update({ description: e.target.value })}
                rows={8}
                className="w-full px-3 py-2 border rounded-md bg-background resize-y"
                placeholder="Popis výrobce..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  YouTube Video ID
                </label>
                <Input
                  value={manufacturer.youtubeVideoId || ""}
                  onChange={(e) =>
                    update({ youtubeVideoId: e.target.value })
                  }
                  placeholder="syMEHg3-n-8"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  ID z YouTube URL (část za v=)
                </p>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Pořadí
                </label>
                <Input
                  type="number"
                  value={manufacturer.sortOrder || 0}
                  onChange={(e) =>
                    update({
                      sortOrder: parseInt(e.target.value, 10) || 0,
                    })
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
