import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Phone, Mail, Menu, Moon, Sun } from '@phosphor-icons/react'

interface NavigationProps {
  navigation: Array<{
    name: string
    href: string
    onClick?: () => void
  }>
  onContactClick: () => void
}

export default function Navigation({ navigation, onContactClick }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-accent">TIGER CZ</span>
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

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">+420 601 017 000</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}