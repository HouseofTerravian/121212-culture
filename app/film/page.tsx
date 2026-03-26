import { getCreatorsByCategory } from '@/data/creators'
import { CultureCard } from '@/components/CultureCard'
import { FilmCard } from '@/components/FilmCard'
import { FILMS } from '@/data/films'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Film | 121212.culture',
  description: 'Black cinema and cinematography. The stories that shape the world.',
}

export default function FilmPage() {
  const creators = getCreatorsByCategory('film')

  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Category</span>
          <h1 className="heading-primary mb-4">Film</h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Black cinema and cinematography. From independent shorts to feature-length epics —
            the stories that shape the world, told through our lens.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Now Screening</span>
          <h2 className="heading-secondary mb-10">Featured Films</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FILMS.map((film) => (
              <FilmCard key={film.slug} film={film} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <span className="section-label block mb-4">Film Creators</span>
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
