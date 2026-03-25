import type { Metadata } from 'next'
import { CookiesHero } from '@/components/cookies/cookies-hero'
import { CookiesContent } from '@/components/cookies/cookies-content'

export const metadata: Metadata = {
  title: 'Política de cookies | eventostickets',
  description: 'Uso de cookies en eventostickets.com y cómo gestionar tus preferencias.',
}

export default function CookiesPage() {
  return (
    <>
      <CookiesHero />
      <CookiesContent />
    </>
  )
}
