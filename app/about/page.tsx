"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MinimalistHero } from "@/components/marketing/minimalist-hero";
import { MinimalistHeroRight } from "@/components/marketing/minimalist-hero-right";
import { ShapeConnectAnimation } from "@/components/marketing/shape-connect-animation";
import { ShapeConnectAnimation01 } from "@/components/marketing/shape-connect-animation-01";
import { ShapeConnectAnimation02 } from "@/components/marketing/shape-connect-animation-02";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <MinimalistHero
        mainText={language === "KO" ? "AI가 점점 더 세상을 형성하는 시대에, 우리는 균형을 되찾고자 합니다. 기술은 속도를 높이는 것뿐만 아니라 의미를 깊게 하는 데 사용되어야 하며, 우리는 인간성을 다시 중심에 놓는 디자인을 만듭니다." : "In a world increasingly shaped by AI, we seek to restore balance. Technology should not only accelerate speed but also deepen meaning, and we design to bring humanity back to the forefront."}
        overlayText={{
          part1: "Between Taste,",
          part2: "Humanity, & Beyond",
        }}
        leftImage="/images/media/01.png"
        theme="dark"
      />

      {/* Shape Connect Animation - connect_01 */}
      <ShapeConnectAnimation01 theme="dark" />

      {/* Our Philosophy */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
            Our Philosophy
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              {language === "KO" 
                ? "오늘날 알고리즘과 자동화가 우리 삶의 많은 부분을 정의합니다. 하지만 이 과정에서 의미와 인간적 연결은 종종 사라집니다."
                : "Today, algorithms and automation define much of our lives. But in this process, meaning and human connection are often lost."}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              {language === "KO"
                ? "Objktt Studio는 기술이 인간성을 대체하는 것이 아니라 증폭시켜야 한다고 믿습니다. 우리는 단순히 문제를 해결하는 것이 아니라, 복잡성의 층을 벗겨내고 각 주제의 본질로 돌아가 자연스럽고 인간적이며 시간이 지나도 지속되는 솔루션을 만듭니다."
                : "At Objktt Studio, we believe technology should amplify humanity, not replace it. We don't just solve problems — we peel away layers of complexity, returning to the essence of each subject and creating solutions that feel natural, human, and enduring over time."}
            </p>
          </div>
        </div>
      </section>

      {/* Why the "t" section */}
      <MinimalistHeroRight
        mainText={language === "KO" ? "Kolektt와 Objktt의 마지막 't'는 시간을 나타냅니다. 우리가 만드는 것은 고정된 객체(object)가 아니라 순간을 거쳐 펼쳐지고 진화하는 주체(subject)임을 의미합니다. Kolektt는 컬렉터의 취향이 시간에 따라 성장하는 모습을 반영하며, Objktt는 시간과 맥락을 인식하며 모든 문제에 접근하는 스튜디오를 나타냅니다." : "The final 't' in Kolektt and Objktt represents time. It signifies that what we create is not a fixed object, but a subject that unfolds and evolves across moments. Kolektt reflects how a collector's taste grows over time, while Objktt represents a studio that approaches every problem with awareness of time and context."}
        overlayText={{
          part1: 'Why the "t"',
          part2: "in Kolektt / Objktt",
        }}
        rightImage="/images/media/02.png"
        theme="dark"
      />

      {/* Shape Connect Animation - connect_02 */}
      <ShapeConnectAnimation02 theme="dark" />

      {/* Our Vision */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
            Our Vision
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              {language === "KO"
                ? "취향은 개인적이고, 인간성은 보편적입니다. 그리고 그 너머는 새로운 가능성이 시작되는 지점입니다."
                : "Taste is personal. Humanity is universal. And Beyond is where new possibilities emerge."}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              {language === "KO"
                ? "우리는 이 세 요소가 만나는 교차점에 서 있습니다. 개인의 취향을 존중하고, 인간적인 연결을 키우며, 그 너머로 확장되는 경험을 만들어 갑니다."
                : "We stand at the intersection of these three elements — creating experiences that honor individual taste, nurture human connection, and evolve gracefully as they move forward. From there, we venture beyond."}
            </p>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
              The Ecosystem
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {language === "KO"
                ? "Objktt Studio의 철학은 시간이 지남에 따라 자연스럽게 성장하고 변화하도록 설계된 플랫폼 Kolektt를 통해 실현됩니다."
                : "The philosophy of Objktt Studio comes to life through Kolektt, a platform designed to grow and change naturally over time."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kolektt App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative w-[85px] h-[85px] mb-6 shrink-0">
                <Image
                  src="/images/kolektt_icon.png"
                  alt="Kolektt App"
                  width={85}
                  height={85}
                  className="rounded-[19px] shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-korean leading-tight min-h-[3.5rem] flex items-center text-white">
                Kolektt App
              </h3>
              <p className="mb-4 font-bold text-sm uppercase tracking-wider text-accent">
                {language === "KO" ? "개인 컬렉터를 위한" : "For individual collectors"}
              </p>
              <p className="text-white/60 leading-relaxed font-korean text-sm">
                {language === "KO"
                  ? "AI 기반 카메라 인식으로 바이닐 컬렉션을 즉시 카탈로그화하세요. 가치를 추적하고, 연결을 발견하며, 컬렉터 커뮤니티에 참여하세요."
                  : "AI-powered camera recognition instantly catalogs your vinyl collection. Track value, discover connections, and join a community of collectors."}
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center font-semibold text-accent hover:underline group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* BPM Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative w-[85px] h-[85px] mb-6 shrink-0">
                <Image
                  src="/images/bpm_collect_icon.png"
                  alt="BPM Collect"
                  width={85}
                  height={85}
                  className="rounded-[19px] shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-korean leading-tight min-h-[3.5rem] flex items-center text-white">
                BPM Collect
              </h3>
              <p className="mb-4 font-bold text-sm uppercase tracking-wider text-accent">
                {language === "KO" ? "DJ와 바이닐 애호가를 위한" : "For DJs and vinyl enthusiasts"}
              </p>
              <p className="text-white/60 leading-relaxed font-korean text-sm">
                {language === "KO"
                  ? "Discogs 통합을 제공하는 탭 기반 BPM 측정. 장르 분류 및 Apple Watch 지원으로 완벽한 셋리스트를 만드세요."
                  : "Tap-based BPM measurement with Discogs integration. Create perfect setlists with genre classification and Apple Watch support."}
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/bpm-collect"
                  className="inline-flex items-center font-semibold text-accent hover:underline group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Kolektt Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative w-[85px] h-[85px] mb-6 shrink-0">
                <Image
                  src="/images/kolektt_hub_icon.png"
                  alt="Kolektt Hub"
                  width={85}
                  height={85}
                  className="rounded-[19px] shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-korean leading-tight min-h-[3.5rem] flex items-center text-white">
                Kolektt Hub
              </h3>
              <p className="mb-4 font-bold text-sm uppercase tracking-wider text-accent">
                {language === "KO" ? "레코드 매장 운영자를 위한" : "For record store owners"}
              </p>
              <p className="text-white/60 leading-relaxed font-korean text-sm">
                {language === "KO"
                  ? "매장 재고를 최적화하고, 판매를 추적하며, 거래 커뮤니티와 연결하세요. 어디에나 당신의 매장을 만드세요."
                  : "Optimize your store's inventory, track sales, and connect with the trading community. Your shop, everywhere."}
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/hub"
                  className="inline-flex items-center font-semibold text-accent hover:underline group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shape Connect Animation - connect_03 */}
      <ShapeConnectAnimation theme="dark" />

      {/* About Objktt Studio */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
            About Objktt Studio
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              {language === "KO"
                ? "Objktt Studio는 디자이너, 개발자, 음악 애호가들의 집단으로, 문제를 본질로 돌아가 해결하고 맥락과 성장에 민감하게 모든 솔루션을 조율하는 데 전념합니다."
                : "Objktt Studio is a collective of designers, developers, and music lovers dedicated to solving problems by returning to their essence, while pacing every solution with sensitivity to context and growth."}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              {language === "KO"
                ? "우리는 디자인, 기술, 음악을 융합하여 기능적이고 영혼이 깃들며 오래 지속되는 제품을 만듭니다. 일시적인 트렌드나 맹목적인 자동화를 쫓기보다는 우리를 인간답게 만드는 것, 즉 취향, 감정, 연결에 집중하며 이러한 특성이 시간이 지남에 따라 깊어지고 진화하도록 합니다."
                : "We merge design, technology, and music to create products that are functional, soulful, and lasting. Rather than chasing fleeting trends or blind automation, we focus on what makes us human — taste, emotion, and connection — allowing these qualities to deepen and evolve over time."}
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-zinc-900 rounded-3xl p-8 lg:p-12 border border-white/10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Join Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              {language === "KO"
                ? "음악, 기술, 인간성을 연결하는 의미 있는 제품을 만드는 우리의 비전을 공유하는 열정적인 인재를 찾고 있습니다."
                : "We're looking for passionate individuals who share our vision of creating meaningful products that bridge music, technology, and humanity."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@kolektt.kr?subject=Job Application - Objktt Studio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-200"
              >
                hello@kolektt.kr
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-200"
              >
                Explore Kolektt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
