import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="border-t-8 border-[#0a0a0c] bg-[#e8e4dc] text-[#0a0a0c]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <Logo variant="footer" href="/" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#2a2a2f]">
            <strong>eventostickets.com</strong> es un sitio de información: comparamos precios publicados por partners de
            venta de entradas. No somos taquilla, no cobramos comisión al usuario por navegar y no gestionamos datos de pago.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Secciones</p>
          <ul className="mt-4 space-y-2 text-sm font-medium">
            <li>
              <Link href="/catalogo" className="hover:text-[#ff3d00]">
                Catálogo deportivo
              </Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="hover:text-[#ff3d00]">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-[#ff3d00]">
                Plataformas partners
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ff3d00]">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Legal</p>
          <ul className="mt-4 space-y-2 text-sm font-medium">
            <li>
              <Link href="/privacidad" className="hover:text-[#ff3d00]">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-[#ff3d00]">
                Política de cookies
              </Link>
            </li>
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm text-[#2a2a2f]">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#ff3d00]" />
            <span>
              <a href="mailto:info@eventostickets.com" className="font-semibold hover:underline">
                info@eventostickets.com
              </a>
              <br />
              <span className="text-xs text-[#5c5c62]">Carrer de Tanger 86, 08018 Barcelona, España</span>
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[#0a0a0c] py-4 text-center text-[11px] text-[#8a8a8e]">
        © {new Date().getFullYear()} eventostickets · eventostickets.com — Precios orientativos. Sin venta en este dominio.
      </div>
    </footer>
  )
}
