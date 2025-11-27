"use client";

import {motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Snap() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="snap" className={`py-40 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"} overflow-hidden relative`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <h2 className={`text-display text-[6rem] md:text-[8rem] lg:text-[10rem] mb-12 ${theme === "dark" ? "text-white" : "text-primary"} leading-none tracking-tighter`}>
              Snap
            </h2>
            
            <div className="space-y-10 font-korean">
              <div className="space-y-4">
                <h3 className={`text-3xl md:text-4xl font-bold leading-tight ${theme === "dark" ? "text-white" : "text-primary"}`}>
                  {language === "KO" ? (
                    <>
                      앨범 커버를 촬영하면 <br />
                      AI가 즉시 인식합니다.
                    </>
                  ) : (
                    <>
                      Snap the cover, <br />
                      AI recognizes it instantly.
                    </>
                  )}
                </h3>
                <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed max-w-lg`}>
                  {language === "KO" 
                    ? "복잡한 검색 없이 카메라만 켜세요. Kolektt의 AI가 수천만 장의 데이터베이스에서 당신의 레코드를 정확하게 찾아냅니다."
                    : "Just turn on the camera without complex searching. Kolektt's AI accurately identifies your record from a database of millions."}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-primary"}`}>
                  {language === "KO" ? "자동 메타데이터 분석" : "Automatic Metadata Analysis"}
                </h3>
                <p className={`text-lg ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed max-w-lg`}>
                  {language === "KO"
                    ? "아티스트, 앨범명, 발매년도, 장르까지. 귀찮은 입력 과정 없이 사진 한 장으로 모든 정보를 정리해드립니다."
                    : "Artist, album name, release year, and genre. Organize all information with a single photo without tedious typing."}
                </p>
              </div>

              <div className={`inline-flex items-center gap-3 px-6 py-4 ${theme === "dark" ? "bg-white/10" : "bg-white"} rounded-2xl border border-primary/5 shadow-sm`}>
                <CheckCircle2 className="text-accent shrink-0" />
                <span className={`${theme === "dark" ? "text-white" : "text-primary"} font-medium`}>
                  {language === "KO" 
                    ? "95% 이상의 인식 정확도와 희귀반 식별"
                    : "Over 95% recognition accuracy and rare edition identification"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <motion.div 
              className="relative flex justify-center items-center cursor-pointer"
              whileHover={isMobile ? undefined : "hover"}
              whileInView={isMobile ? "hover" : undefined}
              viewport={{ once: false, amount: 0.6 }}
              initial="initial"
            >
              <Image
                src="/images/snap_01_01.png"
                alt="Snap 기능 스크린샷"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto scale-125 transition-transform duration-500 ease-out group-hover:scale-130"
                priority
              />

              {/* Hover Popup */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20, scale: 0.9 },
                  hover: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
                className="absolute top-[35%] left-[50%] -translate-x-1/2 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-primary/10 flex items-center gap-4 min-w-[280px]"
                >
                  <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-accent font-bold uppercase tracking-wider mb-0.5">Analysis Complete</p>
                    <h4 className="text-sm font-bold text-primary truncate">Pink Floyd - The Dark Side of the Moon</h4>
                    <p className="text-xs text-primary/60 truncate">1973 • Harvest</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
