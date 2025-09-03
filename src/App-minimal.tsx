import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from '@phosphor-icons/react'
import Navigation from '@/components/Navigation'
import { useState } from 'react'

function MinimalApp() {
  const { theme, toggleTheme } = useTheme()
  const [showContactForm, setShowContactForm] = useState(false)
  
  const navigation = [
    { name: 'Domů', href: '#home', onClick: () => {} },
    { name: 'Traktory', href: '#tractors', onClick: () => {} },
    { name: 'Kontakt', href: '#contact', onClick: () => {} }
  ]
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation navigation={navigation} onContactClick={() => setShowContactForm(true)} />
      
      <div className="pt-24 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-accent">TIGER CZ Test</h1>
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
        </div>
        <p className="text-xl text-muted-foreground">
          Current theme: {theme}. Navigation is working!
        </p>
        {showContactForm && (
          <p className="text-accent mt-4">Contact form would open here</p>
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <MinimalApp />
    </ThemeProvider>
  )
}

export default App