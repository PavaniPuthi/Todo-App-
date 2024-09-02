import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './TodoList.css'; // Import the CSS file

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const getTasks = async () => {
            const response = await fetchTasks(token);
            setTasks(response.data);
        };
        getTasks();
    }, [token]);

    const handleDelete = async (id) => {
        await deleteTask(id, token);
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="todo-list-container">
            <h2>Your Tasks</h2>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        <span className="task-title">{task.title}</span> -
                        <span>{task.description}</span> 
                        <span className="task-status">{task.status}</span>
                        <div className="task-actions">
                            <button className="edit-btn" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                            <button className="add-task-btn" onClick={() => navigate('/addtask')}>Add Task</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;