"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(language === "KO" ? "메시지 전송에 실패했습니다. 다시 시도해주세요." : "Failed to send message. Please try again.");
    }
  };

  return (
    <div className={`min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${theme === "dark" ? "bg-[#0E0E0D] text-white" : "bg-[#F4F4F0] text-black"}`}>
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className={`inline-flex items-center gap-2 mb-12 text-lg font-medium hover:opacity-70 transition-opacity ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
          <ArrowLeft size={20} />
          {language === "KO" ? "메인으로 돌아가기" : "Back to Home"}
        </Link>
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              {language === "KO" ? "문의하기" : "Contact Us"}
            </h1>
            <p className={`text-xl mb-12 font-korean leading-relaxed ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
              {language === "KO" 
                ? "Kolektt 엔터프라이즈 솔루션에 관심이 있으시거나 파트너십 제안이 있으신가요? 아래 양식을 통해 연락주시면 담당자가 24시간 이내에 답변드리겠습니다."
                : "Interested in Kolektt Enterprise solutions or have a partnership proposal? Fill out the form below and our team will get back to you within 24 hours."}
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-2 opacity-60">EMAIL</h3>
                <p className="text-2xl font-sans">hello@kolektt.kr</p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 md:p-10 rounded-[2rem] ${theme === "dark" ? "bg-[#1A1A1A] border border-white/10" : "bg-white border border-black/5 shadow-xl"}`}
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{language === "KO" ? "전송 완료!" : "Message Sent!"}</h3>
                <p className="opacity-70 mb-8 max-w-xs mx-auto">
                  {language === "KO" ? "문의주셔서 감사합니다. 검토 후 곧 연락드리겠습니다." : "Thank you for reaching out. We'll get back to you shortly."}
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className={`px-8 py-3 rounded-xl font-bold transition-colors ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-black/80"}`}
                >
                  {language === "KO" ? "다른 문의하기" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 opacity-70">
                    {language === "KO" ? "이름 / 회사명" : "Name / Company"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${
                      theme === "dark" 
                        ? "bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10" 
                        : "bg-gray-50 border border-gray-200 focus:border-black/20 focus:bg-white"
                    }`}
                    placeholder={language === "KO" ? "이름을 입력하세요" : "Enter your name"}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 opacity-70">
                    {language === "KO" ? "이메일" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${
                      theme === "dark" 
                        ? "bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10" 
                        : "bg-gray-50 border border-gray-200 focus:border-black/20 focus:bg-white"
                    }`}
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2 opacity-70">
                    {language === "KO" ? "문의 유형" : "Subject"}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-all appearance-none ${
                      theme === "dark" 
                        ? "bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10" 
                        : "bg-gray-50 border border-gray-200 focus:border-black/20 focus:bg-white"
                    }`}
                  >
                    <option value="" disabled className={theme === "dark" ? "bg-[#1A1A1A]" : "bg-white"}>
                      {language === "KO" ? "주제를 선택해주세요" : "Select a subject"}
                    </option>
                    <option value="enterprise" className={theme === "dark" ? "bg-[#1A1A1A]" : "bg-white"}>
                      {language === "KO" ? "Enterprise 플랜 문의" : "Enterprise Plan Inquiry"}
                    </option>
                    <option value="partnership" className={theme === "dark" ? "bg-[#1A1A1A]" : "bg-white"}>
                      {language === "KO" ? "파트너십 제안" : "Partnership Proposal"}
                    </option>
                    <option value="support" className={theme === "dark" ? "bg-[#1A1A1A]" : "bg-white"}>
                      {language === "KO" ? "기술 지원 / 일반 문의" : "Support / General"}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 opacity-70">
                    {language === "KO" ? "메시지" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-all resize-none ${
                      theme === "dark" 
                        ? "bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10" 
                        : "bg-gray-50 border border-gray-200 focus:border-black/20 focus:bg-white"
                    }`}
                    placeholder={language === "KO" ? "문의하실 내용을 구체적으로 적어주세요." : "How can we help you?"}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm p-3 bg-red-500/10 rounded-lg">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                    status === "submitting" ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                  } ${
                    theme === "dark" 
                      ? "bg-white text-black" 
                      : "bg-black text-white"
                  }`}
                >
                  {status === "submitting" ? (
                    <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      {language === "KO" ? "보내기" : "Send Message"}
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
