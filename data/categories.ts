export interface Category {
  slug: string
  label: string
  color: string
}

export const CATEGORIES: Category[] = [
  { slug: 'art', label: 'Art', color: '#c41e3a' },
  { slug: 'fashion', label: 'Fashion', color: '#2d5f3f' },
  { slug: 'film', label: 'Film', color: '#8b6914' },
  { slug: 'design', label: 'Design', color: '#1a4a7a' },
  { slug: 'photography', label: 'Photography', color: '#5a3a6a' },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}
