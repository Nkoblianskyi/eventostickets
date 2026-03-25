import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const steps = [
  { n: '01', t: 'Busca', d: 'Ciudad, equipo o palabra clave en el catálogo.' },
  { n: '02', t: 'Compara', d: 'Misma ficha, distintos precios de referencia entre partners.' },
  { n: '03', t: 'Compra fuera', d: 'El pago y las condiciones son del sitio que abras.' },
]

export function HomeSteps() {
  return (
    <section className="bg-[#0a0a0c] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">Flujo</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-white md:text-4xl">Tres movimientos</h2>
          </div>
          <Link href="/sobre-nosotros" className="inline-flex items-center gap-1 font-display text-xs font-bold uppercase text-[#ff3d00]">
            Más sobre el proyecto
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <ol className="mt-12 flex flex-col gap-0 md:flex-row md:items-stretch">
          {steps.map((step, i) => (
            <li key={step.n} className="relative flex flex-1 flex-col border-2 border-[#2a2a2f] bg-[#141416] p-6 md:border-l-0 md:first:border-l-2 md:first:rounded-l-sm md:last:rounded-r-sm">
              {i > 0 && (
                <span className="absolute -right-3 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center border-2 border-[#0a0a0c] bg-[#c8ff00] font-display text-xs font-bold text-[#0a0a0c] md:flex">
                  →
                </span>
              )}
              <span className="font-display text-4xl font-bold leading-none text-[#ff3d00]">{step.n}</span>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-white">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8a8a8e]">{step.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
