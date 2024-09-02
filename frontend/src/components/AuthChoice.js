// src/components/AuthChoice.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthChoice.css';

const AuthChoice = () => {
    return (
        <div className="auth-choice-container">
            <h2>Welcome! Please choose an option:</h2>
            <div className="auth-buttons">
                <Link to="/signup" className="auth-button">Sign Up</Link>
                <Link to="/login" className="auth-button">Login</Link>
            </div>
        </div>
    );
};

export default AuthChoice;
