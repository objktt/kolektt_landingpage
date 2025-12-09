import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's Next for Kolektt - 레코드 문화의 미래 | Kolektt",
  description: "Kolektt가 만들어가는 새로운 레코드 생태계. Trade, Lounge, Hub, AI Advisor를 통해 확장되는 바이닐 문화를 만나보세요.",
  openGraph: {
    title: "What's Next for Kolektt | Kolektt",
    description: "Kolektt is building a unified ecosystem for record culture.",
    url: "https://www.kolektt.kr/whats-next",
    type: "website",
  },
};

export default function WhatsNextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
