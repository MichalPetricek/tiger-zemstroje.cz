# 🚀 TIGER CZ - Getting Started

## After `git clone` and `npm install`

### Step 1: Diagnose Issues
```bash
npm run debug
npm run check-components
```

### Step 2: Test Progressive Complexity

Start with the simplest version and work your way up:

```bash
# Try the basic app first
npm run switch-simple
npm run dev
```

If that works:
```bash
# Try the minimal app with navigation  
npm run switch-minimal
npm run dev
```

If that works:
```bash
# Try the full application
npm run switch-full  
npm run dev
```

### Step 3: Check TypeScript Issues
```bash
npm run type-check
```

### Step 4: If Still Having Problems

1. **Check Node.js version** (should be 18+ or 20+)
   ```bash
   node --version
   ```

2. **Clear node_modules and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check specific error messages** in the terminal when running `npm run dev`

4. **Common fixes:**
   - Make sure you're in the project directory
   - Check that all files exist with `npm run check-components`
   - Verify TypeScript config with `npm run type-check`

### 🎯 Expected Result

When working, you should see:
- Vite dev server starts on http://localhost:5173 (or similar port)
- TIGER CZ website loads with dark/light theme toggle
- Navigation menu works
- No TypeScript errors in terminal

### 📁 Project Structure

- `src/App.tsx` - Main application (full version)
- `src/App-simple.tsx` - Simple test version  
- `src/App-minimal.tsx` - Minimal functional version
- `DEVELOPMENT.md` - Detailed development guide

### 🆘 Still Need Help?

Check the error messages in your terminal and look for:
1. Import/export errors
2. TypeScript type errors
3. Missing dependencies
4. File path issues

Most issues are usually:
- Missing components/files
- TypeScript configuration
- Import path problems (`@/` should work for `src/`)

The application should work out of the box after `npm install`. If not, the debug scripts will help identify the specific issue.