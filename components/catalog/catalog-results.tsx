import Link from 'next/link'
import { EventCard } from '@/components/event-card'
import type { Event } from '@/lib/events-data'

interface CatalogResultsProps {
  events: Event[]
}

export function CatalogResults({ events }: CatalogResultsProps) {
  if (events.length === 0) {
    return (
      <div className="mx-auto max-w-2xl border-4 border-[#0a0a0c] bg-white px-8 py-16 text-center shadow-[12px_12px_0_#ff3d00]">
        <p className="font-display text-2xl font-bold uppercase text-[#0a0a0c]">Nada por aquí</p>
        <p className="mt-3 text-sm leading-relaxed text-[#5c5c62]">Cambia la búsqueda, la ciudad o pulsa Limpiar para ver todo el índice.</p>
        <p className="mt-6 font-display text-xs font-bold uppercase tracking-wide text-[#ff3d00]">Solo deporte · precios orientativos</p>
      </div>
    )
  }

  const [lead, ...others] = events

  return (
    <div className="space-y-10">
      <section aria-label="Destacado del listado">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Primera fila</h2>
          <Link href={`/catalogo/${lead.id}`} className="font-display text-[10px] font-bold uppercase tracking-wide text-[#5c5c62] underline underline-offset-4 hover:text-[#0a0a0c]">
            Abrir ficha →
          </Link>
        </div>
        <EventCard event={lead} variant="wide" priority />
      </section>

      {others.length > 0 && (
        <section aria-label="Resto de eventos">
          <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#5c5c62]">Resto del calendario</h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {others.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
