import type { Metadata } from 'next'
import { PrivacyHero } from '@/components/privacy/privacy-hero'
import { PrivacyContent } from '@/components/privacy/privacy-content'

export const metadata: Metadata = {
  title: 'Política de privacidad | eventostickets',
  description:
    'Tratamiento de datos personales en eventostickets.com (RGPD). Información sobre derechos y contacto.',
}

export default function PrivacidadPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  )
}
