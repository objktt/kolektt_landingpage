"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Plan = "monthly" | "annually";

type PLAN = {
  id: string;
  title: string;
  desc: { ko: string; en: string };
  monthlyPrice: number;
  annuallyPrice: number;
  badge?: string;
  buttonText: { ko: string; en: string };
  features: { ko: string; en: string }[];
  link: string;
};

export const PLANS: PLAN[] = [
  {
    id: "free",
    title: "Free",
    desc: {
      ko: "개인 입문자: 기본 컬렉션, 커뮤니티 열람",
      en: "Individual Starter: Basic collection, community access"
    },
    monthlyPrice: 0,
    annuallyPrice: 0,
    buttonText: {
      ko: "무료로 시작하기",
      en: "Start for Free"
    },
    features: [
      { ko: "카메라 기반 스마트 앨범 인식", en: "Camera-based smart album recognition" },
      { ko: "기본 컬렉션 관리", en: "Basic collection management" },
      { ko: "최대 50장까지 등록", en: "Up to 50 records" },
      { ko: "커뮤니티 열람 권한", en: "Community access" },
      { ko: "컬렉션 분석", en: "Collection analytics" },
      { ko: "모바일 앱 접근", en: "Mobile app access" },
    ],
    link: "#",
  },
  {
    id: "pro",
    title: "Pro",
    desc: {
      ko: "음악 애호가 / 크리에이터: AI 자산 관리, 무제한 등록",
      en: "Music Lover / Creator: AI asset management, unlimited records"
    },
    monthlyPrice: 4.99,
    annuallyPrice: 49.99,
    buttonText: {
      ko: "Pro로 업그레이드",
      en: "Upgrade to Pro"
    },
    features: [
      { ko: "Free 플랜의 모든 기능", en: "All Free plan features" },
      { ko: "무제한 앨범 컬렉션", en: "Unlimited album collection" },
      { ko: "거래 마켓플레이스 접근", en: "Trading marketplace access" },
      { ko: "AI 투자 자문", en: "AI investment insights" },
      { ko: "고급 가격 분석", en: "Advanced price analytics" },
      { ko: "우선 고객 지원", en: "Priority customer support" },
      { ko: "인증된 판매자 배지", en: "Verified seller badge" },
    ],
    link: "#",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    desc: {
      ko: "레코드샵 / 브랜드: 재고 관리 SaaS, 다중 계정",
      en: "Record Shop / Brand: Inventory SaaS, multi-account"
    },
    monthlyPrice: 29,
    annuallyPrice: 290,
    buttonText: {
      ko: "영업팀 문의",
      en: "Contact Sales"
    },
    features: [
      { ko: "Pro 플랜의 모든 기능", en: "All Pro plan features" },
      { ko: "재고 관리 SaaS", en: "Inventory management SaaS" },
      { ko: "다중 사용자 계정", en: "Multi-user accounts" },
      { ko: "맞춤형 API 통합", en: "Custom API integration" },
      { ko: "화이트 라벨 솔루션", en: "White-label solution" },
      { ko: "고급 분석 대시보드", en: "Advanced analytics dashboard" },
      { ko: "전담 계정 매니저", en: "Dedicated account manager" },
      { ko: "우선 기술 지원", en: "Priority technical support" },
    ],
    link: "#",
  },
];

type KolekttPricingProps = {
  lang?: string;
};

export default function KolekttPricing({ lang = 'en' }: KolekttPricingProps) {
  const [billPlan, setBillPlan] = useState<Plan>("monthly");

  const handleSwitch = () => {
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-5xl py-12 mx-auto">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-white">
            {lang === 'ko' ? '당신의 그루브를 선택하세요.' : 'Choose your groove.'}
          </h2>
          <p className="text-base md:text-lg text-center text-gray-300 mt-6">
            {lang === 'ko' ? (
              <>무료로 시작하고 준비가 되면 업그레이드하여<br />
              바이닐 컬렉팅과 거래의 모든 기능을 잠금 해제하세요.</>
            ) : (
              <>Start for free and upgrade when ready<br />
              to unlock all features of vinyl collecting and trading.</>
            )}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-8">
          <span
            className={cn(
              "text-base font-medium",
              billPlan === "monthly" ? "text-white" : "text-gray-400",
            )}
          >
            {lang === 'ko' ? '월간' : 'Monthly'}
          </span>
          <button
            onClick={handleSwitch}
            className="relative rounded-full focus:outline-none"
          >
            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-blue-500"></div>
            <div
              className={cn(
                "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                billPlan === "annually" ? "translate-x-6" : "translate-x-0",
              )}
            />
          </button>
          <span
            className={cn(
              "text-base font-medium",
              billPlan === "annually" ? "text-white" : "text-gray-400",
            )}
          >
            {lang === 'ko' ? '연간' : 'Annually'}
            {billPlan === "annually" && (
              <span className="ml-2 text-sm text-green-400">
                {lang === 'ko' ? '(17% 절약)' : '(Save 17%)'}
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 lg:pt-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan) => (
          <PricingPlan key={plan.id} plan={plan} billPlan={billPlan} lang={lang} />
        ))}
      </div>
    </div>
  );
}

const PricingPlan = ({ plan, billPlan, lang = 'en' }: { plan: PLAN; billPlan: Plan; lang?: string }) => {
  const price = billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice;

  return (
    <div className="flex flex-col relative rounded-2xl lg:rounded-3xl transition-all bg-white items-start w-full border border-gray-200">
      <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
        <h2 className="font-semibold text-xl text-gray-900 pt-5">
          {plan.title}
        </h2>
        <h3 className="mt-3 text-3xl font-bold md:text-5xl text-gray-900">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${plan.id}-${billPlan}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {price === 0 ? (
                "Free"
              ) : (
                <>
                  <span className="text-xl">$</span>
                  {price}
                  <span className="text-lg text-gray-500">
                    /{billPlan === "monthly" ? "mo" : "yr"}
                  </span>
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          {lang === 'ko' ? plan.desc.ko : plan.desc.en}
        </p>
      </div>

      <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
        <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
          {lang === 'ko' ? plan.buttonText.ko : plan.buttonText.en}
        </Button>
        <div className="h-8 overflow-hidden w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.span
              key={billPlan}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-sm text-center text-gray-500 mt-3 mx-auto block"
            >
              {price === 0
                ? (lang === 'ko' ? '신용카드 불필요' : 'No credit card required')
                : billPlan === "monthly"
                  ? (lang === 'ko' ? '월간 결제' : 'Billed monthly')
                  : (lang === 'ko' ? '연간 결제' : 'Billed annually')}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-start w-full p-4 md:p-8 pt-0 gap-y-3">
        <span className="text-base text-gray-900 font-semibold mb-2">
          {lang === 'ko' ? '포함된 기능:' : 'Included features:'}
        </span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start justify-start gap-3">
            <div className="flex items-center justify-center mt-0.5">
              <CheckIcon className="size-5 text-green-500" />
            </div>
            <span className="text-gray-700 text-sm">
              {lang === 'ko' ? feature.ko : feature.en}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
