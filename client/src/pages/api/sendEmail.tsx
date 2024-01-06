import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'dinchitoo@gmail.com',
      pass: 'uvsp tflj udwh dmzj',
    },
  });

  const mailOptions = {
    from: email,
    to: "dinchitoo@gmail.com",
    subject: `Email from: ${email}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "" });
  }
}
