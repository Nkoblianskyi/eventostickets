import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactQuickBar } from '@/components/contact/contact-quick-bar'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactAside } from '@/components/contact/contact-aside'

export const metadata: Metadata = {
  title: 'Contacto | eventostickets',
  description:
    'Contacta con eventostickets para consultas editoriales. No gestionamos pagos ni devoluciones de entradas compradas en partners.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactQuickBar />
      <section className="bg-[#f2efe8] py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactAside />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
