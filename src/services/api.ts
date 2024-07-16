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

// Function to handle 3CX login
export const login3CX = async (fqdn: string, identifier: string, password: string) => {
  const payload = {
    FQDN: fqdn,
    SecurityCode: "",
    Username: identifier,
    Password: password
  };
  const response = await axios.post('https://172.31.0.139/webclient/api/Login/GetAccessToken', payload);
  return response.data;
};

// Function to fetch user data
export const fetchUser = async () => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};

// Function to fetch system status
export const fetchSystemStatus = async () => {
  const accessToken = localStorage.getItem('3cxAccessToken');
  const response = await axiosInstance.get('/systemstatus', {
    headers: {
      '3cxAccessToken': accessToken
    }
  });
  return response.data;
};

// Function to fetch 3cxextensions
export const fetchExtensions = async () => {
  const accessToken = localStorage.getItem('3cxAccessToken');
  const response = await axiosInstance.get('/systemextensions', {
    headers: {
      '3cxAccessToken': accessToken
    }
  });
  return response.data.value.map((extension: any) => ({
    id: extension.Number,
    name: extension.Name,
    status: extension.IsRegistered ? 'Registered' : 'Unregistered',
    type: extension.Type,
  }));
};

export const fetchCentrals = async () => {
  try {
    const response = await axiosInstance.get('/centrals');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch centrals:', error);
    throw error;
  }
};

export const createCentral = async (central) => {
  try {
    const response = await axiosInstance.post('/centrals', central);
    return response.data;
  } catch (error) {
    console.error('Failed to create central:', error);
    throw error;
  }
};

export const updateCentral = async (id, central) => {
  try {
    const response = await axiosInstance.put(`/centrals/${id}`, central);
    return response.data;
  } catch (error) {
    console.error('Failed to update central:', error);
    throw error;
  }
};

export const deleteCentral = async (id) => {
  try {
    const response = await axiosInstance.delete(`/centrals/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete central:', error);
    throw error;
  }
};


export const requestPasswordReset = async (email: string) => {
  const response = await axiosInstance.post('/users/forgotpassword', { email });
  return response.data;
};

export const resetPassword = async (id: string, code: string, password: string) => {
  const response = await axiosInstance.post(`/users/resetpassword/${id}/${code}`, { password });
  return response.data;
};