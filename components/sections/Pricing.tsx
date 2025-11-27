"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Pricing() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const plans = [
    {
      name: "Free",
      price: "0",
      desc: language === "KO" ? "개인 입문자용" : "For Personal Starters",
      features: language === "KO" ? [
        "최대 50장까지 등록",
        "카메라 기반 인식",
        "기본 컬렉션 관리",
        "커뮤니티 열람",
      ] : [
        "Up to 50 records",
        "Camera-based recognition",
        "Basic collection management",
        "Community access",
      ],
    },
    {
      name: "Pro",
      price: "$4.99",
      desc: language === "KO" ? "음악 애호가 / 크리에이터용" : "For Music Lovers / Creators",
      recommended: true,
      features: language === "KO" ? [
        "무제한 등록",
        "고급 가격 분석",
        "거래 마켓플레이스 접근",
        "우선 고객지원",
        "인증 판매자 배지",
      ] : [
        "Unlimited records",
        "Advanced price analysis",
        "Marketplace access",
        "Priority support",
        "Verified seller badge",
      ],
    },
    {
      name: "Enterprise",
      price: "$29",
      desc: language === "KO" ? "레코드샵 / 브랜드용" : "For Record Shops / Brands",
      features: language === "KO" ? [
        "재고 관리 SaaS",
        "다중 사용자 계정",
        "맞춤 API 통합",
        "화이트 라벨 솔루션",
        "고급 분석 대시보드",
        "전담 계정 매니저",
      ] : [
        "Inventory management SaaS",
        "Multi-user accounts",
        "Custom API integration",
        "White label solutions",
        "Advanced analytics dashboard",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section id="pricing" className={`py-40 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className={`text-display text-[6rem] md:text-[8rem] lg:text-[10rem] mb-24 ${theme === "dark" ? "text-white" : "text-primary"} text-center leading-none tracking-tighter`}>
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-10 rounded-[2.5rem] flex flex-col ${
                plan.recommended
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105 z-10"
                  : theme === "dark"
                  ? "bg-[#1A1A1A] text-white border border-white/10 shadow-lg hover:shadow-xl transition-shadow"
                  : "bg-white text-primary border border-primary/5 shadow-lg hover:shadow-xl transition-shadow"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/30">
                  Recommended
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-4 font-sans">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-6xl font-bold font-sans tracking-tight">{plan.price}</span>
                  {plan.price !== "0" && <span className="text-lg opacity-60">/mo</span>}
                </div>
                <p className={`text-lg font-korean font-medium ${plan.recommended ? "opacity-80" : theme === "dark" ? "text-white/60" : "text-primary/60"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-base font-korean">
                    <div className={`mt-1 p-1 rounded-full ${plan.recommended ? "bg-white/20" : theme === "dark" ? "bg-white/10" : "bg-primary/5"}`}>
                      <Check size={14} className={plan.recommended ? "text-white" : theme === "dark" ? "text-white" : "text-primary"} />
                    </div>
                    <span className={plan.recommended ? "opacity-90" : theme === "dark" ? "text-white/70" : "text-primary/70"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.name === "Enterprise" ? (
                <a
                  href="mailto:hello@kolektt.kr?subject=Enterprise Plan Inquiry"
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all text-center block ${
                    plan.recommended
                      ? "bg-white text-primary hover:bg-gray-100"
                      : theme === "dark"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Contact Us
                </a>
              ) : (
                <a
                  href="#download"
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all text-center block ${
                    plan.recommended
                      ? "bg-white text-primary hover:bg-gray-100"
                      : theme === "dark"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
