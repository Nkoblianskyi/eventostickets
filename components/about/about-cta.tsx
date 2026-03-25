import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutCta() {
  return (
    <section className="bg-[#e8e4dc] py-14 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Siguiente paso</p>
          <p className="mt-2 font-display text-xl font-bold uppercase text-[#0a0a0c] md:text-2xl">Explora el catálogo deportivo</p>
          <p className="mt-2 max-w-2xl text-sm text-[#5c5c62]">Compara rangos y abre el partner que prefieras cuando quieras completar la compra.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#0a0a0c] bg-[#ff3d00] px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[6px_6px_0_#0a0a0c] transition hover:bg-[#e63500]"
          >
            Ir al catálogo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center border-2 border-[#0a0a0c] bg-white px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#f2efe8]"
          >
            Ver partners
          </Link>
        </div>
      </div>
    </section>
  )
}
