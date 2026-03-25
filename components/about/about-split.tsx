export function AboutSplit() {
  return (
    <section className="border-y-4 border-[#0a0a0c] bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="border-b-4 border-[#0a0a0c] bg-[#c8ff00] px-6 py-14 md:px-10 md:py-20 lg:border-b-0 lg:border-r-4">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#0a0a0c]/70">Precios</p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-[#0a0a0c] md:text-3xl">
            Por qué no coincide siempre con el nominal
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#2a2a2f]">
            Los importes que ves son <strong>orientativos</strong> y pueden incluir comisiones, gastos de gestión, seguros
            opcionales, dinámica de demanda o campañas del partner. El <strong>precio nominal</strong> o de taquilla puede no
            coincidir con lo que ofrece cada plataforma en un momento dado.
          </p>
        </div>
        <div className="bg-[#0a0a0c] px-6 py-14 md:px-10 md:py-20">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00]">Responsabilidad</p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
            Dónde acaba nuestra responsabilidad
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#b8b8bc]">
            eventostickets no forma parte del contrato de compra. Devoluciones, cambios de fecha y reclamaciones de pago deben
            dirigirse al <strong className="text-[#c8ff00]">sitio donde completaste el pago</strong>. Nosotros solo facilitamos
            la comparación previa.
          </p>
        </div>
      </div>
    </section>
  )
}
