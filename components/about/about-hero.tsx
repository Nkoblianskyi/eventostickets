import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0c]">
      <div className="absolute inset-0 et-stripes opacity-25" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-0 lg:grid-cols-12">
        <div className="flex flex-col justify-center border-b-4 border-[#ff3d00] px-4 py-16 sm:px-6 lg:col-span-7 lg:border-b-0 lg:border-r-4 lg:border-[#ff3d00] lg:py-24 lg:pl-8 lg:pr-12">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-[#c8ff00]">Sobre nosotros</p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-6xl lg:text-7xl">
            Información
            <span className="block text-[#ff3d00]">antes que ruido</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#b8b8bc] md:text-lg">
            Nacimos para ordenar la comparación de entradas deportivas: mismas fichas, mismas reglas, precios mostrados solo como
            referencia entre partners.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 border-2 border-[#c8ff00] bg-[#c8ff00] px-6 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#d4ff33]"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-6 py-3 font-display text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
            >
              Contacto
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[#141416] px-4 py-12 sm:px-6 lg:col-span-5 lg:py-24 lg:pr-8">
          <div className="border-l-4 border-[#c8ff00] pl-6">
            <p className="font-display text-5xl font-bold leading-none text-[#c8ff00] md:text-6xl">01</p>
            <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-white">Editorial</p>
            <p className="mt-2 text-sm leading-relaxed text-[#8a8a8e]">
              No somos marketplace: publicamos contexto y rangos para que decidas con criterio. La compra ocurre fuera de
              eventostickets.
            </p>
          </div>
          <div className="mt-10 border-l-4 border-[#ff3d00] pl-6">
            <p className="font-display text-5xl font-bold leading-none text-[#ff3d00] md:text-6xl">02</p>
            <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-white">Independencia</p>
            <p className="mt-2 text-sm leading-relaxed text-[#8a8a8e]">
              No cobramos al usuario por comparar en nuestro sitio. Los partners enlazados son referencias públicas de venta de
              entradas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
