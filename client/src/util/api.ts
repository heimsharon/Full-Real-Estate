export const apiRequest = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`, // Add the token to the Authorization header
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};