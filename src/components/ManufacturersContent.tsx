"use client";

import Manufacturers from "@/components/Manufacturers";
import { Manufacturer } from "@/types";

export default function ManufacturersContent({
  manufacturers,
}: {
  manufacturers: Manufacturer[];
}) {
  return (
    <main className="min-h-screen">
      <Manufacturers manufacturers={manufacturers} />
    </main>
  );
}
