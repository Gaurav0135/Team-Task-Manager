import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000/api' })

// attach token if present
api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('user')
  if (raw) {
    try {
      const user = JSON.parse(raw)
      if (user.token) config.headers.Authorization = `Bearer ${user.token}`
    } catch (e) {}
  }
  return config
})

export default api
