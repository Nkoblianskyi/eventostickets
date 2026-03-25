'use client'

import Link from 'next/link'
import Image from 'next/image'

type LogoVariant = 'header' | 'headerDark' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  href?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'header', className = '', href = '/', showWordmark = true }: LogoProps) {
  const isFooter = variant === 'footer'
  const isHeaderDark = variant === 'headerDark'

  const wordClass = isHeaderDark ? 'text-white' : 'text-[#0a0a0c]'

  const iconBox = isHeaderDark ? 'bg-[#c8ff00]' : isFooter ? 'border-2 border-[#0a0a0c] bg-[#c8ff00]' : 'border-2 border-[#0a0a0c] bg-[#c8ff00]'

  const content = (
    <>
        <Image src="/favicon.ico" width={22} height={22} alt="" className="opacity-90" />
      {showWordmark && (
        <span className={`font-display text-xl font-bold uppercase tracking-tight sm:text-2xl ${wordClass}`}>
          eventos<span className="text-[#ff3d00]">tickets</span>
        </span>
      )}
    </>
  )

  const wrapClassName = `flex items-center gap-2.5 shrink-0 ${className}`

  if (href) {
    return (
      <Link href={href} className={wrapClassName} aria-label="eventostickets — inicio">
        {content}
      </Link>
    )
  }

  return <div className={wrapClassName}>{content}</div>
}
