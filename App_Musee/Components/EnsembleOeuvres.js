import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import oeuvres from '../Helpers/BDMusee.js'
import ItemOeuvre from './ItemOeuvre'

class EnsembleOeuvres extends React.Component {

  _displayDetailForOeuvre = (idOeuvre) => {
    //console.log("idOeuvre: " + idOeuvre);
    this.props.navigation.navigate("DetailOeuvre")
  }

  render() {
    return (
    <View style={styles.main_container}>
      <FlatList
        data={oeuvres}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ItemOeuvre oeuvre={item} displayDetailForOeuvre={this._displayDetailForOeuvre}/>}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

export default EnsembleOeuvres
