import React, { Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import components that are always needed
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load page components for code splitting
const Home = React.lazy(() => import("@/pages/Home"));
const StrojePage = React.lazy(() => import("@/pages/Stroje"));
const ProductDetailPage = React.lazy(() => import("@/pages/ProductDetail"));
const SubsidiesPage = React.lazy(() => import("@/pages/SubsidiesPage"));
const ServicePage = React.lazy(() => import("@/pages/ServicePage"));
const ContactsPage = React.lazy(() => import("@/pages/ContactsPage"));
const RentalPage = React.lazy(() => import("@/pages/RentalPage"));

import { NavigationItem, Product } from "@/types";

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
  </div>
);

export default function AppRouter() {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const navigate = useNavigate();

  const handleProductSelect = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  const navigation: NavigationItem[] = [
    { name: "Domů", href: "#home", path: "/" },
    { name: "Produkty", href: "#products", path: "/products" },
    { name: "Servis", href: "#service", path: "/service" },
    { name: "Pronájem", href: "#rental", path: "/rental" },
    { name: "Dotace", href: "#subsidies", path: "/subsidies" },
    { name: "Kontakt", href: "#contact", path: "/contacts" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      <ScrollToTop />
      <Navigation
        navigation={navigation}
        onContactClick={() => setShowContactForm(true)}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onContactClick={() => setShowContactForm(true)}
                onProductSelect={handleProductSelect}
              />
            }
          />
          <Route path="/products" element={<StrojePage />} />
          <Route
            path="/products/:productId"
            element={
              <ProductDetailPage
                onContactClick={() => setShowContactForm(true)}
              />
            }
          />
          <Route
            path="/service"
            element={
              <ServicePage onContactClick={() => setShowContactForm(true)} />
            }
          />
          <Route
            path="/rental"
            element={
              <RentalPage onContactClick={() => setShowContactForm(true)} />
            }
          />
          <Route
            path="/subsidies"
            element={
              <SubsidiesPage onContactClick={() => setShowContactForm(true)} />
            }
          />
          <Route
            path="/contacts"
            element={
              <ContactsPage onContactClick={() => setShowContactForm(true)} />
            }
          />
        </Routes>
      </Suspense>

      <Footer
        onTraktoryClick={() => navigate("/products?category=Traktory")}
        onNakladaceClick={() => navigate("/products?category=Nakladače")}
        onBagryClick={() => navigate("/products?category=Bagry")}
        onJesterkyClick={() => navigate("/products?category=Ještěrky")}
        onPrislusenstviClick={() =>
          navigate("/products?category=Příslušenství")
        }
        onSubsidiesClick={() => navigate("/subsidies")}
        onServiceClick={() => navigate("/service")}
        onRentalClick={() => navigate("/rental")}
      />

      {/* Contact Form Modal */}
      <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
    </div>
  );
}
