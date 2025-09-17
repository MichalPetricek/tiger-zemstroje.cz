# Deployment Guide - TIGER CZ Web Application

## 🚀 Nasazení do produkce

### Příprava pro nasazení

1. **Kontrola kódu a testování**
```bash
# Type check
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

2. **Optimalizace pro produkci**
```bash
# Production build
npm run build

# Náhled produkční verze
npm run preview
```

### Nasazení na různé platformy

#### Vercel (Doporučeno)
```bash
# Instalace Vercel CLI
npm i -g vercel

# Nasazení
vercel

# Produkční nasazení
vercel --prod
```

#### Netlify
1. Push kód na GitHub
2. Připojit repository na Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

#### GitHub Pages
```bash
# Instalace gh-pages
npm install --save-dev gh-pages

# Přidání scriptů do package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Nasazení
npm run deploy
```

### Environment proměnné

Vytvořte `.env` soubor pro produkční prostředí:

```env
# Google Maps API Key (pro mapy v kontaktech)
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here

# Email service configuration
VITE_EMAIL_SERVICE_URL=your_email_service_url

# Analytics
VITE_GOOGLE_ANALYTICS_ID=your_analytics_id
```

### SEO optimalizace

#### Meta tags v index.html
```html
<meta name="description" content="TIGER CZ - prodej a servis zemědělských strojů, traktorů, nakladačů a bagrů. Nejlevnější 50HP traktor na českém trhu.">
<meta name="keywords" content="traktory, zemědělské stroje, TIGER, YTO, JINMA, MANITECH, LIZZARD, prodej, servis, pronájem">
<meta name="author" content="TIGER CZ s.r.o.">

<!-- Open Graph -->
<meta property="og:title" content="TIGER CZ - Zemědělské stroje">
<meta property="og:description" content="Prodej a servis zemědělské techniky. Nejlevnější 50HP traktor na českém trhu.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://your-domain.com">
<meta property="og:image" content="https://your-domain.com/og-image.jpg">
```

### Performance optimalizace

#### Obrázky
- Optimalizujte všechny obrázky produktů
- Použijte WebP formát kde je to možné  
- Implementujte lazy loading

#### Caching
```nginx
# Nginx konfigurace pro statické soubory
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Monitoring a Analytics

#### Google Analytics 4
```typescript
// src/utils/analytics.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};
```

#### Error monitoring (Sentry)
```bash
npm install @sentry/react @sentry/tracing
```

### Bezpečnost

#### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data: https:;">
```

### Checklist před nasazením

- [ ] Všechny komponenty jsou otestované
- [ ] Build prochází bez chyb
- [ ] Všechny obrázky jsou optimalizované  
- [ ] Meta tags jsou nastavené
- [ ] Analytics jsou připojené
- [ ] SSL certifikát je nakonfigurovaný
- [ ] Redirects jsou nastavené (www → non-www)
- [ ] Sitemap.xml je vygenerovaná
- [ ] robots.txt je nakonfigurovaný

### Backup a údržba

#### Automatické zálohy
```bash
# Backup databáze (pokud používáte)
# Backup statických souborů
# Backup konfiguračních souborů
```

#### Aktualizace závislostí
```bash
# Kontrola aktualizací
npm outdated

# Update závislostí
npm update

# Audit bezpečnosti
npm audit
```

### Support kontakty

Pro technické problémy s nasazením kontaktujte:
- **Vývojář**: [developer@email.com]
- **Hosting support**: [hosting@provider.com]

---

**Poznámka**: Tento guide předpokládá základní znalost webového hostingu a nasazování aplikací. Pro složitější nasazení doporučujeme konzultaci s DevOps specialistou.