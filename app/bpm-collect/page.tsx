"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Iphone15Pro } from "@/components/marketing/iphone-15-pro";
import BPMCalculator from "@/components/marketing/bpm-calculator";
import UltraSimpleSelector from "@/components/marketing/ultra-simple-selector";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Metronome, MagnifyingGlass, FunnelSimple, Watch } from "@phosphor-icons/react";

export default function BpmCollectPage() {
  const [bpm, setBpm] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();

  const content = {
    KO: {
      hero: {
        title: "BPM Collect",
        description: "직관적인 애니메이션으로 BPM을 측정하고, Discogs 통합 검색, 장르 기반 분류로 완벽한 세트리스트를 만드세요.",
        download: "다운로드",
        appStore: "App Store",
      },
      experience: {
        title: "지금 체험해보세요",
        description: "버튼을 탭하여 BPM을 측정하고 애니메이션을 확인하세요",
      },
      features: {
        title: "주요 기능",
        items: [
          {
            title: "BPM 측정",
            description: "직관적인 탭 인터페이스와 시각적 애니메이션",
          },
          {
            title: "Discogs 통합",
            description: "완전한 메타데이터로 트랙 검색 및 저장",
          },
          {
            title: "장르 분류",
            description: "스마트 BPM 기반 장르 정렬 및 분류",
          },
          {
            title: "Apple Watch 연동",
            description: "손목에서 BPM을 자유롭게 제어",
          },
        ],
      },
      forEveryone: {
        title: "모두를 위한",
        description: "모든 음악 전문가와 애호가를 위한 완벽한 솔루션",
        users: [
          {
            title: "클럽 DJ",
            subtitle: "프로페셔널 공연을 위한",
            description: "클럽 나이트를 위한 완벽한 세트리스트 제작. 정확한 BPM 매칭으로 매끄러운 전환을 만드세요.",
          },
          {
            title: "모바일 DJ",
            subtitle: "이벤트와 공연을 위한",
            description: "현장에서 즉시 BPM 측정. 공연 중에도 트랙을 실시간으로 분석하세요.",
          },
          {
            title: "음악 컬렉터",
            subtitle: "바이닐 애호가를 위한",
            description: "체계적인 바이닐 레코드 관리. 정확한 BPM 데이터와 포괄적인 메타데이터로 컬렉션을 정리하세요.",
          },
          {
            title: "음악 프로듀서",
            subtitle: "스튜디오 프로덕션을 위한",
            description: "프로덕션을 위한 참고 트랙 BPM 분석. 템포를 완벽하게 매칭하고 전문가급 음악을 만드세요.",
          },
        ],
      },
    },
    EN: {
      hero: {
        title: "BPM Collect",
        description: "Measure BPM with intuitive animations, search Discogs integration, and create perfect setlists with genre-based classification.",
        download: "Download on the",
        appStore: "App Store",
      },
      experience: {
        title: "Experience It Now",
        description: "Tap the button to measure BPM and see the animations in action",
      },
      features: {
        title: "Key Features",
        items: [
          {
            title: "BPM Measurement",
            description: "Intuitive tap-to-measure interface with visual animations",
          },
          {
            title: "Discogs Integration",
            description: "Search and save tracks with complete metadata",
          },
          {
            title: "Genre Classification",
            description: "Smart BPM-based genre sorting and categorization",
          },
          {
            title: "Apple Watch Integration",
            description: "Hands-free BPM control from your wrist",
          },
        ],
      },
      forEveryone: {
        title: "For Everyone",
        description: "Perfect for every music professional and enthusiast",
        users: [
          {
            title: "Club DJ",
            subtitle: "For Professional Performances",
            description: "Perfect setlist creation for club nights. Create seamless transitions with precise BPM matching.",
          },
          {
            title: "Mobile DJ",
            subtitle: "For Events and Gigs",
            description: "On-site instant BPM measurement. Analyze tracks on the fly during events without interrupting your performance.",
          },
          {
            title: "Music Collector",
            subtitle: "For Vinyl Enthusiasts",
            description: "Systematic vinyl record management. Organize your collection with precise BPM data and comprehensive metadata.",
          },
          {
            title: "Music Producer",
            subtitle: "For Studio Productions",
            description: "Reference track BPM analysis for your productions. Match tempos perfectly and create professional-quality music.",
          },
        ],
      },
    },
  };

  const data = content[language] || content.EN;

  const handleTap = () => {
    setIsActive(true);
  };

  const handleBpmChange = (newBpm: number) => {
    setBpm(newBpm);
    if (newBpm === 0) {
      setIsActive(false);
    }
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"}`}>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-primary"} leading-tight`}>
                {data.hero.title}
              </h1>
              <p className={`text-xl md:text-2xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed mb-12`}>
                {data.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <a
                  href="https://apps.apple.com/kr/app/bpm-collect/id6751521767?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg min-w-[200px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    fill="#fff"
                    className="mr-3"
                    viewBox="0 0 22.773 22.773"
                  >
                    <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                  </svg>
                  <div className="text-left">
                    <p className="mb-1 text-xs text-white leading-tight">
                      {data.hero.download}
                    </p>
                    <span className="text-lg font-semibold text-white">
                      {data.hero.appStore}
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-[320px] lg:max-w-[400px]"
            >
              <Iphone15Pro videoSrc="/videos/bpm_demo.mp4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Experience Section */}
      <section className={`py-20 lg:py-28 ${theme === "dark" ? "bg-[#1A1A1A]" : "bg-white"}`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-primary"}`}>
              {data.experience.title}
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
              {data.experience.description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            <div className="flex-1 flex justify-center">
              <BPMCalculator onTap={handleTap} onBpmChange={handleBpmChange} />
            </div>

            <div className="flex-1 flex justify-center">
              <UltraSimpleSelector isActive={isActive} bpm={bpm} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-primary"}`}>
              {data.features.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Metronome size={64} weight="thin" className="text-accent mx-auto mb-6" />
              <h3 className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.features.items[0].title}
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                {data.features.items[0].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <MagnifyingGlass size={64} weight="thin" className="text-accent mx-auto mb-6" />
              <h3 className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.features.items[1].title}
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                {data.features.items[1].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <FunnelSimple size={64} weight="thin" className="text-accent mx-auto mb-6" />
              <h3 className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.features.items[2].title}
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                {data.features.items[2].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Watch size={64} weight="thin" className="text-accent mx-auto mb-6" />
              <h3 className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.features.items[3].title}
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                {data.features.items[3].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Everyone Section */}
      <section className={`py-20 lg:py-28 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-white"}`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-primary"}`}>
              {data.forEveryone.title}
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} max-w-3xl mx-auto`}>
              {data.forEveryone.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border overflow-hidden ${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"}`}
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/club_dj_bg.png"
                  alt="Club DJ"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative z-10">
              <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>{data.forEveryone.users[0].title}</h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                {data.forEveryone.users[0].subtitle}
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                {data.forEveryone.users[0].description}
              </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border overflow-hidden ${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"}`}
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/mobile_dj_bg.png"
                  alt="Mobile DJ"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative z-10">
              <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.forEveryone.users[1].title}
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                {data.forEveryone.users[1].subtitle}
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                {data.forEveryone.users[1].description}
              </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border overflow-hidden ${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"}`}
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/vinyl_collector_bg.png"
                  alt="Vinyl Collector"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative z-10">
              <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.forEveryone.users[2].title}
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                {data.forEveryone.users[2].subtitle}
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                {data.forEveryone.users[2].description}
              </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`relative rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border overflow-hidden ${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"}`}
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/music_producer_bg.png"
                  alt="Music Producer"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative z-10">
              <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {data.forEveryone.users[3].title}
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                {data.forEveryone.users[3].subtitle}
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                {data.forEveryone.users[3].description}
              </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
