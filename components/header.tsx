'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/sobre-nosotros', label: 'Quiénes somos' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contacto' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-4 border-[#ff3d00] bg-[#0a0a0c] shadow-[0_8px_32px_rgba(0,0,0,0.55)]">
      <div className="relative mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 et-stripes opacity-40 pointer-events-none" aria-hidden />
        <Logo variant="headerDark" href="/" />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-display px-4 py-2 text-sm font-semibold uppercase tracking-wide transition',
                pathname === item.href
                  ? 'bg-[#d6b24c] text-[#0a0a0c]'
                  : 'text-[#e8e4dc] hover:bg-[#1a1a1e] hover:text-[#d6b24c]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/catalogo"
            className="hidden skew-x-[-6deg] bg-[#ff3d00] px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[4px_4px_0_#d6b24c] transition hover:bg-[#e63500] sm:inline-block"
          >
            <span className="inline-block skew-x-[6deg]">Comparar</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-[#d6b24c] bg-[#141416] text-[#d6b24c] md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#2a2a2f] bg-[#141416] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Menú móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'font-display border-l-4 py-3 pl-4 text-base font-bold uppercase tracking-wide',
                  pathname === item.href ? 'border-[#d6b24c] bg-[#0a0a0c] text-[#d6b24c]' : 'border-transparent text-[#e8e4dc]'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/catalogo"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[#ff3d00] py-3 text-center font-display text-sm font-bold uppercase text-white"
            >
              Ir al catálogo
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
