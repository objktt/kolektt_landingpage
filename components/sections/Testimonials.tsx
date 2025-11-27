"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Testimonials() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const testimonials = [
    {
      quote: language === "KO" 
        ? "앨범 사진만으로 등록 완료. 정리되지 않았던 컬렉션이 단 하루 만에 정리되었습니다."
        : "Registration complete with just a photo. My unorganized collection was sorted in just one day.",
      author: language === "KO" ? "김영욱" : "Youngwook Kim",
      role: language === "KO" ? "마케터" : "Marketer",
    },
    {
      quote: language === "KO"
        ? "시장 가격과 등급이 자동으로 붙어서 거래 타이밍을 잡기 쉬웠어요. 베타 기간 동안 희귀 레코드를 좋은 가격에 판매했습니다."
        : "Market prices and grades were automatically attached, making it easy to time trades. I sold rare records at good prices during the beta.",
      author: language === "KO" ? "이재영" : "Jaeyoung Lee",
      role: language === "KO" ? "DJ" : "DJ",
    },
    {
      quote: language === "KO"
        ? "AI 인식 정확도가 놀랍습니다. 제가 직접 카탈로그하기 어려웠던 희귀 프레싱까지 식별했어요."
        : "The AI recognition accuracy is amazing. It identified rare pressings that I found difficult to catalog myself.",
      author: language === "KO" ? "박지호" : "Jiho Park",
      role: language === "KO" ? "음악 프로듀서" : "Music Producer",
    },
    {
      quote: language === "KO"
        ? "커뮤니티 기능 덕분에 희귀한 발견을 하고 전 세계 컬렉터들과 연결할 수 있습니다."
        : "Thanks to the community features, I can make rare discoveries and connect with collectors worldwide.",
      author: language === "KO" ? "정수현" : "Suhyeon Jung",
      role: language === "KO" ? "DJ" : "DJ",
    },
  ];

  return (
    <section className={`py-40 ${theme === "dark" ? "bg-[#0E0E0D] border-white/10" : "bg-background border-primary/5"} border-t`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className={`text-display text-[5rem] md:text-[7rem] lg:text-[8rem] mb-24 ${theme === "dark" ? "text-white" : "text-primary"} leading-none tracking-tighter`}>
          What collectors say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-12 ${theme === "dark" ? "bg-[#1A1A1A] border-white/10" : "bg-white border-primary/5"} rounded-[2.5rem] border shadow-sm hover:shadow-lg transition-all duration-500`}
            >
              <Quotes size={48} className="text-accent mb-8 opacity-20" weight="fill" />
              <p className={`text-2xl md:text-3xl font-korean font-medium leading-relaxed mb-10 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                "{item.quote}"
              </p>
              <div>
                <p className={`text-base ${theme === "dark" ? "text-white" : "text-primary"} font-korean font-bold tracking-wide`}>
                  {item.author}
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-white/60" : "text-primary/60"} font-korean`}>
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
