"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function DeleteAccountPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    KO: {
      title: "계정 삭제",
      lastUpdated: "최종 수정일: 2025년 12월 2일",
      intro: "Kolektt 계정을 삭제하고 싶으신가요? 아래 안내를 따라주세요.",
      sections: [
        {
          title: "계정 삭제 요청 방법",
          content: "계정 삭제를 요청하시려면 아래 이메일 주소로 요청을 보내주세요:",
        },
        {
          title: "처리 기간",
          content: "계정 삭제 요청은 접수 후 영업일 기준 7일 이내에 처리됩니다. 삭제가 완료되면 등록하신 이메일로 확인 메일을 보내드립니다.",
        },
        {
          title: "삭제되는 데이터",
          intro: "계정 삭제 시 다음 데이터가 영구적으로 삭제됩니다:",
          items: [
            "프로필 정보 (이름, 이메일, 사용자 이름)",
            "바이닐 레코드 컬렉션 데이터",
            "사진 및 메타데이터",
            "평점 및 메모",
            "커뮤니티 활동 기록",
          ],
        },
        {
          title: "주의사항",
          items: [
            "계정 삭제는 영구적이며 복구할 수 없습니다.",
            "삭제 후 동일한 이메일로 재가입이 가능하지만, 기존 데이터는 복구되지 않습니다.",
            "법적 의무 사항으로 보관이 필요한 일부 데이터는 관련 법령에 따라 일정 기간 보관될 수 있습니다.",
          ],
        },
        {
          title: "문의하기",
          content: "계정 삭제 요청이나 문의사항이 있으시면 아래로 연락주세요:",
          contact: {
            email: "hello@kolektt.kr",
            subject: "계정 삭제 요청",
          },
        },
      ],
    },
    EN: {
      title: "Delete Account",
      lastUpdated: "Last Updated: December 2, 2025",
      intro: "Do you want to delete your Kolektt account? Please follow the instructions below.",
      sections: [
        {
          title: "How to Request Account Deletion",
          content: "To request account deletion, please send your request to the email address below:",
        },
        {
          title: "Processing Time",
          content: "Account deletion requests will be processed within 7 business days of receipt. You will receive a confirmation email at your registered email address once the deletion is complete.",
        },
        {
          title: "Data to be Deleted",
          intro: "When your account is deleted, the following data will be permanently removed:",
          items: [
            "Profile information (name, email, username)",
            "Vinyl record collection data",
            "Photos and metadata",
            "Ratings and notes",
            "Community activity records",
          ],
        },
        {
          title: "Important Notes",
          items: [
            "Account deletion is permanent and cannot be undone.",
            "You can re-register with the same email after deletion, but your previous data will not be restored.",
            "Some data may be retained for a certain period in accordance with legal obligations.",
          ],
        },
        {
          title: "Contact Us",
          content: "For account deletion requests or inquiries, please contact us at:",
          contact: {
            email: "hello@kolektt.kr",
            subject: "Account Deletion Request",
          },
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

              {section.content && (
                <p className={`leading-relaxed ${theme === "dark" ? "text-white/70" : "text-primary/70"}`}>
                  {section.content}
                </p>
              )}

              {section.contact && (
                <div className={`mt-4 p-6 rounded-lg border ${theme === "dark" ? "bg-zinc-900 border-white/10" : "bg-gray-50 border-gray-200"}`}>
                  <p className={`font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-primary"}`}>
                    Email:
                  </p>
                  <a
                    href={`mailto:${section.contact.email}?subject=${encodeURIComponent(section.contact.subject)}`}
                    className="text-accent hover:underline text-lg font-medium"
                  >
                    {section.contact.email}
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
