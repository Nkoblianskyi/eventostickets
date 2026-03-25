import Link from 'next/link'
import { events } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'

const PREVIEW_COUNT = 6

export function HomeShowcase() {
  const preview = events.slice(0, PREVIEW_COUNT)

  return (
    <section className="border-y-4 border-[#0a0a0c] bg-[#e8e4dc] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Catálogo</p>
            <h2 className="font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-4xl">Próximos en agenda</h2>
            <p className="mt-2 max-w-xl text-sm text-[#5c5c62]">
              Un solo bloque con las primeras fichas ordenadas por fecha — la misma información que verás ampliada en cada evento y en
              el listado completo. Sin repetir el mismo partido dos veces en formatos distintos.
            </p>
          </div>
          <Link
            href="/catalogo"
            className="inline-flex w-fit items-center border-2 border-[#0a0a0c] bg-[#0a0a0c] px-6 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#c8ff00] transition hover:bg-[#ff3d00] hover:text-white"
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((event, i) => (
            <EventCard key={event.id} event={event} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
