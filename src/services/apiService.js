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
  myCards(config) {
    return apiClient.get('/me/cards', config)
  },
  addCard(cardIds, config) { // Altera a assinatura da função
  return apiClient.post('/me/cards', cardIds, config); // Passa cardData como dados e config como configuração
},
  myInformations() {
    return apiClient.get('/me')
  }
}
