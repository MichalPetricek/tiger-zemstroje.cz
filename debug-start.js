#!/usr/bin/env node

console.log('🔍 TIGER CZ - Debug Script')
console.log('=========================\n')

// Check Node.js version
console.log('1. Node.js version:', process.version)

// Check if package.json exists
const fs = require('fs')
const path = require('path')

if (!fs.existsSync('package.json')) {
  console.log('❌ package.json not found!')
  process.exit(1)
}

console.log('✅ package.json found')

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('❌ node_modules not found! Run: npm install')
  process.exit(1)
}

console.log('✅ node_modules found')

// Check if src directory exists
if (!fs.existsSync('src')) {
  console.log('❌ src directory not found!')
  process.exit(1)
}

console.log('✅ src directory found')

// Check key files
const keyFiles = [
  'src/App.tsx',
  'src/main.tsx', 
  'src/index.css',
  'src/contexts/ThemeContext.tsx',
  'src/components/Navigation.tsx',
  'vite.config.ts',
  'tsconfig.json'
]

let missingFiles = []
keyFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`)
  } else {
    console.log(`❌ ${file} missing`)
    missingFiles.push(file)
  }
})

if (missingFiles.length > 0) {
  console.log('\n⚠️  Missing files detected!')
  console.log('Missing files:', missingFiles.join(', '))
}

console.log('\n🚀 Try running:')
console.log('   npm run type-check  # Check TypeScript errors')
console.log('   npm run build:check # Check build without output')
console.log('   npm run dev         # Start development server')

console.log('\n📋 If you get specific errors, check:')
console.log('   - Import paths (should use @/ for src/)')
console.log('   - TypeScript types for components')
console.log('   - Missing dependencies')