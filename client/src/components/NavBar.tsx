import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css'; // Add styles for the navigation bar

const NavBar: React.FC = () => {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For navigation

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, reset state)
    console.log('User logged out');
    navigate('/'); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/agent">Agent</Link></li>
      </ul>
      {/* Conditionally render the logout button */}
      {location.pathname !== '/' && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;