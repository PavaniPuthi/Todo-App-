import React, { useState } from 'react';
import { addTask } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './AddTask.css'; // Import the CSS file

function AddTask() {
    const [task, setTask] = useState({ title: '', description: '', status: 'pending' });
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTask(task, token);
            alert('Task added successfully');
            navigate('/todos');
        } catch (error) {
            alert('Failed to add task');
        }
    };

    return (
        <div className="add-task-container">
            <form onSubmit={handleSubmit}>
                <h2>Add a new task to your list!</h2>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <select name="status" value={task.status} onChange={handleChange}>
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="done">Done</option>
                    <option value="completed">Completed</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
