import { Hero } from '@/components/home/Hero'
import { Spotlight } from '@/components/home/Spotlight'
import { CultureGrid } from '@/components/home/CultureGrid'
import { FashionEditorial } from '@/components/home/FashionEditorial'
import { FilmSection } from '@/components/home/FilmSection'
import { SubmitCTA } from '@/components/home/SubmitCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Spotlight />
      <CultureGrid />
      <FashionEditorial />
      <FilmSection />
      <SubmitCTA />
    </>
  )
}
