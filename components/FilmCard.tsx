import Image from 'next/image'
import type { Film } from '@/data/films'

interface FilmCardProps {
  film: Film
}

export function FilmCard({ film }: FilmCardProps) {
  return (
    <div className="bg-background-mid border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-red/30 hover:shadow-xl group">
      <div className="relative overflow-hidden aspect-[2/3]">
        <Image
          src={film.image}
          alt={film.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 bg-cat-film text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {film.genre}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-white mb-1">{film.title}</h3>
        <p className="text-white/50 text-sm mb-2">
          {film.director} &middot; {film.year}
        </p>
        <p className="text-white/40 text-sm leading-relaxed line-clamp-3">{film.description}</p>
      </div>
    </div>
  )
}
