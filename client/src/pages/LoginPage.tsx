// Description: Login page component for user authentication in a React application.
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css'; // Correct relative path
import '../styles/global.css'; // Import global styles for consistency

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login validation
    if (username === 'testuser' && password === '123') {
      localStorage.setItem('token', 'mock-jwt-token');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="additional-links">
        <Link to="/forgot-password">Forgot Password?</Link>
        <Link to="/create-account">Create Account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
