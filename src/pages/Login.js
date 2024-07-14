// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;
      localStorage.setItem('userEmail', userEmail); // Save email to local storage
      onLogin(userEmail); // Call the onLogin prop with email
      navigate('/'); // Navigate to the home page after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;
      localStorage.setItem('userEmail', userEmail); // Save email to local storage
      onLogin(userEmail); // Call the onLogin prop with email
      navigate('/'); // Navigate to the home page after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;
      localStorage.setItem('userEmail', userEmail); // Save email to local storage
      onLogin(userEmail); // Call the onLogin prop with email
      navigate('/'); // Navigate to the home page after successful Google sign-in
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegister ? handleRegister : handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default Login;
