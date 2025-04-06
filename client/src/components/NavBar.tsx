import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css'; // Add styles for the navbar if needed

const NavBar: React.FC = () => {
  const location = useLocation();

  // Hide the navbar on the login page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/agent">Agent</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;