export default {
  setUser(state, user) {
    state.user = user
  },
  logoutUser(state) {
    state.user = ''
  }
}
