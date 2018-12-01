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
          <View style={styles.content}>
            <View style={styles.header}>
              <Image style={styles.image} source={{uri: "image"}}></Image>
              <View style={styles.headercontent}>
                <Text style={styles.head}> {oeuvre.titleOeuvre} </Text>
                <Text> {oeuvre.artisteOeuvre} </Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text> Date: {oeuvre.dateOeuvre} </Text>
              <Text> {oeuvre.themeOeuvre} </Text>
              <Text> {oeuvre.materielOeuvre} </Text>
            </View>
            <View style={styles.note}>
              <Text> *  *  *  *  * </Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  content: {
    flex:1
  },
  header: {
    marginTop : 5,
    flex:4,
    flexDirection: 'row'
  },
  details: {
    marginTop : 5,
    flex:3
  },
  note:{
    height: 60,
    fontSize: 20
  },
  image : {
    flex: 1,
    height:180,
    width:120,
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
  }
})


export default DetailOeuvre
