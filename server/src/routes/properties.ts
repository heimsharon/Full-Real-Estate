import express from 'express';

const router = express.Router();

// Mock properties data
const properties = [
  { id: 1, name: '112 Coventry Ln', price: '$350,000' },
  { id: 2, name: '45 Maple St', price: '$450,000' },
];

// Get all properties
router.get('/', (req, res) => {
  res.json(properties);
});

export default router;