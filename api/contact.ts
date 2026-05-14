/**
 * Vercel Serverless Function — Contact Form Mail Handler
 * POST /api/contact
 *
 * Sends two emails via Gmail SMTP (Nodemailer):
 *   1. Internal notification  → GMAIL_USER (pateljeni3110@gmail.com)
 *   2. Auto-reply confirmation → submitter's email
 *
 * Required Vercel Environment Variables:
 *   GMAIL_USER         = pateljeni3110@gmail.com
 *   GMAIL_APP_PASSWORD = <16-char Google App Password>
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
  recaptchaToken?: string;
}

// ─── SMTP Transporter ─────────────────────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}
// ─── Verify reCAPTCHA Token ───────────────────────────────────────────────────
async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || "",
        response: token,
      }).toString(),
    });

    const data = await response.json() as { success: boolean; score?: number };
    
    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // Accept if score is above 0.5 (more likely to be human)
    return data.success && (data.score ?? 0) > 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}
// ─── HTML Email Template Builder ──────────────────────────────────────────────
function buildEmailTemplate(
  headingText: string,
  rows: { label: string; value: string }[],
  footerNote?: string
): string {
  const rowsHtml = rows
    .map(
      ({ label, value }) => `
        <tr>
          <td style="color:#000;font-family:Arial,Helvetica,sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>${label}:</strong></td>
          <td style="font-family:Arial,Helvetica,sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%;">${value}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head><title></title></head>
<body>
  <table cellspacing="0" cellpadding="0" border="0" width="650" align="center"
    style="border:1px solid #e2e2e2;color:#13324b;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:normal;">
    <tr>
      <td align="center" valign="top">
        <table cellspacing="0" cellpadding="0" width="100%" align="center" style="color:#000000;font-size:12px;">

          <!-- Header -->
          <tr>
            <td valign="top" bgcolor="#f4f9fb"
              style="text-align:center;padding:16px 0;border-bottom:1px solid #e2e2e2;">
              <a href="https://ardira.com" title="Ardira" target="_blank">
                <img src="https://ardira.com/favicon.webp"
                  style="display:block;margin:0 auto;padding:10px 0;"
                  width="120" border="0" alt="Ardira" title="Ardira" />
              </a>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:16px;" align="center" valign="top">
              <table width="100%" cellspacing="0" cellpadding="0" align="center" style="font-size:12px;color:#333;">
                <tr>
                  <td align="left" style="padding:10px 0;font-size:12px;">
                    <strong style="font-size:18px;color:#333;font-family:Arial,Helvetica,sans-serif;">
                      ${headingText}
                    </strong>
                  </td>
                </tr>
                <tr><td height="8"></td></tr>
                <tr>
                  <td width="100%">
                    <table width="100%" align="center" cellpadding="0" cellspacing="0"
                      style="font-size:13px;color:#666666;border-collapse:collapse;border:1px solid #ccc;border-bottom:0;">
                      <tbody>
                        ${rowsHtml}
                      </tbody>
                    </table>
                  </td>
                </tr>
                ${
                  footerNote
                    ? `<tr>
                  <td style="padding:12px 0 0;font-size:12px;color:#888;">${footerNote}</td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" border="0" width="100%"
                style="line-height:18px;padding:10px;border-top:solid 1px #e2e2e2;" bgcolor="#f4f9fb">
                <tr>
                  <td align="left" style="text-align:left;font-size:12px;font-family:Arial,Helvetica,sans-serif;">
                    <strong>Thanks &amp; Regards</strong><br />
                    Ardira Team<br />
                    <strong>Address:</strong> 2040 Martin Ave, Santa Clara, CA 95050, United States<br />
                    <strong>Phone:</strong> 1.669.777.6838<br />
                    <strong>Email:</strong>
                    <a href="mailto:info@ardira.com" style="color:#000;">info@ardira.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Main Handler ─────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS preflight
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ── Validate env vars ────────────────────────────────────────────────────
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env variables");
    return res.status(500).json({ error: "Server email configuration is missing" });
  }

  // ── Parse & validate body ────────────────────────────────────────────────
  const { name, email, phone, company, product, message, recaptchaToken } =
    req.body as ContactFormData;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }

  // ── Verify reCAPTCHA ─────────────────────────────────────────────────────
  if (recaptchaToken) {
    const isValidCaptcha = await verifyRecaptchaToken(recaptchaToken);
    if (!isValidCaptcha) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const TEAM_EMAIL = process.env.GMAIL_USER; // pateljeni3110@gmail.com

  try {
    const transporter = createTransporter();

    // ── Mail 1: Internal team notification ──────────────────────────────────
    const internalRows = [
      { label: "Name",            value: name },
      { label: "Email",           value: `<a href="mailto:${email}" style="color:#43AF57;">${email}</a>` },
      { label: "Contact Number",  value: phone || "—" },
      { label: "Company",         value: company || "—" },
      { label: "Product Interest", value: product || "—" },
      { label: "Message",         value: message ? message.replace(/\n/g, "<br>") : "—" },
    ];

    const internalHtml = buildEmailTemplate(
      "Following message received via contact us form",
      internalRows
    );

    await transporter.sendMail({
      from:     `"Ardira Sales" <${TEAM_EMAIL}>`,
      to:        TEAM_EMAIL,
      replyTo:   email,
      subject:  "Inquiry from Ardira website",
      html:      internalHtml,
    });

    // ── Mail 2: Auto-reply to submitter ─────────────────────────────────────
    const prospectRows = [
      { label: "Name",            value: name },
      { label: "Email",           value: email },
      { label: "Contact Number",  value: phone || "—" },
      { label: "Message",         value: message ? message.replace(/\n/g, "<br>") : "—" },
    ];

    const autoReplyHtml = buildEmailTemplate(
      "We have received your details, one of our representative will get in touch with you shortly.",
      prospectRows
    );

    await transporter.sendMail({
      from:     `"Ardira Sales" <${TEAM_EMAIL}>`,
      to:        email,
      replyTo:   TEAM_EMAIL,
      subject:  "Thank You for contacting us regarding Ardira",
      html:      autoReplyHtml,
    });

    return res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Contact form email error:", error);
    return res.status(500).json({
      error: "Failed to send email. Please try again.",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
