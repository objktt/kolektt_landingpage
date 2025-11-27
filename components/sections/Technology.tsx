"use client";

import { motion } from "framer-motion";
import { Camera, BarChart3, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Technology() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const features = [
    {
      icon: Camera,
      title: language === "KO" 
        ? "스마트 앨범 인식 & 메타데이터 자동 획득" 
        : "Smart Album Recognition & Auto Metadata",
      desc: language === "KO"
        ? "앨범 커버를 사진으로 찍기만 하면 고급 컴퓨터 비전(AI) 기술이 앨범을 즉시 식별합니다. 수동 입력 없이 메타데이터를 자동으로 채워 등록이 매우 간편합니다."
        : "Simply snap the album cover, and advanced computer vision (AI) instantly identifies it. Automatically fills metadata without manual entry for easy registration.",
    },
    {
      icon: BarChart3,
      title: language === "KO"
        ? "컬렉션 관리 + 시장 분석 + 투자 인사이트"
        : "Collection Management + Market Analysis",
      desc: language === "KO"
        ? "단순 등록을 넘어 앨범 상태, 희귀도, 시장 가치를 체계적으로 관리합니다. 사용자의 취향 패턴을 분석하고 글로벌/로컬 시장 가격을 실시간으로 반영합니다."
        : "Systematically manages album condition, rarity, and market value beyond simple registration. Analyzes user taste patterns and reflects global/local market prices in real-time.",
    },
    {
      icon: ShieldCheck,
      title: language === "KO"
        ? "안전한 거래 & 커뮤니티 연동 기반 생태계"
        : "Secure Trading & Community Ecosystem",
      desc: language === "KO"
        ? "컬렉터 간 거래를 위한 마켓플레이스와 안전한 에스크로 시스템을 제공합니다. 앨범 상태 검증 시스템과 데이터 기반의 공정한 가격 책정으로 신뢰를 확보합니다."
        : "Provides a marketplace for collector trading and a secure escrow system. Ensures trust with album condition verification and data-driven fair pricing.",
    },
  ];

  return (
    <section id="technology" className={`py-20 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"} relative overflow-hidden`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-primary"}`}>
            Core Technology
          </h2>
          <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} max-w-2xl mx-auto font-korean`}>
            {language === "KO"
              ? "Kolektt만의 독보적인 기술로 완성되는 새로운 수집 경험"
              : "A new collecting experience completed by Kolektt's unique technology"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-white border-primary/5"} rounded-3xl p-8 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}
            >
              <feature.icon size={48} className="text-accent mb-6 shrink-0" />
              <h3 className={`text-xl font-bold mb-4 font-korean leading-tight min-h-[3.5rem] flex items-center ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {feature.title}
              </h3>
              <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed font-korean text-sm`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
