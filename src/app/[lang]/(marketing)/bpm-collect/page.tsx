"use client";

import type { Locale } from "@/config/i18n-config";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import BPMCalculator from "@/components/BPMCalculator";
import UltraSimpleSelector from "@/components/UltraSimpleSelector";
// import ParticleBackground from "@/components/ui/particle-background";
import { motion } from "framer-motion";
import { useState, use } from "react";
import { useToast } from "@/components/ui/src/use-toast";
import {
  MusicNote,
  MagnifyingGlass,
  ChartBar,
  Watch,
} from "phosphor-react";

export default function BpmCollectPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = use(params);
  const { toast } = useToast();
  const [currentBpm, setCurrentBpm] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Track if user has started tapping

  const handleTap = () => {
    // Mark that user has started tapping
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  const handleBpmChange = (bpm: number) => {
    setCurrentBpm(bpm);
    // Reset when BPM resets
    if (bpm === 0) {
      setHasStarted(false);
    }
  };

  const handleGooglePlayClick = () => {
    toast({
      title: lang === 'ko' ? 'Google Play 버전 곳 출시 예정입니다! 🚀' : 'Coming Soon to Google Play! 🚀',
      description: lang === 'ko' ? '빠른 시일 내에 Android 버전을 만나보세요.' : 'Meet the Android version soon.',
    });
  };

  return (
    <>
      {/* Particle Background */}
      {/* <ParticleBackground /> */}

      {/* Hero & Demo Container */}
      <div id="hero-demo-container" className="relative pt-20 z-10">

        {/* Hero Banner */}
        <div id="hero" className="px-[5%] z-10 relative">
          <div className="bg-white relative rounded-[40px] overflow-hidden min-h-[600px] flex items-center">
            <div
              id="hero-three"
              className="absolute inset-0 z-0 pointer-events-none"
              aria-hidden="true"
            ></div>
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:pr-12">
                    <div className="mb-8 text-center lg:text-left">
                      <h1 className="text-5xl lg:text-6xl xl:text-9xl font-bold text-gray-900 mb-4">
                        BPM Collect
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-700 mb-10">
                        Measure BPM with intuitive animations, search Discogs
                        integration, and create perfect setlists with
                        genre-based classification. From pro DJs to music
                        enthusiasts.
                      </p>
                      <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center lg:items-start gap-5 mt-4">
                        <a
                          href="https://apps.apple.com/kr/app/bpm-collect/id6751521767?l=en-GB"
                          target="_blank"
                          rel="noopener noreferrer"
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
                        </a>

                        <button
                          type="button"
                          onClick={handleGooglePlayClick}
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
                <div className="w-full lg:w-1/2">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro videoSrc="/videos/bpm_demo.mp4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is BPM Collect Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:pr-12 text-center lg:text-left">
                    <div className="mb-8">
                      <h2 className="text-5xl lg:text-6xl xl:text-9xl font-bold text-white mb-4">
                        What is BPM Collect
                      </h2>
                    </div>
                    <p className="text-2xl text-white mb-10">
                      The ultimate BPM measurement and music management app
                    </p>
                    <p className="text-xl text-white mb-10">
                      BPM Collect is an innovative mobile app that
                      revolutionizes how you measure, analyze, and organize
                      music. With advanced beat detection technology and
                      seamless Discogs integration, it's designed to enhance
                      your music workflow.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-center flex justify-center items-center relative">
                    <div className="w-[347px] relative">
                      <Iphone15Pro src="/images/screenshots/IMG_2305 copy.png" />

                      {/* Feature Cards - Responsive Layout */}

                      {/* Mobile: Zigzag Cards */}
                      <div className="lg:hidden">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[10%]"
                          animate={{ y: [-8, 8, -8] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <MusicNote
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                BPM Measurement
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Intuitive tap-to-measure interface
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[25%]"
                          animate={{ y: [8, -8, 8] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <MagnifyingGlass
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Discogs Integration
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Search and save track metadata
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-40px] top-[40%]"
                          animate={{ y: [-6, 10, -6] }}
                          transition={{
                            duration: 4.5,
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
                                Genre Classification
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Smart BPM-based genre sorting
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-40px] top-[55%]"
                          animate={{ y: [10, -6, 10] }}
                          transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                            <div className="flex items-center gap-2 mb-2">
                              <Watch
                                size={32}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-xs font-bold text-gray-900">
                                Apple Watch
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Hands-free BPM control
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Desktop: Zigzag Cards */}
                      <div className="hidden lg:block">
                        {/* Top Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[10%]"
                          animate={{ y: [-10, 12, -10] }}
                          transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <MusicNote
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                BPM Measurement
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Intuitive tap-to-measure interface with visual
                              animations
                            </p>
                          </div>
                        </motion.div>

                        {/* Top Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[25%]"
                          animate={{ y: [12, -10, 12] }}
                          transition={{
                            duration: 3.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <MagnifyingGlass
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Discogs Integration
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Search and save tracks with complete metadata
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Left Card */}
                        <motion.div
                          className="absolute left-[-130px] top-[40%]"
                          animate={{ y: [-8, 14, -8] }}
                          transition={{
                            duration: 4.6,
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
                                Genre Classification
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Smart BPM-based genre sorting and categorization
                            </p>
                          </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                          className="absolute right-[-130px] top-[55%]"
                          animate={{ y: [14, -8, 14] }}
                          transition={{
                            duration: 4.0,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Watch
                                size={40}
                                weight="bold"
                                className="text-black"
                              />
                              <div className="text-sm font-bold text-gray-900">
                                Apple Watch Integration
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 text-left">
                              Hands-free BPM control from your wrist
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

        {/* From Pro DJs Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-gray-50 pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  From Pro DJs to Music Enthusiasts
                </h2>
                <p className="text-2xl text-gray-900 mb-4">
                  Perfect for every music professional and enthusiast
                </p>
                <p className="text-xl text-gray-700">
                  Whether you're a club DJ, mobile DJ, music collector, or
                  producer, our app provides the tools you need for perfect
                  music management.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Club DJ
                  </h3>
                  <p className="text-blue-600 mb-4 font-medium text-sm uppercase tracking-wide">
                    For Professional Performances
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Perfect setlist creation for club nights. Create seamless
                    transitions with precise BPM matching.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Mobile DJ
                  </h3>
                  <p className="text-green-600 mb-4 font-medium text-sm uppercase tracking-wide">
                    For Events and Gigs
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    On-site instant BPM measurement. Analyze tracks on the fly
                    during events without interrupting your performance.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">💿</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Music Collector
                  </h3>
                  <p className="text-purple-600 mb-4 font-medium text-sm uppercase tracking-wide">
                    For Vinyl Enthusiasts
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Systematic vinyl record management. Organize your collection
                    with precise BPM data and comprehensive metadata.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🎹</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Music Producer
                  </h3>
                  <p className="text-orange-600 mb-4 font-medium text-sm uppercase tracking-wide">
                    For Studio Productions
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Reference track BPM analysis for your productions. Match
                    tempos perfectly and create professional-quality music.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive BPM Experience Section */}
        <section className="px-[5%] mt-10">
          <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
                  Experience BPM Collect
                </h2>
                <p className="text-xl text-white/90 mb-4">
                  Tap the screen and feel the rhythm - just like in the real app
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side - Animation Selector */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <UltraSimpleSelector
                    isActive={currentBpm > 0 && hasStarted}
                    bpm={currentBpm}
                  />
                </div>

                {/* Right Side - Functional BPM Calculator */}
                <div className="w-full lg:w-1/2">
                  <BPMCalculator
                    onTap={handleTap}
                    onBpmChange={handleBpmChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-[5%] mt-10">
          <div className="pt-32 lg:pt-20 pb-32 lg:pb-20">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <motion.h2
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Download from App Store and Start Smart Music Management
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-700 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Join thousands of music professionals and enthusiasts
                  worldwide
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-black mb-2">4.8★</h3>
                    <p className="text-gray-600">App Store Rating</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-black mb-2">99%</h3>
                    <p className="text-gray-600">BPM Accuracy</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-black mb-2">50K+</h3>
                    <p className="text-gray-600">Happy DJs</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col md:flex-row gap-5 items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* App Store Button */}
                  <a
                    href="https://apps.apple.com/kr/app/bpm-collect/id6751521767?l=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-lg border-none min-w-[200px]"
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
                  </a>

                  {/* Google Play Store Button */}
                  <button
                    type="button"
                    onClick={handleGooglePlayClick}
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
