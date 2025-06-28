import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Kolektt
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="text-gray-300 mb-8">
          This Privacy Policy describes how objktt ("we," "our," or "us") collects, uses, and shares information 
          about you when you use our Kolektt application and related services.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              <h3 className="text-lg font-medium text-white">Personal Information:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address</li>
                <li>Name and profile information</li>
                <li>Vinyl collection data and preferences</li>
                <li>Communication preferences</li>
              </ul>
              <h3 className="text-lg font-medium text-white">Usage Information:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device information and identifiers</li>
                <li>Log data and analytics</li>
                <li>App usage patterns</li>
                <li>Location data (if permitted)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Personalize your experience and content recommendations</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent activities</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your consent or at your direction</li>
                <li>To comply with legal obligations</li>
                <li>To protect rights, property, or safety</li>
                <li>In connection with business transfers</li>
                <li>With service providers who assist our operations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{' '}
                <a href="mailto:objktt@gmail.com" className="text-blue-400 hover:text-blue-300">
                  objktt@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We use cookies and similar tracking technologies to collect and use personal information 
                about you. For further information about the types of cookies we use, why, and how you 
                can control cookies, please see our Cookie Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your information may be transferred to and maintained on computers located outside of 
                your state, province, country, or other governmental jurisdiction where data protection 
                laws may differ from those in your jurisdiction.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2">
                <li><strong>Company:</strong> objktt</li>
                <li>Email: <a href="mailto:objktt@gmail.com" className="text-blue-400 hover:text-blue-300">objktt@gmail.com</a></li>
              </ul>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} objktt. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Kolektt is a product of objktt
          </p>
        </div>
      </footer>
    </div>
  )
} 