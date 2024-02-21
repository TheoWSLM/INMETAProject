export async function getTokenFromUser(state) {
    if (!state.token) {
      console.error('Token não encontrado');
      return null;
    }
  
    const token = state.token;
  

    console.log(token);
    return `Bearer ${token}`;
  
  }