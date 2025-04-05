import React from 'react';
import '../styles/home-page.css'; // Reuse card styles from the home page

const AgentPage: React.FC = () => {
  return (
    <div className="agent-container">
      <h1>Find an Agent</h1>
      <p>Connect with a real estate agent to assist you.</p>
      <div className="property-list">
        <div className="property-card">
          <img 
            src="/assets/realestate agent1.jpg" 
            alt="Agent John Doe" 
            className="property-image" 
          />
          <h3>John Doe</h3>
          <p>Email: johndoe@example.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default AgentPage;