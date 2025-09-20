import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    // Use requestAnimationFrame to ensure scroll happens after paint
    requestAnimationFrame(scrollToTop);
  }, [location.pathname, location.search]); // React to both pathname and search params

  return null;
}
