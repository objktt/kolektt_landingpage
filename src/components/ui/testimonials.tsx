"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

type Testimonial = {
  text: { ko: string; en: string };
  image: string;
  name: { ko: string; en: string };
  role: { ko: string; en: string };
};

const testimonialsData: Testimonial[] = [
  {
    text: {
      ko: "앨범 사진만으로 등록 완료. 정리되지 않았던 컬렉션이 단 하루 만에 정리되었습니다.",
      en: "Registration complete with just album photography. My unorganized collection was sorted in just one day."
    },
    image:
      "https://images.unsplash.com/photo-1695800998493-ccff5ea292ea?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "유현준", en: "Hyunjun Yu" },
    role: { ko: "바이닐 컬렉터, 서울", en: "Vinyl Collector, Seoul" },
  },
  {
    text: {
      ko: "시장 가격과 등급이 자동으로 붙어서 거래 타이밍을 잡기 쉬웠어요. 베타 기간 동안 희귀 레코드를 좋은 가격에 판매했습니다.",
      en: "Market prices and grades are automatically attached, making it easy to time trades. During beta, I sold rare records at good prices."
    },
    image:
      "https://images.unsplash.com/photo-1740153204804-200310378f2f?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "박민지", en: "Minji Park" },
    role: { ko: "레코드 딜러, 부산", en: "Record Dealer, Busan" },
  },
  {
    text: {
      ko: "AI 인식 정확도가 놀랍습니다. 제가 직접 카탈로그하기 어려웠던 희귀 프레싱까지 식별했어요.",
      en: "The AI recognition is incredibly accurate. It identified even obscure pressings I had trouble cataloging myself."
    },
    image:
      "https://images.unsplash.com/photo-1554370510-99b2ff2fbd9e?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "김지훈", en: "Jihoon Kim" },
    role: { ko: "재즈 컬렉터, 대구", en: "Jazz Collector, Daegu" },
  },
  {
    text: {
      ko: "레코드 컬렉터를 위한 스마트 기술 - Kolektt를 완벽하게 설명하는 말입니다. 바이닐 수집의 미래가 여기 있습니다.",
      en: "Smart technology for Record Collectors - this perfectly describes Kolektt. The future of vinyl collecting is here."
    },
    image:
      "https://images.unsplash.com/photo-1661635577898-4bd9049fe8f8?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "정예진", en: "Yejin Jung" },
    role: { ko: "음악 프로듀서, 서울", en: "Music Producer, Seoul" },
  },
  {
    text: {
      ko: "커뮤니티 기능 덕분에 희귀한 발견을 하고 전 세계 컬렉터들과 연결할 수 있습니다. 단순한 카탈로그 그 이상입니다.",
      en: "The community features help me discover rare finds and connect with collectors worldwide. It's more than just cataloging."
    },
    image:
      "https://images.unsplash.com/photo-1701463387028-3947648f1337?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "이준호", en: "Junho Lee" },
    role: { ko: "힙합 컬렉터, 인천", en: "Hip-Hop Collector, Incheon" },
  },
  {
    text: {
      ko: "다른 앱들도 써봤지만 Kolektt의 정확도와 사용 편의성을 따라올 수 없습니다. 카메라 인식은 마법 같아요.",
      en: "I've tried other apps, but none match Kolektt's accuracy and ease of use. The camera recognition is simply magical."
    },
    image:
      "https://images.unsplash.com/photo-1726806387135-c8c48414a613?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "최수빈", en: "Subin Choi" },
    role: { ko: "클래식 음악 애호가, 광주", en: "Classical Music Lover, Gwangju" },
  },
  {
    text: {
      ko: "투자 인사이트 기능 덕분에 제 컬렉션에서 저평가된 레코드를 찾을 수 있었습니다. 멋진 발견을 했어요!",
      en: "The investment insights feature helped me identify undervalued records in my collection. Made some great discoveries!"
    },
    image:
      "https://images.unsplash.com/photo-1621389099366-a82b750ba2b3?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "강동현", en: "Donghyun Kang" },
    role: { ko: "레코드 투자자, 서울", en: "Record Investor, Seoul" },
  },
  {
    text: {
      ko: "혼돈에서 질서로, 몇 분 만에. Kolektt가 제 500장 이상의 레코드 컬렉션을 검색 가능한 정리된 라이브러리로 변환했습니다.",
      en: "From chaos to order in minutes. Kolektt transformed my 500+ record collection into a searchable, organized library."
    },
    image:
      "https://images.unsplash.com/photo-1686543972602-da0c7ea61ce2?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "이지은", en: "Jieun Lee" },
    role: { ko: "음악 교사, 전주", en: "Music Teacher, Jeonju" },
  },
  {
    text: {
      ko: "거래 플랫폼은 안전하고 공정합니다. 전 세계 컬렉터들과 수십 번의 성공적인 거래를 했습니다.",
      en: "The trading platform is secure and fair. I've made dozens of successful trades with collectors around the world."
    },
    image:
      "https://images.unsplash.com/photo-1650075990015-af095f1659e3?w=400&h=400&fit=crop&crop=faces",
    name: { ko: "황수진", en: "Soojin Hwang" },
    role: { ko: "일렉트로닉 음악 컬렉터, 부산", en: "Electronic Music Collector, Busan" },
  },
];

type TestimonialsProps = {
  lang?: string;
};

const Testimonials = ({ lang = 'en' }: TestimonialsProps) => {
  const testimonials = testimonialsData.map((t) => ({
    text: lang === 'ko' ? t.text.ko : t.text.en,
    image: t.image,
    name: lang === 'ko' ? t.name.ko : t.name.en,
    role: lang === 'ko' ? t.role.ko : t.role.en,
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-transparent my-20 relative text-black">
      <div className="container z-10 mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-center text-black">
            {lang === 'ko' ? '놀라워요!' : 'Amazing!'}
          </h2>
          <p className="text-center mt-5 opacity-75 text-uppercase text-black">
            {lang === 'ko' ? 'Kolektt 베타 피드백' : 'Kolektt Beta Feedback'}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
