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
  allCards(rpp = 12, page = 1) {
    return apiClient.get(`/cards?rpp=${rpp}&page=${page}`);
  },

  allTrades(rpp = 9, page = 1) {
    return apiClient.get(`/trades?rpp=${rpp}&page=${page}`);
  },
  removeTrade(tradeId, config) { 
    return apiClient.delete(`/trades/${tradeId}`, config) 
  },
  criateTrade(tradeData, auth) {
    return apiClient.post('/trades', tradeData, auth)
  },
  myCards(config) {
    return apiClient.get('/me/cards', config)
  },
  addCard(cardIds, config) {
    // Altera a assinatura da função
    return apiClient.post('/me/cards', cardIds, config) // Passa cardData como dados e config como configuração
  },
  myInformations() {
    return apiClient.get('/me')
  }
}
