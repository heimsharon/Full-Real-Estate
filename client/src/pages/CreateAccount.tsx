import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Global.css';
import '../styles/LoginPage.css';


const CreateAccount: React.FC = () => {
  return (
    <div className="create-account-container">
      <h1>Create an Account</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" disabled>Create Account</button>
      </form>
      <p className="error-message">
        This feature is not currently available. Please contact support for assistance.
      </p>
    </div>
  );
};

export default CreateAccount;