import Image from 'next/image'
import type { Designer } from '@/data/designers'

interface DesignerCardProps {
  designer: Designer
}

export function DesignerCard({ designer }: DesignerCardProps) {
  return (
    <div className="min-w-[300px] snap-start bg-background-mid border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-red/30 hover:shadow-xl group">
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={designer.image}
          alt={designer.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-white mb-1">{designer.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span className="text-white/50 text-sm">{designer.location}</span>
        </div>
        <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-wider border border-brand-gold/20 rounded px-2 py-0.5 mb-3">
          {designer.style}
        </span>
        <p className="text-white/40 text-sm leading-relaxed">{designer.description}</p>
      </div>
    </div>
  )
}
