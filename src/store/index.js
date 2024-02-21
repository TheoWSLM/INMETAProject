import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations,
  actions,
  plugins: [createPersistedState()]
})
