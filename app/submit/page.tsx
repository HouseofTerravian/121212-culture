import { SubmitForm } from '@/components/SubmitForm'
import { Users, Newspaper, Globe } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit Your Work | 121212.culture',
  description: 'Submit your creative work for editorial consideration on 121212.culture.',
}

const BENEFITS = [
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

export default function SubmitPage() {
  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">For Creators</span>
          <h1 className="heading-primary mb-4">Submit Your Work</h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            We are building the definitive platform for Black creativity. If your work speaks to
            the culture, we want to see it.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-secondary mb-8">Tell us about your work.</h2>
              <SubmitForm />
            </div>

            <div className="flex flex-col justify-center">
              <span className="section-label block mb-4">Why Submit</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-8">
                Your work deserves this.
              </h3>

              <div className="space-y-8">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-background-mid border border-white/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
