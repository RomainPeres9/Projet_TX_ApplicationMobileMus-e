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

const AppTabNavigator = createBottomTabNavigator({
  Oeuvres: {
    screen: OeuvresStackNavigator
  },
  Search: {
    screen: Recherche
  },
  Infos: {
    screen: Infos
  }
})
export default AppTabNavigator
