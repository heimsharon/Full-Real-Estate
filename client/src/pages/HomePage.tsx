import React from 'react';
import NavBar from '../components/NavBar'; 
import '../styles/Global.css';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const properties = [
    {
      id: 1,
      name: '101 Elm Lane',
      price: '$2,500/month',
      deposit: '$1,200',
      image: '/assets/101 Elm.png', 
    },
    {
      id: 2,
      name: '125 Bay Drive',
      price: '$2,800/month',
      deposit: '$1,500',
      image: '/assets/125 Bay Dr.jpg', 
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img
                src={property.image}
                alt={property.name}
                className="property-image"
              />
              <div className="property-details">
                <h2>{property.name}</h2>
                <p>Price: {property.price}</p>
                <p>Deposit: {property.deposit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;