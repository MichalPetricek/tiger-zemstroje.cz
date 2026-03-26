"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Envelope, List, Moon, Sun } from "@phosphor-icons/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";
import { useContactForm } from "@/contexts/ContactFormContext";
// Import logos as URL paths
const logoBlack = "/images/logo-black.svg";
const logoWhite = "/images/logo-white.svg";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiYoutube } from "@mdi/js";
import { NavigationItem } from "@/types";

interface NavigationProps {
  navigation: NavigationItem[];
}

export default function Navigation({
  navigation,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const { openContactForm } = useContactForm();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" aria-label="Hlavní navigace">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <img
                src={theme === "light" ? logoBlack : logoWhite}
                alt="TIGER CZ Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.path === "/products" &&
                  pathname.startsWith("/products"));

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
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
              <a href="tel:+420601017000" className="text-sm font-medium hover:text-accent transition-colors">
                +420 601 017 000
              </a>
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
                    {navigation.map((item) => {
                      const isActive =
                        pathname === item.path ||
                        (item.path === "/products" &&
                          pathname.startsWith("/products"));

                      return (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`text-lg py-2 px-4 rounded-lg transition-colors text-left ${
                            isActive
                              ? "text-accent font-semibold bg-accent/10"
                              : "text-foreground hover:text-accent hover:bg-accent/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>

                  <Separator />

                  {/* Contact info and social links */}
                  <div className="flex-1 flex flex-col justify-end space-y-6 py-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 px-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <a href="tel:+420601017000" className="text-base font-medium hover:text-accent transition-colors">
                          +420 601 017 000
                        </a>
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
                          openContactForm();
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
