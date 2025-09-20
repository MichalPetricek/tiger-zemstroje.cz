import { Product, NewsItem } from '@/types'

export const products: Product[] = [
    // Traktory - TIGER
    {
        id: 'tiger-504',
        name: 'TIGER 504',
        price: '199 000 Kč',
        power: '50 HP',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['CENOVÁ BOMBA', 'NEJPRODÁVANĚJŠÍ'],
        description: 'Nejlevnější traktor s výkonem 50 HP na českém trhu. Jednoduchá mechanika, 2letá záruka. Traktor není určen k registraci na SPZ.',
        specs: {
            'Výkon motoru': '50 HP',
            'Pohon': '4×4',
            'Převodovka': '8F/8R',
            'Hmotnost (vč. nakladače)': 'cca 2100 kg',
            'Přední nakladač': 'TZ04D (nosnost ~400 kg)',
            'Záruka': '2 roky'
        },
        features: [
            'Přímý dovoz od výrobce',
            'Bez prostředníků - nejlepší cena',
            'Lokální servis v ČR',
            'Jednoduchá mechanika',
            'Možnost připojení nakladače TZ04D'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_TIGER504.pdf'
    },
    {
        id: 'tiger-704',
        name: 'TIGER 704',
        price: '449 000 Kč',
        power: '51.5 kW (70 HP)',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE'],
        description: 'Středně výkonný traktor s luxusní kabinou a klimatizací. Euro 3 motor s hydraulickým řízením a mechanickou převodovkou.',
        specs: {
            'Výkon motoru': '51.5 kW (70 HP)',
            'Motor': 'Euro 3, diesel, 3800 ccm',
            'Převodovka': '12/12 rychlostí',
            'Typ řízení': 'Hydraulické',
            'Pohon': '4×4',
            'Rozměry (D×Š×V)': '4120×1710×2800 mm',
            'Rozvor': '2060 mm',
            'Světlá výška': '380 mm',
            'Provozní hmotnost': '2880 kg',
            'Nosnost nakladače': '600 kg',
            'Kabina': 'Luxusní s klimatizací a zadní kamerou',
            'Rychlost': 'až 32.19 km/h'
        },
        features: [
            'Luxusní kabina s klimatizací',
            'Zadní kamera pro lepší přehled',
            'Euro 3 motor pro nižší emise',
            'Hydraulické řízení',
            '12-rychlostní převodovka',
            'Uzávěrka diferenciálu',
            'Kompatibilní s příslušenstvím'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_TIGER704FMD-TB.pdf'
    },
    {
        id: 'tiger-1004',
        name: 'TIGER 1004',
        price: '699 000 Kč',
        power: '74 kW (100 HP)',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE', 'PROFESIONÁLNÍ'],
        description: 'Středně výkonný traktor s luxusní kabinou, klimatizací a zadní kamerou. Euro 3 motor s hydraulickým řízením.',
        specs: {
            'Výkon motoru': '74 kW (100 HP)',
            'Motor': 'Euro 3, diesel, 3300 ccm',
            'Převodovka': '12/12 rychlostí',
            'Typ řízení': 'Hydraulické',
            'Pohon': '4×4',
            'Rozměry (D×Š×V)': '4150×1710×2810 mm',
            'Rozvor': '2060 mm',
            'Světlá výška': '385 mm',
            'Provozní hmotnost': '3260 kg',
            'Nosnost nakladače': '800 kg',
            'Kabina': 'Luxusní s klimatizací a zadní kamerou',
            'Rychlost': 'až 33.59 km/h',
            'Hydraulický průtok': '32 l/min'
        },
        features: [
            'Luxusní kabina s klimatizací',
            'Zadní kamera pro bezpečnost',
            'Euro 3 motor s vyšším výkonem',
            'Hydraulické řízení pro komfort',
            '12-rychlostní převodovka',
            'Uzávěrka diferenciálu',
            'Vyšší nosnost nakladače (800 kg)',
            'Profesionální hydraulické systémy'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_TIGER1004FMD-TB.pdf'
    },
    {
        id: 'tiger-1204',
        name: 'TIGER 1204',
        price: '899 000 Kč',
        power: '88.3 kW (120 HP)',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE', 'TĚŽKÁ KATEGORIE'],
        description: 'Výkonný traktor střední kategorie s luxusní kabinou a klimatizací. Euro 3 motor 6490 ccm s hydraulickým řízením pro náročnější práce.',
        specs: {
            'Výkon motoru': '88.3 kW (120 HP)',
            'Motor': 'Euro 3, diesel, 6490 ccm',
            'Převodovka': '16/8 rychlostí',
            'Typ řízení': 'Hydraulické',
            'Pohon': '4×4',
            'Rozměry (D×Š×V)': '4600×2080×3080 mm',
            'Rozvor': '2520 mm',
            'Světlá výška': '370 mm',
            'Provozní hmotnost': '4230 kg',
            'Nosnost nakladače': '1200 kg',
            'Kabina': 'Luxusní s klimatizací a zadní kamerou',
            'Rychlost': 'až 32.23 km/h',
            'Hydraulický průtok': '50 l/min',
            'Objem palivové nádrže': '300 l'
        },
        features: [
            'Větší výkon pro náročnější práce',
            'Luxusní kabina s klimatizací',
            'Zadní kamera pro bezpečnost',
            'Velkoobjem motor 6,5 l Euro 3',
            'Hydraulické řízení s vyšší účinností',
            '16-rychlostní převodovka',
            'Uzávěrka diferenciálu',
            'Vysoká nosnost nakladače (1200 kg)',
            'Profesionální hydraulika 50 l/min',
            'Velká palivová nádrž (300 l)'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_TIGER1204FMD-TD.pdf'
    },

    // Traktory - JINMA
    {
        id: 'jinma-254e',
        name: 'JINMA 254E',
        price: '289 000 Kč',
        power: '25 HP',
        category: 'Traktory',
        brand: 'JINMA',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní 25HP traktor s možností 4×4, jednoduchá mechanika pro menší farmy a zahrady.',
        specs: {
            'Výkon motoru': '25 HP',
            'Pohon': '2WD / 4WD',
            'Rozměry (D×Š×V)': '3265×1440–1640×2450 mm',
            'Rozvor': '1670 mm',
            'Světlá výška': '320 mm',
            'Rychlost': 'až 28 km/h',
            'Převodovka': '8F/2R',
            'Hmotnost': '1527 kg'
        },
        features: [
            'Kompaktní rozměry pro malé prostory',
            'Volitelný pohon 4WD',
            'ROPS ochrana / kabina s topením',
            'Nízká spotřeba paliva',
            'Jednoduchá obsluha a údržba'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_JINMA254E.pdf'
    },
    // Traktory - YTO NLY série
    {
        id: 'yto-nly954',
        name: 'YTO NLY954',
        price: '799 000 Kč',
        power: '95 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['KLIMATIZACE'],
        description: 'Profesionální traktor z řady NLY s motorem YTO Stage V (nízké vibrace/hluk) a vysokou pracovní účinností.',
        specs: {
            'Výkon motoru': '95 HP',
            'Motor': 'YTO Stage V (nízké vibrace/hluk)',
            'Převodovka': '12F/12R',
            'Kabina': 'Klimatizovaná',
            'Hydraulika': 'Vysoká pracovní účinnost'
        },
        features: [
            'Motor Stage V s nízkými vibracemi',
            'Klimatizovaná kabina',
            '12-rychlostní převodovka',
            'Vysoká pracovní účinnost',
            'Ergonomické ovládání'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_YTO_NLY954.pdf'
    },
    {
        id: 'yto-nly1054',
        name: 'YTO NLY1054',
        price: '899 000 Kč',
        power: '105 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['KLIMATIZACE', 'VÝKONNÝ'],
        description: 'Výkonný traktor z řady NLY s motorem Stage V a vysokou pracovní účinností pro středně velké zemědělské podniky.',
        specs: {
            'Výkon motoru': '105 HP',
            'Motor': 'YTO Stage V (nízké vibrace/hluk)',
            'Převodovka': '12F/12R',
            'Kabina': 'Klimatizovaná s filtry',
            'Hydraulika': 'Vysoká pracovní účinnost'
        },
        features: [
            'Výkonný a tichý motor Stage V',
            'Luxusní kabina s filtrací vzduchu',
            '12-rychlostní převodovka s vysokou účinností',
            'Profesionální hydraulické systémy',
            'Optimální pro střední farmy'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_YTO_NLY1054.pdf'
    },
    {
        id: 'yto-nly1154',
        name: 'YTO NLY1154',
        price: '999 000 Kč',
        power: '115 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['KLIMATIZACE', 'VÝKONNÝ'],
        description: 'Nejsilnější model v NLY sérii s motorem Stage V, maximálním výkonem a komfortem pro náročné aplikace.',
        specs: {
            'Výkon motoru': '115 HP',
            'Motor': 'YTO Stage V (nízké vibrace/hluk)',
            'Převodovka': '12F/12R vysoká účinnost',
            'Kabina': 'Premium s klimatizací',
            'Hydraulika': 'High-flow profesionální'
        },
        features: [
            'Maximální výkon v NLY sérii',
            'Nejmodernější Stage V motor',
            'Premium kabina s plným komfortem',
            'High-flow hydraulické systémy',
            'Pro nejnáročnější zemědělské aplikace'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_YTO_NLY1154.pdf'
    },
    // Traktory - YTO NMF série
    {
        id: 'yto-nmf554c',
        name: 'YTO NMF554C',
        price: '549 000 Kč',
        power: '55 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['UNIVERZÁLNÍ'],
        description: 'Kompaktní traktor z řady NMF určené pro menší a střední farmy. Univerzální použití s výborným poměrem cena/výkon.',
        specs: {
            'Výkon motoru': '55 HP',
            'Řada': 'NMF - kompaktní pro malé/střední farmy',
            'Výkonové pokrytí řady': '55-70 HP',
            'Převodovka': '12F+12R',
            'Hydraulika': 'Standardní'
        },
        features: [
            'Ideální pro menší a střední farmy',
            'Univerzální použití',
            '12-rychlostní převodovka',
            'Spolehlivý a ekonomický motor',
            'Výborný poměr cena/výkon'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_YTO_NMF554C.pdf'
    },
    {
        id: 'yto-nmf604c',
        name: 'YTO NMF604C',
        price: '599 000 Kč',
        power: '60 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['UNIVERZÁLNÍ'],
        description: 'Výkonnější model NMF série pro středně náročné práce na menších a středních farmách.',
        specs: {
            'Výkon motoru': '60 HP',
            'Řada': 'NMF - kompaktní pro malé/střední farmy',
            'Výkonové pokrytí řady': '55-70 HP',
            'Převodovka': '12F+12R Creeper',
            'Hydraulika': 'Vylepšená'
        },
        features: [
            'Vyšší výkon než NMF554C',
            'Creeper převodovka pro pomalé práce',
            'Vylepšené hydraulické systémy',
            'Větší výkonové rezervy',
            'Optimální pro střední farmy'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_YTO_NMF604C.pdf'
    },
    {
        id: 'yto-nmf704c',
        name: 'YTO NMF704C',
        price: '649 000 Kč',
        power: '70 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['UNIVERZÁLNÍ', 'VÝKONNÝ'],
        description: 'Nejsilnější model NMF série pro náročnější zemědělské práce na středních farmách.',
        specs: {
            'Výkon motoru': '70 HP',
            'Řada': 'NMF - max. výkon v kompaktní řadě',
            'Výkonové pokrytí řady': '55-70 HP',
            'Převodovka': '16F+16R Creeper',
            'Hydraulika': 'Pokročilá'
        },
        features: [
            'Nejvyšší výkon v NMF sérii',
            '16-rychlostní převodovka s Creeper',
            'Pokročilé hydraulické systémy',
            'Pro náročnější zemědělské aplikace',
            'Maximální výkon v kompaktní kategorii'
        ],
        available: true,
        documentation: '/src/assets/docs/traktory/parametry_YTO_NMF704C.pdf'
    },
    // Bagry
    {
        id: 'bat08',
        name: 'Bagr BAT08',
        price: 'Na dotaz',
        power: '18 HP',
        category: 'Bagry',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní bagr pro menší stavební práce.',
        specs: {
            'Výkon motoru': '18 HP',
            'Hmotnost': '800 kg',
            'Hloubka výkopu': '1.8 m',
            'Dosah': '3.2 m'
        },
        features: [
            'Kompaktní rozměry',
            'Snadná manipulace',
            'Ekonomický provoz',
            'Univerzální použití'
        ],
        available: true,
        documentation: '/src/assets/docs/bagry BAT/bagr BAT08.pdf'
    },
    {
        id: 'bat10',
        name: 'Bagr BAT10',
        price: 'Na dotaz',
        power: '24 HP',
        category: 'Bagry',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Výkonnější kompaktní bagr pro středně náročné práce.',
        specs: {
            'Výkon motoru': '24 HP',
            'Hmotnost': '1000 kg',
            'Hloubka výkopu': '2.2 m',
            'Dosah': '3.8 m'
        },
        features: [
            'Vyšší výkon než BAT08',
            'Větší dosah a hloubka',
            'Robustnější konstrukce',
            'Profesionální použití'
        ],
        available: true,
        documentation: '/src/assets/docs/bagry BAT/bagr BAT10.pdf'
    },
    {
        id: 'bat12',
        name: 'Bagr BAT12',
        price: 'Na dotaz',
        power: '28 HP',
        category: 'Bagry',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['STŘEDNĚ VELKÝ'],
        description: 'Středně velký bagr pro profesionální stavební práce.',
        specs: {
            'Výkon motoru': '28 HP',
            'Hmotnost': '1200 kg',
            'Hloubka výkopu': '2.5 m',
            'Dosah': '4.2 m'
        },
        features: [
            'Optimální pro stavební práce',
            'Výborný výkon/hmotnost poměr',
            'Stabilní a bezpečný',
            'Nízké provozní náklady'
        ],
        available: true,
        documentation: '/src/assets/docs/bagry BAT/bagr BAT12.pdf'
    },
    {
        id: 'bat15',
        name: 'Bagr BAT15',
        price: 'Na dotaz',
        power: '38 HP',
        category: 'Bagry',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ'],
        description: 'Výkonný bagr pro náročné stavební a zemní práce.',
        specs: {
            'Výkon motoru': '38 HP',
            'Hmotnost': '1500 kg',
            'Hloubka výkopu': '3.0 m',
            'Dosah': '5.0 m'
        },
        features: [
            'Vysoký výkon pro náročné práce',
            'Velká hloubka výkopu',
            'Stabilní podvozek',
            'Profesionální hydraulika'
        ],
        available: true,
        documentation: '/src/assets/docs/bagry BAT/bagr BAT15.pdf'
    },
    {
        id: 'bat17',
        name: 'Bagr BAT17',
        price: 'Na dotaz',
        power: '42 HP',
        category: 'Bagry',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ'],
        description: 'Výkonný bagr s vysokou produktivitou práce.',
        specs: {
            'Výkon motoru': '42 HP',
            'Hmotnost': '1700 kg',
            'Hloubka výkopu': '3.2 m',
            'Dosah': '5.2 m'
        },
        features: [
            'Vysoká produktivita',
            'Pokročilá hydraulika',
            'Komfortní kabina',
            'Nízké emise'
        ],
        available: true,
        documentation: '/src/assets/docs/bagry BAT/bagr BAT17.pdf'
    },
    {
        id: 'bat18',
        name: 'Bagr BAT18',
        price: 'Na dotaz',
        power: '45 HP',
        category: 'Bagry',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['NEJSILNĚJŠÍ'],
        description: 'Nejsilnější bagr v naší nabídce pro nejvýkonnější práce.',
        specs: {
            'Výkon motoru': '45 HP',
            'Hmotnost': '1800 kg',
            'Hloubka výkopu': '3.5 m',
            'Dosah': '5.5 m'
        },
        features: [
            'Maximální výkon v kategorii',
            'Nejmodernější hydraulika',
            'Luxusní kabina',
            'Pro nejnáročnější aplikace'
        ],
        available: true,
        documentation: '/src/assets/docs/bagry BAT/bagr BAT18.pdf'
    },
    // Nakladače
    {
        id: 't135',
        name: 'T 135',
        price: 'Na dotaz',
        power: '35 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní teleskopický nakladač pro univerzální použití.',
        specs: {
            'Výkon motoru': '35 HP',
            'Zdvihací výška': '3.5 m',
            'Nosnost': '1350 kg',
            'Dosah': '2.8 m'
        },
        features: [
            'Kompaktní rozměry',
            'Teleskopické rameno',
            'Univerzální použití',
            'Snadná obsluha'
        ],
        available: true
    },
    {
        id: 'mtech-1160',
        name: 'MTECH 1160',
        price: 'Na dotaz',
        power: '60 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ'],
        description: 'Výkonný kolový nakladač pro střední stavební práce.',
        specs: {
            'Výkon motoru': '60 HP',
            'Zdvihací výška': '3.2 m',
            'Nosnost': '1100 kg',
            'Objem lžíce': '0.6 m³'
        },
        features: [
            'Výkonný motor',
            'Robustní konstrukce',
            'Jednoduchá údržba',
            'Spolehlivý provoz'
        ],
        available: true
    },
    {
        id: 'mtech-45',
        name: 'MTECH 4.5',
        price: 'Na dotaz',
        power: '75 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['TELESKOPICKÝ'],
        description: 'Teleskopický nakladač s nosností 4.5 tuny.',
        specs: {
            'Výkon motoru': '75 HP',
            'Zdvihací výška': '6.0 m',
            'Nosnost': '4500 kg',
            'Dosah': '3.5 m'
        },
        features: [
            'Vysoká zdvihací výška',
            'Velká nosnost',
            'Teleskopické rameno',
            'Profesionální vybavení'
        ],
        available: true
    },
    {
        id: 'mtech-45t',
        name: 'MTECH 4.5T',
        price: 'Na dotaz',
        power: '75 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['TELESKOPICKÝ', 'OTOČNÝ'],
        description: 'Otočný teleskopický nakladač s nosností 4.5 tuny.',
        specs: {
            'Výkon motoru': '75 HP',
            'Zdvihací výška': '6.0 m',
            'Nosnost': '4500 kg',
            'Otočení': '360°'
        },
        features: [
            'Plné otočení 360°',
            'Vysoká flexibilita práce',
            'Výborná stabilita',
            'Pokročilé ovládání'
        ],
        available: true
    },
    {
        id: 'mtech-55',
        name: 'MTECH 5.5',
        price: 'Na dotaz',
        power: '95 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['TELESKOPICKÝ', 'VÝKONNÝ'],
        description: 'Výkonný teleskopický nakladač pro náročné práce.',
        specs: {
            'Výkon motoru': '95 HP',
            'Zdvihací výška': '7.0 m',
            'Nosnost': '5500 kg',
            'Dosah': '4.0 m'
        },
        features: [
            'Vysoký výkon a nosnost',
            'Maximální zdvihací výška',
            'Robustní konstrukce',
            'Pro těžké práce'
        ],
        available: true
    },
    {
        id: 'mtech-55t',
        name: 'MTECH 5.5T',
        price: 'Na dotaz',
        power: '95 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['TELESKOPICKÝ', 'OTOČNÝ', 'NEJSILNĚJŠÍ'],
        description: 'Nejsilnější otočný teleskopický nakladač v naší nabídce.',
        specs: {
            'Výkon motoru': '95 HP',
            'Zdvihací výška': '7.0 m',
            'Nosnost': '5500 kg',
            'Otočení': '360°'
        },
        features: [
            'Maximální výkon a flexibilita',
            'Plné otočení s nejvyšší nosností',
            'Pro nejtěžší aplikace',
            'Prémiové vybavení'
        ],
        available: true
    },
    // Ještěrky
    {
        id: 'lizard-30',
        name: 'LIZARD 30',
        price: 'Na dotaz',
        power: '58 kW',
        category: 'Ještěrky',
        brand: 'LIZZARD-VZV',
        image: '/api/placeholder/400/300',
        badges: ['TERÉNNÍ'],
        description: 'Terénní VZV 3,5–3,8 t s pohonem 4×4 a hydrodynamickou převodovkou pro náročné terény.',
        specs: {
            'Nosnost': '3500–3800 kg',
            'Zdvih': '3–6 m',
            'Hmotnost': '4600 kg',
            'Náklon': '≤ 35°',
            'Světlá výška': '280 mm',
            'Rozvor': '1850 mm',
            'Výkon motoru': '58 kW',
            'Rychlost': '28 km/h',
            'Rozměry stroje': '3800×1850×2200 mm'
        },
        features: [
            'Pohon 4×4 pro náročné terény',
            'Hydrodynamická převodovka',
            'Vysoká nosnost až 3,8 tuny',
            'Variabilní zdvih 3-6 metrů',
            'Kompaktní rozměry pro manévrovatelnost'
        ],
        available: true
    },
    {
        id: 'lizard-35',
        name: 'LIZARD 35',
        price: 'Na dotaz',
        power: '58 kW',
        category: 'Ještěrky',
        brand: 'LIZZARD-VZV',
        image: '/api/placeholder/400/300',
        badges: ['TERÉNNÍ'],
        description: 'Terénní VZV 3,5–3,8 t s pohonem 4×4 a hydrodynamickou převodovkou. Parametrově shodná třída s LIZARD 30.',
        specs: {
            'Nosnost': '3500–3800 kg',
            'Zdvih': '3–6 m',
            'Hmotnost': '4600 kg',
            'Náklon': '≤ 35°',
            'Světlá výška': '280 mm',
            'Rozvor': '1850 mm',
            'Poloměr otáčení': '3500 mm',
            'Motor': '58 kW',
            'Rychlost': '28 km/h',
            'Délky vidlí': '1220–1820 mm',
            'Rozměry': '3800×1850×2200 mm'
        },
        features: [
            'Stejná nosnost jako LIZARD 30',
            'Pohon 4×4 s hydrodynamickou převodovkou',
            'Variabilní délky vidlí',
            'Kompaktní poloměr otáčení',
            'Optimalizované rozměry pro práci'
        ],
        available: true
    },
    {
        id: 'lizard-35-pro',
        name: 'LIZARD 35 PRO',
        price: 'Na dotaz',
        power: '58 kW',
        category: 'Ještěrky',
        brand: 'LIZZARD-VZV',
        image: '/api/placeholder/400/300',
        badges: ['TERÉNNÍ', 'ZESÍLENÝ'],
        description: 'Zesílená varianta LIZARD 35 s vyšší pohotovostní hmotností pro náročnější aplikace.',
        specs: {
            'Nosnost': '3500–3800 kg',
            'Zdvih': '3–6 m',
            'Hmotnost': '5100 kg (zesílená)',
            'Náklon': '≤ 35°',
            'Světlá výška': '280 mm',
            'Rozvor': '1950 mm (prodloužený)',
            'Poloměr otáčení': '3500 mm',
            'Motor': '58 kW',
            'Rychlost': '28 km/h',
            'Délky vidlí': '1220–1820 mm',
            'Rozměry': '3600×1850×2200 mm'
        },
        features: [
            'Zesílená konstrukce (+500 kg hmotnosti)',
            'Prodloužený rozvor pro vyšší stabilitu',
            'Stejná nosnost s lepší stabilitou',
            'Pokročilé bezpečnostní systémy',
            'Pro nejnáročnější terénní podmínky'
        ],
        available: true
    },
    {
        id: 'lizard-50',
        name: 'LIZARD 50',
        price: 'Na dotaz',
        power: '76 kW',
        category: 'Ještěrky',
        brand: 'LIZZARD-VZV',
        image: '/api/placeholder/400/300',
        badges: ['TERÉNNÍ', 'NEJSILNĚJŠÍ'],
        description: 'Nejvyšší třída LIZZARD s nosností 5 tun a zdvihem až 6 metrů. 4válcový motor pro maximální výkon.',
        specs: {
            'Nosnost': '5000 kg',
            'Zdvih': '3–6 m',
            'Hmotnost': '7800 kg',
            'Světlá výška': '380 mm',
            'Motor': '4válcový 4,8 l, 76 kW',
            'Rychlost': '28 km/h',
            'Pohon': '4×4',
            'Převodovka': 'Hydrodynamická'
        },
        features: [
            'Maximální nosnost 5 tun',
            '4válcový motor 4,8 l pro nejvyšší výkon',
            'Nejrobustnější konstrukce v řadě',
            'Nejvyšší světlá výška 380 mm',
            'Pro nejtěžší terénní aplikace'
        ],
        available: true
    }
]

export const news: NewsItem[] = [
    {
        id: '1',
        title: 'TIGER 504 v nabídce pronájmu',
        content: 'Nově můžete traktor TIGER 504 vyzkoušet v pronájmu se zvýhodněním při následné koupi.',
        date: '13. 8. 2025',
        featured: true
    },
    {
        id: '2',
        title: 'Dorazilo 50 nových traktorů',
        content: 'Do skladu jsme přijali 40× TIGER 504 a 10× TIGER 704. Část stále k dispozici.',
        date: '25. 7. 2025',
        featured: false
    },
    {
        id: '3',
        title: 'Nový dealer ve Velké Británii',
        content: 'Autorizovaný dealer v Norwichi rozšiřuje naši síť. Expedovali jsme 6 traktorů.',
        date: '23. 7. 2025',
        featured: false
    }
]
