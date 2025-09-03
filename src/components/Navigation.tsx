import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Star, Shield, Wrench, Clock, ArrowRight, Menu, Moon, Sun } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { useTheme } from '@/contexts/ThemeContext'
import pozitivniLogo from '@/assets/images/pozitivni.svg'
import sPozadimLogo from '@/assets/images/s-pozadim.svg'

interface NavigationProps {
  navigation: Array<{
    name: string
    href: string
    onClick?: () => void
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
              src={theme === 'dark' ? sPozadimLogo : pozitivniLogo}
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
                className="text-sm hover:text-accent transition-colors"
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
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
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
                      className="text-lg hover:text-accent transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Separator />
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">+420 601 017 000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Facebook className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                    <Instagram className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                    <Youtube className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
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