import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Instantly scroll to top without smooth animation
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]); // React to both pathname and search params

  return null;
}
