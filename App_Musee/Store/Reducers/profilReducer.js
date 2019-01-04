const initialState = { profil: ''}


function toggleProfil(state = initialState, action) {
  let nextState
  switch(action.type) {
    case 'TOGGLE_PROFIL':
      nextState = {
          ...state,
          profil: action.value
      }
      return nextState || state //cette syntaxe renvoie nextState s'il ne vaut pas undefined et renvoie state s'il vaut undefined
    default:
      return state
  }
}

export default toggleProfil
