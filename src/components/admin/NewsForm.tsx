"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsItem } from "@/types";
import { createNewsItem, updateNewsItem, uploadImage } from "@/lib/data";

function emptyNewsItem(): Omit<NewsItem, "id"> & { id?: number } {
  return {
    title: "",
    content: "",
    date: new Date().toLocaleDateString("cs-CZ"),
    images: [],
    youtubeUrl: "",
    published: true,
  };
}

export default function AdminNewsForm({
  initial,
  isNew,
}: {
  initial?: NewsItem;
  isNew: boolean;
}) {
  const [item, setItem] = useState(initial || emptyNewsItem());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function update(fields: Partial<NewsItem>) {
    setItem((prev) => ({ ...prev, ...fields }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const url = await uploadImage(file, "news");
      update({ images: [...(item.images || []), url] });
    } catch {
      setError("Chyba při nahrávání obrázku");
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function removeImage(index: number) {
    update({ images: (item.images || []).filter((_, i) => i !== index) });
  }

  async function handleSave() {
    setSaving(true);
    setError("");

    try {
      if (isNew) {
        await createNewsItem(item as Omit<NewsItem, "id">);
      } else {
        await updateNewsItem(item as NewsItem);
      }
      router.push("/admin/news");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Chyba při ukládání");
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
              <Link href="/admin/news">← Zpět</Link>
            </Button>
            <h1 className="text-xl font-bold">
              {isNew ? "Nová novinka" : `Upravit: ${item.title}`}
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

            <div>
              <label className="text-sm font-medium block mb-1">
                Titulek *
              </label>
              <Input
                value={item.title}
                onChange={(e) => update({ title: e.target.value })}
                placeholder="Předání traktoru novému zákazníkovi"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Datum</label>
              <Input
                value={item.date}
                onChange={(e) => update({ date: e.target.value })}
                placeholder="1. 1. 2025"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Formát: den. měsíc. rok
              </p>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Obsah</label>
              <textarea
                value={item.content}
                onChange={(e) => update({ content: e.target.value })}
                rows={6}
                className="w-full px-3 py-2 border rounded-md bg-background resize-y"
                placeholder="Popis novinky..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.published}
                    onChange={(e) => update({ published: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">Publikováno</span>
                </label>
              </div>
            </div>
          </section>

          {/* Images */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Fotografie</h2>
            <p className="text-sm text-muted-foreground">
              📸 Doporučený rozměr: <strong>1200×800 px</strong> (poměr 3:2),
              formát JPG nebo WebP, max 10 MB.
            </p>

            {item.images && item.images.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {item.images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt={`Obrázek ${i + 1}`}
                      className="w-full aspect-[3/2] object-cover rounded border"
                    />
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

            <div>
              <label className="text-sm font-medium block mb-1">
                Nahrát fotografii
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

            <div>
              <label className="text-sm font-medium block mb-1">
                Nebo přidat cestu k obrázku ručně
              </label>
              <Input
                placeholder="/uploads/news/foto.jpg"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const val = (e.target as HTMLInputElement).value.trim();
                    if (val) {
                      update({ images: [...(item.images || []), val] });
                      (e.target as HTMLInputElement).value = "";
                    }
                  }
                }}
              />
              <span className="text-xs text-muted-foreground">
                Enter pro přidání
              </span>
            </div>
          </section>

          {/* Video */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Video</h2>

            <div>
              <label className="text-sm font-medium block mb-1">
                YouTube URL
              </label>
              <Input
                value={item.youtubeUrl || ""}
                onChange={(e) => update({ youtubeUrl: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
