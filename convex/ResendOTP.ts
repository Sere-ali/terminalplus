import { Email } from "@convex-dev/auth/providers/Email"

function generateOTP(length: number): string {
  const digits = "0123456789"
  const array = new Uint32Array(length)
  crypto.getRandomValues(array)
  return Array.from(array, (num) => digits[num % digits.length]).join("")
}

export const ResendOTP = Email({
  id: "resend-otp",
  maxAge: 60 * 15,
  async generateVerificationToken() {
    return generateOTP(6)
  },
  async sendVerificationRequest({ identifier: email, token }) {
    const resendKey = process.env.RESEND_API_KEY

    // Déploiement personnel : envoi direct avec Resend (https://resend.com)
    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM ?? "TERMINALE+ <onboarding@resend.dev>",
          to: [email],
          subject: "Ton code TERMINALE+",
          html: `<div style="font-family:Arial,sans-serif;max-width:480px">
            <h2>TERMINALE+</h2>
            <p>Ton code de vérification est :</p>
            <p style="font-size:32px;letter-spacing:6px;font-weight:bold">${token}</p>
            <p>Il est valable 15 minutes. Si tu n'as rien demandé, ignore ce message.</p>
          </div>`,
        }),
      })
      if (!response.ok) {
        throw new Error("Impossible d'envoyer l'e-mail de vérification.")
      }
      return
    }

    // Aperçu sur la plateforme de construction
    const response = await fetch(`${process.env.OTP_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        token,
        chatId: process.env.CHAT_ID,
        appName: `${process.env.APP_NAME}` || "TERMINALE+",
        secretKey: process.env.SECRET_KEY,
      }),
    })
    if (!response.ok) {
      throw new Error("Impossible d'envoyer l'e-mail de vérification.")
    }
  },
})
