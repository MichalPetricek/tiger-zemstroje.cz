# TIGER CZ - Zemědělské stroje

Moderní webová aplikace pro prodej a servis zemědělské a manipulační techniky TIGER CZ s.r.o.

## � Rychlý start

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Aplikace běží na http://localhost:8085
```

## �🚜 O projektu

Webová aplikace pro společnost TIGER CZ s.r.o., specializující se na prodej a servis zemědělské techniky včetně traktorů, nakladačů, bagrů a vysokozdvižných vozíků.

### Hlavní funkce

- **Produktový katalog** - Traktory TIGER, YTO, JINMA, nakladače MANITECH, bagry a ještěrky LIZZARD
- **Servisní služby** - Online objednání servisu, diagnostika, náhradní díly
- **Pronájem techniky** - Rezervační systém pro pronájem traktorů
- **Dotační poradenství** - Aktuální informace o dotacích na zemědělskou techniku
- **Kontaktní systém** - Kompletní kontaktní informace včetně interaktivní mapy

### Technické specifikace

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui komponenty
- **Build tool**: Vite
- **Ikony**: Phosphor Icons + MDI Icons
- **Animace**: Framer Motion
- **Formuláře**: React Hook Form + Zod validace
- **Notifikace**: Sonner toasts

## 🎨 Design

- **Barevné schéma**: Tmavý režim (#111324) / Světlý režim s akcentní oranžovou (#EE7202)
- **Responzivní design**: Mobile-first přístup
- **Přepínání témat**: Dark/Light mode s ukládáním do localStorage
- **Typografie**: Inter font family

## 🚀 Instalace a spuštění

```bash
# Klonování repozitáře
git clone [URL_REPOZITARE]
cd tiger-webova-aplikace

# Instalace závislostí
npm install

# Spuštění ve vývojovém režimu
npm run dev

# Build pro produkci
npm run build

# Náhled produkční verze
npm run preview
```

## 📁 Struktura projektu

```
src/
├── components/          # React komponenty
│   ├── ui/             # shadcn/ui komponenty
│   ├── Navigation.tsx  # Hlavní navigace
│   ├── Products.tsx    # Katalog produktů
│   ├── Service.tsx     # Servisní stránka
│   ├── Contacts.tsx    # Kontaktní stránka
│   └── ...
├── contexts/           # React kontexty (ThemeContext)
├── assets/            # Statické soubory (obrázky, loga)
│   ├── images/
│   └── logos/
├── App.tsx           # Hlavní komponenta aplikace
├── index.css         # Globální styly a CSS proměnné
└── main.tsx         # Entry point
```

## 📝 Klíčové komponenty

### Navigation

Responzivní navigace s přepínačem témat, telefonním číslem a sociálními sítěmi.

### Products

Katalog produktů s filtrováním podle kategorií (Traktory, Nakladače, Bagry, Ještěrky).

### ProductDetail

Detailní zobrazení produktu s technickými specifikacemi a kontaktními možnostmi.

### Service

Servisní stránka s ceníkem služeb a formulářem pro objednání.

### Subsidies

Přehled aktuálních dotačních programů pro zemědělskou techniku.

### Contacts

Kontaktní stránka s mapou Google Maps a všemi kontaktními údaji.

## 🔧 Konfigurace

### Barevné schéma

Upravte barevné proměnné v `src/index.css`:

```css
:root {
  --background: oklch(0.145 0.02 250); /* Tmavé pozadí */
  --accent: oklch(0.65 0.15 40); /* Oranžová akcent */
  /* ... další barvy */
}
```

### Produktová data

Produkty jsou definovány v `src/App.tsx` v poli `products`. Každý produkt obsahuje:

- Základní informace (název, cena, výkon)
- Technické specifikace
- Seznam vlastností
- Kategorizaci a značku

## 📱 Responzivnost

Aplikace je optimalizována pro všechna zařízení:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠 Dostupné skripty

- `npm run dev` - Spuštění dev serveru
- `npm run build` - Build pro produkci
- `npm run preview` - Náhled produkční verze
- `npm run lint` - ESLint kontrola
- `npm run type-check` - TypeScript kontrola

## 📞 Kontakt

**TIGER CZ s.r.o.**

- **Obchod**: +420 601 017 000, zemstroje@gmail.com
- **Servis**: +420 602 458 177, servis@zemstroje.cz
- **Adresa**: Skuhrov 13, 468 22 Železný Brod
- **Otevírací doba**: Po-Pá 9:00-16:00

## 📄 Licence

Projekt je vlastnictvím společnosti TIGER CZ s.r.o.

---

_"RYCHLOST – SPOLEHLIVOST – FLEXIBILITA"_
