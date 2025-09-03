import { Button } from '@/components/ui/button'

interface FooterProps {
  onProductsClick: () => void
  onSubsidiesClick: () => void
}

export default function Footer({ onProductsClick, onSubsidiesClick }: FooterProps) {
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
            <div className="space-y-2 text-sm">
              <button 
                onClick={onProductsClick} 
                className="block text-muted-foreground hover:text-foreground text-left"
              >
                Traktory TIGER
              </button>
              <button 
                onClick={onProductsClick} 
                className="block text-muted-foreground hover:text-foreground text-left"
              >
                Nakladače MANITECH
              </button>
              <button 
                onClick={onProductsClick} 
                className="block text-muted-foreground hover:text-foreground text-left"
              >
                VZV LIZZARD
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Služby</h3>
            <div className="space-y-2 text-sm">
              <a href="#service" className="block text-muted-foreground hover:text-foreground">Servis</a>
              <a href="#rental" className="block text-muted-foreground hover:text-foreground">Pronájem</a>
              <button 
                onClick={onSubsidiesClick} 
                className="block text-muted-foreground hover:text-foreground text-left"
              >
                Dotace
              </button>
              <a href="#" className="block text-muted-foreground hover:text-foreground">Financování</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>zemstroje@gmail.com</p>
              <p>+420 601 017 000</p>
              <p>Skuhrov 13<br/>468 22 Železný Brod</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 TIGER CZ s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}