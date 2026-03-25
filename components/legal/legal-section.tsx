import type { ReactNode } from 'react'

type SectionTone = 'white' | 'lime' | 'dark' | 'outline' | 'cream'

interface LegalSectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
  tone?: SectionTone
}

const toneClass: Record<SectionTone, string> = {
  white: 'border-2 border-[#0a0a0c] bg-white shadow-[6px_6px_0_#0a0a0c]',
  lime: 'border-2 border-[#0a0a0c] bg-[#c8ff00] shadow-[6px_6px_0_#ff3d00]',
  dark: 'border-2 border-[#ff3d00] bg-[#141416] text-[#e8e4dc]',
  outline: 'border-2 border-dashed border-[#0a0a0c] bg-[#e8e4dc]',
  cream: 'border-2 border-[#0a0a0c] bg-[#f2efe8] shadow-[6px_6px_0_#c8ff00]',
}

export function LegalSection({ id, index, title, children, tone = 'white' }: LegalSectionProps) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-[#0a0a0c]'
  const indexColor = tone === 'dark' ? 'text-[#c8ff00]' : 'text-[#ff3d00]'
  const bodyClass = tone === 'dark' ? 'text-[#c8c8cc]' : 'text-[#2a2a2f]'
  const linkClass = tone === 'dark' ? '[&_a]:text-[#c8ff00]' : '[&_a]:text-[#ff3d00]'

  return (
    <article id={id} className={`scroll-mt-28 p-6 md:p-8 ${toneClass[tone]}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <span className={`font-display text-4xl font-bold leading-none sm:shrink-0 ${indexColor}`}>{index}</span>
        <div className="min-w-0 flex-1">
          <h2 className={`font-display text-lg font-bold uppercase tracking-wide ${titleColor}`}>{title}</h2>
          <div
            className={`mt-4 text-sm leading-relaxed [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-2 ${linkClass} ${bodyClass}`}
          >
            {children}
          </div>
        </div>
      </div>
    </article>
  )
}
