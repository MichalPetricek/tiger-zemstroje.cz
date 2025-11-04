import Manufacturers from "@/components/Manufacturers";
import { manufacturers } from "@/data/manufacturers";

export default function ManufacturersPage() {
  return (
    <main className="min-h-screen">
      <Manufacturers manufacturers={manufacturers} />
    </main>
  );
}
