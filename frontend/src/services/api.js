import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (data) => {
    return axios.post(`${API_URL}/auth/signup`, data);
};

export const login = async (data) => {
    return axios.post(`${API_URL}/auth/login`, data);
};

export const fetchTasks = async (token) => {
    return axios.get(`${API_URL}/tasks`, { headers: { Authorization: token } });
};

export const addTask = async (task, token) => {
    return axios.post(`${API_URL}/tasks`, task, { headers: { Authorization: token } });
};

export const updateTask = async (id, task, token) => {
    return axios.put(`${API_URL}/tasks/${id}`, task, { headers: { Authorization: token } });
};

export const deleteTask = async (id, token) => {
    return axios.delete(`${API_URL}/tasks/${id}`, { headers: { Authorization: token } });
};