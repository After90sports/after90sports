import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service — After90',
  description: 'The terms that govern your use of the After90 website and content.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2026"
      intro="These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of afterninetysports.com and any content, newsletters, or community features we provide (together, the &ldquo;Service&rdquo;). By using the Service, you agree to these Terms."
      sections={[
        {
          heading: '1. Who We Are',
          body: [
            'After90 is an independent sports culture platform telling African football stories through articles, photography, film, and community programming. References to &ldquo;After90,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo; mean After90 and the team behind it.',
          ],
        },
        {
          heading: '2. Using Our Site',
          body: [
            'You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Service by anyone else.',
            'You must not attempt to gain unauthorized access to any part of the Service, introduce malicious code, or use automated systems to scrape or harvest content without our prior written consent.',
          ],
        },
        {
          heading: '3. Intellectual Property',
          body: [
            'All articles, photography, film, graphics, logos, and other content published by After90 are the property of After90 or our contributors and are protected by copyright and other intellectual property laws.',
            'You may share links to our content and quote brief excerpts with proper attribution. You may not reproduce, redistribute, or commercially exploit our content in full without our prior written permission.',
          ],
        },
        {
          heading: '4. User Submissions',
          body: [
            'If you send us messages, story ideas, photos, or other materials — for example through our contact channels or partnership enquiries — you grant After90 a non-exclusive, royalty-free licence to use, edit, and publish that material in connection with our work, unless we agree otherwise in writing.',
            'Please do not send us anything you do not have the right to share.',
          ],
        },
        {
          heading: '5. Third-Party Links & Content',
          body: [
            'Our Service may contain links to third-party websites and platforms (including YouTube, Medium, and Instagram). We do not control and are not responsible for the content, accuracy, or practices of these third parties.',
          ],
        },
        {
          heading: '6. Newsletter & Communications',
          body: [
            'By subscribing to The Dispatch or any other After90 communication, you agree to receive emails from us. You can unsubscribe at any time, as described in our Privacy Policy.',
          ],
        },
        {
          heading: '7. Disclaimers',
          body: [
            'The Service and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we work hard to ensure our reporting and content are accurate and current, we make no warranties — express or implied — about the completeness, reliability, or availability of the Service.',
          ],
        },
        {
          heading: '8. Limitation of Liability',
          body: [
            'To the fullest extent permitted by law, After90 shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the Service.',
          ],
        },
        {
          heading: '9. Changes to These Terms',
          body: [
            'We may revise these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent changes. Continued use of the Service after changes are posted means you accept the updated Terms.',
          ],
        },
        {
          heading: '10. Contact Us',
          body: [
            'Questions about these Terms can be sent to reach@afterninetysports.com.',
          ],
        },
      ]}
    />
  )
}
