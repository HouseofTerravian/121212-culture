import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1600&h=900&fit=crop"
        alt="Black creativity"
        fill
        priority
        className="object-cover"
      />

      {/* Layer 1: Dark base overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Layer 2: Red gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-red/20 via-transparent to-transparent" />

      {/* Layer 3: Dark vignette from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />

      {/* Layer 4: Noise texture feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="section-label inline-block mb-8 border border-brand-gold/20 px-4 py-2 rounded-full">
            121212 Empire &mdash; Culture Division
          </span>

          <h1 className="heading-primary mb-6 text-balance">
            Black Creativity is the
            <br />
            <span className="text-brand-red">Standard.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Art. Fashion. Film. Design. The culture belongs to us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="red" size="lg" as="a" href="#culture-grid">
              Explore the Culture
            </Button>
            <Button variant="outline" size="lg" as="a" href="/submit">
              Submit Your Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  )
}
