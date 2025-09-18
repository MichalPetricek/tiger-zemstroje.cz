import Subsidies from "@/components/Subsidies";

interface SubsidiesPageProps {
  onContactClick: () => void;
}

export default function SubsidiesPage({ onContactClick }: SubsidiesPageProps) {
  return (
    <div className="pt-4">
      <Subsidies onContactClick={onContactClick} />
    </div>
  );
}
