import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css'; 

const NavBar: React.FC = () => {
  const location = useLocation();

  // Determine if the logout button should be displayed
  const showLogout = location.pathname !== '/';

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/agent">Agent</Link></li>
        <li><Link to="/map">Map</Link></li>
        {showLogout && (
          <li className="logout-button">
            <Link to="/" className="logout-link">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;