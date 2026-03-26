"use client";

import { useEffect, useState } from "react";
import AdminManufacturerForm from "@/components/admin/ManufacturerForm";
import { Manufacturer } from "@/types";
import { use } from "react";

export default function AdminManufacturerEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/manufacturers/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((d) => setManufacturer(d))
      .catch(() => setError("Výrobce nenalezen"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );

  if (error || !manufacturer)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error || "Výrobce nenalezen"}</p>
      </div>
    );

  return <AdminManufacturerForm initial={manufacturer} isNew={false} />;
}
