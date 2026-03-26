'use client'

import { clsx } from 'clsx'
import { CATEGORIES } from '@/data/categories'

interface CategoryFilterProps {
  active: string
  onChange: (slug: string) => void
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="sticky top-[70px] z-40 bg-background/95 backdrop-blur-md py-4 border-b border-white/5">
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => onChange('all')}
            className={clsx(
              'shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
              active === 'all'
                ? 'bg-brand-red text-white'
                : 'bg-background-mid text-white/60 hover:text-white hover:bg-background-mid/80'
            )}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onChange(cat.slug)}
              className={clsx(
                'shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                active === cat.slug
                  ? 'bg-brand-red text-white'
                  : 'bg-background-mid text-white/60 hover:text-white hover:bg-background-mid/80'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
