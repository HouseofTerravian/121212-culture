import Link from 'next/link'

const EXPLORE_LINKS = [
  { href: '/art', label: 'Art' },
  { href: '/fashion', label: 'Fashion' },
  { href: '/film', label: 'Film' },
  { href: '/design', label: 'Design' },
  { href: '/photography', label: 'Photography' },
]

const PLATFORM_LINKS = [
  { href: '/spotlight', label: 'Spotlight' },
  { href: '/submit', label: 'Submit Work' },
  { href: '#newsletter', label: 'Newsletter' },
  { href: '#events', label: 'Events' },
]

const EMPIRE_LINKS = [
  { href: 'https://121212.black', label: '121212.black' },
  { href: 'https://121212.business', label: '121212.business' },
  { href: 'https://121212.media', label: '121212.media' },
  { href: 'https://121212.health', label: '121212.health' },
  { href: 'https://121212.edu', label: '121212.edu' },
]

export function Footer() {
  return (
    <footer className="bg-[#111] border-t border-white/5">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-0 mb-6">
              <span className="text-brand-gold font-serif font-bold text-xl">121212</span>
              <span className="text-white font-serif text-xl">.culture</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              The editorial home of Black creativity. Art, fashion, film, design, and photography —
              curated with intention.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              121212 Empire
            </h4>
            <ul className="space-y-3">
              {EMPIRE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-brand-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; 2025 121212 Empire. All rights reserved. Black excellence is non-negotiable.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-brand-gold/60 text-xs font-semibold uppercase tracking-wider border border-brand-gold/20 rounded px-3 py-1">
              121212 Empire &mdash; Culture Division
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
