'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import TopDownScrollSequence from '@/components/TopDownScrollSequence'
import CTAScene from '@/components/scenes/CTAScene'
import { Footer } from '@/components/Footer'

export default function Home() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone']
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword))
      const isSmallScreen = window.innerWidth < 768
      
      return isMobileDevice || isSmallScreen
    }

    const handleResize = () => {
      if (checkMobile()) {
        setIsMobile(true)
        router.push('/mobile')
      } else {
        setIsMobile(false)
      }
    }

    // 초기 체크
    if (checkMobile()) {
      setIsMobile(true)
      router.push('/mobile')
    } else {
      setIsLoading(false)
    }

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [router])

  // 모바일이거나 로딩 중일 때는 빈 화면 표시
  if (isMobile || isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vinyl-400 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }
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