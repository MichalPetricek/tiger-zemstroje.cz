export interface Product {
    id: string
    name: string
    price: string
    power: string
    category: string
    brand: string
    image: string
    badges: string[]
    description: string
    specs: Record<string, string>
    features: string[]
    available: boolean
}

export interface NewsItem {
    id: string
    title: string
    content: string
    date: string
    featured: boolean
}

export type ViewType = 'home' | 'products' | 'product-detail' | 'subsidies' | 'service' | 'contacts' | 'rental'

export interface NavigationItem {
    name: string
    href: string
    path: string
    active?: boolean
}