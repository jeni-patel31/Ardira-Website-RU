/**
 * Utility function to verify reCAPTCHA v3 token
 * This should be called from a backend/serverless function
 */

const SECRET_KEY = "6Ldcda4sAAAAAPLoYwQxS7FblRmjhJjmaL-hx9Nl";

export async function verifyRecaptchaToken(
  token: string,
  remoteIp?: string
): Promise<{
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: SECRET_KEY,
        response: token,
        ...(remoteIp && { remoteip: remoteIp }),
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`reCAPTCHA verification failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    throw error;
  }
}

/**
 * Check if reCAPTCHA score is acceptable
 * Score closer to 1.0 indicates more human-like behavior
 * @param score reCAPTCHA score from 0.0 to 1.0
 * @param threshold Minimum acceptable score (default 0.5)
 */
export function isRecaptchaScoreAcceptable(
  score: number,
  threshold: number = 0.5
): boolean {
  return score >= threshold;
}
