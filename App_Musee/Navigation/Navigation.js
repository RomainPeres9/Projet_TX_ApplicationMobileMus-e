import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import EnsembleOeuvres from '../Components/EnsembleOeuvres'
import DetailOeuvre from '../Components/DetailOeuvre'
import Recherche from '../Components/Recherche'
import Infos from '../Components/Infos'

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

const AppContainer = createAppContainer(AppTabNavigator)
export default AppContainer
