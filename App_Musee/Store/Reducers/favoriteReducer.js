const initialState = { favoritesOeuvre: []}


function toggleFavorite(state = initialState, action) {
  let nextState
  switch(action.type) {
    case 'TOGGLE_FAVORITE':
      const favoritesOeuvreIndex = state.favoritesOeuvre.findIndex(item => item.url === action.value.url)
	console.log(favoritesOeuvreIndex)
	console.log(action.value.url)
      if(favoritesOeuvreIndex !== -1) {
        //suppression => Cela veut dire que l'oeuvre est présente dans la liste des favoris donc on la supprime
        nextState = {
          ...state,
          favoritesOeuvre: state.favoritesOeuvre.filter( (item, index) => index !== favoritesOeuvreIndex) //On garde tous les films qui n'ont pas le un favoritesOeuvreIndex === index
        }
      }
      else {
        //ajouter
        nextState = {
          ...state,
          favoritesOeuvre: [ ...state.favoritesOeuvre, action.value ]
        }
      }
      return nextState || state //cette syntaxe renvoie nextState s'il ne vaut pas undefined et renvoie state s'il vaut undefined
    default:
      return state
  }
}

export default toggleFavorite
