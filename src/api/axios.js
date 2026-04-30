import axios from 'axios'

const API = axios.create({
  baseURL: 'https://railway.com/project/ba6eef82-2c34-421c-9835-baf73f2b56d9',
  headers: { 'Content-Type': 'application/json' }
})

// Attach token automatically
API.interceptors.request.use(req => {
  const token = localStorage.getItem('token')
  if (token) req.headers.Authorization = `Bearer ${token}`
  return req
})

export default API
