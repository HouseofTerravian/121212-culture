export interface Creator {
  slug: string
  name: string
  title: string
  category: string
  medium: string
  description: string
  image: string
  location?: string
  isSpotlight?: boolean
  bio?: string
}

const CREATORS: Creator[] = [
  {
    slug: 'marcus-bell',
    name: 'Marcus Bell',
    title: 'Frequencies of the Ancestral Self',
    category: 'art',
    medium: 'Oil & Resin on Canvas',
    description:
      'A series exploring the vibrational memory embedded in Black identity through layered oil and resin compositions that blur the line between abstraction and portraiture.',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop',
  },
  {
    slug: 'nia-james',
    name: 'Nia James (Zora)',
    title: 'Draping in Diasporic Gold',
    category: 'fashion',
    medium: 'West African Textiles & Couture',
    description:
      'Nia reinterprets West African textile traditions through a contemporary couture lens, creating garments that honor the diaspora while pushing fashion forward.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1000&fit=crop',
  },
  {
    slug: 'kofi-asante',
    name: 'Kofi Asante',
    title: 'Meridian',
    category: 'film',
    medium: '35mm Cinematography',
    description:
      'A haunting visual poem shot entirely on 35mm film, tracing the invisible meridian lines that connect the African continent to its scattered children.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1000&fit=crop',
  },
  {
    slug: 'studio-osei',
    name: 'Studio Osei',
    title: 'Brand Identity for the Next Generation',
    category: 'design',
    medium: 'Brand & Visual Identity',
    description:
      'Studio Osei crafts brand identities that center Black aesthetics and cultural intelligence, building visual systems for the companies shaping tomorrow.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=1000&fit=crop',
  },
  {
    slug: 'jade-mensah',
    name: 'Jade Mensah',
    title: 'Soft Power: A Portrait Series',
    category: 'photography',
    medium: 'Digital & Medium Format Photography',
    description:
      'Spanning 100 cities across four continents, this portrait series captures the quiet power of Black women in moments of unguarded tenderness.',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop',
  },
  {
    slug: 'adaeze-nwosu',
    name: 'Adaeze Nwosu',
    title: 'Weight of Water, Weight of Memory',
    category: 'art',
    medium: 'Mixed Media Installation',
    description:
      'Exhibited at the Tate Modern, this installation uses water, light, and reclaimed materials to interrogate the weight of ancestral memory in contemporary Black life.',
    image:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=1000&fit=crop',
  },
  {
    slug: 'casa-noir',
    name: 'Casa Noir',
    title: 'Street Luxury: The Fall Drop',
    category: 'fashion',
    medium: 'Streetwear & Ready-to-Wear',
    description:
      'Casa Noir bridges the gap between street culture and luxury fashion, delivering collections that are unapologetically Black and undeniably premium.',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop',
  },
  {
    slug: 'kwame-asiedu',
    name: 'Kwame Asiedu',
    title: 'Designing Technology That Sees Us',
    category: 'design',
    medium: 'UX/UI & Product Design',
    description:
      'Kwame leads a design practice focused on building digital products that center Black users, challenging the assumption that technology is culturally neutral.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
  },
]

const SPOTLIGHT: Creator = {
  slug: 'imani-rhodes',
  name: 'Imani Rhodes',
  title: 'Visual Artist & Muralist',
  category: 'art',
  medium: 'Murals, Large-Scale Installation, Acrylic',
  location: 'Atlanta, Georgia',
  isSpotlight: true,
  description:
    'Imani Rhodes transforms urban landscapes into living galleries. Her large-scale murals — spanning buildings, bridges, and public spaces — weave together ancestral symbolism, contemporary Black identity, and the raw energy of the communities she paints for.',
  bio: 'Born and raised in Atlanta, Imani began painting at fourteen, tagging walls in the Old Fourth Ward before formal training at SCAD. Her breakthrough came with "Roots Run Deep," a 60-foot mural commissioned by the city of Atlanta that depicted three generations of Black women rooted in Georgia red clay. Since then, her work has appeared in twelve cities across the U.S. and three countries in West Africa. She describes her practice as "painting the ancestors back into the landscape." Her current project, "The Cartography of Us," maps Black migration patterns through a series of interconnected murals across the American South. Each mural is developed in collaboration with local communities, incorporating their stories, textures, and histories into the visual narrative. Imani does not paint for galleries. She paints for the people who walk past her work every day — the ones who see themselves reflected in color, scale, and spirit.',
  image:
    'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=1000&fit=crop',
}

export function getAllCreators(): Creator[] {
  return CREATORS
}

export function getCreatorsByCategory(category: string): Creator[] {
  return CREATORS.filter((c) => c.category === category)
}

export function getSpotlight(): Creator {
  return SPOTLIGHT
}

export function getCreatorBySlug(slug: string): Creator | undefined {
  if (slug === SPOTLIGHT.slug) return SPOTLIGHT
  return CREATORS.find((c) => c.slug === slug)
}
