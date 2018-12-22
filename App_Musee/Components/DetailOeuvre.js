import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
//import data from '../Helpers/AppBDMusee.json'

class DetailOeuvre extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        oeuvre: undefined,
        isloading: true //verifie si un fichier JSON est entrain d'étre chercher
      }
    }

    componentDidMount() {
      //console.log(this.props.navigation.state.params)
      this.setState({
        isloading: false, //le fichier a été trouvé
        oeuvre: this.props.navigation.state.params
      })
    }

    _displayLoading() {
      if(this.state.isloading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

    _displayOeuvre() {
      const oeuvre = this.state.oeuvre
      if (oeuvre != undefined) {
        return(
          <ScrollView style={styles.scrollview_container}>
            <View style={styles.header}>
              <Image style={styles.image} source={{uri: oeuvre.photo}}></Image>
              <View style={styles.headercontent}>
                <Text style={styles.head}> {oeuvre.title} </Text>
                <Text style= {styles.artiste}> {oeuvre.artiste} </Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text style={{color: '#6C4202'}}> Date : {oeuvre.date} </Text>
              <Text style={{color: '#6C4202'}}> Thème : {oeuvre.theme} </Text>
              <Text style={{color: '#6C4202'}}> Matériel : {oeuvre.materiel} </Text>
            </View>
            <View style={styles.note}>
              <TouchableOpacity onPress={() => this._toggleFavorite(this.state)} style={styles.favorite_container}>
                  {this._displayFavoriteImage()}
              </TouchableOpacity>
            </View>
          </ScrollView>
        )
      }
    }

    //Fait parti du cycle de vie Updating
    componentDidUpdate() {
      console.log(this.props.favoritesOeuvre);
    }

    _toggleFavorite() {
      const action = { type: "TOGGLE_FAVORITE", value: this.state.oeuvre }
      console.log(action.value.url)
      this.props.dispatch(action)
    }

    _displayFavoriteImage() {
      var sourceImage = require('../Images/ic_favorite_border.png')
      if(this.props.favoritesOeuvre.findIndex(item => item.url === this.state.oeuvre.url) !== -1){
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
            {this._displayLoading()}
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
    flex: 1
  },
  header: {
    flex: 2,
    flexDirection: 'row'
  },
  details: {
    flex: 5,
    marginTop : 30
  },
  note:{
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
  image : {
    height:180,
    width:120,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    backgroundColor: '#B45F04'
  },
  artiste : {
    color: '#6C4202'
  },
  headercontent :{
    flex: 2
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
  }
})

//On connecte ici le state global aux props du component DetailOeuvre
const mapStateToProps = (state) => {
  return {
    favoritesOeuvre: state.favoritesOeuvre
  }
}
export default connect(mapStateToProps)(DetailOeuvre)
