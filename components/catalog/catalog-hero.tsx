interface CatalogHeroProps {
  filteredCount: number
  totalCount: number
}

export function CatalogHero({ filteredCount, totalCount }: CatalogHeroProps) {
  return (
    <section className="relative overflow-hidden border-b-4 border-[#0a0a0c] bg-[#0a0a0c]">
      <div className="absolute inset-0 et-stripes opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-stretch lg:gap-0 lg:px-8 lg:py-16">
        <div className="max-w-2xl flex-1 lg:border-r-4 lg:border-[#ff3d00] lg:pr-12">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-[#c8ff00]">Índice deportivo</p>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-[0.95] text-white">
            Catálogo
            <span className="block text-[#ff3d00]">en vivo</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-[#b8b8bc] md:text-base">
            Partidos y eventos con <strong className="text-[#e8e4dc]">rangos de precio entre partners</strong>. Los importes son
            orientativos. <strong className="text-[#c8ff00]">No vendemos entradas en este sitio.</strong>
          </p>
        </div>
        <div className="mt-10 flex gap-4 lg:mt-0 lg:ml-10 lg:flex-col lg:justify-center lg:gap-6">
          <div className="flex-1 border-2 border-[#2a2a2f] bg-[#141416] px-5 py-4 text-center lg:text-left">
            <p className="font-display text-3xl font-bold text-[#c8ff00] lg:text-4xl">{filteredCount}</p>
            <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#8a8a8e]">Visibles</p>
          </div>
          <div className="flex-1 border-2 border-[#2a2a2f] bg-[#141416] px-5 py-4 text-center lg:text-left">
            <p className="font-display text-3xl font-bold text-white lg:text-4xl">{totalCount}</p>
            <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#8a8a8e]">Total fichas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
