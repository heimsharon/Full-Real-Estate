import React from 'react';
import '../styles/home-page.css';
import '../styles/global.css'; // Import global styles for consistency
import Map from '../components/Map';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <div className="property-section">
        <div className="property-card">
          <img
            src="/assets/101 Elm.png"
            alt="101 Elm"
            className="property-image"
          />
          <div className="property-details">
            <h2>101 Elm</h2>
            <p>Price: $2,500/month</p>
            <p>Deposit: $1,200</p>
          </div>
        </div>
        <div className="property-card">
          <img
            src="/assets/125 Bay Dr.jpg"
            alt="125 Bay Dr"
            className="property-image"
          />
          <div className="property-details">
            <h2>125 Bay Dr</h2>
            <p>Price: $2,800/month</p>
            <p>Deposit: $1,500</p>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default HomePage;