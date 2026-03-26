import { getCreatorsByCategory } from '@/data/creators'
import { CultureCard } from '@/components/CultureCard'
import { DesignerCard } from '@/components/DesignerCard'
import { DESIGNERS } from '@/data/designers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion | 121212.culture',
  description: 'Black fashion from couture to streetwear. The designers shaping the future.',
}

export default function FashionPage() {
  const creators = getCreatorsByCategory('fashion')

  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Category</span>
          <h1 className="heading-primary mb-4">Fashion</h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            From couture to streetwear, from Lagos to London. The designers, stylists, and
            visionaries redefining what fashion looks like when Black culture leads.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Featured Designers</span>
          <h2 className="heading-secondary mb-10">Designers to Watch</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGNERS.map((designer) => (
              <DesignerCard key={designer.name} designer={designer} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label block mb-4">Fashion Creators</span>
          <h2 className="heading-secondary mb-10">The Work</h2>

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
