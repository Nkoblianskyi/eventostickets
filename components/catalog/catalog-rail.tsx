import Link from 'next/link'
import { LayoutGrid, List } from 'lucide-react'
import type { Event } from '@/lib/events-data'
import { formatPrice, getMinPrice } from '@/lib/events-data'

interface CatalogRailProps {
  preview: Event[]
}

/** Lateral context strip: próximos compactos + enlace legal corto */
export function CatalogRail({ preview }: CatalogRailProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-40 lg:self-start">
      <div className="border-2 border-[#0a0a0c] bg-[#0a0a0c] p-5 text-[#e8e4dc]">
        <div className="flex items-center gap-2 border-b border-[#2a2a2f] pb-3">
          <List className="h-4 w-4 text-[#c8ff00]" />
          <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#c8ff00]">Siguientes fechas</p>
        </div>
        {preview.length === 0 ? (
          <p className="mt-4 text-xs leading-relaxed text-[#8a8a8e]">No hay eventos con los filtros actuales. Ajusta búsqueda o ciudad.</p>
        ) : (
          <ul className="mt-4 space-y-0 divide-y divide-[#2a2a2f]">
            {preview.map((e) => {
              const min = getMinPrice(e.offers)
              return (
                <li key={e.id}>
                  <Link href={`/catalogo/${e.id}`} className="group block py-3 transition hover:bg-[#141416]">
                    <p className="truncate font-display text-[11px] font-bold uppercase tracking-wide text-white group-hover:text-[#c8ff00]">{e.title}</p>
                    <p className="mt-0.5 text-[10px] text-[#8a8a8e]">
                      {e.date} · {e.city}
                    </p>
                    <p className="mt-1 font-display text-xs font-bold text-[#ff3d00]">{formatPrice(min)}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className="border-2 border-[#0a0a0c] bg-[#e8e4dc] p-5">
        <div className="flex items-center gap-2 text-[#0a0a0c]">
          <LayoutGrid className="h-4 w-4 text-[#ff3d00]" />
          <p className="font-display text-[10px] font-bold uppercase tracking-widest">Recordatorio</p>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-[#5c5c62]">
          Al abrir un partner sales de eventostickets. Comisiones y precio final pueden variar respecto a lo mostrado.
        </p>
      </div>
    </aside>
  )
}
