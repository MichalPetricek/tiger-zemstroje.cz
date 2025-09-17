# Nastavení Git Repository

## Kroky pro push do nového repository

### 1. Vytvoření nového repository na GitHubu
1. Jděte na GitHub.com
2. Klikněte na "New repository"
3. Název: `tiger-cz-web` (nebo dle preference)
4. Popis: `Webová aplikace pro TIGER CZ - zemědělské stroje`
5. Nastavte jako **Private** (pokud nechcete public)
6. **Nevytvářejte** README, .gitignore nebo licenci (už máme)

### 2. Lokální Git konfigurace

Spusťte v terminálu v root složce projektu:

```bash
# Inicializace git (pokud není)
git init

# Přidání všech souborů
git add .

# První commit
git commit -m "Initial commit: TIGER CZ web application

- Complete React application with TypeScript
- Product catalog with filters (Tractors, Loaders, Excavators, Forklifts)
- Service booking system
- Rental system for tractors
- Subsidies information
- Contact page with Google Maps
- Dark/Light theme switching
- Responsive design for all devices
- Modern UI with Tailwind CSS and shadcn/ui"

# Připojení k remote repository (nahraďte URL vaším)
git remote add origin https://github.com/YOUR_USERNAME/tiger-cz-web.git

# Push na GitHub
git branch -M main
git push -u origin main
```

### 3. Branches strategie (doporučeno)

```bash
# Vytvoření development branch
git checkout -b development
git push -u origin development

# Vytvoření feature branches pro nové funkce
git checkout -b feature/payment-integration
git checkout -b feature/inventory-management
```

### 4. Útrata zrátit před push

- [ ] Odstraňte všechny debug komentáře
- [ ] Ověřte že nejsou committed žádné API klíče nebo citlivé údaje
- [ ] Zkontrolujte .gitignore
- [ ] Spusťte `npm run build` a ověřte že build prochází
- [ ] Zkontrolujte že všechny image soubory jsou správně naimportované

### 5. Po úspěšném push

1. **Nastavte GitHub Pages** (pokud chcete)
   - Settings → Pages → Source: GitHub Actions
   - Nebo použijte jiný hosting (Vercel, Netlify)

2. **Nastavte branch protection**
   - Settings → Branches → Add rule pro main branch
   - Require PR reviews před merge

3. **Přidejte collaborators** (pokud potřeba)
   - Settings → Collaborators → Add people

### 6. Continuous Deployment (CI/CD)

Vytvořte `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to hosting
      # Přidejte deployment step dle vašeho hostingu
      run: echo "Deploy to your hosting provider"
```

## Troubleshooting

### Problém s velikostí repository
Pokud je repository příliš velký:
```bash
# Zkontrolujte velikost
du -sh .git

# Vyčistěte git cache
git rm -r --cached .
git add .
git commit -m "Clean cache"
```

### Problém s line endings (Windows)
```bash
git config core.autocrlf true
```

### Forgotten files in .gitignore
```bash
# Postupné odstranění již trackovaných souborů
git rm -r --cached node_modules
git rm -r --cached dist
git commit -m "Remove tracked files that should be ignored"
```

---

**Tip**: Po úspěšném setup můžete smazat tento soubor nebo jej přejmenovat na `.setup-repo.md` aby byl skrytý.