import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/api';
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
            localStorage.setItem('username', formData.username); // Store the username
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            alert('Signup failed');
        }
    };

    return (
        <div className="auth-container">
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        onChange={handleChange} 
                        className="input-field" 
                        required 
                    />
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
                    <button type="submit" className="submit-button">Signup</button>
                    <p className="auth-switch">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;