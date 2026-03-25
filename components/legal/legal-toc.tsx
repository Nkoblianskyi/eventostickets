interface TocItem {
  id: string
  label: string
}

interface LegalTocProps {
  title: string
  items: TocItem[]
}

export function LegalToc({ title, items }: LegalTocProps) {
  return (
    <nav className="lg:sticky lg:top-28" aria-label="En esta página">
      <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff3d00]">{title}</p>
      <ul className="mt-4 space-y-0 border-2 border-[#0a0a0c] bg-white">
        {items.map((item, i) => (
          <li key={item.id} className={i > 0 ? 'border-t-2 border-[#0a0a0c]' : ''}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-3 px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-[#0a0a0c] transition hover:bg-[#c8ff00]"
            >
              <span className="text-[#ff3d00]">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
