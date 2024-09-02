// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AuthChoice from './components/AuthChoice'; // Import AuthChoice

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/signup"
                    element={
                        <PublicRoute element={<Signup />} restricted={true} />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute element={<Login />} restricted={true} />
                    }
                />
                <Route
                    path="/authchoice"
                    element={
                        <PublicRoute element={<AuthChoice />} restricted={false} />
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute element={
                            <>
                                <Navbar />
                                <Home />
                            </>
                        } />
                    }
                />
                <Route
                    path="/todos"
                    element={
                        <PrivateRoute element={
                            <>
                                <Navbar />
                                <TodoList />
                            </>
                        } />
                    }
                />
                <Route
                    path="/addtask"
                    element={
                        <PrivateRoute element={
                            <>
                                <Navbar />
                                <AddTask />
                            </>
                        } />
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <PrivateRoute element={
                            <>
                                <Navbar />
                                <EditTask />
                            </>
                        } />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

