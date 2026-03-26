interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <section className="section-padding border-b border-white/5">
        <div className="container-custom">
          <span className="section-label block mb-4">Legal</span>
          <h1 className="heading-primary mb-2">{title}</h1>
          <p className="text-white/30 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-white/50 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-white/50 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_a]:text-brand-gold [&_a]:underline [&_a]:underline-offset-2">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
