import axios from 'axios';

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

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data;
};

export const login3CX = async (fqdn: string, identifier: string, password: string) => {
  const payload = {
    FQDN: fqdn,
    SecurityCode: "",
    Username: identifier,
    Password: password
  };
  const response = await axios.post('https://172.28.0.7/webclient/api/Login/GetAccessToken', payload);
  return response.data;
};

export const verifyEmail = async (id: string, code: string) => {
  const response = await axiosInstance.post(`/users/verify/${id}/${code}`);
  return response.data;
};


export const fetchUser = async () => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};

// Fetch the aggregated system status from your backend
export const fetchSystemStatus = async () => {
  try {
    const response = await axiosInstance.get('/aggregatedsystemstatus');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch system status:', error);
    throw error;
  }
};

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

export const resetPassword = async (id: string, code: string, password: string, passwordConfirmation: string) => {
  const response = await axios.post(`/api/users/resetpassword/${id}/${code}`, { password, passwordConfirmation });
  return response.data;
};



