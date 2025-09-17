# TIGER CZ - Development Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

## Troubleshooting

### If you get errors when running `npm run dev`:

1. **Check your setup:**
   ```bash
   node debug-start.js
   ```

2. **Check TypeScript errors:**
   ```bash
   npm run type-check
   ```

3. **Try different app versions:**
   ```bash
   # Start with the simplest version
   node switch-app.js simple
   npm run dev
   
   # If that works, try minimal version
   node switch-app.js minimal
   npm run dev
   
   # Finally try the full app
   node switch-app.js full
   npm run dev
   ```

### Common Issues:

1. **Import errors with @/ paths:**
   - Make sure `tsconfig.json` has the correct path mapping
   - Check that `vite.config.ts` has the alias configured

2. **Component not found errors:**
   - Check that all shadcn components are in `src/components/ui/`
   - Verify import paths are correct

3. **Type errors:**
   - Run `npm run type-check` to see specific TypeScript issues
   - Check that all `.d.ts` files are properly configured

### App Versions:

- **simple**: Minimal React app to test basic functionality
- **minimal**: Basic app with theme switcher and navigation
- **full**: Complete TIGER CZ application

### File Structure:

```
src/
├── App.tsx                 # Main application
├── App-simple.tsx         # Simple test app
├── App-minimal.tsx        # Minimal functional app
├── main.tsx               # Entry point
├── index.css              # Main styles
├── contexts/
│   └── ThemeContext.tsx   # Theme management
├── components/
│   ├── ui/                # shadcn components
│   ├── Navigation.tsx     # Main navigation
│   ├── ContactForm.tsx    # Contact form modal
│   └── ...               # Other components
├── assets/
│   └── images/           # Logo and image assets
└── lib/
    └── utils.ts          # Helper functions
```

### Development Commands:

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run type-check   # Check TypeScript without building
npm run lint         # Run ESLint
```

### Adding New Components:

1. Create component in appropriate folder
2. Use TypeScript interfaces for props
3. Import shared components from `@/components/ui/`
4. Use the theme system for consistent styling

### Theme System:

The app supports both light and dark modes:
- Dark mode is the default
- Light mode can be toggled via the theme button
- Theme preference is saved to localStorage
- CSS variables are defined in `src/index.css`

### Assets:

- Logo variants are in `src/assets/images/`
- Import assets using: `import logo from '@/assets/images/logo.svg'`
- Placeholder images use `/api/placeholder/` URLs