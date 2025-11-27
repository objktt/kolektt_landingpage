"use client";

import { motion } from "framer-motion";
import { TrendingUp, Tag, Disc, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Collect() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="collect" className={`py-40 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-white"} overflow-hidden`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <motion.div 
              className="relative flex justify-center items-center cursor-pointer"
              whileHover={isMobile ? undefined : "hover"}
              whileInView={isMobile ? "hover" : undefined}
              viewport={{ once: false, amount: 0.6 }}
              initial="initial"
            >
              <Image
                src="/images/collect_01_01.png"
                alt="Collect 기능 스크린샷"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto scale-[1.35] transition-transform duration-500 ease-out group-hover:scale-[1.4]"
                priority
              />

              {/* Hover Popup */}
              <motion.div
                variants={{
                  initial: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                  hover: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                }}
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] max-w-md"
              >
                <div className="grid grid-cols-2 gap-3">
                  {/* Card 1: Value */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20, scale: 0.8 },
                      hover: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    }}
                    className={`col-span-2 ${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"} p-5 rounded-[1.5rem] border shadow-2xl`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className={`text-[10px] ${theme === "dark" ? "text-white/50" : "text-primary/50"} font-medium mb-1 uppercase tracking-wider`}>Total Collection Value</p>
                        <h4 className={`text-2xl font-bold font-sans tracking-tight ${theme === "dark" ? "text-white" : "text-primary"}`}>$12,450.00</h4>
                      </div>
                      <div className="p-1.5 bg-green-100/50 text-green-600 rounded-full">
                        <TrendingUp size={16} />
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200/50 rounded-full overflow-hidden mb-2">
                      <div className="h-full w-[70%] bg-primary rounded-full" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px]">
                      <span className="text-green-600 font-bold flex items-center gap-0.5">
                        <ArrowUpRight size={12} /> 12.5%
                      </span>
                      <span className={`${theme === "dark" ? "text-white/40" : "text-primary/40"}`}>vs last month</span>
                    </div>
                  </motion.div>

                  {/* Card 2: Recent Additions */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20, scale: 0.8 },
                      hover: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    }}
                    className={`${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"} p-4 rounded-[1.5rem] border shadow-2xl flex flex-col justify-between h-32`}
                  >
                    <div className={`w-8 h-8 ${theme === "dark" ? "bg-white/10 text-white" : "bg-primary/5 text-primary"} rounded-full flex items-center justify-center`}>
                      <Disc size={16} />
                    </div>
                    <div>
                      <p className={`text-[10px] ${theme === "dark" ? "text-white/50" : "text-primary/50"} mb-0.5`}>Recent Addition</p>
                      <p className={`font-bold text-sm leading-tight mb-0.5 ${theme === "dark" ? "text-white" : "text-primary"}`}>Homework</p>
                      <p className={`text-[10px] ${theme === "dark" ? "text-white/40" : "text-primary/40"}`}>Daft Punk • 1997</p>
                    </div>
                  </motion.div>

                  {/* Card 3: Tags */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20, scale: 0.8 },
                      hover: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    }}
                    className="bg-primary p-4 rounded-[1.5rem] border border-primary shadow-2xl flex flex-col justify-between h-32 text-white"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Tag size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/60 mb-0.5">Top Genre</p>
                      <p className="font-bold text-lg mb-0.5">Disco</p>
                      <p className="text-[10px] text-white/40">42 Albums</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pl-10"
          >
            <h2 className={`text-display text-[6rem] md:text-[8rem] lg:text-[10rem] mb-12 ${theme === "dark" ? "text-white" : "text-primary"} leading-none tracking-tighter text-right lg:text-left`}>
              Collect
            </h2>
            
            <div className="space-y-10 font-korean text-right lg:text-left">
              <div className="space-y-4">
                <h3 className={`text-3xl md:text-4xl font-bold leading-tight ${theme === "dark" ? "text-white" : "text-primary"}`}>
                  {language === "KO" ? (
                    <>
                      수집한 앨범의 가치와 상태를 <br />
                      한 곳에서 관리하세요.
                    </>
                  ) : (
                    <>
                      Manage the value and condition <br />
                      of your collection in one place.
                    </>
                  )}
                </h3>
                <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed max-w-lg ml-auto lg:ml-0`}>
                  {language === "KO" 
                    ? "실시간 가격 변동 데이터를 반영하여 컬렉션의 가치를 추적할 수 있습니다."
                    : "Track the value of your collection with real-time price fluctuation data."}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-primary"}`}>
                  {language === "KO" ? "컬렉션 인사이트 분석" : "Collection Insight Analysis"}
                </h3>
                <p className={`text-lg ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed max-w-lg ml-auto lg:ml-0`}>
                  {language === "KO"
                    ? "컬렉션 분석을 통해 어떤 타이틀이 부족한지, 무엇을 찾아야 할지 알려줍니다."
                    : "Collection analysis tells you which titles are missing and what to look for."}
                </p>
              </div>

              <div className={`inline-flex items-center gap-3 px-6 py-4 ${theme === "dark" ? "bg-white/10 border-white/10" : "bg-background border-primary/5"} rounded-2xl border shadow-sm`}>
                <CheckCircle2 className="text-accent shrink-0" />
                <span className={`${theme === "dark" ? "text-white" : "text-primary"} font-medium`}>
                  {language === "KO" 
                    ? "실시간 가격 추적과 자산 관리 대시보드"
                    : "Real-time price tracking and asset management dashboard"}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
