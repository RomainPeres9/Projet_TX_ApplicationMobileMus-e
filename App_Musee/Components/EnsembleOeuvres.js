import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
//import oeuvres from '../Helpers/BDMusee.js'
//import AppBDMusee from '../Helpers/AppBDMusee.json'
import ItemOeuvre from './ItemOeuvre'

class EnsembleOeuvres extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.45:8000/oeuvres/')
      .then((response) => response.json())
      .then((responseJson) => {
	console.log(responseJson)

        this.setState({
          isLoading: false,
          oeuvres: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


_displayDetailForOeuvre = (idOeuvre, titleOeuvre, artisteOeuvre, imageOeuvre, materielOeuvre, themeOeuvre, dateOeuvre ) => {
    //console.log("idOeuvre: " + idOeuvre);
    this.props.navigation.navigate("DetailOeuvre", { urlOeuvre: url, titleOeuvre: title, artisteOeuvre: artiste, imageOeuvre: photo, materielOeuvre: materiel, themeOeuvre: theme, dateOeuvre: date })
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
