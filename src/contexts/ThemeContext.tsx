import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      return (saved === 'light' || saved === 'dark') ? saved : 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove both classes first
    root.classList.remove('light', 'dark')
    
    // Add the current theme class
    if (theme === 'light') {
      root.classList.add('light')
    }
    // Dark mode is the default CSS, so no class needed
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
    
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}