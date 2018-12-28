import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.prenomText = "",
    this.nomText = "",
    this.adresseMailText = "",
    this.ageText = "",
    //this.inputRefs = {},

    this.state = {
      sexe: undefined,
      items: [
        {
          label: 'Homme',
          value: 'Homme',
        },
        {
          label: 'Femme',
          value: 'Femme',
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

  // _getOptionList() {
  //   return this.refs['OPTIONLIST'];
  // }

  // _sexeInputChange(choice) {
  //   this.sexe = choice
  // }

  _displayInscriptionForMenu() {
    this.props.navigation.navigate("Menu")
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <TextInput style={styles.textinput} placeholder="Prenom" placeholderTextColor='#B45F04' onChangeText={(text) => this._prenomTextInputChange(text)}/>
          <TextInput style={styles.textinput} placeholder="Nom" placeholderTextColor='#B45F04' onChangeText={(text) => this._nomTextInputChange(text)}/>
          <TextInput style={styles.textinput} placeholder="Adresse Mail" placeholderTextColor='#B45F04' onChangeText={(text) => this._adresseMailTextInputChange(text)}/>
          <TextInput style={styles.textinput} placeholder="Age" placeholderTextColor='#B45F04' onChangeText={(text) => this._ageTextInputChange(text)}/>
          <RNPickerSelect
                      style={{ ...pickerSelectStyles }}
                      placeholder={{
                          label: 'Sexe',
                          value: null,
                      }}
                      placeholderTextColor='#B45F04'
                      items={this.state.items}
                      onValueChange={(value) => { this.setState({ sexe: value }); }}
                      value={this.state.sexe}
                      //ref={(el) => { this.inputRefs.picker = el; }}
          />
        </View>
        <View style={styles.end}>
          <TouchableOpacity style={styles.Boutton1} onPress={() => this._displayInscriptionForMenu()}>
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
    //alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: '#FBF8EF'
    //backgroundColor: '#FBF8EF'
  },
  end: {
    flex : 2,
    //justifyContent : 'center',
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
    fontWeight: 'bold',
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


export default Inscription
