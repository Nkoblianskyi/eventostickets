import Link from 'next/link'
import { partners } from '@/lib/events-data'

export function HomePartners() {
  return (
    <section className="border-t-4 border-[#0a0a0c] bg-[#f2efe8] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Referencias</p>
            <h2 className="font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-3xl">Partners citados</h2>
            <p className="mt-2 max-w-xl text-sm text-[#5c5c62]">Plataformas donde pueden aparecer precios en nuestras fichas comparativas.</p>
          </div>
          <Link href="/partners" className="font-display text-sm font-bold uppercase text-[#0a0a0c] underline decoration-[#ff3d00] decoration-2 underline-offset-4">
            Ver todo
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {partners.map((p) => (
            <span
              key={p.name}
              className="border-2 border-[#0a0a0c] bg-white px-4 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-[#0a0a0c]"
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
