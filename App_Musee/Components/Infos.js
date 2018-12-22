import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Infos extends React.Component {
    render() {
        return (
          <View style={styles.contents}>
            <View style={styles.content}>
              <Text style={styles.h1}>Horaires </Text>
              <Text> {"\n"}Le Palais est ouvert tous les jours, sauf le mardi, 01/01, 01/05, 25/12 et certains jours fériés.</Text>
              <Text style={styles.h2}>Hiver ( Novembre à Mars ) </Text>
              <Text>Visite libre les mercredis, jeudis, samedis et dimanches de 10h à 12h et de 16h15 à 18h (dernière admission à 17h15). </Text>
              <Text style={styles.h2}>Eté ( Mars à Septembre ) </Text>
              <Text>Visite libre les mercredis, jeudis, samedis et dimanches de 10h à 12h. {"\n"} </Text>
              <Text style={styles.h1}>Adresse </Text>
              <Text>{"\n"}Palais de Compiègne {"\n"}
               Place du Général de Gaulle {"\n"}
               60200 - Compiègne {"\n"}
               GPS : 49°25’06, 34’’N002°49’48, 23’’E</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  contents: {
    backgroundColor: '#FBF8EF',
    flex: 1
  },
  content: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  },
  h1 : {
    color: '#6C4202',
    fontWeight: 'bold',
    fontSize : 25
  },
  h2 : {
    color: '#B45F04',
    fontSize : 20
  }
})

export default Infos
