import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth-routes.js';
import propertiesRoutes from './routes/properties.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Use `import.meta.url` to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Use the auth routes
app.use('/api/auth', authRoutes);

// Use the properties routes
app.use('/api/properties', propertiesRoutes);

// Serve index.html for all other routes (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
