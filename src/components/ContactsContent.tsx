"use client";

import Contacts from "@/components/Contacts";
import { useContactForm } from "@/contexts/ContactFormContext";

export default function ContactsContent() {
  const { openContactForm } = useContactForm();

  return (
    <div className="pt-4">
      <Contacts onContactClick={openContactForm} />
    </div>
  );
}
