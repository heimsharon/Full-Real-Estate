import React from 'react';
import '../styles/login.css';

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