export interface Product {
    id: string
    name: string
    priceWithVat: number      // price including 21% VAT in CZK (0 = price on request)
    priceWithoutVat: number   // price without VAT in CZK
    power: string
    category: string
    brand: string
    image: string
    images: string[]
    badges: string[]
    description: string
    specs: Record<string, string>
    features: string[]
    available: boolean
    documentation?: string
    youtubeUrl?: string
    sortOrder?: number
}

export interface NewsItem {
    id: number
    title: string
    content: string
    date: string
    images: string[]
    youtubeUrl?: string
    published: boolean
}

export interface Manufacturer {
    id: string
    name: string
    description: string
    youtubeVideoId?: string
    sortOrder?: number
}

export type ViewType = 'home' | 'products' | 'product-detail' | 'service' | 'contacts' | 'rental' | 'manufacturers' | 'news'

export interface NavigationItem {
    name: string
    href: string
    path: string
    active?: boolean
}