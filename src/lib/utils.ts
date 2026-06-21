import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parsuje datum novinky na časové razítko pro řazení.
 * Toleruje ISO ("2026-02-16") i český formát ("16. 2. 2026" / "16.2.2026").
 * Nerozpoznané datum vrací 0 (seřadí se nakonec při sestupném řazení).
 */
export function parseNewsDate(value: string | undefined | null): number {
  if (!value) return 0
  const s = value.trim()

  // ISO: YYYY-MM-DD
  const iso = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)
  if (iso) {
    const [, y, m, d] = iso
    return new Date(Number(y), Number(m) - 1, Number(d)).getTime()
  }

  // Český formát: D. M. YYYY (mezery volitelné)
  const cz = s.match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/)
  if (cz) {
    const [, d, m, y] = cz
    return new Date(Number(y), Number(m) - 1, Number(d)).getTime()
  }

  const fallback = Date.parse(s)
  return Number.isNaN(fallback) ? 0 : fallback
}

/**
 * Zobrazí datum novinky v českém formátu "D. M. YYYY".
 * Toleruje ISO i už český formát (ten vrátí beze změny).
 */
export function formatNewsDate(value: string | undefined | null): string {
  if (!value) return ""
  const ts = parseNewsDate(value)
  if (!ts) return value
  const d = new Date(ts)
  return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`
}
