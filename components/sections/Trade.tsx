"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Handshake, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Trade() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="trade" className={`py-40 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"} overflow-hidden`}>
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
              Trade
            </h2>
            
            <div className="space-y-10 font-korean">
              <div className="space-y-4">
                <h3 className={`text-3xl md:text-4xl font-bold leading-tight ${theme === "dark" ? "text-white" : "text-primary"}`}>
                  {language === "KO" ? (
                    <>
                      로컬 컬렉터들과 <br />
                      <span className="text-accent">안전하게</span> 거래하세요.
                    </>
                  ) : (
                    <>
                      Trade <span className="text-accent">safely</span> with <br />
                      local collectors.
                    </>
                  )}
                </h3>
                <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed max-w-lg`}>
                  {language === "KO" 
                    ? "더 이상 사기 걱정하지 마세요. Kolektt의 안전 결제 시스템이 당신의 소중한 레코드와 자산을 보호합니다."
                    : "No more worries about fraud. Kolektt's secure payment system protects your precious records and assets."}
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                    {language === "KO" ? "신뢰할 수 있는 거래 환경" : "Trusted Trading Environment"}
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                    {language === "KO"
                      ? "에스크로 기반 보안 시스템으로 물품 수령 후 구매 확정 시에만 판매자에게 대금이 지급됩니다."
                      : "Escrow-based security system ensures payment is released to the seller only after you confirm receipt."}
                  </p>
                </div>
                
                <div>
                  <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                    {language === "KO" ? "데이터 기반 공정 가격" : "Data-Driven Fair Pricing"}
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed`}>
                    {language === "KO"
                      ? "상태 검증과 실시간 시장 데이터를 바탕으로 합리적인 가격 제안이 가능합니다."
                      : "Reasonable price proposals are possible based on condition verification and real-time market data."}
                  </p>
                </div>
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
              className="relative flex justify-center items-center group"
              initial="initial"
              whileHover={isMobile ? undefined : "hover"}
              whileInView={isMobile ? "hover" : undefined}
              viewport={{ once: false, amount: 0.6 }}
              animate="initial"
            >
              <Image
                src="/images/trade_01_01.png"
                alt="Trade 기능 스크린샷"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto scale-[1.2]"
                priority
              />

              {/* Hover Popup - Dollar Graph Card */}
              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] max-w-md"
              >
                <div className={`${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-background border-primary/5"} p-6 rounded-[1.5rem] border shadow-2xl`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className={`text-[10px] ${theme === "dark" ? "text-white/50" : "text-primary/50"} font-medium mb-1 uppercase tracking-wider`}>Record Asset Trends</p>
                      <h4 className={`text-3xl font-bold font-sans tracking-tight ${theme === "dark" ? "text-white" : "text-primary"}`}>$245.00</h4>
                    </div>
                    <div className="p-2 bg-green-100/50 text-green-600 rounded-full text-xl font-bold">
                      $
                    </div>
                  </div>
                  
                  {/* Simple Upward Trending Graph */}
                  <div className="relative h-24 mb-3">
                    <style jsx>{`
                      @keyframes drawLine {
                        from {
                          stroke-dashoffset: 500;
                        }
                        to {
                          stroke-dashoffset: 0;
                        }
                      }
                      @keyframes fadeInScale {
                        from {
                          opacity: 0;
                          transform: scale(0);
                        }
                        to {
                          opacity: 1;
                          transform: scale(1);
                        }
                      }
                      .graph-line {
                        stroke-dasharray: 500;
                        stroke-dashoffset: 500;
                        animation: drawLine 1.5s ease-out forwards;
                      }
                      .graph-point {
                        opacity: 0;
                        animation: fadeInScale 0.3s ease-out forwards;
                      }
                      .graph-point-1 { animation-delay: 0.2s; }
                      .graph-point-2 { animation-delay: 0.4s; }
                      .graph-point-3 { animation-delay: 0.6s; }
                      .graph-point-4 { animation-delay: 0.8s; }
                      .graph-point-5 { animation-delay: 1.0s; }
                      .graph-point-6 { animation-delay: 1.2s; }
                      .graph-point-7 { animation-delay: 1.4s; }
                    `}</style>
                    <svg viewBox="0 0 300 80" className="w-full h-full">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                      <line x1="0" y1="40" x2="300" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                      <line x1="0" y1="60" x2="300" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                      
                      {/* Upward trending line with animation */}
                      <polyline
                        points="0,70 50,65 100,55 150,50 200,35 250,25 300,15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-green-600 graph-line"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Gradient fill under line */}
                      <defs>
                        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <polygon
                        points="0,70 50,65 100,55 150,50 200,35 250,25 300,15 300,80 0,80"
                        fill="url(#graphGradient)"
                      />
                      
                      {/* Data points with staggered animation */}
                      <circle cx="0" cy="70" r="3" className="fill-green-600 graph-point graph-point-1" />
                      <circle cx="50" cy="65" r="3" className="fill-green-600 graph-point graph-point-2" />
                      <circle cx="100" cy="55" r="3" className="fill-green-600 graph-point graph-point-3" />
                      <circle cx="150" cy="50" r="3" className="fill-green-600 graph-point graph-point-4" />
                      <circle cx="200" cy="35" r="3" className="fill-green-600 graph-point graph-point-5" />
                      <circle cx="250" cy="25" r="3" className="fill-green-600 graph-point graph-point-6" />
                      <circle cx="300" cy="15" r="3" className="fill-green-600 graph-point graph-point-7" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[10px]">
                    <span className="text-green-600 font-bold flex items-center gap-0.5">
                      ↗ 28.5%
                    </span>
                    <span className={`${theme === "dark" ? "text-white/40" : "text-primary/40"}`}>vs last quarter</span>
                  </div>
                </div>
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
