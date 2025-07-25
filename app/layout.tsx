import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kolektt - AI Vinyl Collection',
  description: 'AI로 바이닐 컬렉션을 쉽고 멋지게 관리하세요. 스캔, 정리, 분석, 거래까지 한 번에!',
  keywords: ['바이닐', '레코드', 'AI', '음악', '컬렉션', '거래'],
  authors: [{ name: 'Kolektt Team' }],
  openGraph: {
    title: 'Kolektt - AI Vinyl Collection',
    description: 'AI로 바이닐 컬렉션을 쉽고 멋지게 관리하세요.',
    url: 'https://kolektt.kr',
    siteName: 'Kolektt',
    images: [
      {
        url: 'https://kolektt.kr/assets/meta_img.jpg',
        width: 1200,
        height: 630,
        alt: 'Kolektt 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kolektt',
    title: 'Kolektt - AI Vinyl Collection',
    description: 'AI로 바이닐 컬렉션을 쉽고 멋지게 관리하세요.',
    images: ['https://kolektt.kr/assets/meta_img.jpg'],
  },
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        {/* Preload critical images */}
        <link rel="preload" href="/assets/cat_snap_01.png" as="image" type="image/png" />
        <link rel="preload" href="/albums/the-beatles_abbey-road.webp" as="image" type="image/webp" />
        <link rel="preload" href="/albums/pink-floyd_dark-side-of-the-moon.webp" as="image" type="image/webp" />
        <link rel="preload" href="/albums/nirvana_nevermind.webp" as="image" type="image/webp" />
        <link rel="preload" href="/albums/fleetwood-mac_rumours.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/phone.svg" as="image" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
} 