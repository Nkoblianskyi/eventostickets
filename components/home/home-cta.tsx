import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeCta() {
  return (
    <section className="bg-[#ff3d00] py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#0a0a0c]">Siguiente paso</p>
          <p className="mt-2 font-display text-2xl font-bold uppercase text-white md:text-3xl">¿Listo para comparar?</p>
          <p className="mt-2 max-w-lg text-sm text-white/90">Entra al catálogo deportivo y revisa rangos antes de abrir un partner.</p>
        </div>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 border-2 border-[#0a0a0c] bg-[#c8ff00] px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#0a0a0c] shadow-[6px_6px_0_#0a0a0c] transition hover:bg-[#d4ff33]"
        >
          Ir al catálogo
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
