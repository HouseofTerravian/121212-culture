import { SubmitForm } from '@/components/SubmitForm'
import { Users, Newspaper, Globe } from 'lucide-react'

const REASONS = [
  {
    icon: Users,
    title: 'An Audience That Actually Cares',
    description:
      'Your work reaches a community that understands, appreciates, and elevates Black creativity.',
  },
  {
    icon: Newspaper,
    title: 'Editorial Treatment. Not an Algorithm.',
    description:
      'Every featured creator receives thoughtful editorial presentation — not a feed position determined by engagement metrics.',
  },
  {
    icon: Globe,
    title: 'Part of the 121212 Empire',
    description:
      'Join a growing network of Black-owned platforms spanning culture, business, health, education, and media.',
  },
]

export function SubmitCTA() {
  return (
    <section className="border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Form */}
        <div className="bg-brand-red p-8 md:p-16">
          <span className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] block mb-4">
            Submit Your Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
            The culture is looking for you.
          </h2>
          <SubmitForm />
        </div>

        {/* Right: Reasons */}
        <div className="bg-background p-8 md:p-16 flex flex-col justify-center">
          <span className="section-label block mb-4">Why Submit</span>
          <h3 className="heading-secondary mb-10">Your work deserves this.</h3>

          <div className="space-y-8">
            {REASONS.map((reason) => (
              <div key={reason.title} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-background-mid border border-white/10 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{reason.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
