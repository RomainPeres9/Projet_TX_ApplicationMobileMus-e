import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Home extends React.Component {

  displayForInscription(){
    this.props.navigation.navigate("Inscription")
  }

  displayForConnexion(){
    this.props.navigation.navigate("Connexion")
  }

  render(){
    return(
      <View style={styles.content}>
        <TouchableOpacity style={styles.Boutton1} onPress={() => this.displayForConnexion()}>
          <Text style={styles.TextBoutton}> Connexion </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Boutton2} onPress={() => this.displayForInscription()}>
          <Text style={styles.TextBoutton}> Inscription </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: '#FBF8EF'
  },
  Boutton1: {
    height : 70,
    width : 300,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: '#B45F04',
    marginBottom : 15,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50
  },
  Boutton2:{
    height : 70,
    width : 300,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection: 'column',
    backgroundColor: '#B45F04',
    marginTop : 15,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50
  },
  TextBoutton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default Home

