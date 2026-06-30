import { addContact, readContacts } from "../utils/fileStore.js";
import { sendContactEmail } from "../utils/mailer.js";

export const createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are all required." });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const entry = addContact({ name, email, message, source: "portfolio-site" });

    try {
      await sendContactEmail({ name, email, message });
    } catch (mailErr) {
      // Message is already saved to contacts.json even if the email fails to send.
      console.error("Email send failed:", mailErr.message);
    }

    return res.status(201).json({ success: true, id: entry.id });
  } catch (err) {
    console.error("Contact submission error:", err.message);
    return res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};

export const listContactMessages = (req, res) => {
  try {
    const entries = readContacts();
    return res.json(entries);
  } catch (err) {
    return res.status(500).json({ error: "Could not fetch messages." });
  }
};
