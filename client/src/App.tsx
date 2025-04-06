import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import BuyPage from './pages/BuyPage';
import RentPage from './pages/RentPage';
import SellPage from './pages/SellPage';
import AgentPage from './pages/AgentPage';
import MapPage from './pages/MapPage';
import './styles/Global.css';

const App: React.FC = () => {
  return (
    <Router>
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
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
};

export default App;