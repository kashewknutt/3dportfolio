import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Modify handleLogin to receive the event
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    
    try {
      const res = await axios.post(
        'https://portfolio-backend-cq63io1iv-rajat-disawals-projects.vercel.app/login', 
        { username, password }, 
        { withCredentials: true }
      );
      
      // Save token in localStorage
      localStorage.setItem('token', res.data.token);
      
      // Redirect to admin page after successful login
      navigate('/admin');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
