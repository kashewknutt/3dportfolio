import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecretButton = () => {
  const navigate = useNavigate();

  const handleSecretClick = () => {
    navigate('/login');
  };

  return (
    <button onClick={handleSecretClick} style={{ position: 'absolute', top: 0, right: 0 }}>
      Secret Admin Login
    </button>
  );
};

export default SecretButton;
