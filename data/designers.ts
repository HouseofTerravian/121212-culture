export interface Designer {
  name: string
  location: string
  style: string
  description: string
  image: string
}

export const DESIGNERS: Designer[] = [
  {
    name: 'Amara Cole',
    location: 'Lagos',
    style: 'Contemporary Couture',
    description:
      'Amara fuses traditional Nigerian craftsmanship with modern silhouettes, creating couture pieces that honor heritage while commanding the global stage.',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop',
  },
  {
    name: 'DeShawn Price',
    location: 'Atlanta',
    style: 'Luxury Streetwear',
    description:
      'DeShawn redefines luxury streetwear with elevated fabrics, architectural cuts, and a design language rooted in Southern Black culture.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
  },
  {
    name: 'Fatou Diallo',
    location: 'Dakar',
    style: 'Sustainable African Fashion',
    description:
      'Fatou champions sustainable fashion through locally sourced materials and zero-waste production, proving that African fashion leads the future of conscious design.',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop',
  },
  {
    name: 'Zuri Monroe',
    location: 'London',
    style: 'Avant-Garde',
    description:
      'Zuri pushes the boundaries of wearable art with sculptural forms and experimental textiles that challenge conventional definitions of fashion.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop',
  },
]
