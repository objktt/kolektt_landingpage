"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { MinimalistHero, MinimalistHeroRight, ShapeConnectAnimation, ShapeConnectAnimation01, ShapeConnectAnimation02 } from "@/components/ui";
import { useToast } from "@/components/ui/src/use-toast";
import type { Locale } from "@/config/i18n-config";

export default function AboutPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = React.use(params);
  const { toast } = useToast();
  
  const handleKolekttHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: lang === 'ko' ? '준비중입니다' : 'Coming Soon',
      description: lang === 'ko' ? 'Kolektt Hub는 곧 출시될 예정입니다.' : 'Kolektt Hub will be available soon.',
    });
  };
  
  // Translation texts
  const translations = {
    en: {
      heroMain: "In a world increasingly shaped by AI, we seek to restore balance. Technology should not only accelerate speed but also deepen meaning, and we design to bring humanity back to the forefront.",
      philosophyDesc1: "Today, algorithms and automation define much of our lives. But in this process, meaning and human connection are often lost.",
      philosophyDesc2: "At Objktt Studio, we believe technology should amplify humanity, not replace it. We don't just solve problems — we peel away layers of complexity, returning to the essence of each subject and creating solutions that feel natural, human, and enduring over time.",
      whyTMain: 'The final "t" in Kolektt and Objktt represents time. It signifies that what we create is not a fixed object, but a subject that unfolds and evolves across moments. Kolektt reflects how a collector\'s taste grows over time, while Objktt represents a studio that approaches every problem with awareness of time and context.',
      visionDesc1: "Taste is personal. Humanity is universal. And Beyond is where new possibilities emerge.",
      visionDesc2: "We stand at the intersection of these three elements — creating experiences that honor individual taste, nurture human connection, and evolve gracefully as they move forward. From there, we venture beyond.",
      ecosystemDesc: "The philosophy of Objktt Studio comes to life through Kolektt, a platform designed to grow and change naturally over time.",
      kolekttAppDesc: "AI-powered camera recognition instantly catalogs your vinyl collection. Track value, discover connections, and join a community of collectors.",
      bpmCollectDesc: "Tap-based BPM measurement with Discogs integration. Create perfect setlists with genre classification and Apple Watch support.",
      kolekttHubDesc: "Professional inventory management for record dealers. Automated cataloging, pricing intelligence, and multi-channel sales integration.",
      aboutStudioDesc1: "Objktt Studio is a collective of designers, developers, and music lovers dedicated to solving problems by returning to their essence, while pacing every solution with sensitivity to context and growth.",
      aboutStudioDesc2: "We merge design, technology, and music to create products that are functional, soulful, and lasting. Rather than chasing fleeting trends or blind automation, we focus on what makes us human — taste, emotion, and connection — allowing these qualities to deepen and evolve over time.",
      joinTeamDesc: "We're looking for passionate individuals who share our vision of creating meaningful products that bridge music, technology, and humanity.",
      learnMore: "Learn More",
      exploreKolektt: "Explore Kolektt",
      forIndividual: "For individual collectors",
      forDJs: "For DJs and vinyl enthusiasts",
      forStoreOwners: "For record store owners",
    },
    ko: {
      heroMain: "AI가 점점 더 많은 영역을 정의하는 세상에서, 우리는 균형을 되찾고자 합니다. 기술은 단순히 속도를 높이는 것이 아니라 의미를 깊게 만들어야 하며, 우리는 인간성을 최전선으로 되돌리는 디자인을 추구합니다.",
      philosophyDesc1: "오늘날 알고리즘과 자동화가 우리 삶의 많은 부분을 정의합니다. 하지만 이 과정에서 의미와 인간적 연결은 종종 사라집니다.",
      philosophyDesc2: "Objktt Studio는 기술이 인간성을 대체하는 것이 아니라 증폭시켜야 한다고 믿습니다. 우리는 단순히 문제를 해결하는 것이 아니라 복잡성의 층을 벗겨내고 각 주제의 본질로 돌아가 자연스럽고 인간적이며 시간이 지나도 지속되는 솔루션을 만듭니다.",
      whyTMain: 'Kolektt와 Objktt의 마지막 "t"는 시간을 나타냅니다. 이는 우리가 만드는 것이 고정된 객체가 아니라 순간을 거쳐 펼쳐지고 진화하는 주체임을 의미합니다. Kolektt는 컬렉터의 취향이 시간에 따라 성장하는 모습을 반영하고, Objktt는 시간과 맥락을 인식하며 모든 문제를 위트있게 해결하는 주체입니다.',
      visionDesc1: "취향은 개인적이고, 인간성은 보편적이며, 그 너머는 새로운 가능성이 떠오르는 곳입니다.",
      visionDesc2: "우리는 이 세 가지 요소의 교차점에 서서 개인의 취향을 존중하고 인간적 연결을 키우며 앞으로 나아가면서 흥미롭게 진화하는 경험을 만듭니다. 그리고 그곳에서 우리는 아마도 미래로 나아갑니다.",
      ecosystemDesc: "Objktt Studio의 철학은 시간에 따라 자연스럽게 성장하고 변화하도록 설계된 플랫폼 Kolektt를 통해 구현됩니다.",
      kolekttAppDesc: "AI 기반 카메라 인식으로 바이널 컬렉션을 즉시 카탈로그화합니다. 가치를 추적하고, 연결을 발견하며, 컬렉터 커뮤니티에 참여하세요.",
      bpmCollectDesc: "탭 기반 BPM 측정과 Discogs 통합. 장르 분류와 Apple Watch 지원으로 완벽한 셋리스트를 만드세요.",
      kolekttHubDesc: "레코드 딜러를 위한 전문 재고 관리. 자동화된 카탈로그화, 가격 인텔리전스, 멀티채널 판매 통합.",
      aboutStudioDesc1: "Objktt Studio는 디자이너, 개발자, 음악 애호가들이 모여 문제의 본질로 돌아가 해결하며, 컨텍스트와 성장에 대한 민감성을 가지고 모든 솔루션의 속도를 조절합니다.",
      aboutStudioDesc2: "우리는 디자인, 기술, 음악을 융합하여 기능적이고 영혼이 담긴 지속 가능한 제품을 만듭니다. 일시적인 트렌드나 맹목적인 자동화를 쫓기보다는 인간을 인간답게 만드는 것, 즉 취향, 감정, 연결에 집중하며 이러한 특성이 시간이 지남에 따라 깊어지고 진화하도록 합니다.",
      joinTeamDesc: "음악, 기술, 인간성을 연결하는 의미 있는 제품을 만드는 우리의 비전을 공유하는 열정적인 분들을 찾고 있습니다.",
      learnMore: "자세히 보기",
      exploreKolektt: "Kolektt 둘러보기",
      forIndividual: "개인 수집가를 위한",
      forDJs: "DJ와 바이닐 애호가를 위한",
      forStoreOwners: "레코드 샵 운영자를 위한",
    },
  };
  
  const t = translations[lang] || translations.en;
  
  // Ecosystem section animation hooks
  const ecosystemRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ecosystemRef,
    offset: ["start end", "end start"]
  });
  const ecosystemImageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const ecosystemImageRotate = useTransform(scrollYProgress, [0, 1], [0, -60]);
  
  return (
    <div className="relative bg-black text-white">
      {/* MinimalistHero Section */}
      <div className="relative z-20 mb-40">
        <MinimalistHero
          mainText={t.heroMain}
          overlayText={{
            part1: "Between Taste,",
            part2: "Humanity, & Beyond",
          }}
          leftImage="/images/media/01.png"
          className="bg-black text-white"
        />
      </div>

      {/* Shape Connect Animation - connect_01 */}
      <div className="relative z-20">
        <ShapeConnectAnimation01 />
      </div>

      {/* Our Philosophy */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-white">
          Our Philosophy
        </h2>
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
            {t.philosophyDesc1}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            {t.philosophyDesc2}
          </p>
        </div>
      </section>

      {/* Why the "t" section */}
      <div className="relative z-20">
        <MinimalistHeroRight
          mainText={t.whyTMain}
          overlayText={{
            part1: 'Why the "t"',
            part2: "in Kolektt / Objktt",
          }}
          rightImage="/images/media/02.png"
          className="bg-black text-white"
        />
      </div>

      {/* Shape Connect Animation - connect_02 */}
      <div className="relative z-20">
        <ShapeConnectAnimation02 />
      </div>

      {/* Our Vision */}
      <section className="relative z-20 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            Our Vision
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              {t.visionDesc1}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              {t.visionDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section 
        ref={ecosystemRef}
        className="relative z-20 bg-black py-32 lg:py-40 pb-48 lg:pb-56 overflow-hidden min-h-[800px]"
      >
        {/* Background Image */}
        <motion.div
          style={{
            y: ecosystemImageY,
            rotate: ecosystemImageRotate,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-4 top-4 z-10 w-[403px] h-[403px] md:w-[484px] md:h-[484px] lg:w-[605px] lg:h-[605px] xl:w-[806px] xl:h-[806px]"
        >
          <Image
            src="/images/media/03.png"
            alt="The Ecosystem"
            fill
            className="object-contain filter grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
            sizes="(max-width: 768px) 403px, (max-width: 1024px) 484px, (max-width: 1280px) 605px, 806px"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 text-white leading-tight">
              The Ecosystem
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.ecosystemDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Kolektt App Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20" style={{ boxShadow: 'var(--hover-shadow, 0 25px 50px -12px rgba(21, 32, 255, 0.2))' }}>
              <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#ffffff', borderRadius: '0' }}>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Kolektt App
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide" style={{ color: '#6B7AFF' }}>
                {t.forIndividual}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.kolekttAppDesc}
              </p>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center font-semibold transition-colors group"
                style={{ color: '#6B7AFF' }}
              >
                {t.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* BPM Collect Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20" style={{ boxShadow: 'var(--hover-shadow, 0 25px 50px -12px rgba(21, 32, 255, 0.2))' }}>
              <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#ffffff', borderRadius: '32px 0 0 32px' }}>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                BPM Collect
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide" style={{ color: '#6B7AFF' }}>
                {t.forDJs}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.bpmCollectDesc}
              </p>
              <Link
                href={`/${lang}/bpm-collect`}
                className="inline-flex items-center font-semibold transition-colors group"
                style={{ color: '#6B7AFF' }}
              >
                {t.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* Kolektt Hub Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20" style={{ boxShadow: 'var(--hover-shadow, 0 25px 50px -12px rgba(21, 32, 255, 0.2))' }}>
              <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: '#ffffff', borderRadius: '50%' }}>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Kolektt Hub
              </h3>
              <p className="mb-4 font-medium text-sm uppercase tracking-wide" style={{ color: '#6B7AFF' }}>
                {t.forStoreOwners}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.kolekttHubDesc}
              </p>
              <a
                href="#"
                onClick={handleKolekttHubClick}
                className="inline-flex items-center font-semibold transition-colors group cursor-pointer"
                style={{ color: '#6B7AFF' }}
              >
                {t.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shape Connect Animation - connect_03 */}
      <div className="relative z-20">
        <ShapeConnectAnimation />
      </div>

      {/* About Objktt Studio */}
      <section className="relative z-20 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
            About Objktt Studio
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              {t.aboutStudioDesc1}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              {t.aboutStudioDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team - Recruiting */}
      <section className="relative z-20 bg-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              {t.joinTeamDesc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@kolektt.kr?subject=Job Application - Objktt Studio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200"
              >
                hello@kolektt.kr
              </a>
              <Link
                href={`/${lang}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-200"
              >
                {t.exploreKolektt}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
