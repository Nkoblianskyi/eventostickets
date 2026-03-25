import Link from 'next/link'
import { AlertCircle, HelpCircle } from 'lucide-react'

export function ContactAside() {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
      <div className="border-2 border-[#0a0a0c] bg-white p-6 shadow-[6px_6px_0_#ff3d00]">
        <div className="flex items-start gap-3">
          <HelpCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#ff3d00]" />
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-[#0a0a0c]">¿Primera vez aquí?</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5c5c62]">
              Revisa cómo funciona la comparativa y qué significa que los precios sean orientativos.
            </p>
            <Link href="/sobre-nosotros" className="mt-3 inline-block font-display text-xs font-bold uppercase tracking-wide text-[#ff3d00] underline decoration-2 underline-offset-4">
              Quiénes somos
            </Link>
          </div>
        </div>
      </div>

      <div className="border-2 border-[#ff3d00] bg-[#141416] p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#c8ff00]">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span className="font-display text-xs font-bold uppercase tracking-wide">Importante</span>
          </div>
          <p className="text-sm leading-relaxed text-[#e8e4dc]">
            eventostickets <strong className="text-white">no vende entradas</strong> y <strong className="text-white">no procesa datos de pago</strong>. Si
            tu consulta es sobre un cargo devuelto o una entrada ya pagada, contacta con el partner donde compraste.
          </p>
        </div>
      </div>

    </aside>
  )
}
