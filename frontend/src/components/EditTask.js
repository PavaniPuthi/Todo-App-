import React, { useState, useEffect } from 'react';
import { updateTask, fetchTasks } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import './EditTask.css'; // Import the CSS file

function EditTask() {
    const [task, setTask] = useState({ title: '', description: '', status: '' });
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const getTask = async () => {
            try {
                const response = await fetchTasks(token);
                const taskToEdit = response.data.find(t => t.id === id);
                if (taskToEdit) {
                    setTask(taskToEdit);
                } else {
                    alert('Task not found');
                    navigate('/todos'); // Redirect if task not found
                }
            } catch (error) {
                alert('Failed to fetch task');
                console.error('Fetch task error:', error.response ? error.response.data : error.message);
                navigate('/todos'); // Redirect on error
            }
        };
        getTask();
    }, [id, token, navigate]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateTask(id, task, token);
            alert('Task updated successfully');
            navigate('/todos');
        } catch (error) {
            alert('Failed to update task');
            console.error('Update task error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="edit-task-container">
            <h2>Edit Your Task</h2>
            <form onSubmit={handleUpdate}>
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
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
}

export default EditTask;