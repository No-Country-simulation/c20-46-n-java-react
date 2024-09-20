import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  timeout: 5000,
});

export default api;