import * as data from '../Helpers/AppBDMusee.json'

export function getOeuvreFromApi () {
  
  return fetch('http://192.168.1.45:8000/oeuvres/')
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


//Lorsqu'on connectera à l'API
export function getOeuvreFromAPIWithSearchedText(text) {
  const url = 'https://...' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
/*
export function getOeuvreFromJSONwithsearchedText(text) {
  //créer une fonction qui permettrait de renvoyer les films qui ont pour une partie du titre le text pris en argument
}

export function getImageFromJSON(name) {
  //console.log('/Users/user/Desktop/APPLI/AppMusee/Helpers' + name)
  return '/Users/user/Desktop/APPLI/AppMusee/Helpers/Paintings/' + name
*/
