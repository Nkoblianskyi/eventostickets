import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { events, getMinPrice } from '@/lib/events-data'
import { EventDetailNav } from '@/components/event-detail/event-detail-nav'
import { EventDetailHero } from '@/components/event-detail/event-detail-hero'
import { EventDetailOffers } from '@/components/event-detail/event-detail-offers'
import { EventDetailStory } from '@/components/event-detail/event-detail-story'
import { EventDetailRelated } from '@/components/event-detail/event-detail-related'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) {
    return { title: 'Evento | eventostickets' }
  }
  return {
    title: `${event.title} | Comparativa de entradas | eventostickets`,
    description: `Información y comparativa orientativa de precios para ${event.title}. eventostickets no vende entradas ni procesa pagos.`,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  const available = event.offers.filter((o) => o.available).sort((a, b) => a.price - b.price)
  const min = getMinPrice(event.offers)
  const max = available.length > 0 ? Math.max(...available.map((o) => o.price)) : min
  const related = events.filter((e) => e.id !== event.id && e.category === event.category).slice(0, 4)

  return (
    <>
      <EventDetailNav />
      <EventDetailHero event={event} min={min} max={max} />
      <EventDetailOffers offers={available} />
      <EventDetailStory event={event} />
      <EventDetailRelated related={related} />
    </>
  )
}
