import React from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'

function SimpleApp() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold p-8">Test App</h1>
      <p className="text-xl p-8">If you can see this, React is working!</p>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <SimpleApp />
    </ThemeProvider>
  )
}

export default App