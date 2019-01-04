import { combineReducers } from 'redux'
import toggleFavorite from './favoriteReducer'
import toggleProfil from './profilReducer'

export default combineReducers({favorites: toggleFavorite ,profil : toggleProfil})
