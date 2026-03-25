'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const CONSENT_KEY = 'eventostickets_cookie_consent_v2'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookies en eventostickets"
      className="fixed bottom-0 left-0 right-0 z-[60] p-0 sm:p-4 sm:flex sm:justify-center"
    >
      <div className="w-full max-w-4xl overflow-hidden border border-[#2a2a2f] border-b-0 bg-[#141416] shadow-[0_-12px_40px_rgba(0,0,0,0.6)] sm:border-b sm:border-[#c8ff00] sm:shadow-2xl">
        <div className="flex flex-col gap-0 sm:flex-row">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 border-b border-[#2a2a2f] bg-[#0a0a0c] px-4 py-2">
              <Cookie className="h-4 w-4 text-[#c8ff00]" aria-hidden />
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">Cookies</span>
            </div>
            <div className="px-4 py-4 sm:py-5">
              <p className="font-display text-sm font-bold text-white">Tu privacidad importa</p>
              <p className="mt-2 text-xs leading-relaxed text-[#b8b8bc]">
                Usamos cookies necesarias para el funcionamiento del sitio y, si lo aceptas, analítica agregada para mejorar
                la experiencia. No vendemos tus datos. Más información en la{' '}
                <Link href="/cookies" className="font-semibold text-[#ff3d00] underline underline-offset-2" onClick={() => setVisible(false)}>
                  política de cookies
                </Link>{' '}
                y la{' '}
                <Link href="/privacidad" className="font-semibold text-[#ff3d00] underline underline-offset-2" onClick={() => setVisible(false)}>
                  privacidad
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 border-t border-[#2a2a2f] p-4 sm:w-56 sm:flex-col sm:border-l sm:border-t-0 sm:justify-center">
            <button
              type="button"
              onClick={decline}
              className="flex-1 border-2 border-[#5c5c62] bg-transparent px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#e8e4dc] transition hover:border-[#c8ff00] hover:text-[#c8ff00] sm:flex-none"
              aria-label="Rechazar cookies opcionales"
            >
              <X className="mr-1 inline h-4 w-4 sm:hidden" />
              Solo esenciales
            </button>
            <button
              type="button"
              onClick={accept}
              className="flex-1 bg-[#c8ff00] px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#d4ff33] sm:flex-none"
              aria-label="Aceptar cookies"
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
