import { Resend } from "resend";

export async function sendContactEmail({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to ='divyankasaxena688@gmail.com';

  console.log("RESEND_API_KEY set:", !!apiKey);
  console.log("CONTACT_RECEIVER_EMAIL:", to);

  if (!apiKey) throw new Error("RESEND_API_KEY is not set");
  if (!to) throw new Error("CONTACT_RECEIVER_EMAIL is not set");

  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: [to],
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
  
  console.log("Resend result:", JSON.stringify(result));
  return result;
}