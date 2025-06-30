'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')

  useEffect(() => {
    // URL 파라미터에서 언어 확인
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get('lang')
    
    if (langParam === 'en' || langParam === 'ko') {
      setLanguage(langParam)
    } else {
      // 브라우저 언어 설정 확인
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('ko')) {
        setLanguage('ko')
      } else {
        setLanguage('en')
      }
    }
  }, [])

  const content = {
    ko: {
      title: 'About Kolektt',
      subtitle: '바이널의 새로운 경험을 만들다',
      backToHome: '홈으로 돌아가기',
      intro: 'Kolektt는 바이널 레코드 컬렉션을 체계적으로 관리하고 새로운 음악을 발견할 수 있는 인덱싱 앱입니다. Objktt에서 개발한 서비스로, DJ로서 레코드 정리의 어려움을 직접 겪으며 시작했지만, 모든 바이널 컬렉터들이 공통으로 겪는 문제를 해결하는 서비스입니다.',
      ourStoryTitle: '우리의 시작',
      ourStoryText1: 'DJ로 활동하면서 레코드를 모으던 중 겪은 현실적인 문제가 Kolektt의 시작점이었습니다. 하지만 이는 모든 바이널 컬렉터들이 공통으로 겪는 어려움이기도 했습니다.',
      ourStoryText2: '수백 장의 레코드를 관리하는 복잡함, 중복 구매의 실수, 원하는 특정 음반을 찾기 위한 끝없는 검색. 이런 불편함들이 Kolektt 개발의 출발점이 되었습니다.',
      whatWeDoTitle: '무엇을 하는가',
      indexingTitle: '정확한 인덱싱',
      indexingItems: [
        '바코드 스캔과 수동 입력을 통한 정밀한 레코드 등록',
        '발매년도, 레이블, 프레싱 정보까지 상세 기록',
        '개인 평점 및 메모 기능'
      ],
      managementTitle: '스마트한 관리',
      managementItems: [
        '위시리스트와 소유 목록 분리 관리',
        '중복 구매 방지 알림',
        '컬렉션 통계 및 분석'
      ],
      communityTitle: '커뮤니티 연결',
      communityItems: [
        '다른 컬렉터들과의 취향 공유',
        '레코드 추천 시스템',
        '컬렉터 간 정보 교환 플랫폼'
      ],
      whyKolekttTitle: '왜 Kolektt인가',
      whyKolekttText1: '우리는 바이널 문화의 본질을 이해합니다. 단순한 음악 감상을 넘어선 수집의 즐거움, 새로운 발견의 기쁨, 그리고 같은 취향을 가진 사람들과의 연결. Kolektt는 이 모든 경험을 디지털로 확장하면서도 아날로그의 감성을 잃지 않으려 합니다.',
      whyKolekttText2: 'Objktt의 DJ로서 직접 겪은 레코드 정리의 어려움과 바이널 컬렉터 커뮤니티에 대한 깊은 이해가 Kolektt를 다른 앱들과 차별화시킵니다.',
      futureTitle: '앞으로의 방향',
             futureText1: 'Kolektt는 단순한 관리 도구를 넘어 바이널 컬렉터들의 필수 플랫폼이 되고자 합니다. Objktt는 오프라인 바이널 비즈니스와의 연계, AI 기반 추천 시스템, 그리고 글로벌 바이널 커뮤니티 구축까지 계획하고 있습니다.',
       futureText2: '바이널의 미래를 함께 만들어가겠습니다.',
       businessTitle: '비즈니스 제안',
       businessText: 'Kolektt와 함께 바이널 생태계를 확장하고 싶으신가요? 레코드샵, 음반 레이블, 디스트리뷰터, 또는 바이널 관련 비즈니스를 운영하고 계신다면 저희와 파트너십을 통해 새로운 기회를 만들어보세요.',
       businessItems: [
         '레코드샵 파트너십 - 재고 관리 및 고객 추천 시스템 연동',
         '음반 레이블 협력 - 신작 홍보 및 컬렉터 타겟팅',
         '디스트리뷰터 연계 - 유통망 확장 및 데이터 분석'
       ],
       businessContact: '비즈니스 문의: ',
       privacyPolicy: '개인정보 처리방침',
       termsOfService: '이용약관'
    },
    en: {
      title: 'About Kolektt',
      subtitle: 'Creating a New Vinyl Experience',
      backToHome: 'Back to Home',
      intro: 'Kolektt is an indexing app that allows you to systematically manage your vinyl record collection and discover new music. Developed by Objktt, it started from the difficulties experienced as a DJ organizing records, but it solves problems that all vinyl collectors commonly face.',
      ourStoryTitle: 'Our Beginning',
      ourStoryText1: 'The realistic problems encountered while collecting records as a DJ were the starting point of Kolektt. However, these are also difficulties that all vinyl collectors commonly experience.',
      ourStoryText2: 'The complexity of managing hundreds of records, the mistake of duplicate purchases, and the endless search for specific albums. These inconveniences became the starting point for Kolektt development.',
      whatWeDoTitle: 'What We Do',
      indexingTitle: 'Precise Indexing',
      indexingItems: [
        'Precise record registration through barcode scanning and manual input',
        'Detailed recording including release year, label, and pressing information',
        'Personal rating and memo features'
      ],
      managementTitle: 'Smart Management',
      managementItems: [
        'Separate management of wishlist and owned collection',
        'Duplicate purchase prevention alerts',
        'Collection statistics and analysis'
      ],
      communityTitle: 'Community Connection',
      communityItems: [
        'Sharing tastes with other collectors',
        'Record recommendation system',
        'Information exchange platform between collectors'
      ],
      whyKolekttTitle: 'Why Kolektt',
      whyKolekttText1: 'We understand the essence of vinyl culture. Beyond simple music listening, the joy of collecting, the pleasure of new discoveries, and connections with people who share the same taste. Kolektt aims to digitally expand all these experiences while not losing the analog sensibility.',
      whyKolekttText2: 'Objktt\'s direct experience with the difficulties of record organization as a DJ and deep understanding of the vinyl collector community differentiates Kolektt from other apps.',
      futureTitle: 'Future Direction',
             futureText1: 'Kolektt aims to become an essential platform for vinyl collectors beyond a simple management tool. Objktt plans to connect with offline vinyl businesses, AI-based recommendation systems, and build a global vinyl community.',
       futureText2: 'We will create the future of vinyl together.',
       businessTitle: 'Business Partnership',
       businessText: 'Want to expand the vinyl ecosystem with Kolektt? If you operate a record shop, music label, distributor, or any vinyl-related business, let\'s create new opportunities through partnership with us.',
       businessItems: [
         'Record Shop Partnership - Inventory management and customer recommendation system integration',
         'Music Label Collaboration - New release promotion and collector targeting',
         'Distributor Connection - Distribution network expansion and data analytics'
       ],
       businessContact: 'Business Inquiry: ',
       privacyPolicy: 'Privacy Policy',
       termsOfService: 'Terms of Service'
    }
  }

  const t = content[language]
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-50 px-6 py-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            {t.backToHome}
          </Link>
          
          {/* Language Toggle */}
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage('ko')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                language === 'ko' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              한국어
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                language === 'en' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              {t.subtitle}
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-16">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t.intro}
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.ourStoryTitle}
            </h2>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t.ourStoryText1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.ourStoryText2}
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.whatWeDoTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">{t.indexingTitle}</h3>
                <ul className="text-gray-300 space-y-2">
                  {t.indexingItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">{t.managementTitle}</h3>
                <ul className="text-gray-300 space-y-2">
                  {t.managementItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">{t.communityTitle}</h3>
                <ul className="text-gray-300 space-y-2">
                  {t.communityItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Kolektt */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.whyKolekttTitle}
            </h2>
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t.whyKolekttText1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.whyKolekttText2}
              </p>
            </div>
          </section>

          {/* Future Vision */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.futureTitle}
            </h2>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t.futureText1}
              </p>
              <p className="text-xl font-bold text-white">
                {t.futureText2}
              </p>
            </div>
          </section>

          {/* Business Partnership */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.businessTitle}
            </h2>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t.businessText}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {t.businessItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <p className="text-lg text-gray-300 mb-4">
                  {t.businessContact}
                  <a 
                    href="mailto:objktt@gmail.com" 
                    className="text-white hover:text-gray-300 transition-colors font-semibold"
                  >
                    objktt@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  {language === 'ko' 
                    ? '파트너십 제안서와 함께 연락주시면 빠른 검토 후 답변드리겠습니다.' 
                    : 'Please contact us with your partnership proposal and we will review and respond promptly.'
                  }
                </p>
              </div>
            </div>
          </section>


        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 objktt. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 