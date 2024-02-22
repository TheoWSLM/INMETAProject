export async function getTokenFromUser(state) {
  if (!state.token || state.token === '') {
    console.error('Token não encontrado')
    return null
  }
console.log(state);
  const token = state.token

  console.log(token)
  return `Bearer ${token}`
}
