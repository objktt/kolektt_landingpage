import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kolektt",
  description: "Get in touch with the Kolektt team for enterprise inquiries, support, or partnership opportunities.",
  openGraph: {
    title: "Contact Us | Kolektt",
    description: "Connect with us for B2B solutions and support.",
    url: "https://www.kolektt.kr/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
