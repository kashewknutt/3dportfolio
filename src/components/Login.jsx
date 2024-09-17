import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const res = await axios.post(
        '/api/login', // This will be proxied through Vite config
        { username, password },
        {
          withCredentials: true, // Ensures credentials (cookies, headers) are sent
        }
      );

      // Store JWT token in localStorage
      localStorage.setItem('token', res.data.token);

      // Redirect to admin page on successful login
      navigate('/admin');
    } catch (error) {
      // Set error message if login fails
      setError('Invalid credentials, please try again.');
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if present */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
