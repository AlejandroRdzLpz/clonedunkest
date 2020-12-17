import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1/'
})

export const auth = {
  signup: (body) => api.post('/signup', body),
  login: (body) => api.post('/login', body),
}