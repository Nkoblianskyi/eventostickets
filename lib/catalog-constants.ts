export const CATALOG_CITIES = [
  'Todas',
  'Madrid',
  'Barcelona',
  'Bilbao',
  'Sevilla',
  'Los Angeles',
  'New York',
  'Chicago',
  'Miami',
] as const

export type CatalogCity = (typeof CATALOG_CITIES)[number]

export type CatalogSort = 'date-asc' | 'date-desc' | 'title'

export function cityLabel(c: CatalogCity): string {
  if (c === 'Los Angeles') return 'LA'
  if (c === 'New York') return 'NYC'
  return c
}
