// api.ts
export async function fetchUser() {
  const response = await fetch('http://localhost:3000/api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Use accessToken instead of token
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json();
}


export async function fetchSystemStatus() {
  const response = await fetch('https://172.31.0.139/xapi/v1/SystemStatus', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('threeCXAccessToken')}`, // Use threeCXAccessToken instead of token
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch system status');
  }

  return response.json();
}