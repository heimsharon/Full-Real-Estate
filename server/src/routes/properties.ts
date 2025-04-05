import express from 'express';
import pool from '../db.js'; // Add .js extension

const router = express.Router();

// Fetch all properties
router.get('/properties', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM properties');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Add a new property
router.post('/properties', async (req, res) => {
  const { address, price, image, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO properties (address, price, image, description) VALUES ($1, $2, $3, $4) RETURNING *',
      [address, price, image, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;