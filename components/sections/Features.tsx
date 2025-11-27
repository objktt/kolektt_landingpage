"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: "snap",
    title: "Snap",
    description: "촬영만 하면 자동으로 등록",
    delay: 0,
  },
  {
    id: "collect",
    title: "Collect",
    description: "컬렉션 가치와 상태를 정교하게 관리",
    delay: 0.1,
  },
  {
    id: "trade",
    title: "Trade",
    description: "안전하고 공정한 거래 시스템",
    delay: 0.2,
  },
];

export default function Features() {
  return (
    <section className="py-40 bg-background border-t border-primary/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-24 max-w-2xl">
          <p className="text-2xl md:text-3xl text-primary/60 font-korean font-medium leading-relaxed">
            Kolektt는 세 가지 핵심 기능으로 <br />
            당신의 컬렉션을 완벽하게 관리합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer relative pt-8 border-t border-primary/20 hover:border-primary transition-colors duration-500"
            >
              <span className="absolute top-0 right-0 text-xs font-bold font-sans text-primary/30 group-hover:text-accent transition-colors">
                0{features.indexOf(feature) + 1}
              </span>
              
              <h3 className="text-display text-7xl md:text-8xl mb-8 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-xl font-medium font-korean text-primary/60 group-hover:text-primary transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
