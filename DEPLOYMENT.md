# Deployment Guide - TIGER CZ s.r.o.

## Architektura

- **Frontend**: Next.js 15 se statickým exportem (`output: "export"`) → GitHub Pages
- **Backend**: Supabase (PostgreSQL databáze, Auth, Storage)
- **Doména**: jinma.cz (CNAME v repozitáři)

## 1. Nastavení Supabase

### Vytvoření projektu
1. Jděte na [supabase.com](https://supabase.com) a vytvořte nový projekt (Free tier)
2. Zapamatujte si **Project URL** a **publishable key** (Settings → API)

### Vytvoření tabulek
1. V Supabase dashboardu otevřete **SQL Editor**
2. Vložte a spusťte obsah souboru `supabase-migration.sql`
3. Tím se vytvoří tabulky `products`, `manufacturers`, `news` s RLS politikami

### Vytvoření Storage bucketu
1. V dashboardu jděte do **Storage**
2. Vytvořte nový bucket s názvem `images`
3. Nastavte jako **Public bucket**
4. Přidejte politiky:
   - SELECT pro všechny (public read)
   - INSERT/UPDATE/DELETE pro authenticated users

### Vytvoření admin uživatele
1. V dashboardu jděte do **Authentication → Users**
2. Klikněte na **Add user → Create new user**
3. Email: `admin@jinma.cz`, Heslo: zvolte silné heslo

## 2. Environment proměnné

### Lokální vývoj (.env)
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxx
NEXT_PUBLIC_ADMIN_EMAIL=admin@jinma.cz

NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

### GitHub Secrets (pro CI/CD)
V repozitáři jděte do **Settings → Secrets and variables → Actions** a přidejte:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (volitelné, legacy fallback)
- `NEXT_PUBLIC_ADMIN_EMAIL`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 3. GitHub Pages nasazení

### Automatický deploy (CI/CD)
Deploy probíhá automaticky přes GitHub Actions (`.github/workflows/deploy.yml`):
- Trigger: push na `main` branch nebo manuální spuštění
- Builduje Next.js statický export do `out/`
- Deployuje na GitHub Pages

### Nastavení GitHub Pages
1. V repozitáři jděte do **Settings → Pages**
2. Source: **GitHub Actions**
3. Custom domain: `jinma.cz` (CNAME soubor je již v repozitáři)

### Manuální deploy
```bash
npm ci
npm run build
# Výstup je ve složce ./out
```

## 4. Naplnění databáze (seed)

Po prvním nasazení:
1. Přihlaste se do admin panelu na `https://jinma.cz/admin/login`
2. Na dashboardu klikněte na **Naplnit databázi** — naimportuje produkty, výrobce a novinky ze statických dat

## 5. Aktualizace obsahu

- **Veřejné stránky** se generují při buildu (SSG). Po změně dat v Supabase je potřeba spustit nový build.
- **Admin panel** (`/admin/`) pracuje přímo se Supabase v reálném čase.
- Pro rebuild po změně dat: v GitHub jděte do **Actions → Deploy to GitHub Pages → Run workflow**

## 6. Checklist před nasazením

- [ ] Supabase projekt vytvořen a tabulky inicializovány
- [ ] Storage bucket `images` vytvořen (public)
- [ ] Admin uživatel vytvořen v Supabase Auth
- [ ] GitHub Secrets nastaveny (6 povinných + 1 volitelná legacy)
- [ ] GitHub Pages source nastaven na "GitHub Actions"
- [ ] CNAME / DNS nastavení pro jinma.cz
- [ ] Databáze naplněna přes admin panel
- [ ] Build prochází bez chyb