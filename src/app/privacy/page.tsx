import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — After90',
  description: 'How After90 collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      intro="After90 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect when you visit afterninetysports.com or subscribe to The Dispatch, how we use it, and the choices you have."
      sections={[
        {
          heading: '1. Information We Collect',
          body: [
            'Information you provide directly: When you subscribe to our newsletter (The Dispatch) or contact us, we collect your email address and any details you choose to share, such as your name or the content of your message.',
            'Information collected automatically: Like most websites, we may use basic analytics tools to understand how visitors use our site — such as which pages are viewed, how long visitors stay, and what device or browser they use. This data is aggregated and does not identify you personally.',
          ],
        },
        {
          heading: '2. How We Use Your Information',
          body: [
            'We use the information we collect to send you our newsletter and updates you have asked to receive, respond to your enquiries and partnership requests, understand how our content is performing so we can improve it, and maintain the security and proper functioning of our site.',
            'We do not sell, rent, or trade your personal information to third parties.',
          ],
        },
        {
          heading: '3. Email & Newsletter Communications',
          body: [
            'If you subscribe to The Dispatch, we will use your email address solely to send you our content and occasional updates about After90. You can unsubscribe at any time using the link provided in every email we send, or by contacting us directly at reach@afterninetysports.com.',
          ],
        },
        {
          heading: '4. Third-Party Services',
          body: [
            'Our site may link out to or embed content from third-party platforms — including YouTube, Medium, and Instagram. These platforms have their own privacy policies, and we encourage you to review them. After90 is not responsible for the privacy practices of these external services.',
          ],
        },
        {
          heading: '5. Data Security',
          body: [
            'We take reasonable steps to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
          ],
        },
        {
          heading: '6. Your Rights',
          body: [
            'You may ask us at any time to access, correct, or delete the personal information we hold about you, or to stop sending you communications. To make any of these requests, email us at reach@afterninetysports.com and we will respond as promptly as we can.',
          ],
        },
        {
          heading: '7. Changes to This Policy',
          body: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The &ldquo;Last updated&rdquo; date at the top of this page will always reflect the most recent revision.',
          ],
        },
        {
          heading: '8. Contact Us',
          body: [
            'If you have any questions about this Privacy Policy or how we handle your information, reach out to us at reach@afterninetysports.com.',
          ],
        },
      ]}
    />
  )
}
