import { Cookie } from 'lucide-react'

export function CookiesHero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-[#0a0a0c] bg-[#0a0a0c]">
      <div className="absolute inset-0 et-stripes opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:border-r-4 lg:border-[#c8ff00] lg:pr-12">
            <p className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-[#c8ff00]">
              <Cookie className="h-4 w-4" aria-hidden />
              Transparencia
            </p>
            <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] text-white">
              Política de
              <span className="block text-[#ff3d00]">cookies</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#b8b8bc] md:text-base">
              Qué guardamos en tu navegador, para qué sirve y cómo limitarlo sin perder el funcionamiento básico del sitio.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="border-2 border-[#2a2a2f] bg-[#141416] p-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#8a8a8e]">Actualización</p>
              <p className="mt-2 font-display text-xl font-bold text-white">Marzo 2026</p>
            </div>
            <div className="border-2 border-[#ff3d00] bg-[#ff3d00]/15 p-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#ff3d00]">Titular</p>
              <p className="mt-2 text-sm font-medium text-[#e8e4dc]">eventostickets.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
