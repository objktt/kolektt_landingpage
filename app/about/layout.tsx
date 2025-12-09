import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Objktt Studio - 음악과 기술의 본질을 탐구하다 | Kolektt",
  description: "Objktt Studio는 기술이 인간성을 증폭시켜야 한다고 믿습니다. Kolektt 플랫폼을 통해 취향, 연결, 성장의 가치를 실현하는 우리의 철학을 만나보세요.",
  openGraph: {
    title: "About Objktt Studio | Kolektt",
    description: "음악과 기술, 그리고 인간성. Objktt Studio가 그리는 새로운 생태계.",
    url: "https://www.kolektt.kr/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
