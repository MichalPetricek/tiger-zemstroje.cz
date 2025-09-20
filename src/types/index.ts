export interface Product {
    id: string
    name: string
    price: string
    power: string
    category: string
    brand: string
    image: string
    images?: string[] // Array of image URLs/paths for carousel (optional for backward compatibility)
    badges: string[]
    description: string
    specs: Record<string, string>
    features: string[]
    available: boolean
    documentation?: string // Path to PDF documentation file
    youtubeUrl?: string // YouTube video URL for product demo/showcase
}

export interface NewsItem {
    id: string
    title: string
    content: string
    date: string
    featured: boolean
}

export interface SubsidyProgram {
    region: string
    territory: string
    support: string
    deadline: string
    type: string
    municipalities: string
}

export type ViewType = 'home' | 'products' | 'product-detail' | 'subsidies' | 'service' | 'contacts' | 'rental'

export interface NavigationItem {
    name: string
    href: string
    path: string
    active?: boolean
}