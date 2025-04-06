import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Global.css';
import '../styles/BuyPage.css';

const BuyPage: React.FC = () => {
  const housesForSale = [
    {
      id: 1,
      name: '456 Oak Street',
      price: '$500,000',
      location: 'Austin, TX',
      image: '/assets/55 Oak Dr.png',
    },
    {
      id: 2,
      name: '789 Pine Avenue',
      price: '$650,000',
      location: 'Seattle, WA',
      image: '/assets/745 Baja Ct.png',
    },
    {
      id: 3,
      name: '321 Maple Drive',
      price: '$750,000',
      location: 'Denver, CO',
      image: '/assets/5542 75th St.png',
    },
  ];

  return (
    <div>
      {/* NavBar is placed at the top */}
      <NavBar />
      <div className="home-container">
        <h1>Welcome to the Buy Page</h1>
        <p>Explore our collection of houses for sale and find your dream home.</p>
      </div>
      <div className="property-list">
        <h1>Houses for Sale</h1>
        {housesForSale.map((house) => (
          <div key={house.id} className="property-card">
            <img src={house.image} alt={house.name} className="property-image" />
            <div className="property-details">
              <h2>{house.name}</h2>
              <p>{house.location}</p>
              <p>{house.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyPage;