import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Menu extends React.Component {
    render() {
        return (
          <View style={styles.content}>
            <View style={styles.mainLeft}>
              <Text style={styles.titleMenu}> MENU </Text>
              <Text style={{color:'white', marginLeft:6, marginBottom:20}}> PROFIL </Text>
              <Text style={{color:'white', marginLeft:6, marginBottom:20}}> PLAN </Text>
              <Text style={{color:'white', marginLeft:6, marginBottom:20}}> RECHERCHE </Text>
              <Text style={{color:'white', marginLeft:6, marginBottom:20}}> OEUVRES </Text>
              <Text style={{color:'white', marginLeft:6, marginBottom:20}}> RECOMMENDATIONS </Text>
              <Text style={{color:'white', marginLeft:6, marginBottom:20}}> INFOS </Text>

            </View>
            <View style={styles.mainRight}></View>
          </View>
        )
      }
}

const styles = StyleSheet.create({
  content: {
    marginTop : 20,
    flexDirection : 'row',
    flex : 1
  },
  mainLeft: {
    flexDirection : 'column',
    backgroundColor : 'red',
    flex : 2
  },
  mainRight: {
    flexDirection : 'column',
    flex : 3
  },
  titleMenu: {
    textAlign:'center',
    marginTop : 10,
    marginBottom : 30,
    fontSize : 18,
    fontWeight : 'bold',
    color : 'white'
  }
})

export default Menu
