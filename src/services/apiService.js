import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://cards-marketplace-api.onrender.com'
})

export default {
  registerUser(userData) {
    return apiClient.post('/register', userData)
  },

  loginUser(userData) {
    return apiClient.post('/login', userData)
  }
}
