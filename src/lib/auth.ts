// auth.ts
import axios from 'axios';

export const getAccessToken = async (username: string, password: string, securityCode: string) => {
  try {
    // Step 1: Make the first request to get the initial token information
    const initialResponse = await axios.post('https://172.31.0.139/webclient/api/Login/GetAccessToken', {
      Username: username,
      Password: password,
      SecurityCode: securityCode
    });

    // If the response contains a refresh token, store it in a cookie
    if (initialResponse.data.Token && initialResponse.data.Token.refresh_token) {
      // Calculate an expiration date for the cookie. Here we set it to expire in 7 days.
      const date = new Date();
      date.setDate(date.getDate() + 7);
      const expires = "; expires=" + date.toUTCString();

      // Set the cookie with the refresh token and expiration date
      document.cookie = `RefreshTokenCookie=${initialResponse.data.Token.refresh_token}; Domain=localhost; Path=/connect/token; Secure; SameSite=Strict; Expires=${expires}`;
    }

    // Step 2: Make the second request to obtain the actual access token
    const secondResponse = await axios.post('https://172.31.0.139/webclient/connect/token', {
      client_id: 'Webclient', // Include your client_id
      grant_type: 'refresh_token' // Include your grant_type
    });

    // Return the response data, which likely contains the access token
    return secondResponse.data;
  } catch (error) {
    throw new Error('Failed to get access token');
  }
};