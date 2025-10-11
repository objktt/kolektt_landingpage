import { MusicIcon, Users2Icon } from "lucide-react";
import Image from "next/image";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import type { Locale } from "@/config/i18n-config";

const getFeatures = (lang: Locale) => [
  {
    Icon: MusicIcon,
    name: "BPM Collect",
    description: lang === 'ko' 
      ? "BPM 자동 계산으로 플레이리스트를 생성하고, 음악의 흐름을 시각적으로 체험하세요."
      : "Automatically calculate BPM, create playlists, and experience the flow of music visually.",
    href: "/bpm-collect",
    cta: lang === 'ko' ? "BPM Collect 바로가기" : "Go to BPM Collect",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 opacity-60">
          <div className="h-[300px] w-[300px] bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center -translate-y-[50px]">
          <Image
            src="/images/media/bpm.png"
            alt="BPM Collect"
            width={386}
            height={386}
            className="object-contain opacity-100"
          />
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Users2Icon,
    name: "Kolektt Hub",
    description: lang === 'ko'
      ? "대량 판매자를 위한 SaaS. AI 기반 재고 관리, 판매 전략, 자동화된 Kolektt 연동."
      : "SaaS for bulk sellers. AI-powered inventory management, sales strategy, and automated Kolektt integration.",
    href: "/hub",
    cta: lang === 'ko' ? "Kolektt Hub 바로가기" : "Go to Kolektt Hub",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 opacity-60">
          <div className="h-[300px] w-[300px] bg-gradient-to-br from-orange-400 to-red-600 rounded-full blur-3xl" />
        </div>
        <div className="absolute -right-[200px] top-20 w-[644px] h-[644px]">
          <Image
            src="/images/media/hub.png"
            alt="Kolektt Hub"
            width={644}
            height={644}
            className="object-contain opacity-100"
          />
        </div>
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
];

interface CollectionBentoProps {
  lang: Locale;
}

function CollectionBento({ lang }: CollectionBentoProps) {
  const features = getFeatures(lang);
  
  return (
    <BentoGrid className="grid-cols-1 lg:grid-cols-2 auto-rows-[24rem]">
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          {...feature}
          href={`/${lang}${feature.href}`}
        />
      ))}
    </BentoGrid>
  );
}

export { CollectionBento };
