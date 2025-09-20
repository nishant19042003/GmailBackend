import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
configDotenv();
const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, Data!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
