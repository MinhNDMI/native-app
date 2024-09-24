import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com/api', // Thay URL của API bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (credentials: { email: string, password: string }) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};
