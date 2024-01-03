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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
