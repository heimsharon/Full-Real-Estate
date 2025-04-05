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

import jwt from 'jsonwebtoken';


const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Login route (mocked for now)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Mock user validation
  if (username === 'testuser' && password === '123') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '15m' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid username or password' });
});

export default router;
