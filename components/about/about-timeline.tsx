const steps = [
  {
    n: 'I',
    title: 'Selección',
    text: 'Priorizamos eventos deportivos con demanda real y buena cobertura en plataformas conocidas.',
  },
  {
    n: 'II',
    title: 'Ficha única',
    text: 'Misma estructura para todos: fecha, recinto, ciudad y rango de precio entre partners.',
  },
  {
    n: 'III',
    title: 'Actualización',
    text: 'Los datos son orientativos; el mercado cambia. Verifica siempre en el checkout del partner.',
  },
]

export function AboutTimeline() {
  return (
    <section className="bg-[#141416] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">Proceso</p>
        <h2 className="mt-2 font-display text-2xl font-bold uppercase text-white md:text-4xl">De la ficha a tu compra</h2>
        <ol className="relative mt-12 space-y-10 md:space-y-12">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#2a2a2f] md:left-[27px]" aria-hidden />
          {steps.map((step) => (
            <li key={step.n} className="relative flex gap-6 pl-10 md:gap-10 md:pl-16">
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center border-2 border-[#c8ff00] bg-[#0a0a0c] font-display text-[10px] font-bold text-[#c8ff00] md:left-2 md:h-8 md:w-8 md:text-xs">
                {step.n}
              </span>
              <span className="hidden w-12 shrink-0 font-display text-3xl font-bold text-[#ff3d00] md:block">{step.n}</span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8a8a8e]">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
