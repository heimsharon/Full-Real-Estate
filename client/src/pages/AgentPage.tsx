import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Global.css';
import '../styles/AgentPage.css';

interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string; // URL for the agent's image
}

const AgentPage: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching agents' data
    const fetchAgents = async () => {
      try {
        const response = await fetch('/api/agents'); // Replace with your API endpoint
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return <p>Loading agents...</p>;
  }

  if (agents.length === 0) {
    return <p>No agents found.</p>;
  }

  return (
    <div>
      <NavBar />
      <div className="agent-page">
        <h1>Our Agents</h1>
        <div className="agent-cards">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <img src={agent.image} alt={agent.name} className="agent-image" />
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