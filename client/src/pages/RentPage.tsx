import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Global.css';
import '../styles/RentPage.css';



const RentPage: React.FC = () => {
  return (
    <div className="rent-container">
      <h1>Rent a Property</h1>
      <p>Find properties available for rent.</p>
      
      <div className="property-card">
        <img 
          src="/assets/5461 Park Ter Apt 4.jpg" 
          alt="Apartment complex with a pool" 
          className="property-image" 
        />
        <div className="property-details">
          <h2>Luxury Apartment</h2>
          <p>Price: $2,100 per month</p>
          <p>Deposit: $1,000</p>
        </div>
      </div>
    </div>
  );
};

export default RentPage;