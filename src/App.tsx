import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import AppRouter from "./Router";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRouter />
        {/* Toast notifications */}
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
