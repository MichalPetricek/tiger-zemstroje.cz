"use client";

import { useRouter } from "next/navigation";
import Rental from "@/components/Rental";
import { useContactForm } from "@/contexts/ContactFormContext";

export default function RentalContent() {
  const router = useRouter();
  const { openContactForm } = useContactForm();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="pt-4">
      <Rental onBack={handleBack} onContactClick={openContactForm} />
    </div>
  );
}
