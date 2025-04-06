import React from 'react';
import '../styles/home-page.css';
import '../styles/global.css'; // Import global styles for consistency

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      {/* Removed the logout button */}
    </div>
  );
};

export default HomePage;