// server/index.ts
import express from 'express';
import cors from 'cors'; 

import sendEmail from './api/sendEmail';

const app = express();

app.use(express.json());

// Use cors middleware
app.use(cors());

// Your API routes
app.use('/api/sendEmail', sendEmail);

export default app; 
