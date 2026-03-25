import { Ban, CreditCard, Scale } from 'lucide-react'

const items = [
  {
    icon: Ban,
    title: 'Sin venta',
    text: 'No somos taquilla: no vendemos entradas en este dominio.',
  },
  {
    icon: CreditCard,
    title: 'Sin cobro aquí',
    text: 'No recopilamos ni procesamos datos de pago (tarjetas, IBAN).',
  },
  {
    icon: Scale,
    title: 'Precios orientativos',
    text: 'Pueden diferir del precio nominal o de taquilla según el partner.',
  },
]

export function HomeTrust() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Transparencia</p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-3xl">Tres reglas claras</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col border-2 border-[#0a0a0c] bg-[#f2efe8] p-6 text-center shadow-[8px_8px_0_#0a0a0c]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center border-2 border-[#0a0a0c] bg-[#c8ff00]">
                <item.icon className="h-7 w-7 text-[#0a0a0c]" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-[#0a0a0c]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c5c62]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
