import React, { useState } from 'react';
import '../styles/home-page.css';
import '../styles/global.css'; // Import global styles for consistency

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Add logic to handle the search query (e.g., filter properties)
  };

  const properties = [
    {
      id: 1,
      name: '112 Coventry Ln',
      price: '$350,000',
      image: '/assets/112 Coventry Ln.png',
    },
    {
      id: 2,
      name: '45 Maple St',
      price: '$450,000',
      image: '/assets/45 Maple St.png',
    },
  ];

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
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.name} />
              <h3>{property.name}</h3>
              <p>{property.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;