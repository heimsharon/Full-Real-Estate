// Description: This file contains the authentication routes for user login using JWT.
import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to authenticate JWT tokens
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Hardcoded username and password
const HARDCODED_USERNAME = '123';
const HARDCODED_PASSWORD = '123';

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate username and password
  if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '15m' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid username or password' });
});

// Token validation route
router.get('/validate', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

export default router;
