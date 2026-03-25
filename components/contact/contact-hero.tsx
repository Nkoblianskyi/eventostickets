import { MessageSquare } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-[#ff3d00] bg-[#0a0a0c]">
      <div className="absolute inset-0 et-stripes opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 border border-[#c8ff00]/40 bg-[#141416] px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
            <MessageSquare className="h-3.5 w-3.5" aria-hidden />
            Escríbenos
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-6xl">Contacto</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#b8b8bc] md:text-base">
            Dudas sobre fichas, datos desactualizados o propuestas editoriales.{' '}
            <strong className="text-[#e8e4dc]">No atendemos reclamaciones de pago ni devoluciones</strong>: eso corresponde a
            la plataforma donde pagaste la entrada.
          </p>
        </div>
        <div className="mt-10 hidden border-l-4 border-[#c8ff00] pl-6 lg:mt-0 lg:block lg:max-w-xs">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Respuesta</p>
          <p className="mt-2 font-display text-3xl font-bold text-white">1–2</p>
          <p className="text-sm text-[#8a8a8e]">días laborables de media</p>
        </div>
      </div>
    </section>
  )
}
