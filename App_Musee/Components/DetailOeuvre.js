import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import RNPickerSelect from 'react-native-picker-select';

class DetailOeuvre extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        oeuvre: undefined,
        noteUser: undefined,
        items: [
          {
            label: '0',
            value: '0',
          },
          {
            label: '1',
            value: '1',
          },
          {
            label: '2',
            value: '2',
          },
          {
            label: '3',
            value: '3',
          },
          {
            label: '4',
            value: '4',
          },
          {
            label: '5',
            value: '5',
          }
        ]
      }
    }

    componentDidMount() {
      this.setState({
        oeuvre: this.props.navigation.state.params
      })
    }

    _sendNote(){
       const urlOeuvre=this.props.navigation.state.params.url
       const note=this.state.noteUser
       const urlProfil=this.props.profil.profil
       if (note){
           fetch('http://192.168.43.58:8000/notes/',{
               method:'POST',
               headers: { 'Content-Type':'application/json',},
               body: JSON.stringify({
                     valeur: note ,
                     oeuvre: urlOeuvre,
                     user: urlProfil,
               })
           })
          .catch((error) =>{
            console.error(error)
          })
        }
      }

    _displayOeuvre() {
      const oeuvre = this.state.oeuvre
      if (oeuvre != undefined) {
        return(
          <ScrollView style={styles.scrollview_container} contentContainerStyle={{flex:1}}>
            <View style={styles.header}>
              <Image style={styles.image} source={{uri: oeuvre.photo}}></Image>
              <View style={styles.headercontent}>
                <Text style={styles.head}> {oeuvre.title} </Text>
                <Text style= {styles.artiste}> {oeuvre.artiste} </Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.infoText}> Date : {oeuvre.date} </Text>
              <Text style={styles.infoText}> Thème : {oeuvre.theme} </Text>
              <Text style={styles.infoText}> Matériel : {oeuvre.materiel} </Text>
            </View>
            <View style={styles.note}>
              <TouchableOpacity onPress={() => this._toggleFavorite(this.state)} style={styles.favorite_container}>
                  {this._displayFavoriteImage()}
              </TouchableOpacity>
              <RNPickerSelect
                  style={{ ...pickerSelectStyles }}
                  placeholder={{
                    label: 'Note',
                    value: null,
                  }}
                  placeholderTextColor='grey'
                  items={this.state.items}
                  onValueChange={(value) => { this.setState({ noteUser: value }); }}
                  value={this.state.noteUser}
               />
               <TouchableOpacity style={styles.BouttonNoter} onPress={() => this._sendNote()}>
                 <Text style={styles.TextBoutton}> Noter </Text>
               </TouchableOpacity>
            </View>
          </ScrollView>
        )
      }
    }

    _toggleFavorite() {
      const action = { type: "TOGGLE_FAVORITE", value: this.state.oeuvre }
      this.props.dispatch(action)
    }

    _displayFavoriteImage() {
      var sourceImage = require('../Images/ic_favorite_border.png')
      if(this.props.favorites.favoritesOeuvre.findIndex(item => item.url === this.state.oeuvre.url) !== -1){
        //le film fait deja parti de nos favoris
        sourceImage = require('../Images/ic_favorite.png')
      }
      return (
        <Image source={sourceImage} style={styles.favorite_image}/>
      )
    }

    render() {
        const oeuvre = this.props.navigation.state.params
        return (
          <View style={styles.content}>
            {this._displayOeuvre()}
          </View>

        )
    }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FBF8EF',
    flex: 1
  },
  scrollview_container: {
    flex: 1,
    backgroundColor: '#FBF8EF'
  },
  header: {
    flex: 3,
    flexDirection: 'row'
  },
  details: {
    flex: 2
  },
  note:{
    flex: 3,
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 20
  },
  image : {
    height:180,
    width:120,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    backgroundColor: '#B45F04'
  },
  artiste : {
    color: '#B45F04',
    fontSize: 17,
    marginTop: 5
  },
  infoText: {
    color: '#B45F04',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 17
  },
  headercontent :{
    flex: 2,
    marginTop: 10
  },
  head : {
    fontWeight: 'bold',
    fontSize: 20
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favorite_container: {
    flex: 1,
    alignItems: 'center'
  },
  favorite_image: {
    width: 40,
    height: 40
  },
  BouttonNoter: {
    height : 40,
    width : 120,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: '#B45F04',
    marginBottom : 25,
    marginTop : 5,
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 50,
        marginBottom: 10,
        marginLeft: 4,
        marginRight : 4,
        textAlign: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderWidth: 3,
        borderColor: '#B45F04',
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#FBF8EF',
        color: 'grey'
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

//On connecte ici le state global aux props du component DetailOeuvre
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(DetailOeuvre)
