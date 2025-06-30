'use client'

import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import VinylRecord from './VinylRecord'
import BetaServiceSticker from './BetaServiceSticker'
import AlbumCover from './AlbumCover'
import { albums } from '../lib/albums'

// 역사상 가장 아이코닉한 앨범 커버들 (UpVenue 기사 참조)
const vinylRecords = [
  { id: 1, x: 15, y: 20, rotation: -25, color: '#3B82F6', artist: 'Tyler, The Creator', title: 'Flower Boy', year: 2017, image: '/albums/album_art/tyler-the-creator-flower-boy-2017.webp' },
  { id: 2, x: 75, y: 15, rotation: 45, color: '#8B5CF6', artist: 'Thelonious Monk', title: 'Underground', year: 1968, image: '/albums/album_art/thelonious-monk-underground-1968.webp' },
  { id: 3, x: 25, y: 70, rotation: -15, color: '#EF4444', artist: 'The Who', title: 'Tommy', year: 1969, image: '/albums/album_art/the-who-tommy-1969.webp' },
  { id: 4, x: 85, y: 65, rotation: 30, color: '#06B6D4', artist: 'The White Stripes', title: 'Elephant', year: 2003, image: '/albums/album_art/the-white-stripes-elephant-2003.webp' },
  { id: 5, x: 45, y: 25, rotation: -35, color: '#0036ff', artist: 'The Velvet Underground', title: 'The Velvet Underground & Nico', year: 1967, image: '/albums/album_art/the-velvet-underground-the-velvet-underground-nico-1967.webp' },
  { id: 6, x: 65, y: 80, rotation: 20, color: '#10B981', artist: 'The Prodigy', title: 'Invaders Must Die', year: 2009, image: '/albums/album_art/the-prodigy-invaders-must-die-2009.webp' },
  { id: 7, x: 10, y: 85, rotation: -10, color: '#1F2937', artist: 'The London Symphony Orchestra', title: 'Tommy', year: 1972, image: '/albums/album_art/the-london-symphony-orchestra-tommy-1972.webp' },
  { id: 8, x: 90, y: 30, rotation: 40, color: '#DC2626', artist: 'The Beatles', title: "Sgt. Pepper's Lonely Hearts Club Band", year: 1967, image: '/albums/album_art/the-beatles-sgt-pepper-s-lonely-hearts-club-band-1967.webp' },
  { id: 9, x: 5, y: 50, rotation: 15, color: '#EC4899', artist: 'Tame Impala', title: 'Currents', year: 2015, image: '/albums/album_art/tame-impala-currents-2015.webp' },
  { id: 10, x: 95, y: 55, rotation: -30, color: '#8B5A2B', artist: 'Stan Getz:João Gilberto', title: 'Getz:Gilberto', year: 1964, image: '/albums/album_art/stan-getz-jo-ao-gilberto-getz-gilberto-1964.webp' },
  { id: 11, x: 35, y: 10, rotation: 25, color: '#6366F1', artist: 'Red Hot Chili Peppers', title: 'Californication', year: 1999, image: '/albums/album_art/red-hot-chili-peppers-californication-1999.webp' },
  { id: 12, x: 55, y: 90, rotation: -20, color: '#002edb', artist: 'Pink Floyd', title: 'The Dark Side of the Moon', year: 1973, image: '/albums/album_art/pink-floyd-the-dark-side-of-the-moon-1973.webp' },
  { id: 13, x: 20, y: 40, rotation: 35, color: '#84CC16', artist: 'Nirvana', title: 'Nevermind', year: 1991, image: '/albums/album_art/nirvana-nevermind-1991.webp' },
  { id: 14, x: 80, y: 45, rotation: -40, color: '#06B6D4', artist: 'Nick Drake', title: 'Pink Moon', year: 1973, image: '/albums/album_art/nick-drake-pink-moon-1973.webp' },
  { id: 15, x: 40, y: 60, rotation: 50, color: '#A855F7', artist: 'Michael Jackson', title: 'Dangerous', year: 1991, image: '/albums/album_art/michael-jackson-dangerous-1991.webp' },
  { id: 16, x: 70, y: 25, rotation: -5, color: '#EF4444', artist: 'Metallica', title: 'Master of Puppets', year: 1986, image: '/albums/album_art/metallica-master-of-puppets-1986.webp' },
  { id: 17, x: 60, y: 35, rotation: 15, color: '#059669', artist: 'Kraftwerk', title: 'Computer World', year: 1981, image: '/albums/album_art/kraftwerk-computer-world-1981.webp' },
  { id: 18, x: 30, y: 75, rotation: -30, color: '#7C3AED', artist: 'King Crimson', title: 'In the Court of the Crimson King', year: 1969, image: '/albums/album_art/king-crimson-in-the-court-of-the-crimson-king-1969.webp' },
  { id: 19, x: 85, y: 20, rotation: 25, color: '#60a5fa', artist: 'Kendrick Lamar', title: 'To Pimp a Butterfly', year: 2015, image: '/albums/album_art/kendrick-lamar-to-pimp-a-butterfly-2015.webp' },
  { id: 20, x: 12, y: 35, rotation: -20, color: '#10B981', artist: 'Justice', title: '† (Cross)', year: 2007, image: '/albums/album_art/justice-cross-2007.webp' },
  { id: 21, x: 88, y: 70, rotation: 35, color: '#DC2626', artist: 'Joy Division', title: 'Unknown Pleasures', year: 1979, image: '/albums/album_art/joy-division-unknown-pleasures-1979.webp' },
  { id: 22, x: 45, y: 8, rotation: -15, color: '#06B6D4', artist: 'Grace Jones', title: 'Nightclubbing', year: 1981, image: '/albums/album_art/grace-jones-nightclubbing-1981.webp' },
  { id: 23, x: 75, y: 88, rotation: 40, color: '#A855F7', artist: 'Dinosaur Jr.', title: 'Give a Glimpse of What Yer Not', year: 2016, image: '/albums/album_art/dinosaur-jr-give-a-glimpse-of-what-yer-not-2016.webp' },
  { id: 24, x: 18, y: 65, rotation: 20, color: '#EF4444', artist: 'David Bowie', title: 'Aladdin Sane', year: 1973, image: '/albums/album_art/david-bowie-aladdin-sane-1973.webp' },
  { id: 25, x: 92, y: 40, rotation: -35, color: '#84CC16', artist: 'Daft Punk', title: 'Random Access Memories', year: 2013, image: '/albums/album_art/daft-punk-random-access-memories-2013.webp' },
  { id: 26, x: 38, y: 82, rotation: 30, color: '#6366F1', artist: 'Chicago', title: 'Chicago XIV', year: 1979, image: '/albums/album_art/chicago-chicago-xiv-1979.webp' },
  { id: 27, x: 82, y: 12, rotation: -10, color: '#0025b8', artist: 'Björk', title: 'Post', year: 1995, image: '/albums/album_art/bj-ork-post-1995.webp' },
  { id: 28, x: 25, y: 55, rotation: 45, color: '#10B981', artist: 'Arcade Fire', title: 'The Suburbs', year: 2010, image: '/albums/album_art/arcade-fire-the-suburbs-2010.webp' },
  { id: 29, x: 68, y: 72, rotation: -25, color: '#DC2626', artist: 'Animal Collective', title: 'Merriweather Post Pavilion', year: 2009, image: '/albums/album_art/animal-collective-merriweather-post-pavilion-2009.webp' },
  { id: 30, x: 52, y: 18, rotation: 15, color: '#7C3AED', artist: 'Alice Cooper', title: 'Raise Your fist and Yell', year: 1982, image: '/albums/album_art/alice-cooper-raise-your-fist-and-yell-1982.webp' },
]

const slogans = ['SNAP', 'COLLECT', 'ANALYZE', 'TRADE']

// vinylRecords 자동 매칭: title, artist를 albums와 일치시키는 함수
function normalizeVinylRecords(records: Array<{id: number, x: number, y: number, rotation: number, color: string, title: string, artist: string}>): Array<any> {
  return records.map((record) => {
    let found = albums.find(
      a => a.title.trim().toLowerCase() === record.title.trim().toLowerCase() &&
           a.artist.trim().toLowerCase() === record.artist.trim().toLowerCase()
    );
    if (!found) {
      found = albums.find(
        a => a.title.trim().toLowerCase().includes(record.title.trim().toLowerCase()) ||
             record.title.trim().toLowerCase().includes(a.title.trim().toLowerCase())
      );
    }
    if (!found) {
      found = albums.find(
        a => a.artist.trim().toLowerCase().includes(record.artist.trim().toLowerCase()) ||
             record.artist.trim().toLowerCase().includes(a.artist.trim().toLowerCase())
      );
    }
    if (!found) {
      found = albums.find(
        a => a.title.replace(/[^a-z0-9]/gi, '').toLowerCase().includes(record.title.replace(/[^a-z0-9]/gi, '').toLowerCase()) &&
             a.artist.replace(/[^a-z0-9]/gi, '').toLowerCase().includes(record.artist.replace(/[^a-z0-9]/gi, '').toLowerCase())
      );
    }
    if (found) {
      return { ...record, title: found.title, artist: found.artist, year: found.year, image: found.image }
    }
    return record
  })
}

const normalizedVinylRecords = normalizeVinylRecords(vinylRecords)

// getAlbumImage는 albums에서 title, artist 완전 일치로만 찾음
const getAlbumImage = (title: string, artist: string) => {
  const found = albums.find(
    a => a.title.trim().toLowerCase() === title.trim().toLowerCase() &&
         a.artist.trim().toLowerCase() === artist.trim().toLowerCase()
  );
  return found ? found.image : null;
}

export default function TopDownScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [coverImages, setCoverImages] = useState<{[key: number]: string}>({})
  const [randomTopIndex, setRandomTopIndex] = useState<number>(0)
  const [randomSnapAlbum, setRandomSnapAlbum] = useState<string>('')
  const [isKorean, setIsKorean] = useState(false)
  const [shouldBlur, setShouldBlur] = useState(true)
  const [isPc, setIsPc] = useState(false)

  const fallbackMotionValue = useMotionValue(0)

  // SNAP 섹션용 앨범 커버 리스트
  const snapAlbumCovers = [
    'abbey-road.jpg',
    'dark-side-of-the-moon.jpg',
    'nevermind.jpg',
    'rumours.jpg',
    'thriller.jpg',
    'led-zeppelin-iv.jpg',
    'ok-computer.jpg',
    'pet-sounds.jpg',
    'hotel-california.jpg',
    'sgt-peppers.jpg',
    'london-calling.jpg',
    'master-of-puppets.jpg',
    'purple-rain.jpg',
    'back-in-black.jpg',
    'whats-going-on.jpg',
    'disintegration.jpg',
    'appetite-for-destruction.jpg',
    'born-to-run.jpg',
    'unknown-pleasures.jpg',
    'the-wall.jpg',
    'ziggy-stardust.jpg',
    'velvet-underground-nico.jpg',
    'maggot-brain.jpg',
    'its-blitz.jpg'
  ]

  // 컴포넌트 마운트 시 랜덤 순서와 커버 이미지들 로드
  useEffect(() => {
    // 랜덤하게 맨 위에 올 앨범의 ID 설정 (1부터 시작하므로 +1)
    const randomIndex = Math.floor(Math.random() * vinylRecords.length)
    setRandomTopIndex(vinylRecords[randomIndex].id)
    
    // SNAP 섹션용 랜덤 앨범 선택 (useEffect 내부에서 배열 정의)
    const snapCovers = [
      'abbey-road.jpg',
      'dark-side-of-the-moon.jpg',
      'nevermind.jpg',
      'rumours.jpg',
      'thriller.jpg',
      'led-zeppelin-iv.jpg',
      'ok-computer.jpg',
      'pet-sounds.jpg',
      'hotel-california.jpg',
      'sgt-peppers.jpg',
      'london-calling.jpg',
      'master-of-puppets.jpg',
      'purple-rain.jpg',
      'back-in-black.jpg',
      'whats-going-on.jpg',
      'disintegration.jpg',
      'appetite-for-destruction.jpg',
      'born-to-run.jpg',
      'unknown-pleasures.jpg',
      'the-wall.jpg',
      'ziggy-stardust.jpg',
      'velvet-underground-nico.jpg',
      'maggot-brain.jpg',
      'its-blitz.jpg'
    ]
    const randomSnapIndex = Math.floor(Math.random() * snapCovers.length)
    setRandomSnapAlbum(snapCovers[randomSnapIndex])
    
    const loadCoverImages = () => {
      const images: {[key: number]: string} = {}
      normalizedVinylRecords.forEach((record) => {
        const imageUrl = getAlbumImage(record.title, record.artist)
        if (imageUrl) {
          images[record.id] = imageUrl
        }
      })
      setCoverImages(images)
    }
    
    loadCoverImages()
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // 스크롤 진행도에 따라 블러 상태 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setShouldBlur(latest < 0.1)
    })
    return unsubscribe
  }, [scrollYProgress])

  // 각 섹션별 진행도
  const scatterProgress = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const mergeProgress = useMotionValue(0)
  const phoneEnterProgress = useTransform(scrollYProgress, [0.25, 0.3], [0, 1])
  const sloganProgress = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const phoneExitProgress = useTransform(scrollYProgress, [0.95, 1.0], [0, 1])

  // 스크롤 연동: mergeProgress를 스크롤에 따라 set (드래그로도 set 가능하게)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // 0.15~0.25 구간만 mergeProgress 0~1로 매핑
      if (v < 0.15) mergeProgress.set(0);
      else if (v > 0.25) mergeProgress.set(1);
      else mergeProgress.set((v - 0.15) / 0.1);
    });
    return unsubscribe;
  }, [scrollYProgress, mergeProgress]);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector('[data-section="waitlist"]')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Collect 섹션: collectOpacityArr, collectXArr도 직접 나열 방식으로 선언 (반복문 사용 금지)
  const collectOpacityArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 0 * 0.015, 0.52 + 0 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 1 * 0.015, 0.52 + 1 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 2 * 0.015, 0.52 + 2 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 3 * 0.015, 0.52 + 3 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 4 * 0.015, 0.52 + 4 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 5 * 0.015, 0.52 + 5 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 6 * 0.015, 0.52 + 6 * 0.015], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 7 * 0.015, 0.52 + 7 * 0.015], [0, 1]),
  ];
  const collectXArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 0 * 0.015, 0.52 + 0 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 1 * 0.015, 0.52 + 1 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 2 * 0.015, 0.52 + 2 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 3 * 0.015, 0.52 + 3 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 4 * 0.015, 0.52 + 4 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 5 * 0.015, 0.52 + 5 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 6 * 0.015, 0.52 + 6 * 0.015], [30, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.50 + 7 * 0.015, 0.52 + 7 * 0.015], [30, 0]),
  ];

  // Trade 섹션: tradePriceOpacityArr, tradePriceYArr 직접 나열 방식으로 선언 (반복문 사용 금지)
  const tradePriceOpacityArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.83 + 0 * 0.01, 0.85 + 0 * 0.01], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.83 + 1 * 0.01, 0.85 + 1 * 0.01], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.83 + 2 * 0.01, 0.85 + 2 * 0.01], [0, 1]),
  ];
  const tradePriceYArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.83 + 0 * 0.01, 0.85 + 0 * 0.01], [10, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.83 + 1 * 0.01, 0.85 + 1 * 0.01], [10, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.83 + 2 * 0.01, 0.85 + 2 * 0.01], [10, 0]),
  ];

  // Trade 섹션: More Listings map 바깥에서 useTransform 배열로 선언
  const tradeMoreOpacityArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.87 + 0 * 0.02, 0.89 + 0 * 0.02], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.87 + 1 * 0.02, 0.89 + 1 * 0.02], [0, 1]),
  ];
  const tradeMoreXArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.87 + 0 * 0.02, 0.89 + 0 * 0.02], [20, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.87 + 1 * 0.02, 0.89 + 1 * 0.02], [20, 0]),
  ];

  // Analyze 섹션: 장르별 원형 차트 strokeDasharray 값 미리 계산
  const genreList = [
    { genre: 'Rock', percentage: 45, color: '#EF4444' },
    { genre: 'Jazz', percentage: 25, color: '#3B82F6' },
    { genre: 'Electronic', percentage: 20, color: '#8B5CF6' },
    { genre: 'Classical', percentage: 10, color: '#10B981' }
  ];
  let cumulativePercentage = 0;
  const strokeDasharrays = genreList.map((item) => {
    const dash = `${item.percentage} ${100 - item.percentage}`;
    cumulativePercentage += item.percentage;
    return dash;
  });

  // Analyze 섹션: genreStrokeDashArr, genreLegendOpacityArr, genreLegendXArr 직접 나열 방식으로 선언 (반복문 사용 금지)
  const genreStrokeDashArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.67 + 0 * 0.01, 0.71 + 0 * 0.01], ['0 100', strokeDasharrays[0]]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.67 + 1 * 0.01, 0.71 + 1 * 0.01], ['0 100', strokeDasharrays[1]]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.67 + 2 * 0.01, 0.71 + 2 * 0.01], ['0 100', strokeDasharrays[2]]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.67 + 3 * 0.01, 0.71 + 3 * 0.01], ['0 100', strokeDasharrays[3]]),
  ];
  const genreLegendOpacityArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 0 * 0.01, 0.72 + 0 * 0.01], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 1 * 0.01, 0.72 + 1 * 0.01], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 2 * 0.01, 0.72 + 2 * 0.01], [0, 1]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 3 * 0.01, 0.72 + 3 * 0.01], [0, 1]),
  ];
  const genreLegendXArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 0 * 0.01, 0.72 + 0 * 0.01], [10, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 1 * 0.01, 0.72 + 1 * 0.01], [10, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 2 * 0.01, 0.72 + 2 * 0.01], [10, 0]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 3 * 0.01, 0.72 + 3 * 0.01], [10, 0]),
  ];

  // Analyze 섹션: Decade(Bar chart) 배열 선언 및 useTransform map 바깥에서 선언
  const decadeList = [
    { decade: '70s', height: 60, albums: 12 },
    { decade: '80s', height: 85, albums: 23 },
    { decade: '90s', height: 75, albums: 18 },
    { decade: '00s', height: 40, albums: 8 }
  ];
  // Analyze 섹션: moodList를 먼저 선언해야 아래에서 참조 가능
  const moodList = [
    { mood: 'Energetic', value: 78 },
    { mood: 'Melancholic', value: 45 },
    { mood: 'Upbeat', value: 62 },
    { mood: 'Ambient', value: 33 }
  ];

  // Analyze 섹션: decadeBarHeightArr, moodBarWidthArr 직접 나열 방식으로 선언 (반복문 사용 금지)
  const decadeBarHeightArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 0 * 0.02, 0.72 + 0 * 0.02], ['0', `${decadeList[0].height}%`]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 1 * 0.02, 0.72 + 1 * 0.02], ['0', `${decadeList[1].height}%`]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 2 * 0.02, 0.72 + 2 * 0.02], ['0', `${decadeList[2].height}%`]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.68 + 3 * 0.02, 0.72 + 3 * 0.02], ['0', `${decadeList[3].height}%`]),
  ];
  const moodBarWidthArr = [
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.69 + 0 * 0.01, 0.73 + 0 * 0.01], ['0', `${moodList[0].value}%`]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.69 + 1 * 0.01, 0.73 + 1 * 0.01], ['0', `${moodList[1].value}%`]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.69 + 2 * 0.01, 0.73 + 2 * 0.01], ['0', `${moodList[2].value}%`]),
    useTransform(scrollYProgress ?? fallbackMotionValue, [0.69 + 3 * 0.01, 0.73 + 3 * 0.01], ['0', `${moodList[3].value}%`]),
  ];

  return (
    <div ref={containerRef} className="relative" style={{ height: '5500px' }}>
      {/* Fixed Header with Business Offer, Language Toggle and Join Our Waitlist Button */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-[100] p-6"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 0.98, 1], [0, 1, 1, 0.9])
        }}
      >
        <div className="flex items-center justify-between">
          {/* Business Offer Button - Left */}
          <motion.button
            onClick={() => window.open('/about#business', '_blank')}
            className="px-5 py-2.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-full hover:border-vinyl-400 hover:text-vinyl-400 hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              <span>Business Offer</span>
            </div>
          </motion.button>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
          {/* Language Toggle Button */}
          <motion.button
            onClick={() => setIsKorean(!isKorean)}
            className="w-32 px-5 py-2.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-full hover:border-vinyl-400 hover:text-vinyl-400 hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <span>{isKorean ? '한국어' : 'English'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
          </motion.button>

          {/* Join Our Waitlist Button */}
        <motion.button
          onClick={scrollToWaitlist}
          className="px-5 py-2.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-full hover:border-vinyl-400 hover:text-vinyl-400 hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <span>Join Our Waitlist</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Fixed viewport - 90도 top-down view */}
      <div className="fixed inset-0 bg-black overflow-hidden">
        
        {/* White flash effect when vinyl reaches center */}
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, (value) => {
              // 비닐이 중앙에 도달하는 42% 지점에서 플래시 (더 늦게)
              if (value >= 0.415 && value <= 0.425) {
                // 1% 구간에서 플래시 (훨씬 더 길게)
                const progress = (value - 0.415) / 0.01;
                // 빠르게 올라갔다가 빠르게 내려옴
                return Math.sin(progress * Math.PI) * 0.9; // 최대 90% 투명도
              }
              return 0;
            })
          }}
        />
        
        {/* Dark textured floor background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-black" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
                   linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%),
                   linear-gradient(-45deg, rgba(255,255,255,0.01) 25%, transparent 25%)
                 `,
                 backgroundSize: '200px 200px, 300px 300px, 40px 40px, 40px 40px'
               }}
          />
        </div>

        {/* Black overlay container above all elements */}
        <motion.div
          className="absolute inset-0 bg-black/60 z-[45] pointer-events-none backdrop-blur-md"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
          }}
        />

        {/* Album Info Display - 레코드가 모였을 때 맨 위 레코드 정보 표시 */}
        <motion.div
          className="absolute z-40 text-white text-center"
          style={{
            left: '50%',
            top: 'calc(50% + 150px)', // 레코드 밑에 위치
            x: '-50%',
            opacity: useTransform(scrollYProgress, (value) => {
              // 레코드가 모이고 난 후부터 iPhone이 나타나기 전까지 (25%-30%)
              if (value < 0.25) return 0; // 레코드가 모이기 전에는 숨김
              if (value < 0.26) {
                // 1% 구간에서 페이드 인
                const progress = (value - 0.25) / 0.01;
                return progress;
              }
              if (value < 0.29) {
                // 3% 구간 동안 표시
                return 1;
              }
              if (value < 0.30) {
                // 1% 구간에서 페이드 아웃 (iPhone이 나타나기 전에)
                const progress = (value - 0.29) / 0.01;
                return 1 - progress;
              }
              return 0;
            })
          }}
        >
          <div className="bg-black/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-1">
              {vinylRecords.find(record => record.id === randomTopIndex)?.title}
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg text-gray-300">
                {vinylRecords.find(record => record.id === randomTopIndex)?.artist}
              </span>
              <span className="text-sm text-blue-200 font-semibold">
                {vinylRecords.find(record => record.id === randomTopIndex)?.year}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scattered vinyl records */}
        {scrollYProgress.get() < 0.50 && vinylRecords.map((record) => (
          <VinylRecord
            key={record.id}
            record={record}
            coverImage={record.image}
            mergeProgress={mergeProgress}
            setMergeProgress={mergeProgress.set}
            scrollYProgress={scrollYProgress}
            randomTopIndex={randomTopIndex}
          />
        ))}

        

        {/* iPhone */}
        <motion.div
          className="absolute z-30"
          style={{
            left: '50%',
            x: '-50%',
            y: useTransform(scrollYProgress, (value) => {
              // 0.25-0.35: 하단에서 중앙으로 올라옴 (원래 진입 시점)
              if (value < 0.25) return '150%'; // 화면 하단 밖
              if (value < 0.35) {
                const progress = (value - 0.25) / 0.1;
                return `${150 - progress * 200}%`; // 150%에서 -50%로
              }
              // 0.35-0.96: 중앙에 머무름 (훨씬 더 오래 머무름)
              if (value < 0.96) return '-50%';
              // 0.96-1.0: 상단으로 올라감 (마지막에만 나감)
              if (value < 1.0) {
                const progress = (value - 0.96) / 0.04;
                return `${-50 - progress * 200}%`; // -50%에서 -250%로
              }
              return '-250%'; // 화면 상단 밖
            }),
            top: '50%',
            opacity: 1,
            scale: useTransform(scrollYProgress, (value) => {
              // 0.25-0.35: 진입하면서 스케일 증가
              if (value < 0.25) return 0.6; // 작게 시작
              if (value < 0.35) {
                const progress = (value - 0.25) / 0.1;
                return 0.6 + progress * 0.4; // 0.6에서 1.0으로
              }
              // 0.35-0.96: 정상 크기 유지 (훨씬 더 오래 유지)
              if (value < 0.96) return 1.0;
              // 0.96-1.0: 나가면서 스케일 감소
              if (value < 1.0) {
                const progress = (value - 0.96) / 0.04;
                return 1.0 - progress * 0.4; // 1.0에서 0.6으로
              }
              return 0.6; // 작게 끝
            }),
            transformOrigin: 'center center'
          }}
        >
          <div className="relative">
            <div 
              className="w-[45rem] h-[72rem] drop-shadow-2xl"
              style={{
                backgroundImage: 'url(/assets/phone.svg)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Phone screen background with record list */}
            <div 
              className="absolute overflow-hidden"
              style={{
                backgroundColor: '#101114',
                // 아이폰 화면 비율에 맞춤
                left: '30.6%',    
                top: '24%',       
                width: '39%',     
                height: '52%',    
                borderRadius: '32px',
              }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 text-white text-xs">
                <span className="font-semibold">9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-full h-full bg-white rounded-sm" />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div className="px-4 py-3 text-center">
                <h3 className="text-white text-lg font-bold">Kolektt</h3>
                <p className="text-blue-200 text-xs">AI Vinyl Collection</p>
              </div>

              {/* Search bar */}
              <div className="px-4 mb-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-white/60 text-xs">Search your collection...</span>
                </div>
              </div>

              {/* App content container */}
              <div className="relative flex-1 overflow-hidden">
                {/* COLLECT section - Records list (only visible during COLLECT phase) */}
                <motion.div
                  className="space-y-2 absolute inset-0 px-4 pt-2"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.50, 0.52, 0.60, 0.62], [0, 1, 1, 0]),
                    zIndex: 10
                  }}
                >
                  <p className="text-white/80 text-xs font-medium">Your Collection</p>
                  {normalizedVinylRecords.slice(0, 8).map((record, index) => (
                    <motion.div
                      key={`collect-${record.id}`}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3"
                      style={{
                        opacity: collectOpacityArr[index],
                        x: collectXArr[index]
                      }}
                    >
                      {/* Album cover thumbnail */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/20 flex-shrink-0 relative">
                        {record.image ? (
                          <AlbumCover
                            src={record.image}
                            thumb={`/albums/thumbs/${record.image?.split('/').pop()}`}
                            alt={record.title}
                            sizes="40px"
                            priority={false}
                            loading="lazy"
                          />
                        ) : (
                          <div 
                            className="w-full h-full rounded-lg"
                            style={{ backgroundColor: record.color }}
                          />
                        )}
                      </div>
                      
                      {/* Album info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-xs font-semibold truncate">
                          {record.title}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <span className="text-blue-200 text-xs truncate">
                            {record.artist}
                          </span>
                          <span className="text-xs text-blue-100 font-semibold">
                            {record.year}
                          </span>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ANALYZE section - Music taste analytics */}
                <motion.div
                  className="space-y-2 absolute inset-0 px-4 pt-2"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.65, 0.67, 0.78, 0.80], [0, 1, 1, 0]),
                    zIndex: 20
                  }}
                >
                  <p className="text-white/80 text-xs font-medium">Music Taste Analysis</p>
                  
                  {/* Genre distribution pie chart */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-xs font-medium mb-3">Genre Distribution</p>
                    <div className="flex items-center space-x-4">
                      {/* Pie chart */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 42 42">
                          {/* Background circle */}
                          <circle
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="3"
                          />
                          
                          {/* Genre segments */}
                          {genreList.map((item, index) => {
                            const strokeDashoffset = 100 - genreList.slice(0, index).reduce((acc, cur) => acc + cur.percentage, 0);
                            return (
                              <motion.circle
                                key={item.genre}
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke={item.color}
                                strokeWidth="3"
                                strokeLinecap="round"
                                style={{
                                  strokeDasharray: genreStrokeDashArr[index],
                                  strokeDashoffset
                                }}
                              />
                            );
                          })}
                        </svg>
                      </div>
                      
                      {/* Legend */}
                      <div className="flex-1 space-y-1">
                        {[
                          { genre: 'Rock', percentage: 45, color: '#EF4444' },
                          { genre: 'Jazz', percentage: 25, color: '#3B82F6' },
                          { genre: 'Electronic', percentage: 20, color: '#8B5CF6' },
                          { genre: 'Classical', percentage: 10, color: '#10B981' }
                        ].map((item, index) => (
                          <motion.div 
                            key={item.genre} 
                            className="flex items-center justify-between"
                            style={{
                              opacity: genreLegendOpacityArr[index],
                              x: genreLegendXArr[index]
                            }}
                          >
                            <div className="flex items-center space-x-1">
                              <div 
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-blue-200 text-xs">{item.genre}</span>
                            </div>
                            <span className="text-white text-xs font-medium">{item.percentage}%</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decade analysis */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-xs font-medium mb-3">Era Preference</p>
                    <div className="grid grid-cols-4 gap-1">
                      {decadeList.map((item, index) => (
                        <div key={item.decade} className="text-center">
                          <div className="h-16 flex items-end justify-center mb-1">
                            <motion.div
                              className="w-4 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                              style={{
                                height: decadeBarHeightArr[index]
                              }}
                            />
                          </div>
                          <p className="text-blue-200 text-xs">{item.decade}</p>
                          <p className="text-white text-xs font-medium">{item.albums}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Listening mood analysis */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-xs font-medium mb-2">Mood Profile</p>
                    <div className="space-y-1">
                      {moodList.map((item, index) => (
                        <div key={item.mood} className="flex items-center justify-between">
                          <span className="text-blue-200 text-xs">{item.mood}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-12 bg-white/10 rounded-full h-1">
                              <motion.div 
                                className="bg-gradient-to-r from-vinyl-400 to-vinyl-500 rounded-full h-1"
                                style={{
                                  width: moodBarWidthArr[index]
                                }}
                              />
                            </div>
                            <span className="text-white text-xs w-6">{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* SNAP section - Simple app interface */}
                <motion.div
                  className="space-y-3 relative px-4"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.35, 0.40, 0.48, 0.50], [1, 1, 1, 0]),
                    zIndex: 5
                  }}
                >
                  {/* Main feature area */}
                  <div className="bg-black rounded-2xl h-[445px] flex items-center justify-center">
                    {/* Camera Preview Container */}
                    <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
                      
                      {/* Camera Frame Lines */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-white/40 rounded-3xl"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.36, 0.38], [0, 1])
                        }}
                      />
                      <motion.div 
                        className="absolute inset-0 border border-white/25 rounded-2xl"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.37, 0.39], [0, 1])
                        }}
                      />
                      
                      {/* Recognizing Status */}
                      <motion.div 
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.42, 0.44], [0, 1])
                        }}
                      >
                        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Recognizing...</span>
                        </div>
                      </motion.div>

                      {/* Album Cover Preview in Camera */}
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2"
                        style={{
                          top: 'calc(50% - 80px)',
                          transform: 'translate(-50%, -50%)',
                          opacity: useTransform(scrollYProgress, [0.40, 0.42], [0, 1])
                        }}
                      >
                        <motion.div 
                          className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl"
                        >
                          {coverImages[randomTopIndex] ? (
                            <Image 
                              src={coverImages[randomTopIndex]} 
                              alt={normalizedVinylRecords.find(record => record.id === randomTopIndex)?.title || 'Album cover'}
                              width={192}
                              height={192}
                              className="w-full h-full object-cover will-change-transform"
                              quality={90}
                              priority={true}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          ) : (
                            <div 
                              className="w-full h-full"
                              style={{ backgroundColor: normalizedVinylRecords.find(record => record.id === randomTopIndex)?.color }}
                            />
                          )}
                        </motion.div>
                      </motion.div>

                      {/* Camera Button */}
                      <motion.div 
                        className="absolute bottom-[74px] left-1/2 transform -translate-x-1/2"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.35, 0.37], [0, 1])
                        }}
                      >
                        <div className="w-16 h-16 rounded-full border-4 border-white bg-white/10 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* TRADE section - Price selection and seller contact */}
                <motion.div
                  className="space-y-2 absolute inset-0 px-4 pt-2"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.80, 0.82, 0.94, 0.96], [0, 1, 1, 0]),
                    zIndex: 30
                  }}
                >
                  <p className="text-white/80 text-xs font-medium">Marketplace</p>
                  
                  {/* Featured album for trade */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                          <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/20 flex-shrink-0 relative">
                        <Image 
                          src="/albums/pink-floyd_dark-side-of-the-moon.webp" 
                          alt="Dark Side of The Moon"
                          fill
                          className="object-cover will-change-transform"
                          sizes="48px"
                          quality={75}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          onError={(e) => {
                            console.warn('Failed to load Dark Side of the Moon image')
                          }}
                        />
                        </div>
                      <div className="flex-1">
                        <h4 className="text-white text-xs font-semibold">Dark Side of The Moon</h4>
                        <p className="text-blue-200 text-xs">Pink Floyd • 1973</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xs font-semibold">Available</p>
                      </div>
                    </div>

                    {/* Price range selection */}
                    <div className="mb-3">
                      <p className="text-white text-xs font-medium mb-2">Select Your Offer</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { price: '$25-35', label: 'Good', color: 'bg-blue-500/20 border-blue-400' },
                          { price: '$40-55', label: 'Very Good', color: 'bg-green-500/20 border-green-400' },
                          { price: '$60-80', label: 'Near Mint', color: 'bg-purple-500/20 border-purple-400' }
                        ].map((option, index) => (
                          <motion.div
                            key={option.price}
                            className={`${option.color} border rounded-lg p-2 text-center cursor-pointer transition-all`}
                            style={{
                              opacity: tradePriceOpacityArr[index],
                              y: tradePriceYArr[index]
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <p className="text-white text-xs font-semibold">{option.price}</p>
                            <p className="text-white/70 text-xs">{option.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Contact seller button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-vinyl-500 to-vinyl-600 text-white text-xs font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
                      style={{
                        opacity: useTransform(scrollYProgress, [0.86, 0.88], [0, 1]),
                        y: useTransform(scrollYProgress, [0.86, 0.88], [20, 0])
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Contact Seller</span>
                    </motion.button>
                  </div>

                  {/* Other listings */}
                  <div className="space-y-2">
                    <p className="text-white/60 text-xs">More Listings</p>
                    {[
                      { title: 'Abbey Road', artist: 'The Beatles', price: '$45-60', condition: 'VG+', image: '/albums/the-beatles_abbey-road.webp' },
                      { title: 'Rumours', artist: 'Fleetwood Mac', price: '$30-40', condition: 'VG', image: '/albums/fleetwood-mac_rumours.webp' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                        style={{
                          opacity: tradeMoreOpacityArr[index],
                          x: tradeMoreXArr[index]
                        }}
                      >
                                                  <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                            <Image 
                              src={item.image} 
                              alt={item.title}
                              fill
                              className="object-cover will-change-transform"
                              sizes="32px"
                              quality={75}
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                              onError={(e) => {
                                console.warn(`Failed to load marketplace image: ${item.image}`)
                              }}
                            />
                            </div>
                          <div>
                            <p className="text-white text-xs font-medium">{item.title}</p>
                            <p className="text-blue-200 text-xs">{item.artist}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-xs font-semibold">{item.price}</p>
                          <p className="text-white/60 text-xs">{item.condition}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom navigation */}
              <div className="px-4 py-3 border-t border-white/10 relative" style={{ zIndex: 1 }}>
                <div className="flex justify-around">
                  {['Collection', 'Scan', 'Wishlist', 'Profile'].map((item, index) => (
                    <div key={item} className="flex flex-col items-center space-y-1">
                      <div className={`w-5 h-5 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/30'}`} />
                      <span className={`text-xs ${index === 0 ? 'text-white' : 'text-white/60'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

                {/* SNAP - Right side, first */}
        <motion.div
          className="absolute z-40 text-white text-right right-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 150px)', // TRADE와 동일한 위치
            y: useTransform(scrollYProgress, (value) => {
              // SNAP: 35%-50% (15% 구간)
              if (value < 0.35) return '100vh'; // 브라우저 최하단
              if (value < 0.38) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.35) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.47) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.50) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.47) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.35, 0.37, 0.48, 0.50], [0, 1, 1, 0])
          }}
        >
          <div className="text-8xl font-bold">Snap</div>
        </motion.div>

        {/* SNAP 원형 도형 - 오른쪽에서 중앙으로, 왼쪽으로 나감 */}
        <motion.div
          className="absolute z-35"
          style={{
            left: '50%',
            top: '50%',
            transform: useTransform(scrollYProgress, (value) => {
              // X축 이동 계산
              let xPos = '0px';
              if (value < 0.38) {
                xPos = '100vw'; // 화면 오른쪽 밖
              } else if (value < 0.40) {
                // 오른쪽에서 중앙으로 들어옴 (2% 구간)
                const progress = (value - 0.38) / 0.02;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                xPos = `${100 - eased * 100}vw`; // 100vw -> 0vw (중앙)
              } else if (value < 0.47) {
                // 중앙에 멈춤 (7% 구간 - SNAP과 동일하게 오래 멈춤)
                xPos = '0px';
              } else if (value < 0.50) {
                // 왼쪽으로 나감 (3% 구간 - SNAP이 올라가는 시간과 동일)
                const progress = (value - 0.47) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                xPos = `${0 - eased * 100}vw`; // 0vw -> -100vw
              } else {
                xPos = '-100vw'; // 화면 왼쪽 밖
              }

              // 완전한 중앙 정렬: translate(-50%, -50%) + 위치 이동 (회전 제거)
              return `translate(calc(-50% + ${xPos}), -50%)`;
            }),
            opacity: 1,
            display: 'none'
          }}
        >
        </motion.div>

        {/* SNAP Cat Image - 왼쪽에서 중앙으로, 왼쪽으로 나감 */}
        <motion.div
          className="absolute z-50"
          style={{
            left: '20%',
            top: 'calc(50% + 190px)',
            x: useTransform(scrollYProgress, (value) => {
              // SNAP 구간: 35%-50%
              if (value < 0.35) return '-100vw'; // 화면 왼쪽 밖
              if (value < 0.37) {
                // 왼쪽에서 중앙으로 들어옴 (2% 구간)
                const progress = (value - 0.35) / 0.02;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `${-100 + eased * 100}vw`; // -100vw -> 0vw (중앙까지)
              }
              if (value < 0.48) {
                // 중앙에서 멈춤 (11% 구간)
                return '0vw';
              }
              if (value < 0.50) {
                // 왼쪽으로 나감 (2% 구간)
                const progress = (value - 0.48) / 0.02;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `${0 - eased * 100}vw`; // 0vw -> -100vw
              }
              return '-100vw'; // 화면 왼쪽 밖
            }),
            y: '-50%',
            opacity: 1,
            display: useTransform(scrollYProgress, (value) => value >= 0.35 && value <= 0.50 ? 'block' : 'none')
          }}
        >
          <Image 
            src="/assets/cat_snap_01.png" 
            alt="Cat with camera for SNAP feature" 
            width={480}
            height={480}
            className="object-contain drop-shadow-2xl will-change-transform bg-transparent"
            quality={90}
            priority={true}
          />
        </motion.div>

        {/* SNAP Subtext - Left side */}
        <motion.div
          className="absolute z-40 text-white text-left left-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 90px)', // TRADE 서브텍스트와 동일한 위치
            y: useTransform(scrollYProgress, (value) => {
              // SNAP 서브텍스트: 36%-51% (15% 구간)
              if (value < 0.36) return '100vh'; // 브라우저 최하단
              if (value < 0.39) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.36) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.48) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.51) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.48) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.36, 0.38, 0.49, 0.51], [0, 1, 1, 0])
          }}
        >
          <div className="text-2xl font-medium">
            {isKorean ? (
              <>
                바이닐을 촬영하세요.<br />AI가 인식합니다.
              </>
            ) : (
              <>
            Capture your vinyl.<br />Let AI recognize it.
              </>
            )}
          </div>
          <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
            {isKorean ? (
              <>
                앨범 재킷에 카메라를 향하기만 하면 됩니다.<br />
                한 번의 스냅으로 충분합니다.<br />
                AI가 앨범, 아티스트, 릴리스를 즉시 인식합니다.<br />
                바코드나 타이핑 불필요.<br />
                커버를 촬영하는 순간부터 컬렉션 구축을 시작하세요.
              </>
            ) : (
              <>
            Just point your camera at the album jacket.<br />
            One snap is all it takes.<br />
            Our AI instantly recognizes the album, artist, and release <br />
            No barcodes, no typing.<br />
            Start building your collection the moment you capture the cover.
              </>
            )}
          </div>
        </motion.div>

                {/* COLLECT - Left side, second */}
        <motion.div
          className="absolute z-40 text-white text-left left-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 150px)', // TRADE와 동일한 위치
            y: useTransform(scrollYProgress, (value) => {
              // COLLECT: 50%-65% (15% 구간)
              if (value < 0.50) return '100vh'; // 브라우저 최하단
              if (value < 0.53) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.50) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.62) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.65) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.62) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.50, 0.52, 0.63, 0.65], [0, 1, 1, 0])
          }}
        >
          <div className="text-8xl font-bold">Collect</div>
        </motion.div>

        {/* COLLECT Vinyl Crate - 오른쪽에서 나와서 오른쪽으로 나감 */}
        <motion.div
          className="absolute z-50"
          style={{
            left: '50%',
            top: 'calc(50% + 280px)',
            x: useTransform(scrollYProgress, (value) => {
              // COLLECT 구간: 50%-65%
              if (value < 0.50) return '100vw'; // 화면 오른쪽 밖
              if (value < 0.52) {
                // 오른쪽에서 중앙으로 들어옴 (2% 구간)
                const progress = (value - 0.50) / 0.02;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `${100 - eased * 100}vw`; // 100vw -> 0vw (중앙까지)
              }
              if (value < 0.63) {
                // 중앙에서 멈춤 (11% 구간)
                return '0vw';
              }
              if (value < 0.65) {
                // 오른쪽으로 나감 (2% 구간)
                const progress = (value - 0.63) / 0.02;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `${0 + eased * 100}vw`; // 0vw -> 100vw
              }
              return '100vw'; // 화면 오른쪽 밖
            }),
            y: '-50%',
            opacity: 1,
            display: useTransform(scrollYProgress, (value) => value >= 0.50 && value <= 0.65 ? 'block' : 'none')
          }}
        >
          <Image 
            src="/assets/cat_collect_01.png" 
            alt="Cat with vinyl collection crate for COLLECT feature" 
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl will-change-transform bg-transparent"
            quality={90}
            loading="lazy"
          />
        </motion.div>

        {/* COLLECT Subtext - Right side */}
        <motion.div
          className="absolute z-40 text-white text-right right-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 90px)', // TRADE 서브텍스트와 동일한 위치
            y: useTransform(scrollYProgress, (value) => {
              // COLLECT 서브텍스트: 51%-66% (15% 구간)
              if (value < 0.51) return '100vh'; // 브라우저 최하단
              if (value < 0.54) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.51) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.63) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.66) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.63) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.51, 0.53, 0.64, 0.66], [0, 1, 1, 0])
          }}
        >
          <div className="text-2xl font-medium">
            {isKorean ? (
              <>
                음악을 정리하세요.<br />추억의 디지털 선반을 만들어보세요.
              </>
            ) : (
              <>
            Organize your music.<br />Build a digital shelf of memories.
              </>
            )}
          </div>
          <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
            {isKorean ? (
              <>
                스캔한 모든 앨범이 디지털 컬렉션의 일부가 됩니다.<br />
                장르, 아티스트, 시대별로 정렬하세요.<br />
                커스텀 플레이리스트를 만들고 잊혀진 보석들을 재발견하세요.<br />
                완벽하게 정리되고 언제나 접근 가능한 바이닐 라이브러리.
              </>
            ) : (
              <>
            Every scanned album becomes part of your digital collection.<br />
            Sort by genre, artist, or era.<br />
            Create custom playlists and rediscover forgotten gems.<br />
            Your vinyl library, perfectly organized and always accessible.
              </>
            )}
          </div>
        </motion.div>

        {/* ANALYZE - Right side, third */}
        <motion.div
          className="absolute z-40 text-white text-right right-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 150px)', // TRADE와 동일한 위치
            y: useTransform(scrollYProgress, (value) => {
              // ANALYZE: 65%-80% (15% 구간)
              if (value < 0.65) return '100vh'; // 브라우저 최하단
              if (value < 0.68) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.65) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.77) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.80) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.77) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.65, 0.67, 0.78, 0.80], [0, 1, 1, 0])
          }}
        >
          <div className="text-8xl font-bold">Analyze</div>
        </motion.div>

        {/* ANALYZE Cat - 왼쪽에서 나와서 왼쪽으로 나감 */}
        <motion.div
          className="absolute z-50"
          style={{
            left: '21%',
            top: 'calc(50% + 200px)',
            x: useTransform(scrollYProgress, (value) => {
              // ANALYZE 구간: 65%-80%
              if (value < 0.65) return '-100vw'; // 화면 왼쪽 밖
              if (value < 0.67) {
                // 왼쪽에서 중앙으로 들어옴 (2% 구간)
                const progress = (value - 0.65) / 0.02;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `${-100 + eased * 100}vw`; // -100vw -> 0vw (중앙까지)
              }
              if (value < 0.78) {
                // 중앙에서 멈춤 (11% 구간)
                return '0vw';
              }
              if (value < 0.80) {
                // 왼쪽으로 나감 (2% 구간)
                const progress = (value - 0.78) / 0.02;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `${0 - eased * 100}vw`; // 0vw -> -100vw
              }
              return '-100vw'; // 화면 왼쪽 밖
            }),
            y: '-50%',
            opacity: 1,
            display: useTransform(scrollYProgress, (value) => value >= 0.65 && value <= 0.80 ? 'block' : 'none')
          }}
        >
          <Image 
            src="/assets/cat_analyze_02.png" 
            alt="Cat with analytics for ANALYZE feature" 
            width={430}
            height={430}
            className="object-contain drop-shadow-2xl will-change-transform bg-transparent lg:scale-x-[-1]"
            quality={90}
            loading="lazy"
          />
        </motion.div>

        {/* ANALYZE Subtext - Left side */}
        <motion.div
          className="absolute z-40 text-white text-left left-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 90px)', // TRADE 서브텍스트와 동일한 위치
            y: useTransform(scrollYProgress, (value) => {
              // ANALYZE 서브텍스트: 66%-81% (15% 구간)
              if (value < 0.66) return '100vh'; // 브라우저 최하단
              if (value < 0.69) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.66) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.78) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.81) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.78) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.66, 0.68, 0.79, 0.81], [0, 1, 1, 0])
          }}
        >
          <div className="text-2xl font-medium">
            {isKorean ? (
              <>
                당신의 취향을 이해하세요.<br />정말 맞는 음악을 찾아보세요.
              </>
            ) : (
              <>
            Understand your taste.<br />Get music that really fits you.
              </>
            )}
          </div>
          <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
            {isKorean ? (
              <>
                AI가 당신의 컬렉션 패턴과 청취 습관을 분석합니다.<br />
                당신만의 스타일에 맞는 새로운 아티스트를 발견하세요.<br />
                당신의 바이닐 DNA를 기반으로 개인화된 추천을 받아보세요.<br />
                당신의 컬렉션을 음악 여행의 지도로 만들어보세요.
              </>
            ) : (
              <>
            Our AI analyzes your collection patterns and listening habits.<br />
            Discover new artists that match your unique style.<br />
            Get personalized recommendations based on your vinyl DNA.<br />
            Turn your collection into a map of your musical journey.
              </>
            )}
          </div>
        </motion.div>

        {/* TRADE - Left side, fourth */}
        <motion.div
          className="absolute z-40 text-white text-left left-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 150px)', // 모바일에서 아이폰 위로 이동
            y: useTransform(scrollYProgress, (value) => {
              // TRADE: 80%-95% (15% 구간)
              if (value < 0.80) return '100vh'; // 브라우저 최하단
              if (value < 0.83) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.80) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.92) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.95) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.92) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.80, 0.82, 0.93, 0.95], [0, 1, 1, 0])
          }}
        >
          <div className="text-8xl font-bold">Trade</div>
        </motion.div>

        {/* TRADE Subtext - Right side */}
        <motion.div
          className="absolute z-40 text-white text-right right-[calc(50%+180px)]"
          style={{
            top: 'calc(50% - 90px)', // 모바일에서 슬로건 아래, 아이폰 위로 이동
            y: useTransform(scrollYProgress, (value) => {
              // TRADE 서브텍스트: 81%-96% (15% 구간)
              if (value < 0.81) return '100vh'; // 브라우저 최하단
              if (value < 0.84) {
                // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
                const progress = (value - 0.81) / 0.03;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
              }
              if (value < 0.93) {
                // 2단계: 화면 중앙에서 멈춤 (9% 구간)
                return '0%';
              }
              if (value < 0.96) {
                // 3단계: 상단으로 올라감 (3% 구간)
                const progress = (value - 0.93) / 0.03;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
              }
              return '-100vh'; // 브라우저 최상단
            }),
            opacity: useTransform(scrollYProgress, [0.81, 0.83, 0.94, 0.96], [0, 1, 1, 0])
          }}
        >
          <div className="text-2xl font-medium">
            {isKorean ? '당신의 컬렉션을 수익으로 바꾸세요.' : 'Turn your collection into profit.'}
          </div>
          <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
            {isKorean ? (
              <>
                마켓플레이스를 통해 전 세계 컬렉터들과 연결하세요.<br />
                상태와 희귀성에 따른 실시간 가치 평가를 받아보세요.<br />
                다른 애호가들과 거래하고, 판매하고, 희귀한 발견을 해보세요.<br />
                당신의 열정을 번창하는 바이닐 비즈니스로 변화시키세요.
              </>
            ) : (
              <>
            Connect with collectors worldwide through our marketplace.<br />
            Get real-time valuations based on condition and rarity.<br />
            Trade, sell, or discover rare finds from other enthusiasts.<br />
            Transform your passion into a thriving vinyl business.
              </>
            )}
          </div>
        </motion.div>

        {/* TRADE Cat - 오른쪽에서 나와서 오른쪽으로 나감 (COLLECT와 동일) */}
        <motion.div
          className="absolute z-50"
          style={{
            left: '50%',
            top: 'calc(50% + 280px)',
            x: useTransform(scrollYProgress, (value) => {
              // TRADE 구간: 80%-95%
              if (value < 0.80) return '100vw'; // 화면 오른쪽 밖
              if (value < 0.82) {
                // 오른쪽에서 중앙으로 들어옴 (2% 구간)
                const progress = (value - 0.80) / 0.02;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                return `${100 - eased * 100}vw`; // 100vw -> 0vw (중앙까지)
              }
              if (value < 0.93) {
                // 중앙에서 멈춤 (11% 구간)
                return '0vw';
              }
              if (value < 0.95) {
                // 오른쪽으로 나감 (2% 구간)
                const progress = (value - 0.93) / 0.02;
                const eased = Math.pow(progress, 2); // ease-in quadratic
                return `${0 + eased * 100}vw`; // 0vw -> 100vw
              }
              return '100vw'; // 화면 오른쪽 밖
            }),
            y: '-50%',
            opacity: 1,
            display: useTransform(scrollYProgress, (value) => value >= 0.80 && value <= 0.95 ? 'block' : 'none')
          }}
        >
          <Image 
            src="/assets/cat_trade_01.png" 
            alt="Cat with trading interface for TRADE feature" 
            width={576}
            height={576}
            className="object-contain drop-shadow-2xl will-change-transform bg-transparent"
            quality={90}
            loading="lazy"
          />
        </motion.div>

        {/* Thank You Message - appears when iPhone disappears */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 text-center"
          style={{
            opacity: useTransform(scrollYProgress, [0.96, 0.98, 1.0], [0, 1, 1])
          }}
        >
          <div className="text-white text-5xl font-bold mb-4 leading-tight">
            {isKorean ? (
              <>
                레코드로 연결되고,<br />
                연결로 이야기를 만듭니다.
              </>
            ) : (
              <>
                Through records, we connect.<br />
                Through connection, we create.
              </>
            )}
          </div>
        </motion.div>

        {/* Animated Kolektt Typography - transforms from center to header */}
        <motion.div
          className="fixed left-1/2 z-50"
          style={{
            top: useTransform(scrollYProgress, (value) => {
              const progress = Math.min(Math.max((value - 0) / (0.2 - 0), 0), 1);
              const easedProgress = progress * progress; // ease-in (quadratic)
              const startVh = 40;
              const endRem = -2;
              return progress === 0 ? `${startVh}vh` : progress === 1 ? `${endRem}rem` : `calc(${startVh - easedProgress * startVh}vh + ${easedProgress * endRem}rem)`;
            }),
            x: '-50%',
            //y: useTransform(scrollYProgress, [0, 0.2], ['-50%', '0%']),
            scale: useTransform(scrollYProgress, (value) => {
              const progress = Math.min(Math.max((value - 0) / (0.2 - 0), 0), 1);
              const easedProgress = progress * progress; // ease-in (quadratic)
              return 1 - (easedProgress * 0.8);
            }),
          }}
        >
          <div className="text-center">
            <div className="relative">
              <motion.h1 
                className="font-black select-none pointer-events-none"
                style={{
                  color: '#ffffff',
                  fontSize: useTransform(scrollYProgress, [0, 0.2], ['12rem', '8.4375rem']),
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  letterSpacing: useTransform(scrollYProgress, [0, 0.2], ['-0.05em', '-0.02em']),
                  lineHeight: useTransform(scrollYProgress, [0, 0.2], ['0.8', '1']),
                  filter: useTransform(
                    scrollYProgress, 
                    [0, 0.2], 
                    ['drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))', 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))']
                  )
                }}
              >
                Kolektt
              </motion.h1>
              
              {/* Beta Service Sticker */}
              <motion.div
                className="absolute -top-4 -right-8 select-none pointer-events-none"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                  scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
                }}
              >
                <BetaServiceSticker
                  scrollYProgress={scrollYProgress}
                  rotate={true}
                  rotationDuration={8}
                  size={isPc ? 115 : 77}
                  baseSize={isPc ? 96 : 64}
                  backgroundColor="#0036ff"
                  textColor="white"
                  text="Beta service opening in July •"
                  fontSize={isPc ? { initial: '12px', final: '10.5px' } : { initial: '8px', final: '7px' }}
                />
              </motion.div>
            </div>
            
            {/* Subtitle */}
            <motion.div
              className="mt-4 select-none pointer-events-none"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
              }}
            >
              <div className="text-white/90 font-medium text-xl" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                {isKorean ? '레코드로 연결되고,연결로 이야기를 만듭니다.' : 'Through records, we connect. Through connection, we create.'}
              </div>
            </motion.div>
          </div>
        </motion.div>







      </div>
    </div>
  )
} 