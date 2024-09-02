import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
    const username = localStorage.getItem('username'); // Retrieve username from localStorage
    const quotes = [
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "You are never too old to set another goal or to dream a new dream.",
        "Your time is limited, don't waste it living someone else's life."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="home-container">
            <h1>Welcome, {username ? username : 'User'}!</h1>
            <p className="quote">"{randomQuote}"</p>
            <p className="motivation">Let's make today amazing!</p>
            <img src="/images/home-bg-img.png" alt="todo icon" className="home-image" />
        </div>
    );
};

export default Home;
