'use client'

import TopDownScrollSequence from '@/components/TopDownScrollSequence'
import CTAScene from '@/components/scenes/CTAScene'
import { Footer } from '@/components/Footer'


export default function Home() {
  const footerProps = {
    logo: null,
    brandName: "Kolektt",
    socialLinks: [],
    mainLinks: [
      { href: "/about", label: "About" },
      { href: "mailto:objktt@gmail.com", label: "Contact" }
    ],
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" }
    ],
    copyright: {
      text: `© ${new Date().getFullYear()} objktt. All rights reserved.`,
      license: "Kolektt - Experience vinyl like never before with AI"
    }
  }

  return (
    <main className="relative">
      <TopDownScrollSequence />
      <CTAScene />
      <Footer {...footerProps} />
    </main>
  )
} 