import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Global.css';
import '../styles/AgentPage.css';

const agents = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    image: '/assets/realestate agent1.jpg', // Ensure this path matches your public/assets folder
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    image: '/assets/femalerealestate.jpg', // Ensure this path matches your public/assets folder
  },
];

const AgentPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="agent-page">
        <h1>Our Agents</h1>
        <div className="agent-cards">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <img
                src={agent.image}
                alt={agent.name}
                className="agent-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/default-agent.jpg'; // Fallback image
                }}
              />
              <div className="agent-info">
                <h2>{agent.name}</h2>
                <p>Email: {agent.email}</p>
                <p>Phone: {agent.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentPage;