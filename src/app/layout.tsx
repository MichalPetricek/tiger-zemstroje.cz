import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "./providers";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jinma.cz"),
  title: {
    default:
      "TIGER CZ s.r.o. – Zemědělské stroje | Traktory, Bagry, Nakladače",
    template: "%s | TIGER CZ s.r.o.",
  },
  description:
    "Prodej zemědělské a stavební techniky – traktory TIGER, JINMA, YTO, bagry BAT, nakladače MANITECH. Přímý dovoz, 2 roky záruka, servis v ČR. Nejlevnější traktory na českém trhu.",
  keywords: [
    "zemědělské stroje",
    "traktory",
    "TIGER traktory",
    "JINMA traktory",
    "YTO traktory",
    "bagry BAT",
    "nakladače MANITECH",
    "zemědělská technika",
    "stavební technika",
    "traktory prodej",
    "levné traktory",
    "traktory ČR",
    "servis traktorů",
    "pronájem traktorů",
    "dotace zemědělství",
    "novinky zemědělská technika",
    "TIGER CZ",
    "zemstroje",
  ],
  authors: [{ name: "TIGER CZ s.r.o." }],
  creator: "TIGER CZ s.r.o.",
  publisher: "TIGER CZ s.r.o.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://jinma.cz",
    siteName: "TIGER CZ s.r.o.",
    title:
      "TIGER CZ s.r.o. – Zemědělské stroje | Traktory, Bagry, Nakladače",
    description:
      "Prodej zemědělské a stavební techniky – traktory TIGER, JINMA, YTO, bagry BAT, nakladače MANITECH. Přímý dovoz, 2 roky záruka, servis v ČR.",
    images: [
      {
        url: "/images/tiger-504/7.jpg",
        width: 1200,
        height: 630,
        alt: "TIGER 504 Traktor – TIGER CZ s.r.o.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIGER CZ s.r.o. – Zemědělské stroje",
    description:
      "Prodej zemědělské a stavební techniky. Přímý dovoz, 2 roky záruka, servis v ČR.",
    images: ["/images/tiger-504/7.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jinma.cz",
  },
  verification: {},
};

// JSON-LD structured data for the organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TIGER CZ s.r.o.",
  url: "https://jinma.cz",
  logo: "https://jinma.cz/images/logo-white.svg",
  description:
    "Prodej zemědělské a stavební techniky – traktory, bagry, nakladače. Přímý dovoz od výrobce.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skuhrov 13",
    addressLocality: "Železný Brod",
    postalCode: "468 22",
    addressCountry: "CZ",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+420601017000",
      contactType: "sales",
      areaServed: "CZ",
      availableLanguage: "Czech",
    },
    {
      "@type": "ContactPoint",
      telephone: "+420602458177",
      contactType: "customer service",
      areaServed: "CZ",
      availableLanguage: "Czech",
    },
  ],
  email: "zemstroje@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/s-pozadim.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} font-[Inter] antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md"
        >
          Přeskočit na obsah
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
