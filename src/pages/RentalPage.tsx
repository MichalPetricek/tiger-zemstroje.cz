import { useNavigate } from "react-router-dom";
import Rental from "@/components/Rental";

interface RentalPageProps {
  onContactClick: () => void;
}

export default function RentalPage({ onContactClick }: RentalPageProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="pt-4">
      <Rental onBack={handleBack} onContactClick={onContactClick} />
    </div>
  );
}
