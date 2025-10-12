"use client";

import { MusicIcon, Users2Icon } from "lucide-react";
import Image from "next/image";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useToast } from "@/components/ui/src/use-toast";
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
        <div className="absolute inset-0 flex items-center justify-center -translate-y-[30px] md:-translate-y-[50px]">
          <Image
            src="/images/media/bpm.png"
            alt="BPM Collect"
            width={386}
            height={386}
            className="object-contain opacity-100 scale-50 md:scale-100 -translate-y-[10px] md:translate-y-0"
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
        <div className="absolute -right-[100px] md:-right-[200px] top-[50px] md:top-20 w-[322px] h-[322px] md:w-[644px] md:h-[644px]">
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
  const { toast } = useToast();
  
  const handleCardClick = (e: React.MouseEvent, featureName: string, href: string) => {
    if (featureName === "Kolektt Hub") {
      e.preventDefault();
      toast({
        title: lang === 'ko' ? '준비중입니다' : 'Coming Soon',
        description: lang === 'ko' ? 'Kolektt Hub는 곧 출시될 예정입니다.' : 'Kolektt Hub will be available soon.',
      });
    } else {
      window.location.href = `/${lang}${href}`;
    }
  };
  
  return (
    <BentoGrid className="grid-cols-1 lg:grid-cols-2 auto-rows-[24rem]">
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          {...feature}
          href={`/${lang}${feature.href}`}
          onCardClick={(e) => handleCardClick(e, feature.name, feature.href)}
        />
      ))}
    </BentoGrid>
  );
}

export { CollectionBento };
