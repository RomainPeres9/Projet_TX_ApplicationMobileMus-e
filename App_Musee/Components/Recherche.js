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
    }
    this.searchedText = ""
  }



  _loadOeuvres(){
    if(this.searchedText.length > 0){
      const request='http://192.168.43.58:8000/oeuvresAutocomplete/?query='+this.searchedText
      return fetch(request)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        this.setState({
          oeuvres: responseJson
        })
      })
      .catch((error) =>{
        console.error(error)
      })
    }
  }

  _searchedTextInputChange(text) {
    this.searchedText = text
  }

  _displayDetailForOeuvre = (urlOeuvre, titleOeuvre, artisteOeuvre, imageOeuvre, materielOeuvre, themeOeuvre, dateOeuvre ) => {
    this.props.navigation.navigate("DetailOeuvre", { url: urlOeuvre, title: titleOeuvre, artiste: artisteOeuvre, photo: imageOeuvre, materiel: materielOeuvre, theme: themeOeuvre, date: dateOeuvre})
  }

  render() {
    return (
    <View style={styles.contents}>
    <View style={styles.main_container}>
      <TextInput onChangeText={(text) => this._searchedTextInputChange(text)} style={styles.textinput} placeholder="Nom de l'oeuvre que vous recherchez" />
      <Button style={styles.button} title='Rechercher' onPress={() => this._loadOeuvres()}/>
      <FlatList
        data={this.state.oeuvres}
        keyExtractor={(item) => item.url}
        renderItem={({item}) => <ItemOeuvre oeuvre={item}displayDetailForOeuvre={this._displayDetailForOeuvre}/>}
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
    flex: 1
  },
  textinput: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    height: 50,
    borderColor: 'orange',
    borderWidth: 1,
    paddingLeft: 5
  },
  button : {
    marginLeft: 5,
    marginRight: 5,
    height : 50,
    color : 'orange'
  }
})

export default Recherche
