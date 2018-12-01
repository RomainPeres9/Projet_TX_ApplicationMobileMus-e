import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import oeuvres from '../Helpers/BDMusee.js'
import ItemOeuvre from './ItemOeuvre'
import { getOeuvreFromJSONwithsearchedText } from '../Query/BDQueryJSON'

class Recherche extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oeuvres: []
    },
    searchedText = ""
  }

  _loadOeuvres(){

  }

  render() {
    return (
    <View style={styles.main_container}>
      <TextInput style={styles.textinput} placeholder="Nom de l'oeuvre que vous recherchez"/>
      <Button style={styles.button} title='Rechercher' onPress={() => this._loadOeuvres()}/>
      <FlatList
        data={this.state.oeuvres}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ItemOeuvre oeuvre={item}/>}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    height: 50,
    borderColor: 'orange',
    borderWidth: 1,
    paddingLeft: 5
  },
  button : {
    height : 50,
    color : 'orange'
  }
})

export default Recherche
