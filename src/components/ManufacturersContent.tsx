"use client";

import { useEffect, useState } from "react";
import Manufacturers from "@/components/Manufacturers";
import { Manufacturer } from "@/types";
import { getManufacturers } from "@/lib/data";

export default function ManufacturersContent({
  manufacturers,
}: {
  manufacturers: Manufacturer[];
}) {
  const [liveManufacturers, setLiveManufacturers] = useState<Manufacturer[]>(manufacturers);

  useEffect(() => {
    let active = true;
    getManufacturers()
      .then((fresh) => {
        if (active && fresh.length > 0) setLiveManufacturers(fresh);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Manufacturers manufacturers={liveManufacturers} />
    </main>
  );
}
