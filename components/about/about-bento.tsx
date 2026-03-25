import { CreditCardOff, GitCompareArrows, Globe2, Lock } from 'lucide-react'

const items = [
  {
    icon: GitCompareArrows,
    title: 'Solo comparamos',
    body: 'Agrupamos ofertas visibles en la misma ficha. El orden por precio es informativo, no publicidad.',
    span: 'md:col-span-2',
    accent: 'bg-[#c8ff00] text-[#0a0a0c]',
  },
  {
    icon: CreditCardOff,
    title: 'Sin cobro aquí',
    body: 'No tramitamos pagos ni guardamos datos bancarios.',
    span: 'md:col-span-1',
    accent: 'bg-[#0a0a0c] text-[#c8ff00]',
  },
  {
    icon: Lock,
    title: 'Privacidad clara',
    body: 'Navegar el catálogo no implica introducir tarjeta en nuestro dominio.',
    span: 'md:col-span-1',
    accent: 'bg-[#ff3d00] text-white',
  },
  {
    icon: Globe2,
    title: 'Salida al partner',
    body: 'Al hacer clic sales de eventostickets: aplican las condiciones del vendedor.',
    span: 'md:col-span-2',
    accent: 'bg-[#e8e4dc] text-[#0a0a0c]',
  },
]

export function AboutBento() {
  return (
    <section className="bg-[#f2efe8] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Cómo pensamos el producto</p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-4xl">Cuatro pilares</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col border-2 border-[#0a0a0c] p-6 shadow-[6px_6px_0_#0a0a0c] ${item.span}`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center border-2 border-[#0a0a0c] ${item.accent}`}>
                <item.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-[#0a0a0c]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c5c62]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
