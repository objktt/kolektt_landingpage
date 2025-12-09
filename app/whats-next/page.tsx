"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsNextPage() {
  const { language } = useLanguage();

  const sections = [
    {
      id: "trade",
      title: "Trade on Kolektt",
      subtitle: language === "KO" ? "컬렉션을 움직이는 새로운 방식" : "A New Way to Move Collections",
      description: language === "KO" 
        ? "레코드는 이제 단순한 소장이 아닌, 흐르는 자산입니다. Kolektt의 거래 기능은 안전하고 직관적인 방식으로 컬렉터 간의 사고·팔기를 지원합니다."
        : "Records are no longer just for keeping; they are flowing assets. Kolektt's trading feature supports buying and selling between collectors in a safe and intuitive way.",
      features: language === "KO" 
        ? ["취향 기반 매물 추천", "자동 데이터 매칭", "투명하고 안전한 거래 환경"]
        : ["Taste-based recommendations", "Automatic data matching", "Transparent and secure trading environment"],
      image: "/images/whats_next_trade_custom.jpg",
      align: "left"
    },
    {
      id: "lounge",
      title: "Lounge",
      subtitle: language === "KO" ? "레코드 컬쳐를 즐기는 공간" : "A Space to Enjoy Record Culture",
      description: language === "KO"
        ? "음악을 듣고, 이야기를 나누며, 취향을 공유하는 커뮤니티 라운지입니다. 오프라인과 온라인을 잇는 새로운 경험을 제공합니다."
        : "A community lounge where you listen to music, share stories, and share tastes. It provides a new experience connecting offline and online.",
      features: language === "KO"
        ? ["독점 콘텐츠 매거진", "오프라인 이벤트 연동", "컬렉터 커뮤니티"]
        : ["Exclusive Content Magazine", "Offline Event Integration", "Collector Community"],
      image: "/images/whats_next_lounge_custom_v2.jpg",
      align: "right"
    },
    {
      id: "hub",
      title: "Kolektt Hub",
      subtitle: language === "KO" ? "레코드 샵을 위한 AI 재고 관리 시스템" : "AI Inventory Management for Record Shops",
      description: language === "KO"
        ? "Hub는 레코드 샵 운영자를 위한 전문 도구이며, 앱과 완전히 연결된 Kolektt 생태계의 B2B 중심 플랫폼입니다. Hub에서 재고를 등록하면, 앱에서도 자동으로 판매 등록됩니다."
        : "Hub is a professional tool for shop owners, a B2B platform fully connected to the app. Register inventory in Hub, and it's automatically listed for sale in the app.",
      features: language === "KO"
        ? ["오프라인·온라인 재고의 통합 관리", "AI 기반 재고 예측과 발주 추천", "고객 취향 데이터를 활용한 샵 맞춤 큐레이션", "매출 흐름 분석과 트렌드 모니터링"]
        : ["Integrated offline/online inventory management", "AI-based forecasting and ordering", "Shop curation using customer taste data", "Revenue analysis and trend monitoring"],
      image: "/images/hub.png",
      align: "left"
    },
    {
      id: "advisor",
      title: "AI Value Advisor",
      subtitle: language === "KO" ? "데이터 기반 가치 분석" : "Data-Driven Value Analysis",
      description: language === "KO"
        ? "AI가 분석한 시장 데이터를 통해 당신의 컬렉션 가치를 실시간으로 확인하고, 미래 가치를 예측합니다."
        : "Check the value of your collection in real-time and predict future value through market data analyzed by AI.",
      features: language === "KO"
        ? ["실시간 시세 트래킹", "미래 가치 예측", "스마트 매수/매도 타이밍 제안"]
        : ["Real-time Price Tracking", "Future Value Prediction", "Smart Buy/Sell Timing Suggestions"],
      image: "/images/whats_next_value_custom.jpg",
      align: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-white">
      {/* Intro Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black z-0"></div>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 max-w-5xl"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm md:text-base font-medium mb-8 text-accent">
            Vision 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            What’s Next <br /> for Kolektt
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'KO' 
              ? "Kolektt는 레코드 문화를 위한 통합 생태계를 구축하고 있습니다." 
              : "Kolektt is building a unified ecosystem for record culture."}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
           <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 space-y-32 md:space-y-48">
        {sections.map((section, index) => (
          <section key={section.id} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${section.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: section.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/0 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl z-20"></div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-accent font-bold tracking-wider text-sm uppercase">0{index + 1}</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight font-display">{section.title}</h2>
                <h3 className="text-xl md:text-2xl text-white/80 font-medium">{section.subtitle}</h3>
              </div>
              
              <div className="w-12 h-1 bg-accent"></div>
              
              <p className="text-lg text-white/60 leading-relaxed">
                {section.description}
              </p>

              <ul className="space-y-4 pt-4">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Outro Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 text-center bg-zinc-900 border-t border-white/5 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 font-display"
          >
            Kolektt is growing with you.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12"
          >
            {language === 'KO' 
              ? "우리는 단순한 앱을 만들지 않습니다. 레코드를 중심으로 한 새로운 문화와 경제의 생태계를 구축하고 있습니다."
              : "We are not just building an app. We are building a new ecosystem of culture and economy around records."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
             <Link href="/" className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-lg">
                Back to Home
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
             </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
