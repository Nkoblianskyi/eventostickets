import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { partners } from '@/lib/events-data'

export function PartnersSection() {
  return (
    <section className="border-t-4 border-[#0a0a0c] bg-[#e8e4dc] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Plataformas</p>
            <h2 className="font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-3xl">Dónde pueden aparecer los precios</h2>
            <p className="mt-2 max-w-xl text-sm text-[#5c5c62]">
              Citamos sitios habituales de venta de entradas. No implica acuerdo comercial ni exclusividad: solo referencia para
              comparar.
            </p>
          </div>
          <Link href="/partners" className="font-display text-sm font-bold uppercase tracking-wide text-[#ff3d00] underline decoration-2 underline-offset-4">
            Ficha de partners
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="border-2 border-[#0a0a0c] bg-white p-5 shadow-[4px_4px_0_#0a0a0c]">
              <h3 className="font-display text-lg font-bold uppercase text-[#0a0a0c]">{partner.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c5c62]">{partner.description}</p>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide text-[#ff3d00]"
              >
                Web oficial
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
