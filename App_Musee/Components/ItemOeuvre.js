import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { getImageFromJSON } from '../Query/BDQueryJSON'

class ItemOeuvre extends React.Component {
    render() {
        const displayDetailForOeuvre = this.props.displayDetailForOeuvre
        const oeuvre = this.props.oeuvre
        console.log(oeuvre.image_path)

        return (
          <TouchableOpacity onPress={() => displayDetailForOeuvre(oeuvre.id, oeuvre.title, oeuvre.artiste, oeuvre.image_path, oeuvre.materiel, oeuvre.theme, oeuvre.date)} style={styles.content}>
              <Image
                style={styles.image}
                source={{uri: getImageFromJSON(oeuvre.image_path)}}
                //Le faire avec un require
                //source={require(getImageFromJSON(oeuvre.image_path))}
                //ForwardRef={oeuvre.image_path}
              />
              <View style={styles.details}>
                <Text style={styles.head}> {oeuvre.title} </Text>
                <Text> {oeuvre.artiste} </Text>
              </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 15,
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
