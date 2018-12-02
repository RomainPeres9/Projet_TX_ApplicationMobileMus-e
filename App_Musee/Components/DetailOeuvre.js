import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DetailOeuvre extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        oeuvre: undefined,
        isloading: true
      }
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

    //_ affichageDetail() {
    //
    // }
    //
    // componentDidMount() {
    //
    // }

    componentDidUpdate() {
      console.log(this.props.favoritesOeuvre);
      //console.log("salut!!")
    }

    _toggleFavorite() {
      const action = { type: "TOGGLE_FAVORITE", value: this.state.oeuvre  }
      this.props.dispatch(action)
    }

    _displayFavoriteImage() {
      var sourceImage = require('../Images/ic_favorite_border.png')
      if(this.props.favoritesOeuvre.findIndex(item => item.id === this.state.oeuvre.id) !== -1){
        //le film fait deja parti de nos favoris
        sourceImage = require('../Images/ic_favorite.png')
      }
      return (
        <Image source={sourceImage} style={styles.favorite_image}/>
      )
    }

    render() {
        //console.log(this.props);
        const oeuvre = this.props.navigation.state.params
        //console.log(oeuvre.artisteOeuvre)
        return (
          <View style={styles.content}>
            <View style={styles.header}>
              <Image style={styles.image} source={{uri: "image"}}></Image>
              <View style={styles.headercontent}>
                <Text style={styles.head}> {oeuvre.titleOeuvre} </Text>
                <Text> {oeuvre.artisteOeuvre} </Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text> Date : {oeuvre.dateOeuvre} </Text>
              <Text> Thème : {oeuvre.themeOeuvre} </Text>
              <Text> Matériel : {oeuvre.materielOeuvre} </Text>
            </View>
            <View style={styles.note}>
              <Text> *  *  *  *  * </Text>
              <TouchableOpacity onPress={() => this._toggleFavorite()} style={styles.favorite_container}>
                {this._displayFavoriteImage()}
              </TouchableOpacity>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    marginTop:3
  },
  header: {
    flex:3,
    flexDirection: 'row'
  },
  details: {
    marginTop : 5,
    flex:3
  },
  note:{
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
  image : {
    flex: 1,
    height:180,
    width:120,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'grey'
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
      alignItems: 'center'
  },
  favorite_image: {
    width: 40,
    height: 40
  }
})

//On connecte ici le state global aux props du component filmDetail
const mapStateToProps = (state) => {
  return {
    favoritesOeuvre: state.favoritesOeuvre
  }
}
export default connect(mapStateToProps)(DetailOeuvre)
