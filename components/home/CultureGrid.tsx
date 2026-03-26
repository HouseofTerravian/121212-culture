'use client'

import { useState } from 'react'
import { CategoryFilter } from '@/components/CategoryFilter'
import { CultureCard } from '@/components/CultureCard'
import { getAllCreators } from '@/data/creators'

export function CultureGrid() {
  const [active, setActive] = useState('all')
  const creators = getAllCreators()

  const filtered =
    active === 'all' ? creators : creators.filter((c) => c.category === active)

  return (
    <section id="culture-grid" className="border-t border-white/5">
      <CategoryFilter active={active} onChange={setActive} />

      <div className="section-padding">
        <div className="container-custom">
          <span className="section-label block mb-4">The Work</span>
          <h2 className="heading-secondary mb-10">Featured Creators</h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {filtered.map((creator) => (
              <CultureCard key={creator.slug} creator={creator} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-white/30 py-16">
              No creators found in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
