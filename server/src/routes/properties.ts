import express from 'express';

const router = express.Router();

// Mock properties data
const properties = [
  {
    id: 1,
    name: '101 Elm Ln',
    price: '$350,000',
    type: 'home', // Denotes this is a home
    location: 'San Francisco, CA',
    description: 'A beautiful 3-bedroom house with a spacious backyard.',
    image: '/assets/101-elm.jpg',
  },
  {
    id: 2,
    name: '745 Baja Ct',
    price: '$450,000',
    type: 'condo', // Denotes this is a condo
    location: 'Los Angeles, CA',
    description: 'A modern 4-bedroom condo with a pool.',
    image: '/assets/745-baja.jpg',
  },
  {
    id: 3,
    name: '125 Bay Dr',
    price: '$2,100/month',
    type: 'apartment', // Denotes this is an apartment
    location: 'New York, NY',
    description: 'A cozy 2-bedroom apartment in the heart of the city.',
    image: '/assets/125-bay.jpg',
  },
];

// Get all properties
router.get('/', (req, res) => {
  res.json(properties);
});

export default router;