// Description: This file contains the authentication routes for user login using JWT.
import express from 'express';

const router = express.Router();

// Hardcoded credentials
const USERNAME = '123';
const PASSWORD = '123';

router.post('/login', async (req, res) => {
  try {
    console.log('Request received at /login:', req.body); // Log the request body

    const { username, password } = req.body;

    if (!username || !password) {
      console.error('Missing username or password in request body');
      return res.status(400).json({ message: 'Missing username or password' });
    }

    if (username === USERNAME && password === PASSWORD) {
      console.log('Login successful');
      return res.json({ message: 'Login successful' });
    }

    console.error('Invalid username or password');
    return res.status(401).json({ message: 'Invalid username or password' });
  } catch (error) {
    console.error('An error occurred in /login route:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
