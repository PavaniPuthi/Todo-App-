# Task Management App

## Overview

This Task Management App is a full-stack application built with React, Node.js, and a range of other modern web technologies. It includes user authentication and a task management system where users can create, edit, and view tasks.

### Key Features

- **User Authentication**: Allows users to sign up, log in, and log out.
- **Task Management**: Users can create, view, and edit tasks.
- **Responsive Design**: Fully responsive layout suitable for desktop, tablet, and mobile devices.
- **Dynamic Navigation**: Includes a responsive navigation bar with a hamburger menu for mobile and tablet views.

## Technologies Used

- **Frontend**: React.js, React Router, CSS, Responsive Design
- **Backend**: Node.js, Express
- **Database**: SQL
- **Authentication**: JWT (JSON Web Tokens)
- **Other**: Axios for API calls, Media Queries

## Installation

### Prerequisites

- Node.js and npm installed on your local machine.

Usage
Sign Up: Navigate to /signup to create a new account.
Login: Navigate to /login to log in with your credentials.
Home Page: Once logged in, you will be redirected to the home page where you can manage your tasks.
Add Task: Navigate to /addtask to create a new task.
Edit Task: Edit your tasks by navigating to /edit/:id

Authentication
The application uses JWT for user authentication. The token is stored in local storage and used for protected routes.

### API Endpoints

Authentication
POST /api/auth/signup - Create a new user.
POST /api/auth/login - Log in and receive a JWT token.

### Tasks

GET /api/tasks - Retrieve all tasks for the logged-in user.
POST /api/tasks - Create a new task.
PUT /api/tasks/:id - Update a task.
DELETE /api/tasks/:id - Delete a task.

### Responsive Design

The application includes responsive design features to ensure usability across various devices including desktops, tablets, and mobile phones.
