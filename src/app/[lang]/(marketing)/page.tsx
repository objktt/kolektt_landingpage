"use client";

import Link from "next/link";
import Script from "next/script";
import { use, useState } from "react";
import type { Locale } from "@/config/i18n-config";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import Testimonials from "@/components/ui/testimonials";
import KolekttPricing from "@/components/ui/kolektt-pricing";
import { CollectionBento } from "@/components/ui/collection-bento";
import CursorTrail from "@/components/CursorTrail";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/toast";
import {
  Camera,
  Robot,
  Lightning,
  Target,
  ChartBar,
  MapPin,
  CurrencyDollar,
  Trophy,
  Brain,
  Globe,
  Lock,
  CheckCircle,
  Money,
  Sparkle,
  CaretDown,
  CaretUp,
} from "phosphor-react";

export default function IndexPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = use(params);
  const { showToast } = useToast();
  
  // State for accordion functionality
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleDownloadClick = () => {
    showToast(
      lang === 'ko' ? '곧 출시 예정입니다! 🎉' : 'Coming Soon! 🎉',
      'info'
    );
  };
  
  return (
    <>
      {/* Cursor Trail Effect */}
      <CursorTrail />
      
      {/* Hero & Demo Container */}
      <div id="hero-demo-container" className="relative pt-20">

        {/* Hero Banner */}
        <div id="hero" className="px-[5%] z-10 relative">
          <div className="bg-transparent relative rounded-[40px] overflow-hidden min-h-[600px] flex items-center">
            <div
              id="hero-three"
              className="absolute inset-0 z-0 pointer-events-none"
              aria-hidden="true"
            ></div>

            {/* Particles Background */}
            {/* <div className="absolute inset-0 z-[1] pointer-events-none" style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Particles
                  particleColors={['#ffffff', '#ffffff']}
                  particleCount={200}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={100}
                  moveParticlesOnHover={true}
                  alphaParticles={false}
                  disableRotation={false}
                />
              </div> */}

            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-[2]">
              <div className="flex justify-center">
                <div className="w-full text-center">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-none mb-6">
                    All your<br />collections<br />begin here
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 mb-12">
                    {lang === 'ko' ? (
                      <>레코드 컬렉터를 위한 스마트 플랫폼.<br />
                      카메라 기반 자동 인식, 메타데이터 수집, 투자 인사이트로<br />
                      당신의 컬렉션을 쉽게 수집하고, 관리하며, 거래까지</>
                    ) : (
                      <>Smart platform for Record Collectors.<br />
                      Easily collect, manage, and trade your collection<br />
                      with camera-based automatic recognition, metadata collection, and investment insights.</>
                    )}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4">
                    <button
                      type="button"
                      onClick={handleDownloadClick}
                      className="flex items-center text-white transition-colors px-6 py-3 rounded-lg border-none min-w-[200px] bg-black hover:bg-gray-800 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 22.773 22.773"
                      >
                        <path
                          d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                          data-original="#000000"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Download on the
                        </p>
                        <span className="text-lg font-semibold text-white">
                          App Store
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadClick}
                      className="flex items-center text-white transition-colors px-6 py-3 rounded-lg border-none min-w-[200px] bg-black hover:bg-gray-800 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#57cef3"
                          d="M7 3v58l33-29z"
                          data-original="#57cef3"
                        />
                        <path
                          fill="#fff200"
                          d="m36 32 8-10 15 10-15 10z"
                          data-original="#fff200"
                        />
                        <path
                          fill="#48ff48"
                          d="M36 32 7 3h4l34 20z"
                          data-original="#48ff48"
                        />
                        <path
                          fill="#ff6c58"
                          d="M36 32 7 61h4l34-20z"
                          data-original="#ff6c58"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Get it on
                        </p>
                        <span className="text-lg font-semibold text-white">
                          Google Play
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Snap Section */}
        <section className="px-[5%] mt-5">
          <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:pr-12">
                    <div className="mb-8">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4">
                        Snap
                      </h2>
                    </div>
                    <p className="text-2xl text-white mb-10">
                      {lang === 'ko' ? '앨범 촬영으로 간편한 등록' : 'Easy registration with album photography'}
                    </p>
                    <p className="text-xl text-white mb-10">
                      {lang === 'ko' ? (
                        <>앨범 커버를 촬영하기만 하면 AI가 나머지를 처리합니다. 
                        고급 컴퓨터 비전 기술이 앨범을 즉시 인식하고 모든 메타데이터를 자동으로 채웁니다.</>
                      ) : (
                        <>Simply take a photo of your album cover and let our AI do
                        the rest. Our advanced computer vision technology
                        instantly recognizes albums and automatically fills in all
                        the metadata.</>
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/snap.mp4" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[calc(10%+50px)]"
                          animate={{ y: [-8, 8, -8] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Camera
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                One-tap photo capture
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '촬영만 하면 자동으로 시작됩니다' : 'Simply point and shoot to start'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[calc(25%+50px)]"
                          animate={{ y: [8, -8, 8] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Robot
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                AI-powered recognition
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '고급 ML이 앨범을 식별합니다' : 'Advanced ML identifies albums'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[calc(40%+50px)]"
                          animate={{ y: [-6, 10, -6] }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightning
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Instant metadata retrieval
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '빠르게 이미지를 분석하여 정확한 데이터를 사용자의 컴렉션으로 만듭니다' : 'Quickly analyzes images and creates accurate data for your collection'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[calc(55%+50px)]"
                          animate={{ y: [10, -6, 10] }}
                          transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Target
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                95%+ accuracy rate
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '업계 최고 수준의 정확도를 제공합니다' : 'Delivers industry-leading precision'}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[calc(10%+50px)]"
                          animate={{ y: [-10, 12, -10] }}
                          transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Camera
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                One-tap photo capture
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '촬영만 하면 자동으로 인식이 시작됩니다' : 'Simply point and shoot to start recognition'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[calc(25%+50px)]"
                          animate={{ y: [12, -10, 12] }}
                          transition={{
                            duration: 3.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Robot
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                AI-powered recognition
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '고급 ML이 모든 앨범을 즉시 식별합니다' : 'Advanced ML identifies any album instantly'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[calc(40%+50px)]"
                          animate={{ y: [-8, 14, -8] }}
                          transition={{
                            duration: 4.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Lightning
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Instant metadata retrieval
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '빠르게 이미지를 분석하여 정확한 데이터를 사용자의 컬렉션으로 만듭니다' : 'Quickly analyzes images and creates accurate data for your collection'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[calc(55%+50px)]"
                          animate={{ y: [14, -8, 14] }}
                          transition={{
                            duration: 4.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Target
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                95%+ accuracy rate
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '업계 최고 수준의 정확도와 신뢰성을 제공합니다' : 'Delivers industry-leading precision and reliability'}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collect Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-transparent pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:order-last">
                  <div className="lg:pl-12">
                    <div className="mb-8">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-4">
                        Collect
                      </h2>
                    </div>
                    <p className="text-2xl text-gray-700 mb-10">
                      {lang === 'ko' ? '체계적인 컬렉션 관리' : 'Systematic collection management'}
                    </p>
                    <p className="text-xl text-gray-600 mb-10">
                      {lang === 'ko' ? (
                        <>컬렉션을 그 어느 때보다 체계적으로 정리하세요. 
                        상태, 희귀도, 시장 가치 및 개인 메모를 추적합니다. 
                        수집 패턴에 대한 인사이트를 생성하고 컬렉션의 부족한 부분을 발견하세요. 
                        또한 단순히 컬렉션을 기록하는 것에 그치지 않고, 사용자의 취향과 앨범 가격 변동을 기반으로 맞춤형 컬렉션을 제안하며, 음반의 가치까지 지속적으로 추적할 수 있어 전문적인 관리가 가능합니다.</>
                      ) : (
                        <>Organize your collection like never before. Track
                        condition, rarity, market value, and personal notes.
                        Generate insights about your collecting patterns and
                        discover gaps in your collection.</>
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:order-first">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/collect.MP4" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[calc(10%+50px)]"
                          animate={{ y: [-9, 11, -9] }}
                          transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <ChartBar
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Advanced analytics dashboard
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '트렌드에 대한 깊은 인사이트를 제공합니다' : 'Provides deep insights into trends'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[calc(25%+50px)]"
                          animate={{ y: [11, -9, 11] }}
                          transition={{
                            duration: 3.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Real-time market valuations
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '실시간으로 가격을 업데이트합니다' : 'Updates pricing in real-time'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[calc(40%+50px)]"
                          animate={{ y: [-7, 13, -7] }}
                          transition={{
                            duration: 4.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Condition tracking system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '마모도와 품질을 모니터링합니다' : 'Monitors wear and quality'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[calc(55%+50px)]"
                          animate={{ y: [13, -7, 13] }}
                          transition={{
                            duration: 3.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Brain
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Smart collection insights
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? 'AI 기반으로 추천합니다' : 'Recommends with AI power'}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[calc(10%+50px)]"
                          animate={{ y: [-11, 13, -11] }}
                          transition={{
                            duration: 4.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <ChartBar
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Advanced analytics dashboard
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '유저의 컬렉션을 분석하여 정확한 취향을 데이터로 제공합니다' : 'Analyzes your collection to provide accurate taste data'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[calc(25%+50px)]"
                          animate={{ y: [13, -11, 13] }}
                          transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <CurrencyDollar
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Real-time market valuations
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '글로벌 시장 가격을 실시간으로 업데이트하여 로컬컬렉터에게 투명하게 제공합니다' : 'Updates global market prices in real-time and provides transparently to local collectors'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[calc(40%+50px)]"
                          animate={{ y: [-9, 15, -9] }}
                          transition={{
                            duration: 4.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Trophy
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Condition tracking system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '앨범 컨디션에 대한 기준점을 제공하고 적정한 가격을 산정합니다' : 'Provides condition standards and calculates appropriate prices'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[calc(55%+50px)]"
                          animate={{ y: [15, -9, 15] }}
                          transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Brain
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Smart collection insights
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '인공지능이 유저의 분석된 취향을 통한 추천으로 취향의 범주를 풍부하게 합니다' : 'AI enriches your taste range through recommendations based on analyzed preferences'}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:pr-12">
                    <div className="mb-8">
                      <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4">
                        Trade
                      </h2>
                    </div>
                    <p className="text-2xl text-white mb-10">
                      {lang === 'ko' ? '로컬 컬렉터들과 교환' : 'Exchange with local collectors'}
                    </p>
                    <p className="text-xl text-white mb-10">
                      {lang === 'ko' ? (
                        <>안전한 거래 플랫폼을 통해 로컬 컬렉터들과 연결하세요. 
                        공정한 시장 가격을 얻고, 정확한 기준에 의한 상태 검증으로 안심하고 거래하세요. 
                        Kolektt만의 배송 시스템으로 더욱 안전하고 신뢰할 수 있는 거래를 보장합니다. 
                        신뢰할 수 있는 컬렉터들과의 네트워크를 구축하고, 리즈너블한 가격으로 컬렉션을 완성해보세요.</>
                      ) : (
                        <>Connect with local collectors through our secure
                        trading platform. Get fair market prices, verify
                        condition with accurate standards, and trade with confidence. Build your
                        network and discover rare finds.</>
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/trade.mp4" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[calc(10%+50px)]"
                          animate={{ y: [-10, 12, -10] }}
                          transition={{
                            duration: 4.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Globe
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Local collector network
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '신뢰도 높은 로컬 컬렉터와 손쉽게 거래합니다' : 'Trade easily with trusted local collectors'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[calc(25%+50px)]"
                          animate={{ y: [12, -10, 12] }}
                          transition={{
                            duration: 3.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Lock
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Secure escrow system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '보호 기능으로 안전하게 거래합니다' : 'Trade safely with protection features'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[calc(40%+50px)]"
                          animate={{ y: [-8, 14, -8] }}
                          transition={{
                            duration: 4.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkle
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Condition verification
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '정확한 기준으로 상태를 검증합니다' : 'Verify condition with accurate standards'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[calc(55%+50px)]"
                          animate={{ y: [14, -8, 14] }}
                          transition={{
                            duration: 4.0,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Money
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Fair market pricing
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '데이터 기반으로 투명하게 가격을 책정합니다' : 'Price transparently based on data'}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[calc(10%+50px)]"
                          animate={{ y: [-12, 14, -12] }}
                          transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Globe
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Local collector network
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '신뢰도 높은 로컬 컬렉터와 손쉽게 거래합니다' : 'Trade easily with trusted local collectors'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[calc(25%+50px)]"
                          animate={{ y: [14, -12, 14] }}
                          transition={{
                            duration: 3.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Lock
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Secure escrow system
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? 'Kolektt의 안전한 거래시스템으로 안전하게 거래합니다' : 'Trade safely with Kolektt\'s secure trading system'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[calc(40%+50px)]"
                          animate={{ y: [-10, 16, -10] }}
                          transition={{
                            duration: 5.0,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <CheckCircle
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Condition verification
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '정확한 기준으로 상태를 측정합니다' : 'Measure condition with accurate standards'}
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[calc(55%+50px)]"
                          animate={{ y: [16, -10, 16] }}
                          transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Money
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Fair market pricing
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              {lang === 'ko' ? '실제 데이터로 투명하게 가격을 책정합니다' : 'Price transparently with real data'}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Smart Technology Section */}
      <div className="px-[5%] mt-20">
        <div className="bg-transparent pt-32 lg:pt-28 pb-32 lg:pb-28 rounded-[40px] overflow-hidden">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[600px]">
              <div className="w-full lg:w-1/2 lg:order-last">
                <div className="lg:ml-12 xl:pl-8 flex flex-col justify-center">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      {lang === 'ko' ? (
                        <>
                          레코드 컬렉터를 위한<br />
                          스마트 기술
                        </>
                      ) : (
                        'Smart technology for Record Collectors'
                      )}
                    </h2>
                  </div>

                  <div className="mb-10">
                    {/* Smart Recognition Engine Accordion */}
                    <div className="border-b border-gray-200 pb-6">
                      <button
                        className="w-full text-left py-4 hover:bg-gray-50 transition-colors flex items-center justify-between focus:outline-none rounded-lg"
                        onClick={() => toggleAccordion(0)}
                      >
                        <h3 className="font-semibold text-gray-800 text-xl">
                          {lang === 'ko' ? '스마트 인식 엔진' : 'Smart Recognition Engine'}
                        </h3>
                        {openAccordion === 0 ? (
                          <CaretUp size={24} className="text-gray-600" />
                        ) : (
                          <CaretDown size={24} className="text-gray-600" />
                        )}
                      </button>
                      {openAccordion === 0 && (
                        <div className="pb-4">
                          <p className="text-xl text-gray-700">
                            {lang === 'ko' ? (
                              <>AI 비전 기술과 머신러닝이 카메라를 통해 앨범 커버를 즉시 식별하고, 
                              아티스트, 발매 연도, 트랙리스트, 프레싱 정보를 95% 이상의 정확도로 자동 매칭합니다. 
                              희귀 에디션도 포함됩니다.</>
                            ) : (
                              <>AI vision technology and ML instantly identify album covers
                              via camera, automatically matching artist, release
                              year, tracklist, and pressing info with 95%+ accuracy,
                              including rare editions.</>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Metadata Collection System Accordion */}
                    <div className="border-b border-gray-200 pb-6">
                      <button
                        className="w-full text-left py-4 hover:bg-gray-50 transition-colors flex items-center justify-between focus:outline-none rounded-lg"
                        onClick={() => toggleAccordion(1)}
                      >
                        <h3 className="font-semibold text-gray-800 text-xl">
                          {lang === 'ko' ? '메타데이터 수집 시스템' : 'Metadata Collection System'}
                        </h3>
                        {openAccordion === 1 ? (
                          <CaretUp size={24} className="text-gray-600" />
                        ) : (
                          <CaretDown size={24} className="text-gray-600" />
                        )}
                      </button>
                      {openAccordion === 1 && (
                        <div className="pb-4">
                          <p className="text-xl text-gray-700">
                            {lang === 'ko' ? (
                              <>사용자의 등록, 평가, 거래 행동을 통해 지속적으로 레코드 데이터를 수집합니다. 
                              상태, 품질, 희귀도, 시장 가격에 대한 실시간 업데이트로 
                              세계에서 가장 정확한 바이닐 데이터베이스를 구축합니다.</>
                            ) : (
                              <>Continuously collects record data through user
                              behaviors - registration, ratings, trading. Real-time
                              updates on condition, quality, rarity, and market
                              prices build the world's most accurate vinyl database.</>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* AI Investment Advisor Accordion */}
                    <div className="pb-6">
                      <button
                        className="w-full text-left py-4 hover:bg-gray-50 transition-colors flex items-center justify-between focus:outline-none rounded-lg"
                        onClick={() => toggleAccordion(2)}
                      >
                        <h3 className="font-semibold text-gray-800 text-xl">
                          {lang === 'ko' ? 'AI 투자 자문' : 'AI Investment Advisor'}
                        </h3>
                        {openAccordion === 2 ? (
                          <CaretUp size={24} className="text-gray-600" />
                        ) : (
                          <CaretDown size={24} className="text-gray-600" />
                        )}
                      </button>
                      {openAccordion === 2 && (
                        <div className="pb-4">
                          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 rounded">
                            <p className="text-sm font-semibold text-amber-800 mb-1">
                              {lang === 'ko' ? '🚧 현재 개발 중' : '🚧 Currently in Development'}
                            </p>
                            <p className="text-sm text-amber-700">
                              {lang === 'ko' ? '이 기능은 2025년 하반기 출시 예정입니다' : 'This feature is planned for release in H2 2025'}
                            </p>
                          </div>
                          <p className="text-xl text-gray-700 mb-4">
                            {lang === 'ko' ? (
                              <>우리는 바이닐 레코드 소유자가 컬렉션의 가치를 이해하고 성장시킬 수 있도록 돕는 AI 기반 투자 인사이트 시스템을 개발하고 있습니다.</>
                            ) : (
                              <>We are developing an AI-powered investment insight system to help vinyl record owners understand and grow the value of their collections.</>
                            )}
                          </p>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <p className="text-lg">
                                {lang === 'ko' ? (
                                  <><strong>시장 트렌드 분석:</strong> 실시간 거래 데이터를 기반으로 레코드 가격 변동과 수요 패턴을 추적합니다</>
                                ) : (
                                  <><strong>Market Trend Analysis:</strong> Track record price movements and demand patterns based on real-time transaction data</>
                                )}
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <p className="text-lg">
                                {lang === 'ko' ? (
                                  <><strong>가치 성장 잠재력:</strong> 희귀도, 상태, 역사적 가격 추세를 고려하여 미래 가치가 상승할 가능성이 있는 레코드를 식별합니다</>
                                ) : (
                                  <><strong>Value Growth Potential:</strong> Identify records with potential for future value appreciation based on rarity, condition, and historical price trends</>
                                )}
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <p className="text-lg">
                                {lang === 'ko' ? (
                                  <><strong>개인화된 추천:</strong> 당신의 컬렉션 스타일과 예산에 맞는 투자 가치가 있는 레코드를 제안합니다</>
                                ) : (
                                  <><strong>Personalized Recommendations:</strong> Suggest investment-worthy records that match your collection style and budget</>
                                )}
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <p className="text-lg">
                                {lang === 'ko' ? (
                                  <><strong>컬렉션 포트폴리오:</strong> 시간에 따른 컬렉션의 총 가치 변화를 추적하고 투자 성과를 시각화합니다</>
                                ) : (
                                  <><strong>Collection Portfolio:</strong> Track your collection's total value over time and visualize investment performance</>
                                )}
                              </p>
                            </div>
                          </div>
                          <p className="text-base text-gray-600 mt-4 italic">
                            {lang === 'ko' ? (
                              '참고: 이 기능은 투자 조언이 아닌 정보 제공 목적으로만 제공됩니다. 레코드 컬렉션은 문화적 가치와 개인적 즐거움을 위한 것이며, 금융 투자 상품이 아닙니다.'
                            ) : (
                              'Note: This feature is for informational purposes only, not investment advice. Record collecting is for cultural value and personal enjoyment, not a financial investment product.'
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:order-first">
                <div className="relative mt-16 lg:mt-0">
                  <div className="h-[500px] lg:h-[600px] bg-transparent rounded-lg flex items-center justify-center p-5">
                    <img
                      src="/images/assets/04.png"
                      alt="Smart Technology Analytics"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Ecosystem Section */}
      <div className="px-[5%] relative z-10 mt-36 lg:mt-20">
        <div className="bg-black rounded-[40px] py-20 lg:py-24">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full xl:w-2/3 lg:w-5/6">
                <div className="text-center mb-20 lg:mb-10">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                      {lang === 'ko' ? 'Kolektt 에코시스템을 완성하세요' : 'Complete your Kolektt ecosystem'}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <CollectionBento lang={lang} />
            </div>
          </div>
        </div>
      </div>

      {/* New Animated Testimonials Section */}
      <Testimonials lang={lang} />

      {/* Pricing Section */}
      <div className="px-[5%] relative z-10 mt-36 xl:mt-32 lg:mt-20">
        <div className="bg-black rounded-[40px] py-12 lg:py-16">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <KolekttPricing lang={lang} />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <section className="px-[5%] mt-10">
        <div className="pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                {lang === 'ko' ? '레코드 컬렉션의 새로운 시대' : 'The New Era of Record Collection'}
              </h2>
              <p className="text-2xl text-gray-900 mb-4">
                {lang === 'ko' ? '지금 사전 등록하고 얼리버드 혜택을 받으세요!' : 'Pre-register now and get early bird benefits!'}
              </p>
              <p className="text-xl text-gray-700">
                {lang === 'ko' ? (
                  'AI 기반 스마트 관리, 투자 인사이트, 커뮤니티 거래까지. Kolektt와 함께 당신의 바이닐 컬렉션을 한 단계 업그레이드하세요.'
                ) : (
                  'AI-powered smart management, investment insights, and community trading. Upgrade your vinyl collection experience with Kolektt.'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <motion.div
                      className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0036FF]/20 border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#3934fa', borderRadius: '0' }}>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {lang === 'ko' ? '첫 100명 한정' : 'First 100 Only'}
                      </h3>
                      <p className="mb-4 font-medium text-sm uppercase tracking-wide" style={{ color: '#0036FF' }}>
                        {lang === 'ko' ? '1년 무료 프리미엄' : '1-Year Free Premium'}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {lang === 'ko' ? (
                          '광고 없음, 고급 큐레이션, 프라이빗 컬렉션 등 독점 기능을 12개월간 무료로 이용하세요.'
                        ) : (
                          'Enjoy ad-free experience, advanced curation, private collections, and exclusive features for 12 months absolutely free.'
                        )}
                      </p>
                    </motion.div>
                    <motion.div
                      className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0036FF]/20 border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#3934fa', borderRadius: '32px 0 0 32px' }}>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {lang === 'ko' ? '독점 베타 참여' : 'Exclusive Beta'}
                      </h3>
                      <p className="mb-4 font-medium text-sm uppercase tracking-wide" style={{ color: '#0036FF' }}>
                        {lang === 'ko' ? '출시 전 미리 사용' : 'Try Before Launch'}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {lang === 'ko' ? (
                          '앱 정식 출시 전에 미리 사용하고, 당신의 피드백으로 기능에 영향을 주세요. 테스터 명단에 이름을 남길 수 있습니다.'
                        ) : (
                          'Get early access to the app before official launch and shape its features with your feedback. Optional credit on our tester list.'
                        )}
                      </p>
                    </motion.div>
                    <motion.div
                      className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0036FF]/20 border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#3934fa', borderRadius: '50%' }}>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {lang === 'ko' ? '컬렉터 인증 배지' : 'Collector Badge'}
                      </h3>
                      <p className="mb-4 font-medium text-sm uppercase tracking-wide" style={{ color: '#0036FF' }}>
                        {lang === 'ko' ? '얼리버드 한정 배지' : 'Early Bird Badge'}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {lang === 'ko' ? (
                          '얼리버드 참여자 한정 프로필 배지를 받아보세요. 커뮤니티 내 신뢰도를 높이고 프로필 상단 노출 우선권을 받으세요.'
                        ) : (
                          'Receive an exclusive early bird profile badge. Boost your community trust and get priority profile visibility throughout the platform.'
                        )}
                      </p>
                    </motion.div>
                  </div>

            {/* Download Buttons */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {lang === 'ko' ? '지금 다운로드하고 시작하세요' : 'Download Now and Get Started'}
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <button
                      type="button"
                      onClick={handleDownloadClick}
                      className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-lg border-none min-w-[200px] cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 22.773 22.773"
                      >
                        <path
                          d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                          data-original="#000000"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Download on the
                        </p>
                        <span className="text-lg font-semibold text-white">
                          App Store
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadClick}
                      className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-lg border-none min-w-[200px] cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        fill="#fff"
                        className="mr-3"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#57cef3"
                          d="M7 3v58l33-29z"
                          data-original="#57cef3"
                        />
                        <path
                          fill="#fff200"
                          d="m36 32 8-10 15 10-15 10z"
                          data-original="#fff200"
                        />
                        <path
                          fill="#48ff48"
                          d="M36 32 7 3h4l34 20z"
                          data-original="#48ff48"
                        />
                        <path
                          fill="#ff6c58"
                          d="M36 32 7 61h4l34-20z"
                          data-original="#ff6c58"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="mb-1 text-xs text-white leading-tight">
                          Get it on
                        </p>
                        <span className="text-lg font-semibold text-white">
                          Google Play
                        </span>
                      </div>
                    </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page-specific scripts for home page */}
      <Script
        src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
