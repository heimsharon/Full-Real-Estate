import React from 'react';

const CreateAccount: React.FC = () => {
  return (
    <div className="create-account-container">
      <h1>Create an Account</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default CreateAccount;