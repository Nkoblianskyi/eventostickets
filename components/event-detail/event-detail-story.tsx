import type { Event } from '@/lib/events-data'

interface EventDetailStoryProps {
  event: Event
}

export function EventDetailStory({ event }: EventDetailStoryProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Contexto</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-[#0a0a0c] md:text-3xl">Sobre el evento</h2>
            <div className="mt-6 h-1 w-16 bg-[#c8ff00]" />
          </div>
          <div className="lg:col-span-8">
            <p className="text-base leading-[1.75] text-[#2a2a2f] md:text-lg">{event.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
