// src/services/api.ts
import axios from 'axios';

// Base URL for your own API
const API_URL = 'http://localhost:3000/api';

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

// Function to handle 3CX login
export const login3CX = async (fqdn: string, username: string, password: string) => {
  const THREE_CX_API_URL = `https://${fqdn}/webclient/api`;
  const response = await axios.post(`${THREE_CX_API_URL}/Login/GetAccessToken`, {
    SecurityCode: username,
    Password: password,
    Username: username,
  }, {
    headers: {
      'Content-Type': 'application/json',
      // Add any other necessary headers here
    },
    httpsAgent: new (require('https').Agent)({
      rejectUnauthorized: false,
    }),
  });
  return response.data.Token;
};
