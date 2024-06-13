const API_URL = 'http://localhost:3000/api/users/me';

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const fetchUserData = async (): Promise<User> => {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    return await response.json() as User;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Optional: Handle errors as needed
  }
};
