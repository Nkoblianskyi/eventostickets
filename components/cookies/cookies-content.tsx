import Link from 'next/link'
import { LegalToc } from '@/components/legal/legal-toc'
import { LegalSection } from '@/components/legal/legal-section'
import { LegalCrosslink } from '@/components/legal/legal-crosslink'

const toc = [
  { id: 'que-son', label: 'Qué son' },
  { id: 'tipos', label: 'Tipos' },
  { id: 'gestion', label: 'Gestión' },
]

export function CookiesContent() {
  return (
    <section className="bg-[#f2efe8] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <LegalToc title="Índice" items={toc} />
          </div>
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-9">
            <LegalSection id="que-son" index="01" title="Qué son las cookies" tone="white">
              <p>
                Las cookies son pequeños archivos que el navegador almacena para recordar preferencias, mantener sesiones seguras o
                medir el uso del sitio de forma agregada.
              </p>
            </LegalSection>

            <LegalSection id="tipos" index="02" title="Tipos que utilizamos" tone="lime">
              <ul className="list-none space-y-3 pl-0">
                <li className="border-l-4 border-[#0a0a0c] pl-4">
                  <strong className="text-[#0a0a0c]">Necesarias:</strong>{' '}
                  <span className="text-[#2a2a2f]">para recordar tu elección en el banner de cookies y el funcionamiento básico del sitio.</span>
                </li>
                <li className="border-l-4 border-[#ff3d00] pl-4">
                  <strong className="text-[#0a0a0c]">Opcionales (analítica):</strong>{' '}
                  <span className="text-[#2a2a2f]">solo si aceptas, para estadísticas agregadas de uso (p. ej. rendimiento y páginas vistas).</span>
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="gestion" index="03" title="Cómo gestionarlas" tone="outline">
              <p>
                Puedes bloquear o eliminar cookies desde la configuración de tu navegador. También puedes usar el botón del banner
                para aceptar solo lo esencial.
              </p>
            </LegalSection>

            <LegalCrosslink href="/privacidad" label="Política de privacidad">
              Para más información sobre datos personales y derechos, consulta la política de privacidad. Allí encontrarás también
              datos de contacto y el ámbito del RGPD.
            </LegalCrosslink>

            <p className="text-center text-xs text-[#5c5c62]">
              ¿Dudas?{' '}
              <Link href="/contact" className="font-bold text-[#ff3d00] underline underline-offset-2">
                Escríbenos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
