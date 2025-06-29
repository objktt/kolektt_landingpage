// 역사상 가장 아이코닉한 앨범 커버들 (UpVenue 기사 참조)
export const vinylRecords = [
  { id: 1, x: 15, y: 20, rotation: -25, color: '#3B82F6', title: 'Abbey Road', artist: 'The Beatles' },
  { id: 2, x: 75, y: 15, rotation: 45, color: '#8B5CF6', title: 'Dark Side of the Moon', artist: 'Pink Floyd' },
  { id: 3, x: 25, y: 70, rotation: -15, color: '#EF4444', title: 'Nevermind', artist: 'Nirvana' },
  { id: 4, x: 85, y: 65, rotation: 30, color: '#06B6D4', title: 'Rumours', artist: 'Fleetwood Mac' },
  { id: 5, x: 45, y: 25, rotation: -35, color: '#0036ff', title: 'The Velvet Underground & Nico', artist: 'The Velvet Underground' },
  { id: 6, x: 65, y: 80, rotation: 20, color: '#10B981', title: '조용필 1집', artist: '조용필' },
  { id: 7, x: 10, y: 85, rotation: -10, color: '#1F2937', title: 'Master of Puppets', artist: 'Metallica' },
  { id: 8, x: 90, y: 30, rotation: 40, color: '#DC2626', title: 'Maggot Brain', artist: 'Funkadelic' },
  { id: 9, x: 5, y: 50, rotation: 15, color: '#EC4899', title: 'Unknown Pleasures', artist: 'Joy Division' },
  { id: 10, x: 95, y: 55, rotation: -30, color: '#8B5A2B', title: 'London Calling', artist: 'The Clash' },
  { id: 11, x: 35, y: 10, rotation: 25, color: '#6366F1', title: 'The Rise and Fall of Ziggy Stardust', artist: 'David Bowie' },
  { id: 12, x: 55, y: 90, rotation: -20, color: '#002edb', title: 'Pet Sounds', artist: 'The Beach Boys' },
  { id: 13, x: 20, y: 40, rotation: 35, color: '#84CC16', title: 'Music for the Jilted Generation', artist: 'The Prodigy' },
  { id: 14, x: 80, y: 45, rotation: -40, color: '#06B6D4', title: 'It\'s Blitz!', artist: 'Yeah Yeah Yeahs' },
  { id: 15, x: 40, y: 60, rotation: 50, color: '#A855F7', title: 'The Wall', artist: 'Pink Floyd' },
  { id: 16, x: 70, y: 25, rotation: -5, color: '#EF4444', title: 'Led Zeppelin IV', artist: 'Led Zeppelin' },
  { id: 17, x: 60, y: 35, rotation: 15, color: '#059669', title: 'Never Mind The Bollocks Here\'s The Sex Pistols', artist: 'Sex Pistols' },
  { id: 18, x: 30, y: 75, rotation: -30, color: '#7C3AED', title: 'Thriller', artist: 'Michael Jackson' },
  { id: 19, x: 85, y: 20, rotation: 25, color: '#60a5fa', title: '1984', artist: 'Van Halen' },
  { id: 20, x: 12, y: 35, rotation: -20, color: '#10B981', title: 'Hotel California', artist: 'Eagles' },
  { id: 21, x: 88, y: 70, rotation: 35, color: '#DC2626', title: 'Purple Rain', artist: 'Prince' },
  { id: 22, x: 45, y: 8, rotation: -15, color: '#06B6D4', title: '1집', artist: '신중현과 엽전들' },
  { id: 23, x: 75, y: 88, rotation: 40, color: '#A855F7', title: 'What\'s Going On', artist: 'Marvin Gaye' },
  { id: 24, x: 18, y: 65, rotation: 20, color: '#EF4444', title: 'Born to Die', artist: 'Lana Del Rey' },
  { id: 25, x: 92, y: 40, rotation: -35, color: '#84CC16', title: 'OK Computer', artist: 'Radiohead' },
  { id: 26, x: 38, y: 82, rotation: 30, color: '#6366F1', title: 'The Chronic', artist: 'Dr. Dre' },
  { id: 27, x: 82, y: 12, rotation: -10, color: '#0025b8', title: 'Appetite for Destruction', artist: 'Guns N\' Roses' },
  { id: 28, x: 25, y: 55, rotation: 45, color: '#10B981', title: 'Disintegration', artist: 'The Cure' },
  { id: 29, x: 68, y: 72, rotation: -25, color: '#DC2626', title: 'Doggystyle', artist: 'Snoop Dogg' },
  { id: 30, x: 52, y: 18, rotation: 15, color: '#7C3AED', title: '산울림 1집', artist: '산울림' },
]

export const slogans = ['SNAP', 'COLLECT', 'ANALYZE', 'TRADE']

// 로컬 앨범 커버 이미지 경로 (public/albums/ 폴더) - 아티스트_앨범명 형식 (숫자 제거)
export const albumCoverUrls: {[key: string]: string} = {
  'Abbey Road': '/albums/the-beatles_abbey-road.webp',
  'Dark Side of the Moon': '/albums/pink-floyd_dark-side-of-the-moon.webp',
  'Nevermind': '/albums/nirvana_nevermind.webp',
  'Rumours': '/albums/fleetwood-mac_rumours.webp',
  'The Velvet Underground & Nico': '/albums/the-velvet-underground_nico.webp',
  '조용필 1집': '/albums/bruce-springsteen_born-to-run.webp',
  'Master of Puppets': '/albums/metallica_master-of-puppets.webp',
  'Maggot Brain': '/albums/funkadelic_maggot-brain.webp',
  'Unknown Pleasures': '/albums/joy-division_unknown-pleasures.webp',
  'London Calling': '/albums/the-clash_london-calling.webp',
  'The Rise and Fall of Ziggy Stardust': '/albums/david-bowie_ziggy-stardust.webp',
  'Pet Sounds': '/albums/the-beach-boys_pet-sounds.webp',
  'Music for the Jilted Generation': '/albums/the-prodigy_music-for-the-jilted-generation.webp',
  'It\'s Blitz!': '/albums/yeah-yeah-yeahs_its-blitz.webp',
  'The Wall': '/albums/pink-floyd_the-wall.webp',
  'Led Zeppelin IV': '/albums/led-zeppelin_iv.webp',
  'Never Mind The Bollocks Here\'s The Sex Pistols': '/albums/sex-pistols_never-mind-the-bollocks.webp',
  'Thriller': '/albums/michael-jackson_thriller.webp',
  '1984': '/albums/van-halen_1984.webp',
  'Hotel California': '/albums/eagles_hotel-california.webp',
  'Purple Rain': '/albums/prince_purple-rain.webp',
  '1집': '/albums/bob-dylan_blonde-on-blonde.webp',
  'What\'s Going On': '/albums/marvin-gaye_whats-going-on.webp',
  'Born to Die': '/albums/lana-del-rey_born-to-die.webp',
  'OK Computer': '/albums/radiohead_ok-computer.webp',
  'The Chronic': '/albums/dr-dre_the-chronic.webp',
  'Appetite for Destruction': '/albums/guns-n-roses_appetite-for-destruction.webp',
  'Disintegration': '/albums/the-cure_disintegration.webp',
  'Doggystyle': '/albums/snoop-dogg_doggystyle.webp',
  '산울림 1집': '/albums/sanullim_1.webp'
}

// SNAP 섹션용 앨범 커버 리스트
export const snapAlbumCovers = [
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

// 로컬 앨범 커버 이미지 가져오기
export const fetchCoverArt = (title: string, artist: string) => {
  return albumCoverUrls[title] || null
} 