import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData); 
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            } else {
                throw new Error('Invalid login');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed');
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <button type="submit" className="submit-button">Login</button>
                <p className="auth-switch">
                    Don't have an account? <a href="/signup">Sign up here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;