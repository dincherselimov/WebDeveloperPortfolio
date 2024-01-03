// import { sendEmail } from './sendEmail'; // Update the path accordingly
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     console.log('API route reached');
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Validate input
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: 'Please provide all required fields.' });
//     }

//     // Handle form submission logic (you can add your logic here)

//     // Send email
//     const to = 'dinchitoo@example.com'; // Replace with the recipient's email
//     const subject = 'New Contact Form Submission';
//     const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

//     try {
//       await sendEmail({ to, subject, text });
//       return res.status(200).json({ message: 'Form submission successful!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
