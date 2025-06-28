# Kolektt Landing Page

AI 기반 바이닐 앨범 컬렉션 앱을 소개하는 인터랙티브 랜딩 페이지입니다.

## 🎯 프로젝트 개요

Kolektt는 AI를 활용하여 바이닐 레코드를 스캔하고, 개인 컬렉션을 구축하며, 음악 취향을 분석하고, 다른 사용자들과 거래할 수 있는 혁신적인 플랫폼입니다.

## 🎬 웹사이트 구성 (7개 씬)

1. **인트로 씬** - 흩어진 바이닐 레코드들이 떠다니는 감성적인 시작
2. **합치기 씬** - 여러 앨범 커버가 하나로 합쳐지는 AI 인식 시연
3. **디바이스 씬** - 아이폰이 등장하며 앱 소개
4. **슬로건 씬** - SNAP, COLLECT, ANALYZE, TRADE 핵심 기능 강조
5. **전환 씬** - 아이폰이 사라지며 다음 단계로 전환
6. **CTA 씬** - 사전 등록 폼으로 사용자 참여 유도
7. **푸터** - 브랜드 정보 및 소셜 링크

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🎨 디자인 특징

- **색상 팔레트**: 바이닐 테마의 따뜻한 오렌지 톤
- **애니메이션**: 부드러운 스크롤 기반 인터랙션
- **반응형**: 모바일부터 데스크톱까지 완벽 대응
- **접근성**: WCAG 2.1 가이드라인 준수

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

## 📁 프로젝트 구조

```
kolektt_landingpage/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── scenes/           # 각 씬별 컴포넌트
│   │   ├── IntroScene.tsx
│   │   ├── MergeScene.tsx
│   │   ├── DeviceScene.tsx
│   │   ├── SloganScene.tsx
│   │   ├── TransitionScene.tsx
│   │   └── CTAScene.tsx
│   └── Footer.tsx        # 푸터 컴포넌트
├── public/               # 정적 파일
└── README.md
```

## 🎯 핵심 기능

### 스크롤 기반 애니메이션
- Framer Motion의 `useScroll`과 `useTransform`을 활용한 부드러운 패럴랙스 효과
- 각 씬별 독립적인 애니메이션 제어

### 반응형 디자인
- Tailwind CSS의 responsive utilities 활용
- 모바일 우선 접근법으로 모든 디바이스 지원

### 인터랙티브 요소
- 바이닐 레코드 호버 효과
- 사전 등록 폼 상태 관리
- 로딩 애니메이션 및 성공 피드백

## 🎨 커스터마이징

### 색상 변경
`tailwind.config.js`에서 vinyl 색상 팔레트를 수정할 수 있습니다:

```javascript
colors: {
  'vinyl': {
    50: '#fef7f0',
    // ... 다른 색상들
  },
}
```

### 애니메이션 조정
각 씬 컴포넌트에서 Framer Motion 속성을 수정하여 애니메이션을 커스터마이징할 수 있습니다.

## 📱 모바일 최적화

- 터치 친화적인 인터페이스
- 최적화된 이미지 로딩
- 모바일 제스처 지원
- 빠른 로딩 속도

## 🔧 성능 최적화

- Next.js의 자동 코드 분할
- 이미지 최적화
- CSS 압축 및 최적화
- 지연 로딩 구현

## 🌐 SEO 최적화

- 메타 태그 완벽 설정
- Open Graph 프로토콜 지원
- 구조화된 데이터
- 검색 엔진 친화적 URL

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

---

**Powered by AI × Passion for Vinyl** 🎵 