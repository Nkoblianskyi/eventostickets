export function DisclaimerBanner() {
  return (
    <div
      className="border-b-2 border-[#c8ff00] bg-[#0a0a0c] px-4 py-2.5 text-center text-[11px] font-medium leading-snug text-[#e8e4dc] sm:text-xs"
      role="note"
    >
      <strong className="font-display font-semibold tracking-wide text-[#c8ff00]">Aviso legal:</strong>{' '}
      eventostickets solo muestra una <strong>comparativa orientativa de precios</strong> entre plataformas.{' '}
      <strong>No vendemos entradas</strong>, <strong>no cobramos</strong> en este sitio y{' '}
      <strong>no recopilamos datos de pago</strong> (tarjetas, cuentas bancarias). El pago se realiza siempre en la web del
      partner. Los importes pueden <strong>diferir del precio nominal</strong> o del valor de taquilla por gastos, demanda o
      políticas del vendedor.
    </div>
  )
}
