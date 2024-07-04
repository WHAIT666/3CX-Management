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
  const accessToken = localStorage.getItem('accessToken');

  const response = await fetch('http://localhost:3000/api/systemstatus', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch system status');
  }

  return response.json();
}



export async function fetchExtensions() {
  const response = await fetch('http://localhost:3000/api/systemextensions', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('threeCXAccessToken')}`, // Use threeCXAccessToken instead of token
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch extensions');
  }

  const data = await response.json();
  return data.value.map(extension => ({
    id: extension.Number,
    name: extension.Name,
    status: extension.IsRegistered ? 'Registered' : 'Unregistered',
    type: extension.Type,
  }));
}