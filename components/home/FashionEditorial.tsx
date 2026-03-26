import { DesignerCard } from '@/components/DesignerCard'
import { DESIGNERS } from '@/data/designers'

export function FashionEditorial() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container-custom">
        <span className="section-label block mb-4">Fashion</span>
        <h2 className="heading-secondary mb-10">This Season&apos;s Designers to Watch</h2>
      </div>

      <div className="container-custom">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide px-4 md:px-8">
          {DESIGNERS.map((designer) => (
            <DesignerCard key={designer.name} designer={designer} />
          ))}
        </div>
      </div>
    </section>
  )
}
