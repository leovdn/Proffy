import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.41:3030'
});

export default api;