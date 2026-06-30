import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // Gmail App Password (not your normal password)
    },
  });

  return transporter;
}

export async function sendContactEmail({ name, email, message }) {
  const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;

  await getTransporter().sendMail({
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to,
    replyTo: email,
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
