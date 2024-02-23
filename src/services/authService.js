export async function getTokenFromUser(state) {
  if (!state.token || state.token === '') {
    return null
  }
  const token = state.token
  return `Bearer ${token}`
}
