import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, MapPin, ArrowUpRight } from 'lucide-react'
import { type Event, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

interface EventCardProps {
  event: Event
  priority?: boolean
  variant?: 'default' | 'wide' | 'minimal'
}

export function EventCard({ event, priority = false, variant = 'default' }: EventCardProps) {
  const prices = event.offers.filter((o) => o.available).map((o) => o.price)
  const min = getMinPrice(event.offers)
  const max = prices.length > 0 ? Math.max(...prices) : min
  const range = min > 0 ? `${formatPrice(min)}${max > min ? ` – ${formatPrice(max)}` : ''}` : '—'
  const disclosure = 'Comparativa orientativa · No vendemos entradas'

  if (variant === 'minimal') {
    return (
      <Link
        href={`/catalogo/${event.id}`}
        className="group flex items-center justify-between gap-3 border-l-4 border-[#ff3d00] bg-[#141416] px-4 py-3 transition hover:bg-[#1a1a1e] hover:border-[#d6b24c]"
      >
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold uppercase tracking-wide text-white">{event.title}</p>
          <p className="truncate text-xs text-[#8a8a8e]">
            {event.city} · {event.venue}
          </p>
          <p className="mt-1 truncate text-[10px] text-[#8a8a8e]">{disclosure}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-display text-xs font-bold uppercase text-[#d6b24c]">{range}</p>
          <p className="mt-0.5 text-[10px] text-[#8a8a8e]">Precio: de–a</p>
        </div>
      </Link>
    )
  }

  if (variant === 'wide') {
    return (
      <Link
        href={`/catalogo/${event.id}`}
        className="group grid overflow-hidden border-2 border-[#0a0a0c] bg-white shadow-[8px_8px_0_#d6b24c] transition hover:shadow-[12px_12px_0_#ff3d00] lg:grid-cols-[1.15fr_1fr]"
      >
        <div className="relative min-h-[280px]">
          <Image
            src={event.image}
            alt=""
            fill
            priority={priority}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
          <span className={`absolute left-3 top-3 px-2 py-1 text-[10px] ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        <div className="flex flex-col justify-between border-l-2 border-[#0a0a0c] bg-[#f2efe8] p-6 md:p-8">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase leading-tight text-[#0a0a0c] md:text-3xl">{event.title}</h3>
            <div className="mt-4 space-y-2 text-sm text-[#2a2a2f]">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0 text-[#ff3d00]" />
                {new Date(event.date).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · {event.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#ff3d00]" />
                {event.venue}, {event.city}
              </p>
            </div>
          </div>
          <div className="mt-6 border-2 border-[#0a0a0c] bg-[#d6b24c] px-4 py-3">
            <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/80">Comparativa: precio de–a</p>
            <p className="font-display text-2xl font-bold text-[#0a0a0c]">{range}</p>
            <p className="mt-1 text-[10px] text-[#2a2a2f]">{disclosure} · Puede variar respecto al precio nominal</p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/catalogo/${event.id}`}
      className="group flex h-full flex-col border-2 border-[#0a0a0c] bg-white shadow-[4px_4px_0_#0a0a0c] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#ff3d00]"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c]/90 to-transparent" />
        <span className={`absolute left-2 top-2 px-2 py-0.5 text-[10px] ${getCategoryColor(event.category)}`}>{event.category}</span>
      </div>
      <div className="flex flex-1 flex-col bg-[#f2efe8] p-4">
        <h3 className="line-clamp-2 font-display text-base font-bold uppercase leading-snug text-[#0a0a0c]">{event.title}</h3>
        <p className="mt-2 text-xs text-[#5c5c62]">
          {new Date(event.date).toLocaleDateString('es-ES')} · {event.time}
        </p>
        <p className="truncate text-xs text-[#5c5c62]">
          {event.city} · {event.venue}
        </p>
        <div className="mt-4 flex items-center justify-between border-t-2 border-[#0a0a0c] pt-3">
          <span className="font-display text-[10px] font-bold uppercase text-[#ff3d00]">Precio (de–a)</span>
          <span className="font-display text-lg font-bold text-[#0a0a0c]">{range}</span>
        </div>
        <p className="mt-2 text-[10px] text-[#5c5c62]">{disclosure}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 font-display text-[10px] font-bold uppercase tracking-wide text-[#ff3d00]">
          Ver comparativa
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
