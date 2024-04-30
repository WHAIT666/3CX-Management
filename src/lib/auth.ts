// lib/api.ts
import axios from 'axios';

export const getAccessToken = async (username: string, password: string, securityCode: string) => {
  try {
    const response = await axios.post('https://172.31.0.139/webclient/api/Login/GetAccessToken', {
      Username: username,
      Password: password,
      SecurityCode: securityCode
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get access token');
  }
};