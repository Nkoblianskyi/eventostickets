import type { Metadata } from 'next'
import { DM_Sans, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { DisclaimerBanner } from '@/components/disclaimer-banner'

const dm = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm',
  display: 'swap',
})
const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-oswald',
  display: 'swap',
})

const siteUrl = 'https://eventostickets.com'

export const metadata: Metadata = {
  title: 'eventostickets — Comparativa de entradas deportivas',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
  description:
    'Comparativa informativa de precios de entradas a eventos deportivos. No vendemos entradas ni procesamos pagos en eventostickets.com.',
  keywords:
    'entradas deporte, comparar precios entradas, eventos deportivos España, eventostickets',
  authors: [{ name: 'eventostickets', url: siteUrl }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'eventostickets — Comparativa de entradas deportivas',
    description:
      'Solo información y comparación de precios entre partners. Sin venta directa ni datos de pago en este sitio.',
    url: siteUrl,
    siteName: 'eventostickets',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dm.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-[#f2efe8] text-[#0a0a0c]">
        <DisclaimerBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
