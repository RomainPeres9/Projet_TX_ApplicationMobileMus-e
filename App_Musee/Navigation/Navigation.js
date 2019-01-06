import React from 'react'

import { Image, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import EnsembleOeuvres from '../Components/EnsembleOeuvres'
import DetailOeuvre from '../Components/DetailOeuvre'
import Recherche from '../Components/Recherche'
import Infos from '../Components/Infos'
import Favorites from '../Components/Favorites'
import Home from '../Components/Home'
import Inscription from '../Components/Inscription'
import Connexion from '../Components/Connexion'
import ErreurConnexion from '../Components/ErreurConnexion'

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

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Musee de Second Empire'
    }
  },
  Inscription: {
    screen: Inscription,
    navigationOptions: {
      title: 'S\'inscrire'
    }
  },
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      title: 'Se connecter'
    }
  },
  ErreurConnexion: {
    screen: ErreurConnexion,
    navigationOptions: {
      title: 'Erreur Connexion'
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

const MainStackNavigator = createStackNavigator({
  Identification: {
    screen: HomeStackNavigator,
    navigationOptions: {
      header: null
    }
  },
  Menu: {
    screen: AppTabNavigator,
    navigationOptions: {
      header: null
    }
  }
})

const AppContainer = createAppContainer(MainStackNavigator)

const styles = StyleSheet.create({
  icon: {
    width : 30,
    height : 30
  }
})


export default AppContainer
