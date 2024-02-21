export default {
  setUser(state, user) {
    state.userInfo = user
  },
  logoutUser(state) {
    state.userInfo = null
  }
}
