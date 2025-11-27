"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function TermsOfServicePage() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    KO: {
      title: "이용약관",
      lastUpdated: "최종 수정일: 2025년 11월 28일",
      intro: 'Kolektt에 오신 것을 환영합니다. 당사의 모바일 애플리케이션 및 서비스에 접근하거나 사용함으로써, 귀하는 본 이용약관("약관")에 구속됨에 동의합니다. 주의 깊게 읽어주시기 바랍니다.',
      sections: [
        {
          title: "1. 약관의 수락",
          content: "계정을 생성하거나 Kolektt를 사용함으로써, 귀하는 본 약관 및 당사의 개인정보 처리방침에 동의합니다. 동의하지 않는 경우, 당사 서비스를 사용하지 마십시오.",
        },
        {
          title: "2. 이용 자격",
          content: "Kolektt를 사용하려면 최소 13세 이상이어야 합니다. 당사 서비스를 사용함으로써, 귀하는 이 연령 요건을 충족하며 본 약관을 체결할 법적 능력이 있음을 진술합니다.",
        },
        {
          title: "3. 계정 등록",
          items: [
            "계정을 생성할 때 정확하고 완전한 정보를 제공해야 합니다",
            "계정 자격 증명의 보안을 유지할 책임이 있습니다",
            "귀하의 계정을 타인과 공유해서는 안 됩니다",
            "계정의 무단 사용이 있는 경우 즉시 당사에 알려야 합니다",
            "귀하의 계정 하에 발생하는 모든 활동에 대해 책임을 집니다",
          ],
        },
        {
          title: "4. 사용자 콘텐츠",
          subsections: [
            {
              subtitle: "4.1 귀하의 콘텐츠",
              content: "귀하는 Kolektt에 업로드하거나 생성하는 모든 콘텐츠(사진, 설명 및 평점 포함)에 대한 소유권을 보유합니다. 콘텐츠를 제출함으로써, 귀하는 당사에게 당사의 서비스를 제공하고 개선하기 위한 목적으로 귀하의 콘텐츠를 사용, 표시, 복제 및 배포할 수 있는 전 세계적이고 비독점적이며 로열티가 없는 라이선스를 부여합니다.",
            },
            {
              subtitle: "4.2 콘텐츠 표준",
              intro: "다음과 같은 콘텐츠를 업로드하거나 공유하지 않기로 동의합니다:",
              items: [
                "법률 또는 규정을 위반하는 콘텐츠",
                "지적 재산권을 침해하는 콘텐츠",
                "증오 발언, 괴롭힘 또는 위협을 포함하는 콘텐츠",
                "성적으로 노골적이거나 음란한 콘텐츠",
                "스팸 또는 오해의 소지가 있는 정보를 포함하는 콘텐츠",
                "타인을 사칭하거나 신원을 잘못 표시하는 콘텐츠",
              ],
            },
          ],
        },
        {
          title: "5. 금지된 행위",
          intro: "다음을 하지 않기로 동의합니다:",
          items: [
            "불법적인 목적으로 서비스를 사용",
            "당사 시스템에 대한 무단 접근 시도",
            "서비스를 방해하거나 중단",
            "플랫폼에서 데이터를 스크랩하거나 수집",
            "애플리케이션을 리버스 엔지니어링하거나 디컴파일",
            "시스템을 조작하기 위해 여러 계정을 생성",
            "사기성 거래 활동에 참여",
            "허가 없이 봇 또는 자동화된 시스템을 사용",
          ],
        },
        {
          title: "6. 거래 및 마켓플레이스",
          items: [
            "Kolektt는 사용자들이 연결하고 바이닐 레코드를 거래할 수 있는 플랫폼을 제공합니다",
            "당사는 사용자 간의 거래에 당사자가 아닙니다",
            "귀하는 리스팅의 정확성에 대한 책임이 있습니다",
            "다른 사용자에 대한 약속을 이행해야 합니다",
            "당사는 본 약관을 위반하는 리스팅을 제거할 권리를 보유합니다",
            "당사는 사용자 간의 분쟁에 대해 책임을 지지 않습니다",
          ],
        },
        {
          title: "7. 구독 및 결제",
          items: [
            "일부 기능은 유료 구독이 필요할 수 있습니다",
            "구독 요금은 반복적으로 사전에 청구됩니다",
            "언제든지 구독을 취소할 수 있습니다",
            "환불은 당사의 환불 정책에 따라 제공됩니다",
            "당사는 통지와 함께 가격을 변경할 권리를 보유합니다",
          ],
        },
        {
          title: "8. 지적 재산권",
          content: "텍스트, 그래픽, 로고, 소프트웨어 및 알고리즘을 포함하되 이에 국한되지 않는 Kolektt의 모든 콘텐츠, 기능 및 기능은 Kolektt 또는 당사의 라이선서가 소유하며 저작권, 상표 및 기타 지적 재산법에 의해 보호됩니다.",
        },
        {
          title: "9. AI 및 머신 러닝",
          intro: "당사의 앨범 인식 및 추천 기능은 인공 지능 및 머신 러닝을 사용합니다. 당사는 정확성을 위해 노력하지만 다음에 대해 100% 정확성을 보장할 수 없습니다:",
          items: [
            "앨범 식별 및 메타데이터",
            "투자 추천",
            "가격 추정",
            "희귀도 평가",
          ],
          outro: "중요한 정보는 독립적으로 확인해야 합니다.",
        },
        {
          title: "10. 면책 조항",
          intro: 'KOLEKTT는 "있는 그대로" 및 "이용 가능한 대로" 제공되며 명시적 또는 묵시적 보증 없이 제공됩니다. 당사는 다음을 보증하지 않습니다:',
          items: [
            "서비스가 중단되거나 오류가 없을 것",
            "결함이 수정될 것",
            "서비스에 바이러스 또는 유해한 구성 요소가 없을 것",
            "서비스에서 얻은 결과가 정확하거나 신뢰할 수 있을 것",
          ],
        },
        {
          title: "11. 책임의 제한",
          content: "법이 허용하는 최대 범위 내에서, KOLEKTT는 서비스 사용으로 인해 발생하는 이익, 데이터 또는 영업권의 손실을 포함하되 이에 국한되지 않는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다.",
        },
        {
          title: "12. 면책",
          intro: "귀하는 다음으로부터 발생하는 모든 청구, 손해, 손실, 책임 및 비용으로부터 Kolektt, 그 계열사 및 각각의 임원, 이사 및 직원을 면책하고 무해하게 보호하기로 동의합니다:",
          items: [
            "본 약관 위반",
            "타인의 권리 침해",
            "서비스 사용",
          ],
        },
        {
          title: "13. 해지",
          intro: "당사는 다음과 같은 이유로 언제든지 귀하의 계정을 일시 중지하거나 해지할 수 있습니다:",
          items: [
            "본 약관 위반",
            "사기 또는 불법 활동",
            "장기간의 비활동",
            "당사의 재량에 따른 기타 이유",
          ],
          outro: "앱 설정을 통해 언제든지 계정을 삭제할 수 있습니다.",
        },
        {
          title: "14. 약관의 변경",
          content: "당사는 언제든지 본 약관을 수정할 권리를 보유합니다. 중요한 변경 사항이 있는 경우 이메일 또는 앱을 통해 알려드립니다. 변경 후 Kolektt를 계속 사용하면 업데이트된 약관에 동의하는 것으로 간주됩니다.",
        },
        {
          title: "15. 준거법",
          content: "본 약관은 법률 충돌 원칙과 관계없이 [귀하의 관할권]의 법률에 따라 규율됩니다. 모든 분쟁은 [귀하의 관할권]의 법원에서 해결됩니다.",
        },
        {
          title: "16. 분쟁 해결",
          intro: "본 약관 또는 Kolektt 사용으로 인해 발생하는 분쟁의 경우:",
          items: [
            "비공식적인 해결을 모색하기 위해 먼저 당사에 연락하기로 동의합니다",
            "해결되지 않으면 분쟁은 구속력 있는 중재의 대상이 될 수 있습니다",
            "집단 소송에 참여할 권리를 포기합니다",
          ],
        },
        {
          title: "17. 가분성",
          content: "본 약관의 어떤 조항이 집행 불가능한 것으로 판명되더라도 나머지 조항은 완전히 유효하고 효력을 유지합니다.",
        },
        {
          title: "18. 완전한 합의",
          content: "본 약관은 당사의 개인정보 처리방침과 함께 당사 서비스 사용에 관한 귀하와 Kolektt 간의 완전한 합의를 구성합니다.",
        },
        {
          title: "19. 연락처 정보",
          intro: "본 약관에 대해 질문이 있으시면 다음으로 문의하십시오:",
          contact: {
            company: "Kolektt",
            email: "hello@kolektt.kr",
            support: "hello@kolektt.kr",
          },
        },
        {
          title: "20. 확인",
          content: "Kolektt를 사용함으로써, 귀하는 본 이용약관을 읽고 이해했으며 이에 구속되는 것에 동의함을 인정합니다.",
        },
      ],
    },
    EN: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: November 28, 2025",
      intro: 'Welcome to Kolektt. By accessing or using our mobile application and services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.',
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By creating an account or using Kolektt, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use our services.",
        },
        {
          title: "2. Eligibility",
          content: "You must be at least 13 years old to use Kolektt. By using our services, you represent that you meet this age requirement and have the legal capacity to enter into these Terms.",
        },
        {
          title: "3. Account Registration",
          items: [
            "You must provide accurate and complete information when creating an account",
            "You are responsible for maintaining the security of your account credentials",
            "You must not share your account with others",
            "You must notify us immediately of any unauthorized use of your account",
            "You are responsible for all activities that occur under your account",
          ],
        },
        {
          title: "4. User Content",
          subsections: [
            {
              subtitle: "4.1 Your Content",
              content: "You retain ownership of all content you upload or create in Kolektt, including photos, descriptions, and ratings. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content for the purpose of providing and improving our services.",
            },
            {
              subtitle: "4.2 Content Standards",
              intro: "You agree not to upload or share content that:",
              items: [
                "Violates any laws or regulations",
                "Infringes on intellectual property rights",
                "Contains hate speech, harassment, or threats",
                "Is sexually explicit or pornographic",
                "Contains spam or misleading information",
                "Impersonates others or misrepresents your identity",
              ],
            },
          ],
        },
        {
          title: "5. Prohibited Conduct",
          intro: "You agree not to:",
          items: [
            "Use the service for any illegal purpose",
            "Attempt to gain unauthorized access to our systems",
            "Interfere with or disrupt the service",
            "Scrape or harvest data from the platform",
            "Reverse engineer or decompile the application",
            "Create multiple accounts to manipulate the system",
            "Engage in fraudulent trading activities",
            "Use bots or automated systems without permission",
          ],
        },
        {
          title: "6. Trading and Marketplace",
          items: [
            "Kolektt provides a platform for users to connect and trade vinyl records",
            "We are not a party to any transactions between users",
            "You are responsible for the accuracy of your listings",
            "You must honor your commitments to other users",
            "We reserve the right to remove listings that violate these Terms",
            "We are not responsible for disputes between users",
          ],
        },
        {
          title: "7. Subscription and Payments",
          items: [
            "Some features may require a paid subscription",
            "Subscription fees are billed in advance on a recurring basis",
            "You can cancel your subscription at any time",
            "Refunds are provided in accordance with our refund policy",
            "We reserve the right to change pricing with notice",
          ],
        },
        {
          title: "8. Intellectual Property",
          content: "All content, features, and functionality of Kolektt, including but not limited to text, graphics, logos, software, and algorithms, are owned by Kolektt or our licensors and are protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          title: "9. AI and Machine Learning",
          intro: "Our album recognition and recommendation features use artificial intelligence and machine learning. While we strive for accuracy, we cannot guarantee 100% accuracy in:",
          items: [
            "Album identification and metadata",
            "Investment recommendations",
            "Price estimates",
            "Rarity assessments",
            "Price estimates",
            "Rarity assessments",
          ],
          outro: "You should verify important information independently.",
        },
        {
          title: "10. Disclaimers",
          intro: 'KOLEKTT IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:',
          items: [
            "The service will be uninterrupted or error-free",
            "Defects will be corrected",
            "The service is free of viruses or harmful components",
            "Results obtained from the service will be accurate or reliable",
          ],
        },
        {
          title: "11. Limitation of Liability",
          content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, KOLEKTT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.",
        },
        {
          title: "12. Indemnification",
          intro: "You agree to indemnify and hold Kolektt, its affiliates, and their respective officers, directors, and employees harmless from any claims, damages, losses, liabilities, and expenses arising from:",
          items: [
            "Your violation of these Terms",
            "Your violation of any rights of others",
            "Your use of the service",
          ],
        },
        {
          title: "13. Termination",
          intro: "We may suspend or terminate your account at any time for:",
          items: [
            "Violation of these Terms",
            "Fraudulent or illegal activity",
            "Extended periods of inactivity",
            "Any other reason at our discretion",
          ],
          outro: "You may delete your account at any time through the app settings.",
        },
        {
          title: "14. Changes to Terms",
          content: "We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through the app. Your continued use of Kolektt after changes constitutes acceptance of the updated Terms.",
        },
        {
          title: "15. Governing Law",
          content: "These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. Any disputes shall be resolved in the courts of [Your Jurisdiction].",
        },
        {
          title: "16. Dispute Resolution",
          intro: "For any disputes arising from these Terms or your use of Kolektt:",
          items: [
            "You agree to first contact us to seek an informal resolution",
            "If unresolved, disputes may be subject to binding arbitration",
            "You waive the right to participate in class action lawsuits",
          ],
        },
        {
          title: "17. Severability",
          content: "If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.",
        },
        {
          title: "18. Entire Agreement",
          content: "These Terms, together with our Privacy Policy, constitute the entire agreement between you and Kolektt regarding the use of our services.",
        },
        {
          title: "19. Contact Information",
          intro: "If you have questions about these Terms, please contact us at:",
          contact: {
            company: "Kolektt",
            email: "hello@kolektt.kr",
            support: "hello@kolektt.kr",
          },
        },
        {
          title: "20. Acknowledgment",
          content: "By using Kolektt, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        },
      ],
    },
  };

  const data = content[language] || content.EN;

  return (
    <div className={`min-h-screen pt-40 pb-20 ${theme === "dark" ? "bg-[#0E0E0D]" : "bg-background"}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-primary"}`}>
          {data.title}
        </h1>
        <p className={`text-sm mb-8 ${theme === "dark" ? "text-white/50" : "text-primary/50"}`}>
          {data.lastUpdated}
        </p>
        <p className={`text-lg mb-12 leading-relaxed ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
          {data.intro}
        </p>

        <div className="space-y-10">
          {data.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className={`text-3xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                {section.title}
              </h2>

              {section.content && (
                <p className={`leading-relaxed mb-4 ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                  {section.content}
                </p>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((sub, subIdx) => (
                    <div key={subIdx}>
                      <h3 className={`text-xl font-medium mb-3 ${theme === "dark" ? "text-white/80" : "text-primary/80"}`}>
                        {sub.subtitle}
                      </h3>
                      {sub.content && (
                        <p className={`mb-3 leading-relaxed ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                          {sub.content}
                        </p>
                      )}
                      {sub.intro && (
                        <p className={`mb-3 leading-relaxed ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                          {sub.intro}
                        </p>
                      )}
                      {sub.items && (
                        <ul className={`list-disc list-inside space-y-2 ml-4 ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.intro && (
                <p className={`mb-3 leading-relaxed ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                  {section.intro}
                </p>
              )}

              {section.items && (
                <ul className={`list-disc list-inside space-y-2 ml-4 ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.outro && (
                <p className={`mt-3 leading-relaxed ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                  {section.outro}
                </p>
              )}

              {section.contact && (
                <div className={`mt-4 ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                  <p className={`font-semibold ${theme === "dark" ? "text-white" : "text-primary"}`}>
                    {section.contact.company}
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-accent hover:underline"
                    >
                      {section.contact.email}
                    </a>
                  </p>
                  <p>
                    Support:{" "}
                    <a
                      href={`mailto:${section.contact.support}`}
                      className="text-accent hover:underline"
                    >
                      {section.contact.support}
                    </a>
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
