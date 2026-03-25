import Image from 'next/image'
import { CalendarDays, MapPin } from 'lucide-react'
import type { Event } from '@/lib/events-data'
import { formatPrice, getCategoryColor } from '@/lib/events-data'

interface EventDetailHeroProps {
  event: Event
  min: number
  max: number
}

export function EventDetailHero({ event, min, max }: EventDetailHeroProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="relative overflow-hidden bg-[#0a0a0c]">
      <div className="absolute inset-0 et-stripes opacity-15" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-center lg:col-span-5 lg:border-r-4 lg:border-[#ff3d00] lg:pr-10 xl:col-span-5">
            <span className={`w-fit px-2 py-1 font-display text-[10px] font-bold uppercase tracking-widest ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
            <h1 className="mt-5 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-[0.98] text-white">
              {event.title}
            </h1>

            <div className="mt-8 space-y-4 border-l-4 border-[#c8ff00] pl-5">
              <p className="flex items-start gap-3 text-sm text-[#e8e4dc]">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#ff3d00]" />
                <span>
                  <span className="block font-display text-[10px] font-bold uppercase tracking-widest text-[#8a8a8e]">Cuándo</span>
                  {formattedDate} · {event.time}
                </span>
              </p>
              <p className="flex items-start gap-3 text-sm text-[#e8e4dc]">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ff3d00]" />
                <span>
                  <span className="block font-display text-[10px] font-bold uppercase tracking-widest text-[#8a8a8e]">Dónde</span>
                  {event.venue}, {event.city}
                </span>
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border-2 border-[#2a2a2f] bg-[#141416] p-5">
                <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#c8ff00]">Desde (orientativo)</p>
                <p className="mt-2 font-display text-3xl font-bold text-white">{formatPrice(min)}</p>
                <p className="mt-1 text-xs text-[#8a8a8e]">
                  Rango en ficha: {formatPrice(min)} – {formatPrice(max)}
                </p>
              </div>
              <div className="border-2 border-[#ff3d00] bg-[#ff3d00]/10 p-5">
                <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#ff3d00]">Importante</p>
                <p className="mt-2 text-xs leading-relaxed text-[#e8e4dc]">
                  No vendemos aquí ni cobramos. Precios pueden variar respecto al nominal o taquilla. Compra en el partner.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10 xl:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden border-4 border-[#0a0a0c] shadow-[12px_12px_0_#c8ff00] lg:aspect-auto lg:min-h-[420px] lg:shadow-[16px_16px_0_#ff3d00]">
              <Image src={event.image} alt="" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 58vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0c]/80 via-transparent to-transparent lg:from-[#0a0a0c]/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
