import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
//import oeuvres from '../Helpers/BDMusee.js'
//import AppBDMusee from '../Helpers/AppBDMusee.json'
import ItemOeuvre from './ItemOeuvre'

class EnsembleOeuvres extends React.Component {

  _displayDetailForOeuvre = (idOeuvre, titleOeuvre, artisteOeuvre, image_pathOeuvre, materielOeuvre, themeOeuvre, dateOeuvre ) => {
    //console.log("idOeuvre: " + idOeuvre);
    this.props.navigation.navigate("DetailOeuvre", { idOeuvre: idOeuvre, titleOeuvre: titleOeuvre, artisteOeuvre: artisteOeuvre, image_pathOeuvre: image_pathOeuvre, materielOeuvre: materielOeuvre, themeOeuvre: themeOeuvre, dateOeuvre: dateOeuvre })
  }

  render() {
    const appBDMusee = require('../Helpers/AppBDMusee.json')
    //console.log(appBDMusee.data)
    return (
      <View style={styles.contents}>
        <View style={styles.main_container}>
          <FlatList
            data={appBDMusee.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ItemOeuvre oeuvre={item} displayDetailForOeuvre={this._displayDetailForOeuvre}/>}
          />
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
  main_container: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  }
})

export default EnsembleOeuvres
