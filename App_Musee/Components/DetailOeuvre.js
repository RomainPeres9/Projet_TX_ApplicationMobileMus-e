import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'

class DetailOeuvre extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        film: undefined,
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

    // _affichageDetail() {
    //
    // }
    //
    // componentDidMount() {
    //
    // }

    render() {
        const oeuvre = this.props.navigation.state.params

        console.log(oeuvre.artisteOeuvre)
        return (
          <View style={styles.contents}>
            <View style={styles.content}>
              <Image style={styles.image} source={{uri : 'image.png'}}></Image>
              <View style={styles.header}>
                <Text style={styles.head}> {oeuvre.titleOeuvre} </Text>
                <Text> {oeuvre.artisteOeuvre} </Text>
                <Text style={styles.date}> Date : {oeuvre.dateOeuvre} </Text>
                <Text> {oeuvre.themeOeuvre} </Text>
                <Text> {oeuvre.materielOeuvre} </Text>
              </View>
              <View style={styles.note}>
                <Text> *  *  *  *  * </Text>
              </View>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  contents: {
    backgroundColor: '#FBF8EF',
    flex:1
  },
  content: {
    marginLeft:15,
    marginRight: 15,
    flex:1
  },
  header: {
    marginTop : 5,
    flex:3
  },
  date: {
    textAlign: 'right'
  },
  note:{
    flex: 1,
    fontSize: 20
  },
  image : {
    flex: 1,
    height: 240,
    width: 160,
    backgroundColor: '#B45F04'
  },
  head : {
    fontWeight: 'bold',
    textAlign: 'center',
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
  }
})


export default DetailOeuvre
