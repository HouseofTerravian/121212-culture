import { getCreatorsByCategory } from '@/data/creators'
import { CultureCard } from '@/components/CultureCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design | 121212.culture',
  description: 'Black design excellence. Brand, product, UX, and visual identity.',
}

export default function DesignPage() {
  const creators = getCreatorsByCategory('design')

  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Category</span>
          <h1 className="heading-primary mb-4">Design</h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Brand identity, product design, UX, and visual systems — built by Black designers
            who understand that design is culture made functional.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {creators.map((creator) => (
              <CultureCard key={creator.slug} creator={creator} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
