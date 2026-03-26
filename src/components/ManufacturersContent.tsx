"use client";

import { useEffect, useState } from "react";
import Manufacturers from "@/components/Manufacturers";
import { Manufacturer } from "@/types";

export default function ManufacturersContent() {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);

  useEffect(() => {
    fetch("/api/manufacturers")
      .then((r) => r.json())
      .then((d) => setManufacturers(Array.isArray(d) ? d : []));
  }, []);

  return (
    <main className="min-h-screen">
      <Manufacturers manufacturers={manufacturers} />
    </main>
  );
}
