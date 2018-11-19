import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ItemOeuvre extends React.Component {
    render() {
        const oeuvre = this.props.oeuvre
        return (
          <View style={styles.content}>
              <Image style={styles.image} source={{uri: '{oeuvre.image_path}'}}></Image>
              <View style={styles.details}>
                <Text style={styles.head}> {oeuvre.title} </Text>
                <Text> {oeuvre.artiste} </Text>
              </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  content: {
    marginTop : 30,
    flexDirection: 'row',
    flex:1
  },
  details: {
    flex:3
  },
  note:{
    height: 60,
    fontSize: 20
  },
  image : {
    flex: 1,
    height:120,
    width:80,
    backgroundColor: 'rosybrown'
  },

  head : {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ItemOeuvre
