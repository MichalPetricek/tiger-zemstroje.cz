"use client";

import Subsidies from "@/components/Subsidies";
import { useContactForm } from "@/contexts/ContactFormContext";

export default function SubsidiesContent() {
  const { openContactForm } = useContactForm();

  return (
    <div className="pt-4">
      <Subsidies onContactClick={openContactForm} />
    </div>
  );
}
