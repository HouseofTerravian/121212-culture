'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { href: '/art', label: 'Art' },
  { href: '/fashion', label: 'Fashion' },
  { href: '/film', label: 'Film' },
  { href: '/design', label: 'Design' },
  { href: '/spotlight', label: 'Spotlight' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-background/95 backdrop-blur-md border-b border-white/5">
      <div className="container-custom h-full flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-0 shrink-0">
          <span className="text-brand-gold font-serif font-bold text-xl">121212</span>
          <span className="text-white font-serif text-xl">.culture</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="red" size="sm" as="a" href="/submit">
            Submit Your Work
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-white/5">
          <nav className="container-custom px-4 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white text-lg font-medium transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button variant="red" size="md" as="a" href="/submit" className="w-full text-center">
                Submit Your Work
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
