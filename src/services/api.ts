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
