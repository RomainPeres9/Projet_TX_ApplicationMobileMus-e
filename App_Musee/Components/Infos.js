import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Infos extends React.Component {
    render() {
        return (
          <View style={styles.content}>
            <Text style={styles.head}>Musée du Second Empire </Text>
            <Text style={styles.h1}>HORRAIRES </Text>
            <Text>Le Palais est ouvert tous les jours, sauf le mardi, 01/01, 01/05, 25/12 et certains jours fériés.</Text>
            <Text style={styles.h2}>Hiver ( Novembre à Mars ) </Text>
            <Text>Visite libre les mercredis, jeudis, samedis et dimanches de 10h à 12h et de 16h15 à 18h (dernière admission à 17h15). </Text>
            <Text style={styles.h2}>Eté ( Mars à Septembre ) </Text>
            <Text>Visite libre les mercredis, jeudis, samedis et dimanches de 10h à 12h. </Text>
            <Text style={styles.h1}>ADRESSE </Text>
            <Text>Palais de Compiègne {"\n"}
             Place du Général de Gaulle {"\n"}
             60200 - Compiègne {"\n"}
             GPS : 49°25’06, 34’’N002°49’48, 23’’E</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 5,
    marginRight: 5,
    marginTop : 30
  },
  head : {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  h1 : {
    fontWeight: 'bold',
    fontSize : 25
  },
  h2 : {
    fontSize : 20
  }
})

export default Infos
