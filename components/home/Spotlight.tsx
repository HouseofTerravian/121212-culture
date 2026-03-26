import Image from 'next/image'
import Link from 'next/link'
import { getSpotlight } from '@/data/creators'
import { ArrowRight } from 'lucide-react'

export function Spotlight() {
  const creator = getSpotlight()

  return (
    <section className="section-padding border-t border-white/5">
      <div className="container-custom">
        <span className="section-label block mb-4">Creator of the Month</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="relative overflow-hidden rounded-xl border border-brand-gold/20">
            <Image
              src={creator.image}
              alt={creator.name}
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-[0.25em] border border-brand-gold/30 rounded px-3 py-1.5 w-fit mb-6">
              Spotlight
            </span>

            <h2 className="heading-secondary mb-2">{creator.name}</h2>
            <p className="text-white/50 text-lg mb-1">{creator.title}</p>
            {creator.location && (
              <p className="text-white/30 text-sm mb-8">{creator.location}</p>
            )}

            <div className="space-y-4 mb-8 border-l-2 border-brand-gold/30 pl-6">
              <p className="text-white/60 leading-relaxed">{creator.description}</p>
              {creator.bio && (
                <p className="text-white/40 leading-relaxed text-sm">
                  {creator.bio.slice(0, 300)}...
                </p>
              )}
            </div>

            <Link
              href="/spotlight"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-dim font-semibold text-sm uppercase tracking-wider transition-colors duration-300 group"
            >
              View Full Spotlight
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
