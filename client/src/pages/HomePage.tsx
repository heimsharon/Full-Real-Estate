import React, { useState } from 'react';
import '../styles/home-page.css'; 

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Add logic to handle the search query (e.g., filter properties)
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our Real Estate Platform</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-list">
          <div className="property-card">
            <img src="/assets/112 Coventry ln.webp" alt="112 Coventry Ln" />
            <h3>112 Coventry Ln</h3>
            <p>$350,000</p>
          </div>
          <div className="property-card">
            <img src="/assets/1252 Biltmore Dr.jpg" alt="1252 Biltmore Dr" />
            <h3>1252 Biltmore Dr</h3>
            <p>$450,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;