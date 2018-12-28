import React from 'react';

//import Navigation from './Navigations/Navigation'
import Connexion from './Components/Connexion'
import AppContainer from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Home from './Components/Home'
import Inscription from './Components/Inscription'
import Recherche from './Components/Recherche'

export default class App extends React.Component {
  render() {
    return (
      // <Recherche/>
      <Provider store={Store}>
        <AppContainer/>
      </Provider>
      //<Inscription/>
      //<Connexion/>
    )
  }
}
