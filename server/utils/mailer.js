import { Resend } from "resend";

let resendClient = null;

function getResendClient() {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export async function sendContactEmail({ name, email, message }) {
  const to = process.env.CONTACT_RECEIVER_EMAIL;

  await getResendClient().emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to,
    reply_to: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 15px; color: #28271F;">
        <h2 style="margin-bottom: 4px;">New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background:#F8F6F2; padding:14px; border-radius:8px;">${message}</p>
      </div>
    `,
  });
}