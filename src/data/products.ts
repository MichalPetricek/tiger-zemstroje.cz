import { Product } from '@/types'

export const products: Product[] = [
    // Traktory - TIGER
    {
        id: 'tiger-504',
        name: 'TIGER 504',
        price: '199 000 Kč',
        power: '50 HP',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/images/tiger-504/7.jpg',
        images: [
            '/images/tiger-504/1.jpg',
            '/images/tiger-504/2.jpg',
            '/images/tiger-504/3.jpg',
            '/images/tiger-504/4.jpg',
            '/images/tiger-504/5.jpg',
            '/images/tiger-504/6.jpg',
            '/images/tiger-504/7.jpg',
            '/images/tiger-504/8.jpg',
            '/images/tiger-504/9.jpg',
            '/images/tiger-504/10.jpg',
            '/images/tiger-504/11.jpg',
            '/images/tiger-504/12.jpg'
        ],
        badges: ['CENOVÁ BOMBA', 'NEJPRODÁVANĚJŠÍ'],
        description: 'Nejlevnější traktor s výkonem 50 HP na českém trhu. Jednoduché mechanické ovládání, žádná elektroinika, Cena uvedena bez předního nakladače TZ04D. Traktor nelze registrovat na SPZ.',
        specs: {
            'Motor': '4válcový diesel, 2392 ccm',
            'Výkon motoru': '36,8 kW / 50 HP',
            'Typ pohonu': '2WD / 4WD',
            'Převodovka': '8 vpřed / 8 vzad, reverzní',
            'Provozní hmotnost': '1520 kg',
            'Síla zdvihu 3-bodového závěsu': '700 kg',
            'Možnost instalace předního nakladače': 'TZ04D s lopatou 4v1 s nosností 450 kg'
        },
        features: [
            'Přímý dovoz od výrobce',
            'Bez prostředníků - nejlepší cena',
            'Servis a náhradní díly samozřejmostí',
            'Jednoduché mechanické ovládání, žádná elektroinika',
            'Záruka 2 roky nebo 500 motohodin'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_TIGER504.pdf',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder pro TIGER 504 demo
    },
    {
        id: 'tiger-704',
        name: 'TIGER 704',
        price: '449 000 Kč',
        power: '70 HP',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE'],
        description: 'Středně výkonný traktor s kabinou a klimatizací. Traktor nelze registrovat na SPZ',
        specs: {
            'Motor': '4válcový diesel, 2392 ccm, turbo',
            'Výkon motoru': '51,5 kW / 70 HP',
            'Typ pohonu': '2WD / 4WD',
            'Převodovka': '8 vpřed / 8 vzad, reverzní',
            'Provozní hmotnost': '2020 kg',
            'Síla zdvihu 3-bodového závěsu': '1250 kg',
            'Možnost instalace předního nakladače': 'TZ04D s lopatou 4v1 s nosností 450 kg'
        },
        features: [
            'Přímý dovoz od výrobce',
            'Bez prostředníků - nejlepší cena',
            'Servis a náhradní díly samozřejmostí',
            'Jednoduché mechanické ovládání, žádná elektroinika',
            'Záruka 2 roky nebo 500 motohodin'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_TIGER704FMD-TB.pdf',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder pro TIGER 704 demo
    },
    {
        id: 'tiger-704FMD',
        name: 'TIGER 704 FMD-TB',
        price: '699 000 Kč',
        power: '70 HP',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE', 'PROFESIONÁLNÍ'],
        description: 'Středně výkonný traktor s luxusní kabinou, klimatizací a zadní kamerou. Zesílený rám TB – vhodný pro univerzální práci v náročnějším terénu.Traktor nelze registrovat na SPZ.',
        specs: {
            'Motor': '4válcový diesel, 3800 ccm, turbo',
            'Výkon motoru': '51,5 kW / 70 HP',
            'Typ pohonu': '2WD / 4WD',
            'Převodovka': '12 vpřed / 12 vzad, reverzní',
            'Provozní hmotnost': '2880 kg',
            'Síla zdvihu 3-bodového závěsu': '1250 kg',
            'Možnost instalace předního nakladače': 'TZ06D s lopatou 4v1 s nosností 600 kg'
        },
        features: [
            'Zesílený podvozek s pevnější koncovou převodovkou a optimalizovanými ozubenými koly zajišťuje vysokou spolehlivost a dlouhou životnost.',
            'Rovná podlaha a volitelná kabina se čtyřsloupkovou konstrukcí poskytují vynikající výhled a pohodlné pracovní prostředí',
            'Zadní vícesměrný hydraulický rozvaděč s možností nastavení tlaku usnadňuje údržbu a zvyšuje efektivitu při práci s příslušenstvím',
            'Jednoduché mechanické ovládání, žádná elektroinika',
            'Hlavní palivová nádrž 70 l + volitelná pomocná 50 l → celková kapacita až 120 l, což zajišťuje delší provoz bez tankování.'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_TIGER704FMD-TB.pdf'
    },
    {
        id: 'tiger-1004',
        name: 'TIGER 1004 FMD-TB',
        price: '699 000 Kč',
        power: '100 HP',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE', 'PROFESIONÁLNÍ'],
        description: 'Středně výkonný traktor s luxusní kabinou, klimatizací a zadní kamerou. Zesílený rám 4WD – vhodný pro univerzální práci v náročnějším terénu. Traktor nelze registrovat na SPZ.',
        specs: {
            'Motor': '4válcový diesel, 3800 ccm, turbo',
            'Výkon motoru': '74 kW / 100 HP',
            'Typ pohonu': '2WD / 4WD',
            'Převodovka': '12 vpřed / 12 vzad, reverzní',
            'Provozní hmotnost': '3260 kg',
            'Síla zdvihu 3-bodového závěsu': '1820 kg',
            'Možnost instalace předního nakladače': 'TZ06D s lopatou 4v1 s nosností 800 kg'
        },
        features: [
            'Nová čtyřsloupková kabina s moderním a atraktivním vzhledem, poskytující vynikající těsnost a komfortní pracovní prostředí',
            'Výkonný hydraulický zvedací systém umožňuje efektivní práci s připojeným nářadím a vyšší zvedací sílu.',
            'Rozšířená palivová soustava s hlavní a pomocnou nádrží o celkové kapacitě až 190 l zajišťuje dlouhou provozní výdrž bez nutnosti častého tankování.',
            'Převodovka s 12 rychlostmi vpřed a 12 vzad (F12 + R12), reverzační řazení a ovládání hlavní i vedlejší spojky poskytují široký rozsah rychlostí a plynulý chod při práci na poli i při přepravě.',
            'Záruka 2 roky nebo 500 motohodin'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_TIGER1004FMD-TB.pdf'
    },
    {
        id: 'tiger-1204',
        name: 'TIGER 1204 FMD-TD',
        price: '899 000 Kč',
        power: '120 HP',
        category: 'Traktory',
        brand: 'TIGER',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ', 'KLIMATIZACE', 'TĚŽKÁ KATEGORIE'],
        description: 'Výkonný traktor střední kategorie s luxusní kabinou a klimatizací. Těžké robustní šasi 4WD – určeno pro profesionální zemědělské nasazení. Traktor nelze registrovat na SPZ.',
        specs: {
            'Motor': '6válcový diesel,  6490 ccm',
            'Výkon motoru': '88,3 kW / 120 HP',
            'Typ pohonu': '2WD / 4WD',
            'Převodovka': '16 vpřed / 8 vzad (24 vpřed / 8 vzad)',
            'Řazení': 'stálé záběry, posuvná objímka bez synchronů',
            'Poznámka': 'Jednoduchá a velmi odolná převodovka; vyžaduje řazení se spojkou (u zpátečky bez synchronu)',
            'Provozní hmotnost': '4230 kg',
            'Síla zdvihu 3-bodového závěsu': '2210 kg',
            'Možnost instalace předního nakladače': 'TZ12D s lopatou 4v1 s nosností 1200 kg'
        },
        features: [
            'Podvozek TD, převodovka 16 + 8 rychlostí (volitelně 24 + 8 s plazivými stupni), zesílené poloosy, převody Haitian a klíčové části ložisek zajišťují vysokou odolnost a dlouhou životnost.',
            'Kabina s centrálním ovládáním, velkým pracovním prostorem a komfortním sedadlem Graham poskytuje maximální komfort při řízení',
            'Dělený a zesílený tříbodový zvedací systém, zesílené závěsy a hydraulické válce Canadian Red Lion snižují poruchovost a zvyšují spolehlivost',
            'Hlavní nádrž 150 l + pomocná 60 l = celkem 210 l → delší pracovní výdrž bez tankování.',
            'Přidané boční kryty motoru zvyšují celkovou pevnost a odolnost traktoru.'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_TIGER1204FMD-TD.pdf'
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
        description: 'Kompaktní 25HP traktor s možností 4×4, jednoduchá mechanika pro menší farmy a zahrady. Traktor schválený pro provoz na pozemních komunikacích – lze registrovat na SPZ',
        specs: {
            'Výkon motoru': '25 HP',
            'Pohon': '2WD / 4WD',
            'Rozměry (D×Š×V)': '3265×1440–1640×2450 mm',
            'Rozvor': '1670 mm',
            'Světlá výška': '320 mm',
            'Rychlost': 'až 28 km/h',
            'Převodovka': '8 vpřed /2 vzad',
            'Hmotnost': '1527 kg'
        },
        features: [
            'Kompaktní rozměry pro malé prostory',
            'Volitelný pohon 4WD',
            'ROPS ochrana / kabina s topením',
            'Nízká spotřeba paliva',
            'Jednoduchá obsluha a údržba',
            'Možnost instalace předního nakladače s lopatou 4v1 s nosností 450 kg'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_JINMA254E.pdf'
    },
    // Traktory - YTO NLY série
    {
        id: 'yto-nly954',
        name: 'YTO NLY95',
        price: 'Na dotaz',
        power: '95 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['KLIMATIZACE'],
        description: 'Profesionální traktor z řady NLY s motorem YTO Stage V (nízké vibrace / hluk) a vysokou pracovní účinností. Traktor schválený pro provoz na pozemních komunikacích – lze registrovat na SPZ',
        specs: {
            'Výkon motoru': '95 HP',
            'Motor': 'YTO Stage V (nízké vibrace/hluk)',
            'Převodovka': '12 vpřed /12 vzad, reverzní',
            'Provozní hmotnost': '4400 kg',
            'Síla zdvihu 3-bodového závěsu': '2500 kg',
            'Možnost instalace předního nakladače': 'TZ10D s lopatou 4v1 s nosností 1000 kg'
        },
        features: [
            'Čtyřválcový dieselový motor YTO s emisní normou Euro V – silný výkon a nízká spotřeba paliva.',
            'Převodovka 12 rychlostí vpřed + 12 rychlostí vzad, široký rozsah rychlostí, vysoká účinnost',
            'Hydraulické kotoučové brzdy – úspora síly při brzdění, vysoká účinnost brzd, synchronizované propojení s předním náhonem při brzdění pro vyšší bezpečnost',
            'Elektrohydraulicky ovládaný vývodový hřídel (PTO) – snadné a pohodlné ovládání jediným dotykem',
            'Plně uzavřená čtyřsloupková kabina – široký výhled, klimatizace, topení'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_YTO_NLY954.pdf'
    },
    {
        id: 'yto-nly1054',
        name: 'YTO NLY1054',
        price: 'Na dotaz',
        power: '105 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['KLIMATIZACE', 'VÝKONNÝ'],
        description: 'Výkonný traktor z řady NLY s motorem Stage V a vysokou pracovní účinností pro středně velké zemědělské podniky. Traktor schválený pro provoz na pozemních komunikacích – lze registrovat na SPZ',
        specs: {
            'Výkon motoru': '105 HP',
            'Motor': 'YTO Stage V (nízké vibrace/hluk)',
            'Převodovka': '12 vpřed /12 vzad, reverzní',
            'Provozní hmotnost': '4400 kg',
            'Síla zdvihu 3-bodového závěsu': '2500 kg',
            'Možnost instalace předního nakladače': 'TZ10D s lopatou 4v1 s nosností 1000 kg'
        },
        features: [
            'Čtyřválcový dieselový motor YTO s emisní normou Euro V – silný výkon a nízká spotřeba paliva.',
            'Převodovka 12 rychlostí vpřed + 12 rychlostí vzad, široký rozsah rychlostí, vysoká účinnost',
            'Hydraulické kotoučové brzdy – úspora síly při brzdění, vysoká účinnost brzd, synchronizované propojení s předním náhonem při brzdění pro vyšší bezpečnost',
            'Elektrohydraulicky ovládaný vývodový hřídel (PTO) – snadné a pohodlné ovládání jediným dotykem',
            'Plně uzavřená čtyřsloupková kabina – široký výhled, klimatizace, topení'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_YTO_NLY1054.pdf'
    },
    {
        id: 'yto-nly1154',
        name: 'YTO NLY1154',
        price: 'Na dotaz',
        power: '115 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['KLIMATIZACE', 'VÝKONNÝ'],
        description: 'Nejsilnější model v NLY sérii s motorem Stage V, maximálním výkonem a komfortem pro náročné aplikace. Traktor schválený pro provoz na pozemních komunikacích – lze registrovat na SPZ',
        specs: {
            'Výkon motoru': '115 HP',
            'Motor': 'YTO Stage V (nízké vibrace/hluk)',
            'Převodovka': '12 vpřed /12 vzad, reverzní',
            'Provozní hmotnost': '4400 kg',
            'Síla zdvihu 3-bodového závěsu': '2500 kg',
            'Možnost instalace předního nakladače': 'TZ10D s lopatou 4v1 s nosností 1000 kg'
        },
        features: [
            'Čtyřválcový dieselový motor YTO s emisní normou Euro V – silný výkon a nízká spotřeba paliva.',
            'Převodovka 12 rychlostí vpřed + 12 rychlostí vzad, široký rozsah rychlostí, vysoká účinnost',
            'Hydraulické kotoučové brzdy – úspora síly při brzdění, vysoká účinnost brzd, synchronizované propojení s předním náhonem při brzdění pro vyšší bezpečnost',
            'Elektrohydraulicky ovládaný vývodový hřídel (PTO) – snadné a pohodlné ovládání jediným dotykem',
            'Plně uzavřená čtyřsloupková kabina – široký výhled, klimatizace, topení'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_YTO_NLY1154.pdf'
    },
    // Traktory - YTO NMF série
    {
        id: 'yto-nmf554c',
        name: 'YTO NMF 554C',
        price: '549 000 Kč',
        power: '55 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['UNIVERZÁLNÍ'],
        description: 'Kompaktní traktor z řady NMF určené pro menší a střední farmy. Univerzální použití s výborným poměrem cena/výkon. Traktor schválený pro provoz na pozemních komunikacích – lze registrovat na SPZ',
        specs: {
            'Výkon motoru': '55 HP',
            'Motor': 'YTO Stage V (nízké vibrace / hluk)',
            'Převodovka': '12 vpřed /12 vzad, reverzní',
            'Provozní hmotnost': '2770 kg',
            'Síla zdvihu 3-bodového závěsu': '1350 kg',
            'Možnost instalace předního nakladače': 'TZ06D s lopatou 4v1 s nosností 600 kg'
        },
        features: [
            'Tato řada traktorů má nový vzhled, vynikající výkon a je vhodná pro zemědělské práce, přepravu a další projektové činnosti',
            'Vysokotlaký dieselový motor Doosan s elektronickým řízením vstřikování paliva (common rail), emisní norma stupně V, silný výkon, nízká spotřeba paliva a vysoká účinnost',
            '12 rychlostí vpřed + 12 rychlostí vzad, rychlé přepínání mezi jízdou vpřed a vzad, vysoká efektivita',
            'Elektrohydraulické ovládání vývodového hřídele (PTO), snadné ovládání jedním dotykem, pohodlný provoz',
            'Mokré vícelamelové brzdy s automatickým zesílením, stabilní a spolehlivý brzdný účinek',
            'Plně uzavřená čtyřsloupková kabina s širokým výhledem, klimatizací a topným systémem'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_YTO_NMF554C.pdf'
    },
    {
        id: 'yto-nmf604c',
        name: 'YTO NMF 604C',
        price: 'Na dotaz',
        power: '60 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['UNIVERZÁLNÍ'],
        description: 'Výkonnější model NMF série pro středně náročné práce na menších a středních farmách.',
        specs: {
            'Výkon motoru': '60 HP',
            'Motor': 'YTO Stage V (nízké vibrace / hluk)',
            'Převodovka': '12 vpřed /12 vzad, reverzní',
            'Provozní hmotnost': '2770 kg',
            'Síla zdvihu 3-bodového závěsu': '1350 kg',
            'Možnost instalace předního nakladače': 'TZ06D s lopatou 4v1 s nosností 600 kg'
        },
        features: [
            'Tato řada traktorů má nový vzhled, vynikající výkon a je vhodná pro zemědělské práce, přepravu a další projektové činnosti',
            'Vysokotlaký dieselový motor Doosan s elektronickým řízením vstřikování paliva (common rail), emisní norma stupně V, silný výkon, nízká spotřeba paliva a vysoká účinnost',
            '12 rychlostí vpřed + 12 rychlostí vzad, rychlé přepínání mezi jízdou vpřed a vzad, vysoká efektivita',
            'Elektrohydraulické ovládání vývodového hřídele (PTO), snadné ovládání jedním dotykem, pohodlný provoz',
            'Mokré vícelamelové brzdy s automatickým zesílením, stabilní a spolehlivý brzdný účinek',
            'Plně uzavřená čtyřsloupková kabina s širokým výhledem, klimatizací a topným systémem'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_YTO_NMF604C.pdf'
    },
    {
        id: 'yto-nmf704c',
        name: 'YTO NMF 704C',
        price: 'Na dotaz',
        power: '70 HP',
        category: 'Traktory',
        brand: 'YTO',
        image: '/api/placeholder/400/300',
        badges: ['UNIVERZÁLNÍ', 'VÝKONNÝ'],
        description: 'Nejsilnější model NMF série pro náročnější zemědělské práce na středních farmách.',
        specs: {
            'Výkon motoru': '70 HP',
            'Motor': 'YTO Stage V (nízké vibrace / hluk)',
            'Převodovka': '12 vpřed /12 vzad, reverzní',
            'Provozní hmotnost': '2770 kg',
            'Síla zdvihu 3-bodového závěsu': '1350 kg',
            'Možnost instalace předního nakladače': 'TZ06D s lopatou 4v1 s nosností 600 kg'
        },
        features: [
            'Tato řada traktorů má nový vzhled, vynikající výkon a je vhodná pro zemědělské práce, přepravu a další projektové činnosti',
            'Vysokotlaký dieselový motor Doosan s elektronickým řízením vstřikování paliva (common rail), emisní norma stupně V, silný výkon, nízká spotřeba paliva a vysoká účinnost',
            '12 rychlostí vpřed + 12 rychlostí vzad, rychlé přepínání mezi jízdou vpřed a vzad, vysoká efektivita',
            'Elektrohydraulické ovládání vývodového hřídele (PTO), snadné ovládání jedním dotykem, pohodlný provoz',
            'Mokré vícelamelové brzdy s automatickým zesílením, stabilní a spolehlivý brzdný účinek',
            'Plně uzavřená čtyřsloupková kabina s širokým výhledem, klimatizací a topným systémem'
        ],
        available: true,
        documentation: '/docs/traktory/parametry_YTO_NMF704C.pdf'
    },
    // Bagry
    {
        id: 'bat08',
        name: 'Bagr BAT 08',
        price: 'Na dotaz',
        power: '10 HP',
        category: 'Bagry',
        brand: 'BAT',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní bagr pro menší stavební práce.',
        specs: {
            'Výkon motoru': '10 HP',
            'Hmotnost': '670 kg',
            'Maximální hloubka kopání': '820 mm',
            'Maximální výška kopání': '2350 mm',
            'Maximální dosah kopání': '2000 mm',
            'Objem lopaty': '0.02 m³ (šířka 290 mm)',
            'Pracovní tlak': '16 MPa',
            'Stoupavost': '30°',
            'Ovládání': 'Mechanické (před sedadlem řidiče)'
        },
        features: [
            'Kompaktní rozměry',
            'Snadná manipulace',
            'Ekonomický provoz',
            'Univerzální použití'
        ],
        available: true,
        documentation: '/docs/bagry BAT/bagr BAT08.pdf',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder pro bagr BAT08 demo
    },
    {
        id: 'bat10',
        name: 'Bagr BAT 10',
        price: 'Na dotaz',
        power: '10 HP',
        category: 'Bagry',
        brand: 'BAT',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní bagr pro menší stavební práce.',
        specs: {
            'Výkon motoru': '10 HP',
            'Hmotnost': '780 kg',
            'Maximální hloubka kopání': '1320 mm',
            'Maximální výška kopání': '2490 mm',
            'Maximální dosah kopání': '2100 mm',
            'Objem lopaty': '0.025 m³ (šířka 300 mm)',
            'Pracovní tlak': '16 MPa',
            'Stoupavost': '30°',
            'Ovládání': 'Mechanické (před sedadlem řidiče)'
        },
        features: [
            'Vyšší výkon než BAT 08',
            'Větší dosah a hloubka',
            'Robustnější konstrukce',
            'Profesionální použití'
        ],
        available: true,
        documentation: '/docs/bagry BAT/bagr BAT10.pdf'
    },
    {
        id: 'bat12',
        name: 'Bagr BAT 12',
        price: 'Na dotaz',
        power: '10 HP',
        category: 'Bagry',
        brand: 'BAT',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní bagr pro střední stavební práce.',
        specs: {
            'Výkon motoru': '10 HP',
            'Hmotnost': '780 kg',
            'Maximální hloubka kopání': '1320 mm',
            'Maximální výška kopání': '2490 mm',
            'Maximální dosah kopání': '2100 mm',
            'Objem lopaty': '0.025 m³ (šířka 300 mm)',
            'Pracovní tlak': '16 MPa',
            'Stoupavost': '30°',
            'Ovládání': 'Hydraulické ovládací páky (vedle sedadla)'
        },
        features: [
            'Uzavřená kabina s topením'
        ],
        available: true,
        documentation: '/docs/bagry BAT/bagr BAT12.pdf'
    },
    {
        id: 'bat15',
        name: 'Bagr BAT 15',
        price: 'Na dotaz',
        power: '30 HP',
        category: 'Bagry',
        brand: 'BAT',
        image: '/api/placeholder/400/300',
        badges: ['STŘEDNĚ VELKÝ'],
        description: 'Určen pro přesné zemní práce na menších stavbách, zahradách a v omezených prostorech.',
        specs: {
            'Výkon motoru': '30 HP',
            'Hmotnost': '1100 kg',
            'Maximální hloubka kopání': '1500 mm',
            'Maximální výška kopání': '2650 mm',
            'Maximální dosah kopání': '2200 mm',
            'Objem lopaty': '0.025 m³ (šířka 370 mm)',
            'Pracovní tlak': '16 MPa',
            'Stoupavost': '30°',
            'Ovládání': 'Hydraulické ovládací páky (vedle sedadla)'
        },
        features: [
            'Uzavřená kabina s topením',
            'Mimosé kopání'
        ],
        available: true,
        documentation: '/docs/bagry BAT/bagr BAT15.pdf'
    },
    {
        id: 'bat17',
        name: 'Bagr BAT 17',
        price: 'Na dotaz',
        power: '30 HP',
        category: 'Bagry',
        brand: 'BAT',
        image: '/api/placeholder/400/300',
        badges: ['VÝKONNÝ'],
        description: 'Výkonný bagr s vysokou produktivitou práce.',
        specs: {
            'Výkon motoru': '30 HP',
            'Hmotnost': '1180 kg',
            'Maximální hloubka kopání': '1500 mm',
            'Maximální výška kopání': '2650 mm',
            'Maximální dosah kopání': '2200 mm',
            'Objem lopaty': '0.03 m³ (šířka 380 mm)',
            'Pracovní tlak': '16 MPa',
            'Stoupavost': '30°',
            'Ovládání': 'Hydraulické ovládací páky (vedle sedadla)'
        },
        features: [
            'Uzavřená kabina s topením',
            'Mimosé kopání'
        ],
        available: true,
        documentation: '/docs/bagry BAT/bagr BAT17.pdf'
    },
    {
        id: 'bat18',
        name: 'Bagr BAT 18',
        price: 'Na dotaz',
        power: '39 HP',
        category: 'Bagry',
        brand: 'BAT',
        image: '/api/placeholder/400/300',
        badges: ['NEJSILNĚJŠÍ'],
        description: 'Nejsilnější minibagr v naší nabídce pro nejvýkonnější práce.',
        specs: {
            'Výkon motoru': '39 HP',
            'Hmotnost': '1680 kg',
            'Maximální hloubka kopání': '1930 mm',
            'Maximální výška kopání': '3160 mm',
            'Maximální dosah kopání': '2600 mm',
            'Objem lopaty': '0.05 m³ (šířka 400 mm)',
            'Pracovní tlak': '18 MPa',
            'Stoupavost': '30°',
            'Ovládání': 'Hydraulické ovládací páky (vedle sedadla)'
        },
        features: [
            'Uzavřená kabina s topením a klimatizací',
            'Možnost výběru gumové nebo ocelové pásy',
            'Mimosé kopání'
        ],
        available: true,
        documentation: '/docs/bagry BAT/bagr BAT18.pdf'
    },
    // Nakladače
    {
        id: 't135',
        name: 'T 135',
        price: 'Na dotaz',
        power: '25 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KOMPAKTNÍ'],
        description: 'Kompaktní teleskopický nakladač pro univerzální použití.',
        specs: {
            'Motor': 'Perkins EURO 5 – vodou chlazený řadový diesel',
            'Výkon motoru': '18,4 kW / 2000 ot./min',
            'Nosnost': '1400 kg (včetně přídavných zařízení)',
            'Kapacita lžíce': '0,3 m³ (šířka 1588 mm)',
            'Maximální výška zdvihu': '4010 mm',
            'Provozní hmotnost': '2800 kg',
            'Pohon': 'Hydraulický motor 4×4 • systémový tlak 35 MPa',
            'Minimální poloměr otáčení': '3560 mm'
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
        power: '25 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KLOUBOVÝ'],
        description: 'Výkonný kloubový kolový nakladač pro střední stavební práce.',
        specs: {
            'Motor': 'KUBOTA D1105 (EURO 5 / EPA4) – vodou chlazený, 3válcový diesel',
            'Výkon': '18,2 kW (≈ 24,5 HP) / 3000 ot./min',
            'Nosnost': '1200 kg',
            'Kapacita lopaty': '0,26 m³',
            'Provozní hmotnost': '1900 kg',
            'Maximální výška vyklápění': '1920 mm',
            'Maximální tažná síla': '1250 kg',
            'Tlak hydrauliky': '19 MPa'
        },
        features: [
            'Výkonný motor',
            'Robustní konstrukce',
            'Jednoduchá údržba',
            'Spolehlivý provoz'
        ],
        available: true,
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder pro MTECH 1160 demo
    },
    {
        id: 'mtech-45',
        name: 'MTECH 4.5',
        price: 'Na dotaz',
        power: '50 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KLOUBOVÝ'],
        description: 'Kloubový nakladač s nosností 1600 kg.',
        specs: {
            'Motor': 'Xinchai 498BT1 – řadový 4válcový, vodou chlazený diesel',
            'Výkon': '36.8 kW / 2400 ot./min',
            'Váha': '4400 kg',
            'Nosnost': '1600 kg',
            'Objem lopaty': '0.73 m³ (šířka 2000 mm)',
            'Max. výška výsypu': '2453 mm',
            'Převodovka': 'PowerShift – automatická s pevnou hřídelí'
        },
        features: [
            'Kloubový rám s hydraulickým posilovačem řízení, hydraulický měnič, kotoučové brzdy s posilovačem'
        ],
        available: true
    },
    {
        id: 'mtech-45t',
        name: 'MTECH 4.5T',
        price: 'Na dotaz',
        power: '50 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['TELESKOPICKÝ'],
        description: 'Kloubový teleskopický nakladač s nosností 4.5 tuny.',
        specs: {
            'Motor': 'Xinchai 498BT1 (EURO 3) – řadový 4válcový diesel, vodou chlazený',
            'Výkon motoru': '36,8 kW (≈ 50 HP) / 2400 ot./min',
            'Provozní hmotnost': '4650 kg',
            'Nosnost': '1600 kg',
            'Kapacita lopaty': '0,52 m³',
            'Maximální výška výsypu': '2700 mm'
        },
        features: [
            'Kloubový rám s hydraulickým posilovačem řízení, hydraulický měnič, kotoučové brzdy s posilovačem'
        ],
        available: true
    },
    {
        id: 'mtech-55',
        name: 'MTECH 5.5',
        price: 'Na dotaz',
        power: '70 HP',
        category: 'Nakladače',
        brand: 'MANITECH',
        image: '/api/placeholder/400/300',
        badges: ['KOLOVÝ'],
        description: 'Kloubový nakladač s nosností 2000 kg.',
        specs: {
            'Motor': 'Xichai 4DX21-72 – řadový 4válec, vodou chlazený, diesel',
            'Výkon motoru': '53 kW (≈ 70 HP) / 2400 ot./min',
            'Provozní hmotnost': '5300 kg',
            'Nosnost': '2000 kg',
            'Kapacita lopaty': '0,67 m³',
            'Maximální výška výsypu': '3006 mm'
        },
        features: [
            'Robustní nakladač s nosností 2 t a výškou výsypu 3 m. Díky silnému motoru Xichai 53 kW a hydraulickému systému 20 MPa zvládne náročné stavební i zemědělské práce.'
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
            'Motor': 'Xichai 4DX21-72 – řadový 4válec, vodou chlazený, diesel',
            'Výkon motoru': '53 kW (≈ 70 HP) / 2400 ot./min',
            'Provozní hmotnost': '5500 kg',
            'Nosnost': '2500 kg',
            'Kapacita lopaty': '0,67 m³',
            'Maximální výška výsypu': '3848 mm'
        },
        features: [
            'Výkonný teleskopický nakladač s nosností 2,5 t a výsypnou výškou až 3,8 m.',
            'Ideální pro stavební a zemědělské nasazení, kombinuje vysokou stability a sílu'
        ],
        available: true
    },
    // Ještěrky
    {
        id: 'lizard-30',
        name: 'LIZARD 30',
        price: 'Na dotaz',
        power: '78 HP',
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
            'Výkon motoru': '78 HP',
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
        available: true,
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder pro LIZARD 30 demo
    },
    {
        id: 'lizard-35',
        name: 'LIZARD 35',
        price: 'Na dotaz',
        power: '78 HP',
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
            'Motor': '78 HP',
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
        power: '78 HP',
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
            'Motor': '78 HP',
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
        power: '102 HP',
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
            'Motor': '4válcový 4,8 l, 102 HP',
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
];
