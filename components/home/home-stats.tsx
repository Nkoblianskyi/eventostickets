import { events, partners } from '@/lib/events-data'

const cities = new Set(events.map((e) => e.city)).size

export function HomeStats() {
  return (
    <div className="border-b-4 border-[#0a0a0c] bg-[#c8ff00]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x-2 divide-[#0a0a0c] md:grid-cols-4">
        <div className="px-4 py-8 text-center sm:px-6">
          <p className="font-display text-3xl font-bold text-[#0a0a0c] md:text-4xl">{events.length}+</p>
          <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Fichas</p>
        </div>
        <div className="px-4 py-8 text-center sm:px-6">
          <p className="font-display text-3xl font-bold text-[#0a0a0c] md:text-4xl">{partners.length}</p>
          <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Partners</p>
        </div>
        <div className="px-4 py-8 text-center sm:px-6">
          <p className="font-display text-3xl font-bold text-[#0a0a0c] md:text-4xl">{cities}</p>
          <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Ciudades</p>
        </div>
        <div className="col-span-2 border-t-2 border-[#0a0a0c] px-4 py-8 text-center md:col-span-1 md:border-t-0 md:border-l-0">
          <p className="font-display text-3xl font-bold text-[#0a0a0c] md:text-4xl">0 €</p>
          <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Uso del sitio</p>
        </div>
      </div>
    </div>
  )
}
