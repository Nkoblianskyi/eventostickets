import Link from 'next/link'
import { LegalToc } from '@/components/legal/legal-toc'
import { LegalSection } from '@/components/legal/legal-section'
import { LegalCrosslink } from '@/components/legal/legal-crosslink'

const toc = [
  { id: 'responsable', label: 'Responsable' },
  { id: 'datos', label: 'Datos' },
  { id: 'finalidades', label: 'Finalidades' },
  { id: 'derechos', label: 'Derechos' },
  { id: 'contacto', label: 'Contacto' },
]

export function PrivacyContent() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <LegalToc title="Secciones" items={toc} />
          </div>
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-9">
            <LegalSection id="responsable" index="01" title="Responsable" tone="white">
              <p>
                El sitio web <strong>eventostickets.com</strong> trata datos personales conforme al RGPD. La finalidad principal es
                ofrecer contenido informativo y comparativas de precios de entradas deportivas.{' '}
                <strong>No vendemos entradas</strong> ni procesamos pagos en este dominio.
              </p>
            </LegalSection>

            <LegalSection id="datos" index="02" title="Datos que podemos tratar" tone="cream">
              <ul className="list-disc space-y-2 pl-5">
                <li>Datos técnicos de navegación (IP, tipo de dispositivo, páginas visitadas) de forma agregada o anonimizada cuando sea posible.</li>
                <li>Datos que envíes voluntariamente por el formulario de contacto (nombre, correo, mensaje).</li>
              </ul>
            </LegalSection>

            <LegalSection id="finalidades" index="03" title="Finalidades" tone="lime">
              <p>
                Operar el sitio, responder consultas, seguridad y mejora del servicio. Las cookies se describen en la{' '}
                <Link href="/cookies" className="font-bold text-[#0a0a0c] underline underline-offset-2">
                  política de cookies
                </Link>
                .
              </p>
            </LegalSection>

            <LegalSection id="derechos" index="04" title="Derechos" tone="dark">
              <p>
                Puedes ejercer acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a{' '}
                <a href="mailto:info@eventostickets.com" className="font-bold text-[#c8ff00] underline underline-offset-2">
                  info@eventostickets.com
                </a>
                . También puedes reclamar ante la Agencia Española de Protección de Datos (
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="font-bold text-[#c8ff00] underline underline-offset-2">
                  www.aepd.es
                </a>
                ).
              </p>
            </LegalSection>

            <LegalSection id="contacto" index="05" title="Contacto postal" tone="outline">
              <p className="font-display text-base font-bold uppercase tracking-wide text-[#0a0a0c]">Carrer de Tanger 86, 08018 Barcelona, España</p>
            </LegalSection>

            <LegalCrosslink href="/cookies" label="Política de cookies">
              Si quieres saber qué cookies usamos y cómo gestionarlas en el navegador, abre la política de cookies.
            </LegalCrosslink>

            <p className="text-center text-xs text-[#5c5c62]">
              <Link href="/contact" className="font-bold text-[#ff3d00] underline underline-offset-2">
                Formulario de contacto
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
