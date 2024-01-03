import { Request, Response } from "express";
import nodemailer from "nodemailer";

const sendEmail = async (req: Request, res: Response) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dinchitoo@gmail.com",
        pass: "uvsp tflj udwh dmzj ",
      },
      debug: true,
    });

    const mailOptions = {
      from: "dinchitoo@gmail.com",
      to: "dinchitoo@gmail.com", 
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Form data sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
};

export default sendEmail;
