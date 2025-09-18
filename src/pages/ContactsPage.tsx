import Contacts from "@/components/Contacts";

interface ContactsPageProps {
  onContactClick: () => void;
}

export default function ContactsPage({ onContactClick }: ContactsPageProps) {
  return (
    <div className="pt-4">
      <Contacts onContactClick={onContactClick} />
    </div>
  );
}
