import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class ItemOeuvre extends React.Component {
    render() {
        const displayDetailForOeuvre = this.props.displayDetailForOeuvre
        const oeuvre = this.props.oeuvre

        return (
          <TouchableOpacity onPress={() => displayDetailForOeuvre(oeuvre.url, oeuvre.title, oeuvre.artiste, oeuvre.photo, oeuvre.materiel, oeuvre.theme, oeuvre.date)} style={styles.content}>
              <Image
                style={styles.image}
                source={{uri: oeuvre.photo}}
              />
              <View style={styles.details}>
                <Text style={styles.head}>{oeuvre.title}</Text>
                <Text style={styles.artiste}>{oeuvre.artiste}</Text>
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
    marginLeft:5,
    flex:3
  },
  image : {
    flex: 1,
    height:120,
    width:80,
    backgroundColor: '#B45F04'
  },
  head : {
    fontWeight: 'bold',
    fontSize: 16
  },
  artiste : {
    color: '#6C4202'
  }
})

export default ItemOeuvre
