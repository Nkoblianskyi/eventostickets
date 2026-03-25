import { ArrowUpRight, Store } from 'lucide-react'
import type { TicketOffer } from '@/lib/events-data'
import { formatPrice } from '@/lib/events-data'

interface EventDetailOffersProps {
  offers: TicketOffer[]
}

export function EventDetailOffers({ offers }: EventDetailOffersProps) {
  if (offers.length === 0) {
    return (
      <section className="border-y-4 border-[#0a0a0c] bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-lg font-bold uppercase text-[#0a0a0c]">Sin ofertas disponibles</p>
          <p className="mt-2 text-sm text-[#5c5c62]">En este momento no hay plataformas con plaza en esta ficha.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-y-4 border-[#0a0a0c] bg-[#f2efe8] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-[#0a0a0c] bg-[#c8ff00] px-3 py-1">
              <Store className="h-4 w-4 text-[#0a0a0c]" />
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]">Comparativa</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-4xl">Precios por plataforma</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#5c5c62]">
              Orden de menor a mayor según esta ficha. Al pulsar sales a la web del partner; el pago y las condiciones son suyos.
            </p>
          </div>
          <p className="font-display text-xs font-bold uppercase tracking-wide text-[#ff3d00]">{offers.length} opciones</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, i) => (
            <article
              key={offer.partner}
              className="group relative flex flex-col border-2 border-[#0a0a0c] bg-white p-5 shadow-[6px_6px_0_#0a0a0c] transition hover:shadow-[8px_8px_0_#ff3d00]"
            >
              <span className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center border-2 border-[#0a0a0c] bg-[#ff3d00] font-display text-sm font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="pr-8 font-display text-lg font-bold uppercase tracking-wide text-[#0a0a0c]">{offer.partner}</h3>
              <p className="mt-1 text-xs text-[#5c5c62]">Importe mostrado en comparativa</p>
              <p className="mt-6 font-display text-3xl font-bold text-[#0a0a0c]">{formatPrice(offer.price)}</p>
              <a
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 border-2 border-[#0a0a0c] bg-[#0a0a0c] py-3 font-display text-xs font-bold uppercase tracking-wide text-[#c8ff00] transition group-hover:bg-[#ff3d00] group-hover:text-white"
              >
                Ir al partner
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
