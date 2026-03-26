import Image from 'next/image'
import { getSpotlight } from '@/data/creators'
import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotlight | 121212.culture',
  description: 'Creator of the Month — the artist the culture needs to see right now.',
}

export default function SpotlightPage() {
  const creator = getSpotlight()
  const bioParagraphs = creator.bio?.split('. ').reduce<string[]>((acc, sentence, i, arr) => {
    const idx = Math.floor(i / Math.ceil(arr.length / 3))
    if (!acc[idx]) acc[idx] = ''
    acc[idx] += sentence + (i < arr.length - 1 ? '. ' : '')
    return acc
  }, []) || []

  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Creator of the Month</span>
          <h1 className="heading-primary mb-2">{creator.name}</h1>
          <p className="text-white/50 text-xl">{creator.title}</p>
          {creator.location && (
            <div className="flex items-center gap-2 mt-3 text-white/30">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{creator.location}</span>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-xl border border-brand-gold/20">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  width={1000}
                  height={1250}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-[0.25em] border border-brand-gold/30 rounded px-3 py-1.5 w-fit mb-6">
                Spotlight
              </span>

              <h2 className="heading-secondary mb-2">The Story</h2>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-8">
                {creator.medium}
              </p>

              <div className="space-y-6 border-l-2 border-brand-gold/30 pl-6">
                <p className="text-white/60 leading-relaxed text-lg">{creator.description}</p>
                {bioParagraphs.map((para, i) => (
                  <p key={i} className="text-white/40 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Work Samples</span>
          <h2 className="heading-secondary mb-10">Selected Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=600&fit=crop',
            ].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl border border-white/10 aspect-square group"
              >
                <Image
                  src={src}
                  alt={`${creator.name} work sample ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
