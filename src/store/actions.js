import apiService from '@/services/apiService'

export default {
  async loginUser({ commit }, userData) {
    try {
      const response = await apiService.loginUser(userData)
      commit('setUser', response.data.user)
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  },
  async logoutUser({ commit }) {
    commit('logoutUser')
  }
}
