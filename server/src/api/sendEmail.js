"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        // Configure nodemailer with your email service credentials
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'dinchitoo@gmail.com',
                pass: 'uvsp tflj udwh dmzj ',
            },
            debug: true, // Add this line
        });
        // Email options
        const mailOptions = {
            from: 'dinchitoo@gmail.com',
            to: 'dinchitoo@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        try {
            // Send email
            yield transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Form data sent successfully!' });
        }
        catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email.' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
});
exports.default = sendEmail;
