import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // This ensures cookies are sent with requests
});

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data;
};


export const verifyEmail = async (id: string, code: string) => {
  const response = await axiosInstance.post(`/users/verify/${id}/${code}`);
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
  const response = await axiosInstance.get('/systemextensions');
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

export const createCentral = async (central: any) => {
  try {
    const response = await axiosInstance.post('/centrals', central);
    return response.data;
  } catch (error) {
    console.error('Failed to create central:', error);
    throw error;
  }
};

export const updateCentral = async (id: string, central: any) => {
  try {
    const response = await axiosInstance.put(`/centrals/${id}`, central);
    return response.data;
  } catch (error) {
    console.error('Failed to update central:', error);
    throw error;
  }
};

export const deleteCentral = async (id: string) => {
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
  const response = await axiosInstance.post(`/users/resetpassword/${id}/${code}`, { password, passwordConfirmation });
  return response.data;
};


// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get("/api/users"); // Adjust API endpoint as needed
  return response.data;
};

// Update user role
export const updateUserRole = async (userId, newRole) => {
  const response = await axios.patch(`/api/users/${userId}/role`, { role: newRole });
  return response.data;
};


export const fetchUserStatistics = async () => {
  try {
    const response = await axiosInstance.get('/dashboard-stats'); // Use axiosInstance here
    return response.data; // Expect { totalUsers, adminUsers, regularUsers }
  } catch (error) {
    console.error('Failed to fetch user statistics', error);
    throw error;
  }
};