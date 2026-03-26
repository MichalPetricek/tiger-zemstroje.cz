"use client";

import Service from "@/components/Service";
import { useContactForm } from "@/contexts/ContactFormContext";

export default function ServiceContent() {
  const { openContactForm } = useContactForm();

  return (
    <div className="pt-4">
      <Service onContactClick={openContactForm} />
    </div>
  );
}
