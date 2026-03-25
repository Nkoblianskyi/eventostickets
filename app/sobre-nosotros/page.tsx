import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { AboutBento } from '@/components/about/about-bento'
import { AboutSplit } from '@/components/about/about-split'
import { AboutTimeline } from '@/components/about/about-timeline'
import { AboutCta } from '@/components/about/about-cta'

export const metadata: Metadata = {
  title: 'Quiénes somos | eventostickets',
  description:
    'Misión, proceso y transparencia de eventostickets: comparativa informativa de entradas deportivas, sin venta ni datos de pago en el sitio.',
}

export default function SobreNosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutBento />
      <AboutSplit />
      <AboutTimeline />
      <AboutCta />
    </>
  )
}
