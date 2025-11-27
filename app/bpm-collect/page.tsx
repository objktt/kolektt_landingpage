"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Iphone15Pro } from "@/components/marketing/iphone-15-pro";
import BPMCalculator from "@/components/marketing/bpm-calculator";
import UltraSimpleSelector from "@/components/marketing/ultra-simple-selector";
import { useTheme } from "@/context/ThemeContext";
import { Metronome, MagnifyingGlass, FunnelSimple, Watch } from "@phosphor-icons/react";

export default function BpmCollectPage() {
  const [bpm, setBpm] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();

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
                BPM Collect
              </h1>
              <p className={`text-xl md:text-2xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed mb-12`}>
                Measure BPM with intuitive animations, search Discogs
                integration, and create perfect setlists with genre-based
                classification.
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
                      Download on the
                    </p>
                    <span className="text-lg font-semibold text-white">
                      App Store
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
              Experience It Now
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
              Tap the button to measure BPM and see the animations in action
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
              Key Features
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
                BPM Measurement
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                Intuitive tap-to-measure interface with visual animations
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
                Discogs Integration
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                Search and save tracks with complete metadata
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
                Genre Classification
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                Smart BPM-based genre sorting and categorization
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
                Apple Watch Integration
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                Hands-free BPM control from your wrist
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
              For Everyone
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} max-w-3xl mx-auto`}>
              Perfect for every music professional and enthusiast
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
              <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-primary"}`}>Club DJ</h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                For Professional Performances
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                Perfect setlist creation for club nights. Create seamless
                transitions with precise BPM matching.
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
                Mobile DJ
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                For Events and Gigs
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                On-site instant BPM measurement. Analyze tracks on the fly
                during events without interrupting your performance.
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
                Music Collector
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                For Vinyl Enthusiasts
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                Systematic vinyl record management. Organize your collection
                with precise BPM data and comprehensive metadata.
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
                Music Producer
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                For Studio Productions
              </p>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                Reference track BPM analysis for your productions. Match tempos
                perfectly and create professional-quality music.
              </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
