import Image from 'next/image'
import Link from 'next/link'
import { getCategoryBySlug } from '@/data/categories'
import type { Creator } from '@/data/creators'

interface CultureCardProps {
  creator: Creator
}

export function CultureCard({ creator }: CultureCardProps) {
  const category = getCategoryBySlug(creator.category)

  return (
    <Link href={`/${creator.category}`} className="block mb-6 break-inside-avoid group">
      <div className="bg-background-mid border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-red/30 hover:shadow-xl">
        <div className="relative overflow-hidden">
          <Image
            src={creator.image}
            alt={creator.title}
            width={600}
            height={750}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {category && (
            <span
              className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: category.color }}
            >
              {category.label}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-bold text-white mb-1">{creator.title}</h3>
          <p className="text-white/50 text-sm mb-2">{creator.name}</p>
          <p className="text-white/30 text-xs uppercase tracking-wider">{creator.medium}</p>
        </div>
      </div>
    </Link>
  )
}
