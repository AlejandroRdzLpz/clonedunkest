import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1/'
})

const ballAPI = axios.create({
  baseURL: 'https://www.balldontlie.io/api/v1'
})

export const auth = {
  signup: (body) => api.post('/signup', body),
  login: (body) => api.post('/login', body),
  get: (id) => api.get(`/user/${id}`),
  getTeams: (token) => api.get('/teams', {headers: {Authorization: 'Bearer ' + token}}),
}

export const ball = {
  players: (input) => ballAPI.get(`/players?search=${input}&per_page=30`)
}