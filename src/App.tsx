import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Import components
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Import pages
import Home from "@/pages/Home";
import StrojePage from "@/pages/Stroje";
import ProductDetailPage from "@/pages/ProductDetail";
import SubsidiesPage from "@/pages/SubsidiesPage";
import ServicePage from "@/pages/ServicePage";
import ContactsPage from "@/pages/ContactsPage";
import RentalPage from "@/pages/RentalPage";

import { NavigationItem, Product } from "@/types";

function AppContent() {
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

      <Footer
        onProductsClick={() => navigate("/products")}
        onSubsidiesClick={() => navigate("/subsidies")}
      />

      {/* Contact Form Modal */}
      <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
