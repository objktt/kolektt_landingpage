import { NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  console.log("=== Contact API Handler ===");
  console.log(`API Key loaded: ${apiKey ? "YES" : "NO"}`);
  if (apiKey) {
    console.log(`API Key prefix: ${apiKey.substring(0, 15)}...`);
  } else {
    console.error("ERROR: BREVO_API_KEY is not set!");
  }
  
  // Initialize API instance with key (correct method from official docs)
  const apiInstance = new brevo.TransactionalEmailsApi();
  (apiInstance as any).authentications.apiKey.apiKey = apiKey || "";
  
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const sendSmtpEmail = new brevo.SendSmtpEmail();

      sendSmtpEmail.subject = `[Contact Form] ${subject} - from ${name}`;
      sendSmtpEmail.htmlContent = `
        <html>
          <body>
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </body>
        </html>
      `;
      
      // Admin receives the email
      sendSmtpEmail.sender = { name: "Kolektt Web", email: "hello@kolektt.kr" };
      sendSmtpEmail.to = [{ email: "kolektt.app@gmail.com", name: "Kolektt Team" }];
      sendSmtpEmail.replyTo = { email: email, name: name };

      const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

      console.log("Brevo email sent successfully:", data);

      return NextResponse.json(
        { message: "Message sent successfully", data },
        { status: 200 }
      );
    } catch (error) {
      console.error("Brevo API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
