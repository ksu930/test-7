import axios from 'axios';

// create BASE API
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
