"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const navigation = [
  { name: "Domů", href: "#home", path: "/" },
  { name: "Produkty", href: "#products", path: "/products" },
  { name: "Výrobci", href: "#manufacturers", path: "/vyrobci" },
  { name: "Servis", href: "#service", path: "/service" },
  { name: "Pronájem", href: "#rental", path: "/rental" },
  { name: "Novinky", href: "#news", path: "/news" },
  { name: "Kontakt", href: "#contact", path: "/contacts" },
];

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ContactFormProvider>
        <div className="min-h-screen bg-background text-foreground font-[Inter]">
          <Navigation navigation={navigation} />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </ContactFormProvider>
    </ThemeProvider>
  );
}
