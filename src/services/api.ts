import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)
export default api
