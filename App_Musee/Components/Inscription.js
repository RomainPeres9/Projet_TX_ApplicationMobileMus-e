import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux'

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.prenomText = "",
    this.nomText = "",
    this.adresseMailText = "",
    this.ageText = "",

    this.state = {
      sexe: undefined,
      items: [
        {
          label: 'Homme',
          value: 'HOMME',
        },
        {
          label: 'Femme',
          value: 'FEMME',
        }
      ]
    }
  }

  _prenomTextInputChange(text) {
    this.prenomText = text
  }

  _nomTextInputChange(text) {
    this.nomText = text
  }

  _adresseMailTextInputChange(text) {
    this.adresseMailText = text
  }

  _ageTextInputChange(text) {
    this.ageText = text
  }


  _toggleProfil(url){
    const action={ type : "TOGGLE_PROFIL", value : url}
    this.props.dispatch(action)
  }

  _sendInscription() {
//Verifie adresse mail existe deja ou pas
    fetch('http://192.168.43.58:8000/authenticate/',{
         method:'POST',
         headers: {
      'Content-Type':'application/json',
         },
         body: JSON.stringify({
      email: this.adresseMailText
    })
      })
      .then((response) => response.json())
      .then((res) => {
    if(!res.url){ // si existe pas POST l'user
      fetch('http://192.168.43.58:8000/users/',{
         method:'POST',
         headers: {
      'Content-Type':'application/json',
         },
         body: JSON.stringify({
      nom: this.nomText ,
      prenom: this.prenomText ,
      email: this.adresseMailText ,
      age: this.ageText ,
      sexe: this.state.sexe
    })
      })
      .then((response) => response.json())
      .then((res) => {
    	this._toggleProfil(res.url)//passer l'url dans le state global
    	this.props.navigation.navigate("Menu")
      })
      .catch((error) => {console.log(error)})
  }
      })
      .catch((error) =>{
        console.error(error)
      })

  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <TextInput style={styles.textinput} placeholder="Prenom" placeholderTextColor='grey' onChangeText={(text) => this._prenomTextInputChange(text)}/>
          <TextInput style={styles.textinput} placeholder="Nom" placeholderTextColor='grey' onChangeText={(text) => this._nomTextInputChange(text)}/>
          <TextInput style={styles.textinput} placeholder="Adresse Mail" placeholderTextColor='grey' onChangeText={(text) => this._adresseMailTextInputChange(text)}/>
          <TextInput style={styles.textinput} placeholder="Age" placeholderTextColor='grey' onChangeText={(text) => this._ageTextInputChange(text)}/>
          <RNPickerSelect
                      style={{ ...pickerSelectStyles }}
                      placeholder={{
                          label: 'Sexe',
                          value: null,
                      }}
                      placeholderTextColor='grey'
                      items={this.state.items}
                      onValueChange={(value) => { this.setState({ sexe: value }); }}
                      value={this.state.sexe}
          />
        </View>
        <View style={styles.end}>
    	  <TouchableOpacity style={styles.Boutton1} onPress={() => this._sendInscription()}>
            <Text style={styles.TextBoutton}> Inscription </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  mainContainer:{
    flex : 1
  },
  content: {
    flex: 5,
    flexDirection: 'column',
    justifyContent : 'center',
    backgroundColor: '#FBF8EF'
  },
  end: {
    flex : 2,
    alignItems : 'center',
    backgroundColor: '#FBF8EF',
    flexDirection: 'column'
  },
  textinput: {
    height: 50,
    marginBottom: 20,
    marginLeft: 2,
    marginRight: 2,
    paddingLeft: 5,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#B45F04',
    borderRadius: 10,
    backgroundColor: '#FBF8EF',
    fontSize: 16,
    color: '#B45F04'
  },
  Boutton1: {
    height : 70,
    width : 200,
    justifyContent : 'center',
    backgroundColor: '#B45F04',
    marginTop : 15,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
  },
  TextBoutton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 50,
        marginBottom: 5,
        marginLeft: 2,
        marginRight : 2,
        textAlign: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderWidth: 3,
        borderColor: '#B45F04',
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#FBF8EF',
        color: '#B45F04',
    },
    inputAndroid: {
        height: 50,
        width: 150,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    }
});

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Inscription)
