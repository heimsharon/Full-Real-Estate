import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth-routes.js'; // Add .js extension
import propertiesRoutes from './routes/properties.js'; // Add .js extension
import pool from './db.js'; // Add .js extension

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
app.use('/api', propertiesRoutes);

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Database connected', time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Serve index.html for all other routes (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
