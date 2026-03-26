import { getCreatorsByCategory } from '@/data/creators'
import { CultureCard } from '@/components/CultureCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Art | 121212.culture',
  description: 'Visual art from the diaspora. Painting, sculpture, installation, mixed media.',
}

export default function ArtPage() {
  const creators = getCreatorsByCategory('art')

  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Category</span>
          <h1 className="heading-primary mb-4">Art</h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Visual art from the diaspora. Painting, sculpture, installation, mixed media — the
            full spectrum of Black artistic expression, curated with reverence.
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
