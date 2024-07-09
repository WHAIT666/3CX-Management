// src/services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Base URL for the API

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the token
axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Function to handle login
export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data;
};

// Function to fetch user data
export const fetchUser = async () => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};

// Function to fetch system status
export const fetchSystemStatus = async () => {
  const response = await axiosInstance.get('/systemstatus');
  return response.data;
};

// Function to fetch extensions
export const fetchExtensions = async () => {
  const response = await axiosInstance.get('/systemextensions');
  return response.data.value.map((extension: any) => ({
    id: extension.Number,
    name: extension.Name,
    status: extension.IsRegistered ? 'Registered' : 'Unregistered',
    type: extension.Type,
  }));
};
