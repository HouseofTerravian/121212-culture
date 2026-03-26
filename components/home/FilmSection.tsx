import { FilmCard } from '@/components/FilmCard'
import { FILMS } from '@/data/films'

export function FilmSection() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container-custom">
        <span className="section-label block mb-4">Film</span>
        <h2 className="heading-secondary mb-10">Now Screening</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FILMS.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </div>
    </section>
  )
}
