import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/authchoice');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img height="50px" width="60px" src="/images/todo-icon.png" alt="todo icon" className="navbar-logo" />
                
                <div className="navbar-menu-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/todos" className="navbar-link" onClick={() => setIsOpen(false)}>Todos</Link>
                    <Link to="/addtask" className="navbar-link" onClick={() => setIsOpen(false)}>Add Task</Link>
                    <button onClick={handleLogout} className="navbar-logout-button">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;