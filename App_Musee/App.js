import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Infos from './Components/Infos'
import DetailOeuvre from './Components/DetailOeuvre'
import Recherche from './Components/Recherche'
import Menu from './Components/Menu'
import Navigation from './Navigation/Navigation'
import ItemOeuvre from './Components/ItemOeuvre'


export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

// const styles = StyleSheet.create({
//
// });
