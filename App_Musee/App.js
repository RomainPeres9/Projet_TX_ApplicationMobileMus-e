import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Infos from './Components/Infos'
import DetailOeuvre from './Components/DetailOeuvre'
import Recherche from './Components/Recherche'
import Menu from './Components/Menu'
import Navigation from './Navigation/Navigation'
import ItemOeuvre from './Components/ItemOeuvre'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}

