import { createStackNavigator } from 'react-navigation';
import EnsembleOeuvres from '../Components/EnsembleOeuvres'
import DetailOeuvre from '../Components/DetailOeuvre'

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


export default OeuvresStackNavigator