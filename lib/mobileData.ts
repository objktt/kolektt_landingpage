export { albums } from './albums';

export const slogans = ['SNAP', 'COLLECT', 'ANALYZE', 'TRADE'];

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