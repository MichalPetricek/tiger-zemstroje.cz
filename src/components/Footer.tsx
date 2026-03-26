import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-accent mb-4">TIGER CZ</div>
            <p className="text-sm text-muted-foreground mb-4">
              Rychlost - Spolehlivost - Flexibilita
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produkty</h3>
            <nav className="space-y-2 text-sm" aria-label="Kategorie produktů">
              <Link
                href="/products?category=Traktory"
                className="block text-muted-foreground hover:text-foreground"
              >
                Traktory
              </Link>
              <Link
                href="/products?category=Nakladače"
                className="block text-muted-foreground hover:text-foreground"
              >
                Nakladače
              </Link>
              <Link
                href="/products?category=Bagry"
                className="block text-muted-foreground hover:text-foreground"
              >
                Bagry
              </Link>
              <Link
                href="/products?category=Ještěrky"
                className="block text-muted-foreground hover:text-foreground"
              >
                Ještěrky
              </Link>
              <Link
                href="/products?category=Příslušenství"
                className="block text-muted-foreground hover:text-foreground"
              >
                Příslušenství
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Služby</h3>
            <nav className="space-y-2 text-sm" aria-label="Služby">
              <Link
                href="/service"
                className="block text-muted-foreground hover:text-foreground"
              >
                Servis
              </Link>
              <Link
                href="/rental"
                className="block text-muted-foreground hover:text-foreground"
              >
                Pronájem
              </Link>
              <Link
                href="/news"
                className="block text-muted-foreground hover:text-foreground"
              >
                Novinky
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <address className="space-y-2 text-sm text-muted-foreground not-italic">
              <a href="mailto:zemstroje@gmail.com" className="block hover:text-foreground transition-colors">
                zemstroje@gmail.com
              </a>
              <a href="tel:+420601017000" className="block hover:text-foreground transition-colors">
                +420 601 017 000
              </a>
              <p>
                Skuhrov 13
                <br />
                468 22 Železný Brod
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 TIGER CZ s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
