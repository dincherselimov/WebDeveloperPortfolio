import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const sendEmail = async (req: Request, res: Response) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure nodemailer with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, 
    });

    // Email options
    const mailOptions = {
      from: 'dinchitoo@gmail.com',
      to: 'dinchitoo@gmail.com', // Replace with the recipient's email
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: 'Form data sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default sendEmail;
