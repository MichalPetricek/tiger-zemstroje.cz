#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔍 Component Checker for TIGER CZ')
console.log('=================================\n')

// Check all component imports from App.tsx
const requiredComponents = [
  'src/components/Navigation.tsx',
  'src/components/ContactForm.tsx', 
  'src/components/ProductCard.tsx',
  'src/components/ProductDetail.tsx',
  'src/components/Subsidies.tsx',
  'src/components/Service.tsx',
  'src/components/Contacts.tsx',
  'src/components/Rental.tsx',
  'src/components/Products.tsx',
  'src/components/Footer.tsx'
]

console.log('Required Components:')
requiredComponents.forEach(comp => {
  if (fs.existsSync(comp)) {
    console.log(`✅ ${comp}`)
  } else {
    console.log(`❌ ${comp} - MISSING!`)
  }
})

// Check UI components
const uiComponents = [
  'src/components/ui/button.tsx',
  'src/components/ui/card.tsx',
  'src/components/ui/badge.tsx',
  'src/components/ui/sonner.tsx',
  'src/components/ui/dialog.tsx',
  'src/components/ui/input.tsx',
  'src/components/ui/textarea.tsx',
  'src/components/ui/sheet.tsx',
  'src/components/ui/separator.tsx'
]

console.log('\nUI Components:')
uiComponents.forEach(comp => {
  if (fs.existsSync(comp)) {
    console.log(`✅ ${comp}`)
  } else {
    console.log(`❌ ${comp} - MISSING!`)
  }
})

// Check contexts
console.log('\nContexts:')
if (fs.existsSync('src/contexts/ThemeContext.tsx')) {
  console.log('✅ src/contexts/ThemeContext.tsx')
} else {
  console.log('❌ src/contexts/ThemeContext.tsx - MISSING!')
}

// Check assets
console.log('\nAssets:')
const assetFiles = [
  'src/assets/index.ts',
  'src/assets/images/logo-white.svg',
  'src/assets/images/logo-black.svg'
]

assetFiles.forEach(asset => {
  if (fs.existsSync(asset)) {
    console.log(`✅ ${asset}`)
  } else {
    console.log(`❌ ${asset} - MISSING!`)
  }
})

console.log('\n📋 Next Steps:')
console.log('1. Run: node debug-start.js')
console.log('2. Try: node switch-app.js simple')  
console.log('3. Then: npm run dev')
console.log('4. If issues persist: npm run type-check')