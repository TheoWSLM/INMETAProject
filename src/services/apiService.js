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
  },
  allCards() {
    return apiClient.get('/cards?rpp=10&page=1')
  },
  allTrades() {
    return apiClient.get('/trades?rpp=10&page=1')
  },
  removeTrades() {
    return apiClient.delete('/trades/:id')
  },
  criateTrade(tradeData) {
    return apiClient.post('/trades/:id', tradeData)
  },
  myCards() {
    return apiClient.get('/me/cards')
  },
  addCard(cardData) {
    return apiClient.post('/me/cards', cardData)
  },
  myInformations() {
    return apiClient.get('/me')
  }
}
