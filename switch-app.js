#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const appVersion = process.argv[2] || 'help'

const versions = {
  'simple': 'App-simple.tsx',
  'minimal': 'App-minimal.tsx', 
  'full': 'App.tsx'
}

if (appVersion === 'help') {
  console.log('🔄 App Switcher for TIGER CZ')
  console.log('=============================')
  console.log('')
  console.log('Usage: node switch-app.js [version]')
  console.log('')
  console.log('Available versions:')
  console.log('  simple  - Very basic app to test if React works')
  console.log('  minimal - Basic app with theme and navigation')
  console.log('  full    - Complete application (default)')
  console.log('')
  console.log('Examples:')
  console.log('  node switch-app.js simple')
  console.log('  node switch-app.js full')
  process.exit(0)
}

if (!versions[appVersion]) {
  console.log(`❌ Unknown version: ${appVersion}`)
  console.log('Available versions:', Object.keys(versions).join(', '))
  process.exit(1)
}

const mainTsxPath = 'src/main.tsx'
const targetApp = versions[appVersion]

// Check if target app exists
if (!fs.existsSync(`src/${targetApp}`)) {
  console.log(`❌ Target app not found: src/${targetApp}`)
  process.exit(1)
}

// Read current main.tsx
let mainContent = fs.readFileSync(mainTsxPath, 'utf8')

// Replace the import line
mainContent = mainContent.replace(
  /import App from '\.\/App.*\.tsx'/,
  `import App from './${targetApp.replace('.tsx', '.tsx')}'`
)

// Write back
fs.writeFileSync(mainTsxPath, mainContent)

console.log(`✅ Switched to ${appVersion} version (${targetApp})`)
console.log('Now try: npm run dev')