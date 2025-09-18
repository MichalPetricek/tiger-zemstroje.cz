import Service from "@/components/Service";

interface ServicePageProps {
  onContactClick: () => void;
}

export default function ServicePage({ onContactClick }: ServicePageProps) {
  return (
    <div className="pt-4">
      <Service onContactClick={onContactClick} />
    </div>
  );
}
