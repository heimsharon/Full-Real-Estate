import React from 'react';
import NavBar from '../components/NavBar'; 
import '../styles/Global.css';
import '../styles/LoginPage.css';

const ForgotPassword: React.FC = () => {
  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit" disabled>Reset Password</button>
      </form>
      <p className="error-message">
        This feature is not currently available. Please contact support for assistance.
      </p>
    </div>
  );
};

export default ForgotPassword;