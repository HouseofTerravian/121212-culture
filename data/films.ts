export interface Film {
  slug: string
  title: string
  director: string
  year: number
  genre: string
  description: string
  image: string
}

export const FILMS: Film[] = [
  {
    slug: 'the-seventh-sun',
    title: 'The Seventh Sun',
    director: 'Selena Okafor',
    year: 2025,
    genre: 'Drama',
    description:
      'A multi-generational saga that traces the spiritual inheritance of a West African family across seven decades, revealing how ancestral trauma and ancestral power coexist in the same bloodline.',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=900&fit=crop',
  },
  {
    slug: 'homeward',
    title: 'Homeward',
    director: 'Malik Tunde',
    year: 2024,
    genre: 'Documentary',
    description:
      'An intimate documentary following three families as they navigate the complex emotional landscape of returning to the African continent after generations in the diaspora.',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=900&fit=crop',
  },
  {
    slug: 'kingdom-of-nines',
    title: 'Kingdom of Nines',
    director: 'Jordan Achebe',
    year: 2025,
    genre: 'Sci-Fi',
    description:
      'Set in a near-future Lagos, this Afrofuturist thriller imagines a world where ancient Yoruba mathematics hold the key to humanity\'s survival against a digital extinction event.',
    image:
      'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=600&h=900&fit=crop',
  },
]
