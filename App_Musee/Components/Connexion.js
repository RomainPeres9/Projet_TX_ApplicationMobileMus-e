import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Connexion extends React.Component {
  constructor(props) {
    super(props)
    this.adresseMailText = ""
  }

  _adresseMailTextInputChange(text) {
    this.adresseMailText = text
  }

  _toggleProfil(url){
    const action={ type : "TOGGLE_PROFIL", value : url}
    this.props.dispatch(action)
  }

  _verifyMail() {
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
  if(res.url){
    this._toggleProfil(res.url) //passer l'url dans le state global
    this.props.navigation.navigate("Menu")
  }
  else {
    this.props.navigation.navigate("ErreurConnexion")
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
          <TextInput style={styles.textinput} placeholder="Adresse Mail" placeholderTextColor='grey' onChangeText={(text) => this._adresseMailTextInputChange(text)}/>
        </View>
        <View style={styles.end}>
          <TouchableOpacity style={styles.Boutton1} onPress={() => this._verifyMail()}>
            <Text style={styles.TextBoutton}> Connexion </Text>
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
    flex : 3,
    alignItems : 'center',
    backgroundColor: '#FBF8EF',
    flexDirection: 'column'
  },
  textinput: {
    height: 50,
    marginTop: 75,
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
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderWidth: 3,
        borderColor: '#B45F04',
        borderRadius: 10,
        backgroundColor: '#FBF8EF',
        color: '#B45F04',
    },
    inputAndroid: {
        height: 50,
        width: 150,
        fontSize: 16,
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

export default connect(mapStateToProps)(Connexion)
