import { Clock, Mail, MapPin } from 'lucide-react'

export function ContactQuickBar() {
  return (
    <div className="border-b-4 border-[#0a0a0c] bg-[#c8ff00]">
      <div className="mx-auto grid max-w-7xl divide-y-2 divide-[#0a0a0c] sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
        <a
          href="mailto:info@eventostickets.com"
          className="flex items-center gap-4 px-4 py-5 transition hover:bg-[#d4ff33] sm:px-6"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#0a0a0c] bg-white">
            <Mail className="h-6 w-6 text-[#0a0a0c]" />
          </span>
          <span>
            <span className="block font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Email</span>
            <span className="font-display text-sm font-bold text-[#0a0a0c]">info@eventostickets.com</span>
          </span>
        </a>
        <div className="flex items-center gap-4 px-4 py-5 sm:px-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#0a0a0c] bg-white">
            <MapPin className="h-6 w-6 text-[#0a0a0c]" />
          </span>
          <span>
            <span className="block font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Correo postal</span>
            <span className="text-sm font-semibold leading-snug text-[#0a0a0c]">Carrer de Tanger 86, 08018 Barcelona, España</span>
          </span>
        </div>
        <div className="flex items-center gap-4 px-4 py-5 sm:px-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#0a0a0c] bg-white">
            <Clock className="h-6 w-6 text-[#0a0a0c]" />
          </span>
          <span>
            <span className="block font-display text-[10px] font-bold uppercase tracking-widest text-[#0a0a0c]/70">Horario de respuesta</span>
            <span className="text-sm font-semibold text-[#0a0a0c]">Lun–Vie · 1–2 días hábiles</span>
          </span>
        </div>
      </div>
    </div>
  )
}
