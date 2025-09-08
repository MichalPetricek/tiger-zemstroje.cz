import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Phone, Mail, Menu, Moon, Sun } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { useTheme } from '@/contexts/ThemeContext'
import { logoBlack, logoWhite } from '@/assets'

interface NavigationProps {
  navigation: Array<{
    name: string
    href: string
    onClick?: () => void
    active?: boolean
  }>
  onContactClick: () => void
}

export default function Navigation({ navigation, onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={theme === 'light' ? logoBlack : logoWhite} 
              alt="TIGER CZ Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button 
                key={item.name} 
                onClick={item.onClick || (() => {})}
                className={`text-sm transition-colors ${
                  item.active ? 'text-accent font-semibold' : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">+420 601 017 000</span>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">
                FB
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">
                IG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">
                YT
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.onClick) item.onClick()
                        setMobileMenuOpen(false)
                      }}
                      className={`text-lg transition-colors text-left ${
                        item.active ? 'text-accent font-semibold' : 'text-foreground hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  <Separator />
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">+420 601 017 000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-muted-foreground">Sledujte nás:</span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">
                      FB
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">
                      IG
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">
                      YT
                    </a>
                  </div>
                  <Button 
                    onClick={() => {
                      onContactClick()
                      setMobileMenuOpen(false)
                    }}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Napište nám
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}