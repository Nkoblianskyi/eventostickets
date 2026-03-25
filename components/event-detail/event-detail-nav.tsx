import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export function EventDetailNav() {
  return (
    <div className="border-b-4 border-[#0a0a0c] bg-[#c8ff00]">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:text-[#ff3d00]"
        >
          <ChevronLeft className="h-4 w-4" />
          Catálogo
        </Link>
      </div>
    </div>
  )
}
