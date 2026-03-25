import Link from 'next/link'
import type { Event } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'

interface EventDetailRelatedProps {
  related: Event[]
}

export function EventDetailRelated({ related }: EventDetailRelatedProps) {
  if (related.length === 0) return null

  return (
    <section className="border-t-4 border-[#0a0a0c] bg-[#e8e4dc] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Más deporte</p>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-3xl">También te puede interesar</h2>
          </div>
          <Link href="/catalogo" className="font-display text-sm font-bold uppercase text-[#0a0a0c] underline decoration-[#ff3d00] decoration-2 underline-offset-4">
            Ver catálogo
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>
    </section>
  )
}
