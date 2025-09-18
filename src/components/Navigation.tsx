import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Envelope, List, Moon, Sun } from "@phosphor-icons/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";
import { logoBlack, logoWhite } from "@/assets";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiYoutube } from "@mdi/js";
import { NavigationItem } from "@/types";

interface NavigationProps {
  navigation: NavigationItem[];
  onContactClick: () => void;
}

export default function Navigation({
  navigation,
  onContactClick,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={theme === "light" ? logoBlack : logoWhite}
                alt="TIGER CZ Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
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
              {theme === "dark" ? (
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
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                title="Facebook"
              >
                <Icon path={mdiFacebook} size={0.8} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                title="Instagram"
              >
                <Icon path={mdiInstagram} size={0.8} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                title="YouTube"
              >
                <Icon path={mdiYoutube} size={0.8} />
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
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <List className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80">
                <div className="flex flex-col h-full">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center justify-center py-6">
                    <img
                      src={theme === "light" ? logoBlack : logoWhite}
                      alt="TIGER CZ Logo"
                      className="h-8 w-auto"
                    />
                  </div>

                  <Separator />

                  {/* Navigation items */}
                  <div className="flex flex-col py-6 space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg py-2 px-4 rounded-lg transition-colors text-left ${
                          location.pathname === item.path
                            ? "text-accent font-semibold bg-accent/10"
                            : "text-foreground hover:text-accent hover:bg-accent/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <Separator />

                  {/* Contact info and social links */}
                  <div className="flex-1 flex flex-col justify-end space-y-6 py-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 px-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <span className="text-base font-medium">
                          +420 601 017 000
                        </span>
                      </div>

                      <div className="px-4">
                        <div className="text-sm text-muted-foreground mb-3">
                          Sledujte nás:
                        </div>
                        <div className="flex items-center space-x-4">
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                            title="Facebook"
                          >
                            <Icon path={mdiFacebook} size={1.2} />
                          </a>
                          <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                            title="Instagram"
                          >
                            <Icon path={mdiInstagram} size={1.2} />
                          </a>
                          <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                            title="YouTube"
                          >
                            <Icon path={mdiYoutube} size={1.2} />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="px-4">
                      <Button
                        onClick={() => {
                          onContactClick();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        size="lg"
                      >
                        Napište nám
                        <Envelope className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
