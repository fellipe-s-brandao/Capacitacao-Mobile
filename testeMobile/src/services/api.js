import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seuIp:3000',
});

export default api;
