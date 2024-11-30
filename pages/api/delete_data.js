// pages/api/delete-account.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Add your Gmail email in environment variables
      pass: process.env.EMAIL_PASS, // Add your Gmail password in environment variables
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "abc@gmail.com",
      subject: "Account Deletion Request",
      text: `Please delete the account associated with the phone: ${phone}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
