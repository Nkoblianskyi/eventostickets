import { Search, RotateCcw, ArrowDownAZ, CalendarArrowDown, CalendarArrowUp } from 'lucide-react'
import { CATALOG_CITIES, cityLabel, type CatalogCity, type CatalogSort } from '@/lib/catalog-constants'

interface CatalogControlsProps {
  query: string
  onQueryChange: (v: string) => void
  city: CatalogCity
  onCityChange: (c: CatalogCity) => void
  sort: CatalogSort
  onSortChange: (s: CatalogSort) => void
  onReset: () => void
}

const sortOptions: { value: CatalogSort; label: string; icon: typeof CalendarArrowDown }[] = [
  { value: 'date-asc', label: 'Fecha ↑', icon: CalendarArrowUp },
  { value: 'date-desc', label: 'Fecha ↓', icon: CalendarArrowDown },
  { value: 'title', label: 'A–Z', icon: ArrowDownAZ },
]

export function CatalogControls({
  query,
  onQueryChange,
  city,
  onCityChange,
  sort,
  onSortChange,
  onReset,
}: CatalogControlsProps) {
  return (
    <div className="sticky top-[4.25rem] z-30 border-b-4 border-[#0a0a0c] bg-[#c8ff00] shadow-[0_8px_0_#0a0a0c]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-8">
          <div className="min-w-0 flex-1">
            <label htmlFor="catalog-search" className="mb-2 block font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">
              Buscar
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0a0a0c]" />
              <input
                id="catalog-search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Equipo, recinto, ciudad…"
                className="w-full border-2 border-[#0a0a0c] bg-white py-3.5 pl-12 pr-4 font-display text-sm font-bold uppercase tracking-wide text-[#0a0a0c] placeholder:font-normal placeholder:normal-case placeholder:text-[#8a8a8e] outline-none focus:ring-2 focus:ring-[#ff3d00] focus:ring-offset-2 focus:ring-offset-[#c8ff00]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-auto">
            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Orden</span>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onSortChange(value)}
                  className={`inline-flex items-center gap-2 border-2 border-[#0a0a0c] px-3 py-2 font-display text-[11px] font-bold uppercase tracking-wide transition ${
                    sort === value ? 'bg-[#0a0a0c] text-[#c8ff00]' : 'bg-white text-[#0a0a0c] hover:bg-[#f2efe8]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t-2 border-[#0a0a0c]/25 pt-5">
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Ciudad</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {CATALOG_CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onCityChange(c)}
                className={`border-2 border-[#0a0a0c] px-3 py-2 font-display text-[11px] font-bold uppercase tracking-wide transition ${
                  city === c ? 'bg-[#ff3d00] text-white shadow-[4px_4px_0_#0a0a0c]' : 'bg-white text-[#0a0a0c] hover:bg-[#f2efe8]'
                }`}
              >
                {cityLabel(c)}
              </button>
            ))}
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 border-2 border-dashed border-[#0a0a0c] bg-transparent px-3 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-[#0a0a0c] hover:bg-[#0a0a0c] hover:text-[#c8ff00]"
            >
              <RotateCcw className="h-4 w-4" />
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
