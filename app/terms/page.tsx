import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | 121212.culture',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 25, 2025">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using 121212.culture (&ldquo;the Platform&rdquo;), a property of the 121212
        Empire &mdash; Culture Division, you agree to be bound by these Terms of Service. If you do
        not agree to these terms, do not use the Platform.
      </p>

      <h2>2. Platform Description</h2>
      <p>
        121212.culture is an editorial platform dedicated to showcasing Black art, fashion, film,
        design, and photography. The Platform curates and presents creative work from artists,
        designers, filmmakers, and photographers across the African diaspora.
      </p>

      <h2>3. User Submissions</h2>
      <p>
        By submitting work to 121212.culture, you represent that you are the original creator or
        have the necessary rights and permissions to share the work. You grant 121212.culture a
        non-exclusive, royalty-free license to display, promote, and distribute your submitted work
        on the Platform and associated marketing materials.
      </p>
      <p>
        You retain full ownership of your creative work. We will always credit you as the creator.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content, design, branding, and editorial material on 121212.culture is the intellectual
        property of the 121212 Empire. You may not reproduce, distribute, or create derivative works
        from Platform content without explicit written permission.
      </p>

      <h2>5. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Submit work that is not your own or that you do not have rights to share</li>
        <li>Use the Platform for any unlawful purpose</li>
        <li>Attempt to gain unauthorized access to the Platform or its systems</li>
        <li>Scrape, harvest, or collect content from the Platform without permission</li>
        <li>Engage in any conduct that disrupts the Platform experience for other users</li>
      </ul>

      <h2>6. Limitation of Liability</h2>
      <p>
        121212.culture and the 121212 Empire are provided &ldquo;as is&rdquo; without warranties of
        any kind. We shall not be liable for any indirect, incidental, special, consequential, or
        punitive damages arising from your use of the Platform.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use of the Platform after
        changes constitutes acceptance of the updated Terms.
      </p>

      <p>
        For questions regarding these terms, contact us at{' '}
        <a href="mailto:culture@121212.culture">culture@121212.culture</a>.
      </p>

      <p className="mt-8 text-white/30 text-sm italic">
        121212 Empire &mdash; Culture Division.
      </p>
    </LegalLayout>
  )
}
