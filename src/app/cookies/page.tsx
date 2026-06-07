import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Cookie Policy — After90',
  description: 'How After90 uses cookies and similar technologies on its website.',
  alternates: { canonical: '/cookies' },
}

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="June 2026"
      intro="This Cookie Policy explains what cookies are, how After90 uses them on afterninetysports.com, and how you can manage your preferences."
      sections={[
        {
          heading: '1. What Are Cookies?',
          body: [
            'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, work more efficiently, and to provide information to the site owner.',
          ],
        },
        {
          heading: '2. How We Use Cookies',
          body: [
            'We use a limited number of cookies and similar technologies to keep our site running smoothly — for example, to remember basic preferences and to understand, in aggregate, how visitors find and use our site so we can keep improving the experience.',
            'We do not use cookies to build advertising profiles or sell your data.',
          ],
        },
        {
          heading: '3. Types of Cookies We May Use',
          body: [
            'Essential cookies: Necessary for the site to function properly, such as remembering your navigation state.',
            'Analytics cookies: Help us understand how visitors interact with our site — which pages are popular, how people move through the site, and where we can improve — so we can make better decisions about our content and design.',
          ],
        },
        {
          heading: '4. Third-Party Cookies',
          body: [
            'Where we embed content from third parties — such as YouTube videos or Instagram posts — those platforms may set their own cookies in line with their own policies. We encourage you to review the cookie and privacy policies of these third parties.',
          ],
        },
        {
          heading: '5. Managing Your Cookie Preferences',
          body: [
            'Most web browsers let you control cookies through their settings — including blocking or deleting them. Please note that disabling certain cookies may affect how parts of our site function.',
          ],
        },
        {
          heading: '6. Changes to This Policy',
          body: [
            'We may update this Cookie Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.',
          ],
        },
        {
          heading: '7. Contact Us',
          body: [
            'If you have questions about how we use cookies, email us at reach@afterninetysports.com.',
          ],
        },
      ]}
    />
  )
}
