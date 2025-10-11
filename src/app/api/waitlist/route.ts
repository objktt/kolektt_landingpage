import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // 이메일 유효성 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Google Sheets 설정
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // 현재 시간
    const now = new Date()
    const timestamp = now.toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    // 시트에 데이터 추가
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:B', // 시트 이름을 제거하고 범위만 사용
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, timestamp]],
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully added to waitlist' 
    })

  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to add to waitlist' }, 
      { status: 500 }
    )
  }
}
