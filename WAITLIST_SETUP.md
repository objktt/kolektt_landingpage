# Google Sheets 웨이트리스트 설정 가이드

## 1. Google Cloud Console 설정

### 1.1 프로젝트 생성 및 API 활성화
1. [Google Cloud Console](https://console.cloud.google.com/)에 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. "API 및 서비스" > "라이브러리"로 이동
4. "Google Sheets API" 검색 후 활성화

### 1.2 서비스 계정 생성
1. "API 및 서비스" > "사용자 인증 정보"로 이동
2. "사용자 인증 정보 만들기" > "서비스 계정" 선택
3. 서비스 계정 이름 입력 (예: kolektt-waitlist)
4. 역할: "편집자" 또는 "기본" 선택
5. 완료 후 생성된 서비스 계정 클릭
6. "키" 탭에서 "키 추가" > "새 키 만들기" > "JSON" 선택
7. JSON 파일 다운로드 (안전한 곳에 보관)

## 2. Google Sheets 생성 및 설정

### 2.1 스프레드시트 생성
1. [Google Sheets](https://sheets.google.com)에서 새 스프레드시트 생성
2. 이름을 "Kolektt Waitlist"로 변경
3. A1에 "Email", B1에 "Timestamp" 헤더 추가
4. 스프레드시트 URL에서 ID 복사 (예: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`)

### 2.2 권한 설정
1. 스프레드시트에서 "공유" 버튼 클릭
2. 다운로드한 JSON 파일의 `client_email` 값을 복사
3. 해당 이메일을 편집자로 추가

## 3. 환경변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
# Google Sheets API 설정
GOOGLE_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour-private-key-here\n-----END PRIVATE KEY-----"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

### 환경변수 값 설정:
- `GOOGLE_CLIENT_EMAIL`: JSON 파일의 `client_email` 값
- `GOOGLE_PRIVATE_KEY`: JSON 파일의 `private_key` 값 (따옴표 포함)
- `GOOGLE_SHEET_ID`: 스프레드시트 URL의 ID 부분

## 4. 테스트

1. 개발 서버 재시작: `npm run dev`
2. 웨이트리스트 폼에 이메일 입력 후 제출
3. Google Sheets에서 데이터 확인

## 5. 보안 주의사항

- `.env.local` 파일을 절대 Git에 커밋하지 마세요
- JSON 키 파일을 안전한 곳에 보관하세요
- 프로덕션에서는 환경변수를 안전하게 관리하세요

## 6. 추가 기능 (선택사항)

### 중복 이메일 방지
현재 구현에서는 중복 이메일을 허용합니다. 중복을 방지하려면 API에서 기존 이메일 확인 로직을 추가할 수 있습니다.

### 이메일 알림
새로운 가입자가 있을 때 알림을 받으려면 Google Apps Script나 Zapier를 사용할 수 있습니다.

### 데이터 내보내기
Google Sheets에서 CSV로 내보내기 또는 Google Apps Script를 사용한 자동화가 가능합니다. 