"use client";

import { motion } from "framer-motion";
import { Crown, Rocket, Medal } from "@phosphor-icons/react";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function EarlyBird() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const benefits = [
    {
      title: language === "KO" ? "첫 100명 한정" : "First 100 Only",
      subtitle: language === "KO" ? "1년 무료 프리미엄" : "1 Year Free Premium",
      description: language === "KO" 
        ? "고급 큐레이션, 프라이빗 컬렉션 등 독점 기능을 12개월간 무료로 이용하세요."
        : "Enjoy exclusive features like advanced curation and private collections for free for 12 months.",
      icon: Crown,
      delay: 0.1,
    },
    {
      title: language === "KO" ? "독점 베타 참여" : "Exclusive Beta Access",
      subtitle: language === "KO" ? "출시 전 미리 사용" : "Early Access Before Launch",
      description: language === "KO"
        ? "앱 정식 출시 전에 미리 사용하고, 당신의 피드백으로 기능에 영향을 주세요. 테스터 명단에 이름을 남길 수 있습니다."
        : "Use the app before the official launch and influence features with your feedback. You can leave your name on the tester list.",
      icon: Rocket,
      delay: 0.2,
    },
    {
      title: language === "KO" ? "컬렉터 인증 배지" : "Collector Verified Badge",
      subtitle: language === "KO" ? "얼리버드 한정 배지" : "Early Bird Exclusive Badge",
      description: language === "KO"
        ? "얼리버드 참여자 한정 프로필 배지를 받아보세요. 커뮤니티 내 신뢰도를 높이고 프로필 상단 노출 우선권을 받으세요."
        : "Get a profile badge exclusive to early bird participants. Increase your credibility in the community and get priority profile exposure.",
      icon: Medal,
      delay: 0.3,
    },
  ];

  return (
    <section className={`py-40 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className={`text-display text-[5rem] md:text-[7rem] lg:text-[8rem] mb-8 ${theme === "dark" ? "text-white" : "text-primary"} leading-none tracking-tighter`}>
            Early Bird
          </h2>
          <p className={`text-3xl md:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-primary"} mb-6 font-korean`}>
            {language === "KO" 
              ? "지금 사전 등록하고 얼리버드 혜택을 받으세요!"
              : "Pre-register now and get Early Bird benefits!"}
          </p>
          <p className={`text-xl ${theme === "dark" ? "text-white/60" : "text-primary/60"} max-w-3xl mx-auto font-korean`}>
            {language === "KO"
              ? "AI 기반 스마트 관리, 투자 인사이트, 커뮤니티 거래까지. Kolektt와 함께 당신의 바이닐 컬렉션을 한 단계 업그레이드하세요."
              : "AI-based smart management, investment insights, and community trading. Upgrade your vinyl collection with Kolektt."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className={`${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-white border-primary/5"} rounded-3xl p-8 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: benefit.delay }}
                viewport={{ once: true }}
              >
                <IconComponent size={48} weight="regular" className="text-accent mb-6 shrink-0" />
                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-primary"} font-korean`}>
                  {benefit.title}
                </h3>
                <p className="mb-4 font-medium text-sm uppercase tracking-wide text-accent">
                  {benefit.subtitle}
                </p>
                <p className={`${theme === "dark" ? "text-white/60" : "text-primary/60"} leading-relaxed font-korean text-sm`}>
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
