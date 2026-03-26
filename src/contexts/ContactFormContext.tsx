"use client";

import React, { createContext, useContext, useState } from "react";
import ContactForm from "@/components/ContactForm";

interface ContactFormContextType {
  openContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined
);

export function ContactFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <ContactFormContext.Provider
      value={{ openContactForm: () => setShowContactForm(true) }}
    >
      {children}
      <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error(
      "useContactForm must be used within a ContactFormProvider"
    );
  }
  return context;
}
