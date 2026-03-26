import { LegalLayout } from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 121212.culture',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 25, 2025">
      <h2>1. Information We Collect</h2>
      <p>
        When you submit work or interact with 121212.culture, we may collect: your name, email
        address, creative discipline, portfolio links, and any additional information you
        voluntarily provide through our submission forms.
      </p>
      <p>
        We also collect standard analytics data including browser type, device information, pages
        visited, and time spent on the Platform.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Review and respond to creative submissions</li>
        <li>Feature your work on the Platform with proper attribution</li>
        <li>Communicate with you about your submission status</li>
        <li>Improve the Platform experience and content curation</li>
        <li>Send occasional updates about 121212.culture and the 121212 Empire (with your consent)</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share
        anonymized, aggregated data for analytics purposes. Your creative work is only shared
        publicly on the Platform if you are selected for editorial feature.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your personal information. However, no
        method of electronic storage or transmission is 100% secure. We cannot guarantee absolute
        security of your data.
      </p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to your personal data</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw consent for data processing at any time</li>
        <li>Request removal of your featured work from the Platform</li>
      </ul>

      <h2>6. Contact</h2>
      <p>
        For privacy-related inquiries or to exercise your rights, contact us at{' '}
        <a href="mailto:culture@121212.culture">culture@121212.culture</a>.
      </p>

      <p className="mt-8 text-white/30 text-sm italic">
        121212 Empire &mdash; Culture Division.
      </p>
    </LegalLayout>
  )
}
