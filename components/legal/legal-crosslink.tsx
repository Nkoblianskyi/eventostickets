import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface LegalCrosslinkProps {
  children: ReactNode
  href: string
  label: string
}

export function LegalCrosslink({ children, href, label }: LegalCrosslinkProps) {
  return (
    <div className="border-4 border-[#0a0a0c] bg-[#0a0a0c] p-6 md:p-8">
      <p className="text-sm leading-relaxed text-[#e8e4dc]">{children}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 border-2 border-[#c8ff00] bg-[#c8ff00] px-5 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#d4ff33]"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
