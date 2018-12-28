import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
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
      console.log("Rechercher salope")
      const request='http://172.20.10.2:8000/oeuvresAutocomplete/?query=' + this.searchedText
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
      <View style={styles.main_container}>
        <View style={styles.top}>
          <TextInput style={styles.textinput} placeholder="Nom de l'oeuvre que vous recherchez" placeholderTextColor="#B45F04" onChangeText={(text) => this._searchedTextInputChange(text)} />
          <TouchableOpacity style={styles.Boutton1} onPress={() => this._loadOeuvres()}>
            <Text style={styles.TextBoutton}> Rechercher </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatList}>
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
  main_container: {
    flex: 1,
    backgroundColor: '#FBF8EF',
  },
  top:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    flex : 4,
    marginLeft: 15
  },
  textinput: {
    width : 350,
    height: 40,
    //marginTop: 50,
    marginTop: 5,
    marginBottom: 5,
    textAlign : 'center',
    color: '#B45F04',
    borderColor: '#B45F04',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 5
  },
  Boutton1: {
    height : 40,
    width : 150,
    textAlign : 'center',
    justifyContent: 'center',
    backgroundColor: '#B45F04',
    marginBottom : 15,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50
  },
  TextBoutton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Recherche
