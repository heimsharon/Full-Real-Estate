// Description: This file contains the authentication routes for user login using JWT.
import express, { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists and has a password
    const userQuery = await pool.query('SELECT * FROM users WHERE email = $1 AND password IS NOT NULL', [email]);
    const user = userQuery.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token with a 15-minute expiration
    const token = jwt.sign({ userId: user.user_id, email: user.email }, JWT_SECRET, {
      expiresIn: '15m',
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Middleware to verify JWT
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // Attach user info to the request object
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

export default router;
