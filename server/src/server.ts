import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth-routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CommonJS-compatible __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Example usage
console.log('Current directory:', __dirname);
console.log('Current file:', __filename);

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Use the auth routes
app.use('/api/auth', authRoutes);

app.get('/health', (_req, res) => {
  res.status(200).send('Server is healthy');
});

// Serve index.html for all other routes (React Router)
app.get('*', (_req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
