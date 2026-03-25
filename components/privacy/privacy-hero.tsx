import { Shield } from 'lucide-react'

export function PrivacyHero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-[#ff3d00] bg-[#0a0a0c]">
      <div className="absolute inset-0 et-stripes opacity-15" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-[#ff3d00]">
              <Shield className="h-4 w-4" aria-hidden />
              Protección de datos
            </p>
            <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] text-white">
              Privacidad
              <span className="block text-[#c8ff00]">y RGPD</span>
            </h1>
          </div>
          <div className="border-t-4 border-[#c8ff00] bg-[#141416] p-6 lg:border-t-0 lg:border-l-4">
            <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#8a8a8e]">Ámbito</p>
            <p className="mt-2 text-base leading-relaxed text-[#e8e4dc]">España y Reglamento (UE) 2016/679 (RGPD). Tratamiento con fines informativos y de contacto.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
