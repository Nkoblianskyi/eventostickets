import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { partners } from '@/lib/events-data'

export const metadata: Metadata = {
  title: 'Partners | eventostickets',
  description:
    'Plataformas de venta de entradas citadas en las comparativas de eventostickets.com. Sin venta ni cobro en nuestro sitio.',
}

export default function PartnersPage() {
  return (
    <>
      <section className="border-b-4 border-[#0a0a0c] bg-[#0a0a0c] py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">Referencias</p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase text-white md:text-5xl">Partners</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#b8b8bc]">
            Estas son algunas de las plataformas cuyas ofertas podemos citar en fichas comparativas.{' '}
            <strong className="text-[#e8e4dc]">No vendemos ni cobramos</strong> en eventostickets: la compra es siempre en el sitio del partner.
          </p>
        </div>
      </section>

      <section className="bg-[#f2efe8] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partners.map((partner) => (
              <article key={partner.name} className="flex flex-col border-2 border-[#0a0a0c] bg-white p-6 shadow-[6px_6px_0_#ff3d00]">
                <h2 className="font-display text-xl font-bold uppercase text-[#0a0a0c]">{partner.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5c5c62]">{partner.description}</p>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-[#0a0a0c] bg-[#c8ff00] px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#d4ff33]"
                >
                  Visitar web
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
