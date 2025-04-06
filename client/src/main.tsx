// Description: Main entry point for the React application, setting up the router and rendering the App component.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import BuyPage from './pages/BuyPage';
import RentPage from './pages/RentPage';
import SellPage from './pages/SellPage';
import AgentPage from './pages/AgentPage';

const App: React.FC = () => {
  return (
    <>
      {/* Always show the NavBar */}
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/agent" element={<AgentPage />} />
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
