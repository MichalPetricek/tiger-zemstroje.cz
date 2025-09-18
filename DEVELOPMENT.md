# Development Guide

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:check` - Type check without building
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build cache

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # UI components (shadcn/ui)
│   ├── ContactForm.tsx
│   ├── Navigation.tsx
│   └── ...
├── contexts/           # React contexts
├── hooks/             # Custom hooks
├── lib/               # Utilities
├── styles/            # CSS files
├── assets/            # Static assets
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Technology Stack

- **React 19** with TypeScript
- **Vite** for development and building
- **Tailwind CSS v4** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **React Hook Form** for forms
- **Zod** for validation

## Development Tips

1. **Component Development**: Use the existing UI components in `src/components/ui/`
2. **Styling**: Use Tailwind classes, custom CSS variables are defined in `src/main.css`
3. **Icons**: Multiple icon libraries available (@heroicons/react, lucide-react, @phosphor-icons/react)
4. **Forms**: Use React Hook Form with Zod validation
5. **State Management**: Use React context or local state

## VS Code Extensions

Install recommended extensions for the best development experience:

- Tailwind CSS IntelliSense
- Prettier
- TypeScript and JavaScript Language Features
- Auto Rename Tag
- Path Intellisense

## Troubleshooting

### Common Issues

1. **CSS not loading**: Clear Vite cache with `npm run clean`
2. **Type errors**: Run `npm run type-check` to see all TypeScript issues
3. **Linting issues**: Run `npm run lint:fix` to auto-fix most issues

### Helpful Commands

```bash
# Reset everything
rm -rf node_modules package-lock.json && npm install

# Check for updates
npm outdated

# Update dependencies
npm update
```

# Original Development Guide

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
