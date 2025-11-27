"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = {
    KO: {
      title: "개인정보 처리방침",
      lastUpdated: "최종 수정일: 2025년 1월 1일",
      intro: "Kolektt는 귀하의 개인정보를 소중히 여깁니다. 본 개인정보 처리방침은 귀하가 당사의 모바일 애플리케이션 및 서비스를 사용할 때 당사가 귀하의 정보를 수집, 사용, 공개 및 보호하는 방법을 설명합니다.",
      sections: [
        {
          title: "1. 수집하는 정보",
          subsections: [
            {
              subtitle: "1.1 귀하가 제공하는 정보",
              items: [
                "계정 정보: 이름, 이메일 주소, 사용자 이름 및 비밀번호",
                "프로필 정보: 프로필 사진, 소개 및 선호도",
                "컬렉션 데이터: 사진, 메타데이터, 평점 및 메모를 포함한 바이닐 레코드에 대한 정보",
                "커뮤니케이션: 당사 또는 다른 사용자와의 메시지, 피드백 및 연락",
              ],
            },
            {
              subtitle: "1.2 자동으로 수집되는 정보",
              items: [
                "기기 정보: 기기 유형, 운영 체제, 고유 기기 식별자",
                "사용 데이터: 사용한 앱 기능, 소요 시간, 상호 작용 패턴",
                "위치 데이터: IP 주소를 기반으로 한 대략적인 위치(귀하의 동의 하에)",
                "카메라 및 사진: 앨범 인식을 위한 카메라 및 사진 라이브러리 접근(귀하의 허가 하에)",
              ],
            },
          ],
        },
        {
          title: "2. 정보 사용 방법",
          items: [
            "서비스 제공 및 유지 관리",
            "앨범 인식 및 메타데이터 수집",
            "경험 및 추천 개인화",
            "거래 및 커뮤니티 기능 촉진",
            "알림 및 업데이트 전송",
            "AI 및 머신 러닝 알고리즘 개선",
            "사용 패턴 분석 및 성능 최적화",
            "사기 방지 및 보안 보장",
            "법적 의무 준수",
          ],
        },
        {
          title: "3. 정보 공유 및 공개",
          items: [
            "다른 사용자: 귀하가 공유하기로 선택한 경우 프로필 정보 및 공개 컬렉션 데이터",
            "서비스 제공업체: 당사의 서비스 운영을 지원하는 제3자 회사(호스팅, 분석, 고객 지원)",
            "비즈니스 파트너: 특정 기능 또는 프로모션에 대한 귀하의 동의 하에",
            "법적 요구 사항: 법률에 의해 요구되거나 당사의 권리를 보호하기 위해",
            "비즈니스 전환: 합병, 인수 또는 자산 매각과 관련하여",
          ],
        },
        {
          title: "4. 데이터 보안",
          intro: "당사는 귀하의 정보를 보호하기 위해 적절한 기술적 및 조직적 조치를 시행합니다:",
          items: [
            "전송 중 및 저장 중 데이터 암호화",
            "정기적인 보안 평가 및 업데이트",
            "접근 제어 및 인증",
            "데이터 보호에 대한 직원 교육",
          ],
          outro: "그러나 인터넷을 통한 전송 방법은 100% 안전하지 않으며, 당사는 절대적인 보안을 보장할 수 없습니다.",
        },
        {
          title: "5. 귀하의 권리 및 선택",
          items: [
            "접근: 귀하의 개인정보 사본 요청",
            "수정: 부정확한 정보 업데이트 또는 수정",
            "삭제: 귀하의 계정 및 데이터 삭제 요청",
            "수신 거부: 마케팅 커뮤니케이션 구독 취소",
            "데이터 이동성: 휴대 가능한 형식으로 귀하의 데이터 요청",
            "동의 철회: 특정 데이터 처리에 대한 동의 철회",
          ],
          contact: "이러한 권리를 행사하려면 hello@kolektt.kr로 문의하십시오.",
        },
        {
          title: "6. 데이터 보존",
          content: "당사는 서비스를 제공하고 법적 의무를 준수하는 데 필요한 기간 동안 귀하의 정보를 보존합니다. 귀하가 계정을 삭제하면 법률에 의해 보존해야 하는 경우를 제외하고 90일 이내에 귀하의 개인정보를 삭제하거나 익명화합니다.",
        },
        {
          title: "7. 아동의 개인정보 보호",
          content: "당사의 서비스는 13세 미만의 사용자를 대상으로 하지 않습니다. 당사는 의도적으로 13세 미만 아동의 개인정보를 수집하지 않습니다. 그러한 정보를 수집했음을 알게 되면 삭제 조치를 취합니다.",
        },
        {
          title: "8. 국제 데이터 전송",
          content: "귀하의 정보는 귀하의 거주 국가 이외의 국가로 전송되어 처리될 수 있습니다. 당사는 본 개인정보 처리방침에 따라 귀하의 정보를 보호하기 위해 적절한 보호 조치가 마련되어 있는지 확인합니다.",
        },
        {
          title: "9. 제3자 서비스",
          content: "당사의 앱에는 제3자 웹사이트 또는 서비스에 대한 링크가 포함될 수 있습니다. 당사는 이러한 제3자의 개인정보 보호 관행에 대해 책임을 지지 않습니다. 해당 개인정보 처리방침을 검토하시기 바랍니다.",
        },
        {
          title: "10. 본 개인정보 처리방침의 변경",
          content: '당사는 수시로 본 개인정보 처리방침을 업데이트할 수 있습니다. 중요한 변경 사항이 있는 경우 본 페이지에 새로운 개인정보 처리방침을 게시하고 "최종 수정일" 날짜를 업데이트하여 알려드립니다. 변경 후 당사 서비스를 계속 사용하면 업데이트된 방침에 동의하는 것으로 간주됩니다.',
        },
        {
          title: "11. 문의하기",
          content: "본 개인정보 처리방침에 대해 질문이나 우려 사항이 있으시면 다음으로 문의하십시오:",
          contact: {
            company: "Kolektt",
            email: "hello@kolektt.kr",
            support: "hello@kolektt.kr",
          },
        },
      ],
    },
    EN: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 1, 2025",
      intro: "At Kolektt, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.",
      sections: [
        {
          title: "1. Information We Collect",
          subsections: [
            {
              subtitle: "1.1 Information You Provide",
              items: [
                "Account Information: Name, email address, username, and password",
                "Profile Information: Profile picture, bio, and preferences",
                "Collection Data: Information about your vinyl records, including photos, metadata, ratings, and notes",
                "Communications: Messages, feedback, and correspondence with us or other users",
              ],
            },
            {
              subtitle: "1.2 Automatically Collected Information",
              items: [
                "Device Information: Device type, operating system, unique device identifiers",
                "Usage Data: App features used, time spent, interaction patterns",
                "Location Data: Approximate location based on IP address (with your consent)",
                "Camera and Photos: Access to camera and photo library for album recognition (with your permission)",
              ],
            },
          ],
        },
        {
          title: "2. How We Use Your Information",
          items: [
            "Providing and maintaining our services",
            "Album recognition and metadata collection",
            "Personalizing your experience and recommendations",
            "Facilitating trading and community features",
            "Sending notifications and updates",
            "Improving our AI and machine learning algorithms",
            "Analyzing usage patterns and optimizing performance",
            "Preventing fraud and ensuring security",
            "Complying with legal obligations",
          ],
        },
        {
          title: "3. Information Sharing and Disclosure",
          items: [
            "Other Users: Profile information and public collection data when you choose to share",
            "Service Providers: Third-party companies that help us operate our services (hosting, analytics, customer support)",
            "Business Partners: With your consent for specific features or promotions",
            "Legal Requirements: When required by law or to protect our rights",
            "Business Transfers: In connection with mergers, acquisitions, or asset sales",
          ],
        },
        {
          title: "4. Data Security",
          intro: "We implement appropriate technical and organizational measures to protect your information, including:",
          items: [
            "Encryption of data in transit and at rest",
            "Regular security assessments and updates",
            "Access controls and authentication",
            "Employee training on data protection",
          ],
          outro: "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          title: "5. Your Rights and Choices",
          items: [
            "Access: Request a copy of your personal information",
            "Correction: Update or correct inaccurate information",
            "Deletion: Request deletion of your account and data",
            "Opt-Out: Unsubscribe from marketing communications",
            "Data Portability: Request your data in a portable format",
            "Consent Withdrawal: Withdraw consent for specific data processing",
          ],
          contact: "To exercise these rights, please contact us at hello@kolektt.kr",
        },
        {
          title: "6. Data Retention",
          content: "We retain your information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it by law.",
        },
        {
          title: "7. Children's Privacy",
          content: "Our services are not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.",
        },
        {
          title: "8. International Data Transfers",
          content: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.",
        },
        {
          title: "9. Third-Party Services",
          content: "Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.",
        },
        {
          title: "10. Changes to This Privacy Policy",
          content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.',
        },
        {
          title: "11. Contact Us",
          content: "If you have questions or concerns about this Privacy Policy, please contact us at:",
          contact: {
            company: "Kolektt",
            email: "hello@kolektt.kr",
            support: "hello@kolektt.kr",
          },
        },
      ],
    },
  };

  const data = content[language] || content.EN;

  return (
    <div className="min-h-screen bg-background pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          {data.title}
        </h1>
        <p className="text-sm text-primary/50 mb-8">
          {data.lastUpdated}
        </p>
        <p className="text-lg text-primary/70 mb-12 leading-relaxed">
          {data.intro}
        </p>

        <div className="space-y-10">
          {data.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-3xl font-semibold text-primary mb-4">
                {section.title}
              </h2>

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((sub, subIdx) => (
                    <div key={subIdx}>
                      <h3 className="text-xl font-medium text-primary/80 mb-3">
                        {sub.subtitle}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-primary/70 ml-4">
                        {sub.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.intro && (
                <p className="text-primary/70 mb-3 leading-relaxed">
                  {section.intro}
                </p>
              )}

              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-primary/70 ml-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.outro && (
                <p className="text-primary/70 mt-3 leading-relaxed">
                  {section.outro}
                </p>
              )}

              {section.contact && typeof section.contact === "string" && (
                <p className="text-primary/70 mt-3 leading-relaxed">
                  {section.contact}
                </p>
              )}

              {section.contact && typeof section.contact === "object" && (
                <div className="mt-4 text-primary/70">
                  <p className="font-semibold text-primary">
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

              {section.content && (
                <p className="text-primary/70 leading-relaxed">
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
