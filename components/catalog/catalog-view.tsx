'use client'

import { useMemo, useState } from 'react'
import { events } from '@/lib/events-data'
import type { CatalogCity, CatalogSort } from '@/lib/catalog-constants'
import { CatalogHero } from '@/components/catalog/catalog-hero'
import { CatalogControls } from '@/components/catalog/catalog-controls'
import { CatalogResults } from '@/components/catalog/catalog-results'
import { CatalogRail } from '@/components/catalog/catalog-rail'

function sortEvents(list: typeof events, sort: CatalogSort) {
  const copy = [...list]
  if (sort === 'title') {
    copy.sort((a, b) => a.title.localeCompare(b.title, 'es'))
    return copy
  }
  const dir = sort === 'date-asc' ? 1 : -1
  copy.sort((a, b) => dir * a.date.localeCompare(b.date))
  return copy
}

export function CatalogView() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState<CatalogCity>('Todas')
  const [sort, setSort] = useState<CatalogSort>('date-asc')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return events.filter((e) => {
      const qMatch = !q || [e.title, e.city, e.venue, e.artist ?? ''].some((v) => v.toLowerCase().includes(q))
      const cityMatch = city === 'Todas' || e.city === city
      return qMatch && cityMatch
    })
  }, [query, city])

  const ordered = useMemo(() => sortEvents(filtered, sort), [filtered, sort])

  const railPreview = useMemo(() => {
    const byDate = [...filtered].sort((a, b) => a.date.localeCompare(b.date))
    return byDate.slice(0, 5)
  }, [filtered])

  return (
    <>
      <CatalogHero filteredCount={filtered.length} totalCount={events.length} />
      <CatalogControls
        query={query}
        onQueryChange={setQuery}
        city={city}
        onCityChange={setCity}
        sort={sort}
        onSortChange={setSort}
        onReset={() => {
          setQuery('')
          setCity('Todas')
          setSort('date-asc')
        }}
      />

      <section className="bg-[#f2efe8] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_280px]">
            <CatalogResults events={ordered} />
            <CatalogRail preview={railPreview} />
          </div>
        </div>
      </section>
    </>
  )
}
