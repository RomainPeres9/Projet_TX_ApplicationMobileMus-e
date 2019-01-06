import React from 'react';

import Connexion from './Components/Connexion'
import AppContainer from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Home from './Components/Home'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer/>
      </Provider>
    )
  }
}
