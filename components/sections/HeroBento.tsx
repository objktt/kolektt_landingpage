"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import Particles from "@/components/effects/Particles";

export default function HeroBento() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [lightningAnimation, setLightningAnimation] = React.useState(null);
  const [lightbulbAnimation, setLightbulbAnimation] = React.useState(null);
  const [clapperAnimation, setClapperAnimation] = React.useState(null);
  
  // Mobile detection and Viewport states
  const [isMobile, setIsMobile] = React.useState(false);
  const [heroInView, setHeroInView] = React.useState(false);
  const [guideInView, setGuideInView] = React.useState(false);
  const [interviewInView, setInterviewInView] = React.useState(false);
  const [studioInView, setStudioInView] = React.useState(false);
  const [newsInView, setNewsInView] = React.useState(false);

  // Mobile button click state
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleButtonClick = (buttonId: string) => {
    if (isMobile) {
      setActiveButton(buttonId);
      setTimeout(() => setActiveButton(null), 2000);
    }
  };

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    // Cloud with lightning - U+1F329 FE0F
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1f329_fe0f/lottie.json')
      .then(response => response.json())
      .then(data => setLightningAnimation(data))
      .catch(error => console.error('Error loading lightning Lottie animation:', error));
    
    // Lightbulb - U+1F4A1
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/lottie.json')
      .then(response => response.json())
      .then(data => setLightbulbAnimation(data))
      .catch(error => console.error('Error loading lightbulb Lottie animation:', error));
    
    // Clapper board - U+1F3AC
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ac/lottie.json')
      .then(response => response.json())
      .then(data => setClapperAnimation(data))
      .catch(error => console.error('Error loading clapper Lottie animation:', error));
  }, []);

  return (
    <section className={`min-h-screen ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-[#F4F4F0]"} pt-32 pb-20 px-6 md:px-12 lg:px-24`}>
      <div className="container-custom mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full auto-rows-[minmax(300px,auto)]">
          
          {/* 1. Hero Content Block (Top Left - Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setHeroInView(true)}
            onViewportLeave={() => setHeroInView(false)}
            viewport={{ amount: 0.3 }}
            className={`md:col-span-2 md:row-span-2 ${theme === "dark" ? "bg-[#1A1A1A]" : "bg-[#EAEAE6]"} rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden group`}
          >
            {/* Particles Effect */}
            <Particles
              particleColors={theme === "dark" ? ['#ffffff', '#ffffff'] : ['#000000', '#2452FF']}
              particleCount={300}
              particleSpread={10}
              speed={0.1}
              moveParticlesOnHover={true}
              particleHoverFactor={2}
              alphaParticles={true}
              particleBaseSize={100}
              sizeRandomness={0.5}
              cameraDistance={20}
            />
            
            <div className="relative z-10">
              <h1 className={`text-display text-5xl md:text-7xl lg:text-8xl ${theme === "dark" ? "text-white" : "text-[#111111]"} leading-[0.95] tracking-tight mb-8`}>
                Collect <br />
                Your <br />
                Sound Story
              </h1>
              <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-[#111111]/60"} font-body max-w-md mb-10`}>
                {language === "KO" 
                  ? "카메라 기반 AI 인식으로 당신의 레코드 컬렉션을 기록하고, 관리하고, 거래하세요."
                  : "Record, manage, and trade your record collection with camera-based AI recognition."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  type="button" 
                  onClick={() => handleButtonClick('appstore')}
                  className={`group/btn relative flex items-center px-6 py-3 rounded-xl border-none min-w-[200px] hover:scale-105 active:scale-95 cursor-pointer shadow-lg transition-all overflow-hidden ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-[#1e1e1d] text-white hover:bg-black"}`}
                >
                  <div className={`flex items-center transition-opacity duration-300 w-full ${(activeButton === 'appstore') ? 'opacity-20' : 'group-hover/btn:opacity-20'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" fill={theme === "dark" ? "#000" : "#fff"} className="mr-3" viewBox="0 0 22.773 22.773">
                      <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className={`text-[10px] leading-tight uppercase tracking-wide mb-0.5 ${theme === "dark" ? "text-black/80" : "text-white/80"}`}>Download on the</span>
                      <span className="text-lg font-bold">App Store</span>
                    </div>
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${(activeButton === 'appstore') ? 'opacity-100' : 'opacity-0 group-hover/btn:opacity-100'}`}>
                    <span className="text-base font-bold font-korean">
                      {language === "KO" ? "준비중" : "Coming Soon"}
                    </span>
                  </div>
                </button>

                <button 
                  type="button" 
                  onClick={() => handleButtonClick('googleplay')}
                  className={`group/btn relative flex items-center px-6 py-3 rounded-xl border-none min-w-[200px] hover:scale-105 active:scale-95 cursor-pointer shadow-lg transition-all overflow-hidden ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-[#1e1e1d] text-white hover:bg-black"}`}
                >
                  <div className={`flex items-center transition-opacity duration-300 w-full ${(activeButton === 'googleplay') ? 'opacity-20' : 'group-hover/btn:opacity-20'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" className="mr-3 shrink-0" viewBox="0 0 64 64">
                      <path fill="#57cef3" d="M7 3v58l33-29z" />
                      <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                      <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                      <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                      <path fill="#f33" d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" />
                      <path fill="#0779e4" d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z" />
                      <path fill="#314a52" d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className={`text-[10px] leading-tight uppercase tracking-wide mb-0.5 ${theme === "dark" ? "text-black/80" : "text-white/80"}`}>Get it on</span>
                      <span className="text-lg font-bold">Google Play</span>
                    </div>
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${(activeButton === 'googleplay') ? 'opacity-100' : 'opacity-0 group-hover/btn:opacity-100'}`}>
                    <span className="text-base font-bold font-korean">
                      {language === "KO" ? "준비중" : "Coming Soon"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Abstract Background Shape */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* 2. News Card (Top Right - Vertical) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onViewportEnter={() => setNewsInView(true)}
            onViewportLeave={() => setNewsInView(false)}
            viewport={{ amount: 0.3 }}
            className={`md:col-span-1 md:row-span-2 ${theme === "dark" ? "bg-[#1A1A1A] hover:bg-[#222]" : "bg-white hover:bg-gray-50"} rounded-[2rem] relative overflow-hidden group transition-colors`}
          >
            <Link 
              href="https://www.instagram.com/kolektt_app" 
              target="_blank"
              className="block w-full h-full p-8 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 rounded-full ${theme === "dark" ? "bg-white/10 text-white" : "bg-[#111111]/5 text-[#111111]"} text-xs font-bold mb-4`}>
                  NEWS
                </span>
                <h3 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-[#111111]"} font-display leading-tight`}>
                  Kolektt <br/>
                  Instagram <br/>
                  Open
                </h3>
              </div>
              <div className="flex justify-between items-end">
                <p className={`${theme === "dark" ? "text-white/60" : "text-[#111111]/60"} font-korean text-lg font-medium`}>
                  {language === "KO" ? (
                    <>
                      Kolektt의<br/>
                      새로운 소식을<br/>
                      만나보세요.
                    </>
                  ) : (
                    <>
                      Meet<br/>
                      Kolektt's<br/>
                      New Updates.
                    </>
                  )}
                </p>
                <div className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-white text-black" : "bg-[#111111] text-white"} flex items-center justify-center transition-transform ${(isMobile && newsInView) ? 'scale-110' : 'group-hover:scale-110'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Instagram Post Image - Top-left portion at bottom-right */}
              <div className="absolute bottom-0 right-0 w-[50%] h-[54%] overflow-hidden">
                <Image
                  src="/images/instagram_mockup.png"
                  alt="Instagram Post"
                  width={500}
                  height={889}
                  className="absolute top-0 left-0 w-[200%] h-[200%] object-cover object-top-left"
                />
              </div>
            </Link>
          </motion.div>

          {/* 3. Guide Card (Bottom Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onViewportEnter={() => setGuideInView(true)}
            onViewportLeave={() => setGuideInView(false)}
            viewport={{ amount: 0.3 }}
            className={`md:col-span-1 ${theme === "dark" ? "bg-white hover:bg-gray-100" : "bg-[#111111] hover:bg-black"} rounded-[2rem] relative overflow-hidden group transition-colors`}
          >
            <div className="relative block w-full h-full p-8 flex flex-col justify-between min-h-[300px] cursor-pointer group/card">
              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 rounded-full ${theme === "dark" ? "bg-black/20 text-black" : "bg-white/20 text-white"} text-xs font-bold mb-4`}>
                  GUIDE
                </span>
                <h3 className={`text-3xl font-bold mb-2 ${theme === "dark" ? "text-black" : "text-white"} font-display`}>How to<br/>Kolektt</h3>
              </div>
              <div className="flex justify-between items-end">
                <p className={`${theme === "dark" ? "text-black/60" : "text-white/60"} font-korean text-lg font-medium leading-tight`}>
                  {language === "KO" ? (
                    <>
                      Kolektt<br/>
                      사용법
                    </>
                  ) : (
                    <>
                      How to use<br/>
                      Kolektt
                    </>
                  )}
                </p>
                <div className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-black text-white" : "bg-white text-[#111111]"} flex items-center justify-center transition-transform duration-300 ${(isMobile && guideInView) ? 'rotate-45' : 'group-hover:rotate-45'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Animated Lightbulb Lottie */}
              {lightbulbAnimation && (
                <div className={`absolute top-6 right-6 w-16 h-16 transition-opacity duration-300 ${(isMobile && guideInView) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <Lottie 
                    animationData={lightbulbAnimation}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              )}
              {/* Coming Soon Overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-[2rem] ${(isMobile && guideInView) ? 'opacity-100' : 'opacity-0 group-hover/card:opacity-100'}`}>
                <span className={`text-2xl font-bold font-korean ${theme === "dark" ? "text-white" : "text-white"}`}>
                  {language === "KO" ? "준비중" : "Coming Soon"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 4. Interview Card (Bottom Center) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onViewportEnter={() => setInterviewInView(true)}
            onViewportLeave={() => setInterviewInView(false)}
            viewport={{ amount: 0.3 }}
            className={`md:col-span-1 ${theme === "dark" ? "bg-[#2A2A2A] hover:bg-[#333]" : "bg-[#E0E0DC] hover:bg-[#D6D6D2]"} rounded-[2rem] relative overflow-hidden group transition-colors`}
          >
            <div className="relative block w-full h-full p-8 flex flex-col justify-between min-h-[300px] cursor-pointer group/card">
              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 rounded-full ${theme === "dark" ? "bg-white/10 text-white" : "bg-[#111111]/5 text-[#111111]"} text-xs font-bold mb-4`}>
                  INTERVIEW
                </span>
                <h3 className={`text-3xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#111111]"} font-display`}>CEO<br/>Interview</h3>
              </div>
              <div className="flex justify-between items-end">
                <p className={`${theme === "dark" ? "text-white/60" : "text-[#111111]/60"} font-korean text-lg font-medium leading-tight`}>
                  {language === "KO" ? (
                    <>
                      대표<br/>
                      인터뷰
                    </>
                  ) : (
                    <>
                      CEO<br/>
                      Interview
                    </>
                  )}
                </p>
                <div className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-white text-black" : "bg-[#111111] text-white"} flex items-center justify-center transition-transform duration-300 ${(isMobile && interviewInView) ? 'rotate-45' : 'group-hover:rotate-45'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Animated Clapper Board Lottie */}
              {clapperAnimation && (
                <div className={`absolute top-6 right-6 w-16 h-16 transition-opacity duration-300 ${(isMobile && interviewInView) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <Lottie 
                    animationData={clapperAnimation}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              )}
              {/* Coming Soon Overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-[2rem] ${(isMobile && interviewInView) ? 'opacity-100' : 'opacity-0 group-hover/card:opacity-100'}`}>
                <span className={`text-2xl font-bold font-korean ${theme === "dark" ? "text-white" : "text-white"}`}>
                  {language === "KO" ? "준비중" : "Coming Soon"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 5. Studio Card (Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onViewportEnter={() => setStudioInView(true)}
            onViewportLeave={() => setStudioInView(false)}
            viewport={{ amount: 0.3 }}
            className="md:col-span-1 bg-accent rounded-[2rem] relative overflow-hidden group hover:bg-accent/90 transition-colors"
          >
            <Link href="/about" className="block w-full h-full p-8 flex flex-col justify-between min-h-[300px]">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                  ABOUT
                </span>
                <h3 className="text-3xl font-bold mb-2 text-white font-display">Objktt<br/>Studio</h3>
              </div>
              <div className="flex justify-between items-end">
                <p className="text-white/80 font-korean text-lg font-medium leading-tight">
                  {language === "KO" ? (
                    <>
                      브랜드<br/>
                      소개
                    </>
                  ) : (
                    <>
                      Brand<br/>
                      Introduction
                    </>
                  )}
                </p>
                <div className={`w-10 h-10 rounded-full bg-white text-accent flex items-center justify-center transition-transform duration-300 ${(isMobile && studioInView) ? 'rotate-45' : 'group-hover:rotate-45'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Animated Lightning Lottie */}
              {lightningAnimation && (
                <div className={`absolute top-6 right-6 w-16 h-16 transition-opacity duration-300 ${(isMobile && studioInView) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <Lottie 
                    animationData={lightningAnimation}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              )}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
