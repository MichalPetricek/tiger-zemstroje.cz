"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AdminManufacturerForm from "@/components/admin/ManufacturerForm";
import { Manufacturer } from "@/types";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { getManufacturer } from "@/lib/data";

function EditContent() {
  const { authenticated, loading: authLoading } = useAdminAuth();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authenticated || !id) return;
    getManufacturer(id)
      .then((m) => {
        if (m) setManufacturer(m);
        else setError("Výrobce nenalezen");
      })
      .catch(() => setError("Výrobce nenalezen"))
      .finally(() => setLoading(false));
  }, [id, authenticated]);

  if (authLoading || loading)
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

export default function AdminManufacturerEditPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
        </div>
      }
    >
      <EditContent />
    </Suspense>
  );
}
