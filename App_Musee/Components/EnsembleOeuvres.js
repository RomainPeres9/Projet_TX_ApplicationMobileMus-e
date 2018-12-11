import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import ItemOeuvre from './ItemOeuvre'

class EnsembleOeuvres extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      oeuvres: []
    }
  }

  componentDidMount(){
    return fetch('http://172.20.10.2:8000/oeuvres/')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        this.setState({
          isLoading: false,
          oeuvres: responseJson
        })
      })
      .catch((error) =>{
        console.error(error)
      })
  }


_displayDetailForOeuvre = (urlOeuvre, titleOeuvre, artisteOeuvre, imageOeuvre, materielOeuvre, themeOeuvre, dateOeuvre ) => {
    this.props.navigation.navigate("DetailOeuvre", { url: urlOeuvre, title: titleOeuvre, artiste: artisteOeuvre, photo: imageOeuvre, materiel: materielOeuvre, theme: themeOeuvre, date: dateOeuvre})
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.contents}>
        <View style={styles.main_container}>
          <FlatList
            data={this.state.oeuvres}
            keyExtractor={(item) => item.url}
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
