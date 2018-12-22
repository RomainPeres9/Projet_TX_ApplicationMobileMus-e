import React from 'react'

import { Image, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import EnsembleOeuvres from '../Components/EnsembleOeuvres'
import DetailOeuvre from '../Components/DetailOeuvre'
import Recherche from '../Components/Recherche'
import Infos from '../Components/Infos'
import Favorites from '../Components/Favorites'


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

const InfoStackNavigator = createStackNavigator({
  Infos: {
    screen: Infos,
    navigationOptions: {
      title: 'Informations musée du Second Empire'
    }
  }
})

const RechercheStackNavigator = createStackNavigator({
  Recherche: {
    screen: Recherche,
    navigationOptions: {
      title: 'Recherche d\'oeuvres'
    }
  },
  DetailOeuvre: {
    screen: DetailOeuvre,
    navigationOptions: {
      title: 'Oeuvre détaillée'
    }
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Vos oeuvres favorites'
    }
  },
  DetailOeuvre: {
    screen: DetailOeuvre,
    navigationOptions: {
      title: 'Oeuvre détaillée'
    }
  }
})

const AppTabNavigator = createBottomTabNavigator({
    Oeuvres: {
      screen: OeuvresStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image source={require('../Images/ic_oeuvres.png')} style={styles.icon} />
        }
      }

    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image source={require('../Images/ic_favorite.png')} style={styles.icon} />
        }
      }
    },
    Recherche: {
      screen: RechercheStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image source={require('../Images/ic_search.png')} style={styles.icon} />
        }
      }
    },
    Infos: {
      screen: InfoStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image source={require('../Images/ic_info.png')} style={styles.icon} />
        }
      }
    },
  },
  {
    tabBarOptions: {
      showLabel : false,
      showIcon : true,
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    }
  }
)

const AppContainer = createAppContainer(AppTabNavigator)


const styles = StyleSheet.create({
  icon: {
    width : 30,
    height : 30
  }
})

export default AppContainer
