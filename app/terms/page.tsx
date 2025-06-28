import Link from 'next/link'

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="text-gray-300 mb-8">
          These Terms of Service govern your use of the Kolektt application and related services 
          provided by objktt.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                By accessing or using Kolektt, you agree to be bound by these Terms. If you disagree with any 
                part of these terms, then you may not access the service.
              </p>
              <p>
                We reserve the right to update and change these Terms from time to time without notice. 
                Your continued use of the service constitutes acceptance of those changes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Kolektt is an AI-powered vinyl record collection management application that allows users to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Catalog and organize their vinyl record collections</li>
                <li>Discover new music and recommendations</li>
                <li>Connect with other vinyl enthusiasts</li>
                <li>Trade and sell vinyl records through our marketplace</li>
                <li>Access AI-powered features for collection management</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                To use certain features of Kolektt, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Promptly updating your account information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p>
                You must be at least 13 years old to create an account. Users under 18 must have parental consent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Content and Conduct</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You retain ownership of content you submit to Kolektt, but grant us a license to use, 
                display, and distribute your content in connection with the service.
              </p>
              <h3 className="text-lg font-medium text-white">Prohibited Activities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uploading false, misleading, or inaccurate information</li>
                <li>Violating intellectual property rights</li>
                <li>Engaging in fraudulent marketplace activities</li>
                <li>Harassing or threatening other users</li>
                <li>Attempting to hack or compromise the service</li>
                <li>Using the service for illegal purposes</li>
                <li>Spamming or sending unsolicited communications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Marketplace Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Kolektt provides a platform for users to buy, sell, and trade vinyl records. 
                By using our marketplace, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate descriptions and condition assessments</li>
                <li>Honor all sales and trade agreements</li>
                <li>Pay applicable fees and taxes</li>
                <li>Handle disputes in good faith</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p>
                objktt is not responsible for the quality, safety, or legality of items listed, 
                the truth or accuracy of listings, or the ability of sellers to sell items.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment and Fees</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Certain features of Kolektt may require payment. By using paid features, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pay all applicable fees as described in the service</li>
                <li>Provide accurate billing information</li>
                <li>Pay for all charges incurred under your account</li>
                <li>Accept our refund policy as stated</li>
              </ul>
              <p>
                We reserve the right to change our pricing at any time. Price changes will be communicated 
                in advance for existing subscribers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Kolektt service, including its design, text, graphics, and software, is owned by objktt 
                and protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of our services or included 
                software, nor may you reverse engineer or attempt to extract the source code.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>, 
                which explains how we collect, use, and protect your information when you use our service.
              </p>
              <p>
                By using Kolektt, you consent to the collection and use of your information as described 
                in our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Kolektt is provided &quot;as is&quot; without warranties of any kind. We disclaim all warranties, 
                express or implied, including merchantability and fitness for a particular purpose.
              </p>
              <p>
                objktt shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including loss of profits, data, or use, incurred by you or any third party.
              </p>
              <p>
                Our total liability to you for all claims shall not exceed the amount you paid us in the 
                12 months preceding the claim.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may terminate or suspend your account and access to the service immediately, without prior 
                notice, for conduct that we believe violates these Terms or is harmful to other users.
              </p>
              <p>
                You may terminate your account at any time by contacting us. Upon termination, your right 
                to use the service will cease immediately.
              </p>
              <p>
                Provisions that by their nature should survive termination shall survive, including ownership 
                provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Disputes</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                where objktt is incorporated, without regard to conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of Kolektt shall be resolved through binding 
                arbitration, except where prohibited by law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about these Terms of Service, please contact us:
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