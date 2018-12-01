import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import EnsembleOeuvres from '../components/EnsembleOeuvres'
import DetailOeuvre from '../components/DetailOeuvre'
import Recherche from '../components/Recherche'
import Infos from '../components/Infos'

const OeuvresStackNavigator = createStackNavigator({
  EnsembleOeuvres: {
    screen: EnsembleOeuvres,
    navigationOptions: {
      title: 'Toutes les oeuvres du musée'
    }
  },
  DetailOeuvre: {
    screen: DetailOeuvre,
    navigationOptions: {
      title: 'Oeuvre détaillée'
    }
  }
})

const AppTabNavigator = createBottomTabNavigator(
  {
    Oeuvres: {
      screen: OeuvresStackNavigator
    },
    Recherche: {
      screen: Recherche
    },
    Infos: {
      screen: Infos
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    }
  }
)
export default AppTabNavigator
