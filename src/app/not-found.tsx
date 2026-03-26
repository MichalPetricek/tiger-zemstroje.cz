import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <h2 className="text-2xl font-semibold">Stránka nenalezena</h2>
        <p className="text-muted-foreground max-w-md">
          Požadovaná stránka neexistuje nebo byla přesunuta. Zkontrolujte
          prosím URL adresu.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
}
