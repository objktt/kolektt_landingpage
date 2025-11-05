# Google SEO Setup Guide for Kolektt

## ✅ Completed Implementations

### 1. **Metadata Configuration**
- ✅ Updated `src/config/site.ts` with Korean domain (kolektt.kr)
- ✅ Enhanced root layout metadata in `src/app/layout.tsx`
- ✅ Added Open Graph tags for social sharing
- ✅ Added Twitter Card tags
- ✅ Set up canonical URLs
- ✅ Configured localization (ko-KR, en-US)
- ✅ Added robots directives for Google Bot

### 2. **Sitemap & Robots**
- ✅ Created `public/robots.txt` - tells Google which pages to crawl
- ✅ Created `src/app/sitemap.ts` - dynamic sitemap generation
- ✅ Configured crawl delay and disallow rules

### 3. **Structured Data (JSON-LD)**
- ✅ Created `src/lib/seo.ts` with schema functions:
  - Organization schema (Knowledge Graph)
  - Website schema (Search enhancement)
  - Product schema (Vinyl collection service)
  - Breadcrumb schema (Navigation)
  - FAQ schema (Rich snippets)
- ✅ Integrated schemas in root layout

### 4. **Google Search Console Integration**
- ✅ Added verification meta tag placeholder
- ✅ Robots.txt with sitemap URL
- ✅ JSON-LD structured data

---

## 📋 TODO: Manual Steps Required

### 1. **Update Google Search Console Verification Code**
```
File: src/app/layout.tsx (line 69 & 71)
File: public/robots.txt (line 13)

Action:
1. Go to https://search.google.com/search-console
2. Add property: https://www.kolektt.kr
3. Copy verification code from "HTML tag" method
4. Replace "your-google-search-console-verification-code" with actual code
```

### 2. **Add OG Image**
```
File: src/config/site.ts (line 5)
Current: https://www.kolektt.kr/og-image.jpg

Action:
1. Create or obtain 1200x630px image for social sharing
2. Place image in: public/og-image.jpg
3. Or replace URL with your CDN image URL
```

### 3. **Update Logo Reference**
```
File: src/lib/seo.ts (line 19)
Current: ${siteConfig.url}/logo.png

Action:
1. Place logo in: public/logo.png
2. Or update URL to your actual logo location
```

### 4. **Verify URLs Match Your Domain**
```
All URLs should be: https://www.kolektt.kr
- metadata base URL ✅
- Open Graph URL ✅
- Twitter Card images ✅
- Sitemap URL ✅
- Robots.txt sitemap URL ✅
```

### 5. **Add Additional Pages to Sitemap** (if needed)
```
File: src/app/sitemap.ts

Currently includes:
- Home page
- /en routes (about, pricing, hub, bpm-collect, privacy, terms)

Add more routes as your site grows
```

### 6. **Set Up Google Analytics (Optional but Recommended)**
```
Create: src/components/GoogleAnalytics.tsx
Or use: next-google-analytics package

Add to root layout to track traffic
```

---

## 🔍 SEO Checklist

### On-Page SEO
- ✅ Meta titles (template set up)
- ✅ Meta descriptions
- ✅ Keywords configured
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter tags

### Technical SEO
- ✅ robots.txt configured
- ✅ sitemap.xml generated
- ✅ JSON-LD structured data
- ✅ Mobile responsive viewport
- ✅ Language alternates (hreflang)
- ⏳ Google Search Console verification (needs verification code)
- ⏳ Google Analytics setup (optional)

### Site Structure
- ✅ Proper heading hierarchy (use in components)
- ✅ Internal linking (configure in components)
- ⏳ Fast page load speed (monitor in GSC)
- ⏳ Mobile-friendly (test in GSC)
- ⏳ No broken links (monitor in GSC)

---

## 🚀 How to Use Structured Data in Components

### Example 1: Breadcrumb Navigation
```tsx
import { getBreadcrumbSchema } from "@/lib/seo";

const breadcrumbs = [
  { name: "Home", url: "https://www.kolektt.kr" },
  { name: "About", url: "https://www.kolektt.kr/en/about" },
];

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
  }}
/>
```

### Example 2: FAQ Page
```tsx
import { getFAQSchema } from "@/lib/seo";

const faqs = [
  { question: "How does Kolektt work?", answer: "..." },
  { question: "What formats can I scan?", answer: "..." },
];

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getFAQSchema(faqs)),
  }}
/>
```

---

## 📊 Testing Tools

### Verify Implementation
1. **Google Search Console**: https://search.google.com/search-console
2. **Google Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
3. **Google Rich Results Test**: https://search.google.com/test/rich-results
4. **Google PageSpeed Insights**: https://pagespeed.web.dev
5. **Schema.org Validator**: https://validator.schema.org

### View Generated Files
```bash
# See actual sitemap at:
# https://www.kolektt.kr/sitemap.xml

# See robots.txt at:
# https://www.kolektt.kr/robots.txt
```

---

## 🔗 Important URLs for Kolektt

- Main Site: https://www.kolektt.kr
- English: https://www.kolektt.kr/en
- About: https://www.kolektt.kr/en/about
- Pricing: https://www.kolektt.kr/en/pricing
- Hub: https://www.kolektt.kr/en/hub
- BPM Collect: https://www.kolektt.kr/en/bpm-collect
- Contact: hello@kolektt.kr

---

## ⚙️ Configuration Files Modified

1. `src/config/site.ts` - Base site configuration
2. `src/app/layout.tsx` - Root metadata and structured data
3. `src/lib/seo.ts` - SEO utility functions (NEW)
4. `src/app/sitemap.ts` - Dynamic sitemap (NEW)
5. `public/robots.txt` - Crawl rules (NEW)

---

## 📚 Next Steps

1. ✅ Replace verification codes with actual Google Search Console codes
2. ✅ Add OG image (1200x630px) to public folder
3. ✅ Submit sitemap to Google Search Console
4. ✅ Test all pages in Rich Results tester
5. ✅ Monitor performance in Google Search Console
6. ✅ Set up Google Analytics (optional)
7. ✅ Add meta tags to individual pages as needed

---

## 💡 Tips

- **Keywords**: Focus on: "레코드", "비닐", "컬렉션", "음반 수집", "음악 투자"
- **Update Frequency**: Update `lastModified` in sitemap.ts when content changes
- **Backlinks**: Focus on getting quality backlinks from music/collecting blogs
- **Content**: Create quality content around vinyl collecting, record market trends
- **Mobile**: Ensure mobile responsiveness for all pages

---

Generated: 2024
For questions, check Google SEO Starter Guide: https://developers.google.com/search/docs
