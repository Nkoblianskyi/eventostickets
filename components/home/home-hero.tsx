import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden border-b-4 border-[#0a0a0c] bg-[#e8e4dc]">
      {/* Декор лише: часткове коло + вертикальна смуга — не сітка й не шум */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-[#ff3d00]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-1.5 bg-[#c8ff00]" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="flex items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-10">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.35em] text-[#0a0a0c]">eventostickets</span>
          <Link
            href="/catalogo"
            className="border-2 border-[#0a0a0c] bg-transparent px-4 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#0a0a0c] hover:text-[#c8ff00]"
          >
            Ir al catálogo
          </Link>
        </header>

        <div className="flex flex-1 flex-col justify-center px-4 pb-8 sm:px-6 lg:px-10 lg:pb-12">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.45em] text-[#ff3d00]">Solo deporte · sin caja registradora aquí</p>

          <h1 className="mt-6 max-w-[14ch] font-[family-name:var(--font-dm),ui-sans-serif] text-[clamp(3.25rem,14vw,8.5rem)] font-black leading-[0.88] tracking-[-0.045em] text-[#0a0a0c]">
            Compara.
            <span className="mt-1 block font-display text-[0.42em] font-bold uppercase tracking-[-0.02em] text-[#ff3d00] md:text-[0.38em]">
              Después decides
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-snug text-[#3d3d44] md:text-xl">
            Un sitio para ver <strong className="font-semibold text-[#0a0a0c]">rangos entre partners</strong>, leer el contexto y saltar
            a la web que elijas. Aquí no pagas: el importe real lo fija siempre quien vende la entrada.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/catalogo"
              className="inline-flex w-fit items-center justify-center bg-[#0a0a0c] px-10 py-5 font-display text-sm font-bold uppercase tracking-wide text-[#c8ff00] transition hover:bg-[#ff3d00] hover:text-white"
            >
              Abrir eventos
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center border-2 border-[#0a0a0c] bg-transparent px-10 py-5 font-display text-sm font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#0a0a0c] hover:text-[#e8e4dc]"
            >
              Escribirnos
            </Link>
          </div>
        </div>

        <footer className="border-t-4 border-[#0a0a0c] bg-[#0a0a0c] px-4 py-8 sm:px-6 lg:px-10">
          <p className="max-w-4xl font-display text-xs font-bold uppercase leading-relaxed tracking-wide text-[#c8ff00] md:text-sm">
            No vendemos entradas en este dominio · No tratamos datos de pago · Los precios de la ficha son orientativos
          </p>
          <p className="mt-3 font-[family-name:var(--font-dm),ui-sans-serif] text-xs text-[#8a8a8e]">
            Más detalle en{' '}
            <Link href="/privacidad" className="text-[#e8e4dc] underline underline-offset-2 hover:text-[#c8ff00]">
              privacidad
            </Link>{' '}
            y{' '}
            <Link href="/cookies" className="text-[#e8e4dc] underline underline-offset-2 hover:text-[#c8ff00]">
              cookies
            </Link>
            .
          </p>
        </footer>
      </div>
    </section>
  )
}
